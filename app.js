/* Crowley à Paris · 1900-1929 — carte interactive (Leaflet, sans serveur) */
"use strict";
const LANGS = ["fr","en","es","de","it"];
const UI = {
fr:{lamenK:"Crowley · Paris occulte", booksB:"Les livres", pplT:"Personnages", pplS:"Ses lieux sur la carte", pplGo:"Voir sur la carte", pplAt:"Lieux liés", chronoT:"Chronologie", booksT:"Les livres de Tobias Churton", amz:"Sur Amazon", see:"Voir de près", site:"Thelemic Map · Paris", secTh:"Crowley à Paris", secOp:"Paris occulte", oalld:"Le Paris ésotérique de la Belle Époque, 1880-1914 : libraires, salons de la Rose+Croix, mages, cabarets et tombes, d'après Occult Paris de Tobias Churton. Choisis un parcours ou touche un lieu.", oabt:"Une carte des lieux de Thelema et du Paris occulte : les adresses d'Aleister Crowley entre 1900 et 1929, et celles des mages, libraires et artistes ésotériques de la Belle Époque, avec ce qui s'y est passé et ce que chaque adresse est devenue.", don:"Soutenir le projet", title:"Crowley à Paris", yrs:"1900-1929", search:"Rechercher un lieu", about:"À propos", expand:"Agrandir le panneau", layers:"Fonds de carte", home:"Vue de tout Paris",
  all:"Tous les lieux", frise:"Frise 1900-1929", plan:"Plan", sat:"Satellite", old:"1820-1866",
  share:"Partager", app:"Horae 93", story:"L'histoire", today:"Aujourd'hui", metro:"Métro", check:"À vérifier", sources:"Sources",
  pnow:"Le lieu aujourd'hui", pold:"Le lieu autrefois", loading:"Chargement…", nophoto:"Aucune photo libre trouvée près de ce lieu.", noold:"Aucune photo ancienne trouvée.",
  back:"Retour", places:n=>n>1?n+" lieux":n+" lieu", before:"Avant l'arrivée de Crowley à Paris.", tap:"Touche un lieu allumé sur la carte pour lire son histoire.", nores:"Aucun lieu trouvé.",
  oldt:"Carte de l'état-major, levée entre 1820 et 1866, avant les grands travaux d'Haussmann.", replay:"Rejouer le tracé", copied:"Lien copié", lit:"Les lieux de cette époque",
  appT:"Sur place, laisse-toi guider", appP:"Dans l'application Horae 93, Paris 93 te mène à pied d'un lieu à l'autre : itinéraire depuis ta position, mode balade qui vibre à l'arrivée, et les fêtes thélémiques de l'année.", appB:"Découvrir Horae 93",
  allt:"Les 31 lieux", alld:"Les lieux où Aleister Crowley a vécu, écrit, pratiqué et festoyé à Paris, de 1900 à 1929. Choisis un parcours pour le voir se dessiner, ou touche un lieu.",
  abt:"Une carte des lieux où Aleister Crowley a vécu, écrit, pratiqué et festoyé à Paris entre 1900 et 1929 : hôtels, temples, cafés et ateliers, avec ce qui s'y est passé et ce que chaque adresse est devenue.",
  ab2:"Les lieux et leur histoire viennent surtout du livre de Tobias Churton, Aleister Crowley in Paris (Inner Traditions, 2022), complété par la chronologie de Richard Kaczynski (Perdurabo, 2010), le journal de Crowley et la presse de l'époque. Les adresses incertaines sont signalées. La plupart des lieux sont privés : on les regarde depuis la rue.",
  ab3:"Carte : plan, orthophotos et carte de l'état-major © IGN. Tracés à pied : OpenStreetMap. Photos : Wikimedia Commons, avec leurs auteurs et licences.",
  ab4:"Un projet de l'Oasis Parisii de l'Ordo Templi Orientis et de ses membres, réalisé par Frater Nachash, auteur de l'application Horae 93."},
en:{lamenK:"Crowley · Occult Paris", booksB:"The books", pplT:"People", pplS:"Their places on the map", pplGo:"Show on the map", pplAt:"Linked places", chronoT:"Timeline", booksT:"Tobias Churton's books", amz:"On Amazon", see:"Zoom in", site:"Thelemic Map · Paris", secTh:"Crowley in Paris", secOp:"Occult Paris", oalld:"Esoteric Paris in the Belle Époque, 1880-1914: booksellers, Rose+Croix salons, magi, cabarets and graves, after Tobias Churton's Occult Paris. Pick a tour or tap a place.", oabt:"A map of the places of Thelema and of occult Paris: Aleister Crowley's addresses between 1900 and 1929, and those of the magi, booksellers and esoteric artists of the Belle Époque, with what happened there and what each address has become.", don:"Support the project", title:"Crowley in Paris", yrs:"1900-1929", search:"Search a place", about:"About", expand:"Expand the panel", layers:"Map layers", home:"View all of Paris",
  all:"All places", frise:"Timeline 1900-1929", plan:"Map", sat:"Satellite", old:"1820-1866",
  share:"Share", app:"Horae 93", story:"The story", today:"Today", metro:"Metro", check:"To be checked", sources:"Sources",
  pnow:"The place today", pold:"The place in the past", loading:"Loading…", nophoto:"No free photo found near this place.", noold:"No old photo found.",
  back:"Back", places:n=>n>1?n+" places":n+" place", before:"Before Crowley arrived in Paris.", tap:"Tap a lit place on the map to read its story.", nores:"No place found.",
  oldt:"The État-major map, surveyed between 1820 and 1866, before Haussmann's great works.", replay:"Replay the route", copied:"Link copied", lit:"The places of that time",
  appT:"On the spot, let it guide you", appP:"In the Horae 93 app, Paris 93 walks you from one place to the next: directions from where you stand, a walk mode that vibrates on arrival, and the Thelemic feasts of the year.", appB:"Discover Horae 93",
  allt:"All 31 places", alld:"The places where Aleister Crowley lived, wrote, practised and feasted in Paris, from 1900 to 1929. Pick a tour to watch it draw itself, or tap a place.",
  abt:"A map of the places where Aleister Crowley lived, wrote, practised and feasted in Paris between 1900 and 1929: hotels, temples, cafés and studios, with what happened there and what each address has become.",
  ab2:"The places and their stories come mainly from Tobias Churton's book Aleister Crowley in Paris (Inner Traditions, 2022), completed by Richard Kaczynski's chronology (Perdurabo, 2010), Crowley's diary and the press of the time. Uncertain addresses are flagged. Most places are private: you look at them from the street.",
  ab3:"Map: street map, orthophotos and État-major map © IGN. Walking routes: OpenStreetMap. Photos: Wikimedia Commons, with their authors and licences.",
  ab4:"A project of Oasis Parisii of Ordo Templi Orientis and its members, made by Frater Nachash, author of the Horae 93 app."},
es:{lamenK:"Crowley · París oculto", booksB:"Los libros", pplT:"Personajes", pplS:"Sus lugares en el mapa", pplGo:"Ver en el mapa", pplAt:"Lugares vinculados", chronoT:"Cronología", booksT:"Los libros de Tobias Churton", amz:"En Amazon", see:"Ver de cerca", site:"Thelemic Map · Paris", secTh:"Crowley en París", secOp:"París oculto", oalld:"El París esotérico de la Belle Époque, 1880-1914: libreros, salones de la Rose+Croix, magos, cabarets y tumbas, según Occult Paris de Tobias Churton. Elige un recorrido o toca un lugar.", oabt:"Un mapa de los lugares de Thelema y del París oculto: las direcciones de Aleister Crowley entre 1900 y 1929 y las de los magos, libreros y artistas esotéricos de la Belle Époque, con lo que allí ocurrió y en qué se ha convertido cada dirección.", don:"Apoyar el proyecto", title:"Crowley en París", yrs:"1900-1929", search:"Buscar un lugar", about:"Acerca de", expand:"Ampliar el panel", layers:"Capas del mapa", home:"Ver todo París",
  all:"Todos los lugares", frise:"Cronología 1900-1929", plan:"Plano", sat:"Satélite", old:"1820-1866",
  share:"Compartir", app:"Horae 93", story:"La historia", today:"Hoy", metro:"Metro", check:"Por verificar", sources:"Fuentes",
  pnow:"El lugar hoy", pold:"El lugar antaño", loading:"Cargando…", nophoto:"No se encontró ninguna foto libre cerca de este lugar.", noold:"No se encontró ninguna foto antigua.",
  back:"Volver", places:n=>n>1?n+" lugares":n+" lugar", before:"Antes de la llegada de Crowley a París.", tap:"Toca un lugar encendido en el mapa para leer su historia.", nores:"No se encontró ningún lugar.",
  oldt:"El mapa del Estado Mayor, levantado entre 1820 y 1866, antes de las grandes obras de Haussmann.", replay:"Repetir el trazado", copied:"Enlace copiado", lit:"Los lugares de esa época",
  appT:"Allí mismo, déjate guiar", appP:"En la aplicación Horae 93, París 93 te lleva a pie de un lugar a otro: itinerario desde tu posición, modo paseo que vibra al llegar y las fiestas thelémicas del año.", appB:"Descubrir Horae 93",
  allt:"Los 31 lugares", alld:"Los lugares donde Aleister Crowley vivió, escribió, practicó y celebró en París, de 1900 a 1929. Elige un recorrido para verlo dibujarse o toca un lugar.",
  abt:"Un mapa de los lugares donde Aleister Crowley vivió, escribió, practicó y celebró en París entre 1900 y 1929: hoteles, templos, cafés y talleres, con lo que allí ocurrió y en qué se ha convertido cada dirección.",
  ab2:"Los lugares y su historia proceden sobre todo del libro de Tobias Churton, Aleister Crowley in Paris (Inner Traditions, 2022), completado con la cronología de Richard Kaczynski (Perdurabo, 2010), el diario de Crowley y la prensa de la época. Las direcciones inciertas están señaladas. La mayoría de los lugares son privados: se miran desde la calle.",
  ab3:"Mapa: plano, ortofotos y mapa del Estado Mayor © IGN. Recorridos a pie: OpenStreetMap. Fotos: Wikimedia Commons, con sus autores y licencias.",
  ab4:"Un proyecto del Oasis Parisii de la Ordo Templi Orientis y sus miembros, realizado por Frater Nachash, autor de la aplicación Horae 93."},
de:{lamenK:"Crowley · Okkultes Paris", booksB:"Die Bücher", pplT:"Personen", pplS:"Ihre Orte auf der Karte", pplGo:"Auf der Karte zeigen", pplAt:"Verbundene Orte", chronoT:"Zeitleiste", booksT:"Die Bücher von Tobias Churton", amz:"Bei Amazon", see:"Heranzoomen", site:"Thelemic Map · Paris", secTh:"Crowley in Paris", secOp:"Okkultes Paris", oalld:"Das esoterische Paris der Belle Époque, 1880-1914: Buchhändler, Rose+Croix-Salons, Magier, Kabaretts und Gräber, nach Tobias Churtons Occult Paris. Wähle einen Rundgang oder tippe auf einen Ort.", oabt:"Eine Karte der Orte Thelemas und des okkulten Paris: Aleister Crowleys Adressen zwischen 1900 und 1929 und die der Magier, Buchhändler und esoterischen Künstler der Belle Époque, mit dem, was dort geschah, und dem, was aus jeder Adresse geworden ist.", don:"Das Projekt unterstützen", title:"Crowley in Paris", yrs:"1900-1929", search:"Ort suchen", about:"Über", expand:"Bereich vergrößern", layers:"Kartenebenen", home:"Ganz Paris anzeigen",
  all:"Alle Orte", frise:"Zeitleiste 1900-1929", plan:"Karte", sat:"Satellit", old:"1820-1866",
  share:"Teilen", app:"Horae 93", story:"Die Geschichte", today:"Heute", metro:"Metro", check:"Zu prüfen", sources:"Quellen",
  pnow:"Der Ort heute", pold:"Der Ort früher", loading:"Wird geladen…", nophoto:"Kein freies Foto in der Nähe dieses Ortes gefunden.", noold:"Kein altes Foto gefunden.",
  back:"Zurück", places:n=>n>1?n+" Orte":n+" Ort", before:"Bevor Crowley nach Paris kam.", tap:"Tippe auf einen leuchtenden Ort auf der Karte, um seine Geschichte zu lesen.", nores:"Kein Ort gefunden.",
  oldt:"Die Generalstabskarte, vermessen zwischen 1820 und 1866, vor Haussmanns großen Umbauten.", replay:"Route erneut zeichnen", copied:"Link kopiert", lit:"Die Orte dieser Zeit",
  appT:"Vor Ort, lass dich führen", appP:"In der App Horae 93 führt dich Paris 93 zu Fuß von Ort zu Ort: Route von deinem Standort, ein Spaziermodus, der bei der Ankunft vibriert, und die thelemischen Feste des Jahres.", appB:"Horae 93 entdecken",
  allt:"Alle 31 Orte", alld:"Die Orte, an denen Aleister Crowley in Paris lebte, schrieb, praktizierte und feierte, von 1900 bis 1929. Wähle einen Rundgang und sieh zu, wie er sich zeichnet, oder tippe auf einen Ort.",
  abt:"Eine Karte der Orte, an denen Aleister Crowley zwischen 1900 und 1929 in Paris lebte, schrieb, praktizierte und feierte: Hotels, Tempel, Cafés und Ateliers, mit dem, was dort geschah, und dem, was aus jeder Adresse geworden ist.",
  ab2:"Die Orte und ihre Geschichte stammen vor allem aus Tobias Churtons Buch Aleister Crowley in Paris (Inner Traditions, 2022), ergänzt durch die Chronologie von Richard Kaczynski (Perdurabo, 2010), Crowleys Tagebuch und die Presse der Zeit. Unsichere Adressen sind markiert. Die meisten Orte sind privat: Man betrachtet sie von der Straße aus.",
  ab3:"Karte: Stadtplan, Orthofotos und Generalstabskarte © IGN. Fußwege: OpenStreetMap. Fotos: Wikimedia Commons, mit ihren Urhebern und Lizenzen.",
  ab4:"Ein Projekt der Oasis Parisii des Ordo Templi Orientis und ihrer Mitglieder, umgesetzt von Frater Nachash, Autor der App Horae 93."},
it:{lamenK:"Crowley · Parigi occulta", booksB:"I libri", pplT:"Personaggi", pplS:"I suoi luoghi sulla mappa", pplGo:"Mostra sulla mappa", pplAt:"Luoghi collegati", chronoT:"Cronologia", booksT:"I libri di Tobias Churton", amz:"Su Amazon", see:"Vedi da vicino", site:"Thelemic Map · Paris", secTh:"Crowley a Parigi", secOp:"Parigi occulta", oalld:"La Parigi esoterica della Belle Époque, 1880-1914: librai, salotti della Rose+Croix, maghi, cabaret e tombe, secondo Occult Paris di Tobias Churton. Scegli un percorso o tocca un luogo.", oabt:"Una mappa dei luoghi di Thelema e della Parigi occulta: gli indirizzi di Aleister Crowley tra il 1900 e il 1929 e quelli dei maghi, librai e artisti esoterici della Belle Époque, con ciò che vi accadde e ciò che ogni indirizzo è diventato.", don:"Sostieni il progetto", title:"Crowley a Parigi", yrs:"1900-1929", search:"Cerca un luogo", about:"Informazioni", expand:"Espandi il pannello", layers:"Livelli della mappa", home:"Vedi tutta Parigi",
  all:"Tutti i luoghi", frise:"Cronologia 1900-1929", plan:"Mappa", sat:"Satellite", old:"1820-1866",
  share:"Condividi", app:"Horae 93", story:"La storia", today:"Oggi", metro:"Metro", check:"Da verificare", sources:"Fonti",
  pnow:"Il luogo oggi", pold:"Il luogo un tempo", loading:"Caricamento…", nophoto:"Nessuna foto libera trovata vicino a questo luogo.", noold:"Nessuna foto antica trovata.",
  back:"Indietro", places:n=>n>1?n+" luoghi":n+" luogo", before:"Prima dell'arrivo di Crowley a Parigi.", tap:"Tocca un luogo acceso sulla mappa per leggerne la storia.", nores:"Nessun luogo trovato.",
  oldt:"La carta dello Stato maggiore, rilevata tra il 1820 e il 1866, prima dei grandi lavori di Haussmann.", replay:"Rigioca il tracciato", copied:"Link copiato", lit:"I luoghi di quel periodo",
  appT:"Sul posto, lasciati guidare", appP:"Nell'app Horae 93, Parigi 93 ti porta a piedi da un luogo all'altro: itinerario dalla tua posizione, modalità passeggiata che vibra all'arrivo e le feste thelemiche dell'anno.", appB:"Scopri Horae 93",
  allt:"I 31 luoghi", alld:"I luoghi in cui Aleister Crowley visse, scrisse, praticò e festeggiò a Parigi, dal 1900 al 1929. Scegli un percorso per vederlo disegnarsi, o tocca un luogo.",
  abt:"Una mappa dei luoghi in cui Aleister Crowley visse, scrisse, praticò e festeggiò a Parigi tra il 1900 e il 1929: alberghi, templi, caffè e atelier, con ciò che vi accadde e ciò che ogni indirizzo è diventato.",
  ab2:"I luoghi e la loro storia provengono soprattutto dal libro di Tobias Churton, Aleister Crowley in Paris (Inner Traditions, 2022), completato dalla cronologia di Richard Kaczynski (Perdurabo, 2010), dal diario di Crowley e dalla stampa dell'epoca. Gli indirizzi incerti sono segnalati. La maggior parte dei luoghi è privata: si guardano dalla strada.",
  ab3:"Mappa: pianta, ortofoto e carta dello Stato maggiore © IGN. Percorsi a piedi: OpenStreetMap. Foto: Wikimedia Commons, con i loro autori e licenze.",
  ab4:"Un progetto dell'Oasi Parisii dell'Ordo Templi Orientis e dei suoi membri, realizzato da Frater Nachash, autore dell'app Horae 93."}
};
const APP_URL = "https://horae93.app", DON_URL = "https://buy.stripe.com/dRmbIT67g38n2a4buSdwc00";
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
  page:`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M9 13h6M9 17h4"/></svg>`,
  replay:`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12a8 8 0 1 0 2.4-5.7L4 8.5"/><path d="M4 4v4.5h4.5"/></svg>`
};
const S = {X:{}, XA:{}, PE:{}, person:null, lang:"fr", D:null, DS:{}, sec:"th", OQ:{}, mode:"all", tour:null, sel:null, ids:[], year:1899, play:0, base:"plan", mk:{}, lines:null, full:null, dot:null, raf:0, tok:0, mt:0, geo:{}, view:"list"};
let T = UI.fr;
const secT = () => S.sec==="op" ? T.secOp : T.secTh;
const yrs = () => S.D && S.D.yr ? S.D.yr[0]+"-"+S.D.yr[1] : T.yrs;
function pickLang(){
  const q = new URLSearchParams(location.search).get("l"); if (LANGS.includes(q)) return q;
  try { const s = localStorage.getItem("cap-lang"); if (LANGS.includes(s)) return s; } catch(e){}
  const n = (navigator.language||"fr").slice(0,2).toLowerCase(); return LANGS.includes(n) ? n : "en";
}
function toast(m){ const t = document.createElement("div"); t.className = "toast"; t.textContent = m; document.body.append(t); setTimeout(()=>t.remove(), 2600); }
const wide = () => innerWidth >= 900;

