(()=>{var n={770:(n,e,t)=>{"use strict";t.d(e,{Z:()=>s});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@700&display=swap);"]),a.push([n.id,"/* Josefin Sans - BOLD 700 */\n\nsection {\n    display: grid; /* this makes it easy to center objects in section */\n    place-items: center;\n    align-content: center;\n    min-height: 100vh;\n    font-family: 'Josefin Sans', sans-serif;\n}",""]);const s=a},720:(n,e,t)=>{"use strict";t.d(e,{Z:()=>s});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@500&family=Major+Mono+Display&display=swap);"]),a.push([n.id,".top_header {\n    position: fixed;\n    display: grid;\n    justify-items: center;\n    align-items: center;\n    flex-wrap: wrap;\n    \n    margin: 0;\n    padding: 0;\n    top: 0;\n    left: 0;\n\n    min-height: 5vh;\n    width: 100vw;\n\n    background-color: #232731;\n    font-family: 'Josefin Sans', sans-serif;\n}\n\n.dropdown {\n    position: relative;\n    min-width: 15em;\n}\n\n.dropdown * {\n    box-sizing: border-box;\n}\n\n.select {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    border: 2px #2a2f3b solid;\n    border-radius: 0.5em;\n    padding: 0.5em;\n\n    background: #2a2f3b;\n    color: white;\n    \n    cursor: pointer;\n    transition: background 0.3s;\n}\n\n\n/* \n  Button & caret styles \n  (added later in JavaScript)\n\n*/\n\n.select-clicked {\n    border: 2px #26489a solid;\n    box-shadow: 0 0 0.8em #26489a\n}\n\n.select:hover {\n    background: #323741;\n}\n\n.caret {\n    width: 0;\n    height: 0;\n\n    border-left: 5px solid transparent;\n    border-right: 5px solid transparent;\n    border-top: 6px solid #fff;\n\n    transition: 0.3s;\n}\n\n.caret-rotate {\n    transform: rotate(180deg);\n}\n\n.menu {\n    list-style: none;\n    padding: 0.2em 0.5em;\n    position: absolute;\n\n    top: 3em;\n    left: 50%;\n    width: 100%;\n    z-index: 1;\n    \n    display: none;\n    transform: translateX(-50%);\n    opacity: 0;\n    \n    box-shadow: 0 0.5em 1em rgba(0, 0, 0, 0.2);\n    border-radius: 0.5em;\n    color: #fff;\n    background: #242131;\n    border: 1px #272838;\n    \n    transition: 0.2s;\n}\n\n.menu li {\n    padding: 0.7em 0.5em;\n    margin: 0.3em 0;\n    border-radius: 0.5em;\n\n    cursor: pointer;\n}\n\n.menu li:hover {\n    background: #26489a;\n}\n\n/* \n\nActive styles\n(added in JavaScript)\n\n */\n\n .active {\n    background: #faf;\n }\n\n .contact_info-open {\n    display: block;\n    opacity: 1;\n }\n\n ",""]);const s=a},645:n=>{"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},81:n=>{"use strict";n.exports=function(n){return n[1]}},379:n=>{"use strict";var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],s=0;s<n.length;s++){var c=n[s],d=r.base?c[0]+r.base:c[0],l=i[d]||0,u="".concat(d," ").concat(l);i[d]=l+1;var p=t(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var m=o(f,r);r.byIndex=s,e.splice(s,0,{identifier:u,updater:m,references:1})}a.push(u)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var s=t(i[a]);e[s].references--}for(var c=r(n,o),d=0;d<i.length;d++){var l=t(i[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=c}}},569:n=>{"use strict";var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{"use strict";n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{"use strict";n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{"use strict";n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{"use strict";n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},635:()=>{new IntersectionObserver((n=>{n.forEach((n=>{}))})),document.querySelectorAll(".hidden")},134:()=>{document.getElementById("info_software_skills"),document.getElementById("info_instrumentation_skills"),document.getElementById("info_lab_skills")}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{"use strict";var n=t(379),e=t.n(n),r=t(795),o=t.n(r),i=t(569),a=t.n(i),s=t(565),c=t.n(s),d=t(216),l=t.n(d),u=t(589),p=t.n(u),f=t(770),m={};m.styleTagTransform=p(),m.setAttributes=c(),m.insert=a().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=l(),e()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;var v=t(720),h={};h.styleTagTransform=p(),h.setAttributes=c(),h.insert=a().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=l(),e()(v.Z,h),v.Z&&v.Z.locals&&v.Z.locals,t(635),t(134)})()})();