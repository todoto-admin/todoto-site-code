/* [투두투] detail-motion.js · 2026-10-30 · 원본 apps/page/사이트코드/상세_모션.html · 고치려면 원본에서 · 이 파일 직접 수정 금지 */
(function(){if(document.getElementById("td-detail-motion"))return;var s=document.createElement('style');s.id="td-detail-motion";s.textContent="html.tdm-js [data-m]{transition:opacity .7s ease,transform .7s cubic-bezier(.2,.8,.2,1);}\nhtml.tdm-js [data-m=\"up\"]{opacity:0;transform:translateY(28px);}\nhtml.tdm-js [data-m=\"pop\"]{opacity:0;transform:translateY(14px) scale(.86);transform-origin:0 100%;transition:opacity .45s ease,transform .55s cubic-bezier(.3,1.5,.5,1);}\nhtml.tdm-js [data-m=\"pop\"][data-side=\"r\"]{transform-origin:100% 100%;}\nhtml.tdm-js [data-m=\"mark\"]{background-size:0% 100% !important;background-repeat:no-repeat !important;transition:background-size 1s cubic-bezier(.6,0,.2,1);}\nhtml.tdm-js [data-m=\"draw\"]{stroke-dasharray:var(--tdm-len,600);stroke-dashoffset:var(--tdm-len,600);transition:stroke-dashoffset 1.1s cubic-bezier(.6,0,.3,1);}\nhtml.tdm-js [data-m=\"type\"] .tdm-c{opacity:0;transition:opacity .05s linear;}\nhtml.tdm-js [data-m].tdm-on{opacity:1;transform:none;}\nhtml.tdm-js [data-m=\"mark\"].tdm-on{background-size:100% 100% !important;}\nhtml.tdm-js [data-m=\"draw\"].tdm-on{stroke-dashoffset:0;}\nhtml.tdm-js [data-m=\"type\"] .tdm-c.tdm-on{opacity:1;}\nhtml.tdm-js [data-m=\"stamp\"]{opacity:0;transform:scale(2.2) rotate(-24deg);transition:opacity .2s ease,transform .38s cubic-bezier(.3,1.6,.5,1);}\nhtml.tdm-js [data-m=\"stamp\"].tdm-on{opacity:1;transform:scale(1) rotate(-12deg);}\nhtml.tdm-js [data-m=\"fill\"]{background:#F4F5F7 !important;color:#B9BCC3 !important;transform:translateY(14px);opacity:.6;transition:background .55s ease,color .55s ease,transform .55s cubic-bezier(.2,.8,.2,1),opacity .55s ease;}\nhtml.tdm-js [data-m=\"fill\"] span{transition:color .55s ease,background .55s ease;}\nhtml.tdm-js [data-m=\"fill\"]:not(.tdm-on) span{color:#B9BCC3 !important;}\nhtml.tdm-js [data-m=\"fill\"]:not(.tdm-on) > span:first-child{background:#DADCE1 !important;color:#fff !important;}\nhtml.tdm-js [data-m=\"fill\"].tdm-on{background:#111 !important;color:#fff !important;transform:none;opacity:1;}\nhtml.tdm-js [data-m=\"fill\"][data-fill=\"light\"]{background:#1C1D22 !important;color:#5A5D66 !important;}\nhtml.tdm-js [data-m=\"fill\"][data-fill=\"light\"]:not(.tdm-on) span{color:#5A5D66 !important;}\nhtml.tdm-js [data-m=\"fill\"][data-fill=\"light\"]:not(.tdm-on) > span:first-child{background:#2A2C33 !important;color:#5A5D66 !important;}\nhtml.tdm-js [data-m=\"fill\"][data-fill=\"light\"].tdm-on{background:#fff !important;color:#111 !important;}\n@keyframes tdm-tg-knob{0%,18%{transform:translateX(-60px);}48%,82%{transform:none;}100%{transform:translateX(-60px);}}\n@keyframes tdm-tg-track{0%,18%{filter:grayscale(1) brightness(1.35);}48%,82%{filter:none;}100%{filter:grayscale(1) brightness(1.35);}}\nhtml.tdm-js [data-m=\"toggle\"] [data-tg=\"knob\"]{animation:tdm-tg-knob 4.6s cubic-bezier(.65,0,.35,1) infinite;}\nhtml.tdm-js [data-m=\"toggle\"] [data-tg=\"track\"]{animation:tdm-tg-track 4.6s cubic-bezier(.65,0,.35,1) infinite;}\n@media (prefers-reduced-motion:reduce){html.tdm-js [data-m] [data-tg],html.tdm-js [data-m],html.tdm-js [data-m] .tdm-c{filter:none !important;animation:none !important;opacity:1 !important;transform:none !important;transition:none !important;background-size:100% 100% !important;stroke-dashoffset:0 !important;}}";(document.head||document.documentElement).appendChild(s);})();
(function(){
	if(window.TDM_ON)return;window.TDM_ON=1;
	if(!('IntersectionObserver' in window))return;
	document.documentElement.classList.add('tdm-js');
	function prep(el){
		if(el.getAttribute('data-m')==='type'&&!el.getAttribute('data-tdm')){
			(function wrap(n){[].slice.call(n.childNodes).forEach(function(c){
				if(c.nodeType===3){var f=document.createDocumentFragment();c.nodeValue.split('').forEach(function(ch){var s=document.createElement('span');s.className='tdm-c';s.textContent=ch;f.appendChild(s);});n.replaceChild(f,c);}
				else if(c.nodeType===1&&c.tagName!=='BR')wrap(c);
			});})(el);
		}
		if(el.getAttribute('data-m')==='draw'&&el.getTotalLength){el.style.setProperty('--tdm-len',Math.ceil(el.getTotalLength()));}
		if(el.getAttribute('data-m')==='count')el.textContent='0'+(el.getAttribute('data-suffix')||'');
		if(el.getAttribute('data-m')==='circle'&&!el.firstChild){
			var NS='http://www.w3.org/2000/svg',sv=document.createElementNS(NS,'svg'),pa=document.createElementNS(NS,'path');
			sv.setAttribute('viewBox','0 0 200 80');sv.setAttribute('preserveAspectRatio','none');sv.setAttribute('aria-hidden','true');sv.style.cssText='display:block;width:100%;height:100%;overflow:visible;';
			pa.setAttribute('d',el.getAttribute('data-d')||'M30 44 C 22 14, 120 2, 176 22 C 206 34, 186 70, 112 74 C 46 78, 10 62, 22 38 C 30 22, 70 12, 120 12');
			pa.setAttribute('fill','none');pa.setAttribute('stroke',el.getAttribute('data-color')||'#FF3B30');pa.setAttribute('stroke-width',el.getAttribute('data-w')||'3');pa.setAttribute('stroke-linecap','round');
			sv.appendChild(pa);el.appendChild(sv);var L=Math.ceil(pa.getTotalLength())||600;pa.style.strokeDasharray=L;pa.style.strokeDashoffset=L;pa.style.transition='stroke-dashoffset 1.1s cubic-bezier(.6,0,.3,1)';el.__tdmPath=pa;
		}
		el.setAttribute('data-tdm','1');
	}
	function play(el){
		el.classList.add('tdm-on');
		var m=el.getAttribute('data-m');
		if(m==='type'){var cs=el.querySelectorAll('.tdm-c'),sp=+el.getAttribute('data-speed')||45;[].forEach.call(cs,function(c,i){setTimeout(function(){c.classList.add('tdm-on');},i*sp);});return cs.length*sp+150;}
		if(m==='count'){var to=parseFloat(el.getAttribute('data-to')),dec=(String(to).split('.')[1]||'').length,suf=el.getAttribute('data-suffix')||'',t0=performance.now(),D=1100;
			var iv=setInterval(function(){var k=Math.min(1,(performance.now()-t0)/D),e=1-Math.pow(1-k,3);el.textContent=(k>=1?to.toFixed(dec):(to*e).toFixed(dec))+suf;if(k>=1)clearInterval(iv);},33);return 500;}
		if(m==='circle'&&el.__tdmPath){el.__tdmPath.style.strokeDashoffset=0;return 900;}
		return {draw:900,mark:650,pop:320,up:300,toggle:900,fill:750,stamp:380}[m]||300;
	}
	var Q=[];
	function inView(el){var r=el.getBoundingClientRect(),h=window.innerHeight;return r.top<h*0.88;}
	function next(q){
		if(q.busy||q.i>=q.list.length)return;
		var el=q.list[q.i];
		if(!inView(el))return;
		q.busy=1;q.i++;
		var d=play(el);
		setTimeout(function(){q.busy=0;next(q);},Math.max(180,d*0.8));
	}
	function tick(){Q.forEach(next);}
	window.addEventListener('scroll',function(){requestAnimationFrame(tick);},{passive:true});
	window.addEventListener('resize',tick);
	function scan(){
		[].forEach.call(document.querySelectorAll('[data-m]:not([data-tdm])'),function(el){
			prep(el);var sec=el.closest('section')||el.parentNode,q=sec.__tdmq;
			if(!q){q=sec.__tdmq={list:[],i:0,busy:0};Q.push(q);}
			q.list.push(el);
		});
		Q.forEach(function(q){q.list.sort(function(a,b){return a.compareDocumentPosition(b)&2?1:-1;});});
		setTimeout(tick,300);
	}
	if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',scan);else scan();
	setTimeout(scan,1200);setTimeout(scan,3000);
})();
