(function () {
  'use strict';
  var D = window.PORTFOLIO;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var $ = function (s, r) { return (r || document).querySelector(s); };

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }

  /* generic horizontal auto-scroll for photo strips on mobile, pausing on touch/interaction */
  function autoScrollX(el, speed) {
    if (!el || reduce) return;
    var paused = false, resumeTimer = null;
    function tick() {
      if (!paused && window.innerWidth <= 900) {
        var max = el.scrollWidth - el.clientWidth;
        if (max > 1) {
          el.scrollLeft += speed;
          if (el.scrollLeft >= max - 1) el.scrollLeft = 0;
        }
      }
      requestAnimationFrame(tick);
    }
    function pause() {
      paused = true;
      clearTimeout(resumeTimer);
      resumeTimer = setTimeout(function () { paused = false; }, 4000);
    }
    el.addEventListener('pointerdown', pause);
    el.addEventListener('touchstart', pause, { passive: true });
    el.addEventListener('wheel', pause, { passive: true });
    requestAnimationFrame(tick);
  }

  /* ---------------- product preview replicas (pure CSS/HTML) --------------- */
  var PREVIEW = {
    saarthi:
      '<div class="pv pv-saarthi">' +
      '<div class="pv-bar"><span class="pv-logo">Sarthi</span>' +
        '<span class="pv-pill">Sarthi Bazaar</span><span class="pv-pill">Price Tracker</span>' +
        '<span class="pv-lang">\u0939\u093f\u0902\u0926\u0940 / EN</span><span class="pv-join">Join \u2197</span></div>' +
      '<div class="pv-hero"><h4>Sell smarter with Sarthi AI</h4>' +
        '<p>Nearby buyers, live mandi prices, and the best time to sell, asked in your own language.</p></div>' +
      '<div class="sa-tiles"><div><b>318+</b><span>Registered farmers</span></div>' +
        '<div><b>36+</b><span>Grains to vegetables</span></div>' +
        '<div class="sa-voice"><b>\u25cf</b><span>Sarthi Didi \u00b7 voice</span></div></div>' +
      '</div>',
    ethos: '<div class="pv pv-ethos"><div class="pv-bar"><span class="pv-logo">ethOS</span><span class="pv-chip">EARLY</span></div><div class="pv-hero"><h4>Startup internships,<br />intelligence powered.</h4></div><div class="pv-rows"><div class="pv-row"><span>AI Research Intern</span><b>98</b></div><div class="pv-row"><span>SaaS Full-Stack Engineer</span><b>99</b></div></div></div>',
    produscope:
      '<div class="pv pv-produscope">' +
      '<svg class="fan" viewBox="0 0 520 250" role="img" aria-label="One question routed through a coordinator to five specialist agents, then reconciled into one answer">' +
        '<defs><linearGradient id="fanG" x1="0" y1="0" x2="1" y2="0">' +
          '<stop offset="0%" stop-color="#7c5cff"/><stop offset="100%" stop-color="#00e0c6"/></linearGradient></defs>' +
        '<path class="fan-line" d="M150 125 H176" stroke="url(#fanG)"/>' +
        '<path class="fan-line" d="M296 125 H316 M316 125 V30 H336" stroke="url(#fanG)"/>' +
        '<path class="fan-line" d="M316 125 V78 H336 M316 125 H336" stroke="url(#fanG)"/>' +
        '<path class="fan-line" d="M316 125 V172 H336 M316 125 V220 H336" stroke="url(#fanG)"/>' +
        '<g class="fan-q"><rect x="14" y="103" width="136" height="44" rx="12"/>' +
          '<text class="fan-t" x="30" y="123">Can I afford</text><text class="fan-t" x="30" y="139">this?</text></g>' +
        '<g class="fan-c"><rect x="176" y="103" width="120" height="44" rx="12"/>' +
          '<text class="fan-t" x="192" y="124">Coordinator</text><text class="fan-s" x="192" y="138">RECONCILES</text></g>' +
        '<g class="fan-a"><rect x="336" y="12" width="170" height="36" rx="10"/>' +
          '<text class="fan-t" x="350" y="28">Projection</text><text class="fan-s" x="350" y="41">12-MONTH PATH</text></g>' +
        '<g class="fan-a"><rect x="336" y="60" width="170" height="36" rx="10"/>' +
          '<text class="fan-t" x="350" y="76">Cost of living</text><text class="fan-s" x="350" y="89">FIXED VS DISCRETIONARY</text></g>' +
        '<g class="fan-a"><rect x="336" y="108" width="170" height="36" rx="10"/>' +
          '<text class="fan-t" x="350" y="124">Affordability</text><text class="fan-s" x="350" y="137">THIS PURCHASE</text></g>' +
        '<g class="fan-a"><rect x="336" y="156" width="170" height="36" rx="10"/>' +
          '<text class="fan-t" x="350" y="172">Goal coach</text><text class="fan-s" x="350" y="185">ETA OFF REAL SURPLUS</text></g>' +
        '<g class="fan-a"><rect x="336" y="204" width="170" height="36" rx="10"/>' +
          '<text class="fan-t" x="350" y="220">Life events</text><text class="fan-s" x="350" y="233">WHAT SHIFTS ABOVE</text></g>' +
        '<text class="fan-note" x="14" y="172">each remit narrow enough to check</text>' +
      '</svg></div>',
    automon: '<div class="pv pv-automon"><div class="pv-bar"><span class="pv-logo">Automation Dashboard</span><span class="pv-chip live">Real-time</span></div><div class="pv-stats"><div><b>25</b><span>Active triggers</span></div><div><b>1,247</b><span>Data points</span></div><div><b>89</b><span>Notifications</span></div></div><div class="pv-flow"><span>Zapier</span><i>→</i><span>Sheets</span><i>→</i><span>Email</span></div></div>',
    timespro: '<div class="pv pv-timespro"><div class="pv-bar"><span class="pv-logo">TIMESPRO</span><span class="pv-chip">Visionary Corner</span></div><div class="pv-hero"><h4>Discover Your<br />Future Self</h4><span class="pv-cta">2-minute career check-in</span></div></div>',
    harness:
      '<div class="pv pv-harness">' +
      '<svg class="rig" viewBox="0 0 520 250" role="img" aria-label="Extract, generate and judge pipeline with a retry loop below the judge threshold">' +
        '<defs><linearGradient id="rigG" x1="0" y1="0" x2="1" y2="1">' +
          '<stop offset="0%" stop-color="#7c5cff"/><stop offset="100%" stop-color="#00e0c6"/></linearGradient>' +
          '<marker id="rigA" viewBox="0 0 8 8" refX="6" refY="4" markerWidth="6" markerHeight="6" orient="auto">' +
          '<path d="M0 0 L8 4 L0 8 z" fill="#00e0c6"/></marker>' +
          '<marker id="rigR" viewBox="0 0 8 8" refX="6" refY="4" markerWidth="6" markerHeight="6" orient="auto">' +
          '<path d="M0 0 L8 4 L0 8 z" fill="#ff7a59"/></marker></defs>' +
        '<path class="rig-line" d="M148 53 H176" stroke="url(#rigG)" marker-end="url(#rigA)"/>' +
        '<path class="rig-line d2" d="M338 53 H366" stroke="url(#rigG)" marker-end="url(#rigA)"/>' +
        '<path class="rig-line d3" d="M438 78 V150 H140 V178" stroke="url(#rigG)" marker-end="url(#rigA)"/>' +
        '<path class="rig-retry" d="M400 78 V120 H262 V88" marker-end="url(#rigR)"/>' +
        '<text class="rig-note" x="272" y="112">&lt; 75% · retry with the reason</text>' +
        '<text class="rig-note ok" x="150" y="144">≥ 75% · moves to human review</text>' +
        '<g class="rig-node"><rect x="20" y="28" width="128" height="50" rx="12"/>' +
          '<text class="rig-t" x="38" y="50">Extract</text><text class="rig-s" x="38" y="66">AHREFS · INTENT</text></g>' +
        '<g class="rig-node"><rect x="186" y="28" width="152" height="50" rx="12"/>' +
          '<text class="rig-t" x="204" y="50">Generate</text><text class="rig-s" x="204" y="66">CLAUDE · BRAND CORPUS</text></g>' +
        '<g class="rig-node judge"><rect x="376" y="28" width="124" height="50" rx="12"/>' +
          '<text class="rig-t" x="394" y="50">Judge</text><text class="rig-s" x="394" y="66">WEIGHTED RUBRIC</text></g>' +
        '<g class="rig-node out"><rect x="40" y="186" width="210" height="46" rx="12"/>' +
          '<text class="rig-t" x="58" y="206">Human review</text><text class="rig-s" x="58" y="222">THEN PUBLISHED</text></g>' +
      '</svg></div>',
    p2p:
      '<div class="pv pv-p2p">' +
      '<svg class="rig" viewBox="0 0 520 230" role="img" aria-label="Procure to pay chain: invoice raised, role check, approval, a separate payment gate, then paid with an audit timeline, and rejection routed back to the requester">' +
        '<defs><linearGradient id="p2pG" x1="0" y1="0" x2="1" y2="1">' +
          '<stop offset="0%" stop-color="#7c5cff"/><stop offset="100%" stop-color="#00e0c6"/></linearGradient>' +
          '<marker id="p2pA" viewBox="0 0 8 8" refX="6" refY="4" markerWidth="6" markerHeight="6" orient="auto">' +
          '<path d="M0 0 L8 4 L0 8 z" fill="#00e0c6"/></marker>' +
          '<marker id="p2pR" viewBox="0 0 8 8" refX="6" refY="4" markerWidth="6" markerHeight="6" orient="auto">' +
          '<path d="M0 0 L8 4 L0 8 z" fill="#ff7a59"/></marker></defs>' +
        '<path class="rig-line" d="M146 54 H166" stroke="url(#p2pG)" marker-end="url(#p2pA)"/>' +
        '<path class="rig-line d2" d="M302 54 H322" stroke="url(#p2pG)" marker-end="url(#p2pA)"/>' +
        '<path class="rig-line d3" d="M402 78 V124" stroke="url(#p2pG)" marker-end="url(#p2pA)"/>' +
        '<path class="rig-line d4" d="M332 156 H312" stroke="url(#p2pG)" marker-end="url(#p2pA)"/>' +
        '<path class="rig-retry" d="M239 78 V102 H83 V84" marker-end="url(#p2pR)"/>' +
        '<text class="rig-note" x="92" y="98">rejected · back to the requester</text>' +
        '<g class="rig-node"><rect x="20" y="30" width="126" height="48" rx="12"/>' +
          '<text class="rig-t" x="36" y="51">Invoice raised</text><text class="rig-s" x="36" y="67">REQUESTER</text></g>' +
        '<g class="rig-node"><rect x="176" y="30" width="126" height="48" rx="12"/>' +
          '<text class="rig-t" x="192" y="51">1 · Role check</text><text class="rig-s" x="192" y="67">OWNERSHIP</text></g>' +
        '<g class="rig-node"><rect x="332" y="30" width="140" height="48" rx="12"/>' +
          '<text class="rig-t" x="348" y="51">2 · Approval</text><text class="rig-s" x="348" y="67">SEGREGATED DUTY</text></g>' +
        '<g class="rig-node judge"><rect x="332" y="124" width="140" height="48" rx="12"/>' +
          '<text class="rig-t" x="348" y="145">3 · Payment gate</text><text class="rig-s" x="348" y="161">SEPARATE STEP</text></g>' +
        '<g class="rig-node out"><rect x="150" y="124" width="162" height="48" rx="12"/>' +
          '<text class="rig-t" x="166" y="145">Paid</text><text class="rig-s" x="166" y="161">IMMUTABLE AUDIT TIMELINE</text></g>' +
        '<text class="rig-note ok" x="20" y="206">12 → 4 approval steps · 40% less client effort</text>' +
      '</svg></div>',
    cupshup:
      '<div class="pv pv-cupshup">' +
      '<div class="cs-nav"><span class="cs-logo">u</span><i>Platform</i><i>Services</i><i>Our Work</i><i>Resources</i><span class="cs-cta">Contact Us</span></div>' +
      '<p class="cs-kicker">ALL IN ONE</p>' +
      '<h4>Everything to make your brand<br /><span>AI-proof in marketing</span></h4>' +
      '<div class="cs-tiles">' +
        '<div><b>20+</b><span>AI tools</span></div>' +
        '<div><b>4</b><span>Channels</span></div>' +
        '<div><b>10×</b><span>vs manual</span></div>' +
        '<div class="cs-health"><b>99</b><span>Ahrefs health</span></div>' +
      '</div></div>',
    whatsapp: '<div class="pv pv-whatsapp"><div class="pv-chat"><span class="in">Need 400 activations in Pune</span><span class="out">Qualified · owner assigned · nurture started</span></div><div class="pv-flow"><span>WhatsApp</span><i>→</i><span>n8n</span><i>→</i><span>Supabase</span><i>→</i><span>Brevo</span></div></div>',
    docassist: '<div class="pv pv-docassist"><div class="pv-doc"><span class="l"></span><span class="l"></span><span class="l s"></span><span class="l"></span></div><div class="pv-arrow">→</div><div class="pv-sum"><b>Summary</b><span>90% relevance · &lt;10s</span></div></div>',
    aangan: '<div class="pv pv-aangan"><div class="pv-ring"><span class="sup">Supervisor</span><i></i><i></i><i></i><i></i><i></i></div><div class="pv-rule">Agents that converse cannot act</div></div>'
  };

  /* ------------------------------ sheet ---------------------------------- */
  var sheet = $('#sheet'), sheetBody = $('#sheetBody');
  var order = [], cursor = -1, lastFocus = null;

  function itemById(id) {
    var all = D.timeline.concat(D.systems);
    for (var i = 0; i < all.length; i++) if (all[i].id === id) return all[i];
    return null;
  }

  function sheetHTML(it) {
    var h = '';
    h += '<p class="kicker mono">' + esc(it.kind || it.tier || '') + (it.when ? ' · ' + esc(it.when) : '') + '</p>';
    h += '<h3 id="sheetTitle">' + esc(it.title) + '</h3>';
    h += '<p class="sheet-org mono">' + esc(it.org || '') + '</p>';
    if (it.preview && PREVIEW[it.preview]) h += '<div class="pv-frame"><span class="pv-dots"></span>' + PREVIEW[it.preview] + '</div>';
    h += '<p class="sheet-thesis">' + esc(it.thesis) + '</p>';
    if (it.photos && it.photos.length) {
      h += '<div class="sheet-photos">';
      it.photos.forEach(function (p) {
        h += '<figure><img src="' + esc(p.src) + '" alt="' + esc(p.cap) + '" loading="lazy" /></figure>';
      });
      h += '</div>';
    }
    if (it.bullets && it.bullets.length) {
      h += '<ul class="sheet-bul">';
      it.bullets.forEach(function (b) { h += '<li>' + esc(b) + '</li>'; });
      h += '</ul>';
    }
    if (it.metrics && it.metrics.length) {
      h += '<div class="sheet-metrics">';
      it.metrics.forEach(function (m) { h += '<div><b>' + esc(m.n) + '</b><span>' + esc(m.l) + '</span></div>'; });
      h += '</div>';
    }
    if (it.stack && it.stack.length) {
      h += '<div class="chips">';
      it.stack.forEach(function (s) { h += '<span class="chip">' + esc(s) + '</span>'; });
      h += '</div>';
    }
    if (it.links && it.links.length) {
      h += '<div class="sheet-links">';
      it.links.forEach(function (l) {
        h += '<a class="btn primary" href="' + esc(l.url) + '" target="_blank" rel="noopener">' + esc(l.label) + ' <span aria-hidden="true">↗</span></a>';
      });
      h += '</div>';
    }
    return h;
  }

  function openSheet(id, list) {
    var it = itemById(id);
    if (!it) return;
    order = list || [id];
    cursor = order.indexOf(id);
    lastFocus = document.activeElement;
    sheetBody.innerHTML = sheetHTML(it);
    autoScrollX($('.sheet-photos', sheetBody), 0.5);
    sheet.hidden = false;
    document.body.classList.add('locked');
    requestAnimationFrame(function () { sheet.classList.add('on'); });
    $('.sheet-panel', sheet).focus();
    var multi = order.length > 1;
    $('.sheet-nav', sheet).style.display = multi ? '' : 'none';
  }
  function closeSheet() {
    sheet.classList.remove('on');
    document.body.classList.remove('locked');
    setTimeout(function () { sheet.hidden = true; }, reduce ? 0 : 240);
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }
  function step(d) {
    if (!order.length) return;
    cursor = (cursor + d + order.length) % order.length;
    sheetBody.innerHTML = sheetHTML(itemById(order[cursor]));
    autoScrollX($('.sheet-photos', sheetBody), 0.5);
    sheetBody.scrollTop = 0;
    $('.sheet-panel', sheet).scrollTop = 0;
  }
  sheet.addEventListener('click', function (e) {
    if (e.target.closest('[data-close]')) closeSheet();
    else if (e.target.closest('[data-prev]')) step(-1);
    else if (e.target.closest('[data-next]')) step(1);
  });
  document.addEventListener('keydown', function (e) {
    if (sheet.hidden) return;
    if (e.key === 'Escape') closeSheet();
    if (e.key === 'ArrowLeft') step(-1);
    if (e.key === 'ArrowRight') step(1);
  });

  /* ------------------------- vertical timeline --------------------------- */
  var vtl = $('#vtl'), vtlFill = $('#vtlFill');
  var TL = D.timeline.filter(function (t) { return !t.hidden; });
  var tlIds = TL.map(function (t) { return t.id; });

  function buildTimeline() {
    if (!vtl) return;
    TL.forEach(function (t) {
      var li = document.createElement('li');
      li.className = 'vst' + (t.feature ? ' feature' : '');
      li.innerHTML =
        '<button data-id="' + esc(t.id) + '">' +
          '<span class="vst-dot" aria-hidden="true"></span>' +
          '<span class="vst-when mono">' + esc(t.when) + '</span>' +
          '<span class="vst-main">' +
            '<b class="vst-org">' + esc(t.org) + '</b>' +
            '<i class="vst-role">' + esc(t.title) + '</i>' +
            (t.win ? '<span class="vst-win mono">★ ' + esc(t.win) + '</span>' : '') +
          '</span>' +
          '<span class="vst-side">' +
            (t.metrics && t.metrics[0] ? '<span class="vst-metric">' + esc(t.metrics[0].n) + '<span>' + esc(t.metrics[0].l) + '</span></span>' : '') +
            (t.links && t.links.length ? '<span class="vst-link mono">' + esc(t.links[0].label) + ' ↗</span>' : '') +
            '<span class="vst-go mono">View details <span aria-hidden="true">→</span></span>' +
          '</span>' +
        '</button>';
      vtl.appendChild(li);
    });
    vtl.addEventListener('click', function (e) {
      var b = e.target.closest('button[data-id]');
      if (!b) return;
      if (e.target.closest('.vst-go') || !window.__pathShow || window.innerWidth <= 900) openSheet(b.dataset.id, tlIds);
      else window.__pathShow(b.dataset.id);
    });
  }

  /* one continuous photo stream running alongside the whole path, pulled
     from every entry's photos regardless of which row they belong to */
  function buildPathCollage() {
    var box = $('#pathCollage');
    if (!box) return;
    var cur = null, shot = 0;
    function entry(id) { for (var i = 0; i < D.timeline.length; i++) if (D.timeline[i].id === id) return D.timeline[i]; return null; }
    function show(id) {
      var t = entry(id); if (!t) return;
      cur = id; shot = 0;
      [].forEach.call(document.querySelectorAll('.vst'), function (li) {
        li.classList.toggle('sel', li.querySelector('button[data-id]').dataset.id === id);
      });
      draw();
    }
    function draw() {
      var t = entry(cur), ph = (t && t.photos) || [];
      var m = t.metrics && t.metrics[0];
      var big = ph.length
        ? '<figure class="pv-main"><img src="' + esc(ph[shot].src) + '" alt="' + esc(ph[shot].cap || t.title) + '" /><figcaption>' + esc(ph[shot].cap || '') + '</figcaption></figure>'
        : '<div class="pv-main pv-none"><b>' + esc(m ? m.n : t.org) + '</b><span>' + esc(m ? m.l : t.title) + '</span></div>';
      var thumbs = ph.length > 1 ? '<div class="pv-thumbs">' + ph.map(function (p, i) {
        return '<button class="' + (i === shot ? 'on' : '') + '" data-shot="' + i + '" aria-label="Photo ' + (i + 1) + '"><img src="' + esc(p.src) + '" alt="" /></button>';
      }).join('') + '</div>' : '';
      var lk = (t.links || []).slice(0, 3).map(function (l) {
        var ext = /^https?:/.test(l.url);
        return '<a href="' + esc(l.url) + '"' + (ext ? ' target="_blank" rel="noopener"' : '') + '>' + esc(l.label) + (ext ? ' ↗' : '') + '</a>';
      }).join('');
      box.innerHTML = '<div class="pv-head mono">' + esc(t.when) + '</div>' + big + thumbs +
        '<h4>' + esc(t.org) + '</h4><p>' + esc(t.thesis || '') + '</p>' +
        '<div class="pv-links">' + lk + '<button class="pv-open" data-id="' + esc(t.id) + '">Full details →</button></div>';
    }
    box.addEventListener('click', function (e) {
      var th = e.target.closest('button[data-shot]');
      if (th) { shot = +th.dataset.shot; draw(); return; }
      var op = e.target.closest('.pv-open');
      if (op) openSheet(op.dataset.id, tlIds);
    });
    var first = null;
    for (var i = 0; i < TL.length; i++) if (TL[i].photos && TL[i].photos.length) { first = TL[i].id; break; }
    window.__pathShow = show;
    show(first || TL[0].id);
  }

  function fillTimeline() {
    if (!vtl || !vtlFill) return;
    var items = vtl.querySelectorAll('.vst');
    if (!items.length) return;
    var box = vtl.getBoundingClientRect();
    var marker = window.innerHeight * 0.62;
    var h = 0;
    Array.prototype.forEach.call(items, function (el) {
      var r = el.getBoundingClientRect();
      var dotY = r.top + 30;
      if (dotY < marker) {
        h = Math.max(h, dotY - box.top + 2);
        el.classList.add('on');
      }
    });
    vtlFill.style.height = Math.min(h, box.height) + 'px';
  }


  /* ---------------------------- systems carousel --------------------------- */
  document.addEventListener('click', function (e) {
    var b = e.target.closest('[data-open-id]');
    if (b) { if (b.tagName === 'A') e.preventDefault(); openSheet(b.dataset.openId, D.systems.map(function (s) { return s.id; })); }
  });


  /* ---------------------------- asset library ----------------------------- */
  function buildAssets() {
    var grid = $('#aGrid'), bar = $('#aFilter');
    if (!grid || !D.assets) return;
    if (bar) bar.style.display = 'none';
    var CATS = [
      { k: 'teardown', name: 'Product teardowns', types: ['Product teardown'], c: '#4b74c8', h: 250, note: 'Real screens, the journey, the problem and a proposed fix.' },
      { k: 'prd', name: 'PRDs', types: ['PRD'], c: '#c77fbf', h: 196, note: 'Product requirement documents for things I specced or built.' },
      { k: 'case', name: 'Case studies', types: ['Case study'], c: '#f6593a', h: 230, note: 'A problem, the reframe, and what I would do about it.' },
      { k: 'analysis', name: 'Analyses and audits', types: ['Analysis', 'Audit'], c: '#3fada0', h: 256, note: 'Numbers and checks that turned into decisions.' }
    ];
    CATS.forEach(function (ct) { ct.items = D.assets.filter(function (x) { return ct.types.indexOf(x.type) > -1; }); });
    var FILL = [['#f292ad', 132], ['#ff5c39', 150], ['#40aea1', 150], ['#c77fbf', 148], ['#3fada0', 196], ['#f4b26e', 176], ['#d5381a', 160], ['#6694dc', 134], ['#f292ad', 146], ['#e8643f', 170], ['#0b7d6d', 150], ['#f292ad', 128], ['#4b74c8', 160]];
    function filler(i) { var f = FILL[i % FILL.length]; return '<span class="lib-book dec" style="--c:' + f[0] + ';--h:' + f[1] + 'px"></span>'; }
    function cat(i) { var ct = CATS[i]; return '<button class="lib-book cat" data-i="' + i + '" style="--c:' + ct.c + ';--h:' + ct.h + 'px" aria-label="' + esc(ct.name) + ', ' + ct.items.length + ' documents"><span>' + esc(ct.name) + '</span><i>' + ct.items.length + '</i></button>'; }
    var row = filler(0) + filler(1) + filler(2) + cat(0) + filler(3) + filler(4) + cat(1) + filler(5) + filler(6) + cat(2) + filler(7) + filler(8) + cat(3) + filler(9) + filler(10) + filler(11) + filler(12);
    var hand = '<svg class="lib-hand" id="libHand" viewBox="0 0 120 230" aria-hidden="true"><path d="M44 230 L50 128 C40 116 36 98 44 86 L56 62 C60 52 70 54 70 64 L68 86 L74 80 C82 74 92 80 90 90 L88 118 C94 138 92 168 82 190 L76 230 Z" fill="#f3a97f"/><path d="M60 118 C70 120 80 118 86 110" stroke="#d98a60" stroke-width="2.2" fill="none" stroke-linecap="round"/><path d="M44 230 L48 168 C60 176 70 176 80 168 L76 230 Z" fill="#e9936b" opacity=".35"/></svg>';
    grid.className = 'lib';
    grid.innerHTML = '<div class="lib-scene" id="libScene"><div class="lib-books" id="libBooks">' + row + '</div><div class="lib-plank"></div>' + hand + '<p class="lib-hint mono" id="libHint">Click a book to pull it off the shelf</p></div><div class="lib-out" id="libOut" aria-live="polite"></div>';

    var scene = $('#libScene'), handEl = $('#libHand'), out = $('#libOut'), hint = $('#libHint');
    var curBook = null, timers = [];
    function later(fn, ms) { var t = setTimeout(fn, ms); timers.push(t); return t; }
    function clearAll() { timers.forEach(clearTimeout); timers = []; }
    function handLeft(book) {
      var sr = scene.getBoundingClientRect(), br = book.getBoundingClientRect();
      return br.left - sr.left + br.width / 2 - handEl.getBoundingClientRect().width / 2 + 6;
    }
    function handY(book, up) {
      var sr = scene.getBoundingClientRect(), br = book.getBoundingClientRect();
      var base = br.bottom - sr.top;
      return up ? base - handEl.getBoundingClientRect().height * 0.52 : sr.height + 10;
    }
    var COVER = { 'saarthi-pdf': 'assets/img/thumb-saarthi-app.png', 'ethos-pdf': 'assets/img/thumb-ethos.png', 'docassist-pdf': 'assets/img/docassist-architecture.png', 'produscope-pdf': 'teardowns/img/produscope-d-home.png', 'timespro-pdf': 'assets/img/thumb-timespro-app.webp', 'harness-pdf': 'assets/img/thumb-cupshup-platform.webp', minisense: 'assets/img/thumb-minisense.webp', peakflo: 'assets/img/thumb-peakflo.webp', 'zenskar-pdf': 'teardowns/img/zenskar-d-home.png', tulu: 'assets/img/thumb-tulu.webp', composio: 'assets/img/thumb-composio.webp', cashkaro: 'assets/img/thumb-cashkaro.webp', zomato: 'assets/img/thumb-zomato.webp', tensortonic: 'assets/img/thumb-tensortonic.webp', 'aangan-prd': 'assets/img/thumb-aangan.webp', 'automon-teardown': 'teardowns/img/automon-d-home.png', 'crm-teardown': 'assets/img/thumb-cupshupplatform.png', salon: 'assets/img/thumb-quickserve.webp', 'growth-acct': 'assets/img/thumb-growth.webp', attendance: 'assets/img/thumb-attendance.webp', humanness: 'assets/img/thumb-humanness.webp', kasparro: 'assets/img/thumb-kasparro.webp' };
    function render(i) {
      var ct = CATS[i];
      out.style.setProperty('--c', ct.c);
      out.innerHTML = '<div class="lib-out-h"><h3>' + esc(ct.name) + '</h3><span class="mono">' + ct.items.length + ' ' + (ct.items.length === 1 ? 'book' : 'books') + '</span><p>' + esc(ct.note) + '</p></div><div class="lib-shelf2"><div class="lib-mtrack" style="--dur:' + Math.max(18, ct.items.length * 6) + 's">' +
        (function () { var one = ct.items.map(function (x, n) {
          var pdf = x.link && /\.pdf$/.test(x.link);
          var internal = x.link && /\.html($|[?#])/.test(x.link);
          var cover = COVER[x.id] || x.img;
          return '<a class="pbook" style="--i:' + n + ';--c:' + ct.c + '" ' + (x.link ? 'href="' + esc(x.link) + '" target="_blank" rel="noopener"' : '') + ' aria-label="' + esc(x.title) + (pdf ? ', PDF' : '') + '"><span class="pb-cover">' +
            (cover ? '<img src="' + esc(cover) + '" alt="" loading="lazy" />' : '') + '<i class="pb-spine"><b></b><b></b></i><i class="pb-pages"></i><i class="pb-ribbon mono">' + (pdf ? 'PDF' : 'OPEN') + '</i><span class="pb-title">' + esc(x.title) + '</span></span></a>';
        }).join(''); return ct.items.length > 3 ? one + one : one; })() + '</div></div><div class="lib-plank2"></div>';
      out.classList.remove('show'); void out.offsetWidth; out.classList.add('show');
    }
    var want = null;
    function pick(book) {
      if (curBook === book || want === book) return;
      want = book;
      var i = +book.dataset.i, first = !curBook;
      clearAll(); hint.style.opacity = '0';
      document.querySelectorAll('.lib-book.cat.pulled').forEach(function (bk) { if (bk !== book) bk.classList.remove('pulled'); });
      scene.classList.add('active');
      handEl.style.left = handLeft(book) + 'px';
      handEl.style.top = handY(book, false) + 'px';
      handEl.classList.remove('grab');
      later(function () { handEl.style.top = handY(book, true) + 'px'; handEl.classList.add('grab'); }, first ? 420 : 260);
      later(function () { book.classList.add('pulled'); }, first ? 640 : 480);
      later(function () { curBook = book; render(i); handEl.style.top = handY(book, false) + 'px'; }, first ? 820 : 640);
      later(function () { scene.classList.remove('active'); want = null; }, first ? 1300 : 1100);
      document.querySelectorAll('.lib-book.cat').forEach(function (bk) { bk.classList.toggle('dim', bk !== book); });
    }
    scene.addEventListener('click', function (e) { var b = e.target.closest('.lib-book.cat'); if (b) { want = null; if (b !== curBook) pick(b); } });
    var hoverT = null;
    scene.addEventListener('mouseover', function (e) {
      var b = e.target.closest('.lib-book.cat'); if (!b) return;
      clearTimeout(hoverT); hoverT = setTimeout(function () { pick(b); }, 60);
    });
    scene.addEventListener('mouseout', function (e) { if (e.target.closest('.lib-book.cat')) clearTimeout(hoverT); });
    scene.addEventListener('focusin', function (e) { var b = e.target.closest('.lib-book.cat'); if (b) pick(b); });
    handEl.style.left = '-140px'; handEl.style.top = scene.getBoundingClientRect().height + 10 + 'px';
    window.addEventListener('resize', function () { if (curBook) { handEl.style.left = handLeft(curBook) + 'px'; } });
    var first = null;
    if ('IntersectionObserver' in window) new IntersectionObserver(function (es) { if (es[0].isIntersecting && !curBook && !first) { first = true; later(function () { pick(scene.querySelector('.lib-book.cat[data-i="1"]')); }, 900); } }, { threshold: 0.45 }).observe(scene);
  }

  /* ---------------------------- chrome ----------------------------------- */
  var bar = $('#bar'), nav = $('#nav');
  function onScroll() {
    var h = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (h > 0 ? (window.scrollY / h) * 100 : 0).toFixed(2) + '%';
    nav.classList.toggle('solid', window.scrollY > 40);
    fillTimeline();
  }

  /* portrait reveal: loads in full colour, fades to black & white, then
     hovering or scrolling briefly brings the colour back */
  function portrait() {
    var box = $('#portrait'), top = $('#reveal');
    if (!box || !top) return;
    if (reduce) { top.style.maskImage = 'none'; top.style.webkitMaskImage = 'none'; return; }
    var cur = { x: 50, y: 50, r: 0 }, aim = { x: 50, y: 50, r: 0 }, raf = null;
    function fullR() {
      var r = box.getBoundingClientRect();
      return Math.sqrt(r.width * r.width + r.height * r.height) / 2 * 1.05;
    }
    function paint() {
      cur.x += (aim.x - cur.x) * 0.1; cur.y += (aim.y - cur.y) * 0.1; cur.r += (aim.r - cur.r) * 0.08;
      var m = 'radial-gradient(circle ' + cur.r.toFixed(1) + 'px at ' + cur.x.toFixed(2) + '% ' + cur.y.toFixed(2) + '%, #000 52%, rgba(0,0,0,.4) 76%, transparent 100%)';
      top.style.webkitMaskImage = m; top.style.maskImage = m;
      if (Math.abs(aim.r - cur.r) > 0.4 || Math.abs(aim.x - cur.x) > 0.2 || Math.abs(aim.y - cur.y) > 0.2) raf = requestAnimationFrame(paint);
      else raf = null;
    }
    function kick() { if (!raf) raf = requestAnimationFrame(paint); }

    /* intro: start fully in colour, then settle to black & white */
    cur.r = aim.r = fullR();
    paint();
    setTimeout(function () { aim.r = 0; kick(); }, 900);

    box.addEventListener('pointermove', function (e) {
      var r = box.getBoundingClientRect();
      aim.x = ((e.clientX - r.left) / r.width) * 100;
      aim.y = ((e.clientY - r.top) / r.height) * 100;
      aim.r = Math.max(r.width, r.height) * 0.36;
      kick();
    });
    box.addEventListener('pointerleave', function () { aim.r = 0; kick(); });

    /* scroll: bring the colour back while the page is moving, fade out once it settles */
    var scrollTimer = null;
    window.addEventListener('scroll', function () {
      aim.x = 50; aim.y = 50; aim.r = fullR();
      kick();
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(function () { aim.r = 0; kick(); }, 900);
    }, { passive: true });

    /* click the play button: swap in the video, autoplaying */
    var playBtn = $('#portraitPlay'), videoBox = $('#portraitVideo');
    if (playBtn && videoBox) {
      playBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        videoBox.innerHTML = '<iframe src="https://drive.google.com/file/d/1hGLctFiTh3vqwMrpFqbJsNpXWdhTwyq0/preview?autoplay=1" allow="autoplay" allowfullscreen></iframe>';
        box.classList.add('playing');
        videoBox.style.opacity = '1';
        videoBox.style.pointerEvents = 'auto';
        videoBox.style.zIndex = '6';
        playBtn.style.opacity = '0';
        playBtn.style.pointerEvents = 'none';
      });
    }
  }

  /* reveals */
  function reveals() {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.1, rootMargin: '0px 0px -6% 0px' });
    document.querySelectorAll('.reveal, .head, .gal figure, .tscroll').forEach(function (el) { io.observe(el); });
  }

  /* scroll-pinned stages: drive --p (0..1) per section */
  function pinned() {
    var secs = [].slice.call(document.querySelectorAll('[data-pin]'));
    if (!secs.length) return;
    secs.forEach(function (s) {
      [].forEach.call(s.querySelectorAll('.scol'), function (c) { c.style.setProperty('--dir', c.getAttribute('data-speed') || -1); });
    });
    var raf = 0;
    function paint() {
      raf = 0;
      var vh = window.innerHeight, wide = window.innerWidth > 900;
      secs.forEach(function (s) {
        var r = s.getBoundingClientRect(), span = r.height - vh;
        var p = wide && span > 0 ? Math.min(1, Math.max(0, -r.top / span)) : 1;
        s.style.setProperty('--p', p.toFixed(4));
        var n = +s.getAttribute('data-steps');
        if (n) {
          var idx = Math.min(n - 1, Math.floor(p * n));
          [].forEach.call(s.querySelectorAll('.pi, .pf'), function (el) {
            el.classList.toggle('on', +el.getAttribute('data-i') === idx);
          });
        }
      });
    }
    function kick() { if (!raf) raf = requestAnimationFrame(paint); }
    window.addEventListener('scroll', kick, { passive: true });
    window.addEventListener('resize', kick);
    paint();
  }

  /* projects as postcards: plain words, a real link on each */
  function projects() {
    var card = document.getElementById('pcCard'), photo = document.getElementById('pcPhoto');
    if (!card || !photo) return;
    var P = [
      { kind: 'AI tool', title: 'DocAssist', note: '15 minutes to 10 seconds', img: 'docassist-architecture.png', tags: ['Mistral', 'Groq'],
        text: 'Doctors have to read long patient notes. DocAssist turns them into a short summary in about 10 seconds, and answers follow-up questions. It used to take about 15 minutes. Top 25 in a national AI challenge.',
        links: [['Watch the demo', 'https://drive.google.com/file/d/1ZGi5UvTm7qNwh-bhKQcpu6Adle6jmVXx/view'], ['Read the README', 'https://github.com/godhulivyas-build/DocAssist/blob/main/README.md']], sheet: 'docassist' },
      { kind: 'Job finder', title: 'ethOS', note: 'every job gets a score', img: 'thumb-ethos.png', tags: ['LangChain', 'GPT-4o'],
        text: 'A job and internship finder that only shows real listings. Each one gets a score from 0 to 100, so you can see why it was picked. No spam.',
        links: [['Open the app', 'https://ethosinternshipfinder.vercel.app/'], ['Read the PRD', 'ethos.html']], sheet: 'ethos' },
      { kind: 'Money planner', title: 'Produscope AI', note: 'can I afford this?', metric: '5 helpers', tags: ['Lovable', 'AI agents'],
        text: 'Five small AI helpers answer one question: can I afford this? You type your own numbers. It never connects to your bank.',
        links: [['Try the prototype', 'https://finance-buddyai.lovable.app/'], ['Read the PRD', 'produscope.html']], sheet: 'produscope' },
      { kind: 'Career quiz', title: 'TimesPro Visionary Corner', note: 'two minutes, one Career Card', img: 'thumb-timespro-app.webp', tags: ['React', 'Matching'],
        text: 'A two-minute quiz that matches you to courses and gives you a personal Career Card. Built for a client to run live at an event.',
        links: [['Open the app', 'https://timespro-vision-cafe.vercel.app/'], ['How it works', 'timespro.html']], sheet: 'timespro' },
      { kind: 'Marketing platform', title: 'CupShup AI Platform', note: '20+ tools, launched', img: 'thumb-cupshupplatform.png', tags: ['Positioning', 'Email launch'],
        text: 'A set of 20+ AI marketing tools. I wrote the product pages, ran the launch emails, and sat with clients to show them how to use it, with video walkthroughs.',
        links: [['See the platform', 'https://www.cupshup.co.in/platform'], ['Watch the user guide', 'https://app.trupeer.ai/view/hkKnoDnEJ/cupshup-ai-dashboard-user-guide']], sheet: 'cupshupplatform' },
      { kind: 'Website', title: 'cupshup.co.in', note: 'traffic from search 65% to 92%', img: 'thumb-cupshup-platform.webp', tags: ['SEO', 'UX'],
        text: 'I rebuilt the website around the people who actually visit it, then fixed the technical problems underneath. Traffic from search grew from 65% to 92%.',
        links: [['Visit the site', 'https://www.cupshup.co.in/']], sheet: 'cupshupweb' },
      { kind: 'AI writing team', title: 'Five-Agent Content Writer', note: '6 hours to 45 minutes', metric: '90% faster', tags: ['Claude', 'Ahrefs'],
        text: 'Five AI helpers write a blog post together: research, write, polish, add pictures, and check. A person reads it last. Work that took 6 hours now takes 45 minutes.',
        links: [['See it on the site', 'https://www.cupshup.co.in/']], sheet: 'harness' },
      { kind: 'WhatsApp automation', title: 'Enquiry-to-CRM Agent', note: 'no one types anything', metric: '4 tools', tags: ['n8n', 'WhatsApp'],
        text: 'A customer sends a WhatsApp message. AI reads it, sorts it, and sends it to the right person, with the source tracked.',
        links: [['See CupShup', 'https://www.cupshup.co.in/']], sheet: 'whatsapp' },
      { kind: 'Process redesign', title: 'Procure-to-Pay', note: '12 steps became 4', metric: '12 \u2192 4', tags: ['Approvals', 'Audit trail'],
        text: 'Approving a payment took 12 steps. I cut it to 4, gave every step a named owner, and logged every action.',
        links: [['Built at CupShup', 'https://www.cupshup.co.in/']], sheet: 'p2p' },
      { kind: 'Operations', title: 'Truck Hai', note: '15 days faster', metric: '\u221215 days', tags: ['Interviews', 'Reconciliation'],
        text: 'Operations and payment records did not match, so payments were slow. After 50+ interviews I merged them into one source of truth.',
        links: [], sheet: 'truckhai' }
    ];
    var cnt = document.getElementById('pcCount'), dash = document.getElementById('pcDash'), cur = 0;
    var pad = function (n) { return (n < 10 ? '0' : '') + n; };
    dash.innerHTML = P.map(function () { return '<i></i>'; }).join('');
    function render(i) {
      cur = (i + P.length) % P.length;
      var p = P[cur], tilt = (cur % 2 ? 2.2 : -2.6);
      photo.style.setProperty('--tilt', tilt + 'deg');
      photo.innerHTML = '<div class="pc-pol"><span class="pc-tape"></span>' +
        (p.img ? '<img src="assets/img/' + p.img + '" alt="' + esc(p.title) + ' preview" />'
               : '<div class="pc-fallback"><b>' + esc(p.metric || p.title) + '</b><span>' + esc(p.kind) + '</span></div>') +
        '<p class="pc-note">' + esc(p.note) + '</p></div>';
      var lk = p.links.map(function (l, k) {
        var ext = /^https?:/.test(l[1]);
        return '<a class="' + (k ? 'sec' : 'main') + '" href="' + esc(l[1]) + '"' + (ext ? ' target="_blank" rel="noopener"' : '') + '>' + esc(l[0]) + (ext ? ' \u2197' : ' \u2192') + '</a>';
      }).join('');
      card.classList.remove('swap'); void card.offsetWidth; card.classList.add('swap');
      card.innerHTML = '<div class="pc-top"><h3>' + esc(p.title) + '</h3>' + (p.year ? '<span>' + esc(p.year) + '</span>' : '') + '</div>' +
        '<p class="pc-kind">' + esc(p.kind) + '</p><p class="pc-text">' + esc(p.text) + '</p>' +
        '<div class="pc-tags">' + p.tags.map(function (t) { return '<span>' + esc(t) + '</span>'; }).join('') + '</div>' +
        '<div class="pc-links">' + lk + '<button data-open-id="' + esc(p.sheet) + '">The full story \u2192</button><button data-ask="' + esc(p.title) + '">Ask me about it \u2192</button></div>';
      cnt.textContent = pad(cur + 1) + ' / ' + pad(P.length);
      [].forEach.call(dash.children, function (d, k) { d.className = k === cur ? 'on' : ''; });
    }
    var DWELL = 6500, timer = null, paused = false, vis = false;
    function arm() { if (timer) clearTimeout(timer); timer = setTimeout(function () { if (!paused && vis && !document.hidden) render(cur + 1); else arm(); }, DWELL); }
    function go(i) { render(i); arm(); }
    document.getElementById('pcPrev').addEventListener('click', function () { go(cur - 1); });
    document.getElementById('pcNext').addEventListener('click', function () { go(cur + 1); });
    var box = document.getElementById('pc'), x0 = null;
    box.addEventListener('touchstart', function (e) { x0 = e.touches[0].clientX; }, { passive: true });
    box.addEventListener('touchend', function (e) { if (x0 === null) return; var dx = e.changedTouches[0].clientX - x0; if (Math.abs(dx) > 50) render(cur + (dx < 0 ? 1 : -1)); x0 = null; });
    box.addEventListener('keydown', function (e) { if (e.key === 'ArrowRight') render(cur + 1); else if (e.key === 'ArrowLeft') render(cur - 1); });
    box.tabIndex = 0;
    ['mouseenter', 'focusin'].forEach(function (ev) { box.addEventListener(ev, function () { paused = true; box.classList.add('hold'); }); });
    ['mouseleave', 'focusout'].forEach(function (ev) { box.addEventListener(ev, function () { paused = false; box.classList.remove('hold'); arm(); }); });
    if ('IntersectionObserver' in window) new IntersectionObserver(function (es) { vis = es[0].isIntersecting; if (vis) arm(); }, { threshold: 0.3 }).observe(box); else vis = true;
    render(0); arm();
  }

  /* postcard form: opens the visitor's email app, ready to send */
  function postcard() {
    var form = document.getElementById('wrForm');
    if (!form) return;
    var msg = document.getElementById('wrMsg'), from = document.getElementById('wrFrom'),
        err = document.getElementById('wrErr'), note = document.getElementById('wrNote'),
        EMAIL = 'godhulivyas@gmail.com';
    function fail(t) { err.textContent = t; err.hidden = false; }
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      err.hidden = true;
      var body = msg.value.trim();
      var mail = from.value.trim();
      if (body.replace(/^Hi Godhuli,?/i, '').trim().length < 3) { fail('Write a line or two first.'); msg.focus(); return; }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail)) { fail('Add your email so I can write back.'); from.focus(); return; }
      var subject = 'A postcard from your portfolio';
      var full = body + '\n\n— ' + mail;
      window.location.href = 'mailto:' + EMAIL + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(full);
      note.textContent = 'Your email app should open now. If it does not, copy my email and write to me directly.';
    });
    document.getElementById('wrCopy').addEventListener('click', function () {
      var done = function () { note.textContent = 'Copied: ' + EMAIL; };
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(EMAIL).then(done, function () { note.textContent = 'My email: ' + EMAIL; });
      else note.textContent = 'My email: ' + EMAIL;
    });
    document.addEventListener('click', function (e) {
      var b = e.target.closest('[data-ask]');
      if (!b) return;
      msg.value = 'Hi Godhuli,\n\nI\u2019d love to hear more about ' + b.getAttribute('data-ask') + '.\n';
      document.getElementById('write').scrollIntoView({ behavior: 'smooth', block: 'start' });
      setTimeout(function () { from.focus({ preventScroll: true }); }, 600);
    });
  }

  /* moments gallery + lightbox */
  function gallery() {
    var grid = document.getElementById('gxGrid'), lb = document.getElementById('lbx');
    if (!grid || !lb) return;
    var T = [
      ['eyfi-4.jpg', 'Panelist at EYFI by Polygnan', '5 / 10', '1 / 4'],
      ['gdg-chapter-lead.png', 'GDG on Campus', '1 / 5', '2 / 7'],
      ['polygnan-winner-group.jpg', 'Polygnan Demo Day', '5 / 9', '4 / 7'],
      ['field-thresher.jpg', 'Saarthi field visit: harvest', '9 / 13', '4 / 7'],
      ['eyfi-3.jpg', 'EYFI panel', '1 / 6', '7 / 10'],
      ['cohort.jpg', 'Polygnan Fellowship cohort', '6 / 10', '7 / 10'],
      ['speaking.jpg', 'Presenting the Saarthi architecture', '10 / 11', '7 / 9'],
      ['abg-podium.png', 'Reinventing the Future, Indore regional round', '11 / 13', '7 / 10'],
      ['grp-1.png', 'Group photo', '1 / 5', '10 / 14'],
      ['grp-2.webp', 'Group photo', '5 / 13', '10 / 14'],
      ['gdg-bootcamp-1.png', 'GDG on Campus, Indore', '1 / 5', '14 / 18', 'https://lnkd.in/p/g56YzCkx'],
      ['gdg-bootcamp-2.png', 'Solution Challenge Indore Bootcamp, 10 March 2025', '5 / 9', '14 / 18', 'https://lnkd.in/p/g56YzCkx']
    ];
    var X = [
      ['gdg-team.webp', 'GDG on Campus core team'],
      ['eyfi-6.jpg', 'EYFI by Polygnan'],
      ['field-farmer.jpg', 'Saarthi field visit'],
      ['polygnan-pitch1.jpg', 'Pitching at Polygnan Demo Day']
    ];
    var P = T.map(function (t) { return [t[0], t[1], t[4]]; }).concat(X);
    var img = lb.querySelector('img'), cap = lb.querySelector('.lbx-cap'), cur = 0;
    grid.innerHTML = T.map(function (p, i) {
      return '<button class="gx-t" data-i="' + i + '" style="--gc:' + p[2] + ';--gr:' + p[3] + '" aria-label="Open photo: ' + esc(p[1]) + '"><img src="assets/img/' + p[0] + '" alt="' + esc(p[1]) + '" loading="lazy" /><span>View gallery &#8599;</span>' + (p[4] ? '<i class="gx-lk" aria-hidden="true">Post &#8599;</i>' : '') + '</button>';
    }).join('');
    var all = document.getElementById('gxAll');
    if (all) { all.textContent = 'View all ' + P.length + ' photos'; all.addEventListener('click', function () { open(0); }); }
    var lk = lb.querySelector('.lbx-link');
    if (!lk) { lk = document.createElement('a'); lk.className = 'lbx-link'; lk.target = '_blank'; lk.rel = 'noopener'; lk.textContent = 'See the post ↗'; lb.appendChild(lk); }
    function show(i) { cur = (i + P.length) % P.length; img.src = 'assets/img/' + P[cur][0]; img.alt = P[cur][1]; cap.textContent = P[cur][1] + '  ·  ' + (cur + 1) + ' / ' + P.length; if (P[cur][2]) { lk.href = P[cur][2]; lk.style.display = ''; } else lk.style.display = 'none'; }
    function open(i) { show(i); lb.hidden = false; document.body.style.overflow = 'hidden'; }
    function close() { lb.hidden = true; document.body.style.overflow = ''; }
    grid.addEventListener('click', function (e) { var t = e.target.closest('.gx-t'); if (t) open(+t.dataset.i); });
    lb.addEventListener('click', function (e) {
      if (e.target.closest('.next')) show(cur + 1);
      else if (e.target.closest('.prev')) show(cur - 1);
      else if (e.target.closest('.lbx-link')) return;
      else if (e.target.tagName !== 'IMG') close();
    });
    document.addEventListener('keydown', function (e) {
      if (lb.hidden) return;
      if (e.key === 'Escape') close(); else if (e.key === 'ArrowRight') show(cur + 1); else if (e.key === 'ArrowLeft') show(cur - 1);
    });
    function reveal() {
      if (grid.getBoundingClientRect().top < window.innerHeight * 0.85) {
        [].forEach.call(grid.children, function (c) { c.classList.add('in'); });
        window.removeEventListener('scroll', reveal);
      }
    }
    window.addEventListener('scroll', reveal, { passive: true });
    reveal();
  }

  /* tech stack marquee (tools named in my Bytebeam one-pager) */
  function techStack() {
    var rows = [
      [['Claude','anthropic'],['Gemini','googlegemini'],['Mistral','mistralai'],['GPT-4o','openai/white'],['Groq','groq'],['LangChain','langchain'],['Cursor','cursor/white'],['Lovable','lovable'],['FastAPI','fastapi'],['Python','python']],
      [['React','react'],['Supabase','supabase'],['Vercel','vercel/white'],['n8n','n8n'],['Zapier','zapier'],['Figma','figma'],['Notion','notion/white'],['Mixpanel','mixpanel/white'],['Power BI','powerbi']]
    ];
    [].forEach.call(document.querySelectorAll('.stk-row'), function (el, i) {
      var html = rows[i].map(function (t) {
        return '<span class="stk-it"><img src="https://cdn.simpleicons.org/' + t[1] + '" alt="" loading="lazy" onerror="this.remove()" />' + esc(t[0]) + '</span>';
      }).join('');
      el.innerHTML = html + html;
    });
  }

  /* proof block: a road that paves itself as you scroll */
  function road() {
    var box = document.getElementById('proofbytype'), way = document.getElementById('rdWay'), dot = document.getElementById('rdDot'), rd = document.getElementById('bytRoad');
    if (!box || !way) return;
    var len = way.getTotalLength(), raf = 0;
    function paint() {
      raf = 0;
      var r = box.getBoundingClientRect(), vh = window.innerHeight;
      var p = Math.min(1, Math.max(0, (vh * 0.88 - r.top) / (r.height * 1.05)));
      box.style.setProperty('--rp', p.toFixed(4));
      var pt = way.getPointAtLength(len * p);
      dot.style.left = (pt.x / 1000 * 100) + '%';
      dot.style.top = (pt.y / 80 * 100) + '%';
      [].forEach.call(rd.querySelectorAll('.rd-pin'), function (el, i) { el.classList.toggle('lit', p > 0.1 + i * 0.25); });
    }
    function kick() { if (!raf) raf = requestAnimationFrame(paint); }
    window.addEventListener('scroll', kick, { passive: true });
    window.addEventListener('resize', kick);
    paint();
  }

  /* proof of work: an inset card. Each chapter lays its evidence out as a zigzag grid:
     every item is a label cell (title + big number) over an image cell, and every second item is
     pushed down one cell, as in the reference. The grid scrolls up through the chapter. */
  function proofWork() {
    var dial = document.getElementById('pfxDial'), right = document.getElementById('pfxRight'), sec = document.getElementById('proof');
    if (!dial || !right || !sec) return;
    var down = document.getElementById('pfxDown');
    var I = function (n) { return 'assets/img/' + n; };
    var C = 'https://www.cupshup.co.in/case-studies/';
    var P = [
      { theme: 'gdg', short: 'GDG', k: 'Community', t: 'GDG on Campus', proves: 'I can build something from zero and keep people coming back.', stat: ['1,000+', 'members, from zero'],
        text: 'Google Developer Groups are student-led communities that learn Google technologies together. I started our chapter from zero, grew it to 1,000+ members, and ran 20+ workshops and events on AI, cloud and web with Google speakers.',
        items: [
          { img: I('gdg-team.webp'), title: 'GDG chapter website', sub: 'gdsc-sui.vercel.app', href: 'https://gdsc-sui.vercel.app/' },
          { img: I('gdg-chapter-lead.png'), fit: 'contain', title: 'Photos and videos of all events', sub: 'Google Drive', href: 'https://drive.google.com/drive/folders/1rIubQ6POrn3Jbw1XGZtFcusWieZ78csN' }
        ] },
      { short: 'Zomato', k: 'Case competition', t: 'Zomato: help new restaurants get found', proves: 'I can find the real problem, propose a fix and build it.', stat: ['1st RU', 'runner-up, pan-India, 2023'],
        text: '1st runner-up, pan-India. A New + Verified section for new restaurants, then a working prototype.',
        items: [
          /* video: paste the Zomato Loom URL here and a "Watch the video" pill appears on the tile */
          { img: I('thumb-zomato.webp'), fit: 'contain', title: 'Zomato case deck', sub: 'Live on Canva', href: 'https://www.canva.com/design/DAG8mu7o9rY/DTWzUeCL7TMKbI49mBdh3A/view',
            links: [['Live prototype', 'https://ujain-foodie-quest.lovable.app/home']], video: '' }
        ] },
      { short: 'Case studies', k: 'Campaigns', t: 'Campaign case studies', proves: 'I can write up what a brand needed and what moved.', stat: ['4', 'client campaigns'],
        text: 'Four CupShup client campaigns, each written up.',
        items: [
          { img: I('cs-paperboat2.jpg'), title: 'Paper Boat Zero Prebiotic Soda launch', sub: 'cupshup.co.in', href: C + 'paper-boat-zero-prebiotic-soda-launch' },
          { img: I('cs-optimist.jpg'), title: 'Optimist smart AC canter, Delhi NCR', sub: 'cupshup.co.in', href: C + 'optimist-smart-ac-canter-campaign-delhi-ncr' },
          { img: I('cs-deconstruct.jpg'), title: 'Deconstruct sunscreen mall activation', sub: 'cupshup.co.in', href: C + 'deconstruct-sunscreen-mall-activation-bangalore' },
          { img: I('cs-pintola2.jpg'), title: 'Pintola canter activation', sub: 'cupshup.co.in', href: C + 'pintola-canter-activation-fmcg-sampling-india' }
        ] },
      { short: 'Polygnan', k: 'Fellowship and stage', t: 'Polygnan: Demo Day and EYFI', proves: 'I can take an idea into the field, pitch it and win.', stat: ['Winner', 'Polygnan Demo Day'],
        text: 'Saarthi won Demo Day. 1 of 22 fellows from 4,000+. EYFI winner and panelist.',
        items: [
          { img: I('eyfi-reel.jpg'), pos: '50% 14%', play: true, embed: 'https://www.instagram.com/reel/DYh_OkbSWik/embed', title: 'EYFI challenge reel', sub: 'Where I earned my first income', href: 'https://www.instagram.com/reel/DYh_OkbSWik/' },
          { img: I('eyfi-4.jpg'), title: 'EYFI panel, Bangalore', sub: 'Watch the video', href: 'https://lnkd.in/p/gHQZYkPM' }
        ] },
      { short: 'Videos', k: 'Video', t: 'Videos and tutorials', proves: 'I can teach a product to people who are not technical.', stat: ['3', 'products explained'],
        text: 'Walkthroughs for clients, school students and farmers.',
        items: [
          { img: I('yt-saarthi.jpg'), play: true, title: 'Saarthi farmer walkthrough', sub: 'YouTube', href: 'https://youtu.be/AYJJxBXKOrc?si=y-hs5BQlVFcPH-Sf' },
          { img: I('thumb-cupshup-platform.webp'), play: true, title: 'CupShup platform walkthrough', sub: 'Video, Google Drive', href: 'https://drive.google.com/file/d/15FX3U7XhX-Pc26BRb8VdpAehT5aX_DjF/view?usp=sharing' },
          { ph: 'Chanakya AI', play: true, title: 'Chanakya AI tutorials', sub: 'Video folder, Google Drive', href: 'https://drive.google.com/drive/folders/1OiKNqnKCCPey-JwO0_TizhRg0W4c4ue6?usp=sharing' }
        ] },
      { short: 'Teaching', k: 'Teaching and field work', t: 'Claylab and Sarkari School', proves: 'I teach, and I show up on the ground.', stat: ['3 yrs', 'mentoring students'],
        text: 'Three years mentoring students at Claylab, plus field work and photos from Sarkari School.',
        items: [
          { img: I('clay-1.png'), title: 'Claylab: mentoring session, online', sub: 'Read the full story', href: 'sheet:claylab' },
          { img: I('clay-2.png'), title: 'Claylab: a student shares her writing', sub: 'Weekly mentoring call', href: 'sheet:claylab' },
          { img: I('school-classroom.png'), title: 'Sarkari School: classroom session', sub: 'Photos and work, Google Drive', href: 'https://drive.google.com/drive/folders/1C8nTwSaMFNJTRyjEvnTxOD1uk0S2FG7?usp=sharing' },
          { img: I('school-visit.png'), title: 'Sarkari School: school and community visit', sub: 'Photos and work, Google Drive', href: 'https://drive.google.com/drive/folders/1C8nTwSaMFNJTRyjEvnTxOD1uk0S2FG7?usp=sharing' }
        ] }
    ];
    var COL = ['#4a78d8', '#e23744', '#8b73dc', '#23805a', '#a85f08', '#c64f8f'];
    var n = P.length, cur = -1, wide = function () { return window.innerWidth > 900; };
    var NUMS = function (i) { return (i < 9 ? '0' : '') + (i + 1); };
    function cube(c) {
      return '<svg class="pfx-ch" viewBox="0 0 120 120" aria-hidden="true"><g class="ch-a"><path d="M60 8 104 32 60 56 16 32z" fill="' + c.l + '"/><path d="M16 32 60 56 60 108 16 84z" fill="' + c.m + '"/><path d="M104 32 60 56 60 108 104 84z" fill="' + c.d + '"/></g><circle class="ch-b" cx="104" cy="14" r="7" fill="#fff" opacity=".85"/><path class="ch-c" d="M14 100l6-14 6 14-12-8h12z" fill="#fff" opacity=".8"/></svg>';
    }
    function shades(hex) {
      var r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
      var mix = function (t, k) { return 'rgb(' + Math.round(r + (t - r) * k) + ',' + Math.round(g + (t - g) * k) + ',' + Math.round(b + (t - b) * k) + ')'; };
      return { l: mix(255, .45), m: mix(255, .12), d: mix(0, .28) };
    }
    dial.innerHTML = P.map(function (p, i) {
      return '<li class="pfx-it" data-i="' + i + '" tabindex="0" role="button"><span class="pfx-n mono">' + NUMS(i) + '</span><span class="pfx-t">' + esc(p.short || p.t.split(':')[0]) + '</span></li>';
    }).join('');
    var items = [].slice.call(dial.children);

    /* one item = a label cell over an image cell; items alternate right column, left column, ...
       and each starts one row lower than the one before, which leaves the blank cells */
    function tile(it, k) {
      var sheet = /^sheet:/.test(it.href), ext = /^https?:/.test(it.href);
      var attrs = sheet ? ' href="#" data-open-id="' + esc(it.href.slice(6)) + '"' : ' href="' + esc(it.href) + '"' + (ext ? ' target="_blank" rel="noopener"' : '');
      var pills = (it.links || []).concat(it.video ? [['Watch the video', it.video]] : []).map(function (l) {
        return '<a href="' + esc(l[1]) + '" target="_blank" rel="noopener">' + esc(l[0]) + ' ↗</a>';
      }).join('');
      return '<div class="pfx-tile" style="--k:' + k + ';grid-row:' + (k + 1) + ' / span 2">' +
        '<div class="pfx-cap"><a class="pfx-lt"' + attrs + '><b>' + esc(it.title) + '</b><span>' + esc(it.sub) + ' ' + (ext ? '↗' : '→') + '</span></a><i class="pfx-num">' + NUMS(k) + '</i></div>' +
        '<div class="pfx-img' + (it.fit === 'contain' ? ' fitc' : '') + '"><a class="pfx-ia"' + attrs + (it.embed ? ' data-embed="' + esc(it.embed) + '" aria-label="Play: ' + esc(it.title) + '"' : ' tabindex="-1" aria-hidden="true"') + '>' +
        (it.img ? '<img src="' + esc(it.img) + '" alt=""' + (it.pos ? ' style="object-position:' + esc(it.pos) + '"' : '') + ' />' : '') + (!it.img && it.ph ? '<span class="pfx-ph"><b>' + esc(it.ph) + '</b><em>Tutorial videos</em></span>' : '') + (it.play ? '<span class="pfx-play"><i>▶</i></span>' : '') + '</a>' +
        (pills ? '<div class="pfx-pills">' + pills + '</div>' : '') + '</div></div>';
    }

    /* size the grid to the window it is shown in: shrink the cells so every item fits at once when
       they reasonably can (down to a minimum), otherwise let the grid travel up through the chapter */
    function measure() {
      var gw = right.querySelector('.pfx-gw'), g = right.querySelector('.pfx-grid');
      if (!gw || !g) return;
      right.style.removeProperty('--cw'); right.style.removeProperty('--rh');
      right.classList.remove('tight');
      if (!wide()) { right.style.setProperty('--ov', 0); return; }
      var rows = g.children.length + 1, avail = gw.clientHeight - 6, base = parseFloat(getComputedStyle(g).gridAutoRows) || 190, use = base;
      var floor = window.innerWidth <= 1100 ? 96 : (window.innerHeight <= 760 ? 124 : 150);
      if (rows * base > avail) use = Math.max(Math.min(base, avail / rows), floor);
      if (use < base) {
        /* keep the columns wide and shorten the rows, so titles wrap to two lines at most */
        right.style.setProperty('--rh', use.toFixed(1) + 'px');
        if (use < 140) right.classList.add('tight');
      }
      right.style.setProperty('--ov', Math.max(0, rows * use - avail + 14).toFixed(0));
    }

    function draw(i) {
      if (i === cur) return; cur = i; lastIdx = i;
      var p = P[i], c = COL[i % COL.length], sh = shades(c);
      sec.style.setProperty('--pc', c);
      items.forEach(function (el, k) {
        var d = k - i, ad = Math.abs(d);
        el.style.setProperty('--d', d); el.style.setProperty('--ad', ad);
        el.classList.toggle('on', k === i);
      });
      right.classList.remove('in'); void right.offsetWidth;
      right.className = 'pfx-right in cnt' + Math.min(p.items.length, 5);
      right.style.setProperty('--lp', 0);
      right.innerHTML = '<div class="pfx-rh"><span class="pfx-count mono">' + NUMS(i) + ' / ' + (n < 10 ? '0' : '') + n + '</span><h3>' + esc(p.t) + '</h3><p class="pfx-pr">' + esc(p.proves) + '</p>' +
        (p.text ? '<p class="pfx-tx">' + esc(p.text) + '</p>' : '') +
        (p.stat ? '<p class="pfx-stat"><b>' + esc(p.stat[0]) + '</b><span>' + esc(p.stat[1]) + '</span></p>' : '') + '</div>' +
        '<div class="pfx-gw"><div class="pfx-grid">' + p.items.map(tile).join('') + '</div></div>' + cube(sh);
      measure();
    }

    var natural = 0, hovering = false, hoverY = 0, lastScroll = 0, jumpLock = null, jumpTo = 0, jumpT = 0, lastIdx = 0, wasWide = wide();
    function onScroll() {
      if (!wide()) return;
      var r = sec.getBoundingClientRect(), span = sec.offsetHeight - window.innerHeight;
      var pr = Math.min(0.9999, Math.max(0, -r.top / span));
      var idx = Math.floor(pr * n), lp = pr * n - idx;
      sec.style.setProperty('--prog', pr.toFixed(3));
      if (jumpLock !== null) {
        if (Math.abs(window.pageYOffset - jumpTo) < 3 || Date.now() - jumpT > 2500) jumpLock = null;
        else return;
      }
      if (idx !== natural) { natural = idx; hovering = false; }
      if (hovering && Math.abs(window.pageYOffset - hoverY) > 40) hovering = false;   /* scrolling ends a hover preview */
      if (!hovering) {
        draw(idx);
        /* hold still for the first tenth of a chapter, travel through most of it, hold at the end */
        right.style.setProperty('--lp', Math.min(1, Math.max(0, (lp - 0.1) / 0.75)).toFixed(3));
      }
      sec.style.setProperty('--prog', pr.toFixed(3));
    }
    var raf = 0;
    window.addEventListener('scroll', function () { lastScroll = Date.now(); if (!raf) raf = requestAnimationFrame(function () { raf = 0; onScroll(); }); }, { passive: true });
    ['wheel', 'touchstart', 'keydown'].forEach(function (ev) { window.addEventListener(ev, function () { jumpLock = null; }, { passive: true }); });
    window.addEventListener('resize', function () {
      var w = wide();
      if (w !== wasWide) { wasWide = w; cur = -1; if (w) onScroll(); else draw(lastIdx); }
      else { measure(); if (w) onScroll(); }
    });
    dial.addEventListener('mouseover', function (e) {
      var it = e.target.closest('.pfx-it');
      if (Date.now() - lastScroll < 300) return;
      if (it && wide()) { hovering = true; hoverY = window.pageYOffset; draw(+it.dataset.i); }
    });
    function jump(i) {
      if (!wide()) { draw(i); return; }
      var top = sec.getBoundingClientRect().top + window.pageYOffset, span = sec.offsetHeight - window.innerHeight;
      jumpTo = Math.round(top + (i + 0.04) / n * span);
      hovering = false; draw(i);
      jumpLock = Math.abs(window.pageYOffset - jumpTo) < 3 ? null : i; jumpT = Date.now();
      window.scrollTo({ top: jumpTo, behavior: 'smooth' });
    }
    dial.addEventListener('click', function (e) { var it = e.target.closest('.pfx-it'); if (it) jump(+it.dataset.i); });
    dial.addEventListener('keydown', function (e) { if ((e.key === 'Enter' || e.key === ' ') && e.target.classList.contains('pfx-it')) { e.preventDefault(); jump(+e.target.dataset.i); } });
    if (down) down.addEventListener('click', function () {
      if (!wide()) return;
      if (natural < n - 1) jump(natural + 1);
      else document.getElementById('field').scrollIntoView({ behavior: 'smooth' });
    });

    /* the reel opens in a lightbox instead of squeezing a phone-sized embed into a small cell */
    var lb = null, lastFocus = null;
    function closeLb() { if (!lb) return; lb.hidden = true; if (lastFocus && lastFocus.focus) lastFocus.focus(); lb.querySelector('iframe').src = 'about:blank'; document.body.style.overflow = ''; }
    function openLb(src, label) {
      if (!lb) {
        lb = document.createElement('div'); lb.className = 'pfx-lb'; lb.hidden = true;
        lb.innerHTML = '<div class="pfx-lbx" role="dialog" aria-modal="true"><button class="pfx-lbc" type="button" aria-label="Close">×</button><iframe title="" allow="autoplay; encrypted-media; fullscreen" allowfullscreen scrolling="no"></iframe></div>';
        document.body.appendChild(lb);
        lb.addEventListener('click', function (e) { if (e.target === lb || e.target.closest('.pfx-lbc')) closeLb(); });
        document.addEventListener('keydown', function (e) { if (!lb.hidden && e.key === 'Escape') closeLb(); });
      }
      var f = lb.querySelector('iframe'); lastFocus = document.activeElement; f.title = label; f.src = src; lb.hidden = false; document.body.style.overflow = 'hidden';
      lb.querySelector('.pfx-lbc').focus();
    }
    right.addEventListener('click', function (e) {
      var a = e.target.closest('.pfx-ia[data-embed]');
      if (a) { e.preventDefault(); openLb(a.dataset.embed, 'Video'); }
    });

    draw(0); onScroll();
  }

  /* recognition: pick a win, see the photos sliding and the links */
  function recognition() {
    var list = document.getElementById('rcList'), panel = document.getElementById('rcPanel');
    if (!list || !panel) return;
    var I = function (n) { return 'assets/img/' + n; };
    var R = [
      { t: 'Zomato case and Futurepreneur', m: '1st Runner-Up, both \u00b7 Pan-India \u00b7 2023', text: 'Two national competitions, two 1st runner-up results: the Zomato product strategy case and the Futurepreneur business simulation.',
        photos: [I('casequest-winners.png'), I('thumb-zomato.webp')],
        links: [['Zomato case deck (Canva)', 'https://www.canva.com/design/DAG8mu7o9rY/DTWzUeCL7TMKbI49mBdh3A/view'], ['Zomato live prototype', 'https://ujain-foodie-quest.lovable.app/home'], ['Zomato teardown (PDF)', 'teardowns/zomato.pdf']] },
      { t: 'Polygnan Demo Day', m: 'Winner \u00b7 Saarthi', text: 'Saarthi won Polygnan Demo Day. I was 1 of 22 fellows picked from 4,000+ applicants.',
        photos: [I('polygnan-winner-group.jpg'), I('polygnan-winner.jpg'), I('polygnan-pitch1.jpg'), I('polygnan-pitch2.jpg'), I('cohort.jpg')],
        links: [['The Saarthi story', '#field'], ['Pitch deck', 'https://canva.link/h81hmy0v3v79vx1']] },
      { t: 'EYFI Challenge', m: 'Winner \u00b7 Where I earned my first income', text: 'The 30-day EYFI earning challenge, where I earned my first income. Watch the reel on the right.',
        reel: 'https://www.instagram.com/reel/DYh_OkbSWik/embed', photos: [],
        links: [['Open the reel on Instagram', 'https://www.instagram.com/reel/DYh_OkbSWik/']] },
      { t: 'EYFI by Polygnan', m: 'Panelist \u00b7 Bangalore', text: 'Invited back to speak as a panelist at the EYFI event in Bangalore, on what happens when students start before they feel ready.',
        photos: [I('eyfi-4.jpg'), I('eyfi-1.jpg'), I('eyfi-2.jpg'), I('eyfi-3.jpg'), I('eyfi-5.jpg'), I('eyfi-6.jpg')],
        links: [['Watch the panel (video)', 'https://lnkd.in/p/gHQZYkPM']] },
      { t: 'GatherVerse Women\u2019s AI Summit', m: 'Speaker \u00b7 2026', text: 'Invited to speak at the GatherVerse Women\u2019s AI Summit.',
        photos: [I('gv-panel.png'), I('gv-speakers.webp')],
        links: [['Watch the session (YouTube)', 'https://www.youtube.com/live/EhQV8BfIYNY?si=SvuKcq_SA9GyOayH'], ['Speaker page', 'https://gatherverse.org/women-ai-2026/speakers/']] },
      { t: 'Zero to One, War Room 2.0', m: 'Talk \u00b7 Sept 2026', text: 'Gave a talk at Zero to One, War Room 2.0.',
        photos: [I('featured-warroom.png')], links: [['See the talk', 'https://lnkd.in/gCyeVkDT']] },
      { t: 'Google Cloud Arcade', m: 'Facilitator \u00b7 2025', text: 'Facilitated the Google Cloud Arcade programme for the community.',
        photos: [I('featured-arcade.png')], links: [['See the programme', 'https://lnkd.in/dc5W_uCy']] }
    ];
    var cur = 0;
    list.innerHTML = R.map(function (r, i) {
      return '<li><button class="rc-row" data-i="' + i + '"><b>' + esc(r.t) + '</b><span class="mono">' + esc(r.m) + '</span></button></li>';
    }).join('');
    function col(arr, cls) {
      var many = arr.slice(); while (many.length < 4) many = many.concat(arr);
      var html = many.map(function (p) { return '<img src="' + esc(p) + '" alt="" loading="lazy" />'; }).join('');
      return '<span class="rc-col ' + cls + '">' + html + html + '</span>';
    }
    function draw() {
      var r = R[cur], vis;
      if (r.reel) vis = '<div class="rc-reel"><iframe src="' + esc(r.reel) + '" title="EYFI challenge reel" loading="lazy" allow="autoplay; encrypted-media; fullscreen" allowfullscreen scrolling="no"></iframe></div>';
      else {
        var A = [], B = [];
        r.photos.forEach(function (p, i) { (i % 2 ? B : A).push(p); });
        if (!B.length) B = A.slice().reverse();
        vis = '<div class="rc-collage">' + col(A, 'up') + col(B, 'down') + '</div>';
      }
      var lk = r.links.map(function (l) {
        var ext = /^https?:/.test(l[1]);
        return '<a href="' + esc(l[1]) + '"' + (ext ? ' target="_blank" rel="noopener"' : '') + '><span>' + esc(l[0]) + '</span><em>' + (ext ? '\u2197' : '\u2192') + '</em></a>';
      }).join('');
      panel.innerHTML = vis + '<h4>' + esc(r.t) + '</h4><p>' + esc(r.text) + '</p><div class="pf-links">' + lk + '</div>';
      [].forEach.call(list.querySelectorAll('.rc-row'), function (b, i) { b.parentNode.classList.toggle('sel', i === cur); });
    }
    var timer = null, paused = false;
    function dwell() { return R[cur].reel ? 14000 : 5200; }
    function tick() { timer = setTimeout(function () { if (paused || document.hidden) { tick(); return; } cur = (cur + 1) % R.length; draw(); tick(); }, dwell()); }
    function start() { stop(); tick(); }
    function stop() { if (timer) { clearTimeout(timer); timer = null; } }
    function hold(on) { paused = on; }
    list.addEventListener('click', function (e) { var b = e.target.closest('.rc-row'); if (b) { cur = +b.dataset.i; draw(); start(); } });
    [list, panel].forEach(function (el) { el.addEventListener('mouseenter', function () { hold(true); }); el.addEventListener('mouseleave', function () { hold(false); }); });
    var sec = document.getElementById('recognition');
    if ('IntersectionObserver' in window && sec) new IntersectionObserver(function (es) { es[0].isIntersecting ? start() : stop(); }, { threshold: 0.25 }).observe(sec); else start();
    draw();
  }

  /* internship highlights: a thin roadmap line */
  function buildRoles() {
    var box = document.getElementById('hzRoles');
    if (!box) return;
    var n = TL.length;
    box.innerHTML = '<div class="rm-line" id="rmLine"><svg viewBox="0 0 1000 120" preserveAspectRatio="none" aria-hidden="true"><path class="rm-bed" d="M0 60 C 120 10, 200 110, 333 60 S 560 10, 667 60 S 880 110, 1000 56"/><path class="rm-way" id="rmWay" pathLength="1" d="M0 60 C 120 10, 200 110, 333 60 S 560 10, 667 60 S 880 110, 1000 56"/></svg><span class="rm-dot" id="rmDot"></span>' +
      TL.map(function (t, i) {
        var x = (i + .5) / n * 100, up = i % 2 === 0;
        return '<button class="rm-stop ' + (up ? 'up' : 'down') + '" style="left:' + x + '%" data-id="' + esc(t.id) + '" data-i="' + i + '"><i class="rm-pin">' + (i + 1) + '</i><span class="rm-card"><span class="rm-when mono">' + esc(t.when) + '</span><b>' + esc(t.org.split(' · ')[0]) + '</b><em>' + esc(t.org.indexOf(' · ') > -1 ? t.org.split(' · ')[1] : t.title) + '</em></span></button>';
      }).join('') + '</div>';
    box.addEventListener('click', function (e) { var b = e.target.closest('.rm-stop'); if (b) openSheet(b.dataset.id, tlIds); });
    var line = document.getElementById('rmLine'), way = document.getElementById('rmWay'), dot = document.getElementById('rmDot');
    var len = way.getTotalLength(), raf = 0;
    function paint() {
      raf = 0;
      var r = line.getBoundingClientRect(), vh = window.innerHeight;
      var p = Math.min(1, Math.max(0, (vh * 0.85 - r.top) / (r.height + vh * 0.3)));
      line.style.setProperty('--rp', p.toFixed(4));
      var pt = way.getPointAtLength(len * p);
      var sv = way.ownerSVGElement.getBoundingClientRect(), lr = line.getBoundingClientRect();
      dot.style.left = (pt.x / 1000 * sv.width) + 'px'; dot.style.top = (55 + pt.y / 120 * sv.height) + 'px';
      [].forEach.call(line.querySelectorAll('.rm-stop'), function (el, i) { el.classList.toggle('lit', p >= (i + .5) / n - 0.02); });
    }
    function kick() { if (!raf) raf = requestAnimationFrame(paint); }
    window.addEventListener('scroll', kick, { passive: true }); window.addEventListener('resize', kick);
    paint();
  }

  /* gallery: wins, talks and moments, filterable, each opens a card with links */
  function puzzle() {
    var track = document.getElementById('gxTrack');
    var I = function (n) { return 'assets/img/' + n; };
    var ITEMS = [
      { img: I('casequest-winners.png'), tag: 'Win', t: 'Zomato case and Futurepreneur', text: '1st runner-up in both, pan-India, 2023. A New + Verified section for new restaurants, then a working prototype.', links: [['Case deck (Canva)', 'https://www.canva.com/design/DAG8mu7o9rY/DTWzUeCL7TMKbI49mBdh3A/view'], ['Live prototype', 'https://ujain-foodie-quest.lovable.app/home'], ['Teardown (PDF)', 'teardowns/zomato.pdf']] },
      { img: I('polygnan-winner-group.jpg'), tag: 'Win', t: 'Polygnan Demo Day winner', text: 'Saarthi won Demo Day. 1 of 22 fellows picked from 4,000+ applicants.', links: [['The Saarthi story', '#field']] },
      { img: I('polygnan-pitch1.jpg'), tag: 'Stage', t: 'Pitching at Demo Day', text: 'The Saarthi pitch on stage.', links: [] },
      { img: I('eyfi-4.jpg'), tag: 'Win and panel', t: 'EYFI: winner and panelist', text: 'Won the EYFI challenge, where I earned my first income, then spoke on a panel at the EYFI event in Bangalore.', embed: 'https://www.instagram.com/reel/DYh_OkbSWik/embed', links: [['Watch the panel', 'https://lnkd.in/p/gHQZYkPM'], ['The challenge reel', 'https://www.instagram.com/reel/DYh_OkbSWik/']] },
      { img: I('gv-panel.png'), tag: 'Talk', t: 'GatherVerse Women\u2019s AI Summit', text: 'Spoke on a roundtable panel at the summit.', links: [['Watch the session', 'https://www.youtube.com/live/EhQV8BfIYNY?si=SvuKcq_SA9GyOayH'], ['Speaker page', 'https://gatherverse.org/women-ai-2026/speakers/']] },
      { img: I('gv-speakers.webp'), tag: 'Talk', t: 'GatherVerse speaker lineup', text: 'Among the speakers at the summit.', links: [['Event', 'https://lnkd.in/p/gRYs_pVJ']] },
      { img: I('featured-warroom.png'), tag: 'Talk', t: 'Zero to One, War Room 2.0', text: 'A talk, September 2026.', links: [['See the talk', 'https://lnkd.in/gCyeVkDT']] },
      { img: I('featured-arcade.png'), tag: 'Guide', t: 'Google Cloud Arcade facilitator', text: 'Guided the community through the Google Cloud Arcade programme, 2025.', links: [['See the programme', 'https://lnkd.in/dc5W_uCy']] },
      { img: I('abg-podium.png'), tag: 'Stage', t: 'Reinventing the Future, Indore', text: 'On stage at the regional round of Reinventing the Future.', links: [] },
      { img: I('speaking.jpg'), tag: 'Talk', t: 'Presenting the Saarthi architecture', text: 'Walking an audience through how Saarthi works.', links: [] },
      { img: I('gdg-chapter-lead.png'), tag: 'GDG', t: 'GDG on Campus chapter lead', text: 'Started the chapter from zero and grew it to 1,000+ members.', links: [['All event photos and videos', 'https://drive.google.com/drive/folders/1rIubQ6POrn3Jbw1XGZtFcusWieZ78csN'], ['Chapter website', 'https://gdsc-sui.vercel.app/']] },
      { img: I('gdg-welcome-board.png'), tag: 'GDG', t: 'Cloud Community Days 2025, Indore', text: 'One of 20+ events we ran.', links: [['Event photos', 'https://drive.google.com/drive/folders/1rIubQ6POrn3Jbw1XGZtFcusWieZ78csN']] },
      { img: I('gdg-team.webp'), tag: 'GDG', t: 'The GDG core team', text: 'The team that ran the chapter.', links: [] },
      { img: I('gdg-bootcamp-2.png'), tag: 'GDG', t: 'Solution Challenge Indore Bootcamp', text: '10 March 2025.', links: [['See the post', 'https://lnkd.in/p/g56YzCkx']] },
      { img: I('gdg-bootcamp-1.png'), tag: 'GDG', t: 'GDG on Campus, Indore', text: 'At the Indore bootcamp.', links: [['See the post', 'https://lnkd.in/p/g56YzCkx']] },
      { img: I('grp-1.png'), tag: 'Moment', t: 'Group photo', text: '', links: [] },
      { img: I('grp-2.webp'), tag: 'Moment', t: 'Group photo', text: '', links: [] },
      { img: I('cohort.jpg'), tag: 'Fellowship', t: 'Polygnan cohort', text: 'The fellowship cohort.', links: [] },
      { img: I('field-farmer.jpg'), tag: 'Field', t: 'With farmers', text: 'Field research for Saarthi.', links: [['The Saarthi story', '#field']] },
      { img: I('field-harvest.jpg'), tag: 'Field', t: 'In the fields', text: 'Field research for Saarthi.', links: [] },
      { img: I('field-thresher.jpg'), tag: 'Field', t: 'At harvest', text: 'Field research for Saarthi.', links: [] }
    ];

    var GROUPS = [['all', 'All'], ['win', 'Wins'], ['talk', 'Talks and stages'], ['gdg', 'GDG'], ['field', 'Field and fellowship']];
    var TAGMAP = { 'Win': 'win', 'Win and panel': 'win', 'Talk': 'talk', 'Stage': 'talk', 'Guide': 'talk', 'GDG': 'gdg', 'Moment': 'gdg', 'Fellowship': 'field', 'Field': 'field' };
    ITEMS.forEach(function (it, i) { it.i = i; it.g = TAGMAP[it.tag] || 'field'; });
    window.__GX = ITEMS;
    if (!track) return;
    var chips = document.getElementById('gxChips'), cur = 'all';
    chips.innerHTML = GROUPS.map(function (g) {
      var n = g[0] === 'all' ? ITEMS.length : ITEMS.filter(function (x) { return x.g === g[0]; }).length;
      return '<button class="gx2-chip' + (g[0] === 'all' ? ' on' : '') + '" data-g="' + g[0] + '">' + g[1] + '<i>' + n + '</i></button>';
    }).join('');
    function draw() {
      var list = ITEMS.filter(function (x) { return cur === 'all' || x.g === cur; });
      track.innerHTML = list.map(function (it) {
        return '<button class="gx2-card" data-i="' + it.i + '" aria-label="' + esc(it.t) + '"><img src="' + esc(it.img) + '" alt="" loading="lazy" /><span class="gx2-tag mono">' + esc(it.tag) + '</span>' +
          (it.links && it.links.length ? '<span class="gx2-lk" aria-hidden="true">\u2197</span>' : '') + '<span class="gx2-cap">' + esc(it.t) + '</span></button>';
      }).join('');
      track.scrollLeft = 0; edges();
    }
    var wrap = track.parentNode, prev = wrap.querySelector('.gx2-btn.prev'), next = wrap.querySelector('.gx2-btn.next');
    function edges() { prev.disabled = track.scrollLeft < 8; next.disabled = track.scrollLeft + track.clientWidth > track.scrollWidth - 8; }
    track.addEventListener('scroll', edges, { passive: true });
    window.addEventListener('resize', edges);
    function step() { var c = track.querySelector('.gx2-card'); return (c ? c.offsetWidth + 14 : 260) * (window.innerWidth > 900 ? 3 : 1); }
    prev.addEventListener('click', function () { track.scrollBy({ left: -step(), behavior: 'smooth' }); });
    next.addEventListener('click', function () { track.scrollBy({ left: step(), behavior: 'smooth' }); });
    chips.addEventListener('click', function (e) {
      var c = e.target.closest('.gx2-chip'); if (!c) return;
      cur = c.dataset.g; [].forEach.call(chips.children, function (x) { x.classList.toggle('on', x === c); }); draw();
    });

    var modal = document.getElementById('pzModal'), media = document.getElementById('pzMedia');
    function openCard(i) {
      var it = ITEMS[i];
      media.innerHTML = it.embed ? '<iframe src="' + esc(it.embed) + '" title="' + esc(it.t) + '" allow="autoplay; encrypted-media; fullscreen" allowfullscreen scrolling="no"></iframe>' : '<img src="' + esc(it.img) + '" alt="' + esc(it.t) + '" />';
      document.getElementById('pzTag').textContent = it.tag;
      document.getElementById('pzTitle').textContent = it.t;
      document.getElementById('pzText').textContent = it.text || '';
      document.getElementById('pzLinks').innerHTML = it.links.map(function (l) {
        var ext = /^https?:/.test(l[1]);
        return '<a href="' + esc(l[1]) + '"' + (ext ? ' target="_blank" rel="noopener"' : '') + '><span>' + esc(l[0]) + '</span><em>' + (ext ? '\u2197' : '\u2192') + '</em></a>';
      }).join('');
      modal.hidden = false; document.body.style.overflow = 'hidden';
    }
    function closeCard() { modal.hidden = true; media.innerHTML = ''; document.body.style.overflow = ''; }
    track.addEventListener('click', function (e) { var c = e.target.closest('.gx2-card'); if (c) openCard(+c.dataset.i); });
    document.getElementById('pzX').addEventListener('click', closeCard);
    modal.addEventListener('click', function (e) { if (e.target === modal) closeCard(); if (e.target.closest('.pz-links a[href^="#"]')) closeCard(); });
    document.addEventListener('keydown', function (e) { if (!modal.hidden && e.key === 'Escape') closeCard(); });
    draw();
    window.addEventListener('load', edges);
  }

  /* singing wall: photos drift up and down behind the cutout; hover removes the cutout */
  function voiceWall() {
    var wall = document.getElementById('vwWall'), stage = document.getElementById('vwStage');
    var items = window.__GX;
    if (!wall || !items || !items.length) return;
    var cols = window.innerWidth > 800 ? 7 : 4;
    var buckets = []; for (var c = 0; c < cols; c++) buckets.push([]);
    items.forEach(function (it, i) { buckets[i % cols].push(it); });
    function tile(it) {
      var link = it.links && it.links[0];
      var inner = '<img src="' + esc(it.img) + '" alt="' + esc(it.t) + '" loading="lazy" /><span class="vw-cap">' + esc(it.t) + '</span>' + (link ? '<i class="vw-go" aria-hidden="true">\u2197</i>' : '');
      if (!link) return '<div class="vw-tile">' + inner + '</div>';
      var ext = /^https?:/.test(link[1]);
      return '<a class="vw-tile" href="' + esc(link[1]) + '"' + (ext ? ' target="_blank" rel="noopener"' : '') + ' aria-label="' + esc(it.t) + ': ' + esc(link[0]) + '">' + inner + '</a>';
    }
    wall.innerHTML = buckets.map(function (bk, ci) {
      var html = bk.map(tile).join('');
      return '<div class="vw-col ' + (ci % 2 ? 'dn' : 'up') + '" style="--d:' + (34 + (ci % 3) * 7) + 's;--o:' + (ci * -5) + 's"><div class="vw-track">' + html + html + '</div></div>';
    }).join('');
    var t = null;
    stage.addEventListener('touchstart', function (e) {
      if (!e.target.closest('.vw-wall')) return;
      stage.classList.add('peek'); clearTimeout(t); t = setTimeout(function () { stage.classList.remove('peek'); }, 4500);
    }, { passive: true });
  }

  /* Saarthi meadow: layered, curved leaf-blade tufts that sway */
  function meadow() {
    var el = document.getElementById('saGrass');
    if (!el) return;
    var W = 1600, H = 120, seed = 7;
    function rnd() { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; }
    var LAYERS = [['#2c6e2a', '#3f8f33', 0.78, 30], ['#3f9a35', '#63b83f', 0.9, 24], ['#69c043', '#9bdc57', 1, 20]];
    var out = '';
    LAYERS.forEach(function (L, li) {
      var x = -10;
      while (x < W + 20) {
        var n = 4 + Math.floor(rnd() * 4), g = '';
        for (var k = 0; k < n; k++) {
          var bx = x + (k - n / 2) * 5 + rnd() * 4, h = (46 + rnd() * 62) * L[2], lean = (rnd() - 0.5) * 2 * (22 + k * 3), w = 5 + rnd() * 4;
          var tx = bx + lean, ty = H - h, cx = bx + lean * 0.15 - w, cy = H - h * 0.55, dx = bx + lean * 0.55 + w * 0.6, dy = H - h * 0.5;
          g += '<path d="M' + (bx - w).toFixed(1) + ' ' + H + ' Q' + cx.toFixed(1) + ' ' + cy.toFixed(1) + ' ' + tx.toFixed(1) + ' ' + ty.toFixed(1) + ' Q' + dx.toFixed(1) + ' ' + dy.toFixed(1) + ' ' + (bx + w).toFixed(1) + ' ' + H + 'Z" fill="' + (k % 2 ? L[0] : L[1]) + '"/>';
        }
        out += '<g class="sgp" data-x="' + x.toFixed(0) + '" style="transform-origin:' + x.toFixed(0) + 'px ' + H + 'px"><g class="sg sg' + li + '" style="animation-delay:' + (-rnd() * 5).toFixed(2) + 's;transform-origin:' + x.toFixed(0) + 'px ' + H + 'px">' + g + '</g></g>';
        x += L[3] + rnd() * 12;
      }
    });
    el.innerHTML = '<svg viewBox="0 0 ' + W + ' ' + H + '" preserveAspectRatio="xMidYMax slice" width="100%" height="100%">' + out + '<rect y="' + (H - 3) + '" width="' + W + '" height="6" fill="#2a6a26"/></svg>';
    /* spring physics: grass leans away from the pointer and springs back, so any hover moves it */
    var tufts = [].slice.call(el.querySelectorAll('.sgp')).map(function (t) { return { el: t, x: +t.dataset.x, a: 0, v: 0 }; });
    var px = null, pv = 0, raf = null, R = 190;
    function frame() {
      var live = false;
      pv *= 0.9;
      tufts.forEach(function (t) {
        var target = 0;
        if (px !== null) {
          var d = t.x - px, f = Math.exp(-(d * d) / (2 * (R / 2.2) * (R / 2.2)));
          target = (d >= 0 ? 1 : -1) * 13 * f + Math.max(-14, Math.min(14, pv)) * f;
        }
        t.v += (target - t.a) * 0.085;
        t.v *= 0.86;
        t.a += t.v;
        if (Math.abs(t.v) > 0.01 || Math.abs(t.a - target) > 0.05) live = true;
        t.el.style.transform = 'rotate(' + t.a.toFixed(2) + 'deg)';
      });
      raf = (live || px !== null) ? requestAnimationFrame(frame) : null;
    }
    function kick() { if (!raf) raf = requestAnimationFrame(frame); }
    if (!reduce) {
      el.addEventListener('pointermove', function (e) {
        var r = el.getBoundingClientRect(), nx = (e.clientX - r.left) * (W / r.width);
        if (px !== null) pv += (nx - px) * 0.22;
        px = nx; kick();
      });
      el.addEventListener('pointerleave', function () { px = null; kick(); });
    }
  }

  /* Saarthi story: numbers count up when they scroll into view */
  function saarthiFx() {
    var cs = document.querySelectorAll('.sf .cnt');
    if (!cs.length || !('IntersectionObserver' in window) || reduce) return;
    cs.forEach(function (el) { el.textContent = '0' + (el.dataset.suf || ''); });
    function run(el) {
      var to = +el.dataset.to, suf = el.dataset.suf || '', t0 = performance.now();
      (function f(t) {
        var p = Math.max(0, Math.min(1, (t - t0) / 1100));
        el.textContent = Math.round(to * (1 - Math.pow(1 - p, 3))) + suf;
        if (p < 1) requestAnimationFrame(f);
      })(t0);
    }
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (!e.isIntersecting) return;
        io.unobserve(e.target);
        var c = e.target.querySelector('.cnt'); if (c) run(c);
      });
    }, { threshold: 0.3 });
    cs.forEach(function (el) { io.observe(el.closest('.sf-beat') || el); });
  }

  /* ---------------------------- boot ------------------------------------- */
  projects();
  proofWork();
  buildRoles();
  puzzle();
  meadow();
  saarthiFx();
  voiceWall();
  road();
  postcard();
  techStack();
  pinned();
  buildTimeline();
  buildPathCollage();
  autoScrollX($('.gal'), 0.5);
  buildAssets();
  portrait();
  reveals();
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', fillTimeline);
  window.addEventListener('load', fillTimeline);
  onScroll();
  fillTimeline();
})();
