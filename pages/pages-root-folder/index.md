---
layout: frontpage
header:
  image_fullwidth: header_unsplash_12.jpg
widget1:
  title: "Live Snapshots"
  url: '{{ site.baseurl }}/games/'
  image: widget-1-302x182.jpg
  text: 'Lightweight score widgets update on-page without a reload. See the live demo on the Games page.'
widget2:
  title: "Team Index"
  url: '{{ site.baseurl }}/teams/'
  text: 'Explore club colors, venues, and win-loss trends pulled from our structured data layer.'
  video: '<img src="{{ site.url }}{{ site.baseurl }}/images/gallery-example-3-thumb.jpg" width="302" height="182" alt="Team index"/>'
widget3:
  title: "Player Radar"
  url: '{{ site.baseurl }}/players/'
  image: widget-3-302x182.jpg
  text: 'Highlight key players with quick metrics, links, and thumbnails to speed up scouting.'
callforaction:
  url: {{ site.baseurl }}/about/
  text: Meet the vision behind Mintboxx Sports Lab ›
  style: success
permalink: /index.html
homepage: true
---

<section class="mint-hero">
  <div class="mint-hero__content">
    <p class="eyebrow">Mintboxx-inspired</p>
    <h1>Sports dashboards built for immediacy</h1>
    <p class="lede">We are reimagining the classic Jekyll shell into a crisp, mint-accented hub for live game context, team snapshots, and data-driven stories.</p>
    <div class="hero-actions">
      <a class="radius button" href="{{ site.baseurl }}/games/">See live snapshots</a>
      <a class="radius button secondary" href="{{ site.baseurl }}/teams/">Browse teams</a>
    </div>
  </div>
  <div class="mint-hero__panel">
    <p class="panel-label">This week</p>
    <ul class="panel-metrics">
      <li><span class="metric">12</span><span class="label">games tracked</span></li>
      <li><span class="metric">84</span><span class="label">players spotlighted</span></li>
      <li><span class="metric">6</span><span class="label">leagues covered</span></li>
    </ul>
    <p class="panel-footnote">Data mocked for prototyping; wire to your API when ready.</p>
  </div>
</section>

<section class="section-shell">
  <div class="section-header">
    <p class="eyebrow">Road to dynamic</p>
    <h2>From static theme to live experience</h2>
    <p class="lede">The shell now spotlights sports-first navigation, reusable content blocks, and a testbed for client-side fetches. Swap our sample feeds with your production endpoints.</p>
  </div>
  <div class="grid">
    <article class="card">
      <h3>Sports-first IA</h3>
      <p>Primary navigation now focuses on Teams, Players, Games, and Insights—no more theme demo clutter.</p>
    </article>
    <article class="card">
      <h3>Data foundation</h3>
      <p>YAML-backed team records keep layouts stable while you negotiate API contracts. A JSON feed powers on-page fetches.</p>
    </article>
    <article class="card">
      <h3>Progressive widgets</h3>
      <p>Client-side rendering hydrates score cards when data is available, but the page remains readable without JavaScript.</p>
    </article>
  </div>
</section>

<section class="section-shell">
  <div class="section-header">
    <p class="eyebrow">Try the flow</p>
    <h2>Prototype checklist</h2>
  </div>
  <div class="grid grid--two">
    <div>
      <ol class="checklist">
        <li>Swap <code>assets/data/game-snapshots.json</code> with your live scores endpoint.</li>
        <li>Add new leagues or clubs to <code>_data/teams.yml</code>—the Teams page updates automatically.</li>
        <li>Drop new blog posts under <code>_posts/</code> and they’ll surface in Insights.</li>
      </ol>
    </div>
    <div class="note">
      <p><strong>Want to match mintboxx.com more closely?</strong> Adjust the palette in <code>_sass/_01_settings_colors.scss</code> and extend the cards in <code>_sass/_09_elements.scss</code>.</p>
    </div>
  </div>
</section>