/* ---------- carte et fonds ---------- */
const PARIS = [[48.815, 2.25], [48.905, 2.42]];
const map = L.map("map", {minZoom:11, maxZoom:19, zoomSnap:.5, maxBounds:[[48.70,2.05],[49.00,2.65]], maxBoundsViscosity:.8, zoomControl:false}).fitBounds(PARIS); { const zf = ()=>map.getContainer().classList.toggle("zfar", map.getZoom() < 14.5); map.on("zoomend", zf); zf(); }
map.attributionControl.setPrefix(false);
const IGN = (layer, fmt) => `https://data.geopf.fr/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=${layer}&STYLE=normal&TILEMATRIXSET=PM&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&FORMAT=${fmt}`;
const BASES = {
  plan:{l:()=>L.tileLayer(IGN("GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2","image/png"), {minZoom:11, maxZoom:19, maxNativeZoom:18, attribution:"Plan IGN © IGN"}), th:"plan"},
  sat:{l:()=>L.tileLayer(IGN("ORTHOIMAGERY.ORTHOPHOTOS","image/jpeg"), {minZoom:11, maxZoom:19, maxNativeZoom:19, attribution:"Orthophotos © IGN"}), th:"sat"},
  old:{l:()=>L.tileLayer(IGN("GEOGRAPHICALGRIDSYSTEMS.ETATMAJOR40","image/jpeg"), {minZoom:11, maxZoom:19, maxNativeZoom:15, attribution:"Carte de l'état-major (1820-1866) © IGN"}), th:"old"}
};
let baseL = null;
let cmpL = null, cmpBar = null;
map.createPane("cmp"); map.getPane("cmp").style.zIndex = 250;
function cmpClip(){ if (!cmpL) return; const pane = map.getPane("cmp"), size = map.getSize(), x = S.cx * size.x, tl = map.containerPointToLayerPoint([0,0]);
  pane.style.clip = `rect(${tl.y}px, ${tl.x + x}px, ${tl.y + size.y}px, ${tl.x}px)`; if (cmpBar) cmpBar.style.left = x + "px"; }
