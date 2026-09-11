import { e as We, f as Ne, j as a, a as Wt, m as De, w as Re, T as Be, g as Ee, s as Ae, r as Le, h as ze, i as Fe, l as Oe, u as Mt } from "./emotion-react.browser.esm-B9sQ19ZB.js";
import { i as ne, h as Ie, a as He, p as je, r as D, g as Ve, R } from "./queryClient-DpZpBkWP.js";
import { s as oe, q as j, t as M, v as T, w as dt, x as Ke, a as _, y as ue, z as Et, C as Ye, p as qe, B as Ue, r as Ge, O as zt, n as Xe, o as Qe } from "./AddressFormat-C0DZcVGz.js";
import { h as Nt, t as re, a as nt, e as he } from "./app-MHqjRhKy.js";
import { u as ft, M as bt, a as Je, A as Ze } from "./useDaumHealthCheck-wIM-zPPf.js";
import { u as tn, S as en, d as nn } from "./site-info.query-DSuQTJpJ.js";
import { u as xt } from "./useClassicTranslation-ouIPeWST.js";
class on extends We {
  // Type override
  // Type override
  // Type override
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(e, n) {
    super(e, n);
  }
  bindMethods() {
    super.bindMethods(), this.fetchNextPage = this.fetchNextPage.bind(this), this.fetchPreviousPage = this.fetchPreviousPage.bind(this);
  }
  setOptions(e, n) {
    super.setOptions({
      ...e,
      behavior: ne()
    }, n);
  }
  getOptimisticResult(e) {
    return e.behavior = ne(), super.getOptimisticResult(e);
  }
  fetchNextPage({
    pageParam: e,
    ...n
  } = {}) {
    return this.fetch({
      ...n,
      meta: {
        fetchMore: {
          direction: "forward",
          pageParam: e
        }
      }
    });
  }
  fetchPreviousPage({
    pageParam: e,
    ...n
  } = {}) {
    return this.fetch({
      ...n,
      meta: {
        fetchMore: {
          direction: "backward",
          pageParam: e
        }
      }
    });
  }
  createResult(e, n) {
    var o, r, c, s, i, l;
    const {
      state: p
    } = e, g = super.createResult(e, n), {
      isFetching: f,
      isRefetching: u
    } = g, w = f && ((o = p.fetchMeta) == null || (r = o.fetchMore) == null ? void 0 : r.direction) === "forward", b = f && ((c = p.fetchMeta) == null || (s = c.fetchMore) == null ? void 0 : s.direction) === "backward";
    return {
      ...g,
      fetchNextPage: this.fetchNextPage,
      fetchPreviousPage: this.fetchPreviousPage,
      hasNextPage: He(n, (i = p.data) == null ? void 0 : i.pages),
      hasPreviousPage: Ie(n, (l = p.data) == null ? void 0 : l.pages),
      isFetchingNextPage: w,
      isFetchingPreviousPage: b,
      isRefetching: u && !w && !b
    };
  }
}
function Jc(t, e, n) {
  const o = je(t, e, n);
  return Ne(o, on);
}
var ge = { exports: {} }, Dt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rn = D, an = Symbol.for("react.element"), sn = Symbol.for("react.fragment"), cn = Object.prototype.hasOwnProperty, ln = rn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, dn = { key: !0, ref: !0, __self: !0, __source: !0 };
function fe(t, e, n) {
  var o, r = {}, c = null, s = null;
  n !== void 0 && (c = "" + n), e.key !== void 0 && (c = "" + e.key), e.ref !== void 0 && (s = e.ref);
  for (o in e)
    cn.call(e, o) && !dn.hasOwnProperty(o) && (r[o] = e[o]);
  if (t && t.defaultProps)
    for (o in e = t.defaultProps, e)
      r[o] === void 0 && (r[o] = e[o]);
  return { $$typeof: an, type: t, key: c, ref: s, props: r, _owner: ln.current };
}
Dt.Fragment = sn;
Dt.jsx = fe;
Dt.jsxs = fe;
ge.exports = Dt;
var Ft = ge.exports;
function Ot() {
  return Ot = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var o in n)
        ({}).hasOwnProperty.call(n, o) && (t[o] = n[o]);
    }
    return t;
  }, Ot.apply(null, arguments);
}
const mn = {
  small: 12,
  medium: 16,
  large: 20,
  xlarge: 24
}, pn = ["aria-label", "aria-labelledby", "role"];
function un(t) {
  return pn.some((e) => e in t);
}
function hn({ ref: t, size: e = "medium", color: n, style: o, children: r, ...c }) {
  const s = mn[e] ?? e;
  return Ft.jsx("svg", { ref: t, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: s, height: s, fill: "none", style: { ...o, color: n ?? (o == null ? void 0 : o.color) ?? "var(--icon-color, currentColor)" }, ...!un(c) && { "aria-hidden": !0 }, ...c, children: r });
}
function ae({ ref: t, ...e }) {
  return Ft.jsx(hn, { ref: t, ...e, children: Ft.jsx("path", { d: "M5 12H19M19 12L12 5M19 12L12 19", stroke: "currentColor", strokeWidth: "1.2", vectorEffect: "non-scaling-stroke", strokeLinecap: "round", strokeLinejoin: "round" }) });
}
function gn(t, e, n) {
  const o = oe(t, n), r = oe(e, n);
  return +o == +r;
}
const fn = {
  lessThanXSeconds: {
    one: "menos de un segundo",
    other: "menos de {{count}} segundos"
  },
  xSeconds: {
    one: "1 segundo",
    other: "{{count}} segundos"
  },
  halfAMinute: "medio minuto",
  lessThanXMinutes: {
    one: "menos de un minuto",
    other: "menos de {{count}} minutos"
  },
  xMinutes: {
    one: "1 minuto",
    other: "{{count}} minutos"
  },
  aboutXHours: {
    one: "alrededor de 1 hora",
    other: "alrededor de {{count}} horas"
  },
  xHours: {
    one: "1 hora",
    other: "{{count}} horas"
  },
  xDays: {
    one: "1 día",
    other: "{{count}} días"
  },
  aboutXWeeks: {
    one: "alrededor de 1 semana",
    other: "alrededor de {{count}} semanas"
  },
  xWeeks: {
    one: "1 semana",
    other: "{{count}} semanas"
  },
  aboutXMonths: {
    one: "alrededor de 1 mes",
    other: "alrededor de {{count}} meses"
  },
  xMonths: {
    one: "1 mes",
    other: "{{count}} meses"
  },
  aboutXYears: {
    one: "alrededor de 1 año",
    other: "alrededor de {{count}} años"
  },
  xYears: {
    one: "1 año",
    other: "{{count}} años"
  },
  overXYears: {
    one: "más de 1 año",
    other: "más de {{count}} años"
  },
  almostXYears: {
    one: "casi 1 año",
    other: "casi {{count}} años"
  }
}, bn = (t, e, n) => {
  let o;
  const r = fn[t];
  return typeof r == "string" ? o = r : e === 1 ? o = r.one : o = r.other.replace("{{count}}", e.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "en " + o : "hace " + o : o;
}, yn = {
  full: "EEEE, d 'de' MMMM 'de' y",
  long: "d 'de' MMMM 'de' y",
  medium: "d MMM y",
  short: "dd/MM/y"
}, xn = {
  full: "HH:mm:ss zzzz",
  long: "HH:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm"
}, wn = {
  full: "{{date}} 'a las' {{time}}",
  long: "{{date}} 'a las' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, vn = {
  date: j({
    formats: yn,
    defaultWidth: "full"
  }),
  time: j({
    formats: xn,
    defaultWidth: "full"
  }),
  dateTime: j({
    formats: wn,
    defaultWidth: "full"
  })
}, Sn = {
  lastWeek: "'el' eeee 'pasado a la' p",
  yesterday: "'ayer a la' p",
  today: "'hoy a la' p",
  tomorrow: "'mañana a la' p",
  nextWeek: "eeee 'a la' p",
  other: "P"
}, Cn = {
  lastWeek: "'el' eeee 'pasado a las' p",
  yesterday: "'ayer a las' p",
  today: "'hoy a las' p",
  tomorrow: "'mañana a las' p",
  nextWeek: "eeee 'a las' p",
  other: "P"
}, kn = (t, e, n, o) => e.getHours() !== 1 ? Cn[t] : Sn[t], _n = {
  narrow: ["AC", "DC"],
  abbreviated: ["AC", "DC"],
  wide: ["antes de cristo", "después de cristo"]
}, Pn = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["T1", "T2", "T3", "T4"],
  wide: ["1º trimestre", "2º trimestre", "3º trimestre", "4º trimestre"]
}, Mn = {
  narrow: ["e", "f", "m", "a", "m", "j", "j", "a", "s", "o", "n", "d"],
  abbreviated: [
    "ene",
    "feb",
    "mar",
    "abr",
    "may",
    "jun",
    "jul",
    "ago",
    "sep",
    "oct",
    "nov",
    "dic"
  ],
  wide: [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre"
  ]
}, Tn = {
  narrow: ["d", "l", "m", "m", "j", "v", "s"],
  short: ["do", "lu", "ma", "mi", "ju", "vi", "sá"],
  abbreviated: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
  wide: [
    "domingo",
    "lunes",
    "martes",
    "miércoles",
    "jueves",
    "viernes",
    "sábado"
  ]
}, $n = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mn",
    noon: "md",
    morning: "mañana",
    afternoon: "tarde",
    evening: "tarde",
    night: "noche"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "medianoche",
    noon: "mediodia",
    morning: "mañana",
    afternoon: "tarde",
    evening: "tarde",
    night: "noche"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "medianoche",
    noon: "mediodia",
    morning: "mañana",
    afternoon: "tarde",
    evening: "tarde",
    night: "noche"
  }
}, Wn = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mn",
    noon: "md",
    morning: "de la mañana",
    afternoon: "de la tarde",
    evening: "de la tarde",
    night: "de la noche"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "medianoche",
    noon: "mediodia",
    morning: "de la mañana",
    afternoon: "de la tarde",
    evening: "de la tarde",
    night: "de la noche"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "medianoche",
    noon: "mediodia",
    morning: "de la mañana",
    afternoon: "de la tarde",
    evening: "de la tarde",
    night: "de la noche"
  }
}, Nn = (t, e) => Number(t) + "º", Dn = {
  ordinalNumber: Nn,
  era: M({
    values: _n,
    defaultWidth: "wide"
  }),
  quarter: M({
    values: Pn,
    defaultWidth: "wide",
    argumentCallback: (t) => Number(t) - 1
  }),
  month: M({
    values: Mn,
    defaultWidth: "wide"
  }),
  day: M({
    values: Tn,
    defaultWidth: "wide"
  }),
  dayPeriod: M({
    values: $n,
    defaultWidth: "wide",
    formattingValues: Wn,
    defaultFormattingWidth: "wide"
  })
}, Rn = /^(\d+)(º)?/i, Bn = /\d+/i, En = {
  narrow: /^(ac|dc|a|d)/i,
  abbreviated: /^(a\.?\s?c\.?|a\.?\s?e\.?\s?c\.?|d\.?\s?c\.?|e\.?\s?c\.?)/i,
  wide: /^(antes de cristo|antes de la era com[uú]n|despu[eé]s de cristo|era com[uú]n)/i
}, An = {
  any: [/^ac/i, /^dc/i],
  wide: [
    /^(antes de cristo|antes de la era com[uú]n)/i,
    /^(despu[eé]s de cristo|era com[uú]n)/i
  ]
}, Ln = {
  narrow: /^[1234]/i,
  abbreviated: /^T[1234]/i,
  wide: /^[1234](º)? trimestre/i
}, zn = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Fn = {
  narrow: /^[efmajsond]/i,
  abbreviated: /^(ene|feb|mar|abr|may|jun|jul|ago|sep|oct|nov|dic)/i,
  wide: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i
}, On = {
  narrow: [
    /^e/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^en/i,
    /^feb/i,
    /^mar/i,
    /^abr/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^ago/i,
    /^sep/i,
    /^oct/i,
    /^nov/i,
    /^dic/i
  ]
}, In = {
  narrow: /^[dlmjvs]/i,
  short: /^(do|lu|ma|mi|ju|vi|s[áa])/i,
  abbreviated: /^(dom|lun|mar|mi[ée]|jue|vie|s[áa]b)/i,
  wide: /^(domingo|lunes|martes|mi[ée]rcoles|jueves|viernes|s[áa]bado)/i
}, Hn = {
  narrow: [/^d/i, /^l/i, /^m/i, /^m/i, /^j/i, /^v/i, /^s/i],
  any: [/^do/i, /^lu/i, /^ma/i, /^mi/i, /^ju/i, /^vi/i, /^sa/i]
}, jn = {
  narrow: /^(a|p|mn|md|(de la|a las) (mañana|tarde|noche))/i,
  any: /^([ap]\.?\s?m\.?|medianoche|mediodia|(de la|a las) (mañana|tarde|noche))/i
}, Vn = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mn/i,
    noon: /^md/i,
    morning: /mañana/i,
    afternoon: /tarde/i,
    evening: /tarde/i,
    night: /noche/i
  }
}, Kn = {
  ordinalNumber: dt({
    matchPattern: Rn,
    parsePattern: Bn,
    valueCallback: function(t) {
      return parseInt(t, 10);
    }
  }),
  era: T({
    matchPatterns: En,
    defaultMatchWidth: "wide",
    parsePatterns: An,
    defaultParseWidth: "any"
  }),
  quarter: T({
    matchPatterns: Ln,
    defaultMatchWidth: "wide",
    parsePatterns: zn,
    defaultParseWidth: "any",
    valueCallback: (t) => t + 1
  }),
  month: T({
    matchPatterns: Fn,
    defaultMatchWidth: "wide",
    parsePatterns: On,
    defaultParseWidth: "any"
  }),
  day: T({
    matchPatterns: In,
    defaultMatchWidth: "wide",
    parsePatterns: Hn,
    defaultParseWidth: "any"
  }),
  dayPeriod: T({
    matchPatterns: jn,
    defaultMatchWidth: "any",
    parsePatterns: Vn,
    defaultParseWidth: "any"
  })
}, Yn = {
  code: "es",
  formatDistance: bn,
  formatLong: vn,
  formatRelative: kn,
  localize: Dn,
  match: Kn,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 1
  }
}, qn = {
  lessThanXSeconds: {
    one: "1秒未満",
    other: "{{count}}秒未満",
    oneWithSuffix: "約1秒",
    otherWithSuffix: "約{{count}}秒"
  },
  xSeconds: {
    one: "1秒",
    other: "{{count}}秒"
  },
  halfAMinute: "30秒",
  lessThanXMinutes: {
    one: "1分未満",
    other: "{{count}}分未満",
    oneWithSuffix: "約1分",
    otherWithSuffix: "約{{count}}分"
  },
  xMinutes: {
    one: "1分",
    other: "{{count}}分"
  },
  aboutXHours: {
    one: "約1時間",
    other: "約{{count}}時間"
  },
  xHours: {
    one: "1時間",
    other: "{{count}}時間"
  },
  xDays: {
    one: "1日",
    other: "{{count}}日"
  },
  aboutXWeeks: {
    one: "約1週間",
    other: "約{{count}}週間"
  },
  xWeeks: {
    one: "1週間",
    other: "{{count}}週間"
  },
  aboutXMonths: {
    one: "約1か月",
    other: "約{{count}}か月"
  },
  xMonths: {
    one: "1か月",
    other: "{{count}}か月"
  },
  aboutXYears: {
    one: "約1年",
    other: "約{{count}}年"
  },
  xYears: {
    one: "1年",
    other: "{{count}}年"
  },
  overXYears: {
    one: "1年以上",
    other: "{{count}}年以上"
  },
  almostXYears: {
    one: "1年近く",
    other: "{{count}}年近く"
  }
}, Un = (t, e, n) => {
  n = n || {};
  let o;
  const r = qn[t];
  return typeof r == "string" ? o = r : e === 1 ? n.addSuffix && r.oneWithSuffix ? o = r.oneWithSuffix : o = r.one : n.addSuffix && r.otherWithSuffix ? o = r.otherWithSuffix.replace("{{count}}", String(e)) : o = r.other.replace("{{count}}", String(e)), n.addSuffix ? n.comparison && n.comparison > 0 ? o + "後" : o + "前" : o;
}, Gn = {
  full: "y年M月d日EEEE",
  long: "y年M月d日",
  medium: "y/MM/dd",
  short: "y/MM/dd"
}, Xn = {
  full: "H時mm分ss秒 zzzz",
  long: "H:mm:ss z",
  medium: "H:mm:ss",
  short: "H:mm"
}, Qn = {
  full: "{{date}} {{time}}",
  long: "{{date}} {{time}}",
  medium: "{{date}} {{time}}",
  short: "{{date}} {{time}}"
}, Jn = {
  date: j({
    formats: Gn,
    defaultWidth: "full"
  }),
  time: j({
    formats: Xn,
    defaultWidth: "full"
  }),
  dateTime: j({
    formats: Qn,
    defaultWidth: "full"
  })
}, Zn = {
  lastWeek: "先週のeeeeのp",
  yesterday: "昨日のp",
  today: "今日のp",
  tomorrow: "明日のp",
  nextWeek: "翌週のeeeeのp",
  other: "P"
}, to = (t, e, n, o) => Zn[t], eo = {
  narrow: ["BC", "AC"],
  abbreviated: ["紀元前", "西暦"],
  wide: ["紀元前", "西暦"]
}, no = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["第1四半期", "第2四半期", "第3四半期", "第4四半期"]
}, oo = {
  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
  abbreviated: [
    "1月",
    "2月",
    "3月",
    "4月",
    "5月",
    "6月",
    "7月",
    "8月",
    "9月",
    "10月",
    "11月",
    "12月"
  ],
  wide: [
    "1月",
    "2月",
    "3月",
    "4月",
    "5月",
    "6月",
    "7月",
    "8月",
    "9月",
    "10月",
    "11月",
    "12月"
  ]
}, ro = {
  narrow: ["日", "月", "火", "水", "木", "金", "土"],
  short: ["日", "月", "火", "水", "木", "金", "土"],
  abbreviated: ["日", "月", "火", "水", "木", "金", "土"],
  wide: ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"]
}, ao = {
  narrow: {
    am: "午前",
    pm: "午後",
    midnight: "深夜",
    noon: "正午",
    morning: "朝",
    afternoon: "午後",
    evening: "夜",
    night: "深夜"
  },
  abbreviated: {
    am: "午前",
    pm: "午後",
    midnight: "深夜",
    noon: "正午",
    morning: "朝",
    afternoon: "午後",
    evening: "夜",
    night: "深夜"
  },
  wide: {
    am: "午前",
    pm: "午後",
    midnight: "深夜",
    noon: "正午",
    morning: "朝",
    afternoon: "午後",
    evening: "夜",
    night: "深夜"
  }
}, io = {
  narrow: {
    am: "午前",
    pm: "午後",
    midnight: "深夜",
    noon: "正午",
    morning: "朝",
    afternoon: "午後",
    evening: "夜",
    night: "深夜"
  },
  abbreviated: {
    am: "午前",
    pm: "午後",
    midnight: "深夜",
    noon: "正午",
    morning: "朝",
    afternoon: "午後",
    evening: "夜",
    night: "深夜"
  },
  wide: {
    am: "午前",
    pm: "午後",
    midnight: "深夜",
    noon: "正午",
    morning: "朝",
    afternoon: "午後",
    evening: "夜",
    night: "深夜"
  }
}, so = (t, e) => {
  const n = Number(t);
  switch (String(e == null ? void 0 : e.unit)) {
    case "year":
      return `${n}年`;
    case "quarter":
      return `第${n}四半期`;
    case "month":
      return `${n}月`;
    case "week":
      return `第${n}週`;
    case "date":
      return `${n}日`;
    case "hour":
      return `${n}時`;
    case "minute":
      return `${n}分`;
    case "second":
      return `${n}秒`;
    default:
      return `${n}`;
  }
}, co = {
  ordinalNumber: so,
  era: M({
    values: eo,
    defaultWidth: "wide"
  }),
  quarter: M({
    values: no,
    defaultWidth: "wide",
    argumentCallback: (t) => Number(t) - 1
  }),
  month: M({
    values: oo,
    defaultWidth: "wide"
  }),
  day: M({
    values: ro,
    defaultWidth: "wide"
  }),
  dayPeriod: M({
    values: ao,
    defaultWidth: "wide",
    formattingValues: io,
    defaultFormattingWidth: "wide"
  })
}, lo = /^第?\d+(年|四半期|月|週|日|時|分|秒)?/i, mo = /\d+/i, po = {
  narrow: /^(B\.?C\.?|A\.?D\.?)/i,
  abbreviated: /^(紀元[前後]|西暦)/i,
  wide: /^(紀元[前後]|西暦)/i
}, uo = {
  narrow: [/^B/i, /^A/i],
  any: [/^(紀元前)/i, /^(西暦|紀元後)/i]
}, ho = {
  narrow: /^[1234]/i,
  abbreviated: /^Q[1234]/i,
  wide: /^第[1234一二三四１２３４]四半期/i
}, go = {
  any: [/(1|一|１)/i, /(2|二|２)/i, /(3|三|３)/i, /(4|四|４)/i]
}, fo = {
  narrow: /^([123456789]|1[012])/,
  abbreviated: /^([123456789]|1[012])月/i,
  wide: /^([123456789]|1[012])月/i
}, bo = {
  any: [
    /^1\D/,
    /^2/,
    /^3/,
    /^4/,
    /^5/,
    /^6/,
    /^7/,
    /^8/,
    /^9/,
    /^10/,
    /^11/,
    /^12/
  ]
}, yo = {
  narrow: /^[日月火水木金土]/,
  short: /^[日月火水木金土]/,
  abbreviated: /^[日月火水木金土]/,
  wide: /^[日月火水木金土]曜日/
}, xo = {
  any: [/^日/, /^月/, /^火/, /^水/, /^木/, /^金/, /^土/]
}, wo = {
  any: /^(AM|PM|午前|午後|正午|深夜|真夜中|夜|朝)/i
}, vo = {
  any: {
    am: /^(A|午前)/i,
    pm: /^(P|午後)/i,
    midnight: /^深夜|真夜中/i,
    noon: /^正午/i,
    morning: /^朝/i,
    afternoon: /^午後/i,
    evening: /^夜/i,
    night: /^深夜/i
  }
}, So = {
  ordinalNumber: dt({
    matchPattern: lo,
    parsePattern: mo,
    valueCallback: function(t) {
      return parseInt(t, 10);
    }
  }),
  era: T({
    matchPatterns: po,
    defaultMatchWidth: "wide",
    parsePatterns: uo,
    defaultParseWidth: "any"
  }),
  quarter: T({
    matchPatterns: ho,
    defaultMatchWidth: "wide",
    parsePatterns: go,
    defaultParseWidth: "any",
    valueCallback: (t) => t + 1
  }),
  month: T({
    matchPatterns: fo,
    defaultMatchWidth: "wide",
    parsePatterns: bo,
    defaultParseWidth: "any"
  }),
  day: T({
    matchPatterns: yo,
    defaultMatchWidth: "wide",
    parsePatterns: xo,
    defaultParseWidth: "any"
  }),
  dayPeriod: T({
    matchPatterns: wo,
    defaultMatchWidth: "any",
    parsePatterns: vo,
    defaultParseWidth: "any"
  })
}, Co = {
  code: "ja",
  formatDistance: Un,
  formatLong: Jn,
  formatRelative: to,
  localize: co,
  match: So,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
}, ko = {
  lessThanXSeconds: {
    one: "1초 미만",
    other: "{{count}}초 미만"
  },
  xSeconds: {
    one: "1초",
    other: "{{count}}초"
  },
  halfAMinute: "30초",
  lessThanXMinutes: {
    one: "1분 미만",
    other: "{{count}}분 미만"
  },
  xMinutes: {
    one: "1분",
    other: "{{count}}분"
  },
  aboutXHours: {
    one: "약 1시간",
    other: "약 {{count}}시간"
  },
  xHours: {
    one: "1시간",
    other: "{{count}}시간"
  },
  xDays: {
    one: "1일",
    other: "{{count}}일"
  },
  aboutXWeeks: {
    one: "약 1주",
    other: "약 {{count}}주"
  },
  xWeeks: {
    one: "1주",
    other: "{{count}}주"
  },
  aboutXMonths: {
    one: "약 1개월",
    other: "약 {{count}}개월"
  },
  xMonths: {
    one: "1개월",
    other: "{{count}}개월"
  },
  aboutXYears: {
    one: "약 1년",
    other: "약 {{count}}년"
  },
  xYears: {
    one: "1년",
    other: "{{count}}년"
  },
  overXYears: {
    one: "1년 이상",
    other: "{{count}}년 이상"
  },
  almostXYears: {
    one: "거의 1년",
    other: "거의 {{count}}년"
  }
}, _o = (t, e, n) => {
  let o;
  const r = ko[t];
  return typeof r == "string" ? o = r : e === 1 ? o = r.one : o = r.other.replace("{{count}}", e.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? o + " 후" : o + " 전" : o;
}, Po = {
  full: "y년 M월 d일 EEEE",
  long: "y년 M월 d일",
  medium: "y.MM.dd",
  short: "y.MM.dd"
}, Mo = {
  full: "a H시 mm분 ss초 zzzz",
  long: "a H:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm"
}, To = {
  full: "{{date}} {{time}}",
  long: "{{date}} {{time}}",
  medium: "{{date}} {{time}}",
  short: "{{date}} {{time}}"
}, $o = {
  date: j({
    formats: Po,
    defaultWidth: "full"
  }),
  time: j({
    formats: Mo,
    defaultWidth: "full"
  }),
  dateTime: j({
    formats: To,
    defaultWidth: "full"
  })
}, Wo = {
  lastWeek: "'지난' eeee p",
  yesterday: "'어제' p",
  today: "'오늘' p",
  tomorrow: "'내일' p",
  nextWeek: "'다음' eeee p",
  other: "P"
}, No = (t, e, n, o) => Wo[t], Do = {
  narrow: ["BC", "AD"],
  abbreviated: ["BC", "AD"],
  wide: ["기원전", "서기"]
}, Ro = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1분기", "2분기", "3분기", "4분기"]
}, Bo = {
  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
  abbreviated: [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월"
  ],
  wide: [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월"
  ]
}, Eo = {
  narrow: ["일", "월", "화", "수", "목", "금", "토"],
  short: ["일", "월", "화", "수", "목", "금", "토"],
  abbreviated: ["일", "월", "화", "수", "목", "금", "토"],
  wide: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"]
}, Ao = {
  narrow: {
    am: "오전",
    pm: "오후",
    midnight: "자정",
    noon: "정오",
    morning: "아침",
    afternoon: "오후",
    evening: "저녁",
    night: "밤"
  },
  abbreviated: {
    am: "오전",
    pm: "오후",
    midnight: "자정",
    noon: "정오",
    morning: "아침",
    afternoon: "오후",
    evening: "저녁",
    night: "밤"
  },
  wide: {
    am: "오전",
    pm: "오후",
    midnight: "자정",
    noon: "정오",
    morning: "아침",
    afternoon: "오후",
    evening: "저녁",
    night: "밤"
  }
}, Lo = {
  narrow: {
    am: "오전",
    pm: "오후",
    midnight: "자정",
    noon: "정오",
    morning: "아침",
    afternoon: "오후",
    evening: "저녁",
    night: "밤"
  },
  abbreviated: {
    am: "오전",
    pm: "오후",
    midnight: "자정",
    noon: "정오",
    morning: "아침",
    afternoon: "오후",
    evening: "저녁",
    night: "밤"
  },
  wide: {
    am: "오전",
    pm: "오후",
    midnight: "자정",
    noon: "정오",
    morning: "아침",
    afternoon: "오후",
    evening: "저녁",
    night: "밤"
  }
}, zo = (t, e) => {
  const n = Number(t);
  switch (String(e == null ? void 0 : e.unit)) {
    case "minute":
    case "second":
      return String(n);
    case "date":
      return n + "일";
    default:
      return n + "번째";
  }
}, Fo = {
  ordinalNumber: zo,
  era: M({
    values: Do,
    defaultWidth: "wide"
  }),
  quarter: M({
    values: Ro,
    defaultWidth: "wide",
    argumentCallback: (t) => t - 1
  }),
  month: M({
    values: Bo,
    defaultWidth: "wide"
  }),
  day: M({
    values: Eo,
    defaultWidth: "wide"
  }),
  dayPeriod: M({
    values: Ao,
    defaultWidth: "wide",
    formattingValues: Lo,
    defaultFormattingWidth: "wide"
  })
}, Oo = /^(\d+)(일|번째)?/i, Io = /\d+/i, Ho = {
  narrow: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(기원전|서기)/i
}, jo = {
  any: [/^(bc|기원전)/i, /^(ad|서기)/i]
}, Vo = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234]사?분기/i
}, Ko = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Yo = {
  narrow: /^(1[012]|[123456789])/,
  abbreviated: /^(1[012]|[123456789])월/i,
  wide: /^(1[012]|[123456789])월/i
}, qo = {
  any: [
    /^1월?$/,
    /^2/,
    /^3/,
    /^4/,
    /^5/,
    /^6/,
    /^7/,
    /^8/,
    /^9/,
    /^10/,
    /^11/,
    /^12/
  ]
}, Uo = {
  narrow: /^[일월화수목금토]/,
  short: /^[일월화수목금토]/,
  abbreviated: /^[일월화수목금토]/,
  wide: /^[일월화수목금토]요일/
}, Go = {
  any: [/^일/, /^월/, /^화/, /^수/, /^목/, /^금/, /^토/]
}, Xo = {
  any: /^(am|pm|오전|오후|자정|정오|아침|저녁|밤)/i
}, Qo = {
  any: {
    am: /^(am|오전)/i,
    pm: /^(pm|오후)/i,
    midnight: /^자정/i,
    noon: /^정오/i,
    morning: /^아침/i,
    afternoon: /^오후/i,
    evening: /^저녁/i,
    night: /^밤/i
  }
}, Jo = {
  ordinalNumber: dt({
    matchPattern: Oo,
    parsePattern: Io,
    valueCallback: (t) => parseInt(t, 10)
  }),
  era: T({
    matchPatterns: Ho,
    defaultMatchWidth: "wide",
    parsePatterns: jo,
    defaultParseWidth: "any"
  }),
  quarter: T({
    matchPatterns: Vo,
    defaultMatchWidth: "wide",
    parsePatterns: Ko,
    defaultParseWidth: "any",
    valueCallback: (t) => t + 1
  }),
  month: T({
    matchPatterns: Yo,
    defaultMatchWidth: "wide",
    parsePatterns: qo,
    defaultParseWidth: "any"
  }),
  day: T({
    matchPatterns: Uo,
    defaultMatchWidth: "wide",
    parsePatterns: Go,
    defaultParseWidth: "any"
  }),
  dayPeriod: T({
    matchPatterns: Xo,
    defaultMatchWidth: "any",
    parsePatterns: Qo,
    defaultParseWidth: "any"
  })
}, be = {
  code: "ko",
  formatDistance: _o,
  formatLong: $o,
  formatRelative: No,
  localize: Fo,
  match: Jo,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
}, Zo = {
  lessThanXSeconds: {
    one: "dưới 1 giây",
    other: "dưới {{count}} giây"
  },
  xSeconds: {
    one: "1 giây",
    other: "{{count}} giây"
  },
  halfAMinute: "nửa phút",
  lessThanXMinutes: {
    one: "dưới 1 phút",
    other: "dưới {{count}} phút"
  },
  xMinutes: {
    one: "1 phút",
    other: "{{count}} phút"
  },
  aboutXHours: {
    one: "khoảng 1 giờ",
    other: "khoảng {{count}} giờ"
  },
  xHours: {
    one: "1 giờ",
    other: "{{count}} giờ"
  },
  xDays: {
    one: "1 ngày",
    other: "{{count}} ngày"
  },
  aboutXWeeks: {
    one: "khoảng 1 tuần",
    other: "khoảng {{count}} tuần"
  },
  xWeeks: {
    one: "1 tuần",
    other: "{{count}} tuần"
  },
  aboutXMonths: {
    one: "khoảng 1 tháng",
    other: "khoảng {{count}} tháng"
  },
  xMonths: {
    one: "1 tháng",
    other: "{{count}} tháng"
  },
  aboutXYears: {
    one: "khoảng 1 năm",
    other: "khoảng {{count}} năm"
  },
  xYears: {
    one: "1 năm",
    other: "{{count}} năm"
  },
  overXYears: {
    one: "hơn 1 năm",
    other: "hơn {{count}} năm"
  },
  almostXYears: {
    one: "gần 1 năm",
    other: "gần {{count}} năm"
  }
}, tr = (t, e, n) => {
  let o;
  const r = Zo[t];
  return typeof r == "string" ? o = r : e === 1 ? o = r.one : o = r.other.replace("{{count}}", String(e)), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? o + " nữa" : o + " trước" : o;
}, er = {
  // thứ Sáu, ngày 25 tháng 08 năm 2017
  full: "EEEE, 'ngày' d MMMM 'năm' y",
  // ngày 25 tháng 08 năm 2017
  long: "'ngày' d MMMM 'năm' y",
  // 25 thg 08 năm 2017
  medium: "d MMM 'năm' y",
  // 25/08/2017
  short: "dd/MM/y"
}, nr = {
  full: "HH:mm:ss zzzz",
  long: "HH:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm"
}, or = {
  // thứ Sáu, ngày 25 tháng 08 năm 2017 23:25:59
  full: "{{date}} {{time}}",
  // ngày 25 tháng 08 năm 2017 23:25
  long: "{{date}} {{time}}",
  medium: "{{date}} {{time}}",
  short: "{{date}} {{time}}"
}, rr = {
  date: j({
    formats: er,
    defaultWidth: "full"
  }),
  time: j({
    formats: nr,
    defaultWidth: "full"
  }),
  dateTime: j({
    formats: or,
    defaultWidth: "full"
  })
}, ar = {
  lastWeek: "eeee 'tuần trước vào lúc' p",
  yesterday: "'hôm qua vào lúc' p",
  today: "'hôm nay vào lúc' p",
  tomorrow: "'ngày mai vào lúc' p",
  nextWeek: "eeee 'tới vào lúc' p",
  other: "P"
}, ir = (t, e, n, o) => ar[t], sr = {
  narrow: ["TCN", "SCN"],
  abbreviated: ["trước CN", "sau CN"],
  wide: ["trước Công Nguyên", "sau Công Nguyên"]
}, cr = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["Quý 1", "Quý 2", "Quý 3", "Quý 4"]
}, lr = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  // I notice many news outlet use this "quý II/2018"
  wide: ["quý I", "quý II", "quý III", "quý IV"]
}, dr = {
  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
  abbreviated: [
    "Thg 1",
    "Thg 2",
    "Thg 3",
    "Thg 4",
    "Thg 5",
    "Thg 6",
    "Thg 7",
    "Thg 8",
    "Thg 9",
    "Thg 10",
    "Thg 11",
    "Thg 12"
  ],
  wide: [
    "Tháng Một",
    "Tháng Hai",
    "Tháng Ba",
    "Tháng Tư",
    "Tháng Năm",
    "Tháng Sáu",
    "Tháng Bảy",
    "Tháng Tám",
    "Tháng Chín",
    "Tháng Mười",
    "Tháng Mười Một",
    "Tháng Mười Hai"
  ]
}, mr = {
  narrow: [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12"
  ],
  abbreviated: [
    "thg 1",
    "thg 2",
    "thg 3",
    "thg 4",
    "thg 5",
    "thg 6",
    "thg 7",
    "thg 8",
    "thg 9",
    "thg 10",
    "thg 11",
    "thg 12"
  ],
  wide: [
    "tháng 01",
    "tháng 02",
    "tháng 03",
    "tháng 04",
    "tháng 05",
    "tháng 06",
    "tháng 07",
    "tháng 08",
    "tháng 09",
    "tháng 10",
    "tháng 11",
    "tháng 12"
  ]
}, pr = {
  narrow: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
  short: ["CN", "Th 2", "Th 3", "Th 4", "Th 5", "Th 6", "Th 7"],
  abbreviated: ["CN", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"],
  wide: [
    "Chủ Nhật",
    "Thứ Hai",
    "Thứ Ba",
    "Thứ Tư",
    "Thứ Năm",
    "Thứ Sáu",
    "Thứ Bảy"
  ]
}, ur = {
  // narrow date period is extremely rare in Vietnamese
  // I used abbreviated form for noon, morning and afternoon
  // which are regconizable by Vietnamese, others cannot be any shorter
  narrow: {
    am: "am",
    pm: "pm",
    midnight: "nửa đêm",
    noon: "tr",
    morning: "sg",
    afternoon: "ch",
    evening: "tối",
    night: "đêm"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "nửa đêm",
    noon: "trưa",
    morning: "sáng",
    afternoon: "chiều",
    evening: "tối",
    night: "đêm"
  },
  wide: {
    am: "SA",
    pm: "CH",
    midnight: "nửa đêm",
    noon: "trưa",
    morning: "sáng",
    afternoon: "chiều",
    evening: "tối",
    night: "đêm"
  }
}, hr = {
  narrow: {
    am: "am",
    pm: "pm",
    midnight: "nửa đêm",
    noon: "tr",
    morning: "sg",
    afternoon: "ch",
    evening: "tối",
    night: "đêm"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "nửa đêm",
    noon: "trưa",
    morning: "sáng",
    afternoon: "chiều",
    evening: "tối",
    night: "đêm"
  },
  wide: {
    am: "SA",
    pm: "CH",
    midnight: "nửa đêm",
    noon: "giữa trưa",
    morning: "vào buổi sáng",
    afternoon: "vào buổi chiều",
    evening: "vào buổi tối",
    night: "vào ban đêm"
  }
}, gr = (t, e) => {
  const n = Number(t), o = e == null ? void 0 : e.unit;
  if (o === "quarter")
    switch (n) {
      case 1:
        return "I";
      case 2:
        return "II";
      case 3:
        return "III";
      case 4:
        return "IV";
    }
  else if (o === "day")
    switch (n) {
      case 1:
        return "thứ 2";
      case 2:
        return "thứ 3";
      case 3:
        return "thứ 4";
      case 4:
        return "thứ 5";
      case 5:
        return "thứ 6";
      case 6:
        return "thứ 7";
      case 7:
        return "chủ nhật";
    }
  else {
    if (o === "week")
      return n === 1 ? "thứ nhất" : "thứ " + n;
    if (o === "dayOfYear")
      return n === 1 ? "đầu tiên" : "thứ " + n;
  }
  return String(n);
}, fr = {
  ordinalNumber: gr,
  era: M({
    values: sr,
    defaultWidth: "wide"
  }),
  quarter: M({
    values: cr,
    defaultWidth: "wide",
    formattingValues: lr,
    defaultFormattingWidth: "wide",
    argumentCallback: (t) => t - 1
  }),
  month: M({
    values: dr,
    defaultWidth: "wide",
    formattingValues: mr,
    defaultFormattingWidth: "wide"
  }),
  day: M({
    values: pr,
    defaultWidth: "wide"
  }),
  dayPeriod: M({
    values: ur,
    defaultWidth: "wide",
    formattingValues: hr,
    defaultFormattingWidth: "wide"
  })
}, br = /^(\d+)/i, yr = /\d+/i, xr = {
  narrow: /^(tcn|scn)/i,
  abbreviated: /^(trước CN|sau CN)/i,
  wide: /^(trước Công Nguyên|sau Công Nguyên)/i
}, wr = {
  any: [/^t/i, /^s/i]
}, vr = {
  narrow: /^([1234]|i{1,3}v?)/i,
  abbreviated: /^q([1234]|i{1,3}v?)/i,
  wide: /^quý ([1234]|i{1,3}v?)/i
}, Sr = {
  any: [/(1|i)$/i, /(2|ii)$/i, /(3|iii)$/i, /(4|iv)$/i]
}, Cr = {
  // month number may contain leading 0, 'thg' prefix may have space, underscore or empty before number
  // note the order of '1' since it is a sub-string of '10', so must be lower priority
  narrow: /^(0?[2-9]|10|11|12|0?1)/i,
  // note the order of 'thg 1' since it is sub-string of 'thg 10', so must be lower priority
  abbreviated: /^thg[ _]?(0?[1-9](?!\d)|10|11|12)/i,
  // note the order of 'Mười' since it is sub-string of Mười Một, so must be lower priority
  wide: /^tháng ?(Một|Hai|Ba|Tư|Năm|Sáu|Bảy|Tám|Chín|Mười|Mười ?Một|Mười ?Hai|0?[1-9](?!\d)|10|11|12)/i
}, kr = {
  narrow: [
    /0?1$/i,
    /0?2/i,
    /3/,
    /4/,
    /5/,
    /6/,
    /7/,
    /8/,
    /9/,
    /10/,
    /11/,
    /12/
  ],
  abbreviated: [
    /^thg[ _]?0?1(?!\d)/i,
    /^thg[ _]?0?2/i,
    /^thg[ _]?0?3/i,
    /^thg[ _]?0?4/i,
    /^thg[ _]?0?5/i,
    /^thg[ _]?0?6/i,
    /^thg[ _]?0?7/i,
    /^thg[ _]?0?8/i,
    /^thg[ _]?0?9/i,
    /^thg[ _]?10/i,
    /^thg[ _]?11/i,
    /^thg[ _]?12/i
  ],
  wide: [
    /^tháng ?(Một|0?1(?!\d))/i,
    /^tháng ?(Hai|0?2)/i,
    /^tháng ?(Ba|0?3)/i,
    /^tháng ?(Tư|0?4)/i,
    /^tháng ?(Năm|0?5)/i,
    /^tháng ?(Sáu|0?6)/i,
    /^tháng ?(Bảy|0?7)/i,
    /^tháng ?(Tám|0?8)/i,
    /^tháng ?(Chín|0?9)/i,
    /^tháng ?(Mười|10)/i,
    /^tháng ?(Mười ?Một|11)/i,
    /^tháng ?(Mười ?Hai|12)/i
  ]
}, _r = {
  narrow: /^(CN|T2|T3|T4|T5|T6|T7)/i,
  short: /^(CN|Th ?2|Th ?3|Th ?4|Th ?5|Th ?6|Th ?7)/i,
  abbreviated: /^(CN|Th ?2|Th ?3|Th ?4|Th ?5|Th ?6|Th ?7)/i,
  wide: /^(Chủ ?Nhật|Chúa ?Nhật|thứ ?Hai|thứ ?Ba|thứ ?Tư|thứ ?Năm|thứ ?Sáu|thứ ?Bảy)/i
}, Pr = {
  narrow: [/CN/i, /2/i, /3/i, /4/i, /5/i, /6/i, /7/i],
  short: [/CN/i, /2/i, /3/i, /4/i, /5/i, /6/i, /7/i],
  abbreviated: [/CN/i, /2/i, /3/i, /4/i, /5/i, /6/i, /7/i],
  wide: [/(Chủ|Chúa) ?Nhật/i, /Hai/i, /Ba/i, /Tư/i, /Năm/i, /Sáu/i, /Bảy/i]
}, Mr = {
  narrow: /^(a|p|nửa đêm|trưa|(giờ) (sáng|chiều|tối|đêm))/i,
  abbreviated: /^(am|pm|nửa đêm|trưa|(giờ) (sáng|chiều|tối|đêm))/i,
  wide: /^(ch[^i]*|sa|nửa đêm|trưa|(giờ) (sáng|chiều|tối|đêm))/i
}, Tr = {
  any: {
    am: /^(a|sa)/i,
    pm: /^(p|ch[^i]*)/i,
    midnight: /nửa đêm/i,
    noon: /trưa/i,
    morning: /sáng/i,
    afternoon: /chiều/i,
    evening: /tối/i,
    night: /^đêm/i
  }
}, $r = {
  ordinalNumber: dt({
    matchPattern: br,
    parsePattern: yr,
    valueCallback: (t) => parseInt(t, 10)
  }),
  era: T({
    matchPatterns: xr,
    defaultMatchWidth: "wide",
    parsePatterns: wr,
    defaultParseWidth: "any"
  }),
  quarter: T({
    matchPatterns: vr,
    defaultMatchWidth: "wide",
    parsePatterns: Sr,
    defaultParseWidth: "any",
    valueCallback: (t) => t + 1
  }),
  month: T({
    matchPatterns: Cr,
    defaultMatchWidth: "wide",
    parsePatterns: kr,
    defaultParseWidth: "wide"
  }),
  day: T({
    matchPatterns: _r,
    defaultMatchWidth: "wide",
    parsePatterns: Pr,
    defaultParseWidth: "wide"
  }),
  dayPeriod: T({
    matchPatterns: Mr,
    defaultMatchWidth: "wide",
    parsePatterns: Tr,
    defaultParseWidth: "any"
  })
}, Wr = {
  code: "vi",
  formatDistance: tr,
  formatLong: rr,
  formatRelative: ir,
  localize: fr,
  match: $r,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 1
  }
}, Nr = {
  lessThanXSeconds: {
    one: "不到 1 秒",
    other: "不到 {{count}} 秒"
  },
  xSeconds: {
    one: "1 秒",
    other: "{{count}} 秒"
  },
  halfAMinute: "半分钟",
  lessThanXMinutes: {
    one: "不到 1 分钟",
    other: "不到 {{count}} 分钟"
  },
  xMinutes: {
    one: "1 分钟",
    other: "{{count}} 分钟"
  },
  xHours: {
    one: "1 小时",
    other: "{{count}} 小时"
  },
  aboutXHours: {
    one: "大约 1 小时",
    other: "大约 {{count}} 小时"
  },
  xDays: {
    one: "1 天",
    other: "{{count}} 天"
  },
  aboutXWeeks: {
    one: "大约 1 个星期",
    other: "大约 {{count}} 个星期"
  },
  xWeeks: {
    one: "1 个星期",
    other: "{{count}} 个星期"
  },
  aboutXMonths: {
    one: "大约 1 个月",
    other: "大约 {{count}} 个月"
  },
  xMonths: {
    one: "1 个月",
    other: "{{count}} 个月"
  },
  aboutXYears: {
    one: "大约 1 年",
    other: "大约 {{count}} 年"
  },
  xYears: {
    one: "1 年",
    other: "{{count}} 年"
  },
  overXYears: {
    one: "超过 1 年",
    other: "超过 {{count}} 年"
  },
  almostXYears: {
    one: "将近 1 年",
    other: "将近 {{count}} 年"
  }
}, Dr = (t, e, n) => {
  let o;
  const r = Nr[t];
  return typeof r == "string" ? o = r : e === 1 ? o = r.one : o = r.other.replace("{{count}}", String(e)), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? o + "内" : o + "前" : o;
}, Rr = {
  full: "y'年'M'月'd'日' EEEE",
  long: "y'年'M'月'd'日'",
  medium: "yyyy-MM-dd",
  short: "yy-MM-dd"
}, Br = {
  full: "zzzz a h:mm:ss",
  long: "z a h:mm:ss",
  medium: "a h:mm:ss",
  short: "a h:mm"
}, Er = {
  full: "{{date}} {{time}}",
  long: "{{date}} {{time}}",
  medium: "{{date}} {{time}}",
  short: "{{date}} {{time}}"
}, Ar = {
  date: j({
    formats: Rr,
    defaultWidth: "full"
  }),
  time: j({
    formats: Br,
    defaultWidth: "full"
  }),
  dateTime: j({
    formats: Er,
    defaultWidth: "full"
  })
};
function ie(t, e, n) {
  const o = "eeee p";
  return gn(t, e, n) ? o : t.getTime() > e.getTime() ? "'下个'" + o : "'上个'" + o;
}
const Lr = {
  lastWeek: ie,
  // days before yesterday, maybe in this week or last week
  yesterday: "'昨天' p",
  today: "'今天' p",
  tomorrow: "'明天' p",
  nextWeek: ie,
  // days after tomorrow, maybe in this week or next week
  other: "PP p"
}, zr = (t, e, n, o) => {
  const r = Lr[t];
  return typeof r == "function" ? r(e, n, o) : r;
}, Fr = {
  narrow: ["前", "公元"],
  abbreviated: ["前", "公元"],
  wide: ["公元前", "公元"]
}, Or = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["第一季", "第二季", "第三季", "第四季"],
  wide: ["第一季度", "第二季度", "第三季度", "第四季度"]
}, Ir = {
  narrow: [
    "一",
    "二",
    "三",
    "四",
    "五",
    "六",
    "七",
    "八",
    "九",
    "十",
    "十一",
    "十二"
  ],
  abbreviated: [
    "1月",
    "2月",
    "3月",
    "4月",
    "5月",
    "6月",
    "7月",
    "8月",
    "9月",
    "10月",
    "11月",
    "12月"
  ],
  wide: [
    "一月",
    "二月",
    "三月",
    "四月",
    "五月",
    "六月",
    "七月",
    "八月",
    "九月",
    "十月",
    "十一月",
    "十二月"
  ]
}, Hr = {
  narrow: ["日", "一", "二", "三", "四", "五", "六"],
  short: ["日", "一", "二", "三", "四", "五", "六"],
  abbreviated: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
  wide: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
}, jr = {
  narrow: {
    am: "上",
    pm: "下",
    midnight: "凌晨",
    noon: "午",
    morning: "早",
    afternoon: "下午",
    evening: "晚",
    night: "夜"
  },
  abbreviated: {
    am: "上午",
    pm: "下午",
    midnight: "凌晨",
    noon: "中午",
    morning: "早晨",
    afternoon: "中午",
    evening: "晚上",
    night: "夜间"
  },
  wide: {
    am: "上午",
    pm: "下午",
    midnight: "凌晨",
    noon: "中午",
    morning: "早晨",
    afternoon: "中午",
    evening: "晚上",
    night: "夜间"
  }
}, Vr = {
  narrow: {
    am: "上",
    pm: "下",
    midnight: "凌晨",
    noon: "午",
    morning: "早",
    afternoon: "下午",
    evening: "晚",
    night: "夜"
  },
  abbreviated: {
    am: "上午",
    pm: "下午",
    midnight: "凌晨",
    noon: "中午",
    morning: "早晨",
    afternoon: "中午",
    evening: "晚上",
    night: "夜间"
  },
  wide: {
    am: "上午",
    pm: "下午",
    midnight: "凌晨",
    noon: "中午",
    morning: "早晨",
    afternoon: "中午",
    evening: "晚上",
    night: "夜间"
  }
}, Kr = (t, e) => {
  const n = Number(t);
  switch (e == null ? void 0 : e.unit) {
    case "date":
      return n.toString() + "日";
    case "hour":
      return n.toString() + "时";
    case "minute":
      return n.toString() + "分";
    case "second":
      return n.toString() + "秒";
    default:
      return "第 " + n.toString();
  }
}, Yr = {
  ordinalNumber: Kr,
  era: M({
    values: Fr,
    defaultWidth: "wide"
  }),
  quarter: M({
    values: Or,
    defaultWidth: "wide",
    argumentCallback: (t) => t - 1
  }),
  month: M({
    values: Ir,
    defaultWidth: "wide"
  }),
  day: M({
    values: Hr,
    defaultWidth: "wide"
  }),
  dayPeriod: M({
    values: jr,
    defaultWidth: "wide",
    formattingValues: Vr,
    defaultFormattingWidth: "wide"
  })
}, qr = /^(第\s*)?\d+(日|时|分|秒)?/i, Ur = /\d+/i, Gr = {
  narrow: /^(前)/i,
  abbreviated: /^(前)/i,
  wide: /^(公元前|公元)/i
}, Xr = {
  any: [/^(前)/i, /^(公元)/i]
}, Qr = {
  narrow: /^[1234]/i,
  abbreviated: /^第[一二三四]刻/i,
  wide: /^第[一二三四]刻钟/i
}, Jr = {
  any: [/(1|一)/i, /(2|二)/i, /(3|三)/i, /(4|四)/i]
}, Zr = {
  narrow: /^(一|二|三|四|五|六|七|八|九|十[二一])/i,
  abbreviated: /^(一|二|三|四|五|六|七|八|九|十[二一]|\d|1[12])月/i,
  wide: /^(一|二|三|四|五|六|七|八|九|十[二一])月/i
}, ta = {
  narrow: [
    /^一/i,
    /^二/i,
    /^三/i,
    /^四/i,
    /^五/i,
    /^六/i,
    /^七/i,
    /^八/i,
    /^九/i,
    /^十(?!(一|二))/i,
    /^十一/i,
    /^十二/i
  ],
  any: [
    /^一|1/i,
    /^二|2/i,
    /^三|3/i,
    /^四|4/i,
    /^五|5/i,
    /^六|6/i,
    /^七|7/i,
    /^八|8/i,
    /^九|9/i,
    /^十(?!(一|二))|10/i,
    /^十一|11/i,
    /^十二|12/i
  ]
}, ea = {
  narrow: /^[一二三四五六日]/i,
  short: /^[一二三四五六日]/i,
  abbreviated: /^周[一二三四五六日]/i,
  wide: /^星期[一二三四五六日]/i
}, na = {
  any: [/日/i, /一/i, /二/i, /三/i, /四/i, /五/i, /六/i]
}, oa = {
  any: /^(上午?|下午?|午夜|[中正]午|早上?|下午|晚上?|凌晨|)/i
}, ra = {
  any: {
    am: /^上午?/i,
    pm: /^下午?/i,
    midnight: /^午夜/i,
    noon: /^[中正]午/i,
    morning: /^早上/i,
    afternoon: /^下午/i,
    evening: /^晚上?/i,
    night: /^凌晨/i
  }
}, aa = {
  ordinalNumber: dt({
    matchPattern: qr,
    parsePattern: Ur,
    valueCallback: (t) => parseInt(t, 10)
  }),
  era: T({
    matchPatterns: Gr,
    defaultMatchWidth: "wide",
    parsePatterns: Xr,
    defaultParseWidth: "any"
  }),
  quarter: T({
    matchPatterns: Qr,
    defaultMatchWidth: "wide",
    parsePatterns: Jr,
    defaultParseWidth: "any",
    valueCallback: (t) => t + 1
  }),
  month: T({
    matchPatterns: Zr,
    defaultMatchWidth: "wide",
    parsePatterns: ta,
    defaultParseWidth: "any"
  }),
  day: T({
    matchPatterns: ea,
    defaultMatchWidth: "wide",
    parsePatterns: na,
    defaultParseWidth: "any"
  }),
  dayPeriod: T({
    matchPatterns: oa,
    defaultMatchWidth: "any",
    parsePatterns: ra,
    defaultParseWidth: "any"
  })
}, ia = {
  code: "zh-CN",
  formatDistance: Dr,
  formatLong: Ar,
  formatRelative: zr,
  localize: Yr,
  match: aa,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 4
  }
}, sa = {
  lessThanXSeconds: {
    one: "少於 1 秒",
    other: "少於 {{count}} 秒"
  },
  xSeconds: {
    one: "1 秒",
    other: "{{count}} 秒"
  },
  halfAMinute: "半分鐘",
  lessThanXMinutes: {
    one: "少於 1 分鐘",
    other: "少於 {{count}} 分鐘"
  },
  xMinutes: {
    one: "1 分鐘",
    other: "{{count}} 分鐘"
  },
  xHours: {
    one: "1 小時",
    other: "{{count}} 小時"
  },
  aboutXHours: {
    one: "大約 1 小時",
    other: "大約 {{count}} 小時"
  },
  xDays: {
    one: "1 天",
    other: "{{count}} 天"
  },
  aboutXWeeks: {
    one: "大約 1 個星期",
    other: "大約 {{count}} 個星期"
  },
  xWeeks: {
    one: "1 個星期",
    other: "{{count}} 個星期"
  },
  aboutXMonths: {
    one: "大約 1 個月",
    other: "大約 {{count}} 個月"
  },
  xMonths: {
    one: "1 個月",
    other: "{{count}} 個月"
  },
  aboutXYears: {
    one: "大約 1 年",
    other: "大約 {{count}} 年"
  },
  xYears: {
    one: "1 年",
    other: "{{count}} 年"
  },
  overXYears: {
    one: "超過 1 年",
    other: "超過 {{count}} 年"
  },
  almostXYears: {
    one: "將近 1 年",
    other: "將近 {{count}} 年"
  }
}, ca = (t, e, n) => {
  let o;
  const r = sa[t];
  return typeof r == "string" ? o = r : e === 1 ? o = r.one : o = r.other.replace("{{count}}", String(e)), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? o + "內" : o + "前" : o;
}, la = {
  full: "y'年'M'月'd'日' EEEE",
  long: "y'年'M'月'd'日'",
  medium: "yyyy-MM-dd",
  short: "yy-MM-dd"
}, da = {
  full: "zzzz a h:mm:ss",
  long: "z a h:mm:ss",
  medium: "a h:mm:ss",
  short: "a h:mm"
}, ma = {
  full: "{{date}} {{time}}",
  long: "{{date}} {{time}}",
  medium: "{{date}} {{time}}",
  short: "{{date}} {{time}}"
}, pa = {
  date: j({
    formats: la,
    defaultWidth: "full"
  }),
  time: j({
    formats: da,
    defaultWidth: "full"
  }),
  dateTime: j({
    formats: ma,
    defaultWidth: "full"
  })
}, ua = {
  lastWeek: "'上個'eeee p",
  yesterday: "'昨天' p",
  today: "'今天' p",
  tomorrow: "'明天' p",
  nextWeek: "'下個'eeee p",
  other: "P"
}, ha = (t, e, n, o) => ua[t], ga = {
  narrow: ["前", "公元"],
  abbreviated: ["前", "公元"],
  wide: ["公元前", "公元"]
}, fa = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["第一刻", "第二刻", "第三刻", "第四刻"],
  wide: ["第一刻鐘", "第二刻鐘", "第三刻鐘", "第四刻鐘"]
}, ba = {
  narrow: [
    "一",
    "二",
    "三",
    "四",
    "五",
    "六",
    "七",
    "八",
    "九",
    "十",
    "十一",
    "十二"
  ],
  abbreviated: [
    "1月",
    "2月",
    "3月",
    "4月",
    "5月",
    "6月",
    "7月",
    "8月",
    "9月",
    "10月",
    "11月",
    "12月"
  ],
  wide: [
    "一月",
    "二月",
    "三月",
    "四月",
    "五月",
    "六月",
    "七月",
    "八月",
    "九月",
    "十月",
    "十一月",
    "十二月"
  ]
}, ya = {
  narrow: ["日", "一", "二", "三", "四", "五", "六"],
  short: ["日", "一", "二", "三", "四", "五", "六"],
  abbreviated: ["週日", "週一", "週二", "週三", "週四", "週五", "週六"],
  wide: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
}, xa = {
  narrow: {
    am: "上",
    pm: "下",
    midnight: "凌晨",
    noon: "午",
    morning: "早",
    afternoon: "下午",
    evening: "晚",
    night: "夜"
  },
  abbreviated: {
    am: "上午",
    pm: "下午",
    midnight: "凌晨",
    noon: "中午",
    morning: "早晨",
    afternoon: "中午",
    evening: "晚上",
    night: "夜間"
  },
  wide: {
    am: "上午",
    pm: "下午",
    midnight: "凌晨",
    noon: "中午",
    morning: "早晨",
    afternoon: "中午",
    evening: "晚上",
    night: "夜間"
  }
}, wa = {
  narrow: {
    am: "上",
    pm: "下",
    midnight: "凌晨",
    noon: "午",
    morning: "早",
    afternoon: "下午",
    evening: "晚",
    night: "夜"
  },
  abbreviated: {
    am: "上午",
    pm: "下午",
    midnight: "凌晨",
    noon: "中午",
    morning: "早晨",
    afternoon: "中午",
    evening: "晚上",
    night: "夜間"
  },
  wide: {
    am: "上午",
    pm: "下午",
    midnight: "凌晨",
    noon: "中午",
    morning: "早晨",
    afternoon: "中午",
    evening: "晚上",
    night: "夜間"
  }
}, va = (t, e) => {
  const n = Number(t);
  switch (e == null ? void 0 : e.unit) {
    case "date":
      return n + "日";
    case "hour":
      return n + "時";
    case "minute":
      return n + "分";
    case "second":
      return n + "秒";
    default:
      return "第 " + n;
  }
}, Sa = {
  ordinalNumber: va,
  era: M({
    values: ga,
    defaultWidth: "wide"
  }),
  quarter: M({
    values: fa,
    defaultWidth: "wide",
    argumentCallback: (t) => t - 1
  }),
  month: M({
    values: ba,
    defaultWidth: "wide"
  }),
  day: M({
    values: ya,
    defaultWidth: "wide"
  }),
  dayPeriod: M({
    values: xa,
    defaultWidth: "wide",
    formattingValues: wa,
    defaultFormattingWidth: "wide"
  })
}, Ca = /^(第\s*)?\d+(日|時|分|秒)?/i, ka = /\d+/i, _a = {
  narrow: /^(前)/i,
  abbreviated: /^(前)/i,
  wide: /^(公元前|公元)/i
}, Pa = {
  any: [/^(前)/i, /^(公元)/i]
}, Ma = {
  narrow: /^[1234]/i,
  abbreviated: /^第[一二三四]刻/i,
  wide: /^第[一二三四]刻鐘/i
}, Ta = {
  any: [/(1|一)/i, /(2|二)/i, /(3|三)/i, /(4|四)/i]
}, $a = {
  narrow: /^(一|二|三|四|五|六|七|八|九|十[二一])/i,
  abbreviated: /^(一|二|三|四|五|六|七|八|九|十[二一]|\d|1[12])月/i,
  wide: /^(一|二|三|四|五|六|七|八|九|十[二一])月/i
}, Wa = {
  narrow: [
    /^一/i,
    /^二/i,
    /^三/i,
    /^四/i,
    /^五/i,
    /^六/i,
    /^七/i,
    /^八/i,
    /^九/i,
    /^十(?!(一|二))/i,
    /^十一/i,
    /^十二/i
  ],
  any: [
    /^一|1/i,
    /^二|2/i,
    /^三|3/i,
    /^四|4/i,
    /^五|5/i,
    /^六|6/i,
    /^七|7/i,
    /^八|8/i,
    /^九|9/i,
    /^十(?!(一|二))|10/i,
    /^十一|11/i,
    /^十二|12/i
  ]
}, Na = {
  narrow: /^[一二三四五六日]/i,
  short: /^[一二三四五六日]/i,
  abbreviated: /^週[一二三四五六日]/i,
  wide: /^星期[一二三四五六日]/i
}, Da = {
  any: [/日/i, /一/i, /二/i, /三/i, /四/i, /五/i, /六/i]
}, Ra = {
  any: /^(上午?|下午?|午夜|[中正]午|早上?|下午|晚上?|凌晨)/i
}, Ba = {
  any: {
    am: /^上午?/i,
    pm: /^下午?/i,
    midnight: /^午夜/i,
    noon: /^[中正]午/i,
    morning: /^早上/i,
    afternoon: /^下午/i,
    evening: /^晚上?/i,
    night: /^凌晨/i
  }
}, Ea = {
  ordinalNumber: dt({
    matchPattern: Ca,
    parsePattern: ka,
    valueCallback: (t) => parseInt(t, 10)
  }),
  era: T({
    matchPatterns: _a,
    defaultMatchWidth: "wide",
    parsePatterns: Pa,
    defaultParseWidth: "any"
  }),
  quarter: T({
    matchPatterns: Ma,
    defaultMatchWidth: "wide",
    parsePatterns: Ta,
    defaultParseWidth: "any",
    valueCallback: (t) => t + 1
  }),
  month: T({
    matchPatterns: $a,
    defaultMatchWidth: "wide",
    parsePatterns: Wa,
    defaultParseWidth: "any"
  }),
  day: T({
    matchPatterns: Na,
    defaultMatchWidth: "wide",
    parsePatterns: Da,
    defaultParseWidth: "any"
  }),
  dayPeriod: T({
    matchPatterns: Ra,
    defaultMatchWidth: "any",
    parsePatterns: Ba,
    defaultParseWidth: "any"
  })
}, se = {
  code: "zh-TW",
  formatDistance: ca,
  formatLong: pa,
  formatRelative: ha,
  localize: Sa,
  match: Ea,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 4
  }
}, Aa = {
  KR: be,
  JA: Co,
  "zh-TW": se,
  tw: se,
  CN: ia,
  EN: Ke,
  ES: Yn,
  VI: Wr
}, Zc = () => {
  var t;
  return Aa[(t = globalThis.window) == null ? void 0 : t.LANG_CODE] ?? be;
};
var ye = { exports: {} }, xe = {
  aliceblue: [240, 248, 255],
  antiquewhite: [250, 235, 215],
  aqua: [0, 255, 255],
  aquamarine: [127, 255, 212],
  azure: [240, 255, 255],
  beige: [245, 245, 220],
  bisque: [255, 228, 196],
  black: [0, 0, 0],
  blanchedalmond: [255, 235, 205],
  blue: [0, 0, 255],
  blueviolet: [138, 43, 226],
  brown: [165, 42, 42],
  burlywood: [222, 184, 135],
  cadetblue: [95, 158, 160],
  chartreuse: [127, 255, 0],
  chocolate: [210, 105, 30],
  coral: [255, 127, 80],
  cornflowerblue: [100, 149, 237],
  cornsilk: [255, 248, 220],
  crimson: [220, 20, 60],
  cyan: [0, 255, 255],
  darkblue: [0, 0, 139],
  darkcyan: [0, 139, 139],
  darkgoldenrod: [184, 134, 11],
  darkgray: [169, 169, 169],
  darkgreen: [0, 100, 0],
  darkgrey: [169, 169, 169],
  darkkhaki: [189, 183, 107],
  darkmagenta: [139, 0, 139],
  darkolivegreen: [85, 107, 47],
  darkorange: [255, 140, 0],
  darkorchid: [153, 50, 204],
  darkred: [139, 0, 0],
  darksalmon: [233, 150, 122],
  darkseagreen: [143, 188, 143],
  darkslateblue: [72, 61, 139],
  darkslategray: [47, 79, 79],
  darkslategrey: [47, 79, 79],
  darkturquoise: [0, 206, 209],
  darkviolet: [148, 0, 211],
  deeppink: [255, 20, 147],
  deepskyblue: [0, 191, 255],
  dimgray: [105, 105, 105],
  dimgrey: [105, 105, 105],
  dodgerblue: [30, 144, 255],
  firebrick: [178, 34, 34],
  floralwhite: [255, 250, 240],
  forestgreen: [34, 139, 34],
  fuchsia: [255, 0, 255],
  gainsboro: [220, 220, 220],
  ghostwhite: [248, 248, 255],
  gold: [255, 215, 0],
  goldenrod: [218, 165, 32],
  gray: [128, 128, 128],
  green: [0, 128, 0],
  greenyellow: [173, 255, 47],
  grey: [128, 128, 128],
  honeydew: [240, 255, 240],
  hotpink: [255, 105, 180],
  indianred: [205, 92, 92],
  indigo: [75, 0, 130],
  ivory: [255, 255, 240],
  khaki: [240, 230, 140],
  lavender: [230, 230, 250],
  lavenderblush: [255, 240, 245],
  lawngreen: [124, 252, 0],
  lemonchiffon: [255, 250, 205],
  lightblue: [173, 216, 230],
  lightcoral: [240, 128, 128],
  lightcyan: [224, 255, 255],
  lightgoldenrodyellow: [250, 250, 210],
  lightgray: [211, 211, 211],
  lightgreen: [144, 238, 144],
  lightgrey: [211, 211, 211],
  lightpink: [255, 182, 193],
  lightsalmon: [255, 160, 122],
  lightseagreen: [32, 178, 170],
  lightskyblue: [135, 206, 250],
  lightslategray: [119, 136, 153],
  lightslategrey: [119, 136, 153],
  lightsteelblue: [176, 196, 222],
  lightyellow: [255, 255, 224],
  lime: [0, 255, 0],
  limegreen: [50, 205, 50],
  linen: [250, 240, 230],
  magenta: [255, 0, 255],
  maroon: [128, 0, 0],
  mediumaquamarine: [102, 205, 170],
  mediumblue: [0, 0, 205],
  mediumorchid: [186, 85, 211],
  mediumpurple: [147, 112, 219],
  mediumseagreen: [60, 179, 113],
  mediumslateblue: [123, 104, 238],
  mediumspringgreen: [0, 250, 154],
  mediumturquoise: [72, 209, 204],
  mediumvioletred: [199, 21, 133],
  midnightblue: [25, 25, 112],
  mintcream: [245, 255, 250],
  mistyrose: [255, 228, 225],
  moccasin: [255, 228, 181],
  navajowhite: [255, 222, 173],
  navy: [0, 0, 128],
  oldlace: [253, 245, 230],
  olive: [128, 128, 0],
  olivedrab: [107, 142, 35],
  orange: [255, 165, 0],
  orangered: [255, 69, 0],
  orchid: [218, 112, 214],
  palegoldenrod: [238, 232, 170],
  palegreen: [152, 251, 152],
  paleturquoise: [175, 238, 238],
  palevioletred: [219, 112, 147],
  papayawhip: [255, 239, 213],
  peachpuff: [255, 218, 185],
  peru: [205, 133, 63],
  pink: [255, 192, 203],
  plum: [221, 160, 221],
  powderblue: [176, 224, 230],
  purple: [128, 0, 128],
  rebeccapurple: [102, 51, 153],
  red: [255, 0, 0],
  rosybrown: [188, 143, 143],
  royalblue: [65, 105, 225],
  saddlebrown: [139, 69, 19],
  salmon: [250, 128, 114],
  sandybrown: [244, 164, 96],
  seagreen: [46, 139, 87],
  seashell: [255, 245, 238],
  sienna: [160, 82, 45],
  silver: [192, 192, 192],
  skyblue: [135, 206, 235],
  slateblue: [106, 90, 205],
  slategray: [112, 128, 144],
  slategrey: [112, 128, 144],
  snow: [255, 250, 250],
  springgreen: [0, 255, 127],
  steelblue: [70, 130, 180],
  tan: [210, 180, 140],
  teal: [0, 128, 128],
  thistle: [216, 191, 216],
  tomato: [255, 99, 71],
  turquoise: [64, 224, 208],
  violet: [238, 130, 238],
  wheat: [245, 222, 179],
  white: [255, 255, 255],
  whitesmoke: [245, 245, 245],
  yellow: [255, 255, 0],
  yellowgreen: [154, 205, 50]
}, we = { exports: {} }, La = function(e) {
  return !e || typeof e == "string" ? !1 : e instanceof Array || Array.isArray(e) || e.length >= 0 && (e.splice instanceof Function || Object.getOwnPropertyDescriptor(e, e.length - 1) && e.constructor.name !== "String");
}, za = La, Fa = Array.prototype.concat, Oa = Array.prototype.slice, ce = we.exports = function(e) {
  for (var n = [], o = 0, r = e.length; o < r; o++) {
    var c = e[o];
    za(c) ? n = Fa.call(n, Oa.call(c)) : n.push(c);
  }
  return n;
};
ce.wrap = function(t) {
  return function() {
    return t(ce(arguments));
  };
};
var Ia = we.exports, ht = xe, wt = Ia, ve = Object.hasOwnProperty, Se = /* @__PURE__ */ Object.create(null);
for (var At in ht)
  ve.call(ht, At) && (Se[ht[At]] = At);
