
window.trackingInterval = null;

// tracker.js placeholder: file restored.


function showToday() {
  location.reload(); // Lädt die aktuelle Session neu
}
function showWeek() {
  alert("Wochenansicht ist in Entwicklung.");
}

function setIntervalLength(ms) {
  intervalLength = parseInt(ms);
  startTracking();
}

window.setIntervalLength = function(ms) {
  intervalLength = parseInt(ms);
  startTracking();
};

window.startTracking = function() {
  if (trackingInterval) clearInterval(trackingInterval);
  trackingInterval = setInterval(() => {
    const now = Date.now();
    const inactive = (now - lastActivity) > 60000;
    const point = {
      time: getFormattedTime(),
      date: getFormattedDate(),
      active: !inactive
    };
    focusData.push(point);
    if (focusData.length > 720) focusData.shift();
    saveSessionData(sessionKey, focusData);
    updateChart(point.time, point.active ? 1 : 0);
    updateSummary();
    if (inactive && !idleWarningShown && (now - lastActivity) > 300000) {
      alert("🚨 Du bist seit über 5 Minuten inaktiv.");
      idleWarningShown = true;
    }
  }, intervalLength);
};

window.showToday = function() {
  location.reload(); // Führt Tagesansicht neu aus
};

window.showWeek = function() {
  renderWeekChart();
};

window.exportCSV = function() {
  const key = "focuspulse_session_" + getFormattedDate();
  const sessionData = loadSessionData(key);
  const csv = "Zeitpunkt,Aktiv\n" + sessionData.map(e => `${e.time},${e.active ? 1 : 0}`).join("\n");
  const blob = new Blob([csv], { type: "text/csv" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = key + ".csv";
  link.click();
};

window.resetTracking = function() {
  localStorage.removeItem("focuspulse_session_" + getFormattedDate());
  location.reload();
};

window.loadSessionData = function(key) {
  const raw = localStorage.getItem(key);
  return raw ? JSON.parse(raw) : [];
};

window.exportJSON = function() {
  const key = "focuspulse_session_" + getFormattedDate();
  const data = loadSessionData(key);
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = key + ".json";
  link.click();
};

window.exportJSON = function() {
  const key = "focuspulse_session_" + getFormattedDate();
  const data = window.loadSessionData(key);
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = key + ".json";
  link.click();
};

window.setFocusGoal = function(seconds) {
  window.focusGoal = parseInt(seconds) / 60;
  updateSummary();
  renderGoalBar();
};