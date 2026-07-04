/* ============================================================
   Shared site chrome — the ONE place the top nav is defined.
   Every page has <nav class="nav" id="site-nav"></nav> and loads
   this file; the nav (with the correct active link) is injected here.
   To add/rename a page or link, edit ONLY this list.
   ============================================================ */
(function () {
  var PAGES = [
    { href: "index.html",       label: "Overview" },
    { href: "journey.html",     label: "Journey" },
    { href: "blueprint.html",   label: "Blueprint" },
    { href: "phone-tree.html",  label: "Phone Tree" },
    { href: "tools.html",       label: "Tools", lock: true },
    { href: "system-map.html",  label: "System Map", lock: true }
  ];
  var here = (location.pathname.split("/").pop() || "index.html");
  if (here === "" || here === "/") here = "index.html";

  var links = PAGES.map(function (p) {
    var active = p.href === here ? " active" : "";
    var lock = p.lock ? ' <span class="lock">🔒</span>' : "";
    return '<a class="nav-link' + active + '" href="' + p.href + '">' + p.label + lock + "</a>";
  }).join("");

  var el = document.getElementById("site-nav");
  if (el) {
    el.className = "nav";
    el.innerHTML =
      '<a class="nav-brand" href="index.html"><span class="dot"></span> Kentlands Psychotherapy</a>' + links;
  }
})();
