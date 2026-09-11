import { S as g, s as v, q as b, m as w, u as y, r as d, R as f } from "./queryClient-DpZpBkWP.js";
import { a as x, n as m, o as R, c as M, j as u, G as E } from "./emotion-react.browser.esm-B9sQ19ZB.js";
import { M as S } from "./index-BIW7NeMy.js";
class k extends g {
  constructor(t, e) {
    super(), this.client = t, this.setOptions(e), this.bindMethods(), this.updateResult();
  }
  bindMethods() {
    this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this);
  }
  setOptions(t) {
    var e;
    const s = this.options;
    this.options = this.client.defaultMutationOptions(t), v(s, this.options) || this.client.getMutationCache().notify({
      type: "observerOptionsUpdated",
      mutation: this.currentMutation,
      observer: this
    }), (e = this.currentMutation) == null || e.setOptions(this.options);
  }
  onUnsubscribe() {
    if (!this.listeners.length) {
      var t;
      (t = this.currentMutation) == null || t.removeObserver(this);
    }
  }
  onMutationUpdate(t) {
    this.updateResult();
    const e = {
      listeners: !0
    };
    t.type === "success" ? e.onSuccess = !0 : t.type === "error" && (e.onError = !0), this.notify(e);
  }
  getCurrentResult() {
    return this.currentResult;
  }
  reset() {
    this.currentMutation = void 0, this.updateResult(), this.notify({
      listeners: !0
    });
  }
  mutate(t, e) {
    return this.mutateOptions = e, this.currentMutation && this.currentMutation.removeObserver(this), this.currentMutation = this.client.getMutationCache().build(this.client, {
      ...this.options,
      variables: typeof t < "u" ? t : this.options.variables
    }), this.currentMutation.addObserver(this), this.currentMutation.execute();
  }
  updateResult() {
    const t = this.currentMutation ? this.currentMutation.state : b(), e = {
      ...t,
      isLoading: t.status === "loading",
      isSuccess: t.status === "success",
      isError: t.status === "error",
      isIdle: t.status === "idle",
      mutate: this.mutate,
      reset: this.reset
    };
    this.currentResult = e;
  }
  notify(t) {
    w.batch(() => {
      if (this.mutateOptions && this.hasListeners()) {
        if (t.onSuccess) {
          var e, s, i, r;
          (e = (s = this.mutateOptions).onSuccess) == null || e.call(s, this.currentResult.data, this.currentResult.variables, this.currentResult.context), (i = (r = this.mutateOptions).onSettled) == null || i.call(r, this.currentResult.data, null, this.currentResult.variables, this.currentResult.context);
        } else if (t.onError) {
          var o, c, l, n;
          (o = (c = this.mutateOptions).onError) == null || o.call(c, this.currentResult.error, this.currentResult.variables, this.currentResult.context), (l = (n = this.mutateOptions).onSettled) == null || l.call(n, void 0, this.currentResult.error, this.currentResult.variables, this.currentResult.context);
        }
      }
      t.listeners && this.listeners.forEach((h) => {
        h(this.currentResult);
      });
    });
  }
}
function j(a, t, e) {
  const s = y(a, t), i = x({
    context: s.context
  }), [r] = d.useState(() => new k(i, s));
  d.useEffect(() => {
    r.setOptions(s);
  }, [r, s]);
  const o = m(d.useCallback((l) => r.subscribe(w.batchCalls(l)), [r]), () => r.getCurrentResult(), () => r.getCurrentResult()), c = d.useCallback((l, n) => {
    r.mutate(l, n).catch(C);
  }, [r]);
  if (o.error && R(r.options.useErrorBoundary, [o.error]))
    throw o.error;
  return {
    ...o,
    mutate: c,
    mutateAsync: o.mutate
  };
}
function C() {
}
function p() {
  return p = Object.assign ? Object.assign.bind() : function(a) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var s in e)
        ({}).hasOwnProperty.call(e, s) && (a[s] = e[s]);
    }
    return a;
  }, p.apply(null, arguments);
}
const O = M`
  .ReactModal__Overlay {
    height: 100vh;
    height: 100svh;
  }
`, H = ({
  title: a,
  contentStyle: t = {
    padding: "16px"
  },
  overlayStyle: e,
  containerStyle: s,
  maxWidth: i,
  ...r
}) => {
  d.useEffect(() => {
    if (!r.isOpen)
      return;
    const c = document.body.style.overflow, l = document.body.style.paddingRight, n = document.createElement("div");
    n.style.cssText = "overflow:scroll; visibility:hidden; position:absolute;", document.body.appendChild(n);
    const h = n.offsetWidth - n.clientWidth;
    return n.remove(), document.body.style.overflow = "hidden", document.body.style.paddingRight = `${h}px`, () => {
      document.body.style.overflow = c, document.body.style.paddingRight = l;
    };
  }, [r.isOpen]);
  const o = {
    overlay: {
      zIndex: "1000",
      overflow: "scroll",
      "--tw-bg-opacity": "0.5",
      backgroundColor: "rgb(0 0 0 / var(--tw-bg-opacity))",
      paddingTop: "80px",
      paddingBottom: "80px",
      ...e
    },
    content: {
      position: "relative",
      bottom: "0px",
      left: "50%",
      top: "0px",
      marginLeft: "0px",
      marginRight: "0px",
      "--tw-translate-x": "-50%",
      transform: "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",
      borderRadius: "3px",
      borderWidth: "0px",
      padding: "0px",
      "--tw-text-opacity": "1",
      color: "rgb(33 33 33 / var(--tw-text-opacity))",
      "--tw-shadow": "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
      "--tw-shadow-colored": "0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color)",
      boxShadow: "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",
      maxWidth: i ?? "600px",
      ...s
    }
  };
  return u(f.Fragment, null, u(E, {
    styles: O
  }), u(S, p({
    style: o
  }, r), typeof a == "string" ? u("header", {
    css: {
      position: "relative",
      display: "flex",
      height: "50px",
      alignItems: "center",
      justifyContent: "center",
      borderBottomWidth: "1px",
      "--tw-border-opacity": "1",
      borderBottomColor: "rgb(229 229 229 / var(--tw-border-opacity))",
      padding: "16px",
      fontSize: "18px",
      fontWeight: "500"
    }
  }, u("span", {
    css: {
      flex: "1 1 0%",
      textAlign: "center",
      fontSize: "15px",
      fontWeight: "500"
    }
  }, a), u("button", {
    type: "button",
    "aria-label": "닫기",
    css: {
      position: "absolute",
      right: "20px",
      top: "50%",
      display: "flex",
      height: "24px",
      width: "24px",
      "--tw-translate-y": "-50%",
      transform: "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",
      cursor: "pointer",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "unset",
      padding: "0px"
    },
    onClick: r.onRequestClose
  }, u("svg", {
    "aria-hidden": "true",
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, u("path", {
    d: "M18 0L0 18M0 0L18 18",
    stroke: "currentColor"
  })))) : null, u("main", {
    style: t
  }, r.children)));
}, I = ({
  onComplete: a,
  height: t = 450
}) => (f.useEffect(() => {
  const e = function(s) {
    if (s.data.type === "ADDRESS_SELECTED") {
      const {
        address: i,
        postalCode: r
      } = s.data;
      a({
        addr1: i,
        zipcode: r
      });
    }
  };
  return window.addEventListener("message", e), () => {
    window.removeEventListener("message", e);
  };
}, [a]), u("iframe", {
  src: "/_/address/",
  style: {
    width: "100%",
    height: `${t}px`,
    border: "none"
  }
})), T = () => {
  const [a, t] = d.useState(null), [e, s] = d.useState(!0);
  d.useEffect(() => {
    (async () => {
      try {
        s(!0);
        const o = window.TEST_SERVER ? "https://gateway-platform.dev.imwebapis.com" : "https://gateway-platform.imwebapis.com", c = new AbortController(), l = window.setTimeout(() => c.abort(), 3e3), n = await fetch(`${o}/address/health/daum`, {
          signal: c.signal
        });
        if (window.clearTimeout(l), !n.ok) {
          t(!0), s(!1);
          return;
        }
        const h = await n.json();
        t(h.isHealthy ?? !0);
      } catch {
        t(!0);
      } finally {
        s(!1);
      }
    })();
  }, []);
  const i = a === !1 || window.ADDRESS_MODE === "kakao" || window.ADDRESS_MODE === "naver";
  return {
    isDaumHealthy: a,
    isLoading: e,
    shouldUseFallback: i
  };
};
export {
  I as A,
  H as M,
  T as a,
  j as u
};
//# sourceMappingURL=useDaumHealthCheck-wIM-zPPf.js.map
