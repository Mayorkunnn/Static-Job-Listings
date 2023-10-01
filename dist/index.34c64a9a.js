(()=>{function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},a=t.parcelRequire0c15;null==a&&((a=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var a={id:e,exports:{}};return o[e]=a,t.call(a.exports,a,a.exports),a.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},t.parcelRequire0c15=a),a.register("5hobp",function(e,t){Object.defineProperty(e.exports,"getBundleURL",{get:()=>o,set:e=>o=e,enumerable:!0,configurable:!0});var o,n={};o=function(e){var t=n[e];return t||(t=function(){try{throw Error()}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)// Use the 3rd one, which will be a runtime in the original bundle.
return(""+e[2]).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}(),n[e]=t),t}});/** @format */var r={};r=a("5hobp").getBundleURL("jZoTS")+"photosnap.61305012.svg";var l={};l=a("5hobp").getBundleURL("jZoTS")+"manage.37597213.svg";var i={};i=a("5hobp").getBundleURL("jZoTS")+"account.3969caf6.svg";var s={};s=a("5hobp").getBundleURL("jZoTS")+"myhome.e3805188.svg";var c={};c=a("5hobp").getBundleURL("jZoTS")+"loop-studios.732e87cf.svg";var d={};d=a("5hobp").getBundleURL("jZoTS")+"faceit.8e7834ad.svg";var u={};u=a("5hobp").getBundleURL("jZoTS")+"shortly.633e2ae6.svg";var p={};p=a("5hobp").getBundleURL("jZoTS")+"insure.69a87e6d.svg";var g={};g=a("5hobp").getBundleURL("jZoTS")+"eyecam-co.54d3c19c.svg";var f={};f=a("5hobp").getBundleURL("jZoTS")+"the-air-filter-company.61ac3090.svg";let v=document.querySelector("main"),h=document.querySelector(".screen"),m=document.querySelector("aside"),b=document.querySelector(".filter-buttons-container"),S=[{id:1,company:"Photosnap",logo:/*@__PURE__*/e(r),new:!0,featured:!0,position:"Senior Frontend Developer",role:"Frontend",level:"Senior",postedAt:"1d ago",contract:"Full Time",location:"USA Only",languages:["HTML","CSS","JavaScript"],tools:[]},{id:2,company:"Manage",logo:/*@__PURE__*/e(l),new:!0,featured:!0,position:"Fullstack Developer",role:"Fullstack",level:"Midweight",postedAt:"1d ago",contract:"Part Time",location:"Remote",languages:["Python"],tools:["React"]},{id:3,company:"Account",logo:/*@__PURE__*/e(i),new:!0,featured:!1,position:"Junior Frontend Developer",role:"Frontend",level:"Junior",postedAt:"2d ago",contract:"Part Time",location:"USA Only",languages:["JavaScript"],tools:["React","Sass"]},{id:4,company:"MyHome",logo:/*@__PURE__*/e(s),new:!1,featured:!1,position:"Junior Frontend Developer",role:"Frontend",level:"Junior",postedAt:"5d ago",contract:"Contract",location:"USA Only",languages:["CSS","JavaScript"],tools:[]},{id:5,company:"Loop Studios",logo:/*@__PURE__*/e(c),new:!1,featured:!1,position:"Software Engineer",role:"Fullstack",level:"Midweight",postedAt:"1w ago",contract:"Full Time",location:"Worldwide",languages:["JavaScript"],tools:["Ruby","Sass"]},{id:6,company:"FaceIt",logo:/*@__PURE__*/e(d),new:!1,featured:!1,position:"Junior Backend Developer",role:"Backend",level:"Junior",postedAt:"2w ago",contract:"Full Time",location:"UK Only",languages:["Ruby"],tools:["RoR"]},{id:7,company:"Shortly",logo:/*@__PURE__*/e(u),new:!1,featured:!1,position:"Junior Developer",role:"Frontend",level:"Junior",postedAt:"2w ago",contract:"Full Time",location:"Worldwide",languages:["HTML","JavaScript"],tools:["Sass"]},{id:8,company:"Insure",logo:/*@__PURE__*/e(p),new:!1,featured:!1,position:"Junior Frontend Developer",role:"Frontend",level:"Junior",postedAt:"2w ago",contract:"Full Time",location:"USA Only",languages:["JavaScript"],tools:["Vue","Sass"]},{id:9,company:"Eyecam Co.",logo:/*@__PURE__*/e(g),new:!1,featured:!1,position:"Full Stack Engineer",role:"Fullstack",level:"Midweight",postedAt:"3w ago",contract:"Full Time",location:"Worldwide",languages:["JavaScript","Python"],tools:["Django"]},{id:10,company:"The Air Filter Company",logo:/*@__PURE__*/e(f),new:!1,featured:!1,position:"Front-end Dev",role:"Frontend",level:"Junior",postedAt:"1mo ago",contract:"Part Time",location:"Worldwide",languages:["JavaScript"],tools:["React","Sass"]}];class y{jobs=[];#e=[];#t=new Set;constructor(){this.jobs=JSON.parse(JSON.stringify(S))||[],this.#o(),// const filterInfo = [this.jobs.role, this.jobs.level, ...this.jobs.languages, ...this.jobs.tools];
v.addEventListener("click",e=>{let t=e.target;t.classList.contains("btn")&&this.#n(t)}),m.addEventListener("click",e=>{let t=e.target;t.classList.contains("close")&&this.#a(t.parentElement)})}#n(e){this.#t.add(e.textContent),this.#e=[...this.#t],this.#r(),h.children.length>0&&h.classList.remove("hidden");let t=this.jobs.filter(e=>this.#e.every(t=>e.filterInfo.includes(t)));v.innerHTML="",this.#o(t)}#r(){let e="";this.#t.forEach(t=>{e+=`<button class="btn btn__close" type="button" title=${t} >
          ${t} <img
            class="close"
            src="./images/icon-remove.svg"
            alt=""
          /></button
        >`}),b.innerHTML=e}#a(e){let t=e.textContent.trim();// Delete from Set
this.#t.delete(t),// Update Array
this.#e=[...this.#t],b.removeChild(e);let o=this.jobs.filter(e=>this.#e.every(t=>e.filterInfo.includes(t)));v.innerHTML="",this.#o(o),0===this.#t.size&&h.classList.add("hidden")}#o(e=this.jobs){e&&e.forEach(e=>{e.filterInfo=[e.role,e.level,...e.languages,...e.tools];let t=`<section class="job">
        <div class="main">
          <img class="job__image" src=${e.logo} alt=${e.company} />
          <div class="content">
            <div class="content__top">
              <p>${e.company} </p>
              <p class="tab new">NEW!</p>
              <p class="tab featured">FEATURED</p>
            </div>
            <h3 class="content__middle">${e.position}</h3>
            <div class="content__bottom">
              <p>${e.postedAt}</p>
              <p>.</p>
              <p>${e.contract}</p>
              <p>.</p>
              <p>${e.location}</p>
            </div>
          </div>
        </div>
      </section>`;v.insertAdjacentHTML("beforeend",t),(()=>{let t=document.querySelectorAll(".job"),o=document.createElement("div");o.classList.add("filter"),e.filterInfo.forEach(e=>{let t=`<button class="btn" type="button" title=${e}>${e}</button>`;o.insertAdjacentHTML("beforeend",t)}),t.forEach(t=>{t.append(o),e.new&&t.classList.add("new__content"),e.featured&&t.classList.add("featured__content")})})()})}}new y})();//# sourceMappingURL=index.34c64a9a.js.map

//# sourceMappingURL=index.34c64a9a.js.map
