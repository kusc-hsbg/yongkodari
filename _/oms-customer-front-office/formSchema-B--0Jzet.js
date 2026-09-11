import { j as b, c as Be } from "./emotion-react.browser.esm-B9sQ19ZB.js";
import { f as q, v as Ee } from "./main-CBJ9kUeO.js";
import { R as j, r as je } from "./queryClient-DpZpBkWP.js";
const Ie = (r) => /* @__PURE__ */ q.jsx("svg", { width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...r, children: /* @__PURE__ */ q.jsx("path", { d: "M19.4083 19.9999C19.8658 19.9947 20.3141 19.8669 20.7084 19.629C21.1028 19.3911 21.4295 19.0516 21.6561 18.6441C21.8827 18.2366 22.0013 17.7754 22 17.3063C21.9987 16.8373 21.8777 16.3767 21.6489 15.9705L14.2406 3.29306C14.007 2.89833 13.6781 2.57197 13.2856 2.34548C12.8932 2.11899 12.4504 2 12 2C11.5496 2 11.1068 2.11899 10.7144 2.34548C10.3219 2.57198 9.99301 2.89832 9.75943 3.29305L2.35118 15.9706C2.12236 16.3768 2.00129 16.8373 2.00001 17.3063C1.99873 17.7754 2.11728 18.2366 2.34387 18.6441C2.57047 19.0516 2.8972 19.3911 3.29157 19.629C3.68594 19.8669 4.13419 19.9948 4.59174 19.9999M19.4083 19.9999L19.3987 20L4.59174 19.9999M19.4083 19.9999L4.59174 19.9999M12 9V14M12 17V17.1", stroke: "currentColor" }) }), Kt = (r) => /* @__PURE__ */ q.jsx("svg", { width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...r, children: /* @__PURE__ */ q.jsx("path", { d: "M6 18L18 6M18 6H10M18 6V14", stroke: "currentColor" }) }), Ue = (r) => /* @__PURE__ */ q.jsx("svg", { width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...r, children: /* @__PURE__ */ q.jsx("path", { d: "M6 9L12 15L18 9", stroke: "currentColor" }) });
function xe() {
  return xe = Object.assign ? Object.assign.bind() : function(r) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var n in t)
        ({}).hasOwnProperty.call(t, n) && (r[n] = t[n]);
    }
    return r;
  }, xe.apply(null, arguments);
}
const er = ({
  children: r,
  ...e
}) => b("label", xe({}, e, {
  css: {
    marginBottom: "6px",
    display: "block",
    fontSize: "14px",
    lineHeight: "24px"
  }
}), r);
function be() {
  return be = Object.assign ? Object.assign.bind() : function(r) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var n in t)
        ({}).hasOwnProperty.call(t, n) && (r[n] = t[n]);
    }
    return r;
  }, be.apply(null, arguments);
}
const We = {
  outlined: {
    "--tw-bg-opacity": "1",
    backgroundColor: "rgb(255 255 255 / var(--tw-bg-opacity))",
    outlineStyle: "solid",
    outlineWidth: "1px",
    outlineColor: "#DBDEE3"
  },
  secondary: {
    "--tw-bg-opacity": "1",
    backgroundColor: "rgb(248 249 251 / var(--tw-bg-opacity))"
  }
}, tr = j.memo(({
  error: r,
  variant: e = "outlined",
  type: t = "text",
  ...n
}) => b("div", {
  css: [{
    display: "flex",
    height: "48px",
    width: "100%",
    alignItems: "center",
    columnGap: "8px",
    borderRadius: "8px",
    paddingLeft: "16px",
    paddingRight: "16px",
    fontSize: "16px",
    lineHeight: "24px",
    ":hover": {
      outlineStyle: "solid",
      outlineWidth: "1px",
      outlineColor: "#70A2FF"
    }
  }, r && {
    "--tw-bg-opacity": "1",
    backgroundColor: "rgb(255 242 243 / var(--tw-bg-opacity))",
    ":hover": {
      outlineStyle: "solid",
      outlineWidth: "1px",
      outlineColor: "#FEA3AC"
    },
    ":not(:hover)": {
      outline: "2px solid transparent",
      outlineOffset: "2px"
    }
  }, !r && {
    ":focus-within": {
      outlineStyle: "solid",
      outlineWidth: "2px",
      outlineColor: "#1A6DFF"
    },
    ":disabled": {
      backgroundColor: "#7378820D",
      "--tw-text-opacity": "1",
      color: "rgb(188 192 198 / var(--tw-text-opacity))",
      outline: "2px solid transparent",
      outlineOffset: "2px"
    }
  }, !r && We[e]]
}, b("input", be({}, n, {
  type: t,
  css: {
    height: "100%",
    width: "100%",
    flexGrow: "1",
    overflow: "auto",
    backgroundColor: "transparent",
    paddingTop: "12px",
    paddingBottom: "12px",
    color: "inherit",
    "::placeholder": {
      "--tw-text-opacity": "1",
      color: "rgb(113 118 128 / var(--tw-text-opacity))"
    },
    ":focus": {
      outline: "2px solid transparent",
      outlineOffset: "2px"
    }
  }
})), !!r && b(Ie, {
  width: 16,
  height: 16,
  color: "#DD3344",
  strokeWidth: 2
})));
function we() {
  return we = Object.assign ? Object.assign.bind() : function(r) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var n in t)
        ({}).hasOwnProperty.call(t, n) && (r[n] = t[n]);
    }
    return r;
  }, we.apply(null, arguments);
}
const qe = {
  outlined: {
    borderWidth: "1px",
    "--tw-border-opacity": "1",
    borderColor: "rgb(219 222 227 / var(--tw-border-opacity))",
    "--tw-bg-opacity": "1",
    backgroundColor: "rgb(255 255 255 / var(--tw-bg-opacity))",
    "--tw-text-opacity": "1",
    color: "rgb(113 118 128 / var(--tw-text-opacity))",
    ":hover": {
      "--tw-bg-opacity": "1",
      backgroundColor: "rgb(248 249 251 / var(--tw-bg-opacity))"
    },
    ":active": {
      "--tw-bg-opacity": "1",
      backgroundColor: "rgb(226 229 233 / var(--tw-bg-opacity))"
    },
    ":disabled": {
      borderStyle: "none"
    }
  },
  primary: {
    "--tw-bg-opacity": "1",
    backgroundColor: "rgb(26 109 255 / var(--tw-bg-opacity))",
    "--tw-text-opacity": "1",
    color: "rgb(255 255 255 / var(--tw-text-opacity))",
    ":hover": {
      "--tw-bg-opacity": "1",
      backgroundColor: "rgb(112 162 255 / var(--tw-bg-opacity))"
    },
    ":active": {
      "--tw-bg-opacity": "1",
      backgroundColor: "rgb(153 189 255 / var(--tw-bg-opacity))"
    }
  },
  secondary: {
    "--tw-bg-opacity": "1",
    backgroundColor: "rgb(255 255 255 / var(--tw-bg-opacity))",
    "--tw-text-opacity": "1",
    color: "rgb(113 118 128 / var(--tw-text-opacity))",
    ":hover": {
      "--tw-bg-opacity": "1",
      backgroundColor: "rgb(248 249 251 / var(--tw-bg-opacity))"
    },
    ":active": {
      "--tw-bg-opacity": "1",
      backgroundColor: "rgb(226 229 233 / var(--tw-bg-opacity))"
    }
  }
}, Ye = {
  medium: {
    height: "40px",
    borderRadius: "8px",
    paddingLeft: "12px",
    paddingRight: "12px"
  },
  large: {
    height: "48px",
    borderRadius: "8px",
    paddingLeft: "16px",
    paddingRight: "16px"
  },
  small: {
    height: "32px",
    borderRadius: "6px",
    paddingLeft: "12px",
    paddingRight: "12px"
  }
}, rr = j.forwardRef(({
  children: r,
  isFull: e,
  variant: t = "primary",
  size: n = "medium",
  asChild: a,
  ...s
}, i) => b(a ? He : "button", we({
  type: "button"
}, s, {
  css: [{
    whiteSpace: "nowrap",
    ":disabled": {
      pointerEvents: "none",
      backgroundColor: "#73788226",
      "--tw-text-opacity": "1",
      color: "rgb(188 192 198 / var(--tw-text-opacity))"
    }
  }, e && {
    width: "100%"
  }, qe[t], Ye[n]],
  ref: i
}), r));
function He({
  children: r,
  ...e
}) {
  return j.isValidElement(r) ? j.cloneElement(r, {
    ...e,
    ...r.props
  }) : (j.Children.count(r) > 1 && j.Children.only(null), null);
}
const Xe = (r, e) => {
  je.useEffect(() => {
    const t = (n) => {
      const a = r == null ? void 0 : r.current;
      !a || a.contains((n == null ? void 0 : n.target) || null) || e(n);
    };
    return document.addEventListener("mousedown", t), document.addEventListener("touchstart", t), () => {
      document.removeEventListener("mousedown", t), document.removeEventListener("touchstart", t);
    };
  }, [r, e]);
}, nr = ({
  optionList: r,
  value: e,
  onChange: t,
  placeholder: n = "선택해 주세요.",
  disabled: a
}) => {
  const [s, i] = j.useState(!1), o = j.useRef(null);
  Xe(o, () => i(!1));
  const p = je.useId();
  return b("div", {
    css: {
      position: "relative"
    },
    ref: o
  }, b("div", {
    css: [{
      display: "flex",
      height: "48px",
      cursor: "default",
      alignItems: "center",
      overflow: "hidden",
      borderRadius: "8px",
      paddingLeft: "12px",
      paddingRight: "36px",
      fontSize: "16px",
      lineHeight: "24px",
      outlineStyle: "solid",
      outlineWidth: "1px",
      outlineColor: "#DBDEE3"
    }, {
      ":focus": {
        outlineColor: "#1A6DFF"
      }
    }, a && {
      pointerEvents: "none",
      backgroundColor: "#7378820D",
      "--tw-text-opacity": "1",
      color: "rgb(188 192 198 / var(--tw-text-opacity))",
      outline: "2px solid transparent",
      outlineOffset: "2px"
    }],
    "aria-controls": p,
    "aria-expanded": s,
    "aria-haspopup": "listbox",
    "aria-autocomplete": "list",
    "aria-activedescendant": s && e ? `${p}-${e}` : void 0,
    role: "combobox",
    tabIndex: 0,
    onClick: () => i((d) => !d),
    "aria-disabled": a
  }, e ? b("span", {
    css: {
      overflow: "hidden",
      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: "1"
    }
  }, e) : b("span", {
    css: {
      "--tw-text-opacity": "1",
      color: "rgb(113 118 128 / var(--tw-text-opacity))",
      overflow: "hidden",
      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: "1"
    }
  }, n)), b(Ue, {
    width: 16,
    height: 16,
    strokeWidth: 2,
    css: [{
      position: "absolute",
      right: "16px",
      top: "50%",
      "--tw-translate-y": "-50%",
      transform: "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",
      "--tw-text-opacity": "1",
      color: "rgb(75 81 91 / var(--tw-text-opacity))",
      transitionProperty: "transform",
      transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
      transitionDuration: "150ms"
    }, s && {
      "--tw-rotate": "180deg",
      transform: "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"
    }, a && {
      pointerEvents: "none",
      "--tw-text-opacity": "1",
      color: "rgb(188 192 198 / var(--tw-text-opacity))"
    }],
    onClick: () => i((d) => !d)
  }), s && b("div", {
    role: "listbox",
    id: p,
    tabIndex: -1,
    css: [{
      position: "absolute",
      bottom: "-8px",
      zIndex: "1",
      width: "100%",
      "--tw-translate-y": "100%",
      transform: "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",
      "> :not([hidden]) ~ :not([hidden])": {
        "--tw-space-y-reverse": "0",
        marginTop: "calc(4px * calc(1 - var(--tw-space-y-reverse)))",
        marginBottom: "calc(4px * var(--tw-space-y-reverse))"
      },
      borderRadius: "8px",
      "--tw-bg-opacity": "1",
      backgroundColor: "rgb(255 255 255 / var(--tw-bg-opacity))",
      padding: "8px"
    }, Be`
              box-shadow:
                0px 0px 1px 0px rgba(75, 81, 91, 0.2),
                0px 0px 0px 1px rgba(75, 81, 91, 0.03),
                0px 10px 14px 0px rgba(75, 81, 91, 0.06),
                0px 14px 32px 0px rgba(75, 81, 91, 0.12);
            `]
  }, r.map((d) => b("div", {
    key: d,
    id: `listboxId-${d}`,
    css: {
      cursor: "pointer",
      borderRadius: "8px",
      paddingLeft: "12px",
      paddingRight: "12px",
      paddingTop: "8px",
      paddingBottom: "8px",
      fontSize: "14px",
      lineHeight: "24px",
      ":hover": {
        "--tw-bg-opacity": "1",
        backgroundColor: "rgb(248 249 251 / var(--tw-bg-opacity))"
      },
      '&[aria-selected="true"]': {
        "--tw-bg-opacity": "1",
        backgroundColor: "rgb(243 248 255 / var(--tw-bg-opacity))"
      }
    },
    onClick: () => {
      t == null || t(d), i(!1);
    },
    "aria-selected": d === e,
    role: "option"
  }, d))));
};
function ke() {
  return ke = Object.assign ? Object.assign.bind() : function(r) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var n in t)
        ({}).hasOwnProperty.call(t, n) && (r[n] = t[n]);
    }
    return r;
  }, ke.apply(null, arguments);
}
const ar = j.forwardRef(({
  children: r,
  ...e
}, t) => b("button", ke({
  type: "button"
}, e, {
  css: {
    fontSize: "14px",
    lineHeight: "24px",
    "--tw-text-opacity": "1",
    color: "rgb(113 118 128 / var(--tw-text-opacity))",
    ":hover": {
      "--tw-text-opacity": "1",
      color: "rgb(159 163 171 / var(--tw-text-opacity))"
    }
  },
  ref: t
}), r));
function Te() {
  return Te = Object.assign ? Object.assign.bind() : function(r) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var n in t)
        ({}).hasOwnProperty.call(t, n) && (r[n] = t[n]);
    }
    return r;
  }, Te.apply(null, arguments);
}
const Je = {
  default: {
    "--tw-bg-opacity": "1",
    backgroundColor: "rgb(255 255 255 / var(--tw-bg-opacity))",
    outlineStyle: "solid",
    outlineWidth: "1px",
    outlineColor: "#DBDEE3",
    "& a": {
      "--tw-text-opacity": "1",
      color: "rgb(26 109 255 / var(--tw-text-opacity))"
    }
  },
  information: {
    "--tw-bg-opacity": "1",
    backgroundColor: "rgb(243 248 255 / var(--tw-bg-opacity))",
    "& a": {
      "--tw-text-opacity": "1",
      color: "rgb(26 109 255 / var(--tw-text-opacity))"
    }
  },
  warning: {
    "--tw-bg-opacity": "1",
    backgroundColor: "rgb(255 246 231 / var(--tw-bg-opacity))",
    "& a": {
      "--tw-text-opacity": "1",
      color: "rgb(214 140 12 / var(--tw-text-opacity))"
    }
  }
}, Ge = {
  default: b(Ee, {
    strokeWidth: 2,
    css: {
      "--tw-text-opacity": "1",
      color: "rgb(113 118 128 / var(--tw-text-opacity))"
    }
  }),
  information: b(Ee, {
    strokeWidth: 2,
    css: {
      "--tw-text-opacity": "1",
      color: "rgb(113 118 128 / var(--tw-text-opacity))"
    }
  }),
  warning: b(Ie, {
    strokeWidth: 2,
    css: {
      "--tw-text-opacity": "1",
      color: "rgb(214 140 12 / var(--tw-text-opacity))"
    }
  })
}, sr = ({
  children: r,
  variant: e = "default",
  ...t
}) => b("div", Te({}, t, {
  css: [{
    display: "flex",
    width: "100%",
    columnGap: "8px",
    borderRadius: "8px",
    paddingLeft: "16px",
    paddingRight: "16px",
    paddingTop: "12px",
    paddingBottom: "12px"
  }, Je[e]]
}), b("div", {
  css: {
    marginTop: "2px",
    flexShrink: "0"
  }
}, Ge[e] ?? null), b("div", {
  css: {
    fontSize: "14px",
    lineHeight: "20px"
  }
}, r));
var _;
(function(r) {
  r.assertEqual = (a) => a;
  function e(a) {
  }
  r.assertIs = e;
  function t(a) {
    throw new Error();
  }
  r.assertNever = t, r.arrayToEnum = (a) => {
    const s = {};
    for (const i of a)
      s[i] = i;
    return s;
  }, r.getValidEnumValues = (a) => {
    const s = r.objectKeys(a).filter((o) => typeof a[a[o]] != "number"), i = {};
    for (const o of s)
      i[o] = a[o];
    return r.objectValues(i);
  }, r.objectValues = (a) => r.objectKeys(a).map(function(s) {
    return a[s];
  }), r.objectKeys = typeof Object.keys == "function" ? (a) => Object.keys(a) : (a) => {
    const s = [];
    for (const i in a)
      Object.prototype.hasOwnProperty.call(a, i) && s.push(i);
    return s;
  }, r.find = (a, s) => {
    for (const i of a)
      if (s(i))
        return i;
  }, r.isInteger = typeof Number.isInteger == "function" ? (a) => Number.isInteger(a) : (a) => typeof a == "number" && isFinite(a) && Math.floor(a) === a;
  function n(a, s = " | ") {
    return a.map((i) => typeof i == "string" ? `'${i}'` : i).join(s);
  }
  r.joinValues = n, r.jsonStringifyReplacer = (a, s) => typeof s == "bigint" ? s.toString() : s;
})(_ || (_ = {}));
var Ce;
(function(r) {
  r.mergeShapes = (e, t) => ({
    ...e,
    ...t
    // second overwrites first
  });
})(Ce || (Ce = {}));
const l = _.arrayToEnum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set"
]), M = (r) => {
  switch (typeof r) {
    case "undefined":
      return l.undefined;
    case "string":
      return l.string;
    case "number":
      return isNaN(r) ? l.nan : l.number;
    case "boolean":
      return l.boolean;
    case "function":
      return l.function;
    case "bigint":
      return l.bigint;
    case "symbol":
      return l.symbol;
    case "object":
      return Array.isArray(r) ? l.array : r === null ? l.null : r.then && typeof r.then == "function" && r.catch && typeof r.catch == "function" ? l.promise : typeof Map < "u" && r instanceof Map ? l.map : typeof Set < "u" && r instanceof Set ? l.set : typeof Date < "u" && r instanceof Date ? l.date : l.object;
    default:
      return l.unknown;
  }
}, c = _.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite"
]), Fe = (r) => JSON.stringify(r, null, 2).replace(/"([^"]+)":/g, "$1:");
class Z extends Error {
  constructor(e) {
    super(), this.issues = [], this.addIssue = (n) => {
      this.issues = [...this.issues, n];
    }, this.addIssues = (n = []) => {
      this.issues = [...this.issues, ...n];
    };
    const t = new.target.prototype;
    Object.setPrototypeOf ? Object.setPrototypeOf(this, t) : this.__proto__ = t, this.name = "ZodError", this.issues = e;
  }
  get errors() {
    return this.issues;
  }
  format(e) {
    const t = e || function(s) {
      return s.message;
    }, n = { _errors: [] }, a = (s) => {
      for (const i of s.issues)
        if (i.code === "invalid_union")
          i.unionErrors.map(a);
        else if (i.code === "invalid_return_type")
          a(i.returnTypeError);
        else if (i.code === "invalid_arguments")
          a(i.argumentsError);
        else if (i.path.length === 0)
          n._errors.push(t(i));
        else {
          let o = n, p = 0;
          for (; p < i.path.length; ) {
            const d = i.path[p];
            p === i.path.length - 1 ? (o[d] = o[d] || { _errors: [] }, o[d]._errors.push(t(i))) : o[d] = o[d] || { _errors: [] }, o = o[d], p++;
          }
        }
    };
    return a(this), n;
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, _.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(e = (t) => t.message) {
    const t = {}, n = [];
    for (const a of this.issues)
      a.path.length > 0 ? (t[a.path[0]] = t[a.path[0]] || [], t[a.path[0]].push(e(a))) : n.push(e(a));
    return { formErrors: n, fieldErrors: t };
  }
  get formErrors() {
    return this.flatten();
  }
}
Z.create = (r) => new Z(r);
const X = (r, e) => {
  let t;
  switch (r.code) {
    case c.invalid_type:
      r.received === l.undefined ? t = "Required" : t = `Expected ${r.expected}, received ${r.received}`;
      break;
    case c.invalid_literal:
      t = `Invalid literal value, expected ${JSON.stringify(r.expected, _.jsonStringifyReplacer)}`;
      break;
    case c.unrecognized_keys:
      t = `Unrecognized key(s) in object: ${_.joinValues(r.keys, ", ")}`;
      break;
    case c.invalid_union:
      t = "Invalid input";
      break;
    case c.invalid_union_discriminator:
      t = `Invalid discriminator value. Expected ${_.joinValues(r.options)}`;
      break;
    case c.invalid_enum_value:
      t = `Invalid enum value. Expected ${_.joinValues(r.options)}, received '${r.received}'`;
      break;
    case c.invalid_arguments:
      t = "Invalid function arguments";
      break;
    case c.invalid_return_type:
      t = "Invalid function return type";
      break;
    case c.invalid_date:
      t = "Invalid date";
      break;
    case c.invalid_string:
      typeof r.validation == "object" ? "includes" in r.validation ? (t = `Invalid input: must include "${r.validation.includes}"`, typeof r.validation.position == "number" && (t = `${t} at one or more positions greater than or equal to ${r.validation.position}`)) : "startsWith" in r.validation ? t = `Invalid input: must start with "${r.validation.startsWith}"` : "endsWith" in r.validation ? t = `Invalid input: must end with "${r.validation.endsWith}"` : _.assertNever(r.validation) : r.validation !== "regex" ? t = `Invalid ${r.validation}` : t = "Invalid";
      break;
    case c.too_small:
      r.type === "array" ? t = `Array must contain ${r.exact ? "exactly" : r.inclusive ? "at least" : "more than"} ${r.minimum} element(s)` : r.type === "string" ? t = `String must contain ${r.exact ? "exactly" : r.inclusive ? "at least" : "over"} ${r.minimum} character(s)` : r.type === "number" ? t = `Number must be ${r.exact ? "exactly equal to " : r.inclusive ? "greater than or equal to " : "greater than "}${r.minimum}` : r.type === "date" ? t = `Date must be ${r.exact ? "exactly equal to " : r.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(r.minimum))}` : t = "Invalid input";
      break;
    case c.too_big:
      r.type === "array" ? t = `Array must contain ${r.exact ? "exactly" : r.inclusive ? "at most" : "less than"} ${r.maximum} element(s)` : r.type === "string" ? t = `String must contain ${r.exact ? "exactly" : r.inclusive ? "at most" : "under"} ${r.maximum} character(s)` : r.type === "number" ? t = `Number must be ${r.exact ? "exactly" : r.inclusive ? "less than or equal to" : "less than"} ${r.maximum}` : r.type === "bigint" ? t = `BigInt must be ${r.exact ? "exactly" : r.inclusive ? "less than or equal to" : "less than"} ${r.maximum}` : r.type === "date" ? t = `Date must be ${r.exact ? "exactly" : r.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(r.maximum))}` : t = "Invalid input";
      break;
    case c.custom:
      t = "Invalid input";
      break;
    case c.invalid_intersection_types:
      t = "Intersection results could not be merged";
      break;
    case c.not_multiple_of:
      t = `Number must be a multiple of ${r.multipleOf}`;
      break;
    case c.not_finite:
      t = "Number must be finite";
      break;
    default:
      t = e.defaultError, _.assertNever(r);
  }
  return { message: t };
};
let Ae = X;
function Qe(r) {
  Ae = r;
}
function ce() {
  return Ae;
}
const de = (r) => {
  const { data: e, path: t, errorMaps: n, issueData: a } = r, s = [...t, ...a.path || []], i = {
    ...a,
    path: s
  };
  let o = "";
  const p = n.filter((d) => !!d).slice().reverse();
  for (const d of p)
    o = d(i, { data: e, defaultError: o }).message;
  return {
    ...a,
    path: s,
    message: a.message || o
  };
}, Ke = [];
function u(r, e) {
  const t = de({
    issueData: e,
    data: r.data,
    path: r.path,
    errorMaps: [
      r.common.contextualErrorMap,
      r.schemaErrorMap,
      ce(),
      X
      // then global default map
    ].filter((n) => !!n)
  });
  r.common.issues.push(t);
}
class w {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    this.value === "valid" && (this.value = "dirty");
  }
  abort() {
    this.value !== "aborted" && (this.value = "aborted");
  }
  static mergeArray(e, t) {
    const n = [];
    for (const a of t) {
      if (a.status === "aborted")
        return m;
      a.status === "dirty" && e.dirty(), n.push(a.value);
    }
    return { status: e.value, value: n };
  }
  static async mergeObjectAsync(e, t) {
    const n = [];
    for (const a of t)
      n.push({
        key: await a.key,
        value: await a.value
      });
    return w.mergeObjectSync(e, n);
  }
  static mergeObjectSync(e, t) {
    const n = {};
    for (const a of t) {
      const { key: s, value: i } = a;
      if (s.status === "aborted" || i.status === "aborted")
        return m;
      s.status === "dirty" && e.dirty(), i.status === "dirty" && e.dirty(), s.value !== "__proto__" && (typeof i.value < "u" || a.alwaysSet) && (n[s.value] = i.value);
    }
    return { status: e.value, value: n };
  }
}
const m = Object.freeze({
  status: "aborted"
}), Me = (r) => ({ status: "dirty", value: r }), k = (r) => ({ status: "valid", value: r }), Ze = (r) => r.status === "aborted", Se = (r) => r.status === "dirty", J = (r) => r.status === "valid", le = (r) => typeof Promise < "u" && r instanceof Promise;
var h;
(function(r) {
  r.errToObj = (e) => typeof e == "string" ? { message: e } : e || {}, r.toString = (e) => typeof e == "string" ? e : e == null ? void 0 : e.message;
})(h || (h = {}));
class N {
  constructor(e, t, n, a) {
    this._cachedPath = [], this.parent = e, this.data = t, this._path = n, this._key = a;
  }
  get path() {
    return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const Ne = (r, e) => {
  if (J(e))
    return { success: !0, data: e.value };
  if (!r.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const t = new Z(r.common.issues);
      return this._error = t, this._error;
    }
  };
};
function y(r) {
  if (!r)
    return {};
  const { errorMap: e, invalid_type_error: t, required_error: n, description: a } = r;
  if (e && (t || n))
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return e ? { errorMap: e, description: a } : { errorMap: (i, o) => i.code !== "invalid_type" ? { message: o.defaultError } : typeof o.data > "u" ? { message: n ?? o.defaultError } : { message: t ?? o.defaultError }, description: a };
}
class g {
  constructor(e) {
    this.spa = this.safeParseAsync, this._def = e, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this);
  }
  get description() {
    return this._def.description;
  }
  _getType(e) {
    return M(e.data);
  }
  _getOrReturnCtx(e, t) {
    return t || {
      common: e.parent.common,
      data: e.data,
      parsedType: M(e.data),
      schemaErrorMap: this._def.errorMap,
      path: e.path,
      parent: e.parent
    };
  }
  _processInputParams(e) {
    return {
      status: new w(),
      ctx: {
        common: e.parent.common,
        data: e.data,
        parsedType: M(e.data),
        schemaErrorMap: this._def.errorMap,
        path: e.path,
        parent: e.parent
      }
    };
  }
  _parseSync(e) {
    const t = this._parse(e);
    if (le(t))
      throw new Error("Synchronous parse encountered promise.");
    return t;
  }
  _parseAsync(e) {
    const t = this._parse(e);
    return Promise.resolve(t);
  }
  parse(e, t) {
    const n = this.safeParse(e, t);
    if (n.success)
      return n.data;
    throw n.error;
  }
  safeParse(e, t) {
    var n;
    const a = {
      common: {
        issues: [],
        async: (n = t == null ? void 0 : t.async) !== null && n !== void 0 ? n : !1,
        contextualErrorMap: t == null ? void 0 : t.errorMap
      },
      path: (t == null ? void 0 : t.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: e,
      parsedType: M(e)
    }, s = this._parseSync({ data: e, path: a.path, parent: a });
    return Ne(a, s);
  }
  async parseAsync(e, t) {
    const n = await this.safeParseAsync(e, t);
    if (n.success)
      return n.data;
    throw n.error;
  }
  async safeParseAsync(e, t) {
    const n = {
      common: {
        issues: [],
        contextualErrorMap: t == null ? void 0 : t.errorMap,
        async: !0
      },
      path: (t == null ? void 0 : t.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: e,
      parsedType: M(e)
    }, a = this._parse({ data: e, path: n.path, parent: n }), s = await (le(a) ? a : Promise.resolve(a));
    return Ne(n, s);
  }
  refine(e, t) {
    const n = (a) => typeof t == "string" || typeof t > "u" ? { message: t } : typeof t == "function" ? t(a) : t;
    return this._refinement((a, s) => {
      const i = e(a), o = () => s.addIssue({
        code: c.custom,
        ...n(a)
      });
      return typeof Promise < "u" && i instanceof Promise ? i.then((p) => p ? !0 : (o(), !1)) : i ? !0 : (o(), !1);
    });
  }
  refinement(e, t) {
    return this._refinement((n, a) => e(n) ? !0 : (a.addIssue(typeof t == "function" ? t(n, a) : t), !1));
  }
  _refinement(e) {
    return new O({
      schema: this,
      typeName: f.ZodEffects,
      effect: { type: "refinement", refinement: e }
    });
  }
  superRefine(e) {
    return this._refinement(e);
  }
  optional() {
    return I.create(this, this._def);
  }
  nullable() {
    return B.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return S.create(this, this._def);
  }
  promise() {
    return H.create(this, this._def);
  }
  or(e) {
    return K.create([this, e], this._def);
  }
  and(e) {
    return ee.create(this, e, this._def);
  }
  transform(e) {
    return new O({
      ...y(this._def),
      schema: this,
      typeName: f.ZodEffects,
      effect: { type: "transform", transform: e }
    });
  }
  default(e) {
    const t = typeof e == "function" ? e : () => e;
    return new se({
      ...y(this._def),
      innerType: this,
      defaultValue: t,
      typeName: f.ZodDefault
    });
  }
  brand() {
    return new Pe({
      typeName: f.ZodBranded,
      type: this,
      ...y(this._def)
    });
  }
  catch(e) {
    const t = typeof e == "function" ? e : () => e;
    return new fe({
      ...y(this._def),
      innerType: this,
      catchValue: t,
      typeName: f.ZodCatch
    });
  }
  describe(e) {
    const t = this.constructor;
    return new t({
      ...this._def,
      description: e
    });
  }
  pipe(e) {
    return ie.create(this, e);
  }
  readonly() {
    return ye.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const et = /^c[^\s-]{8,}$/i, tt = /^[a-z][a-z0-9]*$/, rt = /^[0-9A-HJKMNP-TV-Z]{26}$/, nt = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, at = /^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, st = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let _e;
const it = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/, ot = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/, ct = (r) => r.precision ? r.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${r.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${r.precision}}Z$`) : r.precision === 0 ? r.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : r.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");
function dt(r, e) {
  return !!((e === "v4" || !e) && it.test(r) || (e === "v6" || !e) && ot.test(r));
}
class C extends g {
  _parse(e) {
    if (this._def.coerce && (e.data = String(e.data)), this._getType(e) !== l.string) {
      const s = this._getOrReturnCtx(e);
      return u(
        s,
        {
          code: c.invalid_type,
          expected: l.string,
          received: s.parsedType
        }
        //
      ), m;
    }
    const n = new w();
    let a;
    for (const s of this._def.checks)
      if (s.kind === "min")
        e.data.length < s.value && (a = this._getOrReturnCtx(e, a), u(a, {
          code: c.too_small,
          minimum: s.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: s.message
        }), n.dirty());
      else if (s.kind === "max")
        e.data.length > s.value && (a = this._getOrReturnCtx(e, a), u(a, {
          code: c.too_big,
          maximum: s.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: s.message
        }), n.dirty());
      else if (s.kind === "length") {
        const i = e.data.length > s.value, o = e.data.length < s.value;
        (i || o) && (a = this._getOrReturnCtx(e, a), i ? u(a, {
          code: c.too_big,
          maximum: s.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: s.message
        }) : o && u(a, {
          code: c.too_small,
          minimum: s.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: s.message
        }), n.dirty());
      } else if (s.kind === "email")
        at.test(e.data) || (a = this._getOrReturnCtx(e, a), u(a, {
          validation: "email",
          code: c.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "emoji")
        _e || (_e = new RegExp(st, "u")), _e.test(e.data) || (a = this._getOrReturnCtx(e, a), u(a, {
          validation: "emoji",
          code: c.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "uuid")
        nt.test(e.data) || (a = this._getOrReturnCtx(e, a), u(a, {
          validation: "uuid",
          code: c.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "cuid")
        et.test(e.data) || (a = this._getOrReturnCtx(e, a), u(a, {
          validation: "cuid",
          code: c.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "cuid2")
        tt.test(e.data) || (a = this._getOrReturnCtx(e, a), u(a, {
          validation: "cuid2",
          code: c.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "ulid")
        rt.test(e.data) || (a = this._getOrReturnCtx(e, a), u(a, {
          validation: "ulid",
          code: c.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "url")
        try {
          new URL(e.data);
        } catch {
          a = this._getOrReturnCtx(e, a), u(a, {
            validation: "url",
            code: c.invalid_string,
            message: s.message
          }), n.dirty();
        }
      else
        s.kind === "regex" ? (s.regex.lastIndex = 0, s.regex.test(e.data) || (a = this._getOrReturnCtx(e, a), u(a, {
          validation: "regex",
          code: c.invalid_string,
          message: s.message
        }), n.dirty())) : s.kind === "trim" ? e.data = e.data.trim() : s.kind === "includes" ? e.data.includes(s.value, s.position) || (a = this._getOrReturnCtx(e, a), u(a, {
          code: c.invalid_string,
          validation: { includes: s.value, position: s.position },
          message: s.message
        }), n.dirty()) : s.kind === "toLowerCase" ? e.data = e.data.toLowerCase() : s.kind === "toUpperCase" ? e.data = e.data.toUpperCase() : s.kind === "startsWith" ? e.data.startsWith(s.value) || (a = this._getOrReturnCtx(e, a), u(a, {
          code: c.invalid_string,
          validation: { startsWith: s.value },
          message: s.message
        }), n.dirty()) : s.kind === "endsWith" ? e.data.endsWith(s.value) || (a = this._getOrReturnCtx(e, a), u(a, {
          code: c.invalid_string,
          validation: { endsWith: s.value },
          message: s.message
        }), n.dirty()) : s.kind === "datetime" ? ct(s).test(e.data) || (a = this._getOrReturnCtx(e, a), u(a, {
          code: c.invalid_string,
          validation: "datetime",
          message: s.message
        }), n.dirty()) : s.kind === "ip" ? dt(e.data, s.version) || (a = this._getOrReturnCtx(e, a), u(a, {
          validation: "ip",
          code: c.invalid_string,
          message: s.message
        }), n.dirty()) : _.assertNever(s);
    return { status: n.value, value: e.data };
  }
  _regex(e, t, n) {
    return this.refinement((a) => e.test(a), {
      validation: t,
      code: c.invalid_string,
      ...h.errToObj(n)
    });
  }
  _addCheck(e) {
    return new C({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  email(e) {
    return this._addCheck({ kind: "email", ...h.errToObj(e) });
  }
  url(e) {
    return this._addCheck({ kind: "url", ...h.errToObj(e) });
  }
  emoji(e) {
    return this._addCheck({ kind: "emoji", ...h.errToObj(e) });
  }
  uuid(e) {
    return this._addCheck({ kind: "uuid", ...h.errToObj(e) });
  }
  cuid(e) {
    return this._addCheck({ kind: "cuid", ...h.errToObj(e) });
  }
  cuid2(e) {
    return this._addCheck({ kind: "cuid2", ...h.errToObj(e) });
  }
  ulid(e) {
    return this._addCheck({ kind: "ulid", ...h.errToObj(e) });
  }
  ip(e) {
    return this._addCheck({ kind: "ip", ...h.errToObj(e) });
  }
  datetime(e) {
    var t;
    return typeof e == "string" ? this._addCheck({
      kind: "datetime",
      precision: null,
      offset: !1,
      message: e
    }) : this._addCheck({
      kind: "datetime",
      precision: typeof (e == null ? void 0 : e.precision) > "u" ? null : e == null ? void 0 : e.precision,
      offset: (t = e == null ? void 0 : e.offset) !== null && t !== void 0 ? t : !1,
      ...h.errToObj(e == null ? void 0 : e.message)
    });
  }
  regex(e, t) {
    return this._addCheck({
      kind: "regex",
      regex: e,
      ...h.errToObj(t)
    });
  }
  includes(e, t) {
    return this._addCheck({
      kind: "includes",
      value: e,
      position: t == null ? void 0 : t.position,
      ...h.errToObj(t == null ? void 0 : t.message)
    });
  }
  startsWith(e, t) {
    return this._addCheck({
      kind: "startsWith",
      value: e,
      ...h.errToObj(t)
    });
  }
  endsWith(e, t) {
    return this._addCheck({
      kind: "endsWith",
      value: e,
      ...h.errToObj(t)
    });
  }
  min(e, t) {
    return this._addCheck({
      kind: "min",
      value: e,
      ...h.errToObj(t)
    });
  }
  max(e, t) {
    return this._addCheck({
      kind: "max",
      value: e,
      ...h.errToObj(t)
    });
  }
  length(e, t) {
    return this._addCheck({
      kind: "length",
      value: e,
      ...h.errToObj(t)
    });
  }
  /**
   * @deprecated Use z.string().min(1) instead.
   * @see {@link ZodString.min}
   */
  nonempty(e) {
    return this.min(1, h.errToObj(e));
  }
  trim() {
    return new C({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new C({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new C({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((e) => e.kind === "datetime");
  }
  get isEmail() {
    return !!this._def.checks.find((e) => e.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((e) => e.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((e) => e.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((e) => e.kind === "uuid");
  }
  get isCUID() {
    return !!this._def.checks.find((e) => e.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((e) => e.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((e) => e.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((e) => e.kind === "ip");
  }
  get minLength() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "min" && (e === null || t.value > e) && (e = t.value);
    return e;
  }
  get maxLength() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "max" && (e === null || t.value < e) && (e = t.value);
    return e;
  }
}
C.create = (r) => {
  var e;
  return new C({
    checks: [],
    typeName: f.ZodString,
    coerce: (e = r == null ? void 0 : r.coerce) !== null && e !== void 0 ? e : !1,
    ...y(r)
  });
};
function lt(r, e) {
  const t = (r.toString().split(".")[1] || "").length, n = (e.toString().split(".")[1] || "").length, a = t > n ? t : n, s = parseInt(r.toFixed(a).replace(".", "")), i = parseInt(e.toFixed(a).replace(".", ""));
  return s % i / Math.pow(10, a);
}
class L extends g {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(e) {
    if (this._def.coerce && (e.data = Number(e.data)), this._getType(e) !== l.number) {
      const s = this._getOrReturnCtx(e);
      return u(s, {
        code: c.invalid_type,
        expected: l.number,
        received: s.parsedType
      }), m;
    }
    let n;
    const a = new w();
    for (const s of this._def.checks)
      s.kind === "int" ? _.isInteger(e.data) || (n = this._getOrReturnCtx(e, n), u(n, {
        code: c.invalid_type,
        expected: "integer",
        received: "float",
        message: s.message
      }), a.dirty()) : s.kind === "min" ? (s.inclusive ? e.data < s.value : e.data <= s.value) && (n = this._getOrReturnCtx(e, n), u(n, {
        code: c.too_small,
        minimum: s.value,
        type: "number",
        inclusive: s.inclusive,
        exact: !1,
        message: s.message
      }), a.dirty()) : s.kind === "max" ? (s.inclusive ? e.data > s.value : e.data >= s.value) && (n = this._getOrReturnCtx(e, n), u(n, {
        code: c.too_big,
        maximum: s.value,
        type: "number",
        inclusive: s.inclusive,
        exact: !1,
        message: s.message
      }), a.dirty()) : s.kind === "multipleOf" ? lt(e.data, s.value) !== 0 && (n = this._getOrReturnCtx(e, n), u(n, {
        code: c.not_multiple_of,
        multipleOf: s.value,
        message: s.message
      }), a.dirty()) : s.kind === "finite" ? Number.isFinite(e.data) || (n = this._getOrReturnCtx(e, n), u(n, {
        code: c.not_finite,
        message: s.message
      }), a.dirty()) : _.assertNever(s);
    return { status: a.value, value: e.data };
  }
  gte(e, t) {
    return this.setLimit("min", e, !0, h.toString(t));
  }
  gt(e, t) {
    return this.setLimit("min", e, !1, h.toString(t));
  }
  lte(e, t) {
    return this.setLimit("max", e, !0, h.toString(t));
  }
  lt(e, t) {
    return this.setLimit("max", e, !1, h.toString(t));
  }
  setLimit(e, t, n, a) {
    return new L({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: e,
          value: t,
          inclusive: n,
          message: h.toString(a)
        }
      ]
    });
  }
  _addCheck(e) {
    return new L({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  int(e) {
    return this._addCheck({
      kind: "int",
      message: h.toString(e)
    });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: h.toString(e)
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: h.toString(e)
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: h.toString(e)
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: h.toString(e)
    });
  }
  multipleOf(e, t) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: h.toString(t)
    });
  }
  finite(e) {
    return this._addCheck({
      kind: "finite",
      message: h.toString(e)
    });
  }
  safe(e) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: h.toString(e)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: h.toString(e)
    });
  }
  get minValue() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "min" && (e === null || t.value > e) && (e = t.value);
    return e;
  }
  get maxValue() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "max" && (e === null || t.value < e) && (e = t.value);
    return e;
  }
  get isInt() {
    return !!this._def.checks.find((e) => e.kind === "int" || e.kind === "multipleOf" && _.isInteger(e.value));
  }
  get isFinite() {
    let e = null, t = null;
    for (const n of this._def.checks) {
      if (n.kind === "finite" || n.kind === "int" || n.kind === "multipleOf")
        return !0;
      n.kind === "min" ? (t === null || n.value > t) && (t = n.value) : n.kind === "max" && (e === null || n.value < e) && (e = n.value);
    }
    return Number.isFinite(t) && Number.isFinite(e);
  }
}
L.create = (r) => new L({
  checks: [],
  typeName: f.ZodNumber,
  coerce: (r == null ? void 0 : r.coerce) || !1,
  ...y(r)
});
class P extends g {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(e) {
    if (this._def.coerce && (e.data = BigInt(e.data)), this._getType(e) !== l.bigint) {
      const s = this._getOrReturnCtx(e);
      return u(s, {
        code: c.invalid_type,
        expected: l.bigint,
        received: s.parsedType
      }), m;
    }
    let n;
    const a = new w();
    for (const s of this._def.checks)
      s.kind === "min" ? (s.inclusive ? e.data < s.value : e.data <= s.value) && (n = this._getOrReturnCtx(e, n), u(n, {
        code: c.too_small,
        type: "bigint",
        minimum: s.value,
        inclusive: s.inclusive,
        message: s.message
      }), a.dirty()) : s.kind === "max" ? (s.inclusive ? e.data > s.value : e.data >= s.value) && (n = this._getOrReturnCtx(e, n), u(n, {
        code: c.too_big,
        type: "bigint",
        maximum: s.value,
        inclusive: s.inclusive,
        message: s.message
      }), a.dirty()) : s.kind === "multipleOf" ? e.data % s.value !== BigInt(0) && (n = this._getOrReturnCtx(e, n), u(n, {
        code: c.not_multiple_of,
        multipleOf: s.value,
        message: s.message
      }), a.dirty()) : _.assertNever(s);
    return { status: a.value, value: e.data };
  }
  gte(e, t) {
    return this.setLimit("min", e, !0, h.toString(t));
  }
  gt(e, t) {
    return this.setLimit("min", e, !1, h.toString(t));
  }
  lte(e, t) {
    return this.setLimit("max", e, !0, h.toString(t));
  }
  lt(e, t) {
    return this.setLimit("max", e, !1, h.toString(t));
  }
  setLimit(e, t, n, a) {
    return new P({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: e,
          value: t,
          inclusive: n,
          message: h.toString(a)
        }
      ]
    });
  }
  _addCheck(e) {
    return new P({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: h.toString(e)
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: h.toString(e)
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: h.toString(e)
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: h.toString(e)
    });
  }
  multipleOf(e, t) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: h.toString(t)
    });
  }
  get minValue() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "min" && (e === null || t.value > e) && (e = t.value);
    return e;
  }
  get maxValue() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "max" && (e === null || t.value < e) && (e = t.value);
    return e;
  }
}
P.create = (r) => {
  var e;
  return new P({
    checks: [],
    typeName: f.ZodBigInt,
    coerce: (e = r == null ? void 0 : r.coerce) !== null && e !== void 0 ? e : !1,
    ...y(r)
  });
};
class G extends g {
  _parse(e) {
    if (this._def.coerce && (e.data = !!e.data), this._getType(e) !== l.boolean) {
      const n = this._getOrReturnCtx(e);
      return u(n, {
        code: c.invalid_type,
        expected: l.boolean,
        received: n.parsedType
      }), m;
    }
    return k(e.data);
  }
}
G.create = (r) => new G({
  typeName: f.ZodBoolean,
  coerce: (r == null ? void 0 : r.coerce) || !1,
  ...y(r)
});
class D extends g {
  _parse(e) {
    if (this._def.coerce && (e.data = new Date(e.data)), this._getType(e) !== l.date) {
      const s = this._getOrReturnCtx(e);
      return u(s, {
        code: c.invalid_type,
        expected: l.date,
        received: s.parsedType
      }), m;
    }
    if (isNaN(e.data.getTime())) {
      const s = this._getOrReturnCtx(e);
      return u(s, {
        code: c.invalid_date
      }), m;
    }
    const n = new w();
    let a;
    for (const s of this._def.checks)
      s.kind === "min" ? e.data.getTime() < s.value && (a = this._getOrReturnCtx(e, a), u(a, {
        code: c.too_small,
        message: s.message,
        inclusive: !0,
        exact: !1,
        minimum: s.value,
        type: "date"
      }), n.dirty()) : s.kind === "max" ? e.data.getTime() > s.value && (a = this._getOrReturnCtx(e, a), u(a, {
        code: c.too_big,
        message: s.message,
        inclusive: !0,
        exact: !1,
        maximum: s.value,
        type: "date"
      }), n.dirty()) : _.assertNever(s);
    return {
      status: n.value,
      value: new Date(e.data.getTime())
    };
  }
  _addCheck(e) {
    return new D({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  min(e, t) {
    return this._addCheck({
      kind: "min",
      value: e.getTime(),
      message: h.toString(t)
    });
  }
  max(e, t) {
    return this._addCheck({
      kind: "max",
      value: e.getTime(),
      message: h.toString(t)
    });
  }
  get minDate() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "min" && (e === null || t.value > e) && (e = t.value);
    return e != null ? new Date(e) : null;
  }
  get maxDate() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "max" && (e === null || t.value < e) && (e = t.value);
    return e != null ? new Date(e) : null;
  }
}
D.create = (r) => new D({
  checks: [],
  coerce: (r == null ? void 0 : r.coerce) || !1,
  typeName: f.ZodDate,
  ...y(r)
});
class ue extends g {
  _parse(e) {
    if (this._getType(e) !== l.symbol) {
      const n = this._getOrReturnCtx(e);
      return u(n, {
        code: c.invalid_type,
        expected: l.symbol,
        received: n.parsedType
      }), m;
    }
    return k(e.data);
  }
}
ue.create = (r) => new ue({
  typeName: f.ZodSymbol,
  ...y(r)
});
class F extends g {
  _parse(e) {
    if (this._getType(e) !== l.undefined) {
      const n = this._getOrReturnCtx(e);
      return u(n, {
        code: c.invalid_type,
        expected: l.undefined,
        received: n.parsedType
      }), m;
    }
    return k(e.data);
  }
}
F.create = (r) => new F({
  typeName: f.ZodUndefined,
  ...y(r)
});
class Q extends g {
  _parse(e) {
    if (this._getType(e) !== l.null) {
      const n = this._getOrReturnCtx(e);
      return u(n, {
        code: c.invalid_type,
        expected: l.null,
        received: n.parsedType
      }), m;
    }
    return k(e.data);
  }
}
Q.create = (r) => new Q({
  typeName: f.ZodNull,
  ...y(r)
});
class Y extends g {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(e) {
    return k(e.data);
  }
}
Y.create = (r) => new Y({
  typeName: f.ZodAny,
  ...y(r)
});
class V extends g {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(e) {
    return k(e.data);
  }
}
V.create = (r) => new V({
  typeName: f.ZodUnknown,
  ...y(r)
});
class A extends g {
  _parse(e) {
    const t = this._getOrReturnCtx(e);
    return u(t, {
      code: c.invalid_type,
      expected: l.never,
      received: t.parsedType
    }), m;
  }
}
A.create = (r) => new A({
  typeName: f.ZodNever,
  ...y(r)
});
class pe extends g {
  _parse(e) {
    if (this._getType(e) !== l.undefined) {
      const n = this._getOrReturnCtx(e);
      return u(n, {
        code: c.invalid_type,
        expected: l.void,
        received: n.parsedType
      }), m;
    }
    return k(e.data);
  }
}
pe.create = (r) => new pe({
  typeName: f.ZodVoid,
  ...y(r)
});
class S extends g {
  _parse(e) {
    const { ctx: t, status: n } = this._processInputParams(e), a = this._def;
    if (t.parsedType !== l.array)
      return u(t, {
        code: c.invalid_type,
        expected: l.array,
        received: t.parsedType
      }), m;
    if (a.exactLength !== null) {
      const i = t.data.length > a.exactLength.value, o = t.data.length < a.exactLength.value;
      (i || o) && (u(t, {
        code: i ? c.too_big : c.too_small,
        minimum: o ? a.exactLength.value : void 0,
        maximum: i ? a.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: a.exactLength.message
      }), n.dirty());
    }
    if (a.minLength !== null && t.data.length < a.minLength.value && (u(t, {
      code: c.too_small,
      minimum: a.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: a.minLength.message
    }), n.dirty()), a.maxLength !== null && t.data.length > a.maxLength.value && (u(t, {
      code: c.too_big,
      maximum: a.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: a.maxLength.message
    }), n.dirty()), t.common.async)
      return Promise.all([...t.data].map((i, o) => a.type._parseAsync(new N(t, i, t.path, o)))).then((i) => w.mergeArray(n, i));
    const s = [...t.data].map((i, o) => a.type._parseSync(new N(t, i, t.path, o)));
    return w.mergeArray(n, s);
  }
  get element() {
    return this._def.type;
  }
  min(e, t) {
    return new S({
      ...this._def,
      minLength: { value: e, message: h.toString(t) }
    });
  }
  max(e, t) {
    return new S({
      ...this._def,
      maxLength: { value: e, message: h.toString(t) }
    });
  }
  length(e, t) {
    return new S({
      ...this._def,
      exactLength: { value: e, message: h.toString(t) }
    });
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
S.create = (r, e) => new S({
  type: r,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: f.ZodArray,
  ...y(e)
});
function U(r) {
  if (r instanceof x) {
    const e = {};
    for (const t in r.shape) {
      const n = r.shape[t];
      e[t] = I.create(U(n));
    }
    return new x({
      ...r._def,
      shape: () => e
    });
  } else
    return r instanceof S ? new S({
      ...r._def,
      type: U(r.element)
    }) : r instanceof I ? I.create(U(r.unwrap())) : r instanceof B ? B.create(U(r.unwrap())) : r instanceof R ? R.create(r.items.map((e) => U(e))) : r;
}
class x extends g {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const e = this._def.shape(), t = _.objectKeys(e);
    return this._cached = { shape: e, keys: t };
  }
  _parse(e) {
    if (this._getType(e) !== l.object) {
      const d = this._getOrReturnCtx(e);
      return u(d, {
        code: c.invalid_type,
        expected: l.object,
        received: d.parsedType
      }), m;
    }
    const { status: n, ctx: a } = this._processInputParams(e), { shape: s, keys: i } = this._getCached(), o = [];
    if (!(this._def.catchall instanceof A && this._def.unknownKeys === "strip"))
      for (const d in a.data)
        i.includes(d) || o.push(d);
    const p = [];
    for (const d of i) {
      const v = s[d], T = a.data[d];
      p.push({
        key: { status: "valid", value: d },
        value: v._parse(new N(a, T, a.path, d)),
        alwaysSet: d in a.data
      });
    }
    if (this._def.catchall instanceof A) {
      const d = this._def.unknownKeys;
      if (d === "passthrough")
        for (const v of o)
          p.push({
            key: { status: "valid", value: v },
            value: { status: "valid", value: a.data[v] }
          });
      else if (d === "strict")
        o.length > 0 && (u(a, {
          code: c.unrecognized_keys,
          keys: o
        }), n.dirty());
      else if (d !== "strip")
        throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const d = this._def.catchall;
      for (const v of o) {
        const T = a.data[v];
        p.push({
          key: { status: "valid", value: v },
          value: d._parse(
            new N(a, T, a.path, v)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: v in a.data
        });
      }
    }
    return a.common.async ? Promise.resolve().then(async () => {
      const d = [];
      for (const v of p) {
        const T = await v.key;
        d.push({
          key: T,
          value: await v.value,
          alwaysSet: v.alwaysSet
        });
      }
      return d;
    }).then((d) => w.mergeObjectSync(n, d)) : w.mergeObjectSync(n, p);
  }
  get shape() {
    return this._def.shape();
  }
  strict(e) {
    return h.errToObj, new x({
      ...this._def,
      unknownKeys: "strict",
      ...e !== void 0 ? {
        errorMap: (t, n) => {
          var a, s, i, o;
          const p = (i = (s = (a = this._def).errorMap) === null || s === void 0 ? void 0 : s.call(a, t, n).message) !== null && i !== void 0 ? i : n.defaultError;
          return t.code === "unrecognized_keys" ? {
            message: (o = h.errToObj(e).message) !== null && o !== void 0 ? o : p
          } : {
            message: p
          };
        }
      } : {}
    });
  }
  strip() {
    return new x({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new x({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  // const AugmentFactory =
  //   <Def extends ZodObjectDef>(def: Def) =>
  //   <Augmentation extends ZodRawShape>(
  //     augmentation: Augmentation
  //   ): ZodObject<
  //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
  //     Def["unknownKeys"],
  //     Def["catchall"]
  //   > => {
  //     return new ZodObject({
  //       ...def,
  //       shape: () => ({
  //         ...def.shape(),
  //         ...augmentation,
  //       }),
  //     }) as any;
  //   };
  extend(e) {
    return new x({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...e
      })
    });
  }
  /**
   * Prior to zod@1.0.12 there was a bug in the
   * inferred type of merged objects. Please
   * upgrade if you are experiencing issues.
   */
  merge(e) {
    return new x({
      unknownKeys: e._def.unknownKeys,
      catchall: e._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...e._def.shape()
      }),
      typeName: f.ZodObject
    });
  }
  // merge<
  //   Incoming extends AnyZodObject,
  //   Augmentation extends Incoming["shape"],
  //   NewOutput extends {
  //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
  //       ? Augmentation[k]["_output"]
  //       : k extends keyof Output
  //       ? Output[k]
  //       : never;
  //   },
  //   NewInput extends {
  //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
  //       ? Augmentation[k]["_input"]
  //       : k extends keyof Input
  //       ? Input[k]
  //       : never;
  //   }
  // >(
  //   merging: Incoming
  // ): ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"],
  //   NewOutput,
  //   NewInput
  // > {
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  setKey(e, t) {
    return this.augment({ [e]: t });
  }
  // merge<Incoming extends AnyZodObject>(
  //   merging: Incoming
  // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
  // ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"]
  // > {
  //   // const mergedShape = objectUtil.mergeShapes(
  //   //   this._def.shape(),
  //   //   merging._def.shape()
  //   // );
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  catchall(e) {
    return new x({
      ...this._def,
      catchall: e
    });
  }
  pick(e) {
    const t = {};
    return _.objectKeys(e).forEach((n) => {
      e[n] && this.shape[n] && (t[n] = this.shape[n]);
    }), new x({
      ...this._def,
      shape: () => t
    });
  }
  omit(e) {
    const t = {};
    return _.objectKeys(this.shape).forEach((n) => {
      e[n] || (t[n] = this.shape[n]);
    }), new x({
      ...this._def,
      shape: () => t
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return U(this);
  }
  partial(e) {
    const t = {};
    return _.objectKeys(this.shape).forEach((n) => {
      const a = this.shape[n];
      e && !e[n] ? t[n] = a : t[n] = a.optional();
    }), new x({
      ...this._def,
      shape: () => t
    });
  }
  required(e) {
    const t = {};
    return _.objectKeys(this.shape).forEach((n) => {
      if (e && !e[n])
        t[n] = this.shape[n];
      else {
        let s = this.shape[n];
        for (; s instanceof I; )
          s = s._def.innerType;
        t[n] = s;
      }
    }), new x({
      ...this._def,
      shape: () => t
    });
  }
  keyof() {
    return Le(_.objectKeys(this.shape));
  }
}
x.create = (r, e) => new x({
  shape: () => r,
  unknownKeys: "strip",
  catchall: A.create(),
  typeName: f.ZodObject,
  ...y(e)
});
x.strictCreate = (r, e) => new x({
  shape: () => r,
  unknownKeys: "strict",
  catchall: A.create(),
  typeName: f.ZodObject,
  ...y(e)
});
x.lazycreate = (r, e) => new x({
  shape: r,
  unknownKeys: "strip",
  catchall: A.create(),
  typeName: f.ZodObject,
  ...y(e)
});
class K extends g {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e), n = this._def.options;
    function a(s) {
      for (const o of s)
        if (o.result.status === "valid")
          return o.result;
      for (const o of s)
        if (o.result.status === "dirty")
          return t.common.issues.push(...o.ctx.common.issues), o.result;
      const i = s.map((o) => new Z(o.ctx.common.issues));
      return u(t, {
        code: c.invalid_union,
        unionErrors: i
      }), m;
    }
    if (t.common.async)
      return Promise.all(n.map(async (s) => {
        const i = {
          ...t,
          common: {
            ...t.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await s._parseAsync({
            data: t.data,
            path: t.path,
            parent: i
          }),
          ctx: i
        };
      })).then(a);
    {
      let s;
      const i = [];
      for (const p of n) {
        const d = {
          ...t,
          common: {
            ...t.common,
            issues: []
          },
          parent: null
        }, v = p._parseSync({
          data: t.data,
          path: t.path,
          parent: d
        });
        if (v.status === "valid")
          return v;
        v.status === "dirty" && !s && (s = { result: v, ctx: d }), d.common.issues.length && i.push(d.common.issues);
      }
      if (s)
        return t.common.issues.push(...s.ctx.common.issues), s.result;
      const o = i.map((p) => new Z(p));
      return u(t, {
        code: c.invalid_union,
        unionErrors: o
      }), m;
    }
  }
  get options() {
    return this._def.options;
  }
}
K.create = (r, e) => new K({
  options: r,
  typeName: f.ZodUnion,
  ...y(e)
});
const oe = (r) => r instanceof re ? oe(r.schema) : r instanceof O ? oe(r.innerType()) : r instanceof ne ? [r.value] : r instanceof $ ? r.options : r instanceof ae ? Object.keys(r.enum) : r instanceof se ? oe(r._def.innerType) : r instanceof F ? [void 0] : r instanceof Q ? [null] : null;
class ge extends g {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    if (t.parsedType !== l.object)
      return u(t, {
        code: c.invalid_type,
        expected: l.object,
        received: t.parsedType
      }), m;
    const n = this.discriminator, a = t.data[n], s = this.optionsMap.get(a);
    return s ? t.common.async ? s._parseAsync({
      data: t.data,
      path: t.path,
      parent: t
    }) : s._parseSync({
      data: t.data,
      path: t.path,
      parent: t
    }) : (u(t, {
      code: c.invalid_union_discriminator,
      options: Array.from(this.optionsMap.keys()),
      path: [n]
    }), m);
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  /**
   * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
   * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
   * have a different value for each object in the union.
   * @param discriminator the name of the discriminator property
   * @param types an array of object schemas
   * @param params
   */
  static create(e, t, n) {
    const a = /* @__PURE__ */ new Map();
    for (const s of t) {
      const i = oe(s.shape[e]);
      if (!i)
        throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);
      for (const o of i) {
        if (a.has(o))
          throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(o)}`);
        a.set(o, s);
      }
    }
    return new ge({
      typeName: f.ZodDiscriminatedUnion,
      discriminator: e,
      options: t,
      optionsMap: a,
      ...y(n)
    });
  }
}
function Oe(r, e) {
  const t = M(r), n = M(e);
  if (r === e)
    return { valid: !0, data: r };
  if (t === l.object && n === l.object) {
    const a = _.objectKeys(e), s = _.objectKeys(r).filter((o) => a.indexOf(o) !== -1), i = { ...r, ...e };
    for (const o of s) {
      const p = Oe(r[o], e[o]);
      if (!p.valid)
        return { valid: !1 };
      i[o] = p.data;
    }
    return { valid: !0, data: i };
  } else if (t === l.array && n === l.array) {
    if (r.length !== e.length)
      return { valid: !1 };
    const a = [];
    for (let s = 0; s < r.length; s++) {
      const i = r[s], o = e[s], p = Oe(i, o);
      if (!p.valid)
        return { valid: !1 };
      a.push(p.data);
    }
    return { valid: !0, data: a };
  } else
    return t === l.date && n === l.date && +r == +e ? { valid: !0, data: r } : { valid: !1 };
}
class ee extends g {
  _parse(e) {
    const { status: t, ctx: n } = this._processInputParams(e), a = (s, i) => {
      if (Ze(s) || Ze(i))
        return m;
      const o = Oe(s.value, i.value);
      return o.valid ? ((Se(s) || Se(i)) && t.dirty(), { status: t.value, value: o.data }) : (u(n, {
        code: c.invalid_intersection_types
      }), m);
    };
    return n.common.async ? Promise.all([
      this._def.left._parseAsync({
        data: n.data,
        path: n.path,
        parent: n
      }),
      this._def.right._parseAsync({
        data: n.data,
        path: n.path,
        parent: n
      })
    ]).then(([s, i]) => a(s, i)) : a(this._def.left._parseSync({
      data: n.data,
      path: n.path,
      parent: n
    }), this._def.right._parseSync({
      data: n.data,
      path: n.path,
      parent: n
    }));
  }
}
ee.create = (r, e, t) => new ee({
  left: r,
  right: e,
  typeName: f.ZodIntersection,
  ...y(t)
});
class R extends g {
  _parse(e) {
    const { status: t, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== l.array)
      return u(n, {
        code: c.invalid_type,
        expected: l.array,
        received: n.parsedType
      }), m;
    if (n.data.length < this._def.items.length)
      return u(n, {
        code: c.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), m;
    !this._def.rest && n.data.length > this._def.items.length && (u(n, {
      code: c.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), t.dirty());
    const s = [...n.data].map((i, o) => {
      const p = this._def.items[o] || this._def.rest;
      return p ? p._parse(new N(n, i, n.path, o)) : null;
    }).filter((i) => !!i);
    return n.common.async ? Promise.all(s).then((i) => w.mergeArray(t, i)) : w.mergeArray(t, s);
  }
  get items() {
    return this._def.items;
  }
  rest(e) {
    return new R({
      ...this._def,
      rest: e
    });
  }
}
R.create = (r, e) => {
  if (!Array.isArray(r))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new R({
    items: r,
    typeName: f.ZodTuple,
    rest: null,
    ...y(e)
  });
};
class te extends g {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e) {
    const { status: t, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== l.object)
      return u(n, {
        code: c.invalid_type,
        expected: l.object,
        received: n.parsedType
      }), m;
    const a = [], s = this._def.keyType, i = this._def.valueType;
    for (const o in n.data)
      a.push({
        key: s._parse(new N(n, o, n.path, o)),
        value: i._parse(new N(n, n.data[o], n.path, o))
      });
    return n.common.async ? w.mergeObjectAsync(t, a) : w.mergeObjectSync(t, a);
  }
  get element() {
    return this._def.valueType;
  }
  static create(e, t, n) {
    return t instanceof g ? new te({
      keyType: e,
      valueType: t,
      typeName: f.ZodRecord,
      ...y(n)
    }) : new te({
      keyType: C.create(),
      valueType: e,
      typeName: f.ZodRecord,
      ...y(t)
    });
  }
}
class he extends g {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e) {
    const { status: t, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== l.map)
      return u(n, {
        code: c.invalid_type,
        expected: l.map,
        received: n.parsedType
      }), m;
    const a = this._def.keyType, s = this._def.valueType, i = [...n.data.entries()].map(([o, p], d) => ({
      key: a._parse(new N(n, o, n.path, [d, "key"])),
      value: s._parse(new N(n, p, n.path, [d, "value"]))
    }));
    if (n.common.async) {
      const o = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const p of i) {
          const d = await p.key, v = await p.value;
          if (d.status === "aborted" || v.status === "aborted")
            return m;
          (d.status === "dirty" || v.status === "dirty") && t.dirty(), o.set(d.value, v.value);
        }
        return { status: t.value, value: o };
      });
    } else {
      const o = /* @__PURE__ */ new Map();
      for (const p of i) {
        const d = p.key, v = p.value;
        if (d.status === "aborted" || v.status === "aborted")
          return m;
        (d.status === "dirty" || v.status === "dirty") && t.dirty(), o.set(d.value, v.value);
      }
      return { status: t.value, value: o };
    }
  }
}
he.create = (r, e, t) => new he({
  valueType: e,
  keyType: r,
  typeName: f.ZodMap,
  ...y(t)
});
class z extends g {
  _parse(e) {
    const { status: t, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== l.set)
      return u(n, {
        code: c.invalid_type,
        expected: l.set,
        received: n.parsedType
      }), m;
    const a = this._def;
    a.minSize !== null && n.data.size < a.minSize.value && (u(n, {
      code: c.too_small,
      minimum: a.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: a.minSize.message
    }), t.dirty()), a.maxSize !== null && n.data.size > a.maxSize.value && (u(n, {
      code: c.too_big,
      maximum: a.maxSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: a.maxSize.message
    }), t.dirty());
    const s = this._def.valueType;
    function i(p) {
      const d = /* @__PURE__ */ new Set();
      for (const v of p) {
        if (v.status === "aborted")
          return m;
        v.status === "dirty" && t.dirty(), d.add(v.value);
      }
      return { status: t.value, value: d };
    }
    const o = [...n.data.values()].map((p, d) => s._parse(new N(n, p, n.path, d)));
    return n.common.async ? Promise.all(o).then((p) => i(p)) : i(o);
  }
  min(e, t) {
    return new z({
      ...this._def,
      minSize: { value: e, message: h.toString(t) }
    });
  }
  max(e, t) {
    return new z({
      ...this._def,
      maxSize: { value: e, message: h.toString(t) }
    });
  }
  size(e, t) {
    return this.min(e, t).max(e, t);
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
z.create = (r, e) => new z({
  valueType: r,
  minSize: null,
  maxSize: null,
  typeName: f.ZodSet,
  ...y(e)
});
class W extends g {
  constructor() {
    super(...arguments), this.validate = this.implement;
  }
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    if (t.parsedType !== l.function)
      return u(t, {
        code: c.invalid_type,
        expected: l.function,
        received: t.parsedType
      }), m;
    function n(o, p) {
      return de({
        data: o,
        path: t.path,
        errorMaps: [
          t.common.contextualErrorMap,
          t.schemaErrorMap,
          ce(),
          X
        ].filter((d) => !!d),
        issueData: {
          code: c.invalid_arguments,
          argumentsError: p
        }
      });
    }
    function a(o, p) {
      return de({
        data: o,
        path: t.path,
        errorMaps: [
          t.common.contextualErrorMap,
          t.schemaErrorMap,
          ce(),
          X
        ].filter((d) => !!d),
        issueData: {
          code: c.invalid_return_type,
          returnTypeError: p
        }
      });
    }
    const s = { errorMap: t.common.contextualErrorMap }, i = t.data;
    if (this._def.returns instanceof H) {
      const o = this;
      return k(async function(...p) {
        const d = new Z([]), v = await o._def.args.parseAsync(p, s).catch((ve) => {
          throw d.addIssue(n(p, ve)), d;
        }), T = await Reflect.apply(i, this, v);
        return await o._def.returns._def.type.parseAsync(T, s).catch((ve) => {
          throw d.addIssue(a(T, ve)), d;
        });
      });
    } else {
      const o = this;
      return k(function(...p) {
        const d = o._def.args.safeParse(p, s);
        if (!d.success)
          throw new Z([n(p, d.error)]);
        const v = Reflect.apply(i, this, d.data), T = o._def.returns.safeParse(v, s);
        if (!T.success)
          throw new Z([a(v, T.error)]);
        return T.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...e) {
    return new W({
      ...this._def,
      args: R.create(e).rest(V.create())
    });
  }
  returns(e) {
    return new W({
      ...this._def,
      returns: e
    });
  }
  implement(e) {
    return this.parse(e);
  }
  strictImplement(e) {
    return this.parse(e);
  }
  static create(e, t, n) {
    return new W({
      args: e || R.create([]).rest(V.create()),
      returns: t || V.create(),
      typeName: f.ZodFunction,
      ...y(n)
    });
  }
}
class re extends g {
  get schema() {
    return this._def.getter();
  }
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    return this._def.getter()._parse({ data: t.data, path: t.path, parent: t });
  }
}
re.create = (r, e) => new re({
  getter: r,
  typeName: f.ZodLazy,
  ...y(e)
});
class ne extends g {
  _parse(e) {
    if (e.data !== this._def.value) {
      const t = this._getOrReturnCtx(e);
      return u(t, {
        received: t.data,
        code: c.invalid_literal,
        expected: this._def.value
      }), m;
    }
    return { status: "valid", value: e.data };
  }
  get value() {
    return this._def.value;
  }
}
ne.create = (r, e) => new ne({
  value: r,
  typeName: f.ZodLiteral,
  ...y(e)
});
function Le(r, e) {
  return new $({
    values: r,
    typeName: f.ZodEnum,
    ...y(e)
  });
}
class $ extends g {
  _parse(e) {
    if (typeof e.data != "string") {
      const t = this._getOrReturnCtx(e), n = this._def.values;
      return u(t, {
        expected: _.joinValues(n),
        received: t.parsedType,
        code: c.invalid_type
      }), m;
    }
    if (this._def.values.indexOf(e.data) === -1) {
      const t = this._getOrReturnCtx(e), n = this._def.values;
      return u(t, {
        received: t.data,
        code: c.invalid_enum_value,
        options: n
      }), m;
    }
    return k(e.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const e = {};
    for (const t of this._def.values)
      e[t] = t;
    return e;
  }
  get Values() {
    const e = {};
    for (const t of this._def.values)
      e[t] = t;
    return e;
  }
  get Enum() {
    const e = {};
    for (const t of this._def.values)
      e[t] = t;
    return e;
  }
  extract(e) {
    return $.create(e);
  }
  exclude(e) {
    return $.create(this.options.filter((t) => !e.includes(t)));
  }
}
$.create = Le;
class ae extends g {
  _parse(e) {
    const t = _.getValidEnumValues(this._def.values), n = this._getOrReturnCtx(e);
    if (n.parsedType !== l.string && n.parsedType !== l.number) {
      const a = _.objectValues(t);
      return u(n, {
        expected: _.joinValues(a),
        received: n.parsedType,
        code: c.invalid_type
      }), m;
    }
    if (t.indexOf(e.data) === -1) {
      const a = _.objectValues(t);
      return u(n, {
        received: n.data,
        code: c.invalid_enum_value,
        options: a
      }), m;
    }
    return k(e.data);
  }
  get enum() {
    return this._def.values;
  }
}
ae.create = (r, e) => new ae({
  values: r,
  typeName: f.ZodNativeEnum,
  ...y(e)
});
class H extends g {
  unwrap() {
    return this._def.type;
  }
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    if (t.parsedType !== l.promise && t.common.async === !1)
      return u(t, {
        code: c.invalid_type,
        expected: l.promise,
        received: t.parsedType
      }), m;
    const n = t.parsedType === l.promise ? t.data : Promise.resolve(t.data);
    return k(n.then((a) => this._def.type.parseAsync(a, {
      path: t.path,
      errorMap: t.common.contextualErrorMap
    })));
  }
}
H.create = (r, e) => new H({
  type: r,
  typeName: f.ZodPromise,
  ...y(e)
});
class O extends g {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === f.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(e) {
    const { status: t, ctx: n } = this._processInputParams(e), a = this._def.effect || null, s = {
      addIssue: (i) => {
        u(n, i), i.fatal ? t.abort() : t.dirty();
      },
      get path() {
        return n.path;
      }
    };
    if (s.addIssue = s.addIssue.bind(s), a.type === "preprocess") {
      const i = a.transform(n.data, s);
      return n.common.issues.length ? {
        status: "dirty",
        value: n.data
      } : n.common.async ? Promise.resolve(i).then((o) => this._def.schema._parseAsync({
        data: o,
        path: n.path,
        parent: n
      })) : this._def.schema._parseSync({
        data: i,
        path: n.path,
        parent: n
      });
    }
    if (a.type === "refinement") {
      const i = (o) => {
        const p = a.refinement(o, s);
        if (n.common.async)
          return Promise.resolve(p);
        if (p instanceof Promise)
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return o;
      };
      if (n.common.async === !1) {
        const o = this._def.schema._parseSync({
          data: n.data,
          path: n.path,
          parent: n
        });
        return o.status === "aborted" ? m : (o.status === "dirty" && t.dirty(), i(o.value), { status: t.value, value: o.value });
      } else
        return this._def.schema._parseAsync({ data: n.data, path: n.path, parent: n }).then((o) => o.status === "aborted" ? m : (o.status === "dirty" && t.dirty(), i(o.value).then(() => ({ status: t.value, value: o.value }))));
    }
    if (a.type === "transform")
      if (n.common.async === !1) {
        const i = this._def.schema._parseSync({
          data: n.data,
          path: n.path,
          parent: n
        });
        if (!J(i))
          return i;
        const o = a.transform(i.value, s);
        if (o instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: t.value, value: o };
      } else
        return this._def.schema._parseAsync({ data: n.data, path: n.path, parent: n }).then((i) => J(i) ? Promise.resolve(a.transform(i.value, s)).then((o) => ({ status: t.value, value: o })) : i);
    _.assertNever(a);
  }
}
O.create = (r, e, t) => new O({
  schema: r,
  typeName: f.ZodEffects,
  effect: e,
  ...y(t)
});
O.createWithPreprocess = (r, e, t) => new O({
  schema: e,
  effect: { type: "preprocess", transform: r },
  typeName: f.ZodEffects,
  ...y(t)
});
class I extends g {
  _parse(e) {
    return this._getType(e) === l.undefined ? k(void 0) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
I.create = (r, e) => new I({
  innerType: r,
  typeName: f.ZodOptional,
  ...y(e)
});
class B extends g {
  _parse(e) {
    return this._getType(e) === l.null ? k(null) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
B.create = (r, e) => new B({
  innerType: r,
  typeName: f.ZodNullable,
  ...y(e)
});
class se extends g {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    let n = t.data;
    return t.parsedType === l.undefined && (n = this._def.defaultValue()), this._def.innerType._parse({
      data: n,
      path: t.path,
      parent: t
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
se.create = (r, e) => new se({
  innerType: r,
  typeName: f.ZodDefault,
  defaultValue: typeof e.default == "function" ? e.default : () => e.default,
  ...y(e)
});
class fe extends g {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e), n = {
      ...t,
      common: {
        ...t.common,
        issues: []
      }
    }, a = this._def.innerType._parse({
      data: n.data,
      path: n.path,
      parent: {
        ...n
      }
    });
    return le(a) ? a.then((s) => ({
      status: "valid",
      value: s.status === "valid" ? s.value : this._def.catchValue({
        get error() {
          return new Z(n.common.issues);
        },
        input: n.data
      })
    })) : {
      status: "valid",
      value: a.status === "valid" ? a.value : this._def.catchValue({
        get error() {
          return new Z(n.common.issues);
        },
        input: n.data
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
fe.create = (r, e) => new fe({
  innerType: r,
  typeName: f.ZodCatch,
  catchValue: typeof e.catch == "function" ? e.catch : () => e.catch,
  ...y(e)
});
class me extends g {
  _parse(e) {
    if (this._getType(e) !== l.nan) {
      const n = this._getOrReturnCtx(e);
      return u(n, {
        code: c.invalid_type,
        expected: l.nan,
        received: n.parsedType
      }), m;
    }
    return { status: "valid", value: e.data };
  }
}
me.create = (r) => new me({
  typeName: f.ZodNaN,
  ...y(r)
});
const ut = Symbol("zod_brand");
class Pe extends g {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e), n = t.data;
    return this._def.type._parse({
      data: n,
      path: t.path,
      parent: t
    });
  }
  unwrap() {
    return this._def.type;
  }
}
class ie extends g {
  _parse(e) {
    const { status: t, ctx: n } = this._processInputParams(e);
    if (n.common.async)
      return (async () => {
        const s = await this._def.in._parseAsync({
          data: n.data,
          path: n.path,
          parent: n
        });
        return s.status === "aborted" ? m : s.status === "dirty" ? (t.dirty(), Me(s.value)) : this._def.out._parseAsync({
          data: s.value,
          path: n.path,
          parent: n
        });
      })();
    {
      const a = this._def.in._parseSync({
        data: n.data,
        path: n.path,
        parent: n
      });
      return a.status === "aborted" ? m : a.status === "dirty" ? (t.dirty(), {
        status: "dirty",
        value: a.value
      }) : this._def.out._parseSync({
        data: a.value,
        path: n.path,
        parent: n
      });
    }
  }
  static create(e, t) {
    return new ie({
      in: e,
      out: t,
      typeName: f.ZodPipeline
    });
  }
}
class ye extends g {
  _parse(e) {
    const t = this._def.innerType._parse(e);
    return J(t) && (t.value = Object.freeze(t.value)), t;
  }
}
ye.create = (r, e) => new ye({
  innerType: r,
  typeName: f.ZodReadonly,
  ...y(e)
});
const $e = (r, e = {}, t) => r ? Y.create().superRefine((n, a) => {
  var s, i;
  if (!r(n)) {
    const o = typeof e == "function" ? e(n) : typeof e == "string" ? { message: e } : e, p = (i = (s = o.fatal) !== null && s !== void 0 ? s : t) !== null && i !== void 0 ? i : !0, d = typeof o == "string" ? { message: o } : o;
    a.addIssue({ code: "custom", ...d, fatal: p });
  }
}) : Y.create(), pt = {
  object: x.lazycreate
};
var f;
(function(r) {
  r.ZodString = "ZodString", r.ZodNumber = "ZodNumber", r.ZodNaN = "ZodNaN", r.ZodBigInt = "ZodBigInt", r.ZodBoolean = "ZodBoolean", r.ZodDate = "ZodDate", r.ZodSymbol = "ZodSymbol", r.ZodUndefined = "ZodUndefined", r.ZodNull = "ZodNull", r.ZodAny = "ZodAny", r.ZodUnknown = "ZodUnknown", r.ZodNever = "ZodNever", r.ZodVoid = "ZodVoid", r.ZodArray = "ZodArray", r.ZodObject = "ZodObject", r.ZodUnion = "ZodUnion", r.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", r.ZodIntersection = "ZodIntersection", r.ZodTuple = "ZodTuple", r.ZodRecord = "ZodRecord", r.ZodMap = "ZodMap", r.ZodSet = "ZodSet", r.ZodFunction = "ZodFunction", r.ZodLazy = "ZodLazy", r.ZodLiteral = "ZodLiteral", r.ZodEnum = "ZodEnum", r.ZodEffects = "ZodEffects", r.ZodNativeEnum = "ZodNativeEnum", r.ZodOptional = "ZodOptional", r.ZodNullable = "ZodNullable", r.ZodDefault = "ZodDefault", r.ZodCatch = "ZodCatch", r.ZodPromise = "ZodPromise", r.ZodBranded = "ZodBranded", r.ZodPipeline = "ZodPipeline", r.ZodReadonly = "ZodReadonly";
})(f || (f = {}));
const ht = (r, e = {
  message: `Input not instance of ${r.name}`
}) => $e((t) => t instanceof r, e), Ve = C.create, De = L.create, ft = me.create, mt = P.create, ze = G.create, yt = D.create, gt = ue.create, vt = F.create, _t = Q.create, xt = Y.create, bt = V.create, wt = A.create, kt = pe.create, Tt = S.create, Ct = x.create, Zt = x.strictCreate, St = K.create, Ot = ge.create, Et = ee.create, Nt = R.create, Rt = te.create, jt = he.create, It = z.create, At = W.create, Mt = re.create, Lt = ne.create, Pt = $.create, $t = ae.create, Vt = H.create, Re = O.create, Dt = I.create, zt = B.create, Bt = O.createWithPreprocess, Ut = ie.create, Wt = () => Ve().optional(), qt = () => De().optional(), Yt = () => ze().optional(), Ht = {
  string: (r) => C.create({ ...r, coerce: !0 }),
  number: (r) => L.create({ ...r, coerce: !0 }),
  boolean: (r) => G.create({
    ...r,
    coerce: !0
  }),
  bigint: (r) => P.create({ ...r, coerce: !0 }),
  date: (r) => D.create({ ...r, coerce: !0 })
}, Xt = m;
var E = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  defaultErrorMap: X,
  setErrorMap: Qe,
  getErrorMap: ce,
  makeIssue: de,
  EMPTY_PATH: Ke,
  addIssueToContext: u,
  ParseStatus: w,
  INVALID: m,
  DIRTY: Me,
  OK: k,
  isAborted: Ze,
  isDirty: Se,
  isValid: J,
  isAsync: le,
  get util() {
    return _;
  },
  get objectUtil() {
    return Ce;
  },
  ZodParsedType: l,
  getParsedType: M,
  ZodType: g,
  ZodString: C,
  ZodNumber: L,
  ZodBigInt: P,
  ZodBoolean: G,
  ZodDate: D,
  ZodSymbol: ue,
  ZodUndefined: F,
  ZodNull: Q,
  ZodAny: Y,
  ZodUnknown: V,
  ZodNever: A,
  ZodVoid: pe,
  ZodArray: S,
  ZodObject: x,
  ZodUnion: K,
  ZodDiscriminatedUnion: ge,
  ZodIntersection: ee,
  ZodTuple: R,
  ZodRecord: te,
  ZodMap: he,
  ZodSet: z,
  ZodFunction: W,
  ZodLazy: re,
  ZodLiteral: ne,
  ZodEnum: $,
  ZodNativeEnum: ae,
  ZodPromise: H,
  ZodEffects: O,
  ZodTransformer: O,
  ZodOptional: I,
  ZodNullable: B,
  ZodDefault: se,
  ZodCatch: fe,
  ZodNaN: me,
  BRAND: ut,
  ZodBranded: Pe,
  ZodPipeline: ie,
  ZodReadonly: ye,
  custom: $e,
  Schema: g,
  ZodSchema: g,
  late: pt,
  get ZodFirstPartyTypeKind() {
    return f;
  },
  coerce: Ht,
  any: xt,
  array: Tt,
  bigint: mt,
  boolean: ze,
  date: yt,
  discriminatedUnion: Ot,
  effect: Re,
  enum: Pt,
  function: At,
  instanceof: ht,
  intersection: Et,
  lazy: Mt,
  literal: Lt,
  map: jt,
  nan: ft,
  nativeEnum: $t,
  never: wt,
  null: _t,
  nullable: zt,
  number: De,
  object: Ct,
  oboolean: Yt,
  onumber: qt,
  optional: Dt,
  ostring: Wt,
  pipeline: Ut,
  preprocess: Bt,
  promise: Vt,
  record: Rt,
  set: It,
  strictObject: Zt,
  string: Ve,
  symbol: gt,
  transformer: Re,
  tuple: Nt,
  undefined: vt,
  union: St,
  unknown: bt,
  void: kt,
  NEVER: Xt,
  ZodIssueCode: c,
  quotelessJson: Fe,
  ZodError: Z
});
const ir = E.object({
  receiverName: E.string().min(1, "필수로 입력해야 해요"),
  receiverCall: E.string().min(1).regex(/^(\d{11}|\d{3}-\d{4}-\d{4})$/, "연락처 형식을 확인해 주세요"),
  zipcode: E.string().min(1, "필수로 입력해야 해요").max(8, "8자 이내로 입력해 주세요"),
  addr1: E.string().min(1, "필수로 입력해야 해요").max(200, "200자 이내로 입력해 주세요"),
  addr2: E.string().max(200, "200자 이내로 입력해 주세요").optional(),
  memo: E.string().max(200, "200자 이내로 입력해 주세요").optional(),
  unipassNumber: E.string().min(1, "필수로 입력해야 해요").max(50, "50자 이내로 입력해 주세요").optional(),
  termsAccepted: E.boolean().refine((r) => r === !0, {
    message: "개인정보 처리방침에 동의해주세요"
  }),
  commonEntrancePassword: E.string().optional()
}), or = {
  미리연락: "배송 전에 미리 연락 바랍니다.",
  경비실: "부재시 경비실에 맡겨주세요.",
  전화문자: "부재시 전화나 문자를 남겨주세요.",
  직접입력: "직접입력"
};
export {
  rr as B,
  sr as C,
  er as F,
  or as M,
  nr as S,
  ar as T,
  tr as a,
  ir as f,
  Ue as k,
  Kt as m
};
//# sourceMappingURL=formSchema-B--0Jzet.js.map
