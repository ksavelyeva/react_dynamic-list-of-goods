(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var c=n(6),r=n.n(c),o=n(7),a=n(3),s=n(2),i=n(5),u=n.n(i),l=n(1),d=(n(13),n(0)),b=function(t){var e=t.goods;return Object(d.jsx)("ul",{children:e.map((function(t){return Object(d.jsx)("li",{"data-cy":"good",style:{color:t.color},children:t.name},t.id)}))})};function j(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.ok?t.json():Promise.reject(new Error(t.statusText))}))}var f;!function(t){t.None="none",t.All="all-button",t.FirstFive="first-five-button",t.Red="red-button"}(f||(f={}));var O=function(t){var e;return(e={},Object(s.a)(e,f.All,"Load all goods"),Object(s.a)(e,f.FirstFive,"Load 5 first goods"),Object(s.a)(e,f.Red,"Load red goods"),Object(s.a)(e,f.None,""),e)[t]},h=function(){var t=Object(l.useState)([]),e=Object(a.a)(t,2),n=e[0],c=e[1],r=Object(l.useState)(f.None),s=Object(a.a)(r,2),i=s[0],h=s[1],p=Object(l.useState)(!1),m=Object(a.a)(p,2),v=m[0],g=m[1],x=Object(l.useState)(!1),y=Object(a.a)(x,2),k=y[0],w=y[1],F=Object(l.useCallback)(function(){var t=Object(o.a)(u.a.mark((function t(e){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return w(!0),t.prev=1,t.next=4,e;case 4:n=t.sent,c(n),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),g(!0);case 11:return t.prev=11,w(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[1,8,11,14]])})));return function(e){return t.apply(this,arguments)}}(),[]),S=Object(l.useCallback)((function(t){if(i!==t){switch(t){case f.All:F(j());break;case f.FirstFive:F(j().then((function(t){return t.sort((function(t,e){return t.name.localeCompare(e.name)})).slice(0,5)})));break;case f.Red:F(j().then((function(t){return t.filter((function(t){return"red"===t.color}))})))}h(t)}}),[F,i]);return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"Dynamic list of Goods"}),Object.values(f).filter((function(t){return t})).map((function(t){return Object(d.jsx)("button",{type:"button","data-cy":t,onClick:function(){S(t)},children:O(t)})})),k&&Object(d.jsx)("p",{children:"Is Loading..."}),v&&Object(d.jsx)("p",{children:"Something went wrong"}),!k&&!v&&Object(d.jsx)(b,{goods:n})]})};r.a.render(Object(d.jsx)(h,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.6a057b10.chunk.js.map