(function(t){function e(e){for(var r,u,c=e[0],i=e[1],l=e[2],s=0,d=[];s<c.length;s++)u=c[s],Object.prototype.hasOwnProperty.call(a,u)&&a[u]&&d.push(a[u][0]),a[u]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);f&&f(e);while(d.length)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,c=1;c<n.length;c++){var i=n[c];0!==a[i]&&(r=!1)}r&&(o.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},a={app:0},o=[];function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/PamelaSohWY-TGC9VueProject2Gameversion2/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var f=i;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"225f":function(t,e,n){"use strict";var r=n("f492"),a=n.n(r);e["default"]=a.a},"3c71":function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return a}));var r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("from Feedback")])])}]},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t._m(0),n("Basic"),n("randomNumber",[t._v("Random Number")]),n("Answer"),n("Board"),n("Feedback")],1)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"navbar fixed-top navbar-light bg-light"},[n("div",{staticClass:"container-fluid"},[n("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t._v("Fixed top")])])])}],u=(n("f9e3"),n("2dd8"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",{staticClass:"title"},[t._v("Mathematics")]),n("h2",[t._v(t._s(t.message))])])}),c=[],i={name:"Basic",data:function(){return{message:"Hello World"}}},l=i,f=(n("8f4c"),n("2877")),s=Object(f["a"])(l,u,c,!1,null,null,null),d=s.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" "+t._s(t.randomNumber1)+" "+t._s(t.randomNumber2)+" "),n("button",{on:{click:t.roll}},[t._v("Roll Dice")])])},m=[],v={data:function(){return{randomNumber1:Math.floor(6*Math.random())+1,randomNumber2:Math.floor(6*Math.random())+1}},methods:{roll:function(){this.randomNumber1=Math.floor(6*Math.random()),this.randomNumber2=Math.floor(6*Math.random())}}},b=v,p=Object(f["a"])(b,h,m,!1,null,null,null),_=p.exports,g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("from board")]),n("table",t._l(t.grid,(function(e,r){return n("tr",{key:r},t._l(e,(function(e,r){return n("td",{key:r},[t._v(" "+t._s(e)+" ")])})),0)})),0),n("button",{on:{click:function(e){return t.change()}}},[t._v("Changeboard")])])},y=[],M={data:function(){return{grid:[[7,9,3,8,2,11,10],[4,2,9,5,12,5,12],[10,6,4,7,4,7,9],[3,10,6,2,8,12,3],[8,5,9,11,3,6,11],[11,7,8,3,5,8,4],[10,2,6,7,10,2,6],[5,12,11,4,7,9,12]]}},mounted:function(){for(var t=0;t<7;t++)for(var e=0;e<8;e++)this.$set(this.grid[0],e,Math.floor(6*Math.random())+1)},methods:{change:function(){this.$set(this.grid[0],0,Math.floor(12*Math.random())),this.$set(this.grid[0],1,Math.floor(12*Math.random()))}}},O=M,j=Object(f["a"])(O,g,y,!1,null,null,null),x=j.exports,w=n("cf4c"),$=n("a6be"),k={name:"App",components:{Basic:d,randomNumber:_,Answer:w["default"],Board:x,Feedback:$["default"]}},E=k,N=Object(f["a"])(E,a,o,!1,null,null,null),P=N.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(P)}}).$mount("#app")},"83da":function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return a}));var r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("What is the sum of the 2 random numbers above?")])])}]},"8f4c":function(t,e,n){"use strict";n("c04b")},a6be:function(t,e,n){"use strict";var r=n("3c71"),a=n("225f"),o=n("2877"),u=Object(o["a"])(a["default"],r["a"],r["b"],!1,null,null,null);e["default"]=u.exports},c04b:function(t,e,n){},cf4c:function(t,e,n){"use strict";var r=n("83da"),a=n("fdca"),o=n("2877"),u=Object(o["a"])(a["default"],r["a"],r["b"],!1,null,null,null);e["default"]=u.exports},e077:function(t,e){},f492:function(t,e){},fdca:function(t,e,n){"use strict";var r=n("e077"),a=n.n(r);e["default"]=a.a}});
//# sourceMappingURL=app.a309592b.js.map