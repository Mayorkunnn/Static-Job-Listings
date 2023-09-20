parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"mpVp":[function(require,module,exports) {
"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e){return i(e)||r(e)||o(e)||n()}function n(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(e,t){if(e){if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}function r(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function i(e){if(Array.isArray(e))return a(e)}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,f(o.key),o)}}function s(e,t,n){return t&&c(e.prototype,t),n&&c(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function u(e,t){d(e,t),t.add(e)}function d(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function p(e,t,n){return(t=f(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(t){var n=g(t,"string");return"symbol"===e(n)?n:String(n)}function g(t,n){if("object"!==e(t)||null===t)return t;var o=t[Symbol.toPrimitive];if(void 0!==o){var r=o.call(t,n||"default");if("object"!==e(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}function m(e,t,n){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return n}var v=document.querySelector("main"),y=document.querySelector(".screen"),h=document.querySelector(".filter-buttons-container"),b=[{id:1,company:"Photosnap",logo:"./images/photosnap.svg",new:!0,featured:!0,position:"Senior Frontend Developer",role:"Frontend",level:"Senior",postedAt:"1d ago",contract:"Full Time",location:"USA Only",languages:["HTML","CSS","JavaScript"],tools:[]},{id:2,company:"Manage",logo:"./images/manage.svg",new:!0,featured:!0,position:"Fullstack Developer",role:"Fullstack",level:"Midweight",postedAt:"1d ago",contract:"Part Time",location:"Remote",languages:["Python"],tools:["React"]},{id:3,company:"Account",logo:"./images/account.svg",new:!0,featured:!1,position:"Junior Frontend Developer",role:"Frontend",level:"Junior",postedAt:"2d ago",contract:"Part Time",location:"USA Only",languages:["JavaScript"],tools:["React","Sass"]},{id:4,company:"MyHome",logo:"./images/myhome.svg",new:!1,featured:!1,position:"Junior Frontend Developer",role:"Frontend",level:"Junior",postedAt:"5d ago",contract:"Contract",location:"USA Only",languages:["CSS","JavaScript"],tools:[]},{id:5,company:"Loop Studios",logo:"./images/loop-studios.svg",new:!1,featured:!1,position:"Software Engineer",role:"Fullstack",level:"Midweight",postedAt:"1w ago",contract:"Full Time",location:"Worldwide",languages:["JavaScript"],tools:["Ruby","Sass"]},{id:6,company:"FaceIt",logo:"./images/faceit.svg",new:!1,featured:!1,position:"Junior Backend Developer",role:"Backend",level:"Junior",postedAt:"2w ago",contract:"Full Time",location:"UK Only",languages:["Ruby"],tools:["RoR"]},{id:7,company:"Shortly",logo:"./images/shortly.svg",new:!1,featured:!1,position:"Junior Developer",role:"Frontend",level:"Junior",postedAt:"2w ago",contract:"Full Time",location:"Worldwide",languages:["HTML","JavaScript"],tools:["Sass"]},{id:8,company:"Insure",logo:"./images/insure.svg",new:!1,featured:!1,position:"Junior Frontend Developer",role:"Frontend",level:"Junior",postedAt:"2w ago",contract:"Full Time",location:"USA Only",languages:["JavaScript"],tools:["Vue","Sass"]},{id:9,company:"Eyecam Co.",logo:"./images/eyecam-co.svg",new:!1,featured:!1,position:"Full Stack Engineer",role:"Fullstack",level:"Midweight",postedAt:"3w ago",contract:"Full Time",location:"Worldwide",languages:["JavaScript","Python"],tools:["Django"]},{id:10,company:"The Air Filter Company",logo:"./images/the-air-filter-company.svg",new:!1,featured:!1,position:"Front-end Dev",role:"Frontend",level:"Junior",postedAt:"1mo ago",contract:"Part Time",location:"Worldwide",languages:["JavaScript"],tools:["React","Sass"]}],S=new WeakSet,w=new WeakSet,A=function(){function e(){var n=this;l(this,e),u(this,w),u(this,S),p(this,"jobs",[]),p(this,"uniqueArr",[]),p(this,"arr",[]),this.jobs=JSON.parse(JSON.stringify(b))||[],this.jobs.forEach(function(e){e.filterInfo=[e.role,e.level].concat(t(e.languages),t(e.tools))}),m(this,w,T).call(this,this.jobs),v.addEventListener("click",function(e){var t=e.target;t.classList.contains("btn")&&m(n,S,F).call(n,t),n.removeFilterJobs(n.arr)})}return s(e,[{key:"removeFilter",value:function(e){var t=this.uniqueArr.indexOf(e);-1!==t&&this.uniqueArr.splice(t,1)}},{key:"removeFilterJobs",value:function(e){var t=this;document.querySelectorAll(".close").forEach(function(n){n.addEventListener("click",function(n){var o=n.target.parentElement.textContent.trim(),r=e.indexOf(o);-1!==r&&e.splice(r,1),h.removeChild(n.target.parentElement);var i=t.jobs.filter(function(t){return e.every(function(e){return t.filterInfo.includes(e)})});v.innerHTML="",m(t,w,T).call(t,i),0===e.length&&y.classList.add("hidden")})})}},{key:"displayOnScreen",value:function(){var e="";this.uniqueArr.forEach(function(t){e+='<button class="btn btn__close" type="button" title='.concat(t,">\n          ").concat(t,'<img\n            class="close"\n            src="./images/icon-remove.svg"\n            alt=""\n          /></button>')}),h.innerHTML=e}}]),e}();function F(e){var n=this;this.arr.push(e.textContent),this.uniqueArr=t(new Set(this.arr)),this.displayOnScreen(),y.children.length>0&&y.classList.remove("hidden");var o=this.jobs.filter(function(e){return n.uniqueArr.every(function(t){return e.filterInfo.includes(t)})});v.innerHTML="",m(this,w,T).call(this,o)}function T(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.jobs;e&&(v.innerHTML="",e.forEach(function(e){var n,o,r=[e.role,e.level].concat(t(e.languages),t(e.tools)),i='\n        <section class="job" id= '.concat(e.id,'>\n            <div class="main">\n            <img class="job__image" src= ').concat(e.logo,' alt="" />\n            <div class="content">\n                <div class="content__top">\n                <p>').concat(e.company,'</p>\n                <p class="tab new">NEW!</p>\n                <p class="tab featured">FEATURED</p>\n                </div>\n                <h3 class="content__middle">').concat(e.position,'</h3>\n                <div class="content__bottom">\n                <p>').concat(e.postedAt," </p>\n                <p>.</p>\n                <p>").concat(e.contract," </p>\n                <p>.</p>\n                <p>").concat(e.location," </p>\n                </div>\n            </div>\n            </div>\n        </section> \n            ");v.insertAdjacentHTML("beforeend",i),n=document.querySelectorAll(".job"),(o=document.createElement("div")).classList.add("filter"),r.forEach(function(e){var t='\n            <button class="btn" type="button" title='.concat(e,">").concat(e,"</button>\n            ");o.insertAdjacentHTML("beforeend",t)}),n.forEach(function(t){t.appendChild(o),e.new&&t.classList.add("new__content"),e.featured&&t.classList.add("featured__content")})}))}var J=new A;
},{}]},{},["mpVp"], null)
//# sourceMappingURL=/script.0e516db3.js.map