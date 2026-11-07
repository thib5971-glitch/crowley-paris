/* ciel étoilé avec étoiles filantes */
(function(){
  var c = document.createElement("canvas"); c.id = "sky";
  c.style.cssText = "position:fixed;inset:0;width:100%;height:100%;z-index:-1;pointer-events:none";
  document.body.prepend(c);
  var hx = document.createElement("div"); hx.setAttribute("aria-hidden","true");
  hx.style.cssText = "position:fixed;left:50%;top:50%;width:min(86vw,86vh);height:min(86vw,86vh);transform:translate(-50%,-50%);z-index:-1;pointer-events:none;opacity:.09;filter:blur(3px) drop-shadow(0 0 18px rgba(255,255,255,.6));animation:hxb 9s ease-in-out infinite";
  hx.innerHTML = '<svg viewBox="-50 -50 100 100" width="100%" height="100%"><path d="M0,-46 L43,22 L-43,-22 L0,46 L43,-22 L-43,22 Z" fill="none" stroke="#fff" stroke-width="2.2" stroke-linejoin="miter"/></svg>';
  var ks = document.createElement("style"); ks.textContent = "@keyframes hxb{50%{opacity:.14}}@media (prefers-reduced-motion:reduce){[aria-hidden][style*=hxb]{animation:none!important}}";
  document.head.appendChild(ks); c.after(hx);
  var x = c.getContext("2d"), W, H, D, S = [], M = [], next = 0;
  var red = matchMedia("(prefers-reduced-motion: reduce)").matches;
  function size(){
    D = Math.min(devicePixelRatio || 1, 2); W = innerWidth; H = innerHeight;
    c.width = W * D; c.height = H * D; x.setTransform(D, 0, 0, D, 0, 0);
    var n = Math.round(W * H / 1900); S = [];
    for (var i = 0; i < n; i++){
      var big = Math.random() < .06;
      S.push({x:Math.random()*W, y:Math.random()*H, r:big ? 1.3 + Math.random()*1 : .45 + Math.random()*.85,
        a:.45 + Math.random()*.55, p:Math.random()*6.28, s:.4 + Math.random()*1.6,
        h:Math.random() < .12 ? "248,196,204" : Math.random() < .2 ? "242,228,140" : "220,230,255"});
    }
  }
  function shoot(t){
    var ang = (20 + Math.random()*25) * Math.PI / 180, sp = 9 + Math.random()*7;
    M.push({x:Math.random()*W*.8, y:Math.random()*H*.4, vx:Math.cos(ang)*sp, vy:Math.sin(ang)*sp, l:1});
    next = t + 2500 + Math.random()*5500;
  }
  function draw(t){
    x.clearRect(0, 0, W, H);
    for (var i = 0; i < S.length; i++){
      var s = S[i], a = red ? s.a : s.a * (.55 + .45 * Math.sin(t / 1000 * s.s + s.p));
      x.beginPath(); x.arc(s.x, s.y, s.r, 0, 6.283); x.fillStyle = "rgba(" + s.h + "," + a.toFixed(3) + ")"; x.fill();
      if (s.r > 1.2 && a > .6){ x.fillStyle = "rgba(" + s.h + "," + (a*.12).toFixed(3) + ")"; x.beginPath(); x.arc(s.x, s.y, s.r*4, 0, 6.283); x.fill(); }
    }
    if (!red){
      if (t > next) shoot(t);
      for (var j = M.length - 1; j >= 0; j--){
        var m = M[j]; m.x += m.vx; m.y += m.vy; m.l -= .012;
        var tx = m.x - m.vx*12, ty = m.y - m.vy*12, g = x.createLinearGradient(m.x, m.y, tx, ty);
        g.addColorStop(0, "rgba(255,250,230," + Math.max(m.l,0) + ")"); g.addColorStop(1, "rgba(255,250,230,0)");
        x.strokeStyle = g; x.lineWidth = 1.6; x.lineCap = "round"; x.beginPath(); x.moveTo(m.x, m.y); x.lineTo(tx, ty); x.stroke();
        x.beginPath(); x.arc(m.x, m.y, 1.6, 0, 6.283); x.fillStyle = "rgba(255,255,255," + Math.max(m.l,0) + ")"; x.fill();
        if (m.l <= 0 || m.x > W + 50 || m.y > H + 50) M.splice(j, 1);
      }
    }
    requestAnimationFrame(draw);
  }
  addEventListener("resize", size); size(); next = performance.now() + 1500; requestAnimationFrame(draw);
})();
