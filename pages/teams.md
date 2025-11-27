---
layout              : page
show_meta           : false
title               : "Teams"
subheadline         : "Structure and records"
teaser              : "YAML-powered snapshots you can replace with your own league data."
header:
   image_fullwidth  : "header_unsplash_11.jpg"
permalink           : "/teams/"
---

Our team index pulls from `_data/teams.yml` so you can iterate on structure without hard-coding content. Update the data file and this page refreshes automatically.

<ul class="team-grid">
{% for team in site.data.teams %}
  <li class="team-card" style="--accent: {{ team.accent_color }}; --primary: {{ team.primary_color }};">
    <div class="team-card__header">
      <h3>{{ team.name }}</h3>
      <span class="badge">{{ team.conference }}</span>
    </div>
    <div class="team-card__meta">
      <span class="record">Record: {{ team.record }}</span>
      <span class="form">Form: {{ team.form }}</span>
    </div>
    <div class="team-card__footer">
      <span>{{ team.city }}</span>
      <span>{{ team.venue }}</span>
    </div>
  </li>
{% endfor %}
</ul>

<div class="note">
  <p><strong>Tip:</strong> Add fields like <code>coach</code> or <code>logos</code> to the YAML and expose them here—no layout changes required.</p>
</div>
