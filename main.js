(()=>{"use strict";var e={28:(e,n,t)=>{t.d(n,{Z:()=>m});var r=t(81),a=t.n(r),o=t(645),i=t.n(o),c=t(667),s=t.n(c),d=new URL(t(131),t.b),l=i()(a()),p=s()(d);l.push([e.id,`:root {\n    --colorDark1: #610000;\n    --colorDark2: #BB0000;\n    --colorLight1: #FF1616;\n    --colorLight2: #FF6868;\n    --colorWhite: #FFF;\n    --colorBlack: #000;\n    --colorBackground: rgba(255, 255, 255, 0.7);\n\n    --fontP: 'Braton Composer Stamp Rough', sans-serif;\n    --fontHome: 'Onely Sans', sans-serif;\n    --fontMenu: 'Amontesa', sans-serif;\n    --fontItem: 'Whitestone', sans-serif;\n    --fontContact: 'Bartone', sans-serif;\n}\n\n* { padding: 0; margin: 0; box-sizing: border-box;}\n\nbody { width: 100%;}\nbody::-webkit-scrollbar { width: 0.5rem; }\nbody::-webkit-scrollbar-thumb { background-color: var(--colorDark2); }\nbody::-webkit-scrollbar-track { background-color: var(--colorLight2); }\n\n.content { min-height: 100vh; }\n\n/* ------------------- Header & NavBar ------------------- */\nheader {\n    background-color: var(--colorDark1);\n    color: var(--colorWhite);\n    display: flex; flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0.5rem;\n}\nheader > h1 { padding: 0.31rem; margin-left: 20px; font-family: var(--fontP); font-size: 3rem; letter-spacing: 0.12rem; }\n\nnav {\n    display: flex; justify-content: center;\n    padding: 0; margin: 0; margin-right: 20px;\n    gap: 2.5rem;\n}\nnav > button { width: 135px; }\n\n.btnNav {\n    padding: 0.8rem;\n    font-family: var(--fontP);\n    font-size: 1.2rem; letter-spacing: 0.12rem;\n    background-color: transparent; color: var(--colorWhite);\n    border: none; border-bottom: 3px solid transparent;\n    transition: transform 0.3s;\n} \n.btnNav.active { border-bottom: 3px solid var(--colorWhite); }  \n.btnNav:hover { transform: translateY(-10%); }\n\n/* ------------------- Main ------------------- */\nmain {\n    min-height: 100vh;\n    display: flex; flex-direction: column;\n    align-items: center; justify-content: center;\n    padding: 2rem;\n    background-image: url(${p});\n    background-position: center;\n    background-size: cover;\n}\n\n/* ------------------- HomePage ------------------- */\n.home-container {\n    background-color: var(--colorBackground);\n    display: flex; flex-direction: column;\n    padding: 1.8rem; gap: 2.86rem;\n    border-radius: 30px;\n}\n\n.presentation { display: flex; flex-direction: row; align-items: center;}\n.presentation > h1 { flex: 1; text-align: center; font-family: var(--fontP); letter-spacing: 0.15rem; font-size: 4.5rem; color: var(--colorDark2); }\n.presentation > p { flex: 1.5; padding: 1.8rem; font-family: var(--fontHome); font-size: 2.2rem; text-align: justify; color: #5A5151; }\n\n.specialties { display: flex; flex-direction: column; }\n.specialties > h1 { font-family: var(--fontP); font-size: 2.5rem; letter-spacing: 0.15rem; text-align: center; padding-bottom: 1rem; }\n.specialties > .peruvian { display: flex; flex-direction: row; gap: 2.2rem; font-family: var(--fontHome); }\n\n.peruvian > div { flex: 1;}\n.peruvian > div > h2 { text-transform: uppercase; text-align: center; letter-spacing: 0.5rem; padding-bottom: 0.8rem; color: var(--colorDark2)}\n.peruvian > div > p { text-align: justify; font-size: 1.1rem; color: #5A5151; }\n\n/* ------------------- MenuPage ------------------- */\n.menu-container {\n    background-color: var(--colorBackground);\n    display: flex; flex-direction: column;\n    padding: 1.8rem; gap: 1rem;    \n    border-radius: 30px;\n}\n\n.menu-section {\n    height: 100%;\n    display: flex; flex-direction: column;\n    justify-content: center; align-items: center;\n    border-bottom: 5px double var(--colorLight1); \n}\n.menu-section > h2 { font-family: var(--fontMenu); font-size: 1.93rem; color: var(--colorDark2) ; padding-bottom: 20px; }\n\n.menu-items { \n    width: 100%; padding-bottom: 30px;\n    display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); \n    gap: 1.5rem; font-family: var(--fontItem);\n}\n\n.menu-item {\n    height: 100%;\n    display: flex; flex-direction: column;\n    background-color: var(--colorWhite);\n    box-shadow: 4px 5px 2px var(--colorLight1);\n    border: 2px solid var(--colorLight2); border-radius: 15px;\n\n}\n.menu-item > h3 { padding-top: 15px; color: #B89800; text-align: center;text-transform: uppercase; font-size: 1.9rem;}\n.menu-item > p { text-align: justify; padding: 15px 30px; font-size: 1.25rem; }\n\n/* ------------------- ContactPage ------------------- */\n.contact-container {\n    background-color: var(--colorBackground);\n    display: flex; flex-direction: column;\n    padding: 1.8rem; gap: 3.5rem;    \n    border-radius: 30px;\n}\n\n.contact-info { display: flex; flex-direction: column; gap: 2rem; }\n\n.contact-item { width: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center; }\n.contact-item > h2 { \n    font-family: var(--fontP); font-size: 3rem; \n    margin-bottom: 40px; \n    width: 100%; padding: 0.8rem;\n    background-color: var(--colorDark2);\n    color: var(--colorWhite);\n    text-align: center; letter-spacing: 0.3rem;\n}\n.contact-item > p { font-family: var(--fontContact); font-size: 2rem; }\n\n.reservation-section { display: flex; flex-direction: column; justify-content: center; align-items: center; }\n\n.reservation-section > h2 { \n    font-family: var(--fontP); font-size: 3rem; \n    margin-bottom: 30px;\n    width: 100%; padding: 0.8rem;\n    background-color: var(--colorDark2);\n    color: var(--colorWhite);\n    text-align: center; letter-spacing: 0.3rem; \n}\n.reservation-section > form {\n    display: flex; flex-direction: column;\n    width: 100%; gap: 0.8rem;\n    font-family: var(--fontContact); font-size: 1.5rem;\n    padding: 0.8rem;\n}\nform > input {\n    font-family: var(--fontContact); font-size: 0.9rem ;\n    width: 100%; height: 2rem; padding: 0.5rem;\n    border: 2px solid var(--colorLight1);\n    margin-bottom: 15px;\n}\nform > button {\n    font-family: var(--fontContact); font-size: 1rem;\n    letter-spacing: 0.11rem;  \n    width: 40%; padding: 0.5rem; margin-left: 130px;\n    background-color: var(--colorBlack);\n    color: var(--colorWhite);\n    border-radius: 10px; border-color: var(--colorDark1);\n    box-shadow: 4px 5px var(--colorDark1);\n}\nform > button:hover { color: var(--colorLight2); }\n\n/* ------------------- footer ------------------- */\nfooter {\n    background-color: var(--colorDark1);\n    color: var(--colorWhite);\n    display: flex; flex-direction: row; justify-content: center;\n    align-items: center; gap: 6px;\n    padding: 0.63rem;\n    font-family: var(--fontP); letter-spacing: 0.12rem;\n}\n\n.fa { transition: transform 0.2s ease-in-out; color: var(--colorWhite);}\n.fa:hover { transform: rotate(360deg) scale(1.2);}\n\n/* ------------------- @media ------------------- */\n@media only screen and (max-width: 910px) {\n    header {\n        flex-direction: column;\n        justify-content: space-between;\n        align-items: center;\n    }\n    header > h1 { margin-left: 0px; margin-bottom: 20px;}\n\n    nav { margin-left: 20px;}\n\n    .home-container { gap: 1rem; padding: 1.5rem; }\n\n    .presentation { flex-direction: column;}\n    .presentation > h1 { font-size: 3.15rem; }\n    .presentation > p { font-size: 1.57rem; padding: 1.5rem 0rem;}\n\n    .specialties > h1 { font-size: 1.5rem; }\n    .specialties > .peruvian { flex-direction: column; }\n\n    .peruvian > div > h2 { font-size: 1.25rem; }\n}\n\n@media only screen and (max-width: 510px) {\n    .contact-item > h2 { font-size: 1.4rem; padding: 0.5rem;}\n    .reservation-section > h2 { font-size: 1.4rem; padding: 0.5rem;}\n}`,""]);const m=l},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&i[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),n.push(l))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var o={},i=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],l=o[d]||0,p="".concat(d," ").concat(l);o[d]=l+1;var m=t(p),u={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==m)n[m].references++,n[m].updater(u);else{var f=a(u,r);r.byIndex=c,n.splice(c,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var c=t(o[i]);n[c].references--}for(var s=r(e,a),d=0;d<o.length;d++){var l=t(o[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}o=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},131:(e,n,t)=>{e.exports=t.p+"5ef1b02c21614e3a4650.png"}},n={};function t(r){var a=n[r];if(void 0!==a)return a.exports;var o=n[r]={id:r,exports:{}};return e[r](o,o.exports,t),o.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var a=r.length-1;a>-1&&!e;)e=r[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),a=t.n(r),o=t(569),i=t.n(o),c=t(565),s=t.n(c),d=t(216),l=t.n(d),p=t(589),m=t.n(p),u=t(28),f={};function h(){const e=document.getElementById("main");e.textContent="",e.appendChild(function(){const e=document.createElement("div");e.classList.add("home-container");const n=document.createElement("div");n.classList.add("presentation");const t=document.createElement("h1");t.textContent="Your favourite Peruvian restaurant";const r=document.createElement("p");r.textContent="Welcome to our peruvian restaurant, where you can enjoy authentic Peruvian delicacies. Our cuisine will take you on a culinary journey through the traditions and flavours of Peru. Macchupisco, takes its name from one of the wonders of the world and the Peruvian national drink: Pisco.",n.appendChild(t),n.appendChild(r);const a=document.createElement("div");a.classList.add("specialties");const o=document.createElement("h1");o.textContent="peruvian gastronomy specialties",a.appendChild(o);const i=document.createElement("div");return i.classList.add("peruvian"),[{title:"Meat",description:'We count with 16 meat specialities , "Lomo Saltado" "Tallarin saltado" " Bistec a lo pobre" " Anticuchos" all prepared with high quality meat, all dishes are prepared with extreme care and dedication.'},{title:"Fish",description:'More than 16 Peruvian specialities, "Ceviche" Peruvian flagship dish, "Arroz con mariscos" seafood risotto, "Parihuela" fish soup with mussels, squid, crab and prawns, "Jalea" fried fish morsels and fried seafood.'},{title:"Barbecue",description:"Our workhorse, barbecued chicken, both to be eaten inside the restaurant and to take away."},{title:"Desserts",description:'We offer several desserts typical of Peru, the desserts are of high quality and a delight for the palate "Tres leches cake" cake made from a combination of 3 types of milk, "Crema volteada" literally means upside-down cream, after baking it is tipped onto the plate for tasting.'}].forEach((e=>{const n=function(e,n){const t=document.createElement("div"),r=document.createElement("h2");r.textContent=e;const a=document.createElement("p");return a.textContent=n,t.appendChild(r),t.appendChild(a),t}(e.title,e.description);i.appendChild(n)})),a.appendChild(i),e.appendChild(n),e.appendChild(a),e}())}function g(){const e=document.getElementById("main");e.textContent="",e.appendChild(function(){const e=document.createElement("div");return e.classList.add("menu-container"),[{name:"Entrées",items:[{name:"Causa Rellena",description:"potato, lime, yellow pepper, chicken and mayonnaise."},{name:"Papa a la Huancaina",description:"spicy cheese sauce, over boiled potatoes, olives and eggs."},{name:"Papa rellena",description:"mashed fried potatoes filled with meat, eggs and olives."}]},{name:"Main Courses",items:[{name:"Ají de Gallina",description:"chicken pieces dipped in a sauce made of ají amarillo peppers, walnuts and fresh cheese. Served with white rice and potatoes."},{name:"Lomo Saltado",description:"beef or chicken (your choice) stir-fried with onions, tomatoes, peppers and exotic spices. Served with rice."},{name:"Bistec a lo Pobre",description:"tasty grilled beef steak, served with crispy fried potatoes, caramelised onions and fried eggs. Served with rice."},{name:"Chaufa",description:"stir-fried rice with succulent chicken, meat or shrimp (your choice) pieces, crispy vegetables, and a combination of typical Peruvian condiments."}]},{name:"Desserts",items:[{name:"Picarones Peruanos",description:"fluffy doughnuts made from a mixture of flour, pumpkin, sweet potatoes and sugar."},{name:"Mazamorra Morada",description:"creamy dessert prepared from purple corn, cooked with soft fruit, aromatic spices and sugar."},{name:"Arroz con Leche",description:"creamy dessert made with rice cooked in milk and sugar. Served with a sprinkling of cinnamon."},{name:"Suspiro a la Limeña",description:"creamy dessert consists of two delicious layers: a bottom layer of a sweet caramelised milk cream and a top layer of soft cream flavoured with vanilla."}]},{name:"Drinks",items:[{name:"Chicha Morada",description:"prepared with purple corn, pineapple, cinnamon and natural herbs."},{name:"Inka Cola",description:"a sparkling and refreshing drink that embodies the unique taste and cultural identity of Perú."},{name:"Pisco Sour",description:"a distilled grape brandy, fresh lime juice, sugar syrup and egg whites."},{name:"Machu Picchu",description:"a blend of Pisco, fresh lemon juice, maracuya and sugar syrup, decorated with an orange peel."}]}].forEach((n=>{const t=function(e,n){const t=document.createElement("section");t.classList.add("menu-section");const r=document.createElement("h2");r.textContent=e,t.appendChild(r);const a=document.createElement("section");return a.classList.add("menu-items"),n.forEach((e=>{const n=function(e,n){const t=document.createElement("div");t.classList.add("menu-item");const r=document.createElement("h3");r.textContent=e;const a=document.createElement("p");return a.textContent=n,t.appendChild(r),t.appendChild(a),t}(e.name,e.description);a.appendChild(n)})),t.appendChild(a),t}(n.name,n.items);e.appendChild(t)})),e}())}function v(){const e=document.createElement("header"),n=document.createElement("h1");return n.classList.add("restaurant-name"),n.textContent="Macchupisco",e.appendChild(n),e.appendChild(function(){const e=document.createElement("nav"),n=document.createElement("button");n.classList.add("btnNav"),n.textContent="Home",n.addEventListener("click",(e=>{e.target.classList.contains("active")||(b(n),h())}));const t=document.createElement("button");t.classList.add("btnNav"),t.textContent="Menu",t.addEventListener("click",(e=>{e.target.classList.contains("active")||(b(t),g())}));const r=document.createElement("button");return r.classList.add("btnNav"),r.textContent="Contact",r.addEventListener("click",(e=>{e.target.classList.contains("active")||(b(r),function(){const e=document.getElementById("main");e.textContent="",e.appendChild(function(){const e=document.createElement("div");e.classList.add("contact-container");const n=document.createElement("div");n.classList.add("contact-info"),n.innerHTML='\n    <div class="contact-item">\n        <h2>Phone </h2>\n        <p>+39 (123)456-7890</p>\n    </div>\n    <div class="contact-item">\n        <h2>Email </h2>\n        <p>info@macchupisco.com</p>\n    </div>\n    ';const t=document.createElement("div");return t.classList.add("reservation-section"),t.innerHTML='\n    <h2>Reservations</h2>\n    <form>\n        <label for="name">Name : </label>\n        <input type="text" id="name" required>\n\n        <label for="date">Date : </label>\n        <input type="date" id="date" required>\n\n        <label for="people">N° people : </label>\n        <input type="number" id="people" required min="1" max="100">\n\n        <button type="submit">Check Availability</button>\n    </form>\n    ',e.appendChild(n),e.appendChild(t),e}())}())})),e.appendChild(n),e.appendChild(t),e.appendChild(r),e}()),e}function b(e){document.querySelectorAll(".btnNav").forEach((e=>{e!==this&&e.classList.remove("active")})),e.classList.add("active")}f.styleTagTransform=m(),f.setAttributes=s(),f.insert=i().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=l(),n()(u.Z,f),u.Z&&u.Z.locals&&u.Z.locals,function(){const e=document.getElementById("content");e.appendChild(v()),e.appendChild(function(){const e=document.createElement("main");return e.classList.add("pages"),e.setAttribute("id","main"),e}()),e.appendChild(function(){const e=document.createElement("footer"),n=document.createElement("p");n.textContent=`Copyright © ${(new Date).getFullYear()} Ariana Gutierrez`;const t=document.createElement("a");t.href="https://github.com/arianagutierrez";const r=document.createElement("i");return r.classList.add("fa"),r.classList.add("fa-github-square"),t.appendChild(r),e.appendChild(n),e.appendChild(t),e}()),b(document.querySelector(".btnNav")),h()}()})()})();