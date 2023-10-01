// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"gAoaA":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "b3c595598cfc62b9";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"6rimH":[function(require,module,exports) {
/** @format */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _iconRemoveSvg = require("./images/icon-remove.svg");
var _iconRemoveSvgDefault = parcelHelpers.interopDefault(_iconRemoveSvg);
var _photosnapSvg = require("./images/photosnap.svg");
var _photosnapSvgDefault = parcelHelpers.interopDefault(_photosnapSvg);
var _manageSvg = require("./images/manage.svg");
var _manageSvgDefault = parcelHelpers.interopDefault(_manageSvg);
var _accountSvg = require("./images/account.svg");
var _accountSvgDefault = parcelHelpers.interopDefault(_accountSvg);
var _myhomeSvg = require("./images/myhome.svg");
var _myhomeSvgDefault = parcelHelpers.interopDefault(_myhomeSvg);
var _loopStudiosSvg = require("./images/loop-studios.svg");
var _loopStudiosSvgDefault = parcelHelpers.interopDefault(_loopStudiosSvg);
var _faceitSvg = require("./images/faceit.svg");
var _faceitSvgDefault = parcelHelpers.interopDefault(_faceitSvg);
var _shortlySvg = require("./images/shortly.svg");
var _shortlySvgDefault = parcelHelpers.interopDefault(_shortlySvg);
var _insureSvg = require("./images/insure.svg");
var _insureSvgDefault = parcelHelpers.interopDefault(_insureSvg);
var _eyecamCoSvg = require("./images/eyecam-co.svg");
var _eyecamCoSvgDefault = parcelHelpers.interopDefault(_eyecamCoSvg);
var _theAirFilterCompanySvg = require("./images/the-air-filter-company.svg");
var _theAirFilterCompanySvgDefault = parcelHelpers.interopDefault(_theAirFilterCompanySvg);
"use strict";
const images = {
    photosnapLogo: (0, _photosnapSvgDefault.default),
    manageLogo: (0, _manageSvgDefault.default),
    accountLogo: (0, _accountSvgDefault.default),
    myhomeLogo: (0, _myhomeSvgDefault.default),
    loopStudiosLogo: (0, _loopStudiosSvgDefault.default),
    faceitLogo: (0, _faceitSvgDefault.default),
    shortlyLogo: (0, _shortlySvgDefault.default),
    insureLogo: (0, _insureSvgDefault.default),
    eyecamCoLogo: (0, _eyecamCoSvgDefault.default),
    airFilterCompanyLogo: (0, _theAirFilterCompanySvgDefault.default)
};
exports.default = images;
const mainContainer = document.querySelector("main");
const screen = document.querySelector(".screen");
const asideContainer = document.querySelector("aside");
const filterButtonsContainer = document.querySelector(".filter-buttons-container");
const jobsObject = [
    {
        id: 1,
        company: "Photosnap",
        logo: (0, _photosnapSvgDefault.default),
        new: true,
        featured: true,
        position: "Senior Frontend Developer",
        role: "Frontend",
        level: "Senior",
        postedAt: "1d ago",
        contract: "Full Time",
        location: "USA Only",
        languages: [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        tools: []
    },
    {
        id: 2,
        company: "Manage",
        logo: (0, _manageSvgDefault.default),
        new: true,
        featured: true,
        position: "Fullstack Developer",
        role: "Fullstack",
        level: "Midweight",
        postedAt: "1d ago",
        contract: "Part Time",
        location: "Remote",
        languages: [
            "Python"
        ],
        tools: [
            "React"
        ]
    },
    {
        id: 3,
        company: "Account",
        logo: (0, _accountSvgDefault.default),
        new: true,
        featured: false,
        position: "Junior Frontend Developer",
        role: "Frontend",
        level: "Junior",
        postedAt: "2d ago",
        contract: "Part Time",
        location: "USA Only",
        languages: [
            "JavaScript"
        ],
        tools: [
            "React",
            "Sass"
        ]
    },
    {
        id: 4,
        company: "MyHome",
        logo: (0, _myhomeSvgDefault.default),
        new: false,
        featured: false,
        position: "Junior Frontend Developer",
        role: "Frontend",
        level: "Junior",
        postedAt: "5d ago",
        contract: "Contract",
        location: "USA Only",
        languages: [
            "CSS",
            "JavaScript"
        ],
        tools: []
    },
    {
        id: 5,
        company: "Loop Studios",
        logo: (0, _loopStudiosSvgDefault.default),
        new: false,
        featured: false,
        position: "Software Engineer",
        role: "Fullstack",
        level: "Midweight",
        postedAt: "1w ago",
        contract: "Full Time",
        location: "Worldwide",
        languages: [
            "JavaScript"
        ],
        tools: [
            "Ruby",
            "Sass"
        ]
    },
    {
        id: 6,
        company: "FaceIt",
        logo: (0, _faceitSvgDefault.default),
        new: false,
        featured: false,
        position: "Junior Backend Developer",
        role: "Backend",
        level: "Junior",
        postedAt: "2w ago",
        contract: "Full Time",
        location: "UK Only",
        languages: [
            "Ruby"
        ],
        tools: [
            "RoR"
        ]
    },
    {
        id: 7,
        company: "Shortly",
        logo: (0, _shortlySvgDefault.default),
        new: false,
        featured: false,
        position: "Junior Developer",
        role: "Frontend",
        level: "Junior",
        postedAt: "2w ago",
        contract: "Full Time",
        location: "Worldwide",
        languages: [
            "HTML",
            "JavaScript"
        ],
        tools: [
            "Sass"
        ]
    },
    {
        id: 8,
        company: "Insure",
        logo: (0, _insureSvgDefault.default),
        new: false,
        featured: false,
        position: "Junior Frontend Developer",
        role: "Frontend",
        level: "Junior",
        postedAt: "2w ago",
        contract: "Full Time",
        location: "USA Only",
        languages: [
            "JavaScript"
        ],
        tools: [
            "Vue",
            "Sass"
        ]
    },
    {
        id: 9,
        company: "Eyecam Co.",
        logo: (0, _eyecamCoSvgDefault.default),
        new: false,
        featured: false,
        position: "Full Stack Engineer",
        role: "Fullstack",
        level: "Midweight",
        postedAt: "3w ago",
        contract: "Full Time",
        location: "Worldwide",
        languages: [
            "JavaScript",
            "Python"
        ],
        tools: [
            "Django"
        ]
    },
    {
        id: 10,
        company: "The Air Filter Company",
        logo: (0, _theAirFilterCompanySvgDefault.default),
        new: false,
        featured: false,
        position: "Front-end Dev",
        role: "Frontend",
        level: "Junior",
        postedAt: "1mo ago",
        contract: "Part Time",
        location: "Worldwide",
        languages: [
            "JavaScript"
        ],
        tools: [
            "React",
            "Sass"
        ]
    }
];
class Jobs {
    jobs = [];
    #uniqueArr = [];
    #arr = new Set();
    constructor(){
        this.jobs = JSON.parse(JSON.stringify(jobsObject)) || [];
        this.#renderJobs();
        // const filterInfo = [this.jobs.role, this.jobs.level, ...this.jobs.languages, ...this.jobs.tools];
        mainContainer.addEventListener("click", (e)=>{
            const target = e.target;
            if (target.classList.contains("btn")) this.#filterJobs(target);
        });
        asideContainer.addEventListener("click", (e)=>{
            const target = e.target;
            if (target.classList.contains("close")) this.#removeFilterJobs(target.parentElement);
        });
    }
    #filterJobs(clicked) {
        this.#arr.add(clicked.textContent);
        this.#uniqueArr = [
            ...this.#arr
        ];
        this.#displayOnScreen();
        if (screen.children.length > 0) screen.classList.remove("hidden");
        const filteredJobs = this.jobs.filter((job)=>{
            return this.#uniqueArr.every((el)=>job.filterInfo.includes(el));
        });
        mainContainer.innerHTML = "";
        this.#renderJobs(filteredJobs);
    }
    #displayOnScreen() {
        let html = "";
        this.#arr.forEach((el)=>{
            html += `<button class="btn btn__close" type="button" title=${el} >
          ${el} <img
            class="close"
            src=${0, _iconRemoveSvgDefault.default}
            alt=""
          /></button
        >`;
        });
        filterButtonsContainer.innerHTML = html;
    }
    #removeFilterJobs(clicked) {
        const filterToRemove = clicked.textContent.trim();
        // Delete from Set
        this.#arr.delete(filterToRemove);
        // Update Array
        this.#uniqueArr = [
            ...this.#arr
        ];
        filterButtonsContainer.removeChild(clicked);
        const filteredJobs = this.jobs.filter((job)=>{
            return this.#uniqueArr.every((el)=>job.filterInfo.includes(el));
        });
        mainContainer.innerHTML = "";
        this.#renderJobs(filteredJobs);
        if (this.#arr.size === 0) screen.classList.add("hidden");
    }
    #renderJobs(jobs = this.jobs) {
        if (!jobs) return;
        jobs.forEach((job)=>{
            job.filterInfo = [
                job.role,
                job.level,
                ...job.languages,
                ...job.tools
            ];
            // job.push(filterInfo);
            const displayFilters = ()=>{
                const jobsContainer = document.querySelectorAll(".job");
                const filter = document.createElement("div");
                filter.classList.add("filter");
                job.filterInfo.forEach((fil)=>{
                    const html = `<button class="btn" type="button" title=${fil}>${fil}</button>`;
                    filter.insertAdjacentHTML("beforeend", html);
                });
                jobsContainer.forEach((jobContainer)=>{
                    jobContainer.append(filter);
                    if (job.new) jobContainer.classList.add("new__content");
                    if (job.featured) jobContainer.classList.add("featured__content");
                });
            };
            const html = `<section class="job">
        <div class="main">
          <img class="job__image" src=${job.logo} alt=${job.company} />
          <div class="content">
            <div class="content__top">
              <p>${job.company} </p>
              <p class="tab new">NEW!</p>
              <p class="tab featured">FEATURED</p>
            </div>
            <h3 class="content__middle">${job.position}</h3>
            <div class="content__bottom">
              <p>${job.postedAt}</p>
              <p>.</p>
              <p>${job.contract}</p>
              <p>.</p>
              <p>${job.location}</p>
            </div>
          </div>
        </div>
      </section>`;
            mainContainer.insertAdjacentHTML("beforeend", html);
            displayFilters();
        });
    }
}
const jobs = new Jobs();

},{"./images/photosnap.svg":"7S4UK","./images/manage.svg":"f00Sp","./images/account.svg":"8fhiA","./images/myhome.svg":"iDLCQ","./images/loop-studios.svg":"4DTsz","./images/faceit.svg":"j6qRE","./images/shortly.svg":"2c3Kr","./images/insure.svg":"cyKx0","./images/eyecam-co.svg":"geFYC","./images/the-air-filter-company.svg":"l7I9s","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./images/icon-remove.svg":"ftsX8"}],"7S4UK":[function(require,module,exports) {
module.exports = require("701051698ed46e78").getBundleURL("fqV6O") + "photosnap.b78a997d.svg" + "?" + Date.now();

},{"701051698ed46e78":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"f00Sp":[function(require,module,exports) {
module.exports = require("eaefad93804386f4").getBundleURL("fqV6O") + "manage.8f71cc29.svg" + "?" + Date.now();

},{"eaefad93804386f4":"lgJ39"}],"8fhiA":[function(require,module,exports) {
module.exports = require("e88583848f842282").getBundleURL("fqV6O") + "account.3e4a8741.svg" + "?" + Date.now();

},{"e88583848f842282":"lgJ39"}],"iDLCQ":[function(require,module,exports) {
module.exports = require("5d499c61054a6ec5").getBundleURL("fqV6O") + "myhome.08dfd6a7.svg" + "?" + Date.now();

},{"5d499c61054a6ec5":"lgJ39"}],"4DTsz":[function(require,module,exports) {
module.exports = require("19c1c90d5b8fac08").getBundleURL("fqV6O") + "loop-studios.8c35109f.svg" + "?" + Date.now();

},{"19c1c90d5b8fac08":"lgJ39"}],"j6qRE":[function(require,module,exports) {
module.exports = require("8a50cbbc82f21d1b").getBundleURL("fqV6O") + "faceit.e2de5943.svg" + "?" + Date.now();

},{"8a50cbbc82f21d1b":"lgJ39"}],"2c3Kr":[function(require,module,exports) {
module.exports = require("721b9ba7a637a54e").getBundleURL("fqV6O") + "shortly.0d1e4e4e.svg" + "?" + Date.now();

},{"721b9ba7a637a54e":"lgJ39"}],"cyKx0":[function(require,module,exports) {
module.exports = require("f38eb4e10dfb881b").getBundleURL("fqV6O") + "insure.bf590116.svg" + "?" + Date.now();

},{"f38eb4e10dfb881b":"lgJ39"}],"geFYC":[function(require,module,exports) {
module.exports = require("f71affab2fead1b4").getBundleURL("fqV6O") + "eyecam-co.3ff9b3f1.svg" + "?" + Date.now();

},{"f71affab2fead1b4":"lgJ39"}],"l7I9s":[function(require,module,exports) {
module.exports = require("ab20c6878d2ede32").getBundleURL("fqV6O") + "the-air-filter-company.4cc11380.svg" + "?" + Date.now();

},{"ab20c6878d2ede32":"lgJ39"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"ftsX8":[function(require,module,exports) {
module.exports = require("1bda17a5b66104b1").getBundleURL("fqV6O") + "icon-remove.2a95001f.svg" + "?" + Date.now();

},{"1bda17a5b66104b1":"lgJ39"}]},["gAoaA","6rimH"], "6rimH", "parcelRequire0c15")

//# sourceMappingURL=index.8cfc62b9.js.map
