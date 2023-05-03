(() => {
    "use strict";
    var e = {
        895: () => {
            try {
                self["workbox:cacheable-response:6.5.3"] && _()
            } catch (e) {
            }
        }, 913: () => {
            try {
                self["workbox:core:6.5.3"] && _()
            } catch (e) {
            }
        }, 80: () => {
            try {
                self["workbox:routing:6.5.3"] && _()
            } catch (e) {
            }
        }, 873: () => {
            try {
                self["workbox:strategies:6.5.3"] && _()
            } catch (e) {
            }
        }
    }, t = {};

    function s(a) {
        var r = t[a];
        if (void 0 !== r) return r.exports;
        var n = t[a] = {exports: {}};
        return e[a](n, n.exports, s), n.exports
    }

    (() => {
        s(913);

        class e extends Error {
            constructor(e, t) {
                super(((e, ...t) => {
                    let s = e;
                    return t.length > 0 && (s += ` :: ${JSON.stringify(t)}`), s
                })(e, t)), this.name = e, this.details = t
            }
        }

        s(80);
        const t = e => e && "object" == typeof e ? e : {handle: e};

        class a {
            constructor(e, s, a = "GET") {
                this.handler = t(s), this.match = e, this.method = a
            }

            setCatchHandler(e) {
                this.catchHandler = t(e)
            }
        }

        class r extends a {
            constructor(e, t, s) {
                super((({url: t}) => {
                    const s = e.exec(t.href);
                    if (s && (t.origin === location.origin || 0 === s.index)) return s.slice(1)
                }), t, s)
            }
        }

        class n {
            constructor() {
                this._routes = new Map, this._defaultHandlerMap = new Map
            }

            get routes() {
                return this._routes
            }

            addFetchListener() {
                self.addEventListener("fetch", (e => {
                    const {request: t} = e, s = this.handleRequest({request: t, event: e});
                    s && e.respondWith(s)
                }))
            }

            addCacheListener() {
                self.addEventListener("message", (e => {
                    if (e.data && "CACHE_URLS" === e.data.type) {
                        const {payload: t} = e.data, s = Promise.all(t.urlsToCache.map((t => {
                            "string" == typeof t && (t = [t]);
                            const s = new Request(...t);
                            return this.handleRequest({request: s, event: e})
                        })));
                        e.waitUntil(s), e.ports && e.ports[0] && s.then((() => e.ports[0].postMessage(!0)))
                    }
                }))
            }

            handleRequest({request: e, event: t}) {
                const s = new URL(e.url, location.href);
                if (!s.protocol.startsWith("http")) return;
                const a = s.origin === location.origin, {params: r, route: n} = this.findMatchingRoute({
                    event: t,
                    request: e,
                    sameOrigin: a,
                    url: s
                });
                let i = n && n.handler;
                const o = e.method;
                if (!i && this._defaultHandlerMap.has(o) && (i = this._defaultHandlerMap.get(o)), !i) return;
                let c;
                try {
                    c = i.handle({url: s, request: e, event: t, params: r})
                } catch (e) {
                    c = Promise.reject(e)
                }
                const h = n && n.catchHandler;
                return c instanceof Promise && (this._catchHandler || h) && (c = c.catch((async a => {
                    if (h) try {
                        return await h.handle({url: s, request: e, event: t, params: r})
                    } catch (e) {
                        e instanceof Error && (a = e)
                    }
                    if (this._catchHandler) return this._catchHandler.handle({url: s, request: e, event: t});
                    throw a
                }))), c
            }

            findMatchingRoute({url: e, sameOrigin: t, request: s, event: a}) {
                const r = this._routes.get(s.method) || [];
                for (const n of r) {
                    let r;
                    const i = n.match({url: e, sameOrigin: t, request: s, event: a});
                    if (i) return r = i, (Array.isArray(r) && 0 === r.length || i.constructor === Object && 0 === Object.keys(i).length || "boolean" == typeof i) && (r = void 0), {
                        route: n,
                        params: r
                    }
                }
                return {}
            }

            setDefaultHandler(e, s = "GET") {
                this._defaultHandlerMap.set(s, t(e))
            }

            setCatchHandler(e) {
                this._catchHandler = t(e)
            }

            registerRoute(e) {
                this._routes.has(e.method) || this._routes.set(e.method, []), this._routes.get(e.method).push(e)
            }

            unregisterRoute(t) {
                if (!this._routes.has(t.method)) throw new e("unregister-route-but-not-found-with-method", {method: t.method});
                const s = this._routes.get(t.method).indexOf(t);
                if (!(s > -1)) throw new e("unregister-route-route-not-registered");
                this._routes.get(t.method).splice(s, 1)
            }
        }

        let i;

        function o(t, s, o) {
            let c;
            if ("string" == typeof t) {
                const e = new URL(t, location.href);
                c = new a((({url: t}) => t.href === e.href), s, o)
            } else if (t instanceof RegExp) c = new r(t, s, o); else if ("function" == typeof t) c = new a(t, s, o); else {
                if (!(t instanceof a)) throw new e("unsupported-route-type", {
                    moduleName: "workbox-routing",
                    funcName: "registerRoute",
                    paramName: "capture"
                });
                c = t
            }
            return (i || (i = new n, i.addFetchListener(), i.addCacheListener()), i).registerRoute(c), c
        }

        const c = {
            googleAnalytics: "googleAnalytics",
            precache: "precache-v2",
            prefix: "workbox",
            runtime: "runtime",
            suffix: "undefined" != typeof registration ? registration.scope : ""
        }, h = e => {
            return e || (t = c.runtime, [c.prefix, t, c.suffix].filter((e => e && e.length > 0)).join("-"));
            var t
        };

        function l(e, t) {
            const s = new URL(e);
            for (const e of t) s.searchParams.delete(e);
            return s.href
        }

        class u {
            constructor() {
                this.promise = new Promise(((e, t) => {
                    this.resolve = e, this.reject = t
                }))
            }
        }

        const f = new Set;

        function d(e) {
            return "string" == typeof e ? new Request(e) : e
        }

        s(873);

        class p {
            constructor(e, t) {
                this._cacheKeys = {}, Object.assign(this, t), this.event = t.event, this._strategy = e, this._handlerDeferred = new u, this._extendLifetimePromises = [], this._plugins = [...e.plugins], this._pluginStateMap = new Map;
                for (const e of this._plugins) this._pluginStateMap.set(e, {});
                this.event.waitUntil(this._handlerDeferred.promise)
            }

            async fetch(t) {
                const {event: s} = this;
                let a = d(t);
                if ("navigate" === a.mode && s instanceof FetchEvent && s.preloadResponse) {
                    const e = await s.preloadResponse;
                    if (e) return e
                }
                const r = this.hasCallback("fetchDidFail") ? a.clone() : null;
                try {
                    for (const e of this.iterateCallbacks("requestWillFetch")) a = await e({
                        request: a.clone(),
                        event: s
                    })
                } catch (t) {
                    if (t instanceof Error) throw new e("plugin-error-request-will-fetch", {thrownErrorMessage: t.message})
                }
                const n = a.clone();
                try {
                    let e;
                    e = await fetch(a, "navigate" === a.mode ? void 0 : this._strategy.fetchOptions);
                    for (const t of this.iterateCallbacks("fetchDidSucceed")) e = await t({
                        event: s,
                        request: n,
                        response: e
                    });
                    return e
                } catch (e) {
                    throw r && await this.runCallbacks("fetchDidFail", {
                        error: e,
                        event: s,
                        originalRequest: r.clone(),
                        request: n.clone()
                    }), e
                }
            }

            async fetchAndCachePut(e) {
                const t = await this.fetch(e), s = t.clone();
                return this.waitUntil(this.cachePut(e, s)), t
            }

            async cacheMatch(e) {
                const t = d(e);
                let s;
                const {cacheName: a, matchOptions: r} = this._strategy, n = await this.getCacheKey(t, "read"),
                    i = Object.assign(Object.assign({}, r), {cacheName: a});
                s = await caches.match(n, i);
                for (const e of this.iterateCallbacks("cachedResponseWillBeUsed")) s = await e({
                    cacheName: a,
                    matchOptions: r,
                    cachedResponse: s,
                    request: n,
                    event: this.event
                }) || void 0;
                return s
            }

            async cachePut(t, s) {
                const a = d(t);
                await (0, new Promise((e => setTimeout(e, 0))));
                const r = await this.getCacheKey(a, "write");
                if (!s) throw new e("cache-put-with-no-response", {url: (n = r.url, new URL(String(n), location.href).href.replace(new RegExp(`^${location.origin}`), ""))});
                var n;
                const i = await this._ensureResponseSafeToCache(s);
                if (!i) return !1;
                const {cacheName: o, matchOptions: c} = this._strategy, h = await self.caches.open(o),
                    u = this.hasCallback("cacheDidUpdate"), p = u ? await async function (e, t, s, a) {
                        const r = l(t.url, s);
                        if (t.url === r) return e.match(t, a);
                        const n = Object.assign(Object.assign({}, a), {ignoreSearch: !0}), i = await e.keys(t, n);
                        for (const t of i) if (r === l(t.url, s)) return e.match(t, a)
                    }(h, r.clone(), ["__WB_REVISION__"], c) : null;
                try {
                    await h.put(r, u ? i.clone() : i)
                } catch (e) {
                    if (e instanceof Error) throw"QuotaExceededError" === e.name && await async function () {
                        for (const e of f) await e()
                    }(), e
                }
                for (const e of this.iterateCallbacks("cacheDidUpdate")) await e({
                    cacheName: o,
                    oldResponse: p,
                    newResponse: i.clone(),
                    request: r,
                    event: this.event
                });
                return !0
            }

            async getCacheKey(e, t) {
                const s = `${e.url} | ${t}`;
                if (!this._cacheKeys[s]) {
                    let a = e;
                    for (const e of this.iterateCallbacks("cacheKeyWillBeUsed")) a = d(await e({
                        mode: t,
                        request: a,
                        event: this.event,
                        params: this.params
                    }));
                    this._cacheKeys[s] = a
                }
                return this._cacheKeys[s]
            }

            hasCallback(e) {
                for (const t of this._strategy.plugins) if (e in t) return !0;
                return !1
            }

            async runCallbacks(e, t) {
                for (const s of this.iterateCallbacks(e)) await s(t)
            }

            * iterateCallbacks(e) {
                for (const t of this._strategy.plugins) if ("function" == typeof t[e]) {
                    const s = this._pluginStateMap.get(t), a = a => {
                        const r = Object.assign(Object.assign({}, a), {state: s});
                        return t[e](r)
                    };
                    yield a
                }
            }

            waitUntil(e) {
                return this._extendLifetimePromises.push(e), e
            }

            async doneWaiting() {
                let e;
                for (; e = this._extendLifetimePromises.shift();) await e
            }

            destroy() {
                this._handlerDeferred.resolve(null)
            }

            async _ensureResponseSafeToCache(e) {
                let t = e, s = !1;
                for (const e of this.iterateCallbacks("cacheWillUpdate")) if (t = await e({
                    request: this.request,
                    response: t,
                    event: this.event
                }) || void 0, s = !0, !t) break;
                return s || t && 200 !== t.status && (t = void 0), t
            }
        }

        class w {
            constructor(e = {}) {
                this.cacheName = h(e.cacheName), this.plugins = e.plugins || [], this.fetchOptions = e.fetchOptions, this.matchOptions = e.matchOptions
            }

            handle(e) {
                const [t] = this.handleAll(e);
                return t
            }

            handleAll(e) {
                e instanceof FetchEvent && (e = {event: e, request: e.request});
                const t = e.event, s = "string" == typeof e.request ? new Request(e.request) : e.request,
                    a = "params" in e ? e.params : void 0, r = new p(this, {event: t, request: s, params: a}),
                    n = this._getResponse(r, s, t);
                return [n, this._awaitComplete(n, r, s, t)]
            }

            async _getResponse(t, s, a) {
                let r;
                await t.runCallbacks("handlerWillStart", {event: a, request: s});
                try {
                    if (r = await this._handle(s, t), !r || "error" === r.type) throw new e("no-response", {url: s.url})
                } catch (e) {
                    if (e instanceof Error) for (const n of t.iterateCallbacks("handlerDidError")) if (r = await n({
                        error: e,
                        event: a,
                        request: s
                    }), r) break;
                    if (!r) throw e
                }
                for (const e of t.iterateCallbacks("handlerWillRespond")) r = await e({
                    event: a,
                    request: s,
                    response: r
                });
                return r
            }

            async _awaitComplete(e, t, s, a) {
                let r, n;
                try {
                    r = await e
                } catch (n) {
                }
                try {
                    await t.runCallbacks("handlerDidRespond", {
                        event: a,
                        request: s,
                        response: r
                    }), await t.doneWaiting()
                } catch (e) {
                    e instanceof Error && (n = e)
                }
                if (await t.runCallbacks("handlerDidComplete", {
                    event: a,
                    request: s,
                    response: r,
                    error: n
                }), t.destroy(), n) throw n
            }
        }

        class g extends w {
            async _handle(t, s) {
                let a, r = await s.cacheMatch(t);
                if (r) ; else try {
                    r = await s.fetchAndCachePut(t)
                } catch (e) {
                    e instanceof Error && (a = e)
                }
                if (!r) throw new e("no-response", {url: t.url, error: a});
                return r
            }
        }

        s(895);

        class m {
            constructor(e = {}) {
                this._statuses = e.statuses, this._headers = e.headers
            }

            isResponseCacheable(e) {
                let t = !0;
                return this._statuses && (t = this._statuses.includes(e.status)), this._headers && t && (t = Object.keys(this._headers).some((t => e.headers.get(t) === this._headers[t]))), t
            }
        }

        self.__WB_DISABLE_DEV_LOGS = !0;
        const _ = g, y = new class {
                constructor(e) {
                    this.cacheWillUpdate = async ({response: e}) => this._cacheableResponse.isResponseCacheable(e) ? e : null, this._cacheableResponse = new m(e)
                }
            }({statuses: [0, 200]}),
            v = /\.(?:js|jsx|ts|tsx|css|scss|json|html|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|map|ico)($|\?)/;
        o(new RegExp(/^https?:\/\/js(dev)?.arcgis.com\//), new g({
            cacheName: "arcgis-jsapi-cache",
            plugins: [y]
        })), o((({
                     url: e,
                     request: t,
                     event: s
                 }) => !(e.pathname.indexOf("/sharing/rest/") > -1) && "/version.json" !== e.pathname && e.origin === self.location.origin && v.test(e.pathname)), new _({
            cacheName: "exb-assets-cache",
            fetchOptions: {credentials: "include"},
            plugins: [y]
        })), self.addEventListener("activate", (function (e) {
            e.waitUntil(caches.keys().then((function (e) {
                return Promise.all(e.map((function (e) {
                    return caches.delete(e)
                })))
            })))
        }))
    })()
})();