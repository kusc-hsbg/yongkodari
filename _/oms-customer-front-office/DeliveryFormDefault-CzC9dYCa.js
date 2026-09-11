import { a as ii } from "./app-MHqjRhKy.js";
import { f as Cn, T as oi } from "./main-CBJ9kUeO.js";
import { r as w, R as z, g as ai } from "./queryClient-DpZpBkWP.js";
import { u as li } from "./useClassicTranslation-ouIPeWST.js";
import { j as C, a as ui } from "./emotion-react.browser.esm-B9sQ19ZB.js";
import { B as Os, k as ci, T as Tn, M as Dt, F as Yt, a as ft, S as fi, C as hi, f as wn } from "./formSchema-B--0Jzet.js";
import { a as di, M as ke, A as pi, u as mi } from "./useDaumHealthCheck-wIM-zPPf.js";
import { d as gi } from "./differenceInCalendarDays-D0oSghL6.js";
import "./index-BK2mL7vc.js";
import "./index-BIW7NeMy.js";
const yi = (t) => /* @__PURE__ */ Cn.jsx("svg", { width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...t, children: /* @__PURE__ */ Cn.jsx("path", { d: "M12 7H7.5C6.83696 7 6.20107 6.73661 5.73223 6.26777C5.26339 5.79893 5 5.16304 5 4.5C5 3.83696 5.26339 3.20107 5.73223 2.73223C6.20107 2.26339 6.83696 2 7.5 2C11 2 12 7 12 7ZM12 7H16.5C17.163 7 17.7989 6.73661 18.2678 6.26777C18.7366 5.79893 19 5.16304 19 4.5C19 3.83696 18.7366 3.20107 18.2678 2.73223C17.7989 2.26339 17.163 2 16.5 2C13 2 12 7 12 7ZM12 7L12 22M2 14H22M2 10.2L2 18.8C2 19.9201 2 20.4802 2.21799 20.908C2.40973 21.2843 2.71569 21.5903 3.09202 21.782C3.51984 22 4.07989 22 5.2 22L18.8 22C19.9201 22 20.4802 22 20.908 21.782C21.2843 21.5903 21.5903 21.2843 21.782 20.908C22 20.4802 22 19.9201 22 18.8V10.2C22 9.0799 22 8.51984 21.782 8.09202C21.5903 7.7157 21.2843 7.40974 20.908 7.21799C20.4802 7 19.9201 7 18.8 7L5.2 7C4.0799 7 3.51984 7 3.09202 7.21799C2.7157 7.40973 2.40973 7.71569 2.21799 8.09202C2 8.51984 2 9.07989 2 10.2Z", stroke: "currentColor" }) }), Es = w.createContext({
  transformPagePoint: (t) => t,
  isStatic: !1,
  reducedMotion: "never"
}), he = w.createContext({}), de = w.createContext(null), pe = typeof document < "u", Ze = pe ? w.useLayoutEffect : w.useEffect, js = w.createContext({ strict: !1 }), Qe = (t) => t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(), vi = "framerAppearId", Ls = "data-" + Qe(vi), ks = {
  skipAnimations: !1,
  useManualTiming: !1
};
class Sn {
  constructor() {
    this.order = [], this.scheduled = /* @__PURE__ */ new Set();
  }
  add(e) {
    if (!this.scheduled.has(e))
      return this.scheduled.add(e), this.order.push(e), !0;
  }
  remove(e) {
    const n = this.order.indexOf(e);
    n !== -1 && (this.order.splice(n, 1), this.scheduled.delete(e));
  }
  clear() {
    this.order.length = 0, this.scheduled.clear();
  }
}
function xi(t) {
  let e = new Sn(), n = new Sn(), s = 0, r = !1, o = !1;
  const i = /* @__PURE__ */ new WeakSet(), a = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (l, u = !1, c = !1) => {
      const f = c && r, h = f ? e : n;
      return u && i.add(l), h.add(l) && f && r && (s = e.order.length), l;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (l) => {
      n.remove(l), i.delete(l);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (l) => {
      if (r) {
        o = !0;
        return;
      }
      if (r = !0, [e, n] = [n, e], n.clear(), s = e.order.length, s)
        for (let u = 0; u < s; u++) {
          const c = e.order[u];
          i.has(c) && (a.schedule(c), t()), c(l);
        }
      r = !1, o && (o = !1, a.process(l));
    }
  };
  return a;
}
const Xt = [
  "prepare",
  "read",
  "update",
  "preRender",
  "render",
  "postRender"
], bi = 40;
function Bs(t, e) {
  let n = !1, s = !0;
  const r = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, o = Xt.reduce((f, h) => (f[h] = xi(() => n = !0), f), {}), i = (f) => {
    o[f].process(r);
  }, a = () => {
    const f = performance.now();
    n = !1, r.delta = s ? 1e3 / 60 : Math.max(Math.min(f - r.timestamp, bi), 1), r.timestamp = f, r.isProcessing = !0, Xt.forEach(i), r.isProcessing = !1, n && e && (s = !1, t(a));
  }, l = () => {
    n = !0, s = !0, r.isProcessing || t(a);
  };
  return { schedule: Xt.reduce((f, h) => {
    const p = o[h];
    return f[h] = (d, m = !1, y = !1) => (n || l(), p.schedule(d, m, y)), f;
  }, {}), cancel: (f) => Xt.forEach((h) => o[h].cancel(f)), state: r, steps: o };
}
const { schedule: Je } = Bs(queueMicrotask, !1);
function Pi(t, e, n, s) {
  const { visualElement: r } = w.useContext(he), o = w.useContext(js), i = w.useContext(de), a = w.useContext(Es).reducedMotion, l = w.useRef();
  s = s || o.renderer, !l.current && s && (l.current = s(t, {
    visualState: e,
    parent: r,
    props: n,
    presenceContext: i,
    blockInitialAnimation: i ? i.initial === !1 : !1,
    reducedMotionConfig: a
  }));
  const u = l.current;
  w.useInsertionEffect(() => {
    u && u.update(n, i);
  });
  const c = w.useRef(!!(n[Ls] && !window.HandoffComplete));
  return Ze(() => {
    u && (Je.postRender(u.render), c.current && u.animationState && u.animationState.animateChanges());
  }), w.useEffect(() => {
    u && (u.updateFeatures(), !c.current && u.animationState && u.animationState.animateChanges(), c.current && (c.current = !1, window.HandoffComplete = !0));
  }), u;
}
function Pt(t) {
  return t && typeof t == "object" && Object.prototype.hasOwnProperty.call(t, "current");
}
function Ci(t, e, n) {
  return w.useCallback(
    (s) => {
      s && t.mount && t.mount(s), e && (s ? e.mount(s) : e.unmount()), n && (typeof n == "function" ? n(s) : Pt(n) && (n.current = s));
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [e]
  );
}
function Bt(t) {
  return typeof t == "string" || Array.isArray(t);
}
function me(t) {
  return t !== null && typeof t == "object" && typeof t.start == "function";
}
const tn = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], en = ["initial", ...tn];
function ge(t) {
  return me(t.animate) || en.some((e) => Bt(t[e]));
}
function Fs(t) {
  return !!(ge(t) || t.variants);
}
function Ti(t, e) {
  if (ge(t)) {
    const { initial: n, animate: s } = t;
    return {
      initial: n === !1 || Bt(n) ? n : void 0,
      animate: Bt(s) ? s : void 0
    };
  }
  return t.inherit !== !1 ? e : {};
}
function wi(t) {
  const { initial: e, animate: n } = Ti(t, w.useContext(he));
  return w.useMemo(() => ({ initial: e, animate: n }), [Vn(e), Vn(n)]);
}
function Vn(t) {
  return Array.isArray(t) ? t.join(" ") : t;
}
const An = {
  animation: [
    "animate",
    "variants",
    "whileHover",
    "whileTap",
    "exit",
    "whileInView",
    "whileFocus",
    "whileDrag"
  ],
  exit: ["exit"],
  drag: ["drag", "dragControls"],
  focus: ["whileFocus"],
  hover: ["whileHover", "onHoverStart", "onHoverEnd"],
  tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
  pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
  inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
  layout: ["layout", "layoutId"]
}, Ft = {};
for (const t in An)
  Ft[t] = {
    isEnabled: (e) => An[t].some((n) => !!e[n])
  };
function Si(t) {
  for (const e in t)
    Ft[e] = {
      ...Ft[e],
      ...t[e]
    };
}
const nn = w.createContext({}), Is = w.createContext({}), Vi = Symbol.for("motionComponentSymbol");
function Ai({ preloadedFeatures: t, createVisualElement: e, useRender: n, useVisualState: s, Component: r }) {
  t && Si(t);
  function o(a, l) {
    let u;
    const c = {
      ...w.useContext(Es),
      ...a,
      layoutId: Di(a)
    }, { isStatic: f } = c, h = wi(a), p = s(a, f);
    if (!f && pe) {
      h.visualElement = Pi(r, p, c, e);
      const d = w.useContext(Is), m = w.useContext(js).strict;
      h.visualElement && (u = h.visualElement.loadFeatures(
        // Note: Pass the full new combined props to correctly re-render dynamic feature components.
        c,
        m,
        t,
        d
      ));
    }
    return w.createElement(
      he.Provider,
      { value: h },
      u && h.visualElement ? w.createElement(u, { visualElement: h.visualElement, ...c }) : null,
      n(r, a, Ci(p, h.visualElement, l), p, f, h.visualElement)
    );
  }
  const i = w.forwardRef(o);
  return i[Vi] = r, i;
}
function Di({ layoutId: t }) {
  const e = w.useContext(nn).id;
  return e && t !== void 0 ? e + "-" + t : t;
}
function Mi(t) {
  function e(s, r = {}) {
    return Ai(t(s, r));
  }
  if (typeof Proxy > "u")
    return e;
  const n = /* @__PURE__ */ new Map();
  return new Proxy(e, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (s, r) => (n.has(r) || n.set(r, e(r)), n.get(r))
  });
}
const Ri = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view"
];
function sn(t) {
  return (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof t != "string" || /**
     * If it contains a dash, the element is a custom HTML webcomponent.
     */
    t.includes("-") ? !1 : (
      /**
       * If it's in our list of lowercase SVG tags, it's an SVG component
       */
      !!(Ri.indexOf(t) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/.test(t))
    )
  );
}
const re = {};
function Oi(t) {
  Object.assign(re, t);
}
const _t = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY"
], xt = new Set(_t);
function _s(t, { layout: e, layoutId: n }) {
  return xt.has(t) || t.startsWith("origin") || (e || n !== void 0) && (!!re[t] || t === "opacity");
}
const $ = (t) => !!(t && t.getVelocity), Ei = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, ji = _t.length;
function Li(t, { enableHardwareAcceleration: e = !0, allowTransformNone: n = !0 }, s, r) {
  let o = "";
  for (let i = 0; i < ji; i++) {
    const a = _t[i];
    if (t[a] !== void 0) {
      const l = Ei[a] || a;
      o += `${l}(${t[a]}) `;
    }
  }
  return e && !t.z && (o += "translateZ(0)"), o = o.trim(), r ? o = r(t, s ? "" : o) : n && s && (o = "none"), o;
}
const Us = (t) => (e) => typeof e == "string" && e.startsWith(t), Ns = Us("--"), Be = Us("var(--"), ki = /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g, Bi = (t, e) => e && typeof t == "number" ? e.transform(t) : t, ot = (t, e, n) => Math.min(Math.max(n, t), e), bt = {
  test: (t) => typeof t == "number",
  parse: parseFloat,
  transform: (t) => t
}, Et = {
  ...bt,
  transform: (t) => ot(0, 1, t)
}, Zt = {
  ...bt,
  default: 1
}, jt = (t) => Math.round(t * 1e5) / 1e5, ye = /(-)?([\d]*\.?[\d])+/g, Ws = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi, Fi = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function Ut(t) {
  return typeof t == "string";
}
const Nt = (t) => ({
  test: (e) => Ut(e) && e.endsWith(t) && e.split(" ").length === 1,
  parse: parseFloat,
  transform: (e) => `${e}${t}`
}), st = Nt("deg"), Z = Nt("%"), D = Nt("px"), Ii = Nt("vh"), _i = Nt("vw"), Dn = {
  ...Z,
  parse: (t) => Z.parse(t) / 100,
  transform: (t) => Z.transform(t * 100)
}, Mn = {
  ...bt,
  transform: Math.round
}, Hs = {
  // Border props
  borderWidth: D,
  borderTopWidth: D,
  borderRightWidth: D,
  borderBottomWidth: D,
  borderLeftWidth: D,
  borderRadius: D,
  radius: D,
  borderTopLeftRadius: D,
  borderTopRightRadius: D,
  borderBottomRightRadius: D,
  borderBottomLeftRadius: D,
  // Positioning props
  width: D,
  maxWidth: D,
  height: D,
  maxHeight: D,
  size: D,
  top: D,
  right: D,
  bottom: D,
  left: D,
  // Spacing props
  padding: D,
  paddingTop: D,
  paddingRight: D,
  paddingBottom: D,
  paddingLeft: D,
  margin: D,
  marginTop: D,
  marginRight: D,
  marginBottom: D,
  marginLeft: D,
  // Transform props
  rotate: st,
  rotateX: st,
  rotateY: st,
  rotateZ: st,
  scale: Zt,
  scaleX: Zt,
  scaleY: Zt,
  scaleZ: Zt,
  skew: st,
  skewX: st,
  skewY: st,
  distance: D,
  translateX: D,
  translateY: D,
  translateZ: D,
  x: D,
  y: D,
  z: D,
  perspective: D,
  transformPerspective: D,
  opacity: Et,
  originX: Dn,
  originY: Dn,
  originZ: D,
  // Misc
  zIndex: Mn,
  // SVG
  fillOpacity: Et,
  strokeOpacity: Et,
  numOctaves: Mn
};
function rn(t, e, n, s) {
  const { style: r, vars: o, transform: i, transformOrigin: a } = t;
  let l = !1, u = !1, c = !0;
  for (const f in e) {
    const h = e[f];
    if (Ns(f)) {
      o[f] = h;
      continue;
    }
    const p = Hs[f], d = Bi(h, p);
    if (xt.has(f)) {
      if (l = !0, i[f] = d, !c)
        continue;
      h !== (p.default || 0) && (c = !1);
    } else
      f.startsWith("origin") ? (u = !0, a[f] = d) : r[f] = d;
  }
  if (e.transform || (l || s ? r.transform = Li(t.transform, n, c, s) : r.transform && (r.transform = "none")), u) {
    const { originX: f = "50%", originY: h = "50%", originZ: p = 0 } = a;
    r.transformOrigin = `${f} ${h} ${p}`;
  }
}
const on = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function zs(t, e, n) {
  for (const s in e)
    !$(e[s]) && !_s(s, n) && (t[s] = e[s]);
}
function Ui({ transformTemplate: t }, e, n) {
  return w.useMemo(() => {
    const s = on();
    return rn(s, e, { enableHardwareAcceleration: !n }, t), Object.assign({}, s.vars, s.style);
  }, [e]);
}
function Ni(t, e, n) {
  const s = t.style || {}, r = {};
  return zs(r, s, t), Object.assign(r, Ui(t, e, n)), r;
}
function Wi(t, e, n) {
  const s = {}, r = Ni(t, e, n);
  return t.drag && t.dragListener !== !1 && (s.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = t.drag === !0 ? "none" : `pan-${t.drag === "x" ? "y" : "x"}`), t.tabIndex === void 0 && (t.onTap || t.onTapStart || t.whileTap) && (s.tabIndex = 0), s.style = r, s;
}
const Hi = /* @__PURE__ */ new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport"
]);
function ie(t) {
  return t.startsWith("while") || t.startsWith("drag") && t !== "draggable" || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || Hi.has(t);
}
let Gs = (t) => !ie(t);
function zi(t) {
  t && (Gs = (e) => e.startsWith("on") ? !ie(e) : t(e));
}
try {
  zi(require("@emotion/is-prop-valid").default);
} catch {
}
function Gi(t, e, n) {
  const s = {};
  for (const r in t)
    r === "values" && typeof t.values == "object" || (Gs(r) || n === !0 && ie(r) || !e && !ie(r) || // If trying to use native HTML drag events, forward drag listeners
    t.draggable && r.startsWith("onDrag")) && (s[r] = t[r]);
  return s;
}
function Rn(t, e, n) {
  return typeof t == "string" ? t : D.transform(e + n * t);
}
function $i(t, e, n) {
  const s = Rn(e, t.x, t.width), r = Rn(n, t.y, t.height);
  return `${s} ${r}`;
}
const Ki = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, qi = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function Yi(t, e, n = 1, s = 0, r = !0) {
  t.pathLength = 1;
  const o = r ? Ki : qi;
  t[o.offset] = D.transform(-s);
  const i = D.transform(e), a = D.transform(n);
  t[o.array] = `${i} ${a}`;
}
function an(t, {
  attrX: e,
  attrY: n,
  attrScale: s,
  originX: r,
  originY: o,
  pathLength: i,
  pathSpacing: a = 1,
  pathOffset: l = 0,
  // This is object creation, which we try to avoid per-frame.
  ...u
}, c, f, h) {
  if (rn(t, u, c, h), f) {
    t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
    return;
  }
  t.attrs = t.style, t.style = {};
  const { attrs: p, style: d, dimensions: m } = t;
  p.transform && (m && (d.transform = p.transform), delete p.transform), m && (r !== void 0 || o !== void 0 || d.transform) && (d.transformOrigin = $i(m, r !== void 0 ? r : 0.5, o !== void 0 ? o : 0.5)), e !== void 0 && (p.x = e), n !== void 0 && (p.y = n), s !== void 0 && (p.scale = s), i !== void 0 && Yi(p, i, a, l, !1);
}
const $s = () => ({
  ...on(),
  attrs: {}
}), ln = (t) => typeof t == "string" && t.toLowerCase() === "svg";
function Xi(t, e, n, s) {
  const r = w.useMemo(() => {
    const o = $s();
    return an(o, e, { enableHardwareAcceleration: !1 }, ln(s), t.transformTemplate), {
      ...o.attrs,
      style: { ...o.style }
    };
  }, [e]);
  if (t.style) {
    const o = {};
    zs(o, t.style, t), r.style = { ...o, ...r.style };
  }
  return r;
}
function Zi(t = !1) {
  return (n, s, r, { latestValues: o }, i) => {
    const l = (sn(n) ? Xi : Wi)(s, o, i, n), c = {
      ...Gi(s, typeof n == "string", t),
      ...l,
      ref: r
    }, { children: f } = s, h = w.useMemo(() => $(f) ? f.get() : f, [f]);
    return w.createElement(n, {
      ...c,
      children: h
    });
  };
}
function Ks(t, { style: e, vars: n }, s, r) {
  Object.assign(t.style, e, r && r.getProjectionStyles(s));
  for (const o in n)
    t.style.setProperty(o, n[o]);
}
const qs = /* @__PURE__ */ new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust"
]);
function Ys(t, e, n, s) {
  Ks(t, e, void 0, s);
  for (const r in e.attrs)
    t.setAttribute(qs.has(r) ? r : Qe(r), e.attrs[r]);
}
function un(t, e) {
  const { style: n } = t, s = {};
  for (const r in n)
    ($(n[r]) || e.style && $(e.style[r]) || _s(r, t)) && (s[r] = n[r]);
  return s;
}
function Xs(t, e) {
  const n = un(t, e);
  for (const s in t)
    if ($(t[s]) || $(e[s])) {
      const r = _t.indexOf(s) !== -1 ? "attr" + s.charAt(0).toUpperCase() + s.substring(1) : s;
      n[r] = t[s];
    }
  return n;
}
function cn(t, e, n, s = {}, r = {}) {
  return typeof e == "function" && (e = e(n !== void 0 ? n : t.custom, s, r)), typeof e == "string" && (e = t.variants && t.variants[e]), typeof e == "function" && (e = e(n !== void 0 ? n : t.custom, s, r)), e;
}
function Zs(t) {
  const e = w.useRef(null);
  return e.current === null && (e.current = t()), e.current;
}
const oe = (t) => Array.isArray(t), Qi = (t) => !!(t && typeof t == "object" && t.mix && t.toValue), Ji = (t) => oe(t) ? t[t.length - 1] || 0 : t;
function ee(t) {
  const e = $(t) ? t.get() : t;
  return Qi(e) ? e.toValue() : e;
}
function to({ scrapeMotionValuesFromProps: t, createRenderState: e, onMount: n }, s, r, o) {
  const i = {
    latestValues: eo(s, r, o, t),
    renderState: e()
  };
  return n && (i.mount = (a) => n(s, a, i)), i;
}
const Qs = (t) => (e, n) => {
  const s = w.useContext(he), r = w.useContext(de), o = () => to(t, e, s, r);
  return n ? o() : Zs(o);
};
function eo(t, e, n, s) {
  const r = {}, o = s(t, {});
  for (const h in o)
    r[h] = ee(o[h]);
  let { initial: i, animate: a } = t;
  const l = ge(t), u = Fs(t);
  e && u && !l && t.inherit !== !1 && (i === void 0 && (i = e.initial), a === void 0 && (a = e.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || i === !1;
  const f = c ? a : i;
  return f && typeof f != "boolean" && !me(f) && (Array.isArray(f) ? f : [f]).forEach((p) => {
    const d = cn(t, p);
    if (!d)
      return;
    const { transitionEnd: m, transition: y, ...v } = d;
    for (const x in v) {
      let g = v[x];
      if (Array.isArray(g)) {
        const V = c ? g.length - 1 : 0;
        g = g[V];
      }
      g !== null && (r[x] = g);
    }
    for (const x in m)
      r[x] = m[x];
  }), r;
}
const U = (t) => t, { schedule: B, cancel: et, state: W, steps: Pe } = Bs(typeof requestAnimationFrame < "u" ? requestAnimationFrame : U, !0), no = {
  useVisualState: Qs({
    scrapeMotionValuesFromProps: Xs,
    createRenderState: $s,
    onMount: (t, e, { renderState: n, latestValues: s }) => {
      B.read(() => {
        try {
          n.dimensions = typeof e.getBBox == "function" ? e.getBBox() : e.getBoundingClientRect();
        } catch {
          n.dimensions = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
          };
        }
      }), B.render(() => {
        an(n, s, { enableHardwareAcceleration: !1 }, ln(e.tagName), t.transformTemplate), Ys(e, n);
      });
    }
  })
}, so = {
  useVisualState: Qs({
    scrapeMotionValuesFromProps: un,
    createRenderState: on
  })
};
function ro(t, { forwardMotionProps: e = !1 }, n, s) {
  return {
    ...sn(t) ? no : so,
    preloadedFeatures: n,
    useRender: Zi(e),
    createVisualElement: s,
    Component: t
  };
}
function Q(t, e, n, s = { passive: !0 }) {
  return t.addEventListener(e, n, s), () => t.removeEventListener(e, n);
}
const Js = (t) => t.pointerType === "mouse" ? typeof t.button != "number" || t.button <= 0 : t.isPrimary !== !1;
function ve(t, e = "page") {
  return {
    point: {
      x: t[e + "X"],
      y: t[e + "Y"]
    }
  };
}
const io = (t) => (e) => Js(e) && t(e, ve(e));
function J(t, e, n, s) {
  return Q(t, e, io(n), s);
}
const oo = (t, e) => (n) => e(t(n)), it = (...t) => t.reduce(oo);
function tr(t) {
  let e = null;
  return () => {
    const n = () => {
      e = null;
    };
    return e === null ? (e = t, n) : !1;
  };
}
const On = tr("dragHorizontal"), En = tr("dragVertical");
function er(t) {
  let e = !1;
  if (t === "y")
    e = En();
  else if (t === "x")
    e = On();
  else {
    const n = On(), s = En();
    n && s ? e = () => {
      n(), s();
    } : (n && n(), s && s());
  }
  return e;
}
function nr() {
  const t = er(!0);
  return t ? (t(), !1) : !0;
}
class lt {
  constructor(e) {
    this.isMounted = !1, this.node = e;
  }
  update() {
  }
}
function jn(t, e) {
  const n = "pointer" + (e ? "enter" : "leave"), s = "onHover" + (e ? "Start" : "End"), r = (o, i) => {
    if (o.pointerType === "touch" || nr())
      return;
    const a = t.getProps();
    t.animationState && a.whileHover && t.animationState.setActive("whileHover", e), a[s] && B.update(() => a[s](o, i));
  };
  return J(t.current, n, r, {
    passive: !t.getProps()[s]
  });
}
class ao extends lt {
  mount() {
    this.unmount = it(jn(this.node, !0), jn(this.node, !1));
  }
  unmount() {
  }
}
class lo extends lt {
  constructor() {
    super(...arguments), this.isActive = !1;
  }
  onFocus() {
    let e = !1;
    try {
      e = this.node.current.matches(":focus-visible");
    } catch {
      e = !0;
    }
    !e || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0);
  }
  onBlur() {
    !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1);
  }
  mount() {
    this.unmount = it(Q(this.node.current, "focus", () => this.onFocus()), Q(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
const sr = (t, e) => e ? t === e ? !0 : sr(t, e.parentElement) : !1;
function Ce(t, e) {
  if (!e)
    return;
  const n = new PointerEvent("pointer" + t);
  e(n, ve(n));
}
class uo extends lt {
  constructor() {
    super(...arguments), this.removeStartListeners = U, this.removeEndListeners = U, this.removeAccessibleListeners = U, this.startPointerPress = (e, n) => {
      if (this.isPressing)
        return;
      this.removeEndListeners();
      const s = this.node.getProps(), o = J(window, "pointerup", (a, l) => {
        if (!this.checkPressEnd())
          return;
        const { onTap: u, onTapCancel: c, globalTapTarget: f } = this.node.getProps();
        B.update(() => {
          !f && !sr(this.node.current, a.target) ? c && c(a, l) : u && u(a, l);
        });
      }, { passive: !(s.onTap || s.onPointerUp) }), i = J(window, "pointercancel", (a, l) => this.cancelPress(a, l), { passive: !(s.onTapCancel || s.onPointerCancel) });
      this.removeEndListeners = it(o, i), this.startPress(e, n);
    }, this.startAccessiblePress = () => {
      const e = (o) => {
        if (o.key !== "Enter" || this.isPressing)
          return;
        const i = (a) => {
          a.key !== "Enter" || !this.checkPressEnd() || Ce("up", (l, u) => {
            const { onTap: c } = this.node.getProps();
            c && B.update(() => c(l, u));
          });
        };
        this.removeEndListeners(), this.removeEndListeners = Q(this.node.current, "keyup", i), Ce("down", (a, l) => {
          this.startPress(a, l);
        });
      }, n = Q(this.node.current, "keydown", e), s = () => {
        this.isPressing && Ce("cancel", (o, i) => this.cancelPress(o, i));
      }, r = Q(this.node.current, "blur", s);
      this.removeAccessibleListeners = it(n, r);
    };
  }
  startPress(e, n) {
    this.isPressing = !0;
    const { onTapStart: s, whileTap: r } = this.node.getProps();
    r && this.node.animationState && this.node.animationState.setActive("whileTap", !0), s && B.update(() => s(e, n));
  }
  checkPressEnd() {
    return this.removeEndListeners(), this.isPressing = !1, this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !nr();
  }
  cancelPress(e, n) {
    if (!this.checkPressEnd())
      return;
    const { onTapCancel: s } = this.node.getProps();
    s && B.update(() => s(e, n));
  }
  mount() {
    const e = this.node.getProps(), n = J(e.globalTapTarget ? window : this.node.current, "pointerdown", this.startPointerPress, { passive: !(e.onTapStart || e.onPointerStart) }), s = Q(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = it(n, s);
  }
  unmount() {
    this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners();
  }
}
const Fe = /* @__PURE__ */ new WeakMap(), Te = /* @__PURE__ */ new WeakMap(), co = (t) => {
  const e = Fe.get(t.target);
  e && e(t);
}, fo = (t) => {
  t.forEach(co);
};
function ho({ root: t, ...e }) {
  const n = t || document;
  Te.has(n) || Te.set(n, {});
  const s = Te.get(n), r = JSON.stringify(e);
  return s[r] || (s[r] = new IntersectionObserver(fo, { root: t, ...e })), s[r];
}
function po(t, e, n) {
  const s = ho(e);
  return Fe.set(t, n), s.observe(t), () => {
    Fe.delete(t), s.unobserve(t);
  };
}
const mo = {
  some: 0,
  all: 1
};
class go extends lt {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: e = {} } = this.node.getProps(), { root: n, margin: s, amount: r = "some", once: o } = e, i = {
      root: n ? n.current : void 0,
      rootMargin: s,
      threshold: typeof r == "number" ? r : mo[r]
    }, a = (l) => {
      const { isIntersecting: u } = l;
      if (this.isInView === u || (this.isInView = u, o && !u && this.hasEnteredView))
        return;
      u && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", u);
      const { onViewportEnter: c, onViewportLeave: f } = this.node.getProps(), h = u ? c : f;
      h && h(l);
    };
    return po(this.node.current, i, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: e, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(yo(e, n)) && this.startObserver();
  }
  unmount() {
  }
}
function yo({ viewport: t = {} }, { viewport: e = {} } = {}) {
  return (n) => t[n] !== e[n];
}
const vo = {
  inView: {
    Feature: go
  },
  tap: {
    Feature: uo
  },
  focus: {
    Feature: lo
  },
  hover: {
    Feature: ao
  }
};
function rr(t, e) {
  if (!Array.isArray(e))
    return !1;
  const n = e.length;
  if (n !== t.length)
    return !1;
  for (let s = 0; s < n; s++)
    if (e[s] !== t[s])
      return !1;
  return !0;
}
function xo(t) {
  const e = {};
  return t.values.forEach((n, s) => e[s] = n.get()), e;
}
function bo(t) {
  const e = {};
  return t.values.forEach((n, s) => e[s] = n.getVelocity()), e;
}
function xe(t, e, n) {
  const s = t.getProps();
  return cn(s, e, n !== void 0 ? n : s.custom, xo(t), bo(t));
}
let fn = U;
const yt = (t) => t * 1e3, tt = (t) => t / 1e3, Po = {
  current: !1
}, ir = (t) => Array.isArray(t) && typeof t[0] == "number";
function or(t) {
  return !!(!t || typeof t == "string" && ar[t] || ir(t) || Array.isArray(t) && t.every(or));
}
const Ot = ([t, e, n, s]) => `cubic-bezier(${t}, ${e}, ${n}, ${s})`, ar = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: Ot([0, 0.65, 0.55, 1]),
  circOut: Ot([0.55, 0, 1, 0.45]),
  backIn: Ot([0.31, 0.01, 0.66, -0.59]),
  backOut: Ot([0.33, 1.53, 0.69, 0.99])
};
function lr(t) {
  if (t)
    return ir(t) ? Ot(t) : Array.isArray(t) ? t.map(lr) : ar[t];
}
function Co(t, e, n, { delay: s = 0, duration: r, repeat: o = 0, repeatType: i = "loop", ease: a, times: l } = {}) {
  const u = { [e]: n };
  l && (u.offset = l);
  const c = lr(a);
  return Array.isArray(c) && (u.easing = c), t.animate(u, {
    delay: s,
    duration: r,
    easing: Array.isArray(c) ? "linear" : c,
    fill: "both",
    iterations: o + 1,
    direction: i === "reverse" ? "alternate" : "normal"
  });
}
function To(t, { repeat: e, repeatType: n = "loop" }) {
  const s = e && n !== "loop" && e % 2 === 1 ? 0 : t.length - 1;
  return t[s];
}
const ur = (t, e, n) => (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t, wo = 1e-7, So = 12;
function Vo(t, e, n, s, r) {
  let o, i, a = 0;
  do
    i = e + (n - e) / 2, o = ur(i, s, r) - t, o > 0 ? n = i : e = i;
  while (Math.abs(o) > wo && ++a < So);
  return i;
}
function Wt(t, e, n, s) {
  if (t === e && n === s)
    return U;
  const r = (o) => Vo(o, 0, 1, t, n);
  return (o) => o === 0 || o === 1 ? o : ur(r(o), e, s);
}
const Ao = Wt(0.42, 0, 1, 1), Do = Wt(0, 0, 0.58, 1), cr = Wt(0.42, 0, 0.58, 1), Mo = (t) => Array.isArray(t) && typeof t[0] != "number", fr = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2, hr = (t) => (e) => 1 - t(1 - e), hn = (t) => 1 - Math.sin(Math.acos(t)), dr = hr(hn), Ro = fr(hn), pr = Wt(0.33, 1.53, 0.69, 0.99), dn = hr(pr), Oo = fr(dn), Eo = (t) => (t *= 2) < 1 ? 0.5 * dn(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))), jo = {
  linear: U,
  easeIn: Ao,
  easeInOut: cr,
  easeOut: Do,
  circIn: hn,
  circInOut: Ro,
  circOut: dr,
  backIn: dn,
  backInOut: Oo,
  backOut: pr,
  anticipate: Eo
}, Ln = (t) => {
  if (Array.isArray(t)) {
    fn(t.length === 4);
    const [e, n, s, r] = t;
    return Wt(e, n, s, r);
  } else if (typeof t == "string")
    return jo[t];
  return t;
}, pn = (t, e) => (n) => !!(Ut(n) && Fi.test(n) && n.startsWith(t) || e && Object.prototype.hasOwnProperty.call(n, e)), mr = (t, e, n) => (s) => {
  if (!Ut(s))
    return s;
  const [r, o, i, a] = s.match(ye);
  return {
    [t]: parseFloat(r),
    [e]: parseFloat(o),
    [n]: parseFloat(i),
    alpha: a !== void 0 ? parseFloat(a) : 1
  };
}, Lo = (t) => ot(0, 255, t), we = {
  ...bt,
  transform: (t) => Math.round(Lo(t))
}, gt = {
  test: pn("rgb", "red"),
  parse: mr("red", "green", "blue"),
  transform: ({ red: t, green: e, blue: n, alpha: s = 1 }) => "rgba(" + we.transform(t) + ", " + we.transform(e) + ", " + we.transform(n) + ", " + jt(Et.transform(s)) + ")"
};
function ko(t) {
  let e = "", n = "", s = "", r = "";
  return t.length > 5 ? (e = t.substring(1, 3), n = t.substring(3, 5), s = t.substring(5, 7), r = t.substring(7, 9)) : (e = t.substring(1, 2), n = t.substring(2, 3), s = t.substring(3, 4), r = t.substring(4, 5), e += e, n += n, s += s, r += r), {
    red: parseInt(e, 16),
    green: parseInt(n, 16),
    blue: parseInt(s, 16),
    alpha: r ? parseInt(r, 16) / 255 : 1
  };
}
const Ie = {
  test: pn("#"),
  parse: ko,
  transform: gt.transform
}, Ct = {
  test: pn("hsl", "hue"),
  parse: mr("hue", "saturation", "lightness"),
  transform: ({ hue: t, saturation: e, lightness: n, alpha: s = 1 }) => "hsla(" + Math.round(t) + ", " + Z.transform(jt(e)) + ", " + Z.transform(jt(n)) + ", " + jt(Et.transform(s)) + ")"
}, G = {
  test: (t) => gt.test(t) || Ie.test(t) || Ct.test(t),
  parse: (t) => gt.test(t) ? gt.parse(t) : Ct.test(t) ? Ct.parse(t) : Ie.parse(t),
  transform: (t) => Ut(t) ? t : t.hasOwnProperty("red") ? gt.transform(t) : Ct.transform(t)
}, I = (t, e, n) => -n * t + n * e + t;
function Se(t, e, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + (e - t) * 6 * n : n < 1 / 2 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t;
}
function Bo({ hue: t, saturation: e, lightness: n, alpha: s }) {
  t /= 360, e /= 100, n /= 100;
  let r = 0, o = 0, i = 0;
  if (!e)
    r = o = i = n;
  else {
    const a = n < 0.5 ? n * (1 + e) : n + e - n * e, l = 2 * n - a;
    r = Se(l, a, t + 1 / 3), o = Se(l, a, t), i = Se(l, a, t - 1 / 3);
  }
  return {
    red: Math.round(r * 255),
    green: Math.round(o * 255),
    blue: Math.round(i * 255),
    alpha: s
  };
}
const Ve = (t, e, n) => {
  const s = t * t;
  return Math.sqrt(Math.max(0, n * (e * e - s) + s));
}, Fo = [Ie, gt, Ct], Io = (t) => Fo.find((e) => e.test(t));
function kn(t) {
  const e = Io(t);
  let n = e.parse(t);
  return e === Ct && (n = Bo(n)), n;
}
const gr = (t, e) => {
  const n = kn(t), s = kn(e), r = { ...n };
  return (o) => (r.red = Ve(n.red, s.red, o), r.green = Ve(n.green, s.green, o), r.blue = Ve(n.blue, s.blue, o), r.alpha = I(n.alpha, s.alpha, o), gt.transform(r));
};
function _o(t) {
  var e, n;
  return isNaN(t) && Ut(t) && (((e = t.match(ye)) === null || e === void 0 ? void 0 : e.length) || 0) + (((n = t.match(Ws)) === null || n === void 0 ? void 0 : n.length) || 0) > 0;
}
const yr = {
  regex: ki,
  countKey: "Vars",
  token: "${v}",
  parse: U
}, vr = {
  regex: Ws,
  countKey: "Colors",
  token: "${c}",
  parse: G.parse
}, xr = {
  regex: ye,
  countKey: "Numbers",
  token: "${n}",
  parse: bt.parse
};
function Ae(t, { regex: e, countKey: n, token: s, parse: r }) {
  const o = t.tokenised.match(e);
  o && (t["num" + n] = o.length, t.tokenised = t.tokenised.replace(e, s), t.values.push(...o.map(r)));
}
function ae(t) {
  const e = t.toString(), n = {
    value: e,
    tokenised: e,
    values: [],
    numVars: 0,
    numColors: 0,
    numNumbers: 0
  };
  return n.value.includes("var(--") && Ae(n, yr), Ae(n, vr), Ae(n, xr), n;
}
function br(t) {
  return ae(t).values;
}
function Pr(t) {
  const { values: e, numColors: n, numVars: s, tokenised: r } = ae(t), o = e.length;
  return (i) => {
    let a = r;
    for (let l = 0; l < o; l++)
      l < s ? a = a.replace(yr.token, i[l]) : l < s + n ? a = a.replace(vr.token, G.transform(i[l])) : a = a.replace(xr.token, jt(i[l]));
    return a;
  };
}
const Uo = (t) => typeof t == "number" ? 0 : t;
function No(t) {
  const e = br(t);
  return Pr(t)(e.map(Uo));
}
const at = {
  test: _o,
  parse: br,
  createTransformer: Pr,
  getAnimatableNone: No
}, Cr = (t, e) => (n) => `${n > 0 ? e : t}`;
function Tr(t, e) {
  return typeof t == "number" ? (n) => I(t, e, n) : G.test(t) ? gr(t, e) : t.startsWith("var(") ? Cr(t, e) : Sr(t, e);
}
const wr = (t, e) => {
  const n = [...t], s = n.length, r = t.map((o, i) => Tr(o, e[i]));
  return (o) => {
    for (let i = 0; i < s; i++)
      n[i] = r[i](o);
    return n;
  };
}, Wo = (t, e) => {
  const n = { ...t, ...e }, s = {};
  for (const r in n)
    t[r] !== void 0 && e[r] !== void 0 && (s[r] = Tr(t[r], e[r]));
  return (r) => {
    for (const o in s)
      n[o] = s[o](r);
    return n;
  };
}, Sr = (t, e) => {
  const n = at.createTransformer(e), s = ae(t), r = ae(e);
  return s.numVars === r.numVars && s.numColors === r.numColors && s.numNumbers >= r.numNumbers ? it(wr(s.values, r.values), n) : Cr(t, e);
}, It = (t, e, n) => {
  const s = e - t;
  return s === 0 ? 1 : (n - t) / s;
}, Bn = (t, e) => (n) => I(t, e, n);
function Ho(t) {
  return typeof t == "number" ? Bn : typeof t == "string" ? G.test(t) ? gr : Sr : Array.isArray(t) ? wr : typeof t == "object" ? Wo : Bn;
}
function zo(t, e, n) {
  const s = [], r = n || Ho(t[0]), o = t.length - 1;
  for (let i = 0; i < o; i++) {
    let a = r(t[i], t[i + 1]);
    if (e) {
      const l = Array.isArray(e) ? e[i] || U : e;
      a = it(l, a);
    }
    s.push(a);
  }
  return s;
}
function Vr(t, e, { clamp: n = !0, ease: s, mixer: r } = {}) {
  const o = t.length;
  if (fn(o === e.length), o === 1)
    return () => e[0];
  t[0] > t[o - 1] && (t = [...t].reverse(), e = [...e].reverse());
  const i = zo(e, s, r), a = i.length, l = (u) => {
    let c = 0;
    if (a > 1)
      for (; c < t.length - 2 && !(u < t[c + 1]); c++)
        ;
    const f = It(t[c], t[c + 1], u);
    return i[c](f);
  };
  return n ? (u) => l(ot(t[0], t[o - 1], u)) : l;
}
function Go(t, e) {
  const n = t[t.length - 1];
  for (let s = 1; s <= e; s++) {
    const r = It(0, e, s);
    t.push(I(n, 1, r));
  }
}
function $o(t) {
  const e = [0];
  return Go(e, t.length - 1), e;
}
function Ko(t, e) {
  return t.map((n) => n * e);
}
function qo(t, e) {
  return t.map(() => e || cr).splice(0, t.length - 1);
}
function le({ duration: t = 300, keyframes: e, times: n, ease: s = "easeInOut" }) {
  const r = Mo(s) ? s.map(Ln) : Ln(s), o = {
    done: !1,
    value: e[0]
  }, i = Ko(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    n && n.length === e.length ? n : $o(e),
    t
  ), a = Vr(i, e, {
    ease: Array.isArray(r) ? r : qo(e, r)
  });
  return {
    calculatedDuration: t,
    next: (l) => (o.value = a(l), o.done = l >= t, o)
  };
}
function Ar(t, e) {
  return e ? t * (1e3 / e) : 0;
}
const Yo = 5;
function Dr(t, e, n) {
  const s = Math.max(e - Yo, 0);
  return Ar(n - t(s), e - s);
}
const De = 1e-3, Xo = 0.01, Zo = 10, Qo = 0.05, Jo = 1;
function ta({ duration: t = 800, bounce: e = 0.25, velocity: n = 0, mass: s = 1 }) {
  let r, o, i = 1 - e;
  i = ot(Qo, Jo, i), t = ot(Xo, Zo, tt(t)), i < 1 ? (r = (u) => {
    const c = u * i, f = c * t, h = c - n, p = _e(u, i), d = Math.exp(-f);
    return De - h / p * d;
  }, o = (u) => {
    const f = u * i * t, h = f * n + n, p = Math.pow(i, 2) * Math.pow(u, 2) * t, d = Math.exp(-f), m = _e(Math.pow(u, 2), i);
    return (-r(u) + De > 0 ? -1 : 1) * ((h - p) * d) / m;
  }) : (r = (u) => {
    const c = Math.exp(-u * t), f = (u - n) * t + 1;
    return -De + c * f;
  }, o = (u) => {
    const c = Math.exp(-u * t), f = (n - u) * (t * t);
    return c * f;
  });
  const a = 5 / t, l = na(r, o, a);
  if (t = yt(t), isNaN(l))
    return {
      stiffness: 100,
      damping: 10,
      duration: t
    };
  {
    const u = Math.pow(l, 2) * s;
    return {
      stiffness: u,
      damping: i * 2 * Math.sqrt(s * u),
      duration: t
    };
  }
}
const ea = 12;
function na(t, e, n) {
  let s = n;
  for (let r = 1; r < ea; r++)
    s = s - t(s) / e(s);
  return s;
}
function _e(t, e) {
  return t * Math.sqrt(1 - e * e);
}
const sa = ["duration", "bounce"], ra = ["stiffness", "damping", "mass"];
function Fn(t, e) {
  return e.some((n) => t[n] !== void 0);
}
function ia(t) {
  let e = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...t
  };
  if (!Fn(t, ra) && Fn(t, sa)) {
    const n = ta(t);
    e = {
      ...e,
      ...n,
      mass: 1
    }, e.isResolvedFromDuration = !0;
  }
  return e;
}
function Mr({ keyframes: t, restDelta: e, restSpeed: n, ...s }) {
  const r = t[0], o = t[t.length - 1], i = { done: !1, value: r }, { stiffness: a, damping: l, mass: u, duration: c, velocity: f, isResolvedFromDuration: h } = ia({
    ...s,
    velocity: -tt(s.velocity || 0)
  }), p = f || 0, d = l / (2 * Math.sqrt(a * u)), m = o - r, y = tt(Math.sqrt(a / u)), v = Math.abs(m) < 5;
  n || (n = v ? 0.01 : 2), e || (e = v ? 5e-3 : 0.5);
  let x;
  if (d < 1) {
    const g = _e(y, d);
    x = (V) => {
      const b = Math.exp(-d * y * V);
      return o - b * ((p + d * y * m) / g * Math.sin(g * V) + m * Math.cos(g * V));
    };
  } else if (d === 1)
    x = (g) => o - Math.exp(-y * g) * (m + (p + y * m) * g);
  else {
    const g = y * Math.sqrt(d * d - 1);
    x = (V) => {
      const b = Math.exp(-d * y * V), R = Math.min(g * V, 300);
      return o - b * ((p + d * y * m) * Math.sinh(R) + g * m * Math.cosh(R)) / g;
    };
  }
  return {
    calculatedDuration: h && c || null,
    next: (g) => {
      const V = x(g);
      if (h)
        i.done = g >= c;
      else {
        let b = p;
        g !== 0 && (d < 1 ? b = Dr(x, g, V) : b = 0);
        const R = Math.abs(b) <= n, j = Math.abs(o - V) <= e;
        i.done = R && j;
      }
      return i.value = i.done ? o : V, i;
    }
  };
}
function In({ keyframes: t, velocity: e = 0, power: n = 0.8, timeConstant: s = 325, bounceDamping: r = 10, bounceStiffness: o = 500, modifyTarget: i, min: a, max: l, restDelta: u = 0.5, restSpeed: c }) {
  const f = t[0], h = {
    done: !1,
    value: f
  }, p = (M) => a !== void 0 && M < a || l !== void 0 && M > l, d = (M) => a === void 0 ? l : l === void 0 || Math.abs(a - M) < Math.abs(l - M) ? a : l;
  let m = n * e;
  const y = f + m, v = i === void 0 ? y : i(y);
  v !== y && (m = v - f);
  const x = (M) => -m * Math.exp(-M / s), g = (M) => v + x(M), V = (M) => {
    const E = x(M), H = g(M);
    h.done = Math.abs(E) <= u, h.value = h.done ? v : H;
  };
  let b, R;
  const j = (M) => {
    p(h.value) && (b = M, R = Mr({
      keyframes: [h.value, d(h.value)],
      velocity: Dr(g, M, h.value),
      damping: r,
      stiffness: o,
      restDelta: u,
      restSpeed: c
    }));
  };
  return j(0), {
    calculatedDuration: null,
    next: (M) => {
      let E = !1;
      return !R && b === void 0 && (E = !0, V(M), j(M)), b !== void 0 && M > b ? R.next(M - b) : (!E && V(M), h);
    }
  };
}
let ne;
function oa() {
  ne = void 0;
}
const vt = {
  now: () => (ne === void 0 && vt.set(W.isProcessing || ks.useManualTiming ? W.timestamp : performance.now()), ne),
  set: (t) => {
    ne = t, queueMicrotask(oa);
  }
}, aa = (t) => {
  const e = ({ timestamp: n }) => t(n);
  return {
    start: () => B.update(e, !0),
    stop: () => et(e),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => W.isProcessing ? W.timestamp : vt.now()
  };
}, _n = 2e4;
function Un(t) {
  let e = 0;
  const n = 50;
  let s = t.next(e);
  for (; !s.done && e < _n; )
    e += n, s = t.next(e);
  return e >= _n ? 1 / 0 : e;
}
const la = {
  decay: In,
  inertia: In,
  tween: le,
  keyframes: le,
  spring: Mr
};
function ue({ autoplay: t = !0, delay: e = 0, driver: n = aa, keyframes: s, type: r = "keyframes", repeat: o = 0, repeatDelay: i = 0, repeatType: a = "loop", onPlay: l, onStop: u, onComplete: c, onUpdate: f, ...h }) {
  let p = 1, d = !1, m, y;
  const v = () => {
    y = new Promise((k) => {
      m = k;
    });
  };
  v();
  let x;
  const g = la[r] || le;
  let V;
  g !== le && typeof s[0] != "number" && (V = Vr([0, 100], s, {
    clamp: !1
  }), s = [0, 100]);
  const b = g({ ...h, keyframes: s });
  let R;
  a === "mirror" && (R = g({
    ...h,
    keyframes: [...s].reverse(),
    velocity: -(h.velocity || 0)
  }));
  let j = "idle", M = null, E = null, H = null;
  b.calculatedDuration === null && o && (b.calculatedDuration = Un(b));
  const { calculatedDuration: P } = b;
  let T = 1 / 0, A = 1 / 0;
  P !== null && (T = P + i, A = T * (o + 1) - i);
  let S = 0;
  const L = (k) => {
    if (E === null)
      return;
    p > 0 && (E = Math.min(E, k)), p < 0 && (E = Math.min(k - A / p, E)), M !== null ? S = M : S = Math.round(k - E) * p;
    const nt = S - e * (p >= 0 ? 1 : -1), zt = p >= 0 ? nt < 0 : nt > A;
    S = Math.max(nt, 0), j === "finished" && M === null && (S = A);
    let Gt = S, $t = b;
    if (o) {
      const At = Math.min(S, A) / T;
      let qt = Math.floor(At), ct = At % 1;
      !ct && At >= 1 && (ct = 1), ct === 1 && qt--, qt = Math.min(qt, o + 1), !!(qt % 2) && (a === "reverse" ? (ct = 1 - ct, i && (ct -= i / T)) : a === "mirror" && ($t = R)), Gt = ot(0, 1, ct) * T;
    }
    const ut = zt ? { done: !1, value: s[0] } : $t.next(Gt);
    V && (ut.value = V(ut.value));
    let { done: Kt } = ut;
    !zt && P !== null && (Kt = p >= 0 ? S >= A : S <= 0);
    const Pn = M === null && (j === "finished" || j === "running" && Kt);
    return f && f(ut.value), Pn && X(), ut;
  }, O = () => {
    x && x.stop(), x = void 0;
  }, F = () => {
    j = "idle", O(), m(), v(), E = H = null;
  }, X = () => {
    j = "finished", c && c(), O(), m();
  }, N = () => {
    if (d)
      return;
    x || (x = n(L));
    const k = x.now();
    l && l(), M !== null ? E = k - M : (!E || j === "finished") && (E = k), j === "finished" && v(), H = E, M = null, j = "running", x.start();
  };
  t && N();
  const Ht = {
    then(k, nt) {
      return y.then(k, nt);
    },
    get time() {
      return tt(S);
    },
    set time(k) {
      k = yt(k), S = k, M !== null || !x || p === 0 ? M = k : E = x.now() - k / p;
    },
    get duration() {
      const k = b.calculatedDuration === null ? Un(b) : b.calculatedDuration;
      return tt(k);
    },
    get speed() {
      return p;
    },
    set speed(k) {
      k === p || !x || (p = k, Ht.time = tt(S));
    },
    get state() {
      return j;
    },
    play: N,
    pause: () => {
      j = "paused", M = S;
    },
    stop: () => {
      d = !0, j !== "idle" && (j = "idle", u && u(), F());
    },
    cancel: () => {
      H !== null && L(H), F();
    },
    complete: () => {
      j = "finished";
    },
    sample: (k) => (E = 0, L(k))
  };
  return Ht;
}
function ua(t) {
  let e;
  return () => (e === void 0 && (e = t()), e);
}
const ca = ua(() => Object.hasOwnProperty.call(Element.prototype, "animate")), fa = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform",
  "backgroundColor"
]), Qt = 10, ha = 2e4, da = (t, e) => e.type === "spring" || t === "backgroundColor" || !or(e.ease);
function pa(t, e, { onUpdate: n, onComplete: s, ...r }) {
  if (!(ca() && fa.has(e) && !r.repeatDelay && r.repeatType !== "mirror" && r.damping !== 0 && r.type !== "inertia"))
    return !1;
  let i = !1, a, l, u = !1;
  const c = () => {
    l = new Promise((g) => {
      a = g;
    });
  };
  c();
  let { keyframes: f, duration: h = 300, ease: p, times: d } = r;
  if (da(e, r)) {
    const g = ue({
      ...r,
      repeat: 0,
      delay: 0
    });
    let V = { done: !1, value: f[0] };
    const b = [];
    let R = 0;
    for (; !V.done && R < ha; )
      V = g.sample(R), b.push(V.value), R += Qt;
    d = void 0, f = b, h = R - Qt, p = "linear";
  }
  const m = Co(t.owner.current, e, f, {
    ...r,
    duration: h,
    /**
     * This function is currently not called if ease is provided
     * as a function so the cast is safe.
     *
     * However it would be possible for a future refinement to port
     * in easing pregeneration from Motion One for browsers that
     * support the upcoming `linear()` easing function.
     */
    ease: p,
    times: d
  }), y = () => {
    u = !1, m.cancel();
  }, v = () => {
    u = !0, B.update(y), a(), c();
  };
  return m.onfinish = () => {
    u || (t.set(To(f, r)), s && s(), v());
  }, {
    then(g, V) {
      return l.then(g, V);
    },
    attachTimeline(g) {
      return m.timeline = g, m.onfinish = null, U;
    },
    get time() {
      return tt(m.currentTime || 0);
    },
    set time(g) {
      m.currentTime = yt(g);
    },
    get speed() {
      return m.playbackRate;
    },
    set speed(g) {
      m.playbackRate = g;
    },
    get duration() {
      return tt(h);
    },
    play: () => {
      i || (m.play(), et(y));
    },
    pause: () => m.pause(),
    stop: () => {
      if (i = !0, m.playState === "idle")
        return;
      const { currentTime: g } = m;
      if (g) {
        const V = ue({
          ...r,
          autoplay: !1
        });
        t.setWithVelocity(V.sample(g - Qt).value, V.sample(g).value, Qt);
      }
      v();
    },
    complete: () => {
      u || m.finish();
    },
    cancel: v
  };
}
function ma({ keyframes: t, delay: e, onUpdate: n, onComplete: s }) {
  const r = () => (n && n(t[t.length - 1]), s && s(), {
    time: 0,
    speed: 1,
    duration: 0,
    play: U,
    pause: U,
    stop: U,
    then: (o) => (o(), Promise.resolve()),
    cancel: U,
    complete: U
  });
  return e ? ue({
    keyframes: [0, 1],
    duration: 0,
    delay: e,
    onComplete: r
  }) : r();
}
const ga = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, ya = (t) => ({
  type: "spring",
  stiffness: 550,
  damping: t === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), va = {
  type: "keyframes",
  duration: 0.8
}, xa = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, ba = (t, { keyframes: e }) => e.length > 2 ? va : xt.has(t) ? t.startsWith("scale") ? ya(e[1]) : ga : xa, Ue = (t, e) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && // It's animatable if we have a string
(at.test(e) || e === "0") && // And it contains numbers and/or colors
!e.startsWith("url(")), Pa = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function Ca(t) {
  const [e, n] = t.slice(0, -1).split("(");
  if (e === "drop-shadow")
    return t;
  const [s] = n.match(ye) || [];
  if (!s)
    return t;
  const r = n.replace(s, "");
  let o = Pa.has(e) ? 1 : 0;
  return s !== n && (o *= 100), e + "(" + o + r + ")";
}
const Ta = /([a-z-]*)\(.*?\)/g, Ne = {
  ...at,
  getAnimatableNone: (t) => {
    const e = t.match(Ta);
    return e ? e.map(Ca).join(" ") : t;
  }
}, wa = {
  ...Hs,
  // Color props
  color: G,
  backgroundColor: G,
  outlineColor: G,
  fill: G,
  stroke: G,
  // Border props
  borderColor: G,
  borderTopColor: G,
  borderRightColor: G,
  borderBottomColor: G,
  borderLeftColor: G,
  filter: Ne,
  WebkitFilter: Ne
}, mn = (t) => wa[t];
function Rr(t, e) {
  let n = mn(t);
  return n !== Ne && (n = at), n.getAnimatableNone ? n.getAnimatableNone(e) : void 0;
}
const Or = (t) => /^0[^.\s]+$/.test(t);
function Sa(t) {
  if (typeof t == "number")
    return t === 0;
  if (t !== null)
    return t === "none" || t === "0" || Or(t);
}
function Va(t, e, n, s) {
  const r = Ue(e, n);
  let o;
  Array.isArray(n) ? o = [...n] : o = [null, n];
  const i = s.from !== void 0 ? s.from : t.get();
  let a;
  const l = [];
  for (let u = 0; u < o.length; u++)
    o[u] === null && (o[u] = u === 0 ? i : o[u - 1]), Sa(o[u]) && l.push(u), typeof o[u] == "string" && o[u] !== "none" && o[u] !== "0" && (a = o[u]);
  if (r && l.length && a)
    for (let u = 0; u < l.length; u++) {
      const c = l[u];
      o[c] = Rr(e, a);
    }
  return o;
}
function Aa({ when: t, delay: e, delayChildren: n, staggerChildren: s, staggerDirection: r, repeat: o, repeatType: i, repeatDelay: a, from: l, elapsed: u, ...c }) {
  return !!Object.keys(c).length;
}
function gn(t, e) {
  return t[e] || t.default || t;
}
const yn = (t, e, n, s = {}) => (r) => {
  const o = gn(s, t) || {}, i = o.delay || s.delay || 0;
  let { elapsed: a = 0 } = s;
  a = a - yt(i);
  const l = Va(e, t, n, o), u = l[0], c = l[l.length - 1], f = Ue(t, u), h = Ue(t, c);
  let p = {
    keyframes: l,
    velocity: e.getVelocity(),
    ease: "easeOut",
    ...o,
    delay: -a,
    onUpdate: (d) => {
      e.set(d), o.onUpdate && o.onUpdate(d);
    },
    onComplete: () => {
      r(), o.onComplete && o.onComplete();
    }
  };
  if (Aa(o) || (p = {
    ...p,
    ...ba(t, p)
  }), p.duration && (p.duration = yt(p.duration)), p.repeatDelay && (p.repeatDelay = yt(p.repeatDelay)), !f || !h || Po.current || o.type === !1 || ks.skipAnimations)
    return ma(p);
  if (
    /**
     * If this is a handoff animation, the optimised animation will be running via
     * WAAPI. Therefore, this animation must be JS to ensure it runs "under" the
     * optimised animation.
     */
    !s.isHandoff && e.owner && e.owner.current instanceof HTMLElement && /**
     * If we're outputting values to onUpdate then we can't use WAAPI as there's
     * no way to read the value from WAAPI every frame.
     */
    !e.owner.getProps().onUpdate
  ) {
    const d = pa(e, t, p);
    if (d)
      return d;
  }
  return ue(p);
};
function ce(t) {
  return !!($(t) && t.add);
}
const Er = (t) => /^\-?\d*\.?\d+$/.test(t);
function vn(t, e) {
  t.indexOf(e) === -1 && t.push(e);
}
function xn(t, e) {
  const n = t.indexOf(e);
  n > -1 && t.splice(n, 1);
}
class bn {
  constructor() {
    this.subscriptions = [];
  }
  add(e) {
    return vn(this.subscriptions, e), () => xn(this.subscriptions, e);
  }
  notify(e, n, s) {
    const r = this.subscriptions.length;
    if (r)
      if (r === 1)
        this.subscriptions[0](e, n, s);
      else
        for (let o = 0; o < r; o++) {
          const i = this.subscriptions[o];
          i && i(e, n, s);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const Nn = 30, Da = (t) => !isNaN(parseFloat(t));
class Ma {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   *
   * @internal
   */
  constructor(e, n = {}) {
    this.version = "11.0.3", this.canTrackVelocity = !1, this.events = {}, this.updateAndNotify = (s, r = !0) => {
      const o = vt.now();
      this.updatedAt !== o && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(s), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), r && this.events.renderRequest && this.events.renderRequest.notify(this.current);
    }, this.hasAnimated = !1, this.setCurrent(e), this.canTrackVelocity = Da(this.current), this.owner = n.owner;
  }
  setCurrent(e) {
    this.current = e, this.updatedAt = vt.now();
  }
  setPrevFrameValue(e = this.current) {
    this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt;
  }
  /**
   * Adds a function that will be notified when the `MotionValue` is updated.
   *
   * It returns a function that, when called, will cancel the subscription.
   *
   * When calling `onChange` inside a React component, it should be wrapped with the
   * `useEffect` hook. As it returns an unsubscribe function, this should be returned
   * from the `useEffect` function to ensure you don't add duplicate subscribers..
   *
   * ```jsx
   * export const MyComponent = () => {
   *   const x = useMotionValue(0)
   *   const y = useMotionValue(0)
   *   const opacity = useMotionValue(1)
   *
   *   useEffect(() => {
   *     function updateOpacity() {
   *       const maxXY = Math.max(x.get(), y.get())
   *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
   *       opacity.set(newOpacity)
   *     }
   *
   *     const unsubscribeX = x.on("change", updateOpacity)
   *     const unsubscribeY = y.on("change", updateOpacity)
   *
   *     return () => {
   *       unsubscribeX()
   *       unsubscribeY()
   *     }
   *   }, [])
   *
   *   return <motion.div style={{ x }} />
   * }
   * ```
   *
   * @param subscriber - A function that receives the latest value.
   * @returns A function that, when called, will cancel this subscription.
   *
   * @deprecated
   */
  onChange(e) {
    return this.on("change", e);
  }
  on(e, n) {
    this.events[e] || (this.events[e] = new bn());
    const s = this.events[e].add(n);
    return e === "change" ? () => {
      s(), B.read(() => {
        this.events.change.getSize() || this.stop();
      });
    } : s;
  }
  clearListeners() {
    for (const e in this.events)
      this.events[e].clear();
  }
  /**
   * Attaches a passive effect to the `MotionValue`.
   *
   * @internal
   */
  attach(e, n) {
    this.passiveEffect = e, this.stopPassiveEffect = n;
  }
  /**
   * Sets the state of the `MotionValue`.
   *
   * @remarks
   *
   * ```jsx
   * const x = useMotionValue(0)
   * x.set(10)
   * ```
   *
   * @param latest - Latest value to set.
   * @param render - Whether to notify render subscribers. Defaults to `true`
   *
   * @public
   */
  set(e, n = !0) {
    !n || !this.passiveEffect ? this.updateAndNotify(e, n) : this.passiveEffect(e, this.updateAndNotify);
  }
  setWithVelocity(e, n, s) {
    this.set(n), this.prev = void 0, this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt - s;
  }
  /**
   * Set the state of the `MotionValue`, stopping any active animations,
   * effects, and resets velocity to `0`.
   */
  jump(e) {
    this.updateAndNotify(e), this.prev = e, this.prevUpdatedAt = this.prevFrameValue = void 0, this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
  /**
   * Returns the latest state of `MotionValue`
   *
   * @returns - The latest state of `MotionValue`
   *
   * @public
   */
  get() {
    return this.current;
  }
  /**
   * @public
   */
  getPrevious() {
    return this.prev;
  }
  /**
   * Returns the latest velocity of `MotionValue`
   *
   * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
   *
   * @public
   */
  getVelocity() {
    const e = vt.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || e - this.updatedAt > Nn)
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, Nn);
    return Ar(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  /**
   * Registers a new animation to control this `MotionValue`. Only one
   * animation can drive a `MotionValue` at one time.
   *
   * ```jsx
   * value.start()
   * ```
   *
   * @param animation - A function that starts the provided animation
   *
   * @internal
   */
  start(e) {
    return this.stop(), new Promise((n) => {
      this.hasAnimated = !0, this.animation = e(n), this.events.animationStart && this.events.animationStart.notify();
    }).then(() => {
      this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
    });
  }
  /**
   * Stop the currently active animation.
   *
   * @public
   */
  stop() {
    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
  }
  /**
   * Returns `true` if this value is currently animating.
   *
   * @public
   */
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  /**
   * Destroy and clean up subscribers to this `MotionValue`.
   *
   * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
   * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
   * created a `MotionValue` via the `motionValue` function.
   *
   * @public
   */
  destroy() {
    this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function St(t, e) {
  return new Ma(t, e);
}
const jr = (t) => (e) => e.test(t), Ra = {
  test: (t) => t === "auto",
  parse: (t) => t
}, Lr = [bt, D, Z, st, _i, Ii, Ra], Mt = (t) => Lr.find(jr(t)), Oa = [...Lr, G, at], Ea = (t) => Oa.find(jr(t));
function ja(t, e, n) {
  t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, St(n));
}
function La(t, e) {
  const n = xe(t, e);
  let { transitionEnd: s = {}, transition: r = {}, ...o } = n ? t.makeTargetAnimatable(n, !1) : {};
  o = { ...o, ...s };
  for (const i in o) {
    const a = Ji(o[i]);
    ja(t, i, a);
  }
}
function ka(t, e, n) {
  var s, r;
  const o = Object.keys(e).filter((a) => !t.hasValue(a)), i = o.length;
  if (i)
    for (let a = 0; a < i; a++) {
      const l = o[a], u = e[l];
      let c = null;
      Array.isArray(u) && (c = u[0]), c === null && (c = (r = (s = n[l]) !== null && s !== void 0 ? s : t.readValue(l)) !== null && r !== void 0 ? r : e[l]), c != null && (typeof c == "string" && (Er(c) || Or(c)) ? c = parseFloat(c) : !Ea(c) && at.test(u) && (c = Rr(l, u)), t.addValue(l, St(c, { owner: t })), n[l] === void 0 && (n[l] = c), c !== null && t.setBaseTarget(l, c));
    }
}
function Ba(t, e) {
  return e ? (e[t] || e.default || e).from : void 0;
}
function Fa(t, e, n) {
  const s = {};
  for (const r in t) {
    const o = Ba(r, e);
    if (o !== void 0)
      s[r] = o;
    else {
      const i = n.getValue(r);
      i && (s[r] = i.get());
    }
  }
  return s;
}
function Ia({ protectedKeys: t, needsAnimating: e }, n) {
  const s = t.hasOwnProperty(n) && e[n] !== !0;
  return e[n] = !1, s;
}
function _a(t, e) {
  const n = t.get();
  if (Array.isArray(e)) {
    for (let s = 0; s < e.length; s++)
      if (e[s] !== n)
        return !0;
  } else
    return n !== e;
}
function kr(t, e, { delay: n = 0, transitionOverride: s, type: r } = {}) {
  let { transition: o = t.getDefaultTransition(), transitionEnd: i, ...a } = t.makeTargetAnimatable(e);
  const l = t.getValue("willChange");
  s && (o = s);
  const u = [], c = r && t.animationState && t.animationState.getState()[r];
  for (const f in a) {
    const h = t.getValue(f), p = a[f];
    if (!h || p === void 0 || c && Ia(c, f))
      continue;
    const d = {
      delay: n,
      elapsed: 0,
      ...gn(o || {}, f)
    };
    if (window.HandoffAppearAnimations) {
      const v = t.getProps()[Ls];
      if (v) {
        const x = window.HandoffAppearAnimations(v, f, h, B);
        x !== null && (d.elapsed = x, d.isHandoff = !0);
      }
    }
    let m = !d.isHandoff && !_a(h, p);
    if (d.type === "spring" && (h.getVelocity() || d.velocity) && (m = !1), h.animation && (m = !1), m)
      continue;
    h.start(yn(f, h, p, t.shouldReduceMotion && xt.has(f) ? { type: !1 } : d));
    const y = h.animation;
    ce(l) && (l.add(f), y.then(() => l.remove(f))), u.push(y);
  }
  return i && Promise.all(u).then(() => {
    i && La(t, i);
  }), u;
}
function We(t, e, n = {}) {
  const s = xe(t, e, n.custom);
  let { transition: r = t.getDefaultTransition() || {} } = s || {};
  n.transitionOverride && (r = n.transitionOverride);
  const o = s ? () => Promise.all(kr(t, s, n)) : () => Promise.resolve(), i = t.variantChildren && t.variantChildren.size ? (l = 0) => {
    const { delayChildren: u = 0, staggerChildren: c, staggerDirection: f } = r;
    return Ua(t, e, u + l, c, f, n);
  } : () => Promise.resolve(), { when: a } = r;
  if (a) {
    const [l, u] = a === "beforeChildren" ? [o, i] : [i, o];
    return l().then(() => u());
  } else
    return Promise.all([o(), i(n.delay)]);
}
function Ua(t, e, n = 0, s = 0, r = 1, o) {
  const i = [], a = (t.variantChildren.size - 1) * s, l = r === 1 ? (u = 0) => u * s : (u = 0) => a - u * s;
  return Array.from(t.variantChildren).sort(Na).forEach((u, c) => {
    u.notify("AnimationStart", e), i.push(We(u, e, {
      ...o,
      delay: n + l(c)
    }).then(() => u.notify("AnimationComplete", e)));
  }), Promise.all(i);
}
function Na(t, e) {
  return t.sortNodePosition(e);
}
function Wa(t, e, n = {}) {
  t.notify("AnimationStart", e);
  let s;
  if (Array.isArray(e)) {
    const r = e.map((o) => We(t, o, n));
    s = Promise.all(r);
  } else if (typeof e == "string")
    s = We(t, e, n);
  else {
    const r = typeof e == "function" ? xe(t, e, n.custom) : e;
    s = Promise.all(kr(t, r, n));
  }
  return s.then(() => t.notify("AnimationComplete", e));
}
const Ha = [...tn].reverse(), za = tn.length;
function Ga(t) {
  return (e) => Promise.all(e.map(({ animation: n, options: s }) => Wa(t, n, s)));
}
function $a(t) {
  let e = Ga(t);
  const n = qa();
  let s = !0;
  const r = (l, u) => {
    const c = xe(t, u);
    if (c) {
      const { transition: f, transitionEnd: h, ...p } = c;
      l = { ...l, ...p, ...h };
    }
    return l;
  };
  function o(l) {
    e = l(t);
  }
  function i(l, u) {
    const c = t.getProps(), f = t.getVariantContext(!0) || {}, h = [], p = /* @__PURE__ */ new Set();
    let d = {}, m = 1 / 0;
    for (let v = 0; v < za; v++) {
      const x = Ha[v], g = n[x], V = c[x] !== void 0 ? c[x] : f[x], b = Bt(V), R = x === u ? g.isActive : null;
      R === !1 && (m = v);
      let j = V === f[x] && V !== c[x] && b;
      if (j && s && t.manuallyAnimateOnMount && (j = !1), g.protectedKeys = { ...d }, // If it isn't active and hasn't *just* been set as inactive
      !g.isActive && R === null || // If we didn't and don't have any defined prop for this animation type
      !V && !g.prevProp || // Or if the prop doesn't define an animation
      me(V) || typeof V == "boolean")
        continue;
      let E = Ka(g.prevProp, V) || // If we're making this variant active, we want to always make it active
      x === u && g.isActive && !j && b || // If we removed a higher-priority variant (i is in reverse order)
      v > m && b, H = !1;
      const P = Array.isArray(V) ? V : [V];
      let T = P.reduce(r, {});
      R === !1 && (T = {});
      const { prevResolvedValues: A = {} } = g, S = {
        ...A,
        ...T
      }, L = (O) => {
        E = !0, p.has(O) && (H = !0, p.delete(O)), g.needsAnimating[O] = !0;
      };
      for (const O in S) {
        const F = T[O], X = A[O];
        if (d.hasOwnProperty(O))
          continue;
        let N = !1;
        oe(F) && oe(X) ? N = !rr(F, X) : N = F !== X, N ? F !== void 0 ? L(O) : p.add(O) : F !== void 0 && p.has(O) ? L(O) : g.protectedKeys[O] = !0;
      }
      g.prevProp = V, g.prevResolvedValues = T, g.isActive && (d = { ...d, ...T }), s && t.blockInitialAnimation && (E = !1), E && (!j || H) && h.push(...P.map((O) => ({
        animation: O,
        options: { type: x, ...l }
      })));
    }
    if (p.size) {
      const v = {};
      p.forEach((x) => {
        const g = t.getBaseTarget(x);
        g !== void 0 && (v[x] = g);
      }), h.push({ animation: v });
    }
    let y = !!h.length;
    return s && (c.initial === !1 || c.initial === c.animate) && !t.manuallyAnimateOnMount && (y = !1), s = !1, y ? e(h) : Promise.resolve();
  }
  function a(l, u, c) {
    var f;
    if (n[l].isActive === u)
      return Promise.resolve();
    (f = t.variantChildren) === null || f === void 0 || f.forEach((p) => {
      var d;
      return (d = p.animationState) === null || d === void 0 ? void 0 : d.setActive(l, u);
    }), n[l].isActive = u;
    const h = i(c, l);
    for (const p in n)
      n[p].protectedKeys = {};
    return h;
  }
  return {
    animateChanges: i,
    setActive: a,
    setAnimateFunction: o,
    getState: () => n
  };
}
function Ka(t, e) {
  return typeof e == "string" ? e !== t : Array.isArray(e) ? !rr(e, t) : !1;
}
function ht(t = !1) {
  return {
    isActive: t,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function qa() {
  return {
    animate: ht(!0),
    whileInView: ht(),
    whileHover: ht(),
    whileTap: ht(),
    whileDrag: ht(),
    whileFocus: ht(),
    exit: ht()
  };
}
class Ya extends lt {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(e) {
    super(e), e.animationState || (e.animationState = $a(e));
  }
  updateAnimationControlsSubscription() {
    const { animate: e } = this.node.getProps();
    this.unmount(), me(e) && (this.unmount = e.subscribe(this.node));
  }
  /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: e } = this.node.getProps(), { animate: n } = this.node.prevProps || {};
    e !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
  }
}
let Xa = 0;
class Za extends lt {
  constructor() {
    super(...arguments), this.id = Xa++;
  }
  update() {
    if (!this.node.presenceContext)
      return;
    const { isPresent: e, onExitComplete: n, custom: s } = this.node.presenceContext, { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || e === r)
      return;
    const o = this.node.animationState.setActive("exit", !e, { custom: s ?? this.node.getProps().custom });
    n && !e && o.then(() => n(this.id));
  }
  mount() {
    const { register: e } = this.node.presenceContext || {};
    e && (this.unmount = e(this.id));
  }
  unmount() {
  }
}
const Qa = {
  animation: {
    Feature: Ya
  },
  exit: {
    Feature: Za
  }
}, Wn = (t, e) => Math.abs(t - e);
function Ja(t, e) {
  const n = Wn(t.x, e.x), s = Wn(t.y, e.y);
  return Math.sqrt(n ** 2 + s ** 2);
}
class Br {
  constructor(e, n, { transformPagePoint: s, contextWindow: r, dragSnapToOrigin: o = !1 } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const f = Re(this.lastMoveEventInfo, this.history), h = this.startEvent !== null, p = Ja(f.offset, { x: 0, y: 0 }) >= 3;
      if (!h && !p)
        return;
      const { point: d } = f, { timestamp: m } = W;
      this.history.push({ ...d, timestamp: m });
      const { onStart: y, onMove: v } = this.handlers;
      h || (y && y(this.lastMoveEvent, f), this.startEvent = this.lastMoveEvent), v && v(this.lastMoveEvent, f);
    }, this.handlePointerMove = (f, h) => {
      this.lastMoveEvent = f, this.lastMoveEventInfo = Me(h, this.transformPagePoint), B.update(this.updatePoint, !0);
    }, this.handlePointerUp = (f, h) => {
      this.end();
      const { onEnd: p, onSessionEnd: d, resumeAnimation: m } = this.handlers;
      if (this.dragSnapToOrigin && m && m(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const y = Re(f.type === "pointercancel" ? this.lastMoveEventInfo : Me(h, this.transformPagePoint), this.history);
      this.startEvent && p && p(f, y), d && d(f, y);
    }, !Js(e))
      return;
    this.dragSnapToOrigin = o, this.handlers = n, this.transformPagePoint = s, this.contextWindow = r || window;
    const i = ve(e), a = Me(i, this.transformPagePoint), { point: l } = a, { timestamp: u } = W;
    this.history = [{ ...l, timestamp: u }];
    const { onSessionStart: c } = n;
    c && c(e, Re(a, this.history)), this.removeListeners = it(J(this.contextWindow, "pointermove", this.handlePointerMove), J(this.contextWindow, "pointerup", this.handlePointerUp), J(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(e) {
    this.handlers = e;
  }
  end() {
    this.removeListeners && this.removeListeners(), et(this.updatePoint);
  }
}
function Me(t, e) {
  return e ? { point: e(t.point) } : t;
}
function Hn(t, e) {
  return { x: t.x - e.x, y: t.y - e.y };
}
function Re({ point: t }, e) {
  return {
    point: t,
    delta: Hn(t, Fr(e)),
    offset: Hn(t, tl(e)),
    velocity: el(e, 0.1)
  };
}
function tl(t) {
  return t[0];
}
function Fr(t) {
  return t[t.length - 1];
}
function el(t, e) {
  if (t.length < 2)
    return { x: 0, y: 0 };
  let n = t.length - 1, s = null;
  const r = Fr(t);
  for (; n >= 0 && (s = t[n], !(r.timestamp - s.timestamp > yt(e))); )
    n--;
  if (!s)
    return { x: 0, y: 0 };
  const o = tt(r.timestamp - s.timestamp);
  if (o === 0)
    return { x: 0, y: 0 };
  const i = {
    x: (r.x - s.x) / o,
    y: (r.y - s.y) / o
  };
  return i.x === 1 / 0 && (i.x = 0), i.y === 1 / 0 && (i.y = 0), i;
}
function K(t) {
  return t.max - t.min;
}
function He(t, e = 0, n = 0.01) {
  return Math.abs(t - e) <= n;
}
function zn(t, e, n, s = 0.5) {
  t.origin = s, t.originPoint = I(e.min, e.max, t.origin), t.scale = K(n) / K(e), (He(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1), t.translate = I(n.min, n.max, t.origin) - t.originPoint, (He(t.translate) || isNaN(t.translate)) && (t.translate = 0);
}
function Lt(t, e, n, s) {
  zn(t.x, e.x, n.x, s ? s.originX : void 0), zn(t.y, e.y, n.y, s ? s.originY : void 0);
}
function Gn(t, e, n) {
  t.min = n.min + e.min, t.max = t.min + K(e);
}
function nl(t, e, n) {
  Gn(t.x, e.x, n.x), Gn(t.y, e.y, n.y);
}
function $n(t, e, n) {
  t.min = e.min - n.min, t.max = t.min + K(e);
}
function kt(t, e, n) {
  $n(t.x, e.x, n.x), $n(t.y, e.y, n.y);
}
function sl(t, { min: e, max: n }, s) {
  return e !== void 0 && t < e ? t = s ? I(e, t, s.min) : Math.max(t, e) : n !== void 0 && t > n && (t = s ? I(n, t, s.max) : Math.min(t, n)), t;
}
function Kn(t, e, n) {
  return {
    min: e !== void 0 ? t.min + e : void 0,
    max: n !== void 0 ? t.max + n - (t.max - t.min) : void 0
  };
}
function rl(t, { top: e, left: n, bottom: s, right: r }) {
  return {
    x: Kn(t.x, n, r),
    y: Kn(t.y, e, s)
  };
}
function qn(t, e) {
  let n = e.min - t.min, s = e.max - t.max;
  return e.max - e.min < t.max - t.min && ([n, s] = [s, n]), { min: n, max: s };
}
function il(t, e) {
  return {
    x: qn(t.x, e.x),
    y: qn(t.y, e.y)
  };
}
function ol(t, e) {
  let n = 0.5;
  const s = K(t), r = K(e);
  return r > s ? n = It(e.min, e.max - s, t.min) : s > r && (n = It(t.min, t.max - r, e.min)), ot(0, 1, n);
}
function al(t, e) {
  const n = {};
  return e.min !== void 0 && (n.min = e.min - t.min), e.max !== void 0 && (n.max = e.max - t.min), n;
}
const ze = 0.35;
function ll(t = ze) {
  return t === !1 ? t = 0 : t === !0 && (t = ze), {
    x: Yn(t, "left", "right"),
    y: Yn(t, "top", "bottom")
  };
}
function Yn(t, e, n) {
  return {
    min: Xn(t, e),
    max: Xn(t, n)
  };
}
function Xn(t, e) {
  return typeof t == "number" ? t : t[e] || 0;
}
const Zn = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), Tt = () => ({
  x: Zn(),
  y: Zn()
}), Qn = () => ({ min: 0, max: 0 }), _ = () => ({
  x: Qn(),
  y: Qn()
});
function Y(t) {
  return [t("x"), t("y")];
}
function Ir({ top: t, left: e, right: n, bottom: s }) {
  return {
    x: { min: e, max: n },
    y: { min: t, max: s }
  };
}
function ul({ x: t, y: e }) {
  return { top: e.min, right: t.max, bottom: e.max, left: t.min };
}
function cl(t, e) {
  if (!e)
    return t;
  const n = e({ x: t.left, y: t.top }), s = e({ x: t.right, y: t.bottom });
  return {
    top: n.y,
    left: n.x,
    bottom: s.y,
    right: s.x
  };
}
function Oe(t) {
  return t === void 0 || t === 1;
}
function Ge({ scale: t, scaleX: e, scaleY: n }) {
  return !Oe(t) || !Oe(e) || !Oe(n);
}
function dt(t) {
  return Ge(t) || _r(t) || t.z || t.rotate || t.rotateX || t.rotateY;
}
function _r(t) {
  return Jn(t.x) || Jn(t.y);
}
function Jn(t) {
  return t && t !== "0%";
}
function fe(t, e, n) {
  const s = t - n, r = e * s;
  return n + r;
}
function ts(t, e, n, s, r) {
  return r !== void 0 && (t = fe(t, r, s)), fe(t, n, s) + e;
}
function $e(t, e = 0, n = 1, s, r) {
  t.min = ts(t.min, e, n, s, r), t.max = ts(t.max, e, n, s, r);
}
function Ur(t, { x: e, y: n }) {
  $e(t.x, e.translate, e.scale, e.originPoint), $e(t.y, n.translate, n.scale, n.originPoint);
}
function fl(t, e, n, s = !1) {
  const r = n.length;
  if (!r)
    return;
  e.x = e.y = 1;
  let o, i;
  for (let a = 0; a < r; a++) {
    o = n[a], i = o.projectionDelta;
    const l = o.instance;
    l && l.style && l.style.display === "contents" || (s && o.options.layoutScroll && o.scroll && o !== o.root && wt(t, {
      x: -o.scroll.offset.x,
      y: -o.scroll.offset.y
    }), i && (e.x *= i.x.scale, e.y *= i.y.scale, Ur(t, i)), s && dt(o.latestValues) && wt(t, o.latestValues));
  }
  e.x = es(e.x), e.y = es(e.y);
}
function es(t) {
  return Number.isInteger(t) || t > 1.0000000000001 || t < 0.999999999999 ? t : 1;
}
function rt(t, e) {
  t.min = t.min + e, t.max = t.max + e;
}
function ns(t, e, [n, s, r]) {
  const o = e[r] !== void 0 ? e[r] : 0.5, i = I(t.min, t.max, o);
  $e(t, e[n], e[s], i, e.scale);
}
const hl = ["x", "scaleX", "originX"], dl = ["y", "scaleY", "originY"];
function wt(t, e) {
  ns(t.x, e, hl), ns(t.y, e, dl);
}
function Nr(t, e) {
  return Ir(cl(t.getBoundingClientRect(), e));
}
function pl(t, e, n) {
  const s = Nr(t, n), { scroll: r } = e;
  return r && (rt(s.x, r.offset.x), rt(s.y, r.offset.y)), s;
}
const Wr = ({ current: t }) => t ? t.ownerDocument.defaultView : null, ml = /* @__PURE__ */ new WeakMap();
class gl {
  constructor(e) {
    this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = _(), this.visualElement = e;
  }
  start(e, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: s } = this.visualElement;
    if (s && s.isPresent === !1)
      return;
    const r = (c) => {
      const { dragSnapToOrigin: f } = this.getProps();
      f ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(ve(c, "page").point);
    }, o = (c, f) => {
      const { drag: h, dragPropagation: p, onDragStart: d } = this.getProps();
      if (h && !p && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = er(h), !this.openGlobalLock))
        return;
      this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), Y((y) => {
        let v = this.getAxisMotionValue(y).get() || 0;
        if (Z.test(v)) {
          const { projection: x } = this.visualElement;
          if (x && x.layout) {
            const g = x.layout.layoutBox[y];
            g && (v = K(g) * (parseFloat(v) / 100));
          }
        }
        this.originPoint[y] = v;
      }), d && B.update(() => d(c, f), !1, !0);
      const { animationState: m } = this.visualElement;
      m && m.setActive("whileDrag", !0);
    }, i = (c, f) => {
      const { dragPropagation: h, dragDirectionLock: p, onDirectionLock: d, onDrag: m } = this.getProps();
      if (!h && !this.openGlobalLock)
        return;
      const { offset: y } = f;
      if (p && this.currentDirection === null) {
        this.currentDirection = yl(y), this.currentDirection !== null && d && d(this.currentDirection);
        return;
      }
      this.updateAxis("x", f.point, y), this.updateAxis("y", f.point, y), this.visualElement.render(), m && m(c, f);
    }, a = (c, f) => this.stop(c, f), l = () => Y((c) => {
      var f;
      return this.getAnimationState(c) === "paused" && ((f = this.getAxisMotionValue(c).animation) === null || f === void 0 ? void 0 : f.play());
    }), { dragSnapToOrigin: u } = this.getProps();
    this.panSession = new Br(e, {
      onSessionStart: r,
      onStart: o,
      onMove: i,
      onSessionEnd: a,
      resumeAnimation: l
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: u,
      contextWindow: Wr(this.visualElement)
    });
  }
  stop(e, n) {
    const s = this.isDragging;
    if (this.cancel(), !s)
      return;
    const { velocity: r } = n;
    this.startAnimation(r);
    const { onDragEnd: o } = this.getProps();
    o && B.update(() => o(e, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: e, animationState: n } = this.visualElement;
    e && (e.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
    const { dragPropagation: s } = this.getProps();
    !s && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), n && n.setActive("whileDrag", !1);
  }
  updateAxis(e, n, s) {
    const { drag: r } = this.getProps();
    if (!s || !Jt(e, r, this.currentDirection))
      return;
    const o = this.getAxisMotionValue(e);
    let i = this.originPoint[e] + s[e];
    this.constraints && this.constraints[e] && (i = sl(i, this.constraints[e], this.elastic[e])), o.set(i);
  }
  resolveConstraints() {
    var e;
    const { dragConstraints: n, dragElastic: s } = this.getProps(), r = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (e = this.visualElement.projection) === null || e === void 0 ? void 0 : e.layout, o = this.constraints;
    n && Pt(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && r ? this.constraints = rl(r.layoutBox, n) : this.constraints = !1, this.elastic = ll(s), o !== this.constraints && r && this.constraints && !this.hasMutatedConstraints && Y((i) => {
      this.getAxisMotionValue(i) && (this.constraints[i] = al(r.layoutBox[i], this.constraints[i]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: e, onMeasureDragConstraints: n } = this.getProps();
    if (!e || !Pt(e))
      return !1;
    const s = e.current, { projection: r } = this.visualElement;
    if (!r || !r.layout)
      return !1;
    const o = pl(s, r.root, this.visualElement.getTransformPagePoint());
    let i = il(r.layout.layoutBox, o);
    if (n) {
      const a = n(ul(i));
      this.hasMutatedConstraints = !!a, a && (i = Ir(a));
    }
    return i;
  }
  startAnimation(e) {
    const { drag: n, dragMomentum: s, dragElastic: r, dragTransition: o, dragSnapToOrigin: i, onDragTransitionEnd: a } = this.getProps(), l = this.constraints || {}, u = Y((c) => {
      if (!Jt(c, n, this.currentDirection))
        return;
      let f = l && l[c] || {};
      i && (f = { min: 0, max: 0 });
      const h = r ? 200 : 1e6, p = r ? 40 : 1e7, d = {
        type: "inertia",
        velocity: s ? e[c] : 0,
        bounceStiffness: h,
        bounceDamping: p,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...o,
        ...f
      };
      return this.startAxisValueAnimation(c, d);
    });
    return Promise.all(u).then(a);
  }
  startAxisValueAnimation(e, n) {
    const s = this.getAxisMotionValue(e);
    return s.start(yn(e, s, 0, n));
  }
  stopAnimation() {
    Y((e) => this.getAxisMotionValue(e).stop());
  }
  pauseAnimation() {
    Y((e) => {
      var n;
      return (n = this.getAxisMotionValue(e).animation) === null || n === void 0 ? void 0 : n.pause();
    });
  }
  getAnimationState(e) {
    var n;
    return (n = this.getAxisMotionValue(e).animation) === null || n === void 0 ? void 0 : n.state;
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(e) {
    const n = "_drag" + e.toUpperCase(), s = this.visualElement.getProps(), r = s[n];
    return r || this.visualElement.getValue(e, (s.initial ? s.initial[e] : void 0) || 0);
  }
  snapToCursor(e) {
    Y((n) => {
      const { drag: s } = this.getProps();
      if (!Jt(n, s, this.currentDirection))
        return;
      const { projection: r } = this.visualElement, o = this.getAxisMotionValue(n);
      if (r && r.layout) {
        const { min: i, max: a } = r.layout.layoutBox[n];
        o.set(e[n] - I(i, a, 0.5));
      }
    });
  }
  /**
   * When the viewport resizes we want to check if the measured constraints
   * have changed and, if so, reposition the element within those new constraints
   * relative to where it was before the resize.
   */
  scalePositionWithinConstraints() {
    if (!this.visualElement.current)
      return;
    const { drag: e, dragConstraints: n } = this.getProps(), { projection: s } = this.visualElement;
    if (!Pt(n) || !s || !this.constraints)
      return;
    this.stopAnimation();
    const r = { x: 0, y: 0 };
    Y((i) => {
      const a = this.getAxisMotionValue(i);
      if (a) {
        const l = a.get();
        r[i] = ol({ min: l, max: l }, this.constraints[i]);
      }
    });
    const { transformTemplate: o } = this.visualElement.getProps();
    this.visualElement.current.style.transform = o ? o({}, "") : "none", s.root && s.root.updateScroll(), s.updateLayout(), this.resolveConstraints(), Y((i) => {
      if (!Jt(i, e, null))
        return;
      const a = this.getAxisMotionValue(i), { min: l, max: u } = this.constraints[i];
      a.set(I(l, u, r[i]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    ml.set(this.visualElement, this);
    const e = this.visualElement.current, n = J(e, "pointerdown", (l) => {
      const { drag: u, dragListener: c = !0 } = this.getProps();
      u && c && this.start(l);
    }), s = () => {
      const { dragConstraints: l } = this.getProps();
      Pt(l) && (this.constraints = this.resolveRefConstraints());
    }, { projection: r } = this.visualElement, o = r.addEventListener("measure", s);
    r && !r.layout && (r.root && r.root.updateScroll(), r.updateLayout()), s();
    const i = Q(window, "resize", () => this.scalePositionWithinConstraints()), a = r.addEventListener("didUpdate", ({ delta: l, hasLayoutChanged: u }) => {
      this.isDragging && u && (Y((c) => {
        const f = this.getAxisMotionValue(c);
        f && (this.originPoint[c] += l[c].translate, f.set(f.get() + l[c].translate));
      }), this.visualElement.render());
    });
    return () => {
      i(), n(), o(), a && a();
    };
  }
  getProps() {
    const e = this.visualElement.getProps(), { drag: n = !1, dragDirectionLock: s = !1, dragPropagation: r = !1, dragConstraints: o = !1, dragElastic: i = ze, dragMomentum: a = !0 } = e;
    return {
      ...e,
      drag: n,
      dragDirectionLock: s,
      dragPropagation: r,
      dragConstraints: o,
      dragElastic: i,
      dragMomentum: a
    };
  }
}
function Jt(t, e, n) {
  return (e === !0 || e === t) && (n === null || n === t);
}
function yl(t, e = 10) {
  let n = null;
  return Math.abs(t.y) > e ? n = "y" : Math.abs(t.x) > e && (n = "x"), n;
}
class vl extends lt {
  constructor(e) {
    super(e), this.removeGroupControls = U, this.removeListeners = U, this.controls = new gl(e);
  }
  mount() {
    const { dragControls: e } = this.node.getProps();
    e && (this.removeGroupControls = e.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || U;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const ss = (t) => (e, n) => {
  t && B.update(() => t(e, n));
};
class xl extends lt {
  constructor() {
    super(...arguments), this.removePointerDownListener = U;
  }
  onPointerDown(e) {
    this.session = new Br(e, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Wr(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: e, onPanStart: n, onPan: s, onPanEnd: r } = this.node.getProps();
    return {
      onSessionStart: ss(e),
      onStart: ss(n),
      onMove: s,
      onEnd: (o, i) => {
        delete this.session, r && B.update(() => r(o, i));
      }
    };
  }
  mount() {
    this.removePointerDownListener = J(this.node.current, "pointerdown", (e) => this.onPointerDown(e));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
function bl() {
  const t = w.useContext(de);
  if (t === null)
    return [!0, null];
  const { isPresent: e, onExitComplete: n, register: s } = t, r = w.useId();
  return w.useEffect(() => s(r), []), !e && n ? [!1, () => n && n(r)] : [!0];
}
const se = {
  /**
   * Global flag as to whether the tree has animated since the last time
   * we resized the window
   */
  hasAnimatedSinceResize: !0,
  /**
   * We set this to true once, on the first update. Any nodes added to the tree beyond that
   * update will be given a `data-projection-id` attribute.
   */
  hasEverUpdated: !1
};
function rs(t, e) {
  return e.max === e.min ? 0 : t / (e.max - e.min) * 100;
}
const Rt = {
  correct: (t, e) => {
    if (!e.target)
      return t;
    if (typeof t == "string")
      if (D.test(t))
        t = parseFloat(t);
      else
        return t;
    const n = rs(t, e.target.x), s = rs(t, e.target.y);
    return `${n}% ${s}%`;
  }
}, Pl = {
  correct: (t, { treeScale: e, projectionDelta: n }) => {
    const s = t, r = at.parse(t);
    if (r.length > 5)
      return s;
    const o = at.createTransformer(t), i = typeof r[0] != "number" ? 1 : 0, a = n.x.scale * e.x, l = n.y.scale * e.y;
    r[0 + i] /= a, r[1 + i] /= l;
    const u = I(a, l, 0.5);
    return typeof r[2 + i] == "number" && (r[2 + i] /= u), typeof r[3 + i] == "number" && (r[3 + i] /= u), o(r);
  }
};
class Cl extends z.Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: e, layoutGroup: n, switchLayoutGroup: s, layoutId: r } = this.props, { projection: o } = e;
    Oi(Tl), o && (n.group && n.group.add(o), s && s.register && r && s.register(o), o.root.didUpdate(), o.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), o.setOptions({
      ...o.options,
      onExitComplete: () => this.safeToRemove()
    })), se.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(e) {
    const { layoutDependency: n, visualElement: s, drag: r, isPresent: o } = this.props, i = s.projection;
    return i && (i.isPresent = o, r || e.layoutDependency !== n || n === void 0 ? i.willUpdate() : this.safeToRemove(), e.isPresent !== o && (o ? i.promote() : i.relegate() || B.postRender(() => {
      const a = i.getStack();
      (!a || !a.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { projection: e } = this.props.visualElement;
    e && (e.root.didUpdate(), Je.postRender(() => {
      !e.currentAnimation && e.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: e, layoutGroup: n, switchLayoutGroup: s } = this.props, { projection: r } = e;
    r && (r.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(r), s && s.deregister && s.deregister(r));
  }
  safeToRemove() {
    const { safeToRemove: e } = this.props;
    e && e();
  }
  render() {
    return null;
  }
}
function Hr(t) {
  const [e, n] = bl(), s = w.useContext(nn);
  return z.createElement(Cl, { ...t, layoutGroup: s, switchLayoutGroup: w.useContext(Is), isPresent: e, safeToRemove: n });
}
const Tl = {
  borderRadius: {
    ...Rt,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: Rt,
  borderTopRightRadius: Rt,
  borderBottomLeftRadius: Rt,
  borderBottomRightRadius: Rt,
  boxShadow: Pl
}, zr = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], wl = zr.length, is = (t) => typeof t == "string" ? parseFloat(t) : t, os = (t) => typeof t == "number" || D.test(t);
function Sl(t, e, n, s, r, o) {
  r ? (t.opacity = I(
    0,
    // TODO Reinstate this if only child
    n.opacity !== void 0 ? n.opacity : 1,
    Vl(s)
  ), t.opacityExit = I(e.opacity !== void 0 ? e.opacity : 1, 0, Al(s))) : o && (t.opacity = I(e.opacity !== void 0 ? e.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, s));
  for (let i = 0; i < wl; i++) {
    const a = `border${zr[i]}Radius`;
    let l = as(e, a), u = as(n, a);
    if (l === void 0 && u === void 0)
      continue;
    l || (l = 0), u || (u = 0), l === 0 || u === 0 || os(l) === os(u) ? (t[a] = Math.max(I(is(l), is(u), s), 0), (Z.test(u) || Z.test(l)) && (t[a] += "%")) : t[a] = u;
  }
  (e.rotate || n.rotate) && (t.rotate = I(e.rotate || 0, n.rotate || 0, s));
}
function as(t, e) {
  return t[e] !== void 0 ? t[e] : t.borderRadius;
}
const Vl = Gr(0, 0.5, dr), Al = Gr(0.5, 0.95, U);
function Gr(t, e, n) {
  return (s) => s < t ? 0 : s > e ? 1 : n(It(t, e, s));
}
function ls(t, e) {
  t.min = e.min, t.max = e.max;
}
function q(t, e) {
  ls(t.x, e.x), ls(t.y, e.y);
}
function us(t, e, n, s, r) {
  return t -= e, t = fe(t, 1 / n, s), r !== void 0 && (t = fe(t, 1 / r, s)), t;
}
function Dl(t, e = 0, n = 1, s = 0.5, r, o = t, i = t) {
  if (Z.test(e) && (e = parseFloat(e), e = I(i.min, i.max, e / 100) - i.min), typeof e != "number")
    return;
  let a = I(o.min, o.max, s);
  t === o && (a -= e), t.min = us(t.min, e, n, a, r), t.max = us(t.max, e, n, a, r);
}
function cs(t, e, [n, s, r], o, i) {
  Dl(t, e[n], e[s], e[r], e.scale, o, i);
}
const Ml = ["x", "scaleX", "originX"], Rl = ["y", "scaleY", "originY"];
function fs(t, e, n, s) {
  cs(t.x, e, Ml, n ? n.x : void 0, s ? s.x : void 0), cs(t.y, e, Rl, n ? n.y : void 0, s ? s.y : void 0);
}
function hs(t) {
  return t.translate === 0 && t.scale === 1;
}
function $r(t) {
  return hs(t.x) && hs(t.y);
}
function Ol(t, e) {
  return t.x.min === e.x.min && t.x.max === e.x.max && t.y.min === e.y.min && t.y.max === e.y.max;
}
function Kr(t, e) {
  return Math.round(t.x.min) === Math.round(e.x.min) && Math.round(t.x.max) === Math.round(e.x.max) && Math.round(t.y.min) === Math.round(e.y.min) && Math.round(t.y.max) === Math.round(e.y.max);
}
function ds(t) {
  return K(t.x) / K(t.y);
}
class El {
  constructor() {
    this.members = [];
  }
  add(e) {
    vn(this.members, e), e.scheduleRender();
  }
  remove(e) {
    if (xn(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(e) {
    const n = this.members.findIndex((r) => e === r);
    if (n === 0)
      return !1;
    let s;
    for (let r = n; r >= 0; r--) {
      const o = this.members[r];
      if (o.isPresent !== !1) {
        s = o;
        break;
      }
    }
    return s ? (this.promote(s), !0) : !1;
  }
  promote(e, n) {
    const s = this.lead;
    if (e !== s && (this.prevLead = s, this.lead = e, e.show(), s)) {
      s.instance && s.scheduleRender(), e.scheduleRender(), e.resumeFrom = s, n && (e.resumeFrom.preserveOpacity = !0), s.snapshot && (e.snapshot = s.snapshot, e.snapshot.latestValues = s.animationValues || s.latestValues), e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
      const { crossfade: r } = e.options;
      r === !1 && s.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((e) => {
      const { options: n, resumingFrom: s } = e;
      n.onExitComplete && n.onExitComplete(), s && s.options.onExitComplete && s.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((e) => {
      e.instance && e.scheduleRender(!1);
    });
  }
  /**
   * Clear any leads that have been removed this render to prevent them from being
   * used in future animations and to prevent memory leaks
   */
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function ps(t, e, n) {
  let s = "";
  const r = t.x.translate / e.x, o = t.y.translate / e.y;
  if ((r || o) && (s = `translate3d(${r}px, ${o}px, 0) `), (e.x !== 1 || e.y !== 1) && (s += `scale(${1 / e.x}, ${1 / e.y}) `), n) {
    const { rotate: l, rotateX: u, rotateY: c } = n;
    l && (s += `rotate(${l}deg) `), u && (s += `rotateX(${u}deg) `), c && (s += `rotateY(${c}deg) `);
  }
  const i = t.x.scale * e.x, a = t.y.scale * e.y;
  return (i !== 1 || a !== 1) && (s += `scale(${i}, ${a})`), s || "none";
}
const jl = (t, e) => t.depth - e.depth;
class Ll {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(e) {
    vn(this.children, e), this.isDirty = !0;
  }
  remove(e) {
    xn(this.children, e), this.isDirty = !0;
  }
  forEach(e) {
    this.isDirty && this.children.sort(jl), this.isDirty = !1, this.children.forEach(e);
  }
}
function kl(t, e) {
  const n = vt.now(), s = ({ timestamp: r }) => {
    const o = r - n;
    o >= e && (et(s), t(o - e));
  };
  return B.read(s, !0), () => et(s);
}
function Bl(t) {
  window.MotionDebug && window.MotionDebug.record(t);
}
function Fl(t) {
  return t instanceof SVGElement && t.tagName !== "svg";
}
function Il(t, e, n) {
  const s = $(t) ? t : St(t);
  return s.start(yn("", s, e, n)), s.animation;
}
const ms = ["", "X", "Y", "Z"], _l = { visibility: "hidden" }, gs = 1e3;
let Ul = 0;
const pt = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0
};
function qr({ attachResizeListener: t, defaultParent: e, measureScroll: n, checkIsScrollRoot: s, resetTransform: r }) {
  return class {
    constructor(i = {}, a = e == null ? void 0 : e()) {
      this.id = Ul++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, pt.totalNodes = pt.resolvedTargetDeltas = pt.recalculatedProjection = 0, this.nodes.forEach(Hl), this.nodes.forEach(ql), this.nodes.forEach(Yl), this.nodes.forEach(zl), Bl(pt);
      }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = i, this.root = a ? a.root || a : this, this.path = a ? [...a.path, a] : [], this.parent = a, this.depth = a ? a.depth + 1 : 0;
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new Ll());
    }
    addEventListener(i, a) {
      return this.eventHandlers.has(i) || this.eventHandlers.set(i, new bn()), this.eventHandlers.get(i).add(a);
    }
    notifyListeners(i, ...a) {
      const l = this.eventHandlers.get(i);
      l && l.notify(...a);
    }
    hasListeners(i) {
      return this.eventHandlers.has(i);
    }
    /**
     * Lifecycles
     */
    mount(i, a = this.root.hasTreeAnimated) {
      if (this.instance)
        return;
      this.isSVG = Fl(i), this.instance = i;
      const { layoutId: l, layout: u, visualElement: c } = this.options;
      if (c && !c.current && c.mount(i), this.root.nodes.add(this), this.parent && this.parent.children.add(this), a && (u || l) && (this.isLayoutDirty = !0), t) {
        let f;
        const h = () => this.root.updateBlockedByResize = !1;
        t(i, () => {
          this.root.updateBlockedByResize = !0, f && f(), f = kl(h, 250), se.hasAnimatedSinceResize && (se.hasAnimatedSinceResize = !1, this.nodes.forEach(vs));
        });
      }
      l && this.root.registerSharedNode(l, this), this.options.animate !== !1 && c && (l || u) && this.addEventListener("didUpdate", ({ delta: f, hasLayoutChanged: h, hasRelativeTargetChanged: p, layout: d }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const m = this.options.transition || c.getDefaultTransition() || tu, { onLayoutAnimationStart: y, onLayoutAnimationComplete: v } = c.getProps(), x = !this.targetLayout || !Kr(this.targetLayout, d) || p, g = !h && p;
        if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || g || h && (x || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(f, g);
          const V = {
            ...gn(m, "layout"),
            onPlay: y,
            onComplete: v
          };
          (c.shouldReduceMotion || this.options.layoutRoot) && (V.delay = 0, V.type = !1), this.startAnimation(V);
        } else
          h || vs(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = d;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const i = this.getStack();
      i && i.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, et(this.updateProjection);
    }
    // only on the root
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1;
    }
    // Note: currently only running on root node
    startUpdate() {
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(Xl), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: i } = this.options;
      return i && i.getProps().transformTemplate;
    }
    willUpdate(i = !0) {
      if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const f = this.path[c];
        f.shouldResetTransform = !0, f.updateScroll("snapshot"), f.options.layoutRoot && f.willUpdate(!1);
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l)
        return;
      const u = this.getTransformTemplate();
      this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0, this.updateSnapshot(), i && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(ys);
        return;
      }
      this.isUpdating || this.nodes.forEach($l), this.isUpdating = !1, this.nodes.forEach(Kl), this.nodes.forEach(Nl), this.nodes.forEach(Wl), this.clearAllSnapshots();
      const a = vt.now();
      W.delta = ot(0, 1e3 / 60, a - W.timestamp), W.timestamp = a, W.isProcessing = !0, Pe.update.process(W), Pe.preRender.process(W), Pe.render.process(W), W.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, Je.read(() => this.update()));
    }
    clearAllSnapshots() {
      this.nodes.forEach(Gl), this.sharedNodes.forEach(Zl);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, B.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      B.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++)
          this.path[l].updateScroll();
      const i = this.layout;
      this.layout = this.measure(!1), this.layoutCorrected = _(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: a } = this.options;
      a && a.notify("LayoutMeasure", this.layout.layoutBox, i ? i.layoutBox : void 0);
    }
    updateScroll(i = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === i && (a = !1), a && (this.scroll = {
        animationId: this.root.animationId,
        phase: i,
        isRoot: s(this.instance),
        offset: n(this.instance)
      });
    }
    resetTransform() {
      if (!r)
        return;
      const i = this.isLayoutDirty || this.shouldResetTransform, a = this.projectionDelta && !$r(this.projectionDelta), l = this.getTransformTemplate(), u = l ? l(this.latestValues, "") : void 0, c = u !== this.prevTransformTemplateValue;
      i && (a || dt(this.latestValues) || c) && (r(this.instance, u), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(i = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return i && (l = this.removeTransform(l)), eu(l), {
        animationId: this.root.animationId,
        measuredBox: a,
        layoutBox: l,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      const { visualElement: i } = this.options;
      if (!i)
        return _();
      const a = i.measureViewportBox(), { scroll: l } = this.root;
      return l && (rt(a.x, l.offset.x), rt(a.y, l.offset.y)), a;
    }
    removeElementScroll(i) {
      const a = _();
      q(a, i);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l], { scroll: c, options: f } = u;
        if (u !== this.root && c && f.layoutScroll) {
          if (c.isRoot) {
            q(a, i);
            const { scroll: h } = this.root;
            h && (rt(a.x, -h.offset.x), rt(a.y, -h.offset.y));
          }
          rt(a.x, c.offset.x), rt(a.y, c.offset.y);
        }
      }
      return a;
    }
    applyTransform(i, a = !1) {
      const l = _();
      q(l, i);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !a && c.options.layoutScroll && c.scroll && c !== c.root && wt(l, {
          x: -c.scroll.offset.x,
          y: -c.scroll.offset.y
        }), dt(c.latestValues) && wt(l, c.latestValues);
      }
      return dt(this.latestValues) && wt(l, this.latestValues), l;
    }
    removeTransform(i) {
      const a = _();
      q(a, i);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !dt(u.latestValues))
          continue;
        Ge(u.latestValues) && u.updateSnapshot();
        const c = _(), f = u.measurePageBox();
        q(c, f), fs(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return dt(this.latestValues) && fs(a, this.latestValues), a;
    }
    setTargetDelta(i) {
      this.targetDelta = i, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
    }
    setOptions(i) {
      this.options = {
        ...this.options,
        ...i,
        crossfade: i.crossfade !== void 0 ? i.crossfade : !0
      };
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== W.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(i = !1) {
      var a;
      const l = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
      const u = !!this.resumingFrom || this !== l;
      if (!(i || u && this.isSharedProjectionDirty || this.isProjectionDirty || !((a = this.parent) === null || a === void 0) && a.isProjectionDirty || this.attemptToResolveRelativeTarget))
        return;
      const { layout: f, layoutId: h } = this.options;
      if (!(!this.layout || !(f || h))) {
        if (this.resolvedRelativeTargetAt = W.timestamp, !this.targetDelta && !this.relativeTarget) {
          const p = this.getClosestProjectingParent();
          p && p.layout && this.animationProgress !== 1 ? (this.relativeParent = p, this.forceRelativeParentToResolveTarget(), this.relativeTarget = _(), this.relativeTargetOrigin = _(), kt(this.relativeTargetOrigin, this.layout.layoutBox, p.layout.layoutBox), q(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (this.target || (this.target = _(), this.targetWithTransforms = _()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), nl(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : q(this.target, this.layout.layoutBox), Ur(this.target, this.targetDelta)) : q(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
            this.attemptToResolveRelativeTarget = !1;
            const p = this.getClosestProjectingParent();
            p && !!p.resumingFrom == !!this.resumingFrom && !p.options.layoutScroll && p.target && this.animationProgress !== 1 ? (this.relativeParent = p, this.forceRelativeParentToResolveTarget(), this.relativeTarget = _(), this.relativeTargetOrigin = _(), kt(this.relativeTargetOrigin, this.target, p.target), q(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
          }
          pt.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || Ge(this.parent.latestValues) || _r(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      var i;
      const a = this.getLead(), l = !!this.resumingFrom || this !== a;
      let u = !0;
      if ((this.isProjectionDirty || !((i = this.parent) === null || i === void 0) && i.isProjectionDirty) && (u = !1), l && (this.isSharedProjectionDirty || this.isTransformDirty) && (u = !1), this.resolvedRelativeTargetAt === W.timestamp && (u = !1), u)
        return;
      const { layout: c, layoutId: f } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(c || f))
        return;
      q(this.layoutCorrected, this.layout.layoutBox);
      const h = this.treeScale.x, p = this.treeScale.y;
      fl(this.layoutCorrected, this.treeScale, this.path, l), a.layout && !a.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (a.target = a.layout.layoutBox, a.targetWithTransforms = _());
      const { target: d } = a;
      if (!d) {
        this.projectionTransform && (this.projectionDelta = Tt(), this.projectionTransform = "none", this.scheduleRender());
        return;
      }
      this.projectionDelta || (this.projectionDelta = Tt(), this.projectionDeltaWithTransform = Tt());
      const m = this.projectionTransform;
      Lt(this.projectionDelta, this.layoutCorrected, d, this.latestValues), this.projectionTransform = ps(this.projectionDelta, this.treeScale), (this.projectionTransform !== m || this.treeScale.x !== h || this.treeScale.y !== p) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", d)), pt.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(i = !0) {
      if (this.options.scheduleRender && this.options.scheduleRender(), i) {
        const a = this.getStack();
        a && a.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    setAnimationOrigin(i, a = !1) {
      const l = this.snapshot, u = l ? l.latestValues : {}, c = { ...this.latestValues }, f = Tt();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !a;
      const h = _(), p = l ? l.source : void 0, d = this.layout ? this.layout.source : void 0, m = p !== d, y = this.getStack(), v = !y || y.members.length <= 1, x = !!(m && !v && this.options.crossfade === !0 && !this.path.some(Jl));
      this.animationProgress = 0;
      let g;
      this.mixTargetDelta = (V) => {
        const b = V / 1e3;
        xs(f.x, i.x, b), xs(f.y, i.y, b), this.setTargetDelta(f), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (kt(h, this.layout.layoutBox, this.relativeParent.layout.layoutBox), Ql(this.relativeTarget, this.relativeTargetOrigin, h, b), g && Ol(this.relativeTarget, g) && (this.isProjectionDirty = !1), g || (g = _()), q(g, this.relativeTarget)), m && (this.animationValues = c, Sl(c, u, this.latestValues, b, x, v)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = b;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(i) {
      this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (et(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = B.update(() => {
        se.hasAnimatedSinceResize = !0, this.currentAnimation = Il(0, gs, {
          ...i,
          onUpdate: (a) => {
            this.mixTargetDelta(a), i.onUpdate && i.onUpdate(a);
          },
          onComplete: () => {
            i.onComplete && i.onComplete(), this.completeAnimation();
          }
        }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const i = this.getStack();
      i && i.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(gs), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const i = this.getLead();
      let { targetWithTransforms: a, target: l, layout: u, latestValues: c } = i;
      if (!(!a || !l || !u)) {
        if (this !== i && this.layout && u && Yr(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
          l = this.target || _();
          const f = K(this.layout.layoutBox.x);
          l.x.min = i.target.x.min, l.x.max = l.x.min + f;
          const h = K(this.layout.layoutBox.y);
          l.y.min = i.target.y.min, l.y.max = l.y.min + h;
        }
        q(a, l), wt(a, c), Lt(this.projectionDeltaWithTransform, this.layoutCorrected, a, c);
      }
    }
    registerSharedNode(i, a) {
      this.sharedNodes.has(i) || this.sharedNodes.set(i, new El()), this.sharedNodes.get(i).add(a);
      const u = a.options.initialPromotionConfig;
      a.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity: u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(a) : void 0
      });
    }
    isLead() {
      const i = this.getStack();
      return i ? i.lead === this : !0;
    }
    getLead() {
      var i;
      const { layoutId: a } = this.options;
      return a ? ((i = this.getStack()) === null || i === void 0 ? void 0 : i.lead) || this : this;
    }
    getPrevLead() {
      var i;
      const { layoutId: a } = this.options;
      return a ? (i = this.getStack()) === null || i === void 0 ? void 0 : i.prevLead : void 0;
    }
    getStack() {
      const { layoutId: i } = this.options;
      if (i)
        return this.root.sharedNodes.get(i);
    }
    promote({ needsReset: i, transition: a, preserveFollowOpacity: l } = {}) {
      const u = this.getStack();
      u && u.promote(this, l), i && (this.projectionDelta = void 0, this.needsReset = !0), a && this.setOptions({ transition: a });
    }
    relegate() {
      const i = this.getStack();
      return i ? i.relegate(this) : !1;
    }
    resetRotation() {
      const { visualElement: i } = this.options;
      if (!i)
        return;
      let a = !1;
      const { latestValues: l } = i;
      if ((l.rotate || l.rotateX || l.rotateY || l.rotateZ) && (a = !0), !a)
        return;
      const u = {};
      for (let c = 0; c < ms.length; c++) {
        const f = "rotate" + ms[c];
        l[f] && (u[f] = l[f], i.setStaticValue(f, 0));
      }
      i.render();
      for (const c in u)
        i.setStaticValue(c, u[c]);
      i.scheduleRender();
    }
    getProjectionStyles(i) {
      var a, l;
      if (!this.instance || this.isSVG)
        return;
      if (!this.isVisible)
        return _l;
      const u = {
        visibility: ""
      }, c = this.getTransformTemplate();
      if (this.needsReset)
        return this.needsReset = !1, u.opacity = "", u.pointerEvents = ee(i == null ? void 0 : i.pointerEvents) || "", u.transform = c ? c(this.latestValues, "") : "none", u;
      const f = this.getLead();
      if (!this.projectionDelta || !this.layout || !f.target) {
        const m = {};
        return this.options.layoutId && (m.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, m.pointerEvents = ee(i == null ? void 0 : i.pointerEvents) || ""), this.hasProjected && !dt(this.latestValues) && (m.transform = c ? c({}, "") : "none", this.hasProjected = !1), m;
      }
      const h = f.animationValues || f.latestValues;
      this.applyTransformsToTarget(), u.transform = ps(this.projectionDeltaWithTransform, this.treeScale, h), c && (u.transform = c(h, u.transform));
      const { x: p, y: d } = this.projectionDelta;
      u.transformOrigin = `${p.origin * 100}% ${d.origin * 100}% 0`, f.animationValues ? u.opacity = f === this ? (l = (a = h.opacity) !== null && a !== void 0 ? a : this.latestValues.opacity) !== null && l !== void 0 ? l : 1 : this.preserveOpacity ? this.latestValues.opacity : h.opacityExit : u.opacity = f === this ? h.opacity !== void 0 ? h.opacity : "" : h.opacityExit !== void 0 ? h.opacityExit : 0;
      for (const m in re) {
        if (h[m] === void 0)
          continue;
        const { correct: y, applyTo: v } = re[m], x = u.transform === "none" ? h[m] : y(h[m], f);
        if (v) {
          const g = v.length;
          for (let V = 0; V < g; V++)
            u[v[V]] = x;
        } else
          u[m] = x;
      }
      return this.options.layoutId && (u.pointerEvents = f === this ? ee(i == null ? void 0 : i.pointerEvents) || "" : "none"), u;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((i) => {
        var a;
        return (a = i.currentAnimation) === null || a === void 0 ? void 0 : a.stop();
      }), this.root.nodes.forEach(ys), this.root.sharedNodes.clear();
    }
  };
}
function Nl(t) {
  t.updateLayout();
}
function Wl(t) {
  var e;
  const n = ((e = t.resumeFrom) === null || e === void 0 ? void 0 : e.snapshot) || t.snapshot;
  if (t.isLead() && t.layout && n && t.hasListeners("didUpdate")) {
    const { layoutBox: s, measuredBox: r } = t.layout, { animationType: o } = t.options, i = n.source !== t.layout.source;
    o === "size" ? Y((f) => {
      const h = i ? n.measuredBox[f] : n.layoutBox[f], p = K(h);
      h.min = s[f].min, h.max = h.min + p;
    }) : Yr(o, n.layoutBox, s) && Y((f) => {
      const h = i ? n.measuredBox[f] : n.layoutBox[f], p = K(s[f]);
      h.max = h.min + p, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0, t.relativeTarget[f].max = t.relativeTarget[f].min + p);
    });
    const a = Tt();
    Lt(a, s, n.layoutBox);
    const l = Tt();
    i ? Lt(l, t.applyTransform(r, !0), n.measuredBox) : Lt(l, s, n.layoutBox);
    const u = !$r(a);
    let c = !1;
    if (!t.resumeFrom) {
      const f = t.getClosestProjectingParent();
      if (f && !f.resumeFrom) {
        const { snapshot: h, layout: p } = f;
        if (h && p) {
          const d = _();
          kt(d, n.layoutBox, h.layoutBox);
          const m = _();
          kt(m, s, p.layoutBox), Kr(d, m) || (c = !0), f.options.layoutRoot && (t.relativeTarget = m, t.relativeTargetOrigin = d, t.relativeParent = f);
        }
      }
    }
    t.notifyListeners("didUpdate", {
      layout: s,
      snapshot: n,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: u,
      hasRelativeTargetChanged: c
    });
  } else if (t.isLead()) {
    const { onExitComplete: s } = t.options;
    s && s();
  }
  t.options.transition = void 0;
}
function Hl(t) {
  pt.totalNodes++, t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty), t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty));
}
function zl(t) {
  t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1;
}
function Gl(t) {
  t.clearSnapshot();
}
function ys(t) {
  t.clearMeasurements();
}
function $l(t) {
  t.isLayoutDirty = !1;
}
function Kl(t) {
  const { visualElement: e } = t.options;
  e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform();
}
function vs(t) {
  t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0, t.isProjectionDirty = !0;
}
function ql(t) {
  t.resolveTargetDelta();
}
function Yl(t) {
  t.calcProjection();
}
function Xl(t) {
  t.resetRotation();
}
function Zl(t) {
  t.removeLeadSnapshot();
}
function xs(t, e, n) {
  t.translate = I(e.translate, 0, n), t.scale = I(e.scale, 1, n), t.origin = e.origin, t.originPoint = e.originPoint;
}
function bs(t, e, n, s) {
  t.min = I(e.min, n.min, s), t.max = I(e.max, n.max, s);
}
function Ql(t, e, n, s) {
  bs(t.x, e.x, n.x, s), bs(t.y, e.y, n.y, s);
}
function Jl(t) {
  return t.animationValues && t.animationValues.opacityExit !== void 0;
}
const tu = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, Ps = (t) => typeof navigator < "u" && navigator.userAgent.toLowerCase().includes(t), Cs = Ps("applewebkit/") && !Ps("chrome/") ? Math.round : U;
function Ts(t) {
  t.min = Cs(t.min), t.max = Cs(t.max);
}
function eu(t) {
  Ts(t.x), Ts(t.y);
}
function Yr(t, e, n) {
  return t === "position" || t === "preserve-aspect" && !He(ds(e), ds(n), 0.2);
}
const nu = qr({
  attachResizeListener: (t, e) => Q(t, "resize", e),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), Ee = {
  current: void 0
}, Xr = qr({
  measureScroll: (t) => ({
    x: t.scrollLeft,
    y: t.scrollTop
  }),
  defaultParent: () => {
    if (!Ee.current) {
      const t = new nu({});
      t.mount(window), t.setOptions({ layoutScroll: !0 }), Ee.current = t;
    }
    return Ee.current;
  },
  resetTransform: (t, e) => {
    t.style.transform = e !== void 0 ? e : "none";
  },
  checkIsScrollRoot: (t) => window.getComputedStyle(t).position === "fixed"
}), su = {
  pan: {
    Feature: xl
  },
  drag: {
    Feature: vl,
    ProjectionNode: Xr,
    MeasureLayout: Hr
  }
}, ru = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function iu(t) {
  const e = ru.exec(t);
  if (!e)
    return [,];
  const [, n, s] = e;
  return [n, s];
}
function Ke(t, e, n = 1) {
  const [s, r] = iu(t);
  if (!s)
    return;
  const o = window.getComputedStyle(e).getPropertyValue(s);
  if (o) {
    const i = o.trim();
    return Er(i) ? parseFloat(i) : i;
  } else
    return Be(r) ? Ke(r, e, n + 1) : r;
}
function ou(t, { ...e }, n) {
  const s = t.current;
  if (!(s instanceof Element))
    return { target: e, transitionEnd: n };
  n && (n = { ...n }), t.values.forEach((r) => {
    const o = r.get();
    if (!Be(o))
      return;
    const i = Ke(o, s);
    i && r.set(i);
  });
  for (const r in e) {
    const o = e[r];
    if (!Be(o))
      continue;
    const i = Ke(o, s);
    i && (e[r] = i, n || (n = {}), n[r] === void 0 && (n[r] = o));
  }
  return { target: e, transitionEnd: n };
}
const au = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  "x",
  "y",
  "translateX",
  "translateY"
]), Zr = (t) => au.has(t), lu = (t) => Object.keys(t).some(Zr), ws = (t) => t === bt || t === D, Ss = (t, e) => parseFloat(t.split(", ")[e]), Vs = (t, e) => (n, { transform: s }) => {
  if (s === "none" || !s)
    return 0;
  const r = s.match(/^matrix3d\((.+)\)$/);
  if (r)
    return Ss(r[1], e);
  {
    const o = s.match(/^matrix\((.+)\)$/);
    return o ? Ss(o[1], t) : 0;
  }
}, uu = /* @__PURE__ */ new Set(["x", "y", "z"]), cu = _t.filter((t) => !uu.has(t));
function fu(t) {
  const e = [];
  return cu.forEach((n) => {
    const s = t.getValue(n);
    s !== void 0 && (e.push([n, s.get()]), s.set(n.startsWith("scale") ? 1 : 0));
  }), e.length && t.render(), e;
}
const Vt = {
  // Dimensions
  width: ({ x: t }, { paddingLeft: e = "0", paddingRight: n = "0" }) => t.max - t.min - parseFloat(e) - parseFloat(n),
  height: ({ y: t }, { paddingTop: e = "0", paddingBottom: n = "0" }) => t.max - t.min - parseFloat(e) - parseFloat(n),
  top: (t, { top: e }) => parseFloat(e),
  left: (t, { left: e }) => parseFloat(e),
  bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
  right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
  // Transform
  x: Vs(4, 13),
  y: Vs(5, 14)
};
Vt.translateX = Vt.x;
Vt.translateY = Vt.y;
const hu = (t, e, n) => {
  const s = e.measureViewportBox(), r = e.current, o = getComputedStyle(r), { display: i } = o, a = {};
  i === "none" && e.setStaticValue("display", t.display || "block"), n.forEach((u) => {
    a[u] = Vt[u](s, o);
  }), e.render();
  const l = e.measureViewportBox();
  return n.forEach((u) => {
    const c = e.getValue(u);
    c && c.jump(a[u]), t[u] = Vt[u](l, o);
  }), t;
}, du = (t, e, n = {}, s = {}) => {
  e = { ...e }, s = { ...s };
  const r = Object.keys(e).filter(Zr);
  let o = [], i = !1;
  const a = [];
  if (r.forEach((l) => {
    const u = t.getValue(l);
    if (!t.hasValue(l))
      return;
    let c = n[l], f = Mt(c);
    const h = e[l];
    let p;
    if (oe(h)) {
      const d = h.length, m = h[0] === null ? 1 : 0;
      c = h[m], f = Mt(c);
      for (let y = m; y < d && h[y] !== null; y++)
        p ? fn(Mt(h[y]) === p) : p = Mt(h[y]);
    } else
      p = Mt(h);
    if (f !== p)
      if (ws(f) && ws(p)) {
        const d = u.get();
        typeof d == "string" && u.set(parseFloat(d)), typeof h == "string" ? e[l] = parseFloat(h) : Array.isArray(h) && p === D && (e[l] = h.map(parseFloat));
      } else
        f != null && f.transform && (p != null && p.transform) && (c === 0 || h === 0) ? c === 0 ? u.set(p.transform(c)) : e[l] = f.transform(h) : (i || (o = fu(t), i = !0), a.push(l), s[l] = s[l] !== void 0 ? s[l] : e[l], u.jump(h));
  }), a.length) {
    const l = a.indexOf("height") >= 0 ? window.pageYOffset : null, u = hu(e, t, a);
    return o.length && o.forEach(([c, f]) => {
      t.getValue(c).set(f);
    }), t.render(), pe && l !== null && window.scrollTo({ top: l }), { target: u, transitionEnd: s };
  } else
    return { target: e, transitionEnd: s };
};
function pu(t, e, n, s) {
  return lu(e) ? du(t, e, n, s) : { target: e, transitionEnd: s };
}
const mu = (t, e, n, s) => {
  const r = ou(t, e, s);
  return e = r.target, s = r.transitionEnd, pu(t, e, n, s);
}, qe = { current: null }, Qr = { current: !1 };
function gu() {
  if (Qr.current = !0, !!pe)
    if (window.matchMedia) {
      const t = window.matchMedia("(prefers-reduced-motion)"), e = () => qe.current = t.matches;
      t.addListener(e), e();
    } else
      qe.current = !1;
}
function yu(t, e, n) {
  const { willChange: s } = e;
  for (const r in e) {
    const o = e[r], i = n[r];
    if ($(o))
      t.addValue(r, o), ce(s) && s.add(r);
    else if ($(i))
      t.addValue(r, St(o, { owner: t })), ce(s) && s.remove(r);
    else if (i !== o)
      if (t.hasValue(r)) {
        const a = t.getValue(r);
        !a.hasAnimated && a.set(o);
      } else {
        const a = t.getStaticValue(r);
        t.addValue(r, St(a !== void 0 ? a : o, { owner: t }));
      }
  }
  for (const r in n)
    e[r] === void 0 && t.removeValue(r);
  return e;
}
const As = /* @__PURE__ */ new WeakMap(), Jr = Object.keys(Ft), vu = Jr.length, Ds = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
], xu = en.length;
class bu {
  constructor({ parent: e, props: n, presenceContext: s, reducedMotionConfig: r, visualState: o }, i = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.scheduleRender = () => B.render(this.render, !1, !0);
    const { latestValues: a, renderState: l } = o;
    this.latestValues = a, this.baseTarget = { ...a }, this.initialValues = n.initial ? { ...a } : {}, this.renderState = l, this.parent = e, this.props = n, this.presenceContext = s, this.depth = e ? e.depth + 1 : 0, this.reducedMotionConfig = r, this.options = i, this.isControllingVariants = ge(n), this.isVariantNode = Fs(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(e && e.current);
    const { willChange: u, ...c } = this.scrapeMotionValuesFromProps(n, {});
    for (const f in c) {
      const h = c[f];
      a[f] !== void 0 && $(h) && (h.set(a[f], !1), ce(u) && u.add(f));
    }
  }
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(e, n) {
    return {};
  }
  mount(e) {
    this.current = e, As.set(e, this), this.projection && !this.projection.instance && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, s) => this.bindToMotionValue(s, n)), Qr.current || gu(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : qe.current, this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    As.delete(this.current), this.projection && this.projection.unmount(), et(this.notifyUpdate), et(this.render), this.valueSubscriptions.forEach((e) => e()), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
    for (const e in this.events)
      this.events[e].clear();
    for (const e in this.features)
      this.features[e].unmount();
    this.current = null;
  }
  bindToMotionValue(e, n) {
    const s = xt.has(e), r = n.on("change", (i) => {
      this.latestValues[e] = i, this.props.onUpdate && B.update(this.notifyUpdate, !1, !0), s && this.projection && (this.projection.isTransformDirty = !0);
    }), o = n.on("renderRequest", this.scheduleRender);
    this.valueSubscriptions.set(e, () => {
      r(), o();
    });
  }
  sortNodePosition(e) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== e.type ? 0 : this.sortInstanceNodePosition(this.current, e.current);
  }
  loadFeatures({ children: e, ...n }, s, r, o) {
    let i, a;
    for (let l = 0; l < vu; l++) {
      const u = Jr[l], { isEnabled: c, Feature: f, ProjectionNode: h, MeasureLayout: p } = Ft[u];
      h && (i = h), c(n) && (!this.features[u] && f && (this.features[u] = new f(this)), p && (a = p));
    }
    if ((this.type === "html" || this.type === "svg") && !this.projection && i) {
      this.projection = new i(this.latestValues, this.parent && this.parent.projection);
      const { layoutId: l, layout: u, drag: c, dragConstraints: f, layoutScroll: h, layoutRoot: p } = n;
      this.projection.setOptions({
        layoutId: l,
        layout: u,
        alwaysMeasureLayout: !!c || f && Pt(f),
        visualElement: this,
        scheduleRender: () => this.scheduleRender(),
        /**
         * TODO: Update options in an effect. This could be tricky as it'll be too late
         * to update by the time layout animations run.
         * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
         * ensuring it gets called if there's no potential layout animations.
         *
         */
        animationType: typeof u == "string" ? u : "both",
        initialPromotionConfig: o,
        layoutScroll: h,
        layoutRoot: p
      });
    }
    return a;
  }
  updateFeatures() {
    for (const e in this.features) {
      const n = this.features[e];
      n.isMounted ? n.update() : (n.mount(), n.isMounted = !0);
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.options, this.props);
  }
  /**
   * Measure the current viewport box with or without transforms.
   * Only measures axis-aligned boxes, rotate and skew must be manually
   * removed with a re-render to work.
   */
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : _();
  }
  getStaticValue(e) {
    return this.latestValues[e];
  }
  setStaticValue(e, n) {
    this.latestValues[e] = n;
  }
  /**
   * Make a target animatable by Popmotion. For instance, if we're
   * trying to animate width from 100px to 100vw we need to measure 100vw
   * in pixels to determine what we really need to animate to. This is also
   * pluggable to support Framer's custom value types like Color,
   * and CSS variables.
   */
  makeTargetAnimatable(e, n = !0) {
    return this.makeTargetAnimatableFromInstance(e, n);
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  update(e, n) {
    (e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = e, this.prevPresenceContext = this.presenceContext, this.presenceContext = n;
    for (let s = 0; s < Ds.length; s++) {
      const r = Ds[s];
      this.propEventSubscriptions[r] && (this.propEventSubscriptions[r](), delete this.propEventSubscriptions[r]);
      const o = e["on" + r];
      o && (this.propEventSubscriptions[r] = this.on(r, o));
    }
    this.prevMotionValues = yu(this, this.scrapeMotionValuesFromProps(e, this.prevProps), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  /**
   * Returns the variant definition with a given name.
   */
  getVariant(e) {
    return this.props.variants ? this.props.variants[e] : void 0;
  }
  /**
   * Returns the defined default transition on this component.
   */
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  getVariantContext(e = !1) {
    if (e)
      return this.parent ? this.parent.getVariantContext() : void 0;
    if (!this.isControllingVariants) {
      const s = this.parent ? this.parent.getVariantContext() || {} : {};
      return this.props.initial !== void 0 && (s.initial = this.props.initial), s;
    }
    const n = {};
    for (let s = 0; s < xu; s++) {
      const r = en[s], o = this.props[r];
      (Bt(o) || o === !1) && (n[r] = o);
    }
    return n;
  }
  /**
   * Add a child visual element to our set of children.
   */
  addVariantChild(e) {
    const n = this.getClosestVariantNode();
    if (n)
      return n.variantChildren && n.variantChildren.add(e), () => n.variantChildren.delete(e);
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(e, n) {
    n !== this.values.get(e) && (this.removeValue(e), this.bindToMotionValue(e, n)), this.values.set(e, n), this.latestValues[e] = n.get();
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(e) {
    this.values.delete(e);
    const n = this.valueSubscriptions.get(e);
    n && (n(), this.valueSubscriptions.delete(e)), delete this.latestValues[e], this.removeValueFromRenderState(e, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(e) {
    return this.values.has(e);
  }
  getValue(e, n) {
    if (this.props.values && this.props.values[e])
      return this.props.values[e];
    let s = this.values.get(e);
    return s === void 0 && n !== void 0 && (s = St(n, { owner: this }), this.addValue(e, s)), s;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(e) {
    var n;
    return this.latestValues[e] !== void 0 || !this.current ? this.latestValues[e] : (n = this.getBaseTargetFromProps(this.props, e)) !== null && n !== void 0 ? n : this.readValueFromInstance(this.current, e, this.options);
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(e, n) {
    this.baseTarget[e] = n;
  }
  /**
   * Find the base target for a value thats been removed from all animation
   * props.
   */
  getBaseTarget(e) {
    var n;
    const { initial: s } = this.props, r = typeof s == "string" || typeof s == "object" ? (n = cn(this.props, s)) === null || n === void 0 ? void 0 : n[e] : void 0;
    if (s && r !== void 0)
      return r;
    const o = this.getBaseTargetFromProps(this.props, e);
    return o !== void 0 && !$(o) ? o : this.initialValues[e] !== void 0 && r === void 0 ? void 0 : this.baseTarget[e];
  }
  on(e, n) {
    return this.events[e] || (this.events[e] = new bn()), this.events[e].add(n);
  }
  notify(e, ...n) {
    this.events[e] && this.events[e].notify(...n);
  }
}
class ti extends bu {
  sortInstanceNodePosition(e, n) {
    return e.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(e, n) {
    return e.style ? e.style[n] : void 0;
  }
  removeValueFromRenderState(e, { vars: n, style: s }) {
    delete n[e], delete s[e];
  }
  makeTargetAnimatableFromInstance({ transition: e, transitionEnd: n, ...s }, r) {
    const o = Fa(s, e || {}, this);
    if (r) {
      ka(this, s, o);
      const i = mu(this, s, o, n);
      n = i.transitionEnd, s = i.target;
    }
    return {
      transition: e,
      transitionEnd: n,
      ...s
    };
  }
}
function Pu(t) {
  return window.getComputedStyle(t);
}
class Cu extends ti {
  constructor() {
    super(...arguments), this.type = "html";
  }
  readValueFromInstance(e, n) {
    if (xt.has(n)) {
      const s = mn(n);
      return s && s.default || 0;
    } else {
      const s = Pu(e), r = (Ns(n) ? s.getPropertyValue(n) : s[n]) || 0;
      return typeof r == "string" ? r.trim() : r;
    }
  }
  measureInstanceViewportBox(e, { transformPagePoint: n }) {
    return Nr(e, n);
  }
  build(e, n, s, r) {
    rn(e, n, s, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(e, n) {
    return un(e, n);
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: e } = this.props;
    $(e) && (this.childSubscription = e.on("change", (n) => {
      this.current && (this.current.textContent = `${n}`);
    }));
  }
  renderInstance(e, n, s, r) {
    Ks(e, n, s, r);
  }
}
class Tu extends ti {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1;
  }
  getBaseTargetFromProps(e, n) {
    return e[n];
  }
  readValueFromInstance(e, n) {
    if (xt.has(n)) {
      const s = mn(n);
      return s && s.default || 0;
    }
    return n = qs.has(n) ? n : Qe(n), e.getAttribute(n);
  }
  measureInstanceViewportBox() {
    return _();
  }
  scrapeMotionValuesFromProps(e, n) {
    return Xs(e, n);
  }
  build(e, n, s, r) {
    an(e, n, s, this.isSVGTag, r.transformTemplate);
  }
  renderInstance(e, n, s, r) {
    Ys(e, n, s, r);
  }
  mount(e) {
    this.isSVGTag = ln(e.tagName), super.mount(e);
  }
}
const wu = (t, e) => sn(t) ? new Tu(e, { enableHardwareAcceleration: !1 }) : new Cu(e, { enableHardwareAcceleration: !0 }), Su = {
  layout: {
    ProjectionNode: Xr,
    MeasureLayout: Hr
  }
}, Vu = {
  ...Qa,
  ...vo,
  ...su,
  ...Su
}, Au = /* @__PURE__ */ Mi((t, e) => ro(t, e, Vu, wu));
function ei() {
  const t = w.useRef(!1);
  return Ze(() => (t.current = !0, () => {
    t.current = !1;
  }), []), t;
}
function Du() {
  const t = ei(), [e, n] = w.useState(0), s = w.useCallback(() => {
    t.current && n(e + 1);
  }, [e]);
  return [w.useCallback(() => B.postRender(s), [s]), e];
}
class Mu extends w.Component {
  getSnapshotBeforeUpdate(e) {
    const n = this.props.childRef.current;
    if (n && e.isPresent && !this.props.isPresent) {
      const s = this.props.sizeRef.current;
      s.height = n.offsetHeight || 0, s.width = n.offsetWidth || 0, s.top = n.offsetTop, s.left = n.offsetLeft;
    }
    return null;
  }
  /**
   * Required with getSnapshotBeforeUpdate to stop React complaining.
   */
  componentDidUpdate() {
  }
  render() {
    return this.props.children;
  }
}
function Ru({ children: t, isPresent: e }) {
  const n = w.useId(), s = w.useRef(null), r = w.useRef({
    width: 0,
    height: 0,
    top: 0,
    left: 0
  });
  return w.useInsertionEffect(() => {
    const { width: o, height: i, top: a, left: l } = r.current;
    if (e || !s.current || !o || !i)
      return;
    s.current.dataset.motionPopId = n;
    const u = document.createElement("style");
    return document.head.appendChild(u), u.sheet && u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${i}px !important;
            top: ${a}px !important;
            left: ${l}px !important;
          }
        `), () => {
      document.head.removeChild(u);
    };
  }, [e]), w.createElement(Mu, { isPresent: e, childRef: s, sizeRef: r }, w.cloneElement(t, { ref: s }));
}
const je = ({ children: t, initial: e, isPresent: n, onExitComplete: s, custom: r, presenceAffectsLayout: o, mode: i }) => {
  const a = Zs(Ou), l = w.useId(), u = w.useMemo(
    () => ({
      id: l,
      initial: e,
      isPresent: n,
      custom: r,
      onExitComplete: (c) => {
        a.set(c, !0);
        for (const f of a.values())
          if (!f)
            return;
        s && s();
      },
      register: (c) => (a.set(c, !1), () => a.delete(c))
    }),
    /**
     * If the presence of a child affects the layout of the components around it,
     * we want to make a new context value to ensure they get re-rendered
     * so they can detect that layout change.
     */
    o ? void 0 : [n]
  );
  return w.useMemo(() => {
    a.forEach((c, f) => a.set(f, !1));
  }, [n]), w.useEffect(() => {
    !n && !a.size && s && s();
  }, [n]), i === "popLayout" && (t = w.createElement(Ru, { isPresent: n }, t)), w.createElement(de.Provider, { value: u }, t);
};
function Ou() {
  return /* @__PURE__ */ new Map();
}
function Eu(t) {
  return w.useEffect(() => () => t(), []);
}
const mt = (t) => t.key || "";
function ju(t, e) {
  t.forEach((n) => {
    const s = mt(n);
    e.set(s, n);
  });
}
function Lu(t) {
  const e = [];
  return w.Children.forEach(t, (n) => {
    w.isValidElement(n) && e.push(n);
  }), e;
}
const ku = ({ children: t, custom: e, initial: n = !0, onExitComplete: s, exitBeforeEnter: r, presenceAffectsLayout: o = !0, mode: i = "sync" }) => {
  const a = w.useContext(nn).forceRender || Du()[0], l = ei(), u = Lu(t);
  let c = u;
  const f = w.useRef(/* @__PURE__ */ new Map()).current, h = w.useRef(c), p = w.useRef(/* @__PURE__ */ new Map()).current, d = w.useRef(!0);
  if (Ze(() => {
    d.current = !1, ju(u, p), h.current = c;
  }), Eu(() => {
    d.current = !0, p.clear(), f.clear();
  }), d.current)
    return w.createElement(w.Fragment, null, c.map((x) => w.createElement(je, { key: mt(x), isPresent: !0, initial: n ? void 0 : !1, presenceAffectsLayout: o, mode: i }, x)));
  c = [...c];
  const m = h.current.map(mt), y = u.map(mt), v = m.length;
  for (let x = 0; x < v; x++) {
    const g = m[x];
    y.indexOf(g) === -1 && !f.has(g) && f.set(g, void 0);
  }
  return i === "wait" && f.size && (c = []), f.forEach((x, g) => {
    if (y.indexOf(g) !== -1)
      return;
    const V = p.get(g);
    if (!V)
      return;
    const b = m.indexOf(g);
    let R = x;
    if (!R) {
      const j = () => {
        f.delete(g);
        const M = Array.from(p.keys()).filter((E) => !y.includes(E));
        if (M.forEach((E) => p.delete(E)), h.current = u.filter((E) => {
          const H = mt(E);
          return (
            // filter out the node exiting
            H === g || // filter out the leftover children
            M.includes(H)
          );
        }), !f.size) {
          if (l.current === !1)
            return;
          a(), s && s();
        }
      };
      R = w.createElement(je, { key: mt(V), isPresent: !1, onExitComplete: j, custom: e, presenceAffectsLayout: o, mode: i }, V), f.set(g, R);
    }
    c.splice(b, 0, R);
  }), c = c.map((x) => {
    const g = x.key;
    return f.has(g) ? x : w.createElement(je, { key: mt(x), isPresent: !0, presenceAffectsLayout: o, mode: i }, x);
  }), w.createElement(w.Fragment, null, f.size ? c : c.map((x) => w.cloneElement(x)));
};
function Bu(t, e, n) {
  return typeof t == "string" ? t = document.querySelectorAll(t) : t instanceof Element && (t = [t]), Array.from(t || []);
}
const Fu = {
  some: 0,
  all: 1
};
function Iu(t, e, { root: n, margin: s, amount: r = "some" } = {}) {
  const o = Bu(t), i = /* @__PURE__ */ new WeakMap(), a = (u) => {
    u.forEach((c) => {
      const f = i.get(c.target);
      if (c.isIntersecting !== !!f)
        if (c.isIntersecting) {
          const h = e(c);
          typeof h == "function" ? i.set(c.target, h) : l.unobserve(c.target);
        } else
          f && (f(c), i.delete(c.target));
    });
  }, l = new IntersectionObserver(a, {
    root: n,
    rootMargin: s,
    threshold: typeof r == "number" ? r : Fu[r]
  });
  return o.forEach((u) => l.observe(u)), () => l.disconnect();
}
function _u(t, { root: e, margin: n, amount: s, once: r = !1 } = {}) {
  const [o, i] = w.useState(!1);
  return w.useEffect(() => {
    if (!t.current || r && o)
      return;
    const a = () => (i(!0), r ? void 0 : () => i(!1)), l = {
      root: e && e.current || void 0,
      margin: n,
      amount: s
    };
    return Iu(t.current, a, l);
  }, [e, t, n, r, s]), o;
}
const Le = ({
  children: t
}) => t ? C("p", {
  css: {
    marginTop: "8px",
    fontSize: "12px",
    lineHeight: "18px",
    "--tw-text-opacity": "1",
    color: "rgb(221 51 68 / var(--tw-text-opacity))"
  }
}, t) : null;
function Ye() {
  return Ye = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var s in n)
        ({}).hasOwnProperty.call(n, s) && (t[s] = n[s]);
    }
    return t;
  }, Ye.apply(null, arguments);
}
const Uu = (t) => C("div", {
  css: {
    position: "relative",
    height: "24px",
    width: "24px",
    flexShrink: "0",
    borderRadius: "6px",
    "--tw-bg-opacity": "1",
    backgroundColor: "rgb(255 255 255 / var(--tw-bg-opacity))",
    outlineStyle: "solid",
    outlineWidth: "1px",
    outlineColor: "#DBDEE3",
    ":has(input:checked)": {
      "--tw-bg-opacity": "1",
      backgroundColor: "rgb(26 109 255 / var(--tw-bg-opacity))",
      outline: "2px solid transparent",
      outlineOffset: "2px"
    }
  }
}, C("input", Ye({}, t, {
  onChange: (e) => {
    t.onChange && t.onChange(e);
  },
  type: "checkbox",
  css: {
    position: "absolute",
    height: "0px",
    width: "0px",
    cursor: "pointer",
    opacity: "0"
  }
})), C(oi, {
  width: 16,
  height: 16,
  strokeWidth: 2,
  css: {
    position: "absolute",
    left: "50%",
    top: "50%",
    "--tw-translate-x": "-50%",
    transform: "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",
    "--tw-translate-y": "-50%",
    "--tw-text-opacity": "1",
    color: "rgb(255 255 255 / var(--tw-text-opacity))"
  }
}));
var ni = {}, si = {}, be = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.default = t.postcodeScriptUrl = void 0;
  var e = "https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
  t.postcodeScriptUrl = "https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
  var n = /* @__PURE__ */ function() {
    var r = null;
    return function() {
      var o = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : e;
      return r || (r = new Promise(function(i, a) {
        var l = document.createElement("script");
        l.src = o, l.onload = function() {
          var u, c;
          return (u = window) !== null && u !== void 0 && (c = u.daum) !== null && c !== void 0 && c.Postcode ? i(window.daum.Postcode) : void a(new Error("Script is loaded successfully, but cannot find Postcode module. Check your scriptURL property."));
        }, l.onerror = function(u) {
          return a(u);
        }, l.id = "daum_postcode_script", document.body.appendChild(l);
      }), r);
    };
  }(), s = n;
  t.default = s;
})(be);
(function(t) {
  function e(P) {
    "@babel/helpers - typeof";
    return e = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(T) {
      return typeof T;
    } : function(T) {
      return T && typeof Symbol == "function" && T.constructor === Symbol && T !== Symbol.prototype ? "symbol" : typeof T;
    }, e(P);
  }
  Object.defineProperty(t, "__esModule", { value: !0 }), t.default = void 0;
  var n = i(w), s = i(be), r = ["scriptUrl", "className", "style", "defaultQuery", "autoClose", "errorMessage", "onComplete", "onClose", "onResize", "onSearch"];
  function o(P) {
    if (typeof WeakMap != "function")
      return null;
    var T = /* @__PURE__ */ new WeakMap(), A = /* @__PURE__ */ new WeakMap();
    return (o = function(S) {
      return S ? A : T;
    })(P);
  }
  function i(P, T) {
    if (P && P.__esModule)
      return P;
    if (P === null || e(P) !== "object" && typeof P != "function")
      return { default: P };
    var A = o(T);
    if (A && A.has(P))
      return A.get(P);
    var S = {}, L = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var O in P)
      if (O != "default" && Object.prototype.hasOwnProperty.call(P, O)) {
        var F = L ? Object.getOwnPropertyDescriptor(P, O) : null;
        F && (F.get || F.set) ? Object.defineProperty(S, O, F) : S[O] = P[O];
      }
    return S.default = P, A && A.set(P, S), S;
  }
  function a(P, T) {
    var A = Object.keys(P);
    if (Object.getOwnPropertySymbols) {
      var S = Object.getOwnPropertySymbols(P);
      T && (S = S.filter(function(L) {
        return Object.getOwnPropertyDescriptor(P, L).enumerable;
      })), A.push.apply(A, S);
    }
    return A;
  }
  function l(P) {
    for (var T, A = 1; A < arguments.length; A++)
      T = arguments[A] == null ? {} : arguments[A], A % 2 ? a(Object(T), !0).forEach(function(S) {
        b(P, S, T[S]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(P, Object.getOwnPropertyDescriptors(T)) : a(Object(T)).forEach(function(S) {
        Object.defineProperty(P, S, Object.getOwnPropertyDescriptor(T, S));
      });
    return P;
  }
  function u(P, T) {
    if (P == null)
      return {};
    var A, S, L = c(P, T);
    if (Object.getOwnPropertySymbols) {
      var O = Object.getOwnPropertySymbols(P);
      for (S = 0; S < O.length; S++)
        A = O[S], 0 <= T.indexOf(A) || Object.prototype.propertyIsEnumerable.call(P, A) && (L[A] = P[A]);
    }
    return L;
  }
  function c(P, T) {
    if (P == null)
      return {};
    var A, S, L = {}, O = Object.keys(P);
    for (S = 0; S < O.length; S++)
      A = O[S], 0 <= T.indexOf(A) || (L[A] = P[A]);
    return L;
  }
  function f(P, T) {
    if (!(P instanceof T))
      throw new TypeError("Cannot call a class as a function");
  }
  function h(P, T) {
    for (var A, S = 0; S < T.length; S++)
      A = T[S], A.enumerable = A.enumerable || !1, A.configurable = !0, "value" in A && (A.writable = !0), Object.defineProperty(P, A.key, A);
  }
  function p(P, T, A) {
    return T && h(P.prototype, T), P;
  }
  function d(P, T) {
    if (typeof T != "function" && T !== null)
      throw new TypeError("Super expression must either be null or a function");
    P.prototype = Object.create(T && T.prototype, { constructor: { value: P, writable: !0, configurable: !0 } }), T && m(P, T);
  }
  function m(P, T) {
    return m = Object.setPrototypeOf || function(A, S) {
      return A.__proto__ = S, A;
    }, m(P, T);
  }
  function y(P) {
    var T = g();
    return function() {
      var A, S = V(P);
      if (T) {
        var L = V(this).constructor;
        A = Reflect.construct(S, arguments, L);
      } else
        A = S.apply(this, arguments);
      return v(this, A);
    };
  }
  function v(P, T) {
    return T && (e(T) === "object" || typeof T == "function") ? T : x(P);
  }
  function x(P) {
    if (P === void 0)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return P;
  }
  function g() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
      return !1;
    if (typeof Proxy == "function")
      return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      })), !0;
    } catch {
      return !1;
    }
  }
  function V(P) {
    return V = Object.setPrototypeOf ? Object.getPrototypeOf : function(T) {
      return T.__proto__ || Object.getPrototypeOf(T);
    }, V(P);
  }
  function b(P, T, A) {
    return T in P ? Object.defineProperty(P, T, { value: A, enumerable: !0, configurable: !0, writable: !0 }) : P[T] = A, P;
  }
  var R = /* @__PURE__ */ n.default.createElement("p", null, "현재 Daum 우편번호 서비스를 이용할 수 없습니다. 잠시 후 다시 시도해주세요."), j = { width: "100%", height: 400 }, M = { scriptUrl: s.postcodeScriptUrl, errorMessage: R, autoClose: !0 }, E = /* @__PURE__ */ function(P) {
    function T() {
      var S;
      f(this, T);
      for (var L = arguments.length, O = Array(L), F = 0; F < L; F++)
        O[F] = arguments[F];
      return S = A.call.apply(A, [this].concat(O)), b(x(S), "mounted", !1), b(x(S), "wrap", /* @__PURE__ */ (0, n.createRef)()), b(x(S), "state", { hasError: !1 }), b(x(S), "initiate", function(X) {
        if (S.wrap.current) {
          var N = S.props;
          N.scriptUrl, N.className, N.style;
          var Ht = N.defaultQuery, k = N.autoClose;
          N.errorMessage;
          var nt = N.onComplete, zt = N.onClose, Gt = N.onResize, $t = N.onSearch, ut = u(N, r), Kt = new X(l(l({}, ut), {}, { oncomplete: function(At) {
            nt && nt(At), k && S.wrap.current && S.wrap.current.remove();
          }, onsearch: $t, onresize: Gt, onclose: zt, width: "100%", height: "100%" }));
          Kt.embed(S.wrap.current, { q: Ht, autoClose: k });
        }
      }), b(x(S), "onError", function(X) {
        console.error(X), S.setState({ hasError: !0 });
      }), S;
    }
    d(T, P);
    var A = y(T);
    return p(T, [{ key: "componentDidMount", value: function() {
      var L = this.initiate, O = this.onError, F = this.props.scriptUrl;
      F && (this.mounted || ((0, s.default)(F).then(L).catch(O), this.mounted = !0));
    } }, { key: "render", value: function() {
      var L = this.props, O = L.className, F = L.style, X = L.errorMessage, N = this.state.hasError;
      return /* @__PURE__ */ n.default.createElement("div", { ref: this.wrap, className: O, style: l(l({}, j), F) }, N && X);
    } }]), T;
  }(n.Component);
  b(E, "defaultProps", M);
  var H = E;
  t.default = H;
})(si);
var ri = {};
(function(t) {
  function e(d) {
    "@babel/helpers - typeof";
    return e = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(m) {
      return typeof m;
    } : function(m) {
      return m && typeof Symbol == "function" && m.constructor === Symbol && m !== Symbol.prototype ? "symbol" : typeof m;
    }, e(d);
  }
  Object.defineProperty(t, "__esModule", { value: !0 }), t.default = void 0;
  var n = w, s = i(be), r = ["defaultQuery", "left", "top", "popupKey", "popupTitle", "autoClose", "onComplete", "onResize", "onClose", "onSearch", "onError"];
  function o(d) {
    if (typeof WeakMap != "function")
      return null;
    var m = /* @__PURE__ */ new WeakMap(), y = /* @__PURE__ */ new WeakMap();
    return (o = function(v) {
      return v ? y : m;
    })(d);
  }
  function i(d, m) {
    if (d && d.__esModule)
      return d;
    if (d === null || e(d) !== "object" && typeof d != "function")
      return { default: d };
    var y = o(m);
    if (y && y.has(d))
      return y.get(d);
    var v = {}, x = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var g in d)
      if (g != "default" && Object.prototype.hasOwnProperty.call(d, g)) {
        var V = x ? Object.getOwnPropertyDescriptor(d, g) : null;
        V && (V.get || V.set) ? Object.defineProperty(v, g, V) : v[g] = d[g];
      }
    return v.default = d, y && y.set(d, v), v;
  }
  function a(d, m) {
    var y = Object.keys(d);
    if (Object.getOwnPropertySymbols) {
      var v = Object.getOwnPropertySymbols(d);
      m && (v = v.filter(function(x) {
        return Object.getOwnPropertyDescriptor(d, x).enumerable;
      })), y.push.apply(y, v);
    }
    return y;
  }
  function l(d) {
    for (var m, y = 1; y < arguments.length; y++)
      m = arguments[y] == null ? {} : arguments[y], y % 2 ? a(Object(m), !0).forEach(function(v) {
        u(d, v, m[v]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(d, Object.getOwnPropertyDescriptors(m)) : a(Object(m)).forEach(function(v) {
        Object.defineProperty(d, v, Object.getOwnPropertyDescriptor(m, v));
      });
    return d;
  }
  function u(d, m, y) {
    return m in d ? Object.defineProperty(d, m, { value: y, enumerable: !0, configurable: !0, writable: !0 }) : d[m] = y, d;
  }
  function c(d, m) {
    if (d == null)
      return {};
    var y, v, x = f(d, m);
    if (Object.getOwnPropertySymbols) {
      var g = Object.getOwnPropertySymbols(d);
      for (v = 0; v < g.length; v++)
        y = g[v], 0 <= m.indexOf(y) || Object.prototype.propertyIsEnumerable.call(d, y) && (x[y] = d[y]);
    }
    return x;
  }
  function f(d, m) {
    if (d == null)
      return {};
    var y, v, x = {}, g = Object.keys(d);
    for (v = 0; v < g.length; v++)
      y = g[v], 0 <= m.indexOf(y) || (x[y] = d[y]);
    return x;
  }
  function h() {
    var d = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : s.postcodeScriptUrl;
    (0, n.useEffect)(function() {
      (0, s.default)(d);
    }, [d]);
    var m = (0, n.useCallback)(function(y) {
      var v = l({}, y), x = v.defaultQuery, g = v.left, V = v.top, b = v.popupKey, R = v.popupTitle, j = v.autoClose, M = v.onComplete, E = v.onResize, H = v.onClose, P = v.onSearch, T = v.onError, A = c(v, r);
      return (0, s.default)(d).then(function(S) {
        var L = new S(l(l({}, A), {}, { oncomplete: M, onsearch: P, onresize: E, onclose: H }));
        L.open({ q: x, left: g, top: V, popupTitle: R, popupKey: b, autoClose: j });
      }).catch(T);
    }, [d]);
    return m;
  }
  var p = h;
  t.default = p;
})(ri);
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), Object.defineProperty(t, "DaumPostcodeEmbed", { enumerable: !0, get: function() {
    return e.default;
  } }), Object.defineProperty(t, "useDaumPostcodePopup", { enumerable: !0, get: function() {
    return n.default;
  } }), Object.defineProperty(t, "loadPostcode", { enumerable: !0, get: function() {
    return s.default;
  } }), t.default = void 0;
  var e = r(si), n = r(ri), s = r(be);
  function r(i) {
    return i && i.__esModule ? i : { default: i };
  }
  var o = e.default;
  t.default = o;
})(ni);
const Nu = /* @__PURE__ */ ai(ni), Ms = 450, Wu = ({
  setFormValue: t
}) => {
  const [e, n] = z.useState(!1), [s, r] = z.useState(Ms), {
    shouldUseFallback: o
  } = di(), i = (a) => {
    var p;
    let l = a.address ?? "", u = "";
    const f = (l.match(/ /g) || []).length <= 2, h = a.sido && l.trim().charAt(0) === a.sido.charAt(0);
    if (f && !h) {
      const d = a.roadAddress || a.autoRoadAddress || a.jibunAddress || a.autoJibunAddress;
      (p = window.DD_RUM) == null || p.addError(new Error("[DaumPostcodeButton] 주소가 비어있거나 불완전함"), {
        address: a,
        fallbackAddress: d,
        mfe: {
          name: "oms-customer-front-office",
          version: "oms-customer-front-office_1788766413045"
        }
      }), d && (l = d);
    }
    a.addressType === "R" && (a.bname !== "" && (u += a.bname), a.buildingName !== "" && (u += u !== "" ? `, ${a.buildingName}` : a.buildingName), l += u !== "" ? ` (${u})` : ""), t({
      addr1: l,
      zipcode: a.zonecode
    }), n(!1);
  };
  return C(z.Fragment, null, C(Os, {
    variant: "outlined",
    size: "large",
    onClick: () => {
      n(!0), r(Ms);
    }
  }, "주소찾기"), C(ke, {
    isOpen: e,
    title: "주소찾기",
    onRequestClose: () => n(!1),
    contentStyle: {
      padding: 0
    }
  }, o ? C(pi, {
    onComplete: (a) => {
      t(a), n(!1);
    },
    height: s
  }) : C(Nu, {
    onComplete: i,
    onResize: (a) => r(a.height),
    style: {
      height: s
    }
  })));
};
function Xe() {
  return Xe = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var s in n)
        ({}).hasOwnProperty.call(n, s) && (t[s] = n[s]);
    }
    return t;
  }, Xe.apply(null, arguments);
}
const Hu = ({
  show: t,
  ...e
}) => C(ku, null, t && C(Au.div, {
  initial: {
    opacity: 0,
    y: 10,
    x: "-50%"
  },
  animate: {
    opacity: 1,
    y: 0,
    x: "-50%"
  },
  exit: {
    opacity: 0,
    y: 10,
    x: "-50%"
  },
  css: {
    position: "fixed",
    bottom: "20px",
    left: "50%"
  }
}, C("button", Xe({
  type: "button"
}, e, {
  css: {
    display: "flex",
    alignItems: "center",
    columnGap: "4px",
    borderRadius: "9999px",
    "--tw-bg-opacity": "1",
    backgroundColor: "rgb(21 24 30 / var(--tw-bg-opacity))",
    paddingLeft: "12px",
    paddingRight: "12px",
    paddingTop: "8px",
    paddingBottom: "8px"
  }
}), C("span", {
  css: {
    fontSize: "14px",
    lineHeight: "20px",
    "--tw-text-opacity": "1",
    color: "rgb(255 255 255 / var(--tw-text-opacity))"
  }
}, "배송지 입력"), C(ci, {
  strokeWidth: 2,
  css: {
    "--tw-text-opacity": "1",
    color: "rgb(159 163 171 / var(--tw-text-opacity))"
  }
})))), te = {
  DATA_USAGE: "개인정보수집및이용동의",
  THIRD_PARTY: "개인정보제3자제공동의"
}, zu = ({
  term: t
}) => {
  const [e, n] = z.useState();
  return C(z.Fragment, null, C("div", {
    css: {
      display: "grid",
      gridTemplateColumns: "1fr auto",
      rowGap: "4px",
      borderRadius: "8px",
      "--tw-bg-opacity": "1",
      backgroundColor: "rgb(248 249 251 / var(--tw-bg-opacity))",
      paddingLeft: "20px",
      paddingRight: "20px",
      paddingTop: "16px",
      paddingBottom: "16px",
      "--tw-text-opacity": "1",
      color: "rgb(248 249 251 / var(--tw-text-opacity))"
    }
  }, C("div", {
    css: {
      fontSize: "14px",
      lineHeight: "24px",
      "--tw-text-opacity": "1",
      color: "rgb(113 118 128 / var(--tw-text-opacity))"
    }
  }, "개인정보 수집 및 이용 동의"), C(Tn, {
    onClick: () => n(te.DATA_USAGE)
  }, "보기"), C(ke, {
    isOpen: e === te.DATA_USAGE,
    title: "개인정보 수집 및 이용 동의",
    onRequestClose: () => n(void 0)
  }, C("div", {
    css: {
      minHeight: "370px",
      overflow: "auto"
    }
  }, C("strong", null, "1. 개인정보 수집 및 이용 목적"), C("p", null, "(1) 비회원 구매 서비스 제공"), C("p", null, "비회원 구매에 따른 본인 확인, 물품 배송, 서비스 제공, 계약서․청구서 발송, 본인인증, 연령인증, 요금결제 및 정산, 채권추심, 서비스 부정 이용 방지, 각종 고지 및 통지 등의 목적"), C("br", null), C("p", null, "(2) 고충처리"), C("p", null, "민원인의 신원 확인, 민원사항 확인, 사실조사를 위한 연락․통지, 처리 결과 통보 등"), C("br", null), C("strong", null, "2. 수집하는 개인정보 항목"), C("p", null, "성명, 주소, 휴대폰번호, 이메일, 결제 정보"), C("br", null), C("strong", null, "3. 개인정보 보유 및 이용 기간"), C("p", null, "전자상거래법 등 관계 법령에 의거 구매 후 5년간 보관"), C("br", null), C("strong", null, "※ 동의를 거부할 수 있으나 거부 시 비회원 구매 서비스 이용이 불가합니다."))), t && C(z.Fragment, null, C("div", {
    css: {
      fontSize: "14px",
      lineHeight: "24px",
      "--tw-text-opacity": "1",
      color: "rgb(113 118 128 / var(--tw-text-opacity))"
    }
  }, "개인정보 제3자 제공 동의"), C(Tn, {
    onClick: () => n(te.THIRD_PARTY)
  }, "보기"), C(ke, {
    isOpen: e === te.THIRD_PARTY,
    title: "개인정보 제3자 제공 동의",
    onRequestClose: () => n(void 0)
  }, C("div", {
    css: {
      minHeight: "370px",
      overflow: "auto",
      "& *": {
        display: "block"
      }
    },
    dangerouslySetInnerHTML: {
      __html: t
    }
  })))));
};
function Gu(t, e) {
  const {
    field: n,
    value: s
  } = e, o = wn.shape[n].safeParse(s), i = o.success ? void 0 : o.error.errors[0].message, a = wn.safeParse({
    ...t.value,
    [n]: s
  });
  return {
    value: {
      ...t.value,
      [n]: s
    },
    error: {
      ...t.error,
      [n]: i
    },
    isValid: a.success
  };
}
function Rs(t) {
  t instanceof Error ? alert(t.message) : alert("선물받기에 실패했어요");
}
const rc = ({
  siteName: t,
  term: e,
  formInitialValues: n,
  orderCode: s,
  orderDeliveryCode: r,
  giftOrderCancelScheduleDate: o,
  useCommonEntrancePassword: i
}) => {
  const {
    ct: a
  } = li(), [l, u] = z.useReducer(Gu, {
    value: {
      ...n,
      termsAccepted: !1
    },
    error: {},
    isValid: !1
  }), [c, f] = z.useState(() => n.memo ? Object.values(Dt).find((b) => b === n.memo) ?? Dt.직접입력 : void 0), [h, p] = z.useState(!1), d = z.useRef(null), m = _u(d, {
    amount: 0.2
  }), y = ui(), {
    mutateAsync: v
  } = mi({
    mutationFn: async (b) => {
      const {
        data: R
      } = await ii.post(`/ajax/oms/OMS_wrap_customer_v1_gift_{orderCode}_receive.cm?orderCode=${s}`, b, {
        withCredentials: !0
      });
      return R == null ? void 0 : R.data;
    },
    onError: Rs,
    onSuccess: () => {
      alert("선물받기에 성공했어요"), y.invalidateQueries({
        queryKey: ["Gift"]
      });
    }
  }), x = async (b) => {
    try {
      if (b.preventDefault(), p(!0), !r)
        throw new Error("주문배송코드가 없어요");
      const R = {
        orderDeliveryCode: r
      };
      for (const [j, M] of Object.entries(l.value))
        j !== "termsAccepted" && M && Object.assign(R, {
          [j]: M
        });
      await v(R);
    } catch (R) {
      Rs(R);
    } finally {
      p(!1);
    }
  }, g = z.useCallback(({
    addr1: b,
    zipcode: R
  }) => {
    u({
      field: "addr1",
      value: b
    }), u({
      field: "zipcode",
      value: R
    });
  }, []), V = z.useCallback((b) => {
    f(b), b === Dt.직접입력 ? u({
      field: "memo",
      value: ""
    }) : u({
      field: "memo",
      value: b
    });
  }, []);
  return z.useEffect(() => {
    (function() {
      u({
        field: "receiverName",
        value: n.receiverName
      }), u({
        field: "receiverCall",
        value: n.receiverCall
      });
    })();
  }, [n]), C("div", {
    css: {
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: "768px",
      "--tw-bg-opacity": "1",
      backgroundColor: "rgb(255 255 255 / var(--tw-bg-opacity))",
      padding: "24px",
      "@media (min-width: 768px)": {
        borderRadius: "16px"
      }
    },
    ref: d
  }, C("div", {
    css: {
      marginBottom: "24px",
      fontSize: "20px",
      fontWeight: "700",
      lineHeight: "28px"
    }
  }, "배송 정보"), o && C(hi, {
    css: {
      marginBottom: "20px"
    },
    variant: "warning"
  }, "배송지 입력 기한이 ", gi(o, /* @__PURE__ */ new Date()), "일 남았어요."), C("form", {
    css: {
      "> :not([hidden]) ~ :not([hidden])": {
        "--tw-space-y-reverse": "0",
        marginTop: "calc(24px * calc(1 - var(--tw-space-y-reverse)))",
        marginBottom: "calc(24px * var(--tw-space-y-reverse))"
      }
    },
    onSubmit: x
  }, C("div", null, C(Yt, null, "받는 분 정보"), C("div", {
    css: {
      display: "flex",
      width: "100%",
      columnGap: "8px"
    }
  }, C(ft, {
    value: l.value.receiverName,
    onChange: (b) => u({
      field: "receiverName",
      value: b.target.value
    }),
    placeholder: "받는 분 성함",
    error: l.error.receiverName
  }), C(ft, {
    value: l.value.receiverCall,
    onChange: (b) => u({
      field: "receiverCall",
      value: b.target.value
    }),
    placeholder: "연락처",
    error: l.error.receiverCall,
    type: "tel"
  })), C(Le, null, l.error.receiverName || l.error.receiverCall)), C("div", null, C(Yt, null, "주소"), C("div", {
    css: {
      display: "flex",
      columnGap: "8px"
    }
  }, C(ft, {
    value: l.value.addr1,
    variant: "secondary",
    placeholder: "건물, 지번 또는 도로명",
    readOnly: !0
  }), C(Wu, {
    setFormValue: g
  })), C("div", {
    css: {
      height: "12px"
    }
  }), C(ft, {
    value: l.value.addr2,
    onChange: (b) => u({
      field: "addr2",
      value: b.target.value
    }),
    placeholder: "상세주소",
    error: l.error.addr2
  }), i && C(z.Fragment, null, C("div", {
    css: {
      height: "12px"
    }
  }), C(ft, {
    value: l.value.commonEntrancePassword,
    placeholder: a("설명_공동현관비밀번호"),
    onChange: (b) => u({
      field: "commonEntrancePassword",
      value: b.target.value
    }),
    maxLength: 30
  }))), "unipassNumber" in l.value && C("div", null, C(Yt, null, "개인통관고유부호"), C(ft, {
    value: l.value.unipassNumber,
    placeholder: "입력해 주세요",
    onChange: (b) => u({
      field: "unipassNumber",
      value: b.target.value
    }),
    error: l.error.unipassNumber
  }), C(Le, null, l.error.unipassNumber)), C("div", null, C("div", null, C(Yt, null, a("타이틀_배송메모")), C(fi, {
    optionList: Object.values(Dt),
    placeholder: "배송메모를 선택해 주세요.",
    value: c,
    onChange: V
  })), c === Dt.직접입력 && C("div", {
    css: {
      marginTop: "12px"
    }
  }, C(ft, {
    value: l.value.memo,
    placeholder: "배송메모를 입력해 주세요",
    onChange: (b) => u({
      field: "memo",
      value: b.target.value
    }),
    error: l.error.memo
  }), C(Le, null, l.error.memo))), C("label", {
    css: {
      display: "flex",
      cursor: "pointer",
      columnGap: "12px",
      fontSize: "16px",
      lineHeight: "24px"
    }
  }, C(Uu, {
    onChange: (b) => u({
      field: "termsAccepted",
      value: b.target.checked
    }),
    checked: l.value.termsAccepted,
    name: "termsAccepted"
  }), "위 배송지 정보를 확인하였으며, ", t, " 서비스 이용에 동의합니다."), C(zu, {
    term: e
  }), C(Os, {
    size: "large",
    type: "submit",
    isFull: !0,
    disabled: !l.isValid || h
  }, C("div", {
    css: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      columnGap: "8px"
    }
  }, C(yi, {
    widt: 16,
    height: 16,
    strokeWidth: 2
  }), "선물받기"))), C(Hu, {
    show: !m,
    onClick: () => {
      var b;
      return (b = d.current) == null ? void 0 : b.scrollIntoView({
        behavior: "smooth"
      });
    }
  }));
};
export {
  rc as default
};
//# sourceMappingURL=DeliveryFormDefault-CzC9dYCa.js.map
