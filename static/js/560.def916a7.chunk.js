"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[560],{8560:function(n,t,e){e.r(t),e.d(t,{default:function(){return l}});var c=e(8152),a="HomePage_title__Iqtik",i="HomePage_list__JTEtR",r="HomePage_item__pwdYU",o="HomePage_link__V6y8d",u=e(2791),s=e(3504),f=e(6871),_=e(1546),d=e(184);function l(){var n=(0,u.useState)([]),t=(0,c.Z)(n,2),e=t[0],l=t[1],m=(0,f.TH)();return(0,u.useEffect)((function(){(0,_.Cp)().then((function(n){l((function(t){return n.data.results}))})).catch((function(n){return n.message}))}),[]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("h2",{className:a,children:"Trending today"}),(0,d.jsx)("ul",{className:i,children:e.map((function(n){return(0,d.jsx)("li",{className:r,children:(0,d.jsx)(s.rU,{to:"/movies/".concat(n.id),state:{from:{path:m.pathname},data:e},className:o,children:n.original_title})},n.id)}))})]})}},1546:function(n,t,e){e.d(t,{ts:function(){return f},cI:function(){return _},kh:function(){return d},Cp:function(){return u},XK:function(){return s}});var c=e(4569),a=e.n(c),i=function(n){return a().get(n)},r="https://api.themoviedb.org/3",o="7abb9f029aa2b599dfc2a90359817f58",u=function(){return i("".concat(r,"/trending/movie/day?api_key=").concat(o))},s=function(n){return i("".concat(r,"/search/movie?api_key=").concat(o,"&query=").concat(n,"&include_adult=false"))},f=function(n){return i("".concat(r,"/movie/").concat(n,"?api_key=").concat(o))},_=function(n){return i("".concat(r,"/movie/").concat(n,"/credits?api_key=").concat(o))},d=function(n){return i("".concat(r,"/movie/").concat(n,"/reviews?api_key=").concat(o))}}}]);
//# sourceMappingURL=560.def916a7.chunk.js.map