var G = ye.exports = {
  to: {},
  get: {}
};
G.get = function(t) {
  var e = t.substring(0, 3).toLowerCase(), n, o;
  switch (e) {
    case "hsl":
      n = G.get.hsl(t), o = "hsl";
      break;
    case "hwb":
      n = G.get.hwb(t), o = "hwb";
      break;
    default:
      n = G.get.rgb(t), o = "rgb";
      break;
  }
  return n ? { model: o, value: n } : null;
};
G.get.rgb = function(t) {
  if (!t)
    return null;
  var e = /^#([a-f0-9]{3,4})$/i, n = /^#([a-f0-9]{6})([a-f0-9]{2})?$/i, o = /^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/, r = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/, c = /^(\w+)$/, s = [0, 0, 0, 1], i, l, p;
  if (i = t.match(n)) {
    for (p = i[2], i = i[1], l = 0; l < 3; l++) {
      var g = l * 2;
      s[l] = parseInt(i.slice(g, g + 2), 16);
    }
    p && (s[3] = parseInt(p, 16) / 255);
  } else if (i = t.match(e)) {
    for (i = i[1], p = i[3], l = 0; l < 3; l++)
      s[l] = parseInt(i[l] + i[l], 16);
    p && (s[3] = parseInt(p + p, 16) / 255);
  } else if (i = t.match(o)) {
    for (l = 0; l < 3; l++)
      s[l] = parseInt(i[l + 1], 0);
    i[4] && (i[5] ? s[3] = parseFloat(i[4]) * 0.01 : s[3] = parseFloat(i[4]));
  } else if (i = t.match(r)) {
    for (l = 0; l < 3; l++)
      s[l] = Math.round(parseFloat(i[l + 1]) * 2.55);
    i[4] && (i[5] ? s[3] = parseFloat(i[4]) * 0.01 : s[3] = parseFloat(i[4]));
  } else
    return (i = t.match(c)) ? i[1] === "transparent" ? [0, 0, 0, 0] : ve.call(ht, i[1]) ? (s = ht[i[1]], s[3] = 1, s) : null : null;
  for (l = 0; l < 3; l++)
    s[l] = et(s[l], 0, 255);
  return s[3] = et(s[3], 0, 1), s;
};
G.get.hsl = function(t) {
  if (!t)
    return null;
  var e = /^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/, n = t.match(e);
  if (n) {
    var o = parseFloat(n[4]), r = (parseFloat(n[1]) % 360 + 360) % 360, c = et(parseFloat(n[2]), 0, 100), s = et(parseFloat(n[3]), 0, 100), i = et(isNaN(o) ? 1 : o, 0, 1);
    return [r, c, s, i];
  }
  return null;
};
G.get.hwb = function(t) {
  if (!t)
    return null;
  var e = /^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/, n = t.match(e);
  if (n) {
    var o = parseFloat(n[4]), r = (parseFloat(n[1]) % 360 + 360) % 360, c = et(parseFloat(n[2]), 0, 100), s = et(parseFloat(n[3]), 0, 100), i = et(isNaN(o) ? 1 : o, 0, 1);
    return [r, c, s, i];
  }
  return null;
};
G.to.hex = function() {
  var t = wt(arguments);
  return "#" + _t(t[0]) + _t(t[1]) + _t(t[2]) + (t[3] < 1 ? _t(Math.round(t[3] * 255)) : "");
};
G.to.rgb = function() {
  var t = wt(arguments);
  return t.length < 4 || t[3] === 1 ? "rgb(" + Math.round(t[0]) + ", " + Math.round(t[1]) + ", " + Math.round(t[2]) + ")" : "rgba(" + Math.round(t[0]) + ", " + Math.round(t[1]) + ", " + Math.round(t[2]) + ", " + t[3] + ")";
};
G.to.rgb.percent = function() {
  var t = wt(arguments), e = Math.round(t[0] / 255 * 100), n = Math.round(t[1] / 255 * 100), o = Math.round(t[2] / 255 * 100);
  return t.length < 4 || t[3] === 1 ? "rgb(" + e + "%, " + n + "%, " + o + "%)" : "rgba(" + e + "%, " + n + "%, " + o + "%, " + t[3] + ")";
};
G.to.hsl = function() {
  var t = wt(arguments);
  return t.length < 4 || t[3] === 1 ? "hsl(" + t[0] + ", " + t[1] + "%, " + t[2] + "%)" : "hsla(" + t[0] + ", " + t[1] + "%, " + t[2] + "%, " + t[3] + ")";
};
G.to.hwb = function() {
  var t = wt(arguments), e = "";
  return t.length >= 4 && t[3] !== 1 && (e = ", " + t[3]), "hwb(" + t[0] + ", " + t[1] + "%, " + t[2] + "%" + e + ")";
};
G.to.keyword = function(t) {
  return Se[t.slice(0, 3)];
};
function et(t, e, n) {
  return Math.min(Math.max(e, t), n);
}
function _t(t) {
  var e = Math.round(t).toString(16).toUpperCase();
  return e.length < 2 ? "0" + e : e;
}
var Ha = ye.exports;
const yt = xe, Ce = {};
for (const t of Object.keys(yt))
  Ce[yt[t]] = t;
