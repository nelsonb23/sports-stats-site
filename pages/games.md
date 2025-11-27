---
layout              : page
show_meta           : false
title               : "Games"
subheadline         : "Live score snapshots"
teaser              : "Client-side fetch demo with graceful fallback."
header:
   image_fullwidth  : "header_unsplash_8.jpg"
permalink           : "/games/"
---

The widget below fetches `assets/data/game-snapshots.json` on load. Swap the URL to your own API to light it up with real scores.

<div id="live-scores" class="live-score-shell" data-feed="{{ site.baseurl }}/assets/data/game-snapshots.json">
  <div class="live-score-status loading">Connecting to live feed…</div>
  <ul class="live-score-list">
    <li class="live-score-card placeholder">Live scores will appear here. No JavaScript required to read this page.</li>
  </ul>
</div>

<script src="{{ site.baseurl }}/assets/js/live-scores.js"></script>
