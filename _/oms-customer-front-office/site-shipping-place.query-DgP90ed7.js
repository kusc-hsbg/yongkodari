import { t as o, s as l } from "./differenceInCalendarDays-D0oSghL6.js";
import { c as D, f as g } from "./AddressFormat-C0DZcVGz.js";
import { a as f, q as h, d as p } from "./app-MHqjRhKy.js";
import { d as S } from "./site-info.query-DSuQTJpJ.js";
function y(t, e) {
  const r = o(t);
  return isNaN(e) ? D(t, NaN) : (e && r.setDate(r.getDate() + e), r);
}
function T(t, e) {
  const r = o(t.start), s = o(t.end);
  let n = +r > +s;
  const u = n ? +r : +s, a = n ? s : r;
  a.setHours(0, 0, 0, 0);
  let i = 1;
  const d = [];
  for (; +a <= u; )
    d.push(o(a)), a.setDate(a.getDate() + i), a.setHours(0, 0, 0, 0);
  return n ? d.reverse() : d;
}
function M(t, e) {
  const r = o(t.start), s = o(t.end);
  let n = +r > +s;
  const u = n ? +r : +s, a = n ? s : r;
  a.setHours(0, 0, 0, 0), a.setDate(1);
  let i = 1;
  const d = [];
  for (; +a <= u; )
    d.push(o(a)), a.setMonth(a.getMonth() + i);
  return n ? d.reverse() : d;
}
function A(t) {
  const e = o(t);
  return e.setDate(1), e.setHours(0, 0, 0, 0), e;
}
function _(t) {
  return o(t).getDay();
}
function C(t) {
  const e = o(t), r = e.getFullYear(), s = e.getMonth(), n = D(t, 0);
  return n.setFullYear(r, s + 1, 0), n.setHours(0, 0, 0, 0), n.getDate();
}
const E = ["mon", "tue", "wed", "thu", "fri", "sat", "sun", "holiday"], N = (t) => E.includes(t), R = (t) => (t ?? []).filter(N), P = (t) => {
  var e;
  return (t == null ? void 0 : t.useDeliveryStartDate) !== !0 || typeof t.deliveryStartMinDays != "number" || typeof t.deliveryStartMaxDays != "number" || Array.isArray((e = t.deliveryStartExclusions) == null ? void 0 : e.dayTypes) !== !0 ? null : {
    minDays: t.deliveryStartMinDays,
    maxDays: t.deliveryStartMaxDays
  };
}, b = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"], F = (t) => g(t, "yyyy-MM-dd"), W = (t) => {
  const [e, r, s] = t.split("-").map(Number);
  return new Date(e, r - 1, s);
}, j = (t, e, r) => ({
  from: l(y(t, e)),
  to: l(y(t, r))
}), K = (t, e, r, s) => {
  const n = l(t);
  return !(n < e.from || n > e.to || r.includes(b[_(n)]) || r.includes("holiday") && s.has(F(n)));
}, q = (t, e, r) => T({
  start: t.from,
  end: t.to
}).find((s) => K(s, t, e, r)) ?? null, I = (t) => M({
  start: t.from,
  end: t.to
}), V = (t) => {
  const e = A(t), r = Array.from({
    length: _(e)
  }, () => null), s = Array.from({
    length: C(e)
  }, (n, u) => y(e, u));
  return [...r, ...s];
}, m = 9 * 60 * 60 * 1e3, O = /^\d{4}-\d{2}-\d{2}$/, k = (t) => {
  if (t === null || !O.test(t))
    return null;
  const [e, r, s] = t.split("-").map(Number), n = Date.UTC(e, r - 1, s), u = new Date(n);
  return u.getUTCFullYear() !== e || u.getUTCMonth() !== r - 1 || u.getUTCDate() !== s ? null : new Date(n - m).toISOString();
}, L = (t) => {
  if (typeof t != "string" || t === "")
    return null;
  const e = new Date(t);
  if (Number.isNaN(e.getTime()))
    return null;
  const r = new Date(e.getTime() + m);
  return `${r.getUTCFullYear()}-${String(r.getUTCMonth() + 1).padStart(2, "0")}-${String(r.getUTCDate()).padStart(2, "0")}`;
};
Object.assign(f.defaults, S);
const z = ({
  productCodes: t
}) => h({
  queryKey: ["SiteShippingPlace"],
  queryFn: async ({
    signal: e
  }) => {
    const {
      data: r
    } = await f.post("/ajax/oms/OMS_get_shipping_place.cm", {
      prod_codes: t
    }, {
      signal: e,
      headers: {
        "Content-Type": "application/json"
      }
    });
    return r.data;
  },
  select: (e) => ({
    companyAddress: c(e.company_data, e.country),
    shippingOriginAddress: c(e.address_data, e.country),
    returnAddress: c(e.return_address_data, e.country),
    companyContact: x(e.company_data),
    directNumber: e.call_num
  })
});
function Y(t) {
  switch (t) {
    case "KR":
    case "JP":
      return "KR";
    case "HK":
      return "HK";
    case "TW":
      return "TW";
    case "VN":
      return "VN";
  }
  return "5";
}
function v(t) {
  return (e, r) => [e, (r == null ? void 0 : r(t[e])) ?? t[e]];
}
function c(t, e) {
  if (p(t))
    return null;
  const r = Y(e), s = v(t);
  switch (r) {
    case "KR":
      return [s("address"), s("detail_address"), s("post_code", (n) => n && `(${n})`)];
    case "TW":
      return [s("address_city"), s("address_street"), s("detail_address"), s("post_code", (n) => n && `(${n})`)];
    case "VN":
      return [s("address"), s("address_street"), s("address_city"), s("post_code", (n) => n && `(${n})`)];
    case "HK":
      return [s("address_city"), s("address_street"), s("detail_address"), s("post_code", (n) => n && `(${n})`)];
  }
  return [s("address_street"), s("address_building"), s("address_city"), s("address_state"), s("address_zipcode", (n) => n && `(${n})`)];
}
function x(t) {
  if (p(t))
    return null;
  const {
    company_name: e,
    owner_collnum: r,
    owner_mail: s,
    owner_name: n
  } = t;
  return {
    company_name: e,
    call_num: r,
    owner_mail: s,
    owner_name: n
  };
}
export {
  z as S,
  y as a,
  P as b,
  R as c,
  j as d,
  M as e,
  F as f,
  V as g,
  q as h,
  I as i,
  K as j,
  L as k,
  W as p,
  A as s,
  k as t
};
//# sourceMappingURL=site-shipping-place.query-DgP90ed7.js.map
