/* fenêtre d'accueil de la carte + visite guidée en bulles */
(function(){
  var AMZ = {fr:"amazon.fr", en:"amazon.com", es:"amazon.es", de:"amazon.de", it:"amazon.it"};
  var T = {
  fr:{k:"Bienvenue sur la carte", t:"Thelemic Map Paris",
    p1:"Cette carte vous invite à marcher dans le Paris d'Aleister Crowley, de ses premiers séjours en 1900 à son expulsion en 1929, et dans le Paris occulte de la Belle Époque : ses mages, ses libraires, ses salons et ses poètes. Chaque lieu raconte son histoire, ce qu'il est devenu et d'où viennent nos informations.",
    p2:"Ce projet est porté par l'Oasis Parisii de l'Ordo Templi Orientis et ses membres, dans un esprit de transmission de la tradition thélémite à Paris.",
    p3:"Un immense merci à Tobias Churton : ses deux enquêtes, Aleister Crowley in Paris et Occult Paris, sont la source principale de cette carte. Sans ce travail de recherche patient, la plupart de ces adresses seraient restées dans l'ombre.",
    p4:"N'hésitez surtout pas à vous procurer ces ouvrages : ils sont passionnants, d'une grande richesse, et ce sont des sources rares qu'il faut soutenir.",
    go:"Découvrir la carte", tour:"Faire la visite guidée", skip:"Passer", next:"Suivant", prev:"Précédent", end:"Terminer", of:"sur",
    s:{search:"Cherchez un lieu, une rue ou un nom dans les deux époques.", secsw:"Passez de « Crowley à Paris » (1900-1929) au « Paris occulte » de la Belle Époque.", chips:"Choisissez un parcours : il se dessine sur la carte, lieu après lieu.", pn:"La liste des lieux : touchez-en un pour lire son histoire, voir des photos et y aller à pied.", map:"Touchez un numéro sur la carte. Les petits visages indiquent qui y est passé.", ppl:"Les personnages : touchez un visage pour lire sa biographie et allumer ses lieux.", chrono:"La frise : faites défiler les années ou lancez la lecture pour voir les lieux s'allumer.", basesw:"Passez du plan à la vue satellite.", books:"Les deux livres de Tobias Churton, à l'origine de cette carte.", about:"Revoir cette présentation et la visite à tout moment."}},
  en:{k:"Welcome to the map", t:"Thelemic Map Paris",
    p1:"This map invites you to walk through Aleister Crowley's Paris, from his first stays in 1900 to his expulsion in 1929, and through the occult Paris of the Belle Époque: its magi, booksellers, salons and poets. Each place tells its story, what it has become and where our information comes from.",
    p2:"This project is carried by Oasis Parisii of Ordo Templi Orientis and its members, in a spirit of passing on the Thelemic tradition in Paris.",
    p3:"Heartfelt thanks to Tobias Churton: his two investigations, Aleister Crowley in Paris and Occult Paris, are the main source of this map. Without his patient research, most of these addresses would have stayed in the shadows.",
    p4:"Please do get hold of these books: they are fascinating and wonderfully rich, rare sources that deserve your support.",
    go:"Explore the map", tour:"Take the guided tour", skip:"Skip", next:"Next", prev:"Back", end:"Finish", of:"of",
    s:{search:"Search for a place, a street or a name across both eras.", secsw:"Switch between “Crowley in Paris” (1900-1929) and the “Occult Paris” of the Belle Époque.", chips:"Pick a tour: it draws itself on the map, place after place.", pn:"The list of places: tap one to read its story, see photos and walk there.", map:"Tap a number on the map. The small faces show who passed through.", ppl:"The people: tap a face to read their biography and light up their places.", chrono:"The timeline: scroll through the years or press play to watch places light up.", basesw:"Switch between the plan and satellite view.", books:"Tobias Churton's two books, the origin of this map.", about:"See this introduction and tour again at any time."}},
  es:{k:"Bienvenidos al mapa", t:"Thelemic Map Paris",
    p1:"Este mapa le invita a recorrer el París de Aleister Crowley, desde sus primeras estancias en 1900 hasta su expulsión en 1929, y el París oculto de la Belle Époque: sus magos, libreros, salones y poetas. Cada lugar cuenta su historia, en qué se ha convertido y de dónde proceden nuestras informaciones.",
    p2:"Este proyecto lo impulsan el Oasis Parisii de la Ordo Templi Orientis y sus miembros, con el espíritu de transmitir la tradición thelémica en París.",
    p3:"Un enorme agradecimiento a Tobias Churton: sus dos investigaciones, Aleister Crowley in Paris y Occult Paris, son la fuente principal de este mapa. Sin su paciente trabajo, la mayoría de estas direcciones habrían quedado en la sombra.",
    p4:"No dude en conseguir estas obras: son apasionantes, de una gran riqueza, y son fuentes poco comunes que hay que apoyar.",
    go:"Descubrir el mapa", tour:"Hacer la visita guiada", skip:"Omitir", next:"Siguiente", prev:"Anterior", end:"Terminar", of:"de",
    s:{search:"Busque un lugar, una calle o un nombre en las dos épocas.", secsw:"Pase de «Crowley en París» (1900-1929) al «París oculto» de la Belle Époque.", chips:"Elija un recorrido: se dibuja en el mapa, lugar tras lugar.", pn:"La lista de lugares: toque uno para leer su historia, ver fotos e ir a pie.", map:"Toque un número en el mapa. Las pequeñas caras indican quién pasó por allí.", ppl:"Los personajes: toque un rostro para leer su biografía e iluminar sus lugares.", chrono:"La cronología: recorra los años o pulse play para ver los lugares encenderse.", basesw:"Pase del plano a la vista satélite.", books:"Los dos libros de Tobias Churton, origen de este mapa.", about:"Vuelva a ver esta presentación y la visita cuando quiera."}},
  de:{k:"Willkommen auf der Karte", t:"Thelemic Map Paris",
    p1:"Diese Karte lädt Sie ein, durch das Paris Aleister Crowleys zu gehen, von seinen ersten Aufenthalten 1900 bis zu seiner Ausweisung 1929, und durch das okkulte Paris der Belle Époque: seine Magier, Buchhändler, Salons und Dichter. Jeder Ort erzählt seine Geschichte, was aus ihm geworden ist und woher unsere Angaben stammen.",
    p2:"Getragen wird das Projekt von der Oasis Parisii des Ordo Templi Orientis und ihren Mitgliedern, im Geist der Weitergabe der thelemischen Tradition in Paris.",
    p3:"Ein großer Dank an Tobias Churton: Seine beiden Studien, Aleister Crowley in Paris und Occult Paris, sind die Hauptquelle dieser Karte. Ohne seine geduldige Forschung wären die meisten dieser Adressen im Dunkeln geblieben.",
    p4:"Zögern Sie nicht, sich diese Bücher zu besorgen: Sie sind spannend und reichhaltig, seltene Quellen, die Unterstützung verdienen.",
    go:"Karte entdecken", tour:"Geführte Tour starten", skip:"Überspringen", next:"Weiter", prev:"Zurück", end:"Fertig", of:"von",
    s:{search:"Suchen Sie einen Ort, eine Straße oder einen Namen in beiden Epochen.", secsw:"Wechseln Sie zwischen „Crowley in Paris“ (1900-1929) und dem „okkulten Paris“ der Belle Époque.", chips:"Wählen Sie einen Rundgang: Er zeichnet sich Ort für Ort auf der Karte.", pn:"Die Liste der Orte: Tippen Sie auf einen, um seine Geschichte zu lesen, Fotos zu sehen und hinzugehen.", map:"Tippen Sie auf eine Nummer auf der Karte. Die kleinen Gesichter zeigen, wer dort war.", ppl:"Die Personen: Tippen Sie auf ein Gesicht, um die Biografie zu lesen und die Orte aufleuchten zu lassen.", chrono:"Die Zeitleiste: Blättern Sie durch die Jahre oder starten Sie die Wiedergabe.", basesw:"Wechseln Sie zwischen Plan und Satellitenansicht.", books:"Die beiden Bücher von Tobias Churton, Ursprung dieser Karte.", about:"Diese Vorstellung und die Tour jederzeit erneut ansehen."}},
  it:{k:"Benvenuti sulla mappa", t:"Thelemic Map Paris",
    p1:"Questa mappa vi invita a camminare nella Parigi di Aleister Crowley, dai suoi primi soggiorni nel 1900 all'espulsione nel 1929, e nella Parigi occulta della Belle Époque: i suoi maghi, librai, salotti e poeti. Ogni luogo racconta la sua storia, ciò che è diventato e da dove provengono le nostre informazioni.",
    p2:"Il progetto è portato avanti dall'Oasi Parisii dell'Ordo Templi Orientis e dai suoi membri, con lo spirito di trasmettere la tradizione thelemica a Parigi.",
    p3:"Un enorme grazie a Tobias Churton: le sue due indagini, Aleister Crowley in Paris e Occult Paris, sono la fonte principale di questa mappa. Senza il suo paziente lavoro di ricerca, la maggior parte di questi indirizzi sarebbe rimasta nell'ombra.",
    p4:"Non esitate a procurarvi questi libri: sono appassionanti, ricchissimi, fonti rare che meritano di essere sostenute.",
    go:"Scopri la mappa", tour:"Fai la visita guidata", skip:"Salta", next:"Avanti", prev:"Indietro", end:"Fine", of:"di",
    s:{search:"Cercate un luogo, una via o un nome nelle due epoche.", secsw:"Passate da «Crowley a Parigi» (1900-1929) alla «Parigi occulta» della Belle Époque.", chips:"Scegliete un percorso: si disegna sulla mappa, luogo dopo luogo.", pn:"L'elenco dei luoghi: toccatene uno per leggerne la storia, vedere le foto e andarci a piedi.", map:"Toccate un numero sulla mappa. I piccoli volti indicano chi ci è passato.", ppl:"I personaggi: toccate un volto per leggere la biografia e accendere i suoi luoghi.", chrono:"La cronologia: scorrete gli anni o premete play per vedere i luoghi accendersi.", basesw:"Passate dalla pianta alla vista satellitare.", books:"I due libri di Tobias Churton, all'origine di questa mappa.", about:"Rivedete questa presentazione e la visita in qualsiasi momento."}}};
  var lang = function(){ try { if (typeof S!=="undefined" && T[S.lang]) return S.lang; } catch(e){} var l = new URLSearchParams(location.search).get("l"); return T[l] ? l : "fr"; };
  var css = "#wlc{position:fixed;inset:0;z-index:5000;display:grid;place-items:center;padding:16px;background:rgba(3,5,26,.72);backdrop-filter:blur(5px);animation:wF .5s ease both}"
   + "#wlc .wb{position:relative;max-width:560px;width:100%;max-height:88vh;overflow:auto;border-radius:22px;padding:28px 26px 22px;background:linear-gradient(180deg,rgba(24,46,112,.98),rgba(8,14,44,.98));border:1px solid rgba(242,228,140,.5);box-shadow:0 30px 80px rgba(0,0,0,.6),0 0 40px rgba(242,200,90,.18);text-align:center;animation:wU .7s .1s cubic-bezier(.2,.8,.2,1) both}"
   + "#wlc .wl{width:64px;height:auto;filter:drop-shadow(0 0 14px rgba(242,200,90,.55))}"
   + "#wlc .wk{margin:8px 0 2px;font-family:var(--sc);letter-spacing:.2em;text-transform:uppercase;font-size:.72rem;color:#f8c4cc}"
   + "#wlc h2{margin:0 0 14px;font-family:var(--display);font-weight:400;font-size:1.9rem;background:linear-gradient(180deg,#fff7d6,#f2e48c 55%,#c9962e);-webkit-background-clip:text;background-clip:text;color:transparent}"
   + "#wlc p{margin:0 0 12px;font-size:.95rem;line-height:1.6;color:#e6ebff;text-align:left}"
   + "#wlc .wbk{display:flex;justify-content:center;gap:16px;margin:14px 0 6px}"
   + "#wlc .wbk a{display:grid;justify-items:center;gap:6px;text-decoration:none;color:#f2e48c;font-family:var(--sc);font-size:.72rem;letter-spacing:.06em}"
   + "#wlc .wbk img{width:78px;height:auto;border-radius:3px 6px 6px 3px;box-shadow:0 8px 20px rgba(0,0,0,.5),0 0 16px rgba(242,200,90,.3);transition:transform .25s}"
   + "#wlc .wbk a:hover img{transform:translateY(-4px) rotate(-2deg)}"
   + "#wlc .wa{display:flex;flex-wrap:wrap;justify-content:center;gap:10px;margin-top:16px}"
   + ".wbt{border:0;cursor:pointer;font:inherit;font-family:var(--sc);font-weight:700;letter-spacing:.05em;border-radius:12px;padding:11px 18px;background:linear-gradient(180deg,#ffd9df,#f8c4cc);color:#0a1533}"
   + ".wbt.g{background:rgba(255,255,255,.08);color:#fff;border:1px solid rgba(255,255,255,.35)}"
   + "@keyframes wF{from{opacity:0}}@keyframes wU{from{opacity:0;translate:0 26px;scale:.96}}"
   + "#tour{position:fixed;inset:0;z-index:5000;pointer-events:none}"
   + "#tour .ths{position:fixed;border-radius:16px;box-shadow:0 0 0 9999px rgba(3,5,26,.62),0 0 0 2px #f2e48c,0 0 26px rgba(242,200,90,.6);transition:all .45s cubic-bezier(.2,.8,.2,1)}"
   + "#tour .tb{position:fixed;pointer-events:auto;width:min(300px,86vw);padding:16px 16px 12px;border-radius:16px;background:linear-gradient(180deg,#1b3a8a,#0b1645);border:1px solid rgba(242,228,140,.6);box-shadow:0 18px 40px rgba(0,0,0,.6);color:#fff;transition:left .45s cubic-bezier(.2,.8,.2,1),top .45s cubic-bezier(.2,.8,.2,1);animation:wU .4s ease both}"
   + "#tour .tb p{margin:0 0 12px;font-size:.92rem;line-height:1.5}"
   + "#tour .tb .tn{font-family:var(--sc);font-size:.68rem;letter-spacing:.14em;color:#f2e48c;text-transform:uppercase;margin-bottom:6px}"
   + "#tour .tb .tr{display:flex;gap:8px;justify-content:flex-end;align-items:center}#tour .tb .tr .sk{margin-right:auto;background:none;border:0;color:rgba(230,235,255,.7);cursor:pointer;font:inherit;font-size:.8rem;text-decoration:underline}"
   + "#tour .tb .wbt{padding:8px 13px;font-size:.8rem}"
   + "#tour .ar{position:absolute;width:14px;height:14px;background:#1b3a8a;border-left:1px solid rgba(242,228,140,.6);border-top:1px solid rgba(242,228,140,.6)}"
   + "@media (prefers-reduced-motion:reduce){#wlc,#wlc .wb,#tour .tb,#tour .ths{animation:none!important;transition:none!important}}";
  var st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);
  var esc = function(x){ return String(x).replace(/[&<>"]/g, function(c){ return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]; }); };
  function welcome(){
    var l = lang(), t = T[l], a = AMZ[l];
    var w = document.createElement("div"); w.id = "wlc"; w.setAttribute("role","dialog"); w.setAttribute("aria-modal","true"); w.setAttribute("translate","no");
    w.innerHTML = '<div class="wb"><img class="wl" src="img/lamen-oasis.png" alt=""><div class="wk">'+esc(t.k)+'</div><h2>'+esc(t.t)+'</h2><p>'+esc(t.p1)+'</p><p>'+esc(t.p2)+'</p><p>'+esc(t.p3)+'</p>'
      + '<div class="wbk"><a href="https://www.'+a+'/dp/1644114798" target="_blank" rel="noopener"><img src="img/livre-crowley-in-paris.jpg" alt="Aleister Crowley in Paris">Aleister Crowley in Paris</a><a href="https://www.'+a+'/dp/162055545X" target="_blank" rel="noopener"><img src="img/livre-occult-paris.jpg" alt="Occult Paris">Occult Paris</a></div>'
      + '<p style="text-align:center;font-style:italic;color:#f8c4cc">'+esc(t.p4)+'</p>'
      + '<div class="wa"><button class="wbt" type="button" data-w="tour">'+esc(t.tour)+'</button><button class="wbt g" type="button" data-w="go">'+esc(t.go)+'</button></div></div>';
    document.body.appendChild(w);
    w.addEventListener("click", function(e){ var b = e.target.closest("[data-w]"); if (!b && e.target!==w) return; w.remove(); try { localStorage.setItem("tm-wlc","1"); } catch(x){} if (b && b.dataset.w==="tour") setTimeout(tour, 250); });
  }
  function vis(el){ if (!el) return false; var r = el.getBoundingClientRect(), cs = getComputedStyle(el); return r.width > 4 && r.height > 4 && cs.display!=="none" && cs.visibility!=="hidden"; }
  function tour(){
    var l = lang(), t = T[l];
    var steps = [["search","#q"],["secsw","#secsw"],["chips","#chips"],["pn","#pn"],["map","#map"],["ppl","#ppl"],["chrono","#chrono"],["basesw","#basesw"],["books","#booksBtn"],["about","#about"]]
      .map(function(s){ var el = document.querySelector(s[1]); if (s[0]==="search") el = el && el.closest(".search"); return {k:s[0], el:el}; }).filter(function(s){ return vis(s.el); });
    if (!steps.length) return;
    var o = document.createElement("div"); o.id = "tour"; o.setAttribute("translate","no"); o.innerHTML = '<div class="ths"></div><div class="tb"><span class="ar"></span><div class="tn"></div><p></p><div class="tr"><button class="sk" type="button">'+esc(t.skip)+'</button><button class="wbt g" type="button" data-t="p">'+esc(t.prev)+'</button><button class="wbt" type="button" data-t="n"></button></div></div>';
    document.body.appendChild(o);
    var hs = o.querySelector(".ths"), tb = o.querySelector(".tb"), ar = o.querySelector(".ar"), i = 0;
    function place(){
      var s = steps[i], r = s.el.getBoundingClientRect(), W = innerWidth, H = innerHeight, pad = 6;
      var big = s.k==="map" ? {left:W*.5-120, top:H*.45-90, width:240, height:180} : null;
      var R = big || {left:r.left-pad, top:r.top-pad, width:r.width+pad*2, height:r.height+pad*2};
      R.left = Math.max(4, R.left); R.top = Math.max(4, R.top); R.width = Math.min(R.width, W-8-R.left); R.height = Math.min(R.height, H-8-R.top);
      hs.style.left = R.left+"px"; hs.style.top = R.top+"px"; hs.style.width = R.width+"px"; hs.style.height = R.height+"px";
      o.querySelector(".tn").textContent = (i+1) + " " + t.of + " " + steps.length; o.querySelector("p").textContent = t.s[s.k];
      o.querySelector("[data-t=p]").style.visibility = i ? "visible" : "hidden"; o.querySelector("[data-t=n]").textContent = i===steps.length-1 ? t.end : t.next;
      tb.style.animation = "none"; void tb.offsetWidth; tb.style.animation = "";
      var bw = tb.offsetWidth, bh = tb.offsetHeight, x, y, side;
      if (R.left + R.width + bw + 24 < W && R.height > H*.5){ x = R.left + R.width + 16; y = Math.min(Math.max(12, R.top + 40), H - bh - 12); side = "l"; }
      else if (R.left - bw - 24 > 0 && R.height > H*.5){ x = R.left - bw - 16; y = Math.min(Math.max(12, R.top + 40), H - bh - 12); side = "r"; }
      else if (R.top + R.height + bh + 20 < H){ y = R.top + R.height + 14; x = Math.min(Math.max(12, R.left + R.width/2 - bw/2), W - bw - 12); side = "t"; }
      else { y = Math.max(12, R.top - bh - 14); x = Math.min(Math.max(12, R.left + R.width/2 - bw/2), W - bw - 12); side = "b"; }
      tb.style.left = x+"px"; tb.style.top = y+"px";
      var cx = R.left + R.width/2 - x - 7, cy = Math.min(Math.max(14, R.top + 20 - y), bh - 28);
      ar.style.cssText = side==="t" ? "left:"+Math.min(Math.max(14,cx),bw-28)+"px;top:-8px;transform:rotate(45deg)" : side==="b" ? "left:"+Math.min(Math.max(14,cx),bw-28)+"px;bottom:-8px;transform:rotate(225deg)" : side==="l" ? "left:-8px;top:"+cy+"px;transform:rotate(-45deg)" : "right:-8px;top:"+cy+"px;transform:rotate(135deg)";
    }
    function close(){ o.remove(); removeEventListener("resize", place); }
    o.addEventListener("click", function(e){ var b = e.target.closest("button"); if (!b) return;
      if (b.classList.contains("sk")) return close();
      if (b.dataset.t==="p" && i > 0){ i--; place(); }
      if (b.dataset.t==="n"){ if (i < steps.length-1){ i++; place(); } else close(); } });
    addEventListener("resize", place); place();
  }
  window.tmWelcome = welcome; window.tmTour = tour;
  var seen = false; try { seen = localStorage.getItem("tm-wlc")==="1"; } catch(e){}
  if (!seen) addEventListener("load", function(){ setTimeout(welcome, 1500); });
})();
