/* [투두투] gifts.js · 2026-11-03 · 원본 apps/page/사이트코드/사은품표.html · 고치려면 원본에서 · 이 파일 직접 수정 금지 */
(function(){if(document.getElementById("td-gifts"))return;var s=document.createElement('style');s.id="td-gifts";s.textContent="@media (min-width:767px) and (max-width:1024px){body:not(.video_fullpage):not(.admin) ._widget_data > :is(.ls,.mm,.mr,.mn,.mh,.mc,.ma,.cws,.ai1,.cfh,.xl,.xh,.xc,.xf,.xb,.ab,.bd,.bg,.am,.wt,.qa,.rv,.gd),body:not(.video_fullpage):not(.admin) .todoto-v2-block > .cd-outer{width:calc(100vw / .85) !important;margin-left:calc(-50vw / .85) !important;}}";(document.head||document.documentElement).appendChild(s);})();
window.TD_GIFTS = {
  updated: '2026-10-27',
  tool: { 106:'sheets', 89:'sheets', 6:'sheets', 120:'sheets', 101:'sheets', 118:'sheets', 149:'notion', 154:'notion', 163:'notion' },
  common: {
    sheets: [ { name:'구글 시트 기초 가이드북' } ],
    notion: [ { name:'노션 기초 가이드북' }, { name:'만다라트 플래너(노션)' }, { name:'노션 단축키' } ]
  },
  items: {
    106: [ { name:'경조사 관리 시트', cond:'후기를 남기면 받아요' } ]
  }
};

window.TD_WELCOME = {
  on: true,
  pct: '10% 할인', name: '신규회원 웰컴 쿠폰', join: '/site_join_pattern_choice', page: '/welcome',
  cap: '가입하면 <strong>10% 할인 쿠폰 + 무료 템플릿 4종</strong>을 바로 받아요',
  except: [161, 165, 140, 141, 142, 143, 144, 145, 147, 150, 151, 152, 153, 159, 160, 162],
  swap: [
    ['럭키 쿠폰 뽑기까지', '무료 템플릿 4종도 함께'], ['럭키 쿠폰 뽑기', '무료 템플릿 4종'], ['100% 당첨', '회원 0원'],
    ['3만원 쿠폰팩쿠폰', '10% 할인 쿠폰'], ['3만원 쿠폰팩', '10% 할인 쿠폰'], ['쿠폰팩 받기', '쿠폰 받기'], ['쿠폰팩 받고', '쿠폰 받고'], ['쿠폰팩', '쿠폰']
  ],
  box: {
    h: '가입하면 바로<br><b>10% 할인 쿠폰 + 무료 템플릿 4종</b>', p: '투두투 웰컴 키트로 한 번에 받아 가세요', go: '웰컴 키트 받기 ↗',
    sheet: '회원이면 0원 · 가입하면 10% 할인 쿠폰도 드려요',
    cls: { h: '투두투 가입하고<br><b>클래스 알림</b> 가장 먼저 받아 가세요', p: '가입하면 무료 템플릿 4종도 바로 받을 수 있어요', go: '가입하고 알림받기 ↗' }
  }
};
