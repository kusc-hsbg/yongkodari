import { u as D, j as o, c as ee, G as Pe, b as yt, Q as gt, d as wt } from "./emotion-react.browser.esm-B9sQ19ZB.js";
import { R as x, Q as bt, r as ht } from "./queryClient-DpZpBkWP.js";
import { g as xt } from "./index-BK2mL7vc.js";
import { M as vt } from "./index-BIW7NeMy.js";
import { a as kt } from "./app-MHqjRhKy.js";
const te = ({
  orderNo: a,
  queryOptions: m
} = {}) => ({
  queryKey: ["Gift", a],
  queryFn: async ({
    signal: u
  }) => {
    const w = new URL("/ajax/oms/OMS_wrap_customer_v1_gift_{orderNo}.cm", window.location.origin);
    w.searchParams.set("orderNo", a);
    const {
      data: i
    } = await kt.get(w.href, {
      signal: u
    });
    return {
      ...i == null ? void 0 : i.data,
      orderNo: String(a)
    };
  },
  ...m,
  enabled: typeof a == "string" && ((m == null ? void 0 : m.enabled) ?? !0)
}), St = x.lazy(() => import("./DeliveryFormDefault-CzC9dYCa.js").then((a) => ({
  default: a.default
}))), _t = x.lazy(() => import("./DeliveryFormDisabled-DxxKWjxE.js").then((a) => ({
  default: a.default
}))), Ct = x.lazy(() => import("./DeliveryFormCancelled-Bo_rW75t.js").then((a) => ({
  default: a.default
}))), Oe = x.lazy(() => import("./PartyPopper-BrtbUHJ5.js").then((a) => ({
  default: a.default
}))), Rt = ({
  orderNo: a,
  term: m,
  siteName: u,
  useCommonEntrancePassword: w
}) => {
  const {
    data: i
  } = D(te({
    orderNo: a,
    queryOptions: {
      suspense: !0,
      refetchInterval: 15e3,
      // 15초마다 리페치, 접속한 이후에 주문이 취소될 수 있으므로
      refetchIntervalInBackground: !1
    }
  })), b = x.useMemo(() => {
    const n = i == null ? void 0 : i.orderDeliverys[0], y = i == null ? void 0 : i.orderSections[0], g = !["OOT03", "OOT04"].includes((i == null ? void 0 : i.orderTypeCd) ?? "") && (i == null ? void 0 : i.orderItems.some((_) => _.useUnipassNumber === "Y"));
    return {
      formValue: {
        receiverName: (n == null ? void 0 : n.receiverName) ?? "",
        receiverCall: (n == null ? void 0 : n.receiverCall) ?? "",
        zipcode: (n == null ? void 0 : n.zipcode) ?? "",
        addr1: (n == null ? void 0 : n.addr1) ?? "",
        addr2: (n == null ? void 0 : n.addr2) ?? "",
        memo: (n == null ? void 0 : n.memo) ?? "",
        commonEntrancePassword: (n == null ? void 0 : n.commonEntrancePassword) ?? "",
        ...g && {
          unipassNumber: (i == null ? void 0 : i.unipassNumber) ?? ""
        }
      },
      orderDeliveryCode: (n == null ? void 0 : n.orderDeliveryCode) ?? "",
      // 주소지가 이미 입력되었는가 (= 선물받기 POST API의 필수필드가 모두 있는가)
      addressAlreadyEntered: !!(n != null && n.receiverName) && !!(n != null && n.receiverCall) && !!(n != null && n.zipcode) && !!(n != null && n.addr1) && !!(n != null && n.orderDeliveryCode),
      firstOrderItemNo: i == null ? void 0 : i.orderItems[0].no,
      hasCancelled: (y == null ? void 0 : y.statusCd) === "OSS07",
      orderCode: (i == null ? void 0 : i.orderCode) ?? "",
      giftOrderCancelScheduleDate: i == null ? void 0 : i.giftOrderCancelScheduleDate
    };
  }, [i]);
  return b.addressAlreadyEntered ? o(x.Fragment, null, o(_t, {
    formValue: b.formValue
  }), o(Oe, null)) : b.hasCancelled ? o(Ct, {
    formValue: b.formValue,
    addressAlreadyEntered: b.addressAlreadyEntered,
    mainOrderItemNo: b.firstOrderItemNo
  }) : o(x.Fragment, null, o(St, {
    term: m,
    siteName: u,
    formInitialValues: b.formValue,
    orderCode: b.orderCode,
    orderDeliveryCode: b.orderDeliveryCode,
    giftOrderCancelScheduleDate: b.giftOrderCancelScheduleDate,
    useCommonEntrancePassword: w
  }), o(Oe, null));
}, ze = () => o("div", {
  css: {
    marginLeft: "auto",
    marginRight: "auto",
    width: "100%",
    maxWidth: "768px",
    "@keyframes pulse": {
      "50%": {
        opacity: ".5"
      }
    },
    animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
    "> :not([hidden]) ~ :not([hidden])": {
      "--tw-space-y-reverse": "0",
      marginTop: "calc(24px * calc(1 - var(--tw-space-y-reverse)))",
      marginBottom: "calc(24px * var(--tw-space-y-reverse))"
    },
    paddingLeft: "20px",
    paddingRight: "20px",
    paddingBottom: "108px",
    paddingTop: "50px",
    "@media (min-width: 768px)": {
      paddingLeft: "0px",
      paddingRight: "0px"
    },
    "& *": {
      marginLeft: "auto",
      marginRight: "auto"
    }
  }
}, o("div", {
  css: {
    height: "38px",
    width: "200px",
    borderRadius: "8px",
    "--tw-bg-opacity": "1",
    backgroundColor: "rgb(255 255 255 / var(--tw-bg-opacity))"
  }
}), o("div", {
  css: {
    height: "24px",
    width: "100px",
    borderRadius: "8px",
    "--tw-bg-opacity": "1",
    backgroundColor: "rgb(255 255 255 / var(--tw-bg-opacity))"
  }
}), o("div", {
  css: {
    height: "200px",
    width: "200px",
    borderRadius: "8px",
    "--tw-bg-opacity": "1",
    backgroundColor: "rgb(255 255 255 / var(--tw-bg-opacity))"
  }
}), o("div", {
  css: {
    height: "100px",
    borderRadius: "8px",
    "--tw-bg-opacity": "1",
    backgroundColor: "rgb(255 255 255 / var(--tw-bg-opacity))"
  }
}), o("div", {
  css: {
    height: "100px",
    borderRadius: "8px",
    "--tw-bg-opacity": "1",
    backgroundColor: "rgb(255 255 255 / var(--tw-bg-opacity))"
  }
}), o("div", {
  css: {
    height: "600px",
    borderRadius: "8px",
    "--tw-bg-opacity": "1",
    backgroundColor: "rgb(255 255 255 / var(--tw-bg-opacity))"
  }
})), J = {
  exports: {}
}, F = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
let je;
function Ot() {
  if (je)
    return F;
  je = 1;
  const a = x, m = Symbol.for("react.element"), u = Symbol.for("react.fragment"), w = Object.prototype.hasOwnProperty, i = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, b = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
  };
  function n(y, g, _) {
    let S, C = {}, j = null, M = null;
    _ !== void 0 && (j = "" + _), g.key !== void 0 && (j = "" + g.key), g.ref !== void 0 && (M = g.ref);
    for (S in g)
      w.call(g, S) && !b.hasOwnProperty(S) && (C[S] = g[S]);
    if (y && y.defaultProps)
      for (S in g = y.defaultProps, g)
        C[S] === void 0 && (C[S] = g[S]);
    return {
      $$typeof: m,
      type: y,
      key: j,
      ref: M,
      props: C,
      _owner: i.current
    };
  }
  return F.Fragment = u, F.jsx = n, F.jsxs = n, F;
}
const W = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
let Ee;
function jt() {
  return Ee || (Ee = 1, {}.NODE_ENV !== "production" && function() {
    const a = x, m = Symbol.for("react.element"), u = Symbol.for("react.portal"), w = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), n = Symbol.for("react.provider"), y = Symbol.for("react.context"), g = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), S = Symbol.for("react.suspense_list"), C = Symbol.for("react.memo"), j = Symbol.for("react.lazy"), M = Symbol.for("react.offscreen"), re = Symbol.iterator, Fe = "@@iterator";
    function $e(e) {
      if (e === null || typeof e != "object")
        return null;
      const t = re && e[re] || e[Fe];
      return typeof t == "function" ? t : null;
    }
    const P = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function v(e) {
      {
        for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++)
          r[s - 1] = arguments[s];
        Me("error", e, r);
      }
    }
    function Me(e, t, r) {
      {
        const s = P.ReactDebugCurrentFrame, l = s.getStackAddendum();
        l !== "" && (t += "%s", r = r.concat([l]));
        const d = r.map(function(f) {
          return String(f);
        });
        d.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, d);
      }
    }
    let Be = !1, Le = !1, Ue = !1, Ae = !1, He = !1, oe;
    oe = Symbol.for("react.module.reference");
    function We(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === w || e === b || He || e === i || e === _ || e === S || Ae || e === M || Be || Le || Ue || typeof e == "object" && e !== null && (e.$$typeof === j || e.$$typeof === C || e.$$typeof === n || e.$$typeof === y || e.$$typeof === g || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === oe || e.getModuleId !== void 0));
    }
    function Ve(e, t, r) {
      const s = e.displayName;
      if (s)
        return s;
      const l = t.displayName || t.name || "";
      return l !== "" ? r + "(" + l + ")" : r;
    }
    function ne(e) {
      return e.displayName || "Context";
    }
    function E(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case w:
          return "Fragment";
        case u:
          return "Portal";
        case b:
          return "Profiler";
        case i:
          return "StrictMode";
        case _:
          return "Suspense";
        case S:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case y:
            var t = e;
            return ne(t) + ".Consumer";
          case n:
            var r = e;
            return ne(r._context) + ".Provider";
          case g:
            return Ve(e, e.render, "ForwardRef");
          case C:
            var s = e.displayName || null;
            return s !== null ? s : E(e.type) || "Memo";
          case j: {
            const l = e, d = l._payload, f = l._init;
            try {
              return E(f(d));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    let N = Object.assign, I = 0, ae, ie, se, ce, le, pe, ue;
    function de() {
    }
    de.__reactDisabledLog = !0;
    function Ge() {
      {
        if (I === 0) {
          ae = console.log, ie = console.info, se = console.warn, ce = console.error, le = console.group, pe = console.groupCollapsed, ue = console.groupEnd;
          const e = {
            configurable: !0,
            enumerable: !0,
            value: de,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        I++;
      }
    }
    function qe() {
      {
        if (I--, I === 0) {
          const e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: N({}, e, {
              value: ae
            }),
            info: N({}, e, {
              value: ie
            }),
            warn: N({}, e, {
              value: se
            }),
            error: N({}, e, {
              value: ce
            }),
            group: N({}, e, {
              value: le
            }),
            groupCollapsed: N({}, e, {
              value: pe
            }),
            groupEnd: N({}, e, {
              value: ue
            })
          });
        }
        I < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    let V = P.ReactCurrentDispatcher, G;
    function B(e, t, r) {
      {
        if (G === void 0)
          try {
            throw Error();
          } catch (s) {
            const l = s.stack.trim().match(/\n( *(at )?)/);
            G = l && l[1] || "";
          }
        return `
` + G + e;
      }
    }
    let q = !1, L;
    {
      const e = typeof WeakMap == "function" ? WeakMap : Map;
      L = new e();
    }
    function fe(e, t) {
      if (!e || q)
        return "";
      {
        const k = L.get(e);
        if (k !== void 0)
          return k;
      }
      let r;
      q = !0;
      const s = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      let l;
      l = V.current, V.current = null, Ge();
      try {
        if (t) {
          const k = function() {
            throw Error();
          };
          if (Object.defineProperty(k.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(k, []);
            } catch (R) {
              r = R;
            }
            Reflect.construct(e, [], k);
          } else {
            try {
              k.call();
            } catch (R) {
              r = R;
            }
            e.call(k.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (k) {
            r = k;
          }
          e();
        }
      } catch (k) {
        if (k && r && typeof k.stack == "string") {
          for (var d = k.stack.split(`
`), f = r.stack.split(`
`), c = d.length - 1, p = f.length - 1; c >= 1 && p >= 0 && d[c] !== f[p]; )
            p--;
          for (; c >= 1 && p >= 0; c--, p--)
            if (d[c] !== f[p]) {
              if (c !== 1 || p !== 1)
                do
                  if (c--, p--, p < 0 || d[c] !== f[p]) {
                    let R = `
` + d[c].replace(" at new ", " at ");
                    return e.displayName && R.includes("<anonymous>") && (R = R.replace("<anonymous>", e.displayName)), typeof e == "function" && L.set(e, R), R;
                  }
                while (c >= 1 && p >= 0);
              break;
            }
        }
      } finally {
        q = !1, V.current = l, qe(), Error.prepareStackTrace = s;
      }
      const h = e ? e.displayName || e.name : "", O = h ? B(h) : "";
      return typeof e == "function" && L.set(e, O), O;
    }
    function Ye(e, t, r) {
      return fe(e, !1);
    }
    function Qe(e) {
      const t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function U(e, t, r) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return fe(e, Qe(e));
      if (typeof e == "string")
        return B(e);
      switch (e) {
        case _:
          return B("Suspense");
        case S:
          return B("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case g:
            return Ye(e.render);
          case C:
            return U(e.type, t, r);
          case j: {
            const s = e, l = s._payload, d = s._init;
            try {
              return U(d(l), t, r);
            } catch {
            }
          }
        }
      return "";
    }
    const A = Object.prototype.hasOwnProperty, me = {}, ye = P.ReactDebugCurrentFrame;
    function H(e) {
      if (e) {
        const t = e._owner, r = U(e.type, e._source, t ? t.type : null);
        ye.setExtraStackFrame(r);
      } else
        ye.setExtraStackFrame(null);
    }
    function Ke(e, t, r, s, l) {
      {
        const d = Function.call.bind(A);
        for (const f in e)
          if (d(e, f)) {
            let c;
            try {
              if (typeof e[f] != "function") {
                const p = Error((s || "React class") + ": " + r + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw p.name = "Invariant Violation", p;
              }
              c = e[f](t, f, s, r, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (p) {
              c = p;
            }
            c && !(c instanceof Error) && (H(l), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", s || "React class", r, f, typeof c), H(null)), c instanceof Error && !(c.message in me) && (me[c.message] = !0, H(l), v("Failed %s type: %s", r, c.message), H(null));
          }
      }
    }
    const Xe = Array.isArray;
    function Y(e) {
      return Xe(e);
    }
    function Ze(e) {
      return typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
    }
    function Je(e) {
      try {
        return ge(e), !1;
      } catch {
        return !0;
      }
    }
    function ge(e) {
      return "" + e;
    }
    function we(e) {
      if (Je(e))
        return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ze(e)), ge(e);
    }
    let be = P.ReactCurrentOwner, De = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, he, xe;
    function et(e) {
      if (A.call(e, "ref")) {
        const t = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function tt(e) {
      if (A.call(e, "key")) {
        const t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function rt(e, t) {
      typeof e.ref == "string" && be.current;
    }
    function ot(e, t) {
      {
        const r = function() {
          he || (he = !0, v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        r.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: r,
          configurable: !0
        });
      }
    }
    function nt(e, t) {
      {
        const r = function() {
          xe || (xe = !0, v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        r.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: r,
          configurable: !0
        });
      }
    }
    const at = function(e, t, r, s, l, d, f) {
      const c = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: m,
        // Built-in properties that belong on the element
        type: e,
        key: t,
        ref: r,
        props: f,
        // Record the component responsible for creating this element.
        _owner: d
      };
      return c._store = {}, Object.defineProperty(c._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(c, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: s
      }), Object.defineProperty(c, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: l
      }), Object.freeze && (Object.freeze(c.props), Object.freeze(c)), c;
    };
    function it(e, t, r, s, l) {
      {
        let d, f = {}, c = null, p = null;
        r !== void 0 && (we(r), c = "" + r), tt(t) && (we(t.key), c = "" + t.key), et(t) && (p = t.ref, rt(t, l));
        for (d in t)
          A.call(t, d) && !De.hasOwnProperty(d) && (f[d] = t[d]);
        if (e && e.defaultProps) {
          const h = e.defaultProps;
          for (d in h)
            f[d] === void 0 && (f[d] = h[d]);
        }
        if (c || p) {
          const h = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          c && ot(f, h), p && nt(f, h);
        }
        return at(e, c, p, l, s, be.current, f);
      }
    }
    const Q = P.ReactCurrentOwner, ve = P.ReactDebugCurrentFrame;
    function z(e) {
      if (e) {
        const t = e._owner, r = U(e.type, e._source, t ? t.type : null);
        ve.setExtraStackFrame(r);
      } else
        ve.setExtraStackFrame(null);
    }
    let K;
    K = !1;
    function X(e) {
      return typeof e == "object" && e !== null && e.$$typeof === m;
    }
    function ke() {
      {
        if (Q.current) {
          const e = E(Q.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function st(e) {
      return "";
    }
    const Se = {};
    function ct(e) {
      {
        let t = ke();
        if (!t) {
          const r = typeof e == "string" ? e : e.displayName || e.name;
          r && (t = `

Check the top-level render call using <` + r + ">.");
        }
        return t;
      }
    }
    function _e(e, t) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        const r = ct(t);
        if (Se[r])
          return;
        Se[r] = !0;
        let s = "";
        e && e._owner && e._owner !== Q.current && (s = " It was passed a child from " + E(e._owner.type) + "."), z(e), v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', r, s), z(null);
      }
    }
    function Ce(e, t) {
      {
        if (typeof e != "object")
          return;
        if (Y(e))
          for (let l = 0; l < e.length; l++) {
            const d = e[l];
            X(d) && _e(d, t);
          }
        else if (X(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          const l = $e(e);
          if (typeof l == "function" && l !== e.entries)
            for (var r = l.call(e), s; !(s = r.next()).done; )
              X(s.value) && _e(s.value, t);
        }
      }
    }
    function lt(e) {
      {
        const t = e.type;
        if (t == null || typeof t == "string")
          return;
        let r;
        if (typeof t == "function")
          r = t.propTypes;
        else if (typeof t == "object" && (t.$$typeof === g || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        t.$$typeof === C))
          r = t.propTypes;
        else
          return;
        if (r) {
          const s = E(t);
          Ke(r, e.props, "prop", s, e);
        } else if (t.PropTypes !== void 0 && !K) {
          K = !0;
          const s = E(t);
          v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", s || "Unknown");
        }
        typeof t.getDefaultProps == "function" && !t.getDefaultProps.isReactClassApproved && v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function pt(e) {
      {
        for (let t = Object.keys(e.props), r = 0; r < t.length; r++) {
          const s = t[r];
          if (s !== "children" && s !== "key") {
            z(e), v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", s), z(null);
            break;
          }
        }
        e.ref !== null && (z(e), v("Invalid attribute `ref` supplied to `React.Fragment`."), z(null));
      }
    }
    function Re(e, t, r, s, l, d) {
      {
        const f = We(e);
        if (!f) {
          let p = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (p += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          const h = st();
          h ? p += h : p += ke();
          let O;
          e === null ? O = "null" : Y(e) ? O = "array" : e !== void 0 && e.$$typeof === m ? (O = "<" + (E(e.type) || "Unknown") + " />", p = " Did you accidentally export a JSX literal instead of a component?") : O = typeof e, v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", O, p);
        }
        const c = it(e, t, r, l, d);
        if (c == null)
          return c;
        if (f) {
          const p = t.children;
          if (p !== void 0)
            if (s)
              if (Y(p)) {
                for (let h = 0; h < p.length; h++)
                  Ce(p[h], e);
                Object.freeze && Object.freeze(p);
              } else
                v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ce(p, e);
        }
        return e === w ? pt(c) : lt(c), c;
      }
    }
    function ut(e, t, r) {
      return Re(e, t, r, !0);
    }
    function dt(e, t, r) {
      return Re(e, t, r, !1);
    }
    const ft = dt, mt = ut;
    W.Fragment = w, W.jsx = ft, W.jsxs = mt;
  }()), W;
}
({}).NODE_ENV === "production" ? J.exports = Ot() : J.exports = jt();
const T = J.exports, Vt = (a) => /* @__PURE__ */ T.jsx("svg", { width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...a, children: /* @__PURE__ */ T.jsx("path", { d: "M19 6L9.375 17L5 12", stroke: "currentColor" }) }), Gt = (a) => /* @__PURE__ */ T.jsx("svg", { width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...a, children: /* @__PURE__ */ T.jsx("path", { d: "M12 17V11M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z", stroke: "currentColor" }) }), Te = (a) => /* @__PURE__ */ T.jsx("svg", { width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...a, children: /* @__PURE__ */ T.jsx("path", { d: "M17 7L7 17M7 7L17 17", stroke: "currentColor" }) }), Ie = ({
  optionList: a
}) => o("ul", {
  css: {
    display: "flex",
    flexWrap: "wrap",
    gap: "6px"
  }
}, a.map((m) => o("li", {
  key: m.optionName,
  css: {
    borderRadius: "9999px",
    "--tw-bg-opacity": "1",
    backgroundColor: "rgb(248 249 251 / var(--tw-bg-opacity))",
    paddingLeft: "10px",
    paddingRight: "10px",
    paddingTop: "2px",
    paddingBottom: "2px",
    fontSize: "14px",
    lineHeight: "24px",
    "--tw-text-opacity": "1",
    color: "rgb(113 118 128 / var(--tw-text-opacity))"
  }
}, m.optionName, ": ", m.optionValue))), Et = ({
  productList: a,
  siteName: m
}) => o("ul", {
  css: {
    width: "100%"
  }
}, a.map((u, w) => o("li", {
  key: w,
  css: {
    marginBottom: "12px",
    display: "flex",
    width: "100%",
    columnGap: "12px",
    borderRadius: "16px",
    "--tw-bg-opacity": "1",
    backgroundColor: "rgb(255 255 255 / var(--tw-bg-opacity))",
    padding: "20px",
    ":last-child": {
      marginBottom: "0px"
    }
  }
}, o("a", {
  href: u.no ? `/shop_view/?idx=${u.no}` : void 0,
  target: "_blank",
  css: {
    height: "56px",
    width: "56px",
    flexShrink: "0",
    overflow: "hidden",
    borderRadius: "12px"
  }
}, o("img", {
  src: u.imgUrl,
  alt: "상품 이미지",
  css: {
    height: "100%",
    width: "100%",
    objectFit: "cover"
  },
  draggable: !1
})), o("div", null, o("div", {
  css: {
    marginBottom: "4px",
    fontSize: "14px",
    lineHeight: "24px",
    "--tw-text-opacity": "1",
    color: "rgb(102 102 102 / var(--tw-text-opacity))"
  }
}, m), o("div", {
  css: {
    fontSize: "16px",
    lineHeight: "24px"
  }
}, u.prodName), u.optionInfo.length > 0 && o("div", {
  css: {
    marginTop: "12px"
  }
}, o(Ie, {
  optionList: u.optionInfo
})), o("div", {
  css: {
    marginTop: "12px",
    display: "flex",
    alignItems: "center",
    columnGap: "2px",
    "--tw-text-opacity": "1",
    color: "rgb(75 81 91 / var(--tw-text-opacity))"
  }
}, o(Te, {
  width: 16,
  height: 16
}), " ", o("span", {
  css: {
    fontSize: "14px",
    lineHeight: "24px",
    "--tw-text-opacity": "1",
    color: "rgb(21 24 30 / var(--tw-text-opacity))"
  }
}, u.qty, "개")))))), Nt = ({
  product: a,
  siteName: m,
  hasCancelled: u
}) => o(x.Fragment, null, o("a", {
  href: a.no ? `/shop_view/?idx=${a.no}` : void 0,
  target: "_blank",
  css: [{
    position: "relative",
    height: "200px",
    width: "200px",
    overflow: "hidden",
    borderRadius: "16px"
  }, ee`
            box-shadow:
              0px 0px 1px 0px rgba(75, 81, 91, 0.2),
              0px 0px 0px 1px rgba(75, 81, 91, 0.03),
              0px 10px 14px 0px rgba(75, 81, 91, 0.06),
              0px 14px 32px 0px rgba(75, 81, 91, 0.12);
          `]
}, o("img", {
  src: a.imgUrl,
  alt: "상품 이미지",
  css: {
    height: "100%",
    width: "100%",
    objectFit: "cover"
  },
  draggable: !1
}), u && o("div", {
  css: {
    position: "absolute",
    bottom: "0px",
    left: "0px",
    right: "0px",
    top: "0px",
    "--tw-bg-opacity": "1",
    backgroundColor: "rgb(237 240 244 / var(--tw-bg-opacity))",
    opacity: "0.7"
  }
})), o("div", {
  css: {
    "> :not([hidden]) ~ :not([hidden])": {
      "--tw-space-y-reverse": "0",
      marginTop: "calc(4px * calc(1 - var(--tw-space-y-reverse)))",
      marginBottom: "calc(4px * var(--tw-space-y-reverse))"
    },
    paddingLeft: "16px",
    paddingRight: "16px",
    paddingTop: "24px",
    paddingBottom: "24px",
    textAlign: "center"
  }
}, o("div", {
  css: {
    fontSize: "14px",
    lineHeight: "24px",
    "--tw-text-opacity": "1",
    color: "rgb(102 102 102 / var(--tw-text-opacity))"
  }
}, m), o("div", {
  css: {
    fontSize: "18px",
    lineHeight: "28px"
  }
}, a.prodName), o("div", {
  css: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    columnGap: "2px",
    "--tw-text-opacity": "1",
    color: "rgb(75 81 91 / var(--tw-text-opacity))"
  }
}, o(Te, {
  width: 16,
  height: 16
}), " ", o("span", {
  css: {
    fontSize: "16px",
    lineHeight: "24px",
    "--tw-text-opacity": "1",
    color: "rgb(21 24 30 / var(--tw-text-opacity))"
  }
}, a.qty, "개"))), a.optionInfo.length > 0 && o("div", {
  css: {
    width: "100%",
    borderRadius: "16px",
    "--tw-bg-opacity": "1",
    backgroundColor: "rgb(255 255 255 / var(--tw-bg-opacity))",
    padding: "20px"
  }
}, o("div", {
  css: {
    marginBottom: "12px",
    fontSize: "15px",
    fontWeight: "700",
    lineHeight: "22px"
  }
}, "옵션"), o(Ie, {
  optionList: a.optionInfo
}))), Pt = ({
  siteName: a,
  orderNo: m
}) => {
  const {
    data: u
  } = D(te({
    orderNo: m,
    queryOptions: {
      suspense: !0
    }
  })), w = x.useMemo(() => (u == null ? void 0 : u.orderSections[0].statusCd) === "OSS07", [u]), i = x.useMemo(() => u ? u.orderSections.reduce((n, y) => [...n, ...y.orderSectionItems], []).map((n) => {
    var g;
    const y = u.orderItems.find((_) => _.orderItemCode === n.orderItemCode);
    return {
      qty: n.qty,
      prodName: (y == null ? void 0 : y.prodName) ?? "",
      imgUrl: (g = y == null ? void 0 : y.imageUrls) == null ? void 0 : g[0],
      optionInfo: (y == null ? void 0 : y.optionInfo) ?? [],
      no: y == null ? void 0 : y.no
    };
  }) : null, [u]);
  return o("div", {
    css: {
      display: "flex",
      width: "100%",
      flexDirection: "column",
      alignItems: "center",
      paddingLeft: "20px",
      paddingRight: "20px",
      paddingBottom: "20px",
      paddingTop: "48px",
      "@media (min-width: 768px)": {
        paddingLeft: "0px",
        paddingRight: "0px"
      }
    }
  }, o("div", {
    css: {
      marginBottom: "8px",
      fontSize: "30px",
      fontWeight: "700",
      lineHeight: "37.5px"
    }
  }, w ? "선물이 취소됐어요" : "선물이 도착했어요!"), o("div", {
    css: {
      marginBottom: "24px",
      fontSize: "16px",
      lineHeight: "24px"
    }
  }, "From. ", u == null ? void 0 : u.ordererName), (i == null ? void 0 : i.length) === 1 && o(Nt, {
    product: i[0],
    siteName: a,
    hasCancelled: w
  }), (i == null ? void 0 : i.length) && i.length > 1 && o(Et, {
    productList: i,
    siteName: a
  }), (u == null ? void 0 : u.orderGiftMsg) && o("div", {
    css: {
      marginTop: "12px",
      width: "100%",
      borderRadius: "16px",
      "--tw-bg-opacity": "1",
      backgroundColor: "rgb(255 255 255 / var(--tw-bg-opacity))",
      padding: "20px"
    }
  }, o("div", {
    css: {
      marginBottom: "12px",
      fontSize: "15px",
      fontWeight: "700",
      lineHeight: "22px"
    }
  }, "함께 온 메시지"), o("div", {
    css: {
      fontSize: "14px",
      lineHeight: "20px"
    }
  }, u.orderGiftMsg)));
}, $ = document.getElementById("oms-gift-received"), Z = $.dataset.idx ?? "", zt = $.dataset.term ?? "", Ne = $.dataset.sitename ?? "", Tt = $.dataset.useCommonEntrancePassword === "true";
vt.setAppElement($);
const It = () => {
  const {
    data: a
  } = D(te({
    orderNo: Z,
    queryOptions: {
      suspense: !0,
      onError: () => {
        window.alert("주문 조회에 실패했어요"), window.location.replace("/");
      },
      retry: !1,
      select: (m) => m.isGift === "Y" && m.payments[0].statusCd === "OPS03"
    }
  }));
  return x.useEffect(() => {
    a === !1 && (window.alert("잘못된 접근입니다."), window.location.replace("/"));
  }, [a]), a === !1 ? o(ze, null) : o("div", {
    css: {
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: "768px",
      paddingBottom: "108px"
    }
  }, o(Pt, {
    siteName: Ne,
    orderNo: Z
  }), o(Rt, {
    siteName: Ne,
    orderNo: Z,
    term: zt,
    useCommonEntrancePassword: Tt
  }));
}, Ft = () => o(Pe, {
  styles: ee`*, ::before, ::after {
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  border-color: #e5e7eb;
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x: var(--tw-empty,/*!*/ /*!*/);
  --tw-pan-y: var(--tw-empty,/*!*/ /*!*/);
  --tw-pinch-zoom: var(--tw-empty,/*!*/ /*!*/);
  --tw-scroll-snap-strictness: proximity;
  --tw-ordinal: var(--tw-empty,/*!*/ /*!*/);
  --tw-slashed-zero: var(--tw-empty,/*!*/ /*!*/);
  --tw-numeric-figure: var(--tw-empty,/*!*/ /*!*/);
  --tw-numeric-spacing: var(--tw-empty,/*!*/ /*!*/);
  --tw-numeric-fraction: var(--tw-empty,/*!*/ /*!*/);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-blur: var(--tw-empty,/*!*/ /*!*/);
  --tw-brightness: var(--tw-empty,/*!*/ /*!*/);
  --tw-contrast: var(--tw-empty,/*!*/ /*!*/);
  --tw-grayscale: var(--tw-empty,/*!*/ /*!*/);
  --tw-hue-rotate: var(--tw-empty,/*!*/ /*!*/);
  --tw-invert: var(--tw-empty,/*!*/ /*!*/);
  --tw-saturate: var(--tw-empty,/*!*/ /*!*/);
  --tw-sepia: var(--tw-empty,/*!*/ /*!*/);
  --tw-drop-shadow: var(--tw-empty,/*!*/ /*!*/);
  --tw-backdrop-blur: var(--tw-empty,/*!*/ /*!*/);
  --tw-backdrop-brightness: var(--tw-empty,/*!*/ /*!*/);
  --tw-backdrop-contrast: var(--tw-empty,/*!*/ /*!*/);
  --tw-backdrop-grayscale: var(--tw-empty,/*!*/ /*!*/);
  --tw-backdrop-hue-rotate: var(--tw-empty,/*!*/ /*!*/);
  --tw-backdrop-invert: var(--tw-empty,/*!*/ /*!*/);
  --tw-backdrop-opacity: var(--tw-empty,/*!*/ /*!*/);
  --tw-backdrop-saturate: var(--tw-empty,/*!*/ /*!*/);
  --tw-backdrop-sepia: var(--tw-empty,/*!*/ /*!*/);
}
::before, ::after {
  --tw-content: '';
}
html {
  line-height: 1.5;
  -webkit-text-size-adjust: 100%;
  -moz-tab-size: 4;
  tab-size: 4;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-feature-settings:  normal;
  font-variation-settings:  normal;
}
body {
  margin: 0;
  line-height: inherit;
}
hr {
  height: 0;
  color: inherit;
  border-top-width: 1px;
}
abbr:where([title]) {
  text-decoration: underline dotted;
}
h1, h2, h3, h4, h5, h6 {
  font-size: inherit;
  font-weight: inherit;
}
a {
  color: inherit;
  text-decoration: inherit;
}
b, strong {
  font-weight: bolder;
}
code, kbd, samp, pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-size: 1em;
}
small {
  font-size: 80%;
}
sub, sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}
sub {
  bottom: -0.25em;
}
sup {
  top: -0.5em;
}
table {
  text-indent: 0;
  border-color: inherit;
  border-collapse: collapse;
}
button, input, optgroup, select, textarea {
  font-family: inherit;
  font-size: 100%;
  font-weight: inherit;
  line-height: inherit;
  color: inherit;
  margin: 0;
  padding: 0;
}
button, select {
  text-transform: none;
}
button, [type='button'], [type='reset'], [type='submit'] {
  -webkit-appearance: button;
  background-color: transparent;
  background-image: none;
}
:-moz-focusring {
  outline: auto;
}
:-moz-ui-invalid {
  box-shadow: none;
}
progress {
  vertical-align: baseline;
}
::-webkit-inner-spin-button, ::-webkit-outer-spin-button {
  height: auto;
}
[type='search'] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}
::-webkit-search-decoration {
  -webkit-appearance: none;
}
::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}
summary {
  display: list-item;
}
blockquote, dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p, pre {
  margin: 0;
}
fieldset {
  margin: 0;
  padding: 0;
}
legend {
  padding: 0;
}
ol, ul, menu {
  list-style: none;
  margin: 0;
  padding: 0;
}
textarea {
  resize: vertical;
}
input::placeholder, textarea::placeholder {
  opacity: 1;
  color: #9ca3af;
}
button, [role="button"] {
  cursor: pointer;
}
:disabled {
  cursor: default;
}
img, svg, video, canvas, audio, iframe, embed, object {
  display: block;
  vertical-align: middle;
}
img, video {
  max-width: 100%;
  height: auto;
}
[hidden] {
  display: none;
}
::backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x: var(--tw-empty,/*!*/ /*!*/);
  --tw-pan-y: var(--tw-empty,/*!*/ /*!*/);
  --tw-pinch-zoom: var(--tw-empty,/*!*/ /*!*/);
  --tw-scroll-snap-strictness: proximity;
  --tw-ordinal: var(--tw-empty,/*!*/ /*!*/);
  --tw-slashed-zero: var(--tw-empty,/*!*/ /*!*/);
  --tw-numeric-figure: var(--tw-empty,/*!*/ /*!*/);
  --tw-numeric-spacing: var(--tw-empty,/*!*/ /*!*/);
  --tw-numeric-fraction: var(--tw-empty,/*!*/ /*!*/);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-blur: var(--tw-empty,/*!*/ /*!*/);
  --tw-brightness: var(--tw-empty,/*!*/ /*!*/);
  --tw-contrast: var(--tw-empty,/*!*/ /*!*/);
  --tw-grayscale: var(--tw-empty,/*!*/ /*!*/);
  --tw-hue-rotate: var(--tw-empty,/*!*/ /*!*/);
  --tw-invert: var(--tw-empty,/*!*/ /*!*/);
  --tw-saturate: var(--tw-empty,/*!*/ /*!*/);
  --tw-sepia: var(--tw-empty,/*!*/ /*!*/);
  --tw-drop-shadow: var(--tw-empty,/*!*/ /*!*/);
  --tw-backdrop-blur: var(--tw-empty,/*!*/ /*!*/);
  --tw-backdrop-brightness: var(--tw-empty,/*!*/ /*!*/);
  --tw-backdrop-contrast: var(--tw-empty,/*!*/ /*!*/);
  --tw-backdrop-grayscale: var(--tw-empty,/*!*/ /*!*/);
  --tw-backdrop-hue-rotate: var(--tw-empty,/*!*/ /*!*/);
  --tw-backdrop-invert: var(--tw-empty,/*!*/ /*!*/);
  --tw-backdrop-opacity: var(--tw-empty,/*!*/ /*!*/);
  --tw-backdrop-saturate: var(--tw-empty,/*!*/ /*!*/);
  --tw-backdrop-sepia: var(--tw-empty,/*!*/ /*!*/);
}`
}), $t = ee`
  body {
    background-color: #edf0f4;
    color: #15181e;
    font-weight: 400;
    font-family:
      'Pretendard Variable',
      Pretendard,
      -apple-system,
      BlinkMacSystemFont,
      system-ui,
      Roboto,
      'Helvetica Neue',
      'Segoe UI',
      'Apple SD Gothic Neo',
      'Noto Sans KR',
      'Malgun Gothic',
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Segoe UI Symbol',
      sans-serif;
  }
`, Mt = () => o(x.Fragment, null, o(Ft, null), o(Pe, {
  styles: $t
}));
function Bt() {
  const a = document.getElementById("oms-gift-received"), m = new bt({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1e3,
        refetchOnWindowFocus: !1,
        suspense: !0
      }
    }
  });
  a !== null && yt.createRoot(a).render(o(x.StrictMode, null, o(gt, {
    client: m
  }, o(xt, null, o(Mt, null), o(ht.Suspense, {
    fallback: o(ze, null)
  }, o(It, null))), o(wt, {
    initialIsOpen: !1
  }))));
}
Bt();
const qt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
export {
  Vt as T,
  T as f,
  qt as m,
  Gt as v
};
//# sourceMappingURL=main-CBJ9kUeO.js.map
