// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"images/photosnap.svg":[function(require,module,exports) {
module.exports = "/photosnap.698da370.svg";
},{}],"images/manage.svg":[function(require,module,exports) {
module.exports = "/manage.aa4aa2e2.svg";
},{}],"images/account.svg":[function(require,module,exports) {
module.exports = "/account.99ad997d.svg";
},{}],"images/myhome.svg":[function(require,module,exports) {
module.exports = "/myhome.a7764362.svg";
},{}],"images/loop-studios.svg":[function(require,module,exports) {
module.exports = "/loop-studios.8a2a4069.svg";
},{}],"images/faceit.svg":[function(require,module,exports) {
module.exports = "/faceit.e8bcb478.svg";
},{}],"images/shortly.svg":[function(require,module,exports) {
module.exports = "/shortly.0e0a7aa0.svg";
},{}],"images/insure.svg":[function(require,module,exports) {
module.exports = "/insure.0d190fee.svg";
},{}],"images/eyecam-co.svg":[function(require,module,exports) {
module.exports = "/eyecam-co.2a25e8ea.svg";
},{}],"images/the-air-filter-company.svg":[function(require,module,exports) {
module.exports = "/the-air-filter-company.9bf4d6e3.svg";
},{}],"script.js":[function(require,module,exports) {
/** @format */

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _photosnap = _interopRequireDefault(require("./images/photosnap.svg"));
var _manage = _interopRequireDefault(require("./images/manage.svg"));
var _account = _interopRequireDefault(require("./images/account.svg"));
var _myhome = _interopRequireDefault(require("./images/myhome.svg"));
var _loopStudios = _interopRequireDefault(require("./images/loop-studios.svg"));
var _faceit = _interopRequireDefault(require("./images/faceit.svg"));
var _shortly = _interopRequireDefault(require("./images/shortly.svg"));
var _insure = _interopRequireDefault(require("./images/insure.svg"));
var _eyecamCo = _interopRequireDefault(require("./images/eyecam-co.svg"));
var _theAirFilterCompany = _interopRequireDefault(require("./images/the-air-filter-company.svg"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }
var images = {
  photosnapLogo: _photosnap.default,
  manageLogo: _manage.default,
  accountLogo: _account.default,
  myhomeLogo: _myhome.default,
  loopStudiosLogo: _loopStudios.default,
  faceitLogo: _faceit.default,
  shortlyLogo: _shortly.default,
  insureLogo: _insure.default,
  eyecamCoLogo: _eyecamCo.default,
  airFilterCompanyLogo: _theAirFilterCompany.default
};
var _default = images;
exports.default = _default;
var mainContainer = document.querySelector("main");
var screen = document.querySelector(".screen");
var asideContainer = document.querySelector("aside");
var filterButtonsContainer = document.querySelector(".filter-buttons-container");
var jobsObject = [{
  id: 1,
  company: "Photosnap",
  logo: _photosnap.default,
  new: true,
  featured: true,
  position: "Senior Frontend Developer",
  role: "Frontend",
  level: "Senior",
  postedAt: "1d ago",
  contract: "Full Time",
  location: "USA Only",
  languages: ["HTML", "CSS", "JavaScript"],
  tools: []
}, {
  id: 2,
  company: "Manage",
  logo: _manage.default,
  new: true,
  featured: true,
  position: "Fullstack Developer",
  role: "Fullstack",
  level: "Midweight",
  postedAt: "1d ago",
  contract: "Part Time",
  location: "Remote",
  languages: ["Python"],
  tools: ["React"]
}, {
  id: 3,
  company: "Account",
  logo: _account.default,
  new: true,
  featured: false,
  position: "Junior Frontend Developer",
  role: "Frontend",
  level: "Junior",
  postedAt: "2d ago",
  contract: "Part Time",
  location: "USA Only",
  languages: ["JavaScript"],
  tools: ["React", "Sass"]
}, {
  id: 4,
  company: "MyHome",
  logo: _myhome.default,
  new: false,
  featured: false,
  position: "Junior Frontend Developer",
  role: "Frontend",
  level: "Junior",
  postedAt: "5d ago",
  contract: "Contract",
  location: "USA Only",
  languages: ["CSS", "JavaScript"],
  tools: []
}, {
  id: 5,
  company: "Loop Studios",
  logo: _loopStudios.default,
  new: false,
  featured: false,
  position: "Software Engineer",
  role: "Fullstack",
  level: "Midweight",
  postedAt: "1w ago",
  contract: "Full Time",
  location: "Worldwide",
  languages: ["JavaScript"],
  tools: ["Ruby", "Sass"]
}, {
  id: 6,
  company: "FaceIt",
  logo: _faceit.default,
  new: false,
  featured: false,
  position: "Junior Backend Developer",
  role: "Backend",
  level: "Junior",
  postedAt: "2w ago",
  contract: "Full Time",
  location: "UK Only",
  languages: ["Ruby"],
  tools: ["RoR"]
}, {
  id: 7,
  company: "Shortly",
  logo: _shortly.default,
  new: false,
  featured: false,
  position: "Junior Developer",
  role: "Frontend",
  level: "Junior",
  postedAt: "2w ago",
  contract: "Full Time",
  location: "Worldwide",
  languages: ["HTML", "JavaScript"],
  tools: ["Sass"]
}, {
  id: 8,
  company: "Insure",
  logo: _insure.default,
  new: false,
  featured: false,
  position: "Junior Frontend Developer",
  role: "Frontend",
  level: "Junior",
  postedAt: "2w ago",
  contract: "Full Time",
  location: "USA Only",
  languages: ["JavaScript"],
  tools: ["Vue", "Sass"]
}, {
  id: 9,
  company: "Eyecam Co.",
  logo: _eyecamCo.default,
  new: false,
  featured: false,
  position: "Full Stack Engineer",
  role: "Fullstack",
  level: "Midweight",
  postedAt: "3w ago",
  contract: "Full Time",
  location: "Worldwide",
  languages: ["JavaScript", "Python"],
  tools: ["Django"]
}, {
  id: 10,
  company: "The Air Filter Company",
  logo: _theAirFilterCompany.default,
  new: false,
  featured: false,
  position: "Front-end Dev",
  role: "Frontend",
  level: "Junior",
  postedAt: "1mo ago",
  contract: "Part Time",
  location: "Worldwide",
  languages: ["JavaScript"],
  tools: ["React", "Sass"]
}];
var _uniqueArr = /*#__PURE__*/new WeakMap();
var _arr = /*#__PURE__*/new WeakMap();
var _filterJobs = /*#__PURE__*/new WeakSet();
var _displayOnScreen = /*#__PURE__*/new WeakSet();
var _removeFilterJobs = /*#__PURE__*/new WeakSet();
var _renderJobs = /*#__PURE__*/new WeakSet();
var Jobs = /*#__PURE__*/_createClass(function Jobs() {
  var _this = this;
  _classCallCheck(this, Jobs);
  _classPrivateMethodInitSpec(this, _renderJobs);
  _classPrivateMethodInitSpec(this, _removeFilterJobs);
  _classPrivateMethodInitSpec(this, _displayOnScreen);
  _classPrivateMethodInitSpec(this, _filterJobs);
  _defineProperty(this, "jobs", []);
  _classPrivateFieldInitSpec(this, _uniqueArr, {
    writable: true,
    value: []
  });
  _classPrivateFieldInitSpec(this, _arr, {
    writable: true,
    value: new Set()
  });
  this.jobs = JSON.parse(JSON.stringify(jobsObject)) || [];
  _classPrivateMethodGet(this, _renderJobs, _renderJobs2).call(this);
  // const filterInfo = [this.jobs.role, this.jobs.level, ...this.jobs.languages, ...this.jobs.tools];
  mainContainer.addEventListener("click", function (e) {
    var target = e.target;
    if (target.classList.contains("btn")) {
      _classPrivateMethodGet(_this, _filterJobs, _filterJobs2).call(_this, target);
    }
  });
  asideContainer.addEventListener("click", function (e) {
    var target = e.target;
    if (target.classList.contains("close")) {
      _classPrivateMethodGet(_this, _removeFilterJobs, _removeFilterJobs2).call(_this, target.parentElement);
    }
  });
});
function _filterJobs2(clicked) {
  var _this2 = this;
  _classPrivateFieldGet(this, _arr).add(clicked.textContent);
  _classPrivateFieldSet(this, _uniqueArr, _toConsumableArray(_classPrivateFieldGet(this, _arr)));
  _classPrivateMethodGet(this, _displayOnScreen, _displayOnScreen2).call(this);
  if (screen.children.length > 0) screen.classList.remove("hidden");
  var filteredJobs = this.jobs.filter(function (job) {
    return _classPrivateFieldGet(_this2, _uniqueArr).every(function (el) {
      return job.filterInfo.includes(el);
    });
  });
  mainContainer.innerHTML = "";
  _classPrivateMethodGet(this, _renderJobs, _renderJobs2).call(this, filteredJobs);
}
function _displayOnScreen2() {
  var html = "";
  _classPrivateFieldGet(this, _arr).forEach(function (el) {
    html += "<button class=\"btn btn__close\" type=\"button\" title=".concat(el, " >\n          ").concat(el, " <img\n            class=\"close\"\n            src=\"./images/icon-remove.svg\"\n            alt=\"\"\n          /></button\n        >");
  });
  filterButtonsContainer.innerHTML = html;
}
function _removeFilterJobs2(clicked) {
  var _this3 = this;
  var filterToRemove = clicked.textContent.trim();

  // Delete from Set
  _classPrivateFieldGet(this, _arr).delete(filterToRemove);

  // Update Array
  _classPrivateFieldSet(this, _uniqueArr, _toConsumableArray(_classPrivateFieldGet(this, _arr)));
  filterButtonsContainer.removeChild(clicked);
  var filteredJobs = this.jobs.filter(function (job) {
    return _classPrivateFieldGet(_this3, _uniqueArr).every(function (el) {
      return job.filterInfo.includes(el);
    });
  });
  mainContainer.innerHTML = "";
  _classPrivateMethodGet(this, _renderJobs, _renderJobs2).call(this, filteredJobs);
  if (_classPrivateFieldGet(this, _arr).size === 0) screen.classList.add("hidden");
}
function _renderJobs2() {
  var jobs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.jobs;
  if (!jobs) return;
  jobs.forEach(function (job) {
    job.filterInfo = [job.role, job.level].concat(_toConsumableArray(job.languages), _toConsumableArray(job.tools));
    // job.push(filterInfo);

    var displayFilters = function displayFilters() {
      var jobsContainer = document.querySelectorAll(".job");
      var filter = document.createElement("div");
      filter.classList.add("filter");
      job.filterInfo.forEach(function (fil) {
        var html = "<button class=\"btn\" type=\"button\" title=".concat(fil, ">").concat(fil, "</button>");
        filter.insertAdjacentHTML("beforeend", html);
      });
      jobsContainer.forEach(function (jobContainer) {
        jobContainer.append(filter);
        if (job.new) jobContainer.classList.add("new__content");
        if (job.featured) jobContainer.classList.add("featured__content");
      });
    };
    var html = "<section class=\"job\">\n        <div class=\"main\">\n          <img class=\"job__image\" src=".concat(job.logo, " alt=").concat(job.company, " />\n          <div class=\"content\">\n            <div class=\"content__top\">\n              <p>").concat(job.company, " </p>\n              <p class=\"tab new\">NEW!</p>\n              <p class=\"tab featured\">FEATURED</p>\n            </div>\n            <h3 class=\"content__middle\">").concat(job.position, "</h3>\n            <div class=\"content__bottom\">\n              <p>").concat(job.postedAt, "</p>\n              <p>.</p>\n              <p>").concat(job.contract, "</p>\n              <p>.</p>\n              <p>").concat(job.location, "</p>\n            </div>\n          </div>\n        </div>\n      </section>");
    mainContainer.insertAdjacentHTML("beforeend", html);
    displayFilters();
  });
}
var jobs = new Jobs();
},{"./images/photosnap.svg":"images/photosnap.svg","./images/manage.svg":"images/manage.svg","./images/account.svg":"images/account.svg","./images/myhome.svg":"images/myhome.svg","./images/loop-studios.svg":"images/loop-studios.svg","./images/faceit.svg":"images/faceit.svg","./images/shortly.svg":"images/shortly.svg","./images/insure.svg":"images/insure.svg","./images/eyecam-co.svg":"images/eyecam-co.svg","./images/the-air-filter-company.svg":"images/the-air-filter-company.svg"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "13864" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","script.js"], null)
//# sourceMappingURL=/script.75da7f30.js.map