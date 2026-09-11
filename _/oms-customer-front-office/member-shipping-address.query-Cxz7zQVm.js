import { a as o } from "./app-MHqjRhKy.js";
import { d as c } from "./site-info.query-DSuQTJpJ.js";
Object.assign(o.defaults, c);
const _ = ({
  countryShippingCode: r,
  queryOptions: s
}) => ({
  queryKey: ["DelivAddressFormat", r],
  queryFn: async ({
    signal: t
  }) => {
    const {
      data: n
    } = await o.post("/ajax/oms/OMS_get_deliv_address_format.cm", {
      country: r
    }, {
      signal: t
    });
    return n == null ? void 0 : n.addressFormat;
  },
  ...s,
  enabled: typeof r == "string" && ((s == null ? void 0 : s.enabled) ?? !0)
});
Object.assign(o.defaults, c);
const u = ({
  countryShippingCode: r,
  productCodes: s,
  queryOptions: t
} = {}) => ({
  queryKey: ["DelivCountryList", r, s],
  queryFn: async ({
    signal: n
  }) => {
    var a;
    const {
      data: e
    } = await o.post("/ajax/oms/OMS_get_deliv_country_list.cm", {
      country: r,
      prod_codes: s
    }, {
      signal: n
    });
    if ((e == null ? void 0 : e.code) !== 200 || Object.keys((e == null ? void 0 : e.countryList) ?? {}).length === 0) {
      const m = new Error("배송 가능 국가 조회 실패");
      (a = window.DD_RUM) == null || a.addError(m, {
        code: e == null ? void 0 : e.code,
        msg: e == null ? void 0 : e.msg,
        countryList: e == null ? void 0 : e.countryList,
        countryShippingCode: r,
        productCodes: s,
        mfe: {
          name: "oms-customer-front-office",
          version: "oms-customer-front-office_1788766413045"
        }
      });
    }
    return Object.entries((e == null ? void 0 : e.countryList) ?? {}).map(([m, i]) => ({
      code: i,
      name: m
    }));
  },
  ...t,
  enabled: typeof r < "u" && (s ?? []).length > 0 && ((t == null ? void 0 : t.enabled) ?? !0)
});
Object.assign(o.defaults, c);
const d = ({
  page: r = 1,
  pageSize: s = 7,
  queryOptions: t
} = {}) => ({
  queryKey: ["MemberShippingAddresses", s, r],
  queryFn: async ({
    signal: n
  }) => {
    const {
      data: e
    } = await o.post("/ajax/oms/OMS_get_member_shipping_address.cm", {
      page: r,
      page_size: s
    }, {
      signal: n
    });
    if (/^SUCCESS$/i.test(e.msg) === !1)
      throw new Error(e.msg);
    return {
      ...e,
      list: e.list ?? []
    };
  },
  ...t
});
export {
  _ as D,
  d as M,
  u as a
};
//# sourceMappingURL=member-shipping-address.query-Cxz7zQVm.js.map
