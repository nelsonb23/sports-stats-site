(function() {
  const container = document.getElementById('live-scores');
  if (!container) return;

  const list = container.querySelector('.live-score-list');
  const statusEl = container.querySelector('.live-score-status');

  function renderCard(game) {
    const li = document.createElement('li');
    li.className = 'live-score-card';
    li.innerHTML = `
      <div class="live-score-meta">
        <span class="league">${game.league}</span>
        <span class="status">${game.status}</span>
      </div>
      <div class="matchup">${game.matchup}</div>
      <div class="score-line">
        <span class="score">${game.score}</span>
        <span class="possession">Possession: ${game.possession}</span>
      </div>
      <div class="updated">Updated ${game.updated}</div>
    `;
    return li;
  }

  function showError(message) {
    statusEl.textContent = message;
    statusEl.classList.add('error');
  }

  const feedUrl = container.dataset.feed;

  if (!feedUrl) {
    showError('No data feed configured. Add data-feed to the live scores container.');
    return;
  }

  fetch(feedUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Request failed: ${response.status}`);
      }
      return response.json();
    })
    .then((games) => {
      statusEl.textContent = 'Live feed connected';
      statusEl.classList.remove('loading');
      games.forEach((game) => list.appendChild(renderCard(game)));
    })
    .catch(() => {
      showError('Could not load live scores. Swap in your API endpoint when ready.');
    });
})();
