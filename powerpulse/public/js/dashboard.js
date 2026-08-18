document.addEventListener("DOMContentLoaded", () => {
  /* 👤 --- LOAD USER PROFILE --- */
  let currentUserRole = "viewer";

  fetch(window.API_BASE_URL + "/api/auth/me")
    .then((res) => res.json())
    .then((data) => {
      if (data.user) {
        const nameEl = document.getElementById("userName");
        const roleEl = document.getElementById("userRole");
        if (nameEl) nameEl.textContent = data.user.name || data.user.email;
        if (roleEl) {
          roleEl.textContent = data.user.role;
          roleEl.style.background = data.user.role === "admin" ? "rgba(239,68,68,0.2)" : "rgba(34,197,94,0.2)";
          roleEl.style.color = data.user.role === "admin" ? "#fca5a5" : "#86efac";
        }
        currentUserRole = data.user.role;
        if (currentUserRole === "admin") {
          document.querySelectorAll(".admin-section").forEach((s) => (s.style.display = ""));
          document.querySelectorAll(".admin-nav-item").forEach((n) => (n.style.display = ""));
          loadLambdaFunctions();
          loadSnsSubscriptions();
        }
      }
    })
    .catch(() => { });

  /* 🍞 --- TOAST NOTIFICATIONS --- */
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

  /* ⚡ --- LAMBDA FUNCTIONS --- */
  async function loadLambdaFunctions() {
    const container = document.getElementById("lambdaFunctionsList");
    container.innerHTML = '<div class="panel-loading"><i class="fas fa-spinner fa-spin"></i> Loading Lambda functions...</div>';
    try {
      const res = await fetch(window.API_BASE_URL + "/api/lambda/functions");
      if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
      const functions = await res.json();
      if (!functions.length) {
        container.innerHTML = '<div class="panel-empty">No Lambda functions found in this region.</div>';
        return;
      }
      container.innerHTML = `
        <div style="overflow-x:auto;">
          <table class="lambda-table">
            <thead><tr>
              <th>Function Name</th><th>Runtime</th><th>Memory</th><th>Timeout</th><th>State</th><th>Last Modified</th><th>Action</th>
            </tr></thead>
            <tbody>${functions.map((fn) => `
              <tr>
                <td><strong>${fn.functionName}</strong>${fn.description ? `<br><small style="color:#64748b;">${fn.description}</small>` : ""}</td>
                <td><span class="runtime-badge">${fn.runtime || "N/A"}</span></td>
                <td>${fn.memorySize || "—"} MB</td>
                <td>${fn.timeout || "—"}s</td>
                <td><span class="lambda-status ${(fn.state || "").toLowerCase() === "active" ? "active" : "inactive"}"><span class="lambda-status-dot"></span>${fn.state || "Unknown"}</span></td>
                <td>${fn.lastModified ? new Date(fn.lastModified).toLocaleDateString() : "—"}</td>
                <td><button class="action-btn invoke-btn" data-fn="${fn.functionName}"><i class="fas fa-play"></i> Invoke</button></td>
              </tr>`).join("")}
            </tbody>
          </table>
        </div>`;
      container.querySelectorAll(".invoke-btn[data-fn]").forEach((btn) => {
        btn.addEventListener("click", () => openInvokeModal(btn.dataset.fn));
      });
    } catch (err) {
      container.innerHTML = `<div class="panel-empty" style="color:#f87171;">Failed to load Lambda functions: ${err.message}</div>`;
    }
  }

  function openInvokeModal(fnName) {
    document.getElementById("invokeModalFnName").textContent = fnName;
    document.getElementById("invokePayloadInput").value = "{}";
    document.getElementById("invokeResultArea").style.display = "none";
    document.getElementById("lambdaInvokeModal").style.display = "flex";
  }

  document.getElementById("closeLambdaModal")?.addEventListener("click", () => {
    document.getElementById("lambdaInvokeModal").style.display = "none";
  });
  document.getElementById("lambdaInvokeModal")?.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal-overlay")) document.getElementById("lambdaInvokeModal").style.display = "none";
  });
  document.getElementById("invokeConfirmBtn")?.addEventListener("click", async () => {
    const fnName = document.getElementById("invokeModalFnName").textContent;
    const payloadStr = document.getElementById("invokePayloadInput").value;
    const resultArea = document.getElementById("invokeResultArea");
    const resultPre = document.getElementById("invokeResultPre");
    const btn = document.getElementById("invokeConfirmBtn");
    let payload;
    try { payload = JSON.parse(payloadStr); } catch { showToast("Invalid JSON payload", "error"); return; }
    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Invoking...';
    try {
      const res = await fetch(window.API_BASE_URL + "/api/lambda/invoke", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ functionName: fnName, payload }),
      });
      const result = await res.json();
      resultPre.textContent = JSON.stringify(result, null, 2);
      resultArea.style.display = "block";
      if (result.functionError) showToast(`Lambda returned error: ${result.functionError}`, "error");
      else showToast(`Lambda invoked successfully (${result.statusCode})`, "success");
    } catch (err) {
      showToast(`Lambda invoke failed: ${err.message}`, "error");
      resultPre.textContent = err.message;
      resultArea.style.display = "block";
    }
    btn.disabled = false;
    btn.innerHTML = '<i class="fas fa-play"></i> Invoke';
  });
  document.getElementById("refreshLambdaBtn")?.addEventListener("click", () => loadLambdaFunctions());

  /* 📢 --- SNS NOTIFICATIONS --- */
  async function loadSnsSubscriptions() {
    const container = document.getElementById("snsSubscriptionsList");
    container.innerHTML = '<div class="panel-loading"><i class="fas fa-spinner fa-spin"></i> Loading subscriptions...</div>';
    try {
      const res = await fetch(window.API_BASE_URL + "/api/sns/subscriptions");
      if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
      const subs = await res.json();
      if (!subs.length) { container.innerHTML = '<div class="panel-empty">No subscriptions found.</div>'; return; }
      container.innerHTML = subs.map((s) => {
        const isConfirmed = s.SubscriptionArn && !s.SubscriptionArn.includes("PendingConfirmation");
        return `<div class="sns-sub-item">
            <div class="sns-sub-info"><div class="sns-sub-protocol">${s.Protocol || "?"}</div><div class="sns-sub-endpoint">${s.Endpoint || "—"}</div></div>
            <span class="sns-sub-status ${isConfirmed ? "confirmed" : "pending"}">${isConfirmed ? "Confirmed" : "Pending"}</span>
            ${isConfirmed ? `<button class="action-btn unsub-btn" data-arn="${s.SubscriptionArn}"><i class="fas fa-trash"></i></button>` : ""}
          </div>`;
      }).join("");
      container.querySelectorAll(".unsub-btn[data-arn]").forEach((btn) => {
        btn.addEventListener("click", async () => {
          if (!confirm("Unsubscribe this endpoint?")) return;
          btn.disabled = true;
          try {
            const res = await fetch(window.API_BASE_URL + "/api/sns/unsubscribe", {
              method: "DELETE", headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ subscriptionArn: btn.dataset.arn }),
            });
            if (!res.ok) throw new Error((await res.json()).error || res.statusText);
            showToast("Unsubscribed successfully", "success");
            loadSnsSubscriptions();
          } catch (err) { showToast(`Unsubscribe failed: ${err.message}`, "error"); btn.disabled = false; }
        });
      });
    } catch (err) {
      container.innerHTML = `<div class="panel-empty" style="color:#f87171;">Failed to load subscriptions: ${err.message}</div>`;
    }
  }
  document.getElementById("snsSubscribeForm")?.addEventListener("submit", async (e) => {
    e.preventDefault();
    const protocol = document.getElementById("snsProtocol").value;
    const endpoint = document.getElementById("snsEndpoint").value.trim();
    if (!endpoint) { showToast("Endpoint is required", "error"); return; }
    try {
      const res = await fetch(window.API_BASE_URL + "/api/sns/subscribe", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ protocol, endpoint }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || res.statusText);
      showToast(`Subscription request sent to ${endpoint}`, "success");
      document.getElementById("snsEndpoint").value = "";
      loadSnsSubscriptions();
    } catch (err) { showToast(`Subscribe failed: ${err.message}`, "error"); }
  });
  document.getElementById("snsTestAlertForm")?.addEventListener("submit", async (e) => {
    e.preventDefault();
    const subject = document.getElementById("testAlertSubject").value.trim() || undefined;
    const message = document.getElementById("testAlertMessage").value.trim() || undefined;
    try {
      const res = await fetch(window.API_BASE_URL + "/api/sns/test-alert", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ subject, message }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || res.statusText);
      showToast(`Test alert sent (ID: ${data.messageId?.substring(0, 8)}...)`, "success");
    } catch (err) { showToast(`Test alert failed: ${err.message}`, "error"); }
  });
  document.getElementById("refreshSnsBtn")?.addEventListener("click", () => loadSnsSubscriptions());

  /* 📱 --- SMS SANDBOX VERIFICATION --- */
  let sandboxPhoneToVerify = "";
  document.getElementById("sendOtpBtn")?.addEventListener("click", async () => {
    let phone = document.getElementById("sandboxPhone").value.trim().replace(/[\s\-\(\)]/g, "");
    if (!phone.startsWith("+")) phone = "+" + phone;
    if (!/^\+[0-9]{8,}$/.test(phone)) { showToast("Enter a valid phone number (e.g. +919876543210)", "error"); return; }
    const btn = document.getElementById("sendOtpBtn");
    btn.disabled = true; btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    try {
      const res = await fetch(window.API_BASE_URL + "/api/sns/sandbox/send-otp", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ phoneNumber: phone }) });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || res.statusText);
      sandboxPhoneToVerify = phone;
      document.getElementById("otpVerifyArea").style.display = "block";
      showToast(`OTP sent to ${phone}`, "success");
    } catch (err) { showToast(`Send OTP failed: ${err.message}`, "error"); }
    btn.disabled = false; btn.innerHTML = '<i class="fas fa-sms"></i> Send OTP';
  });
  document.getElementById("verifyOtpBtn")?.addEventListener("click", async () => {
    const otp = document.getElementById("sandboxOtp").value.trim();
    if (!otp || !sandboxPhoneToVerify) { showToast("Enter the OTP received via SMS", "error"); return; }
    const btn = document.getElementById("verifyOtpBtn");
    btn.disabled = true; btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Verifying...';
    try {
      const res = await fetch(window.API_BASE_URL + "/api/sns/sandbox/verify", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ phoneNumber: sandboxPhoneToVerify, otp }) });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || res.statusText);
      showToast(`${sandboxPhoneToVerify} verified!`, "success");
      document.getElementById("otpVerifyArea").style.display = "none";
      document.getElementById("sandboxPhone").value = "";
      document.getElementById("sandboxOtp").value = "";
      sandboxPhoneToVerify = "";
    } catch (err) { showToast(`Verification failed: ${err.message}`, "error"); }
    btn.disabled = false; btn.innerHTML = '<i class="fas fa-check-circle"></i> Verify';
  });

  /* 🌗 --- DARK / LIGHT MODE --- */
  const themeToggle = document.getElementById("themeToggle");
  const body = document.body;
  const savedTheme = localStorage.getItem("theme") || "dark";
  body.setAttribute("data-theme", savedTheme);
  themeToggle.textContent = savedTheme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode";
  themeToggle.addEventListener("click", () => {
    const currentTheme = body.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    body.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    themeToggle.textContent = newTheme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode";
    Object.values(chartConfigs).forEach((chart) => {
      const textColor = newTheme === "dark" ? "#fff" : "#1e293b";
      chart.options.plugins.legend.labels.color = textColor;
      chart.options.scales.x.ticks.color = textColor;
      chart.options.scales.y.ticks.color = textColor;
      chart.update();
    });
  });

  /* ⚙️ --- INITIALIZE DATA STRUCTURE --- */
  const meters = {
    grid: { voltage: { labels: [], R: [], Y: [], B: [] }, current: { labels: [], R: [], Y: [], B: [] } },
    generator: { voltage: { labels: [], R: [], Y: [], B: [] }, current: { labels: [], R: [], Y: [], B: [] } },
  };

  /* 📋 --- DYNAMIC REGISTER CONFIG --- */
  let enabledRegisters = [];
  const FIELD_META = {
    voltage:        { icon: "⚡", label: "Voltage (V)",           unit: "V",  decimals: 2 },
    avgVoltage:     { icon: "⚡", label: "Average Voltage",       unit: "V",  decimals: 2, highlight: true },
    current:        { icon: "🔌", label: "Current (A)",           unit: "A",  decimals: 2 },
    powerFactor:    { icon: "📐", label: "Power Factor",          unit: "",   decimals: 3 },
    frequency:      { icon: "⏱",  label: "Frequency (Hz)",       unit: "Hz", decimals: 2, highlight: true },
    activePower:    { icon: "⚡", label: "Active Power (kW)",     unit: "W",  decimals: 2, isPower: true },
    avgActivePower: { icon: "⚡", label: "Avg Active Power (kW)", unit: "W",  decimals: 2, isPower: true, highlight: true },
    apparentPower:  { icon: "🔋", label: "Apparent Power (kVA)",  unit: "VA", decimals: 2, isPower: true },
    realTimePower:  { icon: "⚡", label: "Real-time Power (kW)",  unit: "W",  decimals: 2, isPower: true },
    thdVoltage:     { icon: "⚡", label: "Voltage THD (%)",       unit: "%",  decimals: 2 },
    thdCurrent:     { icon: "🔌", label: "Current THD (%)",       unit: "%",  decimals: 2 },
    powerOnMins:    { icon: "⏱",  label: "Power ON Minutes",     unit: "min",decimals: 0 },
    powerOffMins:   { icon: "⏱",  label: "Power OFF Minutes",    unit: "min",decimals: 0 },
    loadOnMins:     { icon: "⏱",  label: "Load ON Minutes",      unit: "min",decimals: 0 },
    loadOffMins:    { icon: "⏱",  label: "Load OFF Minutes",     unit: "min",decimals: 0 },
  };
  const CMP_FIELD_MAP = {
    avgVoltage:     { label: "Avg Voltage",   suffix: "Voltage" },
    current:        { label: "Avg Current",   suffix: "Current" },
    avgActivePower: { label: "Active Power",  suffix: "Power" },
    powerFactor:    { label: "Power Factor",  suffix: "PF" },
    frequency:      { label: "Frequency",     suffix: "Freq" },
    apparentPower:  { label: "Apparent Power",suffix: "Apparent" },
  };

  async function loadRegisterConfig() {
    try {
      const res = await fetch(window.API_BASE_URL + "/api/register-config");
      if (!res.ok) throw new Error(`${res.status}`);
      const config = await res.json();
      enabledRegisters = (config.registers || []).filter(r => r.enabled !== false);
    } catch (err) {
      console.warn("⚠️ Failed to load register config:", err.message);
      enabledRegisters = [];
    }
    buildParameterCards("grid", document.getElementById("gridCardsContainer"));
    buildParameterCards("generator", document.getElementById("generatorCardsContainer"));
    buildComparisonStats("grid", document.getElementById("cmpGridStats"));
    buildComparisonStats("generator", document.getElementById("cmpGenStats"));
  }

  function getRegistersForType(type) {
    if (!enabledRegisters.length) return [];
    return enabledRegisters.filter(r => { const src = (r.source || "both").toLowerCase(); return src === "both" || src === type; });
  }

  function buildParameterCards(type, container) {
    if (!container) return;
    container.innerHTML = "";
    const registers = getRegistersForType(type);
    if (!registers.length) {
      container.innerHTML = '<div style="padding:20px;color:#94a3b8;text-align:center;">No parameters configured. Go to <a href="/register-config" style="color:#818cf8;">Register Config</a> to add parameters.</div>';
      return;
    }
    const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);
    registers.forEach((reg) => {
      const field = reg.field;
      const meta = FIELD_META[field] || {};
      const label = reg.label || meta.label || field;
      const unit = reg.unit || meta.unit || "";
      const icon = meta.icon || "📊";
      const isHighlight = meta.highlight || false;
      const isPhase = reg.isPhase;
      const card = document.createElement("div");
      card.className = `card${isPhase ? " phase-card" : ""}${isHighlight ? " highlight" : ""}`;
      if (isPhase) {
        card.innerHTML = `<h3>${icon} ${label}</h3>
          <div class="phase-table">
            <div class="phase-row r-phase"><span class="phase-tag">R</span><span id="${type}${cap(field)}R">--</span></div>
            <div class="phase-row y-phase"><span class="phase-tag">Y</span><span id="${type}${cap(field)}Y">--</span></div>
            <div class="phase-row b-phase"><span class="phase-tag">B</span><span id="${type}${cap(field)}B">--</span></div>
          </div><p id="${type}${cap(field)}" style="display:none;"></p>`;
      } else {
        card.innerHTML = `<h3>${icon} ${label}</h3><p id="${type}${cap(field)}">--</p>`;
      }
      container.appendChild(card);
    });
  }

  function buildComparisonStats(type, container) {
    if (!container) return;
    container.innerHTML = "";
    const prefix = type === "grid" ? "cmpGrid" : "cmpGen";
    const registers = getRegistersForType(type);
    const enabledFields = new Set(registers.map(r => r.field));
    for (const [field, info] of Object.entries(CMP_FIELD_MAP)) {
      if (!enabledFields.has(field)) continue;
      const div = document.createElement("div");
      div.className = "cmp-stat";
      div.innerHTML = `<span class="cmp-label">${info.label}</span><span id="${prefix}${info.suffix}" class="cmp-value">--</span>`;
      container.appendChild(div);
    }
  }

  /* 🔗 --- WEBSOCKET CONNECTION --- */
  const wsProtocol = window.location.protocol === "https:" ? "wss" : "ws";
  const ws = new WebSocket(`${wsProtocol}://${window.location.host}`);
  const connectionStatus = document.getElementById("connectionStatus");
  ws.onopen = () => { connectionStatus.textContent = "Connected"; connectionStatus.style.background = "green"; connectionStatus.style.boxShadow = "0 0 10px #00ff00a8"; };
  ws.onclose = () => { connectionStatus.textContent = "Disconnected"; connectionStatus.style.background = "red"; connectionStatus.style.boxShadow = "0 0 10px #ff0000a8"; };
  ws.onerror = () => { connectionStatus.textContent = "Error"; connectionStatus.style.background = "#b45309"; connectionStatus.style.boxShadow = "0 0 10px #f59e0ba8"; };

  /* 📊 --- CHART INITIALIZATION WITH SCALING --- */
  const chartConfigs = {};
  const chartPointLimits = {};

  function chartOptions(chartId) {
    const isDark = body.getAttribute("data-theme") === "dark";
    const textColor = isDark ? "#fff" : "#1e293b";
    return {
      responsive: true,
      animation: false,
      plugins: {
        legend: { labels: { color: textColor } }
      },
      scales: {
        x: { ticks: { color: textColor } },
        y: { ticks: { color: textColor } },
      },
    };
  }

  ["grid", "generator"].forEach((type) => {
    const vId = `${type}VoltageChart`;
    const cId = `${type}CurrentChart`;
    chartPointLimits[vId] = 20;
    chartPointLimits[cId] = 20;

    chartConfigs[vId] = new Chart(document.getElementById(vId), {
      type: "line",
      data: { labels: [], datasets: [
        { label: "R Phase (V)", data: [], borderColor: "red", fill: false },
        { label: "Y Phase (V)", data: [], borderColor: "orange", fill: false },
        { label: "B Phase (V)", data: [], borderColor: "blue", fill: false },
      ]},
      options: chartOptions(vId),
    });

    chartConfigs[cId] = new Chart(document.getElementById(cId), {
      type: "line",
      data: { labels: [], datasets: [
        { label: "R Phase (A)", data: [], borderColor: "red", fill: false },
        { label: "Y Phase (A)", data: [], borderColor: "orange", fill: false },
        { label: "B Phase (A)", data: [], borderColor: "blue", fill: false },
      ]},
      options: chartOptions(cId),
    });
  });

  /* 📏 --- CHART SCALING TOOLBAR HANDLERS (Event Delegation) --- */
  document.addEventListener("change", (e) => {
    // Dropdown Mode Change
    if (e.target.matches(".chart-scale-mode")) {
      const select = e.target;
      const chartId = select.dataset.chart;
      const axis = select.dataset.axis;
      const chart = chartConfigs[chartId] || historyCharts[chartId.replace("histChart_", "")];
      if (!chart) return;
      
      const group = select.closest(".chart-toolbar-group");
      const minInput = group.querySelector(".chart-axis-min");
      const maxInput = group.querySelector(".chart-axis-max");
      
      if (select.value === "manual") {
        minInput.style.display = ""; maxInput.style.display = "";
        
        let minVal, maxVal;
        if (axis === 'x') {
           minVal = parseInt(minInput.value);
           maxVal = parseInt(maxInput.value);
        } else {
           minVal = parseFloat(minInput.value);
           maxVal = parseFloat(maxInput.value);
        }
        
        if (!isNaN(minVal)) chart.options.scales[axis].min = minVal;
        if (!isNaN(maxVal)) chart.options.scales[axis].max = maxVal;
      } else {
        // Auto Mode
        minInput.style.display = "none"; maxInput.style.display = "none";
        chart.options.scales[axis].min = undefined;
        chart.options.scales[axis].max = undefined;
      }
      
      chart.update();
      localStorage.setItem(`chartScale_${chartId}_${axis}`, select.value);
    }
    
    // Limits Inputs Change
    if (e.target.matches(".chart-axis-min") || e.target.matches(".chart-axis-max")) {
      const input = e.target;
      const chartId = input.dataset.chart;
      const axis = input.dataset.axis;
      const chart = chartConfigs[chartId] || historyCharts[chartId.replace("histChart_", "")];
      if (!chart) return;
      
      const group = input.closest(".chart-toolbar-group");
      let minVal, maxVal;
      if (axis === 'x') {
         minVal = parseInt(group.querySelector(".chart-axis-min").value);
         maxVal = parseInt(group.querySelector(".chart-axis-max").value);
      } else {
         minVal = parseFloat(group.querySelector(".chart-axis-min").value);
         maxVal = parseFloat(group.querySelector(".chart-axis-max").value);
      }
      
      if (!isNaN(minVal)) {
        chart.options.scales[axis].min = minVal;
      } else {
        delete chart.options.scales[axis].min;
      }
      
      if (!isNaN(maxVal)) {
        chart.options.scales[axis].max = maxVal;
      } else {
        delete chart.options.scales[axis].max;
      }
      
      chart.update();
      localStorage.setItem(`chartScale_${chartId}_${axis}_min`, group.querySelector(".chart-axis-min").value);
      localStorage.setItem(`chartScale_${chartId}_${axis}_max`, group.querySelector(".chart-axis-max").value);
    }
  });
  
  // Apply Global Settings
  fetch(window.API_BASE_URL + "/api/settings", { credentials: "include" })
    .then(res => res.json())
    .then(settings => {
      if (settings?.charts?.showChartToolbar === false) {
        // Create a style element to hide all toolbars
        const style = document.createElement('style');
        style.innerHTML = '.chart-toolbar { display: none !important; }';
        document.head.appendChild(style);
      }
    })
    .catch(err => console.error("Could not load global settings for dashboard:", err));

  document.querySelectorAll(".chart-points-slider").forEach((slider) => {
    slider.addEventListener("input", () => {
      const chartId = slider.dataset.chart;
      const valueSpan = slider.closest(".chart-toolbar-group").querySelector(".chart-points-value");
      valueSpan.textContent = slider.value;
      chartPointLimits[chartId] = parseInt(slider.value);
      localStorage.setItem(`chartPoints_${chartId}`, slider.value);
    });
  });

  document.querySelectorAll(".chart-reset-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const chartId = btn.dataset.chart;
      const chart = chartConfigs[chartId];
      if (chart && chart.resetZoom) chart.resetZoom();
    });
  });

  // Restore saved scaling settings
  ["gridVoltageChart", "gridCurrentChart", "generatorVoltageChart", "generatorCurrentChart"].forEach((id) => {
    const savedPoints = localStorage.getItem(`chartPoints_${id}`);
    if (savedPoints) {
      chartPointLimits[id] = parseInt(savedPoints);
      const slider = document.querySelector(`.chart-points-slider[data-chart="${id}"]`);
      const valueSpan = slider?.closest(".chart-toolbar-group")?.querySelector(".chart-points-value");
      if (slider) slider.value = savedPoints;
      if (valueSpan) valueSpan.textContent = savedPoints;
    }
    // Restore mode X mapping
    const savedModeX = localStorage.getItem(`chartScale_${id}_x`);
    if(savedModeX) {
        const selectX = document.querySelector(`.chart-scale-mode[data-chart="${id}"][data-axis="x"]`);
        if(selectX) {
            selectX.value = savedModeX;
            selectX.dispatchEvent(new Event('change'));
        }
    }
    const savedXMin = localStorage.getItem(`chartScale_${id}_x_min`);
    const savedXMax = localStorage.getItem(`chartScale_${id}_x_max`);
    const groupX = document.querySelector(`.chart-axis-min[data-chart="${id}"][data-axis="x"]`)?.closest(".chart-toolbar-group");
    if (groupX) {
      if (savedXMin) groupX.querySelector(".chart-axis-min").value = savedXMin;
      if (savedXMax) groupX.querySelector(".chart-axis-max").value = savedXMax;
      groupX.querySelector(".chart-axis-min").dispatchEvent(new Event('change'));
    }

    // Restore mode Y mapping
    const savedModeY = localStorage.getItem(`chartScale_${id}_y`);
    if(savedModeY) {
        const selectY = document.querySelector(`.chart-scale-mode[data-chart="${id}"][data-axis="y"]`);
        if(selectY) {
            selectY.value = savedModeY;
            selectY.dispatchEvent(new Event('change'));
        }
    }
    const savedYMin = localStorage.getItem(`chartScale_${id}_y_min`);
    const savedYMax = localStorage.getItem(`chartScale_${id}_y_max`);
    const groupY = document.querySelector(`.chart-axis-min[data-chart="${id}"][data-axis="y"]`)?.closest(".chart-toolbar-group");
    if (groupY) {
      if (savedYMin) groupY.querySelector(".chart-axis-min").value = savedYMin;
      if (savedYMax) groupY.querySelector(".chart-axis-max").value = savedYMax;
      groupY.querySelector(".chart-axis-min").dispatchEvent(new Event('change'));
    }
  });

  async function loadLatestSnapshots() {
    const endpoints = [
      { type: "grid", url: window.API_BASE_URL + "/api/grid-data/latest" },
      { type: "generator", url: window.API_BASE_URL + "/api/generator-data/latest" },
    ];
    const results = await Promise.all(
      endpoints.map(async ({ type, url }) => {
        try {
          const response = await fetch(url, { cache: "no-store" });
          if (!response.ok) throw new Error(`${response.status}`);
          return { type, data: await response.json() };
        } catch (err) { return { type, data: null }; }
      })
    );
    results.forEach(({ data }) => applySnapshot(data));
  }

  function updateMultiPhaseChart(chart, label, newValues) {
    const chartId = chart.canvas?.id || "";
    const maxPts = chartPointLimits[chartId] || 20;
    if (chart.data.labels.length >= maxPts) chart.data.labels.shift();
    chart.data.labels.push(label);
    const phases = ["R", "Y", "B"];
    phases.forEach((phase, i) => {
      const dataset = chart.data.datasets[i];
      if (dataset) {
        if (dataset.data.length >= maxPts) dataset.data.shift();
        dataset.data.push(newValues[phase] ?? 0);
      }
    });
    chart.update("none");
  }

  function hasPhaseData(phase) {
    if (!phase) return false;
    return [phase.R, phase.Y, phase.B].some(v => v !== null && v !== undefined);
  }

  function applySnapshot(parsed) {
    if (!parsed || !parsed.type) return;
    const { type, timestamp, ...sensor } = parsed;
    const dataTime = timestamp || parsed.sk || Date.now();
    const ts = new Date(dataTime).toLocaleTimeString();
    updateDOM(type, sensor, dataTime);
    if (hasPhaseData(sensor.voltage)) updateMultiPhaseChart(chartConfigs[`${type}VoltageChart`], ts, sensor.voltage);
    if (hasPhaseData(sensor.current)) updateMultiPhaseChart(chartConfigs[`${type}CurrentChart`], ts, sensor.current);
  }

  /* 🧠 --- HANDLE WEBSOCKET MESSAGES --- */
  ws.onmessage = (event) => {
    try {
      const msg = JSON.parse(event.data);
      if (msg.type !== "iot" || !msg.data) return;
      applySnapshot(msg.data);
    } catch (err) { console.error("❌ Data parse error:", err); }
  };

  /* 🖥️ --- DOM UPDATES --- */
  function fmtPhase(val, unit = "", decimals = 2) {
    if (val == null || (typeof val === "number" && val === 0)) return "—";
    return `${Number(val).toFixed(decimals)}${unit ? " " + unit : ""}`;
  }
  function flashCard(id) {
    const elem = document.getElementById(id);
    if (!elem) return;
    const card = elem.closest(".card");
    if (card) { card.classList.add("flash"); setTimeout(() => card.classList.remove("flash"), 400); }
  }
  function setEl(id, text) { const el = document.getElementById(id); if (el) el.textContent = text; }

  function updateDOM(type, sensor, dataTimestamp) {
    const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);
    const registers = getRegistersForType(type);
    registers.forEach((reg) => {
      const field = reg.field;
      const meta = FIELD_META[field] || {};
      const unit = reg.unit || meta.unit || "";
      const val = sensor[field];
      if (reg.isPhase && val && typeof val === "object") {
        setEl(`${type}${cap(field)}R`, fmtPhase(val.R, unit));
        setEl(`${type}${cap(field)}Y`, fmtPhase(val.Y, unit));
        setEl(`${type}${cap(field)}B`, fmtPhase(val.B, unit));
        if (val.R != null) flashCard(`${type}${cap(field)}R`);
      } else if (!reg.isPhase && val != null) {
        let displayVal;
        if (meta.isPower && typeof val === "number") {
          displayVal = Math.abs(val) >= 1000 ? `${(val / 1000).toFixed(2)} k${unit}` : `${val.toFixed(meta.decimals ?? 2)} ${unit}`;
        } else if (typeof val === "number") {
          displayVal = `${val.toFixed(meta.decimals ?? 2)}${unit ? " " + unit : ""}`;
        } else { displayVal = String(val); }
        setEl(`${type}${cap(field)}`, displayVal);
        flashCard(`${type}${cap(field)}`);
      }
    });
    updateComparisonPanel(type, sensor, dataTimestamp);
  }

  /* 🆚 --- LIVE COMPARISON PANEL --- */
  const lastSeen = { grid: null, generator: null };
  function updateComparisonPanel(type, sensor, dataTimestamp) {
    const prefix = type === "grid" ? "cmpGrid" : "cmpGen";
    const badgeId = type === "grid" ? "gridStatusBadge" : "genStatusBadge";
    const updateId = type === "grid" ? "gridLastUpdate" : "genLastUpdate";
    const actualTime = dataTimestamp ? new Date(dataTimestamp) : new Date();
    lastSeen[type] = actualTime;
    const badge = document.getElementById(badgeId);
    const isStale = (Date.now() - actualTime.getTime()) > 120000;
    if (badge) {
      if (isStale) { badge.textContent = "🔴 Offline"; badge.className = "source-status-badge offline"; }
      else { badge.textContent = "🟢 Live"; badge.className = "source-status-badge online"; }
    }
    setEl(updateId, actualTime.toLocaleTimeString());
    const avgV = sensor.avgVoltage ?? null;
    const avgAP = sensor.avgActivePower ?? null;
    const pf = sensor.powerFactor ?? null;
    const freq = sensor.frequency ?? null;
    const apparentP = sensor.apparentPower ?? null;
    const current = sensor.current || {};
    setEl(`${prefix}Voltage`, avgV != null ? `${avgV.toFixed(2)} V` : "--");
    setEl(`${prefix}Current`, (() => {
      const validC = [current?.R, current?.Y, current?.B].filter(v => v != null && v > 0);
      const avgC = validC.length ? validC.reduce((a,b)=>a+b,0)/validC.length : null;
      return avgC != null ? `${avgC.toFixed(2)} A` : "--";
    })());
    setEl(`${prefix}Power`, avgAP != null ? (Math.abs(avgAP) >= 1000 ? `${(avgAP/1000).toFixed(2)} kW` : `${avgAP.toFixed(2)} W`) : "--");
    setEl(`${prefix}PF`, pf != null ? pf.toFixed(3) : "--");
    setEl(`${prefix}Freq`, freq != null ? `${freq.toFixed(2)} Hz` : "--");
    setEl(`${prefix}Apparent`, apparentP != null ? (Math.abs(apparentP) >= 1000 ? `${(apparentP/1000).toFixed(2)} kVA` : `${apparentP.toFixed(2)} VA`) : "--");
    if (!isStale) {
      setTimeout(() => {
        if (lastSeen[type] && (Date.now() - lastSeen[type].getTime()) > 120000) {
          const b = document.getElementById(badgeId);
          if (b) { b.textContent = "🔴 Offline"; b.className = "source-status-badge offline"; }
        }
      }, 120000);
    }
  }

  /* 🧱 --- SIDEBAR TOGGLE --- */
  const sidebar = document.querySelector(".sidebar");
  const mainContent = document.querySelector(".main-content");
  const toggleSidebarBtn = document.getElementById("toggleSidebar");
  function toggleSidebar() {
    sidebar.classList.toggle("collapsed"); mainContent.classList.toggle("expanded"); toggleSidebarBtn.classList.toggle("rotated");
    localStorage.setItem("sidebarCollapsed", sidebar.classList.contains("collapsed"));
  }
  toggleSidebarBtn.addEventListener("click", toggleSidebar);
  const isSidebarCollapsed = localStorage.getItem("sidebarCollapsed") === "true";
  if (isSidebarCollapsed) { sidebar.classList.add("collapsed"); mainContent.classList.add("expanded"); toggleSidebarBtn.classList.add("rotated"); }
  document.addEventListener("click", (event) => {
    const isClickInside = sidebar.contains(event.target) || toggleSidebarBtn.contains(event.target);
    if (!isClickInside && window.innerWidth <= 768) {
      sidebar.classList.add("collapsed"); mainContent.classList.add("expanded"); toggleSidebarBtn.classList.add("rotated");
      localStorage.setItem("sidebarCollapsed", true);
    }
  });
  function handleResponsiveSidebar() {
    if (window.innerWidth < 1024) { sidebar.classList.add("collapsed"); mainContent.classList.add("expanded"); }
    else if (!isSidebarCollapsed) { sidebar.classList.remove("collapsed"); mainContent.classList.remove("expanded"); }
  }
  window.addEventListener("resize", handleResponsiveSidebar);
  handleResponsiveSidebar();

  loadRegisterConfig().then(() => {
    loadLatestSnapshots().catch((err) => console.error("❌ Failed to initialize dashboard snapshots:", err));
  });

  /* ============================================= */
  /* 📊 HISTORIC TRENDS (Customizable Parameters) */
  /* ============================================= */
  const HISTORY_PARAMETERS = {
    avgVoltage:     { label: 'Avg Voltage (V)',      color: '#6366f1', unit: 'V' },
    voltageR:       { label: 'R-Phase Voltage (V)',   color: '#ef4444', unit: 'V',  getter: d => d.voltage?.R ?? null },
    voltageY:       { label: 'Y-Phase Voltage (V)',   color: '#f59e0b', unit: 'V',  getter: d => d.voltage?.Y ?? null },
    voltageB:       { label: 'B-Phase Voltage (V)',   color: '#3b82f6', unit: 'V',  getter: d => d.voltage?.B ?? null },
    avgCurrent:     { label: 'Avg Current (A)',       color: '#f59e0b', unit: 'A' },
    avgActivePower: { label: 'Active Power (kW)',     color: '#10b981', unit: 'kW' },
    apparentPower:  { label: 'Apparent Power (kVA)',  color: '#8b5cf6', unit: 'kVA' },
    powerFactor:    { label: 'Power Factor',          color: '#ec4899', unit: '' },
    frequency:      { label: 'Frequency (Hz)',        color: '#14b8a6', unit: 'Hz' },
    thdVoltage:     { label: 'Voltage THD (%)',       color: '#f97316', unit: '%',  getter: d => d.thdVoltage?.R ?? d.thdVoltage ?? null },
    thdCurrent:     { label: 'Current THD (%)',       color: '#06b6d4', unit: '%',  getter: d => d.thdCurrent?.R ?? d.thdCurrent ?? null },
  };

  let selectedHistoryParams = JSON.parse(localStorage.getItem("historyParams") || "null") || ["avgVoltage", "avgActivePower"];
  let historyCharts = {};
  let lastHistoryData = null;
  let currentRange = "daily";

  // Build parameter pills
  function buildParamPills() {
    const container = document.getElementById("historyParamPills");
    if (!container) return;
    container.innerHTML = "";
    for (const [key, param] of Object.entries(HISTORY_PARAMETERS)) {
      const pill = document.createElement("button");
      pill.className = `param-pill${selectedHistoryParams.includes(key) ? " active" : ""}`;
      pill.dataset.param = key;
      pill.style.setProperty("--pill-color", param.color);
      pill.innerHTML = `<span class="param-pill-dot" style="background:${param.color};"></span> ${param.label}`;
      pill.addEventListener("click", () => {
        if (selectedHistoryParams.includes(key)) {
          selectedHistoryParams = selectedHistoryParams.filter(p => p !== key);
          pill.classList.remove("active");
        } else {
          selectedHistoryParams.push(key);
          pill.classList.add("active");
        }
        localStorage.setItem("historyParams", JSON.stringify(selectedHistoryParams));
        if (lastHistoryData) renderHistoryCharts(lastHistoryData.data, lastHistoryData.range, lastHistoryData.source);
      });
      container.appendChild(pill);
    }
  }

  // Toggle All
  document.getElementById("historyParamToggleAll")?.addEventListener("click", () => {
    const allKeys = Object.keys(HISTORY_PARAMETERS);
    const allSelected = selectedHistoryParams.length === allKeys.length;
    selectedHistoryParams = allSelected ? ["avgVoltage", "avgActivePower"] : [...allKeys];
    localStorage.setItem("historyParams", JSON.stringify(selectedHistoryParams));
    buildParamPills();
    if (lastHistoryData) renderHistoryCharts(lastHistoryData.data, lastHistoryData.range, lastHistoryData.source);
  });

  buildParamPills();

  const historyRangeSelect = document.getElementById("historyRange");
  const historySourceSelect = document.getElementById("historySource");
  const historyStatusEl = document.getElementById("historyStatus");
  const customDateRangeDiv = document.getElementById("customDateRange");
  const loadCustomBtn = document.getElementById("loadCustomHistory");

  historyRangeSelect?.addEventListener("change", () => {
    currentRange = historyRangeSelect.value;
    if (currentRange === "custom") customDateRangeDiv.style.display = "flex";
    else { customDateRangeDiv.style.display = "none"; loadHistoricData(currentRange, historySourceSelect?.value || "grid"); }
  });
  historySourceSelect?.addEventListener("change", () => {
    if (currentRange !== "custom") loadHistoricData(currentRange, historySourceSelect.value);
  });
  loadCustomBtn?.addEventListener("click", () => {
    const start = document.getElementById("historyStartDate")?.value;
    const end = document.getElementById("historyEndDate")?.value;
    if (!start || !end) { showToast("Please select both dates", "error"); return; }
    if (new Date(start) > new Date(end)) { showToast("Start before end", "error"); return; }
    loadHistoricData("custom", historySourceSelect?.value || "grid", start, end);
  });

  async function loadHistoricData(range, source, startDate, endDate) {
    if (historyStatusEl) historyStatusEl.textContent = "Loading data...";
    try {
      let url = window.API_BASE_URL + `/api/history/${source}?range=${range}`;
      if (range === "custom" && startDate && endDate) url += `&start=${startDate}&end=${endDate}`;
      const res = await fetch(url, { credentials: "include" });
      if (!res.ok) throw new Error("Failed to fetch history");
      const json = await res.json();
      if (historyStatusEl) historyStatusEl.textContent = `Showing ${json.count} points (${json.total} total)`;
      lastHistoryData = { data: json.data, range, source };
      renderHistoryCharts(json.data, range, source);
    } catch (err) {
      console.error("❌ History load error:", err);
      if (historyStatusEl) historyStatusEl.textContent = "❌ Failed to load historic data";
    }
  }

  function formatTimeLabel(isoString, range) {
    const d = new Date(isoString);
    if (range === "daily" || range === "custom") return d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    if (range === "weekly") return d.toLocaleDateString([], { weekday: "short", month: "short", day: "numeric" });
    if (range === "monthly") return d.toLocaleDateString([], { month: "short", day: "numeric" });
    if (range === "yearly") return d.toLocaleDateString([], { month: "short", year: "numeric" });
    return d.toLocaleDateString();
  }

  function renderHistoryCharts(data, range, source) {
    const grid = document.getElementById("historyChartsGrid");
    if (!grid) return;
    // Destroy existing charts
    Object.values(historyCharts).forEach(c => c.destroy());
    historyCharts = {};
    grid.innerHTML = "";

    if (!selectedHistoryParams.length) {
      grid.innerHTML = '<div style="padding:40px;text-align:center;color:#64748b;">Select at least one parameter to visualize.</div>';
      return;
    }

    const labels = data.map(d => formatTimeLabel(d.timestamp || d.sk, range));
    const lineProps = { borderWidth: 2, pointRadius: 1, tension: 0.3, fill: true, pointHitRadius: 10 };
    const isDark = body.getAttribute("data-theme") === "dark";
    const textColor = isDark ? "#94a3b8" : "#64748b";

    selectedHistoryParams.forEach((key) => {
      const param = HISTORY_PARAMETERS[key];
      if (!param) return;

      const values = data.map(d => {
        if (param.getter) return param.getter(d);
        return d[key] ?? null;
      });

      // Create chart card
      const card = document.createElement("div");
      card.className = "history-chart-card chart-container"; // add chart-container so logic finds it similarly
      card.innerHTML = `
        <h4 style="color:${param.color};margin-bottom:10px;">${param.label}</h4>
        <div class="chart-toolbar" style="margin-bottom:10px;">
          <div class="chart-toolbar-group"><label>Y:</label>
            <select class="chart-scale-mode" data-chart="histChart_${key}" data-axis="y"><option value="auto">Auto</option><option value="manual">Manual</option></select>
            <input type="number" class="chart-axis-min" data-chart="histChart_${key}" data-axis="y" placeholder="Min" style="display:none;" />
            <input type="number" class="chart-axis-max" data-chart="histChart_${key}" data-axis="y" placeholder="Max" style="display:none;" />
          </div>
          <div class="chart-toolbar-group"><label>X:</label>
            <select class="chart-scale-mode" data-chart="histChart_${key}" data-axis="x"><option value="auto">Auto</option><option value="manual">Manual</option></select>
            <input type="number" class="chart-axis-min" data-chart="histChart_${key}" data-axis="x" placeholder="Start" style="display:none;" />
            <input type="number" class="chart-axis-max" data-chart="histChart_${key}" data-axis="x" placeholder="End" style="display:none;" />
          </div>
        </div>
        <div class="history-chart-wrap"><canvas id="histChart_${key}"></canvas></div>
      `;
      grid.appendChild(card);

      const ctx = card.querySelector("canvas").getContext("2d");
      historyCharts[key] = new Chart(ctx, {
        type: "line",
        data: {
          labels,
          datasets: [{
            label: param.label,
            data: values,
            borderColor: param.color,
            backgroundColor: param.color + "18",
            ...lineProps,
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: { mode: "index", intersect: false },
            zoom: { zoom: { wheel: { enabled: true }, pinch: { enabled: true }, mode: 'xy' }, pan: { enabled: true, mode: 'xy' } }
          },
          scales: {
            x: { ticks: { color: textColor, maxTicksLimit: 12, maxRotation: 45 }, grid: { color: "rgba(148,163,184,0.1)" } },
            y: { ticks: { color: textColor }, grid: { color: "rgba(148,163,184,0.1)" } },
          }
        }
      });
      
      // Restore dynamic UI controls
      const chartId = `histChart_${key}`;
      ['x', 'y'].forEach(axis => {
        const savedMode = localStorage.getItem(`chartScale_${chartId}_${axis}`);
        if(savedMode) {
            const select = card.querySelector(`.chart-scale-mode[data-axis="${axis}"]`);
            if(select) {
                select.value = savedMode;
                select.dispatchEvent(new Event('change', { bubbles: true }));
            }
        }
        const savedMin = localStorage.getItem(`chartScale_${chartId}_${axis}_min`);
        const savedMax = localStorage.getItem(`chartScale_${chartId}_${axis}_max`);
        const minInp = card.querySelector(`.chart-axis-min[data-axis="${axis}"]`);
        if (minInp) {
          if (savedMin) minInp.value = savedMin;
          if (savedMax) card.querySelector(`.chart-axis-max[data-axis="${axis}"]`).value = savedMax;
          minInp.dispatchEvent(new Event('change', { bubbles: true }));
        }
      });
    });
  }

  // Removed Export Functions

  // Load default view on startup
  loadHistoricData("daily", "grid");
});
