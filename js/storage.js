

function clearAllSessions() {
  const confirmDelete = confirm("Möchtest du wirklich alle gespeicherten Sessions löschen?");
  if (!confirmDelete) return;

  for (let key in localStorage) {
    if (key.startsWith("focuspulse_session_") || key.startsWith("archive_")) {
      localStorage.removeItem(key);
    }
  }
  location.reload();
}

function saveSession() {
  const name = document.getElementById("sessionName").value.trim();
  if (!name) return;
  const key = "focuspulse_session_" + getFormattedDate();
  const data = localStorage.getItem(key);
  if (!data) {
    alert("Keine Sessiondaten gefunden.");
    return;
  }
  localStorage.setItem("archive_" + name, data);
  loadSessionDropdown();
}

window.resetTracking = function() {
  localStorage.removeItem("focuspulse_session_" + getFormattedDate());
  location.reload();
};

window.loadSessionData = function(key) {
  const raw = localStorage.getItem(key);
  return raw ? JSON.parse(raw) : [];
};