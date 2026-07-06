/* ============================================================
   Shared site chrome — the ONE place the top nav is defined,
   plus a site-wide command palette (⌘K / Ctrl-K).
   Every page has <nav class="nav" id="site-nav"></nav> and loads
   this file; the nav (with the correct active link) is injected here.
   To add/rename a page or link, edit ONLY the PAGES list.
   ============================================================ */
(function () {
  var PAGES = [
    { href: "index.html",       label: "Overview",   ic: "🧭", desc: "The one connected loop + links to everything" },
    { href: "journey.html",     label: "Journey",    ic: "🌳", desc: "Interactive flow chart of every client journey" },
    { href: "blueprint.html",   label: "Blueprint",  ic: "📈", desc: "Service blueprint — emotion curve + backstage" },
    { href: "phone-tree.html",  label: "Phone Tree", ic: "☎️", desc: "Walk the caller menu, with what the CRM does" },
    { href: "tools.html",       label: "Tools",      ic: "🛠️", desc: "The 3 KP tools + GHL", lock: true },
    { href: "system-map.html",  label: "System Map", ic: "🗺️", desc: "Full GHL inventory dashboard", lock: true }
  ];
  var here = (location.pathname.split("/").pop() || "index.html");
  if (here === "" || here === "/") here = "index.html";

  /* ── top nav ─────────────────────────────── */
  var links = PAGES.map(function (p) {
    var active = p.href === here ? " active" : "";
    var lock = p.lock ? ' <span class="lock">🔒</span>' : "";
    return '<a class="nav-link' + active + '" href="' + p.href + '">' + p.label + lock + "</a>";
  }).join("");

  var nav = document.getElementById("site-nav");
  if (nav) {
    nav.className = "nav";
    nav.innerHTML =
      '<a class="nav-brand" href="index.html"><span class="dot"></span> Kentlands Psychotherapy</a>' +
      links +
      '<button class="nav-cmdk" id="cmdk-open" aria-label="Open command palette (Command-K)">' +
      '<span>⌕</span><span class="cmdk-label">Search</span><kbd>⌘K</kbd></button>';
  }

  /* ── command palette ─────────────────────── */
  var overlay = document.createElement("div");
  overlay.className = "cmdk-overlay"; overlay.id = "cmdk"; overlay.hidden = true;
  overlay.setAttribute("role", "dialog"); overlay.setAttribute("aria-modal", "true"); overlay.setAttribute("aria-label", "Command palette");
  overlay.innerHTML =
    '<div class="cmdk-box" role="document">' +
      '<div class="cmdk-input-row"><span class="s-ic">⌕</span>' +
        '<input id="cmdk-input" type="text" placeholder="Jump to a page or any step…" autocomplete="off" ' +
          'aria-label="Search pages and steps" aria-controls="cmdk-list" />' +
        '<kbd>Esc</kbd></div>' +
      '<div class="cmdk-list" id="cmdk-list" role="listbox"></div>' +
    '</div>';
  document.body.appendChild(overlay);

  var input = overlay.querySelector("#cmdk-input");
  var list  = overlay.querySelector("#cmdk-list");
  var sel = 0, items = [], nodeIndex = null;

  var strip = function (s) { return String(s).replace(/^[①②③④⑤⑥⑦⑧⑨]\s*/, ""); };

  // Build the searchable node index from window.JOURNEY (lazy-loaded if absent).
  function buildNodeIndex() {
    if (nodeIndex) return nodeIndex;
    nodeIndex = [];
    if (!window.JOURNEY) return nodeIndex;
    (function walk(n, section) {
      if (n.type !== "ref" && n.id && n.id !== "root") {
        nodeIndex.push({ kind: "node", id: n.id, label: strip(n.label), desc: n.sub || section || "Journey step", ic: "•" });
      }
      var isSection = (n.type === "entry" || n.type === "pipeline" || n.type === "milestone");
      var sec = (n.id === "root") ? section : (isSection ? strip(n.label) : section);
      (n.children || []).forEach(function (c) { walk(c, sec); });
    })(window.JOURNEY, null);
    return nodeIndex;
  }

  // Ensure flow-data.js is loaded so nodes are searchable from every page.
  var dataLoading = false;
  function ensureData(cb) {
    if (window.JOURNEY || here === "journey.html") { cb(); return; }
    if (dataLoading) { cb(); return; }
    dataLoading = true;
    var s = document.createElement("script");
    s.src = "flow-data.js";
    s.onload = function () { nodeIndex = null; cb(); };
    s.onerror = function () { cb(); };
    document.head.appendChild(s);
  }

  function score(q, hay) {           // substring or subsequence fuzzy match → score, or -1
    hay = hay.toLowerCase(); q = q.toLowerCase();
    if (!q) return 0;
    var idx = hay.indexOf(q);
    if (idx !== -1) return 100 - idx;                 // substring wins, earlier = higher
    var qi = 0;
    for (var i = 0; i < hay.length && qi < q.length; i++) if (hay[i] === q[qi]) qi++;
    return qi === q.length ? 1 : -1;
  }

  function results(q) {
    var out = [];
    PAGES.forEach(function (p) {
      var sc = q ? Math.max(score(q, p.label), score(q, p.desc)) : 50;
      if (sc >= 0) out.push({ s: sc + 20, kind: "page", href: p.href, label: p.label + (p.lock ? " 🔒" : ""), desc: p.desc, ic: p.ic, tag: "Page" });
    });
    buildNodeIndex().forEach(function (n) {
      var sc = q ? Math.max(score(q, n.label), score(q, n.desc)) : -1;
      if (sc >= 0) out.push({ s: sc, kind: "node", id: n.id, label: n.label, desc: n.desc, ic: n.ic, tag: "Step" });
    });
    out.sort(function (a, b) { return b.s - a.s; });
    return out.slice(0, 40);
  }

  function paint() {
    var q = input.value.trim();
    items = results(q);
    if (sel >= items.length) sel = Math.max(0, items.length - 1);
    if (!items.length) { list.innerHTML = '<div class="cmdk-empty">No matches.</div>'; return; }
    list.innerHTML = items.map(function (it, i) {
      return '<button class="cmdk-item' + (i === sel ? " sel" : "") + '" role="option" data-i="' + i + '"' +
        (i === sel ? ' aria-selected="true"' : "") + '>' +
        '<span class="ic">' + it.ic + '</span>' +
        '<span class="meta"><span class="t">' + it.label + '</span> ' +
        '<span class="d">' + it.desc + '</span></span>' +
        '<span class="tag">' + it.tag + '</span></button>';
    }).join("");
    var selEl = list.querySelector(".cmdk-item.sel");
    if (selEl) selEl.scrollIntoView({ block: "nearest" });
  }

  function activate(it) {
    if (!it) return;
    closePalette();
    if (it.kind === "page") { location.href = it.href; return; }
    // node: on the journey page open it directly, else navigate there with a hash
    if (here === "journey.html" && typeof window.openNode === "function") window.openNode(it.id);
    else location.href = "journey.html#node=" + encodeURIComponent(it.id);
  }

  function openPalette() {
    overlay.hidden = false; input.value = ""; sel = 0; paint(); input.focus();  // open instantly (pages are ready now)
    ensureData(function () { nodeIndex = null; if (!overlay.hidden) paint(); });  // node results fill in once flow-data.js loads
  }
  function closePalette() { overlay.hidden = true; }

  var openBtn = document.getElementById("cmdk-open");
  if (openBtn) openBtn.addEventListener("click", openPalette);

  document.addEventListener("keydown", function (e) {
    if ((e.metaKey || e.ctrlKey) && (e.key === "k" || e.key === "K")) { e.preventDefault(); overlay.hidden ? openPalette() : closePalette(); return; }
    if (overlay.hidden) return;
    // palette is open — it owns the keyboard; block page-level shortcuts (drawer Esc, tour, blueprint arrows) behind the overlay
    if (e.key === "Escape") { e.preventDefault(); closePalette(); }
    else if (e.key === "ArrowDown") { e.preventDefault(); if (sel < items.length - 1) { sel++; paint(); } }
    else if (e.key === "ArrowUp")   { e.preventDefault(); if (sel > 0) { sel--; paint(); } }
    else if (e.key === "Enter")     { e.preventDefault(); activate(items[sel]); }
    e.stopImmediatePropagation();
  });
  input.addEventListener("input", function () { sel = 0; paint(); });
  list.addEventListener("click", function (e) {
    var b = e.target.closest(".cmdk-item"); if (!b) return;
    activate(items[+b.dataset.i]);
  });
  overlay.addEventListener("mousedown", function (e) { if (e.target === overlay) closePalette(); });
})();