function compare(on){
  if (cmpL){ cmpL.remove(); cmpL = null; } if (cmpBar){ cmpBar.remove(); cmpBar = null; } map.off("move zoom resize", cmpClip);
  if (!on) return;
  S.cx = S.cx || .5;
  cmpL = L.tileLayer(IGN("GEOGRAPHICALGRIDSYSTEMS.ETATMAJOR40","image/jpeg"), {pane:"cmp", minZoom:11, maxZoom:19, maxNativeZoom:15, attribution:"Carte de l'état-major (1820-1866) © IGN"}).addTo(map);
  cmpBar = document.createElement("div"); cmpBar.className = "cmpbar"; cmpBar.innerHTML = `<span><b>1820-1866</b><i>⟷</i><b>${new Date().getFullYear()}</b></span>`; map.getContainer().append(cmpBar);
  L.DomEvent.disableClickPropagation(cmpBar);
  const mv = e => { const r = map.getContainer().getBoundingClientRect(), cx = (e.touches ? e.touches[0].clientX : e.clientX) - r.left; S.cx = Math.max(.02, Math.min(.98, cx / r.width)); cmpClip(); };
  cmpBar.addEventListener("pointerdown", e=>{ e.preventDefault(); map.dragging.disable(); cmpBar.setPointerCapture(e.pointerId); cmpBar.onpointermove = mv; });
  const up = ()=>{ cmpBar.onpointermove = null; map.dragging.enable(); }; cmpBar.addEventListener("pointerup", up); cmpBar.addEventListener("pointercancel", up);
  map.on("move zoom resize", cmpClip); cmpClip(); toast(S.X.compareT);
}
function setBase(k){ if (baseL) baseL.remove(); S.base = k; const mc = map.getContainer(); ["plan","sat","old","cmp"].forEach(x=>mc.classList.toggle("b-"+x, x===k)); compare(k==="cmp"); baseL = BASES[k==="cmp" ? "plan" : k].l().addTo(map); baseL.bringToBack(); if (k==="old") toast(T.oldt); layersUI(); }
const thumb = k => IGN(k==="plan"?"GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2":k==="sat"?"ORTHOIMAGERY.ORTHOPHOTOS":"GEOGRAPHICALGRIDSYSTEMS.ETATMAJOR40", k==="plan"?"image/png":"image/jpeg").replace("{z}","14").replace("{y}","5636").replace("{x}","8299");
function layersUI(){ document.querySelectorAll("#basesw [data-bs]").forEach(b=>b.classList.toggle("on", S.base===b.dataset.bs)); const box = $("#layers"); box.innerHTML = ["plan","sat","old","cmp"].map(k=>`<button type="button" data-b="${k}" class="${S.base===k?"on":""}"><i style="background-image:${k==="cmp" ? `linear-gradient(90deg,transparent 50%,#fff 50%,#fff 52%,transparent 52%),url('${thumb("old")}')` : `url('${thumb(k)}')`}"></i>${esc(k==="cmp" ? S.X.compare : T[k])}</button>`).join("");
  box.querySelectorAll("[data-b]").forEach(b=>b.onclick=()=>{ setBase(b.dataset.b); box.hidden = true; }); }
const LG = L.layerGroup().addTo(map);
map.on("zoomstart", ()=>map.getContainer().classList.add("zooming"));
map.on("zoomend", ()=>setTimeout(()=>map.getContainer().classList.remove("zooming"), 30));
map.on("movestart", stopDraw);
function pad(){ const top = ($(".bar")||{}).offsetHeight || 110;
  if (wide()) return {l: (+getComputedStyle(document.documentElement).getPropertyValue("--pw").replace("px","")||408) + 40, t:140, r:190, b:100};
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
  const [a, b] = await Promise.all([fetch(`data/${lang}.json`), fetch(`data/op-${lang}.json`)]); if (!a.ok) throw new Error("data");
  S.DS = {th: await a.json(), op: b.ok ? await b.json() : null}; if (!S.DS.op) S.sec = "th"; S.D = S.DS[S.sec]; S.lang = lang; T = UI[lang];
  document.documentElement.lang = lang; $("#lang").value = lang;
  document.querySelectorAll("[data-i]").forEach(e=>{ e.textContent = T[e.dataset.i]; });
  document.querySelectorAll("[data-ia]").forEach(e=>e.setAttribute("aria-label", T[e.dataset.ia]));
  document.querySelectorAll("[data-ph]").forEach(e=>e.setAttribute("placeholder", T[e.dataset.ph]));
  document.title = `${T.site} · ${T.title}`;
  try { localStorage.setItem("cap-lang", lang); } catch(e){}
  geoRefine();
}
const P = id => S.D.places[id];
const tourOf = id => S.D.tours.find(t=>t.id===id);
const yearOf = p => { const m = String(p.d||"").match(/1[89]\d\d/); return m ? +m[0] : null; };
const nowBadge = p => p.st ? `<span class="now n-${p.st}"><i></i>${esc(S.D.nowl[p.st]||"")}</span>` : "";
const allIds = () => Object.keys(S.D.places).sort((a,b)=>P(a).n-P(b).n);

/* adresses du Paris occulte : position affinée par le géocodeur de l'IGN (sauf tombes et monuments), gardée en mémoire */
let GEOF = null;
function geoRefine(){
  const O = S.DS.op; if (!O) return; let C = {}; try { C = JSON.parse(localStorage.getItem("cap-geo")||"{}"); } catch(e){}
  const put = (id, ll)=>{ const p = O.places[id]; if (!p || !ll) return; p.lat = ll[0]; p.lon = ll[1]; const m = S.sec==="op" && S.mk[id]; if (m) m.setLatLng(ll); };
  Object.keys(C).forEach(id=>put(id, C[id]));
  if (GEOF) return; GEOF = 1;
  const todo = Object.entries(O.places).filter(([id,p])=>!C[id] && !["tombe","culte"].includes(p.k) && /^\d/.test(p.ad));
  let i = 0; const next = ()=>{ if (i >= todo.length) return; const [id,p] = todo[i++];
    fetch("https://data.geopf.fr/geocodage/search?limit=1&index=address&q="+encodeURIComponent(p.ad)).then(r=>r.ok ? r.json() : null).then(j=>{
      const f = j && j.features && j.features[0]; if (!f) return; const pr = f.properties||{}, [lon,lat] = f.geometry.coordinates;
      if ((pr.score||0) < .7 || !String(pr.citycode||"").startsWith("75") || pr.type!=="housenumber") return;
      if (map.distance([lat,lon],[p.lat,p.lon]) > 700) return;
      C[id] = [+lat.toFixed(5), +lon.toFixed(5)]; try { localStorage.setItem("cap-geo", JSON.stringify(C)); } catch(e){} put(id, C[id]); })
      .catch(()=>{}).finally(()=>setTimeout(next, 120)); };
  next();
}


/* portraits : ceux fournis (img/), sinon l'image de tête de Wikipédia si sa licence est libre */
const PIMG = {o_naglowska:"img/p-naglowska.jpg", o_courriere:"img/p-courriere.jpg", kasimira:"img/p-kasimira.jpg", o_chamuel:"img/p-chamuel.jpg", wolfe:"img/p-wolfe.jpg", haweis:"img/p-haweis.jpg", germer:"img/p-germer.jpg", regardie:"img/p-regardie.jpg", o_bailly:"img/p-bailly.jpg", crowley:"img/p-crowley.jpg", olsen:"img/p-olsen.jpg", papus:"img/p-papus.jpg", o_papus:"img/p-papus.jpg", o_levi:"img/p-levi.jpg", rodin:"img/p-rodin.jpg", gkelly:"img/p-gkelly.jpg", yorke:"img/p-yorke.jpg", hirsig:"img/p-hirsig.jpg", moina:"img/p-moina.jpg", rose:"img/p-rose.jpg", mathers:"img/p-mathers.jpg", wilde:"img/p-wilde.jpg", neuburg:"img/p-neuburg.jpg", maugham:"img/p-maugham.jpg", o_moreau:"img/p-moreau.jpg", o_peladan:"img/p-peladan.jpg", o_doinel:"img/p-doinel.jpg", o_lacuria:"img/p-lacuria.jpg", o_caithness:"img/p-caithness.jpg", o_mallarme:"img/p-mallarme.jpg", o_satie:"img/p-satie.jpg", o_guaita:"img/p-guaita.jpg", o_michelet:"img/p-michelet.jpg", o_mathers:"img/p-mathers.jpg", o_moina:"img/p-moina.jpg"};
const PWIKI = {mathers:"Samuel Liddell MacGregor Mathers", o_mathers:"Samuel Liddell MacGregor Mathers", moina:"Moina Mathers", o_moina:"Moina Mathers", rose:"Rose Edith Kelly", gkelly:"Gerald Kelly", rodin:"Auguste Rodin", o_moreau:"Gustave Moreau",
  maugham:"W. Somerset Maugham", neuburg:"Victor Benjamin Neuburg", hirsig:"Leah Hirsig", yorke:"Gerald Yorke", wilde:"Oscar Wilde", o_guaita:"Stanislas de Guaita", o_peladan:"Joséphin Péladan", o_satie:"Erik Satie",
  o_bailly:"fr:Edmond Bailly", o_caithness:"Marie, Countess of Caithness", o_lacuria:"fr:Paul-François-Gaspard Lacuria", o_mallarme:"Stéphane Mallarmé", o_doinel:"Jules Doinel", o_michelet:"fr:Victor-Émile Michelet",
  bennett:"Arnold Bennett", regardie:"Israel Regardie", manray_p:"Man Ray", epstein:"Jacob Epstein", abbott:"Berenice Abbott", haweis:"Stephen Haweis", beach:"Sylvia Beach", wolfe:"Jane Wolfe (actress)", germer:"Karl Germer",
  o_ranson:"Paul Ranson", o_debussy:"Claude Debussy", o_chamuel:"fr:Lucien Chamuel", o_gauguin:"Paul Gauguin", o_huysmans:"Joris-Karl Huysmans", o_salis:"Rodolphe Salis", o_rochefoucauld:"fr:Antoine de La Rochefoucauld", o_taxil:"Léo Taxil", o_bois:"fr:Jules Bois", o_wirth:"Oswald Wirth", o_villiers:"Auguste Villiers de l'Isle-Adam", o_saintyves:"Alexandre Saint-Yves d'Alveydre"};
let PCACHE = {}; try { PCACHE = JSON.parse(localStorage.getItem("cap-pimg")||"{}"); } catch(e){}
const PPEND = {};
function portrait(id){
  if (PIMG[id]) return Promise.resolve({u:PIMG[id]});
  if (PCACHE[id] !== undefined) return Promise.resolve(PCACHE[id]);
  if (PPEND[id]) return PPEND[id];
  const t = PWIKI[id]; if (!t) return Promise.resolve(null);
  const [wk, title] = t.startsWith("fr:") ? ["fr", t.slice(3)] : ["en", t];
  return PPEND[id] = fetch(`https://${wk}.wikipedia.org/w/api.php?origin=*&format=json&action=query&prop=pageimages&piprop=name|thumbnail&pithumbsize=200&redirects=1&titles=${encodeURIComponent(title)}`).then(r=>r.json()).then(j=>{
      const pg = Object.values((j.query||{}).pages||{})[0]||{}; if (!pg.pageimage || !pg.thumbnail) return null;
      return fetch(`https://commons.wikimedia.org/w/api.php?origin=*&format=json&action=query&prop=imageinfo&iiprop=extmetadata&titles=File:${encodeURIComponent(pg.pageimage)}`).then(r=>r.json()).then(k=>{
        const ii = ((Object.values((k.query||{}).pages||{})[0]||{}).imageinfo||[])[0]; const m = (ii||{}).extmetadata||{}, lic = strip((m.LicenseShortName||{}).value);
        if (!ii || !/public domain|^pd|cc0|cc[ -]by/i.test(lic)) return null;
        return {u:pg.thumbnail.source, a:strip((m.Artist||{}).value), l:lic, p:`https://commons.wikimedia.org/wiki/File:${encodeURIComponent(pg.pageimage)}`}; }); })
    .catch(()=>null).then(v=>{ PCACHE[id] = v; try { localStorage.setItem("cap-pimg", JSON.stringify(PCACHE)); } catch(e){} return v; });
}
function paintPortraits(root){ (root||document).querySelectorAll(".sph[data-ph]").forEach(el=>{ const id = el.dataset.ph; portrait(id).then(v=>{ if (!v || !v.u) return; const im = new Image(); im.onload = ()=>{ el.style.backgroundImage = `url("${v.u}")`; el.classList.add("img"); }; im.src = v.u; }); }); }
/* ---------- personnages (sphères à droite) ---------- */
const initials = n => String(n).replace(/\(.*?\)/g,"").split(/[\s-]+/).filter(w=>/^[A-ZÀ-Ý]/.test(w)).slice(0,2).map(w=>w[0]).join("") || String(n)[0];
const peopleOf = () => ((S.PE[S.lang]||S.PE.fr||{})[S.sec]) || [];
const PLBL = {o_naglowska:"M. de Naglowska", o_courriere:"B. de Courrière", manray_p:"Man Ray", kasimira:"K. Bass", o_villiers:"Villiers", o_saintyves:"Saint-Yves", o_rochefoucauld:"A. de La Rochefoucauld", o_huysmans:"J.-K. Huysmans", o_chamuel:"L. Chamuel", o_taxil:"L. Taxil", mathers:"S. L. Mathers", o_mathers:"S. L. Mathers", maugham:"W. S. Maugham", o_guaita:"S. de Guaita", o_lacuria:"Abbé Lacuria", o_caithness:"Lady Caithness", o_michelet:"V.-É. Michelet", o_levi:"É. Lévi"};
function pLabel(pp){ if (PLBL[pp.id]) return PLBL[pp.id]; const w = pp.n.replace(/\s*\(.*?\)/,"").trim().split(/\s+/); return w.length < 2 ? w[0] : w[0][0] + ". " + w[w.length-1]; }
function pplHtml(){ return peopleOf().map(pp=>`<button class="pchip" type="button" data-pp="${pp.id}" title="${esc(pp.n)}"><span class="sph${S.person && S.person.id===pp.id ? " on" : ""}" data-ph="${pp.id}">${esc(initials(pp.n))}</span><span>${esc(pLabel(pp))}</span></button>`).join(""); }
function renderPeople(){ const box = $("#ppl"); if (box){ box.innerHTML = `<h4>${esc(T.pplT)}</h4>` + pplHtml(); box.querySelectorAll("[data-pp]").forEach(b=>b.onclick=()=>personOpen(b.dataset.pp)); paintPortraits(box); } }
function personOpen(id){
  const pp = peopleOf().find(x=>x.id===id); if (!pp) return;
  const o = $("#pov"); const at = pp.at.filter(x=>P(x));
  o.innerHTML = `<div class="povc" role="dialog" aria-modal="true" aria-label="${esc(pp.n)}"><div class="povh"><span class="sph big" data-ph="${pp.id}">${esc(initials(pp.n))}</span><div><b>${esc(pp.n)}</b><small>${esc(pp.y||"")}</small></div><button class="x" type="button" data-x aria-label="${esc(T.back)}">✕</button></div>
    ${(pp.h||[]).map(x=>`<p>${esc(x)}</p>`).join("")}
    <h3 style="margin-top:14px">${esc(T.pplAt)}</h3><ul class="lst">${at.map(rowHtml).join("")}</ul>
    <div class="row2" style="margin-top:12px"><button class="btn" type="button" data-go>${esc(T.pplGo)}</button></div></div>`;
  o.hidden = false; paintPortraits(o);
  portrait(pp.id).then(v=>{ if (v && v.a !== undefined && o.querySelector(".povc")){ const c = document.createElement("p"); c.className = "meta"; c.style.fontSize = ".75rem"; c.innerHTML = `<a href="${esc(v.p)}" target="_blank" rel="noopener">${esc(v.a||"Wikimedia Commons")}</a> · ${esc(v.l)}`; o.querySelector(".povh").after(c); } });
  const close = ()=>{ o.hidden = true; o.innerHTML = ""; };
  o.onclick = e=>{ if (e.target===o) close(); }; o.querySelector("[data-x]").onclick = close;
  o.querySelectorAll("[data-p]").forEach(b=>b.onclick=()=>{ close(); S.person = pp; setMode("person"); openPlace(b.dataset.p, true); });
  o.querySelector("[data-go]").onclick = ()=>{ close(); };
  S.person = pp; setMode("person");
}
/* ---------- chronologie permanente (bas de la carte, sur grand écran) ---------- */
function renderChrono(){
  const c = $("#chrono"); if (!c || !S.D) return; const [y0, y1] = S.D.yr; if (S.year < y0 || S.year > y1) S.year = y0;
  c.innerHTML = `<button class="cp" id="cp" type="button" aria-label="${esc(T.chronoT)}">${S.play ? "❚❚" : "▶"}</button><span class="cy" id="cyv">${S.year}</span><div class="cm"><input type="range" id="cyr" min="${y0}" max="${y1}" step="1" value="${S.year}" aria-label="${esc(T.chronoT)}"><div class="ce" id="ce">${esc(T.chronoT)} · ${y0}-${y1}</div></div>`;
  $("#cyr").oninput = e=>{ const v = +e.target.value; if (S.mode!=="frise"){ S.year = v; setMode("frise", null, true, true); } playY(false); year(v); };
  $("#cp").onclick = ()=>{ if (S.mode!=="frise") setMode("frise", null, true, true); playY(!S.play); };
}
/* ---------- livres ---------- */
function renderBooks(){
  const b = $("#booksPn"); if (!b) return; const amz = (S.X.lk||[])[5] || "amazon.fr";
  const card = (id, t, sub, img, cls) => `<a class="bkc" href="https://www.${amz}/dp/${id}" target="_blank" rel="noopener"><span class="cov ${cls}" style="background-image:url('img/${img}'), linear-gradient(160deg,${cls ? "#e3384a" : "#2f55e0"},#0a1533)">${esc(t)}</span><span><b>${esc(t)}</b><small>${esc(sub)}</small><span class="btn">${esc(T.amz)}</span></span></a>`;
  b.innerHTML = `<h3 style="margin:0 0 6px">${esc(T.booksT)}</h3>` + card("1644114798", "Aleister Crowley in Paris", "Inner Traditions, 2022", "livre-crowley-in-paris.jpg", "") + card("162055545X", "Occult Paris", "Inner Traditions, 2016", "livre-occult-paris.jpg", "op");
}
const SRCT = {fr:"La source de ces informations",en:"The source of this information",es:"La fuente de esta información",de:"Die Quelle dieser Angaben",it:"La fonte di queste informazioni"};
function renderSrc(){
  const a = $("#srcbk"); if (!a) return; const amz = (S.X.lk||[])[5] || "amazon.fr"; const op = S.sec === "op";
  const [id, t, y, img] = op ? ["162055545X","Occult Paris","2016","livre-occult-paris.jpg"] : ["1644114798","Aleister Crowley in Paris","2022","livre-crowley-in-paris.jpg"];
  a.href = `https://www.${amz}/dp/${id}`;
  a.innerHTML = `<span class="cov${op?" op":""}" style="background-image:url('img/${img}'), linear-gradient(160deg,${op?"#e3384a":"#2f55e0"},#0a1533)">${op?"":esc(t)}</span><span><small>${esc(SRCT[S.lang]||SRCT.fr)}</small><b>${esc(t)}</b><i>Tobias Churton · ${y}</i></span>`;
}
/* ---------- puces ---------- */
function chips(){
  renderSrc();
  const c = $("#chips");
  const sw = $("#secsw"); if (sw){ sw.innerHTML = [["th",T.secTh],["op",T.secOp]].map(([k,l])=>`<button type="button" data-sec="${k}" class="${S.sec===k?"on":""}">${esc(l)}</button>`).join("");
    sw.querySelectorAll("[data-sec]").forEach(b=>b.onclick=()=>setSec(b.dataset.sec)); }
  c.innerHTML = `<button class="chip${S.mode==="all"?" on":""}" data-all>${esc(T.all)}</button>`
    + S.D.tours.map(t=>`<button class="chip${S.mode==="tour" && S.tour===t.id?" on":""}" data-t="${t.id}">${esc(t.t)}</button>`).join("")
    + `<button class="chip${S.mode==="frise"?" on":""}" data-f>${esc(T.frise.replace(/\d{4}-\d{4}/, yrs()))}</button>`;
  c.querySelectorAll("[data-t]").forEach(b=>b.onclick=()=>{ setMode("tour", b.dataset.t); b.scrollIntoView({inline:"center", block:"nearest", behavior:"smooth"}); });
  c.querySelector("[data-all]").onclick = ()=>setMode("all");
  c.querySelector("[data-f]").onclick = ()=>setMode("frise");
}

/* ---------- modes ---------- */
function markers(ids, cls){
  LG.clearLayers(); S.mk = {}; S.lines = null; S.full = null;
  ids.forEach((id, i)=>{ const p = P(id);
    const who = peopleOf().filter(pp=>pp.id!=="crowley" && pp.at.includes(id)), shown = who.slice(0,3), more = who.length - shown.length;
    const faces = who.length ? `<i class="mkf">${shown.map(pp=>`<b class="sph" data-ph="${pp.id}" title="${esc(pp.n)}">${esc(initials(pp.n))}</b>`).join("")}${more>0?`<b class="mkm">+${more}</b>`:""}</i>` : "";
    const m = L.marker([p.lat, p.lon], {icon:L.divIcon({className:"mk"+(cls?" "+cls:""), html:`<span style="--d:${Math.min(i*0.035, 1.2).toFixed(3)}s">${p.n}</span>${faces.replace('<i class="mkf"', `<i class="mkf" style="--d:${Math.min(i*0.035, 1.2).toFixed(3)}s"`)}`, iconSize:[32,32], iconAnchor:[16,16]}), title:p.nm, alt:p.nm, keyboard:true, riseOnHover:true}).addTo(LG);
    if (who.length) setTimeout(()=>{ const el = m.getElement(); if (el) paintPortraits(el); }, 0);
    m.on("click", ()=>{ if (S.mode==="frise" && m.getElement().classList.contains("dim")) return; openPlace(id, true); }); S.mk[id] = m; });
}
function setSec(k, quiet){ if (!S.DS[k] || (S.sec===k && !quiet)) return; S.sec = k; S.D = S.DS[k]; S.tour = null; S.year = S.D.yr[0]; renderChrono(); setMode("all", null, quiet); }
function setMode(mode, tour, quiet, keepView){
  stopDraw(); clearInterval(S.play); S.play = 0; S.mt++;
  if (mode!=="person") S.person = null;
  S.mode = mode; if (tour) S.tour = tour; if (mode==="tour" && !tourOf(S.tour)) S.tour = S.D.tours[0].id; S.sel = null; chips(); renderPeople();
  if (mode==="person"){ const pp = S.person, at = pp.at.filter(x=>P(x)); markers(allIds(), "dim"); S.ids = at;
    at.forEach(id=>{ const e = S.mk[id] && S.mk[id].getElement(); if (e){ e.classList.remove("dim"); e.classList.add("pop","lit2"); } S.mk[id] && S.mk[id].setZIndexOffset(900); });
    listView(); if (at.length) fitPts(at.map(id=>[P(id).lat, P(id).lon]), 16); sheet(1); hash(); return; }
  if (mode==="frise"){ markers(allIds(), "dim"); S.ids = allIds(); friseView(); fitPts(S.ids.map(id=>[P(id).lat, P(id).lon]), 14.5); sheet(1); if (!keepView) setTimeout(()=>{ year(S.year >= S.D.yr[1] || S.year < S.D.yr[0] ? S.D.yr[0] : S.year); playY(true); }, 500); else year(S.year); hash(); return; }
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
  const tour = S.mode==="tour" ? tourOf(S.tour) : null, pp = S.mode==="person" ? S.person : null;
  const pr = peopleOf().length ? `<div class="sec prow-sec"><h3>${esc(T.pplT)}</h3><div class="prow inpanel">${pplHtml()}</div></div>` : "";
  const head = pp ? `<div class="sec"><span class="kick">${esc(T.pplS)}</span><h1>${esc(pp.n)}</h1><p class="meta">${esc(pp.y||"")}</p><p style="margin:6px 0 0">${esc((pp.h||[""])[0])}</p><div class="row2" style="margin-top:10px"><button class="btn o" type="button" data-pclr>${esc(T.back)}</button></div></div>` : tour ? `<div class="sec"><span class="kick">${esc(secT())} · ${esc(T.places(tour.r.length))}</span><h1>${esc(tour.t)}</h1><p>${esc(tour.d)}</p><p class="meta">${esc(tour.m)}</p>
      <div class="row2" style="margin-top:12px"><button class="btn o" type="button" data-rp>${esc(T.replay)}</button></div></div>`
    : `<div class="sec"><span class="kick">${esc(yrs())}</span><h1>${esc(S.sec==="op" ? T.secOp : T.allt)}</h1><p style="margin:0">${esc(S.sec==="op" ? T.oalld : T.alld)}</p></div>`;
  const box = pnSet(head + `<ul class="lst">${S.ids.map(rowHtml).join("")}</ul>` + (pp ? "" : pr) + explore() + links() + cta());
  bindRows(box);
  box.querySelectorAll(".inpanel [data-pp]").forEach(b=>b.onclick=()=>personOpen(b.dataset.pp)); paintPortraits(box);
  const pc = box.querySelector("[data-pclr]"); if (pc) pc.onclick = ()=>setMode("all");
  const rp = box.querySelector("[data-rp]"); if (rp) rp.onclick = ()=>{ const T0 = tourOf(S.tour); fitPts(T0.r.map(id=>[P(id).lat, P(id).lon]), 16.5); map.once("moveend", ()=>geo(T0).then(g=>draw(g && g.length>1 ? g : T0.r.map(id=>[P(id).lat, P(id).lon])))); };
}
const PG = p => `${S.lang}/${p}`;
function explore(){ const X = S.X, tour = S.mode==="tour" ? tourOf(S.tour) : null;
  const a = (h, t, d) => `<li><a href="${h}"><b>${esc(t)}</b>${d ? `<small>${esc(d)}</small>` : ""}</a></li>`;
  return `<div class="sec"><h3>${esc(X.more)}</h3><ul class="xl">${tour ? a(PG(`parcours/${tour.id}.html`), X.tourPage, X.print) : ""}${a(PG("lieux/"), X.placesAll, X.placesIntro)}${a(PG("personnages.html"), X.people, X.peopleIntro)}${a(PG("chronologie.html"), X.chrono, X.chronoIntro)}${a(PG("bibliographie.html"), X.biblio, X.biblioIntro)}</ul></div>`; }
function links(){ const k = S.X.lk; if (!k) return ""; const [t, app, oasis, oto, book, amz] = k, a = (h, x, d) => `<li><a href="${h}" target="_blank" rel="noopener"><b>${esc(x)}</b>${d ? `<small>${esc(d)}</small>` : ""}</a></li>`;
  return `<div class="sec"><h3>${esc(S.X.books||"")}</h3><ul class="xl">${a(`https://www.${amz}/dp/1644114798`, "Aleister Crowley in Paris", "Tobias Churton · Inner Traditions, 2022")}${a(`https://www.${amz}/dp/162055545X`, "Occult Paris: The Lost Magic of the Belle Époque", "Tobias Churton · Inner Traditions, 2016")}</ul></div>`; }
function cta(){ return `<a class="cta cta2" href="${APP_URL}" target="_blank" rel="noopener"><img src="img/l-horae.png" alt="Horae 93" width="56" height="56"><span><b>${esc(T.appT)}</b><p>${esc(T.appP)}</p></span></a>`; }
function openPlace(id, fly){
  const p = P(id), H = S.D.hist[id] || {h:[], src:[]}; if (!p) return;
  stopDraw(); S.sel = id; S.view = "place"; highlight(id);
  const box = pnSet(`<button class="back" type="button" data-back>${IC.back} ${esc(T.back)}</button>
    <div class="hero" id="hero" hidden></div>
    <div class="sec"><span class="kick">${esc(S.D.kinds[p.k]||"")} · ${esc(p.d)}</span><h2>${esc(p.nm)}</h2>
      <div class="tags" style="margin-top:6px">${nowBadge(p)}${p.w?`<span class="tag w">${esc(T.check)}</span>`:""}</div></div>
    <div class="acts"><button class="act p" type="button" data-z><span>${IC.zoom}</span>${esc(T.see)}</button>
      <button class="act" type="button" data-s><span>${IC.share}</span>${esc(T.share)}</button>
      <a class="act" href="${PG(`lieux/${id}.html`)}"><span>${IC.page}</span>${esc(S.X.placePage)}</a>
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
    ${(()=>{ const who = peopleOf().filter(x=>x.at.includes(id) && x.id!==id); return who.length ? `<div class="sec"><h3>${esc(S.X.people)}</h3><div class="prow">${who.map(x=>`<button class="pchip" type="button" data-pp="${x.id}"><span class="sph" data-ph="${x.id}">${esc(initials(x.n))}</span><span>${esc(pLabel(x))}</span></button>`).join("")}</div></div>` : ""; })()}
    ${cta()}`);
  box.querySelector("[data-back]").onclick = ()=>{ S.sel = null; if (S.mode==="frise") friseView(); else listView(); hash(); };
  box.querySelector("[data-s]").onclick = ()=>share(id);
  box.querySelectorAll("[data-pp]").forEach(b=>b.onclick=()=>personOpen(b.dataset.pp)); paintPortraits(box);
  box.querySelector("[data-z]").onclick = ()=>{ map.flyTo([p.lat, p.lon], 18, {duration:1}); sheet(0); };
  if (fly) centerOn(p);
  sheet(1); hash();
  photosNow(id); photosOld(id);
}
function centerOn(p){ const z = Math.max(map.getZoom(), 16.5), pd = pad(); const pt = map.project([p.lat, p.lon], z).add([-(pd.l - pd.r)/2, (pd.b - pd.t)/2]); map.flyTo(map.unproject(pt, z), z, {duration:1}); }
function friseView(){
  S.view = "frise";
  const [y0, y1] = S.D.yr, tk = [y0, Math.round(y0+(y1-y0)/3), Math.round(y0+2*(y1-y0)/3), y1];
  pnSet(`<div class="sec"><span class="kick">${esc(secT())}</span><div class="yr"><b id="yv">${S.year}</b><button class="btn" type="button" id="yp">▶</button></div>
    <input type="range" id="yr" min="${y0}" max="${y1}" step="1" value="${S.year}" aria-label="${esc(T.frise)}"><div class="ticks">${tk.map(x=>`<span>${x}</span>`).join("")}</div>
    <div id="ev" style="margin-top:12px"></div></div><div class="sec" style="padding-bottom:4px"><h3>${esc(T.lit)}</h3></div><ul class="lst" id="litL"></ul>${cta()}`);
  $("#yr").oninput = e=>{ playY(false); year(+e.target.value); };
  $("#yp").onclick = ()=>playY(!S.play);
  year(S.year);
}
function playY(on){ clearInterval(S.play); S.play = 0; const b = $("#yp"), cb = $("#cp"); if (b) b.textContent = on ? "❚❚" : "▶"; if (cb) cb.textContent = on ? "❚❚" : "▶"; if (!on) return;
  if (S.year >= S.D.yr[1]) year(S.D.yr[0]);
  S.play = setInterval(()=>{ if (S.mode!=="frise" || S.year >= S.D.yr[1]){ playY(false); return; } year(S.year + 1); }, S.sec==="op" ? 420 : 500); }
function year(y){
  S.year = y; const r = $("#yr"), v = $("#yv"); if (r) r.value = y; if (v) v.textContent = y;
  const cr = $("#cyr"), cv = $("#cyv"), ce = $("#ce"); if (cr) cr.value = y; if (cv) cv.textContent = y;
  if (ce){ const tl0 = S.D.tl.filter(([yy])=>+String(yy).slice(0,4) <= y), l0 = tl0[tl0.length-1]; ce.textContent = l0 ? `${l0[0]} · ${l0[1]}` : T.before; }
  const lit = [];
  Object.entries(S.mk).forEach(([id,m])=>{ const yy = yearOf(P(id)), on = yy!=null ? yy <= y : y >= S.D.yr[1], e = m.getElement(); if (on) lit.push(id); if (!e) return;
    const was = !e.classList.contains("dim"); e.classList.toggle("dim", !on); if (on && !was){ e.classList.remove("pop"); void e.offsetWidth; e.classList.add("pop"); } });
  if (S.view!=="frise") return;
  const tl = S.D.tl.filter(([yy])=>+String(yy).slice(0,4) <= y), last = tl[tl.length-1];
  $("#ev").innerHTML = `<span class="kick">${y} · ${esc(T.places(lit.length))}</span><p style="margin:6px 0 0">${last ? `<b>${esc(String(last[0]))}</b> · ${esc(last[1])}` : esc(T.before)}</p><p class="meta" style="margin-top:6px">${esc(T.tap)}</p>`;
  const L0 = $("#litL"); if (L0){ L0.innerHTML = lit.sort((a,b)=>(yearOf(P(b))||0)-(yearOf(P(a))||0)).map(rowHtml).join(""); bindRows(L0); }
}
function about(){
  S.view = "about";
  const box = pnSet(`<button class="back" type="button" data-back>${IC.back} ${esc(T.back)}</button><div class="sec"><span class="kick">${esc(T.secTh)} · ${esc(T.secOp)}</span><h1>${esc(T.site)}</h1>
    <p>${esc(T.oabt)}</p><p>${esc(T.ab2)}</p><p class="meta">${esc(T.ab3)}</p><p class="meta" style="margin-top:8px">${esc(T.ab4)}</p><div class="row" style="display:flex;gap:8px;flex-wrap:wrap;margin-top:12px"><button class="btn" type="button" data-wl>${esc(({fr:"Revoir la présentation",en:"See the introduction",es:"Ver la presentación",de:"Einführung ansehen",it:"Rivedi la presentazione"})[S.lang]||"Revoir la présentation")}</button><button class="btn" type="button" data-tr>${esc(({fr:"Visite guidée",en:"Guided tour",es:"Visita guiada",de:"Geführte Tour",it:"Visita guidata"})[S.lang]||"Visite guidée")}</button></div></div>${links()}${cta()}`);
  box.querySelector("[data-wl]").onclick = ()=>window.tmWelcome && tmWelcome();
  box.querySelector("[data-tr]").onclick = ()=>window.tmTour && tmTour();
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
const LPH = {papus:"img/t-papus.jpg", o_papus_tombe:"img/t-papus.jpg"};
const PQ = {wilde:"Oscar Wilde tomb Epstein Père Lachaise", papus:"Papus Gérard Encausse grave Père-Lachaise", o_papus_tombe:"Papus Gérard Encausse grave Père-Lachaise", o_peladan_tombe:"Joséphin Péladan grave", molay:"Plaque Jacques de Molay Vert-Galant"};
function photosNow(id){
  const done = l=>{ gal($("#galN"), l, T.nophoto); const h = $("#hero"), f = l[0]; if (h && f && S.sel===id){ h.style.backgroundImage = `url("${f.thumb}")`; h.hidden = false; } };
  if (PH[id]) return done(PH[id]); const p = P(id);
  const q = PQ[id] ? `generator=search&gsrnamespace=6&gsrlimit=12&gsrsearch=${encodeURIComponent(PQ[id]+" filetype:bitmap")}` : `generator=geosearch&ggscoord=${p.lat}%7C${p.lon}&ggsradius=${p.k==="tombe"||p.k==="fete" ? 12 : 80}&ggsnamespace=6&ggslimit=20`;
  const loc = LPH[id] ? [{thumb:LPH[id], page:LPH[id], mime:"image/jpeg", author:"Thelemic Map Paris", lic:"", yr:0}] : [];
  commons(q).then(l=>{ PH[id] = loc.concat(PQ[id] ? l.sort((a,b)=>a.idx-b.idx) : l).slice(0,10); done(PH[id]); }).catch(()=>{ PH[id] = loc; done(loc); });
}
function photosOld(id){
  const q = S.OQ[id] || (id.startsWith("o_") ? String((S.DS.op.places[id]||{}).oq||"") : ""); if (!q){ gal($("#galO"), [], T.noold); return; }
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
  const under = L.polyline([pts[0]], {color:"#0a1533", weight:9, opacity:.9, interactive:false, lineCap:"round", lineJoin:"round"}).addTo(LG);
  const line = L.polyline([pts[0]], {color:"#f8c4cc", weight:4, opacity:1, interactive:false, lineCap:"round", lineJoin:"round"}).addTo(LG);
  S.lines = [under, line]; S.full = pts; under.bringToBack();
  if (matchMedia("(prefers-reduced-motion: reduce)").matches){ under.setLatLngs(pts); line.setLatLngs(pts); return; }
  const seg = [0]; for (let i=1;i<pts.length;i++) seg.push(seg[i-1] + map.distance(pts[i-1], pts[i]));
  const tot = seg[seg.length-1] || 1, DUR = Math.min(6000, Math.max(2600, tot*1.1));
  const dot = L.circleMarker(pts[0], {radius:6, color:"#0a1533", weight:3, opacity:1, fillColor:"#ffffff", fillOpacity:1, className:"dotc", interactive:false}).addTo(LG); S.dot = dot;
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
  const hit = []; ["th","op"].forEach(sc=>{ const D = S.DS[sc]; if (!D) return; Object.keys(D.places).sort((a,b)=>D.places[a].n-D.places[b].n).forEach(id=>{ const p = D.places[id], H = D.hist[id]; if ([p.nm, p.ad, p.d, p.tx, D.kinds[p.k], H && H.h && H.h.join(" ")].some(x=>norm(x).includes(q))) hit.push([sc,id]); }); });
  const PX = id => (S.DS[id.startsWith("o_") ? "op" : "th"]||{places:{}}).places[id];
  res.innerHTML = hit.length ? hit.slice(0, 10).map(([sc,id])=>{ const p = PX(id); return `<button type="button" data-p="${id}"><span class="n">${p.n}</span><span><b>${esc(p.nm)}</b><small>${esc(p.ad)} · ${esc(p.d)}</small></span></button>`; }).join("") : `<p class="none">${esc(T.nores)}</p>`;
  res.hidden = false;
  res.querySelectorAll("[data-p]").forEach(b=>b.onclick=()=>{ res.hidden = true; $("#q").value = ""; $("#q").blur(); const id = b.dataset.p, sc = id.startsWith("o_") ? "op" : "th"; if (sc!==S.sec) setSec(sc, true); else if (S.mode!=="all" && !S.ids.includes(id)) setMode("all", null, true); openPlace(id, true); });
}

/* ---------- partage, adresse de la page ---------- */
function share(id){
  const dir = location.pathname.replace(/[^/]*$/, ""), p = P(id), url = `${location.origin}${dir}${S.lang}/lieux/${id}.html`;
  if (navigator.share){ navigator.share({title:`${p.nm} · ${T.title}`, url}).catch(()=>{}); return; }
  (navigator.clipboard ? navigator.clipboard.writeText(url) : Promise.reject()).then(()=>toast(T.copied)).catch(()=>prompt("", url));
}
function hash(){ const h = (S.sec==="op" ? "s=op&" : "") + (S.mode==="tour" ? "t="+S.tour : S.mode==="frise" ? "frise" : ""); const s = S.sel ? (h ? h+"&" : "")+"p="+S.sel : h; history.replaceState(null, "", location.pathname + location.search + (s ? "#"+s : "")); }

/* ---------- démarrage ---------- */
(async function start(){
  try { await load(pickLang()); } catch(e){ await load("fr"); }
  try { S.OQ = await (await fetch("data/oldq.json")).json(); } catch(e){}
  try { S.PE = await (await fetch("data/people.json")).json(); } catch(e){ S.PE = {}; }
  try { S.XA = await (await fetch("data/ui.json")).json(); } catch(e){ S.XA = {}; }
  S.X = S.XA[S.lang] || S.XA.fr || {};
  setBase("plan"); renderChrono(); renderBooks();
  document.querySelectorAll("#basesw [data-bs]").forEach(b=>b.onclick=()=>setBase(b.dataset.bs));
  $("#booksBtn").onclick = e=>{ e.stopPropagation(); const b = $("#booksPn"); b.hidden = !b.hidden; };
  document.addEventListener("click", e=>{ if (!e.target.closest("#booksPn,#booksBtn")) $("#booksPn").hidden = true; });
  const h = new URLSearchParams(location.hash.slice(1)), t = h.get("t"), p = h.get("p");
  if ((h.get("s")==="op" || (p||"").startsWith("o_")) && S.DS.op){ S.sec = "op"; S.D = S.DS.op; S.year = S.D.yr[0]; }
  if (h.has("frise")) setMode("frise");
  else if (t && tourOf(t)) setMode("tour", t, !!p);
  else setMode("all", null, !!p);
  if (p && P(p)) openPlace(p, true);
  $("#lang").onchange = async e=>{ const keep = {mode:S.mode, tour:S.tour, sel:S.sel}; await load(e.target.value); S.D = S.DS[S.sec] || S.DS.th; S.X = S.XA[S.lang] || S.XA.fr || {}; layersUI(); renderChrono(); renderBooks(); if (keep.mode==="person") keep.mode = "all"; setMode(keep.mode, keep.tour, true); if (keep.sel) openPlace(keep.sel); };
  $("#about").onclick = about;
  $("#q").oninput = e=>search(e.target.value);
  $("#q").onkeydown = e=>{ if (e.key==="Enter"){ const b = $("#res [data-p]"); if (b) b.click(); } if (e.key==="Escape"){ $("#res").hidden = true; } };
  document.addEventListener("click", e=>{ if (!e.target.closest(".search")) $("#res").hidden = true; if (!e.target.closest("#layers,#lay")) $("#layers").hidden = true; });
  $("#lay").onclick = ()=>{ const l = $("#layers"); l.hidden = !l.hidden; };
  $("#home").onclick = ()=>map.flyToBounds(PARIS, {paddingTopLeft:[pad().l, pad().t], paddingBottomRight:[pad().r, pad().b], duration:1});
  $("#zi").onclick = ()=>map.zoomIn(); $("#zo").onclick = ()=>map.zoomOut();
  addEventListener("resize", ()=>{ if (!wide()) sheet(S.sk==null?1:S.sk); });
})();
