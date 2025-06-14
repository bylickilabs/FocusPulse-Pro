function renderWeekChart() {
  const ctx = document.getElementById('focusChart').getContext('2d');
  const weekKeys = Object.keys(localStorage)
    .filter(k => k.startsWith("focuspulse_session_"))
    .sort()
    .reverse()
    .slice(0, 7)
    .reverse();

  const labels = [];
  const data = [];

  for (const key of weekKeys) {
    const sessionData = JSON.parse(localStorage.getItem(key));
    const active = sessionData.filter(e => e.active).length;
    const total = sessionData.length;
    const percent = total ? Math.round((active / total) * 100) : 0;
    labels.push(key.replace("focuspulse_session_", ""));
    data.push(percent);
  }

  if (window.chart) chart.destroy();

  chart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Fokusquote pro Tag (%)',
        data: data,
        backgroundColor: '#00fff7'
      }]
    },
    options: {
      responsive: true,
      animation: false,
      scales: {
        y: { min: 0, max: 100 }
      }
    }
  });
}