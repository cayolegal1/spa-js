(()=>{"use strict";const n="https://rickandmortyapi.com/api/character",a=async a=>{const e=a?`${n}/${a}`:n;try{const n=await fetch(e);return await n.json()}catch(n){console.error(n.message)}},e=()=>location.hash.slice(1).toLocaleLowerCase().split("/")[1]||"/",t=()=>'\n\n        <div class="error404">\n            <h2>Error 404</h2>\n            <h4>La página que estas buscando no existe. Por favor intenta con otra</h4>\n        </div>\n\n    ',r={"/":async()=>`\n        <br>\n        <div class="characters">\n            ${(await a()).results.map((n=>`\n                <article class="character-item">\n                    <a href="#/${n.id}/" class="">\n                        <img src="${n.image}" alt="${n.name}" title="${n.name}" class="character-image"/>\n                        <h2>${n.name}</h2>\n                    </a>\n                </article>\n                `)).join(" ")}\n               \n        </div>\n    `,"/:id":async()=>{const n=e(),t=await a(n);return`\n\n    <div class="character-inner">\n\n        <article class="character-card">\n            <img src="${t.image}" alt="name">\n            <h2>${t.name}</h2>\n        </article>\n\n        <article class="character-card">\n            <h3>Episodes: ${t.episode.length}</h3>\n            <h3>Status: ${t.status}</h3>\n            <h3>Species: ${t.species}</h3>\n            <h3>Gender: ${t.gender}</h3>\n            <h3>Origin: ${t.origin.name}</h3>\n            <h3>Last location: ${t.location.name}</h3>\n        </article>\n\n    </div>\n\n    `},error404:t},c=async()=>{const n=document.querySelector("#content");document.querySelector("#header").innerHTML=await'\n\n    <div class="header-main">\n\n        <div class="header-logo">\n            <h1>\n                <a href="/">\n                    100tifi.co\n                </a>\n            </h1>\n        </div>\n\n        <div class="header-nav">\n            <a href="#/about/">About</a>\n        </div>\n    </div>\n\n    ';let a=e(),c=await(n=>n.length<=3?"/"===n?n:"/:id":`/${n}/`)(a),i=r[c]?r[c]:t;n.innerHTML=await i()};window.addEventListener("DOMContentLoaded",c),window.addEventListener("hashchange",c)})();