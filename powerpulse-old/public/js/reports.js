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
    .catch(() => {});

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

  // Restore saved sidebar state
  const isSidebarCollapsed = localStorage.getItem("sidebarCollapsed") === "true";
  if (isSidebarCollapsed) {
    sidebar.classList.add("collapsed");
    mainContent.classList.add("expanded");
  }

  toggleSidebarBtn?.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed");
    mainContent.classList.toggle("expanded");
    localStorage.setItem("sidebarCollapsed", sidebar.classList.contains("collapsed"));
  });

  // Auto close sidebar on small screens when clicking outside
  document.addEventListener("click", (event) => {
    const isClickInside = sidebar.contains(event.target) || toggleSidebarBtn.contains(event.target);
    if (!isClickInside && window.innerWidth <= 768) {
      sidebar.classList.add("collapsed");
      mainContent.classList.add("expanded");
      localStorage.setItem("sidebarCollapsed", true);
    }
  });

  // Handle responsiveness
  function handleResponsiveSidebar() {
    if (window.innerWidth < 1024) {
      sidebar.classList.add("collapsed");
      mainContent.classList.add("expanded");
    } else if (!isSidebarCollapsed) {
      sidebar.classList.remove("collapsed");
      mainContent.classList.remove("expanded");
    }
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

  /* ===================================== */
  /* 📊 REPORT GENERATION                  */
  /* ===================================== */

  const reportRangeSelect = document.getElementById("reportRange");
  const customDatesDiv = document.getElementById("reportCustomDates");
  const generateBtn = document.getElementById("generateReportBtn");
  const downloadBtn = document.getElementById("downloadPdfBtn");
  const reportOutput = document.getElementById("reportOutput");

  // Toggle custom dates
  reportRangeSelect?.addEventListener("change", () => {
    customDatesDiv.style.display = reportRangeSelect.value === "custom" ? "flex" : "none";
  });

  // Generate Report
  generateBtn?.addEventListener("click", async () => {
    const range = reportRangeSelect.value;
    const startDate = document.getElementById("reportStartDate")?.value;
    const endDate = document.getElementById("reportEndDate")?.value;

    if (range === "custom" && (!startDate || !endDate)) {
      showToast("Please select both start and end dates", "error");
      return;
    }

    generateBtn.disabled = true;
    generateBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generating...';
    reportOutput.innerHTML = '<div class="report-loading"><i class="fas fa-spinner fa-spin"></i> Loading data...</div>';

    try {
      let url = window.API_BASE_URL + `/api/reports/health?range=${range}`;
      if (range === "custom") {
        url += `&start=${startDate}&end=${endDate}`;
      }

      const res = await fetch(url, { credentials: "include" });
      if (!res.ok) throw new Error("Failed to fetch report data");
      const json = await res.json();

      const report = computeReport(json);
      renderReport(report, json);
      downloadBtn.style.display = "inline-flex";
      showToast("Report generated successfully", "success");
      
      // Fetch AI summary after generating report
      fetchAISummary(report, json, range, startDate, endDate);
      
    } catch (err) {
      console.error("❌ Report generation error:", err);
      reportOutput.innerHTML = '<div class="report-empty"><p>❌ Failed to generate report. Please try again.</p></div>';
      showToast("Failed to generate report", "error");
    }

    generateBtn.disabled = false;
    generateBtn.innerHTML = '<i class="fas fa-file-alt"></i> Generate Report';
  });
  
  // Fetch AI Summary
  async function fetchAISummary(reportData, rawData, range, startDate, endDate) {
    const summaryContainer = document.getElementById("aiSummaryContent");
    if (!summaryContainer) return;

    try {
      summaryContainer.innerHTML = '<div class="ai-loading-placeholder"><i class="fas fa-spinner fa-spin"></i> Generating advanced AI summary... This may take a few moments.</div>';
      
      const payload = {
        report: reportData,
        range,
        startDate,
        endDate
      };

      const res = await fetch(window.API_BASE_URL + "/api/reports/summary", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        credentials: "include"
      });

      if (!res.ok) throw new Error("Failed to generate AI summary");
      const data = await res.json();
      
      // Use marked library to parse markdown if available, else just text
      if (window.marked && data.summary) {
        summaryContainer.innerHTML = window.marked.parse(data.summary);
      } else {
        summaryContainer.innerHTML = `<pre style="white-space: pre-wrap; font-family: inherit;">${data.summary}</pre>`;
      }
    } catch (err) {
      console.error("❌ AI Summary error:", err);
      summaryContainer.innerHTML = '<div style="color: #ef4444;"><i class="fas fa-exclamation-triangle"></i> Failed to generate AI summary.</div>';
    }
  }

  // Download PDF
  downloadBtn?.addEventListener("click", () => {
    const reportEl = document.getElementById("reportOutput");
    if (!reportEl || !reportEl.querySelector(".report-content")) {
      showToast("Generate a report first", "error");
      return;
    }

    showToast("Preparing PDF...", "info");

    const opt = {
      margin: [10, 10, 10, 10],
      filename: `PowerPulse_Report_${new Date().toISOString().slice(0, 10)}.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    html2pdf().set(opt).from(reportEl).save().then(() => {
      showToast("PDF downloaded!", "success");
    });
  });

  /* ===================================== */
  /* 🧮 COMPUTE REPORT METRICS             */
  /* ===================================== */

  function computeReport(data) {
    const { grid, generator, start, end } = data;
    const allItems = [];

    // Merge and tag all items
    grid.forEach((item) => allItems.push({ ...item, source: "grid" }));
    generator.forEach((item) => allItems.push({ ...item, source: "generator" }));
    allItems.sort((a, b) => new Date(a.timestamp || a.sk) - new Date(b.timestamp || b.sk));

    const periodStart = new Date(start);
    const periodEnd = new Date(end);
    const periodDurationMs = periodEnd - periodStart;
    const periodDurationHours = periodDurationMs / (1000 * 60 * 60);

    // --- Source Switching ---
    const switchEvents = [];
    let lastSource = null;
    let lastSwitchTime = null;

    allItems.forEach((item) => {
      const ts = new Date(item.timestamp || item.sk);
      if (lastSource && item.source !== lastSource) {
        switchEvents.push({
          time: ts,
          from: lastSource,
          to: item.source,
          durationOnPrev: lastSwitchTime ? ((ts - lastSwitchTime) / 1000 / 60).toFixed(1) : "—",
        });
        lastSwitchTime = ts;
      }
      if (!lastSwitchTime) lastSwitchTime = ts;
      lastSource = item.source;
    });

    // --- Consumption by source ---
    const consumption = { grid: { count: 0, totalPower: 0, firstTs: null, lastTs: null }, generator: { count: 0, totalPower: 0, firstTs: null, lastTs: null } };

    allItems.forEach((item) => {
      const src = item.source;
      const c = consumption[src];
      c.count++;
      c.totalPower += item.avgActivePower || 0;
      const ts = new Date(item.timestamp || item.sk);
      if (!c.firstTs || ts < c.firstTs) c.firstTs = ts;
      if (!c.lastTs || ts > c.lastTs) c.lastTs = ts;
    });

    Object.keys(consumption).forEach((src) => {
      const c = consumption[src];
      c.avgPower = c.count > 0 ? (c.totalPower / c.count) : 0;
      c.durationMs = (c.firstTs && c.lastTs) ? (c.lastTs - c.firstTs) : 0;
      c.durationStr = formatDuration(c.durationMs);
      // Approximate kWh (avg power * hours)
      c.kWh = (c.avgPower * (c.durationMs / 3600000)).toFixed(2);
    });

    // --- Downtime ---
    const downtimePeriods = [];
    const GAP_THRESHOLD_MS = 5 * 60 * 1000; // 5 minutes

    for (let i = 1; i < allItems.length; i++) {
      const prev = new Date(allItems[i - 1].timestamp || allItems[i - 1].sk);
      const curr = new Date(allItems[i].timestamp || allItems[i].sk);
      const gap = curr - prev;
      if (gap > GAP_THRESHOLD_MS) {
        downtimePeriods.push({
          start: prev,
          end: curr,
          durationMs: gap,
          durationStr: formatDuration(gap),
        });
      }
    }

    const totalDowntimeMs = downtimePeriods.reduce((sum, d) => sum + d.durationMs, 0);
    const uptimePercent = periodDurationMs > 0 ? (((periodDurationMs - totalDowntimeMs) / periodDurationMs) * 100).toFixed(1) : "100.0";

    // --- Message Rate ---
    const totalMessages = allItems.length;
    const messagesPerMin = periodDurationMs > 0 ? (totalMessages / (periodDurationMs / 60000)).toFixed(2) : 0;

    // Hourly message rates for peak/lowest
    const hourlyRates = {};
    allItems.forEach((item) => {
      const d = new Date(item.timestamp || item.sk);
      const hourKey = d.toISOString().slice(0, 13);
      hourlyRates[hourKey] = (hourlyRates[hourKey] || 0) + 1;
    });

    const rateEntries = Object.entries(hourlyRates);
    let peakHour = { key: "—", count: 0 };
    let lowestHour = { key: "—", count: Infinity };
    rateEntries.forEach(([key, count]) => {
      if (count > peakHour.count) peakHour = { key, count };
      if (count < lowestHour.count) lowestHour = { key, count };
    });
    if (lowestHour.count === Infinity) lowestHour.count = 0;

    // --- Time-Series Profiling ---
    let bucketMs = 15 * 60 * 1000; // 15 mins
    if (periodDurationHours > 48) bucketMs = 2 * 60 * 60 * 1000; // 2 hours
    else if (periodDurationHours > 24) bucketMs = 60 * 60 * 1000; // 1 hour

    const timeSeries = {
      labels: [],
      gridLoad: [], genLoad: [],
      gridVoltage: [], genVoltage: [],
      powerFactor: [], messageCount: []
    };

    const numBuckets = Math.max(1, Math.ceil(periodDurationMs / bucketMs));
    const buckets = Array.from({ length: numBuckets }, (_, i) => ({
      start: new Date(periodStart.getTime() + i * bucketMs),
      gridCount: 0, gridPowerSum: 0, gridVoltSum: 0,
      genCount: 0, genPowerSum: 0, genVoltSum: 0,
      pfSum: 0, pfCount: 0, msgCount: 0
    }));

    allItems.forEach(item => {
      const ts = new Date(item.timestamp || item.sk).getTime();
      const bucketIdx = Math.floor((ts - periodStart.getTime()) / bucketMs);
      if (bucketIdx >= 0 && bucketIdx < buckets.length) {
        const b = buckets[bucketIdx];
        b.msgCount++;
        if (item.powerFactor != null) { b.pfSum += parseFloat(item.powerFactor); b.pfCount++; }
        if (item.source === 'grid') {
          b.gridCount++;
          if (item.avgActivePower != null) b.gridPowerSum += parseFloat(item.avgActivePower);
          if (item.avgVoltage != null) b.gridVoltSum += parseFloat(item.avgVoltage);
        } else {
          b.genCount++;
          if (item.avgActivePower != null) b.genPowerSum += parseFloat(item.avgActivePower);
          if (item.avgVoltage != null) b.genVoltSum += parseFloat(item.avgVoltage);
        }
      }
    });

    buckets.forEach((b, i) => {
      // Create concise label based on duration
      let label = b.start.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      if (periodDurationHours > 24) {
        label = b.start.toLocaleString([], { month: 'short', day: 'numeric', hour: '2-digit' });
      }
      timeSeries.labels.push(label);
      timeSeries.gridLoad.push(b.gridCount ? (b.gridPowerSum / b.gridCount).toFixed(2) : null);
      timeSeries.genLoad.push(b.genCount ? (b.genPowerSum / b.genCount).toFixed(2) : null);
      timeSeries.gridVoltage.push(b.gridCount ? (b.gridVoltSum / b.gridCount).toFixed(2) : null);
      timeSeries.genVoltage.push(b.genCount ? (b.genVoltSum / b.genCount).toFixed(2) : null);
      timeSeries.powerFactor.push(b.pfCount ? (b.pfSum / b.pfCount).toFixed(3) : null);
      timeSeries.messageCount.push(b.msgCount);
    });

    return {
      periodStart,
      periodEnd,
      periodDurationStr: formatDuration(periodDurationMs),
      switchEvents,
      totalSwitches: switchEvents.length,
      consumption,
      downtimePeriods,
      totalDowntimeStr: formatDuration(totalDowntimeMs),
      uptimePercent,
      totalMessages,
      messagesPerMin,
      peakHour: { time: peakHour.key.slice(11) + ":00", count: peakHour.count },
      lowestHour: { time: lowestHour.key.slice(11) + ":00", count: lowestHour.count },
      timeSeries // Inject time series for Chart.js
    };
  }

  function formatDuration(ms) {
    if (ms <= 0) return "0m";
    const totalMin = Math.floor(ms / 60000);
    const hours = Math.floor(totalMin / 60);
    const mins = totalMin % 60;
    if (hours > 0) return `${hours}h ${mins}m`;
    return `${mins}m`;
  }

  /* ===================================== */
  /* 🎨 RENDER REPORT                       */
  /* ===================================== */

  function renderReport(report, rawData) {
    const gridAvgPower = report.consumption.grid.avgPower.toFixed(2);
    const genAvgPower = report.consumption.generator.avgPower.toFixed(2);

    reportOutput.innerHTML = `
      <div class="report-content" id="reportContent">

        <!-- Header -->
        <div class="report-header-info">
          <div>
            <h3>⚡ PowerPulse - Report</h3>
            <span class="report-period">
              Generated: ${new Date().toLocaleString()} &nbsp;|&nbsp;
              Period: ${report.periodStart.toLocaleDateString()} — ${report.periodEnd.toLocaleDateString()}
              (${report.periodDurationStr})
            </span>
          </div>
        </div>

        <!-- Overview Cards -->
        <div class="overview-cards">
          <div class="overview-card">
            <div class="card-icon">🟢</div>
            <div class="card-value">${report.uptimePercent}%</div>
            <div class="card-label">Uptime</div>
          </div>
          <div class="overview-card">
            <div class="card-icon">🔄</div>
            <div class="card-value">${report.totalSwitches}</div>
            <div class="card-label">Source Switches</div>
          </div>
          <div class="overview-card">
            <div class="card-icon">⚡</div>
            <div class="card-value">${gridAvgPower} kW</div>
            <div class="card-label">Avg Grid Power</div>
          </div>
          <div class="overview-card">
            <div class="card-icon">🔧</div>
            <div class="card-value">${genAvgPower} kW</div>
            <div class="card-label">Avg Gen Power</div>
          </div>
          <div class="overview-card">
            <div class="card-icon">📡</div>
            <div class="card-value">${report.messagesPerMin}/min</div>
            <div class="card-label">Message Rate</div>
          </div>
          <div class="overview-card">
            <div class="card-icon">⏱️</div>
            <div class="card-value">${report.totalDowntimeStr}</div>
            <div class="card-label">Total Downtime</div>
          </div>
        </div>
        
        <!-- AI Summary Section -->
        <div class="ai-summary-container">
          <h3><i class="fas fa-brain"></i> AI Summary & Analysis</h3>
          <div id="aiSummaryContent" class="ai-summary-content">
            <div class="ai-loading-placeholder">
              <i class="fas fa-robot"></i> Preparing to generate summary...
            </div>
          </div>
        </div>

        <!-- Smart Executive Summary -->
        <div class="executive-summary" style="display: none;">
          <i class="fas fa-robot"></i>
          <div>
            <strong>Executive Summary:</strong> 
            The system operated with <strong>${report.uptimePercent}% uptime</strong> over the selected period. 
            There were <strong>${report.totalSwitches}</strong> source switches detected. 
            ${report.consumption.generator.count > 0 ? `The backup generator was utilized for <strong>${report.consumption.generator.durationStr}</strong>, producing an estimated <strong>${report.consumption.generator.kWh} kWh</strong>.` : 'No generator fallback was required (100% grid reliance).'}
            ${report.downtimePeriods.length > 0 ? `A total of <strong>${report.downtimePeriods.length}</strong> downtime incidents occurred, accumulating <strong>${report.totalDowntimeStr}</strong> of offline time.` : 'Zero downtime incidents were recorded, maintaining continuous monitoring.'}
          </div>
        </div>

        <!-- Charts Grid -->
        <div class="charts-grid">
          <!-- Top Row: Summary Doughnuts -->
          <div class="chart-card">
            <h3>⚡ Energy Mix (kWh)</h3>
            <div class="chart-container">
              <canvas id="energyMixChart"></canvas>
            </div>
          </div>
          <div class="chart-card">
            <h3>⏱️ System Uptime</h3>
            <div class="chart-container">
              <canvas id="uptimeChart"></canvas>
            </div>
          </div>

          <!-- Middle Row: Power Profiles (Full Width) -->
          <div class="chart-card full-width">
            <h3>📈 Active Power Load Profile (kW)</h3>
            <div class="chart-container">
              <canvas id="loadProfileChart"></canvas>
            </div>
          </div>
          <div class="chart-card full-width">
            <h3>⚡ Voltage Stability Analysis (V)</h3>
            <div class="chart-container">
              <canvas id="voltageProfileChart"></canvas>
            </div>
          </div>

          <!-- Bottom Row: Health & Efficiency -->
          <div class="chart-card full-width">
            <h3>⚙️ Power Factor Efficiency</h3>
            <div class="chart-container">
              <canvas id="powerFactorChart"></canvas>
            </div>
          </div>
          <div class="chart-card full-width">
            <h3>📡 Telemetry Health (Messages Received)</h3>
            <div class="chart-container">
              <canvas id="telemetryChart"></canvas>
            </div>
          </div>
        </div>
      </div>
    `;

    // Render Charts
    setTimeout(() => {
      // Energy Mix Chart
      const energyCtx = document.getElementById('energyMixChart');
      if (energyCtx) {
        new Chart(energyCtx, {
          type: 'doughnut',
          data: {
            labels: ['Grid (kWh)', 'Generator (kWh)'],
            datasets: [{
              data: [parseFloat(report.consumption.grid.kWh), parseFloat(report.consumption.generator.kWh)],
              backgroundColor: ['#6366f1', '#f59e0b'],
              borderWidth: 0,
              hoverOffset: 4
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { position: 'bottom', labels: { color: '#cbd5e1' } } }
          }
        });
      }

      // Uptime Chart
      const uptimeCtx = document.getElementById('uptimeChart');
      if (uptimeCtx) {
        const uptimeVal = parseFloat(report.uptimePercent);
        const downtimeVal = 100 - uptimeVal;
        new Chart(uptimeCtx, {
          type: 'doughnut',
          data: {
            labels: ['Uptime %', 'Downtime %'],
            datasets: [{
              data: [uptimeVal, downtimeVal],
              backgroundColor: ['#10b981', '#ef4444'],
              borderWidth: 0,
              hoverOffset: 4
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { position: 'bottom', labels: { color: '#cbd5e1' } } }
          }
        });
      }

      // --- Time Series Charts ---
      const commonLineOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { position: 'top', labels: { color: '#cbd5e1' } } },
        scales: {
          x: { ticks: { color: '#64748b' }, grid: { color: 'rgba(51,65,85,0.4)', drawBorder: false } },
          y: { ticks: { color: '#64748b' }, grid: { color: 'rgba(51,65,85,0.4)', drawBorder: false }, beginAtZero: false }
        },
        interaction: { mode: 'index', intersect: false }
      };

      // Load Profile Chart (kW)
      const loadCtx = document.getElementById('loadProfileChart');
      if (loadCtx) {
        new Chart(loadCtx, {
          type: 'line',
          data: {
            labels: report.timeSeries.labels,
            datasets: [
              { label: 'Grid Load (kW)', data: report.timeSeries.gridLoad, borderColor: '#6366f1', backgroundColor: 'rgba(99,102,241,0.1)', borderWidth: 2, fill: true, tension: 0.4, pointRadius: 0, pointHitRadius: 10 },
              { label: 'Gen Load (kW)', data: report.timeSeries.genLoad, borderColor: '#f59e0b', backgroundColor: 'rgba(245,158,11,0.1)', borderWidth: 2, fill: true, tension: 0.4, pointRadius: 0, pointHitRadius: 10 }
            ]
          },
          options: commonLineOptions
        });
      }

      // Voltage Profile Chart (V)
      const voltCtx = document.getElementById('voltageProfileChart');
      if (voltCtx) {
        new Chart(voltCtx, {
          type: 'line',
          data: {
            labels: report.timeSeries.labels,
            datasets: [
              { label: 'Grid Voltage (V)', data: report.timeSeries.gridVoltage, borderColor: '#3b82f6', borderWidth: 2, fill: false, tension: 0.2, pointRadius: 0, pointHitRadius: 10 },
              { label: 'Gen Voltage (V)', data: report.timeSeries.genVoltage, borderColor: '#eab308', borderWidth: 2, fill: false, tension: 0.2, pointRadius: 0, pointHitRadius: 10 }
            ]
          },
          options: commonLineOptions
        });
      }

      // Power Factor Chart
      const pfCtx = document.getElementById('powerFactorChart');
      if (pfCtx) {
        new Chart(pfCtx, {
          type: 'line',
          data: {
            labels: report.timeSeries.labels,
            datasets: [{ label: 'Average Power Factor', data: report.timeSeries.powerFactor, borderColor: '#8b5cf6', backgroundColor: 'rgba(139,92,246,0.1)', borderWidth: 2, fill: true, tension: 0.3, pointRadius: 0, pointHitRadius: 10 }]
          },
          options: {
            ...commonLineOptions,
            scales: { ...commonLineOptions.scales, y: { ...commonLineOptions.scales.y, min: 0.5, max: 1.0 } }
          }
        });
      }

      // Telemetry Chart (Bar)
      const telCtx = document.getElementById('telemetryChart');
      if (telCtx) {
        new Chart(telCtx, {
          type: 'bar',
          data: {
            labels: report.timeSeries.labels,
            datasets: [{ label: 'Messages Received', data: report.timeSeries.messageCount, backgroundColor: '#10b981', borderRadius: 4 }]
          },
          options: {
            responsive: true, maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: commonLineOptions.scales
          }
        });
      }
    }, 100);
  }

  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
});
