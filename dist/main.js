(()=>{"use strict";var e={28:(e,n,t)=>{t.d(n,{Z:()=>m});var a=t(81),r=t.n(a),o=t(645),i=t.n(o),c=t(667),s=t.n(c),d=new URL(t(684),t.b),l=i()(r()),p=s()(d);l.push([e.id,`:root {\n    --colorDark1: #610000;\n    --colorDark2: #BB0000;\n    --colorLight1: #FF1616;\n    --colorLight2: #FF6868;\n    --colorWhite: #FFF;\n    --colorBlack: #000;\n    --colorBackground: rgba(255, 255, 255, 0.7);\n\n    --fontP: 'Braton Composer Stamp Rough', sans-serif;\n    --fontHome: 'Onely Sans', sans-serif;\n    --fontMenu: 'Amontesa', sans-serif;\n    --fontItem: 'Rublack', sans-serif;\n    --fontContact: 'Bartone', sans-serif;\n}\n\n* { padding: 0; margin: 0; box-sizing: border-box;}\n\nbody { width: 100%;}\nbody::-webkit-scrollbar { width: 0.5rem; }\nbody::-webkit-scrollbar-thumb { background-color: var(--colorDark2); }\nbody::-webkit-scrollbar-track { background-color: var(--colorLight2); }\n\n.content { min-height: 100vh; }\n\n/* ------------------- Header & NavBar ------------------- */\nheader {\n    background-color: var(--colorDark1);\n    color: var(--colorWhite);\n    display: flex; flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0.5rem;\n}\nheader > h1 { padding: 0.31rem; margin-left: 20px; font-family: var(--fontP); font-size: 3rem; letter-spacing: 0.12rem; }\n\nnav {\n    display: flex; justify-content: center;\n    padding: 0; margin: 0; margin-right: 20px;\n    gap: 2.5rem;\n}\nnav > button { width: 135px; }\n\n.btnNav {\n    padding: 0.8rem;\n    font-family: var(--fontP);\n    font-size: 1.2rem; letter-spacing: 0.12rem;\n    background-color: transparent; color: var(--colorWhite);\n    border: none; border-bottom: 3px solid transparent;\n    transition: transform 0.3s;\n} \n.btnNav.active { border-bottom: 3px solid var(--colorWhite); }  \n.btnNav:hover { transform: translateY(-10%); }\n\n/* ------------------- Main ------------------- */\nmain {\n    min-height: 100vh;\n    display: flex; flex-direction: column;\n    align-items: center; justify-content: center;\n    padding: 2rem;\n    background-image: url(${p});\n    background-position: center;\n    background-size: cover;\n}\n\n/* ------------------- HomePage ------------------- */\n.home-container {\n    background-color: var(--colorBackground);\n    display: flex; flex-direction: column;\n    align-items: center; padding: 1.8rem;\n    border-radius: 30px;\n}\n\n.presentation { display: flex; flex-direction: row; align-items: center; }\n.presentation > h1 { flex: 1; text-align: center; font-family: var(--fontP); letter-spacing: 0.15rem; font-size: 4.5rem; color: var(--colorDark2); }\n.presentation > p { flex: 1.5; padding: 0rem 1.8rem; font-family: var(--fontHome); font-size: 2.2rem; text-align: justify; color: #5A5151; }\n\n.divider { width: 70%; border-top: 5px dashed var(--colorLight1); margin: 30px 0px; }\n\n.specialties { display: flex; flex-direction: column; }\n.specialties > h1 { font-family: var(--fontP); font-size: 2.5rem; letter-spacing: 0.15rem; text-align: center; padding-bottom: 1rem; width: 100%;}\n.specialties > .peruvian { display: flex; flex-direction: row; gap: 2.2rem; font-family: var(--fontHome); }\n\n.peruvian > div { flex: 1;}\n.peruvian > div > h2 { text-transform: uppercase; text-align: center; letter-spacing: 0.5rem; padding-bottom: 0.8rem; color: var(--colorDark2)}\n.peruvian > div > p { text-align: justify; font-size: 1.1rem; color: #5A5151; }\n\n/* ------------------- MenuPage ------------------- */\n.menu-container {\n    background-color: var(--colorBackground);\n    display: flex; flex-direction: column;\n    gap: 1rem; width: 100%;\n}\n\n.menu-section {\n    height: 100%; padding: 1.25rem 2.5rem;\n    display: flex; flex-direction: column;\n    justify-content: center; align-items: center;\n}\n.menu-section > h2 { font-family: var(--fontMenu); font-size: 1.93rem; color: var(--colorDark2) ; padding-bottom: 20px; }\n\n.menu-items { \n    width: 100%; padding-bottom: 30px;\n    display: grid; grid-template-columns: repeat(auto-fill, minmax(266px, 1fr)); \n    gap: 1.5rem; font-family: var(--fontItem);\n    border-bottom: 5px double var(--colorLight1); \n}\n\n.menu-item {\n    width: 90%; height: 100%; padding: 20px 30px; margin: 0;\n    display: flex; flex-direction: column; \n    justify-content: center; align-items: center;\n    background-color: var(--colorWhite);\n    box-shadow: 4px 5px 2px var(--colorLight1);\n    border: 2px solid var(--colorLight2); border-radius: 15px;\n}\n\n\n.menu-item > h3 { color: #B89800; text-align: center;text-transform: uppercase; font-size: 1.8rem; letter-spacing: 0.12rem;}\n.menu-item > .image {\n    width: 90%; height: 40%;\n    margin: 30px 0px;\n    transition: transform 0.3s;\n}\n.menu-item > .image:hover {\n    cursor: pointer;\n    transform: scale(1.2); \n}\n.menu-item > p { text-align: justify; font-size: 1.25rem; letter-spacing: 1px;}\n\n/* ------------------- ContactPage ------------------- */\n.contact-container {\n    background-color: var(--colorBackground);\n    display: flex; flex-direction: column;\n    padding: 1.8rem; gap: 3.5rem;    \n    border-radius: 30px;\n}\n\n.contact-info { display: flex; flex-direction: column; gap: 2rem; }\n\n.contact-item { width: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center; }\n.contact-item > h2 { \n    font-family: var(--fontP); font-size: 3rem; \n    margin-bottom: 40px; \n    width: 100%; padding: 0.8rem;\n    background-color: var(--colorDark2);\n    color: var(--colorWhite);\n    text-align: center; letter-spacing: 0.3rem;\n}\n.contact-item > p { font-family: var(--fontContact); font-size: 2rem; }\n\n.reservation-section { display: flex; flex-direction: column; justify-content: center; align-items: center; }\n\n.reservation-section > h2 { \n    font-family: var(--fontP); font-size: 3rem; \n    margin-bottom: 30px;\n    width: 100%; padding: 0.8rem;\n    background-color: var(--colorDark2);\n    color: var(--colorWhite);\n    text-align: center; letter-spacing: 0.3rem; \n}\n.reservation-section > form {\n    display: flex; flex-direction: column;\n    width: 100%; gap: 0.8rem;\n    font-family: var(--fontContact); font-size: 1.5rem;\n    padding: 0.8rem;\n}\nform > input {\n    font-family: var(--fontContact); font-size: 0.9rem ;\n    width: 100%; height: 2rem; padding: 0.5rem;\n    border: 2px solid var(--colorLight1); border-radius: 10px;\n    margin-bottom: 15px;\n}\nform > button {\n    font-family: var(--fontContact); font-size: 1rem;\n    letter-spacing: 0.11rem;  \n    width: 40%; padding: 0.5rem; margin-left: 130px;\n    background-color: var(--colorBlack);\n    color: var(--colorWhite);\n    border-radius: 10px; border-color: var(--colorDark1);\n    box-shadow: 4px 5px var(--colorDark1);\n}\nform > button:hover { color: var(--colorLight2); }\n\n/* ------------------- footer ------------------- */\nfooter {\n    background-color: var(--colorDark1);\n    color: var(--colorWhite);\n    display: flex; flex-direction: row; justify-content: center;\n    align-items: center; gap: 6px;\n    padding: 0.63rem;\n    font-family: var(--fontP); letter-spacing: 0.12rem;\n}\n\n.fa { transition: transform 0.2s ease-in-out; color: var(--colorWhite);}\n.fa:hover { transform: rotate(360deg) scale(1.2);}\n\n/* ------------------- @media ------------------- */\n@media only screen and (max-width: 910px) {\n    header { flex-direction: column; }\n    header > h1 { margin-left: 0px; margin-bottom: 20px;}\n\n    nav { margin-left: 20px;}\n\n    .home-container { gap: 1rem; padding: 1.5rem; }\n\n    .presentation { flex-direction: column;}\n    .presentation > h1 { font-size: 3.15rem; }\n    .presentation > p { font-size: 1.57rem; padding: 25px 0px 0px 0px;}\n    \n    .divider { width: 90%; }\n\n    .specialties > h1 { font-size: 1.5rem; }\n    .specialties > .peruvian { flex-direction: column; }\n\n    .peruvian > div > h2 { font-size: 1.25rem; }\n}\n\n@media only screen and (max-width: 515px) {\n    header > h1 { font-size: 2rem; }\n    nav { gap: 0.5rem; }\n    nav > button { width: 115px; }\n    .btnNav { padding: 0.5rem; font-size: 1rem; } \n\n    .presentation > h1 { font-size: 2rem; }\n    .presentation > p { font-size: 1.25rem;}\n    \n    .divider { margin: 20px 0px; }\n    .specialties > h1 { font-size: 1rem; } \n    .peruvian > div > h2 { font-size: 0.8rem; }\n\n    .contact-item > h2 { font-size: 1.5rem; }\n    .contact-item > p { font-size: 1.25rem; }\n    .reservation-section > h2 { font-size: 1.5rem; }\n\n    form > button { width:  60%; margin-left: 46px; }\n    \n    footer { font-size: 0.8rem; }\n}\n`,""]);const m=l},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",a=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),a&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),a&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,a,r,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(a)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);a&&i[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),n.push(l))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,a=0;a<n.length;a++)if(n[a].identifier===e){t=a;break}return t}function a(e,a){for(var o={},i=[],c=0;c<e.length;c++){var s=e[c],d=a.base?s[0]+a.base:s[0],l=o[d]||0,p="".concat(d," ").concat(l);o[d]=l+1;var m=t(p),u={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==m)n[m].references++,n[m].updater(u);else{var f=r(u,a);a.byIndex=c,n.splice(c,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var o=a(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var c=t(o[i]);n[c].references--}for(var s=a(e,r),d=0;d<o.length;d++){var l=t(o[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}o=s}}},569:e=>{var n={};e.exports=function(e,t){var a=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,r&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(a,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},684:(e,n,t)=>{e.exports=t.p+"5ef1b02c21614e3a4650.png"}},n={};function t(a){var r=n[a];if(void 0!==r)return r.exports;var o=n[a]={id:a,exports:{}};return e[a](o,o.exports,t),o.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var a=n.getElementsByTagName("script");if(a.length)for(var r=a.length-1;r>-1&&!e;)e=a[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(379),n=t.n(e),a=t(795),r=t.n(a),o=t(569),i=t.n(o),c=t(565),s=t.n(c),d=t(216),l=t.n(d),p=t(589),m=t.n(p),u=t(28),f={};function h(){const e=document.getElementById("main");e.textContent="",e.appendChild(function(){const e=document.createElement("div");e.classList.add("home-container");const n=document.createElement("div");n.classList.add("presentation");const t=document.createElement("h1");t.textContent="Your favourite Peruvian restaurant";const a=document.createElement("p");a.textContent="Welcome to our peruvian restaurant, where you can enjoy authentic Peruvian delicacies. Our cuisine will take you on a culinary journey through the traditions and flavours of Peru. Machupisco, takes its name from one of the wonders of the world and the Peruvian national drink: Pisco.",n.appendChild(t),n.appendChild(a);const r=document.createElement("div");r.classList.add("divider");const o=document.createElement("div");o.classList.add("specialties");const i=document.createElement("h1");i.textContent="peruvian gastronomy specialties",o.appendChild(i);const c=document.createElement("div");return c.classList.add("peruvian"),[{title:"Meat",description:'We count with 16 meat specialities , "Lomo Saltado" "Tallarin saltado" " Bistec a lo pobre" " Anticuchos" all prepared with high quality meat, all dishes are prepared with extreme care and dedication.'},{title:"Fish",description:'More than 16 Peruvian specialities, "Ceviche" Peruvian flagship dish, "Arroz con mariscos" seafood risotto, "Parihuela" fish soup with mussels, squid, crab and prawns, "Jalea" fried fish morsels and fried seafood.'},{title:"Barbecue",description:"Our workhorse, barbecued chicken, both to be eaten inside the restaurant and to take away."},{title:"Desserts",description:'We offer several desserts typical of Peru, the desserts are of high quality and a delight for the palate "Tres leches cake" cake made from a combination of 3 types of milk, "Crema volteada" literally means upside-down cream, after baking it is tipped onto the plate for tasting.'}].forEach((e=>{const n=function(e,n){const t=document.createElement("div"),a=document.createElement("h2");a.textContent=e;const r=document.createElement("p");return r.textContent=n,t.appendChild(a),t.appendChild(r),t}(e.title,e.description);c.appendChild(n)})),o.appendChild(c),e.appendChild(n),e.appendChild(r),e.appendChild(o),e}())}function g(){const e=document.getElementById("main");e.textContent="",e.appendChild(function(){const e=document.createElement("div");return e.classList.add("menu-container"),[{name:"Entrées",items:[{name:"Causa Rellena",image:"https://www.casapappagallo.it/storage/17114/causa-rellena-de-pollo.JPG",description:"potato, lime, yellow pepper, chicken and mayonnaise."},{name:"Papa a la Huancaina",image:"https://recetinas.com/wp-content/uploads/2018/04/papa-a-la-huancaina.jpg",description:"spicy cheese sauce, over boiled potatoes, olives and eggs."},{name:"Papa rellena",image:"https://i.ytimg.com/vi/VSWIJK58cOg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLARz2_bxrEtDKQOUO5qzIkpPtbqUw",description:"mashed fried potatoes filled with meat, eggs and olives."}]},{name:"Main Courses",items:[{name:"Ají de Gallina",image:"https://upload.wikimedia.org/wikipedia/commons/4/44/Aj%C3%AD_de_gallina_-_Tradicional.jpg",description:"chicken pieces dipped in a sauce made of ají amarillo peppers, walnuts and fresh cheese. Served with white rice and potatoes."},{name:"Lomo Saltado",image:"https://i.ytimg.com/vi/r2oGrH__hT0/maxresdefault.jpg",description:"beef or chicken (your choice) stir-fried with onions, tomatoes, peppers and exotic spices. Served with rice."},{name:"Bistec a lo Pobre",image:"https://blog.amigofoods.com/wp-content/uploads/2021/04/bistec-a-lo-pobre.jpg",description:"tasty grilled beef steak, served with crispy fried potatoes, caramelised onions and fried eggs. Served with rice."},{name:"Chaufa",image:"https://arousingappetites.com/wp-content/uploads/2022/08/Arroz-Chaufa-Final-Image-6.jpeg",description:"stir-fried rice with succulent chicken, meat or shrimp (your choice) pieces, crispy vegetables, and a combination of typical Peruvian condiments."}]},{name:"Desserts",items:[{name:"Picarones Peruanos",image:"https://www.kuodatravel.com/wp-content/uploads/2020/03/picarones-peruvian-donut.jpg",description:"fluffy doughnuts made from a mixture of flour, pumpkin, sweet potatoes and sugar."},{name:"Mazamorra Morada",image:"https://www.infobae.com/new-resizer/AvWFa-Tlv4lk2OZllhz-oNoq66c=/arc-anglerfish-arc2-prod-infobae/public/3VZXDSKEN5ASNDF2HHBZVKESLU.png",description:"creamy dessert prepared from purple corn, cooked with soft fruit, aromatic spices and sugar."},{name:"Arroz con Leche",image:"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F21%2F2018%2F03%2F25%2Frecetas-1092-arroz-con-leche-2000.jpg&q=60",description:"creamy dessert made with rice cooked in milk and sugar. Served with a sprinkling of cinnamon."}]},{name:"Drinks",items:[{name:"Chicha Morada",image:"https://www.piscotrail.com/sf/media/2012/10/chicha-morada-drink.jpg",description:"prepared with purple corn, pineapple, cinnamon and natural herbs."},{name:"Inka Cola",image:"https://vempraver.com.br/wp-content/uploads/2019/08/inca-kola-peru-vempraver.jpg",description:"a sparkling and refreshing drink that embodies the unique taste and cultural identity of Perú."},{name:"Pisco Sour",image:"https://tastecocktails.com/wp-content/uploads/2015/09/Pisco-Sour-e1441121035947.jpg",description:"a distilled grape brandy, fresh lime juice, sugar syrup and egg whites."},{name:"Machu Picchu",image:"https://www.plataran.com/plataran-ubud/wp-content/uploads/sites/8/2020/03/Mixology-Class.jpg",description:"a blend of Pisco, fresh lemon juice, maracuya and sugar syrup, decorated with an orange peel."}]}].forEach((n=>{const t=function(e,n){const t=document.createElement("section");t.classList.add("menu-section");const a=document.createElement("h2");a.textContent=e,t.appendChild(a);const r=document.createElement("section");return r.classList.add("menu-items"),n.forEach((e=>{const n=function(e,n,t){const a=document.createElement("div");a.classList.add("menu-item");const r=document.createElement("h3");r.textContent=e;const o=document.createElement("img");o.classList.add("image"),o.src=n;const i=document.createElement("p");return i.textContent=t,a.appendChild(r),a.appendChild(o),a.appendChild(i),a}(e.name,e.image,e.description);r.appendChild(n)})),t.appendChild(r),t}(n.name,n.items);e.appendChild(t)})),e}())}function v(){const e=document.createElement("header"),n=document.createElement("h1");return n.classList.add("restaurant-name"),n.textContent="Machupisco",e.appendChild(n),e.appendChild(function(){const e=document.createElement("nav"),n=document.createElement("button");n.classList.add("btnNav"),n.textContent="Home",n.addEventListener("click",(e=>{e.target.classList.contains("active")||(b(n),h())}));const t=document.createElement("button");t.classList.add("btnNav"),t.textContent="Menu",t.addEventListener("click",(e=>{e.target.classList.contains("active")||(b(t),g())}));const a=document.createElement("button");return a.classList.add("btnNav"),a.textContent="Contact",a.addEventListener("click",(e=>{e.target.classList.contains("active")||(b(a),function(){const e=document.getElementById("main");e.textContent="",e.appendChild(function(){const e=document.createElement("div");e.classList.add("contact-container");const n=document.createElement("div");n.classList.add("contact-info"),n.innerHTML='\n    <div class="contact-item">\n        <h2>Phone </h2>\n        <p>+39 (123)456-7890</p>\n    </div>\n    <div class="contact-item">\n        <h2>Email </h2>\n        <p>info@macchupisco.com</p>\n    </div>\n    ';const t=document.createElement("div");return t.classList.add("reservation-section"),t.innerHTML='\n    <h2>Reservations</h2>\n    <form>\n        <label for="name">Name : </label>\n        <input type="text" id="name" required>\n\n        <label for="date">Date : </label>\n        <input type="date" id="date" required>\n\n        <label for="people">N° people : </label>\n        <input type="number" id="people" required min="1" max="100">\n\n        <button type="submit">Check Availability</button>\n    </form>\n    ',e.appendChild(n),e.appendChild(t),e}())}())})),e.appendChild(n),e.appendChild(t),e.appendChild(a),e}()),e}function b(e){document.querySelectorAll(".btnNav").forEach((e=>{e!==this&&e.classList.remove("active")})),e.classList.add("active")}f.styleTagTransform=m(),f.setAttributes=s(),f.insert=i().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=l(),n()(u.Z,f),u.Z&&u.Z.locals&&u.Z.locals,function(){const e=document.getElementById("content");e.appendChild(v()),e.appendChild(function(){const e=document.createElement("main");return e.classList.add("pages"),e.setAttribute("id","main"),e}()),e.appendChild(function(){const e=document.createElement("footer"),n=document.createElement("p");n.textContent=`Copyright © ${(new Date).getFullYear()} Ariana Gutierrez`;const t=document.createElement("a");t.href="https://github.com/arianagutierrez";const a=document.createElement("i");return a.classList.add("fa"),a.classList.add("fa-github-square"),t.appendChild(a),e.appendChild(n),e.appendChild(t),e}()),b(document.querySelector(".btnNav")),h()}()})()})();