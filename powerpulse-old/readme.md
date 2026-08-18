Everything is running and working! Here's a summary of what I verified and my UI/functionality suggestions:

✅ What's Working
Dashboard — Dropdown selectors for Time Range (Daily/Weekly/Monthly/Yearly/Custom) and Source (Grid/Generator) look clean
Reports Page — Generates health check with overview cards, source switching log, consumption table, downtime, and message rate. PDF download works
Stored Data — 150 records loaded with date/source filtering
💡 Suggested UI & Functionality Improvements
Generator charts empty on dashboard — The top-of-page Generator Voltage/Current trend charts show 0 data. This is likely because there's no generator data in DynamoDB currently — not a bug, but you may want to show a "No Data" message instead of flat-zero charts.

Report Uptime low (13.8%) — The uptime calculation detected 20h 41m of downtime in 24h. This is because data gaps >5 min are classified as downtime. You might want to adjust the threshold if your IoT device sends data less frequently.

Y/B phase Voltage showing 0.0 — In the Stored Data table, Voltage Y and B are showing 0.0. If your meter only reports R-phase, we could hide Y/B columns or show "N/A" instead of 0.0.

Current columns showing dashes — Current R/Y/B are all "—", which means the field doesn't exist in DynamoDB. The data structure might use different field names for current values.

Power & Current History chart is empty — The right-side chart on the dashboard shows no data. This could be because avgActivePower and avgCurrent are not present in the data. Would you like me to check what fields your DynamoDB data actually contains?

Would you like me to fix any of these items?