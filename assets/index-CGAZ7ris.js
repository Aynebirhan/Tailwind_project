(function () {
  const n = document.createElement("link").relList;
  if (n && n.supports && n.supports("modulepreload")) return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]')) i(e);
  new MutationObserver((e) => {
    for (const t of e)
      if (t.type === "childList")
        for (const r of t.addedNodes)
          r.tagName === "LINK" && r.rel === "modulepreload" && i(r);
  }).observe(document, { childList: !0, subtree: !0 });
  function l(e) {
    const t = {};
    return (
      e.integrity && (t.integrity = e.integrity),
      e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
      e.crossOrigin === "use-credentials"
        ? (t.credentials = "include")
        : e.crossOrigin === "anonymous"
        ? (t.credentials = "omit")
        : (t.credentials = "same-origin"),
      t
    );
  }
  function i(e) {
    if (e.ep) return;
    e.ep = !0;
    const t = l(e);
    fetch(e.href, t);
  }
})();
let o = document.getElementById("html"),
  d = document.getElementById("change_btn"),
  s = document.getElementById("change_image");
d.addEventListener("click", () => {
  o.classList.toggle("dark"),
    s.src.includes("assets/moon.svg")
      ? (s.src = "assets/sun.svg")
      : (s.src = "image/assets/moon.svg");
});
let m = document.getElementById("change_btn2"),
  c = document.getElementById("change_image2");
m.addEventListener("click", () => {
  o.classList.toggle("dark"),
    c.src.includes("assets/moon.svg")
      ? (c.src = "assets/sun.svg")
      : (c.src = "assets/moon.svg");
});
let g = document.getElementById("main_menu"),
  a = document.getElementById("menu_btn");
a.addEventListener("click", () => {
  g.classList.toggle("hidden");
});
