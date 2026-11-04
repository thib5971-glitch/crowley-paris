/* Crowley à Paris · 1900-1929 — carte interactive (Leaflet, sans serveur) */
"use strict";
const LANGS = ["fr","en","es","de","it"];
const UI = {
fr:{see:"Voir de près", title:"Crowley à Paris", yrs:"1900-1929", search:"Rechercher un lieu", about:"À propos", expand:"Agrandir le panneau", layers:"Fonds de carte", home:"Vue de tout Paris",
  all:"Tous les lieux", frise:"Frise 1900-1929", plan:"Plan", sat:"Satellite", old:"1820-1866",
  share:"Partager", app:"Horae 93", story:"L'histoire", today:"Aujourd'hui", metro:"Métro", check:"À vérifier", sources:"Sources",
  pnow:"Le lieu aujourd'hui", pold:"Le lieu autrefois", loading:"Chargement…", nophoto:"Aucune photo libre trouvée près de ce lieu.", noold:"Aucune photo ancienne trouvée.",
  back:"Retour", places:n=>n>1?n+" lieux":n+" lieu", before:"Avant l'arrivée de Crowley à Paris.", tap:"Touche un lieu en noir sur la carte pour lire son histoire.", nores:"Aucun lieu trouvé.",
  oldt:"Carte de l'état-major, levée entre 1820 et 1866, avant les grands travaux d'Haussmann.", replay:"Rejouer le tracé", copied:"Lien copié", lit:"Les lieux de cette époque",
  appT:"Sur place, laisse-toi guider", appP:"Dans l'application Horae 93, Paris 93 te mène à pied d'un lieu à l'autre : itinéraire depuis ta position, mode balade qui vibre à l'arrivée, et les fêtes thélémiques de l'année.", appB:"Découvrir Horae 93",
  allt:"Les 31 lieux", alld:"Les lieux où Aleister Crowley a vécu, écrit, pratiqué et festoyé à Paris, de 1899 à 1929. Choisis un parcours pour le voir se dessiner, ou touche un lieu.",
  abt:"Une carte des lieux où Aleister Crowley a vécu, écrit, pratiqué et festoyé à Paris entre 1900 et 1929 : hôtels, temples, cafés et ateliers, avec ce qui s'y est passé et ce que chaque adresse est devenue.",
  ab2:"Les lieux et leur histoire viennent surtout du livre de Tobias Churton, Aleister Crowley in Paris (Inner Traditions, 2022), complété par la chronologie de Richard Kaczynski (Perdurabo, 2010), le journal de Crowley et la presse de l'époque. Les adresses incertaines sont signalées. La plupart des lieux sont privés : on les regarde depuis la rue.",
  ab3:"Carte : plan, orthophotos et carte de l'état-major © IGN. Tracés à pied : OpenStreetMap. Photos : Wikimedia Commons, avec leurs auteurs et licences.",
  ab4:"Une réalisation de Frater Nachash, auteur de l'application Horae 93. Projet indépendant, qui ne parle au nom d'aucun ordre ni d'aucune organisation."},
en:{see:"Zoom in", title:"Crowley in Paris", yrs:"1900-1929", search:"Search a place", about:"About", expand:"Expand the panel", layers:"Map layers", home:"View all of Paris",
  all:"All places", frise:"Timeline 1900-1929", plan:"Map", sat:"Satellite", old:"1820-1866",
  share:"Share", app:"Horae 93", story:"The story", today:"Today", metro:"Metro", check:"To be checked", sources:"Sources",
  pnow:"The place today", pold:"The place in the past", loading:"Loading…", nophoto:"No free photo found near this place.", noold:"No old photo found.",
  back:"Back", places:n=>n>1?n+" places":n+" place", before:"Before Crowley arrived in Paris.", tap:"Tap a black place on the map to read its story.", nores:"No place found.",
  oldt:"The État-major map, surveyed between 1820 and 1866, before Haussmann's great works.", replay:"Replay the route", copied:"Link copied", lit:"The places of that time",
  appT:"On the spot, let it guide you", appP:"In the Horae 93 app, Paris 93 walks you from one place to the next: directions from where you stand, a walk mode that vibrates on arrival, and the Thelemic feasts of the year.", appB:"Discover Horae 93",
  allt:"All 31 places", alld:"The places where Aleister Crowley lived, wrote, practised and feasted in Paris, from 1899 to 1929. Pick a tour to watch it draw itself, or tap a place.",
  abt:"A map of the places where Aleister Crowley lived, wrote, practised and feasted in Paris between 1900 and 1929: hotels, temples, cafés and studios, with what happened there and what each address has become.",
  ab2:"The places and their stories come mainly from Tobias Churton's book Aleister Crowley in Paris (Inner Traditions, 2022), completed by Richard Kaczynski's chronology (Perdurabo, 2010), Crowley's diary and the press of the time. Uncertain addresses are flagged. Most places are private: you look at them from the street.",
  ab3:"Map: street map, orthophotos and État-major map © IGN. Walking routes: OpenStreetMap. Photos: Wikimedia Commons, with their authors and licences.",
  ab4:"Made by Frater Nachash, author of the Horae 93 app. An independent project that does not speak for any order or organisation."},
es:{see:"Ver de cerca", title:"Crowley en París", yrs:"1900-1929", search:"Buscar un lugar", about:"Acerca de", expand:"Ampliar el panel", layers:"Capas del mapa", home:"Ver todo París",
  all:"Todos los lugares", frise:"Cronología 1900-1929", plan:"Plano", sat:"Satélite", old:"1820-1866",
  share:"Compartir", app:"Horae 93", story:"La historia", today:"Hoy", metro:"Metro", check:"Por verificar", sources:"Fuentes",
  pnow:"El lugar hoy", pold:"El lugar antaño", loading:"Cargando…", nophoto:"No se encontró ninguna foto libre cerca de este lugar.", noold:"No se encontró ninguna foto antigua.",
  back:"Volver", places:n=>n>1?n+" lugares":n+" lugar", before:"Antes de la llegada de Crowley a París.", tap:"Toca un lugar en negro en el mapa para leer su historia.", nores:"No se encontró ningún lugar.",
  oldt:"El mapa del Estado Mayor, levantado entre 1820 y 1866, antes de las grandes obras de Haussmann.", replay:"Repetir el trazado", copied:"Enlace copiado", lit:"Los lugares de esa época",
  appT:"Allí mismo, déjate guiar", appP:"En la aplicación Horae 93, París 93 te lleva a pie de un lugar a otro: itinerario desde tu posición, modo paseo que vibra al llegar y las fiestas thelémicas del año.", appB:"Descubrir Horae 93",
  allt:"Los 31 lugares", alld:"Los lugares donde Aleister Crowley vivió, escribió, practicó y celebró en París, de 1899 a 1929. Elige un recorrido para verlo dibujarse o toca un lugar.",
  abt:"Un mapa de los lugares donde Aleister Crowley vivió, escribió, practicó y celebró en París entre 1900 y 1929: hoteles, templos, cafés y talleres, con lo que allí ocurrió y en qué se ha convertido cada dirección.",
  ab2:"Los lugares y su historia proceden sobre todo del libro de Tobias Churton, Aleister Crowley in Paris (Inner Traditions, 2022), completado con la cronología de Richard Kaczynski (Perdurabo, 2010), el diario de Crowley y la prensa de la época. Las direcciones inciertas están señaladas. La mayoría de los lugares son privados: se miran desde la calle.",
  ab3:"Mapa: plano, ortofotos y mapa del Estado Mayor © IGN. Recorridos a pie: OpenStreetMap. Fotos: Wikimedia Commons, con sus autores y licencias.",
  ab4:"Una realización de Frater Nachash, autor de la aplicación Horae 93. Proyecto independiente, que no habla en nombre de ninguna orden ni organización."},
de:{see:"Heranzoomen", title:"Crowley in Paris", yrs:"1900-1929", search:"Ort suchen", about:"Über", expand:"Bereich vergrößern", layers:"Kartenebenen", home:"Ganz Paris anzeigen",
  all:"Alle Orte", frise:"Zeitleiste 1900-1929", plan:"Karte", sat:"Satellit", old:"1820-1866",
  share:"Teilen", app:"Horae 93", story:"Die Geschichte", today:"Heute", metro:"Metro", check:"Zu prüfen", sources:"Quellen",
  pnow:"Der Ort heute", pold:"Der Ort früher", loading:"Wird geladen…", nophoto:"Kein freies Foto in der Nähe dieses Ortes gefunden.", noold:"Kein altes Foto gefunden.",
  back:"Zurück", places:n=>n>1?n+" Orte":n+" Ort", before:"Bevor Crowley nach Paris kam.", tap:"Tippe auf einen schwarzen Ort auf der Karte, um seine Geschichte zu lesen.", nores:"Kein Ort gefunden.",
  oldt:"Die Generalstabskarte, vermessen zwischen 1820 und 1866, vor Haussmanns großen Umbauten.", replay:"Route erneut zeichnen", copied:"Link kopiert", lit:"Die Orte dieser Zeit",
  appT:"Vor Ort, lass dich führen", appP:"In der App Horae 93 führt dich Paris 93 zu Fuß von Ort zu Ort: Route von deinem Standort, ein Spaziermodus, der bei der Ankunft vibriert, und die thelemischen Feste des Jahres.", appB:"Horae 93 entdecken",
  allt:"Alle 31 Orte", alld:"Die Orte, an denen Aleister Crowley in Paris lebte, schrieb, praktizierte und feierte, von 1899 bis 1929. Wähle einen Rundgang und sieh zu, wie er sich zeichnet, oder tippe auf einen Ort.",
  abt:"Eine Karte der Orte, an denen Aleister Crowley zwischen 1900 und 1929 in Paris lebte, schrieb, praktizierte und feierte: Hotels, Tempel, Cafés und Ateliers, mit dem, was dort geschah, und dem, was aus jeder Adresse geworden ist.",
  ab2:"Die Orte und ihre Geschichte stammen vor allem aus Tobias Churtons Buch Aleister Crowley in Paris (Inner Traditions, 2022), ergänzt durch die Chronologie von Richard Kaczynski (Perdurabo, 2010), Crowleys Tagebuch und die Presse der Zeit. Unsichere Adressen sind markiert. Die meisten Orte sind privat: Man betrachtet sie von der Straße aus.",
  ab3:"Karte: Stadtplan, Orthofotos und Generalstabskarte © IGN. Fußwege: OpenStreetMap. Fotos: Wikimedia Commons, mit ihren Urhebern und Lizenzen.",
  ab4:"Ein Werk von Frater Nachash, Autor der App Horae 93. Ein unabhängiges Projekt, das für keinen Orden und keine Organisation spricht."},
it:{see:"Vedi da vicino", title:"Crowley a Parigi", yrs:"1900-1929", search:"Cerca un luogo", about:"Informazioni", expand:"Espandi il pannello", layers:"Livelli della mappa", home:"Vedi tutta Parigi",
  all:"Tutti i luoghi", frise:"Cronologia 1900-1929", plan:"Mappa", sat:"Satellite", old:"1820-1866",
  share:"Condividi", app:"Horae 93", story:"La storia", today:"Oggi", metro:"Metro", check:"Da verificare", sources:"Fonti",
  pnow:"Il luogo oggi", pold:"Il luogo un tempo", loading:"Caricamento…", nophoto:"Nessuna foto libera trovata vicino a questo luogo.", noold:"Nessuna foto antica trovata.",
  back:"Indietro", places:n=>n>1?n+" luoghi":n+" luogo", before:"Prima dell'arrivo di Crowley a Parigi.", tap:"Tocca un luogo in nero sulla mappa per leggerne la storia.", nores:"Nessun luogo trovato.",
  oldt:"La carta dello Stato maggiore, rilevata tra il 1820 e il 1866, prima dei grandi lavori di Haussmann.", replay:"Rigioca il tracciato", copied:"Link copiato", lit:"I luoghi di quel periodo",
  appT:"Sul posto, lasciati guidare", appP:"Nell'app Horae 93, Parigi 93 ti porta a piedi da un luogo all'altro: itinerario dalla tua posizione, modalità passeggiata che vibra all'arrivo e le feste thelemiche dell'anno.", appB:"Scopri Horae 93",
  allt:"I 31 luoghi", alld:"I luoghi in cui Aleister Crowley visse, scrisse, praticò e festeggiò a Parigi, dal 1899 al 1929. Scegli un percorso per vederlo disegnarsi, o tocca un luogo.",
  abt:"Una mappa dei luoghi in cui Aleister Crowley visse, scrisse, praticò e festeggiò a Parigi tra il 1900 e il 1929: alberghi, templi, caffè e atelier, con ciò che vi accadde e ciò che ogni indirizzo è diventato.",
  ab2:"I luoghi e la loro storia provengono soprattutto dal libro di Tobias Churton, Aleister Crowley in Paris (Inner Traditions, 2022), completato dalla cronologia di Richard Kaczynski (Perdurabo, 2010), dal diario di Crowley e dalla stampa dell'epoca. Gli indirizzi incerti sono segnalati. La maggior parte dei luoghi è privata: si guardano dalla strada.",
  ab3:"Mappa: pianta, ortofoto e carta dello Stato maggiore © IGN. Percorsi a piedi: OpenStreetMap. Foto: Wikimedia Commons, con i loro autori e licenze.",
  ab4:"Una realizzazione di Frater Nachash, autore dell'app Horae 93. Progetto indipendente, che non parla a nome di alcun ordine né organizzazione."}
};
const APP_URL = "https://horae93.app";
const $ = s => document.querySelector(s);
const esc = s => String(s==null?"":s).replace(/[&<>"']/g, c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const IC = {
  back:`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 6l-6 6 6 6"/></svg>`,
  share:`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="2.5"/><circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="19" r="2.5"/><path d="M8.2 10.8l7.6-4.4M8.2 13.2l7.6 4.4"/></svg>`,
  app:`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="2.5" width="12" height="19" rx="3"/><path d="M11 18h2"/></svg>`,
  zoom:`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="6.5"/><path d="M16 16l4 4M11 8v6M8 11h6"/></svg>`,
  pin:`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/></svg>`,
  cal:`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3.5" y="5" width="17" height="15" rx="2"/><path d="M3.5 10h17M8 3v4M16 3v4"/></svg>`,
  metro:`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M8 16V8l4 5 4-5v8"/></svg>`,
  now:`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>`,
  replay:`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12a8 8 0 1 0 2.4-5.7L4 8.5"/><path d="M4 4v4.5h4.5"/></svg>`
};
const S = {lang:"fr", D:null, OQ:{}, mode:"all", tour:null, sel:null, ids:[], year:1899, play:0, base:"plan", mk:{}, lines:null, full:null, dot:null, raf:0, tok:0, mt:0, geo:{}, view:"list"};
let T = UI.fr;
function pickLang(){
  const q = new URLSearchParams(location.search).get("l"); if (LANGS.includes(q)) return q;
  try { const s = localStorage.getItem("cap-lang"); if (LANGS.includes(s)) return s; } catch(e){}
  const n = (navigator.language||"fr").slice(0,2).toLowerCase(); return LANGS.includes(n) ? n : "en";
}
function toast(m){ const t = document.createElement("div"); t.className = "toast"; t.textContent = m; document.body.append(t); setTimeout(()=>t.remove(), 2600); }
const wide = () => innerWidth >= 900;

/* ---------- carte et fonds ---------- */
const PARIS = [[48.815, 2.25], [48.905, 2.42]];
const map = L.map("map", {minZoom:11, maxZoom:19, zoomSnap:.5, maxBounds:[[48.70,2.05],[49.00,2.65]], maxBoundsViscosity:.8, zoomControl:false}).fitBounds(PARIS);
map.attributionControl.setPrefix(false);
const IGN = (layer, fmt) => `https://data.geopf.fr/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=${layer}&STYLE=normal&TILEMATRIXSET=PM&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&FORMAT=${fmt}`;
const BASES = {
  plan:{l:()=>L.tileLayer(IGN("GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2","image/png"), {minZoom:11, maxZoom:19, maxNativeZoom:18, attribution:"Plan IGN © IGN"}), th:"plan"},
  sat:{l:()=>L.tileLayer(IGN("ORTHOIMAGERY.ORTHOPHOTOS","image/jpeg"), {minZoom:11, maxZoom:19, maxNativeZoom:19, attribution:"Orthophotos © IGN"}), th:"sat"},
  old:{l:()=>L.tileLayer(IGN("GEOGRAPHICALGRIDSYSTEMS.ETATMAJOR40","image/jpeg"), {minZoom:11, maxZoom:19, maxNativeZoom:15, attribution:"Carte de l'état-major (1820-1866) © IGN"}), th:"old"}
};
let baseL = null;
function setBase(k){ if (baseL) baseL.remove(); S.base = k; baseL = BASES[k].l().addTo(map); baseL.bringToBack(); if (k==="old") toast(T.oldt); layersUI(); }
const thumb = k => IGN(k==="plan"?"GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2":k==="sat"?"ORTHOIMAGERY.ORTHOPHOTOS":"GEOGRAPHICALGRIDSYSTEMS.ETATMAJOR40", k==="plan"?"image/png":"image/jpeg").replace("{z}","14").replace("{y}","5636").replace("{x}","8299");
function layersUI(){ const box = $("#layers"); box.innerHTML = ["plan","sat","old"].map(k=>`<button type="button" data-b="${k}" class="${S.base===k?"on":""}"><i style="background-image:url('${thumb(k)}')"></i>${esc(T[k])}</button>`).join("");
  box.querySelectorAll("[data-b]").forEach(b=>b.onclick=()=>{ setBase(b.dataset.b); box.hidden = true; }); }
const LG = L.layerGroup().addTo(map);
map.on("zoomstart", ()=>map.getContainer().classList.add("zooming"));
map.on("zoomend", ()=>setTimeout(()=>map.getContainer().classList.remove("zooming"), 30));
map.on("movestart", stopDraw);
function pad(){ const top = ($(".bar")||{}).offsetHeight || 110;
  if (wide()) return {l: (+getComputedStyle(document.documentElement).getPropertyValue("--pw").replace("px","")||408) + 40, t:40, r:80, b:40};
  return {l:30, t: top + 20, r:70, b: ($("#pn").offsetHeight||300) + 20}; }
const fitPts = (pts, max, dur) => map.flyToBounds(L.latLngBounds(pts), {paddingTopLeft:[pad().l, pad().t], paddingBottomRight:[pad().r, pad().b], maxZoom:max||16.5, duration:dur==null?1.1:dur});

/* ---------- panneau du bas (mobile) ---------- */
const SNAP = () => [Math.min(170, innerHeight*.24), innerHeight*.46, innerHeight - 92];
function sheet(k){ if (wide()) return; const h = SNAP()[k]; document.documentElement.style.setProperty("--sheet", h+"px"); S.sk = k; }
(function grab(){
  const g = $("#grab"), pn = $("#pn"); let y0 = 0, h0 = 0, moved = false;
  g.addEventListener("pointerdown", e=>{ if (wide()) return; y0 = e.clientY; h0 = pn.offsetHeight; moved = false; pn.classList.add("drag"); g.setPointerCapture(e.pointerId); });
  g.addEventListener("pointermove", e=>{ if (!pn.classList.contains("drag")) return; const h = Math.max(120, Math.min(innerHeight - 80, h0 + (y0 - e.clientY))); if (Math.abs(y0 - e.clientY) > 4) moved = true; document.documentElement.style.setProperty("--sheet", h+"px"); });
  const end = ()=>{ if (!pn.classList.contains("drag")) return; pn.classList.remove("drag"); const h = pn.offsetHeight, s = SNAP();
    if (!moved){ sheet(S.sk===2 ? 0 : (S.sk||0) + 1); return; } let k = 0, d = 1e9; s.forEach((v,i)=>{ if (Math.abs(v-h) < d){ d = Math.abs(v-h); k = i; } }); sheet(k); };
  g.addEventListener("pointerup", end); g.addEventListener("pointercancel", end);
  g.addEventListener("keydown", e=>{ if (e.key==="Enter" || e.key===" "){ e.preventDefault(); sheet(S.sk===2 ? 0 : (S.sk||0) + 1); } });
})();

/* ---------- données ---------- */
async function load(lang){
  const r = await fetch(`data/${lang}.json`); if (!r.ok) throw new Error("data");
  S.D = await r.json(); S.lang = lang; T = UI[lang];
  document.documentElement.lang = lang; $("#lang").value = lang;
  document.querySelectorAll("[data-i]").forEach(e=>{ e.textContent = T[e.dataset.i]; });
  document.querySelectorAll("[data-ia]").forEach(e=>e.setAttribute("aria-label", T[e.dataset.ia]));
  document.querySelectorAll("[data-ph]").forEach(e=>e.setAttribute("placeholder", T[e.dataset.ph]));
  document.title = `${T.title} · ${T.yrs}`;
  try { localStorage.setItem("cap-lang", lang); } catch(e){}
}
const P = id => S.D.places[id];
const tourOf = id => S.D.tours.find(t=>t.id===id);
const yearOf = p => { const m = String(p.d||"").match(/1[89]\d\d/); return m ? +m[0] : null; };
const nowBadge = p => p.st ? `<span class="now n-${p.st}"><i></i>${esc(S.D.nowl[p.st]||"")}</span>` : "";
const allIds = () => Object.keys(S.D.places).sort((a,b)=>P(a).n-P(b).n);

/* ---------- puces ---------- */
function chips(){
  const c = $("#chips");
  c.innerHTML = `<button class="chip${S.mode==="all"?" on":""}" data-all>${esc(T.all)}</button>`
    + S.D.tours.map(t=>`<button class="chip${S.mode==="tour" && S.tour===t.id?" on":""}" data-t="${t.id}">${esc(t.t)}</button>`).join("")
    + `<button class="chip${S.mode==="frise"?" on":""}" data-f>${esc(T.frise)}</button>`;
  c.querySelectorAll("[data-t]").forEach(b=>b.onclick=()=>{ setMode("tour", b.dataset.t); b.scrollIntoView({inline:"center", block:"nearest", behavior:"smooth"}); });
  c.querySelector("[data-all]").onclick = ()=>setMode("all");
  c.querySelector("[data-f]").onclick = ()=>setMode("frise");
}

/* ---------- modes ---------- */
function markers(ids, cls){
  LG.clearLayers(); S.mk = {}; S.lines = null; S.full = null;
  ids.forEach(id=>{ const p = P(id);
    const m = L.marker([p.lat, p.lon], {icon:L.divIcon({className:"mk"+(cls?" "+cls:""), html:`<span>${p.n}</span>`, iconSize:[32,32], iconAnchor:[16,16]}), title:p.nm, alt:p.nm, keyboard:true, riseOnHover:true}).addTo(LG);
    m.on("click", ()=>{ if (S.mode==="frise" && m.getElement().classList.contains("dim")) return; openPlace(id, true); }); S.mk[id] = m; });
}
function setMode(mode, tour, quiet){
  stopDraw(); clearInterval(S.play); S.play = 0; S.mt++;
  S.mode = mode; if (tour) S.tour = tour; S.sel = null; chips();
  if (mode==="frise"){ markers(allIds(), "dim"); S.ids = allIds(); friseView(); fitPts(S.ids.map(id=>[P(id).lat, P(id).lon]), 14.5); sheet(1); setTimeout(()=>{ year(S.year >= 1929 ? 1899 : S.year); playY(true); }, 500); hash(); return; }
  const ids = mode==="all" ? allIds() : tourOf(S.tour).r; S.ids = ids;
  markers(ids);
  listView();
  const pts = ids.map(id=>[P(id).lat, P(id).lon]), mt = S.mt;
  if (mode==="tour"){ map.once("moveend", ()=>{ if (S.mt!==mt) return; geo(tourOf(S.tour)).then(g=>{ if (S.mt===mt && S.mode==="tour" && !S.sel) draw(g && g.length > 1 ? g : pts); }); }); }
  if (!quiet){ if (mode==="all") map.flyToBounds(PARIS, {paddingTopLeft:[pad().l, pad().t], paddingBottomRight:[pad().r, pad().b], duration:1}); else fitPts(pts, 16.5); }
  sheet(mode==="all" ? 0 : 1);
  hash();
}
function highlight(id){
  Object.entries(S.mk).forEach(([x,m])=>{ const e = m.getElement(); if (e) e.classList.toggle("on", x===id); m.setZIndexOffset(x===id?1000:0); });
}

/* ---------- vues du panneau ---------- */
function pnSet(html){ const box = $("#pnIn"); box.innerHTML = html; box.scrollTop = 0; return box; }
function rowHtml(id){ const p = P(id);
  return `<li><button type="button" data-p="${id}"><span class="n">${p.n}</span><span><b>${esc(p.nm)}</b><small>${esc(p.ad)}</small><span class="tags">${nowBadge(p)}<span class="tag">${esc(S.D.kinds[p.k]||"")}</span><span class="tag">${esc(p.d)}</span>${p.w?`<span class="tag w">${esc(T.check)}</span>`:""}</span></span></button></li>`; }
function bindRows(box){ box.querySelectorAll("[data-p]").forEach(b=>{ b.onclick = ()=>openPlace(b.dataset.p, true); b.onmouseenter = ()=>{ if (wide()) highlight(b.dataset.p); }; b.onmouseleave = ()=>{ if (wide() && !S.sel) highlight(null); }; }); }
function listView(){
  S.view = "list"; highlight(null);
  const tour = S.mode==="tour" ? tourOf(S.tour) : null;
  const head = tour ? `<div class="sec"><span class="kick">${esc(T.title)} · ${esc(T.places(tour.r.length))}</span><h1>${esc(tour.t)}</h1><p>${esc(tour.d)}</p><p class="meta">${esc(tour.m)}</p>
      <div class="row2" style="margin-top:12px"><button class="btn o" type="button" data-rp>${esc(T.replay)}</button></div></div>`
    : `<div class="sec"><span class="kick">${esc(T.yrs)}</span><h1>${esc(T.allt)}</h1><p style="margin:0">${esc(T.alld)}</p></div>`;
  const box = pnSet(head + `<ul class="lst">${S.ids.map(rowHtml).join("")}</ul>` + cta());
  bindRows(box);
  const rp = box.querySelector("[data-rp]"); if (rp) rp.onclick = ()=>{ const T0 = tourOf(S.tour); fitPts(T0.r.map(id=>[P(id).lat, P(id).lon]), 16.5); map.once("moveend", ()=>geo(T0).then(g=>draw(g && g.length>1 ? g : T0.r.map(id=>[P(id).lat, P(id).lon])))); };
}
function cta(){ return `<div class="cta"><b>${esc(T.appT)}</b><p>${esc(T.appP)}</p><a class="btn" href="${APP_URL}" target="_blank" rel="noopener">${esc(T.appB)}</a></div>`; }
function openPlace(id, fly){
  const p = P(id), H = S.D.hist[id] || {h:[], src:[]}; if (!p) return;
  stopDraw(); S.sel = id; S.view = "place"; highlight(id);
  const box = pnSet(`<button class="back" type="button" data-back>${IC.back} ${esc(T.back)}</button>
    <div class="hero" id="hero" hidden></div>
    <div class="sec"><span class="kick">${esc(S.D.kinds[p.k]||"")} · ${esc(p.d)}</span><h2>${esc(p.nm)}</h2>
      <div class="tags" style="margin-top:6px">${nowBadge(p)}${p.w?`<span class="tag w">${esc(T.check)}</span>`:""}</div></div>
    <div class="acts"><button class="act p" type="button" data-z><span>${IC.zoom}</span>${esc(T.see)}</button>
      <button class="act" type="button" data-s><span>${IC.share}</span>${esc(T.share)}</button>
      <a class="act" href="${APP_URL}" target="_blank" rel="noopener"><span>${IC.app}</span>${esc(T.app)}</a></div>
    <div class="sec facts">
      <div class="fact">${IC.pin}<span>${esc(p.ad)}</span></div>
      ${p.acc ? `<div class="fact">${IC.metro}<span>${esc(T.metro)} · ${esc(p.acc)}</span></div>` : ""}
      ${p.st ? `<div class="fact">${IC.now}<span><b>${esc(T.today)}</b> · ${esc(S.D.nowl[p.st]||"")}${p.stn ? ". "+esc(p.stn) : ""}</span></div>` : ""}
    </div>
    <div class="sec"><h3>${esc(T.story)}</h3>${(H.h && H.h.length ? H.h : [p.tx]).map(x=>`<p>${esc(x)}</p>`).join("")}${p.w ? `<p class="wn"><b>${esc(T.check)}</b> · ${esc(p.w)}</p>` : ""}</div>
    <div class="sec"><h3>${esc(T.pold)}</h3><div class="gal" id="galO"><p class="meta">${esc(T.loading)}</p></div></div>
    <div class="sec"><h3>${esc(T.pnow)}</h3><div class="gal" id="galN"><p class="meta">${esc(T.loading)}</p></div></div>
    ${H.src && H.src.length ? `<div class="sec"><h3>${esc(T.sources)}</h3><ul class="src">${H.src.map(s=>`<li>${s.u ? `<a href="${esc(s.u)}" target="_blank" rel="noopener">${esc(s.t)}</a>` : esc(s.t)}</li>`).join("")}</ul></div>` : ""}
    ${cta()}`);
  box.querySelector("[data-back]").onclick = ()=>{ S.sel = null; if (S.mode==="frise") friseView(); else listView(); hash(); };
  box.querySelector("[data-s]").onclick = ()=>share(id);
  box.querySelector("[data-z]").onclick = ()=>{ map.flyTo([p.lat, p.lon], 18, {duration:1}); sheet(0); };
  if (fly) centerOn(p);
  sheet(1); hash();
  photosNow(id); photosOld(id);
}
function centerOn(p){ const z = Math.max(map.getZoom(), 16.5), pd = pad(); const pt = map.project([p.lat, p.lon], z).add([-(pd.l - pd.r)/2, (pd.b - pd.t)/2]); map.flyTo(map.unproject(pt, z), z, {duration:1}); }
function friseView(){
  S.view = "frise";
  pnSet(`<div class="sec"><span class="kick">${esc(T.title)}</span><div class="yr"><b id="yv">${S.year}</b><button class="btn" type="button" id="yp">▶</button></div>
    <input type="range" id="yr" min="1899" max="1929" step="1" value="${S.year}" aria-label="${esc(T.frise)}"><div class="ticks"><span>1899</span><span>1910</span><span>1920</span><span>1929</span></div>
    <div id="ev" style="margin-top:12px"></div></div><div class="sec" style="padding-bottom:4px"><h3>${esc(T.lit)}</h3></div><ul class="lst" id="litL"></ul>${cta()}`);
  $("#yr").oninput = e=>{ playY(false); year(+e.target.value); };
  $("#yp").onclick = ()=>playY(!S.play);
  year(S.year);
}
function playY(on){ clearInterval(S.play); S.play = 0; const b = $("#yp"); if (b) b.textContent = on ? "❚❚" : "▶"; if (!on) return;
  if (S.year >= 1929) year(1899);
  S.play = setInterval(()=>{ if (S.mode!=="frise" || S.year >= 1929){ playY(false); return; } year(S.year + 1); }, 500); }
function year(y){
  S.year = y; const r = $("#yr"), v = $("#yv"); if (r) r.value = y; if (v) v.textContent = y;
  const lit = [];
  Object.entries(S.mk).forEach(([id,m])=>{ const yy = yearOf(P(id)), on = yy!=null ? yy <= y : y >= 1929, e = m.getElement(); if (on) lit.push(id); if (!e) return;
    const was = !e.classList.contains("dim"); e.classList.toggle("dim", !on); if (on && !was){ e.classList.remove("pop"); void e.offsetWidth; e.classList.add("pop"); } });
  if (S.view!=="frise") return;
  const tl = S.D.tl.filter(([yy])=>+String(yy).slice(0,4) <= y), last = tl[tl.length-1];
  $("#ev").innerHTML = `<span class="kick">${y} · ${esc(T.places(lit.length))}</span><p style="margin:6px 0 0">${last ? `<b>${esc(String(last[0]))}</b> · ${esc(last[1])}` : esc(T.before)}</p><p class="meta" style="margin-top:6px">${esc(T.tap)}</p>`;
  const L0 = $("#litL"); if (L0){ L0.innerHTML = lit.sort((a,b)=>(yearOf(P(b))||0)-(yearOf(P(a))||0)).map(rowHtml).join(""); bindRows(L0); }
}
function about(){
  S.view = "about";
  const box = pnSet(`<button class="back" type="button" data-back>${IC.back} ${esc(T.back)}</button><div class="sec"><span class="kick">${esc(T.yrs)}</span><h1>${esc(T.title)}</h1>
    <p>${esc(T.abt)}</p><p>${esc(T.ab2)}</p><p class="meta">${esc(T.ab3)}</p><p class="meta" style="margin-top:8px">${esc(T.ab4)}</p></div>${cta()}`);
  box.querySelector("[data-back]").onclick = ()=>{ if (S.sel) openPlace(S.sel); else if (S.mode==="frise") friseView(); else listView(); };
  sheet(2);
}

/* ---------- photos (Wikimedia Commons, appelé directement) ---------- */
const strip = h => String(h||"").replace(/<[^>]*>/g,"").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/\s+/g," ").trim().slice(0,80);
const PH = {}, PO = {};
function gal(box, list, empty){ if (!box || !box.isConnected) return;
  box.innerHTML = list.length ? list.map(f=>`<figure><a href="${esc(f.page)}" target="_blank" rel="noopener"><img src="${esc(f.thumb)}" alt="" loading="lazy"></a><figcaption>${f.yr?esc(f.yr)+" · ":""}${esc(f.author||"Wikimedia Commons")}${f.lic ? " · "+esc(f.lic) : ""}</figcaption></figure>`).join("") : `<p class="meta">${esc(empty)}</p>`;
  box.querySelectorAll("img").forEach(i=>i.addEventListener("error", ()=>{ const f = i.closest("figure"); if (f) f.remove(); })); }
