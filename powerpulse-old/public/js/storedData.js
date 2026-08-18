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
  /* 📋 DATA TABLE CONTROLS                */
  /* ===================================== */

  const dataSourceSelect = document.getElementById("dataSource");
  const dataRangeSelect = document.getElementById("dataRange");
  const dataLimitSelect = document.getElementById("dataLimit");
  const customDatesDiv = document.getElementById("dataCustomDates");
  const loadDataBtn = document.getElementById("loadDataBtn");
  const statusEl = document.getElementById("dataStatus");
  const thead = document.getElementById("dataTableHead");
  const tbody = document.getElementById("dataTableBody");
  
  const columnPickerBtn = document.getElementById("columnPickerBtn");
  const columnPickerMenu = document.getElementById("columnPickerMenu");

  // Define available columns
  const AVAILABLE_COLUMNS = [
    { id: "timestamp", label: "Timestamp" },
    { id: "voltage", label: "Voltage (R, Y, B)", isPhase: true },
    { id: "current", label: "Current (R, Y, B)", isPhase: true },
    { id: "powerFactor", label: "Power Factor" },
    { id: "thd", label: "THD (%)" },
    { id: "avgVoltage", label: "Average Phase Voltage (V)" },
    { id: "avgCurrent", label: "Average Phase Current (A)" },
    { id: "avgActivePower", label: "Average Active Power (kW)" },
    { id: "frequency", label: "Frequency (Hz)" },
    { id: "apparentPower", label: "Apparent Power (kVA)" },
    { id: "activePower", label: "Active Power (R, Y, B)", isPhase: true },
    { id: "thdVoltage", label: "THD Voltage (R, Y, B)", isPhase: true },
    { id: "thdCurrent", label: "THD Current (R, Y, B)", isPhase: true }
  ];

  // Default selected columns
  let selectedColumns = ["timestamp", "voltage", "current", "powerFactor", "thd", "avgVoltage", "avgCurrent", "avgActivePower"];

  // Populate column picker
  function renderColumnPicker() {
    columnPickerMenu.innerHTML = AVAILABLE_COLUMNS.map(col => `
      <label class="column-picker-item">
        <input type="checkbox" value="${col.id}" ${selectedColumns.includes(col.id) ? "checked" : ""}>
        ${col.label}
      </label>
    `).join("");

    // Add event listeners to checkboxes
    columnPickerMenu.querySelectorAll("input").forEach(cb => {
      cb.addEventListener("change", (e) => {
        if (e.target.checked) {
          if (!selectedColumns.includes(e.target.value)) selectedColumns.push(e.target.value);
        } else {
          selectedColumns = selectedColumns.filter(c => c !== e.target.value);
        }
        // Save to local storage
        localStorage.setItem("storedDataColumns", JSON.stringify(selectedColumns));
        // Re-render table if data exists
        if (window.currentTableData) {
          renderTable(window.currentTableData);
        }
      });
    });
  }

  // Load saved columns from local storage
  const savedCols = localStorage.getItem("storedDataColumns");
  if (savedCols) {
    try {
      selectedColumns = JSON.parse(savedCols);
    } catch(e) {}
  }
  
  renderColumnPicker();

  // Toggle column picker menu
  columnPickerBtn?.addEventListener("click", (e) => {
    e.stopPropagation();
    columnPickerMenu.style.display = columnPickerMenu.style.display === "none" ? "block" : "none";
  });

  // Close menu when clicking outside
  document.addEventListener("click", () => {
    if (columnPickerMenu) columnPickerMenu.style.display = "none";
  });
  columnPickerMenu?.addEventListener("click", (e) => e.stopPropagation());
  const dataFrequencySelect = document.getElementById("dataFrequency");
  const dataSortSelect = document.getElementById("dataSort");

  // Disable Limit dropdown if a specific time frequency is chosen, 
  // because aggregation inherently defines the row count.
  dataFrequencySelect?.addEventListener("change", () => {
    if (dataLimitSelect) {
      if (dataFrequencySelect.value === "none") {
        dataLimitSelect.disabled = false;
        dataLimitSelect.style.opacity = "1";
      } else {
        dataLimitSelect.disabled = true;
        dataLimitSelect.style.opacity = "0.5";
      }
    }
  });

  // Toggle custom date inputs
  dataRangeSelect?.addEventListener("change", () => {
    customDatesDiv.style.display = dataRangeSelect.value === "custom" ? "flex" : "none";
  });

  // Load data button
  loadDataBtn?.addEventListener("click", () => {
    const source = dataSourceSelect.value;
    const range = dataRangeSelect.value;
    const limit = dataLimitSelect?.value || "200";
    const frequency = dataFrequencySelect?.value || "none";
    const sort = dataSortSelect?.value || "desc";
    const startDate = document.getElementById("dataStartDate")?.value;
    const endDate = document.getElementById("dataEndDate")?.value;

    if (range === "custom" && (!startDate || !endDate)) {
      showToast("Please select both start and end dates", "error");
      return;
    }

    loadTableData(source, range, limit, frequency, sort, startDate, endDate);
  });

  async function loadTableData(source, range, limit, frequency, sort, startDate, endDate) {
    tbody.innerHTML = `<tr><td colspan="${selectedColumns.length}" style="text-align:center; padding: 30px; color: #94a3b8;"><i class="fas fa-spinner fa-spin"></i> Loading...</td></tr>`;
    if (statusEl) statusEl.textContent = "Loading data...";

    try {
      let url = window.API_BASE_URL + `/api/history/${source}?range=${range}&limit=${limit}&sort=${sort}`;
      if (frequency !== "none") {
        url += `&frequency=${frequency}`;
      }
      if (range === "custom" && startDate && endDate) {
        url += `&start=${startDate}&end=${endDate}`;
      }

      const res = await fetch(url, { credentials: "include" });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const json = await res.json();

      const data = json.data || [];
      window.currentTableData = data; // store globally for re-rendering on column change

      if (statusEl) {
        const rangeLabels = {
          daily: "Last 24 hours",
          weekly: "Last 7 days",
          monthly: "Last 30 days",
          custom: `${startDate} to ${endDate}`,
        };
        statusEl.textContent = `Showing ${data.length} records — ${rangeLabels[range] || range} — ${source.toUpperCase()}`;
      }

      renderTable(data);
      if (data.length > 0) {
        showToast(`Loaded ${data.length} records`, "success");
      }
    } catch (err) {
      console.error("Failed to load data:", err.message);
      tbody.innerHTML = `<tr><td colspan="${selectedColumns.length}" style="text-align:center; padding: 40px; color: #f87171;">Failed to load data: ${err.message}</td></tr>`;
      if (statusEl) statusEl.textContent = "❌ Failed to load data";
      showToast("Failed to load data", "error");
    }
  }

  function renderTable(data) {
    // Render thead
    const colsToRender = AVAILABLE_COLUMNS.filter(c => selectedColumns.includes(c.id));
    
    thead.innerHTML = `<tr>${colsToRender.map(c => `<th>${c.label}</th>`).join('')}</tr>`;

    if (!data || !data.length) {
      tbody.innerHTML = `<tr><td colspan="${colsToRender.length}" style="text-align:center; padding: 40px; color: #64748b;">No data found for this period.</td></tr>`;
      return;
    }

    const formatPhase = (p) => {
      if (!p) return "—";
      const r = p.R != null ? Number(p.R).toFixed(1) : "—";
      const y = p.Y != null ? Number(p.Y).toFixed(1) : "—";
      const b = p.B != null ? Number(p.B).toFixed(1) : "—";
      return `${r}, ${y}, ${b}`;
    };

    const formatVal = (v, decimals = 2) => (v != null ? Number(v).toFixed(decimals) : "—");

    // Render tbody
    tbody.innerHTML = data.map(d => {
      const tdArray = colsToRender.map(col => {
        if (col.id === "timestamp") {
          return `<td>${new Date(d.timestamp || d.sk).toLocaleString()}</td>`;
        } else if (col.isPhase) {
          return `<td>${formatPhase(d[col.id])}</td>`;
        } else if (col.id === "powerFactor") {
          return `<td>${formatVal(d[col.id], 3)}</td>`;
        } else {
           // Handle values that might be in extras
           let val = d[col.id];
           if (val === undefined && d.extras && d.extras[col.id] !== undefined) {
             val = d.extras[col.id];
           }
           return `<td>${formatVal(val, 2)}</td>`;
        }
      });
      return `<tr>${tdArray.join('')}</tr>`;
    }).join("");
  }

  // Load default data on page load
  loadTableData("grid", "daily", "200");
});
