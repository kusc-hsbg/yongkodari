import { R as Z } from "./queryClient-DpZpBkWP.js";
import { R as Yo } from "./emotion-react.browser.esm-B9sQ19ZB.js";
var In = {};
function Xo(e) {
  const t = new Error(e);
  if (t.stack === void 0)
    try {
      throw t;
    } catch {
    }
  return t;
}
var Jo = Xo, M = Jo;
function Qo(e) {
  return !!e && typeof e.then == "function";
}
var K = Qo;
function er(e, t) {
  if (e != null)
    return e;
  throw M(t ?? "Got unexpected null or undefined");
}
var j = er;
function V(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
class ft {
  getValue() {
    throw M("BaseLoadable");
  }
  toPromise() {
    throw M("BaseLoadable");
  }
  valueMaybe() {
    throw M("BaseLoadable");
  }
  valueOrThrow() {
    throw M(`Loadable expected value, but in "${this.state}" state`);
  }
  promiseMaybe() {
    throw M("BaseLoadable");
  }
  promiseOrThrow() {
    throw M(`Loadable expected promise, but in "${this.state}" state`);
  }
  errorMaybe() {
    throw M("BaseLoadable");
  }
  errorOrThrow() {
    throw M(`Loadable expected error, but in "${this.state}" state`);
  }
  is(t) {
    return t.state === this.state && t.contents === this.contents;
  }
  map(t) {
    throw M("BaseLoadable");
  }
}
class tr extends ft {
  constructor(t) {
    super(), V(this, "state", "hasValue"), V(this, "contents", void 0), this.contents = t;
  }
  getValue() {
    return this.contents;
  }
  toPromise() {
    return Promise.resolve(this.contents);
  }
  valueMaybe() {
    return this.contents;
  }
  valueOrThrow() {
    return this.contents;
  }
  promiseMaybe() {
  }
  errorMaybe() {
  }
  map(t) {
    try {
      const n = t(this.contents);
      return K(n) ? Te(n) : xe(n) ? n : Ye(n);
    } catch (n) {
      return K(n) ? (
        // If we "suspended", then try again.
        // errors and subsequent retries will be handled in 'loading' case
        // $FlowFixMe[prop-missing]
        Te(n.next(() => this.map(t)))
      ) : ht(n);
    }
  }
}
class nr extends ft {
  constructor(t) {
    super(), V(this, "state", "hasError"), V(this, "contents", void 0), this.contents = t;
  }
  getValue() {
    throw this.contents;
  }
  toPromise() {
    return Promise.reject(this.contents);
  }
  valueMaybe() {
  }
  promiseMaybe() {
  }
  errorMaybe() {
    return this.contents;
  }
  errorOrThrow() {
    return this.contents;
  }
  map(t) {
    return this;
  }
}
class Un extends ft {
  constructor(t) {
    super(), V(this, "state", "loading"), V(this, "contents", void 0), this.contents = t;
  }
  getValue() {
    throw this.contents;
  }
  toPromise() {
    return this.contents;
  }
  valueMaybe() {
  }
  promiseMaybe() {
    return this.contents;
  }
  promiseOrThrow() {
    return this.contents;
  }
  errorMaybe() {
  }
  map(t) {
    return Te(this.contents.then((n) => {
      const o = t(n);
      if (xe(o)) {
        const r = o;
        switch (r.state) {
          case "hasValue":
            return r.contents;
          case "hasError":
            throw r.contents;
          case "loading":
            return r.contents;
        }
      }
      return o;
    }).catch((n) => {
      if (K(n))
        return n.then(() => this.map(t).contents);
      throw n;
    }));
  }
}
function Ye(e) {
  return Object.freeze(new tr(e));
}
function ht(e) {
  return Object.freeze(new nr(e));
}
function Te(e) {
  return Object.freeze(new Un(e));
}
function xn() {
  return Object.freeze(new Un(new Promise(() => {
  })));
}
function or(e) {
  return e.every((t) => t.state === "hasValue") ? Ye(e.map((t) => t.contents)) : e.some((t) => t.state === "hasError") ? ht(j(e.find((t) => t.state === "hasError"), "Invalid loadable passed to loadableAll").contents) : Te(Promise.all(e.map((t) => t.contents)));
}
function Pn(e) {
  const n = (Array.isArray(e) ? e : Object.getOwnPropertyNames(e).map((r) => e[r])).map((r) => xe(r) ? r : K(r) ? Te(r) : Ye(r)), o = or(n);
  return Array.isArray(e) ? (
    // $FlowIssue[incompatible-return]
    o
  ) : (
    // Object.getOwnPropertyNames() has consistent key ordering with ES6
    // $FlowIssue[incompatible-call]
    o.map((r) => Object.getOwnPropertyNames(e).reduce(
      // $FlowFixMe[invalid-computed-prop]
      (a, i, u) => ({
        ...a,
        [i]: r[u]
      }),
      {}
    ))
  );
}
function xe(e) {
  return e instanceof ft;
}
const rr = {
  of: (e) => K(e) ? Te(e) : xe(e) ? e : Ye(e),
  error: (e) => ht(e),
  // $FlowIssue[incompatible-return]
  loading: () => xn(),
  // $FlowIssue[unclear-type]
  all: Pn,
  isLoadable: xe
};
var Le = {
  loadableWithValue: Ye,
  loadableWithError: ht,
  loadableWithPromise: Te,
  loadableLoading: xn,
  loadableAll: Pn,
  isLoadable: xe,
  RecoilLoadable: rr
}, ar = Le.loadableWithValue, sr = Le.loadableWithError, ir = Le.loadableWithPromise, lr = Le.loadableLoading, cr = Le.loadableAll, ur = Le.isLoadable, dr = Le.RecoilLoadable, Xe = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  loadableWithValue: ar,
  loadableWithError: sr,
  loadableWithPromise: ir,
  loadableLoading: lr,
  loadableAll: cr,
  isLoadable: ur,
  RecoilLoadable: dr
});
const Pt = {
  RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED: !0,
  // Note: RECOIL_GKS_ENABLED settings will only be honored in OSS builds of Recoil
  RECOIL_GKS_ENABLED: /* @__PURE__ */ new Set(["recoil_hamt_2020", "recoil_sync_external_store", "recoil_suppress_rerender_in_callback", "recoil_memory_managament_2020"])
};
function fr(e, t) {
  var n, o;
  const r = (n = In[e]) === null || n === void 0 || (o = n.toLowerCase()) === null || o === void 0 ? void 0 : o.trim();
  if (r == null || r === "")
    return;
  if (!["true", "false"].includes(r))
    throw M(`process.env.${e} value must be 'true', 'false', or empty: ${r}`);
  t(r === "true");
}
function hr(e, t) {
  var n;
  const o = (n = In[e]) === null || n === void 0 ? void 0 : n.trim();
  o == null || o === "" || t(o.split(/\s*,\s*|\s+/));
}
function vr() {
  var e;
  typeof process > "u" || ((e = process) === null || e === void 0 ? void 0 : e.env) != null && (fr("RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED", (t) => {
    Pt.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = t;
  }), hr("RECOIL_GKS_ENABLED", (t) => {
    t.forEach((n) => {
      Pt.RECOIL_GKS_ENABLED.add(n);
    });
  }));
}
vr();
var Je = Pt;
function vt(e) {
  return Je.RECOIL_GKS_ENABLED.has(e);
}
vt.setPass = (e) => {
  Je.RECOIL_GKS_ENABLED.add(e);
};
vt.setFail = (e) => {
  Je.RECOIL_GKS_ENABLED.delete(e);
};
vt.clear = () => {
  Je.RECOIL_GKS_ENABLED.clear();
};
var F = vt;
function pr(e, t, {
  error: n
} = {}) {
  return null;
}
var _r = pr, ie = _r, Vt, $t, Mt;
const mr = (
  // flowlint-next-line unclear-type:off
  (Vt = Z.createMutableSource) !== null && Vt !== void 0 ? Vt : Z.unstable_createMutableSource
), On = (
  // flowlint-next-line unclear-type:off
  ($t = Z.useMutableSource) !== null && $t !== void 0 ? $t : Z.unstable_useMutableSource
), Gt = (
  // flowlint-next-line unclear-type:off
  (Mt = Z.useSyncExternalStore) !== null && Mt !== void 0 ? Mt : (
    // flowlint-next-line unclear-type:off
    Z.unstable_useSyncExternalStore
  )
);
let fn = !1;
function yr() {
  var e;
  const {
    ReactCurrentDispatcher: t,
    ReactCurrentOwner: n
  } = (
    /* $FlowFixMe[prop-missing] This workaround was approved as a safer mechanism
     * to detect if the current renderer supports useSyncExternalStore()
     * https://fb.workplace.com/groups/reactjs/posts/9558682330846963/ */
    Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  ), r = ((e = t == null ? void 0 : t.current) !== null && e !== void 0 ? e : n.currentDispatcher).useSyncExternalStore != null;
  return Gt && !r && !fn && (fn = !0, ie()), r;
}
function Sr() {
  return F("recoil_transition_support") ? {
    mode: "TRANSITION_SUPPORT",
    early: !0,
    concurrent: !0
  } : F("recoil_sync_external_store") && Gt != null ? {
    mode: "SYNC_EXTERNAL_STORE",
    early: !0,
    concurrent: !1
  } : F("recoil_mutable_source") && On != null && typeof window < "u" && !window.$disableRecoilValueMutableSource_TEMP_HACK_DO_NOT_USE ? F("recoil_suppress_rerender_in_callback") ? {
    mode: "MUTABLE_SOURCE",
    early: !0,
    concurrent: !0
  } : {
    mode: "MUTABLE_SOURCE",
    early: !1,
    concurrent: !1
  } : F("recoil_suppress_rerender_in_callback") ? {
    mode: "LEGACY",
    early: !0,
    concurrent: !1
  } : {
    mode: "LEGACY",
    early: !1,
    concurrent: !1
  };
}
var Ht = {
  createMutableSource: mr,
  useMutableSource: On,
  useSyncExternalStore: Gt,
  currentRendererSupportsUseSyncExternalStore: yr,
  reactMode: Sr
};
class jt {
  constructor(t) {
    V(this, "key", void 0), this.key = t;
  }
  toJSON() {
    return {
      key: this.key
    };
  }
}
class Bn extends jt {
}
class zn extends jt {
}
function gr(e) {
  return e instanceof Bn || e instanceof zn;
}
var pt = {
  AbstractRecoilValue: jt,
  RecoilState: Bn,
  RecoilValueReadOnly: zn,
  isRecoilValue: gr
}, Rr = pt.AbstractRecoilValue, br = pt.RecoilState, wr = pt.RecoilValueReadOnly, Er = pt.isRecoilValue, Ae = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  AbstractRecoilValue: Rr,
  RecoilState: br,
  RecoilValueReadOnly: wr,
  isRecoilValue: Er
});
function Tr(e, ...t) {
}
var Ar = Tr, Fn = Ar;
function Lr(e, t) {
  return function* () {
    let n = 0;
    for (const o of e)
      yield t(o, n++);
  }();
}
var _t = Lr;
class Wn {
}
const Nr = new Wn(), Pe = /* @__PURE__ */ new Map(), qt = /* @__PURE__ */ new Map();
function Cr(e) {
  return _t(e, (t) => j(qt.get(t)));
}
function Vr(e) {
  if (Pe.has(e)) {
    const t = `Duplicate atom key "${e}". This is a FATAL ERROR in
      production. But it is safe to ignore this warning if it occurred because of
      hot module replacement.`;
    console.warn(t);
  }
}
function $r(e) {
  Je.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED && Vr(e.key), Pe.set(e.key, e);
  const t = e.set == null ? new Ae.RecoilValueReadOnly(e.key) : new Ae.RecoilState(e.key);
  return qt.set(e.key, t), t;
}
class Mr extends Error {
}
function kr(e) {
  const t = Pe.get(e);
  if (t == null)
    throw new Mr(`Missing definition for RecoilValue: "${e}""`);
  return t;
}
function Dr(e) {
  return Pe.get(e);
}
const ut = /* @__PURE__ */ new Map();
function Ir(e) {
  var t;
  if (!F("recoil_memory_managament_2020"))
    return;
  const n = Pe.get(e);
  if (n != null && (t = n.shouldDeleteConfigOnRelease) !== null && t !== void 0 && t.call(n)) {
    var o;
    Pe.delete(e), (o = Kn(e)) === null || o === void 0 || o(), ut.delete(e);
  }
}
function Ur(e, t) {
  F("recoil_memory_managament_2020") && (t === void 0 ? ut.delete(e) : ut.set(e, t));
}
function Kn(e) {
  return ut.get(e);
}
var ue = {
  recoilValues: qt,
  registerNode: $r,
  getNode: kr,
  getNodeMaybe: Dr,
  deleteNodeConfigIfPossible: Ir,
  setConfigDeletionHandler: Ur,
  getConfigDeletionHandler: Kn,
  recoilValuesForKeys: Cr,
  DefaultValue: Wn,
  DEFAULT_VALUE: Nr
};
function xr(e, t) {
  t();
}
var Pr = {
  enqueueExecution: xr
};
function Or(e, t) {
  return t = { exports: {} }, e(t, t.exports), t.exports;
}
var Br = Or(function(e) {
  var t = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(l) {
    return typeof l;
  } : function(l) {
    return l && typeof Symbol == "function" && l.constructor === Symbol && l !== Symbol.prototype ? "symbol" : typeof l;
  }, n = {}, o = 5, r = Math.pow(2, o), a = r - 1, i = r / 2, u = r / 4, d = {}, f = function(s) {
    return function() {
      return s;
    };
  }, p = n.hash = function(l) {
    var s = typeof l > "u" ? "undefined" : t(l);
    if (s === "number")
      return l;
    s !== "string" && (l += "");
    for (var h = 0, m = 0, y = l.length; m < y; ++m) {
      var S = l.charCodeAt(m);
      h = (h << 5) - h + S | 0;
    }
    return h;
  }, g = function(s) {
    return s -= s >> 1 & 1431655765, s = (s & 858993459) + (s >> 2 & 858993459), s = s + (s >> 4) & 252645135, s += s >> 8, s += s >> 16, s & 127;
  }, I = function(s, h) {
    return h >>> s & a;
  }, N = function(s) {
    return 1 << s;
  }, E = function(s, h) {
    return g(s & h - 1);
  }, $ = function(s, h, m, y) {
    var S = y;
    if (!s) {
      var L = y.length;
      S = new Array(L);
      for (var T = 0; T < L; ++T)
        S[T] = y[T];
    }
    return S[h] = m, S;
  }, Q = function(s, h, m) {
    var y = m.length - 1, S = 0, L = 0, T = m;
    if (s)
      S = L = h;
    else
      for (T = new Array(y); S < h; )
        T[L++] = m[S++];
    for (++S; S <= y; )
      T[L++] = m[S++];
    return s && (T.length = y), T;
  }, te = function(s, h, m, y) {
    var S = y.length;
    if (s) {
      for (var L = S; L >= h; )
        y[L--] = y[L];
      return y[h] = m, y;
    }
    for (var T = 0, A = 0, D = new Array(S + 1); T < h; )
      D[A++] = y[T++];
    for (D[h] = m; T < S; )
      D[++A] = y[T++];
    return D;
  }, w = 1, U = 2, Y = 3, z = 4, G = {
    __hamt_isEmpty: !0
  }, q = function(s) {
    return s === G || s && s.__hamt_isEmpty;
  }, re = function(s, h, m, y) {
    return {
      type: w,
      edit: s,
      hash: h,
      key: m,
      value: y,
      _modify: Me
    };
  }, ye = function(s, h, m) {
    return {
      type: U,
      edit: s,
      hash: h,
      children: m,
      _modify: ke
    };
  }, J = function(s, h, m) {
    return {
      type: Y,
      edit: s,
      mask: h,
      children: m,
      _modify: x
    };
  }, de = function(s, h, m) {
    return {
      type: z,
      edit: s,
      size: h,
      children: m,
      _modify: B
    };
  }, $e = function(s) {
    return s === G || s.type === w || s.type === U;
  }, X = function(s, h, m, y, S) {
    for (var L = [], T = y, A = 0, D = 0; T; ++D)
      T & 1 && (L[D] = S[A++]), T >>>= 1;
    return L[h] = m, de(s, A + 1, L);
  }, le = function(s, h, m, y) {
    for (var S = new Array(h - 1), L = 0, T = 0, A = 0, D = y.length; A < D; ++A)
      if (A !== m) {
        var H = y[A];
        H && !q(H) && (S[L++] = H, T |= 1 << A);
      }
    return J(s, T, S);
  }, we = function l(s, h, m, y, S, L) {
    if (m === S)
      return ye(s, m, [L, y]);
    var T = I(h, m), A = I(h, S);
    return J(s, N(T) | N(A), T === A ? [l(s, h + o, m, y, S, L)] : T < A ? [y, L] : [L, y]);
  }, fe = function(s, h, m, y, S, L, T, A) {
    for (var D = S.length, H = 0; H < D; ++H) {
      var se = S[H];
      if (m(T, se.key)) {
        var oe = se.value, he = L(oe);
        return he === oe ? S : he === d ? (--A.value, Q(s, H, S)) : $(s, H, re(h, y, T, he), S);
      }
    }
    var pe = L();
    return pe === d ? S : (++A.value, $(s, D, re(h, y, T, pe), S));
  }, Se = function(s, h) {
    return s === h.edit;
  }, Me = function(s, h, m, y, S, L, T) {
    if (h(L, this.key)) {
      var A = y(this.value);
      return A === this.value ? this : A === d ? (--T.value, G) : Se(s, this) ? (this.value = A, this) : re(s, S, L, A);
    }
    var D = y();
    return D === d ? this : (++T.value, we(s, m, this.hash, this, S, re(s, S, L, D)));
  }, ke = function(s, h, m, y, S, L, T) {
    if (S === this.hash) {
      var A = Se(s, this), D = fe(A, s, h, this.hash, this.children, y, L, T);
      return D === this.children ? this : D.length > 1 ? ye(s, this.hash, D) : D[0];
    }
    var H = y();
    return H === d ? this : (++T.value, we(s, m, this.hash, this, S, re(s, S, L, H)));
  }, x = function(s, h, m, y, S, L, T) {
    var A = this.mask, D = this.children, H = I(m, S), se = N(H), oe = E(A, se), he = A & se, pe = he ? D[oe] : G, De = pe._modify(s, h, m + o, y, S, L, T);
    if (pe === De)
      return this;
    var ot = Se(s, this), ze = A, Fe = void 0;
    if (he && q(De)) {
      if (ze &= ~se, !ze)
        return G;
      if (D.length <= 2 && $e(D[oe ^ 1]))
        return D[oe ^ 1];
      Fe = Q(ot, oe, D);
    } else if (!he && !q(De)) {
      if (D.length >= i)
        return X(s, H, De, A, D);
      ze |= se, Fe = te(ot, oe, De, D);
    } else
      Fe = $(ot, oe, De, D);
    return ot ? (this.mask = ze, this.children = Fe, this) : J(s, ze, Fe);
  }, B = function(s, h, m, y, S, L, T) {
    var A = this.size, D = this.children, H = I(m, S), se = D[H], oe = (se || G)._modify(s, h, m + o, y, S, L, T);
    if (se === oe)
      return this;
    var he = Se(s, this), pe = void 0;
    if (q(se) && !q(oe))
      ++A, pe = $(he, H, oe, D);
    else if (!q(se) && q(oe)) {
      if (--A, A <= u)
        return le(s, A, H, D);
      pe = $(he, H, G, D);
    } else
      pe = $(he, H, oe, D);
    return he ? (this.size = A, this.children = pe, this) : de(s, A, pe);
  };
  G._modify = function(l, s, h, m, y, S, L) {
    var T = m();
    return T === d ? G : (++L.value, re(l, y, S, T));
  };
  function c(l, s, h, m, y) {
    this._editable = l, this._edit = s, this._config = h, this._root = m, this._size = y;
  }
  c.prototype.setTree = function(l, s) {
    return this._editable ? (this._root = l, this._size = s, this) : l === this._root ? this : new c(this._editable, this._edit, this._config, l, s);
  };
  var v = n.tryGetHash = function(l, s, h, m) {
    for (var y = m._root, S = 0, L = m._config.keyEq; ; )
      switch (y.type) {
        case w:
          return L(h, y.key) ? y.value : l;
        case U: {
          if (s === y.hash)
            for (var T = y.children, A = 0, D = T.length; A < D; ++A) {
              var H = T[A];
              if (L(h, H.key))
                return H.value;
            }
          return l;
        }
        case Y: {
          var se = I(S, s), oe = N(se);
          if (y.mask & oe) {
            y = y.children[E(y.mask, oe)], S += o;
            break;
          }
          return l;
        }
        case z: {
          if (y = y.children[I(S, s)], y) {
            S += o;
            break;
          }
          return l;
        }
        default:
          return l;
      }
  };
  c.prototype.tryGetHash = function(l, s, h) {
    return v(l, s, h, this);
  };
  var _ = n.tryGet = function(l, s, h) {
    return v(l, h._config.hash(s), s, h);
  };
  c.prototype.tryGet = function(l, s) {
    return _(l, s, this);
  };
  var C = n.getHash = function(l, s, h) {
    return v(void 0, l, s, h);
  };
  c.prototype.getHash = function(l, s) {
    return C(l, s, this);
  }, n.get = function(l, s) {
    return v(void 0, s._config.hash(l), l, s);
  }, c.prototype.get = function(l, s) {
    return _(s, l, this);
  };
  var R = n.has = function(l, s, h) {
    return v(d, l, s, h) !== d;
  };
  c.prototype.hasHash = function(l, s) {
    return R(l, s, this);
  };
  var k = n.has = function(l, s) {
    return R(s._config.hash(l), l, s);
  };
  c.prototype.has = function(l) {
    return k(l, this);
  };
  var b = function(s, h) {
    return s === h;
  };
  n.make = function(l) {
    return new c(0, 0, {
      keyEq: l && l.keyEq || b,
      hash: l && l.hash || p
    }, G, 0);
  }, n.empty = n.make();
  var P = n.isEmpty = function(l) {
    return l && !!q(l._root);
  };
  c.prototype.isEmpty = function() {
    return P(this);
  };
  var W = n.modifyHash = function(l, s, h, m) {
    var y = {
      value: m._size
    }, S = m._root._modify(m._editable ? m._edit : NaN, m._config.keyEq, 0, l, s, h, y);
    return m.setTree(S, y.value);
  };
  c.prototype.modifyHash = function(l, s, h) {
    return W(h, l, s, this);
  };
  var ee = n.modify = function(l, s, h) {
    return W(l, h._config.hash(s), s, h);
  };
  c.prototype.modify = function(l, s) {
    return ee(s, l, this);
  };
  var O = n.setHash = function(l, s, h, m) {
    return W(f(h), l, s, m);
  };
  c.prototype.setHash = function(l, s, h) {
    return O(l, s, h, this);
  };
  var ne = n.set = function(l, s, h) {
    return O(h._config.hash(l), l, s, h);
  };
  c.prototype.set = function(l, s) {
    return ne(l, s, this);
  };
  var me = f(d), ce = n.removeHash = function(l, s, h) {
    return W(me, l, s, h);
  };
  c.prototype.removeHash = c.prototype.deleteHash = function(l, s) {
    return ce(l, s, this);
  };
  var ae = n.remove = function(l, s) {
    return ce(s._config.hash(l), l, s);
  };
  c.prototype.remove = c.prototype.delete = function(l) {
    return ae(l, this);
  };
  var nt = n.beginMutation = function(l) {
    return new c(l._editable + 1, l._edit + 1, l._config, l._root, l._size);
  };
  c.prototype.beginMutation = function() {
    return nt(this);
  };
  var ln = n.endMutation = function(l) {
    return l._editable = l._editable && l._editable - 1, l;
  };
  c.prototype.endMutation = function() {
    return ln(this);
  };
  var Bo = n.mutate = function(l, s) {
    var h = nt(s);
    return l(h), ln(h);
  };
  c.prototype.mutate = function(l) {
    return Bo(l, this);
  };
  var Lt = function(s) {
    return s && cn(s[0], s[1], s[2], s[3], s[4]);
  }, cn = function(s, h, m, y, S) {
    for (; m < s; ) {
      var L = h[m++];
      if (L && !q(L))
        return un(L, y, [s, h, m, y, S]);
    }
    return Lt(S);
  }, un = function(s, h, m) {
    switch (s.type) {
      case w:
        return {
          value: h(s),
          rest: m
        };
      case U:
      case z:
      case Y:
        var y = s.children;
        return cn(y.length, y, 0, h, m);
      default:
        return Lt(m);
    }
  }, zo = {
    done: !0
  };
  function Nt(l) {
    this.v = l;
  }
  Nt.prototype.next = function() {
    if (!this.v)
      return zo;
    var l = this.v;
    return this.v = Lt(l.rest), l;
  }, Nt.prototype[Symbol.iterator] = function() {
    return this;
  };
  var Ct = function(s, h) {
    return new Nt(un(s._root, h));
  }, Fo = function(s) {
    return [s.key, s.value];
  }, Wo = n.entries = function(l) {
    return Ct(l, Fo);
  };
  c.prototype.entries = c.prototype[Symbol.iterator] = function() {
    return Wo(this);
  };
  var Ko = function(s) {
    return s.key;
  }, Go = n.keys = function(l) {
    return Ct(l, Ko);
  };
  c.prototype.keys = function() {
    return Go(this);
  };
  var Ho = function(s) {
    return s.value;
  }, jo = n.values = c.prototype.values = function(l) {
    return Ct(l, Ho);
  };
  c.prototype.values = function() {
    return jo(this);
  };
  var dn = n.fold = function(l, s, h) {
    var m = h._root;
    if (m.type === w)
      return l(s, m.value, m.key);
    for (var y = [m.children], S = void 0; S = y.pop(); )
      for (var L = 0, T = S.length; L < T; ) {
        var A = S[L++];
        A && A.type && (A.type === w ? s = l(s, A.value, A.key) : y.push(A.children));
      }
    return s;
  };
  c.prototype.fold = function(l, s) {
    return dn(l, s, this);
  };
  var qo = n.forEach = function(l, s) {
    return dn(function(h, m, y) {
      return l(m, y, s);
    }, null, s);
  };
  c.prototype.forEach = function(l) {
    return qo(l, this);
  };
  var Zo = n.count = function(l) {
    return l._size;
  };
  c.prototype.count = function() {
    return Zo(this);
  }, Object.defineProperty(c.prototype, "size", {
    get: c.prototype.count
  }), e.exports ? e.exports = n : (void 0).hamt = n;
});
class zr {
  constructor(t) {
    V(this, "_map", void 0), this._map = new Map(t == null ? void 0 : t.entries());
  }
  keys() {
    return this._map.keys();
  }
  entries() {
    return this._map.entries();
  }
  get(t) {
    return this._map.get(t);
  }
  has(t) {
    return this._map.has(t);
  }
  set(t, n) {
    return this._map.set(t, n), this;
  }
  delete(t) {
    return this._map.delete(t), this;
  }
  clone() {
    return Yt(this);
  }
  toMap() {
    return new Map(this._map);
  }
}
class Zt {
  // Because hamt.empty is not a function there is no way to introduce type
  // parameters on it, so empty is typed as HAMTPlusMap<string, mixed>.
  // $FlowIssue
  constructor(t) {
    if (V(this, "_hamt", Br.empty.beginMutation()), t instanceof Zt) {
      const n = t._hamt.endMutation();
      t._hamt = n.beginMutation(), this._hamt = n.beginMutation();
    } else if (t)
      for (const [n, o] of t.entries())
        this._hamt.set(n, o);
  }
  keys() {
    return this._hamt.keys();
  }
  entries() {
    return this._hamt.entries();
  }
  get(t) {
    return this._hamt.get(t);
  }
  has(t) {
    return this._hamt.has(t);
  }
  set(t, n) {
    return this._hamt.set(t, n), this;
  }
  delete(t) {
    return this._hamt.delete(t), this;
  }
  clone() {
    return Yt(this);
  }
  toMap() {
    return new Map(this._hamt);
  }
}
function Yt(e) {
  return F("recoil_hamt_2020") ? new Zt(e) : new zr(e);
}
var Fr = {
  persistentMap: Yt
}, Wr = Fr.persistentMap, Kr = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  persistentMap: Wr
});
function Gr(e, ...t) {
  const n = /* @__PURE__ */ new Set();
  e:
    for (const o of e) {
      for (const r of t)
        if (r.has(o))
          continue e;
      n.add(o);
    }
  return n;
}
var hn = Gr;
function Hr(e, t) {
  const n = /* @__PURE__ */ new Map();
  return e.forEach((o, r) => {
    n.set(r, t(o, r));
  }), n;
}
var vn = Hr;
function jr() {
  return {
    nodeDeps: /* @__PURE__ */ new Map(),
    nodeToNodeSubscriptions: /* @__PURE__ */ new Map()
  };
}
function qr(e) {
  return {
    nodeDeps: vn(e.nodeDeps, (t) => new Set(t)),
    nodeToNodeSubscriptions: vn(e.nodeToNodeSubscriptions, (t) => new Set(t))
  };
}
function kt(e, t, n, o) {
  const {
    nodeDeps: r,
    nodeToNodeSubscriptions: a
  } = n, i = r.get(e);
  if (i && o && i !== o.nodeDeps.get(e))
    return;
  r.set(e, t);
  const u = i == null ? t : hn(t, i);
  for (const d of u)
    a.has(d) || a.set(d, /* @__PURE__ */ new Set()), j(a.get(d)).add(e);
  if (i) {
    const d = hn(i, t);
    for (const f of d) {
      if (!a.has(f))
        return;
      const p = j(a.get(f));
      p.delete(e), p.size === 0 && a.delete(f);
    }
  }
}
function Zr(e, t, n, o) {
  var r, a, i, u;
  const d = n.getState();
  o === d.currentTree.version || o === ((r = d.nextTree) === null || r === void 0 ? void 0 : r.version) || o === ((a = d.previousTree) === null || a === void 0 ? void 0 : a.version) || ie();
  const f = n.getGraph(o);
  if (kt(e, t, f), o === ((i = d.previousTree) === null || i === void 0 ? void 0 : i.version)) {
    const g = n.getGraph(d.currentTree.version);
    kt(e, t, g, f);
  }
  if (o === ((u = d.previousTree) === null || u === void 0 ? void 0 : u.version) || o === d.currentTree.version) {
    var p;
    const g = (p = d.nextTree) === null || p === void 0 ? void 0 : p.version;
    if (g !== void 0) {
      const I = n.getGraph(g);
      kt(e, t, I, f);
    }
  }
}
var Qe = {
  cloneGraph: qr,
  graph: jr,
  saveDepsToStore: Zr
};
let Yr = 0;
const Xr = () => Yr++;
let Jr = 0;
const Qr = () => Jr++;
let ea = 0;
const ta = () => ea++;
var mt = {
  getNextTreeStateVersion: Xr,
  getNextStoreID: Qr,
  getNextComponentID: ta
};
const {
  persistentMap: pn
} = Kr, {
  graph: na
} = Qe, {
  getNextTreeStateVersion: Gn
} = mt;
function oa() {
  const e = Gn();
  return {
    version: e,
    stateID: e,
    transactionMetadata: {},
    dirtyAtoms: /* @__PURE__ */ new Set(),
    atomValues: pn(),
    nonvalidatedAtoms: pn()
  };
}
function ra() {
  const e = oa();
  return {
    currentTree: e,
    nextTree: null,
    previousTree: null,
    commitDepth: 0,
    knownAtoms: /* @__PURE__ */ new Set(),
    knownSelectors: /* @__PURE__ */ new Set(),
    transactionSubscriptions: /* @__PURE__ */ new Map(),
    nodeTransactionSubscriptions: /* @__PURE__ */ new Map(),
    nodeToComponentSubscriptions: /* @__PURE__ */ new Map(),
    queuedComponentCallbacks_DEPRECATED: [],
    suspendedComponentResolvers: /* @__PURE__ */ new Set(),
    graphsByVersion: (/* @__PURE__ */ new Map()).set(e.version, na()),
    retention: {
      referenceCounts: /* @__PURE__ */ new Map(),
      nodesRetainedByZone: /* @__PURE__ */ new Map(),
      retainablesToCheckForRelease: /* @__PURE__ */ new Set()
    },
    nodeCleanupFunctions: /* @__PURE__ */ new Map()
  };
}
var Hn = {
  makeEmptyStoreState: ra,
  getNextTreeStateVersion: Gn
};
class aa {
}
var Xt = {
  RetentionZone: aa
};
function sa(e, t) {
  const n = new Set(e);
  return n.add(t), n;
}
var ia = {
  setByAddingToSet: sa
};
function* la(e, t) {
  let n = 0;
  for (const o of e)
    t(o, n++) && (yield o);
}
var Jt = la;
function ca(e, t) {
  return new Proxy(e, {
    // Compute and cache lazy property if not already done.
    get: (o, r) => (!(r in o) && r in t && (o[r] = t[r]()), o[r]),
    // This method allows user to iterate keys as normal
    ownKeys: (o) => Object.keys(o)
  });
}
var jn = ca;
const {
  getNode: et,
  getNodeMaybe: ua,
  recoilValuesForKeys: _n
} = ue, {
  RetentionZone: mn
} = Xt, {
  setByAddingToSet: da
} = ia, fa = Object.freeze(/* @__PURE__ */ new Set());
class ha extends Error {
}
function va(e, t, n) {
  if (!F("recoil_memory_managament_2020"))
    return () => {
    };
  const {
    nodesRetainedByZone: o
  } = e.getState().retention;
  function r(a) {
    let i = o.get(a);
    i || o.set(a, i = /* @__PURE__ */ new Set()), i.add(t);
  }
  if (n instanceof mn)
    r(n);
  else if (Array.isArray(n))
    for (const a of n)
      r(a);
  return () => {
    if (!F("recoil_memory_managament_2020"))
      return;
    const {
      retention: a
    } = e.getState();
    function i(u) {
      const d = a.nodesRetainedByZone.get(u);
      d == null || d.delete(t), d && d.size === 0 && a.nodesRetainedByZone.delete(u);
    }
    if (n instanceof mn)
      i(n);
    else if (Array.isArray(n))
      for (const u of n)
        i(u);
  };
}
function Qt(e, t, n, o) {
  const r = e.getState();
  if (r.nodeCleanupFunctions.has(n))
    return;
  const a = et(n), i = va(e, n, a.retainedBy), u = a.init(e, t, o);
  r.nodeCleanupFunctions.set(n, () => {
    u(), i();
  });
}
function pa(e, t, n) {
  Qt(e, e.getState().currentTree, t, n);
}
function _a(e, t) {
  var n;
  const o = e.getState();
  (n = o.nodeCleanupFunctions.get(t)) === null || n === void 0 || n(), o.nodeCleanupFunctions.delete(t);
}
function ma(e, t, n) {
  return Qt(e, t, n, "get"), et(n).get(e, t);
}
function qn(e, t, n) {
  return et(n).peek(e, t);
}
function ya(e, t, n) {
  var o;
  const r = ua(t);
  return r == null || (o = r.invalidate) === null || o === void 0 || o.call(r, e), {
    ...e,
    atomValues: e.atomValues.clone().delete(t),
    nonvalidatedAtoms: e.nonvalidatedAtoms.clone().set(t, n),
    dirtyAtoms: da(e.dirtyAtoms, t)
  };
}
function Sa(e, t, n, o) {
  const r = et(n);
  if (r.set == null)
    throw new ha(`Attempt to set read-only RecoilValue: ${n}`);
  const a = r.set;
  return Qt(e, t, n, "set"), a(e, t, o);
}
function ga(e, t, n) {
  const o = e.getState(), r = e.getGraph(t.version), a = et(n).nodeType;
  return jn({
    type: a
  }, {
    // $FlowFixMe[underconstrained-implicit-instantiation]
    loadable: () => qn(e, t, n),
    isActive: () => o.knownAtoms.has(n) || o.knownSelectors.has(n),
    isSet: () => a === "selector" ? !1 : t.atomValues.has(n),
    isModified: () => t.dirtyAtoms.has(n),
    // Report current dependencies.  If the node hasn't been evaluated, then
    // dependencies may be missing based on the current state.
    deps: () => {
      var i;
      return _n((i = r.nodeDeps.get(n)) !== null && i !== void 0 ? i : []);
    },
    // Reports all "current" subscribers.  Evaluating other nodes or
    // previous in-progress async evaluations may introduce new subscribers.
    subscribers: () => {
      var i, u;
      return {
        nodes: _n(Jt(Zn(e, t, /* @__PURE__ */ new Set([n])), (d) => d !== n)),
        components: _t((i = (u = o.nodeToComponentSubscriptions.get(n)) === null || u === void 0 ? void 0 : u.values()) !== null && i !== void 0 ? i : [], ([d]) => ({
          name: d
        }))
      };
    }
  });
}
function Zn(e, t, n) {
  const o = /* @__PURE__ */ new Set(), r = Array.from(n), a = e.getGraph(t.version);
  for (let u = r.pop(); u; u = r.pop()) {
    var i;
    o.add(u);
    const d = (i = a.nodeToNodeSubscriptions.get(u)) !== null && i !== void 0 ? i : fa;
    for (const f of d)
      o.has(f) || r.push(f);
  }
  return o;
}
var Ne = {
  getNodeLoadable: ma,
  peekNodeLoadable: qn,
  setNodeValue: Sa,
  initializeNode: pa,
  cleanUpNode: _a,
  setUnvalidatedAtomValue_DEPRECATED: ya,
  peekNodeInfo: ga,
  getDownstreamNodes: Zn
};
let Yn = null;
function Ra(e) {
  Yn = e;
}
function ba() {
  var e;
  (e = Yn) === null || e === void 0 || e();
}
var Xn = {
  setInvalidateMemoizedSnapshot: Ra,
  invalidateMemoizedSnapshot: ba
};
const {
  getDownstreamNodes: wa,
  getNodeLoadable: Jn,
  setNodeValue: Ea
} = Ne, {
  getNextComponentID: Ta
} = mt, {
  getNode: Aa,
  getNodeMaybe: Qn
} = ue, {
  DefaultValue: en
} = ue, {
  reactMode: La
} = Ht, {
  AbstractRecoilValue: Na,
  RecoilState: Sc,
  RecoilValueReadOnly: gc,
  isRecoilValue: Rc
} = Ae, {
  invalidateMemoizedSnapshot: Ca
} = Xn;
function Va(e, {
  key: t
}, n = e.getState().currentTree) {
  var o, r;
  const a = e.getState();
  n.version === a.currentTree.version || n.version === ((o = a.nextTree) === null || o === void 0 ? void 0 : o.version) || n.version === ((r = a.previousTree) === null || r === void 0 ? void 0 : r.version) || ie();
  const i = Jn(e, n, t);
  return i.state === "loading" && i.contents.catch(() => {
  }), i;
}
function $a(e, t) {
  const n = e.clone();
  return t.forEach((o, r) => {
    o.state === "hasValue" && o.contents instanceof en ? n.delete(r) : n.set(r, o);
  }), n;
}
function Ma(e, t, {
  key: n
}, o) {
  if (typeof o == "function") {
    const r = Jn(e, t, n);
    if (r.state === "loading") {
      const a = `Tried to set atom or selector "${n}" using an updater function while the current state is pending, this is not currently supported.`;
      throw ie(), M(a);
    } else if (r.state === "hasError")
      throw r.contents;
    return o(r.contents);
  } else
    return o;
}
function ka(e, t, n) {
  if (n.type === "set") {
    const {
      recoilValue: r,
      valueOrUpdater: a
    } = n, i = Ma(e, t, r, a), u = Ea(e, t, r.key, i);
    for (const [d, f] of u.entries())
      Ot(t, d, f);
  } else if (n.type === "setLoadable") {
    const {
      recoilValue: {
        key: r
      },
      loadable: a
    } = n;
    Ot(t, r, a);
  } else if (n.type === "markModified") {
    const {
      recoilValue: {
        key: r
      }
    } = n;
    t.dirtyAtoms.add(r);
  } else if (n.type === "setUnvalidated") {
    var o;
    const {
      recoilValue: {
        key: r
      },
      unvalidatedValue: a
    } = n, i = Qn(r);
    i == null || (o = i.invalidate) === null || o === void 0 || o.call(i, t), t.atomValues.delete(r), t.nonvalidatedAtoms.set(r, a), t.dirtyAtoms.add(r);
  } else
    ie(`Unknown action ${n.type}`);
}
function Ot(e, t, n) {
  n.state === "hasValue" && n.contents instanceof en ? e.atomValues.delete(t) : e.atomValues.set(t, n), e.dirtyAtoms.add(t), e.nonvalidatedAtoms.delete(t);
}
function eo(e, t) {
  e.replaceState((n) => {
    const o = to(n);
    for (const r of t)
      ka(e, o, r);
    return no(e, o), Ca(), o;
  });
}
function yt(e, t) {
  if (Ze.length) {
    const n = Ze[Ze.length - 1];
    let o = n.get(e);
    o || n.set(e, o = []), o.push(t);
  } else
    eo(e, [t]);
}
const Ze = [];
function Da() {
  const e = /* @__PURE__ */ new Map();
  return Ze.push(e), () => {
    for (const [n, o] of e)
      eo(n, o);
    Ze.pop() !== e && ie();
  };
}
function to(e) {
  return {
    ...e,
    atomValues: e.atomValues.clone(),
    nonvalidatedAtoms: e.nonvalidatedAtoms.clone(),
    dirtyAtoms: new Set(e.dirtyAtoms)
  };
}
function no(e, t) {
  const n = wa(e, t, t.dirtyAtoms);
  for (const a of n) {
    var o, r;
    (o = Qn(a)) === null || o === void 0 || (r = o.invalidate) === null || r === void 0 || r.call(o, t);
  }
}
function oo(e, t, n) {
  yt(e, {
    type: "set",
    recoilValue: t,
    valueOrUpdater: n
  });
}
function Ia(e, t, n) {
  if (n instanceof en)
    return oo(e, t, n);
  yt(e, {
    type: "setLoadable",
    recoilValue: t,
    loadable: n
  });
}
function Ua(e, t) {
  yt(e, {
    type: "markModified",
    recoilValue: t
  });
}
function xa(e, t, n) {
  yt(e, {
    type: "setUnvalidated",
    recoilValue: t,
    unvalidatedValue: n
  });
}
function Pa(e, {
  key: t
}, n, o = null) {
  const r = Ta(), a = e.getState();
  a.nodeToComponentSubscriptions.has(t) || a.nodeToComponentSubscriptions.set(t, /* @__PURE__ */ new Map()), j(a.nodeToComponentSubscriptions.get(t)).set(r, [o ?? "<not captured>", n]);
  const i = La();
  if (i.early && (i.mode === "LEGACY" || i.mode === "MUTABLE_SOURCE")) {
    const u = e.getState().nextTree;
    u && u.dirtyAtoms.has(t) && n(u);
  }
  return {
    release: () => {
      const u = e.getState(), d = u.nodeToComponentSubscriptions.get(t);
      if (d === void 0 || !d.has(r)) {
        ie();
        return;
      }
      d.delete(r), d.size === 0 && u.nodeToComponentSubscriptions.delete(t);
    }
  };
}
function Oa(e, t) {
  var n;
  const {
    currentTree: o
  } = e.getState(), r = Aa(t.key);
  (n = r.clearCache) === null || n === void 0 || n.call(r, e, o);
}
var ge = {
  AbstractRecoilValue: Na,
  getRecoilValueAsLoadable: Va,
  setRecoilValue: oo,
  setRecoilValueLoadable: Ia,
  markRecoilValueModified: Ua,
  setUnvalidatedRecoilValue: xa,
  subscribeToRecoilValue: Pa,
  applyAtomValueWrites: $a,
  // TODO Remove export when deprecating initialStoreState_DEPRECATED in RecoilRoot
  batchStart: Da,
  writeLoadableToTreeState: Ot,
  invalidateDownstreams: no,
  copyTreeState: to,
  refreshRecoilValue: Oa
};
function Ba(e, t, n) {
  const o = e.entries();
  let r = o.next();
  for (; !r.done; ) {
    const a = r.value;
    if (t.call(n, a[1], a[0], e))
      return !0;
    r = o.next();
  }
  return !1;
}
var za = Ba;
const {
  cleanUpNode: Fa
} = Ne, {
  deleteNodeConfigIfPossible: Wa,
  getNode: ro
} = ue, {
  RetentionZone: ao
} = Xt, Ka = 12e4, so = /* @__PURE__ */ new Set();
function io(e, t) {
  const n = e.getState(), o = n.currentTree;
  if (n.nextTree) {
    ie();
    return;
  }
  const r = /* @__PURE__ */ new Set();
  for (const i of t)
    if (i instanceof ao)
      for (const u of qa(n, i))
        r.add(u);
    else
      r.add(i);
  const a = Ga(e, r);
  for (const i of a)
    ja(e, o, i);
}
function Ga(e, t) {
  const n = e.getState(), o = n.currentTree, r = e.getGraph(o.version), a = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ new Set();
  return u(t), a;
  function u(d) {
    const f = /* @__PURE__ */ new Set(), p = Ha(
      e,
      o,
      d,
      a,
      // don't descend into these
      i
      // don't descend into these
    );
    for (const E of p) {
      var g;
      if (ro(E).retainedBy === "recoilRoot") {
        i.add(E);
        continue;
      }
      if (((g = n.retention.referenceCounts.get(E)) !== null && g !== void 0 ? g : 0) > 0) {
        i.add(E);
        continue;
      }
      if (lo(E).some((Q) => n.retention.referenceCounts.get(Q))) {
        i.add(E);
        continue;
      }
      const $ = r.nodeToNodeSubscriptions.get(E);
      if ($ && za($, (Q) => i.has(Q))) {
        i.add(E);
        continue;
      }
      a.add(E), f.add(E);
    }
    const I = /* @__PURE__ */ new Set();
    for (const E of f)
      for (const $ of (N = r.nodeDeps.get(E)) !== null && N !== void 0 ? N : so) {
        var N;
        a.has($) || I.add($);
      }
    I.size && u(I);
  }
}
function Ha(e, t, n, o, r) {
  const a = e.getGraph(t.version), i = [], u = /* @__PURE__ */ new Set();
  for (; n.size > 0; )
    d(j(n.values().next().value));
  return i;
  function d(f) {
    if (o.has(f) || r.has(f)) {
      n.delete(f);
      return;
    }
    if (u.has(f))
      return;
    const p = a.nodeToNodeSubscriptions.get(f);
    if (p)
      for (const g of p)
        d(g);
    u.add(f), n.delete(f), i.push(f);
  }
}
function ja(e, t, n) {
  if (!F("recoil_memory_managament_2020"))
    return;
  Fa(e, n);
  const o = e.getState();
  o.knownAtoms.delete(n), o.knownSelectors.delete(n), o.nodeTransactionSubscriptions.delete(n), o.retention.referenceCounts.delete(n);
  const r = lo(n);
  for (const d of r) {
    var a;
    (a = o.retention.nodesRetainedByZone.get(d)) === null || a === void 0 || a.delete(n);
  }
  t.atomValues.delete(n), t.dirtyAtoms.delete(n), t.nonvalidatedAtoms.delete(n);
  const i = o.graphsByVersion.get(t.version);
  if (i) {
    const d = i.nodeDeps.get(n);
    if (d !== void 0) {
      i.nodeDeps.delete(n);
      for (const f of d) {
        var u;
        (u = i.nodeToNodeSubscriptions.get(f)) === null || u === void 0 || u.delete(n);
      }
    }
    i.nodeToNodeSubscriptions.delete(n);
  }
  Wa(n);
}
function qa(e, t) {
  var n;
  return (n = e.retention.nodesRetainedByZone.get(t)) !== null && n !== void 0 ? n : so;
}
function lo(e) {
  const t = ro(e).retainedBy;
  return t === void 0 || t === "components" || t === "recoilRoot" ? [] : t instanceof ao ? [t] : t;
}
function Za(e, t) {
  const n = e.getState();
  n.nextTree ? n.retention.retainablesToCheckForRelease.add(t) : io(e, /* @__PURE__ */ new Set([t]));
}
function Ya(e, t, n) {
  var o;
  if (!F("recoil_memory_managament_2020"))
    return;
  const r = e.getState().retention.referenceCounts, a = ((o = r.get(t)) !== null && o !== void 0 ? o : 0) + n;
  a === 0 ? Xa(e, t) : r.set(t, a);
}
function Xa(e, t) {
  if (!F("recoil_memory_managament_2020"))
    return;
  e.getState().retention.referenceCounts.delete(t), Za(e, t);
}
function Ja(e) {
  if (!F("recoil_memory_managament_2020"))
    return;
  const t = e.getState();
  io(e, t.retention.retainablesToCheckForRelease), t.retention.retainablesToCheckForRelease.clear();
}
function Qa(e) {
  return e === void 0 ? "recoilRoot" : e;
}
var Be = {
  SUSPENSE_TIMEOUT_MS: Ka,
  updateRetainCount: Ya,
  releaseScheduledRetainablesNow: Ja,
  retainedByOptionWithDefault: Qa
};
const {
  unstable_batchedUpdates: es
} = Yo;
var ts = {
  unstable_batchedUpdates: es
};
const {
  unstable_batchedUpdates: ns
} = ts;
var os = {
  unstable_batchedUpdates: ns
};
const {
  batchStart: rs
} = ge, {
  unstable_batchedUpdates: as
} = os;
let ss = as || ((e) => e());
const is = (e) => {
  ss(() => {
    let t = () => {
    };
    try {
      t = rs(), e();
    } finally {
      t();
    }
  });
};
var tn = {
  batchUpdates: is
};
function* ls(e) {
  for (const t of e)
    for (const n of t)
      yield n;
}
var co = ls;
const cs = (
  // $FlowFixMe(site=recoil) Window does not have a FlowType definition https://github.com/facebook/flow/issues/6709
  typeof Window > "u" || typeof window > "u"
);
var nn = {
  isSSR: cs
};
function us(e, t) {
  let n, o;
  return [(...i) => {
    const u = t(...i);
    return n === u || (n = u, o = e(...i)), o;
  }, () => {
    n = null;
  }];
}
var ds = {
  memoizeOneWithArgsHashAndInvalidation: us
};
const {
  batchUpdates: Bt
} = tn, {
  initializeNode: fs,
  peekNodeInfo: hs
} = Ne, {
  graph: vs
} = Qe, {
  getNextStoreID: ps
} = mt, {
  DEFAULT_VALUE: _s,
  recoilValues: yn,
  recoilValuesForKeys: Sn
} = ue, {
  AbstractRecoilValue: ms,
  getRecoilValueAsLoadable: ys,
  setRecoilValue: gn,
  setUnvalidatedRecoilValue: Ss
} = ge, {
  updateRetainCount: ct
} = Be, {
  setInvalidateMemoizedSnapshot: gs
} = Xn, {
  getNextTreeStateVersion: Rs,
  makeEmptyStoreState: bs
} = Hn, {
  isSSR: ws
} = nn, {
  memoizeOneWithArgsHashAndInvalidation: Es
} = ds;
class St {
  // eslint-disable-next-line fb-www/no-uninitialized-properties
  constructor(t, n) {
    V(this, "_store", void 0), V(this, "_refCount", 1), V(this, "getLoadable", (o) => (this.checkRefCount_INTERNAL(), ys(this._store, o))), V(this, "getPromise", (o) => (this.checkRefCount_INTERNAL(), this.getLoadable(o).toPromise())), V(this, "getNodes_UNSTABLE", (o) => {
      if (this.checkRefCount_INTERNAL(), (o == null ? void 0 : o.isModified) === !0) {
        if ((o == null ? void 0 : o.isInitialized) === !1)
          return [];
        const i = this._store.getState().currentTree;
        return Sn(i.dirtyAtoms);
      }
      const r = this._store.getState().knownAtoms, a = this._store.getState().knownSelectors;
      return (o == null ? void 0 : o.isInitialized) == null ? yn.values() : o.isInitialized === !0 ? Sn(co([r, a])) : Jt(yn.values(), ({
        key: i
      }) => !r.has(i) && !a.has(i));
    }), V(this, "getInfo_UNSTABLE", ({
      key: o
    }) => (this.checkRefCount_INTERNAL(), hs(this._store, this._store.getState().currentTree, o))), V(this, "map", (o) => {
      this.checkRefCount_INTERNAL();
      const r = new zt(this, Bt);
      return o(r), r;
    }), V(this, "asyncMap", async (o) => {
      this.checkRefCount_INTERNAL();
      const r = new zt(this, Bt);
      return r.retain(), await o(r), r.autoRelease_INTERNAL(), r;
    }), this._store = {
      storeID: ps(),
      parentStoreID: n,
      getState: () => t,
      replaceState: (o) => {
        t.currentTree = o(t.currentTree);
      },
      getGraph: (o) => {
        const r = t.graphsByVersion;
        if (r.has(o))
          return j(r.get(o));
        const a = vs();
        return r.set(o, a), a;
      },
      subscribeToTransactions: () => ({
        release: () => {
        }
      }),
      addTransactionMetadata: () => {
        throw M("Cannot subscribe to Snapshots");
      }
    };
    for (const o of this._store.getState().knownAtoms)
      fs(this._store, o, "get"), ct(this._store, o, 1);
    this.autoRelease_INTERNAL();
  }
  retain() {
    this._refCount <= 0 && ie(), this._refCount++;
    let t = !1;
    return () => {
      t || (t = !0, this._release());
    };
  }
  /**
   * Release the snapshot on the next tick.  This means the snapshot is retained
   * during the execution of the current function using it.
   */
  autoRelease_INTERNAL() {
    ws || window.setTimeout(() => this._release(), 10);
  }
  _release() {
    if (this._refCount--, this._refCount === 0) {
      if (this._store.getState().nodeCleanupFunctions.forEach((t) => t()), this._store.getState().nodeCleanupFunctions.clear(), !F("recoil_memory_managament_2020"))
        return;
    } else
      this._refCount < 0;
  }
  isRetained() {
    return this._refCount > 0;
  }
  checkRefCount_INTERNAL() {
    F("recoil_memory_managament_2020") && this._refCount <= 0;
  }
  getStore_INTERNAL() {
    return this.checkRefCount_INTERNAL(), this._store;
  }
  getID() {
    return this.checkRefCount_INTERNAL(), this._store.getState().currentTree.stateID;
  }
  getStoreID() {
    return this.checkRefCount_INTERNAL(), this._store.storeID;
  }
  // We want to allow the methods to be destructured and used as accessors
  /* eslint-disable fb-www/extra-arrow-initializer */
  /* eslint-enable fb-www/extra-arrow-initializer */
}
function uo(e, t, n = !1) {
  const o = e.getState(), r = n ? Rs() : t.version;
  return {
    // Always clone the TreeState to isolate stores from accidental mutations.
    // For example, reading a selector from a cloned snapshot shouldn't cache
    // in the original treestate which may cause the original to skip
    // initialization of upstream atoms.
    currentTree: {
      // TODO snapshots shouldn't really have versions because a new version number
      // is always assigned when the snapshot is gone to.
      version: n ? r : t.version,
      stateID: n ? r : t.stateID,
      transactionMetadata: {
        ...t.transactionMetadata
      },
      dirtyAtoms: new Set(t.dirtyAtoms),
      atomValues: t.atomValues.clone(),
      nonvalidatedAtoms: t.nonvalidatedAtoms.clone()
    },
    commitDepth: 0,
    nextTree: null,
    previousTree: null,
    knownAtoms: new Set(o.knownAtoms),
    // FIXME here's a copy
    knownSelectors: new Set(o.knownSelectors),
    // FIXME here's a copy
    transactionSubscriptions: /* @__PURE__ */ new Map(),
    nodeTransactionSubscriptions: /* @__PURE__ */ new Map(),
    nodeToComponentSubscriptions: /* @__PURE__ */ new Map(),
    queuedComponentCallbacks_DEPRECATED: [],
    suspendedComponentResolvers: /* @__PURE__ */ new Set(),
    graphsByVersion: (/* @__PURE__ */ new Map()).set(r, e.getGraph(t.version)),
    retention: {
      referenceCounts: /* @__PURE__ */ new Map(),
      nodesRetainedByZone: /* @__PURE__ */ new Map(),
      retainablesToCheckForRelease: /* @__PURE__ */ new Set()
    },
    // FIXME here's a copy
    // Create blank cleanup handlers for atoms so snapshots don't re-run
    // atom effects.
    nodeCleanupFunctions: new Map(_t(o.nodeCleanupFunctions.entries(), ([a]) => [a, () => {
    }]))
  };
}
function Ts(e) {
  const t = new St(bs());
  return e != null ? t.map(e) : t;
}
const [Rn, fo] = Es(
  // $FlowFixMe[missing-local-annot]
  (e, t) => {
    var n;
    const o = e.getState(), r = t === "latest" ? (n = o.nextTree) !== null && n !== void 0 ? n : o.currentTree : j(o.previousTree);
    return new St(uo(e, r), e.storeID);
  },
  (e, t) => {
    var n, o;
    return String(t) + String(e.storeID) + String((n = e.getState().nextTree) === null || n === void 0 ? void 0 : n.version) + String(e.getState().currentTree.version) + String((o = e.getState().previousTree) === null || o === void 0 ? void 0 : o.version);
  }
);
gs(fo);
function As(e, t = "latest") {
  const n = Rn(e, t);
  return n.isRetained() ? n : (fo(), Rn(e, t));
}
class zt extends St {
  constructor(t, n) {
    super(uo(t.getStore_INTERNAL(), t.getStore_INTERNAL().getState().currentTree, !0), t.getStoreID()), V(this, "_batch", void 0), V(this, "set", (o, r) => {
      this.checkRefCount_INTERNAL();
      const a = this.getStore_INTERNAL();
      this._batch(() => {
        ct(a, o.key, 1), gn(this.getStore_INTERNAL(), o, r);
      });
    }), V(this, "reset", (o) => {
      this.checkRefCount_INTERNAL();
      const r = this.getStore_INTERNAL();
      this._batch(() => {
        ct(r, o.key, 1), gn(this.getStore_INTERNAL(), o, _s);
      });
    }), V(this, "setUnvalidatedAtomValues_DEPRECATED", (o) => {
      this.checkRefCount_INTERNAL();
      const r = this.getStore_INTERNAL();
      Bt(() => {
        for (const [a, i] of o.entries())
          ct(r, a, 1), Ss(r, new ms(a), i);
      });
    }), this._batch = n;
  }
}
var gt = {
  Snapshot: St,
  MutableSnapshot: zt,
  freshSnapshot: Ts,
  cloneSnapshot: As
}, Ls = gt.Snapshot, Ns = gt.MutableSnapshot, Cs = gt.freshSnapshot, Vs = gt.cloneSnapshot, Rt = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  Snapshot: Ls,
  MutableSnapshot: Ns,
  freshSnapshot: Cs,
  cloneSnapshot: Vs
});
function $s(...e) {
  const t = /* @__PURE__ */ new Set();
  for (const n of e)
    for (const o of n)
      t.add(o);
  return t;
}
var Ms = $s;
const {
  useRef: ks
} = Z;
function Ds(e) {
  const t = ks(e);
  return t.current === e && typeof e == "function" && (t.current = e()), t;
}
var bn = Ds;
const {
  getNextTreeStateVersion: Is,
  makeEmptyStoreState: ho
} = Hn, {
  cleanUpNode: Us,
  getDownstreamNodes: xs,
  initializeNode: Ps,
  setNodeValue: Os,
  setUnvalidatedAtomValue_DEPRECATED: Bs
} = Ne, {
  graph: zs
} = Qe, {
  cloneGraph: Fs
} = Qe, {
  getNextStoreID: vo
} = mt, {
  createMutableSource: Dt,
  reactMode: po
} = Ht, {
  applyAtomValueWrites: Ws
} = ge, {
  releaseScheduledRetainablesNow: _o
} = Be, {
  freshSnapshot: Ks
} = Rt, {
  useCallback: Gs,
  useContext: mo,
  useEffect: Ft,
  useMemo: Hs,
  useRef: js,
  useState: qs
} = Z;
function We() {
  throw M("This component must be used inside a <RecoilRoot> component.");
}
const yo = Object.freeze({
  storeID: vo(),
  getState: We,
  replaceState: We,
  getGraph: We,
  subscribeToTransactions: We,
  addTransactionMetadata: We
});
let Wt = !1;
function wn(e) {
  if (Wt)
    throw M("An atom update was triggered within the execution of a state updater function. State updater functions provided to Recoil must be pure functions.");
  const t = e.getState();
  if (t.nextTree === null) {
    F("recoil_memory_managament_2020") && F("recoil_release_on_cascading_update_killswitch_2021") && t.commitDepth > 0 && _o(e);
    const n = t.currentTree.version, o = Is();
    t.nextTree = {
      ...t.currentTree,
      version: o,
      stateID: o,
      dirtyAtoms: /* @__PURE__ */ new Set(),
      transactionMetadata: {}
    }, t.graphsByVersion.set(o, Fs(j(t.graphsByVersion.get(n))));
  }
}
const So = Z.createContext({
  current: yo
}), on = () => mo(So), go = Z.createContext(null);
function Zs() {
  const e = mo(go);
  return e == null && Fn(), e;
}
function Ro(e, t, n) {
  const o = xs(e, n, n.dirtyAtoms);
  for (const r of o) {
    const a = t.nodeToComponentSubscriptions.get(r);
    if (a)
      for (const [i, [u, d]] of a)
        d(n);
  }
}
function Ys(e) {
  const t = e.getState(), n = t.currentTree, o = n.dirtyAtoms;
  if (o.size) {
    for (const [r, a] of t.nodeTransactionSubscriptions)
      if (o.has(r))
        for (const [i, u] of a)
          u(e);
    for (const [r, a] of t.transactionSubscriptions)
      a(e);
    (!po().early || t.suspendedComponentResolvers.size > 0) && (Ro(e, t, n), t.suspendedComponentResolvers.forEach((r) => r()), t.suspendedComponentResolvers.clear());
  }
  t.queuedComponentCallbacks_DEPRECATED.forEach((r) => r(n)), t.queuedComponentCallbacks_DEPRECATED.splice(0, t.queuedComponentCallbacks_DEPRECATED.length);
}
function Xs(e) {
  const t = e.getState();
  t.commitDepth++;
  try {
    const {
      nextTree: n
    } = t;
    if (n == null)
      return;
    t.previousTree = t.currentTree, t.currentTree = n, t.nextTree = null, Ys(e), t.previousTree != null ? t.graphsByVersion.delete(t.previousTree.version) : ie("Ended batch with no previous state, which is unexpected", "recoil"), t.previousTree = null, F("recoil_memory_managament_2020") && n == null && _o(e);
  } finally {
    t.commitDepth--;
  }
}
function Js({
  setNotifyBatcherOfChange: e
}) {
  const t = on(), [, n] = qs([]);
  return e(() => n({})), Ft(() => (e(() => n({})), () => {
    e(() => {
    });
  }), [e]), Ft(() => {
    Pr.enqueueExecution("Batcher", () => {
      Xs(t.current);
    });
  }), null;
}
function Qs(e, t) {
  const n = ho();
  return t({
    set: (o, r) => {
      const a = n.currentTree, i = Os(e, a, o.key, r), u = new Set(i.keys()), d = a.nonvalidatedAtoms.clone();
      for (const f of u)
        d.delete(f);
      n.currentTree = {
        ...a,
        dirtyAtoms: Ms(a.dirtyAtoms, u),
        atomValues: Ws(a.atomValues, i),
        // NB: PLEASE un-export applyAtomValueWrites when deleting this code
        nonvalidatedAtoms: d
      };
    },
    setUnvalidatedAtomValues: (o) => {
      o.forEach((r, a) => {
        n.currentTree = Bs(n.currentTree, a, r);
      });
    }
  }), n;
}
function ei(e) {
  const t = Ks(e), n = t.getStore_INTERNAL().getState();
  return t.retain(), n.nodeCleanupFunctions.forEach((o) => o()), n.nodeCleanupFunctions.clear(), n;
}
let En = 0;
function ti({
  initializeState_DEPRECATED: e,
  initializeState: t,
  store_INTERNAL: n,
  // For use with React "context bridging"
  children: o
}) {
  let r;
  const a = (N) => {
    const E = r.current.graphsByVersion;
    if (E.has(N))
      return j(E.get(N));
    const $ = zs();
    return E.set(N, $), $;
  }, i = (N, E) => {
    if (E == null) {
      const {
        transactionSubscriptions: $
      } = g.current.getState(), Q = En++;
      return $.set(Q, N), {
        release: () => {
          $.delete(Q);
        }
      };
    } else {
      const {
        nodeTransactionSubscriptions: $
      } = g.current.getState();
      $.has(E) || $.set(E, /* @__PURE__ */ new Map());
      const Q = En++;
      return j($.get(E)).set(Q, N), {
        release: () => {
          const te = $.get(E);
          te && (te.delete(Q), te.size === 0 && $.delete(E));
        }
      };
    }
  }, u = (N) => {
    wn(g.current);
    for (const E of Object.keys(N))
      j(g.current.getState().nextTree).transactionMetadata[E] = N[E];
  }, d = (N) => {
    wn(g.current);
    const E = j(r.current.nextTree);
    let $;
    try {
      Wt = !0, $ = N(E);
    } finally {
      Wt = !1;
    }
    $ !== E && (r.current.nextTree = $, po().early && Ro(g.current, r.current, $), j(f.current)());
  }, f = js(null), p = Gs((N) => {
    f.current = N;
  }, [f]), g = bn(() => n ?? {
    storeID: vo(),
    getState: () => r.current,
    replaceState: d,
    getGraph: a,
    subscribeToTransactions: i,
    addTransactionMetadata: u
  });
  n != null && (g.current = n), r = bn(() => e != null ? Qs(g.current, e) : t != null ? ei(t) : ho());
  const I = Hs(() => Dt == null ? void 0 : Dt(r, () => r.current.currentTree.version), [r]);
  return Ft(() => {
    const N = g.current;
    for (const E of new Set(N.getState().knownAtoms))
      Ps(N, E, "get");
    return () => {
      for (const E of N.getState().knownAtoms)
        Us(N, E);
    };
  }, [g]), /* @__PURE__ */ Z.createElement(So.Provider, {
    value: g
  }, /* @__PURE__ */ Z.createElement(go.Provider, {
    value: I
  }, /* @__PURE__ */ Z.createElement(Js, {
    setNotifyBatcherOfChange: p
  }), o));
}
function ni(e) {
  const {
    override: t,
    ...n
  } = e, o = on();
  return t === !1 && o.current !== yo ? e.children : /* @__PURE__ */ Z.createElement(ti, n);
}
var rn = {
  RecoilRoot: ni,
  useStoreRef: on,
  useRecoilMutableSource: Zs
};
function oi(e, t) {
  if (e === t)
    return !0;
  if (e.length !== t.length)
    return !1;
  for (let n = 0, o = e.length; n < o; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
var ri = oi;
const {
  useEffect: ai,
  useRef: si
} = Z;
function ii(e) {
  const t = si();
  return ai(() => {
    t.current = e;
  }), t.current;
}
var li = ii;
const {
  useStoreRef: ci
} = rn, {
  SUSPENSE_TIMEOUT_MS: ui
} = Be, {
  updateRetainCount: Ke
} = Be, {
  RetentionZone: di
} = Xt, {
  useEffect: fi,
  useRef: hi
} = Z, {
  isSSR: Tn
} = nn;
function vi(e) {
  if (F("recoil_memory_managament_2020"))
    return pi(e);
}
function pi(e) {
  const n = (Array.isArray(e) ? e : [e]).map((i) => i instanceof di ? i : i.key), o = ci();
  fi(() => {
    if (!F("recoil_memory_managament_2020"))
      return;
    const i = o.current;
    if (r.current && !Tn)
      window.clearTimeout(r.current), r.current = null;
    else
      for (const u of n)
        Ke(i, u, 1);
    return () => {
      for (const u of n)
        Ke(i, u, -1);
    };
  }, [o, ...n]);
  const r = hi(), a = li(n);
  if (!Tn && (a === void 0 || !ri(a, n))) {
    const i = o.current;
    for (const u of n)
      Ke(i, u, 1);
    if (a)
      for (const u of a)
        Ke(i, u, -1);
    r.current && window.clearTimeout(r.current), r.current = window.setTimeout(() => {
      r.current = null;
      for (const u of n)
        Ke(i, u, -1);
    }, ui);
  }
}
var _i = vi;
function mi() {
  return "<component name not available>";
}
var bt = mi;
const {
  DEFAULT_VALUE: yi
} = ue, {
  currentRendererSupportsUseSyncExternalStore: Si,
  reactMode: tt,
  useMutableSource: gi,
  useSyncExternalStore: Ri
} = Ht, {
  useRecoilMutableSource: bi,
  useStoreRef: Ce
} = rn, {
  isRecoilValue: bc
} = Ae, {
  getRecoilValueAsLoadable: wt,
  setRecoilValue: bo,
  subscribeToRecoilValue: Et
} = ge, {
  useCallback: ve,
  useEffect: dt,
  useMemo: wi,
  useRef: wo,
  useState: Eo
} = Z, {
  isSSR: Ei
} = nn;
function Ti(e, t, n) {
  if (e.state === "hasValue")
    return e.contents;
  throw e.state === "loading" ? new Promise((r) => {
    const a = n.current.getState().suspendedComponentResolvers;
    a.add(r), Ei && K(e.contents) && e.contents.finally(() => {
      a.delete(r);
    });
  }) : e.state === "hasError" ? e.contents : M(`Invalid value of loadable atom "${t.key}"`);
}
function Ai(e) {
  const t = Ce(), n = bt(), o = ve(() => {
    var u;
    const d = t.current, f = d.getState(), p = tt().early && (u = f.nextTree) !== null && u !== void 0 ? u : f.currentTree;
    return {
      loadable: wt(d, e, p),
      key: e.key
    };
  }, [t, e]), r = ve((u) => {
    let d;
    return () => {
      var f, p;
      const g = u();
      return (f = d) !== null && f !== void 0 && f.loadable.is(g.loadable) && ((p = d) === null || p === void 0 ? void 0 : p.key) === g.key ? d : (d = g, g);
    };
  }, []), a = wi(() => r(o), [o, r]), i = ve((u) => {
    const d = t.current;
    return Et(d, e, u, n).release;
  }, [t, e, n]);
  return Ri(
    i,
    a,
    // getSnapshot()
    a
    // getServerSnapshot() for SSR support
  ).loadable;
}
function Li(e) {
  const t = Ce(), n = ve(() => {
    var f;
    const p = t.current, g = p.getState(), I = tt().early && (f = g.nextTree) !== null && f !== void 0 ? f : g.currentTree;
    return wt(p, e, I);
  }, [t, e]), o = ve(() => n(), [n]), r = bt(), a = ve((f, p) => {
    const g = t.current;
    return Et(g, e, () => {
      if (!F("recoil_suppress_rerender_in_callback"))
        return p();
      const N = n();
      d.current.is(N) || p(), d.current = N;
    }, r).release;
  }, [t, e, r, n]), i = bi();
  if (i == null)
    throw M("Recoil hooks must be used in components contained within a <RecoilRoot> component.");
  const u = gi(i, o, a), d = wo(u);
  return dt(() => {
    d.current = u;
  }), u;
}
function An(e) {
  const t = Ce(), n = bt(), o = ve(() => {
    var d;
    const f = t.current, p = f.getState(), g = tt().early && (d = p.nextTree) !== null && d !== void 0 ? d : p.currentTree;
    return wt(f, e, g);
  }, [t, e]), r = ve(() => ({
    loadable: o(),
    key: e.key
  }), [o, e.key]), a = ve((d) => {
    const f = r();
    return d.loadable.is(f.loadable) && d.key === f.key ? d : f;
  }, [r]);
  dt(() => {
    const d = Et(t.current, e, (f) => {
      u(a);
    }, n);
    return u(a), d.release;
  }, [n, e, t, a]);
  const [i, u] = Eo(r);
  return i.key !== e.key ? r().loadable : i.loadable;
}
function Ni(e) {
  const t = Ce(), [, n] = Eo([]), o = bt(), r = ve(() => {
    var u;
    const d = t.current, f = d.getState(), p = tt().early && (u = f.nextTree) !== null && u !== void 0 ? u : f.currentTree;
    return wt(d, e, p);
  }, [t, e]), a = r(), i = wo(a);
  return dt(() => {
    i.current = a;
  }), dt(() => {
    const u = t.current, d = u.getState(), f = Et(u, e, (g) => {
      var I;
      if (!F("recoil_suppress_rerender_in_callback"))
        return n([]);
      const N = r();
      (I = i.current) !== null && I !== void 0 && I.is(N) || n(N), i.current = N;
    }, o);
    if (d.nextTree)
      u.getState().queuedComponentCallbacks_DEPRECATED.push(() => {
        i.current = null, n([]);
      });
    else {
      var p;
      if (!F("recoil_suppress_rerender_in_callback"))
        return n([]);
      const g = r();
      (p = i.current) !== null && p !== void 0 && p.is(g) || n(g), i.current = g;
    }
    return f.release;
  }, [o, r, e, t]), a;
}
function Ci(e) {
  return F("recoil_memory_managament_2020") && _i(e), {
    TRANSITION_SUPPORT: An,
    // Recoil will attemp to detect if `useSyncExternalStore()` is supported with
    // `reactMode()` before calling it.  However, sometimes the host React
    // environment supports it but uses additional React renderers (such as with
    // `react-three-fiber`) which do not.  While this is technically a user issue
    // by using a renderer with React 18+ that doesn't fully support React 18 we
    // don't want to break users if it can be avoided. As the current renderer can
    // change at runtime, we need to dynamically check and fallback if necessary.
    SYNC_EXTERNAL_STORE: Si() ? Ai : An,
    MUTABLE_SOURCE: Li,
    LEGACY: Ni
  }[tt().mode](e);
}
function To(e) {
  const t = Ce(), n = Ci(e);
  return Ti(n, e, t);
}
function Ao(e) {
  const t = Ce();
  return ve((n) => {
    bo(t.current, e, n);
  }, [t, e]);
}
function Vi(e) {
  const t = Ce();
  return ve(() => {
    bo(t.current, e, yi);
  }, [t, e]);
}
function $i(e) {
  return [To(e), Ao(e)];
}
var Mi = {
  useRecoilState: $i,
  useRecoilValue: To,
  useResetRecoilState: Vi,
  useSetRecoilState: Ao
};
const {
  batchUpdates: ki
} = tn, {
  DEFAULT_VALUE: Di,
  getNode: Ii
} = ue, {
  AbstractRecoilValue: Ui,
  setRecoilValueLoadable: xi
} = ge, {
  cloneSnapshot: wc
} = Rt, {
  useCallback: Ec,
  useEffect: Tc,
  useRef: Ac,
  useState: Lc
} = Z;
function Pi(e, t) {
  var n;
  const o = e.getState(), r = (n = o.nextTree) !== null && n !== void 0 ? n : o.currentTree, a = t.getStore_INTERNAL().getState().currentTree;
  ki(() => {
    const i = /* @__PURE__ */ new Set();
    for (const f of [r.atomValues.keys(), a.atomValues.keys()])
      for (const p of f) {
        var u, d;
        ((u = r.atomValues.get(p)) === null || u === void 0 ? void 0 : u.contents) !== ((d = a.atomValues.get(p)) === null || d === void 0 ? void 0 : d.contents) && Ii(p).shouldRestoreFromSnapshots && i.add(p);
      }
    i.forEach((f) => {
      xi(e, new Ui(f), a.atomValues.has(f) ? j(a.atomValues.get(f)) : Di);
    }), e.replaceState((f) => ({
      ...f,
      stateID: t.getID()
    }));
  });
}
var Oi = {
  gotoSnapshot: Pi
};
const {
  useMemo: Nc
} = Z, {
  loadableWithValue: Bi
} = Xe, {
  initializeNode: zi
} = Ne, {
  DEFAULT_VALUE: Fi,
  getNode: Wi
} = ue, {
  copyTreeState: Ki,
  getRecoilValueAsLoadable: Gi,
  invalidateDownstreams: Hi,
  writeLoadableToTreeState: ji
} = ge;
function Ln(e) {
  return Wi(e.key).nodeType === "atom";
}
class qi {
  constructor(t, n) {
    V(this, "_store", void 0), V(this, "_treeState", void 0), V(this, "_changes", void 0), V(this, "get", (o) => {
      if (this._changes.has(o.key))
        return this._changes.get(o.key);
      if (!Ln(o))
        throw M("Reading selectors within atomicUpdate is not supported");
      const r = Gi(this._store, o, this._treeState);
      if (r.state === "hasValue")
        return r.contents;
      throw r.state === "hasError" ? r.contents : M(`Expected Recoil atom ${o.key} to have a value, but it is in a loading state.`);
    }), V(this, "set", (o, r) => {
      if (!Ln(o))
        throw M("Setting selectors within atomicUpdate is not supported");
      if (typeof r == "function") {
        const a = this.get(o);
        this._changes.set(o.key, r(a));
      } else
        zi(this._store, o.key, "set"), this._changes.set(o.key, r);
    }), V(this, "reset", (o) => {
      this.set(o, Fi);
    }), this._store = t, this._treeState = n, this._changes = /* @__PURE__ */ new Map();
  }
  // Allow destructing
  // eslint-disable-next-line fb-www/extra-arrow-initializer
  newTreeState_INTERNAL() {
    if (this._changes.size === 0)
      return this._treeState;
    const t = Ki(this._treeState);
    for (const [n, o] of this._changes)
      ji(t, n, Bi(o));
    return Hi(this._store, t), t;
  }
}
function Zi(e) {
  return (t) => {
    e.replaceState((n) => {
      const o = new qi(e, n);
      return t(o), o.newTreeState_INTERNAL();
    });
  };
}
var Yi = {
  atomicUpdater: Zi
}, Xi = Yi.atomicUpdater, Lo = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  atomicUpdater: Xi
});
function Ji(e, t) {
  if (!e)
    throw new Error(t);
}
var Qi = Ji, qe = Qi;
const {
  atomicUpdater: el
} = Lo, {
  batchUpdates: tl
} = tn, {
  DEFAULT_VALUE: nl
} = ue, {
  refreshRecoilValue: ol,
  setRecoilValue: Nn
} = ge, {
  cloneSnapshot: rl
} = Rt, {
  gotoSnapshot: al
} = Oi, {
  useCallback: Cc
} = Z;
class No {
}
const sl = new No();
function il(e, t, n, o) {
  let r = sl, a;
  if (tl(() => {
    const u = "useRecoilCallback() expects a function that returns a function: it accepts a function of the type (RecoilInterface) => (Args) => ReturnType and returns a callback function (Args) => ReturnType, where RecoilInterface is an object {snapshot, set, ...} and Args and ReturnType are the argument and return types of the callback you want to create.  Please see the docs at recoiljs.org for details.";
    if (typeof t != "function")
      throw M(u);
    const d = jn({
      ...o ?? {},
      // flowlint-line unclear-type:off
      // $FlowFixMe[missing-local-annot]
      set: (p, g) => Nn(e, p, g),
      // $FlowFixMe[missing-local-annot]
      reset: (p) => Nn(e, p, nl),
      // $FlowFixMe[missing-local-annot]
      refresh: (p) => ol(e, p),
      gotoSnapshot: (p) => al(e, p),
      transact_UNSTABLE: (p) => el(e)(p)
    }, {
      snapshot: () => {
        const p = rl(e);
        return a = p.retain(), p;
      }
    }), f = t(d);
    if (typeof f != "function")
      throw M(u);
    r = f(...n);
  }), r instanceof No && qe(!1), K(r))
    r = r.finally(() => {
      var u;
      (u = a) === null || u === void 0 || u();
    });
  else {
    var i;
    (i = a) === null || i === void 0 || i();
  }
  return r;
}
var ll = {
  recoilCallback: il
};
const {
  useCallback: Vc
} = Z, {
  atomicUpdater: $c
} = Lo, {
  useMemo: Mc
} = Z;
class cl {
  constructor(t) {
    V(this, "value", void 0), this.value = t;
  }
}
var ul = {
  WrappedValue: cl
}, dl = ul.WrappedValue, Co = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  WrappedValue: dl
});
class Cn extends Error {
}
class fl {
  // $FlowIssue[unclear-type]
  constructor(t) {
    var n, o, r;
    V(this, "_name", void 0), V(this, "_numLeafs", void 0), V(this, "_root", void 0), V(this, "_onHit", void 0), V(this, "_onSet", void 0), V(this, "_mapNodeValue", void 0), this._name = t == null ? void 0 : t.name, this._numLeafs = 0, this._root = null, this._onHit = (n = t == null ? void 0 : t.onHit) !== null && n !== void 0 ? n : () => {
    }, this._onSet = (o = t == null ? void 0 : t.onSet) !== null && o !== void 0 ? o : () => {
    }, this._mapNodeValue = (r = t == null ? void 0 : t.mapNodeValue) !== null && r !== void 0 ? r : (a) => a;
  }
  size() {
    return this._numLeafs;
  }
  // $FlowIssue[unclear-type]
  root() {
    return this._root;
  }
  get(t, n) {
    var o;
    return (o = this.getLeafNode(t, n)) === null || o === void 0 ? void 0 : o.value;
  }
  getLeafNode(t, n) {
    if (this._root == null)
      return;
    let o = this._root;
    for (; o; ) {
      if (n == null || n.onNodeVisit(o), o.type === "leaf")
        return this._onHit(o), o;
      const r = this._mapNodeValue(t(o.nodeKey));
      o = o.branches.get(r);
    }
  }
  set(t, n, o) {
    const r = () => {
      var a, i, u, d;
      let f, p;
      for (const [Q, te] of t) {
        var g, I, N;
        const w = this._root;
        if ((w == null ? void 0 : w.type) === "leaf")
          throw this.invalidCacheError();
        const U = f;
        if (f = U ? U.branches.get(p) : w, f = (g = f) !== null && g !== void 0 ? g : {
          type: "branch",
          nodeKey: Q,
          parent: U,
          branches: /* @__PURE__ */ new Map(),
          branchKey: p
        }, f.type !== "branch" || f.nodeKey !== Q)
          throw this.invalidCacheError();
        U == null || U.branches.set(p, f), o == null || (I = o.onNodeVisit) === null || I === void 0 || I.call(o, f), p = this._mapNodeValue(te), this._root = (N = this._root) !== null && N !== void 0 ? N : f;
      }
      const E = f ? (a = f) === null || a === void 0 ? void 0 : a.branches.get(p) : this._root;
      if (E != null && (E.type !== "leaf" || E.branchKey !== p))
        throw this.invalidCacheError();
      const $ = {
        type: "leaf",
        value: n,
        parent: f,
        branchKey: p
      };
      (i = f) === null || i === void 0 || i.branches.set(p, $), this._root = (u = this._root) !== null && u !== void 0 ? u : $, this._numLeafs++, this._onSet($), o == null || (d = o.onNodeVisit) === null || d === void 0 || d.call(o, $);
    };
    try {
      r();
    } catch (a) {
      if (a instanceof Cn)
        this.clear(), r();
      else
        throw a;
    }
  }
  // Returns true if leaf was actually deleted from the tree
  delete(t) {
    const n = this.root();
    if (!n)
      return !1;
    if (t === n)
      return this._root = null, this._numLeafs = 0, !0;
    let o = t.parent, r = t.branchKey;
    for (; o; ) {
      var a;
      if (o.branches.delete(r), o === n)
        return o.branches.size === 0 ? (this._root = null, this._numLeafs = 0) : this._numLeafs--, !0;
      if (o.branches.size > 0)
        break;
      r = (a = o) === null || a === void 0 ? void 0 : a.branchKey, o = o.parent;
    }
    for (; o !== n; o = o.parent)
      if (o == null)
        return !1;
    return this._numLeafs--, !0;
  }
  clear() {
    this._numLeafs = 0, this._root = null;
  }
  invalidCacheError() {
    throw ie("Invalid cache values.  This happens when selectors do not return consistent values for the same input dependency values.  That may also be caused when using Fast Refresh to change a selector implementation.  Resetting cache." + (this._name != null ? ` - ${this._name}` : "")), new Cn();
  }
}
var hl = {
  TreeCache: fl
}, vl = hl.TreeCache, Vo = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  TreeCache: vl
});
class pl {
  constructor(t) {
    var n;
    V(this, "_maxSize", void 0), V(this, "_size", void 0), V(this, "_head", void 0), V(this, "_tail", void 0), V(this, "_map", void 0), V(this, "_keyMapper", void 0), this._maxSize = t.maxSize, this._size = 0, this._head = null, this._tail = null, this._map = /* @__PURE__ */ new Map(), this._keyMapper = (n = t.mapKey) !== null && n !== void 0 ? n : (o) => o;
  }
  head() {
    return this._head;
  }
  tail() {
    return this._tail;
  }
  size() {
    return this._size;
  }
  maxSize() {
    return this._maxSize;
  }
  has(t) {
    return this._map.has(this._keyMapper(t));
  }
  get(t) {
    const n = this._keyMapper(t), o = this._map.get(n);
    if (o)
      return this.set(t, o.value), o.value;
  }
  set(t, n) {
    const o = this._keyMapper(t);
    this._map.get(o) && this.delete(t);
    const a = this.head(), i = {
      key: t,
      right: a,
      left: null,
      value: n
    };
    a ? a.left = i : this._tail = i, this._map.set(o, i), this._head = i, this._size++, this._maybeDeleteLRU();
  }
  _maybeDeleteLRU() {
    this.size() > this.maxSize() && this.deleteLru();
  }
  deleteLru() {
    const t = this.tail();
    t && this.delete(t.key);
  }
  delete(t) {
    const n = this._keyMapper(t);
    if (!this._size || !this._map.has(n))
      return;
    const o = j(this._map.get(n)), r = o.right, a = o.left;
    r && (r.left = o.left), a && (a.right = o.right), o === this.head() && (this._head = r), o === this.tail() && (this._tail = a), this._map.delete(n), this._size--;
  }
  clear() {
    this._size = 0, this._head = null, this._tail = null, this._map = /* @__PURE__ */ new Map();
  }
}
var _l = {
  LRUCache: pl
}, ml = _l.LRUCache, $o = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  LRUCache: ml
});
const {
  LRUCache: yl
} = $o, {
  TreeCache: Sl
} = Vo;
function gl({
  name: e,
  maxSize: t,
  mapNodeValue: n = (o) => o
}) {
  const o = new yl({
    maxSize: t
  }), r = new Sl({
    name: e,
    mapNodeValue: n,
    onHit: (a) => {
      o.set(a, !0);
    },
    onSet: (a) => {
      const i = o.tail();
      o.set(a, !0), i && r.size() > t && r.delete(i.key);
    }
  });
  return r;
}
var Vn = gl;
function _e(e, t, n) {
  if (typeof e == "string" && !e.includes('"') && !e.includes("\\"))
    return `"${e}"`;
  switch (typeof e) {
    case "undefined":
      return "";
    case "boolean":
      return e ? "true" : "false";
    case "number":
    case "symbol":
      return String(e);
    case "string":
      return JSON.stringify(e);
    case "function":
      if ((t == null ? void 0 : t.allowFunctions) !== !0)
        throw M("Attempt to serialize function in a Recoil cache key");
      return `__FUNCTION(${e.name})__`;
  }
  if (e === null)
    return "null";
  if (typeof e != "object") {
    var o;
    return (o = JSON.stringify(e)) !== null && o !== void 0 ? o : "";
  }
  if (K(e))
    return "__PROMISE__";
  if (Array.isArray(e))
    return `[${e.map((r, a) => _e(r, t, a.toString()))}]`;
  if (typeof e.toJSON == "function")
    return _e(e.toJSON(n), t, n);
  if (e instanceof Map) {
    const r = {};
    for (const [a, i] of e)
      r[typeof a == "string" ? a : _e(a, t)] = i;
    return _e(r, t, n);
  }
  return e instanceof Set ? _e(
    // $FlowFixMe[missing-local-annot]
    Array.from(e).sort((r, a) => _e(r, t).localeCompare(_e(a, t))),
    t,
    n
  ) : Symbol !== void 0 && e[Symbol.iterator] != null && typeof e[Symbol.iterator] == "function" ? _e(Array.from(e), t, n) : `{${Object.keys(e).filter((r) => e[r] !== void 0).sort().map((r) => `${_e(r, t)}:${_e(e[r], t, r)}`).join(",")}}`;
}
function Rl(e, t = {
  allowFunctions: !1
}) {
  return _e(e, t);
}
var an = Rl;
const {
  TreeCache: bl
} = Vo, rt = {
  equality: "reference",
  eviction: "keep-all",
  maxSize: 1 / 0
};
function wl({
  equality: e = rt.equality,
  eviction: t = rt.eviction,
  maxSize: n = rt.maxSize
} = rt, o) {
  const r = El(e);
  return Tl(t, n, r, o);
}
function El(e) {
  switch (e) {
    case "reference":
      return (t) => t;
    case "value":
      return (t) => an(t);
  }
  throw M(`Unrecognized equality policy ${e}`);
}
function Tl(e, t, n, o) {
  switch (e) {
    case "keep-all":
      return new bl({
        name: o,
        mapNodeValue: n
      });
    case "lru":
      return Vn({
        name: o,
        maxSize: j(t),
        mapNodeValue: n
      });
    case "most-recent":
      return Vn({
        name: o,
        maxSize: 1,
        mapNodeValue: n
      });
  }
  throw M(`Unrecognized eviction policy ${e}`);
}
var Al = wl;
const {
  isLoadable: Ll,
  loadableWithError: at,
  loadableWithPromise: Nl,
  loadableWithValue: It
} = Xe, {
  WrappedValue: Mo
} = Co, {
  getNodeLoadable: st,
  peekNodeLoadable: Cl,
  setNodeValue: Vl
} = Ne, {
  saveDepsToStore: $l
} = Qe, {
  DEFAULT_VALUE: Ml,
  getConfigDeletionHandler: kl,
  getNode: Dl,
  registerNode: $n
} = ue, {
  isRecoilValue: Il
} = Ae, {
  markRecoilValueModified: Mn
} = ge, {
  retainedByOptionWithDefault: Ul
} = Be, {
  recoilCallback: xl
} = ll;
class ko {
}
const Ge = new ko(), He = [], it = /* @__PURE__ */ new Map(), Pl = /* @__PURE__ */ (() => {
  let e = 0;
  return () => e++;
})();
function Do(e) {
  let t = null;
  const {
    key: n,
    get: o,
    cachePolicy_UNSTABLE: r
  } = e, a = e.set != null ? e.set : void 0, i = /* @__PURE__ */ new Set(), u = Al(r ?? {
    equality: "reference",
    eviction: "keep-all"
  }, n), d = Ul(e.retainedBy_UNSTABLE), f = /* @__PURE__ */ new Map();
  let p = 0;
  function g() {
    return !F("recoil_memory_managament_2020") || p > 0;
  }
  function I(c) {
    return c.getState().knownSelectors.add(n), p++, () => {
      p--;
    };
  }
  function N() {
    return kl(n) !== void 0 && !g();
  }
  function E(c, v, _, C, R) {
    fe(v, C, R), $(c, _);
  }
  function $(c, v) {
    le(c, v) && X(c), te(v, !0);
  }
  function Q(c, v) {
    le(c, v) && (j(J(c)).stateVersions.clear(), te(v, !1));
  }
  function te(c, v) {
    const _ = it.get(c);
    if (_ != null) {
      for (const C of _)
        Mn(C, j(t));
      v && it.delete(c);
    }
  }
  function w(c, v) {
    let _ = it.get(v);
    _ == null && it.set(v, _ = /* @__PURE__ */ new Set()), _.add(c);
  }
  function U(c, v, _, C, R, k) {
    return v.then((b) => {
      if (!g())
        throw X(c), Ge;
      const P = It(b);
      return E(c, _, R, P, C), b;
    }).catch((b) => {
      if (!g())
        throw X(c), Ge;
      if (K(b))
        return Y(c, b, _, C, R, k);
      const P = at(b);
      throw E(c, _, R, P, C), b;
    });
  }
  function Y(c, v, _, C, R, k) {
    return v.then((b) => {
      if (!g())
        throw X(c), Ge;
      k.loadingDepKey != null && k.loadingDepPromise === v ? _.atomValues.set(k.loadingDepKey, It(b)) : c.getState().knownSelectors.forEach((O) => {
        _.atomValues.delete(O);
      });
      const P = q(c, _);
      if (P && P.state !== "loading") {
        if ((le(c, R) || J(c) == null) && $(c, R), P.state === "hasValue")
          return P.contents;
        throw P.contents;
      }
      if (!le(c, R)) {
        const O = ye(c, _);
        if (O != null)
          return O.loadingLoadable.contents;
      }
      const [W, ee] = G(c, _, R);
      if (W.state !== "loading" && E(c, _, R, W, ee), W.state === "hasError")
        throw W.contents;
      return W.contents;
    }).catch((b) => {
      if (b instanceof ko)
        throw Ge;
      if (!g())
        throw X(c), Ge;
      const P = at(b);
      throw E(c, _, R, P, C), b;
    });
  }
  function z(c, v, _, C) {
    var R, k, b, P;
    if (le(c, C) || v.version === ((R = c.getState()) === null || R === void 0 || (k = R.currentTree) === null || k === void 0 ? void 0 : k.version) || v.version === ((b = c.getState()) === null || b === void 0 || (P = b.nextTree) === null || P === void 0 ? void 0 : P.version)) {
      var W, ee, O;
      $l(n, _, c, (W = (ee = c.getState()) === null || ee === void 0 || (O = ee.nextTree) === null || O === void 0 ? void 0 : O.version) !== null && W !== void 0 ? W : c.getState().currentTree.version);
    }
    for (const ne of _)
      i.add(ne);
  }
  function G(c, v, _) {
    let C = !0, R = !0;
    const k = () => {
      R = !1;
    };
    let b, P = !1, W;
    const ee = {
      loadingDepKey: null,
      loadingDepPromise: null
    }, O = /* @__PURE__ */ new Map();
    function ne({
      key: ce
    }) {
      const ae = st(c, v, ce);
      switch (O.set(ce, ae), C || (z(c, v, new Set(O.keys()), _), Q(c, _)), ae.state) {
        case "hasValue":
          return ae.contents;
        case "hasError":
          throw ae.contents;
        case "loading":
          throw ee.loadingDepKey = ce, ee.loadingDepPromise = ae.contents, ae.contents;
      }
      throw M("Invalid Loadable state");
    }
    const me = (ce) => (...ae) => {
      if (R)
        throw M("Callbacks from getCallback() should only be called asynchronously after the selector is evalutated.  It can be used for selectors to return objects with callbacks that can work with Recoil state without a subscription.");
      return t == null && qe(!1), xl(
        c,
        ce,
        ae,
        {
          node: t
        }
        // flowlint-line unclear-type:off
      );
    };
    try {
      b = o({
        get: ne,
        getCallback: me
      }), b = Il(b) ? ne(b) : b, Ll(b) && (b.state === "hasError" && (P = !0), b = b.contents), K(b) ? b = U(c, b, v, O, _, ee).finally(k) : k(), b = b instanceof Mo ? b.value : b;
    } catch (ce) {
      b = ce, K(b) ? b = Y(c, b, v, O, _, ee).finally(k) : (P = !0, k());
    }
    return P ? W = at(b) : K(b) ? W = Nl(b) : W = It(b), C = !1, $e(c, _, O), z(c, v, new Set(O.keys()), _), [W, O];
  }
  function q(c, v) {
    let _ = v.atomValues.get(n);
    if (_ != null)
      return _;
    const C = /* @__PURE__ */ new Set();
    try {
      _ = u.get((k) => (typeof k != "string" && qe(!1), st(c, v, k).contents), {
        onNodeVisit: (k) => {
          k.type === "branch" && k.nodeKey !== n && C.add(k.nodeKey);
        }
      });
    } catch (k) {
      throw M(`Problem with cache lookup for selector "${n}": ${k.message}`);
    }
    if (_) {
      var R;
      v.atomValues.set(n, _), z(c, v, C, (R = J(c)) === null || R === void 0 ? void 0 : R.executionID);
    }
    return _;
  }
  function re(c, v) {
    const _ = q(c, v);
    if (_ != null)
      return X(c), _;
    const C = ye(c, v);
    if (C != null) {
      var R;
      return ((R = C.loadingLoadable) === null || R === void 0 ? void 0 : R.state) === "loading" && w(c, C.executionID), C.loadingLoadable;
    }
    const k = Pl(), [b, P] = G(c, v, k);
    return b.state === "loading" ? (de(c, k, b, P, v), w(c, k)) : (X(c), fe(v, b, P)), b;
  }
  function ye(c, v) {
    const _ = co([f.has(c) ? [j(f.get(c))] : [], _t(Jt(f, ([R]) => R !== c), ([, R]) => R)]);
    function C(R) {
      for (const [k, b] of R)
        if (!st(c, v, k).is(b))
          return !0;
      return !1;
    }
    for (const R of _) {
      if (
        // If this execution was already checked to be valid with this version
        // of state, then let's use it!
        R.stateVersions.get(v.version) || // If the deps for the execution match our current state, then it's valid
        !C(R.depValuesDiscoveredSoFarDuringAsyncWork)
      )
        return R.stateVersions.set(v.version, !0), R;
      R.stateVersions.set(v.version, !1);
    }
  }
  function J(c) {
    return f.get(c);
  }
  function de(c, v, _, C, R) {
    f.set(c, {
      depValuesDiscoveredSoFarDuringAsyncWork: C,
      executionID: v,
      loadingLoadable: _,
      stateVersions: /* @__PURE__ */ new Map([[R.version, !0]])
    });
  }
  function $e(c, v, _) {
    if (le(c, v)) {
      const C = J(c);
      C != null && (C.depValuesDiscoveredSoFarDuringAsyncWork = _);
    }
  }
  function X(c) {
    f.delete(c);
  }
  function le(c, v) {
    var _;
    return v === ((_ = J(c)) === null || _ === void 0 ? void 0 : _.executionID);
  }
  function we(c) {
    return Array.from(c.entries()).map(([v, _]) => [v, _.contents]);
  }
  function fe(c, v, _) {
    c.atomValues.set(n, v);
    try {
      u.set(we(_), v);
    } catch (C) {
      throw M(`Problem with setting cache for selector "${n}": ${C.message}`);
    }
  }
  function Se(c) {
    if (He.includes(n)) {
      const v = `Recoil selector has circular dependencies: ${He.slice(He.indexOf(n)).join(" → ")}`;
      return at(M(v));
    }
    He.push(n);
    try {
      return c();
    } finally {
      He.pop();
    }
  }
  function Me(c, v) {
    const _ = v.atomValues.get(n);
    return _ ?? u.get((C) => {
      var R;
      return typeof C != "string" && qe(!1), (R = Cl(c, v, C)) === null || R === void 0 ? void 0 : R.contents;
    });
  }
  function ke(c, v) {
    return Se(() => re(c, v));
  }
  function x(c) {
    c.atomValues.delete(n);
  }
  function B(c, v) {
    t == null && qe(!1);
    for (const C of i) {
      var _;
      const R = Dl(C);
      (_ = R.clearCache) === null || _ === void 0 || _.call(R, c, v);
    }
    i.clear(), x(v), u.clear(), Mn(c, t);
  }
  return a != null ? t = $n({
    key: n,
    nodeType: "selector",
    peek: Me,
    get: ke,
    set: (v, _, C) => {
      let R = !1;
      const k = /* @__PURE__ */ new Map();
      function b({
        key: O
      }) {
        if (R)
          throw M("Recoil: Async selector sets are not currently supported.");
        const ne = st(v, _, O);
        if (ne.state === "hasValue")
          return ne.contents;
        if (ne.state === "loading") {
          const me = `Getting value of asynchronous atom or selector "${O}" in a pending state while setting selector "${n}" is not yet supported.`;
          throw ie(), M(me);
        } else
          throw ne.contents;
      }
      function P(O, ne) {
        if (R) {
          const ae = "Recoil: Async selector sets are not currently supported.";
          throw ie(), M(ae);
        }
        const me = typeof ne == "function" ? (
          // cast to any because we can't restrict type S from being a function itself without losing support for opaque types
          // flowlint-next-line unclear-type:off
          ne(b(O))
        ) : ne;
        Vl(v, _, O.key, me).forEach((ae, nt) => k.set(nt, ae));
      }
      function W(O) {
        P(O, Ml);
      }
      const ee = a({
        set: P,
        get: b,
        reset: W
      }, C);
      if (ee !== void 0)
        throw K(ee) ? M("Recoil: Async selector sets are not currently supported.") : M("Recoil: selector set should be a void function.");
      return R = !0, k;
    },
    init: I,
    invalidate: x,
    clearCache: B,
    shouldDeleteConfigOnRelease: N,
    dangerouslyAllowMutability: e.dangerouslyAllowMutability,
    shouldRestoreFromSnapshots: !1,
    retainedBy: d
  }) : t = $n({
    key: n,
    nodeType: "selector",
    peek: Me,
    get: ke,
    init: I,
    invalidate: x,
    clearCache: B,
    shouldDeleteConfigOnRelease: N,
    dangerouslyAllowMutability: e.dangerouslyAllowMutability,
    shouldRestoreFromSnapshots: !1,
    retainedBy: d
  });
}
Do.value = (e) => new Mo(e);
var Oe = Do;
const {
  isLoadable: Ol,
  loadableWithError: Ut,
  loadableWithPromise: xt,
  loadableWithValue: Ie
} = Xe, {
  WrappedValue: Io
} = Co, {
  peekNodeInfo: Bl
} = Ne, {
  DEFAULT_VALUE: Ee,
  DefaultValue: Re,
  getConfigDeletionHandler: Uo,
  registerNode: zl,
  setConfigDeletionHandler: Fl
} = ue, {
  isRecoilValue: Wl
} = Ae, {
  getRecoilValueAsLoadable: Kl,
  markRecoilValueModified: Gl,
  setRecoilValue: kn,
  setRecoilValueLoadable: Hl
} = ge, {
  retainedByOptionWithDefault: jl
} = Be, je = (e) => e instanceof Io ? e.value : e;
function ql(e) {
  const {
    key: t,
    persistence_UNSTABLE: n
  } = e, o = jl(e.retainedBy_UNSTABLE);
  let r = 0;
  function a(w) {
    return xt(w.then((U) => (i = Ie(U), U)).catch((U) => {
      throw i = Ut(U), U;
    }));
  }
  let i = K(e.default) ? a(e.default) : Ol(e.default) ? e.default.state === "loading" ? a(e.default.contents) : e.default : (
    // $FlowFixMe[incompatible-call]
    Ie(je(e.default))
  );
  i.contents;
  let u;
  const d = /* @__PURE__ */ new Map();
  function f(w) {
    return w;
  }
  function p(w, U) {
    const Y = U.then((z) => {
      var G, q;
      return ((q = ((G = w.getState().nextTree) !== null && G !== void 0 ? G : w.getState().currentTree).atomValues.get(t)) === null || q === void 0 ? void 0 : q.contents) === Y && kn(w, te, z), z;
    }).catch((z) => {
      var G, q;
      throw ((q = ((G = w.getState().nextTree) !== null && G !== void 0 ? G : w.getState().currentTree).atomValues.get(t)) === null || q === void 0 ? void 0 : q.contents) === Y && Hl(w, te, Ut(z)), z;
    });
    return Y;
  }
  function g(w, U, Y) {
    var z;
    r++;
    const G = () => {
      var J;
      r--, (J = d.get(w)) === null || J === void 0 || J.forEach((de) => de()), d.delete(w);
    };
    if (w.getState().knownAtoms.add(t), i.state === "loading") {
      const J = () => {
        var de;
        ((de = w.getState().nextTree) !== null && de !== void 0 ? de : w.getState().currentTree).atomValues.has(t) || Gl(w, te);
      };
      i.contents.finally(J);
    }
    const q = (z = e.effects) !== null && z !== void 0 ? z : e.effects_UNSTABLE;
    if (q != null) {
      let J = function(x) {
        if (le && x.key === t) {
          const B = X;
          return B instanceof Re ? I(w, U) : K(B) ? xt(B.then((c) => c instanceof Re ? (
            // Cast T to S
            i.toPromise()
          ) : c)) : (
            // $FlowFixMe[incompatible-call]
            Ie(B)
          );
        }
        return Kl(w, x);
      }, de = function(x) {
        return J(x).toPromise();
      }, $e = function(x) {
        var B;
        const c = Bl(w, (B = w.getState().nextTree) !== null && B !== void 0 ? B : w.getState().currentTree, x.key);
        return le && x.key === t && !(X instanceof Re) ? {
          ...c,
          isSet: !0,
          loadable: J(x)
        } : c;
      }, X = Ee, le = !0, we = !1, fe = null;
      const Se = (x) => (B) => {
        if (le) {
          const c = J(te), v = c.state === "hasValue" ? c.contents : Ee;
          X = typeof B == "function" ? (
            // cast to any because we can't restrict T from being a function without losing support for opaque types
            B(v)
          ) : B, K(X) && (X = X.then((_) => (fe = {
            effect: x,
            value: _
          }, _)));
        } else {
          if (K(B))
            throw M("Setting atoms to async values is not implemented.");
          typeof B != "function" && (fe = {
            effect: x,
            value: je(B)
          }), kn(w, te, typeof B == "function" ? (c) => {
            const v = je(
              // cast to any because we can't restrict T from being a function without losing support for opaque types
              B(c)
              // flowlint-line unclear-type:off
            );
            return fe = {
              effect: x,
              value: v
            }, v;
          } : je(B));
        }
      }, Me = (x) => () => Se(x)(Ee), ke = (x) => (B) => {
        var c;
        const {
          release: v
        } = w.subscribeToTransactions((_) => {
          var C;
          let {
            currentTree: R,
            previousTree: k
          } = _.getState();
          k || (ie(), k = R);
          const b = (C = R.atomValues.get(t)) !== null && C !== void 0 ? C : i;
          if (b.state === "hasValue") {
            var P, W, ee, O;
            const ne = b.contents, me = (P = k.atomValues.get(t)) !== null && P !== void 0 ? P : i, ce = me.state === "hasValue" ? me.contents : Ee;
            ((W = fe) === null || W === void 0 ? void 0 : W.effect) !== x || ((ee = fe) === null || ee === void 0 ? void 0 : ee.value) !== ne ? B(ne, ce, !R.atomValues.has(t)) : ((O = fe) === null || O === void 0 ? void 0 : O.effect) === x && (fe = null);
          }
        }, t);
        d.set(w, [...(c = d.get(w)) !== null && c !== void 0 ? c : [], v]);
      };
      for (const x of q)
        try {
          const B = x({
            node: te,
            storeID: w.storeID,
            parentStoreID_UNSTABLE: w.parentStoreID,
            trigger: Y,
            setSelf: Se(x),
            resetSelf: Me(x),
            onSet: ke(x),
            getPromise: de,
            getLoadable: J,
            getInfo_UNSTABLE: $e
          });
          if (B != null) {
            var re;
            d.set(w, [...(re = d.get(w)) !== null && re !== void 0 ? re : [], B]);
          }
        } catch (B) {
          X = B, we = !0;
        }
      if (le = !1, !(X instanceof Re)) {
        var ye;
        const x = we ? Ut(X) : K(X) ? xt(p(w, X)) : Ie(je(X));
        x.contents, U.atomValues.set(t, x), (ye = w.getState().nextTree) === null || ye === void 0 || ye.atomValues.set(t, x);
      }
    }
    return G;
  }
  function I(w, U) {
    var Y, z;
    return (Y = (z = U.atomValues.get(t)) !== null && z !== void 0 ? z : u) !== null && Y !== void 0 ? Y : i;
  }
  function N(w, U) {
    if (U.atomValues.has(t))
      return j(U.atomValues.get(t));
    if (U.nonvalidatedAtoms.has(t)) {
      if (u != null)
        return u;
      if (n == null)
        return Fn(), i;
      const Y = U.nonvalidatedAtoms.get(t), z = n.validator(Y, Ee);
      return u = z instanceof Re ? i : Ie(z), u;
    } else
      return i;
  }
  function E() {
    u = void 0;
  }
  function $(w, U, Y) {
    if (U.atomValues.has(t)) {
      const z = j(U.atomValues.get(t));
      if (z.state === "hasValue" && Y === z.contents)
        return /* @__PURE__ */ new Map();
    } else if (!U.nonvalidatedAtoms.has(t) && Y instanceof Re)
      return /* @__PURE__ */ new Map();
    return u = void 0, (/* @__PURE__ */ new Map()).set(t, Ie(Y));
  }
  function Q() {
    return Uo(t) !== void 0 && r <= 0;
  }
  const te = zl({
    key: t,
    nodeType: "atom",
    peek: I,
    get: N,
    set: $,
    init: g,
    invalidate: E,
    shouldDeleteConfigOnRelease: Q,
    dangerouslyAllowMutability: e.dangerouslyAllowMutability,
    persistence_UNSTABLE: e.persistence_UNSTABLE ? {
      type: e.persistence_UNSTABLE.type,
      backButton: e.persistence_UNSTABLE.backButton
    } : void 0,
    shouldRestoreFromSnapshots: !0,
    retainedBy: o
  });
  return te;
}
function sn(e) {
  const {
    // @fb-only: scopeRules_APPEND_ONLY_READ_THE_DOCS,
    ...t
  } = e, n = "default" in e ? (
    // $FlowIssue[incompatible-type] No way to refine in Flow that property is not defined
    e.default
  ) : new Promise(() => {
  });
  return Wl(n) ? Zl({
    ...t,
    default: n
    // @fb-only: scopeRules_APPEND_ONLY_READ_THE_DOCS,
  }) : ql({
    ...t,
    default: n
  });
}
function Zl(e) {
  const t = sn({
    ...e,
    default: Ee,
    persistence_UNSTABLE: e.persistence_UNSTABLE === void 0 ? void 0 : {
      ...e.persistence_UNSTABLE,
      validator: (o) => o instanceof Re ? o : j(e.persistence_UNSTABLE).validator(o, Ee)
    },
    // TODO Hack for now.
    effects: e.effects,
    // flowlint-line unclear-type: off
    effects_UNSTABLE: e.effects_UNSTABLE
    // flowlint-line unclear-type: off
  }), n = Oe({
    key: `${e.key}__withFallback`,
    get: ({
      get: o
    }) => {
      const r = o(t);
      return r instanceof Re ? e.default : r;
    },
    // $FlowFixMe[incompatible-call]
    set: ({
      set: o
    }, r) => o(t, r),
    // This selector does not need to cache as it is a wrapper selector
    // and the selector within the wrapper selector will have a cache
    // option by default
    cachePolicy_UNSTABLE: {
      eviction: "most-recent"
    },
    dangerouslyAllowMutability: e.dangerouslyAllowMutability
  });
  return Fl(n.key, Uo(e.key)), n;
}
sn.value = (e) => new Io(e);
var Yl = sn;
class Xl {
  constructor(t) {
    var n;
    V(this, "_map", void 0), V(this, "_keyMapper", void 0), this._map = /* @__PURE__ */ new Map(), this._keyMapper = (n = t == null ? void 0 : t.mapKey) !== null && n !== void 0 ? n : (o) => o;
  }
  size() {
    return this._map.size;
  }
  has(t) {
    return this._map.has(this._keyMapper(t));
  }
  get(t) {
    return this._map.get(this._keyMapper(t));
  }
  set(t, n) {
    this._map.set(this._keyMapper(t), n);
  }
  delete(t) {
    this._map.delete(this._keyMapper(t));
  }
  clear() {
    this._map.clear();
  }
}
var Jl = {
  MapCache: Xl
}, Ql = Jl.MapCache, ec = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  MapCache: Ql
});
const {
  LRUCache: Dn
} = $o, {
  MapCache: tc
} = ec, lt = {
  equality: "reference",
  eviction: "none",
  maxSize: 1 / 0
};
function nc({
  equality: e = lt.equality,
  eviction: t = lt.eviction,
  maxSize: n = lt.maxSize
} = lt) {
  const o = oc(e);
  return rc(t, n, o);
}
function oc(e) {
  switch (e) {
    case "reference":
      return (t) => t;
    case "value":
      return (t) => an(t);
  }
  throw M(`Unrecognized equality policy ${e}`);
}
function rc(e, t, n) {
  switch (e) {
    case "keep-all":
      return new tc({
        mapKey: n
      });
    case "lru":
      return new Dn({
        mapKey: n,
        maxSize: j(t)
      });
    case "most-recent":
      return new Dn({
        mapKey: n,
        maxSize: 1
      });
  }
  throw M(`Unrecognized eviction policy ${e}`);
}
var ac = nc;
const {
  setConfigDeletionHandler: sc
} = ue;
let ic = 0;
function lc(e) {
  var t, n;
  const o = ac({
    equality: (t = (n = e.cachePolicyForParams_UNSTABLE) === null || n === void 0 ? void 0 : n.equality) !== null && t !== void 0 ? t : "value",
    eviction: "keep-all"
  });
  return (r) => {
    var a;
    let i;
    try {
      i = o.get(r);
    } catch (I) {
      throw M(`Problem with cache lookup for selector ${e.key}: ${I.message}`);
    }
    if (i != null)
      return i;
    const u = `${e.key}__selectorFamily/${(a = an(r, {
      // It is possible to use functions in parameters if the user uses
      // a cache with reference equality thanks to the incrementing index.
      allowFunctions: !0
    })) !== null && a !== void 0 ? a : "void"}/${ic++}`, d = (I) => e.get(r)(I), f = e.cachePolicy_UNSTABLE, p = typeof e.retainedBy_UNSTABLE == "function" ? e.retainedBy_UNSTABLE(r) : e.retainedBy_UNSTABLE;
    let g;
    if (e.set != null) {
      const I = e.set;
      g = Oe({
        key: u,
        get: d,
        set: (E, $) => I(r)(E, $),
        cachePolicy_UNSTABLE: f,
        dangerouslyAllowMutability: e.dangerouslyAllowMutability,
        retainedBy_UNSTABLE: p
      });
    } else
      g = Oe({
        key: u,
        get: d,
        cachePolicy_UNSTABLE: f,
        dangerouslyAllowMutability: e.dangerouslyAllowMutability,
        retainedBy_UNSTABLE: p
      });
    return o.set(r, g), sc(g.key, () => {
      o.delete(r);
    }), g;
  };
}
var Ve = lc;
Ve({
  key: "__constant",
  get: (e) => () => e,
  cachePolicyForParams_UNSTABLE: {
    equality: "reference"
  }
});
Ve({
  key: "__error",
  get: (e) => () => {
    throw M(e);
  },
  // TODO Why?
  cachePolicyForParams_UNSTABLE: {
    equality: "reference"
  }
});
const {
  loadableWithError: xo,
  loadableWithPromise: Po,
  loadableWithValue: Oo
} = Xe;
function Tt(e, t) {
  const n = Array(t.length).fill(void 0), o = Array(t.length).fill(void 0);
  for (const [r, a] of t.entries())
    try {
      n[r] = e(a);
    } catch (i) {
      o[r] = i;
    }
  return [n, o];
}
function cc(e) {
  return e != null && !K(e);
}
function At(e) {
  return Array.isArray(e) ? e : Object.getOwnPropertyNames(e).map((t) => e[t]);
}
function Kt(e, t) {
  return Array.isArray(e) ? t : (
    // Object.getOwnPropertyNames() has consistent key ordering with ES6
    Object.getOwnPropertyNames(e).reduce((n, o, r) => ({
      ...n,
      [o]: t[r]
    }), {})
  );
}
function Ue(e, t, n) {
  const o = n.map((r, a) => r == null ? Oo(t[a]) : K(r) ? Po(r) : xo(r));
  return Kt(e, o);
}
function uc(e, t) {
  return t.map((n, o) => (
    /**
     * it's important we use === undefined as opposed to == null, because the
     * resolved value of the async promise could be `null`, in which case we
     * don't want to use syncResults[idx], which would be undefined. If async
     * promise resolves to `undefined`, that's ok because `syncResults[idx]`
     * will also be `undefined`. That's a little hacky, but it works.
     */
    n === void 0 ? e[o] : n
  ));
}
Ve({
  key: "__waitForNone",
  get: (e) => ({
    get: t
  }) => {
    const n = At(e), [o, r] = Tt(t, n);
    return Ue(e, o, r);
  },
  dangerouslyAllowMutability: !0
});
Ve({
  key: "__waitForAny",
  get: (e) => ({
    get: t
  }) => {
    const n = At(e), [o, r] = Tt(t, n);
    return r.some((a) => !K(a)) ? Ue(e, o, r) : new Promise((a) => {
      for (const [i, u] of r.entries())
        K(u) && u.then((d) => {
          o[i] = d, r[i] = void 0, a(Ue(e, o, r));
        }).catch((d) => {
          r[i] = d, a(Ue(e, o, r));
        });
    });
  },
  dangerouslyAllowMutability: !0
});
Ve({
  key: "__waitForAll",
  get: (e) => ({
    get: t
  }) => {
    const n = At(e), [o, r] = Tt(t, n);
    if (r.every((i) => i == null))
      return Kt(e, o);
    const a = r.find(cc);
    if (a != null)
      throw a;
    return Promise.all(r).then((i) => Kt(e, uc(o, i)));
  },
  dangerouslyAllowMutability: !0
});
Ve({
  key: "__waitForAllSettled",
  get: (e) => ({
    get: t
  }) => {
    const n = At(e), [o, r] = Tt(t, n);
    return r.every((a) => !K(a)) ? Ue(e, o, r) : Promise.all(r.map((a, i) => K(a) ? a.then((u) => {
      o[i] = u, r[i] = void 0;
    }).catch((u) => {
      o[i] = void 0, r[i] = u;
    }) : null)).then(() => Ue(e, o, r));
  },
  dangerouslyAllowMutability: !0
});
Ve({
  key: "__noWait",
  get: (e) => ({
    get: t
  }) => {
    try {
      return Oe.value(Oo(t(e)));
    } catch (n) {
      return Oe.value(K(n) ? Po(n) : xo(n));
    }
  },
  dangerouslyAllowMutability: !0
});
const {
  RecoilLoadable: kc
} = Xe, {
  DefaultValue: dc
} = ue, {
  RecoilRoot: fc
} = rn, {
  isRecoilValue: Dc
} = Ae, {
  freshSnapshot: Ic
} = Rt, {
  useRecoilState: hc,
  useRecoilValue: vc,
  useResetRecoilState: pc,
  useSetRecoilState: _c
} = Mi;
var be = {
  // Types
  DefaultValue: dc,
  // Recoil Root
  RecoilRoot: fc,
  // Atoms/Selectors
  atom: Yl,
  selector: Oe,
  // Hooks for Atoms/Selectors
  useRecoilValue: vc,
  useRecoilState: hc,
  useSetRecoilState: _c,
  useResetRecoilState: pc
}, Uc = be.DefaultValue, xc = be.RecoilRoot, Pc = be.atom, Oc = be.selector, Bc = be.useRecoilValue, zc = be.useRecoilState, Fc = be.useSetRecoilState, Wc = be.useResetRecoilState;
export {
  Pc as R,
  Oc as a,
  Uc as b,
  zc as c,
  Bc as d,
  Wc as e,
  Fc as f,
  xc as g
};
//# sourceMappingURL=index-BK2mL7vc.js.map
