!function(){"use strict";var e,t={2174:function(e,t,r){var n=r(3935),o=(r(4916),r(4723),r(2526),r(1817),r(1539),r(2165),r(6992),r(8783),r(3948),r(7042),r(1038),r(7601),r(1703),r(7294)),a=r(5893);function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var i=function(){var e,t,r=(e=(0,o.useState)(""),t=2,function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],c=!0,i=!1;try{for(r=r.call(e);!(c=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);c=!0);}catch(e){i=!0,o=e}finally{try{c||null==r.return||r.return()}finally{if(i)throw o}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?c(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),n=r[0],i=r[1],s=function(e){var t=e.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/);return t&&11===t[2].length?t[2]:null}(n);return console.log(s),(0,a.jsx)(o.Fragment,{children:(0,a.jsxs)("div",{className:"container",children:[(0,a.jsx)("div",{className:"row",children:(0,a.jsx)("div",{className:"col-md-6 mx-auto",children:(0,a.jsxs)("div",{className:"form-floating",children:[(0,a.jsx)("input",{type:"url",className:"form-control",id:"linkVideo",placeholder:"Link batalla",value:n,onChange:function(e){return i(e.target.value)}}),(0,a.jsx)("label",{htmlFor:"linkVideo",children:"Link batalla (YOUTUBE)"})]})})}),(0,a.jsx)("div",{className:"container my-3",children:(0,a.jsx)("div",{className:"row text-center",children:(0,a.jsx)("div",{className:"col-md-12",children:(0,a.jsx)("iframe",{src:"https://www.youtube.com/embed/".concat(s),frameBorder:"0",width:"720",height:"480",allowFullScreen:!0,allow:"autoplay; fullscreen"})})})})]})})};function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e,t){return u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},u(e,t)}function d(e,t){if(t&&("object"===s(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return f(e)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e){return m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},m(e)}r(9070),r(8304),r(489),r(1299),r(2419);var p=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&u(e,t)}(i,e);var t,r,n,o,c=(n=i,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=m(n);if(o){var r=m(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return d(this,e)});function i(e){var t,r,n,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),o={},(n="state")in(r=f(t=c.call(this,e)))?Object.defineProperty(r,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[n]=o,t}return t=i,(r=[{key:"render",value:function(){return(0,a.jsx)("div",{className:"container",children:(0,a.jsx)("div",{className:"row",children:(0,a.jsx)("div",{className:"col-md-12",children:(0,a.jsxs)("div",{id:"carouselExampleControlsNoTouching",className:"carousel slide","data-bs-touch":"false","data-bs-interval":"false",children:[(0,a.jsxs)("div",{className:"carousel-inner",children:[(0,a.jsx)("div",{className:"carousel-item active",children:(0,a.jsx)("div",{className:"card mx-auto",children:(0,a.jsx)("div",{className:"card-body",children:"Round 1 - Easy mode. Easy mode."})})}),(0,a.jsx)("div",{className:"carousel-item",children:(0,a.jsx)("div",{className:"card mx-auto",children:(0,a.jsx)("div",{className:"card-body",children:"Round 2 - Hard mode. Hard mode."})})}),(0,a.jsx)("div",{className:"carousel-item",children:(0,a.jsx)("div",{className:"card mx-auto",children:(0,a.jsx)("div",{className:"card-body",children:"Round 3 - Random mode. Random mode."})})})]}),(0,a.jsxs)("button",{className:"carousel-control-prev",type:"button","data-bs-target":"#carouselExampleControlsNoTouching","data-bs-slide":"prev",children:[(0,a.jsx)("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),(0,a.jsx)("span",{className:"visually-hidden",children:"Previous"})]}),(0,a.jsxs)("button",{className:"carousel-control-next",type:"button","data-bs-target":"#carouselExampleControlsNoTouching","data-bs-slide":"next",children:[(0,a.jsx)("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),(0,a.jsx)("span",{className:"visually-hidden",children:"Next"})]})]})})})})}}])&&l(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),i}(o.Component),h=(r(8323),r(3379)),y=r.n(h),v=r(7795),b=r.n(v),x=r(569),j=r.n(x),w=r(3565),N=r.n(w),g=r(9216),O=r.n(g),A=r(4589),S=r.n(A),E=r(8012),P={};P.styleTagTransform=S(),P.setAttributes=N(),P.insert=j().bind(null,"head"),P.domAPI=b(),P.insertStyleElement=O(),y()(E.Z,P),E.Z&&E.Z.locals&&E.Z.locals,r(5577);var T=function(){return(0,a.jsxs)("div",{className:"container my-3",children:[(0,a.jsx)("div",{className:"row",children:(0,a.jsxs)("div",{className:"col-md-12",children:[(0,a.jsx)("h1",{className:"text-center",children:"Votación FMS"}),(0,a.jsx)("p",{className:"text-center",children:"Video de prueba"}),(0,a.jsx)("p",{className:"text-center",children:"https://www.youtube.com/watch?v=mpZT9e8fcqc"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(p,{})]})};n.render((0,a.jsx)(T,{}),document.getElementById("root"))},8012:function(e,t,r){var n=r(7537),o=r.n(n),a=r(3645),c=r.n(a)()(o());c.push([e.id,"// extracted by mini-css-extract-plugin\nexport {};","",{version:3,sources:["webpack://./src/App.css"],names:[],mappings:"AAAA;QACQ,CAAA",sourcesContent:["// extracted by mini-css-extract-plugin\nexport {};"],sourceRoot:""}]),t.Z=c}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var a=r[e]={id:e,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.exports}n.m=t,e=[],n.O=function(t,r,o,a){if(!r){var c=1/0;for(u=0;u<e.length;u++){r=e[u][0],o=e[u][1],a=e[u][2];for(var i=!0,s=0;s<r.length;s++)(!1&a||c>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[s])}))?r.splice(s--,1):(i=!1,a<c&&(c=a));if(i){e.splice(u--,1);var l=o();void 0!==l&&(t=l)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[r,o,a]},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={179:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,a,c=r[0],i=r[1],s=r[2],l=0;if(c.some((function(t){return 0!==e[t]}))){for(o in i)n.o(i,o)&&(n.m[o]=i[o]);if(s)var u=s(n)}for(t&&t(r);l<c.length;l++)a=c[l],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(u)},r=self.webpackChunkfms_react=self.webpackChunkfms_react||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var o=n.O(void 0,[278],(function(){return n(2174)}));o=n.O(o)}();
//# sourceMappingURL=main.57a3b87c.js.map