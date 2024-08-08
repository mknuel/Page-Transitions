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
})({"03sS5":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "3b521b462e3ff765";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
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
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
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
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
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
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
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
function hmrApply(bundle, asset) {
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
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
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
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
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
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"9sgZL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _core = require("@barba/core");
var _coreDefault = parcelHelpers.interopDefault(_core);
let tlLeave = gsap.timeline({
    defaults: {
        duration: 0.75,
        ease: "Power2.easeOut"
    }
});
let tlEnter = gsap.timeline({
    defaults: {
        duration: 0.75,
        ease: "Power2.easeOut"
    }
});
// leave animation
const leaveAnimation = (current, done)=>{
    const product = current.querySelector(".image-container");
    const text = current.querySelector(".showcase-text");
    const circles = current.querySelectorAll(".circle");
    const arrow = current.querySelector(".showcase-arrow");
    /* 	gsap.fromTo(
					current,
					{ opacity: 1 },
					{ opacity: 0, duration: 1, onComplete: done }
				); */ return tlLeave.fromTo(arrow, {
        opacity: 1,
        y: 0
    }, {
        opacity: 0,
        y: 200
    }).fromTo(product, {
        y: 0,
        opacity: 1
    }, {
        y: -100,
        opacity: 0,
        onComplete: done
    }, "<").fromTo(text, {
        opacity: 1,
        y: 0
    }, {
        opacity: 0,
        duration: 1,
        y: 100,
        onComplete: done
    }, "<").fromTo(circles, {
        opacity: 1,
        y: 0
    }, {
        opacity: 0,
        duration: 1,
        y: -200,
        onComplete: done,
        stagger: 0.15,
        ease: "back.out(-1.7)"
    }, "<");
};
// enter animation
const enterAnimation = (current, done, gradient)=>{
    const product = current.querySelector(".image-container");
    const text = current.querySelector(".showcase-text");
    const circles = current.querySelectorAll(".circle");
    const arrow = current.querySelector(".showcase-arrow");
    /* 	gsap.fromTo(
					current,
					{ opacity: 1 },
					{ opacity: 0, duration: 1, onComplete: done }
				); */ return tlEnter.to("body", {
        background: gradient
    }, "<").fromTo(arrow, {
        opacity: 0,
        y: 50
    }, {
        opacity: 1,
        y: 0
    }).fromTo(product, {
        y: -100,
        opacity: 0
    }, {
        y: 0,
        opacity: 1,
        onComplete: done
    }, "<").fromTo(text, {
        opacity: 0,
        y: 100
    }, {
        opacity: 1,
        duration: 1,
        y: 0,
        onComplete: done
    }, "<").fromTo(circles, {
        opacity: 0,
        y: -200
    }, {
        opacity: 1,
        duration: 1,
        y: 0,
        onComplete: done,
        stagger: 0.15,
        ease: "back.out(1.7)"
    }, "<");
};
// Run animations
(0, _coreDefault.default).init({
    preventRunning: true,
    transitions: [
        // showcase transitions
        {
            name: "default",
            once (data) {
                const done = this.async();
                let next = data.next.container;
                let gradient = getGradient(data.next.namespace);
                gsap.set("body", {
                    background: gradient,
                    duration: 1
                });
                enterAnimation(next, done, gradient);
            },
            leave (data) {
                const done = this.async();
                let current = data.current.container;
                leaveAnimation(current, done);
            },
            enter (data) {
                const done = this.async();
                let next = data.next.container;
                let gradient = getGradient(data.next.namespace);
                enterAnimation(next, done, gradient);
            }
        }, 
    ]
});
// changing gradient on showcase
function getGradient(name) {
    switch(name){
        case "handbag":
            return "linear-gradient(260deg, #b75d62, #754d4f)";
        case "boot":
            return "linear-gradient(260deg, #5d8cb7, #4c4f70)";
        case "hat":
            return "linear-gradient(260deg, #b27a5c, #7f5450)";
        default:
            break;
    }
} /* 
document.body.addEventListener("keydown", (e) => {
	console.log(e.target);
	const path = window.location.pathname;

	// Extract the file name from the path
	const pageName = path.substring(path.lastIndexOf("/") + 1);

	console.log(pageName);
	const arr = ["index.html", "boot.html", "hat.html"];
	const index = arr.indexOf(pageName);
    // let pg = index<arr.length? % (index - 1);
	if (e.key === "ArrowLeft") {
		console.log(pg);
		// window.location.href = arr[];
	} else if (e.key === "ArrowRight") {
		// window.location.href = arr[arr.length % (index + 1)];
	}
});
 */ 

},{"@barba/core":"gIWbX","@parcel/transformer-js/src/esmodule-helpers.js":"1fYkF"}],"gIWbX":[function(require,module,exports) {
!function(t, n) {
    module.exports = n();
}(this, function() {
    function t(t, n) {
        for(var r = 0; r < n.length; r++){
            var i = n[r];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, "symbol" == typeof (e = function(t, n) {
                if ("object" != typeof t || null === t) return t;
                var r = t[Symbol.toPrimitive];
                if (void 0 !== r) {
                    var i = r.call(t, "string");
                    if ("object" != typeof i) return i;
                    throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return String(t);
            }(i.key)) ? e : String(e), i);
        }
        var e;
    }
    function n(n, r, i) {
        return r && t(n.prototype, r), i && t(n, i), Object.defineProperty(n, "prototype", {
            writable: !1
        }), n;
    }
    function r() {
        return r = Object.assign ? Object.assign.bind() : function(t) {
            for(var n = 1; n < arguments.length; n++){
                var r = arguments[n];
                for(var i in r)Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
            }
            return t;
        }, r.apply(this, arguments);
    }
    function i(t, n) {
        t.prototype = Object.create(n.prototype), t.prototype.constructor = t, o(t, n);
    }
    function e(t) {
        return e = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t);
        }, e(t);
    }
    function o(t, n) {
        return o = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, n) {
            return t.__proto__ = n, t;
        }, o(t, n);
    }
    function u() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
        } catch (t) {
            return !1;
        }
    }
    function s(t, n, r) {
        return s = u() ? Reflect.construct.bind() : function(t, n, r) {
            var i = [
                null
            ];
            i.push.apply(i, n);
            var e = new (Function.bind.apply(t, i));
            return r && o(e, r.prototype), e;
        }, s.apply(null, arguments);
    }
    function f(t) {
        var n = "function" == typeof Map ? new Map : void 0;
        return f = function(t) {
            if (null === t || -1 === Function.toString.call(t).indexOf("[native code]")) return t;
            if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== n) {
                if (n.has(t)) return n.get(t);
                n.set(t, r);
            }
            function r() {
                return s(t, arguments, e(this).constructor);
            }
            return r.prototype = Object.create(t.prototype, {
                constructor: {
                    value: r,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), o(r, t);
        }, f(t);
    }
    function c(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t;
    }
    var a, h = function() {
        this.before = void 0, this.beforeLeave = void 0, this.leave = void 0, this.afterLeave = void 0, this.beforeEnter = void 0, this.enter = void 0, this.afterEnter = void 0, this.after = void 0;
    };
    !function(t) {
        t[t.off = 0] = "off", t[t.error = 1] = "error", t[t.warning = 2] = "warning", t[t.info = 3] = "info", t[t.debug = 4] = "debug";
    }(a || (a = {}));
    var v = a.off, d = /*#__PURE__*/ function() {
        function t(t) {
            this.t = void 0, this.t = t;
        }
        t.getLevel = function() {
            return v;
        }, t.setLevel = function(t) {
            return v = a[t];
        };
        var n = t.prototype;
        return n.error = function() {
            this.i(console.error, a.error, [].slice.call(arguments));
        }, n.warn = function() {
            this.i(console.warn, a.warning, [].slice.call(arguments));
        }, n.info = function() {
            this.i(console.info, a.info, [].slice.call(arguments));
        }, n.debug = function() {
            this.i(console.log, a.debug, [].slice.call(arguments));
        }, n.i = function(n, r, i) {
            r <= t.getLevel() && n.apply(console, [
                "[" + this.t + "] "
            ].concat(i));
        }, t;
    }();
    function l(t) {
        return t.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
    }
    function p(t) {
        return t && t.sensitive ? "" : "i";
    }
    var m = {
        container: "container",
        history: "history",
        namespace: "namespace",
        prefix: "data-barba",
        prevent: "prevent",
        wrapper: "wrapper"
    }, w = /*#__PURE__*/ function() {
        function t() {
            this.o = m, this.u = void 0, this.h = {
                after: null,
                before: null,
                parent: null
            };
        }
        var n = t.prototype;
        return n.toString = function(t) {
            return t.outerHTML;
        }, n.toDocument = function(t) {
            return this.u || (this.u = new DOMParser), this.u.parseFromString(t, "text/html");
        }, n.toElement = function(t) {
            var n = document.createElement("div");
            return n.innerHTML = t, n;
        }, n.getHtml = function(t) {
            return void 0 === t && (t = document), this.toString(t.documentElement);
        }, n.getWrapper = function(t) {
            return void 0 === t && (t = document), t.querySelector("[" + this.o.prefix + '="' + this.o.wrapper + '"]');
        }, n.getContainer = function(t) {
            return void 0 === t && (t = document), t.querySelector("[" + this.o.prefix + '="' + this.o.container + '"]');
        }, n.removeContainer = function(t) {
            document.body.contains(t) && (this.v(t), t.parentNode.removeChild(t));
        }, n.addContainer = function(t, n) {
            var r = this.getContainer() || this.h.before;
            r ? this.l(t, r) : this.h.after ? this.h.after.parentNode.insertBefore(t, this.h.after) : this.h.parent ? this.h.parent.appendChild(t) : n.appendChild(t);
        }, n.getSibling = function() {
            return this.h;
        }, n.getNamespace = function(t) {
            void 0 === t && (t = document);
            var n = t.querySelector("[" + this.o.prefix + "-" + this.o.namespace + "]");
            return n ? n.getAttribute(this.o.prefix + "-" + this.o.namespace) : null;
        }, n.getHref = function(t) {
            if (t.tagName && "a" === t.tagName.toLowerCase()) {
                if ("string" == typeof t.href) return t.href;
                var n = t.getAttribute("href") || t.getAttribute("xlink:href");
                if (n) return this.resolveUrl(n.baseVal || n);
            }
            return null;
        }, n.resolveUrl = function() {
            var t = [].slice.call(arguments).length;
            if (0 === t) throw new Error("resolveUrl requires at least one argument; got none.");
            var n = document.createElement("base");
            if (n.href = arguments[0], 1 === t) return n.href;
            var r = document.getElementsByTagName("head")[0];
            r.insertBefore(n, r.firstChild);
            for(var i, e = document.createElement("a"), o = 1; o < t; o++)e.href = arguments[o], n.href = i = e.href;
            return r.removeChild(n), i;
        }, n.l = function(t, n) {
            n.parentNode.insertBefore(t, n.nextSibling);
        }, n.v = function(t) {
            return this.h = {
                after: t.nextElementSibling,
                before: t.previousElementSibling,
                parent: t.parentElement
            }, this.h;
        }, t;
    }(), b = new w, y = /*#__PURE__*/ function() {
        function t() {
            this.p = void 0, this.m = [], this.P = -1;
        }
        var i = t.prototype;
        return i.init = function(t, n) {
            this.p = "barba";
            var r = {
                data: {},
                ns: n,
                scroll: {
                    x: window.scrollX,
                    y: window.scrollY
                },
                url: t
            };
            this.P = 0, this.m.push(r);
            var i = {
                from: this.p,
                index: this.P,
                states: [].concat(this.m)
            };
            window.history && window.history.replaceState(i, "", t);
        }, i.change = function(t, n, r) {
            if (r && r.state) {
                var i = r.state, e = i.index;
                n = this.g(this.P - e), this.replace(i.states), this.P = e;
            } else this.add(t, n);
            return n;
        }, i.add = function(t, n, r, i) {
            var e = null != r ? r : this.R(n), o = {
                data: null != i ? i : {},
                ns: "tmp",
                scroll: {
                    x: window.scrollX,
                    y: window.scrollY
                },
                url: t
            };
            switch(e){
                case "push":
                    this.P = this.size, this.m.push(o);
                    break;
                case "replace":
                    this.set(this.P, o);
            }
            var u = {
                from: this.p,
                index: this.P,
                states: [].concat(this.m)
            };
            switch(e){
                case "push":
                    window.history && window.history.pushState(u, "", t);
                    break;
                case "replace":
                    window.history && window.history.replaceState(u, "", t);
            }
        }, i.store = function(t, n) {
            var i = n || this.P, e = this.get(i);
            e.data = r({}, e.data, t), this.set(i, e);
            var o = {
                from: this.p,
                index: this.P,
                states: [].concat(this.m)
            };
            window.history.replaceState(o, "");
        }, i.update = function(t, n) {
            var i = n || this.P, e = r({}, this.get(i), t);
            this.set(i, e);
        }, i.remove = function(t) {
            t ? this.m.splice(t, 1) : this.m.pop(), this.P--;
        }, i.clear = function() {
            this.m = [], this.P = -1;
        }, i.replace = function(t) {
            this.m = t;
        }, i.get = function(t) {
            return this.m[t];
        }, i.set = function(t, n) {
            return this.m[t] = n;
        }, i.R = function(t) {
            var n = "push", r = t, i = m.prefix + "-" + m.history;
            return r.hasAttribute && r.hasAttribute(i) && (n = r.getAttribute(i)), n;
        }, i.g = function(t) {
            return Math.abs(t) > 1 ? t > 0 ? "forward" : "back" : 0 === t ? "popstate" : t > 0 ? "back" : "forward";
        }, n(t, [
            {
                key: "current",
                get: function() {
                    return this.m[this.P];
                }
            },
            {
                key: "previous",
                get: function() {
                    return this.P < 1 ? null : this.m[this.P - 1];
                }
            },
            {
                key: "size",
                get: function() {
                    return this.m.length;
                }
            }
        ]), t;
    }(), P = new y, g = function(t, n) {
        try {
            var r = function() {
                if (!n.next.html) return Promise.resolve(t).then(function(t) {
                    var r = n.next;
                    if (t) {
                        var i = b.toElement(t.html);
                        r.namespace = b.getNamespace(i), r.container = b.getContainer(i), r.url = t.url, r.html = t.html, P.update({
                            ns: r.namespace
                        });
                        var e = b.toDocument(t.html);
                        document.title = e.title;
                    }
                });
            }();
            return Promise.resolve(r && r.then ? r.then(function() {}) : void 0);
        } catch (t1) {
            return Promise.reject(t1);
        }
    }, E = function t(n, r, i) {
        return n instanceof RegExp ? function(t, n) {
            if (!n) return t;
            for(var r = /\((?:\?<(.*?)>)?(?!\?)/g, i = 0, e = r.exec(t.source); e;)n.push({
                name: e[1] || i++,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: ""
            }), e = r.exec(t.source);
            return t;
        }(n, r) : Array.isArray(n) ? function(n, r, i) {
            var e = n.map(function(n) {
                return t(n, r, i).source;
            });
            return new RegExp("(?:".concat(e.join("|"), ")"), p(i));
        }(n, r, i) : function(t, n, r) {
            return function(t, n, r) {
                void 0 === r && (r = {});
                for(var i = r.strict, e = void 0 !== i && i, o = r.start, u = void 0 === o || o, s = r.end, f = void 0 === s || s, c = r.encode, a = void 0 === c ? function(t) {
                    return t;
                } : c, h = r.delimiter, v = void 0 === h ? "/#?" : h, d = r.endsWith, m = "[".concat(l(void 0 === d ? "" : d), "]|$"), w = "[".concat(l(v), "]"), b = u ? "^" : "", y = 0, P = t; y < P.length; y++){
                    var g = P[y];
                    if ("string" == typeof g) b += l(a(g));
                    else {
                        var E = l(a(g.prefix)), x = l(a(g.suffix));
                        if (g.pattern) {
                            if (n && n.push(g), E || x) {
                                if ("+" === g.modifier || "*" === g.modifier) {
                                    var R = "*" === g.modifier ? "?" : "";
                                    b += "(?:".concat(E, "((?:").concat(g.pattern, ")(?:").concat(x).concat(E, "(?:").concat(g.pattern, "))*)").concat(x, ")").concat(R);
                                } else b += "(?:".concat(E, "(").concat(g.pattern, ")").concat(x, ")").concat(g.modifier);
                            } else b += "+" === g.modifier || "*" === g.modifier ? "((?:".concat(g.pattern, ")").concat(g.modifier, ")") : "(".concat(g.pattern, ")").concat(g.modifier);
                        } else b += "(?:".concat(E).concat(x, ")").concat(g.modifier);
                    }
                }
                if (f) e || (b += "".concat(w, "?")), b += r.endsWith ? "(?=".concat(m, ")") : "$";
                else {
                    var k = t[t.length - 1], O = "string" == typeof k ? w.indexOf(k[k.length - 1]) > -1 : void 0 === k;
                    e || (b += "(?:".concat(w, "(?=").concat(m, "))?")), O || (b += "(?=".concat(w, "|").concat(m, ")"));
                }
                return new RegExp(b, p(r));
            }(function(t, n) {
                void 0 === n && (n = {});
                for(var r = function(t) {
                    for(var n = [], r = 0; r < t.length;){
                        var i = t[r];
                        if ("*" !== i && "+" !== i && "?" !== i) {
                            if ("\\" !== i) {
                                if ("{" !== i) {
                                    if ("}" !== i) {
                                        if (":" !== i) {
                                            if ("(" !== i) n.push({
                                                type: "CHAR",
                                                index: r,
                                                value: t[r++]
                                            });
                                            else {
                                                var e = 1, o = "";
                                                if ("?" === t[s = r + 1]) throw new TypeError('Pattern cannot start with "?" at '.concat(s));
                                                for(; s < t.length;)if ("\\" !== t[s]) {
                                                    if (")" === t[s]) {
                                                        if (0 == --e) {
                                                            s++;
                                                            break;
                                                        }
                                                    } else if ("(" === t[s] && (e++, "?" !== t[s + 1])) throw new TypeError("Capturing groups are not allowed at ".concat(s));
                                                    o += t[s++];
                                                } else o += t[s++] + t[s++];
                                                if (e) throw new TypeError("Unbalanced pattern at ".concat(r));
                                                if (!o) throw new TypeError("Missing pattern at ".concat(r));
                                                n.push({
                                                    type: "PATTERN",
                                                    index: r,
                                                    value: o
                                                }), r = s;
                                            }
                                        } else {
                                            for(var u = "", s = r + 1; s < t.length;){
                                                var f = t.charCodeAt(s);
                                                if (!(f >= 48 && f <= 57 || f >= 65 && f <= 90 || f >= 97 && f <= 122 || 95 === f)) break;
                                                u += t[s++];
                                            }
                                            if (!u) throw new TypeError("Missing parameter name at ".concat(r));
                                            n.push({
                                                type: "NAME",
                                                index: r,
                                                value: u
                                            }), r = s;
                                        }
                                    } else n.push({
                                        type: "CLOSE",
                                        index: r,
                                        value: t[r++]
                                    });
                                } else n.push({
                                    type: "OPEN",
                                    index: r,
                                    value: t[r++]
                                });
                            } else n.push({
                                type: "ESCAPED_CHAR",
                                index: r++,
                                value: t[r++]
                            });
                        } else n.push({
                            type: "MODIFIER",
                            index: r,
                            value: t[r++]
                        });
                    }
                    return n.push({
                        type: "END",
                        index: r,
                        value: ""
                    }), n;
                }(t), i = n.prefixes, e = void 0 === i ? "./" : i, o = "[^".concat(l(n.delimiter || "/#?"), "]+?"), u = [], s = 0, f = 0, c = "", a = function(t) {
                    if (f < r.length && r[f].type === t) return r[f++].value;
                }, h = function(t) {
                    var n = a(t);
                    if (void 0 !== n) return n;
                    var i = r[f], e = i.index;
                    throw new TypeError("Unexpected ".concat(i.type, " at ").concat(e, ", expected ").concat(t));
                }, v = function() {
                    for(var t, n = ""; t = a("CHAR") || a("ESCAPED_CHAR");)n += t;
                    return n;
                }; f < r.length;){
                    var d = a("CHAR"), p = a("NAME"), m = a("PATTERN");
                    if (p || m) -1 === e.indexOf(b = d || "") && (c += b, b = ""), c && (u.push(c), c = ""), u.push({
                        name: p || s++,
                        prefix: b,
                        suffix: "",
                        pattern: m || o,
                        modifier: a("MODIFIER") || ""
                    });
                    else {
                        var w = d || a("ESCAPED_CHAR");
                        if (w) c += w;
                        else if (c && (u.push(c), c = ""), a("OPEN")) {
                            var b = v(), y = a("NAME") || "", P = a("PATTERN") || "", g = v();
                            h("CLOSE"), u.push({
                                name: y || (P ? s++ : ""),
                                pattern: y && !P ? o : P,
                                prefix: b,
                                suffix: g,
                                modifier: a("MODIFIER") || ""
                            });
                        } else h("END");
                    }
                }
                return u;
            }(t, r), n, r);
        }(n, r, i);
    }, x = {
        __proto__: null,
        update: g,
        nextTick: function() {
            return new Promise(function(t) {
                window.requestAnimationFrame(t);
            });
        },
        pathToRegexp: E
    }, R = function() {
        return window.location.origin;
    }, k = function(t) {
        return void 0 === t && (t = window.location.href), O(t).port;
    }, O = function(t) {
        var n, r = t.match(/:\d+/);
        if (null === r) /^http/.test(t) && (n = 80), /^https/.test(t) && (n = 443);
        else {
            var i = r[0].substring(1);
            n = parseInt(i, 10);
        }
        var e, o = t.replace(R(), ""), u = {}, s = o.indexOf("#");
        s >= 0 && (e = o.slice(s + 1), o = o.slice(0, s));
        var f = o.indexOf("?");
        return f >= 0 && (u = T(o.slice(f + 1)), o = o.slice(0, f)), {
            hash: e,
            path: o,
            port: n,
            query: u
        };
    }, T = function(t) {
        return t.split("&").reduce(function(t, n) {
            var r = n.split("=");
            return t[r[0]] = r[1], t;
        }, {});
    }, A = function(t) {
        return void 0 === t && (t = window.location.href), t.replace(/(\/#.*|\/|#.*)$/, "");
    }, j = {
        __proto__: null,
        getHref: function() {
            return window.location.href;
        },
        getAbsoluteHref: function(t, n) {
            return void 0 === n && (n = document.baseURI), new URL(t, n).href;
        },
        getOrigin: R,
        getPort: k,
        getPath: function(t) {
            return void 0 === t && (t = window.location.href), O(t).path;
        },
        getQuery: function(t, n) {
            return void 0 === n && (n = !1), n ? JSON.stringify(O(t).query) : O(t).query;
        },
        getHash: function(t) {
            return O(t).hash;
        },
        parse: O,
        parseQuery: T,
        clean: A
    };
    function M(t, n, i, e, o) {
        return void 0 === n && (n = 2e3), new Promise(function(u, s) {
            var f = new XMLHttpRequest;
            f.onreadystatechange = function() {
                if (f.readyState === XMLHttpRequest.DONE) {
                    if (200 === f.status) {
                        var n = "" !== f.responseURL && f.responseURL !== t ? f.responseURL : t;
                        u({
                            html: f.responseText,
                            url: r({
                                href: n
                            }, O(n))
                        }), e.update(t, {
                            status: "fulfilled",
                            target: n
                        });
                    } else if (f.status) {
                        var o = {
                            status: f.status,
                            statusText: f.statusText
                        };
                        i(t, o), s(o), e.update(t, {
                            status: "rejected"
                        });
                    }
                }
            }, f.ontimeout = function() {
                var r = new Error("Timeout error [" + n + "]");
                i(t, r), s(r), e.update(t, {
                    status: "rejected"
                });
            }, f.onerror = function() {
                var n = new Error("Fetch error");
                i(t, n), s(n), e.update(t, {
                    status: "rejected"
                });
            }, f.open("GET", t), f.timeout = n, f.setRequestHeader("Accept", "text/html,application/xhtml+xml,application/xml"), f.setRequestHeader("x-barba", "yes"), o.all().forEach(function(t, n) {
                f.setRequestHeader(n, t);
            }), f.send();
        });
    }
    function N(t) {
        return !!t && ("object" == typeof t || "function" == typeof t) && "function" == typeof t.then;
    }
    function S(t, n) {
        return void 0 === n && (n = {}), function() {
            var r = arguments, i = !1, e = new Promise(function(e, o) {
                n.async = function() {
                    return i = !0, function(t, n) {
                        t ? o(t) : e(n);
                    };
                };
                var u = t.apply(n, [].slice.call(r));
                i || (N(u) ? u.then(e, o) : e(u));
            });
            return e;
        };
    }
    var C = /*#__PURE__*/ function(t) {
        function n() {
            var n;
            return (n = t.call(this) || this).logger = new d("@barba/core"), n.all = [
                "ready",
                "page",
                "reset",
                "currentAdded",
                "currentRemoved",
                "nextAdded",
                "nextRemoved",
                "beforeOnce",
                "once",
                "afterOnce",
                "before",
                "beforeLeave",
                "leave",
                "afterLeave",
                "beforeEnter",
                "enter",
                "afterEnter",
                "after"
            ], n.registered = new Map, n.init(), n;
        }
        i(n, t);
        var r = n.prototype;
        return r.init = function() {
            var t = this;
            this.registered.clear(), this.all.forEach(function(n) {
                t[n] || (t[n] = function(r, i) {
                    t.registered.has(n) || t.registered.set(n, new Set), t.registered.get(n).add({
                        ctx: i || {},
                        fn: r
                    });
                });
            });
        }, r.do = function(t) {
            var n = arguments, r = this;
            if (this.registered.has(t)) {
                var i = Promise.resolve();
                return this.registered.get(t).forEach(function(t) {
                    i = i.then(function() {
                        return S(t.fn, t.ctx).apply(void 0, [].slice.call(n, 1));
                    });
                }), i.catch(function(n) {
                    r.logger.debug("Hook error [" + t + "]"), r.logger.error(n);
                });
            }
            return Promise.resolve();
        }, r.clear = function() {
            var t = this;
            this.all.forEach(function(n) {
                delete t[n];
            }), this.init();
        }, r.help = function() {
            this.logger.info("Available hooks: " + this.all.join(","));
            var t = [];
            this.registered.forEach(function(n, r) {
                return t.push(r);
            }), this.logger.info("Registered hooks: " + t.join(","));
        }, n;
    }(h), L = new C, H = /*#__PURE__*/ function() {
        function t(t) {
            if (this.k = void 0, this.O = [], "boolean" == typeof t) this.k = t;
            else {
                var n = Array.isArray(t) ? t : [
                    t
                ];
                this.O = n.map(function(t) {
                    return E(t);
                });
            }
        }
        return t.prototype.checkHref = function(t) {
            if ("boolean" == typeof this.k) return this.k;
            var n = O(t).path;
            return this.O.some(function(t) {
                return null !== t.exec(n);
            });
        }, t;
    }(), _ = /*#__PURE__*/ function(t) {
        function n(n) {
            var r;
            return (r = t.call(this, n) || this).T = new Map, r;
        }
        i(n, t);
        var e = n.prototype;
        return e.set = function(t, n, r, i, e) {
            return this.T.set(t, {
                action: r,
                request: n,
                status: i,
                target: null != e ? e : t
            }), {
                action: r,
                request: n,
                status: i,
                target: e
            };
        }, e.get = function(t) {
            return this.T.get(t);
        }, e.getRequest = function(t) {
            return this.T.get(t).request;
        }, e.getAction = function(t) {
            return this.T.get(t).action;
        }, e.getStatus = function(t) {
            return this.T.get(t).status;
        }, e.getTarget = function(t) {
            return this.T.get(t).target;
        }, e.has = function(t) {
            return !this.checkHref(t) && this.T.has(t);
        }, e.delete = function(t) {
            return this.T.delete(t);
        }, e.update = function(t, n) {
            var i = r({}, this.T.get(t), n);
            return this.T.set(t, i), i;
        }, n;
    }(H), D = /*#__PURE__*/ function() {
        function t() {
            this.A = new Map;
        }
        var n = t.prototype;
        return n.set = function(t, n) {
            return this.A.set(t, n), {
                name: n
            };
        }, n.get = function(t) {
            return this.A.get(t);
        }, n.all = function() {
            return this.A;
        }, n.has = function(t) {
            return this.A.has(t);
        }, n.delete = function(t) {
            return this.A.delete(t);
        }, n.clear = function() {
            return this.A.clear();
        }, t;
    }(), B = function() {
        return !window.history.pushState;
    }, q = function(t) {
        return !t.el || !t.href;
    }, F = function(t) {
        var n = t.event;
        return n.which > 1 || n.metaKey || n.ctrlKey || n.shiftKey || n.altKey;
    }, I = function(t) {
        var n = t.el;
        return n.hasAttribute("target") && "_blank" === n.target;
    }, U = function(t) {
        var n = t.el;
        return void 0 !== n.protocol && window.location.protocol !== n.protocol || void 0 !== n.hostname && window.location.hostname !== n.hostname;
    }, $ = function(t) {
        var n = t.el;
        return void 0 !== n.port && k() !== k(n.href);
    }, Q = function(t) {
        var n = t.el;
        return n.getAttribute && "string" == typeof n.getAttribute("download");
    }, X = function(t) {
        return t.el.hasAttribute(m.prefix + "-" + m.prevent);
    }, z = function(t) {
        return Boolean(t.el.closest("[" + m.prefix + "-" + m.prevent + '="all"]'));
    }, G = function(t) {
        var n = t.href;
        return A(n) === A() && k(n) === k();
    }, J = /*#__PURE__*/ function(t) {
        function n(n) {
            var r;
            return (r = t.call(this, n) || this).suite = [], r.tests = new Map, r.init(), r;
        }
        i(n, t);
        var r = n.prototype;
        return r.init = function() {
            this.add("pushState", B), this.add("exists", q), this.add("newTab", F), this.add("blank", I), this.add("corsDomain", U), this.add("corsPort", $), this.add("download", Q), this.add("preventSelf", X), this.add("preventAll", z), this.add("sameUrl", G, !1);
        }, r.add = function(t, n, r) {
            void 0 === r && (r = !0), this.tests.set(t, n), r && this.suite.push(t);
        }, r.run = function(t, n, r, i) {
            return this.tests.get(t)({
                el: n,
                event: r,
                href: i
            });
        }, r.checkLink = function(t, n, r) {
            var i = this;
            return this.suite.some(function(e) {
                return i.run(e, t, n, r);
            });
        }, n;
    }(H), W = /*#__PURE__*/ function(t) {
        function n(r, i) {
            var e;
            return void 0 === i && (i = "Barba error"), (e = t.call.apply(t, [
                this
            ].concat([].slice.call(arguments, 2))) || this).error = void 0, e.label = void 0, e.error = r, e.label = i, Error.captureStackTrace && Error.captureStackTrace(c(e), n), e.name = "BarbaError", e;
        }
        return i(n, t), n;
    }(/*#__PURE__*/ f(Error)), K = /*#__PURE__*/ function() {
        function t(t) {
            void 0 === t && (t = []), this.logger = new d("@barba/core"), this.all = [], this.page = [], this.once = [], this.j = [
                {
                    name: "namespace",
                    type: "strings"
                },
                {
                    name: "custom",
                    type: "function"
                }
            ], t && (this.all = this.all.concat(t)), this.update();
        }
        var n = t.prototype;
        return n.add = function(t, n) {
            "rule" === t ? this.j.splice(n.position || 0, 0, n.value) : this.all.push(n), this.update();
        }, n.resolve = function(t, n) {
            var r = this;
            void 0 === n && (n = {});
            var i = n.once ? this.once : this.page;
            i = i.filter(n.self ? function(t) {
                return t.name && "self" === t.name;
            } : function(t) {
                return !t.name || "self" !== t.name;
            });
            var e = new Map, o = i.find(function(i) {
                var o = !0, u = {};
                return n.self && "self" === i.name ? (e.set(i, u), !0) : (r.j.reverse().forEach(function(n) {
                    o && (o = r.M(i, n, t, u), i.from && i.to && (o = r.M(i, n, t, u, "from") && r.M(i, n, t, u, "to")), i.from && !i.to && (o = r.M(i, n, t, u, "from")), !i.from && i.to && (o = r.M(i, n, t, u, "to")));
                }), e.set(i, u), o);
            }), u = e.get(o), s = [];
            if (s.push(n.once ? "once" : "page"), n.self && s.push("self"), u) {
                var f, c = [
                    o
                ];
                Object.keys(u).length > 0 && c.push(u), (f = this.logger).info.apply(f, [
                    "Transition found [" + s.join(",") + "]"
                ].concat(c));
            } else this.logger.info("No transition found [" + s.join(",") + "]");
            return o;
        }, n.update = function() {
            var t = this;
            this.all = this.all.map(function(n) {
                return t.N(n);
            }).sort(function(t, n) {
                return t.priority - n.priority;
            }).reverse().map(function(t) {
                return delete t.priority, t;
            }), this.page = this.all.filter(function(t) {
                return void 0 !== t.leave || void 0 !== t.enter;
            }), this.once = this.all.filter(function(t) {
                return void 0 !== t.once;
            });
        }, n.M = function(t, n, r, i, e) {
            var o = !0, u = !1, s = t, f = n.name, c = f, a = f, h = f, v = e ? s[e] : s, d = "to" === e ? r.next : r.current;
            if (e ? v && v[f] : v[f]) {
                switch(n.type){
                    case "strings":
                    default:
                        var l = Array.isArray(v[c]) ? v[c] : [
                            v[c]
                        ];
                        d[c] && -1 !== l.indexOf(d[c]) && (u = !0), -1 === l.indexOf(d[c]) && (o = !1);
                        break;
                    case "object":
                        var p = Array.isArray(v[a]) ? v[a] : [
                            v[a]
                        ];
                        d[a] ? (d[a].name && -1 !== p.indexOf(d[a].name) && (u = !0), -1 === p.indexOf(d[a].name) && (o = !1)) : o = !1;
                        break;
                    case "function":
                        v[h](r) ? u = !0 : o = !1;
                }
                u && (e ? (i[e] = i[e] || {}, i[e][f] = s[e][f]) : i[f] = s[f]);
            }
            return o;
        }, n.S = function(t, n, r) {
            var i = 0;
            return (t[n] || t.from && t.from[n] || t.to && t.to[n]) && (i += Math.pow(10, r), t.from && t.from[n] && (i += 1), t.to && t.to[n] && (i += 2)), i;
        }, n.N = function(t) {
            var n = this;
            t.priority = 0;
            var r = 0;
            return this.j.forEach(function(i, e) {
                r += n.S(t, i.name, e + 1);
            }), t.priority = r, t;
        }, t;
    }();
    function V(t, n) {
        try {
            var r = t();
        } catch (t1) {
            return n(t1);
        }
        return r && r.then ? r.then(void 0, n) : r;
    }
    var Y = /*#__PURE__*/ function() {
        function t(t) {
            void 0 === t && (t = []), this.logger = new d("@barba/core"), this.store = void 0, this.C = !1, this.store = new K(t);
        }
        var r = t.prototype;
        return r.get = function(t, n) {
            return this.store.resolve(t, n);
        }, r.doOnce = function(t) {
            var n = t.data, r = t.transition;
            try {
                var i = function() {
                    e.C = !1;
                }, e = this, o = r || {};
                e.C = !0;
                var u = V(function() {
                    return Promise.resolve(e.L("beforeOnce", n, o)).then(function() {
                        return Promise.resolve(e.once(n, o)).then(function() {
                            return Promise.resolve(e.L("afterOnce", n, o)).then(function() {});
                        });
                    });
                }, function(t) {
                    e.C = !1, e.logger.debug("Transition error [before/after/once]"), e.logger.error(t);
                });
                return Promise.resolve(u && u.then ? u.then(i) : i());
            } catch (t1) {
                return Promise.reject(t1);
            }
        }, r.doPage = function(t) {
            var n = t.data, r = t.transition, i = t.page, e = t.wrapper;
            try {
                var o = function(t) {
                    u.C = !1;
                }, u = this, s = r || {}, f = !0 === s.sync || !1;
                u.C = !0;
                var c = V(function() {
                    function t() {
                        return Promise.resolve(u.L("before", n, s)).then(function() {
                            function t(t) {
                                return Promise.resolve(u.remove(n)).then(function() {
                                    return Promise.resolve(u.L("after", n, s)).then(function() {});
                                });
                            }
                            var r = function() {
                                if (f) return V(function() {
                                    return Promise.resolve(u.add(n, e)).then(function() {
                                        return Promise.resolve(u.L("beforeLeave", n, s)).then(function() {
                                            return Promise.resolve(u.L("beforeEnter", n, s)).then(function() {
                                                return Promise.resolve(Promise.all([
                                                    u.leave(n, s),
                                                    u.enter(n, s)
                                                ])).then(function() {
                                                    return Promise.resolve(u.L("afterLeave", n, s)).then(function() {
                                                        return Promise.resolve(u.L("afterEnter", n, s)).then(function() {});
                                                    });
                                                });
                                            });
                                        });
                                    });
                                }, function(t) {
                                    if (u.H(t)) throw new W(t, "Transition error [sync]");
                                });
                                var t = function(t) {
                                    return V(function() {
                                        var t = function() {
                                            if (!1 !== r) return Promise.resolve(u.add(n, e)).then(function() {
                                                return Promise.resolve(u.L("beforeEnter", n, s)).then(function() {
                                                    return Promise.resolve(u.enter(n, s, r)).then(function() {
                                                        return Promise.resolve(u.L("afterEnter", n, s)).then(function() {});
                                                    });
                                                });
                                            });
                                        }();
                                        if (t && t.then) return t.then(function() {});
                                    }, function(t) {
                                        if (u.H(t)) throw new W(t, "Transition error [before/after/enter]");
                                    });
                                }, r = !1, o = V(function() {
                                    return Promise.resolve(u.L("beforeLeave", n, s)).then(function() {
                                        return Promise.resolve(Promise.all([
                                            u.leave(n, s),
                                            g(i, n)
                                        ]).then(function(t) {
                                            return t[0];
                                        })).then(function(t) {
                                            return r = t, Promise.resolve(u.L("afterLeave", n, s)).then(function() {});
                                        });
                                    });
                                }, function(t) {
                                    if (u.H(t)) throw new W(t, "Transition error [before/after/leave]");
                                });
                                return o && o.then ? o.then(t) : t();
                            }();
                            return r && r.then ? r.then(t) : t();
                        });
                    }
                    var r = function() {
                        if (f) return Promise.resolve(g(i, n)).then(function() {});
                    }();
                    return r && r.then ? r.then(t) : t();
                }, function(t) {
                    if (u.C = !1, t.name && "BarbaError" === t.name) throw u.logger.debug(t.label), u.logger.error(t.error), t;
                    throw u.logger.debug("Transition error [page]"), u.logger.error(t), t;
                });
                return Promise.resolve(c && c.then ? c.then(o) : o());
            } catch (t1) {
                return Promise.reject(t1);
            }
        }, r.once = function(t, n) {
            try {
                return Promise.resolve(L.do("once", t, n)).then(function() {
                    return n.once ? S(n.once, n)(t) : Promise.resolve();
                });
            } catch (t1) {
                return Promise.reject(t1);
            }
        }, r.leave = function(t, n) {
            try {
                return Promise.resolve(L.do("leave", t, n)).then(function() {
                    return n.leave ? S(n.leave, n)(t) : Promise.resolve();
                });
            } catch (t1) {
                return Promise.reject(t1);
            }
        }, r.enter = function(t, n, r) {
            try {
                return Promise.resolve(L.do("enter", t, n)).then(function() {
                    return n.enter ? S(n.enter, n)(t, r) : Promise.resolve();
                });
            } catch (t1) {
                return Promise.reject(t1);
            }
        }, r.add = function(t, n) {
            try {
                return b.addContainer(t.next.container, n), L.do("nextAdded", t), Promise.resolve();
            } catch (t1) {
                return Promise.reject(t1);
            }
        }, r.remove = function(t) {
            try {
                return b.removeContainer(t.current.container), L.do("currentRemoved", t), Promise.resolve();
            } catch (t1) {
                return Promise.reject(t1);
            }
        }, r.H = function(t) {
            return t.message ? !/Timeout error|Fetch error/.test(t.message) : !t.status;
        }, r.L = function(t, n, r) {
            try {
                return Promise.resolve(L.do(t, n, r)).then(function() {
                    return r[t] ? S(r[t], r)(n) : Promise.resolve();
                });
            } catch (t1) {
                return Promise.reject(t1);
            }
        }, n(t, [
            {
                key: "isRunning",
                get: function() {
                    return this.C;
                },
                set: function(t) {
                    this.C = t;
                }
            },
            {
                key: "hasOnce",
                get: function() {
                    return this.store.once.length > 0;
                }
            },
            {
                key: "hasSelf",
                get: function() {
                    return this.store.all.some(function(t) {
                        return "self" === t.name;
                    });
                }
            },
            {
                key: "shouldWait",
                get: function() {
                    return this.store.all.some(function(t) {
                        return t.to && !t.to.route || t.sync;
                    });
                }
            }
        ]), t;
    }(), Z = /*#__PURE__*/ function() {
        function t(t) {
            var n = this;
            this.names = [
                "beforeLeave",
                "afterLeave",
                "beforeEnter",
                "afterEnter"
            ], this.byNamespace = new Map, 0 !== t.length && (t.forEach(function(t) {
                n.byNamespace.set(t.namespace, t);
            }), this.names.forEach(function(t) {
                L[t](n._(t));
            }));
        }
        return t.prototype._ = function(t) {
            var n = this;
            return function(r) {
                var i = t.match(/enter/i) ? r.next : r.current, e = n.byNamespace.get(i.namespace);
                return e && e[t] ? S(e[t], e)(r) : Promise.resolve();
            };
        }, t;
    }();
    Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), Element.prototype.closest || (Element.prototype.closest = function(t) {
        var n = this;
        do {
            if (n.matches(t)) return n;
            n = n.parentElement || n.parentNode;
        }while (null !== n && 1 === n.nodeType);
        return null;
    });
    var tt = {
        container: null,
        html: "",
        namespace: "",
        url: {
            hash: "",
            href: "",
            path: "",
            port: null,
            query: {}
        }
    }, nt = /*#__PURE__*/ function() {
        function t() {
            this.version = "2.10.2", this.schemaPage = tt, this.Logger = d, this.logger = new d("@barba/core"), this.plugins = [], this.timeout = void 0, this.cacheIgnore = void 0, this.cacheFirstPage = void 0, this.prefetchIgnore = void 0, this.preventRunning = void 0, this.hooks = L, this.cache = void 0, this.headers = void 0, this.prevent = void 0, this.transitions = void 0, this.views = void 0, this.dom = b, this.helpers = x, this.history = P, this.request = M, this.url = j, this.D = void 0, this.B = void 0, this.q = void 0, this.F = void 0;
        }
        var i = t.prototype;
        return i.use = function(t, n) {
            var r = this.plugins;
            r.indexOf(t) > -1 ? this.logger.warn("Plugin [" + t.name + "] already installed.") : "function" == typeof t.install ? (t.install(this, n), r.push(t)) : this.logger.warn("Plugin [" + t.name + '] has no "install" method.');
        }, i.init = function(t) {
            var n = void 0 === t ? {} : t, i = n.transitions, e = void 0 === i ? [] : i, o = n.views, u = void 0 === o ? [] : o, s = n.schema, f = void 0 === s ? m : s, c = n.requestError, a = n.timeout, h = void 0 === a ? 2e3 : a, v = n.cacheIgnore, l = void 0 !== v && v, p = n.cacheFirstPage, w = void 0 !== p && p, b = n.prefetchIgnore, y = void 0 !== b && b, P = n.preventRunning, g = void 0 !== P && P, E = n.prevent, x = void 0 === E ? null : E, R = n.debug, k = n.logLevel;
            if (d.setLevel(!0 === (void 0 !== R && R) ? "debug" : void 0 === k ? "off" : k), this.logger.info(this.version), Object.keys(f).forEach(function(t) {
                m[t] && (m[t] = f[t]);
            }), this.B = c, this.timeout = h, this.cacheIgnore = l, this.cacheFirstPage = w, this.prefetchIgnore = y, this.preventRunning = g, this.q = this.dom.getWrapper(), !this.q) throw new Error("[@barba/core] No Barba wrapper found");
            this.I();
            var O = this.data.current;
            if (!O.container) throw new Error("[@barba/core] No Barba container found");
            if (this.cache = new _(l), this.headers = new D, this.prevent = new J(y), this.transitions = new Y(e), this.views = new Z(u), null !== x) {
                if ("function" != typeof x) throw new Error("[@barba/core] Prevent should be a function");
                this.prevent.add("preventCustom", x);
            }
            this.history.init(O.url.href, O.namespace), w && this.cache.set(O.url.href, Promise.resolve({
                html: O.html,
                url: O.url
            }), "init", "fulfilled"), this.U = this.U.bind(this), this.$ = this.$.bind(this), this.X = this.X.bind(this), this.G(), this.plugins.forEach(function(t) {
                return t.init();
            });
            var T = this.data;
            T.trigger = "barba", T.next = T.current, T.current = r({}, this.schemaPage), this.hooks.do("ready", T), this.once(T), this.I();
        }, i.destroy = function() {
            this.I(), this.J(), this.history.clear(), this.hooks.clear(), this.plugins = [];
        }, i.force = function(t) {
            window.location.assign(t);
        }, i.go = function(t, n, r) {
            var i;
            if (void 0 === n && (n = "barba"), this.F = null, this.transitions.isRunning) this.force(t);
            else if (!(i = "popstate" === n ? this.history.current && this.url.getPath(this.history.current.url) === this.url.getPath(t) && this.url.getQuery(this.history.current.url, !0) === this.url.getQuery(t, !0) : this.prevent.run("sameUrl", null, null, t)) || this.transitions.hasSelf) return n = this.history.change(this.cache.has(t) ? this.cache.get(t).target : t, n, r), r && (r.stopPropagation(), r.preventDefault()), this.page(t, n, null != r ? r : void 0, i);
        }, i.once = function(t) {
            try {
                var n = this;
                return Promise.resolve(n.hooks.do("beforeEnter", t)).then(function() {
                    function r() {
                        return Promise.resolve(n.hooks.do("afterEnter", t)).then(function() {});
                    }
                    var i = function() {
                        if (n.transitions.hasOnce) {
                            var r = n.transitions.get(t, {
                                once: !0
                            });
                            return Promise.resolve(n.transitions.doOnce({
                                transition: r,
                                data: t
                            })).then(function() {});
                        }
                    }();
                    return i && i.then ? i.then(r) : r();
                });
            } catch (t1) {
                return Promise.reject(t1);
            }
        }, i.page = function(t, n, i, e) {
            try {
                var o, u = function() {
                    var t = s.data;
                    return Promise.resolve(s.hooks.do("page", t)).then(function() {
                        var n = function(n, r) {
                            try {
                                var i = (u = s.transitions.get(t, {
                                    once: !1,
                                    self: e
                                }), Promise.resolve(s.transitions.doPage({
                                    data: t,
                                    page: o,
                                    transition: u,
                                    wrapper: s.q
                                })).then(function() {
                                    s.I();
                                }));
                            } catch (t1) {
                                return r();
                            }
                            var u;
                            return i && i.then ? i.then(void 0, r) : i;
                        }(0, function() {
                            0 === d.getLevel() && s.force(t.next.url.href);
                        });
                        if (n && n.then) return n.then(function() {});
                    });
                }, s = this;
                if (s.data.next.url = r({
                    href: t
                }, s.url.parse(t)), s.data.trigger = n, s.data.event = i, s.cache.has(t)) o = s.cache.update(t, {
                    action: "click"
                }).request;
                else {
                    var f = s.request(t, s.timeout, s.onRequestError.bind(s, n), s.cache, s.headers);
                    f.then(function(r) {
                        r.url.href !== t && s.history.add(r.url.href, n, "replace");
                    }), o = s.cache.set(t, f, "click", "pending").request;
                }
                var c = function() {
                    if (s.transitions.shouldWait) return Promise.resolve(g(o, s.data)).then(function() {});
                }();
                return Promise.resolve(c && c.then ? c.then(u) : u());
            } catch (t1) {
                return Promise.reject(t1);
            }
        }, i.onRequestError = function(t) {
            this.transitions.isRunning = !1;
            var n = [].slice.call(arguments, 1), r = n[0], i = n[1], e = this.cache.getAction(r);
            return this.cache.delete(r), this.B && !1 === this.B(t, e, r, i) || "click" === e && this.force(r), !1;
        }, i.prefetch = function(t) {
            var n = this;
            t = this.url.getAbsoluteHref(t), this.cache.has(t) || this.cache.set(t, this.request(t, this.timeout, this.onRequestError.bind(this, "barba"), this.cache, this.headers).catch(function(t) {
                n.logger.error(t);
            }), "prefetch", "pending");
        }, i.G = function() {
            !0 !== this.prefetchIgnore && (document.addEventListener("mouseover", this.U), document.addEventListener("touchstart", this.U)), document.addEventListener("click", this.$), window.addEventListener("popstate", this.X);
        }, i.J = function() {
            !0 !== this.prefetchIgnore && (document.removeEventListener("mouseover", this.U), document.removeEventListener("touchstart", this.U)), document.removeEventListener("click", this.$), window.removeEventListener("popstate", this.X);
        }, i.U = function(t) {
            var n = this, r = this.W(t);
            if (r) {
                var i = this.url.getAbsoluteHref(this.dom.getHref(r));
                this.prevent.checkHref(i) || this.cache.has(i) || this.cache.set(i, this.request(i, this.timeout, this.onRequestError.bind(this, r), this.cache, this.headers).catch(function(t) {
                    n.logger.error(t);
                }), "enter", "pending");
            }
        }, i.$ = function(t) {
            var n = this.W(t);
            if (!n || this.transitions.isRunning && this.preventRunning) return t.preventDefault(), void t.stopPropagation();
            this.F = t, this.go(this.dom.getHref(n), n, t);
        }, i.X = function(t) {
            this.go(this.url.getHref(), "popstate", t);
        }, i.W = function(t) {
            for(var n = t.target; n && !this.dom.getHref(n);)n = n.parentNode;
            if (n && !this.prevent.checkLink(n, t, this.dom.getHref(n))) return n;
        }, i.I = function() {
            var t = this.url.getHref(), n = {
                container: this.dom.getContainer(),
                html: this.dom.getHtml(),
                namespace: this.dom.getNamespace(),
                url: r({
                    href: t
                }, this.url.parse(t))
            };
            this.D = {
                current: n,
                event: void 0,
                next: r({}, this.schemaPage),
                trigger: void 0
            }, this.hooks.do("reset", this.data);
        }, n(t, [
            {
                key: "data",
                get: function() {
                    return this.D;
                }
            },
            {
                key: "wrapper",
                get: function() {
                    return this.q;
                }
            }
        ]), t;
    }();
    return new nt;
});

},{}],"1fYkF":[function(require,module,exports) {
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

},{}]},["03sS5","9sgZL"], "9sgZL", "parcelRequire94c2")

//# sourceMappingURL=hat.2e3ff765.js.map
