/* protection légère : pas de clic droit, copie, glisser d'image ni raccourcis d'inspection */
(function(){
  var st = document.createElement("style");
  st.textContent = "html,body,*{-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}input,textarea,select,[contenteditable]{-webkit-user-select:text;user-select:text}img,svg,a{-webkit-user-drag:none;user-drag:none}";
  document.head.appendChild(st);
  var field = function(t){ return t && t.closest && t.closest("input,textarea,select,[contenteditable]"); };
  ["contextmenu","dragstart","selectstart","copy","cut"].forEach(function(ev){
    document.addEventListener(ev, function(e){ if (!field(e.target)) e.preventDefault(); }, true);
  });
  document.addEventListener("keydown", function(e){
    var k = (e.key || "").toLowerCase(), c = e.ctrlKey || e.metaKey;
    if (k === "f12" || (c && e.shiftKey && "ijck".indexOf(k) > -1) || (c && e.altKey && "ijc".indexOf(k) > -1) || (c && (k === "u" || k === "s" || k === "p")) || (c && "ca".indexOf(k) > -1 && !field(e.target))){ e.preventDefault(); e.stopPropagation(); }
  }, true);
})();
/* animations : onde dorée à chaque clic, transition vers la carte */
(function(){
  var red = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
  var css = "@keyframes fxR{from{transform:translate(-50%,-50%) scale(.2);opacity:.95}to{transform:translate(-50%,-50%) scale(1);opacity:0}}"
    + ".fxr{position:fixed;z-index:99999;width:120px;height:120px;border-radius:50%;pointer-events:none;border:2px solid rgba(242,228,140,.95);box-shadow:0 0 18px rgba(242,200,90,.7),inset 0 0 14px rgba(248,196,204,.5);animation:fxR .6s cubic-bezier(.2,.7,.3,1) forwards}"
    + ".fxr i{position:absolute;left:50%;top:50%;width:6px;height:6px;margin:-3px;border-radius:50%;background:#fff3c4;box-shadow:0 0 8px #f2e48c}"
    + "@keyframes fxP{0%{scale:1}35%{scale:.93}70%{scale:1.04}100%{scale:1}}.fxp{animation:fxP .38s ease}"
    + "@keyframes fxOut{to{opacity:0;filter:blur(6px)}}body.fxleave>*{animation:fxOut .38s ease forwards}"
    + "@keyframes fxVeil{0%{opacity:0}100%{opacity:1}}.fxveil{position:fixed;inset:0;z-index:99998;pointer-events:none;background:radial-gradient(circle at var(--x,50%) var(--y,50%),rgba(242,228,140,.35),#03051a 60%);animation:fxVeil .4s ease forwards}";
  var st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);
  if (red) return;
  var SEL = "button,a,[role=button],.chip,.sph,.pchip,.mz,.lg,label,select,summary";
  document.addEventListener("pointerdown", function(e){
    var t = e.target.closest && e.target.closest(SEL); if (!t) return;
    var r = document.createElement("span"); r.className = "fxr"; r.style.left = e.clientX + "px"; r.style.top = e.clientY + "px";
    for (var k = 0; k < 6; k++){ var d = document.createElement("i"), a = k / 6 * Math.PI * 2; d.style.transform = "translate(" + Math.cos(a) * 46 + "px," + Math.sin(a) * 46 + "px)"; r.appendChild(d); }
    document.body.appendChild(r); setTimeout(function(){ r.remove(); }, 650);
    if (!t.closest(".leaflet-marker-icon")){ t.classList.remove("fxp"); void t.offsetWidth; t.classList.add("fxp"); setTimeout(function(){ t.classList.remove("fxp"); }, 400); }
  }, {passive:true});
  document.addEventListener("click", function(e){
    var a = e.target.closest && e.target.closest("a[href]"); if (!a || e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || a.target === "_blank") return;
    var h = a.getAttribute("href") || ""; if (!/carte\.html/.test(h) || /^#/.test(h)) return;
    if (/carte\.html/.test(location.pathname) && !/\.\.\//.test(h)) return;
    e.preventDefault();
    var v = document.createElement("div"); v.className = "fxveil"; v.style.setProperty("--x", e.clientX + "px"); v.style.setProperty("--y", e.clientY + "px");
    document.body.appendChild(v); document.body.classList.add("fxleave");
    setTimeout(function(){ location.href = a.href; }, 380);
  });
  addEventListener("pageshow", function(e){ if (e.persisted){ document.body.classList.remove("fxleave"); document.querySelectorAll(".fxveil").forEach(function(v){ v.remove(); }); } });
})();
