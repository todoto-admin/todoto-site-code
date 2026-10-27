/* [투두투] shop-view-gift-line.js · 2026-10-27 · 원본 apps/page/사이트코드/상세_사은품줄.html · 고치려면 원본에서 · 이 파일 직접 수정 금지 */
(function(){if(document.getElementById("td-shop-view-gift-line"))return;var s=document.createElement('style');s.id="td-shop-view-gift-line";s.textContent=".tdgx{display:flex;align-items:center;gap:10px;width:100%;box-sizing:border-box;margin:12px 0 2px;padding:14px 20px;border-radius:12px;background:#F1F3F5;line-height:1.35;text-align:left}\r\n.tdgx .t{flex:0 0 auto;margin-right:4px;font-size:13px;font-weight:800;color:#000CFE;line-height:1}\r\n.tdgx img{display:block;flex:0 0 auto;width:auto !important;height:17px !important;margin:0 !important;transform:translateY(-1px)}\r\n.tdgx img.sh{height:16px !important;transform:translateY(-2px)}\r\n.tdgx b{min-width:0;font-size:15px;font-weight:700;color:#15181E}\r\n.tdrw-sub{display:block;margin-top:2px;font-size:12.5px;color:#8A8D94}\r\n.tdrw-sub em{font-style:normal;font-weight:700;color:#000CFE}\r\n@media (max-width:640px){.tdgx{padding:12px 16px}.tdgx b{font-size:14px}}\r\n\r\n.prod-detail-section--fund{background:#F2F4FF;border-radius:10px;margin:8px 0 14px !important;   padding:14px 12px !important;border:0 !important}\r\n.prod-detail-section--fund .prod-detail-section__title{display:flex;align-items:center;gap:6px;color:#000CFE !important;font-weight:700}\r\n.tdfd{display:flex;align-items:flex-end;justify-content:space-between;gap:10px;flex-wrap:wrap;line-height:1.5}\r\n.tdfd span{color:#6B6E76}.tdfd b{color:#15181E;font-weight:700}\r\n.tdfd a{flex:0 0 auto;color:#000CFE !important;font-weight:700;text-decoration:none !important;white-space:nowrap}\r\n.tdbl{display:inline-flex;transform-origin:50% 10%;animation:tdRing 1.6s ease-in-out infinite}\r\n@keyframes tdRing{0%,40%,100%{transform:rotate(0) scale(1)}48%{transform:rotate(24deg) scale(1.15)}56%{transform:rotate(-22deg) scale(1.15)}64%{transform:rotate(16deg) scale(1.1)}72%{transform:rotate(-10deg)}80%{transform:rotate(4deg)}}\r\n@media (prefers-reduced-motion:reduce){.tdbl{animation:none}}";(document.head||document.documentElement).appendChild(s);})();
(function(){
  if (!/shop_view/.test(location.pathname)) return;
  var idx = ((location.search.match(/[?&]idx=(\d+)/) || [])[1]) || '';
  var ICON = { notion:['https://cdn.imweb.me/upload/S202312213f075e1a6dec0/505c30dd99e6e.png', ''], sheets:['data:image/webp;base64,UklGRrICAABXRUJQVlA4WAoAAAAQAAAAIwAALwAAQUxQSKQAAAABcGJr26J8DXd3l8ge2A8kNkEksQSy2wLcHSJnEm2EBmd85v//Q6NExATAT7XGkzpTBn2ZxoN5c9rfbaeeMsWj7Dm1ZZ482p5TU5NHPXBpeSHjBy4NX3T8wKX2wcAP3STwQzcJ/MhNAj/2kMCPPSTwEy8JfIuINRHzv4UFAIWvD1DHVwEInXGtnABQ2uNZFEHuqS3oN4f0TU+rDlA1xZOI4wb4sVZQOCDoAQAAMAoAnQEqJAAwAD4xEoZCoiEONScAEAGCWoArlWN2b2VYkBnAP0a/uXmAazB6AHlc+yf+2fpFPFX2Rpwt5DM0D/Pn1WIZEORzOv7Kxj8XRXTY4/NIed0Ewa+gAP7yqR+BpTBFzLv96W28/eWSr/OgbfP/f4j9w5HvBv/9E1/9JWaEULRNDj3NguYJLEK049o8xbo4Xm8F1ADLfx7adzF/+Xo3Jxl6vm4iQAMVVuYxZ8Ts/++Nn//9XaxPHr75Imt9+U/QR6MXH/Pvbz9cew+P2q7g0S+zVY+HzDV9+/FMhc4gkXVjPv6k//o8//jf4gUnnPff3u/tDMTiYMEUQf55+sX7mgYtZi0/CHN+ZvQnSZijq49vcFfu7PFiU6AddEuHVlSb5petKWKtpbEUBEdAsWufeVXmXP0v9iaqtplmq383NmcuUAxwQAvr92J6Yo9DnOu13T7RcU9WpS+HeMvSTdiceXy/wI0hnTRc1Gk4j+VxcarGU3gZs6RUs92zwzXV+E096f+jCMD8vWR6cZRclx2Eo8PM8CvRtT64QnyE8aBep+/+o82Pk3OiHbt/GnoD3JxaLDqRZcxW3qfSvvv88Qk1+YCfGUIYYpkz6vGmBxv/3p6MJ+kq8q47o7IVPk7t/xwbPfSdAAA=', 'sh'] };
  var esc = function(s){ return String(s).replace(/[&<>"]/g, function(c){ return { '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;' }[c]; }); };
  var num = function(s){ var m = String(s || '').replace(/[^\d]/g, ''); return m ? Number(m) : 0; };
  function gifts(){
    var G = window.TD_GIFTS; if (!G || !G.tool) return null;
    var tool = G.tool[idx]; if (!tool) return null;
    var today = new Date().toISOString().slice(0, 10), ok = function(x){ return !x.until || x.until >= today; };
    var all = ((G.common || {})[tool] || []).concat((G.items || {})[idx] || []).filter(ok);
    return { tool:tool, plain:all.filter(function(x){ return !x.cond; }), cond:all.filter(function(x){ return x.cond; }) };
  }
  function giftLine(g){
    if (!g || !g.plain.length) return true;
    var el = document.querySelector('.real_price'); if (!el) return false;
    var anchor = null, have = document.querySelector('.tdgx');
    var all = document.querySelectorAll('*');
    for (var i = 0; i < all.length; i++) { var e = all[i]; if (e.shadowRoot && /내 예상 최저가/.test(e.shadowRoot.textContent || '')) { anchor = e; break; } }
    if (!anchor) anchor = document.querySelector('.rv-inst');
    if (!anchor) { anchor = el; for (var k = 0; k < 6 && anchor.parentNode; k++) { var cs = getComputedStyle(anchor.parentNode); if (!(/flex/.test(cs.display) && !/column/.test(cs.flexDirection))) break; anchor = anchor.parentNode; } }
    if (have) { if (have.previousSibling !== anchor) anchor.parentNode.insertBefore(have, anchor.nextSibling); return !!document.querySelector('.rv-inst-low, .prod-detail-section--point') && tries > 10; }
    var ic = ICON[g.tool] || ICON.sheets;
    var d = document.createElement('div'); d.className = 'tdgx';
    d.innerHTML = '<span class="t">사은품</span><img src="' + ic[0] + '" alt=""' + (ic[1] ? ' class="' + ic[1] + '"' : '') + '><b>' + g.plain.map(function(x){ return esc(x.name.replace(/\s*\([^)]*\)\s*$/, '')); }).join(' + ')    + '</b>';
    anchor.parentNode.insertBefore(d, anchor.nextSibling);
    return false;
  }
  function reviewRow(g){
    if (document.querySelector('.prod-detail-section--review')) return true;
    var pt = document.querySelector('.prod-detail-section--point'); if (!pt) return false;
    var price = num((document.querySelector('.real_price') || {}).innerText); if (!price) return true;
    var sub = g && g.cond.length ? g.cond.map(function(x){ return '<span class="tdrw-sub">' + esc(x.cond.replace(/\s*받아요$/, '')) + ' <em>' + esc(x.name) + '</em>도 드려요</span>'; }).join('') : '';
    var r = document.createElement('div'); r.className = 'prod-detail-section prod-detail-section--review';
    r.innerHTML = '<div class="prod-detail-section__title">후기적립</div><div class="prod-detail-section__content"><p class="prod-detail-section__item">포토 후기 쓰면 <span class="text-bold">1,000원</span> 추가 적립' + sub + '</p></div>';
    pt.parentNode.insertBefore(r, pt.nextSibling);
    return true;
  }
  var TIMELOG = ['하루 종일 바빴는데 뭐 했지?', '원클릭 타임로그 텀블벅 펀딩', 'https://tum.bg/ZsIa9A', '']
  var FUND = { 95:TIMELOG, 97:TIMELOG, 102:TIMELOG, 89:TIMELOG, 6:TIMELOG };
  var BELL = '<span class="tdbl"><svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path d="M12 2.8a6 6 0 0 1 6 6v4.2l1.7 2.7a1 1 0 0 1-.8 1.6H5.1a1 1 0 0 1-.8-1.6L6 13V8.8a6 6 0 0 1 6-6z" fill="#000CFE"/><circle cx="12" cy="20.2" r="2.1" fill="#000CFE"/></svg></span>';
  function fundRow(){
    var f = FUND[idx]; if (!f) return true;
    if (f[3] && f[3] < new Date().toISOString().slice(0, 10)) return true;
    var pt = document.querySelector('.prod-detail-section--point'); if (!pt) return false;
    var last = document.querySelector('.prod-detail-section--review') || pt;
    var row = document.querySelector('.prod-detail-section--fund');
    if (row) { if (last.nextSibling !== row) last.parentNode.insertBefore(row, last.nextSibling); return true; }
    row = document.createElement('div'); row.className = 'prod-detail-section prod-detail-section--fund';
    row.innerHTML = '<div class="prod-detail-section__title">' + BELL + '펀딩</div><div class="prod-detail-section__content"><p class="prod-detail-section__item tdfd"><span><b>' + esc(f[0]) + '</b><br>' + esc(f[1]) + '</span><a href="' + esc(f[2]) + '" target="_blank" rel="noopener">펀딩 바로가기 ↗</a></p></div>';
    last.parentNode.insertBefore(row, last.nextSibling);
    return true;
  }
  var tries = 0, done = function(){ var g = gifts(); return giftLine(g) & reviewRow(g) & fundRow(); };
  var iv = setInterval(function(){ if (done() || ++tries > 75) clearInterval(iv); }, 400);
  if ('MutationObserver' in window) { var t = null; new MutationObserver(function(){ clearTimeout(t); t = setTimeout(done, 200); }).observe(document.documentElement, { childList:true, subtree:true }); }
})();
