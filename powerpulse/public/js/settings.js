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
          document.querySelectorAll(".admin-settings-tab").forEach((t) => (t.style.display = ""));
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

  document.addEventListener("click", (event) => {
    const isClickInside = sidebar.contains(event.target) || toggleSidebarBtn.contains(event.target);
    if (!isClickInside && window.innerWidth <= 768) {
      sidebar.classList.add("collapsed");
      mainContent.classList.add("expanded");
      localStorage.setItem("sidebarCollapsed", true);
    }
  });

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

  /* 🗂️ --- TABS --- */
  const tabs = document.querySelectorAll(".settings-tab");
  const panels = document.querySelectorAll(".settings-panel");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      panels.forEach((p) => p.classList.remove("active"));
      tab.classList.add("active");
      const panel = document.getElementById(`panel-${tab.dataset.tab}`);
      if (panel) panel.classList.add("active");
    });
  });

  /* 💡 --- BILLING TYPE: show/hide rate rows --- */
  const billingTypeSelect = document.getElementById("settingBillingType");
  function updateBillingVisibility() {
    const bt = billingTypeSelect?.value || "kwh";
    const showKvah = ["kvah", "kwh_kvah"].includes(bt);
    const toggle = (id, visible) => {
      const el = document.getElementById(id);
      if (el) el.style.display = visible ? "" : "none";
    };
    toggle("rowKvahRate", showKvah);
  }
  billingTypeSelect?.addEventListener("change", updateBillingVisibility);
  updateBillingVisibility(); // run once on load

  /* 📊 --- RANGE SLIDERS --- */
  const maxPointsSlider = document.getElementById("settingMaxPoints");
  const maxPointsValue = document.getElementById("maxPointsValue");
  maxPointsSlider?.addEventListener("input", () => {
    maxPointsValue.textContent = maxPointsSlider.value;
  });

  const maxTokensSlider = document.getElementById("settingMaxTokens");
  const maxTokensValue = document.getElementById("maxTokensValue");
  maxTokensSlider?.addEventListener("input", () => {
    maxTokensValue.textContent = maxTokensSlider.value;
  });

  const tempSlider = document.getElementById("settingTemperature");
  const tempValue = document.getElementById("temperatureValue");
  tempSlider?.addEventListener("input", () => {
    tempValue.textContent = parseFloat(tempSlider.value).toFixed(1);
  });

  /* 🔑 --- API KEY VISIBILITY TOGGLE --- */
  const apiKeyInput = document.getElementById("settingApiKey");
  const toggleVisBtn = document.getElementById("toggleApiKeyVisibility");
  toggleVisBtn?.addEventListener("click", () => {
    const isPassword = apiKeyInput.type === "password";
    apiKeyInput.type = isPassword ? "text" : "password";
    toggleVisBtn.innerHTML = isPassword ? '<i class="fas fa-eye-slash"></i>' : '<i class="fas fa-eye"></i>';
  });

  /* 🤖 --- AI HUB LOGIC --- */
  const aiProviderBadgeText = document.getElementById("aiProviderBadgeText");
  const modelIdSelect = document.getElementById("settingModelId");
  const modelIdCustom = document.getElementById("settingModelIdCustom");

  function updateAiContext(e) {
    if (!apiKeyInput || !aiProviderBadgeText || !modelIdSelect) return;

    if (e?.target === apiKeyInput) {
        // Auto-select provider dropdown based on newly pasted key
        const val = apiKeyInput.value.trim();
        if (val && !val.includes("****")) {
            if (val.startsWith("sk-")) {
                modelIdSelect.value = "gpt-4o";
            } else {
                modelIdSelect.value = "meta.llama3-70b-instruct-v1:0";
            }
        }
    }

    const model = modelIdSelect.value;
    if (modelIdCustom) modelIdCustom.style.display = model === "custom" ? "block" : "none";

    if (aiProviderBadgeText) {
      const isOpenAi = model.startsWith("gpt-") || model.startsWith("o1-");
      if (isOpenAi) {
        aiProviderBadgeText.innerHTML = `Provider: <strong style="color:#10b981;">OpenAI</strong> (Using OpenAI Key)`;
      } else if (model === "custom") {
        aiProviderBadgeText.innerHTML = `Custom model — provider auto-detected from model ID prefix`;
      } else {
        aiProviderBadgeText.innerHTML = `Provider: <strong style="color:#f59e0b;">AWS Bedrock</strong> (Using Bedrock Key)`;
      }
    }
  }

  apiKeyInput?.addEventListener("input", updateAiContext);
  modelIdSelect?.addEventListener("change", updateAiContext);
  modelIdCustom?.addEventListener("input", updateAiContext);

  /* 🔔 --- CUSTOM ALERTS LOGIC --- */
  const customAlertsContainer = document.getElementById("customAlertsContainer");
  const addCustomAlertBtn = document.getElementById("addCustomAlertBtn");

  function updateCustomAlertsSummary() {
    const summaryList = document.getElementById("customAlertsSummaryList");
    if (!summaryList) return;
    
    const rows = Array.from(document.querySelectorAll(".custom-alert-row"));
    if (rows.length === 0) {
      summaryList.innerHTML = '<span style="color:#64748b; font-size:0.8rem; font-style:italic;">No custom alerts defined.</span>';
      return;
    }
    
    summaryList.innerHTML = rows.map(row => {
      const field = row.querySelector(".alert-field").value.trim();
      const opSelect = row.querySelector(".alert-op");
      const opName = opSelect.options[opSelect.selectedIndex].text.split(' (')[0]; // Just the name, not the symbol
      const val = row.querySelector(".alert-val").value;
      const unit = row.querySelector(".alert-unit").value.trim();
      
      if (!field || isNaN(parseFloat(val))) return '';
      
      return `
        <div class="setting-row" style="padding: 5px 0; border-bottom: none; min-height: auto;">
          <div class="setting-info">
            <div class="setting-label" style="font-size: 0.85rem;">${field}</div>
          </div>
          <div class="setting-control" style="font-size: 0.85rem; color: #cbd5e1;">
            ${opName} ${val} ${unit}
          </div>
        </div>
      `;
    }).join("");
  }

  // Bind summary update to changes in rows
  customAlertsContainer?.addEventListener("input", updateCustomAlertsSummary);
  customAlertsContainer?.addEventListener("change", updateCustomAlertsSummary);

  function addCustomAlertRow(data = { field: "", op: ">", val: "", unit: "" }) {
    const row = document.createElement("div");
    row.className = "custom-alert-row";
    row.style.display = "flex";
    row.style.gap = "10px";
    row.style.marginBottom = "8px";
    row.style.alignItems = "center";
    
    row.innerHTML = `
      <input type="text" placeholder="field" class="settings-input alert-field" value="${data.field}" style="flex: 2;" />
      <select class="settings-select alert-op" style="flex: 1.2; height: 38px;">
        <option value=">" ${data.op === '>' ? 'selected' : ''}>Greater Than (&gt;)</option>
        <option value="<" ${data.op === '<' ? 'selected' : ''}>Less Than (&lt;)</option>
        <option value="==" ${data.op === '==' ? 'selected' : ''}>Equal To (==)</option>
      </select>
      <input type="number" placeholder="Value" class="settings-input alert-val" value="${data.val}" style="flex: 1;" />
      <input type="text" placeholder="Unit" class="settings-input alert-unit" value="${data.unit || ''}" style="flex: 0.5;" />
      <button class="btn btn-danger remove-alert-row" style="padding: 0 10px; height: 38px;"><i class="fas fa-trash"></i></button>
    `;
    
    row.querySelector(".remove-alert-row").addEventListener("click", () => {
      row.remove();
      updateCustomAlertsSummary();
    });
    customAlertsContainer.appendChild(row);
    updateCustomAlertsSummary();
  }

  addCustomAlertBtn?.addEventListener("click", () => addCustomAlertRow());

  /* 📥 --- LOAD SETTINGS --- */
  let currentSettings = {};

  async function loadSettings() {
    try {
      const res = await fetch(window.API_BASE_URL + "/api/settings", { credentials: "include" });
      if (!res.ok) throw new Error("Failed to load settings");
      currentSettings = await res.json();
      populateForm(currentSettings);
    } catch (err) {
      console.error("❌ Failed to load settings:", err);
      showToast("Failed to load settings", "error");
    }
  }

  function populateForm(s) {
    // General
    document.getElementById("settingTheme").value = s.general?.theme || "dark";
    document.getElementById("settingRefreshInterval").value = s.general?.refreshInterval || 30;

    // Charts
    const mp = s.charts?.maxDataPoints || 20;
    document.getElementById("settingMaxPoints").value = mp;
    document.getElementById("maxPointsValue").textContent = mp;
    document.getElementById("settingYAxisMode").value = s.charts?.yAxisMode || "auto";
    document.getElementById("settingAnimation").checked = s.charts?.animation || false;
    if (document.getElementById("settingShowChartToolbar")) {
      document.getElementById("settingShowChartToolbar").checked = s.charts?.showChartToolbar !== false; // default true
    }

    // Alerts
    document.getElementById("settingVoltageMin").value = s.alerts?.voltageMin ?? 180;
    document.getElementById("settingVoltageMax").value = s.alerts?.voltageMax ?? 250;
    document.getElementById("settingCurrentMax").value = s.alerts?.currentMax ?? 100;
    document.getElementById("settingPfMin").value = s.alerts?.pfMin ?? 0.80;
    document.getElementById("settingThdMax").value = s.alerts?.thdMax ?? 10;
    document.getElementById("settingCooldown").value = s.alerts?.cooldownSeconds ?? 300;

    // AI
    const activeModel = s.ai?.modelId || s.ai?.bedrockModelId || "meta.llama3-70b-instruct-v1:0";
    
    if (modelIdSelect) {
      const predefinedModels = [
        "anthropic.claude-3-haiku-20240307-v1:0", "anthropic.claude-3-5-sonnet-20240620-v1:0", "anthropic.claude-3-sonnet-20240229-v1:0",
        "meta.llama3-70b-instruct-v1:0", "meta.llama3-8b-instruct-v1:0",
        "gpt-4o", "gpt-4o-mini", "o1-preview", "o1-mini", "gpt-4-turbo"
      ];
      if (predefinedModels.includes(activeModel.trim())) {
        modelIdSelect.value = activeModel.trim();
      } else {
        modelIdSelect.value = "custom";
        if (modelIdCustom) modelIdCustom.value = activeModel;
      }
    }

    if (document.getElementById("settingApiKey")) {
      let displayedKey = "";
      if (activeModel.startsWith("gpt-") || activeModel.startsWith("o1-")) {
          displayedKey = s.ai?.openaiApiKey || "";
      } else {
          displayedKey = s.ai?.bedrockApiKey || "";
      }
      document.getElementById("settingApiKey").value = displayedKey;
    }
    
    // Call manually to set Badge correctly based on loaded model without simulating key paste
    updateAiContext({ target: null });
    
    const mt = s.ai?.maxTokens || 1000;
    if (document.getElementById("settingMaxTokens")) {
      document.getElementById("settingMaxTokens").value = mt;
    }
    if (maxTokensValue) maxTokensValue.textContent = mt;

    const temp = s.ai?.temperature ?? 0.4;
    if (document.getElementById("settingTemperature")) {
      document.getElementById("settingTemperature").value = temp;
    }
    if (tempValue) tempValue.textContent = parseFloat(temp).toFixed(1);

    // Custom Alerts
    if (customAlertsContainer) {
      customAlertsContainer.innerHTML = "";
      if (s.alerts?.custom && Array.isArray(s.alerts.custom)) {
        s.alerts.custom.forEach(alt => addCustomAlertRow(alt));
      }
    }

    // Reports
    document.getElementById("settingCompanyName").value          = s.reports?.companyName        || "PowerPulse";
    document.getElementById("settingElectricityRate").value      = s.reports?.electricityRate      ?? 8;
    if (document.getElementById("settingKvahRate"))     document.getElementById("settingKvahRate").value          = s.reports?.kvahRate              ?? 6;
    if (document.getElementById("settingBillingType"))   document.getElementById("settingBillingType").value       = s.reports?.billingType            || "kwh";
    document.getElementById("settingCurrency").value            = s.reports?.currency              || "₹";

    const includeCost = document.getElementById("settingIncludeCost");
    if (includeCost) includeCost.checked = s.reports?.includeCost !== false;
    const includeKvah = document.getElementById("settingIncludeKvah");
    if (includeKvah) includeKvah.checked = s.reports?.includeKvah !== false;

    // Re-run billing visibility after loading values
    updateBillingVisibility();
  }

  function gatherFormData() {
    const rawKey = document.getElementById("settingApiKey")?.value.trim() || "";
    let bedrockApiKey = currentSettings.ai?.bedrockApiKey || "";
    let openaiApiKey = currentSettings.ai?.openaiApiKey || "";
    
    let modelId = modelIdSelect?.value === "custom" ? modelIdCustom?.value.trim() : modelIdSelect?.value;
    if (!modelId) modelId = currentSettings.ai?.modelId || "meta.llama3-70b-instruct-v1:0";

    if (rawKey && !rawKey.includes("****")) {
        // Depending on which model they selected, we apply the API key to its corresponding slot
        const isOpenAi = modelId.startsWith("gpt-") || modelId.startsWith("o1-");
        if (isOpenAi) {
            openaiApiKey = rawKey;
        } else {
            bedrockApiKey = rawKey;
        }
    }

    return {
      general: {
        theme: document.getElementById("settingTheme").value,
        refreshInterval: parseInt(document.getElementById("settingRefreshInterval").value) || 30,
      },
      charts: {
        maxDataPoints: parseInt(document.getElementById("settingMaxPoints").value) || 20,
        yAxisMode: document.getElementById("settingYAxisMode").value,
        animation: document.getElementById("settingAnimation").checked,
        showChartToolbar: document.getElementById("settingShowChartToolbar")?.checked ?? true,
      },
      alerts: {
        voltageMin: parseFloat(document.getElementById("settingVoltageMin").value) || 180,
        voltageMax: parseFloat(document.getElementById("settingVoltageMax").value) || 250,
        currentMax: parseFloat(document.getElementById("settingCurrentMax").value) || 100,
        pfMin: parseFloat(document.getElementById("settingPfMin").value) || 0.80,
        thdMax: parseFloat(document.getElementById("settingThdMax").value) || 10,
        cooldownSeconds: parseInt(document.getElementById("settingCooldown").value) || 300,
        custom: Array.from(document.querySelectorAll(".custom-alert-row")).map(row => ({
          field: row.querySelector(".alert-field").value.trim(),
          op: row.querySelector(".alert-op").value,
          val: parseFloat(row.querySelector(".alert-val").value),
          unit: row.querySelector(".alert-unit").value.trim()
        })).filter(a => a.field && !isNaN(a.val))
      },
      ai: {
        bedrockApiKey,
        openaiApiKey,
        modelId,
        maxTokens: parseInt(document.getElementById("settingMaxTokens")?.value) || 1000,
        temperature: parseFloat(document.getElementById("settingTemperature")?.value) || 0.4,
      },
      reports: {
        companyName:      document.getElementById("settingCompanyName").value.trim() || "PowerPulse",
        electricityRate:  parseFloat(document.getElementById("settingElectricityRate").value) || 8,
        kvahRate:         parseFloat(document.getElementById("settingKvahRate")?.value)        ?? 6,
        billingType:      document.getElementById("settingBillingType")?.value                 || "kwh",
        currency:         document.getElementById("settingCurrency").value                     || "₹",
        includeCost:      document.getElementById("settingIncludeCost")?.checked               ?? true,
        includeKvah:      document.getElementById("settingIncludeKvah")?.checked               ?? true,
      }
    };
  }

  /* 💾 --- SAVE SETTINGS --- */
  document.getElementById("settingsSaveBtn")?.addEventListener("click", async () => {
    const btn = document.getElementById("settingsSaveBtn");
    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Saving...';

    try {
      const formData = gatherFormData();
      const res = await fetch(window.API_BASE_URL + "/api/settings", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error((await res.json()).error || "Save failed");
      currentSettings = formData;
      showToast("Settings saved successfully!", "success");
    } catch (err) {
      console.error("❌ Save error:", err);
      showToast("Failed to save settings: " + err.message, "error");
    }

    btn.disabled = false;
    btn.innerHTML = '<i class="fas fa-save"></i> Save Settings';
  });

  /* 🔄 --- RESET DEFAULTS --- */
  document.getElementById("settingsResetBtn")?.addEventListener("click", async () => {
    if (!confirm("Reset all settings to defaults? This cannot be undone.")) return;

    try {
      const res = await fetch(window.API_BASE_URL + "/api/settings/reset", {
        method: "POST",
        credentials: "include",
      });
      if (!res.ok) throw new Error("Reset failed");
      const defaults = await res.json();
      currentSettings = defaults;
      populateForm(defaults);
      showToast("Settings reset to defaults", "success");
    } catch (err) {
      showToast("Failed to reset: " + err.message, "error");
    }
  });

  // Load on page init
  loadSettings();
});
