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