function commons(params){ return fetch("https://commons.wikimedia.org/w/api.php?origin=*&format=json&action=query&prop=imageinfo&iiprop=url%7Cextmetadata%7Cmime&iiurlwidth=480&"+params).then(r=>r.json())
  .then(j=>Object.values((j.query||{}).pages||{}).map(pg=>{ const ii = (pg.imageinfo||[])[0]||{}, m = ii.extmetadata||{};
    return {thumb:ii.thumburl, page:ii.descriptionurl, mime:ii.mime, idx:pg.index||99, author:strip((m.Artist||{}).value), lic:strip((m.LicenseShortName||{}).value), yr:parseInt((strip((m.DateTimeOriginal||{}).value).match(/1[89]\d\d/)||[])[0]||"0",10)}; })
  .filter(f=>f.thumb && /image\/(jpeg|png|webp)/.test(f.mime||""))); }
function photosNow(id){
  const done = l=>{ gal($("#galN"), l, T.nophoto); const h = $("#hero"), f = l[0]; if (h && f && S.sel===id){ h.style.backgroundImage = `url("${f.thumb}")`; h.hidden = false; } };
  if (PH[id]) return done(PH[id]); const p = P(id);
  commons(`generator=geosearch&ggscoord=${p.lat}%7C${p.lon}&ggsradius=80&ggsnamespace=6&ggslimit=20`).then(l=>{ PH[id] = l.slice(0,10); done(PH[id]); }).catch(()=>done([]));
}
function photosOld(id){
  const q = S.OQ[id]; if (!q){ gal($("#galO"), [], T.noold); return; }
  if (PO[id]) return gal($("#galO"), PO[id], T.noold);
  commons(`generator=search&gsrnamespace=6&gsrlimit=25&gsrsearch=${encodeURIComponent(q+" filetype:bitmap")}`).then(l=>{
    PO[id] = l.filter(f=>f.yr===0 || f.yr<1950).sort((a,b)=>((b.yr>0&&b.yr<1940)-(a.yr>0&&a.yr<1940)) || (/public domain|pd|cc0/i.test(b.lic)-/public domain|pd|cc0/i.test(a.lic)) || a.idx-b.idx).slice(0,8);
    gal($("#galO"), PO[id], T.noold); }).catch(()=>gal($("#galO"), [], T.noold));
}

