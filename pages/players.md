---
layout              : page
show_meta           : false
title               : "Players"
subheadline         : "Spotlight cards"
teaser              : "Starter layout for player bios, metrics, and media."
header:
   image_fullwidth  : "header_unsplash_2.jpg"
permalink           : "/players/"
---

Use this page as a placeholder for player capsules. You can hydrate it later with API-backed stats or expand `_data/` with a `players.yml` file.

<div class="grid grid--two">
  <article class="card">
    <h3>What to showcase</h3>
    <ul>
      <li>Recent game line (points, assists, boards)</li>
      <li>Links to video or social highlights</li>
      <li>Team context and positional fit</li>
    </ul>
  </article>
  <article class="card">
    <h3>Implementation idea</h3>
    <p>Attach a <code>data-player-id</code> attribute to each card and fetch expanded stats on hover or tap. Keep baseline text so the page is still useful without JavaScript.</p>
  </article>
</div>
