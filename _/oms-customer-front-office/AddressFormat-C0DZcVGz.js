import { t as w, d as ne, m as G } from "./differenceInCalendarDays-D0oSghL6.js";
import { R as Q } from "./queryClient-DpZpBkWP.js";
import { b as oe, a as D } from "./app-MHqjRhKy.js";
import { j as c, u as ie } from "./emotion-react.browser.esm-B9sQ19ZB.js";
import { u as re } from "./useClassicTranslation-ouIPeWST.js";
import { S as ce } from "./site-info.query-DSuQTJpJ.js";
function y(e, n) {
  return e instanceof Date ? new e.constructor(n) : new Date(n);
}
let ae = {};
function I() {
  return ae;
}
function R(e, n) {
  var d, u, m, p;
  const t = I(), o = (n == null ? void 0 : n.weekStartsOn) ?? ((u = (d = n == null ? void 0 : n.locale) == null ? void 0 : d.options) == null ? void 0 : u.weekStartsOn) ?? t.weekStartsOn ?? ((p = (m = t.locale) == null ? void 0 : m.options) == null ? void 0 : p.weekStartsOn) ?? 0, i = w(e), r = i.getDay(), a = (r < o ? 7 : 0) + r - o;
  return i.setDate(i.getDate() - a), i.setHours(0, 0, 0, 0), i;
}
function v(e) {
  return R(e, { weekStartsOn: 1 });
}
function z(e) {
  const n = w(e), t = n.getFullYear(), o = y(e, 0);
  o.setFullYear(t + 1, 0, 4), o.setHours(0, 0, 0, 0);
  const i = v(o), r = y(e, 0);
  r.setFullYear(t, 0, 4), r.setHours(0, 0, 0, 0);
  const a = v(r);
  return n.getTime() >= i.getTime() ? t + 1 : n.getTime() >= a.getTime() ? t : t - 1;
}
function de(e) {
  const n = z(e), t = y(e, 0);
  return t.setFullYear(n, 0, 4), t.setHours(0, 0, 0, 0), v(t);
}
function se(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function ue(e) {
  if (!se(e) && typeof e != "number")
    return !1;
  const n = w(e);
  return !isNaN(Number(n));
}
function me(e) {
  const n = w(e), t = y(e, 0);
  return t.setFullYear(n.getFullYear(), 0, 1), t.setHours(0, 0, 0, 0), t;
}
const pe = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, le = (e, n, t) => {
  let o;
  const i = pe[e];
  return typeof i == "string" ? o = i : n === 1 ? o = i.one : o = i.other.replace("{{count}}", n.toString()), t != null && t.addSuffix ? t.comparison && t.comparison > 0 ? "in " + o : o + " ago" : o;
};
function k(e) {
  return (n = {}) => {
    const t = n.width ? String(n.width) : e.defaultWidth;
    return e.formats[t] || e.formats[e.defaultWidth];
  };
}
const ge = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Ce = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, we = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, fe = {
  date: k({
    formats: ge,
    defaultWidth: "full"
  }),
  time: k({
    formats: Ce,
    defaultWidth: "full"
  }),
  dateTime: k({
    formats: we,
    defaultWidth: "full"
  })
}, _e = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, he = (e, n, t, o) => _e[e];
function x(e) {
  return (n, t) => {
    const o = t != null && t.context ? String(t.context) : "standalone";
    let i;
    if (o === "formatting" && e.formattingValues) {
      const a = e.defaultFormattingWidth || e.defaultWidth, d = t != null && t.width ? String(t.width) : a;
      i = e.formattingValues[d] || e.formattingValues[a];
    } else {
      const a = e.defaultWidth, d = t != null && t.width ? String(t.width) : e.defaultWidth;
      i = e.values[d] || e.values[a];
    }
    const r = e.argumentCallback ? e.argumentCallback(n) : n;
    return i[r];
  };
}
const Oe = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Se = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, ye = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
}, Te = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
}, Pe = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, be = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, xe = (e, n) => {
  const t = Number(e), o = t % 100;
  if (o > 20 || o < 10)
    switch (o % 10) {
      case 1:
        return t + "st";
      case 2:
        return t + "nd";
      case 3:
        return t + "rd";
    }
  return t + "th";
}, Me = {
  ordinalNumber: xe,
  era: x({
    values: Oe,
    defaultWidth: "wide"
  }),
  quarter: x({
    values: Se,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: x({
    values: ye,
    defaultWidth: "wide"
  }),
  day: x({
    values: Te,
    defaultWidth: "wide"
  }),
  dayPeriod: x({
    values: Pe,
    defaultWidth: "wide",
    formattingValues: be,
    defaultFormattingWidth: "wide"
  })
};
function M(e) {
  return (n, t = {}) => {
    const o = t.width, i = o && e.matchPatterns[o] || e.matchPatterns[e.defaultMatchWidth], r = n.match(i);
    if (!r)
      return null;
    const a = r[0], d = o && e.parsePatterns[o] || e.parsePatterns[e.defaultParseWidth], u = Array.isArray(d) ? Be(d, (C) => C.test(a)) : (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      Re(d, (C) => C.test(a))
    );
    let m;
    m = e.valueCallback ? e.valueCallback(u) : u, m = t.valueCallback ? (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      t.valueCallback(m)
    ) : m;
    const p = n.slice(a.length);
    return { value: m, rest: p };
  };
}
function Re(e, n) {
  for (const t in e)
    if (Object.prototype.hasOwnProperty.call(e, t) && n(e[t]))
      return t;
}
function Be(e, n) {
  for (let t = 0; t < e.length; t++)
    if (n(e[t]))
      return t;
}
function De(e) {
  return (n, t = {}) => {
    const o = n.match(e.matchPattern);
    if (!o)
      return null;
    const i = o[0], r = n.match(e.parsePattern);
    if (!r)
      return null;
    let a = e.valueCallback ? e.valueCallback(r[0]) : r[0];
    a = t.valueCallback ? t.valueCallback(a) : a;
    const d = n.slice(i.length);
    return { value: a, rest: d };
  };
}
const ve = /^(\d+)(th|st|nd|rd)?/i, Ie = /\d+/i, ke = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Ee = {
  any: [/^b/i, /^(a|c)/i]
}, Fe = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, We = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Le = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, Ye = {
  narrow: [
    /^j/i,
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
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, Ne = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Ae = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, qe = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, He = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, je = {
  ordinalNumber: De({
    matchPattern: ve,
    parsePattern: Ie,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: M({
    matchPatterns: ke,
    defaultMatchWidth: "wide",
    parsePatterns: Ee,
    defaultParseWidth: "any"
  }),
  quarter: M({
    matchPatterns: Fe,
    defaultMatchWidth: "wide",
    parsePatterns: We,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: M({
    matchPatterns: Le,
    defaultMatchWidth: "wide",
    parsePatterns: Ye,
    defaultParseWidth: "any"
  }),
  day: M({
    matchPatterns: Ne,
    defaultMatchWidth: "wide",
    parsePatterns: Ae,
    defaultParseWidth: "any"
  }),
  dayPeriod: M({
    matchPatterns: qe,
    defaultMatchWidth: "any",
    parsePatterns: He,
    defaultParseWidth: "any"
  })
}, Ue = {
  code: "en-US",
  formatDistance: le,
  formatLong: fe,
  formatRelative: he,
  localize: Me,
  match: je,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function Ge(e) {
  const n = w(e);
  return ne(n, me(n)) + 1;
}
function Qe(e) {
  const n = w(e), t = v(n).getTime() - de(n).getTime();
  return Math.round(t / G) + 1;
}
function X(e, n) {
  var p, C, P, b;
  const t = w(e), o = t.getFullYear(), i = I(), r = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((C = (p = n == null ? void 0 : n.locale) == null ? void 0 : p.options) == null ? void 0 : C.firstWeekContainsDate) ?? i.firstWeekContainsDate ?? ((b = (P = i.locale) == null ? void 0 : P.options) == null ? void 0 : b.firstWeekContainsDate) ?? 1, a = y(e, 0);
  a.setFullYear(o + 1, 0, r), a.setHours(0, 0, 0, 0);
  const d = R(a, n), u = y(e, 0);
  u.setFullYear(o, 0, r), u.setHours(0, 0, 0, 0);
  const m = R(u, n);
  return t.getTime() >= d.getTime() ? o + 1 : t.getTime() >= m.getTime() ? o : o - 1;
}
function ze(e, n) {
  var d, u, m, p;
  const t = I(), o = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((u = (d = n == null ? void 0 : n.locale) == null ? void 0 : d.options) == null ? void 0 : u.firstWeekContainsDate) ?? t.firstWeekContainsDate ?? ((p = (m = t.locale) == null ? void 0 : m.options) == null ? void 0 : p.firstWeekContainsDate) ?? 1, i = X(e, n), r = y(e, 0);
  return r.setFullYear(i, 0, o), r.setHours(0, 0, 0, 0), R(r, n);
}
function Xe(e, n) {
  const t = w(e), o = R(t, n).getTime() - ze(t, n).getTime();
  return Math.round(o / G) + 1;
}
function s(e, n) {
  const t = e < 0 ? "-" : "", o = Math.abs(e).toString().padStart(n, "0");
  return t + o;
}
const _ = {
  // Year
  y(e, n) {
    const t = e.getFullYear(), o = t > 0 ? t : 1 - t;
    return s(n === "yy" ? o % 100 : o, n.length);
  },
  // Month
  M(e, n) {
    const t = e.getMonth();
    return n === "M" ? String(t + 1) : s(t + 1, 2);
  },
  // Day of the month
  d(e, n) {
    return s(e.getDate(), n.length);
  },
  // AM or PM
  a(e, n) {
    const t = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (n) {
      case "a":
      case "aa":
        return t.toUpperCase();
      case "aaa":
        return t;
      case "aaaaa":
        return t[0];
      case "aaaa":
      default:
        return t === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(e, n) {
    return s(e.getHours() % 12 || 12, n.length);
  },
  // Hour [0-23]
  H(e, n) {
    return s(e.getHours(), n.length);
  },
  // Minute
  m(e, n) {
    return s(e.getMinutes(), n.length);
  },
  // Second
  s(e, n) {
    return s(e.getSeconds(), n.length);
  },
  // Fraction of second
  S(e, n) {
    const t = n.length, o = e.getMilliseconds(), i = Math.floor(
      o * Math.pow(10, t - 3)
    );
    return s(i, n.length);
  }
}, T = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, Ve = {
  // Era
  G: function(e, n, t) {
    const o = e.getFullYear() > 0 ? 1 : 0;
    switch (n) {
      case "G":
      case "GG":
      case "GGG":
        return t.era(o, { width: "abbreviated" });
      case "GGGGG":
        return t.era(o, { width: "narrow" });
      case "GGGG":
      default:
        return t.era(o, { width: "wide" });
    }
  },
  // Year
  y: function(e, n, t) {
    if (n === "yo") {
      const o = e.getFullYear(), i = o > 0 ? o : 1 - o;
      return t.ordinalNumber(i, { unit: "year" });
    }
    return _.y(e, n);
  },
  // Local week-numbering year
  Y: function(e, n, t, o) {
    const i = X(e, o), r = i > 0 ? i : 1 - i;
    if (n === "YY") {
      const a = r % 100;
      return s(a, 2);
    }
    return n === "Yo" ? t.ordinalNumber(r, { unit: "year" }) : s(r, n.length);
  },
  // ISO week-numbering year
  R: function(e, n) {
    const t = z(e);
    return s(t, n.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(e, n) {
    const t = e.getFullYear();
    return s(t, n.length);
  },
  // Quarter
  Q: function(e, n, t) {
    const o = Math.ceil((e.getMonth() + 1) / 3);
    switch (n) {
      case "Q":
        return String(o);
      case "QQ":
        return s(o, 2);
      case "Qo":
        return t.ordinalNumber(o, { unit: "quarter" });
      case "QQQ":
        return t.quarter(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return t.quarter(o, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return t.quarter(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(e, n, t) {
    const o = Math.ceil((e.getMonth() + 1) / 3);
    switch (n) {
      case "q":
        return String(o);
      case "qq":
        return s(o, 2);
      case "qo":
        return t.ordinalNumber(o, { unit: "quarter" });
      case "qqq":
        return t.quarter(o, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return t.quarter(o, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return t.quarter(o, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(e, n, t) {
    const o = e.getMonth();
    switch (n) {
      case "M":
      case "MM":
        return _.M(e, n);
      case "Mo":
        return t.ordinalNumber(o + 1, { unit: "month" });
      case "MMM":
        return t.month(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return t.month(o, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return t.month(o, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(e, n, t) {
    const o = e.getMonth();
    switch (n) {
      case "L":
        return String(o + 1);
      case "LL":
        return s(o + 1, 2);
      case "Lo":
        return t.ordinalNumber(o + 1, { unit: "month" });
      case "LLL":
        return t.month(o, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return t.month(o, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return t.month(o, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(e, n, t, o) {
    const i = Xe(e, o);
    return n === "wo" ? t.ordinalNumber(i, { unit: "week" }) : s(i, n.length);
  },
  // ISO week of year
  I: function(e, n, t) {
    const o = Qe(e);
    return n === "Io" ? t.ordinalNumber(o, { unit: "week" }) : s(o, n.length);
  },
  // Day of the month
  d: function(e, n, t) {
    return n === "do" ? t.ordinalNumber(e.getDate(), { unit: "date" }) : _.d(e, n);
  },
  // Day of year
  D: function(e, n, t) {
    const o = Ge(e);
    return n === "Do" ? t.ordinalNumber(o, { unit: "dayOfYear" }) : s(o, n.length);
  },
  // Day of week
  E: function(e, n, t) {
    const o = e.getDay();
    switch (n) {
      case "E":
      case "EE":
      case "EEE":
        return t.day(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return t.day(o, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return t.day(o, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return t.day(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(e, n, t, o) {
    const i = e.getDay(), r = (i - o.weekStartsOn + 8) % 7 || 7;
    switch (n) {
      case "e":
        return String(r);
      case "ee":
        return s(r, 2);
      case "eo":
        return t.ordinalNumber(r, { unit: "day" });
      case "eee":
        return t.day(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return t.day(i, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return t.day(i, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return t.day(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(e, n, t, o) {
    const i = e.getDay(), r = (i - o.weekStartsOn + 8) % 7 || 7;
    switch (n) {
      case "c":
        return String(r);
      case "cc":
        return s(r, n.length);
      case "co":
        return t.ordinalNumber(r, { unit: "day" });
      case "ccc":
        return t.day(i, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return t.day(i, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return t.day(i, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return t.day(i, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(e, n, t) {
    const o = e.getDay(), i = o === 0 ? 7 : o;
    switch (n) {
      case "i":
        return String(i);
      case "ii":
        return s(i, n.length);
      case "io":
        return t.ordinalNumber(i, { unit: "day" });
      case "iii":
        return t.day(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return t.day(o, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return t.day(o, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return t.day(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(e, n, t) {
    const i = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (n) {
      case "a":
      case "aa":
        return t.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return t.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return t.dayPeriod(i, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return t.dayPeriod(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(e, n, t) {
    const o = e.getHours();
    let i;
    switch (o === 12 ? i = T.noon : o === 0 ? i = T.midnight : i = o / 12 >= 1 ? "pm" : "am", n) {
      case "b":
      case "bb":
        return t.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return t.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return t.dayPeriod(i, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return t.dayPeriod(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(e, n, t) {
    const o = e.getHours();
    let i;
    switch (o >= 17 ? i = T.evening : o >= 12 ? i = T.afternoon : o >= 4 ? i = T.morning : i = T.night, n) {
      case "B":
      case "BB":
      case "BBB":
        return t.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return t.dayPeriod(i, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return t.dayPeriod(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(e, n, t) {
    if (n === "ho") {
      let o = e.getHours() % 12;
      return o === 0 && (o = 12), t.ordinalNumber(o, { unit: "hour" });
    }
    return _.h(e, n);
  },
  // Hour [0-23]
  H: function(e, n, t) {
    return n === "Ho" ? t.ordinalNumber(e.getHours(), { unit: "hour" }) : _.H(e, n);
  },
  // Hour [0-11]
  K: function(e, n, t) {
    const o = e.getHours() % 12;
    return n === "Ko" ? t.ordinalNumber(o, { unit: "hour" }) : s(o, n.length);
  },
  // Hour [1-24]
  k: function(e, n, t) {
    let o = e.getHours();
    return o === 0 && (o = 24), n === "ko" ? t.ordinalNumber(o, { unit: "hour" }) : s(o, n.length);
  },
  // Minute
  m: function(e, n, t) {
    return n === "mo" ? t.ordinalNumber(e.getMinutes(), { unit: "minute" }) : _.m(e, n);
  },
  // Second
  s: function(e, n, t) {
    return n === "so" ? t.ordinalNumber(e.getSeconds(), { unit: "second" }) : _.s(e, n);
  },
  // Fraction of second
  S: function(e, n) {
    return _.S(e, n);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, n, t, o) {
    const r = (o._originalDate || e).getTimezoneOffset();
    if (r === 0)
      return "Z";
    switch (n) {
      case "X":
        return q(r);
      case "XXXX":
      case "XX":
        return h(r);
      case "XXXXX":
      case "XXX":
      default:
        return h(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, n, t, o) {
    const r = (o._originalDate || e).getTimezoneOffset();
    switch (n) {
      case "x":
        return q(r);
      case "xxxx":
      case "xx":
        return h(r);
      case "xxxxx":
      case "xxx":
      default:
        return h(r, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, n, t, o) {
    const r = (o._originalDate || e).getTimezoneOffset();
    switch (n) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + A(r, ":");
      case "OOOO":
      default:
        return "GMT" + h(r, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, n, t, o) {
    const r = (o._originalDate || e).getTimezoneOffset();
    switch (n) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + A(r, ":");
      case "zzzz":
      default:
        return "GMT" + h(r, ":");
    }
  },
  // Seconds timestamp
  t: function(e, n, t, o) {
    const i = o._originalDate || e, r = Math.floor(i.getTime() / 1e3);
    return s(r, n.length);
  },
  // Milliseconds timestamp
  T: function(e, n, t, o) {
    const r = (o._originalDate || e).getTime();
    return s(r, n.length);
  }
};
function A(e, n = "") {
  const t = e > 0 ? "-" : "+", o = Math.abs(e), i = Math.floor(o / 60), r = o % 60;
  return r === 0 ? t + String(i) : t + String(i) + n + s(r, 2);
}
function q(e, n) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + s(Math.abs(e) / 60, 2) : h(e, n);
}
function h(e, n = "") {
  const t = e > 0 ? "-" : "+", o = Math.abs(e), i = s(Math.floor(o / 60), 2), r = s(o % 60, 2);
  return t + i + n + r;
}
const H = (e, n) => {
  switch (e) {
    case "P":
      return n.date({ width: "short" });
    case "PP":
      return n.date({ width: "medium" });
    case "PPP":
      return n.date({ width: "long" });
    case "PPPP":
    default:
      return n.date({ width: "full" });
  }
}, V = (e, n) => {
  switch (e) {
    case "p":
      return n.time({ width: "short" });
    case "pp":
      return n.time({ width: "medium" });
    case "ppp":
      return n.time({ width: "long" });
    case "pppp":
    default:
      return n.time({ width: "full" });
  }
}, $e = (e, n) => {
  const t = e.match(/(P+)(p+)?/) || [], o = t[1], i = t[2];
  if (!i)
    return H(e, n);
  let r;
  switch (o) {
    case "P":
      r = n.dateTime({ width: "short" });
      break;
    case "PP":
      r = n.dateTime({ width: "medium" });
      break;
    case "PPP":
      r = n.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      r = n.dateTime({ width: "full" });
      break;
  }
  return r.replace("{{date}}", H(o, n)).replace("{{time}}", V(i, n));
}, Ke = {
  p: V,
  P: $e
}, Je = /^D+$/, Ze = /^Y+$/, et = ["D", "DD", "YY", "YYYY"];
function tt(e) {
  return Je.test(e);
}
function nt(e) {
  return Ze.test(e);
}
function j(e, n, t) {
  const o = ot(e, n, t);
  if (console.warn(o), et.includes(e))
    throw new RangeError(o);
}
function ot(e, n, t) {
  const o = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${n}\`) for formatting ${o} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const it = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, rt = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, ct = /^'([^]*?)'?$/, at = /''/g, dt = /[a-zA-Z]/;
function ht(e, n, t) {
  var p, C, P, b, W, L, Y, N;
  const o = I(), i = (t == null ? void 0 : t.locale) ?? o.locale ?? Ue, r = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((C = (p = t == null ? void 0 : t.locale) == null ? void 0 : p.options) == null ? void 0 : C.firstWeekContainsDate) ?? o.firstWeekContainsDate ?? ((b = (P = o.locale) == null ? void 0 : P.options) == null ? void 0 : b.firstWeekContainsDate) ?? 1, a = (t == null ? void 0 : t.weekStartsOn) ?? ((L = (W = t == null ? void 0 : t.locale) == null ? void 0 : W.options) == null ? void 0 : L.weekStartsOn) ?? o.weekStartsOn ?? ((N = (Y = o.locale) == null ? void 0 : Y.options) == null ? void 0 : N.weekStartsOn) ?? 0, d = w(e);
  if (!ue(d))
    throw new RangeError("Invalid time value");
  const u = {
    firstWeekContainsDate: r,
    weekStartsOn: a,
    locale: i,
    _originalDate: d
  };
  return n.match(rt).map(function(l) {
    const f = l[0];
    if (f === "p" || f === "P") {
      const B = Ke[f];
      return B(l, i.formatLong);
    }
    return l;
  }).join("").match(it).map(function(l) {
    if (l === "''")
      return "'";
    const f = l[0];
    if (f === "'")
      return st(l);
    const B = Ve[f];
    if (B)
      return !(t != null && t.useAdditionalWeekYearTokens) && nt(l) && j(l, n, String(e)), !(t != null && t.useAdditionalDayOfYearTokens) && tt(l) && j(l, n, String(e)), B(
        d,
        l,
        i.localize,
        u
      );
    if (f.match(dt))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + f + "`"
      );
    return l;
  }).join("");
}
function st(e) {
  const n = e.match(ct);
  return n ? n[1].replace(at, "'") : e;
}
const Ot = {
  receiverName: "",
  receiverCall: "",
  zipcode: "",
  isDefault: "N"
}, St = (e, ...n) => {
  var i, r;
  const t = Object.fromEntries(
    // empty string to undefined
    Object.entries(e).map(([a, d]) => [a.toLowerCase(), d])
  ), o = {
    shippingAddressCode: t.code,
    code: t.code,
    addressFormat: t.address_type,
    receiverName: t.deliv_name,
    name: t.deliv_name,
    receiverCall: (i = t.deliv_call) == null ? void 0 : i.replace(/\D/g, ""),
    call: (r = t.deliv_call) == null ? void 0 : r.replace(/\D/g, ""),
    isDefault: t.is_default,
    isLatest: t.is_latest,
    shippingCountryCode: t.shipping_country,
    country: t.shipping_country
  };
  switch (t.address_type) {
    case "KR":
      return {
        ...o,
        zipcode: t.deliv_postcode,
        addr1: t.deliv_address,
        addr2: t.deliv_address_detail,
        commonEntrancePassword: t.deliv_address_common_entrance_password
      };
    case "5":
      return {
        ...o,
        zipcode: t.deliv_address_zipcode,
        city: t.deliv_address_city,
        state: t.deliv_address_state,
        building: t.deliv_address_building,
        street: t.deliv_address_street
      };
    case "3":
      return {
        ...o,
        zipcode: t.deliv_postcode,
        addr1: t.deliv_address,
        addr2: t.deliv_address_detail
      };
    case "TW":
      return {
        ...o,
        city: t.deliv_address_city,
        street: t.deliv_address_state,
        addr1: t.deliv_address_detail,
        zipcode: t.deliv_postcode
      };
    case "VN": {
      let a = t.deliv_split_address_detail1, d = t.deliv_split_address_detail2;
      return typeof a > "u" && typeof d > "u" && ([a, d] = t.deliv_address_detail.split(" ")), {
        ...o,
        state: a,
        city: d,
        addr1: t.deliv_address
      };
    }
    case "HK": {
      let a = t.deliv_split_address_detail1, d = t.deliv_split_address_detail2;
      return typeof a > "u" && typeof d > "u" && ([a, d] = t.deliv_address.split(" ")), {
        ...o,
        city: a,
        street: d,
        addr1: t.deliv_address_detail
      };
    }
  }
}, $ = (e, n = !1) => (e == null ? void 0 : e.addressFormat) === "KR" && (n ? (
  // addr2 is optional: 도서산간 등 계산시 필요없음. 서버 api 검증에서도 체크하지 않음.
  ["zipcode", "addr1"].every((t) => (e[t] ?? "").length > 0)
) : !0), K = (e, n = !1) => (e == null ? void 0 : e.addressFormat) === "5" && (n ? ["zipcode", "city", "state", "street"].every((t) => (e[t] ?? "").length > 0) : !0), J = (e, n = !1) => (e == null ? void 0 : e.addressFormat) === "3" && (n ? ["zipcode", "addr1", "addr2"].every((t) => (e[t] ?? "").length > 0) : !0), Z = (e, n = !1) => (e == null ? void 0 : e.addressFormat) === "TW" && (n ? ["city", "street", "addr1", "zipcode"].every((t) => (e[t] ?? "").length > 0) : !0), ee = (e, n = !1) => (e == null ? void 0 : e.addressFormat) === "VN" && (n ? ["state", "city", "addr1"].every((t) => (e[t] ?? "").length > 0) : !0), te = (e, n = !1) => (e == null ? void 0 : e.addressFormat) === "HK" && (n ? ["city", "street", "addr1"].every((t) => (e[t] ?? "").length > 0) : !0), yt = (e) => {
  if (typeof (e == null ? void 0 : e.addressFormat) > "u" || !["KR", "5", "3", "TW", "VN", "HK"].includes(e.addressFormat))
    return !1;
  switch (!0) {
    case $(e, !0):
      return !0;
    case K(e, !0):
      return !0;
    case J(e, !0):
      return !0;
    case Z(e, !0):
      return !0;
    case ee(e, !0):
      return !0;
    case te(e, !0):
      return !0;
    default:
      return !1;
  }
};
function ut(e) {
  return Q.useRef(window.getComputedStyle(window.document.documentElement)).current.getPropertyValue(`--unit-style-${e}`).trim();
}
const Tt = (e) => Q.useRef(new URLSearchParams(window.location.search).get(e) ?? void 0).current, mt = [{
  code: "ATC00",
  group_code: "ATC00",
  name: "ActionTriggerCd",
  description: "처리주체 타입 코드",
  wtime: "2024-03-22 00:23:03"
}, {
  code: "ATC01",
  group_code: "ATC00",
  name: "USER",
  description: "member_code user에 의한 처리",
  wtime: "2024-03-22 00:23:03"
}, {
  code: "ATC02",
  group_code: "ATC00",
  name: "SYSTEM",
  description: "system에 의한 처리",
  wtime: "2024-03-22 00:23:03"
}, {
  code: "ATC03",
  group_code: "ATC00",
  name: "OPEN_API",
  description: "open api에 의한 처리",
  wtime: "2024-03-22 00:23:03"
}, {
  code: "CCB00",
  group_code: "CCB00",
  name: "금융결제원 공식 코드",
  description: "description",
  wtime: "2023-09-18 06:55:23"
}, {
  code: "CCB01",
  group_code: "CCB00",
  name: "039",
  description: "경남은행",
  wtime: "2023-09-18 06:50:02"
}, {
  code: "CCB02",
  group_code: "CCB00",
  name: "034",
  description: "광주은행",
  wtime: "2023-09-18 06:50:02"
}, {
  code: "CCB03",
  group_code: "CCB00",
  name: "012",
  description: "단위농협(지역농축협)",
  wtime: "2023-09-18 06:50:02"
}, {
  code: "CCB04",
  group_code: "CCB00",
  name: "032",
  description: "부산은행",
  wtime: "2023-09-18 06:50:02"
}, {
  code: "CCB05",
  group_code: "CCB00",
  name: "045",
  description: "새마을금고",
  wtime: "2023-09-18 06:50:02"
}, {
  code: "CCB06",
  group_code: "CCB00",
  name: "064",
  description: "산림조합",
  wtime: "2023-09-18 06:50:02"
}, {
  code: "CCB07",
  group_code: "CCB00",
  name: "088",
  description: "신한은행",
  wtime: "2023-09-18 06:50:02"
}, {
  code: "CCB08",
  group_code: "CCB00",
  name: "048",
  description: "신협",
  wtime: "2023-09-18 06:50:02"
}, {
  code: "CCB09",
  group_code: "CCB00",
  name: "027",
  description: "씨티은행",
  wtime: "2023-09-18 06:50:02"
}, {
  code: "CCB10",
  group_code: "CCB00",
  name: "020",
  description: "우리은행",
  wtime: "2023-09-18 06:50:02"
}, {
  code: "CCB11",
  group_code: "CCB00",
  name: "071",
  description: "우체국은행",
  wtime: "2023-09-18 06:50:02"
}, {
  code: "CCB12",
  group_code: "CCB00",
  name: "050",
  description: "저축은행",
  wtime: "2023-09-18 06:50:02"
}, {
  code: "CCB13",
  group_code: "CCB00",
  name: "037",
  description: "전북은행",
  wtime: "2023-09-18 06:50:02"
}, {
  code: "CCB14",
  group_code: "CCB00",
  name: "035",
  description: "제주은행",
  wtime: "2023-09-18 06:50:02"
}, {
  code: "CCB15",
  group_code: "CCB00",
  name: "090",
  description: "카카오뱅크",
  wtime: "2023-09-18 06:50:02"
}, {
  code: "CCB16",
  group_code: "CCB00",
  name: "089",
  description: "케이뱅크",
  wtime: "2023-09-18 06:50:02"
}, {
  code: "CCB17",
  group_code: "CCB00",
  name: "092",
  description: "토스뱅크",
  wtime: "2023-09-18 06:50:02"
}, {
  code: "CCB18",
  group_code: "CCB00",
  name: "081",
  description: "하나은행",
  wtime: "2023-09-18 06:50:02"
}, {
  code: "CCB19",
  group_code: "CCB00",
  name: "054",
  description: "홍콩상하이은행",
  wtime: "2023-09-18 06:50:02"
}, {
  code: "CCB20",
  group_code: "CCB00",
  name: "003",
  description: "기업은행",
  wtime: "2023-09-18 06:50:02"
}, {
  code: "CCB21",
  group_code: "CCB00",
  name: "004",
  description: "국민은행",
  wtime: "2023-09-18 06:50:02"
}, {
  code: "CCB22",
  group_code: "CCB00",
  name: "031",
  description: "대구은행",
  wtime: "2023-09-18 06:50:02"
}, {
  code: "CCB23",
  group_code: "CCB00",
  name: "002",
  description: "산업은행",
  wtime: "2023-09-18 06:50:02"
}, {
  code: "CCB24",
  group_code: "CCB00",
  name: "011",
  description: "농협은행",
  wtime: "2023-09-18 06:50:02"
}, {
  code: "CCB25",
  group_code: "CCB00",
  name: "023",
  description: "SC 제일은행",
  wtime: "2023-09-18 06:50:02"
}, {
  code: "CCB26",
  group_code: "CCB00",
  name: "007",
  description: "수협",
  wtime: "2023-09-18 06:50:02"
}, {
  code: "CCB27",
  group_code: "CCB00",
  name: "261",
  description: "교보증권",
  wtime: "2023-09-18 06:50:02"
}, {
  code: "CCB28",
  group_code: "CCB00",
  name: "267",
  description: "대신증권",
  wtime: "2023-09-18 06:50:02"
}, {
  code: "CCB29",
  group_code: "CCB00",
  name: "287",
  description: "메리츠증권",
  wtime: "2023-09-18 06:50:02"
}, {
  code: "CCB30",
  group_code: "CCB00",
  name: "238",
  description: "미래에셋증권",
  wtime: "2023-09-18 06:50:02"
}, {
  code: "CCB31",
  group_code: "CCB00",
  name: "290",
  description: "부국증권",
  wtime: "2023-09-18 06:50:02"
}, {
  code: "CCB32",
  group_code: "CCB00",
  name: "240",
  description: "삼성증권",
  wtime: "2023-09-18 06:50:02"
}, {
  code: "CCB33",
  group_code: "CCB00",
  name: "291",
  description: "신영증권",
  wtime: "2023-09-18 06:50:02"
}, {
  code: "CCB34",
  group_code: "CCB00",
  name: "278",
  description: "신한금융투자",
  wtime: "2023-09-18 06:50:02"
}, {
  code: "CCB35",
  group_code: "CCB00",
  name: "209",
  description: "유안타증권",
  wtime: "2023-09-18 06:50:02"
}, {
  code: "CCB36",
  group_code: "CCB00",
  name: "280",
  description: "유진투자증권",
  wtime: "2023-09-18 06:50:02"
}, {
  code: "CCB37",
  group_code: "CCB00",
  name: "264",
  description: "키움증권",
  wtime: "2023-09-18 06:50:02"
}, {
  code: "CCB38",
  group_code: "CCB00",
  name: "271",
  description: "토스증권",
  wtime: "2023-09-18 06:50:02"
}, {
  code: "CCB39",
  group_code: "CCB00",
  name: "294",
  description: "한국포스증권",
  wtime: "2023-09-18 06:50:02"
}, {
  code: "CCB40",
  group_code: "CCB00",
  name: "270",
  description: "하나금융투자",
  wtime: "2023-09-18 06:50:02"
}, {
  code: "CCB41",
  group_code: "CCB00",
  name: "262",
  description: "하이투자증권",
  wtime: "2023-09-18 06:50:02"
}, {
  code: "CCB42",
  group_code: "CCB00",
  name: "243",
  description: "한국투자증권",
  wtime: "2023-09-18 06:50:02"
}, {
  code: "CCB43",
  group_code: "CCB00",
  name: "269",
  description: "한화투자증권",
  wtime: "2023-09-18 06:50:02"
}, {
  code: "CCB44",
  group_code: "CCB00",
  name: "263",
  description: "현대차투자증권",
  wtime: "2023-09-18 06:50:02"
}, {
  code: "CCB45",
  group_code: "CCB00",
  name: "279",
  description: "DB금융투자",
  wtime: "2023-09-18 06:50:02"
}, {
  code: "CCB46",
  group_code: "CCB00",
  name: "218",
  description: "KB증권",
  wtime: "2023-09-18 06:50:02"
}, {
  code: "CCB47",
  group_code: "CCB00",
  name: "227",
  description: "다올투자증권",
  wtime: "2023-09-18 06:50:02"
}, {
  code: "CCB48",
  group_code: "CCB00",
  name: "292",
  description: "LIG투자증권",
  wtime: "2023-09-18 06:50:02"
}, {
  code: "CCB49",
  group_code: "CCB00",
  name: "247",
  description: "NH투자증권",
  wtime: "2023-09-18 06:50:02"
}, {
  code: "CCB50",
  group_code: "CCB00",
  name: "266",
  description: "SK증권",
  wtime: "2023-09-18 06:50:02"
}, {
  code: "CCB51",
  group_code: "CCB00",
  name: "001",
  description: "한국은행",
  wtime: "2023-09-18 06:49:54"
}, {
  code: "CCB53",
  group_code: "CCB00",
  name: "008",
  description: "수출입은행",
  wtime: "2023-09-18 06:49:54"
}, {
  code: "CCB55",
  group_code: "CCB00",
  name: "052",
  description: "모건스탠리은행",
  wtime: "2023-09-18 06:49:54"
}, {
  code: "CCB56",
  group_code: "CCB00",
  name: "055",
  description: "도이치은행",
  wtime: "2023-09-18 06:49:54"
}, {
  code: "CCB57",
  group_code: "CCB00",
  name: "288",
  description: "카카오페이증권",
  wtime: "2025-11-06 00:00:00"
}, {
  code: "CCB58",
  group_code: "CCB00",
  name: "030",
  description: "수협중앙회(회원수협)",
  wtime: "2025-11-06 00:00:00"
}, {
  code: "CCC00",
  group_code: "CCC00",
  name: "카드사구분 코드",
  description: "",
  wtime: "2023-09-14 00:16:47"
}, {
  code: "CCC01",
  group_code: "CCC00",
  name: "exchangeHana",
  description: "외환카드 (지금은 하나 SK와 통합됨)",
  wtime: "2023-09-14 00:55:49"
}, {
  code: "CCC02",
  group_code: "CCC00",
  name: "woori",
  description: "우리카드",
  wtime: "2023-09-14 00:55:49"
}, {
  code: "CCC03",
  group_code: "CCC00",
  name: "lotte",
  description: "롯데카드",
  wtime: "2023-09-14 00:55:49"
}, {
  code: "CCC04",
  group_code: "CCC00",
  name: "hyundai",
  description: "현대카드",
  wtime: "2023-09-14 00:55:49"
}, {
  code: "CCC05",
  group_code: "CCC00",
  name: "kb",
  description: "국민카드",
  wtime: "2023-09-14 00:55:49"
}, {
  code: "CCC06",
  group_code: "CCC00",
  name: "bc",
  description: "BC 카드",
  wtime: "2023-09-14 00:55:49"
}, {
  code: "CCC07",
  group_code: "CCC00",
  name: "samsung",
  description: "삼성카드",
  wtime: "2023-09-14 00:55:49"
}, {
  code: "CCC08",
  group_code: "CCC00",
  name: "shinhan",
  description: "신한카드",
  wtime: "2023-09-14 00:55:49"
}, {
  code: "CCC09",
  group_code: "CCC00",
  name: "hanmi",
  description: "한미카드",
  wtime: "2023-09-14 00:55:49"
}, {
  code: "CCC10",
  group_code: "CCC00",
  name: "nooghyp",
  description: "농협",
  wtime: "2023-09-14 00:55:49"
}, {
  code: "CCC11",
  group_code: "CCC00",
  name: "hanaSk",
  description: "하나 SK 카드",
  wtime: "2023-09-14 00:55:49"
}, {
  code: "CCC12",
  group_code: "CCC00",
  name: "globakVisa",
  description: "글로벌 비자",
  wtime: "2023-09-14 00:55:49"
}, {
  code: "CCC13",
  group_code: "CCC00",
  name: "globakMater",
  description: "글로벌 마스터",
  wtime: "2023-09-14 00:55:49"
}, {
  code: "CCC14",
  group_code: "CCC00",
  name: "globakJcb",
  description: "글로벌 JCB",
  wtime: "2023-09-14 00:55:49"
}, {
  code: "CCC15",
  group_code: "CCC00",
  name: "globakAmex",
  description: "글로벌 아멕스",
  wtime: "2023-09-14 00:55:49"
}, {
  code: "CCC16",
  group_code: "CCC00",
  name: "globakDiners",
  description: "글로벌 다이너스",
  wtime: "2023-09-14 00:55:49"
}, {
  code: "CCC17",
  group_code: "CCC00",
  name: "union",
  description: "중국은련카드",
  wtime: "2023-09-14 00:55:49"
}, {
  code: "CCC18",
  group_code: "CCC00",
  name: "kj",
  description: "광주카드",
  wtime: "2023-09-14 00:55:49"
}, {
  code: "CCC19",
  group_code: "CCC00",
  name: "jb",
  description: "전북카드",
  wtime: "2023-09-14 00:55:49"
}, {
  code: "CCC20",
  group_code: "CCC00",
  name: "hana",
  description: "하나카드",
  wtime: "2023-09-14 00:55:49"
}, {
  code: "CCC21",
  group_code: "CCC00",
  name: "kdb",
  description: "산업카드",
  wtime: "2023-09-14 00:55:49"
}, {
  code: "CCC22",
  group_code: "CCC00",
  name: "wooriBc",
  description: "우리BC카드",
  wtime: "2023-09-14 00:55:49"
}, {
  code: "CCC23",
  group_code: "CCC00",
  name: "nh",
  description: "NH카드",
  wtime: "2023-09-14 00:55:49"
}, {
  code: "CCC24",
  group_code: "CCC00",
  name: "citi",
  description: "씨티카드",
  wtime: "2023-09-14 00:55:49"
}, {
  code: "CCC25",
  group_code: "CCC00",
  name: "hacufokCheck",
  description: "신협체크카드",
  wtime: "2023-09-14 00:55:49"
}, {
  code: "CCC26",
  group_code: "CCC00",
  name: "suhyup",
  description: "수협카드",
  wtime: "2023-09-14 00:55:49"
}, {
  code: "CCC27",
  group_code: "CCC00",
  name: "jeju",
  description: "제주카드",
  wtime: "2023-09-14 00:55:49"
}, {
  code: "CCC28",
  group_code: "CCC00",
  name: "mgCheck",
  description: "MG새마을금고체크",
  wtime: "2023-09-14 00:55:49"
}, {
  code: "CCC29",
  group_code: "CCC00",
  name: "kbankCheck",
  description: "케이뱅크카드",
  wtime: "2023-09-14 00:55:49"
}, {
  code: "CCC30",
  group_code: "CCC00",
  name: "kakaoBank",
  description: "카카오뱅크",
  wtime: "2023-09-14 00:55:49"
}, {
  code: "CCC31",
  group_code: "CCC00",
  name: "epostcheck",
  description: "우체국체크",
  wtime: "2023-09-14 00:55:49"
}, {
  code: "CCC32",
  group_code: "CCC00",
  name: "naverPoint",
  description: "네이버포인트",
  wtime: "2023-09-14 00:55:49"
}, {
  code: "CCC33",
  group_code: "CCC00",
  name: "tossMoney",
  description: "토스머니",
  wtime: "2023-09-14 00:55:49"
}, {
  code: "CCC34",
  group_code: "CCC00",
  name: "ssgMoney",
  description: "SSG머니",
  wtime: "2023-09-14 00:55:49"
}, {
  code: "CCC35",
  group_code: "CCC00",
  name: "fsbCheck",
  description: "저축은행체크",
  wtime: "2023-09-14 00:55:49"
}, {
  code: "CCC36",
  group_code: "CCC00",
  name: "lPoint",
  description: "엘포인트",
  wtime: "2023-09-14 00:55:49"
}, {
  code: "CCC37",
  group_code: "CCC00",
  name: "kakaoMoney",
  description: "카카오머니",
  wtime: "2023-09-14 00:55:49"
}, {
  code: "CCC38",
  group_code: "CCC00",
  name: "paycoPoint",
  description: "페이코 포인트",
  wtime: "2023-09-14 00:55:49"
}, {
  code: "CRM00",
  group_code: "CRM00",
  name: "현금영수증 발급방식 코드",
  description: "현금영수증 발급방식",
  wtime: "2023-09-19 04:47:53"
}, {
  code: "CRM01",
  group_code: "CRM00",
  name: "연동",
  description: null,
  wtime: "2023-09-19 04:47:54"
}, {
  code: "CRM02",
  group_code: "CRM00",
  name: "수동",
  description: null,
  wtime: "2023-09-19 04:47:56"
}, {
  code: "CRS00",
  group_code: "CRS00",
  name: "현금영수증처리상태코드",
  description: "현금영수증처리상태코드",
  wtime: "2023-08-28 08:31:03"
}, {
  code: "CRS01",
  group_code: "CRS00",
  name: "처리대기",
  description: "처리대기",
  wtime: "2023-08-28 08:31:03"
}, {
  code: "CRS02",
  group_code: "CRS00",
  name: "처리완료",
  description: "발행 완료",
  wtime: "2023-08-28 08:31:03"
}, {
  code: "CRS03",
  group_code: "CRS00",
  name: "처리취소",
  description: "거래 취소 등의 이유로 현금영수증 발행 취소",
  wtime: "2023-08-28 08:31:03"
}, {
  code: "CRS04",
  group_code: "CRS00",
  name: "처리실패",
  description: "발행 실패",
  wtime: "2023-08-28 08:31:03"
}, {
  code: "CRS05",
  group_code: "CRS00",
  name: "발행전 취소",
  description: "무통장결제수단에서 입금전 취소로 인하여 주문이 전체취소 완료된 경우, 현금영수증 상태도 발행전 취소",
  wtime: "2023-08-28 08:31:03"
}, {
  code: "CRT00",
  group_code: "CRT00",
  name: "현금영수증종류코드",
  description: null,
  wtime: "2023-08-28 08:31:51"
}, {
  code: "CRT01",
  group_code: "CRT00",
  name: "소득공제용",
  description: null,
  wtime: "2023-08-28 08:31:51"
}, {
  code: "CRT02",
  group_code: "CRT00",
  name: "지출증빙용",
  description: null,
  wtime: "2023-08-28 08:31:51"
}, {
  code: "DLT00",
  group_code: "DLT00",
  name: "디지털상품로그타입코드",
  description: null,
  wtime: "2023-08-03 05:37:21"
}, {
  code: "DLT01",
  group_code: "DLT00",
  name: "구매",
  description: null,
  wtime: "2023-08-03 05:37:21"
}, {
  code: "DLT02",
  group_code: "DLT00",
  name: "다운로드",
  description: null,
  wtime: "2023-08-03 05:37:21"
}, {
  code: "DLT03",
  group_code: "DLT00",
  name: "구매취소",
  description: null,
  wtime: "2023-08-03 05:37:21"
}, {
  code: "DLT04",
  group_code: "DLT00",
  name: "관리자회수",
  description: null,
  wtime: "2023-08-03 05:37:21"
}, {
  code: "DTA00",
  group_code: "DTA00",
  name: "디바이스타입코드",
  description: null,
  wtime: "2023-04-26 05:51:16"
}, {
  code: "DTA01",
  group_code: "DTA00",
  name: "pc",
  description: null,
  wtime: "2023-04-26 05:51:16"
}, {
  code: "DTA02",
  group_code: "DTA00",
  name: "mobile",
  description: null,
  wtime: "2023-04-26 05:51:16"
}, {
  code: "EPS00",
  group_code: "EPS00",
  name: "에스크로 상태코드",
  description: "description",
  wtime: "2023-09-18 06:55:23"
}, {
  code: "EPS01",
  group_code: "EPS00",
  name: "등록 필요 없음",
  description: "",
  wtime: "2023-09-18 06:55:23"
}, {
  code: "EPS02",
  group_code: "EPS00",
  name: "등록 대기",
  description: "",
  wtime: "2023-09-18 06:55:23"
}, {
  code: "EPS03",
  group_code: "EPS00",
  name: "등록 완료",
  description: "",
  wtime: "2023-09-18 06:55:23"
}, {
  code: "EPS04",
  group_code: "EPS00",
  name: "취소 요청",
  description: "",
  wtime: "2023-09-18 06:55:23"
}, {
  code: "EPS05",
  group_code: "EPS00",
  name: "등록 실패",
  description: "",
  wtime: "2023-09-18 06:55:23"
}, {
  code: "FUS00",
  group_code: "FUS00",
  name: "파일업로드상태코드",
  description: null,
  wtime: "2023-06-27 09:30:50"
}, {
  code: "FUS01",
  group_code: "FUS00",
  name: "업로드중",
  description: null,
  wtime: "2023-06-27 09:30:50"
}, {
  code: "FUS02",
  group_code: "FUS00",
  name: "업로드완료",
  description: null,
  wtime: "2023-06-27 09:30:50"
}, {
  code: "FUS03",
  group_code: "FUS00",
  name: "업로드취소",
  description: null,
  wtime: "2023-06-27 09:30:50"
}, {
  code: "FUS04",
  group_code: "FUS00",
  name: "업로드실패",
  description: null,
  wtime: "2023-06-27 09:30:50"
}, {
  code: "FUS05",
  group_code: "FUS00",
  name: "배치실행중",
  description: null,
  wtime: "2023-06-27 09:30:50"
}, {
  code: "FUS06",
  group_code: "FUS00",
  name: "배치실행완료",
  description: null,
  wtime: "2023-06-27 09:30:50"
}, {
  code: "FUS07",
  group_code: "FUS00",
  name: "배치실행실패",
  description: null,
  wtime: "2023-07-10 06:00:00"
}, {
  code: "IDS00",
  group_code: "IDS00",
  name: "송장배송상태코드",
  description: "굿스플로 배송상태코드(dlvStatType)와 매핑되는 해당 송장의 배송상태코드",
  wtime: "2023-08-28 02:08:17"
}, {
  code: "IDS01",
  group_code: "IDS00",
  name: "배송대기",
  description: "27:집하예정",
  wtime: "2023-08-28 02:08:17"
}, {
  code: "IDS02",
  group_code: "IDS00",
  name: "배송중",
  description: "30:집하, 50:배송중",
  wtime: "2023-08-28 02:08:17"
}, {
  code: "IDS03",
  group_code: "IDS00",
  name: "배송완료",
  description: "70:배달완료",
  wtime: "2023-08-28 02:08:17"
}, {
  code: "IDS04",
  group_code: "IDS00",
  name: "오류",
  description: "29:미집하, 99:오류 등",
  wtime: "2023-08-28 02:08:17"
}, {
  code: "IFT00",
  group_code: "IFT00",
  name: "입력 항목 형식",
  description: null,
  wtime: "2023-08-29 05:28:21"
}, {
  code: "IFT01",
  group_code: "IFT00",
  name: "text",
  description: "한 줄 텍스트",
  wtime: "2023-08-29 05:28:21"
}, {
  code: "IFT02",
  group_code: "IFT00",
  name: "textarea",
  description: "여러 줄 텍스트",
  wtime: "2023-08-29 05:28:21"
}, {
  code: "IFT03",
  group_code: "IFT00",
  name: "radio",
  description: "단일선택",
  wtime: "2023-08-29 05:28:21"
}, {
  code: "IFT04",
  group_code: "IFT00",
  name: "select",
  description: "목록선택",
  wtime: "2023-08-29 05:28:21"
}, {
  code: "IFT05",
  group_code: "IFT00",
  name: "checkbox",
  description: "복수선택",
  wtime: "2023-08-29 05:28:21"
}, {
  code: "IFT06",
  group_code: "IFT00",
  name: "date",
  description: "날짜형식",
  wtime: "2023-08-29 05:28:22"
}, {
  code: "IFT07",
  group_code: "IFT00",
  name: "time",
  description: "시간형식",
  wtime: "2023-08-29 05:28:22"
}, {
  code: "IFT08",
  group_code: "IFT00",
  name: "file",
  description: "파일 업로드",
  wtime: "2023-08-29 05:28:22"
}, {
  code: "IIT00",
  group_code: "IIT00",
  name: "송장 입력 타입",
  description: null,
  wtime: "2023-08-28 02:08:20"
}, {
  code: "IIT01",
  group_code: "IIT00",
  name: "DIRECT",
  description: "판매자 직접 수동 입력",
  wtime: "2023-08-28 02:08:20"
}, {
  code: "IIT02",
  group_code: "IIT00",
  name: "GOODSFLOW",
  description: "굿스플로 자동채번",
  wtime: "2023-08-28 02:08:20"
}, {
  code: "IIT03",
  group_code: "IIT00",
  name: "EXCEL",
  description: "송장 엑셀 일괄등록",
  wtime: "2023-08-28 02:08:20"
}, {
  code: "IIT04",
  group_code: "IIT00",
  name: "ORDERER_DIRECT",
  description: "구매자 반품/교환 시 직접 수동 입력",
  wtime: "2023-08-28 02:08:20"
}, {
  code: "IIT05",
  group_code: "IIT00",
  name: "EXTERNAL_CHANNEL",
  description: "외부채널에서 등록",
  wtime: "2023-12-04 06:20:21"
}, {
  code: "ODP00",
  group_code: "ODP00",
  name: "배송비결제타입코드",
  description: null,
  wtime: "2023-06-22 08:17:19"
}, {
  code: "ODP01",
  group_code: "ODP00",
  name: "배송비없음",
  description: null,
  wtime: "2023-06-22 08:17:19"
}, {
  code: "ODP02",
  group_code: "ODP00",
  name: "선결제",
  description: null,
  wtime: "2023-06-22 08:17:19"
}, {
  code: "ODP03",
  group_code: "ODP00",
  name: "착불결제",
  description: null,
  wtime: "2023-06-22 08:17:19"
}, {
  code: "ODT00",
  group_code: "ODT00",
  name: "배송타입코드",
  description: null,
  wtime: "2023-06-22 08:17:19"
}, {
  code: "ODT01",
  group_code: "ODT00",
  name: "배송없음",
  description: null,
  wtime: "2023-06-22 08:17:19"
}, {
  code: "ODT02",
  group_code: "ODT00",
  name: "택배",
  description: null,
  wtime: "2023-06-22 08:17:19"
}, {
  code: "ODT03",
  group_code: "ODT00",
  name: "다운로드",
  description: null,
  wtime: "2023-06-22 08:17:19"
}, {
  code: "ODT04",
  group_code: "ODT00",
  name: "회원그룹이용권",
  description: null,
  wtime: "2023-06-22 08:17:19"
}, {
  code: "ODT05",
  group_code: "ODT00",
  name: "직접배송",
  description: null,
  wtime: "2023-06-22 08:17:19"
}, {
  code: "ODT06",
  group_code: "ODT00",
  name: "퀵서비스",
  description: null,
  wtime: "2023-06-22 08:17:19"
}, {
  code: "ODT07",
  group_code: "ODT00",
  name: "방문수령",
  description: null,
  wtime: "2023-06-22 08:17:19"
}, {
  code: "ODT08",
  group_code: "ODT00",
  name: "편의점배송",
  description: null,
  wtime: "2023-07-04 07:41:48"
}, {
  code: "OEU01",
  group_code: "OEU00",
  name: "진행중",
  description: "주문서 엑셀 업로드 진행중",
  wtime: "2024-01-11 02:30:53"
}, {
  code: "OEU02",
  group_code: "OEU00",
  name: "완료",
  description: "주문서 엑셀 업로드 완료",
  wtime: "2024-01-11 02:32:36"
}, {
  code: "OEU03",
  group_code: "OEU00",
  name: "실패",
  description: "주문서 엑셀 업로드 실패",
  wtime: "2024-01-11 02:32:36"
}, {
  code: "OOS00",
  group_code: "OOS00",
  name: "주문상태구분코드",
  description: null,
  wtime: "2023-04-12 10:40:41"
}, {
  code: "OOS01",
  group_code: "OOS00",
  name: "abondoned checkout(결제이탈)",
  description: null,
  wtime: "2023-04-12 10:40:41"
}, {
  code: "OOS02",
  group_code: "OOS00",
  name: "매칭대기",
  description: null,
  wtime: "2023-04-12 10:40:41"
}, {
  code: "OOS03",
  group_code: "OOS00",
  name: "OPEN(거래개시)",
  description: null,
  wtime: "2023-04-12 10:40:41"
}, {
  code: "OOS04",
  group_code: "OOS00",
  name: "CLOSED(거래종료)",
  description: null,
  wtime: "2023-04-12 10:40:41"
}, {
  code: "OOS05",
  group_code: "OOS00",
  name: "begin(시작)",
  description: null,
  wtime: "2023-08-11 07:12:04"
}, {
  code: "OOS06",
  group_code: "OOS00",
  name: "abondoned checkout(주문이탈)",
  description: null,
  wtime: "2023-08-11 07:12:04"
}, {
  code: "OOT00",
  group_code: "OOT00",
  name: "주문타입코드",
  description: null,
  wtime: "2023-08-03 07:46:17"
}, {
  code: "OOT01",
  group_code: "OOT00",
  name: "shopping",
  description: null,
  wtime: "2023-08-03 07:46:17"
}, {
  code: "OOT02",
  group_code: "OOT00",
  name: "booking",
  description: null,
  wtime: "2023-08-03 07:46:17"
}, {
  code: "OOT03",
  group_code: "OOT00",
  name: "digital",
  description: null,
  wtime: "2023-08-03 07:46:17"
}, {
  code: "OOT04",
  group_code: "OOT00",
  name: "group_pass",
  description: null,
  wtime: "2023-08-08 08:37:54"
}, {
  code: "OPM00",
  group_code: "OPM00",
  name: "결제수단구분코드",
  description: null,
  wtime: "2023-04-25 05:00:57"
}, {
  code: "OPM01",
  group_code: "OPM00",
  name: "bankTransfer",
  description: "무통장입금",
  wtime: "2023-04-25 05:00:57"
}, {
  code: "OPM02",
  group_code: "OPM00",
  name: "card",
  description: "신용카드",
  wtime: "2023-04-25 05:00:57"
}, {
  code: "OPM03",
  group_code: "OPM00",
  name: "virtual",
  description: "가상계좌",
  wtime: "2023-04-25 05:00:57"
}, {
  code: "OPM04",
  group_code: "OPM00",
  name: "transfer",
  description: "실시간계좌이체",
  wtime: "2023-04-25 05:00:57"
}, {
  code: "OPM05",
  group_code: "OPM00",
  name: "phone",
  description: "휴대폰결제",
  wtime: "2023-04-25 05:00:57"
}, {
  code: "OPM06",
  group_code: "OPM00",
  name: "free",
  description: "무료결제",
  wtime: "2023-05-03 01:01:07"
}, {
  code: "OPM07",
  group_code: "OPM00",
  name: "kakaopay",
  description: "카카오페이",
  wtime: "2023-05-03 01:01:07"
}, {
  code: "OPM08",
  group_code: "OPM00",
  name: "naverpay",
  description: "네이버페이",
  wtime: "2023-05-03 01:01:07"
}, {
  code: "OPM09",
  group_code: "OPM00",
  name: "tosspay",
  description: "토스페이",
  wtime: "2023-05-03 01:01:07"
}, {
  code: "OPM10",
  group_code: "OPM00",
  name: "subscription",
  description: "정기구독",
  wtime: "2023-05-03 01:01:07"
}, {
  code: "OPM20",
  group_code: "OPM00",
  name: "payco",
  description: "페이코",
  wtime: "2023-05-03 01:01:07"
}, {
  code: "OPM21",
  group_code: "OPM00",
  name: "samsungpay",
  description: "삼성페이",
  wtime: "2023-05-03 01:01:07"
}, {
  code: "OPM22",
  group_code: "OPM00",
  name: "samsungpayCheck",
  description: "삼성페이 체크",
  wtime: "2023-09-14 00:16:47"
}, {
  code: "OPM23",
  group_code: "OPM00",
  name: "ssgpay",
  description: "신세계 페이",
  wtime: "2023-09-14 00:16:47"
}, {
  code: "OPM24",
  group_code: "OPM00",
  name: "lpay",
  description: "L페이",
  wtime: "2023-09-14 00:16:47"
}, {
  code: "OPM25",
  group_code: "OPM00",
  name: "kbAppCard",
  description: "KB앱페이",
  wtime: "2023-09-14 00:16:47"
}, {
  code: "OPM26",
  group_code: "OPM00",
  name: "chipay",
  description: "차이페이",
  wtime: "2023-09-14 00:16:47"
}, {
  code: "OPM27",
  group_code: "OPM00",
  name: "tmoneypay",
  description: "티머니페이",
  wtime: "2023-09-14 00:16:47"
}, {
  code: "OPM28",
  group_code: "OPM00",
  name: "pinpay",
  description: "핀페이",
  wtime: "2023-09-14 00:16:47"
}, {
  code: "OPM29",
  group_code: "OPM00",
  name: "applepay",
  description: "애플페이",
  wtime: "2023-09-14 00:16:47"
}, {
  code: "OPM30",
  group_code: "OPM00",
  name: "naverpayOrder",
  description: "네이버페이 주문형",
  wtime: "2023-11-23 08:27:42"
}, {
  code: "OPM31",
  group_code: "OPM00",
  name: "paypal",
  description: "페이팔",
  wtime: "2023-11-23 08:27:42"
}, {
  code: "OPM32",
  group_code: "OPM00",
  name: "eximbay",
  description: "엑심베이",
  wtime: "2023-11-23 08:27:42"
}, {
  code: "OPM33",
  group_code: "OPM00",
  name: "talkcheckout",
  description: "톡체크아웃",
  wtime: "2024-03-26 12:33:55"
}, {
  code: "OPM34",
  group_code: "OPM00",
  name: "japanese_convenience_store",
  description: "일본 편의점 결제",
  wtime: "2024-08-27 15:53:42"
}, {
  code: "OPM35",
  group_code: "OPM00",
  name: "payverse",
  description: "페이버스",
  wtime: "2024-09-25 05:18:23"
}, {
  code: "OPM36",
  group_code: "OPM00",
  name: "kakaopay_direct",
  description: "카카오페이",
  wtime: "2025-06-12 02:27:35"
}, {
  code: "OPM37",
  group_code: "OPM00",
  name: "kpc",
  description: "한국선불카드",
  wtime: "2026-08-31 00:00:00"
}, {
  code: "OPS00",
  group_code: "OPS00",
  name: "결제상태구분코드",
  description: null,
  wtime: "2023-04-12 10:40:41"
}, {
  code: "OPS01",
  group_code: "OPS00",
  name: "결제대기",
  description: null,
  wtime: "2023-04-12 10:40:41"
}, {
  code: "OPS02",
  group_code: "OPS00",
  name: "결제기한초과",
  description: null,
  wtime: "2023-04-12 10:40:41"
}, {
  code: "OPS03",
  group_code: "OPS00",
  name: "결제완료",
  description: null,
  wtime: "2023-04-12 10:40:41"
}, {
  code: "OPS04",
  group_code: "OPS00",
  name: "부분환불",
  description: null,
  wtime: "2023-04-12 10:40:41"
}, {
  code: "OPS05",
  group_code: "OPS00",
  name: "환불완료",
  description: null,
  wtime: "2023-04-12 10:40:41"
}, {
  code: "OPS06",
  group_code: "OPS00",
  name: "결제실패",
  description: null,
  wtime: "2023-04-12 10:40:41"
}, {
  code: "OPS07",
  group_code: "OPS00",
  name: "결제이탈",
  description: null,
  wtime: "2023-04-12 10:40:41"
}, {
  code: "OPS08",
  group_code: "OPS00",
  name: "입금전 취소",
  description: null,
  wtime: "2024-02-27 09:22:50"
}, {
  code: "ORR00",
  group_code: "ORR00",
  name: "취소반품사유코드",
  description: null,
  wtime: "2023-05-03 01:01:03"
}, {
  code: "ORR01",
  group_code: "ORR00",
  name: "구매 의사 취소",
  description: null,
  wtime: "2023-05-03 01:01:03"
}, {
  code: "ORR02",
  group_code: "ORR00",
  name: "색상 및 사이즈 변경",
  description: null,
  wtime: "2023-05-03 01:01:03"
}, {
  code: "ORR03",
  group_code: "ORR00",
  name: "다른 상품 잘못 주문",
  description: null,
  wtime: "2023-05-03 01:01:03"
}, {
  code: "ORR04",
  group_code: "ORR00",
  name: "서비스 및 상품 불만족",
  description: null,
  wtime: "2023-05-03 01:01:03"
}, {
  code: "ORR05",
  group_code: "ORR00",
  name: "배송 지연",
  description: null,
  wtime: "2023-05-03 01:01:03"
}, {
  code: "ORR06",
  group_code: "ORR00",
  name: "배송 누락",
  description: null,
  wtime: "2023-05-03 01:01:03"
}, {
  code: "ORR07",
  group_code: "ORR00",
  name: "상품 품절",
  description: null,
  wtime: "2023-05-03 01:01:03"
}, {
  code: "ORR08",
  group_code: "ORR00",
  name: "상품 파손",
  description: null,
  wtime: "2023-05-03 01:01:03"
}, {
  code: "ORR09",
  group_code: "ORR00",
  name: "상품 정보 상이",
  description: null,
  wtime: "2023-05-03 01:01:03"
}, {
  code: "ORR10",
  group_code: "ORR00",
  name: "오배송",
  description: null,
  wtime: "2023-05-03 01:01:03"
}, {
  code: "ORR11",
  group_code: "ORR00",
  name: "입금기간 마감으로 인한 자동 취소",
  description: null,
  wtime: "2023-05-03 01:01:03"
}, {
  code: "ORT00",
  group_code: "ORT00",
  name: "환불금액기준타입코드",
  description: null,
  wtime: "2023-07-20 02:29:39"
}, {
  code: "ORT01",
  group_code: "ORT00",
  name: "실결제가",
  description: null,
  wtime: "2023-07-20 02:29:39"
}, {
  code: "ORT02",
  group_code: "ORT00",
  name: "상품판매가",
  description: null,
  wtime: "2023-07-20 02:29:39"
}, {
  code: "ORT03",
  group_code: "ORT00",
  name: "평균실결제가",
  description: null,
  wtime: "2023-07-20 02:29:39"
}, {
  code: "ORT04",
  group_code: "ORT00",
  name: "환불타입미적용",
  description: null,
  wtime: "2023-07-31 04:52:57"
}, {
  code: "ORT05",
  group_code: "ORT00",
  name: "환불금액직접입력",
  description: null,
  wtime: "2023-09-21 05:20:44"
}, {
  code: "OSS00",
  group_code: "OSS00",
  name: "주문섹션상태구분코드",
  description: null,
  wtime: "2023-04-12 10:40:41"
}, {
  code: "OSS01",
  group_code: "OSS00",
  name: "상품준비",
  description: null,
  wtime: "2023-04-12 10:40:41"
}, {
  code: "OSS02",
  group_code: "OSS00",
  name: "배송대기",
  description: null,
  wtime: "2023-04-12 10:40:41"
}, {
  code: "OSS03",
  group_code: "OSS00",
  name: "배송중",
  description: null,
  wtime: "2023-04-12 10:40:41"
}, {
  code: "OSS04",
  group_code: "OSS00",
  name: "배송완료",
  description: null,
  wtime: "2023-04-12 10:40:41"
}, {
  code: "OSS05",
  group_code: "OSS00",
  name: "구매확정",
  description: null,
  wtime: "2023-04-12 10:40:41"
}, {
  code: "OSS06",
  group_code: "OSS00",
  name: "취소접수",
  description: null,
  wtime: "2023-04-12 10:40:41"
}, {
  code: "OSS07",
  group_code: "OSS00",
  name: "취소완료",
  description: null,
  wtime: "2023-04-12 10:40:41"
}, {
  code: "OSS08",
  group_code: "OSS00",
  name: "반품접수",
  description: null,
  wtime: "2023-04-12 10:40:41"
}, {
  code: "OSS09",
  group_code: "OSS00",
  name: "회수지시",
  description: null,
  wtime: "2023-04-12 10:40:41"
}, {
  code: "OSS10",
  group_code: "OSS00",
  name: "회수중",
  description: null,
  wtime: "2023-04-12 10:40:41"
}, {
  code: "OSS11",
  group_code: "OSS00",
  name: "상품확인중",
  description: null,
  wtime: "2023-04-12 10:40:41"
}, {
  code: "OSS12",
  group_code: "OSS00",
  name: "반품완료",
  description: null,
  wtime: "2023-04-12 10:40:41"
}, {
  code: "RPT00",
  group_code: "RPT00",
  name: "수거비용지불타입코드",
  description: null,
  wtime: "2023-08-01 05:06:48"
}, {
  code: "RPT01",
  group_code: "RPT00",
  name: "신용",
  description: "계약택배사 계약요금 적용",
  wtime: "2023-08-01 05:06:48"
}, {
  code: "RPT02",
  group_code: "RPT00",
  name: "선불",
  description: "구매자가 선불로 발송",
  wtime: "2023-08-01 05:06:48"
}, {
  code: "RPT03",
  group_code: "RPT00",
  name: "착불",
  description: "구매자가 착불로 발송(착지신용 미적용)",
  wtime: "2023-08-01 05:06:48"
}, {
  code: "RPT04",
  group_code: "RPT00",
  name: "기타",
  description: "택배가 아니거나 비용이 없는 경우 등",
  wtime: "2023-08-01 05:06:48"
}, {
  code: "RRT00",
  group_code: "RRT00",
  name: "반품수거정보코드",
  description: "반품시 물품 수거 방법 타입 코드",
  wtime: "2023-08-01 00:11:28"
}, {
  code: "RRT01",
  group_code: "RRT00",
  name: "자동수거신청",
  description: null,
  wtime: "2023-08-01 00:11:28"
}, {
  code: "RRT02",
  group_code: "RRT00",
  name: "구매자발송",
  description: null,
  wtime: "2023-08-01 00:11:28"
}, {
  code: "RRT03",
  group_code: "RRT00",
  name: "기타",
  description: null,
  wtime: "2023-08-01 00:11:28"
}, {
  code: "RRT04",
  group_code: "RRT00",
  name: "수동 수거 신청 (판매자 직접 송장번호 입력)",
  description: null,
  wtime: "2023-08-01 00:11:28"
}, {
  code: "RRT05",
  group_code: "RRT00",
  name: "수거정보 입력대기",
  description: "수거 정보를 입력하지않고 클레임 접수가 받아지는 case 고려 (ex: 외부채널주문)",
  wtime: "2024-04-04 01:19:45"
}, {
  code: "SOS00",
  group_code: "SOS00",
  name: "정기구독주문 상태 코드",
  description: "description",
  wtime: "2023-09-18 06:55:23"
}, {
  code: "SOS01",
  group_code: "SOS00",
  name: "결제 이탈",
  description: "",
  wtime: "2023-09-18 06:55:23"
}, {
  code: "SOS02",
  group_code: "SOS00",
  name: "거래 개시",
  description: "",
  wtime: "2023-09-18 06:55:23"
}, {
  code: "SOS03",
  group_code: "SOS00",
  name: "주문 이탈 (취소)",
  description: "",
  wtime: "2023-09-18 06:55:23"
}, {
  code: "SOS04",
  group_code: "SOS00",
  name: "거래 개시 대기",
  description: "배송시작일 지정 구독의 최초 결제 전 상태",
  wtime: "2026-08-20 00:00:00"
}, {
  code: "SIT01",
  group_code: "SIT00",
  name: "알 수 없는 에러",
  description: null,
  wtime: "2023-04-12 10:40:41"
}, {
  code: "SIT02",
  group_code: "SIT00",
  name: "최소 주문 금액 미달",
  description: null,
  wtime: "2023-04-12 10:40:41"
}, {
  code: "SIT03",
  group_code: "SIT00",
  name: "옵션 카운트 에러",
  description: null,
  wtime: "2023-04-12 10:40:41"
}, {
  code: "SIT04",
  group_code: "SIT00",
  name: "상품 데이터 에러",
  description: null,
  wtime: "2023-04-12 10:40:41"
}, {
  code: "SIT05",
  group_code: "SIT00",
  name: "상품 삭제 에러",
  description: null,
  wtime: "2023-04-12 10:40:41"
}, {
  code: "SIT06",
  group_code: "SIT00",
  name: "상품 품절 에러",
  description: null,
  wtime: "2023-04-12 10:40:41"
}, {
  code: "SIT07",
  group_code: "SIT00",
  name: "상품 상태 에러",
  description: null,
  wtime: "2023-04-12 10:40:41"
}, {
  code: "SIT08",
  group_code: "SIT00",
  name: "상품 판매기간 에러",
  description: null,
  wtime: "2023-04-12 10:40:41"
}, {
  code: "SIT09",
  group_code: "SIT00",
  name: "디지털 상품 다운로드 에러",
  description: null,
  wtime: "2023-04-12 10:40:41"
}, {
  code: "SIT10",
  group_code: "SIT00",
  name: "이용권 상품 구매 권한 에러",
  description: null,
  wtime: "2023-04-12 10:40:41"
}, {
  code: "SIT11",
  group_code: "SIT00",
  name: "최소 구매 수량 에러",
  description: null,
  wtime: "2023-04-12 10:40:41"
}, {
  code: "SIT12",
  group_code: "SIT00",
  name: "최대 구매 수량 에러",
  description: null,
  wtime: "2023-04-12 10:40:41"
}, {
  code: "SIT13",
  group_code: "SIT00",
  name: "회원당 최대 구매수량 초과 에러",
  description: null,
  wtime: "2023-04-12 10:40:41"
}, {
  code: "SIT14",
  group_code: "SIT00",
  name: "카테고리 권한 에러",
  description: null,
  wtime: "2023-04-12 10:40:41"
}, {
  code: "SIT15",
  group_code: "SIT00",
  name: "옵션 최대 구매수량 에러",
  description: null,
  wtime: "2023-04-12 10:40:41"
}, {
  code: "SIT16",
  group_code: "SIT00",
  name: "옵션 품절 에러",
  description: null,
  wtime: "2023-04-12 10:40:41"
}, {
  code: "SIT17",
  group_code: "SIT00",
  name: "옵션 재고 에러",
  description: null,
  wtime: "2023-04-12 10:40:41"
}, {
  code: "SIT18",
  group_code: "SIT00",
  name: "옵션 에러 (미존재)",
  description: null,
  wtime: "2023-04-12 10:40:41"
}, {
  code: "SIT19",
  group_code: "SIT00",
  name: "옵션 숨김 에러",
  description: null,
  wtime: "2023-04-12 10:40:41"
}, {
  code: "SIT20",
  group_code: "SIT00",
  name: "배송 타입 에러",
  description: null,
  wtime: "2023-04-12 10:40:41"
}, {
  code: "SIT21",
  group_code: "SIT00",
  name: "상품 재고 에러",
  description: null,
  wtime: "2023-04-12 10:40:41"
}, {
  code: "SIT22",
  group_code: "SIT00",
  name: "품목 건너뛰기 에러",
  description: null,
  wtime: "2023-04-12 10:40:41"
}, {
  code: "SIT23",
  group_code: "SIT00",
  name: "품목 유효성 체크 전부 실패",
  description: null,
  wtime: "2023-04-12 10:40:41"
}, {
  code: "SIT24",
  group_code: "SIT00",
  name: "주문서 생성 실패",
  description: null,
  wtime: "2023-04-12 10:40:41"
}, {
  code: "SIT25",
  group_code: "SIT00",
  name: "간편결제 수단 에러",
  description: null,
  wtime: "2023-04-12 10:40:41"
}, {
  code: "SIT26",
  group_code: "SIT00",
  name: "간편결제 에러",
  description: null,
  wtime: "2023-04-12 10:40:41"
}, {
  code: "SIT27",
  group_code: "SIT00",
  name: "옵션 변경 에러",
  description: null,
  wtime: "2023-04-12 10:40:41"
}, {
  code: "SIT28",
  group_code: "SIT00",
  name: "TFR-1041, 데이터는 정상이나 코드베이스에서 발생하는 에러",
  description: null,
  wtime: "2023-04-12 10:40:41"
}, {
  code: "SIT29",
  group_code: "SIT00",
  name: "건너뛰기",
  description: null,
  wtime: "2023-04-12 10:40:41"
}, {
  code: "SMT01",
  group_code: "SMT00",
  name: "관리자 문의",
  description: null,
  wtime: "2023-04-12 10:40:41"
}, {
  code: "SMT02",
  group_code: "SMT00",
  name: "분실된 카드",
  description: null,
  wtime: "2023-04-12 10:40:41"
}, {
  code: "SMT03",
  group_code: "SMT00",
  name: "거래 정지된 카드",
  description: null,
  wtime: "2023-04-12 10:40:41"
}, {
  code: "SMT04",
  group_code: "SMT00",
  name: "취소된 카드",
  description: null,
  wtime: "2023-04-12 10:40:41"
}, {
  code: "SMT05",
  group_code: "SMT00",
  name: "등록되지 않은 카드",
  description: null,
  wtime: "2023-04-12 10:40:41"
}, {
  code: "SMT06",
  group_code: "SMT00",
  name: "잔액 부족",
  description: null,
  wtime: "2023-04-12 10:40:41"
}, {
  code: "SMT07",
  group_code: "SMT00",
  name: "한도 초과",
  description: null,
  wtime: "2023-04-12 10:40:41"
}], Pt = oe(mt, "code"), O = {
  // 이니시스
  nicepay: 1003,
  // 이지페이
  tosspayments: 1005,
  // 다날
  naverpay: 1009
}, pt = {
  [O.nicepay]: {
    role: "card",
    flow: "redirect"
  },
  [O.tosspayments]: {
    role: "card",
    flow: "iframe"
  },
  [O.naverpay]: {
    role: "wallet",
    flow: "redirect"
  }
}, E = (e) => pt[e] ?? {
  role: "card",
  flow: "iframe"
}, bt = (e) => E(e).flow === "redirect", S = {
  CARD: "CARD",
  PHONE_BILL: "PHONE_BILL",
  NAVERPAY: "NAVERPAY"
}, xt = "/backpg/payment/oms/OMS_phone_billing.cm", Mt = "1m", Rt = (e) => (e == null ? void 0 : e.paymentMethod) === S.PHONE_BILL || (e == null ? void 0 : e.isPhoneBill) === !0, U = (e) => e.paymentMethod ?? (e.pgIdx === O.naverpay ? S.NAVERPAY : S.CARD), Bt = (e) => {
  const n = (e == null ? void 0 : e.availableBillingMethods) ?? [{
    pgIdx: O.nicepay,
    pgName: "nicepay",
    billingPgType: "nicepay",
    registrationMethod: "FORM",
    paymentMethod: S.CARD
  }], t = n.find((d) => E(d.pgIdx).role === "card" && U(d) === S.CARD), o = n.find((d) => U(d) === S.PHONE_BILL), i = n.filter((d) => E(d.pgIdx).role === "wallet"), r = n.some((d) => d.pgIdx === O.naverpay), a = (t == null ? void 0 : t.registrationMethod) === "SDK";
  return {
    cardMethod: t,
    phoneBillMethod: o,
    walletMethods: i,
    hasNaverPay: r,
    isSdkCard: a
  };
}, Dt = async (e, n) => {
  const {
    data: t
  } = await D.post("/ajax/oms/OMS_wrap_customer_v1_payment_billings_complete.cm", {
    billingCode: e
  });
  if (!/^SUCCESS$/i.test(t == null ? void 0 : t.message))
    throw new Error((t == null ? void 0 : t.message) || "카드 등록 확인에 실패했습니다.");
  await n.invalidateQueries({
    queryKey: ["SubscriptionBillingInfo"]
  });
}, vt = ({
  queryOptions: e
} = {}) => ({
  queryKey: ["SubscriptionBillingInfo"],
  queryFn: async ({
    signal: n
  }) => {
    const {
      data: t
    } = await D.get("/ajax/oms/OMS_wrap_customer_v1_payment_billings.cm", {
      signal: n
    });
    if (!/^SUCCESS$/i.test(t == null ? void 0 : t.message))
      throw new Error(t == null ? void 0 : t.message);
    return (t == null ? void 0 : t.data) ?? {};
  },
  ...e
}), It = ({
  queryOptions: e
} = {}) => {
  const n = {
    availableBillingMethods: [{
      pgIdx: O.nicepay,
      pgName: "nicepay",
      billingPgType: "nicepay",
      registrationMethod: "FORM",
      paymentMethod: S.CARD
    }]
  };
  return {
    queryKey: ["BillingConfig"],
    queryFn: async ({
      signal: t
    }) => {
      try {
        const {
          data: o
        } = await D.get("/ajax/oms/OMS_wrap_customer_v1_payment_billings_config.cm", {
          signal: t
        });
        return /^SUCCESS$/i.test(o == null ? void 0 : o.message) ? (o == null ? void 0 : o.data) ?? n : n;
      } catch (o) {
        if (D.isCancel(o))
          throw o;
        return n;
      }
    },
    ...e
  };
};
function F() {
  return F = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var t = arguments[n];
      for (var o in t)
        ({}).hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, F.apply(null, arguments);
}
const g = ({
  color: e = "#999999",
  ...n
}) => c("span", F({
  css: [{
    borderWidth: "1px",
    borderStyle: "solid",
    padding: "2px 4px",
    fontSize: "11px"
  }, n.css, {
    color: e,
    borderColor: e
  }]
}, n), n.children);
function kt({
  address: e,
  defaultTag: n,
  latest: t,
  disabled: o
}) {
  const {
    data: i
  } = ie(ce({
    queryOptions: {
      select: (d) => d.useCommonEntrancePasswordInput
    }
  })), {
    ct: r
  } = re(), a = ut("brand_color");
  if (typeof e > "u")
    return null;
  switch (!0) {
    case ($(e) || J(e)):
      return c("div", {
        css: [{
          margin: "0px",
          padding: "0px",
          fontSize: "15px",
          "--tw-text-opacity": "1",
          color: "rgb(32 37 43 / var(--tw-text-opacity))"
        }, o ? {
          opacity: "0.25"
        } : null]
      }, c("div", {
        css: {
          display: "flex",
          alignItems: "center"
        }
      }, e.name, n ? c(g, {
        css: {
          marginLeft: "4px"
        },
        color: a
      }, r("설명_기본")) : null, t ? c(g, {
        css: {
          marginLeft: "4px"
        }
      }, r("설명_최근")) : null), c("p", {
        css: {
          margin: "0px",
          fontSize: "14px",
          "--tw-text-opacity": "1",
          color: "rgb(117 117 117 / var(--tw-text-opacity))"
        }
      }, e.call), c("p", {
        css: {
          margin: "0px"
        }
      }, e.addr1), c("p", {
        css: {
          margin: "0px"
        }
      }, e.addr2), c("p", {
        css: {
          margin: "0px"
        }
      }, `(${e.zipcode})`), i && c("p", {
        css: {
          margin: "0px"
        },
        className: e.commonEntrancePassword ? "" : "text-primary"
      }, e.commonEntrancePassword ? `공동현관비밀번호: ${e.commonEntrancePassword}` : "공동현관 비밀번호를 입력할 수 있어요."));
    case K(e):
      return c("div", {
        css: [{
          margin: "0px",
          padding: "0px",
          fontSize: "15px",
          "--tw-text-opacity": "1",
          color: "rgb(32 37 43 / var(--tw-text-opacity))"
        }, o ? {
          opacity: "0.25"
        } : null]
      }, c("div", {
        css: {
          display: "flex",
          alignItems: "center"
        }
      }, e.name, n ? c(g, {
        css: {
          marginLeft: "4px"
        },
        color: a
      }, r("설명_기본")) : null, t ? c(g, {
        css: {
          marginLeft: "4px"
        }
      }, r("설명_최근")) : null), c("p", {
        css: {
          margin: "0px",
          fontSize: "14px",
          "--tw-text-opacity": "1",
          color: "rgb(117 117 117 / var(--tw-text-opacity))"
        }
      }, e.call), c("p", {
        css: {
          margin: "0px"
        }
      }, `${e.street} ${e.building}`), c("p", {
        css: {
          margin: "0px"
        }
      }, `${e.city} ${e.state}`), c("p", {
        css: {
          margin: "0px"
        }
      }, `(${e.zipcode})`));
    case Z(e):
      return c("div", {
        css: [{
          margin: "0px",
          padding: "0px",
          fontSize: "15px",
          "--tw-text-opacity": "1",
          color: "rgb(32 37 43 / var(--tw-text-opacity))"
        }, o ? {
          opacity: "0.25"
        } : null]
      }, c("div", {
        css: {
          display: "flex",
          alignItems: "center"
        }
      }, e.name, n ? c(g, {
        css: {
          marginLeft: "4px"
        },
        color: a
      }, r("설명_기본")) : null, t ? c(g, {
        css: {
          marginLeft: "4px"
        }
      }, r("설명_최근")) : null), c("p", {
        css: {
          margin: "0px",
          fontSize: "14px",
          "--tw-text-opacity": "1",
          color: "rgb(117 117 117 / var(--tw-text-opacity))"
        }
      }, e.call), c("p", {
        css: {
          margin: "0px"
        }
      }, e.city), c("p", {
        css: {
          margin: "0px"
        }
      }, e.street), c("p", {
        css: {
          margin: "0px"
        }
      }, e.addr1), c("p", {
        css: {
          margin: "0px"
        }
      }, `(${e.zipcode})`));
    case ee(e):
      return c("div", {
        css: [{
          margin: "0px",
          padding: "0px",
          fontSize: "15px",
          "--tw-text-opacity": "1",
          color: "rgb(32 37 43 / var(--tw-text-opacity))"
        }, o ? {
          opacity: "0.25"
        } : null]
      }, c("div", {
        css: {
          display: "flex",
          alignItems: "center"
        }
      }, e.name, n ? c(g, {
        css: {
          marginLeft: "4px"
        },
        color: a
      }, r("설명_기본")) : null, t ? c(g, {
        css: {
          marginLeft: "4px"
        }
      }, r("설명_최근")) : null), c("p", {
        css: {
          margin: "0px",
          fontSize: "14px",
          "--tw-text-opacity": "1",
          color: "rgb(117 117 117 / var(--tw-text-opacity))"
        }
      }, e.call), c("p", {
        css: {
          margin: "0px"
        }
      }, e.state), c("p", {
        css: {
          margin: "0px"
        }
      }, e.city), c("p", {
        css: {
          margin: "0px"
        }
      }, e.addr1));
    case te(e):
      return c("div", {
        css: [{
          margin: "0px",
          padding: "0px",
          fontSize: "15px",
          "--tw-text-opacity": "1",
          color: "rgb(32 37 43 / var(--tw-text-opacity))"
        }, o ? {
          opacity: "0.25"
        } : null]
      }, c("div", {
        css: {
          display: "flex",
          alignItems: "center"
        }
      }, e.name, n ? c(g, {
        css: {
          marginLeft: "4px"
        },
        color: a
      }, r("설명_기본")) : null, t ? c(g, {
        css: {
          marginLeft: "4px"
        }
      }, r("설명_최근")) : null), c("p", {
        css: {
          margin: "0px",
          fontSize: "14px",
          "--tw-text-opacity": "1",
          color: "rgb(117 117 117 / var(--tw-text-opacity))"
        }
      }, e.call), c("p", {
        css: {
          margin: "0px"
        }
      }, e.city), c("p", {
        css: {
          margin: "0px"
        }
      }, e.street), c("p", {
        css: {
          margin: "0px"
        }
      }, e.addr1));
    default:
      return c("div", {
        css: [{
          margin: "0px",
          padding: "0px",
          fontSize: "15px",
          "--tw-text-opacity": "1",
          color: "rgb(32 37 43 / var(--tw-text-opacity))"
        }, o ? {
          opacity: "0.25"
        } : null]
      }, c("div", {
        css: {
          display: "flex",
          alignItems: "center"
        }
      }, e.name, n ? c(g, {
        css: {
          marginLeft: "4px"
        },
        color: a
      }, r("설명_기본")) : null, t ? c(g, {
        css: {
          marginLeft: "4px"
        }
      }, r("설명_최근")) : null), c("p", {
        css: {
          margin: "0px",
          fontSize: "14px",
          "--tw-text-opacity": "1",
          color: "rgb(117 117 117 / var(--tw-text-opacity))"
        }
      }, e.call), c("p", {
        css: {
          margin: "0px"
        }
      }, e.street), c("p", {
        css: {
          margin: "0px"
        }
      }, e.building), c("p", {
        css: {
          margin: "0px"
        }
      }, e.state), c("p", {
        css: {
          margin: "0px"
        }
      }, e.city), c("p", {
        css: {
          margin: "0px"
        }
      }, e.street), c("p", {
        css: {
          margin: "0px"
        }
      }, e.state), c("p", {
        css: {
          margin: "0px"
        }
      }, e.addr1), c("p", {
        css: {
          margin: "0px"
        }
      }, e.addr2), c("p", {
        css: {
          margin: "0px"
        }
      }, `(${e.zipcode})`), c("p", {
        css: {
          margin: "0px"
        }
      }, i ? c("span", null, " (공동현관 비밀번호: ", e.commonEntrancePassword, ")") : null));
  }
}
export {
  kt as A,
  It as B,
  S as C,
  Ot as D,
  Pt as O,
  xt as P,
  ut as a,
  K as b,
  y as c,
  J as d,
  Z as e,
  ht as f,
  ee as g,
  te as h,
  $ as i,
  Mt as j,
  yt as k,
  Rt as l,
  g as m,
  vt as n,
  St as o,
  O as p,
  k as q,
  Bt as r,
  R as s,
  x as t,
  Tt as u,
  M as v,
  De as w,
  Ue as x,
  Dt as y,
  bt as z
};
//# sourceMappingURL=AddressFormat-C0DZcVGz.js.map
