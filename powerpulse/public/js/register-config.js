// public/js/register-config.js
(function () {
  "use strict";

  const body = document.body;
  const registerBody = document.getElementById("registerBody");
  const addForm = document.getElementById("addRegisterForm");
  const selectAllCb = document.getElementById("selectAll");
  const deleteSelectedBtn = document.getElementById("deleteSelectedBtn");
  const selectedCountEl = document.getElementById("selectedCount");
  const totalCountEl = document.getElementById("totalCount");
  const emptyState = document.getElementById("emptyState");
  const themeToggle = document.getElementById("themeToggle");
  const connectionStatus = document.getElementById("connectionStatus");

  let registers = [];

  /* 👤 --- LOAD USER PROFILE --- */
  fetch(window.API_BASE_URL + "/api/auth/me")
    .then((res) => res.json())
    .then((data) => {
      if (data.user && data.user.role === "admin") {
        document.querySelectorAll(".admin-nav-item").forEach((n) => (n.style.display = ""));
      }
    })
    .catch(() => {});

  // --- Responsive Sidebar Logic ---
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
  // --------------------------------


  // ── Common fetch options (always include cookies) ──
  const fetchOpts = { credentials: "same-origin" };

  function fetchJSON(url, options = {}) {
    return fetch(url, { ...fetchOpts, ...options });
  }

  // ── Theme toggle ──
  const savedTheme = localStorage.getItem("theme") || "dark";
  body.setAttribute("data-theme", savedTheme);
  if (themeToggle) {
    themeToggle.innerHTML = savedTheme === "dark"
      ? '<i class="fas fa-sun"></i> Light Mode'
      : '<i class="fas fa-moon"></i> Dark Mode';
    themeToggle.addEventListener("click", () => {
      const next = body.getAttribute("data-theme") === "dark" ? "light" : "dark";
      body.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
      themeToggle.innerHTML = next === "dark"
        ? '<i class="fas fa-sun"></i> Light Mode'
        : '<i class="fas fa-moon"></i> Dark Mode';
    });
  }

  // ── Load registers from API ──
  async function loadRegisters() {
    try {
      const res = await fetchJSON(window.API_BASE_URL + "/api/register-config");
      if (!res.ok) {
        if (res.status === 401) {
          window.location.href = "/login";
          return;
        }
        throw new Error(res.statusText);
      }
      const data = await res.json();
      registers = data.registers || [];
      renderTable();
      if (connectionStatus) {
        connectionStatus.textContent = "Connected";
        connectionStatus.style.background = "green";
      }
    } catch (err) {
      console.error("Failed to load registers:", err);
      showToast("Failed to load registers: " + err.message, "error");
      if (connectionStatus) {
        connectionStatus.textContent = "Error";
        connectionStatus.style.background = "red";
      }
    }
  }

  // ── Render the table ──
  function renderTable() {
    registerBody.innerHTML = "";
    totalCountEl.textContent = registers.length;

    if (registers.length === 0) {
      emptyState.style.display = "flex";
      return;
    }
    emptyState.style.display = "none";

    registers.forEach((reg, idx) => {
      const tr = document.createElement("tr");
      tr.dataset.addr = reg.addr;

      const sourceLabel = {
        both: '<span class="badge badge-both">Both</span>',
        grid: '<span class="badge badge-grid">Grid</span>',
        generator: '<span class="badge badge-gen">Generator</span>',
      }[reg.source] || reg.source;

      const phaseLabel = reg.isPhase
        ? '<span class="badge badge-phase">R,Y,B</span>'
        : '<span class="badge badge-scalar">Scalar</span>';

      const statusLabel = reg.enabled !== false
        ? '<span class="badge badge-enabled">Enabled</span>'
        : '<span class="badge badge-disabled">Disabled</span>';

      tr.innerHTML = `
        <td class="col-check"><input type="checkbox" class="row-select" data-idx="${idx}" /></td>
        <td class="col-addr"><code>${reg.addr}</code></td>
        <td class="col-field"><code>${reg.field}</code></td>
        <td class="col-label">${reg.label || "—"}</td>
        <td class="col-unit">${reg.unit || "—"}</td>
        <td class="col-source">${sourceLabel}</td>
        <td class="col-phase">${phaseLabel}</td>
        <td class="col-status">${statusLabel}</td>
        <td class="col-actions">
          <button class="btn-icon btn-toggle" data-idx="${idx}" title="${reg.enabled !== false ? 'Disable' : 'Enable'}">
            <i class="fas fa-${reg.enabled !== false ? 'toggle-on' : 'toggle-off'}"></i>
          </button>
          <button class="btn-icon btn-delete" data-idx="${idx}" title="Delete">
            <i class="fas fa-trash"></i>
          </button>
        </td>
      `;
      registerBody.appendChild(tr);
    });

    updateSelectionCount();
  }

  // ── Add register ──
  addForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const addr = parseInt(document.getElementById("regAddr").value, 10);
    const field = document.getElementById("regField").value.trim();
    const label = document.getElementById("regLabel").value.trim();
    const unit = document.getElementById("regUnit").value.trim();
    const source = document.getElementById("regSource").value;
    const isPhase = document.getElementById("regIsPhase").checked;

    if (isNaN(addr) || !field || !label) {
      showToast("Address, Field Name, and Label are required", "error");
      return;
    }

    // Check for duplicate address client-side
    if (registers.some(r => r.addr === addr)) {
      showToast(`Address ${addr} already exists!`, "error");
      return;
    }

    const newReg = { addr, field, isPhase, source, label, unit, enabled: true };

    try {
      const res = await fetchJSON(window.API_BASE_URL + "/api/register-config", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newReg),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || res.statusText);
      }

      showToast(`Register ${addr} (${field}) added successfully!`, "success");
      addForm.reset();
      await loadRegisters();
    } catch (err) {
      showToast("Failed to add register: " + err.message, "error");
    }
  });

  // ── Table click handler (delete, toggle) ──
  registerBody.addEventListener("click", async (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;

    const idx = parseInt(btn.dataset.idx, 10);
    const reg = registers[idx];
    if (!reg) return;

    if (btn.classList.contains("btn-delete")) {
      if (!confirm(`Delete register ${reg.addr} (${reg.field})?`)) return;
      try {
        const res = await fetchJSON(window.API_BASE_URL + `/api/register-config/${reg.addr}`, {
          method: "DELETE",
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || res.statusText);
        showToast(`Register ${reg.addr} deleted`, "success");
        await loadRegisters();
      } catch (err) {
        showToast("Delete failed: " + err.message, "error");
      }
    }

    if (btn.classList.contains("btn-toggle")) {
      try {
        const res = await fetchJSON(window.API_BASE_URL + `/api/register-config/${reg.addr}/toggle`, {
          method: "PUT",
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || res.statusText);
        showToast(`Register ${reg.addr} ${reg.enabled !== false ? 'disabled' : 'enabled'}`, "success");
        await loadRegisters();
      } catch (err) {
        showToast("Toggle failed: " + err.message, "error");
      }
    }
  });

  // ── Selection logic ──
  registerBody.addEventListener("change", updateSelectionCount);
  selectAllCb.addEventListener("change", () => {
    const checkboxes = registerBody.querySelectorAll(".row-select");
    checkboxes.forEach(cb => cb.checked = selectAllCb.checked);
    updateSelectionCount();
  });

  function updateSelectionCount() {
    const checked = registerBody.querySelectorAll(".row-select:checked");
    const count = checked.length;
    selectedCountEl.textContent = count;
    deleteSelectedBtn.disabled = count === 0;
  }

  // ── Bulk delete ──
  deleteSelectedBtn.addEventListener("click", async () => {
    const checked = registerBody.querySelectorAll(".row-select:checked");
    const addrs = Array.from(checked).map(cb => registers[parseInt(cb.dataset.idx, 10)].addr);

    if (!addrs.length) return;
    if (!confirm(`Delete ${addrs.length} register(s)?`)) return;

    try {
      const res = await fetchJSON(window.API_BASE_URL + "/api/register-config/bulk-delete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ addrs }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || res.statusText);
      showToast(`${addrs.length} register(s) deleted`, "success");
      selectAllCb.checked = false;
      await loadRegisters();
    } catch (err) {
      showToast("Bulk delete failed: " + err.message, "error");
    }
  });

  // ── Toast notification ──
  function showToast(message, type = "info") {
    const existing = document.querySelector(".toast");
    if (existing) existing.remove();

    const toast = document.createElement("div");
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `<i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i> ${message}`;
    document.body.appendChild(toast);

    setTimeout(() => toast.classList.add("show"), 10);
    setTimeout(() => {
      toast.classList.remove("show");
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  }

  // ── Init ──
  loadRegisters();
})();
