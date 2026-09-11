import { a as y } from "./app-MHqjRhKy.js";
import { D as h, M as m, a as p } from "./member-shipping-address.query-Cxz7zQVm.js";
import { q as e, P as d, O as f, a as Q } from "./queryClient-DKEBKk5T.js";
import { O as l } from "./order.query-BPBp0fXM.js";
import { S as C } from "./site-info.query-DSuQTJpJ.js";
import "./queryClient-DpZpBkWP.js";
function _() {
  const t = new URLSearchParams(window.location.search).get("order_no");
  if (typeof t != "string" || t === "")
    return;
  const c = e.fetchQuery(l({
    orderNo: t
  })), a = e.fetchQuery(C());
  c.then((r) => e.fetchQuery(d({
    productCodes: r.orderItems.map((o) => o.prodCode),
    orderCurrency: r.currency,
    isMember: r.isMember === "Y"
  }))).catch(() => {
  }), Promise.all([c, a]).then(([r, o]) => {
    const n = r.isMember === "Y", u = r.orderItems.map((s) => s.prodCode), i = o.sippingCountryCode;
    e.fetchQuery(h({
      countryShippingCode: i
    })).catch(() => {
    }), n && e.fetchQuery(m({})).catch(() => {
    }), e.fetchQuery(p({
      productCodes: u,
      countryShippingCode: i
    })).then((s) => {
      n && s.length > 0 && e.fetchQuery(f({
        country: i,
        whoInput: "orderer"
      })).catch(() => {
      });
    }).catch(() => {
    });
  }).catch(() => {
  }), e.fetchQuery(Q()).catch(() => {
  }), e.fetchQuery({
    queryKey: ["unit-options", "limit_join_agree"],
    queryFn: async () => (await y("/ajax/oms/OMS_unit.cm?options=limit_join_agree", {
      method: "GET",
      withCredentials: !0
    })).data
  }).catch(() => {
  });
}
export {
  _ as prefetchShopPaymentQueries
};
//# sourceMappingURL=prefetch-D62o7H8n.js.map