/* ---------- le tracé qui se dessine ---------- */
function geo(Tr){
  if (S.geo[Tr.id]) return Promise.resolve(S.geo[Tr.id]);
  const pts = Tr.r.map(P).slice(0, 12); if (pts.length < 2) return Promise.resolve(null);
  const url = "https://routing.openstreetmap.de/routed-foot/route/v1/driving/" + pts.map(p=>p.lon.toFixed(6)+","+p.lat.toFixed(6)).join(";") + "?overview=full&geometries=geojson";
  const ctl = new AbortController(); setTimeout(()=>ctl.abort(), 4000);
  return fetch(url, {signal:ctl.signal}).then(r=>r.ok ? r.json() : null).then(j=>{ const c = j && j.routes && j.routes[0] && j.routes[0].geometry && j.routes[0].geometry.coordinates;
    const g = c && c.length > 1 ? c.map(([x,y])=>[y,x]) : null; if (g) S.geo[Tr.id] = g; return g; }).catch(()=>null);
}
function stopDraw(){ S.tok++; cancelAnimationFrame(S.raf); S.raf = 0; if (S.dot){ try { S.dot.remove(); } catch(e){} S.dot = null; } if (S.full && S.lines) S.lines.forEach(l=>l.setLatLngs(S.full)); }
function draw(pts){
  if (pts.length < 2) return;
  stopDraw(); (S.lines||[]).forEach(l=>l.remove()); S.lines = null; S.full = null;
  const tok = S.tok;
  const under = L.polyline([pts[0]], {color:"#ffffff", weight:9, opacity:.95, interactive:false, lineCap:"round", lineJoin:"round"}).addTo(LG);
  const line = L.polyline([pts[0]], {color:"#111111", weight:4, opacity:1, interactive:false, lineCap:"round", lineJoin:"round"}).addTo(LG);
  S.lines = [under, line]; S.full = pts; under.bringToBack();
  if (matchMedia("(prefers-reduced-motion: reduce)").matches){ under.setLatLngs(pts); line.setLatLngs(pts); return; }
  const seg = [0]; for (let i=1;i<pts.length;i++) seg.push(seg[i-1] + map.distance(pts[i-1], pts[i]));
  const tot = seg[seg.length-1] || 1, DUR = Math.min(6000, Math.max(2600, tot*1.1));
  const dot = L.circleMarker(pts[0], {radius:6, color:"#ffffff", weight:3, opacity:1, fillColor:"#111111", fillOpacity:1, className:"dotc", interactive:false}).addTo(LG); S.dot = dot;
  const t0 = performance.now(), ease = x => x<.5 ? 2*x*x : 1-Math.pow(-2*x+2,2)/2; let last = 1;
  const step = now => { if (S.tok !== tok || S.dot !== dot) return;
    const f = Math.min(1, (now - t0)/DUR), d = ease(f)*tot; let i = last; while (i < seg.length-1 && seg[i] < d) i++; last = i;
    const k = Math.min(1, (d - seg[i-1]) / Math.max(1e-6, seg[i]-seg[i-1])), a = pts[i-1], b = pts[i], tip = [a[0]+(b[0]-a[0])*k, a[1]+(b[1]-a[1])*k];
    const part = pts.slice(0, i); part.push(tip); under.setLatLngs(part); line.setLatLngs(part); dot.setLatLng(tip);
    if (f < 1) S.raf = requestAnimationFrame(step);
    else { under.setLatLngs(pts); line.setLatLngs(pts); const e = dot.getElement(); if (e) e.classList.add("out"); setTimeout(()=>{ try { dot.remove(); } catch(_){} if (S.dot===dot) S.dot = null; }, 450); } };
  S.raf = requestAnimationFrame(step);
}