const h = {
  rgb: { channels: 3, labels: "rgb" },
  hsl: { channels: 3, labels: "hsl" },
  hsv: { channels: 3, labels: "hsv" },
  hwb: { channels: 3, labels: "hwb" },
  cmyk: { channels: 4, labels: "cmyk" },
  xyz: { channels: 3, labels: "xyz" },
  lab: { channels: 3, labels: "lab" },
  lch: { channels: 3, labels: "lch" },
  hex: { channels: 1, labels: ["hex"] },
  keyword: { channels: 1, labels: ["keyword"] },
  ansi16: { channels: 1, labels: ["ansi16"] },
  ansi256: { channels: 1, labels: ["ansi256"] },
  hcg: { channels: 3, labels: ["h", "c", "g"] },
  apple: { channels: 3, labels: ["r16", "g16", "b16"] },
  gray: { channels: 1, labels: ["gray"] }
};
var ke = h;
for (const t of Object.keys(h)) {
  if (!("channels" in h[t]))
    throw new Error("missing channels property: " + t);
  if (!("labels" in h[t]))
    throw new Error("missing channel labels property: " + t);
  if (h[t].labels.length !== h[t].channels)
    throw new Error("channel and label counts mismatch: " + t);
  const { channels: e, labels: n } = h[t];
  delete h[t].channels, delete h[t].labels, Object.defineProperty(h[t], "channels", { value: e }), Object.defineProperty(h[t], "labels", { value: n });
}
h.rgb.hsl = function(t) {
  const e = t[0] / 255, n = t[1] / 255, o = t[2] / 255, r = Math.min(e, n, o), c = Math.max(e, n, o), s = c - r;
  let i, l;
  c === r ? i = 0 : e === c ? i = (n - o) / s : n === c ? i = 2 + (o - e) / s : o === c && (i = 4 + (e - n) / s), i = Math.min(i * 60, 360), i < 0 && (i += 360);
  const p = (r + c) / 2;
  return c === r ? l = 0 : p <= 0.5 ? l = s / (c + r) : l = s / (2 - c - r), [i, l * 100, p * 100];
};
h.rgb.hsv = function(t) {
  let e, n, o, r, c;
  const s = t[0] / 255, i = t[1] / 255, l = t[2] / 255, p = Math.max(s, i, l), g = p - Math.min(s, i, l), f = function(u) {
    return (p - u) / 6 / g + 1 / 2;
  };
  return g === 0 ? (r = 0, c = 0) : (c = g / p, e = f(s), n = f(i), o = f(l), s === p ? r = o - n : i === p ? r = 1 / 3 + e - o : l === p && (r = 2 / 3 + n - e), r < 0 ? r += 1 : r > 1 && (r -= 1)), [
    r * 360,
    c * 100,
    p * 100
  ];
};
h.rgb.hwb = function(t) {
  const e = t[0], n = t[1];
  let o = t[2];
  const r = h.rgb.hsl(t)[0], c = 1 / 255 * Math.min(e, Math.min(n, o));
  return o = 1 - 1 / 255 * Math.max(e, Math.max(n, o)), [r, c * 100, o * 100];
};
h.rgb.cmyk = function(t) {
  const e = t[0] / 255, n = t[1] / 255, o = t[2] / 255, r = Math.min(1 - e, 1 - n, 1 - o), c = (1 - e - r) / (1 - r) || 0, s = (1 - n - r) / (1 - r) || 0, i = (1 - o - r) / (1 - r) || 0;
  return [c * 100, s * 100, i * 100, r * 100];
};
function ja(t, e) {
  return (t[0] - e[0]) ** 2 + (t[1] - e[1]) ** 2 + (t[2] - e[2]) ** 2;
}
h.rgb.keyword = function(t) {
  const e = Ce[t];
  if (e)
    return e;
  let n = 1 / 0, o;
  for (const r of Object.keys(yt)) {
    const c = yt[r], s = ja(t, c);
    s < n && (n = s, o = r);
  }
  return o;
};
h.keyword.rgb = function(t) {
  return yt[t];
};
h.rgb.xyz = function(t) {
  let e = t[0] / 255, n = t[1] / 255, o = t[2] / 255;
  e = e > 0.04045 ? ((e + 0.055) / 1.055) ** 2.4 : e / 12.92, n = n > 0.04045 ? ((n + 0.055) / 1.055) ** 2.4 : n / 12.92, o = o > 0.04045 ? ((o + 0.055) / 1.055) ** 2.4 : o / 12.92;
  const r = e * 0.4124 + n * 0.3576 + o * 0.1805, c = e * 0.2126 + n * 0.7152 + o * 0.0722, s = e * 0.0193 + n * 0.1192 + o * 0.9505;
  return [r * 100, c * 100, s * 100];
};
h.rgb.lab = function(t) {
  const e = h.rgb.xyz(t);
  let n = e[0], o = e[1], r = e[2];
  n /= 95.047, o /= 100, r /= 108.883, n = n > 8856e-6 ? n ** (1 / 3) : 7.787 * n + 16 / 116, o = o > 8856e-6 ? o ** (1 / 3) : 7.787 * o + 16 / 116, r = r > 8856e-6 ? r ** (1 / 3) : 7.787 * r + 16 / 116;
  const c = 116 * o - 16, s = 500 * (n - o), i = 200 * (o - r);
  return [c, s, i];
};
h.hsl.rgb = function(t) {
  const e = t[0] / 360, n = t[1] / 100, o = t[2] / 100;
  let r, c, s;
  if (n === 0)
    return s = o * 255, [s, s, s];
  o < 0.5 ? r = o * (1 + n) : r = o + n - o * n;
  const i = 2 * o - r, l = [0, 0, 0];
  for (let p = 0; p < 3; p++)
    c = e + 1 / 3 * -(p - 1), c < 0 && c++, c > 1 && c--, 6 * c < 1 ? s = i + (r - i) * 6 * c : 2 * c < 1 ? s = r : 3 * c < 2 ? s = i + (r - i) * (2 / 3 - c) * 6 : s = i, l[p] = s * 255;
  return l;
};
h.hsl.hsv = function(t) {
  const e = t[0];
  let n = t[1] / 100, o = t[2] / 100, r = n;
  const c = Math.max(o, 0.01);
  o *= 2, n *= o <= 1 ? o : 2 - o, r *= c <= 1 ? c : 2 - c;
  const s = (o + n) / 2, i = o === 0 ? 2 * r / (c + r) : 2 * n / (o + n);
  return [e, i * 100, s * 100];
};
h.hsv.rgb = function(t) {
  const e = t[0] / 60, n = t[1] / 100;
  let o = t[2] / 100;
  const r = Math.floor(e) % 6, c = e - Math.floor(e), s = 255 * o * (1 - n), i = 255 * o * (1 - n * c), l = 255 * o * (1 - n * (1 - c));
  switch (o *= 255, r) {
    case 0:
      return [o, l, s];
    case 1:
      return [i, o, s];
    case 2:
      return [s, o, l];
    case 3:
      return [s, i, o];
    case 4:
      return [l, s, o];
    case 5:
      return [o, s, i];
  }
};
h.hsv.hsl = function(t) {
  const e = t[0], n = t[1] / 100, o = t[2] / 100, r = Math.max(o, 0.01);
  let c, s;
  s = (2 - n) * o;
  const i = (2 - n) * r;
  return c = n * r, c /= i <= 1 ? i : 2 - i, c = c || 0, s /= 2, [e, c * 100, s * 100];
};
h.hwb.rgb = function(t) {
  const e = t[0] / 360;
  let n = t[1] / 100, o = t[2] / 100;
  const r = n + o;
  let c;
  r > 1 && (n /= r, o /= r);
  const s = Math.floor(6 * e), i = 1 - o;
  c = 6 * e - s, s & 1 && (c = 1 - c);
  const l = n + c * (i - n);
  let p, g, f;
  switch (s) {
    default:
    case 6:
    case 0:
      p = i, g = l, f = n;
      break;
    case 1:
      p = l, g = i, f = n;
      break;
    case 2:
      p = n, g = i, f = l;
      break;
    case 3:
      p = n, g = l, f = i;
      break;
    case 4:
      p = l, g = n, f = i;
      break;
    case 5:
      p = i, g = n, f = l;
      break;
  }
  return [p * 255, g * 255, f * 255];
};
h.cmyk.rgb = function(t) {
  const e = t[0] / 100, n = t[1] / 100, o = t[2] / 100, r = t[3] / 100, c = 1 - Math.min(1, e * (1 - r) + r), s = 1 - Math.min(1, n * (1 - r) + r), i = 1 - Math.min(1, o * (1 - r) + r);
  return [c * 255, s * 255, i * 255];
};
h.xyz.rgb = function(t) {
  const e = t[0] / 100, n = t[1] / 100, o = t[2] / 100;
  let r, c, s;
  return r = e * 3.2406 + n * -1.5372 + o * -0.4986, c = e * -0.9689 + n * 1.8758 + o * 0.0415, s = e * 0.0557 + n * -0.204 + o * 1.057, r = r > 31308e-7 ? 1.055 * r ** (1 / 2.4) - 0.055 : r * 12.92, c = c > 31308e-7 ? 1.055 * c ** (1 / 2.4) - 0.055 : c * 12.92, s = s > 31308e-7 ? 1.055 * s ** (1 / 2.4) - 0.055 : s * 12.92, r = Math.min(Math.max(0, r), 1), c = Math.min(Math.max(0, c), 1), s = Math.min(Math.max(0, s), 1), [r * 255, c * 255, s * 255];
};
h.xyz.lab = function(t) {
  let e = t[0], n = t[1], o = t[2];
  e /= 95.047, n /= 100, o /= 108.883, e = e > 8856e-6 ? e ** (1 / 3) : 7.787 * e + 16 / 116, n = n > 8856e-6 ? n ** (1 / 3) : 7.787 * n + 16 / 116, o = o > 8856e-6 ? o ** (1 / 3) : 7.787 * o + 16 / 116;
  const r = 116 * n - 16, c = 500 * (e - n), s = 200 * (n - o);
  return [r, c, s];
};
h.lab.xyz = function(t) {
  const e = t[0], n = t[1], o = t[2];
  let r, c, s;
  c = (e + 16) / 116, r = n / 500 + c, s = c - o / 200;
  const i = c ** 3, l = r ** 3, p = s ** 3;
  return c = i > 8856e-6 ? i : (c - 16 / 116) / 7.787, r = l > 8856e-6 ? l : (r - 16 / 116) / 7.787, s = p > 8856e-6 ? p : (s - 16 / 116) / 7.787, r *= 95.047, c *= 100, s *= 108.883, [r, c, s];
};
h.lab.lch = function(t) {
  const e = t[0], n = t[1], o = t[2];
  let r;
  r = Math.atan2(o, n) * 360 / 2 / Math.PI, r < 0 && (r += 360);
  const s = Math.sqrt(n * n + o * o);
  return [e, s, r];
};
h.lch.lab = function(t) {
  const e = t[0], n = t[1], r = t[2] / 360 * 2 * Math.PI, c = n * Math.cos(r), s = n * Math.sin(r);
  return [e, c, s];
};
h.rgb.ansi16 = function(t, e = null) {
  const [n, o, r] = t;
  let c = e === null ? h.rgb.hsv(t)[2] : e;
  if (c = Math.round(c / 50), c === 0)
    return 30;
  let s = 30 + (Math.round(r / 255) << 2 | Math.round(o / 255) << 1 | Math.round(n / 255));
  return c === 2 && (s += 60), s;
};
h.hsv.ansi16 = function(t) {
  return h.rgb.ansi16(h.hsv.rgb(t), t[2]);
};
h.rgb.ansi256 = function(t) {
  const e = t[0], n = t[1], o = t[2];
  return e === n && n === o ? e < 8 ? 16 : e > 248 ? 231 : Math.round((e - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(e / 255 * 5) + 6 * Math.round(n / 255 * 5) + Math.round(o / 255 * 5);
};
h.ansi16.rgb = function(t) {
  let e = t % 10;
  if (e === 0 || e === 7)
    return t > 50 && (e += 3.5), e = e / 10.5 * 255, [e, e, e];
  const n = (~~(t > 50) + 1) * 0.5, o = (e & 1) * n * 255, r = (e >> 1 & 1) * n * 255, c = (e >> 2 & 1) * n * 255;
  return [o, r, c];
};
h.ansi256.rgb = function(t) {
  if (t >= 232) {
    const c = (t - 232) * 10 + 8;
    return [c, c, c];
  }
  t -= 16;
  let e;
  const n = Math.floor(t / 36) / 5 * 255, o = Math.floor((e = t % 36) / 6) / 5 * 255, r = e % 6 / 5 * 255;
  return [n, o, r];
};
h.rgb.hex = function(t) {
  const n = (((Math.round(t[0]) & 255) << 16) + ((Math.round(t[1]) & 255) << 8) + (Math.round(t[2]) & 255)).toString(16).toUpperCase();
  return "000000".substring(n.length) + n;
};
h.hex.rgb = function(t) {
  const e = t.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
  if (!e)
    return [0, 0, 0];
  let n = e[0];
  e[0].length === 3 && (n = n.split("").map((i) => i + i).join(""));
  const o = parseInt(n, 16), r = o >> 16 & 255, c = o >> 8 & 255, s = o & 255;
  return [r, c, s];
};
h.rgb.hcg = function(t) {
  const e = t[0] / 255, n = t[1] / 255, o = t[2] / 255, r = Math.max(Math.max(e, n), o), c = Math.min(Math.min(e, n), o), s = r - c;
  let i, l;
  return s < 1 ? i = c / (1 - s) : i = 0, s <= 0 ? l = 0 : r === e ? l = (n - o) / s % 6 : r === n ? l = 2 + (o - e) / s : l = 4 + (e - n) / s, l /= 6, l %= 1, [l * 360, s * 100, i * 100];
};
h.hsl.hcg = function(t) {
  const e = t[1] / 100, n = t[2] / 100, o = n < 0.5 ? 2 * e * n : 2 * e * (1 - n);
  let r = 0;
  return o < 1 && (r = (n - 0.5 * o) / (1 - o)), [t[0], o * 100, r * 100];
};
h.hsv.hcg = function(t) {
  const e = t[1] / 100, n = t[2] / 100, o = e * n;
  let r = 0;
  return o < 1 && (r = (n - o) / (1 - o)), [t[0], o * 100, r * 100];
};
h.hcg.rgb = function(t) {
  const e = t[0] / 360, n = t[1] / 100, o = t[2] / 100;
  if (n === 0)
    return [o * 255, o * 255, o * 255];
  const r = [0, 0, 0], c = e % 1 * 6, s = c % 1, i = 1 - s;
  let l = 0;
  switch (Math.floor(c)) {
    case 0:
      r[0] = 1, r[1] = s, r[2] = 0;
      break;
    case 1:
      r[0] = i, r[1] = 1, r[2] = 0;
      break;
    case 2:
      r[0] = 0, r[1] = 1, r[2] = s;
      break;
    case 3:
      r[0] = 0, r[1] = i, r[2] = 1;
      break;
    case 4:
      r[0] = s, r[1] = 0, r[2] = 1;
      break;
    default:
      r[0] = 1, r[1] = 0, r[2] = i;
  }
  return l = (1 - n) * o, [
    (n * r[0] + l) * 255,
    (n * r[1] + l) * 255,
    (n * r[2] + l) * 255
  ];
};
h.hcg.hsv = function(t) {
  const e = t[1] / 100, n = t[2] / 100, o = e + n * (1 - e);
  let r = 0;
  return o > 0 && (r = e / o), [t[0], r * 100, o * 100];
};
h.hcg.hsl = function(t) {
  const e = t[1] / 100, o = t[2] / 100 * (1 - e) + 0.5 * e;
  let r = 0;
  return o > 0 && o < 0.5 ? r = e / (2 * o) : o >= 0.5 && o < 1 && (r = e / (2 * (1 - o))), [t[0], r * 100, o * 100];
};
h.hcg.hwb = function(t) {
  const e = t[1] / 100, n = t[2] / 100, o = e + n * (1 - e);
  return [t[0], (o - e) * 100, (1 - o) * 100];
};
h.hwb.hcg = function(t) {
  const e = t[1] / 100, o = 1 - t[2] / 100, r = o - e;
  let c = 0;
  return r < 1 && (c = (o - r) / (1 - r)), [t[0], r * 100, c * 100];
};
h.apple.rgb = function(t) {
  return [t[0] / 65535 * 255, t[1] / 65535 * 255, t[2] / 65535 * 255];
};
h.rgb.apple = function(t) {
  return [t[0] / 255 * 65535, t[1] / 255 * 65535, t[2] / 255 * 65535];
};
h.gray.rgb = function(t) {
  return [t[0] / 100 * 255, t[0] / 100 * 255, t[0] / 100 * 255];
};
h.gray.hsl = function(t) {
  return [0, 0, t[0]];
};
h.gray.hsv = h.gray.hsl;
h.gray.hwb = function(t) {
  return [0, 100, t[0]];
};
h.gray.cmyk = function(t) {
  return [0, 0, 0, t[0]];
};
h.gray.lab = function(t) {
  return [t[0], 0, 0];
};
h.gray.hex = function(t) {
  const e = Math.round(t[0] / 100 * 255) & 255, o = ((e << 16) + (e << 8) + e).toString(16).toUpperCase();
  return "000000".substring(o.length) + o;
};
h.rgb.gray = function(t) {
  return [(t[0] + t[1] + t[2]) / 3 / 255 * 100];
};
const Tt = ke;
function Va() {
  const t = {}, e = Object.keys(Tt);
  for (let n = e.length, o = 0; o < n; o++)
    t[e[o]] = {
      // http://jsperf.com/1-vs-infinity
      // micro-opt, but this is simple.
      distance: -1,
      parent: null
    };
  return t;
}
function Ka(t) {
  const e = Va(), n = [t];
  for (e[t].distance = 0; n.length; ) {
    const o = n.pop(), r = Object.keys(Tt[o]);
    for (let c = r.length, s = 0; s < c; s++) {
      const i = r[s], l = e[i];
      l.distance === -1 && (l.distance = e[o].distance + 1, l.parent = o, n.unshift(i));
    }
  }
  return e;
}
function Ya(t, e) {
  return function(n) {
    return e(t(n));
  };
}
function qa(t, e) {
  const n = [e[t].parent, t];
  let o = Tt[e[t].parent][t], r = e[t].parent;
  for (; e[r].parent; )
    n.unshift(e[r].parent), o = Ya(Tt[e[r].parent][r], o), r = e[r].parent;
  return o.conversion = n, o;
}
var Ua = function(t) {
  const e = Ka(t), n = {}, o = Object.keys(e);
  for (let r = o.length, c = 0; c < r; c++) {
    const s = o[c];
    e[s].parent !== null && (n[s] = qa(s, e));
  }
  return n;
};
const It = ke, Ga = Ua, st = {}, Xa = Object.keys(It);
function Qa(t) {
  const e = function(...n) {
    const o = n[0];
    return o == null ? o : (o.length > 1 && (n = o), t(n));
  };
  return "conversion" in t && (e.conversion = t.conversion), e;
}
function Ja(t) {
  const e = function(...n) {
    const o = n[0];
    if (o == null)
      return o;
    o.length > 1 && (n = o);
    const r = t(n);
    if (typeof r == "object")
      for (let c = r.length, s = 0; s < c; s++)
        r[s] = Math.round(r[s]);
    return r;
  };
  return "conversion" in t && (e.conversion = t.conversion), e;
}
Xa.forEach((t) => {
  st[t] = {}, Object.defineProperty(st[t], "channels", { value: It[t].channels }), Object.defineProperty(st[t], "labels", { value: It[t].labels });
  const e = Ga(t);
  Object.keys(e).forEach((o) => {
    const r = e[o];
    st[t][o] = Ja(r), st[t][o].raw = Qa(r);
  });
});
var Za = st;
const ct = Ha, U = Za, _e = [
  // To be honest, I don't really feel like keyword belongs in color convert, but eh.
  "keyword",
  // Gray conflicts with some method names, and has its own method defined.
  "gray",
  // Shouldn't really be in color-convert either...
  "hex"
], Ht = {};
for (const t of Object.keys(U))
  Ht[[...U[t].labels].sort().join("")] = t;
const $t = {};
function H(t, e) {
  if (!(this instanceof H))
    return new H(t, e);
  if (e && e in _e && (e = null), e && !(e in U))
    throw new Error("Unknown model: " + e);
  let n, o;
  if (t == null)
    this.model = "rgb", this.color = [0, 0, 0], this.valpha = 1;
  else if (t instanceof H)
    this.model = t.model, this.color = [...t.color], this.valpha = t.valpha;
  else if (typeof t == "string") {
    const r = ct.get(t);
    if (r === null)
      throw new Error("Unable to parse color from string: " + t);
    this.model = r.model, o = U[this.model].channels, this.color = r.value.slice(0, o), this.valpha = typeof r.value[o] == "number" ? r.value[o] : 1;
  } else if (t.length > 0) {
    this.model = e || "rgb", o = U[this.model].channels;
    const r = Array.prototype.slice.call(t, 0, o);
    this.color = jt(r, o), this.valpha = typeof t[o] == "number" ? t[o] : 1;
  } else if (typeof t == "number")
    this.model = "rgb", this.color = [
      t >> 16 & 255,
      t >> 8 & 255,
      t & 255
    ], this.valpha = 1;
  else {
    this.valpha = 1;
    const r = Object.keys(t);
    "alpha" in t && (r.splice(r.indexOf("alpha"), 1), this.valpha = typeof t.alpha == "number" ? t.alpha : 0);
    const c = r.sort().join("");
    if (!(c in Ht))
      throw new Error("Unable to parse color from object: " + JSON.stringify(t));
    this.model = Ht[c];
    const { labels: s } = U[this.model], i = [];
    for (n = 0; n < s.length; n++)
      i.push(t[s[n]]);
    this.color = jt(i);
  }
  if ($t[this.model])
    for (o = U[this.model].channels, n = 0; n < o; n++) {
      const r = $t[this.model][n];
      r && (this.color[n] = r(this.color[n]));
    }
  this.valpha = Math.max(0, Math.min(1, this.valpha)), Object.freeze && Object.freeze(this);
}
H.prototype = {
  toString() {
    return this.string();
  },
  toJSON() {
    return this[this.model]();
  },
  string(t) {
    let e = this.model in ct.to ? this : this.rgb();
    e = e.round(typeof t == "number" ? t : 1);
    const n = e.valpha === 1 ? e.color : [...e.color, this.valpha];
    return ct.to[e.model](n);
  },
  percentString(t) {
    const e = this.rgb().round(typeof t == "number" ? t : 1), n = e.valpha === 1 ? e.color : [...e.color, this.valpha];
    return ct.to.rgb.percent(n);
  },
  array() {
    return this.valpha === 1 ? [...this.color] : [...this.color, this.valpha];
  },
  object() {
    const t = {}, { channels: e } = U[this.model], { labels: n } = U[this.model];
    for (let o = 0; o < e; o++)
      t[n[o]] = this.color[o];
    return this.valpha !== 1 && (t.alpha = this.valpha), t;
  },
  unitArray() {
    const t = this.rgb().color;
    return t[0] /= 255, t[1] /= 255, t[2] /= 255, this.valpha !== 1 && t.push(this.valpha), t;
  },
  unitObject() {
    const t = this.rgb().object();
    return t.r /= 255, t.g /= 255, t.b /= 255, this.valpha !== 1 && (t.alpha = this.valpha), t;
  },
  round(t) {
    return t = Math.max(t || 0, 0), new H([...this.color.map(ei(t)), this.valpha], this.model);
  },
  alpha(t) {
    return t !== void 0 ? new H([...this.color, Math.max(0, Math.min(1, t))], this.model) : this.valpha;
  },
  // Rgb
  red: A("rgb", 0, z(255)),
  green: A("rgb", 1, z(255)),
  blue: A("rgb", 2, z(255)),
  hue: A(["hsl", "hsv", "hsl", "hwb", "hcg"], 0, (t) => (t % 360 + 360) % 360),
  saturationl: A("hsl", 1, z(100)),
  lightness: A("hsl", 2, z(100)),
  saturationv: A("hsv", 1, z(100)),
  value: A("hsv", 2, z(100)),
  chroma: A("hcg", 1, z(100)),
  gray: A("hcg", 2, z(100)),
  white: A("hwb", 1, z(100)),
  wblack: A("hwb", 2, z(100)),
  cyan: A("cmyk", 0, z(100)),
  magenta: A("cmyk", 1, z(100)),
  yellow: A("cmyk", 2, z(100)),
  black: A("cmyk", 3, z(100)),
  x: A("xyz", 0, z(95.047)),
  y: A("xyz", 1, z(100)),
  z: A("xyz", 2, z(108.833)),
  l: A("lab", 0, z(100)),
  a: A("lab", 1),
  b: A("lab", 2),
  keyword(t) {
    return t !== void 0 ? new H(t) : U[this.model].keyword(this.color);
  },
  hex(t) {
    return t !== void 0 ? new H(t) : ct.to.hex(this.rgb().round().color);
  },
  hexa(t) {
    if (t !== void 0)
      return new H(t);
    const e = this.rgb().round().color;
    let n = Math.round(this.valpha * 255).toString(16).toUpperCase();
    return n.length === 1 && (n = "0" + n), ct.to.hex(e) + n;
  },
  rgbNumber() {
    const t = this.rgb().color;
    return (t[0] & 255) << 16 | (t[1] & 255) << 8 | t[2] & 255;
  },
  luminosity() {
    const t = this.rgb().color, e = [];
    for (const [n, o] of t.entries()) {
      const r = o / 255;
      e[n] = r <= 0.04045 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4;
    }
    return 0.2126 * e[0] + 0.7152 * e[1] + 0.0722 * e[2];
  },
  contrast(t) {
    const e = this.luminosity(), n = t.luminosity();
    return e > n ? (e + 0.05) / (n + 0.05) : (n + 0.05) / (e + 0.05);
  },
  level(t) {
    const e = this.contrast(t);
    return e >= 7 ? "AAA" : e >= 4.5 ? "AA" : "";
  },
  isDark() {
    const t = this.rgb().color;
    return (t[0] * 2126 + t[1] * 7152 + t[2] * 722) / 1e4 < 128;
  },
  isLight() {
    return !this.isDark();
  },
  negate() {
    const t = this.rgb();
    for (let e = 0; e < 3; e++)
      t.color[e] = 255 - t.color[e];
    return t;
  },
  lighten(t) {
    const e = this.hsl();
    return e.color[2] += e.color[2] * t, e;
  },
  darken(t) {
    const e = this.hsl();
    return e.color[2] -= e.color[2] * t, e;
  },
  saturate(t) {
    const e = this.hsl();
    return e.color[1] += e.color[1] * t, e;
  },
  desaturate(t) {
    const e = this.hsl();
    return e.color[1] -= e.color[1] * t, e;
  },
  whiten(t) {
    const e = this.hwb();
    return e.color[1] += e.color[1] * t, e;
  },
  blacken(t) {
    const e = this.hwb();
    return e.color[2] += e.color[2] * t, e;
  },
  grayscale() {
    const t = this.rgb().color, e = t[0] * 0.3 + t[1] * 0.59 + t[2] * 0.11;
    return H.rgb(e, e, e);
  },
  fade(t) {
    return this.alpha(this.valpha - this.valpha * t);
  },
  opaquer(t) {
    return this.alpha(this.valpha + this.valpha * t);
  },
  rotate(t) {
    const e = this.hsl();
    let n = e.color[0];
    return n = (n + t) % 360, n = n < 0 ? 360 + n : n, e.color[0] = n, e;
  },
  mix(t, e) {
    if (!t || !t.rgb)
      throw new Error('Argument to "mix" was not a Color instance, but rather an instance of ' + typeof t);
    const n = t.rgb(), o = this.rgb(), r = e === void 0 ? 0.5 : e, c = 2 * r - 1, s = n.alpha() - o.alpha(), i = ((c * s === -1 ? c : (c + s) / (1 + c * s)) + 1) / 2, l = 1 - i;
    return H.rgb(
      i * n.red() + l * o.red(),
      i * n.green() + l * o.green(),
      i * n.blue() + l * o.blue(),
      n.alpha() * r + o.alpha() * (1 - r)
    );
  }
};
for (const t of Object.keys(U)) {
  if (_e.includes(t))
    continue;
  const { channels: e } = U[t];
  H.prototype[t] = function(...n) {
    return this.model === t ? new H(this) : n.length > 0 ? new H(n, t) : new H([...ni(U[this.model][t].raw(this.color)), this.valpha], t);
  }, H[t] = function(...n) {
    let o = n[0];
    return typeof o == "number" && (o = jt(n, e)), new H(o, t);
  };
}
function ti(t, e) {
  return Number(t.toFixed(e));
}
function ei(t) {
  return function(e) {
    return ti(e, t);
  };
}
function A(t, e, n) {
  t = Array.isArray(t) ? t : [t];
  for (const o of t)
    ($t[o] || ($t[o] = []))[e] = n;
  return t = t[0], function(o) {
    let r;
    return o !== void 0 ? (n && (o = n(o)), r = this[t](), r.color[e] = o, r) : (r = this[t]().color[e], n && (r = n(r)), r);
  };
}
function z(t) {
  return function(e) {
    return Math.max(0, Math.min(t, e));
  };
}
function ni(t) {
  return Array.isArray(t) ? t : [t];
}
function jt(t, e) {
  for (let n = 0; n < e; n++)
    typeof t[n] != "number" && (t[n] = 0);
  return t;
}
var oi = H;
const Jt = /* @__PURE__ */ Ve(oi);
function Vt() {
  return Vt = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var o in n)
        ({}).hasOwnProperty.call(n, o) && (t[o] = n[o]);
    }
    return t;
  }, Vt.apply(null, arguments);
}
const Lt = "#FFFFFF", ri = "#212121", lt = R.forwardRef(({
  children: t,
  icon: e,
  ...n
}, o) => {
  const r = _("brand_color"), c = Jt(r).hex() === Lt, s = c ? ri : r;
  `${Nt(r).join(",")}`;
  const i = `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" style="stroke-width: 3" ><path d="M5 12H19" stroke="${encodeURIComponent(c ? s : Lt)}" /></svg>`, l = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" style="stroke-width: 3" ><path d="M19 6L9.375 17L5 12" stroke="${encodeURIComponent(c ? s : Lt)}" /></svg>`;
  return a("label", {
    css: [{
      display: "flex !important",
      cursor: "pointer",
      alignItems: "center",
      "--tw-text-opacity": "1 !important",
      color: "rgb(33 33 33 / var(--tw-text-opacity)) !important"
    }, n.disabled ? {
      cursor: "not-allowed"
    } : null]
  }, a("input", Vt({
    css: [{
      margin: "0 !important",
      height: "18px",
      width: "18px",
      flexShrink: "0",
      cursor: "pointer",
      appearance: "none",
      borderRadius: "3px",
      borderWidth: "1px",
      borderStyle: "solid",
      "--tw-bg-opacity": "1",
      backgroundColor: "rgb(255 255 255 / var(--tw-bg-opacity))"
    }, "border: #DDDDDD 1px solid;", `:checked {
            border-color: #DDDDDD;
            background-size: contain;
            background-repeat: no-repeat;
            background-color: ${r};
            background-image: url('data:image/svg+xml;utf8,${(e ?? "check") === "check" ? l : i}');
          }`, `:focus {
            outline: none !important;
            outline-offset: unset !important;
            box-shadow: none !important;
          }`, `:disabled {
            background-color: #f5f5f5;
            border-color: #e5e5e5;
          }`]
  }, n, {
    ref: o,
    type: "checkbox"
  })), t && a("span", {
    css: {
      marginLeft: "0.5rem"
    }
  }, t));
});
function Kt() {
  return Kt = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var o in n)
        ({}).hasOwnProperty.call(n, o) && (t[o] = n[o]);
    }
    return t;
  }, Kt.apply(null, arguments);
}
const Pt = ({
  svgPlainText: t,
  iconWidth: e,
  iconHeight: n,
  ...o
}) => a("label", Kt({}, o, {
  css: [{
    height: "100%",
    width: "100%",
    cursor: "pointer",
    paddingLeft: "36px"
  }, `border-color: transparent;
    background-size: ${e ?? 20}px ${n ?? 20}px;
    background-repeat: no-repeat;
    background-position: ${30 - (e ?? 20)}px center;
    background-image: url('data:image/svg+xml;utf8,${t}');`, o.css]
}), o.children);
function Yt() {
  return Yt = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var o in n)
        ({}).hasOwnProperty.call(n, o) && (t[o] = n[o]);
    }
    return t;
  }, Yt.apply(null, arguments);
}
const ai = "#FFFFFF", ii = "#212121", qt = R.forwardRef(({
  children: t,
  ...e
}, n) => {
  const o = _("brand_color"), r = Jt(o).hex() === ai;
  return `${Nt(o).join(",")}`, a("label", {
    css: [{
      display: "flex !important",
      cursor: "pointer",
      alignItems: "center",
      "--tw-text-opacity": "1 !important",
      color: "rgb(33 33 33 / var(--tw-text-opacity)) !important"
    }, e.disabled ? {
      cursor: "not-allowed"
    } : null]
  }, a("input", Yt({
    css: [{
      margin: "0px !important",
      height: "18px",
      width: "18px",
      flexShrink: "0",
      cursor: "pointer",
      appearance: "none",
      borderRadius: "50%",
      borderWidth: "1px",
      borderStyle: "solid",
      "--tw-bg-opacity": "1",
      backgroundColor: "rgb(255 255 255 / var(--tw-bg-opacity))"
    }, "border: #dddddd 1px solid;", `:checked {
              background-size: contain;
              background-repeat: no-repeat;
              background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" style="fill: ${encodeURIComponent(o)}" width="24" height="24" viewBox="0 0 24 24"><circle cx="12" cy="12" r="7" ${r ? `stroke="${encodeURIComponent(ii)}" stroke-width="3"` : ""}/></svg>');
            }`, `:focus {
            outline: none !important;
            outline-offset: unset !important;
            box-shadow: none !important;
          }`, `:disabled {
            background-color: #f5f5f5;
            border-color: #e5e5e5;
          }`]
  }, e, {
    ref: n,
    type: "radio"
  })), t);
});
function Ut() {
  return Ut = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var o in n)
        ({}).hasOwnProperty.call(n, o) && (t[o] = n[o]);
    }
    return t;
  }, Ut.apply(null, arguments);
}
const pt = (t) => {
  const e = _("body_color"), n = `rgba(${Nt(e).join(",")}, 0.4)`;
  return a("label", {
    css: [{
      position: "relative",
      width: "100%",
      borderWidth: "1px",
      borderStyle: "solid",
      "--tw-border-opacity": "1",
      borderColor: "rgb(221 221 221 / var(--tw-border-opacity))"
    }, t.css]
  }, a("select", Ut({
    css: [{
      minHeight: "36px",
      width: "100%",
      cursor: "pointer",
      appearance: "none",
      "--tw-bg-opacity": "1 !important",
      backgroundColor: "rgb(255 255 255 / var(--tw-bg-opacity)) !important",
      padding: "0.5em 0.75em",
      fontSize: "14px",
      "--tw-text-opacity": "1",
      color: "rgb(33 33 33 / var(--tw-text-opacity))"
    }, `
background-size: 20px 20px;
background-repeat: no-repeat;
background-position: right 4px center;
background-image: url('data:image/svg+xml;utf8,<svg width="24" height="24" viewBox="0 0 24 24" fill="${n}" stroke="${n}" xmlns="http://www.w3.org/2000/svg"><path d="M8.71466 8.91003C8.19283 8.91003 7.93192 8.91003 7.79572 9.01749C7.67722 9.11097 7.60729 9.25298 7.60544 9.40391C7.60331 9.57738 7.7624 9.78419 8.08056 10.1978L11.4559 14.5857C11.6716 14.8662 11.7795 15.0064 11.911 15.0568C12.0262 15.101 12.1537 15.101 12.2689 15.0568C12.4004 15.0064 12.5083 14.8662 12.7241 14.5857L16.0994 10.1978C16.4175 9.78419 16.5766 9.57738 16.5745 9.40391C16.5727 9.25298 16.5027 9.11097 16.3842 9.01749C16.248 8.91003 15.9871 8.91003 15.4653 8.91003H8.71466Z" /></svg>');`]
  }, t), t.children));
}, si = 7, tl = 1024 * 1024 * 30, ci = 16, li = 2, el = 500, nl = 100, ol = {
  // AED	아랍에미리트 디르함	2
  AED: 2,
  // AUD	호주 달러	2
  AUD: 2,
  // CAD	캐나다 달러	2
  CAD: 2,
  // CHF	스위스 프랑	2
  CHF: 2,
  // CNY	중국 위안	2
  CNY: 2,
  // CZK	체코 코루나	0
  CZK: 0,
  // DKK	덴마크 크로네	0
  DKK: 0,
  // EUR	유로	2
  EUR: 2,
  // GBP	영국 파운드	2
  GBP: 2,
  // HKD	홍콩 달러	2
  HKD: 2,
  // HUF	헝가리 포린트	3
  HUF: 3,
  // ILS	이스라엘 셰켈	0
  ILS: 0,
  // JPY	일본 엔	0
  JPY: 0,
  // KRW	원화	0
  KRW: 0,
  // MXN	멕시코 페소	2
  MXN: 2,
  // MYR	말레이시아 링깃	2
  MYR: 2,
  // NOK	노르웨이 크로네	2
  NOK: 2,
  // NZD	뉴질랜드 달러	2
  NZD: 2,
  // PHP	필리핀 페소	0
  PHP: 0,
  // PLN	폴란드 즈워티	2
  PLN: 2,
  // RUB	러시아 루블	2
  RUB: 2,
  // SEK	스웨덴 크로네	2
  SEK: 2,
  // SGD	싱가포르 달러	2
  SGD: 2,
  // THB	태국 밧	2
  THB: 2,
  // TWD	대만 달러	0
  TWD: 0,
  // USD	미국 달러	2
  USD: 2,
  // VND	베트남 동	0
  VND: 0
}, di = {
  name: "imweb Sans",
  import: "https://vendor.imtest.me/fonts/imweb-sans/imweb-sans.css",
  family: "imweb Sans",
  position: "0 -2174px",
  lang: ""
}, mi = {
  name: "기본",
  import: "",
  family: "Apple SD Gothic Neo, Malgun Gothic, Nanum Gothic, Meiryo, sans-serif, serif, Arial",
  position: "",
  lang: ""
}, pi = {
  name: "검은고딕",
  import: "https://vendor.imtest.me/css/blackhansans.css",
  family: "BlackHanSans",
  position: "0 -1816px",
  lang: "KR"
}, ui = {
  name: "경기천년바탕",
  import: "https://vendor.imtest.me/css/gyeonggibattang.css",
  family: "GyeonggiBattang",
  position: "0 -1894px",
  lang: "KR"
}, hi = {
  name: "고도 마음체",
  import: "https://vendor.imtest.me/css/godomaum.css",
  family: "godoMaum",
  position: "0 7px",
  lang: "KR"
}, gi = {
  name: "구기",
  import: "https://vendor.imtest.me/css/gugi.css",
  family: "Gugi",
  position: "0 -20px",
  lang: "KR"
}, fi = {
  name: "나눔손글씨 붓",
  import: "https://vendor.imtest.me/css/nanumbrushscript.css?v1",
  family: "NanumBrush",
  position: "0 -122px",
  lang: "KR"
}, bi = {
  name: "나눔손글씨 펜",
  import: "https://vendor.imtest.me/css/nanumpenscript.css?v1",
  family: "NanumPen",
  position: "0 -149px",
  lang: "KR"
}, yi = {
  name: "나눔스퀘어",
  import: "https://vendor.imtest.me/css/nanumSquare.css?v1",
  family: "NanumSquare",
  position: "0 -175px",
  lang: "KR"
}, xi = {
  name: "나눔스퀘어 라운드",
  import: "https://vendor.imtest.me/css/nanumsquareround.css?v1",
  family: "NanumSquareRoundR",
  position: "0 -201px",
  lang: "KR"
}, wi = {
  name: "넥슨 Lv.1 고딕",
  import: "https://vendor.imtest.me/css/nexongothic.css",
  family: "Nexon Gothic",
  position: "0 -1687px",
  lang: "KR"
}, vi = {
  name: "넥슨 Lv.2 고딕",
  import: "https://vendor.imtest.me/css/nexongothic2.css",
  family: "NexonLv2Gothic",
  position: "0 -1737px",
  lang: "KR"
}, Si = {
  name: "다음",
  import: "https://vendor.imtest.me/css/daum.css",
  family: "Daum",
  position: "0 -228px",
  lang: "KR"
}, Ci = {
  name: "둥근모",
  import: "https://vendor.imtest.me/css/dunggeunmo.css",
  family: "DungGeunMo",
  position: "0 -253px",
  lang: "KR"
}, ki = {
  name: "레코체",
  import: "https://vendor.imtest.me/css/reko.css",
  family: "reko",
  position: "0 -1634px",
  lang: "KR"
}, _i = {
  name: "리디바탕",
  import: "https://vendor.imtest.me/css/ridibatang.css",
  family: "RIDIBatang",
  position: "0 -1789px",
  lang: "KR"
}, Pi = {
  name: "맑은고딕",
  family: "Malgun Gothic",
  position: "0 -279px",
  lang: "KR"
}, Mi = {
  name: "문체부 쓰기 정체",
  import: "https://vendor.imtest.me/css/msugijeong.css",
  family: "MSugiJeong",
  position: "0 -305px",
  lang: "KR"
}, Ti = {
  name: "민국체",
  import: "https://vendor.imtest.me/css/yoonminguk.css",
  family: "YoonMinguk",
  position: "0 -1920px",
  lang: "KR"
}, $i = {
  name: "바탕",
  family: "batang",
  position: "0 -357px",
  lang: "KR"
}, Wi = {
  name: "비비트리 고딕",
  import: "https://vendor.imtest.me/css/bbtreegl.css?v3",
  family: "BBTreeG_R",
  position: "0 -436px",
  lang: "KR"
}, Ni = {
  name: "비비트리 손글씨",
  import: "https://vendor.imtest.me/css/bbtreecl.css",
  family: "BBTreeCL",
  position: "0 -461px",
  lang: "KR"
}, Di = {
  name: "빙그레",
  import: "https://vendor.imtest.me/css/binggrae.css",
  family: "Binggrae",
  position: "0 -487px",
  lang: "KR"
}, Ri = {
  name: "빙그레2",
  import: "https://vendor.imtest.me/css/binggrae2.css",
  family: "BinggraeII",
  position: "0 -514px",
  lang: "KR"
}, Bi = {
  name: "빙그레 따옴",
  import: "https://vendor.imtest.me/css/binggrae_taom.css",
  family: "BinggraeTaom",
  position: "0 -540px",
  lang: "KR"
}, Ei = {
  name: "상상제목",
  import: "https://vendor.imtest.me/css/sangsangtitle.css?v1",
  family: "SangSangTitle",
  position: "0 -565px",
  lang: "KR"
}, Ai = {
  name: "스웨거",
  import: "https://vendor.imtest.me/css/swagger.css",
  family: "Swagger",
  position: "0 -591px",
  lang: "KR"
}, Li = {
  name: "서울남산체",
  import: "https://vendor.imtest.me/css/seoulnamsanm.css",
  family: "SeoulNamsanJungM",
  position: "0 -617px",
  lang: "KR"
}, zi = {
  name: "서울한강체",
  import: "https://vendor.imtest.me/css/seoulhangang.css",
  family: "SeoulHangangJungM",
  position: "0 -643px",
  lang: "KR"
}, Fi = {
  name: "스포카 한 산스",
  import: "https://vendor.imtest.me/css/spocahansans.css",
  family: "Spoqa Han Sans",
  position: "0 -669px",
  lang: "KR"
}, Oi = {
  name: "순바탕체",
  import: "https://vendor.imtest.me/css/sunbatang.css",
  family: "SunBatang",
  position: "0 -1322px",
  lang: "KR"
}, Ii = {
  name: "아리따돋움",
  import: "https://vendor.imtest.me/css/arita.css?v1",
  family: "aritadm",
  position: "0 -694px",
  lang: "KR"
}, Hi = {
  name: "아리따부리",
  import: "https://vendor.imtest.me/css/arita_buri.css",
  family: "Arita-buri",
  position: "0 -720px",
  lang: "KR"
}, ji = {
  name: "여기어때 잘난체",
  import: "https://vendor.imtest.me/css/jalnan.css",
  family: "Jalnan",
  position: "0 -1763px",
  lang: "KR"
}, Vi = {
  name: "에스코어 드림",
  import: "https://vendor.imtest.me/css/score_dream.css",
  family: "S-CoreDream-4Regular",
  position: "0 -1347px",
  lang: "KR"
}, Ki = {
  name: "오성과한음",
  import: "https://vendor.imtest.me/css/oseongandhaneum.css",
  family: "OSeongandHanEum",
  position: "0 -747px",
  lang: "KR"
}, Yi = {
  name: "조선일보 명조",
  import: "https://vendor.imtest.me/css/chosun_ilbo_myungjo.css",
  family: "chosun_ilbo_myungjo",
  position: "0 -826px",
  lang: "KR"
}, qi = {
  name: "중나좋체",
  import: "https://vendor.imtest.me/css/joongnajoche.css",
  family: "Joongnajoche",
  position: "0 -1608px",
  lang: "KR"
}, Ui = {
  name: "제주고딕",
  import: "https://vendor.imtest.me/css/jejugothic.css?v1",
  family: "JejuGothic",
  position: "0 -851px",
  lang: "KR"
}, Gi = {
  name: "제주한라산",
  import: "https://vendor.imtest.me/css/jejuhallasan.css?v1",
  family: "JejuHallasan",
  position: "0 -877px",
  lang: "KR"
}, Xi = {
  name: "제주명조",
  import: "https://vendor.imtest.me/css/jejumyeongjo.css?v1",
  family: "JejuMyeongjo",
  position: "0 -903px",
  lang: "KR"
}, Qi = {
  name: "카카오",
  import: "https://vendor.imtest.me/css/kakao.css",
  family: "Kakao",
  position: "0 -930px",
  lang: "KR"
}, Ji = {
  name: "티몬 몬소리",
  import: "https://vendor.imtest.me/css/tmon_monsori.css?v1",
  family: "TmonMonsori",
  position: "0 -956px",
  lang: "KR"
}, Zi = {
  name: "한돈 삼겹살체",
  import: "https://vendor.imtest.me/css/handon.css?v1",
  family: "handon",
  position: "0 -1842px",
  lang: "KR"
}, ts = {
  name: "해바라기",
  import: "https://vendor.imtest.me/css/sunflower.css?v1",
  family: "Sunflower",
  position: "0 -982px",
  lang: "KR"
}, es = {
  name: "BM 기랑해랑체",
  import: "https://vendor.imtest.me/css/bm_kiranghaerang.css?v1",
  family: "BMKIRANGHAERANG",
  position: "0 -1007px",
  lang: "KR"
}, ns = {
  name: "BM 도현체",
  import: "https://vendor.imtest.me/css/bm_dohyeon.css",
  family: "BM DOHYEON",
  position: "0 -1034px",
  lang: "KR"
}, os = {
  name: "BM 연성체",
  import: "https://vendor.imtest.me/css/bm_yeonsung.css",
  family: "BM YEONSUNG",
  position: "0 -1060px",
  lang: "KR"
}, rs = {
  name: "BM 주아체",
  import: "https://vendor.imtest.me/css/bm_jua.css",
  family: "BM JUA",
  position: "0 -1085px",
  lang: "KR"
}, as = {
  name: "BM 한나체",
  import: "https://vendor.imtest.me/css/bm_hanna.css",
  family: "BM HANNA",
  position: "0 -1112px",
  lang: "KR"
}, is = {
  name: "D2Coding",
  import: "https://vendor.imtest.me/css/d2coding.css",
  family: "D2Coding",
  position: "0 -1971px",
  lang: "KR"
}, ss = {
  name: "G마켓 산스",
  import: "https://vendor.imtest.me/css/gmarket.css?v1",
  family: "GmarketSans",
  position: "0 -1868px",
  lang: "KR"
}, cs = {
  name: "HY 고딕 A1",
  import: "https://vendor.imtest.me/css/a1gothic.css?v1",
  family: "GothicA1",
  position: "0 -1998px",
  lang: "KR"
}, ls = {
  name: "Mapo금빛나루",
  import: "https://vendor.imtest.me/css/mapogoldenpier.css?v1",
  family: "MapoGoldenPier",
  position: "0 -1711px",
  lang: "KR"
}, ds = {
  name: "Mapo꽃섬",
  import: "https://vendor.imtest.me/css/mapo.css?v1",
  family: "MapoFlowerIsland",
  position: "0 -1659px",
  lang: "KR"
}, ms = {
  name: "Pretendard",
  import: "https://vendor.imtest.me/css/pretendard.css",
  family: "Pretendard",
  position: "0 -2150px",
  lang: "KR"
}, ps = {
  name: "Kokoro (日本語)",
  import: "https://vendor.imtest.me/css/kokoro.css",
  family: "Kokoro",
  position: "0 -1269px",
  lang: "JA"
}, us = {
  name: "王漢宗空疊圓繁",
  import: "https://vendor.imtest.me/css/hanwangkandayan.css",
  family: "HanWangKanDaYan",
  position: "0 -1451px",
  lang: "CN"
}, hs = {
  name: "王漢宗細圓體繁",
  import: "https://vendor.imtest.me/css/hanwangyen.css",
  family: "HanWangYenLight",
  position: "0 -1477px",
  lang: "CN"
}, gs = {
  name: "粉圓",
  import: "https://vendor.imtest.me/css/huninn.css",
  family: "huninn",
  position: "0 -2025px",
  lang: "CN"
}, fs = {
  name: "Seto",
  import: "https://vendor.imtest.me/css/seto.css",
  family: "seto",
  position: "0 -2079px",
  lang: "CN"
}, bs = {
  imwebsans: di,
  system: mi,
  blackhansans: pi,
  gyeonggibattang: ui,
  godoMaum: hi,
  gugi: gi,
  "nanumgothiccoding ": {
    name: "나눔고딕코딩",
    import: "https://vendor.imtest.me/css/nanumgothiccoding.css?v1",
    family: "NanumGothicCoding",
    position: "0 -1946px",
    lang: "KR"
  },
  "nanummyeongjo ": {
    name: "나눔명조",
    import: "https://vendor.imtest.me/css/nanummyeongjo.css?v1",
    family: "NanumMyeongjo",
    position: "0 -45px",
    lang: "KR"
  },
  "nanumbarungothic ": {
    name: "나눔바른고딕",
    import: "https://vendor.imtest.me/css/nanumbarungothic.css?v1",
    family: "NanumBarunGothic",
    position: "0 -71px",
    lang: "KR"
  },
  "nanumbarunpen ": {
    name: "나눔바른펜",
    import: "https://vendor.imtest.me/css/nanumbarunpen.css",
    family: "nanumbarunpenr",
    position: "0 -97px",
    lang: "KR"
  },
  nanumScript: fi,
  nanumPenScript: bi,
  nanumSquare: yi,
  nanumSquareRound: xi,
  nexonlv1: wi,
  nexonlv2: vi,
  Daum: Si,
  DungGeunMo: Ci,
  reko: ki,
  RIDIBatang: _i,
  malgungothic: Pi,
  msugijeong: Mi,
  "Sandoll MiSeang": {
    name: "미생체",
    import: "https://vendor.imtest.me/css/sdmiseang.css",
    family: "Sandoll MiSeang",
    position: "0 -332px",
    lang: "KR"
  },
  yoonminguk: Ti,
  default_batang: $i,
  "notosanskr ": {
    name: "본고딕",
    import: "https://vendor.imtest.me/css/notosanskr-hestia.css",
    family: "Noto Sans Korean",
    position: "0 -383px",
    lang: "KR"
  },
  "SourceHanSerifKR ": {
    name: "본명조",
    import: "https://vendor.imtest.me/css/SourceHanSerifKR-Regular.css",
    family: "SourceHanSerifKR",
    position: "0 -409px",
    lang: "KR"
  },
  BBTreeGR: Wi,
  BBTreeCL: Ni,
  Binggrae: Di,
  Binggrae2: Ri,
  BinggraeTaom: Bi,
  SangSangTitle: Ei,
  swagger: Ai,
  SeoulNamsanJungM: Li,
  SeoulHangangJungM: zi,
  spoqahansans: Fi,
  sunbatang: Oi,
  aritadotum: Ii,
  aritaburi: Hi,
  jalnan: ji,
  scoredream: Vi,
  osengandhaneum: Ki,
  "Iropke Batang": {
    name: "이롭게 바탕",
    import: "https://vendor.imtest.me/css/Iropkebatang.css?v1",
    family: "IropkeBatang",
    position: "0 -772px",
    lang: "KR"
  },
  "Yi Sunsin": {
    name: "이순신 돋움",
    import: "https://vendor.imtest.me/css/yi_sun_sin.css",
    family: "Yi Sunsin Medium",
    position: "0 -799px",
    lang: "KR"
  },
  chosun_ilbo_myungjo: Yi,
  joongnajoche: qi,
  jejugothic: Ui,
  jejuhallasan: Gi,
  jejumyeongjo: Xi,
  kakao: Qi,
  TmonMonsori: Ji,
  handon: Zi,
  sunflower: ts,
  bmkiranghaerang: es,
  bmdohyeon: ns,
  bmyeonsung: os,
  bmjua: rs,
  hanna: as,
  D2Coding: is,
  gmarket: ss,
  a1gothic: cs,
  "KoPub Dotum": {
    name: "KoPub 돋움",
    import: "https://vendor.imtest.me/css/kopubdotum.css?v1",
    family: "KoPubDotum",
    position: "0 -1137px",
    lang: "KR"
  },
  "KoPub batang": {
    name: "koPub 바탕",
    import: "https://vendor.imtest.me/css/kopubbatang.css?v1",
    family: "KoPubBatang",
    position: "0 -1163px",
    lang: "KR"
  },
  mapogoldenpier: ls,
  mapo: ds,
  Pretendard: ms,
  "Noto Sans Japanese": {
    name: "Noto Sans (日本語)",
    import: "https://vendor.imtest.me/css/notosansjapanese.css",
    family: "Noto Sans Japanese",
    position: "0 -1189px",
    lang: "JA"
  },
  "Sawarabi Gothic": {
    name: "Sawarabi Gothic (日本語)",
    import: "https://vendor.imtest.me/css/sawarabigothic.css",
    family: "Sawarabi Gothic",
    position: "0 -1215px",
    lang: "JA"
  },
  Kokoro: ps,
  HanWangKanDaYan: us,
  HanWangYenLight: hs,
  "WenQuanYi Micro Hei Mono": {
    name: "文泉驿等宽微米黑",
    import: "https://vendor.imtest.me/css/wenquanyi.css",
    family: "WenQuanYi Micro Hei Mono",
    position: "0 -1503px",
    lang: "CN"
  },
  "Tensentype TongXingF": {
    name: "腾祥童行体繁",
    import: "https://vendor.imtest.me/css/tensentype.css",
    family: "Tensentype TongXingF",
    position: "0 -1529px",
    lang: "CN"
  },
  "Noto Sans SC Sliced": {
    name: "Noto Sans (简体字)",
    import: "//fonts.googleapis.com/earlyaccess/notosansscsliced.css",
    family: "Noto Sans SC Sliced",
    position: "0 -1295px",
    lang: "CN"
  },
  "Noto Sans TC": {
    name: "Noto Sans TC",
    import: "//fonts.googleapis.com/css?family=Noto+Sans+TC&display=swap",
    family: "Noto Sans TC",
    position: "0 -1556px",
    lang: "CN"
  },
  "Noto Serif TC": {
    name: "Noto Serif TC",
    import: "//fonts.googleapis.com/css?family=Noto+Serif+TC&display=swap",
    family: "Noto Serif TC",
    position: "0 -1583px",
    lang: "CN"
  },
  "Droid Sans Fallback": {
    name: "Droid Sans Fallback",
    import: "https://vendor.imtest.me/css/droidsans_fallback.css",
    family: "Droid Sans Fallback",
    position: "0 -1425px",
    lang: "CN"
  },
  huninn: gs,
  "timemachine-wa": {
    name: "時間機器",
    import: "https://vendor.imtest.me/css/timemachine_wa.css",
    family: "timemachine-wa",
    position: "0 -2052px",
    lang: "CN"
  },
  seto: fs,
  "Taipei Sans TC Beta": {
    name: "Taipei Sans TC(繁中)",
    import: "https://vendor.imtest.me/css/TaipeiSansTCBeta.css",
    family: "Taipei Sans TC Beta",
    position: "0 -2101px",
    lang: "CN"
  },
  "Chenyuluoyan Thin": {
    name: "Chenyuluoyan Thin(繁中)",
    import: "https://vendor.imtest.me/css/ChenyuluoyanThin.css",
    family: "ChenYuluoyan Thin",
    position: "0 -2129px",
    lang: "CN"
  }
}, ys = {
  name: "imweb Sans",
  import: "https://vendor.imtest.me/fonts/imweb-sans/imweb-sans.css",
  family: "imweb Sans English",
  position: "0 -1756px",
  lang: ""
}, xs = {
  name: "한글 글꼴에 따름",
  import: "",
  family: "",
  position: ""
}, ws = {
  name: "Abel",
  import: "https://vendor.imtest.me/css/abel.css",
  family: "Abel",
  position: "0 7px"
}, vs = {
  name: "August Sans",
  import: "https://vendor.imtest.me/css/august.css",
  family: "August Sans Reduced",
  position: "0 -1423px"
}, Ss = {
  name: "Alegreya",
  import: "https://vendor.imtest.me/css/alegreya.css",
  family: "Alegreya",
  position: "0 -19px"
}, Cs = {
  name: "Arial",
  import: "",
  family: "Arial",
  position: "0 -45px"
}, ks = {
  name: "Aharoni",
  import: "https://vendor.imtest.me/css/aharoni.css",
  family: "Aharoni",
  position: "0 -71px"
}, _s = {
  name: "Barlow",
  import: "https://vendor.imtest.me/css/barlow.css",
  family: "Barlow",
  position: "0 -98px"
}, Ps = {
  name: "BebasKai",
  import: "https://vendor.imtest.me/css/bebaskai.css",
  family: "Bebas Kai",
  position: "0 -122px"
}, Ms = {
  name: "BebasNeue",
  import: "https://vendor.imtest.me/css/BebasNeue.css",
  family: "BebasNeue",
  position: "0 -149px"
}, Ts = {
  name: "Cardo",
  import: "https://vendor.imtest.me/css/cardo.css",
  family: "Cardo",
  position: "0 -175px"
}, $s = {
  name: "Caudex",
  import: "https://vendor.imtest.me/css/caudex.css",
  family: "Caudex",
  position: "0 -1578px"
}, Ws = {
  name: "Cinzel",
  import: "https://vendor.imtest.me/css/cinzel.css",
  family: "Cinzel",
  position: "0 -1449px"
}, Ns = {
  name: "Chub Gothic",
  import: "https://vendor.imtest.me/css/chubgothic.css",
  family: "Chub Gothic",
  position: "0 -202px"
}, Ds = {
  name: "Cormorant",
  import: "https://vendor.imtest.me/css/cormorant.css",
  family: "Cormorant",
  position: "0 -227px"
}, Rs = {
  name: "Cookie",
  import: "https://vendor.imtest.me/css/cookie.css",
  family: "Cookie",
  position: "0 -253px"
}, Bs = {
  name: "DitaSweet",
  import: "https://vendor.imtest.me/css/ditasweet.css",
  family: "DitaSweet",
  position: "0 -279px"
}, Es = {
  name: "Dosis ",
  import: "https://vendor.imtest.me/css/dosis.css",
  family: "Dosis",
  position: "0 -306px"
}, As = {
  name: "Droid Sans",
  import: "https://vendor.imtest.me/css/droidsans.css",
  family: "Droid Sans",
  position: "0 -331px"
}, Ls = {
  name: "Droid Serif",
  import: "https://vendor.imtest.me/css/droidserif.css",
  family: "Droid Serif",
  position: "0 -356px"
}, zs = {
  name: "Exmouth",
  import: "https://vendor.imtest.me/css/exmouth.css",
  family: "Exmouth",
  position: "0 -408px"
}, Fs = {
  name: "Garamond",
  import: "https://vendor.imtest.me/css/garamond.css",
  family: "EB Garamond",
  position: "0 -435px"
}, Os = {
  name: "Generica",
  import: "https://vendor.imtest.me/css/generica.css",
  family: "Generica",
  position: "0 -1215px"
}, Is = {
  name: "Georgia",
  import: "",
  family: "Georgia",
  position: "0 -460px"
}, Hs = {
  name: "Gilroy",
  import: "https://vendor.imtest.me/css/gilroy.css",
  family: "Gilroy",
  position: "0 -486px"
}, js = {
  name: "Hack",
  import: "https://vendor.imtest.me/css/hack.css",
  family: "Hack",
  position: "0 -1553px"
}, Vs = {
  name: "Helvetica",
  import: "",
  family: "helvetica",
  position: "0 -513px"
}, Ks = {
  name: "Inter",
  import: "https://vendor.imtest.me/css/inter.css",
  family: "Inter",
  position: "0 -1475px"
}, Ys = {
  name: "JetBrains Mono",
  import: "https://vendor.imtest.me/css/jetbrains.css",
  family: "JetBrains Mono",
  position: "0 -1528px"
}, qs = {
  name: "Lato",
  import: "https://vendor.imtest.me/css/lato.css",
  family: "Lato",
  position: "0 -538px"
}, Us = {
  name: "Libre Baskerville",
  import: "https://vendor.imtest.me/css/librebaskerville.css",
  family: "Libre Baskerville",
  position: "0 -565px"
}, Gs = {
  name: "Lora",
  import: "https://vendor.imtest.me/css/lora.css",
  family: "Lora",
  position: "0 -591px"
}, Xs = {
  name: "Mada",
  import: "https://vendor.imtest.me/css/mada.css",
  family: "Mada",
  position: "0 -618px"
}, Qs = {
  name: "Manrope",
  import: "https://vendor.imtest.me/css/manrope.css?v2",
  family: "Manrope",
  position: "0 -1396px"
}, Js = {
  name: "montserrat",
  import: "https://vendor.imtest.me/css/montserrat.css",
  family: "montserrat",
  position: "0 -642px"
}, Zs = {
  name: "Nixie One",
  import: "https://vendor.imtest.me/css/nixieone.css",
  family: "Nixie One",
  position: "0 -669px"
}, tc = {
  name: "Noto Sans",
  import: "https://vendor.imtest.me/css/notosans.css",
  family: "Noto Sans",
  position: "0 -695px"
}, ec = {
  name: "Noto Serif",
  import: "https://vendor.imtest.me/css/notoserif.css",
  family: "Noto Serif",
  position: "0 -721px"
}, nc = {
  name: "Nunito",
  import: "https://vendor.imtest.me/css/nunito.css",
  family: "Nunito",
  position: "0 -1370px"
}, oc = {
  name: "Orbitron",
  import: "https://vendor.imtest.me/css/orbitron.css",
  family: "Orbitron",
  position: "0 -1344px"
}, rc = {
  name: "Oswald",
  import: "https://vendor.imtest.me/css/oswald.css",
  family: "Oswald",
  position: "0 -773px"
}, ac = {
  name: "Philosopher ",
  import: "https://vendor.imtest.me/css/philosopher.css",
  family: "Philosopher",
  position: "0 -797px"
}, ic = {
  name: "Playfair Display",
  import: "https://vendor.imtest.me/css/playfairdisplay.css",
  family: "Playfair Display",
  position: "0 -823px"
}, sc = {
  name: "PT Sans",
  import: "https://vendor.imtest.me/css/ptsans.css",
  family: "PT Sans",
  position: "0 -850px"
}, cc = {
  name: "PT Serif",
  import: "https://vendor.imtest.me/css/ptserif.css",
  family: "PT Serif",
  position: "0 -877px"
}, lc = {
  name: "Questrial",
  import: "https://vendor.imtest.me/css/questrial.css",
  family: "Questrial",
  position: "0 -903px"
}, dc = {
  name: "Quicksand",
  import: "https://vendor.imtest.me/css/quicksans.css",
  family: "Quicksand",
  position: "0 -929px"
}, mc = {
  name: "Roboto",
  import: "https://vendor.imtest.me/css/roboto.css",
  family: "Roboto",
  position: "0 -981px"
}, pc = {
  name: "Roboto Mono",
  import: "https://vendor.imtest.me/css/roboto_mono.css",
  family: "Roboto Mono",
  position: "0 -1501px"
}, uc = {
  name: "SanFrancisco",
  import: "https://vendor.imtest.me/css/sanfrancisco.css",
  family: "San Francisco Display",
  position: "0 -1007px"
}, hc = {
  name: "Tahoma",
  import: "",
  family: "Tahoma",
  position: "0 -1032px"
}, gc = {
  name: "TeXGyreCursor",
  import: "https://vendor.imtest.me/css/texgyrecursor.css",
  family: "TeXGyreCursor",
  position: "0 -1057px"
}, fc = {
  name: "Times New Roman",
  import: "",
  family: "Times New Roman",
  position: "0 -1085px"
}, bc = {
  name: "TmonTium",
  import: "https://vendor.imtest.me/css/tmon_tium.css",
  family: "TmonTium",
  position: "0 -1111px"
}, yc = {
  name: "Ubuntu",
  import: "https://vendor.imtest.me/css/ubuntu.css",
  family: "Ubuntu",
  position: "0 -1137px"
}, xc = {
  name: "Vegur",
  import: "https://vendor.imtest.me/css/vegur.css",
  family: "Vegur",
  position: "0 -1162px"
}, wc = {
  name: "Verdana",
  import: "",
  family: "Verdana",
  position: "0 -1189px"
}, vc = {
  name: "Anton",
  import: "https://vendor.imtest.me/css/anton.css",
  family: "Anton",
  position: "0 -1706px"
}, Sc = {
  name: "Pretendard",
  import: "https://vendor.imtest.me/css/pretendard.css",
  family: "Pretendard English",
  position: "0 -1730px"
}, Cc = {
  imwebsans: ys,
  none: xs,
  abel: ws,
  august: vs,
  alegreya: Ss,
  arial: Cs,
  aharoni: ks,
  Barlow: _s,
  BebasKai: Ps,
  BebasNeue: Ms,
  cardo: Ts,
  Caudex: $s,
  cinzel: Ws,
  chubgothic: Ns,
  Cormorant: Ds,
  cookie: Rs,
  DitaSweet: Bs,
  dosis: Es,
  droidsans: As,
  droidserif: Ls,
  Exmouth: zs,
  Garamond: Fs,
  Generica: Os,
  georgia: Is,
  Gilroy: Hs,
  hack: js,
  Helvetica: Vs,
  inter: Ks,
  jetBrains: Ys,
  lato: qs,
  librebaskerville: Us,
  lora: Gs,
  Mada: Xs,
  manrope: Qs,
  montserrat: Js,
  nixieone: Zs,
  notosans: tc,
  notoserif: ec,
  Nunito: nc,
  "Open Sans": {
    name: "Open Sans",
    import: "https://vendor.imtest.me/css/opensans.css",
    family: "Open Sans",
    position: "0 -745px"
  },
  Orbitron: oc,
  oswald: rc,
  Philosopher: ac,
  playfairdisplay: ic,
  ptsans: sc,
  ptserif: cc,
  Questrial: lc,
  quicksans: dc,
  "raleway ": {
    name: "Raleway",
    import: "https://vendor.imtest.me/css/raleway.css",
    family: "Raleway",
    position: "0 -953px"
  },
  roboto: mc,
  robotomono: pc,
  SanFrancisco: uc,
  tahoma: hc,
  TeXGyreCursor: gc,
  timesnewroman: fc,
  TmonTium: bc,
  Ubuntu: yc,
  vegur: xc,
  verdana: wc,
  "Viaoda Libre": {
    name: "Viaoda Libre",
    import: "https://vendor.imtest.me/css/viaoda_libre.css",
    family: "Viaoda Libre",
    position: "0 -1603px"
  },
  "Lora (Vetnamese)": {
    name: "Lora Vetnamese",
    import: "https://vendor.imtest.me/css/lora_vetnamese.css",
    family: "Lora",
    position: "0 -1266px"
  },
  "Montserrat (Vetnamese)": {
    name: "Montserrat Vetnamese",
    import: "https://vendor.imtest.me/css/montserrat_vetnamese.css",
    family: "Montserrat",
    position: "0 -1318px"
  },
  "OpenSans (Vetnamese)": {
    name: "Open Sans Vetnamese",
    import: "https://vendor.imtest.me/css/opensans_vetnamese.css",
    family: "Open Sans",
    position: "0 -1292px"
  },
  "Roboto (Vetnamese)": {
    name: "Roboto Vetnamese",
    import: "https://vendor.imtest.me/css/roboto_vetnamese.css",
    family: "Roboto",
    position: "0 -1239px"
  },
  "Chiayi City Font": {
    name: "Chiayi City",
    import: "https://vendor.imtest.me/css/ChiayiCityFont.css",
    family: "Chiayi City Font",
    position: "0 -1628px"
  },
  "Bad Script": {
    name: "Bad Script",
    import: "https://vendor.imtest.me/css/bad-script.css",
    family: "Bad Script",
    position: "0 -1654px"
  },
  "Londrina Solid": {
    name: "Londrina Solid",
    import: "https://vendor.imtest.me/css/londrina-solid.css",
    family: "Londrina Solid",
    position: "0 -1680px"
  },
  Anton: vc,
  Pretendard: Sc,
  "IBM Plex Sans": {
    name: "IBM Plex Sans",
    import: "https://vendor.imtest.me/css/IBMPlexSans.css",
    family: "IBM Plex Sans",
    position: "0 -1782px"
  },
  "Antic Didone": {
    name: "Antic Didone",
    import: "https://vendor.imtest.me/css/AnticDidone.css",
    family: "Antic Didone",
    position: "0 -1808px"
  }
}, kc = ["Apple SD Gothic Neo", "Malgun Gothic", "Nanum Gothic", "Noto Sans", "sans-serif"], _c = (t = !1) => {
  var s, i;
  const e = _("font_family"), n = ((s = re(bs)[e]) == null ? void 0 : s.family) || void 0, o = _("font_family_en");
  return [((i = re(Cc)[o]) == null ? void 0 : i.family) || void 0, n, ...kc].filter((l) => typeof l == "string" && l.length > 0).map((l) => typeof l == "string" && / /.test(l) ? `'${l}'` : l).join(", ") + (t ? " !important" : "");
}, Gt = (t = "default", e = {}) => {
  const n = _("brand_color"), o = Jt(n).darken(0.1).hex(), [r] = /(st00|st01|st02)/.exec(_("button_style")) ?? ["st00"], c = _c(), s = "12", i = _("button_letter_spacing"), l = _("button_radius"), p = _("button_italic"), g = _("button_bold"), f = _("button_margin"), u = _("button_font_color"), w = _("button_background_color"), b = _("button_border_color"), y = _("button_hover_font_color"), v = _("button_hover_background_color"), P = _("button_hover_border_color"), F = _("button_border_width"), B = _("button_hover_border_width"), W = _("button_sb_font_color"), m = _("button_sb_background_color"), S = _("button_sb_border_width"), N = _("button_sb_border_color"), V = _("button_sb_hover_font_color"), L = _("button_sb_hover_background_color"), X = _("button_sb_hover_border_width"), ot = _("button_sb_hover_border_color"), Z = /^Y$/.test(_("button_sb_use_set")), rt = {
    st00: "0",
    st01: l,
    st02: String(Number.MAX_SAFE_INTEGER)
  }, C = {
    transition: "all 0.3s normal",
    cursor: "pointer",
    fontFamily: c
  };
  switch (t) {
    case "global": {
      Object.assign(C, {
        fontSize: `${s}px`,
        letterSpacing: `${i}px`,
        borderRadius: `${rt[r]}px`,
        fontStyle: /^Y$/.test(p) ? "italic" : "normal",
        fontWeight: /^Y$/.test(g) ? "bold" : "normal",
        lineHeight: "1.2",
        padding: `10px ${f}px`,
        color: u,
        backgroundColor: w,
        borderColor: b,
        borderWidth: `${F}px`,
        borderStyle: "solid",
        "&:hover": {
          color: y,
          backgroundColor: v,
          borderColor: P,
          borderWidth: `${B}px`
        }
      });
      break;
    }
    case "primary": {
      Object.assign(C, {
        fontSize: `${s}px`,
        letterSpacing: `${i}px`,
        borderRadius: `${rt[r]}px`,
        fontStyle: /^Y$/.test(p) ? "italic" : "normal",
        fontWeight: /^Y$/.test(g) ? "bold" : "normal",
        lineHeight: "1.2",
        padding: `10px ${f}px`,
        color: W,
        backgroundColor: Z ? m : n,
        borderColor: N,
        borderWidth: `${S}px`,
        borderStyle: "solid",
        "&:hover": {
          color: V,
          backgroundColor: Z ? L : o,
          borderColor: ot,
          borderWidth: `${X}px`
        },
        "&:disabled": {
          cursor: "not-allowed"
        }
      });
      break;
    }
    default:
      Object.assign(C, {
        fontSize: `${s}px`,
        letterSpacing: `${i}px`,
        borderRadius: `${rt[r]}px`,
        fontStyle: /^Y$/.test(p) ? "italic" : "normal",
        fontWeight: /^Y$/.test(g) ? "bold" : "normal",
        lineHeight: "1.2",
        padding: `10px ${f}px`,
        color: "#212121 !important",
        backgroundColor: "#ffffff !important",
        borderColor: "rgba(33,33,33,0.2)",
        borderWidth: "1px",
        borderStyle: "solid",
        "&:hover": {
          borderColor: "rgba(33,33,33)"
        }
      });
  }
  return Object.assign(C, e), C;
}, rl = {
  /** #5 [휴대폰 결제] 버튼 라벨 */
  buttonLabel: "휴대폰으로 결제하기",
  /** #6 1개월 외 주기 선택 시 안내 */
  onlyOneMonthCycle: "휴대폰 정기결제는 1개월 주기만 지원합니다.",
  /** #7 N회차 만료(회차 제한) 상품 포함 시 안내 */
  expiringItemBlocked: "회차 만료 상품이 포함되어 휴대폰 정기결제를 이용할 수 없습니다.",
  /** #9~#13 마이페이지 구독 변동 차단 배너 */
  subscriptionLocked: "휴대폰 정기결제 구독은 품목 해지, 건너뛰기, 주기·수량 변경을 할 수 없습니다.",
  /** #14 주문서 할인(쿠폰/포인트) 차단 안내 */
  discountBlocked: "휴대폰 정기결제는 매 회차 동일한 금액이 청구되어야 하므로 쿠폰·포인트 할인을 적용할 수 없습니다."
}, Pc = () => a("svg", {
  width: "43",
  height: "16",
  viewBox: "0 0 43 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, a("g", {
  clipPath: "url(#clip0_10494_51910)"
}, a("path", {
  d: "M34.2225 0C38.6328 0 42.2095 3.58248 42.2095 8C42.2095 12.4175 38.6328 16 34.2225 16H7.98702C3.57667 16 0 12.4175 0 8C0 3.58248 3.57667 0 7.98702 0H34.2225Z",
  fill: "#00DE5A"
}), a("path", {
  d: "M8.00078 13.7985C4.79773 13.7985 2.20117 11.2019 2.20117 7.99884C2.20117 4.79579 4.79773 2.19922 8.00078 2.19922C11.2038 2.19922 13.8004 4.79579 13.8004 7.99884C13.8019 11.2019 11.2053 13.7985 8.00078 13.7985ZM9.12078 5.0975V8.28685L6.87927 5.0975H5.10097V10.8971H6.88232V7.70781L9.12382 10.8971H10.9021V5.0975H9.12078Z",
  fill: "black"
}), a("path", {
  d: "M36.7095 4.31597L34.9906 8.25654L33.092 4.31597H31.3579L34.2318 9.90835L33.0767 12.4988H34.7148L38.3461 4.31597H36.7095ZM28.9396 10.5864H30.4923V4.31445H28.9396V4.8295C28.4063 4.39978 27.8028 4.17578 27.0714 4.17578C25.3053 4.17578 23.9217 5.62645 23.9217 7.44892C23.9217 9.2714 25.3053 10.7221 27.0714 10.7221C27.8028 10.7221 28.4063 10.4981 28.9396 10.0684V10.5864ZM27.2969 9.45273C26.2577 9.45273 25.476 8.5933 25.476 7.45197C25.476 6.31064 26.2592 5.45121 27.2969 5.45121C28.3346 5.45121 29.1179 6.31064 29.1179 7.45197C29.1194 8.59178 28.3362 9.45273 27.2969 9.45273ZM18.1525 10.1019C18.6752 10.5118 19.2603 10.7251 19.9659 10.7251C21.732 10.7251 23.1156 9.27445 23.1156 7.45197C23.1156 5.6295 21.732 4.17883 19.9659 4.17883C19.2344 4.17883 18.631 4.40283 18.0977 4.83254V4.3175H16.5449V12.5004H18.151V10.1019H18.1525ZM17.9194 7.45197C17.9194 6.31064 18.7026 5.45121 19.7404 5.45121C20.7781 5.45121 21.5613 6.31064 21.5613 7.45197C21.5613 8.5933 20.7781 9.45273 19.7404 9.45273C18.7026 9.45273 17.9194 8.59178 17.9194 7.45197Z",
  fill: "black"
})), a("defs", null, a("clipPath", {
  id: "clip0_10494_51910"
}, a("rect", {
  width: "42.2095",
  height: "16",
  fill: "white"
})))), al = () => {
  const t = Wt();
  R.useEffect(() => {
    const e = new URLSearchParams(window.location.search), n = e.get("billingResult"), o = e.get("billingCode"), r = e.get("errorMessage");
    if (!n)
      return;
    if ((() => {
      e.delete("billingResult"), e.delete("billingCode"), e.delete("errorMessage");
      const s = e.toString(), i = window.location.pathname + (s ? `?${s}` : "") + window.location.hash;
      window.history.replaceState(null, "", i);
    })(), n !== "success" || !o) {
      alert(r || "결제수단 등록에 실패했습니다.");
      return;
    }
    (async () => {
      try {
        await ue(o, t);
      } catch (s) {
        alert(s instanceof Error ? s.message : "카드 등록 확인에 실패했습니다.");
      }
    })();
  }, [t]);
};
var Mc = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Tc = /* @__PURE__ */ De(
  function(t) {
    return Mc.test(t) || t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && t.charCodeAt(2) < 91;
  }
  /* Z+1 */
), $c = Tc, Wc = function(e) {
  return e !== "theme";
}, le = function(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96 ? $c : Wc;
}, de = function(e, n, o) {
  var r;
  if (n) {
    var c = n.shouldForwardProp;
    r = e.__emotion_forwardProp && c ? function(s) {
      return e.__emotion_forwardProp(s) && c(s);
    } : c;
  }
  return typeof r != "function" && o && (r = e.__emotion_forwardProp), r;
}, Nc = function(e) {
  var n = e.cache, o = e.serialized, r = e.isStringTag;
  return Le(n, o, r), ze(function() {
    return Fe(n, o, r);
  }), null;
}, Dc = function t(e, n) {
  var o = e.__emotion_real === e, r = o && e.__emotion_base || e, c, s;
  n !== void 0 && (c = n.label, s = n.target);
  var i = de(e, n, o), l = i || le(r), p = !l("as");
  return function() {
    var g = arguments, f = o && e.__emotion_styles !== void 0 ? e.__emotion_styles.slice(0) : [];
    if (c !== void 0 && f.push("label:" + c + ";"), g[0] == null || g[0].raw === void 0)
      f.push.apply(f, g);
    else {
      f.push(g[0][0]);
      for (var u = g.length, w = 1; w < u; w++)
        f.push(g[w], g[0][w]);
    }
    var b = Re(function(y, v, P) {
      var F = p && y.as || r, B = "", W = [], m = y;
      if (y.theme == null) {
        m = {};
        for (var S in y)
          m[S] = y[S];
        m.theme = D.useContext(Be);
      }
      typeof y.className == "string" ? B = Ee(v.registered, W, y.className) : y.className != null && (B = y.className + " ");
      var N = Ae(f.concat(W), v.registered, m);
      B += v.key + "-" + N.name, s !== void 0 && (B += " " + s);
      var V = p && i === void 0 ? le(F) : l, L = {};
      for (var X in y)
        p && X === "as" || // $FlowFixMe
        V(X) && (L[X] = y[X]);
      return L.className = B, L.ref = P, /* @__PURE__ */ D.createElement(D.Fragment, null, /* @__PURE__ */ D.createElement(Nc, {
        cache: v,
        serialized: N,
        isStringTag: typeof F == "string"
      }), /* @__PURE__ */ D.createElement(F, L));
    });
    return b.displayName = c !== void 0 ? c : "Styled(" + (typeof r == "string" ? r : r.displayName || r.name || "Component") + ")", b.defaultProps = e.defaultProps, b.__emotion_real = b, b.__emotion_base = r, b.__emotion_styles = f, b.__emotion_forwardProp = i, Object.defineProperty(b, "toString", {
      value: function() {
        return "." + s;
      }
    }), b.withComponent = function(y, v) {
      return t(y, Ot({}, n, v, {
        shouldForwardProp: de(b, v, !0)
      })).apply(void 0, f);
    }, b;
  };
}, Rc = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], Xt = Dc.bind();
Rc.forEach(function(t) {
  Xt[t] = Xt(t);
});
function Qt() {
  return Qt = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var o in n)
        ({}).hasOwnProperty.call(n, o) && (t[o] = n[o]);
    }
    return t;
  }, Qt.apply(null, arguments);
}
const gt = R.forwardRef((t, e) => {
  const n = _("button_background_color");
  return a("button", Qt({}, t, {
    css: [{
      flex: "1 1 0%",
      borderRadius: "2px",
      fontSize: "14px",
      "--tw-text-opacity": "1",
      color: "rgb(255 255 255 / var(--tw-text-opacity))",
      transitionProperty: "color, background-color, border-color, text-decoration-color, fill, stroke",
      transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
      transitionDuration: "300ms"
    }, `background-color: ${n}`, t.css],
    ref: e
  }), t.children);
}), me = "/_/oms-customer-front-office/billing/sdk-callback.html", Bc = 5 * 60 * 1e3, pe = ["payment"], Ec = {
  payment: "설명_정기과금이용동의"
}, Ac = (t) => t.replace(/\\n/g, `
`), Lc = ({
  onComplete: t,
  cardPgIdx: e,
  showNaverPay: n = !1
}) => {
  const {
    ct: o
  } = xt(), r = _("brand_color"), c = Wt(), [s, i] = D.useState("form"), [l, p] = D.useState({}), [g, f] = D.useState(""), [u, w] = D.useState(!1), b = D.useRef(null), y = D.useRef(""), v = D.useRef(null), P = D.useRef(!1), F = D.useRef(t);
  F.current = t;
  const B = D.useCallback(async (C) => {
    if (!P.current) {
      P.current = !0, i("completing");
      try {
        await ue(C, c), F.current();
      } catch (K) {
        P.current = !1, i("error"), f(K instanceof Error ? K.message : "카드 등록 확인에 실패했습니다.");
      }
    }
  }, [c]);
  D.useEffect(() => {
    if (s !== "sdk-open" || !y.current || v.current && Et(v.current))
      return;
    const C = b.current;
    if (!C)
      return;
    const K = `${window.location.origin}${me}`, O = (I) => {
      try {
        const q = new URL(I);
        return {
          result: q.searchParams.get("result"),
          billingCode: q.searchParams.get("billingCode"),
          message: q.searchParams.get("message")
        };
      } catch {
        return {
          result: null,
          billingCode: null,
          message: null
        };
      }
    }, Y = C.contentDocument;
    Y && (Y.open(), Y.write(y.current), Y.close());
    const at = (I) => {
      var q;
      P.current || I.origin === window.location.origin && ((q = I.data) == null ? void 0 : q.type) === "BILLING_COMPLETE" && (I.data.status === "success" && I.data.billingCode ? B(I.data.billingCode) : (i("error"), f(I.data.errorMessage || o("설명_카드등록에실패"))));
    };
    window.addEventListener("message", at);
    const tt = () => {
      var I;
      if (!P.current)
        try {
          const q = (I = C.contentWindow) == null ? void 0 : I.location.href;
          if (!q || q === "about:blank" || !q.startsWith(K))
            return;
          const {
            result: vt,
            billingCode: St,
            message: Rt
          } = O(q);
          vt === "success" && St ? B(St) : vt === "failure" && (i("error"), f(Rt || o("설명_카드등록에실패")));
        } catch {
        }
    };
    C.addEventListener("load", tt);
    const E = setTimeout(() => {
      P.current || (i("error"), f("카드 등록 시간이 초과되었습니다."));
    }, Bc);
    return () => {
      window.removeEventListener("message", at), C.removeEventListener("load", tt), clearTimeout(E);
    };
  }, [s, B]);
  const {
    mutateAsync: W,
    data: m
  } = ft({
    mutationKey: ["SdkPayingAgreementContent"],
    mutationFn: async (C) => {
      const {
        data: K
      } = await nt.get(`/ajax/oms/OMS_payment_agreement_modal_content.cm?type=${C}`);
      return K;
    }
  }), S = async (C) => {
    await W(C), w(!0);
  }, N = () => {
    window.history.replaceState(null, "", window.location.href.replace(/#.*/, "")), w(!1);
  }, V = (C) => {
    const {
      name: K,
      checked: O
    } = C.target;
    p((Y) => O ? {
      ...Y,
      [K]: O
    } : {
      ...Y,
      [K]: void 0
    });
  }, L = async (C, K) => {
    if (!pe.every((O) => !!l[O])) {
      alert(o("설명_이용약관을동의해주세요"));
      return;
    }
    v.current = C;
    try {
      const O = Et(C), Y = `${window.location.origin}${me}`, at = O ? `${Y}?result=success&returnTo=${encodeURIComponent(window.location.href)}` : `${Y}?result=success`, tt = O ? `${Y}?result=failure&returnTo=${encodeURIComponent(window.location.href)}` : `${Y}?result=failure`, {
        data: E
      } = await nt.post("/ajax/oms/OMS_wrap_customer_v1_payment_billings_register.cm", {
        successRedirectUrl: at,
        failureRedirectUrl: tt,
        pgIdx: C,
        // 서버는 CARD/PHONE_BILL만 받고 네이버페이는 pgIdx로 판정하므로, 값이 있을 때만 싣는다.
        ...K && {
          paymentMethod: K
        }
      });
      if (!/^SUCCESS$/i.test(E == null ? void 0 : E.message))
        throw new Error((E == null ? void 0 : E.message) || "카드 등록을 시작할 수 없습니다.");
      const I = E.data.html;
      if (O) {
        i("sdk-open"), document.open(), document.write(I), document.close();
        return;
      }
      y.current = I, P.current = !1, i("sdk-open");
    } catch (O) {
      i("error"), f(O instanceof Error ? O.message : "카드 등록을 시작할 수 없습니다.");
    }
  }, X = () => {
    P.current = !1, i("form"), f("");
  }, ot = () => {
    P.current = !1, i("form");
  }, Z = s === "sdk-open" && !(v.current && Et(v.current)) ? Oe.createPortal(a("div", {
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 1100,
      display: "flex",
      flexDirection: "column",
      backgroundColor: "#ffffff"
    }
  }, a("header", {
    style: {
      position: "relative",
      height: "50px",
      padding: "16px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderBottom: "1px solid #e5e5e5",
      flexShrink: 0
    }
  }, a("span", {
    style: {
      flex: 1,
      textAlign: "center",
      fontWeight: 500,
      fontSize: "15px",
      color: "#212121"
    }
  }, o("버튼_카드등록")), a("button", {
    onClick: ot,
    style: {
      position: "absolute",
      top: "50%",
      right: "20px",
      transform: "translateY(-50%)",
      width: "24px",
      height: "24px",
      padding: 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "unset",
      border: "none",
      cursor: "pointer"
    }
  }, a("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, a("path", {
    d: "M18 0L0 18M0 0L18 18",
    stroke: "currentColor"
  })))), a("iframe", {
    ref: b,
    style: {
      flex: 1,
      width: "100%",
      border: "none"
    },
    title: "PG SDK 카드 등록",
    sandbox: "allow-scripts allow-forms allow-same-origin allow-popups allow-top-navigation"
  })), document.body) : null, rt = () => s === "sdk-open" ? a("div", {
    css: {
      paddingTop: "40px",
      paddingBottom: "40px",
      textAlign: "center"
    }
  }, a("p", {
    css: {
      fontSize: "15px",
      "--tw-text-opacity": "1",
      color: "rgb(153 153 153 / var(--tw-text-opacity))"
    }
  }, o("설명_카드정보를입력하고있습니다진행중"))) : s === "completing" ? a("div", {
    css: {
      paddingTop: "40px",
      paddingBottom: "40px",
      textAlign: "center"
    }
  }, a("p", {
    css: {
      fontSize: "15px"
    }
  }, o("설명_카드등록을확인하고있습니다진행중"))) : s === "error" ? a("div", {
    css: {
      paddingTop: "40px",
      paddingBottom: "40px",
      textAlign: "center"
    }
  }, a("p", {
    css: {
      marginBottom: "16px",
      fontSize: "15px",
      "--tw-text-opacity": "1",
      color: "rgb(231 76 60 / var(--tw-text-opacity))"
    }
  }, g), a(gt, {
    onClick: X,
    css: [{
      cursor: "pointer",
      borderWidth: "1px",
      paddingLeft: "24px",
      paddingRight: "24px",
      paddingTop: "8px",
      paddingBottom: "8px",
      fontSize: "14px"
    }, {
      backgroundColor: r,
      borderColor: r
    }]
  }, o("버튼_다시시도"))) : a("div", {
    css: {
      fontSize: "15px"
    }
  }, a("p", {
    css: {
      marginBottom: "4px",
      fontSize: "14px",
      fontWeight: "700",
      "--tw-text-opacity": "1",
      color: "rgb(32 37 43 / var(--tw-text-opacity))"
    }
  }, o("타이틀_이용및정보제공약관")), a("fieldset", {
    css: {
      marginBottom: "16px",
      "--tw-text-opacity": "1 !important",
      color: "rgb(32 37 43 / var(--tw-text-opacity)) !important"
    }
  }, pe.map((C) => a(lt, {
    key: C,
    name: C,
    checked: l[C] ?? !1,
    onChange: V
  }, a("span", {
    css: {
      marginLeft: "8px"
    }
  }, o(Ec[C]), a("a", {
    css: [{
      color: `${r} !important`
    }, {
      marginLeft: "4px",
      textDecorationLine: "underline"
    }],
    href: `#${C}`,
    onClick: () => S(C)
  }, o("버튼_자세히")))))), a("div", {
    css: {
      display: "flex",
      width: "100%",
      flexDirection: "column",
      gap: "8px"
    }
  }, e && a(gt, {
    type: "button",
    onClick: () => L(e, Ye.CARD),
    css: [{
      display: "flex",
      width: "100%",
      cursor: "pointer",
      alignItems: "center",
      justifyContent: "center",
      gap: "8px",
      borderWidth: "1px",
      paddingTop: "12px",
      paddingBottom: "12px",
      fontSize: "15px",
      fontWeight: "700"
    }, {
      backgroundColor: r,
      borderColor: r
    }]
  }, o("버튼_결제카드등록"), a(ae, {
    size: 16,
    color: "white"
  })), n && a(gt, {
    type: "button",
    onClick: () => {
      alert(Ac(o("설명_네이버페이등록안내"))), L(qe.naverpay);
    },
    css: [{
      display: "flex",
      width: "100%",
      cursor: "pointer",
      alignItems: "center",
      justifyContent: "center",
      gap: "8px",
      borderWidth: "1px",
      paddingTop: "12px",
      paddingBottom: "12px",
      fontSize: "15px",
      fontWeight: "700"
    }, {
      backgroundColor: r,
      borderColor: r
    }]
  }, a(Pc, null), o("버튼_네이버페이등록"), a(ae, {
    size: 16,
    color: "white"
  }))));
  return a(R.Fragment, null, rt(), Z, a(bt, {
    isOpen: u,
    title: (m == null ? void 0 : m.title) ?? "",
    onRequestClose: N
  }, a("div", {
    dangerouslySetInnerHTML: {
      __html: (m == null ? void 0 : m.html) ?? ""
    }
  })));
}, J = {
  cardNumber: 0,
  expDate: 1,
  birthDate: 2,
  cardPassword: 3,
  businessNumber: 4
}, ut = Xt.input({
  fontSize: "15px",
  letterSpacing: "-0.1em",
  "--tw-text-opacity": "1",
  color: "rgb(33 33 33 / var(--tw-text-opacity))",
  "@media (max-width: 600px)": {
    letterSpacing: "-0.15em"
  }
}), il = ({
  children: t,
  naverPayButton: e = !1
}) => {
  const {
    ct: n
  } = xt(), o = _("brand_color"), r = `rgba(${Nt(o).join(",")}, 0.4)`, c = Wt(), s = tn(), i = R.useRef(null), [l, p] = D.useState(!1), [g, f] = D.useState(!1), [u, w] = D.useState({
    cardNo: "",
    cardPw: "",
    idNo: "",
    isPersonalCard: "Y"
  }), [b, y] = D.useState(""), [v, P] = D.useState(""), [F, B] = D.useState({}), W = D.useRef([]), m = D.useRef(!1), S = () => {
    f(!0);
  }, N = () => {
    w({
      cardNo: "",
      cardPw: "",
      idNo: "",
      isPersonalCard: "Y"
    }), y(""), B({}), f(!1);
  }, {
    data: V
  } = Mt({
    ...Ue(),
    retry: !1
  }), {
    cardMethod: L,
    hasNaverPay: X,
    isSdkCard: ot
  } = Ge(V), Z = e || ot, {
    mutateAsync: rt,
    data: C
  } = ft({
    mutationKey: ["PayingAgreementContent"],
    mutationFn: async (d) => {
      const {
        data: x
      } = await s.get(`/ajax/oms/OMS_payment_agreement_modal_content.cm?type=${d}`);
      return x;
    }
  }), {
    mutateAsync: K
  } = ft({
    mutationKey: ["EnrollCreditCard"],
    mutationFn: async () => {
      var te, ee;
      const d = u.isPersonalCard === "Y", x = ["idNo", "cardNo", "cardPw", "expMonth", "expYear", "isPersonalCard"].some((Bt) => typeof Bt > "u"), k = u.cardNo.replace(/\D/, "").length < 12, $ = u.idNo.replace(/\D/, "").length < (d ? 6 : 10), Q = u.cardPw.replace(/\D/, "").length < 2, it = (((te = u.expMonth) == null ? void 0 : te.length) ?? 0) < 2, kt = (((ee = u.expYear) == null ? void 0 : ee.length) ?? 0) < 2;
      if (x || k || $ || Q || it || kt) {
        alert(n("설명_등록정보를모두입력해주세요"));
        return;
      }
      if (!["privacy", "policy", "third", "payment"].every((Bt) => !!F[Bt])) {
        alert(n("설명_이용약관을동의해주세요"));
        return;
      }
      const {
        data: mt
      } = await s.post("/ajax/oms/OMS_wrap_customer_v1_payment_billings.cm", u);
      if (!/^SUCCESS$/i.test(mt.message))
        throw new Error(mt.message, {
          cause: mt
        });
      await c.invalidateQueries({
        queryKey: ["SubscriptionBillingInfo"]
      }), N();
    },
    onError: async (d) => {
      if (d instanceof Error && he(d)) {
        const {
          code: x
        } = d.cause, k = (window.LOCALIZE[`E_${x || "10002"}`] || window.LOCALIZE.설명_서비스이용시오류발생)();
        alert(k);
      }
    }
  }), O = async (d) => {
    await rt(d), p(!0);
  }, Y = async (d) => {
    d.preventDefault();
    try {
      await K();
    } catch (x) {
      console.error(x);
    }
  }, at = () => {
    window.history.replaceState(null, "", window.location.href.replace(/#.*/, "")), p(!1);
  }, tt = (d) => {
    const x = d.replace(/[^\d*]/g, "") ?? "";
    return x.split("").map((k, $) => $ < 4 || $ >= 12 ? x[$] : "*").join("");
  }, E = (d) => (d == null ? void 0 : d.trim().split("").join(" ")) ?? "", I = (d) => (d == null ? void 0 : d.trim().replace(/(^[\d*]{4})([\d*]{4})([\d*]{4})([\d*]{1,4})$/, "$1-$2-$3-$4").replace(/(^[\d*]{4})([\d*]{4})([\d*]{1,4})$/, "$1-$2-$3").replace(/(^[\d*]{4})([\d*]{1,4})$/, "$1-$2")) ?? "", q = (d) => (d == null ? void 0 : d.trim().replace(/(^\d{3})(\d{2})(\d+)$/, "$1-$2-$3").replace(/(^\d{3})(\d+)$/, "$1-$2")) ?? "", vt = (d) => {
    const x = d.target.value;
    if (
      // 선택한 상태로 키를 입력하였을 경우 예외처리
      typeof d.target.selectionStart != "number" || d.target.selectionStart !== d.target.selectionEnd
    )
      return;
    const k = b.length === 0, $ = /^\d{12,16}$/.test(x);
    if (k && $) {
      w((Q) => ({
        ...Q,
        cardNo: x
      })), y(E(I(tt(x))));
      return;
    }
    switch (d.target.value.length - b.length) {
      case 1: {
        const Q = d.target.value.substring(d.target.value.length - 1), it = /\d/.test(Q);
        if (!(d.target instanceof HTMLInputElement) || !it || it && u.cardNo.length >= ci)
          return;
        const kt = `${u.cardNo}${Q}`;
        y(E(I(tt(kt)))), w((mt) => ({
          ...mt,
          cardNo: kt
        }));
        break;
      }
      case -1: {
        const Q = u.cardNo.slice(0, -1);
        y(E(I(tt(Q)))), w((it) => ({
          ...it,
          cardNo: Q
        }));
        break;
      }
    }
  }, St = (d) => {
    const {
      value: x
    } = d.target, k = x.replace(/\D/g, "");
    switch (k.length) {
      case 0: {
        w(($) => ({
          ...$,
          expMonth: void 0,
          expYear: void 0
        }));
        break;
      }
      case 1: {
        if (/0|1/.test(k) === !1)
          return;
        w(($) => ({
          ...$,
          expMonth: k,
          expYear: void 0
        }));
        break;
      }
      case 2: {
        if (/0[1-9]|1[0-2]/.test(k) === !1)
          return;
        w(($) => ({
          ...$,
          expMonth: k,
          expYear: void 0
        }));
        break;
      }
      case 3: {
        if (/0[1-9]|1[0-2]\d/.test(k) === !1)
          return;
        w(($) => ({
          ...$,
          expMonth: k.slice(0, 2),
          expYear: k.slice(2)
        }));
        break;
      }
      case 4: {
        if (/0[1-9]|1[0-2]\d{1,2}/.test(k) === !1)
          return;
        w(($) => ({
          ...$,
          expMonth: k.slice(0, 2),
          expYear: k.slice(2)
        })), m.current = !0;
        break;
      }
      case 6: {
        if (/0[1-9]|1[0-2]\d{4}/.test(k) === !1)
          return;
        m.current = !0, w(($) => ({
          ...$,
          expMonth: k.slice(0, 2),
          expYear: k.slice(4, 6)
        }));
        break;
      }
    }
  }, Rt = (d) => {
    if (
      // 선택한 상태로 키를 입력하였을 경우 예외처리
      !(typeof d.target.selectionStart != "number" || d.target.selectionStart !== d.target.selectionEnd)
    )
      switch (d.target.value.length - v.length) {
        case 1: {
          const x = d.target.value.substring(d.target.value.length - 1), k = /\d/.test(x);
          if (!(d.target instanceof HTMLInputElement) || !k || k && u.cardPw.length >= li)
            return;
          const $ = `${u.cardPw}${x}`;
          P(E($.replace(/\d/g, "*"))), w((Q) => ({
            ...Q,
            cardPw: $
          }));
          break;
        }
        case -1: {
          const x = u.cardPw.slice(0, -1);
          P(E(x.replace(/\d/g, "*"))), w((k) => ({
            ...k,
            cardPw: x
          }));
          break;
        }
      }
  }, Pe = (d) => {
    const {
      value: x
    } = d.target, k = x.replace(/[^\d]/g, "");
    k.length > 6 || w(($) => ({
      ...$,
      idNo: k
    }));
  }, Me = (d) => {
    const {
      value: x
    } = d.target, k = x.replace(/[^\d]/g, "");
    k.length > 10 || w(($) => ({
      ...$,
      idNo: k
    }));
  }, Ct = (d) => {
    const {
      name: x,
      checked: k
    } = d.target;
    B(($) => k ? {
      ...$,
      [x]: k
    } : {
      ...$,
      [x]: void 0
    });
  }, Te = (d) => {
    const {
      checked: x
    } = d.target;
    B(() => x ? {
      payment: x,
      policy: x,
      privacy: x,
      third: x
    } : {});
  };
  R.useEffect(() => {
    var d;
    u.cardNo.length === 16 && ((d = W.current[J.expDate]) == null || d.focus());
  }, [u.cardNo]), R.useEffect(() => {
    var d, x;
    ((d = u.expYear) == null ? void 0 : d.length) === 2 && (m.current = !0, (x = W.current[J.cardPassword]) == null || x.focus());
  }, [u.expYear]), R.useEffect(() => {
    var d, x;
    u.cardPw.length === 2 && (u.isPersonalCard === "Y" ? (d = W.current[J.birthDate]) == null || d.focus() : (x = W.current[J.businessNumber]) == null || x.focus());
  }, [u.cardPw]), R.useEffect(() => {
    const d = i.current;
    return d == null || d.addEventListener("click", S), () => {
      d == null || d.removeEventListener("click", S);
    };
  }, []);
  const $e = (d, x) => typeof x < "u" ? `${d}/${x ?? ""}` : d ?? "";
  return a(R.Fragment, null, typeof t < "u" ? a("div", {
    ref: i
  }, t) : a(gt, {
    onClick: S,
    css: [{
      marginTop: "1rem",
      height: "36px",
      width: "100%",
      borderWidth: "1px",
      borderColor: "rgba(79,79,79,0.2)",
      "--tw-bg-opacity": "1",
      backgroundColor: "rgb(255 255 255 / var(--tw-bg-opacity))",
      fontSize: "13px",
      fontWeight: "700",
      "--tw-text-opacity": "1",
      color: "rgb(32 37 43 / var(--tw-text-opacity))",
      transitionProperty: "color, background-color, border-color, text-decoration-color, fill, stroke",
      transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
      transitionDuration: "300ms",
      ":hover": {
        borderColor: "rgba(79,79,79,1)"
      }
    }]
  }, n("버튼_결제수단등록")), a(bt, {
    maxWidth: "400px",
    isOpen: g,
    title: n(Z ? "타이틀_정기구독결제수단등록" : "타이틀_정기구독결제카드등록"),
    onRequestClose: N,
    onAfterOpen: () => {
      var d;
      Z || (d = W == null ? void 0 : W.current[J.cardNumber]) == null || d.focus();
    }
  }, Z ? a(Lc, {
    onComplete: N,
    cardPgIdx: e || L == null ? void 0 : L.pgIdx,
    showNaverPay: X
  }) : a("form", {
    onSubmit: Y,
    css: {
      fontSize: "15px"
    }
  }, a("fieldset", {
    css: {
      marginBottom: "20px"
    }
  }, a("p", {
    css: {
      marginBottom: "8px",
      fontSize: "14px"
    }
  }, n("설명_카드유형")), a("div", {
    css: {
      display: "flex"
    }
  }, a("div", {
    css: {
      flexBasis: "25%"
    }
  }, a(qt, {
    name: "credit_card_type",
    value: "Y",
    checked: u.isPersonalCard === "Y",
    onChange: () => w((d) => ({
      ...d,
      isPersonalCard: "Y",
      idNo: ""
    }))
  }, a("span", {
    css: {
      marginLeft: "8px"
    }
  }, "개인"))), a("div", {
    css: {
      flexBasis: "25%"
    }
  }, a(qt, {
    name: "credit_card_type",
    value: "N",
    checked: u.isPersonalCard === "N",
    onChange: () => w((d) => ({
      ...d,
      isPersonalCard: "N",
      idNo: ""
    }))
  }, a("span", {
    css: {
      marginLeft: "8px"
    }
  }, "법인"))))), a("label", {
    css: {
      marginBottom: "20px !important",
      display: "flex",
      width: "100%"
    }
  }, a("p", {
    css: {
      marginBottom: "8px",
      fontSize: "14px"
    }
  }, n("설명_카드번호")), a(ut, {
    ref: (d) => W.current[J.cardNumber] = d,
    css: {
      width: "100%",
      minWidth: "0px",
      borderRadius: "2px",
      borderWidth: "1px",
      borderStyle: "solid",
      "--tw-border-opacity": "1",
      borderColor: "rgb(229 229 229 / var(--tw-border-opacity))",
      padding: "12px 12px",
      fontFamily: "monospace",
      ":focus": {
        "--tw-border-opacity": "1",
        borderColor: "rgb(32 37 43 / var(--tw-border-opacity))"
      }
    },
    type: "text",
    name: "cardnumber",
    placeholder: E("1234-5678-1234-5678"),
    value: b,
    onSelect: (d) => {
      d.target instanceof HTMLInputElement && (d.target.selectionStart = d.target.selectionEnd);
    },
    onChange: vt,
    autoComplete: "cc-number"
  })), a("label", {
    css: {
      marginBottom: "20px !important",
      display: "flex",
      width: "100%"
    }
  }, a("p", {
    css: {
      marginBottom: "8px",
      fontSize: "14px"
    }
  }, n("설명_유효기간")), a("div", {
    css: {
      display: "flex"
    }
  }, a(ut, {
    ref: (d) => W.current[J.expDate] = d,
    css: {
      minWidth: "0px",
      flex: "1 1 0%",
      borderRadius: "2px",
      borderWidth: "1px",
      borderStyle: "solid",
      "--tw-border-opacity": "1",
      borderColor: "rgb(229 229 229 / var(--tw-border-opacity))",
      padding: "12px 12px",
      fontFamily: "monospace",
      ":focus": {
        "--tw-border-opacity": "1",
        borderColor: "rgb(32 37 43 / var(--tw-border-opacity))"
      }
    },
    type: "text",
    name: "exp-date",
    placeholder: E("mm/yy"),
    value: E($e(u.expMonth, u.expYear)),
    onChange: St,
    autoComplete: "cc-exp"
  }))), a("label", {
    css: {
      marginBottom: "20px !important",
      display: "flex",
      width: "100%"
    }
  }, a("p", {
    css: {
      marginBottom: "8px",
      fontSize: "14px"
    }
  }, n("설명_카드비밀번호")), a(ut, {
    ref: (d) => W.current[J.cardPassword] = d,
    css: {
      width: "100%",
      minWidth: "0px",
      borderRadius: "2px",
      borderWidth: "1px",
      borderStyle: "solid",
      "--tw-border-opacity": "1",
      borderColor: "rgb(229 229 229 / var(--tw-border-opacity))",
      padding: "12px 12px",
      fontFamily: "monospace",
      ":focus": {
        "--tw-border-opacity": "1",
        borderColor: "rgb(32 37 43 / var(--tw-border-opacity))"
      }
    },
    type: "text",
    name: "password",
    placeholder: E("00**"),
    value: v,
    onSelect: (d) => {
      d.target instanceof HTMLInputElement && (d.target.selectionStart = d.target.selectionEnd);
    },
    onChange: Rt,
    autoComplete: "current-password"
  })), u.isPersonalCard === "Y" ? a("label", {
    css: {
      marginBottom: "20px !important",
      display: "flex",
      width: "100%"
    }
  }, a("p", {
    css: {
      marginBottom: "8px",
      fontSize: "14px"
    }
  }, n("설명_생년월일")), a(ut, {
    ref: (d) => W.current[J.birthDate] = d,
    css: {
      width: "100%",
      minWidth: "0px",
      borderRadius: "2px",
      borderWidth: "1px",
      borderStyle: "solid",
      "--tw-border-opacity": "1",
      borderColor: "rgb(229 229 229 / var(--tw-border-opacity))",
      padding: "12px 12px",
      fontFamily: "monospace",
      ":focus": {
        "--tw-border-opacity": "1",
        borderColor: "rgb(32 37 43 / var(--tw-border-opacity))"
      }
    },
    type: "text",
    name: "birthday",
    placeholder: n("설명_6자리만입력"),
    value: E(u.idNo),
    onChange: Pe,
    autoComplete: "bday"
  })) : a("label", {
    css: {
      marginBottom: "20px !important",
      display: "flex",
      width: "100%"
    }
  }, a("p", {
    css: {
      marginBottom: "8px",
      fontSize: "14px"
    }
  }, "사업자번호"), a(ut, {
    ref: (d) => W.current[J.businessNumber] = d,
    css: {
      width: "100%",
      minWidth: "0px",
      borderRadius: "2px",
      borderWidth: "1px",
      borderStyle: "solid",
      "--tw-border-opacity": "1",
      borderColor: "rgb(229 229 229 / var(--tw-border-opacity))",
      padding: "12px 12px",
      fontFamily: "monospace",
      ":focus": {
        "--tw-border-opacity": "1",
        borderColor: "rgb(32 37 43 / var(--tw-border-opacity))"
      }
    },
    type: "text",
    name: "business-number",
    placeholder: E(q("0000000000")),
    value: E(q(u.idNo)),
    onChange: Me,
    autoComplete: "bnumber"
  })), a("p", {
    css: {
      marginBottom: "4px",
      fontSize: "14px",
      fontWeight: "700",
      "--tw-text-opacity": "1",
      color: "rgb(32 37 43 / var(--tw-text-opacity))"
    }
  }, n("타이틀_이용및정보제공약관")), a("label", {
    css: {
      marginBottom: "4px !important",
      display: "flex !important",
      columnGap: "10px",
      "--tw-text-opacity": "1 !important",
      color: "rgb(32 37 43 / var(--tw-text-opacity)) !important"
    }
  }, a(lt, {
    checked: ["privacy", "policy", "third", "payment"].every((d) => typeof F[d] < "u"),
    onChange: Te
  }, a("span", {
    css: {
      marginLeft: "8px"
    }
  }, n("설명_전체동의")))), a("fieldset", {
    css: {
      marginBottom: "16px"
    }
  }, a(Pt, {
    key: "policy",
    css: {
      paddingLeft: "30px"
    },
    svgPlainText: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path transform="translate(-14,10) rotate(-45)" d="M15 18L9 12L15 6" stroke="${encodeURIComponent(r)}" /></svg>`
  }, a(lt, {
    name: "policy",
    checked: F.policy ?? !1,
    onChange: Ct
  }, a("span", {
    css: {
      marginLeft: "8px"
    }
  }, n("설명_전자금융거래이용약관"), a("a", {
    css: [{
      color: `${o} !important`
    }, {
      marginLeft: "4px",
      textDecorationLine: "underline"
    }],
    href: "#policy",
    onClick: () => O("policy")
  }, n("버튼_자세히"))))), a(Pt, {
    key: "privacy",
    css: {
      paddingLeft: "30px"
    },
    svgPlainText: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path transform="translate(-14,10) rotate(-45)" d="M15 18L9 12L15 6" stroke="${encodeURIComponent(r)}" /></svg>`
  }, a(lt, {
    name: "privacy",
    checked: F.privacy ?? !1,
    onChange: Ct
  }, a("span", {
    css: {
      marginLeft: "8px"
    }
  }, n("설명_개인정보수집및이용동의"), a("a", {
    css: [{
      color: `${o} !important`
    }, {
      marginLeft: "4px",
      textDecorationLine: "underline"
    }],
    href: "#privacy",
    onClick: () => O("privacy")
  }, n("버튼_자세히"))))), a(Pt, {
    key: "third",
    css: {
      paddingLeft: "30px"
    },
    svgPlainText: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path transform="translate(-14,10) rotate(-45)" d="M15 18L9 12L15 6" stroke="${encodeURIComponent(r)}" /></svg>`
  }, a(lt, {
    name: "third",
    checked: F.third ?? !1,
    onChange: Ct
  }, a("span", {
    css: {
      marginLeft: "8px"
    }
  }, n("버튼_개인정보제3자제공동의"), a("a", {
    css: [{
      color: `${o} !important`
    }, {
      marginLeft: "4px",
      textDecorationLine: "underline"
    }],
    href: "#third",
    onClick: () => O("third")
  }, n("버튼_자세히"))))), a(Pt, {
    key: "payment",
    css: {
      paddingLeft: "30px"
    },
    svgPlainText: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path transform="translate(-14,10) rotate(-45)" d="M15 18L9 12L15 6" stroke="${encodeURIComponent(r)}" /></svg>`
  }, a(lt, {
    name: "payment",
    checked: F.payment ?? !1,
    onChange: Ct
  }, a("span", {
    css: {
      marginLeft: "8px"
    }
  }, n("설명_정기과금이용동의"), a("a", {
    css: [{
      color: `${o} !important`
    }, {
      marginLeft: "4px",
      textDecorationLine: "underline"
    }],
    href: "#payment",
    onClick: () => O("payment")
  }, n("버튼_자세히")))))), a("div", {
    css: {
      width: "100%"
    }
  }, a(gt, {
    type: "submit",
    css: [{
      width: "100%",
      cursor: "pointer",
      borderWidth: "1px",
      paddingTop: "12px",
      paddingBottom: "12px",
      fontSize: "15px",
      fontWeight: "700"
    }, {
      backgroundColor: o,
      borderColor: o
    }]
  }, n("버튼_등록하기"))))), a(bt, {
    isOpen: l,
    title: (C == null ? void 0 : C.title) ?? "",
    onRequestClose: at
  }, a("div", {
    dangerouslySetInnerHTML: {
      __html: (C == null ? void 0 : C.html) ?? ""
    }
  })));
}, Zt = 9 * 60 * 60 * 1e3, zc = (t) => {
  if (typeof t != "string" || t === "")
    return null;
  const e = new Date(t);
  if (Number.isNaN(e.getTime()))
    return null;
  const n = new Date(e.getTime() + Zt);
  return new Date(n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate(), n.getUTCHours(), n.getUTCMinutes(), n.getUTCSeconds());
}, sl = () => {
  const t = new Date(Date.now() + Zt);
  return new Date(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate());
}, cl = (t) => Date.UTC(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds()) - Zt, ll = (t) => zc(t), Fc = [zt.SOS02.code, zt.SOS04.code], dl = (t) => t.firstPaymentDate || t.wtime, ml = (t) => t.statusCd === zt.SOS04.code && !!t.deliveryStartDate, Oc = (t) => Array.isArray(t) ? t.length > 0 ? t.join(",") : void 0 : t, Ic = ({
  page: t = 1,
  count: e = 10,
  status: n,
  queryOptions: o
} = {}) => {
  const r = Oc(n);
  return {
    queryKey: ["OrderSubscription", r, t, e],
    queryFn: async ({
      signal: c
    }) => {
      const s = new URL("/ajax/oms/OMS_wrap_customer_v1_subscription.cm", window.location.origin);
      s.searchParams.set("page", String(t)), s.searchParams.set("count", String(e)), r && s.searchParams.set("status", r);
      const {
        data: i
      } = await nt.get(s.href, {
        signal: c
      });
      if (!/^SUCCESS$/i.test(i == null ? void 0 : i.message))
        throw new Error(i == null ? void 0 : i.message);
      return i == null ? void 0 : i.data;
    },
    ...o,
    enabled: typeof r == "string" && ((o == null ? void 0 : o.enabled) ?? !0)
  };
}, pl = ({
  triggerLabel: t
} = {}) => {
  const {
    ct: e
  } = xt(), n = Wt(), [o, r] = R.useState(!1), c = Gt("default", {
    fontSize: "13px",
    fontWeight: "unset"
  }), s = Gt("primary", {
    fontSize: "13px",
    fontWeight: "bold"
  }), i = () => {
    r(!0);
  }, l = () => {
    r(!1);
  }, {
    data: p
  } = Mt(Xe()), {
    data: g
  } = Mt(Ic({
    // 거래 개시 대기(SOS04)도 예정 결제가 있어 카드 삭제를 막아야 한다 — 서버 가드와 동일 기준
    status: Fc,
    queryOptions: {
      select: (b) => b.totalCount === 0
    }
  })), {
    mutateAsync: f
  } = ft({
    mutationKey: ["RemoveCreditCard"],
    mutationFn: async (b) => {
      const {
        data: y
      } = await nt.delete(`/ajax/oms/OMS_wrap_customer_v1_payment_billings_{billingInfoCode}.cm?billingInfoCode=${b}`);
      if (!/^SUCCESS$/i.test(y.message))
        throw new Error(y.message, {
          cause: y
        });
      l();
    },
    onError: async (b) => {
      if (b instanceof Error && he(b)) {
        const {
          code: y
        } = b.cause, v = (window.LOCALIZE[`E_${y || "10002"}`] || window.LOCALIZE.설명_서비스이용시오류발생)();
        alert(v);
      }
    }
  }), u = async () => {
    typeof (p == null ? void 0 : p.billingInfoCode) == "string" && (await f(p == null ? void 0 : p.billingInfoCode), n.invalidateQueries({
      queryKey: ["SubscriptionBillingInfo"]
    }));
  }, w = g ? e("설명_등록된결제수단을삭제") : "현재 진행중인 정기구독 주문이 있어 카드를 삭제할 수 없습니다.<br>카드 변경 혹은 정기구독 해지 후 카드를 삭제해 주세요.";
  return a(R.Fragment, null, a("button", {
    css: c,
    onClick: i
  }, t ?? e("버튼_삭제")), a(bt, {
    isOpen: o,
    onRequestClose: l,
    maxWidth: "420px",
    contentStyle: {
      padding: "24px"
    }
  }, a("div", {
    css: {
      marginBottom: "24px"
    },
    dangerouslySetInnerHTML: {
      __html: w
    }
  }), g ? a("footer", {
    css: {
      display: "flex",
      justifyContent: "flex-end"
    }
  }, a("button", {
    css: c,
    onClick: l
  }, e("버튼_취소")), a("button", {
    css: [s, {
      marginLeft: "4px"
    }],
    onClick: u
  }, e("버튼_삭제"))) : a("footer", {
    css: {
      display: "flex",
      justifyContent: "flex-end"
    }
  }, a("button", {
    css: c,
    onClick: l
  }, e("버튼_확인")))));
};
function Hc(t) {
  if (typeof window > "u")
    return !1;
  const e = window.LIMIT_API_LIST;
  return Array.isArray(e) ? e.includes(t) : !1;
}
const jc = 500, Vc = R.forwardRef(({
  onChange: t,
  hideShowButton: e
}, n) => {
  const {
    ct: o
  } = xt(), [r, c] = D.useState(!1), [s, i] = D.useState(jc), {
    shouldUseFallback: l
  } = Je(), p = Gt("global", {
    marginLeft: "10px",
    paddingLeft: "0",
    paddingRight: "0",
    width: "50%"
  }), g = _("brand_color"), f = D.useRef(null), u = () => {
    c(!0);
  }, w = () => {
    c(!1);
  };
  R.useImperativeHandle(n, () => ({
    openModal: u,
    closeModal: w
  }));
  const b = (y) => {
    typeof window.kakao > "u" || f.current !== null && f.current && new window.kakao.Postcode({
      oncomplete: (v) => {
        var m;
        let P = v.address ?? "";
        const B = (P.match(/ /g) || []).length <= 2, W = v.sido && P.trim().charAt(0) === v.sido.charAt(0);
        if (B && !W) {
          const S = v.roadAddress || v.autoRoadAddress || v.jibunAddress || v.autoJibunAddress;
          (m = window.DD_RUM) == null || m.addError(new Error("[DialogDaumAddress] 주소가 비어있거나 불완전함"), {
            address: v,
            fallbackAddress: S,
            mfe: {
              name: "oms-customer-front-office",
              version: "oms-customer-front-office_1788766413045"
            }
          }), S && (P = S);
        }
        v.addressType === "R" && (v.bname !== "" || v.buildingName !== "") && (P += ` (${[v.bname, v.buildingName].filter(Boolean).join(", ")})`), t({
          zipcode: v.zonecode,
          addr1: P
        }), c(!1);
      },
      theme: {
        emphTextColor: g
      },
      width: "100%",
      height: "100%",
      submitMode: !1,
      useBannerLink: !1,
      onclose: () => {
        c(!1);
      },
      onresize: (v) => {
        var P;
        (P = f.current) == null || P.setAttribute("style", `width:100%;height:${v.height}px;`);
      }
    }).embed(f.current);
  };
  return R.useEffect(() => {
    if (typeof window.kakao > "u") {
      const y = document.createElement("script");
      y.src = "//t1.kakaocdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js", document.head.appendChild(y);
    }
  }, []), a(R.Fragment, null, e ? null : a("button", {
    type: "button",
    css: p,
    onClick: u
  }, o("버튼_주소찾기")), a(bt, {
    isOpen: r,
    title: o("버튼_주소찾기"),
    onRequestClose: w,
    onAfterOpen: l ? void 0 : b,
    contentStyle: {
      padding: 0
    }
  }, l ? a(Ze, {
    onComplete: (y) => {
      t(y), c(!1);
    },
    height: s
  }) : a("div", {
    css: {
      minHeight: "500px"
    },
    ref: f
  })));
}), ul = R.forwardRef(({
  value: t,
  onChange: e,
  shippingCountries: n,
  isGiftForm: o
}, r) => {
  const c = !Hc("daum_map"), {
    data: s
  } = Mt(en({
    queryOptions: {
      select: (m) => m.useCommonEntrancePasswordInput
    }
  })), {
    ct: i
  } = xt(), l = R.useRef(null), p = R.useRef(null), [g, f] = R.useState(), [u, w] = R.useState(), [b, y] = R.useState();
  R.useImperativeHandle(r, () => ({
    clearErrors: () => {
      f(void 0), w(void 0);
    },
    clearForms: () => {
      f(i("설명_n글자이상입력해주세요", 2)), w(i("설명_전화번호를입력하세요"));
    }
  }));
  const {
    mutateAsync: v
  } = ft({
    mutationKey: ["AddressFormatFromShippingCountryCode"],
    mutationFn: async (m) => {
      const {
        data: S
      } = await nt.post("/ajax/oms/OMS_get_deliv_address_format.cm", {
        country: m
      }, {
        withCredentials: !0
      });
      return S == null ? void 0 : S.addressFormat;
    }
  }), P = (m) => {
    var S;
    if (!(!(m.target instanceof HTMLInputElement) && !(m.target instanceof HTMLSelectElement))) {
      if (m.target.name === "name" && f(void 0), m.target.name === "call") {
        const {
          value: N
        } = m.target;
        w(void 0);
        const V = (N == null ? void 0 : N.replace(/\D/g, "")) ?? "";
        y(N !== V ? i("설명_숫자만입력해주세요") : void 0);
      }
      if (typeof e == "function")
        switch (m.target.name) {
          case "name": {
            e({
              ...t,
              name: m.target.value || void 0,
              receiverName: m.target.value || void 0
            });
            break;
          }
          case "call": {
            const {
              value: N
            } = m.target, V = (N == null ? void 0 : N.replace(/\D/g, "")) ?? "";
            e({
              ...t,
              call: V,
              receiverCall: V
            });
            const L = (S = l.current) == null ? void 0 : S.querySelector('input[name="call"]');
            L && (L.value = V);
            break;
          }
          case "country": {
            const N = m.target.value;
            v(N).then((V) => {
              var L;
              if (m.target instanceof HTMLSelectElement) {
                const X = (((L = n == null ? void 0 : n.find(({
                  code: ot
                }) => m.target instanceof HTMLSelectElement ? ot === N : !1)) == null ? void 0 : L.name) ?? "").slice(0, 20);
                e({
                  ...t,
                  street: void 0,
                  building: void 0,
                  state: void 0,
                  city: void 0,
                  addr1: void 0,
                  addr2: void 0,
                  zipcode: void 0,
                  addressFormat: V,
                  country: N,
                  shippingCountryCode: N,
                  countryName: X
                });
              }
            });
            break;
          }
          default: {
            e({
              ...t,
              // value가 '' 이면 undefined로 처리됨.
              [m.target.name]: m.target.value || void 0
            });
            break;
          }
        }
    }
  }, F = (m) => {
    typeof e == "function" && e({
      ...t,
      ...m
    });
  }, B = (m) => {
    if (m.target.value.length === 0) {
      f(i(o ? "설명_받는분성함을입력해주세요" : "설명_주문자이름을입력해주세요"));
      return;
    } else if (m.target.value.length < 2) {
      f(i("설명_n글자이상입력해주세요", 2));
      return;
    }
    f(void 0);
  }, W = (m) => {
    const {
      value: S
    } = m.target, N = (S == null ? void 0 : S.replace(/\D/g, "")) ?? "";
    if (N.length === 0) {
      w(i("설명_전화번호를입력하세요"));
      return;
    } else if (/^\d{7,15}$/.test(N)) {
      if (/KR/i.test((t == null ? void 0 : t.country) ?? "") && // https://github.com/imwebme/imweb/blob/d47c9c85a18a787e546db3cb7a8ce4a535d91ccf/vendor/js/common.js#L503
      window.kr_callnum_validate_chk(N) === !1) {
        w(i("설명_올바른전화번호를입력하세요"));
        return;
      }
    } else {
      w(i("설명_올바른전화번호를입력하세요"));
      return;
    }
    w(void 0);
  };
  switch (R.useEffect(() => {
    if (l.current === null)
      return;
    const m = l.current.querySelector('input[name="name"]'), S = l.current.querySelector('input[name="call"]');
    m instanceof HTMLInputElement && (m.value = (t == null ? void 0 : t.name) ?? ""), S instanceof HTMLInputElement && (S.value = (t == null ? void 0 : t.call) ?? "");
  }, [t == null ? void 0 : t.name, t == null ? void 0 : t.call]), t == null ? void 0 : t.addressFormat) {
    case "KR":
      return a("fieldset", {
        ref: l,
        onChange: P
      }, a("div", {
        css: {
          marginBottom: "6px",
          display: "flex",
          "@media not all and (min-width: 768px)": {
            flexDirection: "column"
          }
        }
      }, a("div", {
        css: {
          flex: "1 1 0%"
        }
      }, a("input", {
        css: [{
          marginBottom: "4px",
          height: "36px",
          width: "100%",
          borderWidth: "1px",
          borderStyle: "solid",
          "--tw-border-opacity": "1",
          borderColor: "rgb(221 221 221 / var(--tw-border-opacity))",
          padding: "0.5em 0.75em",
          fontSize: "14px"
        }, typeof g < "u" ? {
          "--tw-border-opacity": "1",
          borderColor: "rgb(251 70 55 / var(--tw-border-opacity))"
        } : null],
        type: "text",
        name: "name",
        placeholder: i(o ? "설명_받는분성함" : "설명_수령인"),
        defaultValue: (t == null ? void 0 : t.name) ?? "",
        onBlur: B
      }), typeof g < "u" ? a("p", {
        css: {
          margin: "2px 0 0",
          fontSize: "12px",
          "--tw-text-opacity": "1",
          color: "rgb(251 70 55 / var(--tw-text-opacity))"
        }
      }, g) : null), a("div", {
        css: {
          marginLeft: "10px",
          flex: "1 1 0%",
          "@media not all and (min-width: 768px)": {
            marginLeft: "0px",
            marginTop: "10px"
          }
        }
      }, a("input", {
        css: [{
          marginBottom: "4px",
          height: "36px",
          width: "100%",
          borderWidth: "1px",
          borderStyle: "solid",
          "--tw-border-opacity": "1",
          borderColor: "rgb(221 221 221 / var(--tw-border-opacity))",
          padding: "0.5em 0.75em",
          fontSize: "14px"
        }, typeof u < "u" || typeof b < "u" ? {
          "--tw-border-opacity": "1",
          borderColor: "rgb(251 70 55 / var(--tw-border-opacity))"
        } : null],
        type: "text",
        name: "call",
        placeholder: i("설명_연락처"),
        defaultValue: (t == null ? void 0 : t.call) ?? "",
        onFocus: () => y(void 0),
        onBlur: W
      }), typeof u < "u" ? a("p", {
        css: {
          margin: "2px 0 0",
          fontSize: "12px",
          "--tw-text-opacity": "1",
          color: "rgb(251 70 55 / var(--tw-text-opacity))"
        }
      }, u) : null, typeof b < "u" ? a("p", {
        css: {
          margin: "2px 0 0",
          fontSize: "12px",
          "--tw-text-opacity": "1",
          color: "rgb(251 70 55 / var(--tw-text-opacity))"
        }
      }, b) : null)), a("div", {
        css: {
          marginBottom: "10px",
          display: "flex",
          width: "calc(50% - 5px)",
          "@media not all and (min-width: 768px)": {
            width: "100%"
          }
        }
      }, a("input", {
        type: "text",
        name: "zipcode",
        placeholder: i("설명_우편번호"),
        readOnly: c,
        value: (t == null ? void 0 : t.zipcode) ?? "",
        onClick: () => {
          var m;
          return c && ((m = p.current) == null ? void 0 : m.openModal());
        },
        css: {
          height: "36px",
          width: "50%",
          borderWidth: "1px",
          borderStyle: "solid",
          "--tw-border-opacity": "1",
          borderColor: "rgb(221 221 221 / var(--tw-border-opacity))",
          padding: "8px 12px",
          fontSize: "14px"
        }
      }), c && a(Vc, {
        ref: p,
        onChange: F
      })), a("input", {
        type: "text",
        name: "addr1",
        placeholder: i("설명_주소"),
        readOnly: c,
        value: (t == null ? void 0 : t.addr1) ?? "",
        onClick: () => {
          var m;
          return c && ((m = p.current) == null ? void 0 : m.openModal());
        },
        css: {
          marginBottom: "10px",
          height: "36px",
          width: "100%",
          borderWidth: "1px",
          borderStyle: "solid",
          "--tw-border-opacity": "1",
          borderColor: "rgb(221 221 221 / var(--tw-border-opacity))",
          padding: "8px 12px",
          fontSize: "14px"
        }
      }), a("input", {
        type: "text",
        name: "addr2",
        placeholder: i("설명_상세주소"),
        defaultValue: (t == null ? void 0 : t.addr2) ?? "",
        css: {
          marginBottom: "10px",
          height: "36px",
          width: "100%",
          borderWidth: "1px",
          borderStyle: "solid",
          "--tw-border-opacity": "1",
          borderColor: "rgb(221 221 221 / var(--tw-border-opacity))",
          padding: "8px 12px",
          fontSize: "14px"
        }
      }), s && a("input", {
        type: "text",
        name: "commonEntrancePassword",
        placeholder: i("설명_공동현관비밀번호"),
        defaultValue: (t == null ? void 0 : t.commonEntrancePassword) ?? "",
        css: {
          marginBottom: "10px",
          height: "36px",
          width: "100%",
          borderWidth: "1px",
          borderStyle: "solid",
          "--tw-border-opacity": "1",
          borderColor: "rgb(221 221 221 / var(--tw-border-opacity))",
          padding: "8px 12px",
          fontSize: "14px"
        },
        maxLength: 30
      }));
    case "5":
      return a("fieldset", {
        ref: l,
        onChange: P
      }, a("div", {
        css: {
          marginBottom: "6px",
          display: "flex",
          "@media not all and (min-width: 768px)": {
            flexDirection: "column"
          }
        }
      }, a("div", {
        css: {
          flex: "1 1 0%"
        }
      }, a("input", {
        css: [{
          marginBottom: "4px",
          height: "36px",
          width: "100%",
          borderWidth: "1px",
          borderStyle: "solid",
          "--tw-border-opacity": "1",
          borderColor: "rgb(221 221 221 / var(--tw-border-opacity))",
          padding: "0.5em 0.75em",
          fontSize: "14px"
        }, typeof g < "u" ? {
          "--tw-border-opacity": "1",
          borderColor: "rgb(251 70 55 / var(--tw-border-opacity))"
        } : null],
        type: "text",
        name: "name",
        placeholder: i(o ? "설명_받는분성함" : "설명_수령인"),
        defaultValue: (t == null ? void 0 : t.name) ?? "",
        onBlur: B
      }), typeof g < "u" ? a("p", {
        css: {
          margin: "2px 0 0",
          fontSize: "12px",
          "--tw-text-opacity": "1",
          color: "rgb(251 70 55 / var(--tw-text-opacity))"
        }
      }, g) : null), a("div", {
        css: {
          marginLeft: "10px",
          flex: "1 1 0%",
          "@media not all and (min-width: 768px)": {
            marginLeft: "0px",
            marginTop: "10px"
          }
        }
      }, a("input", {
        css: [{
          marginBottom: "4px",
          height: "36px",
          width: "100%",
          borderWidth: "1px",
          borderStyle: "solid",
          "--tw-border-opacity": "1",
          borderColor: "rgb(221 221 221 / var(--tw-border-opacity))",
          padding: "0.5em 0.75em",
          fontSize: "14px"
        }, typeof u < "u" || typeof b < "u" ? {
          "--tw-border-opacity": "1",
          borderColor: "rgb(251 70 55 / var(--tw-border-opacity))"
        } : null],
        type: "text",
        name: "call",
        placeholder: i("설명_연락처"),
        defaultValue: (t == null ? void 0 : t.call) ?? "",
        onFocus: () => y(void 0),
        onBlur: W
      }), typeof u < "u" ? a("p", {
        css: {
          margin: "2px 0 0",
          fontSize: "12px",
          "--tw-text-opacity": "1",
          color: "rgb(251 70 55 / var(--tw-text-opacity))"
        }
      }, u) : null, typeof b < "u" ? a("p", {
        css: {
          margin: "2px 0 0",
          fontSize: "12px",
          "--tw-text-opacity": "1",
          color: "rgb(251 70 55 / var(--tw-text-opacity))"
        }
      }, b) : null)), a("div", {
        css: {
          marginBottom: "5px"
        }
      }, a(pt, {
        name: "country",
        defaultValue: t == null ? void 0 : t.country
      }, (n ?? []).map(({
        code: m,
        name: S
      }) => a("option", {
        key: m,
        value: m
      }, S)))), a("input", {
        type: "text",
        name: "street",
        placeholder: i("설명_거리주소"),
        defaultValue: (t == null ? void 0 : t.street) ?? "",
        css: {
          marginBottom: "10px",
          height: "36px",
          width: "100%",
          borderWidth: "1px",
          borderStyle: "solid",
          "--tw-border-opacity": "1",
          borderColor: "rgb(221 221 221 / var(--tw-border-opacity))",
          padding: "8px 12px",
          fontSize: "14px"
        }
      }), a("input", {
        type: "text",
        name: "building",
        placeholder: i("설명_건물명"),
        defaultValue: (t == null ? void 0 : t.building) ?? "",
        css: {
          marginBottom: "10px",
          height: "36px",
          width: "100%",
          borderWidth: "1px",
          borderStyle: "solid",
          "--tw-border-opacity": "1",
          borderColor: "rgb(221 221 221 / var(--tw-border-opacity))",
          padding: "8px 12px",
          fontSize: "14px"
        }
      }), a("input", {
        type: "text",
        name: "city",
        placeholder: i("설명_도시명"),
        defaultValue: (t == null ? void 0 : t.city) ?? "",
        css: {
          marginBottom: "10px",
          height: "36px",
          width: "100%",
          borderWidth: "1px",
          borderStyle: "solid",
          "--tw-border-opacity": "1",
          borderColor: "rgb(221 221 221 / var(--tw-border-opacity))",
          padding: "8px 12px",
          fontSize: "14px"
        }
      }), a("input", {
        type: "text",
        name: "state",
        placeholder: i("설명_도시군"),
        defaultValue: (t == null ? void 0 : t.state) ?? "",
        css: {
          marginBottom: "10px",
          height: "36px",
          width: "100%",
          borderWidth: "1px",
          borderStyle: "solid",
          "--tw-border-opacity": "1",
          borderColor: "rgb(221 221 221 / var(--tw-border-opacity))",
          padding: "8px 12px",
          fontSize: "14px"
        }
      }), a("input", {
        type: "text",
        name: "zipcode",
        placeholder: i("설명_우편번호"),
        defaultValue: (t == null ? void 0 : t.zipcode) ?? "",
        css: {
          marginBottom: "10px",
          height: "36px",
          width: "100%",
          borderWidth: "1px",
          borderStyle: "solid",
          "--tw-border-opacity": "1",
          borderColor: "rgb(221 221 221 / var(--tw-border-opacity))",
          padding: "8px 12px",
          fontSize: "14px"
        }
      }));
    case "3":
      return a("fieldset", {
        ref: l,
        onChange: P
      }, a("div", {
        css: {
          marginBottom: "6px",
          display: "flex",
          "@media not all and (min-width: 768px)": {
            flexDirection: "column"
          }
        }
      }, a("div", {
        css: {
          flex: "1 1 0%"
        }
      }, a("input", {
        css: [{
          marginBottom: "4px",
          height: "36px",
          width: "100%",
          borderWidth: "1px",
          borderStyle: "solid",
          "--tw-border-opacity": "1",
          borderColor: "rgb(221 221 221 / var(--tw-border-opacity))",
          padding: "0.5em 0.75em",
          fontSize: "14px"
        }, typeof g < "u" ? {
          "--tw-border-opacity": "1",
          borderColor: "rgb(251 70 55 / var(--tw-border-opacity))"
        } : null],
        type: "text",
        name: "name",
        placeholder: i(o ? "설명_받는분성함" : "설명_수령인"),
        defaultValue: (t == null ? void 0 : t.name) ?? "",
        onBlur: B
      }), typeof g < "u" ? a("p", {
        css: {
          margin: "2px 0 0",
          fontSize: "12px",
          "--tw-text-opacity": "1",
          color: "rgb(251 70 55 / var(--tw-text-opacity))"
        }
      }, g) : null), a("div", {
        css: {
          marginLeft: "10px",
          flex: "1 1 0%",
          "@media not all and (min-width: 768px)": {
            marginLeft: "0px",
            marginTop: "10px"
          }
        }
      }, a("input", {
        css: [{
          marginBottom: "4px",
          height: "36px",
          width: "100%",
          borderWidth: "1px",
          borderStyle: "solid",
          "--tw-border-opacity": "1",
          borderColor: "rgb(221 221 221 / var(--tw-border-opacity))",
          padding: "0.5em 0.75em",
          fontSize: "14px"
        }, typeof u < "u" || typeof b < "u" ? {
          "--tw-border-opacity": "1",
          borderColor: "rgb(251 70 55 / var(--tw-border-opacity))"
        } : null],
        type: "text",
        name: "call",
        placeholder: i("설명_연락처"),
        defaultValue: (t == null ? void 0 : t.call) ?? "",
        onFocus: () => y(void 0),
        onBlur: W
      }), typeof u < "u" ? a("p", {
        css: {
          margin: "2px 0 0",
          fontSize: "12px",
          "--tw-text-opacity": "1",
          color: "rgb(251 70 55 / var(--tw-text-opacity))"
        }
      }, u) : null, typeof b < "u" ? a("p", {
        css: {
          margin: "2px 0 0",
          fontSize: "12px",
          "--tw-text-opacity": "1",
          color: "rgb(251 70 55 / var(--tw-text-opacity))"
        }
      }, b) : null)), a("div", {
        css: {
          marginBottom: "5px"
        }
      }, a(pt, {
        name: "country",
        defaultValue: t == null ? void 0 : t.country
      }, (n ?? []).map(({
        code: m,
        name: S
      }) => a("option", {
        key: m,
        value: m
      }, S)))), a("input", {
        type: "text",
        name: "addr1",
        placeholder: i("설명_주소"),
        defaultValue: (t == null ? void 0 : t.addr1) ?? "",
        css: {
          marginBottom: "10px",
          height: "36px",
          width: "100%",
          borderWidth: "1px",
          borderStyle: "solid",
          "--tw-border-opacity": "1",
          borderColor: "rgb(221 221 221 / var(--tw-border-opacity))",
          padding: "8px 12px",
          fontSize: "14px"
        }
      }), a("input", {
        type: "text",
        name: "addr2",
        placeholder: i("설명_상세주소"),
        defaultValue: (t == null ? void 0 : t.addr2) ?? "",
        css: {
          marginBottom: "10px",
          height: "36px",
          width: "100%",
          borderWidth: "1px",
          borderStyle: "solid",
          "--tw-border-opacity": "1",
          borderColor: "rgb(221 221 221 / var(--tw-border-opacity))",
          padding: "8px 12px",
          fontSize: "14px"
        }
      }), a("input", {
        type: "text",
        name: "zipcode",
        placeholder: i("설명_우편번호"),
        defaultValue: (t == null ? void 0 : t.zipcode) ?? "",
        css: {
          marginBottom: "10px",
          height: "36px",
          width: "100%",
          borderWidth: "1px",
          borderStyle: "solid",
          "--tw-border-opacity": "1",
          borderColor: "rgb(221 221 221 / var(--tw-border-opacity))",
          padding: "8px 12px",
          fontSize: "14px"
        }
      }));
    case "TW":
      return a("fieldset", {
        ref: l,
        onChange: P
      }, a("div", {
        css: {
          marginBottom: "6px",
          display: "flex",
          "@media not all and (min-width: 768px)": {
            flexDirection: "column"
          }
        }
      }, a("div", null, a("input", {
        css: [{
          marginBottom: "4px",
          height: "36px",
          width: "100%",
          borderWidth: "1px",
          borderStyle: "solid",
          "--tw-border-opacity": "1",
          borderColor: "rgb(221 221 221 / var(--tw-border-opacity))",
          padding: "0.5em 0.75em",
          fontSize: "14px"
        }, typeof g < "u" ? {
          "--tw-border-opacity": "1",
          borderColor: "rgb(251 70 55 / var(--tw-border-opacity))"
        } : null],
        type: "text",
        name: "name",
        placeholder: i(o ? "설명_받는분성함" : "설명_수령인"),
        defaultValue: (t == null ? void 0 : t.name) ?? "",
        onBlur: B
      }), typeof g < "u" ? a("p", {
        css: {
          margin: "2px 0 0",
          fontSize: "12px",
          "--tw-text-opacity": "1",
          color: "rgb(251 70 55 / var(--tw-text-opacity))"
        }
      }, g) : null), a("div", {
        css: {
          marginLeft: "10px",
          flex: "1 1 0%",
          "@media not all and (min-width: 768px)": {
            marginLeft: "0px",
            marginTop: "10px"
          }
        }
      }, a("input", {
        css: [{
          marginBottom: "4px",
          height: "36px",
          width: "100%",
          borderWidth: "1px",
          borderStyle: "solid",
          "--tw-border-opacity": "1",
          borderColor: "rgb(221 221 221 / var(--tw-border-opacity))",
          padding: "0.5em 0.75em",
          fontSize: "14px"
        }, typeof u < "u" || typeof b < "u" ? {
          "--tw-border-opacity": "1",
          borderColor: "rgb(251 70 55 / var(--tw-border-opacity))"
        } : null],
        type: "text",
        name: "call",
        placeholder: i("설명_연락처"),
        defaultValue: (t == null ? void 0 : t.call) ?? "",
        onFocus: () => y(void 0),
        onBlur: W
      }), typeof u < "u" ? a("p", {
        css: {
          margin: "2px 0 0",
          fontSize: "12px",
          "--tw-text-opacity": "1",
          color: "rgb(251 70 55 / var(--tw-text-opacity))"
        }
      }, u) : null, typeof b < "u" ? a("p", {
        css: {
          margin: "2px 0 0",
          fontSize: "12px",
          "--tw-text-opacity": "1",
          color: "rgb(251 70 55 / var(--tw-text-opacity))"
        }
      }, b) : null)), a("div", {
        css: {
          marginBottom: "5px"
        }
      }, a(pt, {
        name: "country",
        defaultValue: t == null ? void 0 : t.country
      }, (n ?? []).map(({
        code: m,
        name: S
      }) => a("option", {
        key: m,
        value: m
      }, S)))), a("input", {
        type: "text",
        name: "city",
        placeholder: i("설명_도시명"),
        defaultValue: (t == null ? void 0 : t.city) ?? "",
        css: {
          marginBottom: "10px",
          height: "36px",
          width: "100%",
          borderWidth: "1px",
          borderStyle: "solid",
          "--tw-border-opacity": "1",
          borderColor: "rgb(221 221 221 / var(--tw-border-opacity))",
          padding: "8px 12px",
          fontSize: "14px"
        }
      }), a("input", {
        type: "text",
        name: "street",
        placeholder: i("설명_거리주소"),
        defaultValue: (t == null ? void 0 : t.street) ?? "",
        css: {
          marginBottom: "10px",
          height: "36px",
          width: "100%",
          borderWidth: "1px",
          borderStyle: "solid",
          "--tw-border-opacity": "1",
          borderColor: "rgb(221 221 221 / var(--tw-border-opacity))",
          padding: "8px 12px",
          fontSize: "14px"
        }
      }), a("input", {
        type: "text",
        name: "addr1",
        placeholder: i("설명_주소"),
        defaultValue: (t == null ? void 0 : t.addr1) ?? "",
        css: {
          marginBottom: "10px",
          height: "36px",
          width: "100%",
          borderWidth: "1px",
          borderStyle: "solid",
          "--tw-border-opacity": "1",
          borderColor: "rgb(221 221 221 / var(--tw-border-opacity))",
          padding: "8px 12px",
          fontSize: "14px"
        }
      }), a("input", {
        type: "text",
        name: "zipcode",
        placeholder: i("설명_우편번호"),
        defaultValue: (t == null ? void 0 : t.zipcode) ?? "",
        css: {
          marginBottom: "10px",
          height: "36px",
          width: "100%",
          borderWidth: "1px",
          borderStyle: "solid",
          "--tw-border-opacity": "1",
          borderColor: "rgb(221 221 221 / var(--tw-border-opacity))",
          padding: "8px 12px",
          fontSize: "14px"
        }
      }));
    case "VN":
      return a("fieldset", {
        ref: l,
        onChange: P
      }, a("div", {
        css: {
          marginBottom: "6px",
          display: "flex",
          "@media not all and (min-width: 768px)": {
            flexDirection: "column"
          }
        }
      }, a("div", null, a("input", {
        css: [{
          marginBottom: "4px",
          height: "36px",
          width: "100%",
          borderWidth: "1px",
          borderStyle: "solid",
          "--tw-border-opacity": "1",
          borderColor: "rgb(221 221 221 / var(--tw-border-opacity))",
          padding: "0.5em 0.75em",
          fontSize: "14px"
        }, typeof g < "u" ? {
          "--tw-border-opacity": "1",
          borderColor: "rgb(251 70 55 / var(--tw-border-opacity))"
        } : null],
        type: "text",
        name: "name",
        placeholder: i(o ? "설명_받는분성함" : "설명_수령인"),
        defaultValue: (t == null ? void 0 : t.name) ?? "",
        onBlur: B
      }), typeof g < "u" ? a("p", {
        css: {
          margin: "2px 0 0",
          fontSize: "12px",
          "--tw-text-opacity": "1",
          color: "rgb(251 70 55 / var(--tw-text-opacity))"
        }
      }, g) : null), a("div", {
        css: {
          marginLeft: "10px",
          flex: "1 1 0%",
          "@media not all and (min-width: 768px)": {
            marginLeft: "0px",
            marginTop: "10px"
          }
        }
      }, a("input", {
        css: [{
          marginBottom: "4px",
          height: "36px",
          width: "100%",
          borderWidth: "1px",
          borderStyle: "solid",
          "--tw-border-opacity": "1",
          borderColor: "rgb(221 221 221 / var(--tw-border-opacity))",
          padding: "0.5em 0.75em",
          fontSize: "14px"
        }, typeof u < "u" || typeof b < "u" ? {
          "--tw-border-opacity": "1",
          borderColor: "rgb(251 70 55 / var(--tw-border-opacity))"
        } : null],
        type: "text",
        name: "call",
        placeholder: i("설명_연락처"),
        defaultValue: (t == null ? void 0 : t.call) ?? "",
        onFocus: () => y(void 0),
        onBlur: W
      }), typeof u < "u" ? a("p", {
        css: {
          margin: "2px 0 0",
          fontSize: "12px",
          "--tw-text-opacity": "1",
          color: "rgb(251 70 55 / var(--tw-text-opacity))"
        }
      }, u) : null, typeof b < "u" ? a("p", {
        css: {
          margin: "2px 0 0",
          fontSize: "12px",
          "--tw-text-opacity": "1",
          color: "rgb(251 70 55 / var(--tw-text-opacity))"
        }
      }, b) : null)), a("div", {
        css: {
          marginBottom: "5px"
        }
      }, a(pt, {
        name: "country",
        defaultValue: t == null ? void 0 : t.country
      }, (n ?? []).map(({
        code: m,
        name: S
      }) => a("option", {
        key: m,
        value: m
      }, S)))), a("input", {
        type: "text",
        name: "state",
        placeholder: i("설명_도시군"),
        defaultValue: (t == null ? void 0 : t.state) ?? "",
        css: {
          marginBottom: "10px",
          height: "36px",
          width: "100%",
          borderWidth: "1px",
          borderStyle: "solid",
          "--tw-border-opacity": "1",
          borderColor: "rgb(221 221 221 / var(--tw-border-opacity))",
          padding: "8px 12px",
          fontSize: "14px"
        }
      }), a("input", {
        type: "text",
        name: "city",
        placeholder: i("설명_도시명"),
        defaultValue: (t == null ? void 0 : t.city) ?? "",
        css: {
          marginBottom: "10px",
          height: "36px",
          width: "100%",
          borderWidth: "1px",
          borderStyle: "solid",
          "--tw-border-opacity": "1",
          borderColor: "rgb(221 221 221 / var(--tw-border-opacity))",
          padding: "8px 12px",
          fontSize: "14px"
        }
      }), a("input", {
        type: "text",
        name: "addr1",
        placeholder: i("설명_주소"),
        defaultValue: (t == null ? void 0 : t.addr1) ?? "",
        css: {
          marginBottom: "10px",
          height: "36px",
          width: "100%",
          borderWidth: "1px",
          borderStyle: "solid",
          "--tw-border-opacity": "1",
          borderColor: "rgb(221 221 221 / var(--tw-border-opacity))",
          padding: "8px 12px",
          fontSize: "14px"
        }
      }));
    case "HK":
      return a("fieldset", {
        ref: l,
        onChange: P
      }, a("div", {
        css: {
          marginBottom: "6px",
          display: "flex",
          "@media not all and (min-width: 768px)": {
            flexDirection: "column"
          }
        }
      }, a("div", null, a("input", {
        css: [{
          marginBottom: "4px",
          height: "36px",
          width: "100%",
          borderWidth: "1px",
          borderStyle: "solid",
          "--tw-border-opacity": "1",
          borderColor: "rgb(221 221 221 / var(--tw-border-opacity))",
          padding: "0.5em 0.75em",
          fontSize: "14px"
        }, typeof g < "u" ? {
          "--tw-border-opacity": "1",
          borderColor: "rgb(251 70 55 / var(--tw-border-opacity))"
        } : null],
        type: "text",
        name: "name",
        placeholder: i(o ? "설명_받는분성함" : "설명_수령인"),
        defaultValue: (t == null ? void 0 : t.name) ?? "",
        onBlur: B
      }), typeof g < "u" ? a("p", {
        css: {
          margin: "2px 0 0",
          fontSize: "12px",
          "--tw-text-opacity": "1",
          color: "rgb(251 70 55 / var(--tw-text-opacity))"
        }
      }, g) : null), a("div", {
        css: {
          marginLeft: "10px",
          flex: "1 1 0%",
          "@media not all and (min-width: 768px)": {
            marginLeft: "0px",
            marginTop: "10px"
          }
        }
      }, a("input", {
        css: [{
          marginBottom: "4px",
          height: "36px",
          width: "100%",
          borderWidth: "1px",
          borderStyle: "solid",
          "--tw-border-opacity": "1",
          borderColor: "rgb(221 221 221 / var(--tw-border-opacity))",
          padding: "0.5em 0.75em",
          fontSize: "14px"
        }, typeof u < "u" || typeof b < "u" ? {
          "--tw-border-opacity": "1",
          borderColor: "rgb(251 70 55 / var(--tw-border-opacity))"
        } : null],
        type: "text",
        name: "call",
        placeholder: i("설명_연락처"),
        defaultValue: (t == null ? void 0 : t.call) ?? "",
        onFocus: () => y(void 0),
        onBlur: W
      }), typeof u < "u" ? a("p", {
        css: {
          margin: "2px 0 0",
          fontSize: "12px",
          "--tw-text-opacity": "1",
          color: "rgb(251 70 55 / var(--tw-text-opacity))"
        }
      }, u) : null, typeof b < "u" ? a("p", {
        css: {
          margin: "2px 0 0",
          fontSize: "12px",
          "--tw-text-opacity": "1",
          color: "rgb(251 70 55 / var(--tw-text-opacity))"
        }
      }, b) : null)), a("div", {
        css: {
          marginBottom: "5px"
        }
      }, a(pt, {
        name: "country",
        defaultValue: t == null ? void 0 : t.country
      }, (n ?? []).map(({
        code: m,
        name: S
      }) => a("option", {
        key: m,
        value: m
      }, S)))), a("input", {
        type: "text",
        name: "city",
        placeholder: i("설명_도시명"),
        defaultValue: (t == null ? void 0 : t.city) ?? "",
        css: {
          marginBottom: "10px",
          height: "36px",
          width: "100%",
          borderWidth: "1px",
          borderStyle: "solid",
          "--tw-border-opacity": "1",
          borderColor: "rgb(221 221 221 / var(--tw-border-opacity))",
          padding: "8px 12px",
          fontSize: "14px"
        }
      }), a("input", {
        type: "text",
        name: "street",
        placeholder: i("설명_거리주소"),
        defaultValue: (t == null ? void 0 : t.street) ?? "",
        css: {
          marginBottom: "10px",
          height: "36px",
          width: "100%",
          borderWidth: "1px",
          borderStyle: "solid",
          "--tw-border-opacity": "1",
          borderColor: "rgb(221 221 221 / var(--tw-border-opacity))",
          padding: "8px 12px",
          fontSize: "14px"
        }
      }), a("input", {
        type: "text",
        name: "addr1",
        placeholder: i("설명_주소"),
        defaultValue: (t == null ? void 0 : t.addr1) ?? "",
        css: {
          marginBottom: "10px",
          height: "36px",
          width: "100%",
          borderWidth: "1px",
          borderStyle: "solid",
          "--tw-border-opacity": "1",
          borderColor: "rgb(221 221 221 / var(--tw-border-opacity))",
          padding: "8px 12px",
          fontSize: "14px"
        }
      }));
  }
  return null;
});
Object.assign(nt.defaults, nn);
const hl = (t) => ({
  queryKey: ["MemberShippingAddresses"],
  queryFn: async ({
    pageParam: e = 1,
    signal: n
  }) => {
    const {
      data: o
    } = await nt.post("/ajax/oms/OMS_get_member_shipping_address.cm", {
      page: e,
      page_size: si
    }, {
      signal: n
    });
    return Object.assign(o, {
      list: o.list ?? []
    }), o;
  },
  // TODO: 기본 & 최신 배송지에 대한 정렬
  select: ({
    pages: e,
    pageParams: n
  }) => ({
    pages: e.map(({
      list: o
    }) => o.flatMap((r) => r ? Qe(r) : [])),
    pageParams: e.map(({
      page: o
    }) => o)
  }),
  getNextPageParam: (e, n) => {
    if (e.has_next)
      return e.page + 1;
  },
  keepPreviousData: !0,
  ...t
}), gl = R.forwardRef(({
  selected: t,
  disabled: e,
  value: n,
  isLast: o,
  children: r,
  onChange: c
}, s) => a("li", {
  css: {
    position: "relative",
    marginBottom: "28px"
  },
  ref: o ? s : void 0
}, a("label", {
  css: [{
    display: "block",
    width: "100%"
  }, e ? {
    cursor: "not-allowed"
  } : {
    cursor: "pointer"
  }]
}, a("div", {
  css: {
    display: "flex",
    alignItems: "flex-start"
  }
}, a("div", {
  css: {
    marginRight: "16px",
    padding: "3px"
  }
}, a(qt, {
  name: "shipping_address",
  value: n,
  checked: t,
  disabled: e,
  onChange: c
})), a("div", {
  css: {
    flex: "1 1 0%"
  }
}, r))), o ? null : a("hr", {
  css: {
    marginTop: "16px",
    marginBottom: "16px",
    "--tw-border-opacity": "1",
    borderColor: "rgb(229 229 229 / var(--tw-border-opacity))"
  }
}))), fl = ({
  subscriptionOrderCode: t,
  queryOptions: e
} = {}) => ({
  queryKey: ["PayingPeriod", t],
  queryFn: async ({
    signal: n
  }) => {
    var r;
    const {
      data: o
    } = await nt.get(`/ajax/oms/OMS_wrap_customer_v1_subscription_{subscriptionOrderCode}_cycle.cm?subscriptionOrderCode=${t}`, {
      signal: n
    });
    if (!/^SUCCESS$/i.test(o == null ? void 0 : o.message))
      throw new Error(o == null ? void 0 : o.message);
    return {
      ...o == null ? void 0 : o.data,
      list: ((r = o == null ? void 0 : o.data) == null ? void 0 : r.list) ?? []
    };
  },
  ...e,
  // 빈 문자열 차단 필수 — useURLSearchParams 는 `?subscription_order_code=` 를 '' 로 넘기고,
  // 빈 코드로 요청하면 BE @IsNotEmpty 가 400 을 준다. 이 쿼리를 쓰는 MyPageOrderSubscription 앱엔
  // ErrorBoundary 가 없어 throw 가 페이지 전체를 깨뜨린다. (형제 쿼리 order-subscription-previous-paid 와 동일 가드)
  enabled: typeof t == "string" && t.length > 0 && ((e == null ? void 0 : e.enabled) ?? !0)
});
export {
  Fc as A,
  lt as C,
  il as D,
  ul as F,
  hn as I,
  Pt as L,
  nl as M,
  Pc as N,
  Ic as O,
  rl as P,
  qt as R,
  pt as S,
  tl as a,
  el as b,
  Jt as c,
  ol as d,
  al as e,
  pl as f,
  Zc as g,
  Jc as h,
  hl as i,
  Ft as j,
  gl as k,
  fl as l,
  sl as m,
  _c as n,
  Aa as o,
  dl as p,
  Oc as q,
  ml as r,
  cl as s,
  zc as t,
  Gt as u,
  ll as v
};
//# sourceMappingURL=subscription-cycle.query-CpujzM0d.js.map
