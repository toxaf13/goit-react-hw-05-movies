"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[957],{957:function(e,n,t){t.r(n),t.d(n,{default:function(){return v}});var r=t(885),i=t(791),s=t(731),c=t(184),u=function(e){var n=e.trending;return(0,c.jsx)(c.Fragment,{children:n.map((function(e){return(0,c.jsx)("li",{children:(0,c.jsx)(s.rU,{to:"movies/".concat(e.id),children:e.title})},e.id)}))})},a=t(639),o=t(861),f=t(757),d=t.n(f),l=t(388),h={url:"/trending/movie/week",baseURL:"https://api.themoviedb.org/3",params:{api_key:"0193b403931965590ec3af04161f2ca2"}},p=function(){var e=(0,o.Z)(d().mark((function e(){var n;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,l.Z)(h);case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=(0,i.useState)([]),n=(0,r.Z)(e,2),t=n[0],s=n[1],o=(0,i.useState)(!1),f=(0,r.Z)(o,2),d=f[0],l=f[1],h=(0,i.useState)(null),v=(0,r.Z)(h,2),x=v[0],m=v[1];return(0,i.useEffect)((function(){l(!0),p().then((function(e){s(e)})).catch((function(e){return m(e.message)})).finally((function(){l(!1)}))}),[]),(0,c.jsxs)("div",{children:[x&&(0,c.jsxs)("p",{children:["Oops, some error:",x]}),(0,c.jsxs)("section",{children:[(0,c.jsx)("h3",{children:"Trending today"}),(0,c.jsx)("ul",{children:t&&(0,c.jsx)(u,{trending:t})})]}),d&&(0,c.jsx)(a.a,{})]})}}}]);
//# sourceMappingURL=957.12e72a38.chunk.js.map