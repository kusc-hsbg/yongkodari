function a(t) {
  const e = Object.prototype.toString.call(t);
  return t instanceof Date || typeof t == "object" && e === "[object Date]" ? new t.constructor(+t) : typeof t == "number" || e === "[object Number]" || typeof t == "string" || e === "[object String]" ? new Date(t) : /* @__PURE__ */ new Date(NaN);
}
const l = 6048e5, f = 864e5;
function o(t) {
  const e = a(t);
  return e.setHours(0, 0, 0, 0), e;
}
function c(t) {
  const e = new Date(
    Date.UTC(
      t.getFullYear(),
      t.getMonth(),
      t.getDate(),
      t.getHours(),
      t.getMinutes(),
      t.getSeconds(),
      t.getMilliseconds()
    )
  );
  return e.setUTCFullYear(t.getFullYear()), t.getTime() - e.getTime();
}
function u(t, e) {
  const n = o(t), s = o(e), i = n.getTime() - c(n), r = s.getTime() - c(s);
  return Math.round((i - r) / f);
}
export {
  u as d,
  l as m,
  o as s,
  a as t
};
//# sourceMappingURL=differenceInCalendarDays-D0oSghL6.js.map
