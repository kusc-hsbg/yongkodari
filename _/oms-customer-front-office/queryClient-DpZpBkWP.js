function De(t, e) {
  for (var r = 0; r < e.length; r++) {
    const n = e[r];
    if (typeof n != "string" && !Array.isArray(n)) {
      for (const s in n)
        if (s !== "default" && !(s in t)) {
          const i = Object.getOwnPropertyDescriptor(n, s);
          i && Object.defineProperty(t, s, i.get ? i : {
            enumerable: !0,
            get: () => n[s]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }));
}
var ct = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Me(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function ht(t) {
  if (t.__esModule)
    return t;
  var e = t.default;
  if (typeof e == "function") {
    var r = function n() {
      return this instanceof n ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
    };
    r.prototype = e.prototype;
  } else
    r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(t).forEach(function(n) {
    var s = Object.getOwnPropertyDescriptor(t, n);
    Object.defineProperty(r, n, s.get ? s : {
      enumerable: !0,
      get: function() {
        return t[n];
      }
    });
  }), r;
}
var he = { exports: {} }, l = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var x = Symbol.for("react.element"), Re = Symbol.for("react.portal"), Ae = Symbol.for("react.fragment"), xe = Symbol.for("react.strict_mode"), je = Symbol.for("react.profiler"), Qe = Symbol.for("react.provider"), ke = Symbol.for("react.context"), Te = Symbol.for("react.forward_ref"), Ue = Symbol.for("react.suspense"), Ke = Symbol.for("react.memo"), Ie = Symbol.for("react.lazy"), ne = Symbol.iterator;
function Le(t) {
  return t === null || typeof t != "object" ? null : (t = ne && t[ne] || t["@@iterator"], typeof t == "function" ? t : null);
}
var fe = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, de = Object.assign, ye = {};
function A(t, e, r) {
  this.props = t, this.context = e, this.refs = ye, this.updater = r || fe;
}
A.prototype.isReactComponent = {};
A.prototype.setState = function(t, e) {
  if (typeof t != "object" && typeof t != "function" && t != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, t, e, "setState");
};
A.prototype.forceUpdate = function(t) {
  this.updater.enqueueForceUpdate(this, t, "forceUpdate");
};
function pe() {
}
pe.prototype = A.prototype;
function W(t, e, r) {
  this.props = t, this.context = e, this.refs = ye, this.updater = r || fe;
}
var J = W.prototype = new pe();
J.constructor = W;
de(J, A.prototype);
J.isPureReactComponent = !0;
var se = Array.isArray, ve = Object.prototype.hasOwnProperty, X = { current: null }, me = { key: !0, ref: !0, __self: !0, __source: !0 };
function be(t, e, r) {
  var n, s = {}, i = null, u = null;
  if (e != null)
    for (n in e.ref !== void 0 && (u = e.ref), e.key !== void 0 && (i = "" + e.key), e)
      ve.call(e, n) && !me.hasOwnProperty(n) && (s[n] = e[n]);
  var o = arguments.length - 2;
  if (o === 1)
    s.children = r;
  else if (1 < o) {
    for (var a = Array(o), c = 0; c < o; c++)
      a[c] = arguments[c + 2];
    s.children = a;
  }
  if (t && t.defaultProps)
    for (n in o = t.defaultProps, o)
      s[n] === void 0 && (s[n] = o[n]);
  return { $$typeof: x, type: t, key: i, ref: u, props: s, _owner: X.current };
}
function Ne(t, e) {
  return { $$typeof: x, type: t.type, key: e, ref: t.ref, props: t.props, _owner: t._owner };
}
function Y(t) {
  return typeof t == "object" && t !== null && t.$$typeof === x;
}
function $e(t) {
  var e = { "=": "=0", ":": "=2" };
  return "$" + t.replace(/[=:]/g, function(r) {
    return e[r];
  });
}
var ie = /\/+/g;
function H(t, e) {
  return typeof t == "object" && t !== null && t.key != null ? $e("" + t.key) : e.toString(36);
}
function T(t, e, r, n, s) {
  var i = typeof t;
  (i === "undefined" || i === "boolean") && (t = null);
  var u = !1;
  if (t === null)
    u = !0;
  else
    switch (i) {
      case "string":
      case "number":
        u = !0;
        break;
      case "object":
        switch (t.$$typeof) {
          case x:
          case Re:
            u = !0;
        }
    }
  if (u)
    return u = t, s = s(u), t = n === "" ? "." + H(u, 0) : n, se(s) ? (r = "", t != null && (r = t.replace(ie, "$&/") + "/"), T(s, e, r, "", function(c) {
      return c;
    })) : s != null && (Y(s) && (s = Ne(s, r + (!s.key || u && u.key === s.key ? "" : ("" + s.key).replace(ie, "$&/") + "/") + t)), e.push(s)), 1;
  if (u = 0, n = n === "" ? "." : n + ":", se(t))
    for (var o = 0; o < t.length; o++) {
      i = t[o];
      var a = n + H(i, o);
      u += T(i, e, r, a, s);
    }
  else if (a = Le(t), typeof a == "function")
    for (t = a.call(t), o = 0; !(i = t.next()).done; )
      i = i.value, a = n + H(i, o++), u += T(i, e, r, a, s);
  else if (i === "object")
    throw e = String(t), Error("Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead.");
  return u;
}
function Q(t, e, r) {
  if (t == null)
    return t;
  var n = [], s = 0;
  return T(t, n, "", "", function(i) {
    return e.call(r, i, s++);
  }), n;
}
function He(t) {
  if (t._status === -1) {
    var e = t._result;
    e = e(), e.then(function(r) {
      (t._status === 0 || t._status === -1) && (t._status = 1, t._result = r);
    }, function(r) {
      (t._status === 0 || t._status === -1) && (t._status = 2, t._result = r);
    }), t._status === -1 && (t._status = 0, t._result = e);
  }
  if (t._status === 1)
    return t._result.default;
  throw t._result;
}
var S = { current: null }, U = { transition: null }, Ge = { ReactCurrentDispatcher: S, ReactCurrentBatchConfig: U, ReactCurrentOwner: X };
function ge() {
  throw Error("act(...) is not supported in production builds of React.");
}
l.Children = { map: Q, forEach: function(t, e, r) {
  Q(t, function() {
    e.apply(this, arguments);
  }, r);
}, count: function(t) {
  var e = 0;
  return Q(t, function() {
    e++;
  }), e;
}, toArray: function(t) {
  return Q(t, function(e) {
    return e;
  }) || [];
}, only: function(t) {
  if (!Y(t))
    throw Error("React.Children.only expected to receive a single React element child.");
  return t;
} };
l.Component = A;
l.Fragment = Ae;
l.Profiler = je;
l.PureComponent = W;
l.StrictMode = xe;
l.Suspense = Ue;
l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ge;
l.act = ge;
l.cloneElement = function(t, e, r) {
  if (t == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + t + ".");
  var n = de({}, t.props), s = t.key, i = t.ref, u = t._owner;
  if (e != null) {
    if (e.ref !== void 0 && (i = e.ref, u = X.current), e.key !== void 0 && (s = "" + e.key), t.type && t.type.defaultProps)
      var o = t.type.defaultProps;
    for (a in e)
      ve.call(e, a) && !me.hasOwnProperty(a) && (n[a] = e[a] === void 0 && o !== void 0 ? o[a] : e[a]);
  }
  var a = arguments.length - 2;
  if (a === 1)
    n.children = r;
  else if (1 < a) {
    o = Array(a);
    for (var c = 0; c < a; c++)
      o[c] = arguments[c + 2];
    n.children = o;
  }
  return { $$typeof: x, type: t.type, key: s, ref: i, props: n, _owner: u };
};
l.createContext = function(t) {
  return t = { $$typeof: ke, _currentValue: t, _currentValue2: t, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, t.Provider = { $$typeof: Qe, _context: t }, t.Consumer = t;
};
l.createElement = be;
l.createFactory = function(t) {
  var e = be.bind(null, t);
  return e.type = t, e;
};
l.createRef = function() {
  return { current: null };
};
l.forwardRef = function(t) {
  return { $$typeof: Te, render: t };
};
l.isValidElement = Y;
l.lazy = function(t) {
  return { $$typeof: Ie, _payload: { _status: -1, _result: t }, _init: He };
};
l.memo = function(t, e) {
  return { $$typeof: Ke, type: t, compare: e === void 0 ? null : e };
};
l.startTransition = function(t) {
  var e = U.transition;
  U.transition = {};
  try {
    t();
  } finally {
    U.transition = e;
  }
};
l.unstable_act = ge;
l.useCallback = function(t, e) {
  return S.current.useCallback(t, e);
};
l.useContext = function(t) {
  return S.current.useContext(t);
};
l.useDebugValue = function() {
};
l.useDeferredValue = function(t) {
  return S.current.useDeferredValue(t);
};
l.useEffect = function(t, e) {
  return S.current.useEffect(t, e);
};
l.useId = function() {
  return S.current.useId();
};
l.useImperativeHandle = function(t, e, r) {
  return S.current.useImperativeHandle(t, e, r);
};
l.useInsertionEffect = function(t, e) {
  return S.current.useInsertionEffect(t, e);
};
l.useLayoutEffect = function(t, e) {
  return S.current.useLayoutEffect(t, e);
};
l.useMemo = function(t, e) {
  return S.current.useMemo(t, e);
};
l.useReducer = function(t, e, r) {
  return S.current.useReducer(t, e, r);
};
l.useRef = function(t) {
  return S.current.useRef(t);
};
l.useState = function(t) {
  return S.current.useState(t);
};
l.useSyncExternalStore = function(t, e, r) {
  return S.current.useSyncExternalStore(t, e, r);
};
l.useTransition = function() {
  return S.current.useTransition();
};
l.version = "18.3.1";
he.exports = l;
var Oe = he.exports;
const Be = /* @__PURE__ */ Me(Oe), ft = /* @__PURE__ */ De({
  __proto__: null,
  default: Be
}, [Oe]);
class L {
  constructor() {
    this.listeners = [], this.subscribe = this.subscribe.bind(this);
  }
  subscribe(e) {
    return this.listeners.push(e), this.onSubscribe(), () => {
      this.listeners = this.listeners.filter((r) => r !== e), this.onUnsubscribe();
    };
  }
  hasListeners() {
    return this.listeners.length > 0;
  }
  onSubscribe() {
  }
  onUnsubscribe() {
  }
}
const Z = typeof window > "u" || "Deno" in window;
function E() {
}
function Ve(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function ze(t) {
  return typeof t == "number" && t >= 0 && t !== 1 / 0;
}
function We(t, e) {
  return Math.max(t + (e || 0) - Date.now(), 0);
}
function k(t, e, r) {
  return j(t) ? typeof e == "function" ? {
    ...r,
    queryKey: t,
    queryFn: e
  } : {
    ...e,
    queryKey: t
  } : t;
}
function dt(t, e, r) {
  return j(t) ? {
    ...e,
    mutationKey: t
  } : typeof t == "function" ? {
    ...e,
    mutationFn: t
  } : {
    ...t
  };
}
function D(t, e, r) {
  return j(t) ? [{
    ...e,
    queryKey: t
  }, r] : [t || {}, e];
}
function ue(t, e) {
  const {
    type: r = "all",
    exact: n,
    fetchStatus: s,
    predicate: i,
    queryKey: u,
    stale: o
  } = t;
  if (j(u)) {
    if (n) {
      if (e.queryHash !== ee(u, e.options))
        return !1;
    } else if (!K(e.queryKey, u))
      return !1;
  }
  if (r !== "all") {
    const a = e.isActive();
    if (r === "active" && !a || r === "inactive" && a)
      return !1;
  }
  return !(typeof o == "boolean" && e.isStale() !== o || typeof s < "u" && s !== e.state.fetchStatus || i && !i(e));
}
function oe(t, e) {
  const {
    exact: r,
    fetching: n,
    predicate: s,
    mutationKey: i
  } = t;
  if (j(i)) {
    if (!e.options.mutationKey)
      return !1;
    if (r) {
      if (R(e.options.mutationKey) !== R(i))
        return !1;
    } else if (!K(e.options.mutationKey, i))
      return !1;
  }
  return !(typeof n == "boolean" && e.state.status === "loading" !== n || s && !s(e));
}
function ee(t, e) {
  return ((e == null ? void 0 : e.queryKeyHashFn) || R)(t);
}
function R(t) {
  return JSON.stringify(t, (e, r) => B(r) ? Object.keys(r).sort().reduce((n, s) => (n[s] = r[s], n), {}) : r);
}
function K(t, e) {
  return Pe(t, e);
}
function Pe(t, e) {
  return t === e ? !0 : typeof t != typeof e ? !1 : t && e && typeof t == "object" && typeof e == "object" ? !Object.keys(e).some((r) => !Pe(t[r], e[r])) : !1;
}
function Ce(t, e) {
  if (t === e)
    return t;
  const r = ae(t) && ae(e);
  if (r || B(t) && B(e)) {
    const n = r ? t.length : Object.keys(t).length, s = r ? e : Object.keys(e), i = s.length, u = r ? [] : {};
    let o = 0;
    for (let a = 0; a < i; a++) {
      const c = r ? a : s[a];
      u[c] = Ce(t[c], e[c]), u[c] === t[c] && o++;
    }
    return n === i && o === n ? t : u;
  }
  return e;
}
function yt(t, e) {
  if (t && !e || e && !t)
    return !1;
  for (const r in t)
    if (t[r] !== e[r])
      return !1;
  return !0;
}
function ae(t) {
  return Array.isArray(t) && t.length === Object.keys(t).length;
}
function B(t) {
  if (!le(t))
    return !1;
  const e = t.constructor;
  if (typeof e > "u")
    return !0;
  const r = e.prototype;
  return !(!le(r) || !r.hasOwnProperty("isPrototypeOf"));
}
function le(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
function j(t) {
  return Array.isArray(t);
}
function we(t) {
  return new Promise((e) => {
    setTimeout(e, t);
  });
}
function ce(t) {
  we(0).then(t);
}
function Je() {
  if (typeof AbortController == "function")
    return new AbortController();
}
function Xe(t, e, r) {
  return r.isDataEqual != null && r.isDataEqual(t, e) ? t : typeof r.structuralSharing == "function" ? r.structuralSharing(t, e) : r.structuralSharing !== !1 ? Ce(t, e) : e;
}
class Ye extends L {
  constructor() {
    super(), this.setup = (e) => {
      if (!Z && window.addEventListener) {
        const r = () => e();
        return window.addEventListener("visibilitychange", r, !1), window.addEventListener("focus", r, !1), () => {
          window.removeEventListener("visibilitychange", r), window.removeEventListener("focus", r);
        };
      }
    };
  }
  onSubscribe() {
    this.cleanup || this.setEventListener(this.setup);
  }
  onUnsubscribe() {
    if (!this.hasListeners()) {
      var e;
      (e = this.cleanup) == null || e.call(this), this.cleanup = void 0;
    }
  }
  setEventListener(e) {
    var r;
    this.setup = e, (r = this.cleanup) == null || r.call(this), this.cleanup = e((n) => {
      typeof n == "boolean" ? this.setFocused(n) : this.onFocus();
    });
  }
  setFocused(e) {
    this.focused = e, e && this.onFocus();
  }
  onFocus() {
    this.listeners.forEach((e) => {
      e();
    });
  }
  isFocused() {
    return typeof this.focused == "boolean" ? this.focused : typeof document > "u" ? !0 : [void 0, "visible", "prerender"].includes(document.visibilityState);
  }
}
const V = new Ye();
class Ze extends L {
  constructor() {
    super(), this.setup = (e) => {
      if (!Z && window.addEventListener) {
        const r = () => e();
        return window.addEventListener("online", r, !1), window.addEventListener("offline", r, !1), () => {
          window.removeEventListener("online", r), window.removeEventListener("offline", r);
        };
      }
    };
  }
  onSubscribe() {
    this.cleanup || this.setEventListener(this.setup);
  }
  onUnsubscribe() {
    if (!this.hasListeners()) {
      var e;
      (e = this.cleanup) == null || e.call(this), this.cleanup = void 0;
    }
  }
  setEventListener(e) {
    var r;
    this.setup = e, (r = this.cleanup) == null || r.call(this), this.cleanup = e((n) => {
      typeof n == "boolean" ? this.setOnline(n) : this.onOnline();
    });
  }
  setOnline(e) {
    this.online = e, e && this.onOnline();
  }
  onOnline() {
    this.listeners.forEach((e) => {
      e();
    });
  }
  isOnline() {
    return typeof this.online == "boolean" ? this.online : typeof navigator > "u" || typeof navigator.onLine > "u" ? !0 : navigator.onLine;
  }
}
const I = new Ze();
function et(t) {
  return Math.min(1e3 * 2 ** t, 3e4);
}
function te(t) {
  return (t ?? "online") === "online" ? I.isOnline() : !0;
}
class Se {
  constructor(e) {
    this.revert = e == null ? void 0 : e.revert, this.silent = e == null ? void 0 : e.silent;
  }
}
function G(t) {
  return t instanceof Se;
}
function qe(t) {
  let e = !1, r = 0, n = !1, s, i, u;
  const o = new Promise((y, b) => {
    i = y, u = b;
  }), a = (y) => {
    n || (f(new Se(y)), t.abort == null || t.abort());
  }, c = () => {
    e = !0;
  }, h = () => {
    e = !1;
  }, O = () => !V.isFocused() || t.networkMode !== "always" && !I.isOnline(), m = (y) => {
    n || (n = !0, t.onSuccess == null || t.onSuccess(y), s == null || s(), i(y));
  }, f = (y) => {
    n || (n = !0, t.onError == null || t.onError(y), s == null || s(), u(y));
  }, g = () => new Promise((y) => {
    s = (b) => {
      const q = n || !O();
      return q && y(b), q;
    }, t.onPause == null || t.onPause();
  }).then(() => {
    s = void 0, n || t.onContinue == null || t.onContinue();
  }), P = () => {
    if (n)
      return;
    let y;
    try {
      y = t.fn();
    } catch (b) {
      y = Promise.reject(b);
    }
    Promise.resolve(y).then(m).catch((b) => {
      var q, F;
      if (n)
        return;
      const C = (q = t.retry) != null ? q : 3, M = (F = t.retryDelay) != null ? F : et, p = typeof M == "function" ? M(r, b) : M, d = C === !0 || typeof C == "number" && r < C || typeof C == "function" && C(r, b);
      if (e || !d) {
        f(b);
        return;
      }
      r++, t.onFail == null || t.onFail(r, b), we(p).then(() => {
        if (O())
          return g();
      }).then(() => {
        e ? f(b) : P();
      });
    });
  };
  return te(t.networkMode) ? P() : g().then(P), {
    promise: o,
    cancel: a,
    continue: () => (s == null ? void 0 : s()) ? o : Promise.resolve(),
    cancelRetry: c,
    continueRetry: h
  };
}
const re = console;
function tt() {
  let t = [], e = 0, r = (h) => {
    h();
  }, n = (h) => {
    h();
  };
  const s = (h) => {
    let O;
    e++;
    try {
      O = h();
    } finally {
      e--, e || o();
    }
    return O;
  }, i = (h) => {
    e ? t.push(h) : ce(() => {
      r(h);
    });
  }, u = (h) => (...O) => {
    i(() => {
      h(...O);
    });
  }, o = () => {
    const h = t;
    t = [], h.length && ce(() => {
      n(() => {
        h.forEach((O) => {
          r(O);
        });
      });
    });
  };
  return {
    batch: s,
    batchCalls: u,
    schedule: i,
    setNotifyFunction: (h) => {
      r = h;
    },
    setBatchNotifyFunction: (h) => {
      n = h;
    }
  };
}
const w = tt();
class Fe {
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout(), ze(this.cacheTime) && (this.gcTimeout = setTimeout(() => {
      this.optionalRemove();
    }, this.cacheTime));
  }
  updateCacheTime(e) {
    this.cacheTime = Math.max(this.cacheTime || 0, e ?? (Z ? 1 / 0 : 5 * 60 * 1e3));
  }
  clearGcTimeout() {
    this.gcTimeout && (clearTimeout(this.gcTimeout), this.gcTimeout = void 0);
  }
}
class rt extends Fe {
  constructor(e) {
    super(), this.abortSignalConsumed = !1, this.defaultOptions = e.defaultOptions, this.setOptions(e.options), this.observers = [], this.cache = e.cache, this.logger = e.logger || re, this.queryKey = e.queryKey, this.queryHash = e.queryHash, this.initialState = e.state || nt(this.options), this.state = this.initialState, this.scheduleGc();
  }
  get meta() {
    return this.options.meta;
  }
  setOptions(e) {
    this.options = {
      ...this.defaultOptions,
      ...e
    }, this.updateCacheTime(this.options.cacheTime);
  }
  optionalRemove() {
    !this.observers.length && this.state.fetchStatus === "idle" && this.cache.remove(this);
  }
  setData(e, r) {
    const n = Xe(this.state.data, e, this.options);
    return this.dispatch({
      data: n,
      type: "success",
      dataUpdatedAt: r == null ? void 0 : r.updatedAt,
      manual: r == null ? void 0 : r.manual
    }), n;
  }
  setState(e, r) {
    this.dispatch({
      type: "setState",
      state: e,
      setStateOptions: r
    });
  }
  cancel(e) {
    var r;
    const n = this.promise;
    return (r = this.retryer) == null || r.cancel(e), n ? n.then(E).catch(E) : Promise.resolve();
  }
  destroy() {
    super.destroy(), this.cancel({
      silent: !0
    });
  }
  reset() {
    this.destroy(), this.setState(this.initialState);
  }
  isActive() {
    return this.observers.some((e) => e.options.enabled !== !1);
  }
  isDisabled() {
    return this.getObserversCount() > 0 && !this.isActive();
  }
  isStale() {
    return this.state.isInvalidated || !this.state.dataUpdatedAt || this.observers.some((e) => e.getCurrentResult().isStale);
  }
  isStaleByTime(e = 0) {
    return this.state.isInvalidated || !this.state.dataUpdatedAt || !We(this.state.dataUpdatedAt, e);
  }
  onFocus() {
    var e;
    const r = this.observers.find((n) => n.shouldFetchOnWindowFocus());
    r && r.refetch({
      cancelRefetch: !1
    }), (e = this.retryer) == null || e.continue();
  }
  onOnline() {
    var e;
    const r = this.observers.find((n) => n.shouldFetchOnReconnect());
    r && r.refetch({
      cancelRefetch: !1
    }), (e = this.retryer) == null || e.continue();
  }
  addObserver(e) {
    this.observers.indexOf(e) === -1 && (this.observers.push(e), this.clearGcTimeout(), this.cache.notify({
      type: "observerAdded",
      query: this,
      observer: e
    }));
  }
  removeObserver(e) {
    this.observers.indexOf(e) !== -1 && (this.observers = this.observers.filter((r) => r !== e), this.observers.length || (this.retryer && (this.abortSignalConsumed ? this.retryer.cancel({
      revert: !0
    }) : this.retryer.cancelRetry()), this.scheduleGc()), this.cache.notify({
      type: "observerRemoved",
      query: this,
      observer: e
    }));
  }
  getObserversCount() {
    return this.observers.length;
  }
  invalidate() {
    this.state.isInvalidated || this.dispatch({
      type: "invalidate"
    });
  }
  fetch(e, r) {
    var n, s;
    if (this.state.fetchStatus !== "idle") {
      if (this.state.dataUpdatedAt && r != null && r.cancelRefetch)
        this.cancel({
          silent: !0
        });
      else if (this.promise) {
        var i;
        return (i = this.retryer) == null || i.continueRetry(), this.promise;
      }
    }
    if (e && this.setOptions(e), !this.options.queryFn) {
      const f = this.observers.find((g) => g.options.queryFn);
      f && this.setOptions(f.options);
    }
    Array.isArray(this.options.queryKey);
    const u = Je(), o = {
      queryKey: this.queryKey,
      pageParam: void 0,
      meta: this.meta
    }, a = (f) => {
      Object.defineProperty(f, "signal", {
        enumerable: !0,
        get: () => {
          if (u)
            return this.abortSignalConsumed = !0, u.signal;
        }
      });
    };
    a(o);
    const c = () => this.options.queryFn ? (this.abortSignalConsumed = !1, this.options.queryFn(o)) : Promise.reject("Missing queryFn"), h = {
      fetchOptions: r,
      options: this.options,
      queryKey: this.queryKey,
      state: this.state,
      fetchFn: c
    };
    if (a(h), (n = this.options.behavior) == null || n.onFetch(h), this.revertState = this.state, this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((s = h.fetchOptions) == null ? void 0 : s.meta)) {
      var O;
      this.dispatch({
        type: "fetch",
        meta: (O = h.fetchOptions) == null ? void 0 : O.meta
      });
    }
    const m = (f) => {
      if (G(f) && f.silent || this.dispatch({
        type: "error",
        error: f
      }), !G(f)) {
        var g, P, y, b;
        (g = (P = this.cache.config).onError) == null || g.call(P, f, this), (y = (b = this.cache.config).onSettled) == null || y.call(b, this.state.data, f, this);
      }
      this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1;
    };
    return this.retryer = qe({
      fn: h.fetchFn,
      abort: u == null ? void 0 : u.abort.bind(u),
      onSuccess: (f) => {
        var g, P, y, b;
        if (typeof f > "u") {
          m(new Error(this.queryHash + " data is undefined"));
          return;
        }
        this.setData(f), (g = (P = this.cache.config).onSuccess) == null || g.call(P, f, this), (y = (b = this.cache.config).onSettled) == null || y.call(b, f, this.state.error, this), this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1;
      },
      onError: m,
      onFail: (f, g) => {
        this.dispatch({
          type: "failed",
          failureCount: f,
          error: g
        });
      },
      onPause: () => {
        this.dispatch({
          type: "pause"
        });
      },
      onContinue: () => {
        this.dispatch({
          type: "continue"
        });
      },
      retry: h.options.retry,
      retryDelay: h.options.retryDelay,
      networkMode: h.options.networkMode
    }), this.promise = this.retryer.promise, this.promise;
  }
  dispatch(e) {
    const r = (n) => {
      var s, i;
      switch (e.type) {
        case "failed":
          return {
            ...n,
            fetchFailureCount: e.failureCount,
            fetchFailureReason: e.error
          };
        case "pause":
          return {
            ...n,
            fetchStatus: "paused"
          };
        case "continue":
          return {
            ...n,
            fetchStatus: "fetching"
          };
        case "fetch":
          return {
            ...n,
            fetchFailureCount: 0,
            fetchFailureReason: null,
            fetchMeta: (s = e.meta) != null ? s : null,
            fetchStatus: te(this.options.networkMode) ? "fetching" : "paused",
            ...!n.dataUpdatedAt && {
              error: null,
              status: "loading"
            }
          };
        case "success":
          return {
            ...n,
            data: e.data,
            dataUpdateCount: n.dataUpdateCount + 1,
            dataUpdatedAt: (i = e.dataUpdatedAt) != null ? i : Date.now(),
            error: null,
            isInvalidated: !1,
            status: "success",
            ...!e.manual && {
              fetchStatus: "idle",
              fetchFailureCount: 0,
              fetchFailureReason: null
            }
          };
        case "error":
          const u = e.error;
          return G(u) && u.revert && this.revertState ? {
            ...this.revertState
          } : {
            ...n,
            error: u,
            errorUpdateCount: n.errorUpdateCount + 1,
            errorUpdatedAt: Date.now(),
            fetchFailureCount: n.fetchFailureCount + 1,
            fetchFailureReason: u,
            fetchStatus: "idle",
            status: "error"
          };
        case "invalidate":
          return {
            ...n,
            isInvalidated: !0
          };
        case "setState":
          return {
            ...n,
            ...e.state
          };
      }
    };
    this.state = r(this.state), w.batch(() => {
      this.observers.forEach((n) => {
        n.onQueryUpdate(e);
      }), this.cache.notify({
        query: this,
        type: "updated",
        action: e
      });
    });
  }
}
function nt(t) {
  const e = typeof t.initialData == "function" ? t.initialData() : t.initialData, r = typeof e < "u", n = r ? typeof t.initialDataUpdatedAt == "function" ? t.initialDataUpdatedAt() : t.initialDataUpdatedAt : 0;
  return {
    data: e,
    dataUpdateCount: 0,
    dataUpdatedAt: r ? n ?? Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: r ? "success" : "loading",
    fetchStatus: "idle"
  };
}
class st extends L {
  constructor(e) {
    super(), this.config = e || {}, this.queries = [], this.queriesMap = {};
  }
  build(e, r, n) {
    var s;
    const i = r.queryKey, u = (s = r.queryHash) != null ? s : ee(i, r);
    let o = this.get(u);
    return o || (o = new rt({
      cache: this,
      logger: e.getLogger(),
      queryKey: i,
      queryHash: u,
      options: e.defaultQueryOptions(r),
      state: n,
      defaultOptions: e.getQueryDefaults(i)
    }), this.add(o)), o;
  }
  add(e) {
    this.queriesMap[e.queryHash] || (this.queriesMap[e.queryHash] = e, this.queries.push(e), this.notify({
      type: "added",
      query: e
    }));
  }
  remove(e) {
    const r = this.queriesMap[e.queryHash];
    r && (e.destroy(), this.queries = this.queries.filter((n) => n !== e), r === e && delete this.queriesMap[e.queryHash], this.notify({
      type: "removed",
      query: e
    }));
  }
  clear() {
    w.batch(() => {
      this.queries.forEach((e) => {
        this.remove(e);
      });
    });
  }
  get(e) {
    return this.queriesMap[e];
  }
  getAll() {
    return this.queries;
  }
  find(e, r) {
    const [n] = D(e, r);
    return typeof n.exact > "u" && (n.exact = !0), this.queries.find((s) => ue(n, s));
  }
  findAll(e, r) {
    const [n] = D(e, r);
    return Object.keys(n).length > 0 ? this.queries.filter((s) => ue(n, s)) : this.queries;
  }
  notify(e) {
    w.batch(() => {
      this.listeners.forEach((r) => {
        r(e);
      });
    });
  }
  onFocus() {
    w.batch(() => {
      this.queries.forEach((e) => {
        e.onFocus();
      });
    });
  }
  onOnline() {
    w.batch(() => {
      this.queries.forEach((e) => {
        e.onOnline();
      });
    });
  }
}
class it extends Fe {
  constructor(e) {
    super(), this.defaultOptions = e.defaultOptions, this.mutationId = e.mutationId, this.mutationCache = e.mutationCache, this.logger = e.logger || re, this.observers = [], this.state = e.state || ut(), this.setOptions(e.options), this.scheduleGc();
  }
  setOptions(e) {
    this.options = {
      ...this.defaultOptions,
      ...e
    }, this.updateCacheTime(this.options.cacheTime);
  }
  get meta() {
    return this.options.meta;
  }
  setState(e) {
    this.dispatch({
      type: "setState",
      state: e
    });
  }
  addObserver(e) {
    this.observers.indexOf(e) === -1 && (this.observers.push(e), this.clearGcTimeout(), this.mutationCache.notify({
      type: "observerAdded",
      mutation: this,
      observer: e
    }));
  }
  removeObserver(e) {
    this.observers = this.observers.filter((r) => r !== e), this.scheduleGc(), this.mutationCache.notify({
      type: "observerRemoved",
      mutation: this,
      observer: e
    });
  }
  optionalRemove() {
    this.observers.length || (this.state.status === "loading" ? this.scheduleGc() : this.mutationCache.remove(this));
  }
  continue() {
    var e, r;
    return (e = (r = this.retryer) == null ? void 0 : r.continue()) != null ? e : this.execute();
  }
  async execute() {
    const e = () => {
      var d;
      return this.retryer = qe({
        fn: () => this.options.mutationFn ? this.options.mutationFn(this.state.variables) : Promise.reject("No mutationFn found"),
        onFail: (v, _) => {
          this.dispatch({
            type: "failed",
            failureCount: v,
            error: _
          });
        },
        onPause: () => {
          this.dispatch({
            type: "pause"
          });
        },
        onContinue: () => {
          this.dispatch({
            type: "continue"
          });
        },
        retry: (d = this.options.retry) != null ? d : 0,
        retryDelay: this.options.retryDelay,
        networkMode: this.options.networkMode
      }), this.retryer.promise;
    }, r = this.state.status === "loading";
    try {
      var n, s, i, u, o, a, c, h;
      if (!r) {
        var O, m, f, g;
        this.dispatch({
          type: "loading",
          variables: this.options.variables
        }), await ((O = (m = this.mutationCache.config).onMutate) == null ? void 0 : O.call(m, this.state.variables, this));
        const v = await ((f = (g = this.options).onMutate) == null ? void 0 : f.call(g, this.state.variables));
        v !== this.state.context && this.dispatch({
          type: "loading",
          context: v,
          variables: this.state.variables
        });
      }
      const d = await e();
      return await ((n = (s = this.mutationCache.config).onSuccess) == null ? void 0 : n.call(s, d, this.state.variables, this.state.context, this)), await ((i = (u = this.options).onSuccess) == null ? void 0 : i.call(u, d, this.state.variables, this.state.context)), await ((o = (a = this.mutationCache.config).onSettled) == null ? void 0 : o.call(a, d, null, this.state.variables, this.state.context, this)), await ((c = (h = this.options).onSettled) == null ? void 0 : c.call(h, d, null, this.state.variables, this.state.context)), this.dispatch({
        type: "success",
        data: d
      }), d;
    } catch (d) {
      try {
        var P, y, b, q, F, C, M, p;
        throw await ((P = (y = this.mutationCache.config).onError) == null ? void 0 : P.call(y, d, this.state.variables, this.state.context, this)), await ((b = (q = this.options).onError) == null ? void 0 : b.call(q, d, this.state.variables, this.state.context)), await ((F = (C = this.mutationCache.config).onSettled) == null ? void 0 : F.call(C, void 0, d, this.state.variables, this.state.context, this)), await ((M = (p = this.options).onSettled) == null ? void 0 : M.call(p, void 0, d, this.state.variables, this.state.context)), d;
      } finally {
        this.dispatch({
          type: "error",
          error: d
        });
      }
    }
  }
  dispatch(e) {
    const r = (n) => {
      switch (e.type) {
        case "failed":
          return {
            ...n,
            failureCount: e.failureCount,
            failureReason: e.error
          };
        case "pause":
          return {
            ...n,
            isPaused: !0
          };
        case "continue":
          return {
            ...n,
            isPaused: !1
          };
        case "loading":
          return {
            ...n,
            context: e.context,
            data: void 0,
            failureCount: 0,
            failureReason: null,
            error: null,
            isPaused: !te(this.options.networkMode),
            status: "loading",
            variables: e.variables
          };
        case "success":
          return {
            ...n,
            data: e.data,
            failureCount: 0,
            failureReason: null,
            error: null,
            status: "success",
            isPaused: !1
          };
        case "error":
          return {
            ...n,
            data: void 0,
            error: e.error,
            failureCount: n.failureCount + 1,
            failureReason: e.error,
            isPaused: !1,
            status: "error"
          };
        case "setState":
          return {
            ...n,
            ...e.state
          };
      }
    };
    this.state = r(this.state), w.batch(() => {
      this.observers.forEach((n) => {
        n.onMutationUpdate(e);
      }), this.mutationCache.notify({
        mutation: this,
        type: "updated",
        action: e
      });
    });
  }
}
function ut() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0
  };
}
class ot extends L {
  constructor(e) {
    super(), this.config = e || {}, this.mutations = [], this.mutationId = 0;
  }
  build(e, r, n) {
    const s = new it({
      mutationCache: this,
      logger: e.getLogger(),
      mutationId: ++this.mutationId,
      options: e.defaultMutationOptions(r),
      state: n,
      defaultOptions: r.mutationKey ? e.getMutationDefaults(r.mutationKey) : void 0
    });
    return this.add(s), s;
  }
  add(e) {
    this.mutations.push(e), this.notify({
      type: "added",
      mutation: e
    });
  }
  remove(e) {
    this.mutations = this.mutations.filter((r) => r !== e), this.notify({
      type: "removed",
      mutation: e
    });
  }
  clear() {
    w.batch(() => {
      this.mutations.forEach((e) => {
        this.remove(e);
      });
    });
  }
  getAll() {
    return this.mutations;
  }
  find(e) {
    return typeof e.exact > "u" && (e.exact = !0), this.mutations.find((r) => oe(e, r));
  }
  findAll(e) {
    return this.mutations.filter((r) => oe(e, r));
  }
  notify(e) {
    w.batch(() => {
      this.listeners.forEach((r) => {
        r(e);
      });
    });
  }
  resumePausedMutations() {
    var e;
    return this.resuming = ((e = this.resuming) != null ? e : Promise.resolve()).then(() => {
      const r = this.mutations.filter((n) => n.state.isPaused);
      return w.batch(() => r.reduce((n, s) => n.then(() => s.continue().catch(E)), Promise.resolve()));
    }).then(() => {
      this.resuming = void 0;
    }), this.resuming;
  }
}
function at() {
  return {
    onFetch: (t) => {
      t.fetchFn = () => {
        var e, r, n, s, i, u;
        const o = (e = t.fetchOptions) == null || (r = e.meta) == null ? void 0 : r.refetchPage, a = (n = t.fetchOptions) == null || (s = n.meta) == null ? void 0 : s.fetchMore, c = a == null ? void 0 : a.pageParam, h = (a == null ? void 0 : a.direction) === "forward", O = (a == null ? void 0 : a.direction) === "backward", m = ((i = t.state.data) == null ? void 0 : i.pages) || [], f = ((u = t.state.data) == null ? void 0 : u.pageParams) || [];
        let g = f, P = !1;
        const y = (p) => {
          Object.defineProperty(p, "signal", {
            enumerable: !0,
            get: () => {
              var d;
              if ((d = t.signal) != null && d.aborted)
                P = !0;
              else {
                var v;
                (v = t.signal) == null || v.addEventListener("abort", () => {
                  P = !0;
                });
              }
              return t.signal;
            }
          });
        }, b = t.options.queryFn || (() => Promise.reject("Missing queryFn")), q = (p, d, v, _) => (g = _ ? [d, ...g] : [...g, d], _ ? [v, ...p] : [...p, v]), F = (p, d, v, _) => {
          if (P)
            return Promise.reject("Cancelled");
          if (typeof v > "u" && !d && p.length)
            return Promise.resolve(p);
          const N = {
            queryKey: t.queryKey,
            pageParam: v,
            meta: t.options.meta
          };
          y(N);
          const $ = b(N);
          return Promise.resolve($).then((_e) => q(p, v, _e, _));
        };
        let C;
        if (!m.length)
          C = F([]);
        else if (h) {
          const p = typeof c < "u", d = p ? c : z(t.options, m);
          C = F(m, p, d);
        } else if (O) {
          const p = typeof c < "u", d = p ? c : Ee(t.options, m);
          C = F(m, p, d, !0);
        } else {
          g = [];
          const p = typeof t.options.getNextPageParam > "u";
          C = (o && m[0] ? o(m[0], 0, m) : !0) ? F([], p, f[0]) : Promise.resolve(q([], f[0], m[0]));
          for (let v = 1; v < m.length; v++)
            C = C.then((_) => {
              if (o && m[v] ? o(m[v], v, m) : !0) {
                const $ = p ? f[v] : z(t.options, _);
                return F(_, p, $);
              }
              return Promise.resolve(q(_, f[v], m[v]));
            });
        }
        return C.then((p) => ({
          pages: p,
          pageParams: g
        }));
      };
    }
  };
}
function z(t, e) {
  return t.getNextPageParam == null ? void 0 : t.getNextPageParam(e[e.length - 1], e);
}
function Ee(t, e) {
  return t.getPreviousPageParam == null ? void 0 : t.getPreviousPageParam(e[0], e);
}
function pt(t, e) {
  if (t.getNextPageParam && Array.isArray(e)) {
    const r = z(t, e);
    return typeof r < "u" && r !== null && r !== !1;
  }
}
function vt(t, e) {
  if (t.getPreviousPageParam && Array.isArray(e)) {
    const r = Ee(t, e);
    return typeof r < "u" && r !== null && r !== !1;
  }
}
class mt {
  constructor(e = {}) {
    this.queryCache = e.queryCache || new st(), this.mutationCache = e.mutationCache || new ot(), this.logger = e.logger || re, this.defaultOptions = e.defaultOptions || {}, this.queryDefaults = [], this.mutationDefaults = [], this.mountCount = 0;
  }
  mount() {
    this.mountCount++, this.mountCount === 1 && (this.unsubscribeFocus = V.subscribe(() => {
      V.isFocused() && (this.resumePausedMutations(), this.queryCache.onFocus());
    }), this.unsubscribeOnline = I.subscribe(() => {
      I.isOnline() && (this.resumePausedMutations(), this.queryCache.onOnline());
    }));
  }
  unmount() {
    var e, r;
    this.mountCount--, this.mountCount === 0 && ((e = this.unsubscribeFocus) == null || e.call(this), this.unsubscribeFocus = void 0, (r = this.unsubscribeOnline) == null || r.call(this), this.unsubscribeOnline = void 0);
  }
  isFetching(e, r) {
    const [n] = D(e, r);
    return n.fetchStatus = "fetching", this.queryCache.findAll(n).length;
  }
  isMutating(e) {
    return this.mutationCache.findAll({
      ...e,
      fetching: !0
    }).length;
  }
  getQueryData(e, r) {
    var n;
    return (n = this.queryCache.find(e, r)) == null ? void 0 : n.state.data;
  }
  ensureQueryData(e, r, n) {
    const s = k(e, r, n), i = this.getQueryData(s.queryKey);
    return i ? Promise.resolve(i) : this.fetchQuery(s);
  }
  getQueriesData(e) {
    return this.getQueryCache().findAll(e).map(({
      queryKey: r,
      state: n
    }) => {
      const s = n.data;
      return [r, s];
    });
  }
  setQueryData(e, r, n) {
    const s = this.queryCache.find(e), i = s == null ? void 0 : s.state.data, u = Ve(r, i);
    if (typeof u > "u")
      return;
    const o = k(e), a = this.defaultQueryOptions(o);
    return this.queryCache.build(this, a).setData(u, {
      ...n,
      manual: !0
    });
  }
  setQueriesData(e, r, n) {
    return w.batch(() => this.getQueryCache().findAll(e).map(({
      queryKey: s
    }) => [s, this.setQueryData(s, r, n)]));
  }
  getQueryState(e, r) {
    var n;
    return (n = this.queryCache.find(e, r)) == null ? void 0 : n.state;
  }
  removeQueries(e, r) {
    const [n] = D(e, r), s = this.queryCache;
    w.batch(() => {
      s.findAll(n).forEach((i) => {
        s.remove(i);
      });
    });
  }
  resetQueries(e, r, n) {
    const [s, i] = D(e, r, n), u = this.queryCache, o = {
      type: "active",
      ...s
    };
    return w.batch(() => (u.findAll(s).forEach((a) => {
      a.reset();
    }), this.refetchQueries(o, i)));
  }
  cancelQueries(e, r, n) {
    const [s, i = {}] = D(e, r, n);
    typeof i.revert > "u" && (i.revert = !0);
    const u = w.batch(() => this.queryCache.findAll(s).map((o) => o.cancel(i)));
    return Promise.all(u).then(E).catch(E);
  }
  invalidateQueries(e, r, n) {
    const [s, i] = D(e, r, n);
    return w.batch(() => {
      var u, o;
      if (this.queryCache.findAll(s).forEach((c) => {
        c.invalidate();
      }), s.refetchType === "none")
        return Promise.resolve();
      const a = {
        ...s,
        type: (u = (o = s.refetchType) != null ? o : s.type) != null ? u : "active"
      };
      return this.refetchQueries(a, i);
    });
  }
  refetchQueries(e, r, n) {
    const [s, i] = D(e, r, n), u = w.batch(() => this.queryCache.findAll(s).filter((a) => !a.isDisabled()).map((a) => {
      var c;
      return a.fetch(void 0, {
        ...i,
        cancelRefetch: (c = i == null ? void 0 : i.cancelRefetch) != null ? c : !0,
        meta: {
          refetchPage: s.refetchPage
        }
      });
    }));
    let o = Promise.all(u).then(E);
    return i != null && i.throwOnError || (o = o.catch(E)), o;
  }
  fetchQuery(e, r, n) {
    const s = k(e, r, n), i = this.defaultQueryOptions(s);
    typeof i.retry > "u" && (i.retry = !1);
    const u = this.queryCache.build(this, i);
    return u.isStaleByTime(i.staleTime) ? u.fetch(i) : Promise.resolve(u.state.data);
  }
  prefetchQuery(e, r, n) {
    return this.fetchQuery(e, r, n).then(E).catch(E);
  }
  fetchInfiniteQuery(e, r, n) {
    const s = k(e, r, n);
    return s.behavior = at(), this.fetchQuery(s);
  }
  prefetchInfiniteQuery(e, r, n) {
    return this.fetchInfiniteQuery(e, r, n).then(E).catch(E);
  }
  resumePausedMutations() {
    return this.mutationCache.resumePausedMutations();
  }
  getQueryCache() {
    return this.queryCache;
  }
  getMutationCache() {
    return this.mutationCache;
  }
  getLogger() {
    return this.logger;
  }
  getDefaultOptions() {
    return this.defaultOptions;
  }
  setDefaultOptions(e) {
    this.defaultOptions = e;
  }
  setQueryDefaults(e, r) {
    const n = this.queryDefaults.find((s) => R(e) === R(s.queryKey));
    n ? n.defaultOptions = r : this.queryDefaults.push({
      queryKey: e,
      defaultOptions: r
    });
  }
  getQueryDefaults(e) {
    if (!e)
      return;
    const r = this.queryDefaults.find((n) => K(e, n.queryKey));
    return r == null ? void 0 : r.defaultOptions;
  }
  setMutationDefaults(e, r) {
    const n = this.mutationDefaults.find((s) => R(e) === R(s.mutationKey));
    n ? n.defaultOptions = r : this.mutationDefaults.push({
      mutationKey: e,
      defaultOptions: r
    });
  }
  getMutationDefaults(e) {
    if (!e)
      return;
    const r = this.mutationDefaults.find((n) => K(e, n.mutationKey));
    return r == null ? void 0 : r.defaultOptions;
  }
  defaultQueryOptions(e) {
    if (e != null && e._defaulted)
      return e;
    const r = {
      ...this.defaultOptions.queries,
      ...this.getQueryDefaults(e == null ? void 0 : e.queryKey),
      ...e,
      _defaulted: !0
    };
    return !r.queryHash && r.queryKey && (r.queryHash = ee(r.queryKey, r)), typeof r.refetchOnReconnect > "u" && (r.refetchOnReconnect = r.networkMode !== "always"), typeof r.useErrorBoundary > "u" && (r.useErrorBoundary = !!r.suspense), r;
  }
  defaultMutationOptions(e) {
    return e != null && e._defaulted ? e : {
      ...this.defaultOptions.mutations,
      ...this.getMutationDefaults(e == null ? void 0 : e.mutationKey),
      ...e,
      _defaulted: !0
    };
  }
  clear() {
    this.queryCache.clear(), this.mutationCache.clear();
  }
}
export {
  mt as Q,
  Be as R,
  L as S,
  pt as a,
  ht as b,
  ct as c,
  Z as d,
  ze as e,
  V as f,
  Me as g,
  vt as h,
  at as i,
  te as j,
  Xe as k,
  G as l,
  w as m,
  E as n,
  ft as o,
  k as p,
  ut as q,
  Oe as r,
  yt as s,
  We as t,
  dt as u
};
//# sourceMappingURL=queryClient-DpZpBkWP.js.map
