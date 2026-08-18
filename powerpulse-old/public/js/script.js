document.addEventListener("DOMContentLoaded", () => {
  // 🌙 --- Dark Mode Setup ---
  const themeToggle = document.getElementById("themeToggle");
  const body = document.body;
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.setAttribute("data-theme", "dark");
    themeToggle.textContent = "☀️ Light Mode";
  } else {
    themeToggle.textContent = "🌙 Dark Mode";
  }

  themeToggle.addEventListener("click", () => {
    if (body.getAttribute("data-theme") === "dark") {
      body.removeAttribute("data-theme");
      localStorage.setItem("theme", "light");
      themeToggle.textContent = "🌙 Dark Mode";
    } else {
      body.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
      themeToggle.textContent = "☀️ Light Mode";
    }
  });

  // ⚙️ --- Initialize Data Containers ---
  const meters = {
    grid: {
      voltage: { labels: [], R: [], Y: [], B: [] },
      current: { labels: [], R: [], Y: [], B: [] }
    },
    generator: {
      voltage: { labels: [], R: [], Y: [], B: [], avg: [] },
      current: { labels: [], R: [], Y: [], B: [] }
    }
  };

  // 🔗 --- WebSocket Connection ---
  const wsProtocol = window.location.protocol === "https:" ? "wss" : "ws";
  const ws = new WebSocket(`${wsProtocol}://${window.location.host}`);
  const connectionStatus = document.getElementById("connectionStatus");

  ws.onopen = () => {
    console.log("✅ WebSocket Connected");
    connectionStatus.textContent = "Connected";
    connectionStatus.style.background = "green";
  };

  ws.onclose = () => {
    connectionStatus.textContent = "Disconnected";
    connectionStatus.style.background = "red";
  };

  ws.onerror = (err) => {
    console.error("⚠️ WebSocket Error:", err);
    connectionStatus.textContent = "Error";
    connectionStatus.style.background = "#b45309";
  };

  // 📊 --- Chart.js Setup ---
  const chartConfigs = {};
  ["grid", "generator"].forEach(type => {
    const voltageDatasets = [
      { label: "R Phase (V)", data: [], borderColor: "red", fill: false },
      { label: "Y Phase (V)", data: [], borderColor: "orange", fill: false },
      { label: "B Phase (V)", data: [], borderColor: "blue", fill: false }
    ];

    if (type === "generator") {
      voltageDatasets.push({
        label: "Avg Voltage (V)",
        data: [],
        borderColor: "lime",
        borderDash: [5, 5],
        fill: false
      });
    }

    chartConfigs[`${type}VoltageChart`] = new Chart(document.getElementById(`${type}VoltageChart`), {
      type: "line",
      data: { labels: [], datasets: voltageDatasets },
      options: chartOptions()
    });

    chartConfigs[`${type}CurrentChart`] = new Chart(document.getElementById(`${type}CurrentChart`), {
      type: "line",
      data: {
        labels: [],
        datasets: [
          { label: "R Phase (A)", data: [], borderColor: "red", fill: false },
          { label: "Y Phase (A)", data: [], borderColor: "orange", fill: false },
          { label: "B Phase (A)", data: [], borderColor: "blue", fill: false }
        ]
      },
      options: chartOptions()
    });
  });

  // 🧠 --- WebSocket Data Handling ---
  ws.onmessage = (event) => {
    try {
      const msg = JSON.parse(event.data);
      if (msg.type !== "iot" || !msg.data) return;

      const parsed = msg.data;
      const { type, timestamp, ...sensor } = parsed;
      if (!["grid", "generator"].includes(type)) return;

      const ts = new Date(timestamp || Date.now()).toLocaleTimeString();
      console.log("📊 Dashboard Data Received:", sensor);

      updateDOM(type, sensor);

      // --- Update Charts ---
      if (sensor.voltage)
        updateMultiPhaseChart(chartConfigs[`${type}VoltageChart`], ts, sensor.voltage);

      if (sensor.avgVoltage !== undefined && type === "generator")
        updateSingleValue(chartConfigs["generatorVoltageChart"], ts, sensor.avgVoltage);

      if (sensor.current)
        updateMultiPhaseChart(chartConfigs[`${type}CurrentChart`], ts, sensor.current);
    } catch (err) {
      console.error("❌ Data parse error:", err);
    }
  };

  // 🖥️ --- Safe Update DOM ---
  function updateDOM(type, sensor) {
    console.log("📦 Parsed sensor data:", sensor);

    const voltage = sensor.voltage || {};
    const current = sensor.current || {};
    const pf = sensor.powerFactor ?? null;
    const thd = sensor.thd ?? null;
    const ap = sensor.activePower ?? sensor.avgActivePower ?? null;

    // --- Voltage ---
    if (voltage.R != null && voltage.Y != null && voltage.B != null) {
      document.getElementById(`${type}Voltage`).textContent =
        `R: ${(voltage.R ?? 0).toFixed(2)}V | Y: ${(voltage.Y ?? 0).toFixed(2)}V | B: ${(voltage.B ?? 0).toFixed(2)}V`;
    } else if (sensor.avgVoltage != null && type === "generator") {
      document.getElementById(`${type}Voltage`).textContent =
        `Avg: ${(sensor.avgVoltage ?? 0).toFixed(2)}V`;
    } else {
      document.getElementById(`${type}Voltage`).textContent = "-";
    }

    // --- Current ---
    if (current.R != null && current.Y != null && current.B != null) {
      document.getElementById(`${type}Current`).textContent =
        `R: ${(current.R ?? 0).toFixed(2)}A | Y: ${(current.Y ?? 0).toFixed(2)}A | B: ${(current.B ?? 0).toFixed(2)}A`;
    } else {
      document.getElementById(`${type}Current`).textContent = "-";
    }

    // --- Power Factor / THD ---
    document.getElementById(`${type}PowerFactor`).textContent =
      pf != null ? pf.toFixed(3) : "-";
    document.getElementById(`${type}THD`).textContent =
      thd != null ? `${thd.toFixed(2)}%` : "-";

    // --- Active Power (Grid = Avg only, Generator = R/Y/B + Avg)
    if (ap && typeof ap === "object") {
      const avg = ((ap.R ?? 0) + (ap.Y ?? 0) + (ap.B ?? 0)) / 3;
      document.getElementById(`${type}ActivePower`).textContent =
        type === "generator"
          ? `R: ${(ap.R ?? 0).toFixed(2)} W | Y: ${(ap.Y ?? 0).toFixed(2)} W | B: ${(ap.B ?? 0).toFixed(2)} W | Avg: ${avg.toFixed(2)} W`
          : `${avg.toFixed(2)} W`;
    } else if (typeof ap === "number") {
      document.getElementById(`${type}ActivePower`).textContent =
        `${ap.toFixed(2)} W`;
    } else {
      document.getElementById(`${type}ActivePower`).textContent = "-";
    }
  }

  // 📈 --- Chart Helpers ---
  function updateMultiPhaseChart(chart, label, newValues) {
    if (chart.data.labels.length >= 20) chart.data.labels.shift();
    chart.data.labels.push(label);

    const phases = ["R", "Y", "B"];
    phases.forEach((phase, i) => {
      if (chart.data.datasets[i]) {
        if (chart.data.datasets[i].data.length >= 20) chart.data.datasets[i].data.shift();
        chart.data.datasets[i].data.push(newValues[phase] ?? 0);
      }
    });

    chart.update("none");
  }

  function updateSingleValue(chart, label, value) {
    if (chart.data.labels.length >= 20) chart.data.labels.shift();
    chart.data.labels.push(label);

    const avgDataset = chart.data.datasets.find(d => d.label.includes("Avg Voltage"));
    if (avgDataset) {
      if (avgDataset.data.length >= 20) avgDataset.data.shift();
      avgDataset.data.push(value ?? 0);
    }

    chart.update("none");
  }

  function chartOptions() {
    return {
      responsive: true,
      animation: false,
      plugins: { legend: { labels: { color: "#fff" } } },
      scales: {
        x: { ticks: { color: "#fff" } },
        y: { ticks: { color: "#fff" } }
      }
    };
  }
});
