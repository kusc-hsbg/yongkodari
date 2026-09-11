import { a as t } from "./app-MHqjRhKy.js";
import { R as o } from "./queryClient-DpZpBkWP.js";
const a = {
  withCredentials: !0,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  }
}, u = (e = a) => o.useRef(t.create(e)).current;
Object.assign(t.defaults, a);
const c = ({
  queryOptions: e
} = {}) => ({
  queryKey: ["SiteInfo"],
  queryFn: async ({
    signal: r
  }) => {
    const {
      data: s
    } = await t.get("/ajax/oms/OMS_get_site_info.cm", {
      signal: r
    });
    return s;
  },
  ...e
});
export {
  c as S,
  a as d,
  u
};
//# sourceMappingURL=site-info.query-DSuQTJpJ.js.map