/* ---------- recherche ---------- */
const norm = s => String(s||"").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"");
function search(q){
  const res = $("#res"); q = norm(q.trim()); if (!q){ res.hidden = true; return; }
  const hit = allIds().filter(id=>{ const p = P(id), H = S.D.hist[id]; return [p.nm, p.ad, p.d, p.tx, S.D.kinds[p.k], H && H.h && H.h.join(" ")].some(x=>norm(x).includes(q)); }).slice(0, 8);
  res.innerHTML = hit.length ? hit.map(id=>{ const p = P(id); return `<button type="button" data-p="${id}"><span class="n">${p.n}</span><span><b>${esc(p.nm)}</b><small>${esc(p.ad)} · ${esc(p.d)}</small></span></button>`; }).join("") : `<p class="none">${esc(T.nores)}</p>`;
  res.hidden = false;
  res.querySelectorAll("[data-p]").forEach(b=>b.onclick=()=>{ res.hidden = true; $("#q").value = ""; $("#q").blur(); if (S.mode!=="all" && !S.ids.includes(b.dataset.p)) setMode("all", null, true); openPlace(b.dataset.p, true); });
}

/* ---------- partage, adresse de la page ---------- */
function share(id){
  const p = P(id), url = `${location.origin}${location.pathname}?l=${S.lang}#p=${id}`;
  if (navigator.share){ navigator.share({title:`${p.nm} · ${T.title}`, url}).catch(()=>{}); return; }
  (navigator.clipboard ? navigator.clipboard.writeText(url) : Promise.reject()).then(()=>toast(T.copied)).catch(()=>prompt("", url));
}
function hash(){ const h = S.mode==="tour" ? "t="+S.tour : S.mode==="frise" ? "frise" : ""; const s = S.sel ? (h ? h+"&" : "")+"p="+S.sel : h; history.replaceState(null, "", location.pathname + location.search + (s ? "#"+s : "")); }

