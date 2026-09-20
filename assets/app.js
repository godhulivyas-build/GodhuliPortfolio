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
  var tlIds = D.timeline.map(function (t) { return t.id; });

  function buildTimeline() {
    if (!vtl) return;
    D.timeline.forEach(function (t) {
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
          '</span>' +
        '</button>';
      vtl.appendChild(li);
    });
    vtl.addEventListener('click', function (e) {
      var b = e.target.closest('button[data-id]');
      if (b) openSheet(b.dataset.id, tlIds);
    });
  }

  /* one continuous photo stream running alongside the whole path, pulled
     from every entry's photos regardless of which row they belong to */
  function buildPathCollage() {
    var box = $('#pathCollage');
    if (!box) return;
    var all = [];
    D.timeline.forEach(function (t) {
      if (t.photos) t.photos.forEach(function (p) { all.push({ src: p.src, id: t.id }); });
    });
    if (!all.length) { box.hidden = true; return; }
    var a = [], b = [];
    all.forEach(function (p, i) { (i % 2 === 0 ? a : b).push(p); });
    if (!b.length) b = a.slice();
    function imgs(list) {
      return list.map(function (p) {
        return '<img src="' + esc(p.src) + '" alt="" data-id="' + esc(p.id) + '" loading="lazy" />';
      }).join('');
    }
    box.innerHTML =
      '<span class="vcol up">' + imgs(a) + imgs(a) + '</span>' +
      '<span class="vcol down">' + imgs(b) + imgs(b) + '</span>';
    box.addEventListener('click', function (e) {
      var img = e.target.closest('img[data-id]');
      if (img) openSheet(img.dataset.id, tlIds);
    });
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
  function buildSystems() {
    var track = $('#sysTrack'), dotsWrap = $('#sysDots'), prevBtn = $('#sysPrev'), nextBtn = $('#sysNext');
    if (!track) return;
    var ids = D.systems.map(function (s) { return s.id; });

    D.systems.forEach(function (s, i) {
      var card = document.createElement('article');
      card.className = 'syscard';
      var live = (s.links || []).filter(function (l) { return /live|dashboard|cupshup/i.test(l.label); })[0];
      card.innerHTML =
        '<button class="sys-open" data-id="' + esc(s.id) + '" aria-label="Open build note: ' + esc(s.title) + '"></button>' +
        '<div class="pv-frame big">' + (s.thumb ? '<img class="pv-shot" src="' + esc(s.thumb) + '" alt="" loading="lazy" />' : '<span class="pv-dots"></span>' + (PREVIEW[s.preview] || '')) + '</div>' +
        '<div class="syscard-body">' +
          '<h3>' + esc(s.title) + '</h3>' +
          '<p class="sys-thesis">' + esc(s.thesis) + '</p>' +
          '<div class="sys-foot">' +
            (live ? '<a class="sys-live" href="' + esc(live.url) + '" target="_blank" rel="noopener">Open live ↗</a>' : '<span class="sys-live muted">Build note →</span>') +
          '</div>' +
        '</div>';
      track.appendChild(card);

      var dot = document.createElement('button');
      dot.className = 'sys-dot' + (i === 0 ? ' on' : '');
      dot.setAttribute('aria-label', 'Go to ' + s.title);
      dot.addEventListener('click', function () { scrollToCard(i); });
      dotsWrap.appendChild(dot);
    });

    track.addEventListener('click', function (e) {
      if (e.target.closest('a')) return;
      var b = e.target.closest('.syscard');
      if (b) openSheet($('.sys-open', b).dataset.id, ids);
    });

    function cardWidth() {
      var first = track.querySelector('.syscard');
      return first ? first.getBoundingClientRect().width + 18 : track.clientWidth;
    }
    function currentIndex() {
      return Math.round(track.scrollLeft / cardWidth());
    }
    function updateDots() {
      var idx = Math.max(0, Math.min(D.systems.length - 1, currentIndex()));
      Array.prototype.forEach.call(dotsWrap.children, function (d, i) { d.classList.toggle('on', i === idx); });
      if (prevBtn) prevBtn.disabled = idx === 0;
      if (nextBtn) nextBtn.disabled = idx === D.systems.length - 1;
    }

    /* single loop owns every scrollLeft change: auto-drift, or easing to a
       manually requested target. Native scrollTo({behavior:'smooth'}) was
       fighting the auto-drift loop and silently no-op'ing alternate clicks. */
    var autoPaused = false, resumeTimer = null, target = null;
    function tick() {
      if (target !== null) {
        var diff = target - track.scrollLeft;
        if (Math.abs(diff) < 1) { track.scrollLeft = target; target = null; }
        else { track.scrollLeft += diff * 0.18; }
      } else if (!autoPaused) {
        track.scrollLeft += 0.6;
        var maxScroll = track.scrollWidth - track.clientWidth;
        if (track.scrollLeft >= maxScroll - 1) track.scrollLeft = 0;
      }
      requestAnimationFrame(tick);
    }
    function pauseAuto() {
      autoPaused = true;
      clearTimeout(resumeTimer);
      resumeTimer = setTimeout(function () { autoPaused = false; }, 6000);
    }
    function scrollToCard(i) {
      pauseAuto();
      target = reduce ? (track.scrollLeft = i * cardWidth(), null) : i * cardWidth();
    }
    if (prevBtn) prevBtn.addEventListener('click', function () { scrollToCard(Math.max(0, currentIndex() - 1)); });
    if (nextBtn) nextBtn.addEventListener('click', function () { scrollToCard(Math.min(D.systems.length - 1, currentIndex() + 1)); });
    var scrollTimer;
    track.addEventListener('scroll', function () {
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(updateDots, 80);
    }, { passive: true });
    dotsWrap.addEventListener('click', pauseAuto);
    updateDots();

    track.addEventListener('pointerdown', function () { target = null; pauseAuto(); });
    track.addEventListener('wheel', function () { target = null; pauseAuto(); }, { passive: true });
    track.addEventListener('mouseenter', function () { autoPaused = true; });
    track.addEventListener('mouseleave', function () { autoPaused = false; });
    if (!reduce) requestAnimationFrame(tick);
  }

  document.addEventListener('click', function (e) {
    var b = e.target.closest('[data-open-id]');
    if (b) openSheet(b.dataset.openId, D.systems.map(function (s) { return s.id; }));
  });


  /* ---------------------------- asset library ----------------------------- */
  function buildAssets() {
    var grid = $('#aGrid'), bar = $('#aFilter');
    if (!grid || !bar || !D.assets) return;
    var kinds = ['All'];
    D.assets.forEach(function (x) { if (kinds.indexOf(x.type) < 0) kinds.push(x.type); });
    bar.innerHTML = kinds.map(function (k, i) {
      return '<button class="achip mono' + (i === 0 ? ' on' : '') + '" data-kind="' + esc(k) + '">' + esc(k) + '</button>';
    }).join('');

    grid.innerHTML = D.assets.map(function (x) {
      var internal = x.link && /\.html($|[?#])/.test(x.link);
      var openAttrs = internal ? '' : ' target="_blank" rel="noopener"';
      if (x.img) {
        // The thumbnail already carries the title/description \u2014 don't repeat it, just open it.
        return '<a class="asset asset-compact reveal" data-kind="' + esc(x.type) + '"' +
          (x.link ? ' href="' + esc(x.link) + '"' + openAttrs : '') +
          '>' +
          '<div class="asset-thumb"><img src="' + esc(x.img) + '" alt="' + esc(x.title) + '" loading="lazy" />' +
            '<span class="asset-type mono on-img">' + esc(x.type) + '</span>' +
          '</div>' +
          '<div class="asset-compact-foot"><span>' + esc(x.title) + '</span>' +
          (x.link ? '<span class="asset-link mono">Open \u2197</span>' : '<span class="asset-link mono muted">On request</span>') +
          '</div></a>';
      }
      return '<article class="asset reveal" data-kind="' + esc(x.type) + '">' +
        '<p class="asset-type mono">' + esc(x.type) + '</p>' +
        '<h3>' + esc(x.title) + '</h3>' +
        '<p class="asset-note">' + esc(x.note) + '</p>' +
        (x.facts && x.facts.length
          ? '<ul class="asset-facts">' + x.facts.map(function (f) { return '<li>' + esc(f) + '</li>'; }).join('') + '</ul>'
          : '') +
        (x.link
          ? '<a class="asset-link mono" href="' + esc(x.link) + '"' + openAttrs + '>Open \u2197</a>'
          : '<span class="asset-link mono muted">On request</span>') +
        '</article>';
    }).join('');

    bar.addEventListener('click', function (e) {
      var b = e.target.closest('.achip');
      if (!b) return;
      var k = b.dataset.kind;
      Array.prototype.forEach.call(bar.children, function (c) { c.classList.toggle('on', c === b); });
      Array.prototype.forEach.call(grid.children, function (c) {
        var show = k === 'All' || c.dataset.kind === k;
        c.style.display = show ? '' : 'none';
        if (show) c.classList.add('in');
      });
    });
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

  /* ---------------------------- boot ------------------------------------- */
  buildTimeline();
  buildPathCollage();
  autoScrollX($('.gal'), 0.5);
  autoScrollX($('#pathCollage'), 0.5);
  buildSystems();
  buildAssets();
  portrait();
  reveals();
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', fillTimeline);
  window.addEventListener('load', fillTimeline);
  onScroll();
  fillTimeline();
})();
