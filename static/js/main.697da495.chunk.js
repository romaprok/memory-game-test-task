(this["webpackJsonpplay-pack"]=this["webpackJsonpplay-pack"]||[]).push([[0],[,,,function(e,t,a){e.exports={cards:"Cards_cards__3vrv5",loading:"Cards_loading__1qKSa",contentWrapper:"Cards_contentWrapper__8b-bC",header:"Cards_header__3Claf"}},,function(e,t,a){e.exports={card:"Card_card__1yi2Q",showedCard:"Card_showedCard__3hkn0",closedCard:"Card_closedCard__3HUoz",openedCard:"Card_openedCard__1pp25"}},,,,,function(e,t,a){e.exports={gamePage:"GamePage_gamePage__3ycbM",counter:"GamePage_counter__2H0QF"}},,,,,function(e,t,a){e.exports=a.p+"static/media/austria.d4e38133.svg"},function(e,t,a){e.exports=a.p+"static/media/belarus.817a309b.svg"},function(e,t,a){e.exports=a.p+"static/media/belgium.07d92126.svg"},function(e,t,a){e.exports=a.p+"static/media/brazil.4fc1c111.svg"},function(e,t,a){e.exports=a.p+"static/media/britain.5e845b41.svg"},function(e,t,a){e.exports=a.p+"static/media/france.36d6d563.svg"},function(e,t,a){e.exports=a.p+"static/media/spain.8953ff1a.svg"},function(e,t,a){e.exports=a.p+"static/media/japan.ae5b37f5.svg"},,,function(e,t,a){e.exports=a.p+"static/media/click.429827e6.mp3"},function(e,t,a){e.exports={button:"Button_button__p7SRv"}},function(e,t,a){e.exports=a.p+"static/media/Sound_20947.f314c1fd.mp3"},function(e,t,a){e.exports=a.p+"static/media/Dawn.58e2ca2f.mp3"},,function(e,t,a){e.exports=a(43)},,,,,function(e,t,a){},function(e,t,a){},,,,,,,function(e,t,a){"use strict";a.r(t);var c=a(0),i=a.n(c),n=a(7),r=a.n(n),d=(a(35),a(36),a(9)),s=a(5),o=a.n(s),l=function(e){var t=e.card.isSelected?"".concat(o.a.openedCard," ").concat(o.a.card):o.a.card;return i.a.createElement("div",{className:t,onClick:e.openCard},i.a.createElement("img",{src:e.card.img,alt:e.card.title,className:e.card.isActive?o.a.showedCard:o.a.closedCard}))},u=a(1),m=a(2),p=a(11),v="playReducer/MATCH-CARDS",f=a(15),g=a.n(f),S=a(16),O=a.n(S),C=a(17),b=a.n(C),A=a(18),_=a.n(A),E=a(19),R=a.n(E),y=a(20),h=a.n(y),j=a(21),k=a.n(j),x=a(22),N=a.n(x),w={cards:[{id:0,img:g.a,title:"one",isActive:!1,isSelected:!1},{id:1,img:g.a,title:"one",isActive:!1,isSelected:!1},{id:2,img:O.a,title:"two",isActive:!1,isSelected:!1},{id:3,img:O.a,title:"two",isActive:!1,isSelected:!1},{id:4,img:b.a,title:"three",isActive:!1,isSelected:!1},{id:5,img:b.a,title:"three",isActive:!1,isSelected:!1},{id:6,img:_.a,title:"four",isActive:!1,isSelected:!1},{id:7,img:_.a,title:"four",isActive:!1,isSelected:!1},{id:8,img:R.a,title:"five",isActive:!1,isSelected:!1},{id:9,img:R.a,title:"five",isActive:!1,isSelected:!1},{id:10,img:h.a,title:"six",isActive:!1,isSelected:!1},{id:11,img:h.a,title:"six",isActive:!1,isSelected:!1},{id:12,img:k.a,title:"seven",isActive:!1,isSelected:!1},{id:13,img:k.a,title:"seven",isActive:!1,isSelected:!1},{id:14,img:N.a,title:"eight",isActive:!1,isSelected:!1},{id:15,img:N.a,title:"eight",isActive:!1,isSelected:!1}],countClick:1,loading:!1},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"playReducer/FIRST-CARD-SHOW":var a=Object(p.a)(e.cards);return t.card.isActive||(a=a.map((function(e){return e.id===t.card.id?Object(m.a)({},e,{isActive:!0}):e}))),Object(m.a)({},e,{cards:a});case v:var c=e.cards.filter((function(e){return e.isActive})),i=Object(p.a)(e.cards),n=e.countClick;return c[0].title===c[1].title&&c[0].id!==c[1].id?(n+=1,i=i.map((function(e){return e.id===c[0].id||e.id===c[1].id?Object(m.a)({},e,{isSelected:!0,isActive:!1}):e}))):(n+=1,i=i.map((function(e){return Object(m.a)({},e,{isActive:!1})}))),Object(m.a)({},e,{cards:i,countClick:n});case"playReducer/LOADING-IN-PROCESS":return Object(m.a)({},e,{loading:!e.loading});case"playReducer/VICTORY-COMPLETE":return Object(m.a)({},e,{cards:e.cards.map((function(e){return Object(m.a)({},e,{isActive:!1,isSelected:!1})})),countClick:1});case"playReducer/SET_RANDOM-POSITION-FOR-CARDS":var r=Object(p.a)(e.cards),d=function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),c=[e[a],e[t]];e[t]=c[0],e[a]=c[1]}};return d(r),Object(m.a)({},e,{cards:r});default:return e}},T=function(e){return function(t,a){var c=a().reducer.cards.filter((function(e){return e.isActive}));e.isSelected||e.isActive||t(function(e){return{type:"playReducer/FIRST-CARD-SHOW",card:e}}(e)),0===c.length||e.isSelected||e.isActive||(t({type:"playReducer/LOADING-IN-PROCESS"}),setTimeout((function(){t({type:v}),t({type:"playReducer/LOADING-IN-PROCESS"})}),1e3))}},P=a(25),D=a.n(P),M=function(e){var t=Object(u.b)();return i.a.createElement(l,{card:e.card,openCard:function(){t(T(e.card)),new Audio(D.a).play()}})},F=a(3),W=a.n(F),G=function(e){var t=e.cards.map((function(e){return i.a.createElement(M,{key:e.id,card:e})})),a=e.loading?"".concat(W.a.loading," ").concat(W.a.cards):W.a.cards;return i.a.createElement("div",{className:a},t)},H=a(26),L=a.n(H),B=function(e){return i.a.createElement("button",{onClick:function(){e.onClick()},className:L.a.button},e.text)},Y=a(27),z=a.n(Y),J=function(){var e=Object(u.b)(),t=Object(c.useState)(!1),a=Object(d.a)(t,2),n=a[0],r=a[1],s=Object(u.c)((function(e){return e.reducer})),o=s.cards,l=s.loading;return o.every((function(e){return e.isSelected}))&&!n?i.a.createElement("div",{className:W.a.contentWrapper},i.a.createElement("audio",{src:z.a,autoPlay:!0}),i.a.createElement("h2",{className:W.a.header},"You won!"),i.a.createElement(B,{onClick:function(){e({type:"playReducer/SET_RANDOM-POSITION-FOR-CARDS"}),e({type:"playReducer/VICTORY-COMPLETE"}),r(!0)},text:"play again"})):i.a.createElement(G,{cards:o,loading:l})},Q=a(10),V=a.n(Q),q=function(e){var t=Object(c.useState)(!1),a=Object(d.a)(t,2),n=a[0],r=a[1];return n?i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:V.a.gamePage},i.a.createElement(J,null),e.cards.every((function(e){return e.isSelected}))?"":i.a.createElement("div",{className:V.a.counter},i.a.createElement("span",null,"Round \u2116 ",e.counter)))):i.a.createElement("div",{className:V.a.gamePage},i.a.createElement(B,{onClick:function(){e.onStartClick(),r(!0)},text:"START"}))},K=a(28),U=a.n(K),$=function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.reducer})),a=t.countClick,c=t.cards;return i.a.createElement(q,{cards:c,onStartClick:function(){e({type:"playReducer/SET_RANDOM-POSITION-FOR-CARDS"}),new Audio(U.a).play()},counter:a})};var X=function(){return i.a.createElement($,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Z=a(4),ee=a(29),te=Object(Z.c)({reducer:I}),ae=Object(Z.d)(te,Object(Z.a)(ee.a));r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(u.a,{store:ae},i.a.createElement(X,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[30,1,2]]]);
//# sourceMappingURL=main.697da495.chunk.js.map