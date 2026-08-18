document.addEventListener("DOMContentLoaded", () => {
  /* 👤 --- LOAD USER PROFILE --- */
  fetch(window.API_BASE_URL + "/api/auth/me")
    .then((res) => res.json())
    .then((data) => {
      if (data.user) {
        const nameEl = document.getElementById("userName");
        if (nameEl) nameEl.textContent = data.user.name || data.user.email;
        if (data.user.role === "admin") {
          document.querySelectorAll(".admin-nav-item").forEach((n) => (n.style.display = ""));
        }
      }
    })
    .catch(() => { });

  /* 🌗 --- DARK / LIGHT MODE --- */
  const themeToggle = document.getElementById("themeToggle");
  const body = document.body;
  const savedTheme = localStorage.getItem("theme") || "dark";
  body.setAttribute("data-theme", savedTheme);
  themeToggle.textContent = savedTheme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode";
  themeToggle.addEventListener("click", () => {
    const current = body.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    body.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    themeToggle.textContent = next === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode";
  });

  /* 🧱 --- SIDEBAR TOGGLE --- */
  const sidebar = document.querySelector(".sidebar");
  const mainContent = document.querySelector(".main-content");
  const toggleSidebarBtn = document.getElementById("toggleSidebar");
  const isSidebarCollapsed = localStorage.getItem("sidebarCollapsed") === "true";
  if (isSidebarCollapsed) { sidebar.classList.add("collapsed"); mainContent.classList.add("expanded"); }
  toggleSidebarBtn?.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed"); mainContent.classList.toggle("expanded");
    localStorage.setItem("sidebarCollapsed", sidebar.classList.contains("collapsed"));
  });
  document.addEventListener("click", (event) => {
    const isClickInside = sidebar.contains(event.target) || toggleSidebarBtn.contains(event.target);
    if (!isClickInside && window.innerWidth <= 768) { sidebar.classList.add("collapsed"); mainContent.classList.add("expanded"); }
  });
  function handleResponsiveSidebar() {
    if (window.innerWidth < 1024) { sidebar.classList.add("collapsed"); mainContent.classList.add("expanded"); }
    else if (!isSidebarCollapsed) { sidebar.classList.remove("collapsed"); mainContent.classList.remove("expanded"); }
  }
  window.addEventListener("resize", handleResponsiveSidebar);
  handleResponsiveSidebar();

  /* 🍞 --- TOAST --- */
  function showToast(message, type = "info") {
    const container = document.getElementById("toastContainer");
    const toast = document.createElement("div");
    toast.className = `toast ${type}`;
    const icons = { success: "✅", error: "❌", info: "ℹ️" };
    toast.innerHTML = `<span>${icons[type] || ""}</span><span>${message}</span>`;
    container.appendChild(toast);
    setTimeout(() => {
      toast.style.animation = "toastSlideOut 0.35s ease forwards";
      setTimeout(() => toast.remove(), 350);
    }, 3500);
  }

  /* ============================================= */
  /* 📊 REPORT PARAMETERS CONFIGURATION            */
  /* ============================================= */
  const REPORT_PARAMS = [
    { id: "avgVoltage", label: "Avg Voltage (V)", icon: "⚡", group: "Electrical" },
    { id: "voltagePhase", label: "Phase Voltages (R,Y,B)", icon: "⚡", group: "Electrical" },
    { id: "avgCurrent", label: "Avg Current (A)", icon: "🔌", group: "Electrical" },
    { id: "avgActivePower", label: "Active Power (kW)", icon: "⚡", group: "Power" },
    { id: "apparentPower", label: "Apparent Power (kVA)", icon: "🔋", group: "Power" },
    { id: "powerFactor", label: "Power Factor", icon: "📐", group: "Power" },
    { id: "frequency", label: "Frequency (Hz)", icon: "⏱", group: "Power" },
    { id: "thdVoltage", label: "Voltage THD (%)", icon: "📊", group: "Quality" },
    { id: "thdCurrent", label: "Current THD (%)", icon: "📊", group: "Quality" },
    { id: "uptime", label: "Uptime & Availability", icon: "✅", group: "Operations" },
    { id: "switching", label: "Source Switching", icon: "🔄", group: "Operations" },
    { id: "consumption", label: "Energy Consumption (kWh)", icon: "⚡", group: "Costing" },
    { id: "kvah", label: "Apparent Energy (kVAh)", icon: "🔋", group: "Costing" },
  ];

  let selectedParams = REPORT_PARAMS.map(p => p.id); // All selected by default
  let switchLogLimit = 20; // default switching log limit
  let lastReportData = null;
  let lastRawData = { grid: [], generator: [] };
  let reportCharts = [];
  let appSettings = {};

  // Load settings
  async function loadSettings() {
    try {
      const res = await fetch(window.API_BASE_URL + "/api/settings", { credentials: "include" });
      if (res.ok) appSettings = await res.json();
    } catch (e) { /* use defaults */ }
  }
  loadSettings();

  // Build parameter checkboxes
  function buildParamChecks() {
    const container = document.getElementById("reportParamChecks");
    if (!container) return;
    let currentGroup = "";
    container.innerHTML = "";
    REPORT_PARAMS.forEach(p => {
      if (p.group !== currentGroup) {
        currentGroup = p.group;
        const groupLabel = document.createElement("div");
        groupLabel.className = "param-group-label";
        groupLabel.textContent = currentGroup;
        container.appendChild(groupLabel);
      }
      const label = document.createElement("label");
      label.className = "param-check-item";
      label.innerHTML = `<input type="checkbox" value="${p.id}" ${selectedParams.includes(p.id) ? "checked" : ""} /> <span>${p.icon} ${p.label}</span>`;
      label.querySelector("input").addEventListener("change", (e) => {
        if (e.target.checked) { if (!selectedParams.includes(p.id)) selectedParams.push(p.id); }
        else { selectedParams = selectedParams.filter(x => x !== p.id); }
        updateSwitchLimitRowState();
      });
      container.appendChild(label);
    });
  }
  buildParamChecks();

  // Wire switching log limit selector
  const switchLogLimitSelect = document.getElementById("switchLogLimit");
  switchLogLimitSelect?.addEventListener("change", () => {
    const val = switchLogLimitSelect.value;
    switchLogLimit = val === "all" ? Infinity : parseInt(val, 10);
  });

  // Dim the limit row when switching param is not selected
  function updateSwitchLimitRowState() {
    const row = document.getElementById("switchLogLimitRow");
    if (!row) return;
    const active = selectedParams.includes("switching");
    row.style.opacity = active ? "1" : "0.4";
    row.style.pointerEvents = active ? "" : "none";
  }
  updateSwitchLimitRowState();

  document.getElementById("paramSelectAll")?.addEventListener("click", () => {
    selectedParams = REPORT_PARAMS.map(p => p.id);
    document.querySelectorAll("#reportParamChecks input").forEach(cb => cb.checked = true);
    updateSwitchLimitRowState();
  });
  document.getElementById("paramDeselectAll")?.addEventListener("click", () => {
    selectedParams = [];
    document.querySelectorAll("#reportParamChecks input").forEach(cb => cb.checked = false);
    updateSwitchLimitRowState();
  });

  /* ============================================= */
  /* 📅 REPORT CONTROLS                            */
  /* ============================================= */
  const rangeSelect = document.getElementById("reportRange");
  const customDates = document.getElementById("customDates");
  const generateBtn = document.getElementById("generateBtn");

  rangeSelect?.addEventListener("change", () => {
    customDates.style.display = rangeSelect.value === "custom" ? "flex" : "none";
  });

  generateBtn?.addEventListener("click", async () => {
    const range = rangeSelect.value;
    const startDate = document.getElementById("reportStartDate")?.value;
    const endDate = document.getElementById("reportEndDate")?.value;
    if (range === "custom" && (!startDate || !endDate)) { showToast("Select both dates", "error"); return; }
    if (!selectedParams.length) { showToast("Select at least one parameter", "error"); return; }

    generateBtn.disabled = true;
    generateBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generating...';

    try {
      // Fetch data for both sources
      const [gridRes, genRes] = await Promise.all([
        fetch(window.API_BASE_URL + `/api/history/grid?range=${range}${range === "custom" ? `&start=${startDate}&end=${endDate}` : ""}&limit=all`, { credentials: "include" }),
        fetch(window.API_BASE_URL + `/api/history/generator?range=${range}${range === "custom" ? `&start=${startDate}&end=${endDate}` : ""}&limit=all`, { credentials: "include" }),
      ]);

      const gridData = gridRes.ok ? await gridRes.json() : { data: [] };
      const genData = genRes.ok ? await genRes.json() : { data: [] };

      lastRawData = { grid: gridData.data || [], generator: genData.data || [] };
      const report = computeReport(lastRawData.grid, lastRawData.generator, range, startDate, endDate);
      lastReportData = report;
      renderReport(report, range, startDate, endDate);

      document.getElementById("reportExportBar").style.display = "flex";
      document.getElementById("aiSummarySection").style.display = "";
      showToast("Report generated successfully", "success");
    } catch (err) {
      console.error("❌ Report generation error:", err);
      showToast("Failed to generate report: " + err.message, "error");
    }

    generateBtn.disabled = false;
    generateBtn.innerHTML = '<i class="fas fa-chart-bar"></i> Generate Report';
  });

  /* ============================================= */
  /* 🧮 COMPUTE REPORT DATA                        */
  /* ============================================= */
  function computeReport(gridData, genData, range, startDate, endDate) {
    const allData = [...gridData.map(d => ({ ...d, source: "grid" })), ...genData.map(d => ({ ...d, source: "generator" }))];
    allData.sort((a, b) => new Date(a.timestamp || a.sk) - new Date(b.timestamp || b.sk));

    const report = {};

    // Period
    const first = allData[0];
    const last = allData[allData.length - 1];
    if (first && last) {
      const startMs = new Date(first.timestamp || first.sk).getTime();
      const endMs = new Date(last.timestamp || last.sk).getTime();
      const durationMs = endMs - startMs;
      report.periodStart = new Date(startMs).toLocaleString();
      report.periodEnd = new Date(endMs).toLocaleString();
      report.periodDurationStr = formatDuration(durationMs);
      report.periodDurationMs = durationMs;
    } else {
      report.periodStart = "--";
      report.periodEnd = "--";
      report.periodDurationStr = "No data";
      report.periodDurationMs = 0;
    }

    report.totalRecords = allData.length;
    report.gridRecords = gridData.length;
    report.genRecords = genData.length;

    // Stats for each parameter
    function computeStats(data, field, getter) {
      const values = data.map(d => getter ? getter(d) : d[field]).filter(v => v != null && !isNaN(v));
      if (!values.length) return { min: null, max: null, avg: null, stdDev: null, count: 0 };
      const sum = values.reduce((a, b) => a + b, 0);
      const avg = sum / values.length;
      const variance = values.reduce((s, v) => s + Math.pow(v - avg, 2), 0) / values.length;
      return { min: Math.min(...values), max: Math.max(...values), avg, stdDev: Math.sqrt(variance), count: values.length };
    }

    // Grid stats
    report.grid = {
      avgVoltage: computeStats(gridData, "avgVoltage"),
      avgCurrent: computeStats(gridData, "avgCurrent"),
      avgActivePower: computeStats(gridData, "avgActivePower"),
      apparentPower: computeStats(gridData, "apparentPower"),
      powerFactor: computeStats(gridData, "powerFactor"),
      frequency: computeStats(gridData, "frequency"),
      thdVoltage: computeStats(gridData, null, d => d.thdVoltage?.R ?? d.thdVoltage ?? null),
      thdCurrent: computeStats(gridData, null, d => d.thdCurrent?.R ?? d.thdCurrent ?? null),
    };

    // Generator stats
    report.generator = {
      avgVoltage: computeStats(genData, "avgVoltage"),
      avgCurrent: computeStats(genData, "avgCurrent"),
      avgActivePower: computeStats(genData, "avgActivePower"),
      apparentPower: computeStats(genData, "apparentPower"),
      powerFactor: computeStats(genData, "powerFactor"),
      frequency: computeStats(genData, "frequency"),
      thdVoltage: computeStats(genData, null, d => d.thdVoltage?.R ?? d.thdVoltage ?? null),
      thdCurrent: computeStats(genData, null, d => d.thdCurrent?.R ?? d.thdCurrent ?? null),
    };

    // Read all costing rates from settings
    const r = appSettings.reports || {};
    const rate = r.electricityRate || 8;
    const kvahRate = r.kvahRate || 6;
    const currency = r.currency || "₹";
    const billingType = r.billingType || "kwh";

    // Power consumption — kWh (active energy)
    const gridAvgPower = report.grid.avgActivePower.avg || 0;
    const genAvgPower = report.generator.avgActivePower.avg || 0;
    const hours = (report.periodDurationMs || 0) / 3600000;

    const gridKwh = (gridAvgPower / 1000) * hours;
    const genKwh = (genAvgPower / 1000) * hours;
    const totalKwh = gridKwh + genKwh;

    report.consumption = {
      grid: { avgPower: gridAvgPower, kWh: gridKwh.toFixed(2), cost: (gridKwh * rate).toFixed(2) },
      generator: { avgPower: genAvgPower, kWh: genKwh.toFixed(2), cost: (genKwh * rate).toFixed(2) },
      total: { kWh: totalKwh.toFixed(2), cost: (totalKwh * rate).toFixed(2) },
    };

    // kVAh (apparent energy) — derived from apparent power
    const gridAvgKva = report.grid.apparentPower.avg || 0;
    const genAvgKva = report.generator.apparentPower.avg || 0;
    const gridKvah = (gridAvgKva / 1000) * hours;
    const genKvah = (genAvgKva / 1000) * hours;
    const totalKvah = gridKvah + genKvah;
    report.kvah = {
      grid: { kVAh: gridKvah.toFixed(2), cost: (gridKvah * kvahRate).toFixed(2) },
      generator: { kVAh: genKvah.toFixed(2), cost: (genKvah * kvahRate).toFixed(2) },
      total: { kVAh: totalKvah.toFixed(2), cost: (totalKvah * kvahRate).toFixed(2) },
    };

    report.rate = rate;
    report.kvahRate = kvahRate;
    report.currency = currency;
    report.billingType = billingType;

    // Source switching
    let switches = 0;
    let prevSource = null;
    let switchEvents = [];
    allData.forEach(d => {
      if (prevSource && d.source !== prevSource) {
        switches++;
        switchEvents.push({ time: d.timestamp || d.sk, from: prevSource, to: d.source });
      }
      prevSource = d.source;
    });
    report.totalSwitches = switches;
    report.switchEvents = switchLogLimit === Infinity ? switchEvents : switchEvents.slice(0, switchLogLimit); // Limit for display

    // Uptime (simplistic based on data gaps)
    let downtimePeriods = [];
    let totalDowntimeMs = 0;
    for (let i = 1; i < allData.length; i++) {
      const gap = new Date(allData[i].timestamp || allData[i].sk).getTime() - new Date(allData[i - 1].timestamp || allData[i - 1].sk).getTime();
      if (gap > 600000) { // 10 min gap = downtime
        totalDowntimeMs += gap;
        downtimePeriods.push({
          start: new Date(allData[i - 1].timestamp || allData[i - 1].sk).toLocaleString(),
          end: new Date(allData[i].timestamp || allData[i].sk).toLocaleString(),
          duration: formatDuration(gap),
        });
      }
    }
    report.totalDowntimeMs = totalDowntimeMs;
    report.totalDowntimeStr = formatDuration(totalDowntimeMs);
    report.uptimePercent = report.periodDurationMs ? ((1 - totalDowntimeMs / report.periodDurationMs) * 100).toFixed(1) : "N/A";
    report.downtimePeriods = downtimePeriods;

    // Messages per minute
    report.messagesPerMin = report.periodDurationMs ? (allData.length / (report.periodDurationMs / 60000)).toFixed(2) : "N/A";

    return report;
  }

  function formatDuration(ms) {
    if (!ms || ms <= 0) return "0s";
    const hours = Math.floor(ms / 3600000);
    const minutes = Math.floor((ms % 3600000) / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const parts = [];
    if (hours > 0) parts.push(`${hours}h`);
    if (minutes > 0) parts.push(`${minutes}m`);
    if (seconds > 0 || !parts.length) parts.push(`${seconds}s`);
    return parts.join(" ");
  }

  /* ============================================= */
  /* 🎨 RENDER REPORT                              */
  /* ============================================= */
  function renderReport(report, range, startDate, endDate) {
    const output = document.getElementById("reportOutput");
    const periodLabel = range === "custom" ? `${startDate} to ${endDate}` : `Last ${range}`;

    // Destroy old charts
    reportCharts.forEach(c => c.destroy());
    reportCharts = [];

    let html = "";

    // Header
    html += `
    <div class="report-header-info">
      <h3><i class="fas fa-file-alt"></i> ${appSettings.reports?.companyName || "PowerPulse"} — Power Analysis Report</h3>
      <span class="report-period">📅 ${periodLabel} | ${report.periodStart} → ${report.periodEnd}</span>
    </div>`;

    // Overview Cards
    html += `<div class="overview-cards">
      <div class="overview-card"><div class="card-icon">📊</div><div class="card-value">${report.totalRecords}</div><div class="card-label">Total Records</div></div>
      <div class="overview-card"><div class="card-icon">⏱</div><div class="card-value">${report.periodDurationStr}</div><div class="card-label">Period Duration</div></div>
      <div class="overview-card"><div class="card-icon">✅</div><div class="card-value">${report.uptimePercent}%</div><div class="card-label">System Uptime</div></div>
      <div class="overview-card"><div class="card-icon">🔄</div><div class="card-value">${report.totalSwitches}</div><div class="card-label">Source Switches</div></div>
      <div class="overview-card"><div class="card-icon">⬇️</div><div class="card-value">${report.totalDowntimeStr}</div><div class="card-label">Total Downtime</div></div>
      <div class="overview-card"><div class="card-icon">📡</div><div class="card-value">${report.messagesPerMin}</div><div class="card-label">Messages/Min</div></div>
    </div>`;

    // Consumption summary (if parameter selected)
    if (selectedParams.includes("consumption")) {
      const c = report.consumption;
      const showCost = appSettings.reports?.includeCost !== false;
      html += `
      <div class="report-table-section">
        <h3>⚡ Active Energy (kWh) ${showCost ? '& Cost' : ''}</h3>
        <table class="report-table">
          <thead><tr><th>Source</th><th>Avg Power</th><th>Consumption (kWh)</th>${showCost ? '<th>Estimated Cost</th>' : ''}</tr></thead>
          <tbody>
            <tr><td>⚡ Grid</td><td>${formatPower(c.grid.avgPower)}</td><td>${c.grid.kWh} kWh</td>${showCost ? `<td>${report.currency}${c.grid.cost}</td>` : ''}</tr>
            <tr><td>🔧 Generator</td><td>${formatPower(c.generator.avgPower)}</td><td>${c.generator.kWh} kWh</td>${showCost ? `<td>${report.currency}${c.generator.cost}</td>` : ''}</tr>
            <tr style="font-weight:700;"><td>📊 Total</td><td>—</td><td>${c.total.kWh} kWh</td>${showCost ? `<td>${report.currency}${c.total.cost}</td>` : ''}</tr>
          </tbody>
        </table>
        ${showCost ? `<small style="color:#64748b;">Rate: ${report.currency}${report.rate}/kWh</small>` : ''}
      </div>`;
    }

    // kVAh — apparent energy
    const showKvahSection = selectedParams.includes("kvah") && appSettings.reports?.includeKvah !== false;
    if (showKvahSection && report.kvah) {
      const kv = report.kvah;
      html += `
      <div class="report-table-section">
        <h3>🔋 Apparent Energy (kVAh) &amp; Cost</h3>
        <table class="report-table">
          <thead><tr><th>Source</th><th>kVAh</th><th>Cost</th></tr></thead>
          <tbody>
            <tr><td>⚡ Grid</td><td>${kv.grid.kVAh} kVAh</td><td>${report.currency}${kv.grid.cost}</td></tr>
            <tr><td>🔧 Generator</td><td>${kv.generator.kVAh} kVAh</td><td>${report.currency}${kv.generator.cost}</td></tr>
            <tr style="font-weight:700;"><td>📊 Total</td><td>${kv.total.kVAh} kVAh</td><td>${report.currency}${kv.total.cost}</td></tr>
          </tbody>
        </table>
        <small style="color:#64748b;">Rate: ${report.currency}${report.kvahRate}/kVAh</small>
      </div>`;
    }

    // Statistical tables for selected params
    const statParams = [
      { id: "avgVoltage", label: "Avg Voltage", unit: "V" },
      { id: "avgCurrent", label: "Avg Current", unit: "A" },
      { id: "avgActivePower", label: "Active Power", unit: "W" },
      { id: "apparentPower", label: "Apparent Power", unit: "VA" },
      { id: "powerFactor", label: "Power Factor", unit: "" },
      { id: "frequency", label: "Frequency", unit: "Hz" },
      { id: "thdVoltage", label: "Voltage THD", unit: "%" },
      { id: "thdCurrent", label: "Current THD", unit: "%" },
    ];

    const selectedStats = statParams.filter(p => selectedParams.includes(p.id));
    if (selectedStats.length) {
      html += `
      <div class="report-table-section">
        <h3>📐 Statistical Analysis (Grid vs Generator)</h3>
        <table class="report-table">
          <thead><tr><th>Parameter</th><th colspan="4" style="text-align:center;">⚡ Grid</th><th colspan="4" style="text-align:center;">🔧 Generator</th></tr>
          <tr><th></th><th>Min</th><th>Max</th><th>Avg</th><th>Std Dev</th><th>Min</th><th>Max</th><th>Avg</th><th>Std Dev</th></tr></thead>
          <tbody>${selectedStats.map(p => {
        const g = report.grid[p.id] || {};
        const gen = report.generator[p.id] || {};
        const fmt = (v, d = 2) => v != null ? Number(v).toFixed(d) : "—";
        return `<tr>
              <td><strong>${p.label}</strong> ${p.unit ? `(${p.unit})` : ""}</td>
              <td>${fmt(g.min)}</td><td>${fmt(g.max)}</td><td>${fmt(g.avg)}</td><td>${fmt(g.stdDev)}</td>
              <td>${fmt(gen.min)}</td><td>${fmt(gen.max)}</td><td>${fmt(gen.avg)}</td><td>${fmt(gen.stdDev)}</td>
            </tr>`;
      }).join("")}</tbody>
        </table>
      </div>`;
    }

    // Charts
    html += `<div class="charts-grid" id="reportChartsGrid">`;

    // Source distribution pie — always shown
    html += `<div class="chart-card"><h3>⚡ Energy Source Distribution</h3><div class="chart-container"><canvas id="reportPieChart"></canvas></div></div>`;

    // Selected trend charts
    const trendConfigs = [
      { id: "avgVoltage", label: "Voltage Trends (V)", color: "#6366f1" },
      { id: "avgCurrent", label: "Current Trends (A)", color: "#f59e0b" },
      { id: "avgActivePower", label: "Active Power Trends", color: "#10b981" },
      { id: "powerFactor", label: "Power Factor Trends", color: "#ec4899" },
      { id: "frequency", label: "Frequency Trends (Hz)", color: "#14b8a6" },
    ];

    const selectedTrends = trendConfigs.filter(t => selectedParams.includes(t.id));
    selectedTrends.forEach(t => {
      html += `<div class="chart-card full-width"><h3>📈 ${t.label}</h3><div class="chart-container"><canvas id="reportChart_${t.id}"></canvas></div></div>`;
    });

    html += `</div>`;

    // Downtime incidents
    if (selectedParams.includes("uptime") && report.downtimePeriods.length) {
      html += `
      <div class="report-table-section">
        <h3>⬇️ Downtime Incidents (${report.downtimePeriods.length})</h3>
        <table class="report-table">
          <thead><tr><th>#</th><th>Started</th><th>Ended</th><th>Duration</th></tr></thead>
          <tbody>${report.downtimePeriods.map((d, i) => `<tr><td>${i + 1}</td><td>${d.start}</td><td>${d.end}</td><td>${d.duration}</td></tr>`).join("")}</tbody>
        </table>
      </div>`;
    }

    // Source switching log
    if (selectedParams.includes("switching") && report.switchEvents.length) {
      html += `
      <div class="report-table-section">
        <h3>🔄 Source Switching Log (${report.totalSwitches} total, showing ${switchLogLimit === Infinity ? "all" : report.switchEvents.length})</h3>
        <table class="report-table">
          <thead><tr><th>#</th><th>Time</th><th>From</th><th>To</th></tr></thead>
          <tbody>${report.switchEvents.map((s, i) => `<tr><td>${i + 1}</td><td>${new Date(s.time).toLocaleString()}</td><td>${s.from === "grid" ? "⚡ Grid" : "🔧 Generator"}</td><td>${s.to === "grid" ? "⚡ Grid" : "🔧 Generator"}</td></tr>`).join("")}</tbody>
        </table>
      </div>`;
    }

    output.innerHTML = html;

    // Render charts after DOM update
    setTimeout(() => renderReportCharts(report, range), 100);
  }

  function formatPower(val) {
    if (val == null) return "—";
    return Math.abs(val) >= 1000 ? `${(val / 1000).toFixed(2)} kW` : `${Number(val).toFixed(2)} W`;
  }

  function renderReportCharts(report, range) {
    // Source distribution pie — always shown, uses record counts
    const pieCanvas = document.getElementById("reportPieChart");
    if (pieCanvas) {
      reportCharts.push(new Chart(pieCanvas, {
        type: "doughnut",
        data: {
          labels: ["Grid", "Generator"],
          datasets: [{
            data: [report.gridRecords, report.genRecords],
            backgroundColor: ["#6366f1", "#f59e0b"], borderWidth: 0, hoverOffset: 8
          }]
        },
        options: {
          responsive: true, maintainAspectRatio: false,
          plugins: {
            legend: { position: "bottom", labels: { color: "#94a3b8", padding: 16 } },
            tooltip: {
              callbacks: {
                label: ctx => ` ${ctx.label}: ${ctx.parsed} records (${((ctx.parsed / (report.gridRecords + report.genRecords)) * 100).toFixed(1)}%)`
              }
            }
          }
        }
      }));
    }

    // Trend charts
    const trendConfigs = [
      { id: "avgVoltage", label: "Avg Voltage", color: "#6366f1" },
      { id: "avgCurrent", label: "Avg Current", color: "#f59e0b" },
      { id: "avgActivePower", label: "Active Power", color: "#10b981" },
      { id: "powerFactor", label: "Power Factor", color: "#ec4899" },
      { id: "frequency", label: "Frequency", color: "#14b8a6" },
    ];

    trendConfigs.forEach(cfg => {
      const canvas = document.getElementById(`reportChart_${cfg.id}`);
      if (!canvas) return;

      const gridLabels = lastRawData.grid.map(d => formatChartTime(d.timestamp || d.sk, range));
      const genLabels = lastRawData.generator.map(d => formatChartTime(d.timestamp || d.sk, range));
      const gridVals = lastRawData.grid.map(d => d[cfg.id] ?? null);
      const genVals = lastRawData.generator.map(d => d[cfg.id] ?? null);

      // Merge into unified timeline
      const allTimes = [...new Set([...lastRawData.grid.map(d => d.timestamp || d.sk), ...lastRawData.generator.map(d => d.timestamp || d.sk)])].sort();
      const labels = allTimes.map(t => formatChartTime(t, range));
      const gridSeries = allTimes.map(t => { const item = lastRawData.grid.find(d => (d.timestamp || d.sk) === t); return item ? item[cfg.id] ?? null : null; });
      const genSeries = allTimes.map(t => { const item = lastRawData.generator.find(d => (d.timestamp || d.sk) === t); return item ? item[cfg.id] ?? null : null; });

      reportCharts.push(new Chart(canvas, {
        type: "line",
        data: {
          labels,
          datasets: [
            { label: `Grid ${cfg.label}`, data: gridSeries, borderColor: cfg.color, backgroundColor: cfg.color + "18", borderWidth: 2, tension: 0.3, fill: true, pointRadius: 1 },
            { label: `Generator ${cfg.label}`, data: genSeries, borderColor: "#f59e0b", backgroundColor: "#f59e0b18", borderWidth: 2, tension: 0.3, fill: true, pointRadius: 1 },
          ]
        },
        options: {
          responsive: true, maintainAspectRatio: false,
          plugins: { legend: { labels: { color: "#94a3b8" } }, tooltip: { mode: "index", intersect: false } },
          scales: {
            x: { ticks: { color: "#94a3b8", maxTicksLimit: 15, maxRotation: 45 }, grid: { color: "rgba(148,163,184,0.1)" } },
            y: { ticks: { color: "#94a3b8" }, grid: { color: "rgba(148,163,184,0.1)" } },
          }
        }
      }));
    });
  }

  function formatChartTime(isoString, range) {
    const d = new Date(isoString);
    if (range === "daily") return d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    if (range === "weekly") return d.toLocaleDateString([], { weekday: "short", month: "short", day: "numeric" });
    return d.toLocaleDateString([], { month: "short", day: "numeric" });
  }

  /* ============================================= */
  /* 📥 EXPORT: PDF, CSV, PRINT                    */
  /* ============================================= */
  document.getElementById("downloadPDFBtn")?.addEventListener("click", async () => {
    const btn = document.getElementById("downloadPDFBtn");
    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generating PDF...';

    try {
      const { jsPDF } = window.jspdf;
      const pdf = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
      const pageW = pdf.internal.pageSize.getWidth();
      const pageH = pdf.internal.pageSize.getHeight();
      const margin = 15;
      let y = margin;

      const companyName = appSettings.reports?.companyName || "PowerPulse";
      const currency = appSettings.reports?.currency || "₹";

      // Sanitize text for jsPDF (Helvetica doesn't support ₹, ⚡, emojis, em dash, etc.)
      function sanitize(str) {
        return String(str)
          .replace(/₹/g, 'Rs.')
          .replace(/—/g, '-')
          .replace(/→/g, '->')
          .replace(/⚡/g, '[Lightning]')
          .replace(/[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu, '')
          .replace(/[^\x00-\x7F]/g, (ch) => {
            // Keep common Latin-1 chars, replace others
            const code = ch.charCodeAt(0);
            return (code >= 160 && code <= 255) ? ch : '';
          });
      }

      // ─── COVER PAGE ───
      pdf.setFillColor(15, 23, 42);
      pdf.rect(0, 0, pageW, pageH, "F");

      pdf.setTextColor(99, 102, 241);
      pdf.setFontSize(28);
      pdf.setFont("helvetica", "bold");
      pdf.text(companyName, pageW / 2, 70, { align: "center" });
      pdf.setFontSize(16);
      pdf.setTextColor(148, 163, 184);
      pdf.text("Power Analysis Report", pageW / 2, 85, { align: "center" });

      pdf.setFontSize(11);
      pdf.setTextColor(226, 232, 240);
      const report = lastReportData;
      pdf.text(sanitize(`Period: ${report.periodStart} - ${report.periodEnd}`), pageW / 2, 115, { align: "center" });
      pdf.text(sanitize(`Duration: ${report.periodDurationStr}`), pageW / 2, 125, { align: "center" });
      pdf.text(sanitize(`Generated: ${new Date().toLocaleString()}`), pageW / 2, 135, { align: "center" });

      pdf.setTextColor(100, 116, 139);
      pdf.setFontSize(9);
      pdf.text("Confidential - For Internal Use Only", pageW / 2, pageH - 20, { align: "center" });

      // ─── CONTENT PAGES — CAPTURE REPORT ───
      pdf.addPage();
      y = margin;

      // Helper to add text (sanitized for jsPDF font compatibility)
      function addText(text, size = 10, color = [226, 232, 240], bold = false) {
        const safeText = sanitize(text);
        pdf.setFontSize(size);
        pdf.setTextColor(...color);
        pdf.setFont("helvetica", bold ? "bold" : "normal");
        const lines = pdf.splitTextToSize(safeText, pageW - 2 * margin);
        lines.forEach(line => {
          if (y > pageH - 20) {
            addFooter();
            pdf.addPage();
            y = margin;
            pdf.setFillColor(30, 41, 59);
            pdf.rect(0, 0, pageW, pageH, "F");
          }
          pdf.text(line, margin, y);
          y += size * 0.45;
        });
        y += 2;
      }

      function addFooter() {
        const pageNum = pdf.getNumberOfPages();
        pdf.setFontSize(8);
        pdf.setTextColor(100, 116, 139);
        pdf.text(sanitize(`${companyName} - Power Analysis Report`), margin, pageH - 8);
        pdf.text(`Page ${pageNum}`, pageW - margin, pageH - 8, { align: "right" });
      }

      // Page 2: Overview
      pdf.setFillColor(30, 41, 59);
      pdf.rect(0, 0, pageW, pageH, "F");

      addText("EXECUTIVE OVERVIEW", 16, [99, 102, 241], true);
      y += 4;
      addText(`Total Records: ${report.totalRecords}   |   Uptime: ${report.uptimePercent}%   |   Switches: ${report.totalSwitches}`);
      addText(`Duration: ${report.periodDurationStr}   |   Downtime: ${report.totalDowntimeStr}   |   Msg/Min: ${report.messagesPerMin}`);
      y += 6;

      // ── Table drawing helper ──
      function addTable(headers, rows, colWidths) {
        const tableW = pageW - 2 * margin;
        const cellH = 8;
        const fontSize = 8;
        const cols = headers.length;
        // Auto-calculate column widths if not provided
        if (!colWidths) {
          const w = tableW / cols;
          colWidths = headers.map(() => w);
        }

        // Check if table fits, else new page
        const totalH = (rows.length + 1) * cellH + 4;
        if (y + totalH > pageH - 20) {
          addFooter();
          pdf.addPage();
          y = margin;
          pdf.setFillColor(30, 41, 59);
          pdf.rect(0, 0, pageW, pageH, "F");
        }

        // Draw header row
        pdf.setFillColor(30, 41, 59);
        pdf.rect(margin, y, tableW, cellH, "F");
        pdf.setDrawColor(71, 85, 105);
        pdf.rect(margin, y, tableW, cellH, "S");
        pdf.setFontSize(fontSize);
        pdf.setFont("helvetica", "bold");
        pdf.setTextColor(165, 180, 252);  // purple-ish header
        let xPos = margin;
        headers.forEach((h, i) => {
          pdf.text(sanitize(h), xPos + 3, y + 5.5);
          xPos += colWidths[i];
        });
        y += cellH;

        // Draw data rows
        rows.forEach((row, rowIdx) => {
          // Alternating row background
          if (rowIdx % 2 === 0) {
            pdf.setFillColor(26, 36, 50);
          } else {
            pdf.setFillColor(22, 31, 44);
          }
          pdf.rect(margin, y, tableW, cellH, "F");
          pdf.setDrawColor(51, 65, 85);
          pdf.rect(margin, y, tableW, cellH, "S");

          pdf.setFontSize(fontSize);
          pdf.setFont("helvetica", "normal");

          xPos = margin;
          row.forEach((cell, i) => {
            // First column = label color, rest = value color
            if (i === 0) {
              pdf.setTextColor(226, 232, 240);
              pdf.setFont("helvetica", "bold");
            } else {
              pdf.setTextColor(226, 232, 240);
              pdf.setFont("helvetica", "normal");
            }
            // Highlight total rows
            if (row[0] && String(row[0]).toLowerCase().includes("total")) {
              pdf.setTextColor(56, 189, 248);
              pdf.setFont("helvetica", "bold");
            }
            pdf.text(sanitize(String(cell)), xPos + 3, y + 5.5);
            xPos += colWidths[i];
          });
          y += cellH;
        });
        y += 4;
      }

      // Consumption (kWh) — proper table
      if (selectedParams.includes("consumption")) {
        const showCost = appSettings.reports?.includeCost !== false;
        addText("ACTIVE ENERGY (kWh)", 14, [99, 102, 241], true);
        y += 2;

        const cHeaders = showCost ? ["Source", "Avg Power", "Consumption (kWh)", "Estimated Cost"] : ["Source", "Consumption (kWh)"];
        const cWidths = showCost ? [45, 40, 45, 50] : [90, 90];
        const cRows = [];
        const gridP = report.grid?.avgActivePower?.avg != null ? Number(report.grid.avgActivePower.avg).toFixed(2) + " W" : "--";
        const genP = report.generator?.avgActivePower?.avg != null ? Number(report.generator.avgActivePower.avg).toFixed(2) + " W" : "--";
        if (showCost) {
          cRows.push(["Grid", gridP, report.consumption.grid.kWh + " kWh", currency + report.consumption.grid.cost]);
          cRows.push(["Generator", genP, report.consumption.generator.kWh + " kWh", currency + report.consumption.generator.cost]);
          cRows.push(["Total", "--", report.consumption.total.kWh + " kWh", currency + report.consumption.total.cost]);
        } else {
          cRows.push(["Grid", report.consumption.grid.kWh + " kWh"]);
          cRows.push(["Generator", report.consumption.generator.kWh + " kWh"]);
          cRows.push(["Total", report.consumption.total.kWh + " kWh"]);
        }
        addTable(cHeaders, cRows, cWidths);
        y += 2;
      }

      // kVAh — proper table
      if (selectedParams.includes("kvah") && appSettings.reports?.includeKvah !== false && report.kvah) {
        addText("APPARENT ENERGY (kVAh)", 14, [99, 102, 241], true);
        y += 2;

        const kHeaders = ["Source", "kVAh", "Cost"];
        const kWidths = [60, 60, 60];
        const kRows = [
          ["Grid", report.kvah.grid.kVAh + " kVAh", currency + report.kvah.grid.cost],
          ["Generator", report.kvah.generator.kVAh + " kVAh", currency + report.kvah.generator.cost],
          ["Total", report.kvah.total.kVAh + " kVAh", currency + report.kvah.total.cost],
        ];
        addTable(kHeaders, kRows, kWidths);
        y += 2;
      }

      // Statistical Summary — proper table
      addText("STATISTICAL SUMMARY", 14, [99, 102, 241], true);
      y += 2;
      const statHeaders = ["Parameter", "Grid Min", "Grid Max", "Grid Avg", "Gen Min", "Gen Max", "Gen Avg"];
      const statWidths = [36, 24, 24, 24, 24, 24, 24];
      const statRows = [];
      const statParams2 = ["avgVoltage", "avgCurrent", "avgActivePower", "powerFactor", "frequency"];
      const paramLabels = { avgVoltage: "Avg Voltage (V)", avgCurrent: "Avg Current (A)", avgActivePower: "Active Power (W)", powerFactor: "Power Factor", frequency: "Frequency (Hz)" };
      statParams2.forEach(key => {
        if (!selectedParams.includes(key)) return;
        const g = report.grid[key] || {};
        const gen = report.generator[key] || {};
        const fmt = v => v != null ? Number(v).toFixed(2) : "--";
        statRows.push([paramLabels[key] || key, fmt(g.min), fmt(g.max), fmt(g.avg), fmt(gen.min), fmt(gen.max), fmt(gen.avg)]);
      });
      addTable(statHeaders, statRows, statWidths);

      // Capture charts as images
      y += 8;
      addText("CHARTS & VISUALIZATIONS", 14, [99, 102, 241], true);

      const chartGrid = document.getElementById("reportChartsGrid");
      if (chartGrid) {
        const canvases = chartGrid.querySelectorAll("canvas");
        for (const canvas of canvases) {
          try {
            const imgData = canvas.toDataURL("image/png");
            if (y > pageH - 80) { addFooter(); pdf.addPage(); y = margin; pdf.setFillColor(30, 41, 59); pdf.rect(0, 0, pageW, pageH, "F"); }
            const imgW = pageW - 2 * margin;
            const imgH = (canvas.height / canvas.width) * imgW;
            pdf.addImage(imgData, "PNG", margin, y, imgW, Math.min(imgH, 80));
            y += Math.min(imgH, 80) + 8;
          } catch (e) { console.warn("Chart capture failed:", e); }
        }
      }

      // AI Summary page (if available) — capture as image to preserve styling
      const aiOutput = document.getElementById("aiSummaryOutput");
      if (aiOutput && aiOutput.style.display !== "none" && aiOutput.textContent.trim()) {
        addFooter();
        pdf.addPage();
        y = margin;
        pdf.setFillColor(30, 41, 59);
        pdf.rect(0, 0, pageW, pageH, "F");
        addText("AI-POWERED ANALYSIS", 16, [99, 102, 241], true);
        y += 4;

        try {
          // Use html2canvas to capture the AI summary with all styling intact
          const aiContent = aiOutput.querySelector(".ai-summary-content") || aiOutput;
          const canvas = await html2canvas(aiContent, {
            backgroundColor: "#1e293b",
            scale: 2,           // higher quality
            useCORS: true,
            logging: false,
            windowWidth: aiContent.scrollWidth,
            windowHeight: aiContent.scrollHeight,
          });

          const imgData = canvas.toDataURL("image/png");
          const imgW = pageW - 2 * margin;
          const imgH = (canvas.height / canvas.width) * imgW;

          // Split across pages if the image is taller than one page
          const maxImgPerPage = pageH - y - 15;  // leave footer space

          if (imgH <= maxImgPerPage) {
            // Fits on current page
            pdf.addImage(imgData, "PNG", margin, y, imgW, imgH);
            y += imgH + 4;
          } else {
            // Split into multiple pages using canvas slicing with overlap
            const usablePageH = pageH - margin - 15;  // usable height per page
            const overlapMm = 8;  // overlap between pages in mm to avoid card breaking
            const stepMm = usablePageH - overlapMm;  // step forward per page in mm
            const pxPerMm = canvas.height / imgH;  // convert mm to canvas pixels
            const stepPx = stepMm * pxPerMm;
            const overlapPx = overlapMm * pxPerMm;
            const usablePagePx = usablePageH * pxPerMm;

            let srcY = 0;
            let pageIdx = 0;

            while (srcY < canvas.height) {
              if (pageIdx > 0) {
                addFooter();
                pdf.addPage();
                y = margin;
                pdf.setFillColor(30, 41, 59);
                pdf.rect(0, 0, pageW, pageH, "F");
              }

              // Calculate how much to capture for this slice
              const remainingPx = canvas.height - srcY;
              const slicePx = Math.min(usablePagePx, remainingPx);

              // Create a slice canvas
              const sliceCanvas = document.createElement("canvas");
              sliceCanvas.width = canvas.width;
              sliceCanvas.height = slicePx;
              const sliceCtx = sliceCanvas.getContext("2d");
              sliceCtx.drawImage(
                canvas,
                0, srcY,                            // source x, y
                canvas.width, slicePx,               // source w, h
                0, 0,                                // dest x, y
                sliceCanvas.width, slicePx            // dest w, h
              );

              const sliceData = sliceCanvas.toDataURL("image/png");
              const sliceH = (slicePx / canvas.width) * imgW;
              pdf.addImage(sliceData, "PNG", margin, y, imgW, sliceH);
              y += sliceH + 4;

              // Move forward by step (less than full slice to create overlap)
              srcY += stepPx;
              pageIdx++;
            }
          }
        } catch (canvasErr) {
          console.warn("html2canvas capture failed, falling back to text:", canvasErr);
          addText(aiOutput.textContent, 9, [226, 232, 240]);
        }
      }

      // Final footer on last page
      addFooter();

      pdf.save(`${companyName}_Report_${new Date().toISOString().slice(0, 10)}.pdf`);
      showToast("PDF downloaded successfully", "success");
    } catch (err) {
      console.error("PDF generation error:", err);
      showToast("PDF generation failed: " + err.message, "error");
    }

    btn.disabled = false;
    btn.innerHTML = '<i class="fas fa-file-pdf"></i> Download PDF';
  });

  // CSV Export
  document.getElementById("downloadCSVBtn")?.addEventListener("click", () => {
    if (!lastRawData.grid.length && !lastRawData.generator.length) { showToast("No data", "error"); return; }
    const allData = [
      ...lastRawData.grid.map(d => ({ source: "grid", ...d })),
      ...lastRawData.generator.map(d => ({ source: "generator", ...d })),
    ];
    const keys = Object.keys(allData[0]).filter(k => k !== "pk" && k !== "sk");
    const header = keys.join(",");
    const rows = allData.map(item => keys.map(k => {
      const val = item[k];
      if (val && typeof val === "object") return `"${JSON.stringify(val)}"`;
      return val ?? "";
    }).join(","));
    const csv = [header, ...rows].join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `PowerPulse_Report_${new Date().toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(a); a.click();
    setTimeout(() => { document.body.removeChild(a); URL.revokeObjectURL(url); }, 100);
    showToast("CSV exported", "success");
  });

  // Print
  document.getElementById("printReportBtn")?.addEventListener("click", () => window.print());

  /* ============================================= */
  /* 🤖 AI SUMMARY                                */
  /* ============================================= */
  const aiReportRangeSelect = document.getElementById("aiReportRange");
  const aiCustomDatesBox = document.getElementById("aiCustomDates");
  aiReportRangeSelect?.addEventListener("change", () => {
    aiCustomDatesBox.style.display = aiReportRangeSelect.value === "custom" ? "flex" : "none";
  });

  document.getElementById("toggleAiConfig")?.addEventListener("click", () => {
    const panel = document.getElementById("aiConfigPanel");
    panel.style.display = panel.style.display === "none" ? "block" : "none";
  });

  document.getElementById("generateAiSummary")?.addEventListener("click", async () => {
    const btn = document.getElementById("generateAiSummary");
    const output = document.getElementById("aiSummaryOutput");
    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Analyzing...';
    output.style.display = "block";
    output.innerHTML = '<div style="text-align:center;padding:20px;color:#94a3b8;"><i class="fas fa-robot fa-2x fa-pulse"></i><p style="margin-top:10px;">AI is analyzing your power data...</p></div>';

    try {
      const customPrompt = document.getElementById("aiCustomPrompt")?.value.trim() || undefined;

      let finalRange = rangeSelect.value;
      let finalStart = document.getElementById("reportStartDate")?.value;
      let finalEnd = document.getElementById("reportEndDate")?.value;
      let finalReportData = lastReportData;

      if (aiReportRangeSelect && aiReportRangeSelect.value !== "default") {
        finalRange = aiReportRangeSelect.value;
        finalStart = document.getElementById("aiStartDate")?.value;
        finalEnd = document.getElementById("aiEndDate")?.value;

        const [gridRes, genRes] = await Promise.all([
          fetch(window.API_BASE_URL + `/api/history/grid?range=${finalRange}${finalRange === "custom" ? `&start=${finalStart}&end=${finalEnd}` : ""}&limit=all`, { credentials: "include" }),
          fetch(window.API_BASE_URL + `/api/history/generator?range=${finalRange}${finalRange === "custom" ? `&start=${finalStart}&end=${finalEnd}` : ""}&limit=all`, { credentials: "include" }),
        ]);

        const gridData = gridRes.ok ? await gridRes.json() : { data: [] };
        const genData = genRes.ok ? await genRes.json() : { data: [] };

        finalReportData = computeReport(gridData.data || [], genData.data || [], finalRange, finalStart, finalEnd);
      }

      const res = await fetch(window.API_BASE_URL + "/api/reports/ai-summary", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ reportData: finalReportData, range: finalRange, startDate: finalStart, endDate: finalEnd, customPrompt }),
      });

      if (!res.ok) throw new Error((await res.json()).error || `HTTP ${res.status}`);
      const data = await res.json();

      let summaryHtml = data.summary || "No summary generated.";

      // Clean up markdown block syntax if AI wraps it
      summaryHtml = summaryHtml.replace(/^```html?\s*\n?/i, "").replace(/\n?\s*```\s*$/i, "").trim();

      output.innerHTML = `<div class="ai-summary-content">${summaryHtml}</div>`;
      showToast("AI summary generated", "success");
    } catch (err) {
      output.innerHTML = `<div style="color:#f87171;padding:16px;">❌ Failed to generate AI summary: ${err.message}</div>`;
      showToast("AI summary failed: " + err.message, "error");
    }

    btn.disabled = false;
    btn.innerHTML = '<i class="fas fa-brain"></i> Generate AI Summary';
  });
});