/* ---------- démarrage ---------- */
(async function start(){
  try { await load(pickLang()); } catch(e){ await load("fr"); }
  try { S.OQ = await (await fetch("data/oldq.json")).json(); } catch(e){}
  setBase("plan");
  const h = new URLSearchParams(location.hash.slice(1)), t = h.get("t"), p = h.get("p");
  if (location.hash==="#frise") setMode("frise");
  else if (t && tourOf(t)) setMode("tour", t, !!p);
  else setMode("all", null, !!p);
  if (p && P(p)) openPlace(p, true);
  $("#lang").onchange = async e=>{ const keep = {mode:S.mode, tour:S.tour, sel:S.sel}; await load(e.target.value); layersUI(); setMode(keep.mode, keep.tour, true); if (keep.sel) openPlace(keep.sel); };
  $("#about").onclick = about;
  $("#q").oninput = e=>search(e.target.value);
  $("#q").onkeydown = e=>{ if (e.key==="Enter"){ const b = $("#res [data-p]"); if (b) b.click(); } if (e.key==="Escape"){ $("#res").hidden = true; } };
  document.addEventListener("click", e=>{ if (!e.target.closest(".search")) $("#res").hidden = true; if (!e.target.closest("#layers,#lay")) $("#layers").hidden = true; });
  $("#lay").onclick = ()=>{ const l = $("#layers"); l.hidden = !l.hidden; };
  $("#home").onclick = ()=>map.flyToBounds(PARIS, {paddingTopLeft:[pad().l, pad().t], paddingBottomRight:[pad().r, pad().b], duration:1});
  $("#zi").onclick = ()=>map.zoomIn(); $("#zo").onclick = ()=>map.zoomOut();
  addEventListener("resize", ()=>{ if (!wide()) sheet(S.sk==null?1:S.sk); });
})();
