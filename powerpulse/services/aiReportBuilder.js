// AI Report Builder — uses INLINE STYLES for guaranteed rendering
// No external CSS dependency — everything is self-contained

export function buildReportHtml(metrics, aiText) {
  const {
    totalKwh, gridKwh, dgKwh, peakKw, avgKw,
    pfAvg, pfMin, vAvg, vMin, vMax,
    iAvg, iMin, iMax, msedclCost, dgCost,
    periodHrs, dgHrs, uptimePct, totalSwitches,
    loadFactor, thdVal, alertsCount,
    periodStart, periodEnd, generatedOn
  } = metrics;

  // ── Status assessments ──
  const pfNum = parseFloat(pfAvg), vMinN = parseFloat(vMin), vMaxN = parseFloat(vMax), vAvgN = parseFloat(vAvg);
  const lfNum = parseFloat(loadFactor), thdNum = parseFloat(thdVal);
  const pfOk = !isNaN(pfNum) && pfNum >= 0.90;
  const vOk = !isNaN(vMinN) && vMinN >= 216 && vMaxN <= 244;
  const lfOk = !isNaN(lfNum) && lfNum >= 0.5;
  const thdOk = !isNaN(thdNum) && thdNum <= 5;
  const healthOk = pfOk && vOk;
  const healthWarn = !healthOk && (pfNum >= 0.85 || isNaN(pfNum));

  // Energy split
  const totalE = parseFloat(totalKwh) || 1;
  const gridPct = ((parseFloat(gridKwh) || 0) / totalE * 100).toFixed(0);
  const dgPct = (100 - parseFloat(gridPct)).toFixed(0);
  const totalCost = (parseFloat(msedclCost) || 0) + (parseFloat(dgCost) || 0);
  const gridCostPct = totalCost > 0 ? ((parseFloat(msedclCost) || 0) / totalCost * 100).toFixed(0) : 50;

  // Savings
  const pfSaving = !pfOk ? Math.round(parseFloat(msedclCost) * 0.08) : 0;
  const lfSaving = !lfOk ? Math.round(parseFloat(msedclCost) * 0.05) : 0;
  const dgSaving = parseFloat(dgCost) > 0 ? Math.round(parseFloat(dgCost) * 0.15) : 0;
  const monthlySaving = pfSaving + lfSaving + dgSaving;
  const annualSaving = monthlySaving * 12;

  // Style constants — high contrast colors for dark backgrounds
  const S = {
    card: 'background:rgba(30,41,59,0.85);border:1px solid #475569;border-radius:12px;padding:18px 20px;',
    cardLight: 'background:rgba(99,102,241,0.06);border:1px solid rgba(99,102,241,0.2);border-radius:12px;padding:18px 20px;',
    label: 'font-size:0.72rem;color:#c4b5fd;text-transform:uppercase;letter-spacing:0.05em;font-weight:600;',
    val: 'font-size:1.4rem;font-weight:700;color:#ffffff;line-height:1.2;margin-top:4px;',
    unit: 'font-size:0.75rem;color:#94a3b8;margin-top:2px;',
    sectionHead: 'display:flex;align-items:center;gap:10px;font-size:0.88rem;font-weight:600;color:#c4b5fd;text-transform:uppercase;letter-spacing:0.06em;padding-bottom:10px;border-bottom:2px solid rgba(99,102,241,0.25);margin-bottom:16px;',
    icon: 'width:30px;height:30px;border-radius:8px;background:rgba(99,102,241,0.18);display:flex;align-items:center;justify-content:center;font-size:0.9rem;flex-shrink:0;',
    prose: 'font-size:0.86rem;color:#e2e8f0;line-height:1.75;margin-bottom:12px;',
    row: 'display:flex;justify-content:space-between;align-items:center;padding:7px 0;border-bottom:1px solid rgba(71,85,105,0.5);font-size:0.84rem;',
    rowLabel: 'color:#c4b5fd;',
    rowVal: 'font-weight:600;color:#ffffff;',
  };

  const badge = (ok, okText, failText) => {
    const bg = ok ? 'rgba(16,185,129,0.12)' : 'rgba(239,68,68,0.12)';
    const color = ok ? '#34d399' : '#f87171';
    const text = ok ? (okText || 'Normal') : (failText || 'Alert');
    return `<span style="display:inline-block;font-size:0.68rem;padding:2px 10px;border-radius:20px;font-weight:600;background:${bg};color:${color}">${text}</span>`;
  };

  const warnBadge = (text) => `<span style="display:inline-block;font-size:0.68rem;padding:2px 10px;border-radius:20px;font-weight:600;background:rgba(245,158,11,0.12);color:#fbbf24">${text}</span>`;

  const kpiCard = (label, value, unit, color) => {
    return `<div style="${S.card}position:relative;overflow:hidden;min-width:0;">
      <div style="position:absolute;top:0;left:0;width:4px;height:100%;background:${color};border-radius:4px 0 0 4px;"></div>
      <div style="padding-left:8px;">
        <div style="${S.label}">${label}</div>
        <div style="${S.val}">${value}</div>
        <div style="${S.unit}">${unit}</div>
      </div>
    </div>`;
  };

  const barRow = (label, pct, value, color) => {
    return `<div style="display:flex;align-items:center;gap:10px;margin-bottom:10px;font-size:0.84rem;">
      <div style="width:100px;color:#c4b5fd;text-align:right;flex-shrink:0;font-weight:600;">${label}</div>
      <div style="flex:1;height:12px;background:rgba(71,85,105,0.5);border-radius:6px;overflow:hidden;">
        <div style="height:100%;width:${pct}%;background:linear-gradient(90deg,${color});border-radius:6px;transition:width 0.6s;"></div>
      </div>
      <div style="width:90px;font-weight:700;color:#ffffff;flex-shrink:0;">${value}</div>
    </div>`;
  };

  // ── Build alerts ──
  const alerts = [];
  if (!vOk && !isNaN(vMinN)) alerts.push({ sev: 'critical', icon: '⚡', title: 'Voltage Outside Safe Limits', desc: `Range ${vMin}V–${vMax}V exceeds IS 14697 norm (216–244V)` });
  else if (!isNaN(vMinN)) alerts.push({ sev: 'ok', icon: '✅', title: 'Voltage Normal', desc: `All readings within IS 14697 limits (${vMin}V–${vMax}V)` });
  
  if (!pfOk && !isNaN(pfNum)) alerts.push({ sev: 'critical', icon: '📐', title: 'Low Power Factor', desc: `PF at ${pfAvg} is below MSEDCL mandatory 0.90 threshold. Min: ${pfMin}` });
  else if (!isNaN(pfNum)) alerts.push({ sev: 'ok', icon: '✅', title: 'Power Factor Healthy', desc: `PF at ${pfAvg} exceeds 0.90 threshold` });
  
  if (!thdOk && !isNaN(thdNum)) alerts.push({ sev: 'warning', icon: '📊', title: 'THD Elevated', desc: `Voltage THD at ${thdVal} exceeds IEEE 519 limit of 5%` });
  if (!lfOk && !isNaN(lfNum)) alerts.push({ sev: 'warning', icon: '📉', title: 'Poor Load Factor', desc: `Load factor ${loadFactor} — peak ${peakKw}kW vs avg ${avgKw}kW` });
  if (totalSwitches > 5) alerts.push({ sev: 'warning', icon: '🔄', title: 'Frequent Switching', desc: `${totalSwitches} source switches detected. Downtime: ${dgHrs}` });
  else if (totalSwitches > 0) alerts.push({ sev: 'info', icon: '🔄', title: 'Source Switching', desc: `${totalSwitches} switch(es) between Grid and DG` });

  const alertCard = (a) => {
    const colors = { critical: { bg: 'rgba(239,68,68,0.1)', border: '#ef4444', iconBg: 'rgba(239,68,68,0.2)', titleColor: '#fca5a5' },
      warning: { bg: 'rgba(245,158,11,0.1)', border: '#f59e0b', iconBg: 'rgba(245,158,11,0.2)', titleColor: '#fcd34d' },
      info: { bg: 'rgba(99,102,241,0.1)', border: '#6366f1', iconBg: 'rgba(99,102,241,0.2)', titleColor: '#a5b4fc' },
      ok: { bg: 'rgba(16,185,129,0.1)', border: '#10b981', iconBg: 'rgba(16,185,129,0.2)', titleColor: '#6ee7b7' }
    };
    const c = colors[a.sev] || colors.info;
    return `<div style="display:flex;gap:14px;align-items:flex-start;padding:16px 18px;border-radius:12px;background:rgba(30,41,59,0.85);border:1px solid #475569;border-left:4px solid ${c.border};margin-bottom:10px;">
      <div style="width:38px;height:38px;border-radius:10px;background:${c.iconBg};display:flex;align-items:center;justify-content:center;font-size:1.2rem;flex-shrink:0;">${a.icon}</div>
      <div style="flex:1;"><div style="font-size:0.88rem;font-weight:700;color:${c.titleColor};margin-bottom:4px;">${a.title}</div><div style="font-size:0.82rem;color:#e2e8f0;line-height:1.6;">${a.desc}</div></div>
    </div>`;
  };

  const recCard = (r) => `<div style="${S.card}margin-bottom:8px;">
    <div style="font-size:0.88rem;font-weight:700;color:#ffffff;margin-bottom:6px;">💡 ${r.title}</div>
    <div style="font-size:0.8rem;color:#cbd5e1;line-height:1.65;">${r.description}</div>
    ${r.saving ? `<div style="font-size:0.78rem;color:#34d399;font-weight:600;margin-top:8px;">💰 ${r.saving}</div>` : ''}
  </div>`;

  const complianceDot = (ok, label) => {
    const color = ok ? '#10b981' : ok === null ? '#f59e0b' : '#ef4444';
    return `<div style="display:flex;gap:10px;align-items:flex-start;padding:10px 0;border-bottom:1px solid rgba(71,85,105,0.4);font-size:0.84rem;color:#e2e8f0;">
      <div style="width:10px;height:10px;border-radius:50%;background:${color};flex-shrink:0;margin-top:4px;"></div>
      <div>${label}</div>
    </div>`;
  };

  // ══════════ BUILD HTML ══════════
  return `<div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;max-width:100%;">

<!-- COVER -->
<div style="background:linear-gradient(135deg,#1e1b4b,#312e81,#1e293b);border-radius:14px;padding:28px 32px;margin-bottom:22px;position:relative;overflow:hidden;">
  <div style="position:absolute;top:-40%;right:-10%;width:280px;height:280px;background:radial-gradient(circle,rgba(99,102,241,0.2) 0%,transparent 70%);border-radius:50%;"></div>
  <div style="position:relative;">
    <div style="font-size:1.35rem;font-weight:700;color:#ffffff;">⚡ Power Quality & Energy Audit Report</div>
    <div style="font-size:0.85rem;color:#c4b5fd;margin-top:4px;">AISSMS IOIT, Pune — IoT-Based Energy Monitoring (PowerPulse)</div>
    <div style="display:flex;gap:12px;margin-top:16px;flex-wrap:wrap;">
      <div style="background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.12);border-radius:8px;padding:8px 14px;"><div style="font-size:0.65rem;color:#a5b4fc;text-transform:uppercase;letter-spacing:0.06em;font-weight:600;">Period</div><div style="font-size:0.8rem;color:#ffffff;font-weight:600;margin-top:2px;">${periodStart} → ${periodEnd}</div></div>
      <div style="background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.12);border-radius:8px;padding:8px 14px;"><div style="font-size:0.65rem;color:#a5b4fc;text-transform:uppercase;letter-spacing:0.06em;font-weight:600;">Generated</div><div style="font-size:0.8rem;color:#ffffff;font-weight:600;margin-top:2px;">${generatedOn}</div></div>
      <div style="background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.12);border-radius:8px;padding:8px 14px;"><div style="font-size:0.65rem;color:#a5b4fc;text-transform:uppercase;letter-spacing:0.06em;font-weight:600;">Uptime</div><div style="font-size:0.8rem;color:#ffffff;font-weight:600;margin-top:2px;">${uptimePct}%</div></div>
      <div style="background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.12);border-radius:8px;padding:8px 14px;"><div style="font-size:0.65rem;color:#a5b4fc;text-transform:uppercase;letter-spacing:0.06em;font-weight:600;">Health</div><div style="margin-top:2px;">${healthOk ? badge(true, 'Good') : healthWarn ? warnBadge('Warning') : badge(false, '', 'Critical')}</div></div>
      <div style="background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.12);border-radius:8px;padding:8px 14px;"><div style="font-size:0.65rem;color:#a5b4fc;text-transform:uppercase;letter-spacing:0.06em;font-weight:600;">Supply</div><div style="font-size:0.8rem;color:#ffffff;font-weight:600;margin-top:2px;">MSEDCL + DG</div></div>
    </div>
  </div>
</div>

<!-- EXECUTIVE SUMMARY -->
<div style="margin-bottom:22px;">
  <div style="${S.sectionHead}"><div style="${S.icon}">📋</div>Executive Summary</div>
  <div style="${S.card}border-left:4px solid #8b5cf6;">
    <p style="font-size:0.86rem;color:#e2e8f0;line-height:1.8;margin:0;">${aiText.executiveSummary}</p>
  </div>
</div>

<!-- ENERGY KPIs -->
<div style="margin-bottom:22px;">
  <div style="${S.sectionHead}"><div style="${S.icon}">📊</div>Energy Consumption Overview</div>
  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(130px,1fr));gap:10px;margin-bottom:14px;">
    ${kpiCard('Total Energy', totalKwh, 'kWh', '#6366f1')}
    ${kpiCard('Grid (MSEDCL)', gridKwh, 'kWh', '#06b6d4')}
    ${kpiCard('Generator (DG)', dgKwh, 'kWh', '#f59e0b')}
    ${kpiCard('Peak Demand', peakKw, 'kW', '#a78bfa')}
    ${kpiCard('Avg Demand', avgKw, 'kW', '#10b981')}
    ${kpiCard('Load Factor', loadFactor, lfOk ? badge(true, 'Good') : badge(false, '', 'Poor'), lfOk ? '#10b981' : '#ef4444')}
  </div>
  ${barRow('⚡ Grid', gridPct, gridKwh + ' kWh', '#6366f1,#818cf8')}
  ${barRow('🔧 DG Set', dgPct, dgKwh + ' kWh', '#f59e0b,#fbbf24')}
</div>

<!-- POWER QUALITY -->
<div style="margin-bottom:22px;">
  <div style="${S.sectionHead}"><div style="${S.icon}">🔍</div>Power Quality Assessment</div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:14px;">
    <div style="${S.card}">
      <div style="font-size:0.88rem;font-weight:700;color:#ffffff;margin-bottom:12px;display:flex;align-items:center;gap:6px;">⚡ Voltage Profile</div>
      <div style="${S.row}"><span style="${S.rowLabel}">Average</span><span style="${S.rowVal}">${vAvg} V ${badge(vOk)}</span></div>
      <div style="${S.row}"><span style="${S.rowLabel}">Minimum</span><span style="${S.rowVal}">${vMin} V</span></div>
      <div style="${S.row}"><span style="${S.rowLabel}">Maximum</span><span style="${S.rowVal}">${vMax} V</span></div>
      <div style="${S.row}border:none;"><span style="${S.rowLabel}">IS 14697 Norm</span><span style="${S.rowVal}">216 – 244 V</span></div>
    </div>
    <div style="${S.card}">
      <div style="font-size:0.88rem;font-weight:700;color:#ffffff;margin-bottom:12px;display:flex;align-items:center;gap:6px;">📐 Power Factor & THD</div>
      <div style="${S.row}"><span style="${S.rowLabel}">Average PF</span><span style="${S.rowVal}">${pfAvg} ${badge(pfOk, 'Healthy', 'Low')}</span></div>
      <div style="${S.row}"><span style="${S.rowLabel}">Minimum PF</span><span style="${S.rowVal}">${pfMin}</span></div>
      <div style="${S.row}"><span style="${S.rowLabel}">MSEDCL Threshold</span><span style="${S.rowVal}">0.90</span></div>
      <div style="${S.row}border:none;"><span style="${S.rowLabel}">Voltage THD</span><span style="${S.rowVal}">${thdVal} ${thdOk ? badge(true) : badge(false, '', 'High')}</span></div>
    </div>
  </div>
  ${barRow('Voltage', Math.min((vAvgN / 260 * 100), 100).toFixed(0), vAvg + ' V', vOk ? '#10b981,#34d399' : '#ef4444,#f87171')}
  ${barRow('Power Factor', (pfNum * 100).toFixed(0), pfAvg, pfOk ? '#10b981,#34d399' : '#ef4444,#f87171')}
  ${!isNaN(thdNum) ? barRow('THD', Math.min((thdNum / 10 * 100), 100).toFixed(0), thdVal, thdOk ? '#10b981,#34d399' : '#f59e0b,#fbbf24') : ''}
</div>

<!-- ANOMALIES -->
<div style="margin-bottom:22px;">
  <div style="${S.sectionHead}"><div style="${S.icon}">⚠️</div>Anomalies & Alerts</div>
  ${alerts.map(alertCard).join('\n')}
  <div style="${S.card}border-left:4px solid #f59e0b;margin-top:12px;">
    <p style="font-size:0.84rem;color:#e2e8f0;line-height:1.7;margin:0;"><span style="color:#fbbf24;font-weight:600;">Analysis: </span>${aiText.anomalyAnalysis}</p>
  </div>
</div>

<!-- SOURCE ANALYSIS -->
<div style="margin-bottom:22px;">
  <div style="${S.sectionHead}"><div style="${S.icon}">🔄</div>Source-wise Cost Analysis</div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:14px;">
    <div style="${S.card}">
      <div style="font-size:0.88rem;font-weight:700;color:#ffffff;margin-bottom:12px;">⚡ MSEDCL Grid</div>
      <div style="${S.row}"><span style="${S.rowLabel}">Hours</span><span style="${S.rowVal}">~${periodHrs} hrs</span></div>
      <div style="${S.row}"><span style="${S.rowLabel}">Energy</span><span style="${S.rowVal}">${gridKwh} kWh</span></div>
      <div style="${S.row}"><span style="${S.rowLabel}">Rate</span><span style="${S.rowVal}">₹8/kWh</span></div>
      <div style="${S.row}border:none;"><span style="${S.rowLabel}">Cost</span><span style="font-weight:700;color:#34d399;font-size:1rem;">₹${msedclCost}</span></div>
    </div>
    <div style="${S.card}">
      <div style="font-size:0.88rem;font-weight:700;color:#ffffff;margin-bottom:12px;">🔧 Diesel Generator</div>
      <div style="${S.row}"><span style="${S.rowLabel}">Run Time</span><span style="${S.rowVal}">${dgHrs}</span></div>
      <div style="${S.row}"><span style="${S.rowLabel}">Energy</span><span style="${S.rowVal}">${dgKwh} kWh</span></div>
      <div style="${S.row}"><span style="${S.rowLabel}">Diesel Rate</span><span style="${S.rowVal}">₹95/L</span></div>
      <div style="${S.row}border:none;"><span style="${S.rowLabel}">Cost</span><span style="font-weight:700;color:#fbbf24;">₹${dgCost}</span></div>
    </div>
  </div>
  ${barRow('Grid Cost', gridCostPct, '₹' + msedclCost, '#6366f1,#818cf8')}
  ${barRow('DG Cost', 100 - gridCostPct, '₹' + dgCost, '#f59e0b,#fbbf24')}
  <div style="background:linear-gradient(135deg,rgba(99,102,241,0.12),rgba(139,92,246,0.08));border:1px solid rgba(99,102,241,0.3);border-radius:10px;padding:14px 20px;display:flex;justify-content:space-between;align-items:center;margin-top:10px;">
    <span style="font-size:0.88rem;color:#c4b5fd;font-weight:600;">Total Energy Cost</span>
    <span style="font-size:1.4rem;font-weight:700;color:#ffffff;">₹${totalCost.toFixed(2)}</span>
  </div>
</div>

<!-- RECOMMENDATIONS -->
<div style="margin-bottom:22px;">
  <div style="${S.sectionHead}"><div style="${S.icon}">💡</div>Recommendations</div>
  ${aiText.recommendations.map(recCard).join('\n')}
</div>

<!-- SAVINGS -->
<div style="margin-bottom:22px;">
  <div style="${S.sectionHead}"><div style="${S.icon}">💰</div>Projected Savings</div>
  <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:14px;">
    ${kpiCard('Monthly', '₹' + monthlySaving.toLocaleString('en-IN'), 'per month', '#10b981')}
    ${kpiCard('Annual', '₹' + annualSaving.toLocaleString('en-IN'), 'per year', '#10b981')}
    ${kpiCard('Payback', annualSaving > 0 ? Math.ceil(annualSaving * 0.8 / (monthlySaving || 1)) : 'N/A', 'months (est.)', '#06b6d4')}
  </div>
  <div style="background:linear-gradient(135deg,rgba(16,185,129,0.12),rgba(6,182,212,0.1));border:1px solid rgba(16,185,129,0.3);border-radius:10px;padding:16px 20px;display:flex;justify-content:space-between;align-items:center;">
    <span style="font-size:0.88rem;color:#6ee7b7;font-weight:600;">🎯 Total Projected Annual Savings</span>
    <span style="font-size:1.5rem;font-weight:700;color:#34d399;">₹${annualSaving.toLocaleString('en-IN')}</span>
  </div>
</div>

<!-- COMPLIANCE -->
<div style="margin-bottom:22px;">
  <div style="${S.sectionHead}"><div style="${S.icon}">📋</div>Regulatory Compliance</div>
  <div style="${S.card}">
    ${complianceDot(pfOk, `<strong style="color:#e2e8f0">MSEDCL PF Clause:</strong> Power Factor ${pfOk ? 'meets' : 'below'} the 0.90 threshold (${pfAvg})`)}
    ${complianceDot(vOk, `<strong style="color:#e2e8f0">IS 14697 Voltage:</strong> Supply voltage ${vOk ? 'within' : 'outside'} ±6% of 230V (${vMin}V–${vMax}V)`)}
    ${complianceDot(thdOk, `<strong style="color:#e2e8f0">IEEE 519 / BEE:</strong> THD at ${thdVal} is ${thdOk ? 'within' : 'exceeding'} 5% limit`)}
    ${complianceDot(healthOk, `<strong style="color:#e2e8f0">CEA Standards 2010:</strong> ${healthOk ? 'All parameters comply' : 'Some parameters need attention'}`)}
  </div>
</div>

<!-- CONCLUSION -->
<div style="margin-bottom:22px;">
  <div style="${S.sectionHead}"><div style="${S.icon}">📝</div>Conclusion</div>
  <div style="${S.card}border-left:4px solid #10b981;">
    <p style="font-size:0.86rem;color:#e2e8f0;line-height:1.8;margin:0;">${aiText.conclusion}</p>
  </div>
</div>

<!-- FOOTER -->
<div style="border-top:1px solid #475569;padding-top:12px;margin-top:20px;font-size:0.72rem;color:#94a3b8;display:flex;justify-content:space-between;">
  <span>PowerPulse Dashboard — AISSMS IOIT, Pune 411001</span>
  <span>Confidential — Internal Use Only</span>
</div>

</div>`;
}
