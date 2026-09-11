import { a as o } from "./app-MHqjRhKy.js";
const c = ({
  orderNo: r,
  queryOptions: e
} = {}) => ({
  queryKey: ["Orders", r],
  queryFn: async ({
    signal: n
  }) => {
    const t = new URL("/ajax/oms/OMS_wrap_customer_v1_orders_{orderNo}.cm", window.location.origin);
    t.searchParams.set("orderNo", r);
    const {
      data: a
    } = await o.get(t.href, {
      signal: n
    });
    return {
      ...a == null ? void 0 : a.data,
      orderNo: String(r)
    };
  },
  ...e,
  enabled: typeof r == "string" && ((e == null ? void 0 : e.enabled) ?? !0)
});
export {
  c as O
};
//# sourceMappingURL=order.query-BPBp0fXM.js.map
