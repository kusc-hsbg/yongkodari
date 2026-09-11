import { j as t, u as O, c as B, k as qt, a as V, b as jt, Q as Ft, d as Nt } from "./emotion-react.browser.esm-B9sQ19ZB.js";
import { R as x, r as U, Q as At } from "./queryClient-DpZpBkWP.js";
import { M as Mt } from "./index-BIW7NeMy.js";
import { a as W, n as ft, B as Ht, r as Ut, u as j, f as M, O as L, i as Vt, A as Kt, l as Qt } from "./AddressFormat-C0DZcVGz.js";
import { j as ot, I as Et, u as T, D as xt, e as Gt, c as it, N as bt, f as ht, n as Yt, o as z, t as F, C as vt, F as Zt, h as zt, i as Xt, k as Jt, s as te, l as ee, P as oe, p as tt, q as ne, r as $t, v as Wt, O as St, A as wt } from "./subscription-cycle.query-CpujzM0d.js";
import { u as E } from "./useClassicTranslation-ouIPeWST.js";
import { a as $ } from "./app-MHqjRhKy.js";
import { M as Y, u as P } from "./useDaumHealthCheck-wIM-zPPf.js";
import { D as Rt, a as Bt, M as ie } from "./member-shipping-address.query-Cxz7zQVm.js";
import { S as ae } from "./site-info.query-DSuQTJpJ.js";
import "./differenceInCalendarDays-D0oSghL6.js";
function re({ ref: e, ...n }) {
  return ot.jsxs(Et, { ref: e, ...n, children: [ot.jsx("path", { d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z", stroke: "currentColor", strokeWidth: "1.2", vectorEffect: "non-scaling-stroke", strokeLinecap: "round", strokeLinejoin: "round" }), ot.jsx("path", { d: "M12 17H12.01", stroke: "currentColor", strokeWidth: "1.2", vectorEffect: "non-scaling-stroke", strokeLinecap: "round", strokeLinejoin: "round" }), ot.jsx("path", { d: "M9.29999 9.19106C9.52178 8.56056 9.95956 8.0289 10.5358 7.69025C11.112 7.35159 11.7895 7.2278 12.4483 7.34079C13.107 7.45379 13.7045 7.79628 14.135 8.3076C14.5654 8.81892 14.801 9.46608 14.8 10.1345C14.8 12.0212 11.9698 12.9646 11.9698 12.9646V14.0001", stroke: "currentColor", strokeWidth: "1.2", vectorEffect: "non-scaling-stroke", strokeLinecap: "round", strokeLinejoin: "round" })] });
}
function se({ ref: e, ...n }) {
  return ot.jsx(Et, { ref: e, ...n, children: ot.jsx("path", { d: "M13 2L4.09346 12.6879C3.74465 13.1064 3.57024 13.3157 3.56758 13.4925C3.56526 13.6461 3.63373 13.7923 3.75326 13.8889C3.89075 14 4.16318 14 4.70803 14H12L11 22L19.9065 11.3121C20.2554 10.8936 20.4298 10.6843 20.4324 10.5075C20.4347 10.3539 20.3663 10.2077 20.2467 10.1111C20.1093 10 19.8368 10 19.292 10H12L13 2Z", stroke: "currentColor", strokeWidth: "1.2", vectorEffect: "non-scaling-stroke", strokeLinecap: "round", strokeLinejoin: "round" }) });
}
const ct = ({
  title: e,
  footer: n,
  backUrl: a,
  ...l
}) => t("section", {
  css: {
    marginBottom: "40px"
  }
}, t("header", {
  css: {
    display: "flex",
    alignItems: "center"
  }
}, typeof a == "string" ? t("a", {
  css: {
    paddingRight: "8px"
  },
  href: a
}, t("svg", {
  width: "32",
  height: "32",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, t("path", {
  d: "M19 12H5M5 12L12 19M5 12L12 5",
  stroke: "currentColor"
}))) : null, t("h6", null, e)), t("main", {
  css: {
    "@media (max-width: 768px)": {
      margin: "0 -15px"
    }
  }
}, l.children), n ? t("footer", null, n) : null), le = () => {
  const {
    ct: e
  } = E(), n = T("default", {
    fontSize: "13px",
    fontWeight: "unset"
  });
  return t(xt, null, t("button", {
    css: n
  }, e("버튼_변경")));
}, ce = () => {
  const {
    ct: e
  } = E();
  Gt();
  const n = W("brand_color"), a = W("body_color"), l = it(a).alpha(0.1).hexa(), d = T("primary", {
    fontSize: "13px",
    fontWeight: "bold"
  }), {
    data: r
  } = O(ft()), {
    data: m
  } = O(ft({
    queryOptions: {
      select: (c) => "billingInfoCode" in c && typeof c.billingInfoCode == "string"
    }
  })), {
    data: g
  } = O({
    ...Ht(),
    retry: !1
  }), {
    hasNaverPay: o,
    isSdkCard: y
  } = Ut(g), b = o && !y, w = (r == null ? void 0 : r.pgName) === "naverpay";
  return t(ct, {
    title: e("타이틀_정기구독결제수단")
  }, t("div", {
    css: {
      width: "100%",
      "--tw-bg-opacity": "1",
      backgroundColor: "rgb(255 255 255 / var(--tw-bg-opacity))"
    }
  }, t("div", {
    css: [{
      display: "flex",
      alignItems: "center",
      justifyContent: m ? "space-between" : "flex-start",
      padding: "18px"
    }, {
      display: "flex",
      padding: "18px"
    }]
  }, m ? w ? t(x.Fragment, null, t("div", {
    css: {
      display: "flex",
      alignItems: "center",
      gap: "4px"
    }
  }, t(bt, null), t("p", {
    css: {
      margin: "0px",
      fontSize: "15px"
    }
  }, e("설명_네이버페이등록완료"))), t(ht, null)) : t(x.Fragment, null, t("div", null, t("p", {
    css: {
      color: n,
      fontSize: "15px",
      fontWeight: "600"
    }
  }, r == null ? void 0 : r.cardName), t("div", {
    css: {
      fontSize: "15px"
    }
  }, r == null ? void 0 : r.cardNo)), t("div", {
    css: {
      display: "flex",
      alignItems: "center",
      gap: "12px"
    }
  }, t(le, null), t(ht, null))) : t(x.Fragment, null, t("p", {
    css: {
      margin: "0px",
      fontSize: "15px",
      fontWeight: "700"
    }
  }, e("설명_등록된결제수단없음")), t("div", {
    css: {
      marginLeft: "16px",
      display: "flex",
      alignItems: "center",
      gap: "8px"
    }
  }, t(xt, null, t("button", {
    css: [d]
  }, e(y ? "버튼_결제수단등록" : "버튼_결제카드등록"))), b && t(xt, {
    naverPayButton: !0
  }, t("button", {
    css: [d, {
      display: "flex",
      alignItems: "center",
      gap: "6px"
    }]
  }, t(bt, null), e("버튼_네이버페이등록")))))), t("div", {
    css: {
      padding: "18px",
      borderTop: `1px solid ${l}`
    }
  }, t("ul", {
    css: {
      margin: "0px",
      paddingLeft: "15px",
      fontSize: "13px",
      "--tw-text-opacity": "1",
      color: "rgb(117 117 117 / var(--tw-text-opacity))"
    },
    dangerouslySetInnerHTML: {
      __html: e("설명_결제수단등록항목도움말목록")
    }
  }))));
}, pe = x.forwardRef(({
  value: e,
  margin: n = 6,
  ...a
}, l) => {
  const [d, r] = x.useState(!1), m = Yt(), g = x.useRef(null), [o, y] = x.useState(null), b = x.useDeferredValue(Math.floor(((o == null ? void 0 : o.bottom) ?? -1e4) + n)), w = x.useDeferredValue(Math.floor((o == null ? void 0 : o.left) ?? -1e4)), c = x.useDeferredValue(Math.floor((o == null ? void 0 : o.width) ?? 0)), C = x.useRef(new IntersectionObserver((u) => {
    const [k] = u;
  })), h = () => {
    g.current && y(g.current.getBoundingClientRect());
  };
  x.useImperativeHandle(l, () => ({
    opened: () => d,
    open: () => r(!0),
    close: () => r(!1)
  }), [d]), x.useEffect(() => {
    h();
  }, []), x.useEffect(() => {
    const u = C.current;
    return g.current && (u == null || u.observe(g.current)), () => {
      u == null || u.disconnect();
    };
  }, []), x.useEffect(() => (window.addEventListener("resize", h), () => {
    window.removeEventListener("resize", h);
  }), []), x.useEffect(() => (window.addEventListener("scroll", h), () => {
    window.removeEventListener("scroll", h);
  }), []);
  const f = {
    position: "fixed",
    inset: `${b}px auto auto ${w}px`,
    width: `${c}px`,
    display: "block",
    maxHeight: "360px",
    border: "none",
    boxShadow: "0 0 8px rgba(0, 0, 0, 0.1)",
    overflow: "auto",
    padding: "4px"
  }, S = x.Children.toArray(a.children).filter((u) => !!(x.isValidElement(u) && "data-dropdown-value" in u.props)), s = S.find((u) => {
    if (x.isValidElement(u) && "data-dropdown-value" in u.props)
      return u.props["data-dropdown-value"] === e;
  }) ?? S[0];
  return t(x.Fragment, null, t("div", {
    "data-dropdown-root": !0,
    css: B({
      // min-w-[437px] max-md:w-full
      width: "437px",
      appearance: "none",
      cursor: "pointer",
      background: "none",
      border: "1px solid #DDDDDD",
      borderRadius: "4px",
      padding: "0",
      fontFamily: m,
      "@media (max-width: 768px)": {
        width: "100%"
      },
      ">*": {
        backgroundPosition: "right 8px center",
        backgroundSize: "18px",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url('data:image/svg+xml;utf8,<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 9L12 15L18 9" stroke="${encodeURIComponent("#757575")}" /></svg>')`
      }
    }),
    ref: g,
    onClick: () => r(!0)
  }, s), t(Mt, {
    isOpen: d,
    style: {
      overlay: {
        backgroundColor: "transparent"
      },
      content: f
    },
    onRequestClose: () => r(!1)
  }, a.children));
}), de = ["0px 14px 32px 0px rgba(75, 81, 91, 0.12)", "0px 10px 14px 0px rgba(75, 81, 91, 0.06)", "0px 0px 0px 1px rgba(75, 81, 91, 0.03)", "0px 0px 1px 0px rgba(75, 81, 91, 0.2)"].join(", "), ue = qt({
  "0%": {
    opacity: 0
  },
  "100%": {
    opacity: 1
  }
}), pt = ({
  label: e,
  children: n
}) => {
  const a = x.useId();
  return t("span", {
    tabIndex: 0,
    "aria-describedby": a,
    css: [{
      position: "relative",
      display: "inline-flex",
      cursor: "pointer"
    }, {
      "& :disabled": {
        pointerEvents: "none"
      },
      "&:hover > [role=tooltip], &:focus-within > [role=tooltip]": {
        visibility: "visible",
        animation: `${ue} 200ms ease-in-out both`
      }
    }]
  }, n, t("span", {
    id: a,
    role: "tooltip",
    css: [{
      visibility: "hidden",
      position: "absolute",
      bottom: "calc(100% + 6px)",
      left: "50%",
      zIndex: "10",
      width: "max-content",
      maxWidth: "256px",
      borderRadius: "8px",
      "--tw-bg-opacity": "1",
      backgroundColor: "rgb(255 255 255 / var(--tw-bg-opacity))",
      paddingLeft: "10px",
      paddingRight: "10px",
      paddingTop: "6px",
      paddingBottom: "6px",
      textAlign: "center",
      "--tw-text-opacity": "1",
      color: "rgb(21 24 30 / var(--tw-text-opacity))",
      opacity: "0"
    }, {
      whiteSpace: "pre-line",
      fontSize: "12px",
      fontWeight: "400",
      lineHeight: "18px",
      letterSpacing: "-0.03em"
    }, {
      transform: "translateX(-50%)",
      boxShadow: de
    }]
  }, e));
}, ge = ({
  subscriptionOrderCode: e,
  queryOptions: n
} = {}) => ({
  queryKey: ["OrderSubscriptionPreviousPaid", e],
  queryFn: async ({
    signal: a
  }) => {
    const {
      data: l
    } = await $.get(`/ajax/oms/OMS_wrap_customer_v1_subscription_{subscriptionOrderCode}_past.cm?subscriptionOrderCode=${e}`, {
      signal: a
    });
    if (!/^SUCCESS$/i.test(l == null ? void 0 : l.message))
      throw new Error(l == null ? void 0 : l.message);
    return l == null ? void 0 : l.data;
  },
  ...n,
  enabled: typeof e == "string" && e.length > 0 && ((n == null ? void 0 : n.enabled) ?? !0)
}), ye = ({
  prodName: e,
  failReason: n,
  originalResultMessage: a
}) => {
  const l = n || a;
  return l ? n && a ? {
    prodName: e,
    reason: l,
    originalMessage: a
  } : {
    prodName: e,
    reason: l
  } : null;
}, xe = (e) => {
  const n = e.flatMap((l) => ye(l) ?? []), a = n.length > 1;
  return n.map(({
    prodName: l,
    reason: d,
    originalMessage: r
  }) => {
    const m = a && l ? `${l} — ${d}` : d;
    return r === void 0 ? {
      text: m
    } : {
      text: m,
      originalMessage: r
    };
  });
}, me = (e) => !e.orderFailTypeCd, Ct = ({
  failItems: e
}) => {
  const n = xe(e);
  return n.length === 0 ? null : t("div", {
    css: {
      marginTop: "4px",
      fontSize: "12px",
      "--tw-text-opacity": "1",
      color: "rgb(117 117 117 / var(--tw-text-opacity))"
    }
  }, n.map((a, l) => t("div", {
    key: l
  }, a.text, a.originalMessage && t("span", {
    css: {
      marginLeft: "4px",
      display: "inline-block",
      verticalAlign: "middle"
    }
  }, t(pt, {
    label: a.originalMessage
  }, t(re, {
    role: "img",
    "aria-label": "결제 실패 원문 안내",
    size: "16px",
    color: "#717680"
  }))))));
}, fe = () => {
  const {
    ct: e
  } = E();
  E(!0);
  const n = j("subscription_order_code"), [a, l] = x.useState(!1), {
    data: d
  } = O(ge({
    subscriptionOrderCode: n
  }));
  return t(x.Fragment, null, t("button", {
    css: {
      marginTop: "4px",
      cursor: "pointer",
      appearance: "none",
      backgroundColor: "transparent",
      padding: "16px 0",
      fontSize: "14px",
      "--tw-text-opacity": "1",
      color: "rgb(117 117 117 / var(--tw-text-opacity))",
      textDecorationLine: "underline"
    },
    onClick: () => l(!0)
  }, e("버튼_이전일정보기")), t(Y, {
    isOpen: a,
    maxWidth: "700px",
    title: e("타이틀_이전구독일정"),
    onRequestClose: () => l(!1)
  }, t("div", {
    css: {
      padding: "16px"
    }
  }, t("div", {
    css: {
      display: "flex",
      borderWidth: "1px",
      borderLeftWidth: "0px",
      borderRightWidth: "0px",
      borderBottomWidth: "0px",
      borderTopWidth: "1px",
      "--tw-border-opacity": "1",
      borderTopColor: "rgb(229 229 229 / var(--tw-border-opacity))",
      paddingTop: "8px",
      paddingBottom: "8px"
    }
  }, t("div", {
    css: {
      width: "128px"
    }
  }, e("타이틀_결제일자")), t("div", {
    css: {
      marginLeft: "12px",
      marginRight: "12px",
      flex: "1 1 0%"
    }
  }, e("설명_상태")), t("div", {
    css: {
      width: "174px"
    }
  }, e("타이틀_주문번호"))), ((d == null ? void 0 : d.list) ?? []).map((r) => {
    const m = new Date(r.paymentDate), g = M(m, "yyyy-MM-dd (E)", {
      locale: z[window.LANG_CODE]
    }), o = r.orderNo ? `/shop_mypage/?m2=order&idx=${r.orderNo}&order_no=${r.orderNo}` : "", y = me(r), b = r.successItems.length, w = r.failItems.length;
    return t("div", {
      key: `${r.subscriptionOrderCode}-${r.paymentDate}`,
      css: {
        display: "flex",
        borderWidth: "1px",
        borderLeftWidth: "0px",
        borderRightWidth: "0px",
        borderBottomWidth: "0px",
        borderTopWidth: "1px",
        "--tw-border-opacity": "1",
        borderTopColor: "rgb(229 229 229 / var(--tw-border-opacity))",
        paddingTop: "12px",
        paddingBottom: "12px",
        ":last-child": {
          borderBottomWidth: "1px",
          "--tw-border-opacity": "1",
          borderBottomColor: "rgb(229 229 229 / var(--tw-border-opacity))"
        }
      }
    }, t("div", {
      css: {
        width: "128px"
      }
    }, g), t("div", {
      css: {
        marginLeft: "12px",
        marginRight: "12px",
        flex: "1 1 0%"
      }
    }, r.isSkipped ? t("div", null, "건너뛰기") : t(x.Fragment, null, b > 0 && w === 0 && t("div", null, `결제 성공 ${b}건`), b === 0 && w > 0 && t("div", null, t("span", {
      css: {
        "--tw-text-opacity": "1",
        color: "rgb(251 70 55 / var(--tw-text-opacity))"
      }
    }, `결제 실패 ${w}건`), t(Ct, {
      failItems: r.failItems
    })), b > 0 && w > 0 && t(x.Fragment, null, t("div", null, `결제 성공 ${b}건`), t("div", null, t("span", {
      css: {
        "--tw-text-opacity": "1",
        color: "rgb(251 70 55 / var(--tw-text-opacity))"
      }
    }, `결제 실패 ${w}건`)), t(Ct, {
      failItems: r.failItems
    })))), t("div", {
      css: {
        width: "174px"
      }
    }, r.orderNo && y && t("a", {
      css: {
        "--tw-text-opacity": "1 !important",
        color: "rgb(26 109 255 / var(--tw-text-opacity)) !important"
      },
      href: o,
      target: "_blank"
    }, r.orderNo)));
  }))));
}, be = () => {
  const {
    ct: e
  } = E(), n = j("subscription_order_code");
  V();
  const [a, l] = x.useState(!1), d = T("default", {
    fontSize: "13px",
    fontWeight: "unset",
    padding: "8px 16px",
    marginLeft: "8px"
  }), r = T("primary", {
    fontSize: "13px"
  }), {
    mutateAsync: m
  } = P({
    mutationKey: ["RequestSkipSubscriptionItem"],
    mutationFn: async () => {
      const {
        data: o
      } = await $.request({
        method: "DELETE",
        url: `/ajax/oms/OMS_wrap_customer_v1_subscription_{subscriptionOrderCode}.cm?subscriptionOrderCode=${n}`,
        headers: {
          "Content-Type": "application/json"
        }
      });
      if (!/^SUCCESS$/i.test(o.message))
        throw new Error(o.message);
    },
    onSuccess: () => {
      window.location.replace("/shop_mypage/?m2=regularly");
    },
    onError: (o) => {
      o instanceof Error && alert(o.message);
    }
  }), g = async () => {
    await m(), l(!1);
  };
  return t(x.Fragment, null, t("button", {
    css: d,
    onClick: () => l(!0)
  }, e("버튼_정기구독전체해지")), t(Y, {
    maxWidth: "400px",
    isOpen: a,
    onRequestClose: () => l(!1)
  }, t("div", {
    css: {
      padding: "8px"
    },
    dangerouslySetInnerHTML: {
      __html: e("설명_전체상품의정기구독을해지하시겠습니까")
    }
  }), t("footer", {
    css: {
      marginTop: "12px",
      display: "flex !important",
      justifyContent: "flex-end"
    }
  }, t("button", {
    type: "button",
    css: d,
    onClick: () => l(!1)
  }, e("버튼_취소")), t("button", {
    type: "button",
    css: [r, {
      marginLeft: "4px"
    }],
    onClick: g
  }, e("버튼_변경")))));
}, _t = ({
  mobile: e,
  subscriptionItemCode: n,
  disabled: a = !1,
  disabledTooltip: l
}) => {
  const {
    ct: d
  } = E(), r = j("subscription_order_code"), [m, g] = x.useState(!1), o = T("default", {
    fontSize: "13px",
    fontWeight: "unset",
    padding: "6px 12px"
  }), y = T("default", {
    fontSize: "13px",
    fontWeight: "unset",
    padding: "8px 16px"
  }), b = T("primary", {
    fontSize: "13px"
  }), {
    mutateAsync: w
  } = P({
    mutationKey: ["RequestSkipSubscriptionItem"],
    mutationFn: async () => {
      const {
        data: h
      } = await $.request({
        method: "DELETE",
        url: `/ajax/oms/OMS_wrap_customer_v1_subscription_{subscriptionOrderCode}_items_{subscriptionOrderItemCode}.cm?subscriptionOrderCode=${r}&subscriptionOrderItemCode=${n}`,
        headers: {
          "Content-Type": "application/json"
        }
      });
      if (!/^SUCCESS$/i.test(h.message))
        throw new Error(h.message);
    },
    onSuccess: () => {
      window.location.replace("/shop_mypage/?m2=regularly");
    },
    onError: (h) => {
      h instanceof Error && alert(h.message);
    }
  }), c = async () => {
    await w(), g(!1);
  }, C = t("button", {
    css: [e ? o : y, a && {
      opacity: "0.5",
      ":disabled": {
        cursor: "not-allowed"
      }
    }],
    disabled: a,
    onClick: () => g(!0)
  }, d("버튼_정기구독해지"));
  return t(x.Fragment, null, a && l ? t(pt, {
    label: l
  }, C) : C, t(Y, {
    maxWidth: "400px",
    isOpen: m,
    onRequestClose: () => g(!1)
  }, t("div", {
    css: {
      padding: "8px"
    },
    dangerouslySetInnerHTML: {
      __html: d("설명_해당상품의정기구독을해지하시겠습니까")
    }
  }), t("footer", {
    css: {
      marginTop: "12px",
      display: "flex !important",
      justifyContent: "flex-end"
    }
  }, t("button", {
    type: "button",
    css: y,
    onClick: () => g(!1)
  }, d("버튼_취소")), t("button", {
    type: "button",
    css: [b, {
      marginLeft: "4px"
    }],
    onClick: c
  }, d("버튼_변경")))));
}, dt = (e, n) => F((e ?? [])[n] ?? null), ut = (e) => {
  const n = e.statusCd === L.SOS04.code ? 1 : 0;
  return dt(e.nextPaymentDates, n);
}, nt = (e) => `변경 사항은 다음 회차 ${e ? `${e} ` : ""}주문부터 적용됩니다.`, D = ({
  status: e,
  subscriptionOrderCode: n,
  queryOptions: a
} = {
  status: "SOS02"
}) => ({
  queryKey: ["OrderSubscription", n, e],
  queryFn: async ({
    signal: l
  }) => {
    const d = new URL("/ajax/oms/OMS_wrap_customer_v1_subscription_{subscriptionOrderCode}.cm", window.location.origin);
    d.searchParams.set("subscriptionOrderCode", String(n)), d.searchParams.set("status", e);
    const {
      data: r
    } = await $.get(d.href, {
      signal: l
    });
    return r == null ? void 0 : r.data;
  },
  ...a,
  enabled: typeof n == "string" && ((a == null ? void 0 : a.enabled) ?? !0)
}), he = ({
  updateMode: e,
  setUpdateMode: n,
  subscriptionOrderCode: a,
  shippingAddress: l,
  setShippingAddress: d,
  closeModal: r,
  setTabView: m
}) => {
  const {
    ct: g
  } = E();
  W("brand_color");
  const o = V(), [y, b] = U.useState(() => e ? "update" : null), [w, c] = U.useState(l == null ? void 0 : l.isDefault), C = T("default", {
    fontSize: "13px",
    fontWeight: "unset",
    padding: "8px 16px"
  }), h = T("primary", {
    fontSize: "13px"
  }), {
    data: f
  } = O(D({
    status: "SOS02",
    subscriptionOrderCode: a,
    queryOptions: {
      select: (i) => {
        const v = ut(i);
        if (v !== null)
          return M(v, "yyyy-MM-dd (E)", {
            locale: z[window.LANG_CODE]
          });
      }
    }
  })), {
    data: S
  } = O(D({
    status: "SOS02",
    subscriptionOrderCode: a
  })), {
    data: s
  } = O(D({
    status: "SOS02",
    subscriptionOrderCode: a,
    queryOptions: {
      select: (i) => i.deliveryTypeCd ? !["ODT01", "ODT03", "ODT07"].includes(i.deliveryTypeCd) : !1
    }
  })), {
    data: u
  } = O(Rt({
    countryShippingCode: S == null ? void 0 : S.delivery.country,
    queryOptions: {
      enabled: s ?? !1
    }
  })), {
    data: k
  } = O(D({
    status: "SOS02",
    subscriptionOrderCode: a,
    queryOptions: {
      enabled: typeof a == "string",
      select: (i) => i.products.map((v) => v.prodCode)
    }
  })), {
    data: I
  } = O(Bt({
    productCodes: k,
    // TODO: 정기구독 배송 상품의 배송지에서 배송 국가 코드를 가져오는게 필요.
    countryShippingCode: S == null ? void 0 : S.delivery.country,
    queryOptions: {
      enabled: s ?? !1
    }
  })), {
    mutateAsync: Q,
    isLoading: G
  } = P({
    mutationKey: ["RegisterShippingAddress"],
    mutationFn: async (i) => {
      var R, p;
      const {
        data: v
      } = await $.post("/ajax/oms/OMS_add_member_shipping_address.cm", {
        shipping_country: i == null ? void 0 : i.country,
        address_format: i == null ? void 0 : i.addressFormat,
        is_default: i == null ? void 0 : i.isDefaultShippingAddress,
        receiver_name: i == null ? void 0 : i.receiverName,
        receiver_call: i == null ? void 0 : i.receiverCall,
        zipcode: i == null ? void 0 : i.zipcode,
        addr1: i == null ? void 0 : i.addr1,
        addr2: i == null ? void 0 : i.addr2,
        city: i == null ? void 0 : i.city,
        state: i == null ? void 0 : i.state,
        building: i == null ? void 0 : i.building,
        street: i == null ? void 0 : i.street,
        country: i == null ? void 0 : i.country,
        country_name: (p = (R = I ?? []) == null ? void 0 : R.find((_) => _.code === (i == null ? void 0 : i.country))) == null ? void 0 : p.name,
        address_common_entrance_password: i == null ? void 0 : i.commonEntrancePassword
      }, {
        baseURL: "",
        withCredentials: !0,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      });
      if (typeof (v == null ? void 0 : v.deliv_address_code) > "u" || (v == null ? void 0 : v.deliv_address_code) === null)
        throw new Error(v == null ? void 0 : v.msg);
      return v.deliv_address_code;
    },
    onSuccess: () => {
      o.invalidateQueries({
        queryKey: ["MemberShippingAddresses"]
      });
    }
  }), {
    mutateAsync: N,
    isLoading: q
  } = P({
    mutationKey: ["UpdateShippingAddress"],
    mutationFn: async (i) => {
      var R, p;
      const {
        data: v
      } = await $.put("/ajax/oms/OMS_add_member_shipping_address.cm?code=" + i.code, {
        shipping_country: i.country,
        address_format: i.addressFormat,
        is_default: i.isDefaultShippingAddress,
        receiver_name: i.receiverName,
        receiver_call: i.receiverCall,
        zipcode: i.zipcode,
        addr1: i.addr1,
        addr2: i.addr2,
        city: i.city,
        state: i.state,
        building: i.building,
        street: i.street,
        country: i.country,
        country_name: (p = (R = I ?? []) == null ? void 0 : R.find((_) => _.code === i.country)) == null ? void 0 : p.name,
        address_common_entrance_password: i.commonEntrancePassword
      }, {
        baseURL: "",
        withCredentials: !0,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      });
      if (typeof (v == null ? void 0 : v.deliv_address_code) > "u" || (v == null ? void 0 : v.deliv_address_code) === null)
        throw new Error(v == null ? void 0 : v.msg);
      return v.deliv_address_code;
    },
    onSuccess: () => {
      o.invalidateQueries({
        queryKey: ["MemberShippingAddresses"]
      });
    }
  }), {
    mutateAsync: K
  } = P({
    mutationKey: ["UpdateShippingAddressSubscription"],
    mutationFn: async (i) => {
      const {
        data: v
      } = await $.patch(`/ajax/oms/OMS_wrap_customer_v1_subscription_{subscriptionOrderCode}.cm?subscriptionOrderCode=${a}`, {
        delivery: i
      }, {
        headers: {
          "Content-Type": "application/json"
        }
      });
      if (!/success/i.test(v.message))
        throw new Error(v.message);
    },
    onSuccess: () => {
      o.invalidateQueries({
        queryKey: ["OrderSubscription", a]
      });
    }
  }), Z = (i) => {
    d(i);
  }, et = (i) => {
    b(i.target.checked ? "register" : null), i.target.checked || c("N");
  }, X = async () => {
    if (l === void 0)
      return;
    const i = {
      ...l,
      // api에서 빈 문자열로 넘기면 해당 칼럼을 갱신하지 않음.
      code: l.code,
      shippingAddressCode: l.code,
      isDefaultShippingAddress: w ? "Y" : "N"
    };
    if (y === "update") {
      await N({
        ...i,
        code: l.code,
        shippingAddressCode: l.code
      }), n(!1), m("select");
      return;
    }
    if (confirm(nt(f))) {
      if (y === "register") {
        const v = await Q({
          ...i,
          code: null,
          shippingAddressCode: null
        });
        await K({
          ...i,
          code: v,
          shippingAddressCode: v
        }), r();
        return;
      }
      await K({
        ...i,
        code: null,
        shippingAddressCode: null
      }), r();
    }
  }, J = (i) => {
    var v, R, p, _, A;
    return i === void 0 ? !1 : Vt(i) ? (((v = i.receiverName) == null ? void 0 : v.length) ?? 0) > 1 && (i.receiverCall ?? "").replace(/\D/, "").length > 7 && (((R = i.zipcode) == null ? void 0 : R.length) ?? 0) > 0 && (((p = i.addr1) == null ? void 0 : p.length) ?? 0) > 0 && (((_ = i.addr2) == null ? void 0 : _.length) ?? 0) > 0 && (((A = i.country) == null ? void 0 : A.length) ?? 0) > 0 : !0;
  };
  return t(x.Fragment, null, t(Zt, {
    value: l ?? {
      addressFormat: u,
      country: S == null ? void 0 : S.delivery.country
    },
    onChange: Z,
    shippingCountries: I ?? []
  }), y !== "update" ? t(vt, {
    checked: y === "register",
    onChange: et
  }, t("span", {
    css: {
      marginLeft: "8px"
    }
  }, g("버튼_배송지목록에추가"))) : null, y !== null ? t(vt, {
    checked: w === "Y",
    onChange: (i) => c(i.target.checked ? "Y" : "N")
  }, t("span", {
    css: {
      marginLeft: "8px"
    }
  }, g("버튼_기본배송지로설정"))) : null, t("footer", {
    css: {
      marginTop: "12px",
      display: "flex !important",
      justifyContent: "flex-end"
    }
  }, t("button", {
    type: "button",
    css: C,
    onClick: () => {
      m("select"), d(void 0), n(!1);
    }
  }, g("버튼_취소")), t("button", {
    type: "button",
    disabled: !J(l) || G || q,
    css: [h, {
      marginLeft: "4px"
    }, {
      ":disabled": {
        backgroundColor: "#cccccc",
        color: "#ffffff"
      }
    }],
    onClick: X
  }, g(y === "update" ? "버튼_수정완료" : "버튼_정기구독배송지로설정"))));
}, ve = ({
  subscriptionOrderCode: e,
  shippingAddressSelected: n,
  setShippingAddressSelected: a,
  setAddressUpdate: l,
  handleTabViewChange: d,
  closeModal: r
}) => {
  var J;
  const {
    ct: m
  } = E(), g = V(), o = W("brand_color"), y = x.useRef(null), b = x.useRef(null), w = T("default", {
    fontSize: "13px",
    fontWeight: "unset",
    padding: "8px 16px"
  }), c = T("primary", {
    fontSize: "13px"
  }), {
    data: C
  } = O(D({
    status: "SOS02",
    subscriptionOrderCode: e
  })), {
    data: h
  } = O(D({
    status: "SOS02",
    subscriptionOrderCode: e,
    queryOptions: {
      enabled: typeof e == "string",
      select: (i) => i.products.map((v) => v.prodCode)
    }
  })), {
    data: f
  } = O(D({
    status: "SOS02",
    subscriptionOrderCode: e,
    queryOptions: {
      select: (i) => i.deliveryTypeCd ? !["ODT01", "ODT03", "ODT07"].includes(i.deliveryTypeCd) : !1
    }
  })), {
    data: S
  } = O(Bt({
    productCodes: h,
    countryShippingCode: (J = C == null ? void 0 : C.delivery) == null ? void 0 : J.country,
    queryOptions: {
      enabled: f ?? !1
    }
  })), {
    fetchNextPage: s,
    data: u,
    hasNextPage: k,
    isFetchingNextPage: I
  } = zt(Xt()), {
    data: Q
  } = O(D({
    status: "SOS02",
    subscriptionOrderCode: e,
    queryOptions: {
      select: (i) => {
        const v = ut(i);
        if (v !== null)
          return M(v, "yyyy-MM-dd (E)", {
            locale: z[window.LANG_CODE]
          });
      }
    }
  })), {
    mutateAsync: G
  } = P({
    mutationKey: ["UpdateShippingAddressSubscription"],
    mutationFn: async (i) => {
      const {
        data: v
      } = await $.patch(`/ajax/oms/OMS_wrap_customer_v1_subscription_{subscriptionOrderCode}.cm?subscriptionOrderCode=${e}`, {
        delivery: i
      }, {
        headers: {
          "Content-Type": "application/json"
        }
      });
      if (!/success/i.test(v.message))
        throw new Error(v.message);
    },
    onSuccess: () => {
      g.invalidateQueries({
        queryKey: ["OrderSubscription", e]
      });
    }
  }), N = async () => {
    if (n === void 0) {
      r();
      return;
    }
    confirm(nt(Q)) && (await G(n), r());
  }, q = async () => {
    if (I || b.current === null)
      return;
    const i = b.current;
    await s(), y.current !== null && i.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest"
    });
  }, K = (i) => {
    var R;
    const v = ((R = ((u == null ? void 0 : u.pages) ?? []).flat()) == null ? void 0 : R.find((p) => p.code === i)) ?? void 0;
    a(v), l(!0), d("new");
  }, Z = P({
    mutationFn: async (i) => {
      if (!confirm(m("설명_배송지를삭제하시겠습니까")))
        return;
      const {
        data: v
      } = await $.post("/ajax/shipping/delete_address.cm", {
        code: i
      }, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      });
      if (!/success/i.test(v.msg)) {
        alert(v.msg);
        return;
      }
    },
    onSuccess: () => {
      g.invalidateQueries({
        queryKey: ["MemberShippingAddresses"]
      });
    }
  }), et = B({
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundImage: `url('data:image/svg+xml;utf8,<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 3.99998H6.8C5.11984 3.99998 4.27976 3.99998 3.63803 4.32696C3.07354 4.61458 2.6146 5.07353 2.32698 5.63801C2 6.27975 2 7.11983 2 8.79998V17.2C2 18.8801 2 19.7202 2.32698 20.362C2.6146 20.9264 3.07354 21.3854 3.63803 21.673C4.27976 22 5.11984 22 6.8 22H15.2C16.8802 22 17.7202 22 18.362 21.673C18.9265 21.3854 19.3854 20.9264 19.673 20.362C20 19.7202 20 18.8801 20 17.2V13M7.99997 16H9.67452C10.1637 16 10.4083 16 10.6385 15.9447C10.8425 15.8957 11.0376 15.8149 11.2166 15.7053C11.4184 15.5816 11.5914 15.4086 11.9373 15.0627L21.5 5.49998C22.3284 4.67156 22.3284 3.32841 21.5 2.49998C20.6716 1.67156 19.3284 1.67155 18.5 2.49998L8.93723 12.0627C8.59133 12.4086 8.41838 12.5816 8.29469 12.7834C8.18504 12.9624 8.10423 13.1574 8.05523 13.3615C7.99997 13.5917 7.99997 13.8363 7.99997 14.3255V16Z" stroke="%23757575" /></svg>')`,
    ":disabled": {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 3.99998H6.8C5.11984 3.99998 4.27976 3.99998 3.63803 4.32696C3.07354 4.61458 2.6146 5.07353 2.32698 5.63801C2 6.27975 2 7.11983 2 8.79998V17.2C2 18.8801 2 19.7202 2.32698 20.362C2.6146 20.9264 3.07354 21.3854 3.63803 21.673C4.27976 22 5.11984 22 6.8 22H15.2C16.8802 22 17.7202 22 18.362 21.673C18.9265 21.3854 19.3854 20.9264 19.673 20.362C20 19.7202 20 18.8801 20 17.2V13M7.99997 16H9.67452C10.1637 16 10.4083 16 10.6385 15.9447C10.8425 15.8957 11.0376 15.8149 11.2166 15.7053C11.4184 15.5816 11.5914 15.4086 11.9373 15.0627L21.5 5.49998C22.3284 4.67156 22.3284 3.32841 21.5 2.49998C20.6716 1.67156 19.3284 1.67155 18.5 2.49998L8.93723 12.0627C8.59133 12.4086 8.41838 12.5816 8.29469 12.7834C8.18504 12.9624 8.10423 13.1574 8.05523 13.3615C7.99997 13.5917 7.99997 13.8363 7.99997 14.3255V16Z" stroke="%23CCCCCC" /></svg>')`
    }
  }), X = B({
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundImage: `url('data:image/svg+xml;utf8,<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 3H15M3 6H21M19 6L18.2987 16.5193C18.1935 18.0975 18.1409 18.8867 17.8 19.485C17.4999 20.0118 17.0472 20.4353 16.5017 20.6997C15.882 21 15.0911 21 13.5093 21H10.4907C8.90891 21 8.11803 21 7.49834 20.6997C6.95276 20.4353 6.50009 20.0118 6.19998 19.485C5.85911 18.8867 5.8065 18.0975 5.70129 16.5193L5 6" stroke="%23757575" /></svg>')`,
    ":disabled": {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 3H15M3 6H21M19 6L18.2987 16.5193C18.1935 18.0975 18.1409 18.8867 17.8 19.485C17.4999 20.0118 17.0472 20.4353 16.5017 20.6997C15.882 21 15.0911 21 13.5093 21H10.4907C8.90891 21 8.11803 21 7.49834 20.6997C6.95276 20.4353 6.50009 20.0118 6.19998 19.485C5.85911 18.8867 5.8065 18.0975 5.70129 16.5193L5 6" stroke="%23CCCCCC" /></svg>')`
    }
  });
  return t(x.Fragment, null, t("ul", {
    ref: y,
    css: [{
      height: "640px",
      listStyleType: "none",
      overflowY: "auto",
      padding: "0px"
    }]
  }, ((u == null ? void 0 : u.pages) ?? []).flat().map((i, v, {
    length: R
  }) => {
    const p = !(S != null && S.some((A) => A.code === i.shippingCountryCode)), _ = (n == null ? void 0 : n.shippingAddressCode) === i.code;
    return t(Jt, {
      ref: b,
      key: i.code,
      value: i.code,
      disabled: p,
      selected: _,
      isLast: v === R - 1,
      onChange: () => a(i)
    }, t(Kt, {
      address: i,
      defaultTag: i.isDefault === "Y",
      latest: i.isLatest === "Y",
      disabled: p
    }), p ? t("p", {
      css: {
        fontSize: "13px",
        "--tw-text-opacity": "1",
        color: "rgb(251 70 55 / var(--tw-text-opacity))"
      }
    }, m("설명_이배송지로배송할수없습니다다른배송지를선택해주세요")) : null, t("div", {
      css: {
        position: "absolute",
        right: "0px",
        top: "0px",
        display: "flex",
        columnGap: "4px"
      }
    }, t("button", {
      type: "button",
      css: [{
        height: "18px",
        width: "18px",
        borderWidth: "0px",
        backgroundColor: "transparent",
        fontSize: "13px",
        "--tw-text-opacity": "1",
        color: "rgb(117 117 117 / var(--tw-text-opacity))"
      }, et],
      onClick: () => K(i.code)
    }), t("span", {
      css: {
        "--tw-text-opacity": "1",
        color: "rgb(204 204 204 / var(--tw-text-opacity))"
      }
    }, "|"), t("button", {
      type: "button",
      css: [{
        height: "18px",
        width: "18px",
        borderWidth: "0px",
        backgroundColor: "transparent",
        fontSize: "13px",
        "--tw-text-opacity": "1",
        color: "rgb(117 117 117 / var(--tw-text-opacity))"
      }, X],
      onClick: () => Z.mutate(i.code)
    })));
  })), k ? t("div", {
    css: {
      display: "flex",
      justifyContent: "center"
    }
  }, t("button", {
    type: "button",
    css: [{
      backgroundColor: "transparent",
      fontSize: "14px"
    }, {
      color: o
    }],
    onClick: q
  }, `${m("버튼_더보기")} +`)) : null, t("footer", {
    css: {
      marginTop: "12px",
      display: "flex !important",
      justifyContent: "flex-end"
    }
  }, t("button", {
    type: "button",
    css: w,
    onClick: r
  }, m("버튼_닫기")), t("button", {
    disabled: n === void 0,
    type: "button",
    css: [c, {
      marginLeft: "4px"
    }, {
      ":disabled": {
        backgroundColor: "#cccccc",
        color: "#ffffff"
      }
    }],
    onClick: N
  }, m("버튼_정기구독배송지로설정"))));
}, Se = ({
  children: e,
  subscriptionOrderCode: n,
  initTabView: a
}) => {
  const {
    ct: l
  } = E(), d = W("brand_color"), [r, m] = U.useState(a ?? "select"), [g, o] = U.useState(!1), y = x.useRef(null), [b, w] = U.useState(!1), [c, C] = U.useState(), h = {
    color: `${d} !important`,
    fontWeight: "bold",
    "&>span": {
      opacity: "1"
    },
    borderBottom: `1px solid ${d}`
  }, f = () => {
    o(!1), w(!0), m(a ?? "select");
  }, S = () => {
    w(!1), C(void 0);
  };
  return x.useEffect(() => {
    const s = y.current;
    return s == null || s.addEventListener("click", f), () => {
      s == null || s.removeEventListener("click", f);
    };
  }, [y.current, f]), t(x.Fragment, null, typeof e < "u" ? t("div", {
    ref: y
  }, e) : t("button", {
    onClick: f
  }, "Select Shipping Address"), t(Y, {
    maxWidth: "540px",
    isOpen: b,
    title: "배송지 관리",
    onRequestClose: S
  }, t("ul", {
    css: {
      marginBottom: "18px",
      display: "flex",
      listStyleType: "none",
      padding: "0px",
      "@media not all and (min-width: 768px)": {
        "--tw-bg-opacity": "1",
        backgroundColor: "rgb(255 255 255 / var(--tw-bg-opacity))"
      },
      "& li:not(:first-of-type)": {
        marginLeft: "32px !important"
      }
    }
  }, t("li", {
    css: {
      flex: "1 1 0%"
    }
  }, t("a", {
    css: [B({
      display: "block",
      padding: "12px 0",
      fontSize: "13px",
      textAlign: "center"
    }), r === "select" ? h : void 0],
    onClick: () => {
      r !== "select" && (C(void 0), o(!1), m("select"));
    },
    href: "#applies"
  }, l("버튼_배송지목록"))), t("li", {
    css: {
      flex: "1 1 0%"
    }
  }, t("a", {
    css: [B({
      display: "block",
      padding: "12px 0",
      fontSize: "13px",
      textAlign: "center"
    }), r === "new" ? h : void 0],
    onClick: () => {
      r !== "new" && (m("new"), C(void 0), o(!1));
    },
    href: "#resigns"
  }, l(g ? "타이틀_배송지수정" : "버튼_배송지추가")))), r === "select" ? t(U.Suspense, {
    fallback: t(Ot, null)
  }, t(ve, {
    subscriptionOrderCode: n,
    shippingAddressSelected: c,
    setShippingAddressSelected: C,
    setAddressUpdate: o,
    handleTabViewChange: m,
    closeModal: S
  })) : null, r === "new" ? t(U.Suspense, {
    fallback: t(Ot, null)
  }, t(he, {
    updateMode: g,
    setUpdateMode: o,
    subscriptionOrderCode: n,
    shippingAddress: c,
    setShippingAddress: C,
    setTabView: m,
    closeModal: S
  })) : null));
};
function Ot() {
  return t("div", {
    css: {
      "@keyframes pulse": {
        "50%": {
          opacity: ".5"
        }
      },
      animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite"
    }
  }, t("div", {
    css: {
      marginBottom: "20px",
      height: "18px",
      width: "30%",
      borderRadius: "10px",
      "--tw-bg-opacity": "1",
      backgroundColor: "rgb(186 183 183 / var(--tw-bg-opacity))",
      padding: "10px"
    }
  }), t("div", {
    css: {
      marginBottom: "24px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      rowGap: "10px"
    }
  }, t("div", {
    css: {
      height: "14px",
      width: "80%",
      borderRadius: "10px",
      "--tw-bg-opacity": "1",
      backgroundColor: "rgb(186 183 183 / var(--tw-bg-opacity))"
    }
  }), t("div", {
    css: {
      height: "14px",
      width: "80%",
      borderRadius: "10px",
      "--tw-bg-opacity": "1",
      backgroundColor: "rgb(186 183 183 / var(--tw-bg-opacity))"
    }
  }), t("div", {
    css: {
      height: "14px",
      width: "80%",
      borderRadius: "10px",
      "--tw-bg-opacity": "1",
      backgroundColor: "rgb(186 183 183 / var(--tw-bg-opacity))"
    }
  }), t("div", {
    css: {
      height: "14px",
      width: "80%",
      borderRadius: "10px",
      "--tw-bg-opacity": "1",
      backgroundColor: "rgb(186 183 183 / var(--tw-bg-opacity))"
    }
  })), t("div", {
    css: {
      marginBottom: "10px",
      height: "14px",
      width: "15%",
      borderRadius: "10px",
      "--tw-bg-opacity": "1",
      backgroundColor: "rgb(186 183 183 / var(--tw-bg-opacity))"
    }
  }), t("div", {
    css: {
      height: "16px",
      width: "100%",
      borderRadius: "10px",
      "--tw-bg-opacity": "1",
      backgroundColor: "rgb(186 183 183 / var(--tw-bg-opacity))",
      padding: "10px"
    }
  }));
}
const we = ({
  disabled: e = !1,
  disabledTooltip: n
}) => {
  const {
    ct: a
  } = E(), l = j("subscription_order_code"), d = W("brand_color"), r = V(), [m, g] = x.useState(!1), o = T("default", {
    fontSize: "13px",
    fontWeight: "unset",
    padding: "8px 16px"
  }), y = T("primary", {
    fontSize: "13px"
  }), {
    data: b
  } = O(D({
    status: "SOS02",
    subscriptionOrderCode: l,
    queryOptions: {
      select: (h) => {
        const f = dt(h.nextPaymentDates, 1);
        return f === null ? null : M(f, "yyyy-MM-dd (E)", {
          locale: z[window.LANG_CODE]
        });
      }
    }
  })), {
    mutateAsync: w
  } = P({
    mutationKey: ["RequestSkipSubscriptionItem"],
    mutationFn: async () => {
      const {
        data: h
      } = await $.post(`/ajax/oms/OMS_wrap_customer_v1_subscription_{subscriptionOrderCode}_skip.cm?subscriptionOrderCode=${l}`, {}, {
        headers: {
          "Content-Type": "application/json"
        }
      });
      if (!/^SUCCESS$/i.test(h.message))
        throw new Error(h.message);
    },
    onSuccess: () => {
      r.invalidateQueries({
        queryKey: ["OrderSubscription", l]
      });
    }
  }), c = async () => {
    await w(), g(!1);
  };
  if (b == null)
    return null;
  const C = t("button", {
    css: [{
      cursor: "pointer",
      appearance: "none",
      backgroundColor: "transparent",
      padding: "2px",
      fontSize: "14px",
      textDecorationLine: "underline"
    }, {
      color: d
    }, e && {
      textDecorationLine: "none",
      opacity: "0.5",
      ":disabled": {
        cursor: "not-allowed"
      }
    }],
    disabled: e,
    onClick: () => g(!0)
  }, a("버튼_이번배송건너뛰기"));
  return t(x.Fragment, null, e && n ? t(pt, {
    label: n
  }, C) : C, t(Y, {
    maxWidth: "400px",
    isOpen: m,
    onRequestClose: () => g(!1)
  }, t("div", {
    css: {
      padding: "8px"
    },
    dangerouslySetInnerHTML: {
      __html: a("설명_이번배송을건너뛰겠습니까다음구독일은n입니다", b)
    }
  }), t("footer", {
    css: {
      marginTop: "12px",
      display: "flex !important",
      justifyContent: "flex-end"
    }
  }, t("button", {
    type: "button",
    css: o,
    onClick: () => g(!1)
  }, a("버튼_취소")), t("button", {
    type: "button",
    css: [y, {
      marginLeft: "4px"
    }],
    onClick: c
  }, a("버튼_변경")))));
}, kt = ({
  mobile: e,
  subscriptionItemCode: n,
  disabled: a = !1,
  disabledTooltip: l
}) => {
  const {
    ct: d
  } = E(), r = j("subscription_order_code"), m = V(), [g, o] = x.useState(!1), y = T("default", {
    fontSize: "13px",
    fontWeight: "unset",
    padding: "6px 12px"
  }), b = T("default", {
    fontSize: "13px",
    fontWeight: "unset",
    padding: "8px 16px"
  }), w = T("primary", {
    fontSize: "13px"
  }), {
    data: c
  } = O(D({
    status: "SOS02",
    subscriptionOrderCode: r,
    queryOptions: {
      select: (s) => s.products.find((u) => u.subscriptionOrderItemCode === n)
    }
  })), {
    data: C
  } = O(D({
    status: "SOS02",
    subscriptionOrderCode: r,
    queryOptions: {
      select: (s) => {
        const u = dt(s.nextPaymentDates, 1);
        return u === null ? null : M(u, "yyyy-MM-dd (E)", {
          locale: z[window.LANG_CODE]
        });
      }
    }
  })), {
    mutateAsync: h
  } = P({
    mutationKey: ["RequestSkipSubscriptionItem"],
    mutationFn: async () => {
      const {
        data: s
      } = await $.post(`/ajax/oms/OMS_wrap_customer_v1_subscription_{subscriptionOrderCode}_items_{subscriptionOrderItemCode}_skip.cm?subscriptionOrderCode=${r}&subscriptionOrderItemCode=${n}`, {}, {
        headers: {
          "Content-Type": "application/json"
        }
      });
      if (!/^SUCCESS$/i.test(s.message))
        throw new Error(s.message);
    },
    onSuccess: () => {
      m.invalidateQueries({
        queryKey: ["OrderSubscription", r]
      });
    }
  }), f = async () => {
    await h(), o(!1);
  };
  if (/^Y$/i.test((c == null ? void 0 : c.isSkip) ?? "N") || C == null)
    return null;
  const S = t("button", {
    css: [e ? y : b, a && {
      opacity: "0.5",
      ":disabled": {
        cursor: "not-allowed"
      }
    }],
    disabled: a,
    onClick: () => o(!0)
  }, d("버튼_건너뛰기"));
  return t(x.Fragment, null, a && l ? t(pt, {
    label: l
  }, S) : S, t(Y, {
    maxWidth: "400px",
    isOpen: g,
    onRequestClose: () => o(!1)
  }, t("div", {
    css: {
      padding: "8px"
    },
    dangerouslySetInnerHTML: {
      __html: d("설명_이번배송을건너뛰겠습니까다음구독일은n입니다", C)
    }
  }), t("footer", {
    css: {
      marginTop: "12px",
      display: "flex !important",
      justifyContent: "flex-end"
    }
  }, t("button", {
    type: "button",
    css: b,
    onClick: () => o(!1)
  }, d("버튼_취소")), t("button", {
    type: "button",
    css: [w, {
      marginLeft: "4px"
    }],
    onClick: f
  }, d("버튼_변경")))));
}, Ce = 500, Dt = 24 * 60 * 60 * 1e3, Tt = (e) => {
  const n = /^(\d+)([wm])$/i.exec(e);
  return n === null ? null : {
    cycleType: n[2].toUpperCase(),
    cycleValue: Number(n[1])
  };
}, mt = (e) => new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate(), _e = (e) => e.getDate() === mt(e), Oe = (e, n) => {
  const a = new Date(e.getFullYear(), e.getMonth() + n, 1, e.getHours(), e.getMinutes(), e.getSeconds());
  return a.setDate(Math.min(e.getDate(), mt(a))), a;
}, ke = (e, n) => {
  const a = new Date(e);
  return a.setDate(a.getDate() + n * 7), a;
}, It = (e, {
  cycleType: n,
  cycleValue: a
}) => {
  if (n === "W")
    return ke(e, a);
  const l = Oe(e, a);
  return _e(e) && l.setDate(mt(l)), l;
}, De = (e) => Math.floor(te(e) / Dt) * Dt, Te = (e, n) => {
  if (!Number.isInteger(n.cycleValue) || n.cycleValue < 1)
    return null;
  const a = F(e.lastPaymentDate) ?? F((e.nextPaymentDates ?? [])[0]);
  if (a === null)
    return null;
  const l = Date.now();
  let d = It(a, n);
  for (let r = 0; De(d) <= l; r++) {
    if (r >= Ce)
      return null;
    d = It(d, n);
  }
  return d;
}, Ie = ({
  disabled: e = !1
}) => {
  const {
    ct: n
  } = E(), a = j("subscription_order_code"), l = V(), [d, r] = x.useState(""), [m, g] = x.useState(!1), o = W("button_sb_background_color"), y = W("button_sb_border_color"), b = T("default", {
    fontSize: "13px",
    fontWeight: "unset",
    padding: "8px 16px",
    marginLeft: "8px"
  }), w = T("primary", {
    fontSize: "13px"
  }), {
    data: c
  } = O(D({
    status: "SOS02",
    subscriptionOrderCode: a,
    queryOptions: {
      select: (s) => `${s.cycleValue}${s.cycleType.toLowerCase()}`
    }
  })), {
    data: C
  } = O(ee({
    subscriptionOrderCode: a ?? void 0,
    queryOptions: {
      select: (s) => s.list.map((u) => ({
        code: u,
        periodLocale: /\d+w/.test(u) ? `${u.replace(/[^\d]/, "")}${n("버튼_주")}` : /\d+m/.test(u) ? n("버튼_n개월", u.replace(/[^\d]/, "")) : String(u)
      }))
    }
  })), {
    data: h
  } = O(D({
    status: "SOS02",
    subscriptionOrderCode: a,
    queryOptions: {
      select: ({
        lastPaymentDate: s,
        nextPaymentDates: u
      }) => ({
        lastPaymentDate: s,
        nextPaymentDates: u
      })
    }
  })), f = P({
    mutationKey: ["UpdatePeriodSubscription"],
    mutationFn: async (s) => {
      const u = Tt(s);
      if (u === null)
        throw new Error(`Invalid subscription period: ${s}`);
      const {
        data: k
      } = await $.patch(`/ajax/oms/OMS_wrap_customer_v1_subscription_{subscriptionOrderCode}.cm?subscriptionOrderCode=${a}`, u, {
        headers: {
          "Content-Type": "application/json"
        }
      });
      if (!/^SUCCESS$/i.test(k.message))
        throw new Error(k.message);
    },
    onSuccess: () => {
      l.invalidateQueries({
        queryKey: ["OrderSubscription", a]
      });
    }
  }), S = async () => {
    const s = Tt(d), u = s === null ? null : Te(h ?? {}, s), k = u === null ? void 0 : M(u, "yyyy-MM-dd (E)", {
      locale: z[window.LANG_CODE]
    });
    confirm(nt(k)) && (await f.mutateAsync(d), g(!1));
  };
  return x.useEffect(() => {
    typeof c == "string" && r(c);
  }, [c, r]), t(x.Fragment, null, C && C.length > 1 && t("button", {
    css: [b, e && {
      cursor: "not-allowed",
      opacity: "0.5"
    }],
    disabled: e,
    onClick: () => g(!0)
  }, n("버튼_변경")), t(Y, {
    title: n("타이틀_구독주기설정"),
    isOpen: m,
    onRequestClose: () => g(!1)
  }, t("form", null, t("fieldset", {
    css: {
      marginBottom: "16px",
      display: "flex",
      flexWrap: "wrap"
    }
  }, C == null ? void 0 : C.map((s) => {
    const u = d === s.code;
    return t("label", {
      key: s.code,
      css: [{
        display: "flex !important",
        flexBasis: "calc((100% + 4px) / 5 - 4px)",
        cursor: "pointer",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "2px",
        borderWidth: "1px",
        borderColor: "rgba(79,79,79,0.2)",
        paddingTop: "10px",
        paddingBottom: "10px",
        transitionProperty: "color, background-color, border-color, text-decoration-color, fill, stroke",
        transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
        transitionDuration: "300ms",
        ":hover": {
          borderColor: "rgba(79,79,79,1)"
        },
        "@media not all and (min-width: 768px)": {
          flexBasis: "calc((100% + 4px) / 3 - 4px)",
          ":not(:nth-of-type(3n+1))": {
            marginLeft: "4px"
          }
        },
        "@media (min-width: 768px)": {
          ":not(:nth-of-type(5n+1))": {
            marginLeft: "4px"
          }
        }
      }, u ? {
        backgroundColor: o,
        borderColor: y,
        color: "#ffffff !important"
      } : null]
    }, t("input", {
      css: {
        display: "none"
      },
      type: "radio",
      name: "subscribe_period",
      value: s.code,
      checked: u,
      onChange: (k) => r(k.target.value)
    }), t("span", {
      css: {
        fontSize: "12px",
        fontWeight: "700"
      }
    }, s.periodLocale));
  }), t("label", null))), t("footer", {
    css: {
      display: "flex !important",
      justifyContent: "flex-end"
    }
  }, t("button", {
    type: "button",
    css: b,
    onClick: () => g(!1)
  }, n("버튼_취소")), t("button", {
    type: "button",
    css: [w, {
      marginLeft: "4px"
    }],
    onClick: S
  }, n("버튼_변경")))));
}, Lt = ({
  mobile: e,
  subscriptionItemCode: n,
  disabled: a = !1
}) => {
  const {
    ct: l
  } = E(), d = j("subscription_order_code"), r = V(), m = W("body_color"), g = it(m).alpha(0.03).hexa(), [o, y] = x.useState(!1), [b, w] = x.useState(-1), c = T("default", {
    fontSize: "13px",
    fontWeight: "unset",
    padding: "6px 12px"
  }), C = T("default", {
    fontSize: "13px",
    fontWeight: "unset"
  }), h = T("primary", {
    fontSize: "13px"
  }), {
    data: f
  } = O(D({
    status: "SOS02",
    subscriptionOrderCode: d,
    queryOptions: {
      select: (k) => k.products.find((I) => I.subscriptionOrderItemCode === n)
    }
  })), {
    data: S
  } = O(D({
    status: "SOS02",
    subscriptionOrderCode: d,
    queryOptions: {
      select: (k) => {
        const I = ut(k);
        if (I !== null)
          return M(I, "yyyy-MM-dd (E)", {
            locale: z[window.LANG_CODE]
          });
      }
    }
  })), {
    mutateAsync: s
  } = P({
    mutationKey: ["UpdateQuantitySubscriptionItem"],
    mutationFn: async (k) => {
      const {
        data: I
      } = await $.patch(`/ajax/oms/OMS_wrap_customer_v1_subscription_{subscriptionOrderCode}_items_{subscriptionOrderItemCode}.cm?subscriptionOrderCode=${d}&subscriptionOrderItemCode=${n}`, {
        quantity: k
      }, {
        headers: {
          "Content-Type": "application/json"
        }
      });
      if (!/^SUCCESS$/i.test(I.message))
        throw new Error(I.message);
    },
    onSuccess: () => {
      r.invalidateQueries({
        queryKey: ["OrderSubscription", d]
      });
    },
    onError: (k) => {
      k instanceof Error && alert(k.message);
    }
  }), u = async () => {
    b < 0 || confirm(nt(S)) && (await s(b), y(!1));
  };
  return U.useEffect(() => {
    f && w((f == null ? void 0 : f.qty) ?? -1);
  }, [f, o]), t(x.Fragment, null, t("button", {
    css: [e ? c : C, {
      padding: "6px 10px"
    }, a && {
      cursor: "not-allowed",
      opacity: "0.5"
    }],
    disabled: a,
    onClick: () => y(!0)
  }, l("버튼_수량변경")), t(Y, {
    maxWidth: "400px",
    contentStyle: {
      padding: "0"
    },
    isOpen: o,
    onRequestClose: () => y(!1),
    title: l("버튼_수량변경")
  }, t("form", {
    css: B({
      backgroundColor: g,
      padding: "12px"
    })
  }, t("div", {
    css: {
      display: "flex !important",
      width: "100%",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "24px 8px"
    }
  }, t("div", {
    css: {
      flex: "1 1 0%"
    }
  }, "수량"), t("div", {
    css: {
      display: "flex",
      height: "32px",
      borderWidth: "1px",
      "--tw-border-opacity": "1",
      borderColor: "rgb(204 204 204 / var(--tw-border-opacity))"
    }
  }, t("button", {
    disabled: b < 0,
    css: {
      height: "100%",
      width: "24px",
      cursor: "pointer",
      appearance: "none",
      borderWidth: "1px",
      borderTopWidth: "0px",
      borderBottomWidth: "0px",
      borderLeftWidth: "0px",
      borderRightWidth: "1px",
      "--tw-border-opacity": "1",
      borderRightColor: "rgb(204 204 204 / var(--tw-border-opacity))",
      "--tw-bg-opacity": "1",
      backgroundColor: "rgb(255 255 255 / var(--tw-bg-opacity))",
      padding: "0px",
      textAlign: "center",
      fontWeight: "1px",
      lineHeight: "0px",
      "--tw-text-opacity": "1",
      color: "rgb(33 33 33 / var(--tw-text-opacity))"
    },
    type: "button",
    onClick: () => w((k) => Math.max(1, k - 1))
  }, t("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, t("path", {
    d: "M5 12H19",
    stroke: "currentColor"
  }))), t("input", {
    disabled: b < 0,
    css: {
      height: "100%",
      width: "50px",
      cursor: "text",
      appearance: "none",
      borderStyle: "none",
      "--tw-bg-opacity": "1",
      backgroundColor: "rgb(255 255 255 / var(--tw-bg-opacity))",
      textAlign: "center",
      fontSize: "14px"
    },
    value: b < 0 ? "" : b
  }), t("button", {
    disabled: b < 0,
    css: {
      height: "100%",
      width: "24px",
      cursor: "pointer",
      appearance: "none",
      borderWidth: "1px",
      borderTopWidth: "0px",
      borderBottomWidth: "0px",
      borderLeftWidth: "1px",
      borderRightWidth: "0px",
      "--tw-border-opacity": "1",
      borderLeftColor: "rgb(204 204 204 / var(--tw-border-opacity))",
      "--tw-bg-opacity": "1",
      backgroundColor: "rgb(255 255 255 / var(--tw-bg-opacity))",
      padding: "0px",
      textAlign: "center",
      fontWeight: "1px",
      lineHeight: "0px",
      "--tw-text-opacity": "1",
      color: "rgb(33 33 33 / var(--tw-text-opacity))"
    },
    type: "button",
    onClick: () => w((k) => k + 1)
  }, t("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, t("path", {
    d: "M12 5V19M5 12H19",
    stroke: "currentColor"
  })))))), t("footer", {
    css: {
      display: "flex !important",
      justifyContent: "flex-end",
      padding: "2rem"
    }
  }, t("button", {
    type: "button",
    css: C,
    onClick: () => y(!1)
  }, l("버튼_취소")), t("button", {
    type: "button",
    css: [h, {
      marginLeft: "4px"
    }],
    onClick: u
  }, l("버튼_변경")))));
}, Le = (e) => `결제일(${e}) 이후
개별 해지를 할 수 있어요`, Me = (e) => `결제일(${e}) 이후
건너뛰기 할 수 있어요`, Ee = [L.SOS02.code, L.SOS04.code], ze = ({
  isTestServer: e,
  subscriptionOrderCode: n,
  statusCd: a
}) => e && typeof n == "string" && n.length > 0 && typeof a == "string" && Ee.includes(a), $e = (e) => `/customer/v1/subscription/${encodeURIComponent(e)}/payment`, We = ({
  subscriptionOrderCode: e
}, n) => ({
  mutationKey: ["SubscriptionImmediatePayment", e],
  mutationFn: async () => {
    const {
      data: a
    } = await $.post($e(e), void 0, {
      // 노출 게이트가 운영을 막으므로 운영 분기를 두지 않는다 — 어떤 경우에도 운영 OMS 로 나가지 않는다.
      baseURL: "https://api.oms.imstage.me",
      withCredentials: !1,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });
    if ((a == null ? void 0 : a.data) !== !0)
      throw new Error("정기구독 즉시 결제 요청이 거절되었습니다.");
    return !0;
  },
  ...n
}), H = {
  surfaceHighlightSecondary: "#ecf9ff",
  // --clay-surface-highlight-secondary
  actionAccent: "#00b9ff",
  // --clay-action-accent
  actionAccentHover: "#0090d4",
  // --clay-action-accent-hover
  actionAccentPressed: "#0072ab",
  // --clay-action-accent-pressed
  iconAccent: "#0090d4",
  // --clay-icon-accent
  text: "#15181e",
  // --clay-text (accent solid 버튼 라벨색)
  textSub: "#717680",
  // --clay-text-sub
  textCritical: "#ed1515",
  // --clay-text-critical (에러만 critical 유지)
  textAccent: "#0090d4",
  // --clay-text-accent
  radiusMd: "8px"
  // --clay-radius-md
}, Re = {
  height: "48px",
  // --clay-size-control-600
  paddingInline: "16px",
  // --clay-space-200
  fontSize: "16px",
  // label.lg
  lineHeight: "24px",
  fontWeight: 500
}, yt = {
  fontSize: "14px",
  lineHeight: "22px"
}, Be = () => {
  const e = j("subscription_order_code"), n = V(), {
    data: a
  } = O(D({
    status: "SOS02",
    subscriptionOrderCode: e,
    queryOptions: {
      select: (y) => y.statusCd
    }
  })), {
    mutate: l,
    isLoading: d,
    isSuccess: r,
    error: m
  } = P(We({
    subscriptionOrderCode: e ?? ""
  }, {
    // 성공은 메시지 발행 완료일 뿐이므로, 결제 결과는 기존 구독 조회로 다시 확인한다.
    onSuccess: () => {
      n.invalidateQueries({
        queryKey: ["OrderSubscription", e]
      });
    }
  })), g = ze({
    isTestServer: window.TEST_SERVER ?? !1,
    subscriptionOrderCode: e,
    statusCd: a
  }), o = () => {
    confirm(`이 구독의 결제를 지금 실행할까요?
실제 결제가 발생합니다. (테스트 서버 전용)`) && l();
  };
  return g ? t("section", {
    css: [{
      marginTop: "10px",
      padding: "20px"
    }, {
      backgroundColor: H.surfaceHighlightSecondary
    }]
  }, t("p", {
    css: [{
      margin: "0px",
      marginBottom: "16px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      columnGap: "6px",
      wordBreak: "keep-all"
    }, yt, {
      color: H.textSub
    }]
  }, t(se, {
    "aria-hidden": "true",
    size: "16px",
    color: H.iconAccent
  }), "테스트 서버 전용 — 다음 결제일을 기다리지 않고 지금 결제합니다."), t("button", {
    type: "button",
    disabled: d,
    onClick: o,
    css: [{
      marginLeft: "auto",
      marginRight: "auto",
      display: "block",
      width: "100%",
      cursor: "pointer",
      appearance: "none",
      borderWidth: "0px",
      "@media (min-width: 768px)": {
        width: "auto",
        minWidth: "280px"
      }
    }, Re, {
      backgroundColor: H.actionAccent,
      borderRadius: H.radiusMd,
      color: H.text,
      ":hover": {
        backgroundColor: H.actionAccentHover
      },
      ":active": {
        backgroundColor: H.actionAccentPressed
      }
    }, d && {
      cursor: "not-allowed",
      opacity: "0.5"
    }]
  }, d ? "결제 요청 중…" : "지금 결제하기"), r ? t("p", {
    css: [{
      margin: "0px",
      marginTop: "16px",
      wordBreak: "keep-all",
      textAlign: "center"
    }, yt, {
      color: H.textAccent
    }]
  }, "결제 요청을 등록했습니다. 결과는 잠시 뒤 반영됩니다.") : null, m ? t("p", {
    css: [{
      margin: "0px",
      marginTop: "16px",
      wordBreak: "keep-all",
      textAlign: "center"
    }, yt, {
      color: H.textCritical
    }]
  }, `요청 실패: ${m.message}`) : null) : null;
}, Pe = () => {
  var v, R;
  const {
    data: e
  } = O(ae({
    queryOptions: {
      select: (p) => p.useCommonEntrancePasswordInput
    }
  })), {
    ct: n
  } = E(), a = j("subscription_order_code"), l = V(), d = x.useRef(null), r = x.useRef(null), [m, g] = x.useState(), o = [n("설명_일요일약자"), n("설명_월요일약자"), n("설명_화요일약자"), n("설명_수요일약자"), n("설명_목요일약자"), n("설명_금요일약자"), n("설명_토요일약자")], y = [{
    value: "",
    message: n("설명_배송메모를선택해주세요")
  }, {
    value: n("설명_배송전에미리연락바랍니다"),
    message: n("설명_배송전에미리연락바랍니다")
  }, {
    value: n("설명_부재시경비실에맡겨주세요"),
    message: n("설명_부재시경비실에맡겨주세요")
  }, {
    value: n("설명_부재시전화나문자를남겨주세요"),
    message: n("설명_부재시전화나문자를남겨주세요")
  }, {
    value: "self",
    message: n("설명_배송메모직접입력")
  }], b = W("brand_color"), w = T("global", {
    fontSize: "13px",
    fontWeight: "unset",
    padding: "8px 16px",
    marginLeft: "8px"
  }), {
    data: c
  } = O(D({
    status: "SOS02",
    subscriptionOrderCode: a
  })), {
    data: C
  } = O(D({
    status: "SOS02",
    subscriptionOrderCode: a,
    queryOptions: {
      select: (p) => {
        const _ = ut(p);
        if (_ !== null)
          return M(_, "yyyy-MM-dd (E)", {
            locale: z[window.LANG_CODE]
          });
      }
    }
  })), {
    data: h
  } = O(D({
    status: "SOS02",
    subscriptionOrderCode: a,
    queryOptions: {
      select: (p) => {
        const _ = dt(p.nextPaymentDates, 0);
        if (_ !== null)
          return M(_, "yyyy-MM-dd (E)", {
            locale: z[window.LANG_CODE]
          });
      }
    }
  })), {
    data: f
  } = O(D({
    status: "SOS02",
    subscriptionOrderCode: a,
    queryOptions: {
      select: (p) => p.delivery.memo === null || p.delivery.memo === "null" ? y.at(0) : y.slice(0, -1).find((_) => _.value === p.delivery.memo) ?? y.at(-1)
    }
  })), {
    data: S
  } = O(D({
    status: "SOS02",
    subscriptionOrderCode: a,
    queryOptions: {
      select: (p) => {
        const _ = F(tt(p));
        return _ === null ? null : M(_, "yyyy-MM-dd (E)", {
          locale: z[window.LANG_CODE]
        });
      }
    }
  })), {
    data: s
  } = O(D({
    status: "SOS02",
    subscriptionOrderCode: a,
    queryOptions: {
      select: (p) => p.deliveryTypeCd ? !["ODT01", "ODT03", "ODT07"].includes(p.deliveryTypeCd) : !1
    }
  })), {
    data: u
  } = O(D({
    status: "SOS02",
    subscriptionOrderCode: a,
    queryOptions: {
      select: (p) => p.products.some((_) => (_ == null ? void 0 : _.prodDeleted) === "Y")
    }
  })), {
    mutateAsync: k
  } = P({
    mutationKey: ["UpdateShippingAddressSubscription"],
    mutationFn: async (p) => {
      const {
        data: _
      } = await $.patch(`/ajax/oms/OMS_wrap_customer_v1_subscription_{subscriptionOrderCode}.cm?subscriptionOrderCode=${a}`, {
        delivery: p
      }, {
        headers: {
          "Content-Type": "application/json"
        }
      });
      if (!/success/i.test(_.message))
        throw new Error(_.message);
    },
    onSuccess: () => {
      l.invalidateQueries({
        queryKey: ["OrderSubscription", a]
      }), l.invalidateQueries({
        queryKey: ["MemberShippingAddresses"]
      });
    }
  }), I = async (p) => {
    var A, lt, at, rt, st;
    if (!((A = r.current) != null && A.opened()))
      return;
    const _ = p.currentTarget.value;
    if (!(p.currentTarget instanceof HTMLElement && p.currentTarget.closest("[data-dropdown-root]") !== null)) {
      if (m === void 0 && _ !== ((lt = y.at(-1)) == null ? void 0 : lt.value) && _ === (f == null ? void 0 : f.value)) {
        (at = r.current) == null || at.close();
        return;
      }
      if (y.slice(0, -1).find(({
        value: gt
      }) => gt === _) !== void 0) {
        if (!confirm(nt(C)))
          return;
        await k({
          memo: _ === "" ? "null" : _
        }), _ === (f == null ? void 0 : f.value) && g(void 0);
      } else
        g(""), (rt = d.current) == null || rt.focus();
      (st = r.current) == null || st.close();
    }
  }, Q = async (p) => {
    var _;
    p.preventDefault(), confirm(nt(C)) && (await k({
      memo: m
    }), (_ = d.current) == null || _.blur());
  };
  x.useEffect(() => {
    var p;
    (f == null ? void 0 : f.value) === "self" ? g((p = c == null ? void 0 : c.delivery) == null ? void 0 : p.memo) : g(void 0);
  }, [f == null ? void 0 : f.value, c]);
  const G = (c == null ? void 0 : c.cycleType) === "M" ? n("버튼_n개월", (c == null ? void 0 : c.cycleValue) ?? 0) : n("버튼_n주", (c == null ? void 0 : c.cycleValue) ?? 0), N = !["OOT03", "OOT04"].includes((c == null ? void 0 : c.orderTypeCd) ?? ""), q = Qt(c), K = (c == null ? void 0 : c.statusCd) === L.SOS04.code, Z = q || K, et = q || K, X = K && h ? Me(h) : void 0, J = K && h ? Le(h) : void 0, i = typeof m == "string" || (f == null ? void 0 : f.value) === ((v = y.at(-1)) == null ? void 0 : v.value);
  return t(ct, {
    title: n("타이틀_정기구독신청상세"),
    backUrl: "/shop_mypage/?m2=regularly"
  }, q ? t("section", {
    css: {
      marginTop: "10px",
      borderRadius: "4px",
      borderWidth: "1px",
      borderStyle: "solid",
      "--tw-border-opacity": "1",
      borderColor: "rgb(253 186 116 / var(--tw-border-opacity))",
      "--tw-bg-opacity": "1",
      backgroundColor: "rgb(255 247 237 / var(--tw-bg-opacity))",
      padding: "16px"
    }
  }, t("p", {
    css: {
      margin: "0px",
      wordBreak: "keep-all",
      fontSize: "13px",
      lineHeight: "1.6",
      "--tw-text-opacity": "1",
      color: "rgb(154 52 18 / var(--tw-text-opacity))"
    }
  }, oe.subscriptionLocked)) : null, t("section", {
    css: {
      marginTop: "10px",
      display: "flex",
      alignItems: "center",
      "--tw-bg-opacity": "1",
      backgroundColor: "rgb(255 255 255 / var(--tw-bg-opacity))",
      padding: "20px"
    }
  }, t("div", {
    css: {
      display: "flex",
      flex: "1 1 0%",
      "@media not all and (min-width: 768px)": {
        flexDirection: "column"
      }
    }
  }, t("div", null, t("p", {
    css: {
      margin: "0px",
      fontSize: "14px",
      fontWeight: "700"
    }
  }, t("span", {
    css: {
      marginRight: "8px",
      fontWeight: "400",
      "--tw-text-opacity": "1",
      color: "rgb(117 117 117 / var(--tw-text-opacity))"
    }
  }, "신청일"), S === null ? "-" : S)), t("div", {
    css: {
      display: "flex",
      "::before": {
        content: '"|"',
        padding: "0 8px",
        color: "#bcbcbc",
        "@media (max-width: 768px)": {
          display: "none"
        }
      }
    }
  }, t("p", {
    css: {
      margin: "0px",
      fontSize: "14px",
      fontWeight: "700"
    }
  }, t("span", {
    css: {
      marginRight: "8px",
      fontWeight: "400",
      "--tw-text-opacity": "1",
      color: "rgb(117 117 117 / var(--tw-text-opacity))"
    }
  }, "상품"), n("설명_n개", ((c == null ? void 0 : c.products) ?? []).length)))), t("div", null, t(be, null))), ((c == null ? void 0 : c.products) ?? []).map((p) => {
    const [_] = p.imageUrls;
    return t("section", {
      key: p.subscriptionOrderItemCode,
      css: {
        marginTop: "10px",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        "--tw-bg-opacity": "1",
        backgroundColor: "rgb(255 255 255 / var(--tw-bg-opacity))",
        padding: "20px",
        "@media (min-width: 768px)": {
          display: "none"
        }
      }
    }, t("div", {
      css: {
        display: "flex",
        flex: "1 1 0%",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "space-between"
      }
    }, t("div", {
      css: {
        marginBottom: "6px"
      }
    }, t("p", {
      css: {
        margin: "0px",
        fontSize: "15px",
        fontWeight: "700"
      }
    }, p.prodName), t("p", {
      css: {
        margin: "0px",
        fontSize: "13px"
      }
    }, `${n("getCurrencyFormat", p.price)} / 수량 ${n("설명_n개띄어쓰기없음", p.qty)}`)), /^Y$/.test(p.isSkip) ? t("p", {
      css: {
        marginTop: "6px",
        marginBottom: "6px",
        fontSize: "13px",
        "--tw-text-opacity": "1",
        color: "rgb(251 70 55 / var(--tw-text-opacity))"
      }
    }, n("타이틀_이번일정에배송되지않습니다")) : null, t("div", {
      css: {
        marginTop: "4px",
        display: "flex",
        justifyContent: "flex-end",
        columnGap: "6px",
        textAlign: "right"
      }
    }, N && t(Lt, {
      mobile: !0,
      disabled: q,
      subscriptionItemCode: p.subscriptionOrderItemCode
    }), t(kt, {
      mobile: !0,
      disabled: Z,
      disabledTooltip: X,
      subscriptionItemCode: p.subscriptionOrderItemCode
    }), t(_t, {
      mobile: !0,
      disabled: et,
      disabledTooltip: J,
      subscriptionItemCode: p.subscriptionOrderItemCode
    }))), t("div", {
      css: {
        display: "flex",
        alignItems: "center"
      }
    }, t("img", {
      src: _,
      width: "80",
      height: "80"
    })));
  }), ((c == null ? void 0 : c.products) ?? []).map((p) => {
    var A;
    const [_] = p.imageUrls;
    return t("section", {
      key: p.subscriptionOrderItemCode,
      css: {
        marginTop: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        "--tw-bg-opacity": "1",
        backgroundColor: "rgb(255 255 255 / var(--tw-bg-opacity))",
        padding: "20px",
        "@media not all and (min-width: 768px)": {
          display: "none"
        }
      }
    }, t("div", {
      css: {
        display: "flex",
        flex: "1 1 0%",
        alignItems: "flex-start"
      }
    }, t("img", {
      src: _,
      width: "80",
      height: "80"
    }), t("div", {
      css: {
        paddingLeft: "16px"
      }
    }, t("p", {
      css: {
        margin: "0px",
        fontSize: "15px",
        fontWeight: "700"
      }
    }, p.prodName), t("p", {
      css: {
        margin: "0px",
        fontSize: "13px",
        "--tw-text-opacity": "1",
        color: "rgb(117 117 117 / var(--tw-text-opacity))"
      }
    }, (A = p.optionData) == null ? void 0 : A.map((lt, at) => {
      const [[rt, st]] = Object.entries(lt), gt = at === p.optionData.length - 1 ? `${rt} : ${st}` : `${rt} : ${st} / `;
      return t("span", {
        key: `${at}_optionInfo`
      }, gt);
    })), t("p", {
      css: {
        margin: "0px",
        fontSize: "13px"
      }
    }, `${n("getCurrencyFormat", p.price)} / ${n("설명_n개띄어쓰기없음", p.qty)}`))), t("div", {
      css: {
        display: "flex",
        width: "180px",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center"
      }
    }, t("p", {
      css: [...N ? [] : [{
        marginBottom: "0px"
      }]]
    }, n("설명_n개띄어쓰기없음", p.qty)), N && t(Lt, {
      disabled: q,
      subscriptionItemCode: p.subscriptionOrderItemCode
    })), t("div", {
      css: {
        display: "flex",
        width: "280px",
        justifyContent: "flex-end",
        columnGap: "6px",
        textAlign: "right"
      }
    }, t(kt, {
      disabled: Z,
      disabledTooltip: X,
      subscriptionItemCode: p.subscriptionOrderItemCode
    }), t("div", {
      css: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end"
      }
    }, /^Y$/.test(p.isSkip) ? t("p", {
      css: {
        marginBottom: "8px",
        fontSize: "13px",
        "--tw-text-opacity": "1",
        color: "rgb(251 70 55 / var(--tw-text-opacity))"
      }
    }, n("타이틀_이번일정에배송되지않습니다")) : null, t(_t, {
      disabled: et,
      disabledTooltip: J,
      subscriptionItemCode: p.subscriptionOrderItemCode
    }))));
  }), t("section", {
    css: {
      marginTop: "10px",
      alignItems: "center",
      "--tw-bg-opacity": "1",
      backgroundColor: "rgb(255 255 255 / var(--tw-bg-opacity))",
      padding: "20px"
    }
  }, t("header", {
    css: {
      marginBottom: "16px"
    }
  }, t("div", {
    css: {
      fontSize: "16px",
      fontWeight: "600"
    }
  }, "구매자 정보")), t("main", {
    css: {
      "> :not([hidden]) ~ :not([hidden])": {
        "--tw-space-y-reverse": "0",
        marginTop: "calc(16px * calc(1 - var(--tw-space-y-reverse)))",
        marginBottom: "calc(16px * var(--tw-space-y-reverse))"
      }
    }
  }, t("div", null, t("span", {
    css: {
      display: "inline-block",
      width: "120px",
      "--tw-text-opacity": "1",
      color: "rgb(117 117 117 / var(--tw-text-opacity))"
    }
  }, "주문자"), c == null ? void 0 : c.ordererName), t("div", null, t("span", {
    css: {
      display: "inline-block",
      width: "120px",
      "--tw-text-opacity": "1",
      color: "rgb(117 117 117 / var(--tw-text-opacity))"
    }
  }, "연락처"), c == null ? void 0 : c.ordererCall), t("div", null, t("span", {
    css: {
      display: "inline-block",
      width: "120px",
      "--tw-text-opacity": "1",
      color: "rgb(117 117 117 / var(--tw-text-opacity))"
    }
  }, "이메일"), c == null ? void 0 : c.ordererEmail))), s ? t("section", {
    css: {
      marginTop: "10px",
      alignItems: "center",
      "--tw-bg-opacity": "1",
      backgroundColor: "rgb(255 255 255 / var(--tw-bg-opacity))",
      padding: "20px"
    }
  }, t("header", {
    css: {
      marginBottom: "16px",
      display: "flex",
      alignItems: "center",
      columnGap: "8px"
    }
  }, t("div", {
    css: {
      fontSize: "16px",
      fontWeight: "600"
    }
  }, "배송지 정보"), t(Se, {
    subscriptionOrderCode: a,
    initTabView: "select"
  }, t("button", {
    css: [{
      cursor: "pointer",
      appearance: "none",
      backgroundColor: "transparent",
      padding: "2px",
      fontSize: "14px"
    }, {
      color: b
    }]
  }, n("버튼_관리")))), t("main", {
    css: {
      "> :not([hidden]) ~ :not([hidden])": {
        "--tw-space-y-reverse": "0",
        marginTop: "calc(16px * calc(1 - var(--tw-space-y-reverse)))",
        marginBottom: "calc(16px * var(--tw-space-y-reverse))"
      }
    }
  }, (c == null ? void 0 : c.delivery) && t("div", {
    css: {
      display: "flex",
      flexDirection: "column",
      rowGap: "4px",
      "@media (min-width: 768px)": {
        flexDirection: "row"
      }
    }
  }, t("div", {
    css: {
      width: "120px",
      "--tw-text-opacity": "1",
      color: "rgb(117 117 117 / var(--tw-text-opacity))"
    }
  }, "배송지"), t("div", {
    className: "flex-1"
  }, t("div", {
    css: {
      marginBottom: "4px",
      display: "flex",
      alignItems: "center"
    }
  }, t("span", {
    css: {
      marginRight: "6px",
      padding: "0px",
      fontSize: "14px",
      fontWeight: "700",
      "--tw-text-opacity": "1",
      color: "rgb(21 24 30 / var(--tw-text-opacity))"
    }
  }, c.delivery.receiverName), t("span", {
    css: {
      margin: "0px",
      padding: "0px",
      fontSize: "14px",
      fontWeight: "400",
      "--tw-text-opacity": "1",
      color: "rgb(113 118 128 / var(--tw-text-opacity))",
      "::before": {
        content: "var(--tw-content)",
        marginRight: "6px",
        display: "inline-block",
        height: "10px",
        width: "1px",
        borderLeftWidth: "1px",
        borderStyle: "solid",
        "--tw-border-opacity": "1",
        borderColor: "rgb(221 221 221 / var(--tw-border-opacity))",
        "--tw-content": "''"
      }
    }
  }, c.delivery.receiverCall)), t("div", {
    css: {
      textAlign: "left",
      fontSize: "14px",
      "--tw-text-opacity": "1",
      color: "rgb(21 24 30 / var(--tw-text-opacity))"
    }
  }, t("span", null, `(${c.delivery.zipcode})`), t("span", {
    css: {
      marginLeft: "4px"
    }
  }, c.delivery.addr1), t("span", {
    css: {
      marginLeft: "4px"
    }
  }, c.delivery.addr2), e && c.delivery.commonEntrancePassword ? t("span", null, " (공동현관 비밀번호: ", c.delivery.commonEntrancePassword, ")") : null))), t("div", {
    css: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      rowGap: "4px",
      "@media (min-width: 768px)": {
        flexDirection: "row"
      }
    }
  }, t("div", {
    css: {
      width: "120px",
      "--tw-text-opacity": "1",
      color: "rgb(117 117 117 / var(--tw-text-opacity))"
    }
  }, "배송메모"), t("div", {
    css: {
      width: "100%",
      flex: "1 1 0%"
    }
  }, t(pe, {
    ref: r,
    value: i ? ((R = y.at(-1)) == null ? void 0 : R.value) ?? "" : f == null ? void 0 : f.value
  }, y.map(({
    value: p,
    message: _
  }) => t("button", {
    "data-dropdown-value": p,
    key: p,
    value: p,
    onClick: I,
    css: [{
      display: "block",
      minHeight: "40px",
      width: "100%",
      cursor: "pointer",
      appearance: "none",
      justifyContent: "flex-start",
      borderRadius: "4px",
      backgroundColor: "transparent",
      padding: "12px",
      textAlign: "start",
      ":hover": {
        "--tw-bg-opacity": "1",
        backgroundColor: "rgb(248 249 251 / var(--tw-bg-opacity))"
      }
    }, p === (f == null ? void 0 : f.value) ? B({
      ".ReactModalPortal &": {
        backgroundColor: "#F3F8FF"
      }
    }) : null]
  }, t("p", {
    css: {
      margin: "0px",
      fontSize: "14px",
      fontWeight: "400",
      "--tw-text-opacity": "1",
      color: "rgb(33 33 33 / var(--tw-text-opacity))"
    }
  }, _)))), t("form", {
    css: [{
      marginTop: "8px",
      display: "flex",
      width: "437px",
      "@media not all and (min-width: 768px)": {
        width: "100%"
      }
    }, i ? B({
      display: "flex"
    }) : B({
      display: "none"
    })],
    onSubmit: Q
  }, t("input", {
    ref: d,
    css: {
      flex: "1 1 0%",
      borderRadius: "4px",
      borderWidth: "1px",
      borderStyle: "solid",
      "--tw-border-opacity": "1",
      borderColor: "rgb(221 221 221 / var(--tw-border-opacity))",
      padding: "12px",
      fontSize: "14px"
    },
    value: m,
    onChange: (p) => g(p.target.value)
  }), t("button", {
    css: w,
    type: "submit"
  }, "저장")))))) : null, t("section", {
    css: {
      marginTop: "10px",
      alignItems: "center",
      "--tw-bg-opacity": "1",
      backgroundColor: "rgb(255 255 255 / var(--tw-bg-opacity))",
      padding: "20px"
    }
  }, t("header", {
    css: {
      marginBottom: "16px"
    }
  }, t("div", {
    css: {
      fontSize: "16px",
      fontWeight: "600"
    }
  }, "정기구독 일정 안내")), t("main", {
    css: {
      "> :not([hidden]) ~ :not([hidden])": {
        "--tw-space-y-reverse": "0",
        marginTop: "calc(16px * calc(1 - var(--tw-space-y-reverse)))",
        marginBottom: "calc(16px * var(--tw-space-y-reverse))"
      }
    }
  }, t("div", null, t("span", {
    css: {
      display: "inline-block",
      width: "120px",
      "--tw-text-opacity": "1",
      color: "rgb(117 117 117 / var(--tw-text-opacity))"
    }
  }, "구독주기"), G, !u && t(Ie, {
    disabled: q
  })), t("div", null, t("span", {
    css: {
      display: "inline-block",
      width: "120px",
      verticalAlign: "top",
      "--tw-text-opacity": "1",
      color: "rgb(117 117 117 / var(--tw-text-opacity))"
    }
  }, "구독일정"), t("div", {
    css: {
      display: "inline-block",
      width: "320px",
      "@media not all and (min-width: 768px)": {
        marginTop: "16px",
        width: "100%"
      }
    }
  }, t("div", null, ((c == null ? void 0 : c.nextPaymentDates) ?? []).map((p) => F(p)).filter((p) => p !== null).map((p, _) => t("div", {
    key: p.getTime(),
    css: {
      display: "flex",
      width: "100%",
      alignItems: "center",
      justifyContent: "space-between",
      borderWidth: "1px",
      "--tw-border-opacity": "1",
      borderColor: "rgb(221 221 221 / var(--tw-border-opacity))",
      padding: "10px",
      ":not(:first-of-type)": {
        borderTopWidth: "0px"
      }
    }
  }, t("span", {
    css: {}
  }, `${M(p, "yyyy-MM-dd")} (${o[p.getDay()]})`), _ === 0 ? t(we, {
    disabled: Z,
    disabledTooltip: X
  }) : null))), t(fe, null))))), t(Be, null), t("footer", {
    css: {
      padding: "20px"
    }
  }, t("p", {
    css: {
      fontSize: "15px",
      fontWeight: "600"
    }
  }, n("타이틀_확인해주세요")), t("ul", {
    css: {
      paddingLeft: "16px",
      "--tw-text-opacity": "1",
      color: "rgb(117 117 117 / var(--tw-text-opacity))"
    },
    dangerouslySetInnerHTML: {
      __html: n("설명_정기구독확인해주세요안내사항")
    }
  })));
}, qe = () => {
  var S;
  const {
    ct: e
  } = E(), n = j("subscription_order_code"), a = V();
  x.useRef(null), x.useRef(null), x.useRef(null);
  const [l, d] = x.useState(), r = [{
    value: "",
    message: e("설명_배송메모를선택해주세요")
  }, {
    value: e("설명_배송전에미리연락바랍니다"),
    message: e("설명_배송전에미리연락바랍니다")
  }, {
    value: e("설명_부재시경비실에맡겨주세요"),
    message: e("설명_부재시경비실에맡겨주세요")
  }, {
    value: e("설명_부재시전화나문자를남겨주세요"),
    message: e("설명_부재시전화나문자를남겨주세요")
  }, {
    value: "self",
    message: e("설명_배송메모직접입력")
  }], m = {
    CTC01: "설명_관리자에의한해지",
    CTC02: "설명_구매자에의한해지",
    default: "설명_해지완료"
  }, g = (s) => e(m[s ?? "default"]);
  W("brand_color"), T("global", {
    fontSize: "13px",
    fontWeight: "unset",
    padding: "8px 16px",
    marginLeft: "8px"
  }), T("default", {
    fontSize: "13px",
    fontWeight: "unset",
    padding: "6px 12px",
    marginLeft: "6px"
  });
  const {
    data: o
  } = O(D({
    status: "SOS03",
    subscriptionOrderCode: n
  })), {
    data: y
  } = O(D({
    status: "SOS03",
    subscriptionOrderCode: n,
    queryOptions: {
      select: (s) => s.delivery.memo === null || s.delivery.memo === "null" ? r.at(0) : r.slice(0, -1).find((u) => u.value === s.delivery.memo) ?? r.at(-1)
    }
  })), {
    data: b
  } = O(D({
    status: "SOS03",
    subscriptionOrderCode: n,
    queryOptions: {
      select: (s) => {
        const u = F(tt(s));
        return u === null ? null : M(u, "yyyy-MM-dd (E)", {
          locale: z[window.LANG_CODE]
        });
      }
    }
  })), {
    data: w
  } = O(D({
    status: "SOS03",
    subscriptionOrderCode: n,
    queryOptions: {
      select: (s) => s.deliveryTypeCd ? !["ODT01", "ODT03", "ODT07"].includes(s.deliveryTypeCd) : !1
    }
  })), {
    data: c
  } = O(Rt({
    countryShippingCode: o == null ? void 0 : o.delivery.country,
    queryOptions: {
      enabled: w ?? !1
    }
  })), {
    data: C
  } = O(ie({
    page: 1,
    pageSize: 7
  })), {
    mutateAsync: h
  } = P({
    mutationKey: ["UpdateShippingAddressSubscription"],
    mutationFn: async (s) => {
      const {
        data: u
      } = await $.patch(`/ajax/oms/OMS_wrap_customer_v1_subscription_{subscriptionOrderCode}.cm?subscriptionOrderCode=${n}`, {
        delivery: s
      }, {
        headers: {
          "Content-Type": "application/json"
        }
      });
      if (!/success/i.test(u.message))
        throw new Error(u.message);
    },
    onSuccess: () => {
      a.invalidateQueries({
        queryKey: ["OrderSubscription", n]
      });
    }
  });
  x.useEffect(() => {
    var s;
    (y == null ? void 0 : y.value) === "self" ? d((s = o == null ? void 0 : o.delivery) == null ? void 0 : s.memo) : d(void 0);
  }, [y == null ? void 0 : y.value, o]), [(o == null || o.delivery.shippingAddressCode, o == null || o.delivery.country, o == null || o.delivery.country, o == null || o.delivery.country, o == null || o.delivery.receiverName, o == null || o.delivery.receiverCall, o == null || o.delivery.zipcode, o == null || o.delivery.addr1, o == null || o.delivery.addr2, o == null || o.delivery.street, o == null || o.delivery.building, o == null || o.delivery.city, o == null || o.delivery.state, o == null || o.delivery.zipcode, o == null || o.delivery.addr1, o == null || o.delivery.addr2), ...((C == null ? void 0 : C.list) ?? []).filter((s) => s.code !== (o == null ? void 0 : o.delivery.shippingAddressCode))], typeof l == "string" || (y == null || y.value, (S = r.at(-1)) == null || S.value);
  const f = (s) => {
    const u = F(s);
    return u !== null ? M(u, "yyyy-MM-dd HH:mm") : "";
  };
  return t(ct, {
    title: e("타이틀_정기구독해지상세"),
    backUrl: "/shop_mypage/?m2=regularly"
  }, t("section", {
    css: {
      marginTop: "10px",
      display: "flex",
      alignItems: "center",
      "--tw-bg-opacity": "1",
      backgroundColor: "rgb(255 255 255 / var(--tw-bg-opacity))",
      padding: "20px"
    }
  }, t("div", {
    css: {
      display: "flex",
      flex: "1 1 0%",
      "@media not all and (min-width: 768px)": {
        flexDirection: "column"
      }
    }
  }, t("div", null, t("p", {
    css: {
      margin: "0px",
      fontSize: "14px",
      fontWeight: "700"
    }
  }, t("span", {
    css: {
      marginRight: "8px",
      fontWeight: "400",
      "--tw-text-opacity": "1",
      color: "rgb(117 117 117 / var(--tw-text-opacity))"
    }
  }, "신청일"), b === null ? "-" : b)), t("div", {
    css: {
      display: "flex",
      "::before": {
        content: '"|"',
        padding: "0 8px",
        color: "#bcbcbc",
        "@media (max-width: 768px)": {
          display: "none"
        }
      }
    }
  }, t("p", {
    css: {
      margin: "0px",
      fontSize: "14px",
      fontWeight: "700"
    }
  }, t("span", {
    css: {
      marginRight: "8px",
      fontWeight: "400",
      "--tw-text-opacity": "1",
      color: "rgb(117 117 117 / var(--tw-text-opacity))"
    }
  }, "상품"), e("설명_n개", ((o == null ? void 0 : o.products) ?? []).length))))), ((o == null ? void 0 : o.products) ?? []).map((s) => {
    const [u] = s.imageUrls;
    return t("section", {
      key: s.subscriptionOrderItemCode,
      css: {
        marginTop: "10px",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        "--tw-bg-opacity": "1",
        backgroundColor: "rgb(255 255 255 / var(--tw-bg-opacity))",
        padding: "20px",
        "@media (min-width: 768px)": {
          display: "none"
        }
      }
    }, t("div", {
      css: {
        display: "flex",
        flex: "1 1 0%",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "space-between"
      }
    }, t("div", {
      css: {
        marginBottom: "6px"
      }
    }, t("p", {
      css: {
        margin: "0px",
        fontSize: "15px",
        fontWeight: "700"
      }
    }, s.prodName), t("p", {
      css: {
        margin: "0px",
        fontSize: "13px"
      }
    }, `${e("getCurrencyFormat", s.price)} / 수량 ${e("설명_n개띄어쓰기없음", s.qty)}`), t("p", {
      css: {
        margin: "0px",
        marginTop: "10px",
        fontSize: "13px"
      }
    }, g(s.cancelTriggerCd)), s.offDate && t("p", {
      css: {
        margin: "0px",
        fontSize: "13px",
        "--tw-text-opacity": "1",
        color: "rgb(117 117 117 / var(--tw-text-opacity))"
      }
    }, f(s.offDate)))), t("div", {
      css: {
        display: "flex",
        alignItems: "center"
      }
    }, t("img", {
      src: u,
      width: "80",
      height: "80"
    })));
  }), ((o == null ? void 0 : o.products) ?? []).map((s) => {
    var k;
    const [u] = s.imageUrls;
    return t("section", {
      key: s.subscriptionOrderItemCode,
      css: {
        marginTop: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        "--tw-bg-opacity": "1",
        backgroundColor: "rgb(255 255 255 / var(--tw-bg-opacity))",
        padding: "20px",
        "@media not all and (min-width: 768px)": {
          display: "none"
        }
      }
    }, t("div", {
      css: {
        display: "flex",
        width: "100%",
        flex: "1 1 0%",
        alignItems: "flex-start"
      }
    }, t("img", {
      src: u,
      width: "80",
      height: "80"
    }), t("div", {
      css: {
        paddingLeft: "16px"
      }
    }, t("p", {
      css: {
        margin: "0px",
        fontSize: "15px",
        fontWeight: "700"
      }
    }, s.prodName), t("p", {
      css: {
        margin: "0px",
        fontSize: "13px",
        "--tw-text-opacity": "1",
        color: "rgb(117 117 117 / var(--tw-text-opacity))"
      }
    }, (k = s.optionData) == null ? void 0 : k.map((I, Q) => {
      const [[G, N]] = Object.entries(I), q = Q === s.optionData.length - 1 ? `${G} : ${N}` : `${G} : ${N} / `;
      return t("span", {
        key: `${Q}_optionInfo`
      }, q);
    })), t("p", {
      css: {
        margin: "0px",
        fontSize: "13px"
      }
    }, `${e("getCurrencyFormat", s.price)} / ${e("설명_n개띄어쓰기없음", s.qty)}`))), t("div", {
      css: {
        display: "flex",
        width: "180px",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center"
      }
    }, t("p", null, e("설명_n개띄어쓰기없음", s.qty))), t("div", {
      css: {
        display: "flex",
        width: "280px",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center"
      }
    }, t("p", {
      css: {
        margin: "0px",
        fontSize: "14px"
      }
    }, g(s.cancelTriggerCd)), s.offDate && t("p", {
      css: {
        margin: "0px",
        fontSize: "13px",
        "--tw-text-opacity": "1",
        color: "rgb(117 117 117 / var(--tw-text-opacity))"
      }
    }, f(s.offDate))), t("div", {
      css: {
        display: "flex",
        width: "280px",
        justifyContent: "flex-end",
        textAlign: "right"
      }
    }));
  }), t("section", {
    css: {
      marginTop: "10px",
      alignItems: "center",
      "--tw-bg-opacity": "1",
      backgroundColor: "rgb(255 255 255 / var(--tw-bg-opacity))",
      padding: "20px"
    }
  }, t("header", null, t("p", {
    css: {
      fontSize: "16px",
      fontWeight: "600"
    }
  }, "구매자 정보")), t("main", null, t("p", null, t("span", {
    css: {
      display: "inline-block",
      width: "120px",
      "--tw-text-opacity": "1",
      color: "rgb(117 117 117 / var(--tw-text-opacity))"
    }
  }, "주문자"), o == null ? void 0 : o.ordererName), t("p", null, t("span", {
    css: {
      display: "inline-block",
      width: "120px",
      "--tw-text-opacity": "1",
      color: "rgb(117 117 117 / var(--tw-text-opacity))"
    }
  }, "연락처"), o == null ? void 0 : o.ordererCall), t("p", null, t("span", {
    css: {
      display: "inline-block",
      width: "120px",
      "--tw-text-opacity": "1",
      color: "rgb(117 117 117 / var(--tw-text-opacity))"
    }
  }, "이메일"), o == null ? void 0 : o.ordererEmail))), w ? t("section", {
    css: {
      marginTop: "10px",
      alignItems: "center",
      "--tw-bg-opacity": "1",
      backgroundColor: "rgb(255 255 255 / var(--tw-bg-opacity))",
      padding: "20px"
    }
  }, t("header", null, t("p", {
    css: {
      fontSize: "16px",
      fontWeight: "600"
    }
  }, "배송지 정보")), t("main", null, t("p", null, t("span", {
    css: {
      display: "inline-block",
      width: "120px",
      "--tw-text-opacity": "1",
      color: "rgb(117 117 117 / var(--tw-text-opacity))"
    }
  }, "수령인"), o == null ? void 0 : o.delivery.receiverName), t("p", null, t("span", {
    css: {
      display: "inline-block",
      width: "120px",
      "--tw-text-opacity": "1",
      color: "rgb(117 117 117 / var(--tw-text-opacity))"
    }
  }, "연락처"), o == null ? void 0 : o.delivery.receiverCall), t("p", null, t("span", {
    css: {
      display: "inline-block",
      width: "120px",
      "--tw-text-opacity": "1",
      color: "rgb(117 117 117 / var(--tw-text-opacity))"
    }
  }, "배송지"), `(${o == null ? void 0 : o.delivery.zipcode}) ${o == null ? void 0 : o.delivery.addr1} ${o == null ? void 0 : o.delivery.addr2}`), t("p", null, t("span", {
    css: {
      display: "inline-block",
      width: "120px",
      "--tw-text-opacity": "1",
      color: "rgb(117 117 117 / var(--tw-text-opacity))"
    }
  }, "배송메모"), o == null ? void 0 : o.delivery.memo))) : null);
}, je = ({
  page: e = 1,
  count: n = 10,
  status: a,
  queryOptions: l
} = {}) => {
  const d = ne(a);
  return {
    queryKey: ["OrderSubscriptions", d],
    queryFn: async ({
      pageParam: r = e,
      signal: m
    }) => {
      const g = new URL("/ajax/oms/OMS_wrap_customer_v1_subscription.cm", window.location.origin);
      g.searchParams.set("page", String(r)), g.searchParams.set("count", String(n)), d && g.searchParams.set("status", d);
      const {
        data: o
      } = await $.get(g.href, {
        signal: m
      });
      if (!/^SUCCESS$/i.test(o == null ? void 0 : o.message))
        throw new Error(o == null ? void 0 : o.message);
      return o == null ? void 0 : o.data;
    },
    keepPreviousData: !0,
    getNextPageParam: (r) => {
      if (!(r.totalCount <= r.page * r.count))
        return r.page + 1;
    },
    getPreviousPageParam: (r) => {
      if (r.page !== 1)
        return r.page - 1;
    },
    ...l,
    enabled: typeof d == "string" && ((l == null ? void 0 : l.enabled) ?? !0)
  };
}, Fe = ({
  subscription: e
}) => {
  const {
    ct: n
  } = E(), a = W("body_color"), l = it(a).alpha(0.1).hexa(), d = T("default", {
    fontSize: "13px",
    fontWeight: "unset",
    padding: "8px 16px"
  }), r = F(e.nextPaymentDate), m = r !== null ? M(r, "yyyy-MM-dd (E)", {
    locale: z[window.LANG_CODE]
  }) : "", g = $t(e) ? Wt(e.deliveryStartDate) : null, o = g ? M(g, "yyyy-MM-dd (E)", {
    locale: z[window.LANG_CODE]
  }) : null, y = e.cycleType === "M" ? n("버튼_n개월", (e == null ? void 0 : e.cycleValue) ?? 0) : n("버튼_n주", (e == null ? void 0 : e.cycleValue) ?? 0);
  return t("a", {
    href: `/shop_mypage/?m2=regularly&subscription_order_code=${e.subscriptionOrderCode}&status=applying`
  }, t("div", {
    css: {
      marginBottom: "8px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      "--tw-bg-opacity": "1",
      backgroundColor: "rgb(255 255 255 / var(--tw-bg-opacity))",
      padding: "20px"
    }
  }, t("div", {
    css: {
      flex: "1 1 0%",
      alignItems: "center"
    }
  }, e.products.map((b) => {
    var c;
    const [w] = b.imageUrls;
    return t("div", {
      css: {
        marginBottom: "16px",
        display: "flex",
        alignItems: "flex-start",
        ":last-child": {
          marginBottom: "0px"
        }
      }
    }, t("img", {
      css: B({
        border: `1px solid ${l}`
      }),
      src: w,
      width: "80",
      height: "80"
    }), t("div", {
      css: {
        paddingLeft: "26px"
      }
    }, t("p", {
      css: {
        margin: "0px",
        fontSize: "15px",
        fontWeight: "700"
      }
    }, b.prodName), t("p", {
      css: {
        margin: "0px",
        fontSize: "13px",
        "--tw-text-opacity": "1",
        color: "rgb(117 117 117 / var(--tw-text-opacity))"
      }
    }, (c = b.optionData) == null ? void 0 : c.map((C, h) => {
      const [[f, S]] = Object.entries(C), s = h === b.optionData.length - 1 ? `${f} : ${S}` : `${f} : ${S} / `;
      return t("span", {
        key: `${h}_optionInfo`
      }, s);
    })), t("p", {
      css: {
        margin: "0px",
        fontSize: "13px"
      }
    }, `${n("getCurrencyFormat", b.price)} / 수량 ${n("설명_n개띄어쓰기없음", b.qty)}`)));
  })), t("div", {
    css: {
      width: "180px",
      textAlign: "center",
      fontSize: "13px"
    }
  }, t("p", {
    css: {
      margin: "0px"
    }
  }, m), o ? t("p", {
    css: {
      margin: "0px",
      whiteSpace: "nowrap",
      "--tw-text-opacity": "1",
      color: "rgb(113 118 128 / var(--tw-text-opacity))"
    }
  }, `${o} 배송 시작`) : null), t("div", {
    css: {
      width: "180px",
      textAlign: "center",
      fontSize: "13px"
    }
  }, y), t("div", {
    css: {
      width: "160px",
      textAlign: "right"
    }
  }, t("a", {
    css: d,
    href: `/shop_mypage/?m2=regularly&subscription_order_code=${e.subscriptionOrderCode}&status=applying`
  }, "상세보기"))));
}, Ne = ({
  subscription: e,
  status: n
}) => {
  const {
    ct: a
  } = E(), l = W("body_color"), d = it(l).alpha(0.1).hexa(), r = W("brand_color"), m = F(e.nextPaymentDate), g = m !== null ? M(m, "yyyy-MM-dd (E)", {
    locale: z[window.LANG_CODE]
  }) : "", o = F(tt(e)), y = $t(e) ? Wt(e.deliveryStartDate) : null, b = y ? M(y, "yyyy-MM-dd (E)", {
    locale: z[window.LANG_CODE]
  }) : null, w = e.cycleType === "M" ? a("버튼_n개월", (e == null ? void 0 : e.cycleValue) ?? 0) : a("버튼_n주", (e == null ? void 0 : e.cycleValue) ?? 0);
  return t("div", {
    css: {
      marginTop: "18px"
    }
  }, t("div", {
    css: {
      marginBottom: "12px",
      marginTop: "28px",
      display: "flex",
      justifyContent: "space-between",
      padding: "0 12px",
      fontSize: "13px"
    }
  }, t("div", {
    css: {
      flex: "1 1 0%",
      fontSize: "14px",
      fontWeight: "700"
    }
  }, o !== null ? M(o, "yyyy-MM-dd (E)", {
    locale: z[window.LANG_CODE]
  }) : ""), t("div", {
    css: {}
  }, t("a", {
    css: {
      color: `${r} !important`,
      fontSize: "14px"
    },
    href: `/shop_mypage/?m2=regularly&subscription_order_code=${e.subscriptionOrderCode}&status=${(n || e.statusCd) === "SOS02" ? "applying" : n === "SOS03" ? "resigned" : ""}`
  }, "상세보기"))), e.products.map((c) => {
    var h;
    const [C] = c.imageUrls;
    return t("div", {
      key: c.subscriptionOrderItemCode,
      css: {
        display: "flex",
        justifyContent: "space-between",
        borderLeftWidth: "0px",
        borderRightWidth: "0px",
        borderBottomWidth: "1px",
        borderTopWidth: "0px",
        "--tw-border-opacity": "1",
        borderColor: "rgb(221 221 221 / var(--tw-border-opacity))",
        "--tw-bg-opacity": "1",
        backgroundColor: "rgb(255 255 255 / var(--tw-bg-opacity))",
        padding: "14px"
      }
    }, t("div", {
      css: {
        paddingRight: "16px"
      }
    }, t("p", {
      css: {
        margin: "0px",
        fontSize: "15px",
        fontWeight: "700"
      }
    }, c.prodName), t("p", {
      css: {
        margin: "0px",
        fontSize: "13px",
        "--tw-text-opacity": "1",
        color: "rgb(117 117 117 / var(--tw-text-opacity))"
      }
    }, (h = c.optionData) == null ? void 0 : h.map((f, S) => {
      const [[s, u]] = Object.entries(f), k = S === c.optionData.length - 1 ? `${s} : ${u}` : `${s} : ${u} / `;
      return t("span", {
        key: `${S}_optionInfo`
      }, k);
    })), t("p", {
      css: {
        margin: "0px",
        fontSize: "13px"
      }
    }, `${a("getCurrencyFormat", c.price)} / 수량 ${a("설명_n개띄어쓰기없음", c.qty)}`)), t("div", {
      css: {
        display: "flex",
        alignItems: "flex-start"
      }
    }, t("img", {
      css: B({
        border: `1px solid ${d}`
      }),
      src: C,
      width: "70",
      height: "70"
    })));
  }), t("div", {
    css: {
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      "--tw-bg-opacity": "1",
      backgroundColor: "rgb(255 255 255 / var(--tw-bg-opacity))",
      paddingLeft: "16px",
      paddingRight: "16px",
      paddingBottom: "20px",
      paddingTop: "16px",
      fontSize: "13px"
    }
  }, t("div", {
    css: {
      display: "flex",
      alignItems: "flex-start",
      gap: "12px"
    }
  }, t("p", {
    css: {
      margin: "0px",
      width: "89px",
      flexShrink: "0",
      "--tw-text-opacity": "1",
      color: "rgb(117 117 117 / var(--tw-text-opacity))"
    }
  }, "다음 결제 예정일"), t("div", {
    css: {
      display: "flex",
      flexDirection: "column",
      gap: "2px"
    }
  }, t("p", {
    css: {
      margin: "0px"
    }
  }, g), b ? t("p", {
    css: {
      margin: "0px",
      whiteSpace: "nowrap",
      "--tw-text-opacity": "1",
      color: "rgb(113 118 128 / var(--tw-text-opacity))"
    }
  }, `${b} 배송 시작`) : null)), t("div", {
    css: {
      display: "flex",
      alignItems: "center",
      gap: "12px"
    }
  }, t("p", {
    css: {
      margin: "0px",
      width: "89px",
      flexShrink: "0",
      "--tw-text-opacity": "1",
      color: "rgb(117 117 117 / var(--tw-text-opacity))"
    }
  }, "구독주기"), t("p", {
    css: {
      margin: "0px"
    }
  }, w))));
}, Ae = ({
  subscription: e
}) => {
  const {
    ct: n
  } = E(), a = W("body_color"), l = it(a).alpha(0.1).hexa(), d = T("default", {
    fontSize: "13px",
    fontWeight: "unset",
    padding: "8px 16px"
  });
  return t("a", {
    href: `/shop_mypage/?m2=regularly&subscription_order_code=${e.subscriptionOrderCode}&status=resigned`
  }, t("div", {
    css: {
      marginBottom: "8px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      "--tw-bg-opacity": "1",
      backgroundColor: "rgb(255 255 255 / var(--tw-bg-opacity))",
      padding: "20px"
    }
  }, t("div", {
    css: {
      flex: "1 1 0%",
      alignItems: "center"
    }
  }, e.products.map((r) => {
    var g;
    const [m] = r.imageUrls;
    return t("div", {
      css: {
        marginBottom: "16px",
        display: "flex",
        alignItems: "flex-start",
        ":last-child": {
          marginBottom: "0px"
        }
      }
    }, t("img", {
      css: B({
        border: `1px solid ${l}`
      }),
      src: m,
      width: "80",
      height: "80"
    }), t("div", {
      css: {
        paddingLeft: "26px"
      }
    }, t("p", {
      css: {
        margin: "0px",
        fontSize: "15px",
        fontWeight: "700"
      }
    }, r.prodName), t("p", {
      css: {
        margin: "0px",
        fontSize: "13px",
        "--tw-text-opacity": "1",
        color: "rgb(117 117 117 / var(--tw-text-opacity))"
      }
    }, (g = r.optionData) == null ? void 0 : g.map((o, y) => {
      const [[b, w]] = Object.entries(o), c = y === r.optionData.length - 1 ? `${b} : ${w}` : `${b} : ${w} / `;
      return t("span", {
        key: `${y}_optionInfo`
      }, c);
    })), t("p", {
      css: {
        margin: "0px",
        fontSize: "13px"
      }
    }, `${n("getCurrencyFormat", r.price)} / 수량 ${n("설명_n개띄어쓰기없음", r.qty)}`)));
  })), t("div", {
    css: {
      width: "160px",
      textAlign: "right"
    }
  }, t("a", {
    css: d,
    href: `/shop_mypage/?m2=regularly&subscription_order_code=${e.subscriptionOrderCode}&status=resigned`
  }, "상세보기"))));
}, He = () => {
  var c, C;
  const {
    ct: e
  } = E(), [n, a] = x.useState(() => {
    switch (window.location.hash) {
      case "#applies":
        return L.SOS02.code;
      case "#resigns":
        return L.SOS03.code;
      default:
        return L.SOS02.code;
    }
  }), l = W("brand_color"), d = W("body_color");
  it(d).alpha(0.1).hexa(), T("default", {
    fontSize: "13px",
    fontWeight: "unset",
    padding: "8px 16px"
  });
  const r = {
    color: `${l} !important`,
    fontWeight: "bold",
    "&>span": {
      opacity: "1"
    },
    borderBottom: `1px solid ${l}`
  }, {
    data: m
  } = O(St({
    status: wt,
    queryOptions: {
      select: (h) => h.totalCount
    }
  })), {
    data: g
  } = O(St({
    status: L.SOS03.code,
    queryOptions: {
      select: (h) => h.totalCount
    }
  })), {
    data: o,
    fetchNextPage: y,
    hasNextPage: b,
    isFetching: w
  } = zt(je({
    status: n === L.SOS02.code ? wt : n,
    queryOptions: {
      select: ({
        pages: h,
        pageParams: f
      }) => {
        const S = h.flatMap((s) => s.items).sort((s, u) => new Date(tt(u)).getTime() - new Date(tt(s)).getTime());
        return {
          pages: h,
          pageParams: f,
          pageItems: S,
          dateKeys: S.reduce((s, u) => {
            const k = F(tt(u));
            if (k === null)
              return s;
            const I = M(k, "yyyy-MM-dd (E)", {
              locale: z[window.LANG_CODE]
            });
            return s.includes(I) || s.push(I), s;
          }, []),
          pageGroups: S.reduce((s, u) => {
            const k = F(tt(u));
            if (k === null)
              return s;
            const I = M(k, "yyyy-MM-dd (E)", {
              locale: z[window.LANG_CODE]
            });
            return Array.isArray(s[I]) ? s[I].push(u) : s[I] = [u], s;
          }, {})
        };
      }
    }
  }));
  return t(ct, {
    title: e("타이틀_정기구독신청목록")
  }, t("ul", {
    css: {
      marginBottom: "18px",
      display: "flex",
      listStyleType: "none",
      padding: "0px",
      "@media not all and (min-width: 768px)": {
        "--tw-bg-opacity": "1",
        backgroundColor: "rgb(255 255 255 / var(--tw-bg-opacity))"
      },
      "& li:not(:first-of-type)": {
        marginLeft: "32px !important"
      }
    }
  }, t("li", {
    css: {
      "@media not all and (min-width: 768px)": {
        flex: "1 1 0%"
      }
    }
  }, t("a", {
    css: [B({
      display: "block",
      padding: "12px 0",
      fontSize: "15px",
      textAlign: "center"
    }), n === L.SOS02.code ? r : void 0],
    onClick: () => a(L.SOS02.code),
    href: "#applies"
  }, e("버튼_신청현황"), t("span", {
    css: {
      paddingLeft: "4px",
      opacity: "0.6"
    }
  }, m))), t("li", {
    css: {
      "@media not all and (min-width: 768px)": {
        flex: "1 1 0%"
      }
    }
  }, t("a", {
    css: [B({
      display: "block",
      padding: "12px 0",
      fontSize: "15px",
      textAlign: "center"
    }), n === L.SOS03.code ? r : void 0],
    onClick: () => a(L.SOS03.code),
    href: "#resigns"
  }, e("버튼_해지내역"), t("span", {
    css: {
      paddingLeft: "4px",
      opacity: "0.6"
    }
  }, g)))), t("div", {
    css: {
      "@media (min-width: 768px)": {
        display: "none"
      }
    }
  }, !w && (((c = o == null ? void 0 : o.pageItems) == null ? void 0 : c.length) ?? 0) === 0 ? t("div", {
    css: {
      marginTop: "40px",
      marginBottom: "40px",
      textAlign: "center",
      "--tw-text-opacity": "1",
      color: "rgb(117 117 117 / var(--tw-text-opacity))"
    },
    dangerouslySetInnerHTML: {
      __html: n === L.SOS02.code ? e("설명_정기구독내역이없음") : n === L.SOS03.code ? e("설명_정기구독해지내역이없음") : ""
    }
  }) : null, o.pageItems.map((h) => t(Ne, {
    key: h.subscriptionOrderCode,
    subscription: h,
    status: n
  }))), t("div", {
    css: {
      "@media not all and (min-width: 768px)": {
        display: "none"
      }
    }
  }, !w && (((C = o == null ? void 0 : o.dateKeys) == null ? void 0 : C.length) ?? 0) === 0 ? t("div", {
    css: {
      marginTop: "80px",
      marginBottom: "80px",
      textAlign: "center",
      "--tw-text-opacity": "1",
      color: "rgb(117 117 117 / var(--tw-text-opacity))"
    },
    dangerouslySetInnerHTML: {
      __html: n === L.SOS02.code ? e("설명_정기구독내역이없음") : n === L.SOS03.code ? e("설명_정기구독해지내역이없음") : ""
    }
  }) : null, w ? t("div", null, "Loading...") : (o == null ? void 0 : o.dateKeys).map((h, f) => t("div", {
    css: {
      marginTop: "18px"
    }
  }, t("div", {
    css: {
      marginBottom: "16px",
      display: "flex",
      justifyContent: "space-between",
      fontSize: "13px"
    }
  }, t("div", {
    css: {
      flex: "1 1 0%",
      fontWeight: "700"
    }
  }, h), f > 0 ? null : t(x.Fragment, null, n === L.SOS02.code && t(x.Fragment, null, t("div", {
    css: {
      width: "180px",
      textAlign: "center",
      "--tw-text-opacity": "1",
      color: "rgb(117 117 117 / var(--tw-text-opacity))",
      "@media not all and (min-width: 768px)": {
        display: "none"
      }
    }
  }, "다음 결제 예정일"), t("div", {
    css: {
      width: "180px",
      textAlign: "center",
      "--tw-text-opacity": "1",
      color: "rgb(117 117 117 / var(--tw-text-opacity))",
      "@media not all and (min-width: 768px)": {
        display: "none"
      }
    }
  }, "구독주기")), t("div", {
    css: {
      width: "180px",
      "@media not all and (min-width: 768px)": {
        display: "none"
      }
    }
  }))), o.pageGroups[h].map((S) => {
    switch (n) {
      case L.SOS02.code:
        return t(Fe, {
          key: S.subscriptionOrderCode,
          subscription: S
        });
      case L.SOS03.code:
        return t(Ae, {
          key: S.subscriptionOrderCode,
          subscription: S
        });
    }
  })))), !w && b ? t("button", {
    onClick: () => y()
  }, e("버튼_더보기")) : null);
}, Ue = () => {
  const e = j("subscription_order_code"), n = j("status");
  if (e === void 0)
    return t(x.Fragment, null, t(ce, null), t(He, null));
  switch (!0) {
    case n === "applying":
      return t(Pe, null);
    case n === "resigned":
      return t(qe, null);
    default:
      return null;
  }
}, Pt = "oms-my-page-order-subscription";
Mt.setAppElement(`#${Pt}`);
const Ve = new At({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1e3,
      refetchOnWindowFocus: !1,
      suspense: !0
    }
  }
});
jt.createRoot(document.getElementById(Pt)).render(t(x.StrictMode, null, t(Ft, {
  client: Ve
}, t(U.Suspense, {
  fallback: t("div", null, "Loading...")
}, t(Ue, null)), t(Nt, {
  initialIsOpen: !1
}))));
//# sourceMappingURL=main-CZPmSiPq.js.map
