import { a as n } from "./app-MHqjRhKy.js";
import { d as c } from "./site-info.query-DSuQTJpJ.js";
import { Q as i } from "./queryClient-DpZpBkWP.js";
const _ = ({
  country: t,
  whoInput: r,
  queryOptions: a
} = {}) => ({
  queryKey: ["OrderDeliveryRecent", t, r],
  queryFn: async ({
    signal: s
  }) => {
    const o = new URL("/ajax/oms/OMS_wrap_customer_v1_order-deliverys_recent.cm", window.location.origin);
    o.searchParams.set("country", t), o.searchParams.set("whoInput", r);
    const {
      data: e
    } = await n.get(o.href, {
      signal: s
    });
    if (typeof (e == null ? void 0 : e.data) > "u" || (e == null ? void 0 : e.data) === null)
      return null;
    const {
      data: u
    } = await n.post("/ajax/oms/OMS_get_deliv_address_format.cm", {
      country: t
    }, {
      signal: s,
      withCredentials: !0
    });
    return {
      ...e == null ? void 0 : e.data,
      addressFormat: u.addressFormat
    };
  },
  ...a,
  enabled: [t, r].every((s) => typeof s == "string") && ((a == null ? void 0 : a.enabled) ?? !0)
}), l = ({
  queryOptions: t
} = {}) => ({
  queryKey: ["PaymentMethods"],
  queryFn: async ({
    signal: r
  }) => {
    const {
      data: a
    } = await n.get("/ajax/oms/OMS_wrap_customer_v1_payment_payment-method-list.cm", {
      signal: r
    });
    return a == null ? void 0 : a.data;
  },
  ...t
});
Object.assign(n.defaults, c);
const f = ({
  productCodes: t,
  orderCurrency: r,
  isMember: a
}, s) => ({
  queryKey: ["ProductsDiscountOptions"],
  queryFn: async ({
    signal: o
  }) => {
    const {
      data: e
    } = await n.post("/ajax/oms/OMS_check_products_discount_options.cm", {
      prod_codes: t,
      order_currency: r,
      is_member: a ? "Y" : "N"
    }, {
      signal: o
    });
    return e == null ? void 0 : e.data;
  },
  ...s
}), w = new i({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1e3,
      refetchOnWindowFocus: !1,
      suspense: !0,
      useErrorBoundary: !0,
      keepPreviousData: !0,
      retry(t, r) {
        return t >= 3 ? !1 : r instanceof Error ? Number(Object(r.cause).statusCode) >= 500 : !0;
      }
    }
  }
});
export {
  _ as O,
  f as P,
  l as a,
  w as q
};
//# sourceMappingURL=queryClient-DKEBKk5T.js.map
