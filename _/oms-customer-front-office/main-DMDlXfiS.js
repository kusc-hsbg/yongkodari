import { u as r, j as t, b as tt, Q as et, d as ot } from "./emotion-react.browser.esm-B9sQ19ZB.js";
import { R as H, r as q, Q as dt } from "./queryClient-DpZpBkWP.js";
import { g as it } from "./index-BK2mL7vc.js";
import { u as k, O as y, f as K, A as E, p as rt } from "./AddressFormat-C0DZcVGz.js";
import { u as I } from "./useClassicTranslation-ouIPeWST.js";
import { O as a } from "./order.query-BPBp0fXM.js";
import { S as J } from "./site-info.query-DSuQTJpJ.js";
import { S as Z, k as U } from "./site-shipping-place.query-DgP90ed7.js";
import "./differenceInCalendarDays-D0oSghL6.js";
import "./app-MHqjRhKy.js";
const G = () => {
  var $, F, M, R, Q, Y, C, L, N, D, P;
  const {
    ct: e
  } = I(), {
    ct: m
  } = I(!0), d = k("order_no"), l = k("payment_code"), {
    data: n
  } = r(a({
    orderNo: d
  })), {
    data: x
  } = r(J({
    queryOptions: {
      select: (p) => p.etcConfig
    }
  })), {
    data: u
  } = r(a({
    orderNo: d,
    queryOptions: {
      select: (p) => p.orderSections.some((b) => b.deliveryTypeCd === "ODT07")
    }
  })), {
    data: g
  } = r(Z({
    productCodes: n == null ? void 0 : n.orderItems.map((p) => p.prodCode)
  })), w = (g == null ? void 0 : g.shippingOriginAddress) ?? (g == null ? void 0 : g.companyAddress), f = (g == null ? void 0 : g.directNumber) ?? (($ = g == null ? void 0 : g.companyContact) == null ? void 0 : $.call_num), {
    data: _
  } = r(a({
    orderNo: d,
    queryOptions: {
      select: (p) => p.orderSections.flatMap((b) => b.orderSectionItems).some((b) => typeof b.digitalProduct < "u")
    }
  })), {
    data: o
  } = r(a({
    orderNo: d,
    queryOptions: {
      enabled: typeof d == "string",
      select: (p) => p.payments.find((b) => b.paymentCode === l) ?? null
    }
  })), {
    data: W
  } = r(a({
    orderNo: d,
    queryOptions: {
      select: (p) => /^Y$/i.test(p.isMember)
    }
  })), {
    data: c
  } = r(a({
    orderNo: d,
    queryOptions: {
      enabled: typeof d == "string",
      select: (p) => (
        // ODT01: 일반배송, ODT03: 다운로드, ODT07: 방문수령
        !p.orderSections.every((b) => ["ODT01", "ODT03", "ODT07"].includes(b.deliveryTypeCd))
      )
    }
  })), {
    data: S
  } = r(a({
    orderNo: d,
    queryOptions: {
      select: (p) => {
        const [b] = p.orderSections;
        return typeof b > "u" ? null : b;
      }
    }
  })), {
    data: O
  } = r(a({
    orderNo: d,
    queryOptions: {
      enabled: c ?? !1,
      select: (p) => p.orderSections.reduce((b, v) => b || p.orderDeliverys.find((V) => V.orderDeliveryCode === v.orderDeliveryCode), void 0)
    }
  })), {
    data: h
  } = r(a({
    orderNo: d,
    queryOptions: {
      select: (p) => {
        const b = /^Y$/i.test(p.isMember), v = new URL("/shop_mypage", window.location.origin);
        return v.searchParams.set("m2", "order"), v.searchParams.set("idx", p.orderNo), v.searchParams.set("order_no", p.orderNo), b || v.searchParams.set("guest_login", "Y"), v.pathname + v.search;
      }
    }
  })), A = m(`타이틀_${(F = y[S == null ? void 0 : S.deliveryTypeCd]) == null ? void 0 : F.name}`) ?? ((M = y[S == null ? void 0 : S.deliveryTypeCd]) == null ? void 0 : M.name), B = (o == null ? void 0 : o.methodCd) === y.OPM01.code || (o == null ? void 0 : o.methodCd) === y.OPM03.code;
  return t("div", {
    css: {
      margin: "auto",
      minHeight: "200px",
      width: "100%",
      maxWidth: "420px",
      "--tw-bg-opacity": "1",
      backgroundColor: "rgb(255 255 255 / var(--tw-bg-opacity))"
    }
  }, t("ul", {
    css: {
      margin: "0px",
      listStyleType: "none",
      padding: "0px"
    }
  }, B && t("li", {
    css: {
      boxSizing: "border-box",
      display: "flex",
      borderBottomWidth: "1px",
      borderStyle: "solid",
      "--tw-border-opacity": "1",
      borderColor: "rgb(229 231 235 / var(--tw-border-opacity))",
      paddingLeft: "24px",
      paddingRight: "24px",
      paddingBottom: "14px",
      paddingTop: "16px"
    }
  }, t("div", {
    css: {
      width: "100%",
      maxWidth: "114px"
    }
  }, e("타이틀_입금계좌안내")), (o == null ? void 0 : o.methodCd) === y.OPM01.code ? t("div", {
    css: {
      width: "100%",
      paddingLeft: "12px"
    }
  }, t("p", {
    css: {
      marginBottom: "0px"
    }
  }, (R = o == null ? void 0 : o.paymentBankTransfer) == null ? void 0 : R.bankName), t("p", {
    css: {
      marginBottom: "0px"
    }
  }, (Q = o == null ? void 0 : o.paymentBankTransfer) == null ? void 0 : Q.bankAccount), t("p", {
    css: {
      marginBottom: "0px"
    }
  }, (Y = o == null ? void 0 : o.paymentBankTransfer) == null ? void 0 : Y.accountHolderName), t("p", {
    css: {
      marginBottom: "0px",
      fontWeight: "700"
    }
  }, e("getCurrencyFormat", o == null ? void 0 : o.paidPrice))) : null, (o == null ? void 0 : o.methodCd) === y.OPM03.code ? t("div", {
    css: {
      width: "100%",
      paddingLeft: "12px"
    }
  }, t("p", {
    css: {
      marginBottom: "0px"
    }
  }, (C = o == null ? void 0 : o.paymentVirtual) == null ? void 0 : C.bankName), t("p", {
    css: {
      marginBottom: "0px"
    }
  }, (L = o == null ? void 0 : o.paymentVirtual) == null ? void 0 : L.bankAccount), t("p", {
    css: {
      marginBottom: "0px"
    }
  }, (N = o == null ? void 0 : o.paymentVirtual) == null ? void 0 : N.accountHolderName), t("p", {
    css: {
      marginBottom: "0px",
      fontWeight: "700"
    }
  }, e("getCurrencyFormat", o == null ? void 0 : o.paidPrice))) : null), B && t("li", {
    css: {
      boxSizing: "border-box",
      display: "flex",
      borderBottomWidth: "1px",
      borderStyle: "solid",
      "--tw-border-opacity": "1",
      borderColor: "rgb(229 231 235 / var(--tw-border-opacity))",
      paddingLeft: "24px",
      paddingRight: "24px",
      paddingBottom: "14px",
      paddingTop: "16px"
    }
  }, t("div", {
    css: {
      width: "100%",
      maxWidth: "114px"
    }
  }, e("타이틀_입금기간")), t("div", {
    css: {
      width: "100%",
      paddingLeft: "12px"
    }
  }, (o == null ? void 0 : o.methodCd) === y.OPM01.code ? t("p", null, e("설명_까지", K(new Date((D = o == null ? void 0 : o.paymentBankTransfer) == null ? void 0 : D.expireTime), "yyyy-MM-dd HH:mm"))) : null, (o == null ? void 0 : o.methodCd) === y.OPM03.code ? t("p", null, e("설명_까지", K(new Date((P = o == null ? void 0 : o.paymentVirtual) == null ? void 0 : P.expireTime), "yyyy-MM-dd HH:mm"))) : null)), t("li", {
    css: {
      boxSizing: "border-box",
      display: "flex",
      borderBottomWidth: "1px",
      borderStyle: "solid",
      "--tw-border-opacity": "1",
      borderColor: "rgb(229 231 235 / var(--tw-border-opacity))",
      paddingLeft: "24px",
      paddingRight: "24px",
      paddingBottom: "14px",
      paddingTop: "16px"
    }
  }, t("div", {
    css: {
      width: "100%",
      maxWidth: "114px"
    }
  }, e("타이틀_주문번호")), t("div", {
    css: {
      width: "100%",
      paddingLeft: "12px"
    }
  }, t("p", {
    css: {
      marginBottom: "0px"
    }
  }, n == null ? void 0 : n.orderNo))), c && O ? t(H.Fragment, null, t("li", {
    css: {
      boxSizing: "border-box",
      display: "flex",
      borderBottomWidth: "1px",
      borderStyle: "solid",
      "--tw-border-opacity": "1",
      borderColor: "rgb(229 231 235 / var(--tw-border-opacity))",
      paddingLeft: "24px",
      paddingRight: "24px",
      paddingBottom: "14px",
      paddingTop: "16px"
    }
  }, t("div", {
    css: {
      width: "100%",
      maxWidth: "114px"
    }
  }, e("타이틀_배송정보")), (O == null ? void 0 : O.isInput) === "N" ? t("div", {
    css: {
      width: "100%",
      paddingLeft: "12px"
    }
  }, t("p", {
    css: {
      marginBottom: "0px"
    }
  }, e("설명_배송지입력대기"))) : t("div", {
    css: {
      width: "100%",
      paddingLeft: "12px"
    }
  }, t(E, {
    address: O
  }))), t("li", {
    css: {
      boxSizing: "border-box",
      display: "flex",
      borderBottomWidth: "1px",
      borderStyle: "solid",
      "--tw-border-opacity": "1",
      borderColor: "rgb(229 231 235 / var(--tw-border-opacity))",
      paddingLeft: "24px",
      paddingRight: "24px",
      paddingBottom: "14px",
      paddingTop: "16px"
    }
  }, t("div", {
    css: {
      width: "100%",
      maxWidth: "114px"
    }
  }, e("타이틀_배송방법")), t("div", {
    css: {
      width: "100%",
      paddingLeft: "12px"
    }
  }, t("p", {
    css: {
      marginBottom: "0px"
    }
  }, A)))) : null, u ? t("li", {
    css: {
      boxSizing: "border-box",
      display: "flex",
      borderBottomWidth: "1px",
      borderStyle: "solid",
      "--tw-border-opacity": "1",
      borderColor: "rgb(229 231 235 / var(--tw-border-opacity))",
      paddingLeft: "24px",
      paddingRight: "24px",
      paddingBottom: "14px",
      paddingTop: "16px"
    }
  }, t("div", {
    css: {
      width: "100%",
      maxWidth: "114px"
    }
  }, e("타이틀_방문수령정보")), t("div", {
    css: {
      width: "100%",
      paddingLeft: "12px"
    }
  }, w == null ? void 0 : w.filter(([, p]) => p).map(([p, b]) => t("div", {
    css: {
      fontSize: "15px"
    },
    key: p
  }, b)), !!f && t("div", {
    css: {
      fontSize: "14px",
      "--tw-text-opacity": "1",
      color: "rgb(117 117 117 / var(--tw-text-opacity))"
    }
  }, f))) : null, _ ? t("li", {
    css: {
      boxSizing: "border-box",
      display: "flex",
      borderBottomWidth: "1px",
      borderStyle: "solid",
      "--tw-border-opacity": "1",
      borderColor: "rgb(229 231 235 / var(--tw-border-opacity))",
      paddingLeft: "24px",
      paddingRight: "24px",
      paddingBottom: "14px",
      paddingTop: "16px"
    }
  }, t("div", {
    css: {
      width: "100%",
      maxWidth: "114px"
    }
  }, e("버튼_다운로드")), t("div", {
    css: {
      width: "100%",
      paddingLeft: "12px"
    }
  }, t("p", {
    css: {
      marginBottom: "0px"
    },
    dangerouslySetInnerHTML: {
      __html: e("설명_컨텐츠상품은주문배송조회에서다운로드해주세요")
    }
  }))) : null, t("li", {
    css: {
      display: "flex"
    }
  }, /^order$/i.test((x == null ? void 0 : x.complete_button_type) ?? "") ? t("a", {
    href: (x == null ? void 0 : x.complete_button_link) || h,
    css: {
      height: "47px",
      width: "100%",
      borderRadius: "0px",
      "--tw-bg-opacity": "1",
      backgroundColor: "rgb(122 122 122 / var(--tw-bg-opacity))",
      textAlign: "center",
      fontWeight: "700",
      lineHeight: "47px",
      "--tw-text-opacity": "1 !important",
      color: "rgb(255 255 255 / var(--tw-text-opacity)) !important"
    }
  }, (x == null ? void 0 : x.complete_button_name) || e("버튼_주문서로")) : null, /^home$/i.test((x == null ? void 0 : x.complete_button_type) ?? "") ? t("a", {
    href: (x == null ? void 0 : x.complete_button_link) || "/",
    css: {
      height: "47px",
      width: "100%",
      borderRadius: "0px",
      "--tw-bg-opacity": "1",
      backgroundColor: "rgb(122 122 122 / var(--tw-bg-opacity))",
      textAlign: "center",
      fontWeight: "700",
      lineHeight: "47px",
      "--tw-text-opacity": "1 !important",
      color: "rgb(255 255 255 / var(--tw-text-opacity)) !important"
    }
  }, (x == null ? void 0 : x.complete_button_name) || e("버튼_홈으로")) : null, W ? t("a", {
    href: "/shop_mypage",
    css: {
      height: "47px",
      width: "100%",
      borderRadius: "0px",
      textAlign: "center",
      lineHeight: "47px"
    },
    className: "bg-brand"
  }, e("버튼_마이페이지")) : null)));
}, pt = (e, m) => (e ?? "") === "" && m === "OOS07", X = () => {
  var N, D, P, p, b, v, V, j;
  const {
    ct: e
  } = I(), {
    ct: m
  } = I(!0), d = k("order_no"), l = k("payment_code"), {
    data: n
  } = r(a({
    orderNo: d
  })), {
    data: x
  } = r(a({
    orderNo: d,
    queryOptions: {
      select: (i) => i.orderSections.some((s) => s.deliveryTypeCd === "ODT07")
    }
  })), {
    data: u
  } = r(Z({
    productCodes: n == null ? void 0 : n.orderItems.map((i) => i.prodCode)
  })), g = (u == null ? void 0 : u.shippingOriginAddress) ?? (u == null ? void 0 : u.companyAddress), w = (u == null ? void 0 : u.directNumber) ?? ((N = u == null ? void 0 : u.companyContact) == null ? void 0 : N.call_num), {
    data: f
  } = r(a({
    orderNo: d,
    queryOptions: {
      enabled: typeof d == "string",
      select: (i) => {
        const [s] = i.orderSections;
        return typeof s > "u" ? null : s;
      }
    }
  })), {
    data: _
  } = r(a({
    orderNo: d,
    queryOptions: {
      enabled: typeof d == "string",
      select: (i) => typeof i.subscriptionOrder < "u"
    }
  })), {
    data: o
  } = r(a({
    orderNo: d,
    queryOptions: {
      enabled: typeof d == "string" && _,
      select: (i) => {
        var s;
        return ((s = i.subscriptionOrder) == null ? void 0 : s.cycleType) ?? "";
      }
    }
  })), {
    data: W
  } = r(a({
    orderNo: d,
    queryOptions: {
      enabled: typeof d == "string" && _,
      select: (i) => {
        var s;
        return ((s = i.subscriptionOrder) == null ? void 0 : s.cycleValue) ?? "";
      }
    }
  })), {
    data: c
  } = r(J({
    queryOptions: {
      select: (i) => i.etcConfig
    }
  })), {
    data: S
  } = r(a({
    orderNo: d,
    queryOptions: {
      select: (i) => i.orderSections.flatMap((s) => s.orderSectionItems).some((s) => typeof s.digitalProduct < "u")
    }
  })), {
    data: O
  } = r(a({
    orderNo: d,
    queryOptions: {
      enabled: typeof d == "string",
      select: (i) => /^Y$/.test(i.isMember)
    }
  })), {
    data: h
  } = r(a({
    orderNo: d,
    queryOptions: {
      enabled: typeof d == "string",
      select: (i) => {
        const [s] = i.payments.filter((T) => T.paymentCode === l);
        return typeof s > "u" ? null : s;
      }
    }
  })), {
    data: A
  } = r(a({
    orderNo: d,
    queryOptions: {
      enabled: typeof d == "string",
      select: (i) => (
        // ODT01: 일반배송, ODT03: 다운로드, ODT07: 방문수령
        !i.orderSections.every((s) => ["ODT01", "ODT03", "ODT07"].includes(s.deliveryTypeCd))
      )
    }
  })), {
    data: B
  } = r(a({
    orderNo: d,
    queryOptions: {
      enabled: A ?? !1,
      select: (i) => {
        const [s] = i.orderDeliverys;
        return typeof s > "u" ? null : s;
      }
    }
  })), {
    data: $
  } = r(a({
    orderNo: d,
    queryOptions: {
      select: (i) => {
        const s = /^Y$/i.test(i.isMember), T = new URL("/shop_mypage", window.location.origin);
        return T.searchParams.set("m2", "order"), T.searchParams.set("idx", i.orderNo), T.searchParams.set("order_no", i.orderNo), s || T.searchParams.set("guest_login", "Y"), T.pathname + T.search;
      }
    }
  })), F = m(`타이틀_${(D = y[f == null ? void 0 : f.deliveryTypeCd]) == null ? void 0 : D.name}`) ?? ((P = y[f == null ? void 0 : f.deliveryTypeCd]) == null ? void 0 : P.name), M = (h == null ? void 0 : h.pgIdx) === rt.naverpay, R = M ? y.OPM08.code : h == null ? void 0 : h.methodCd, Q = m(`버튼_${(p = y[R]) == null ? void 0 : p.description}`) ?? ((b = y[R]) == null ? void 0 : b.description), Y = pt(l, n == null ? void 0 : n.statusCd), C = U((v = n == null ? void 0 : n.subscriptionOrder) == null ? void 0 : v.deliveryStartDate), L = U((V = n == null ? void 0 : n.subscriptionOrder) == null ? void 0 : V.nextPaymentDate);
  return t("div", {
    css: {
      margin: "auto",
      minHeight: "200px",
      width: "100%",
      maxWidth: "420px",
      "--tw-bg-opacity": "1",
      backgroundColor: "rgb(255 255 255 / var(--tw-bg-opacity))"
    }
  }, t("ul", {
    css: {
      margin: "0px",
      listStyleType: "none",
      padding: "0px"
    }
  }, A && B ? t(H.Fragment, null, t("li", {
    css: {
      boxSizing: "border-box",
      display: "flex",
      borderBottomWidth: "1px",
      borderStyle: "solid",
      "--tw-border-opacity": "1",
      borderColor: "rgb(229 231 235 / var(--tw-border-opacity))",
      paddingLeft: "24px",
      paddingRight: "24px",
      paddingBottom: "14px",
      paddingTop: "16px"
    }
  }, t("div", {
    css: {
      width: "100%",
      maxWidth: "114px"
    }
  }, e("타이틀_배송정보")), (B == null ? void 0 : B.isInput) === "N" ? t("div", {
    css: {
      width: "100%",
      paddingLeft: "12px"
    }
  }, t("p", {
    css: {
      marginBottom: "0px"
    }
  }, e("설명_배송지입력대기"))) : t("div", {
    css: {
      width: "100%",
      paddingLeft: "12px"
    }
  }, t(E, {
    address: B
  }))), t("li", {
    css: {
      boxSizing: "border-box",
      display: "flex",
      borderBottomWidth: "1px",
      borderStyle: "solid",
      "--tw-border-opacity": "1",
      borderColor: "rgb(229 231 235 / var(--tw-border-opacity))",
      paddingLeft: "24px",
      paddingRight: "24px",
      paddingBottom: "14px",
      paddingTop: "16px"
    }
  }, t("div", {
    css: {
      width: "100%",
      maxWidth: "114px"
    }
  }, e("타이틀_배송방법")), t("div", {
    css: {
      width: "100%",
      paddingLeft: "12px"
    }
  }, t("p", {
    css: {
      marginBottom: "0px"
    }
  }, F)))) : null, t("li", {
    css: {
      boxSizing: "border-box",
      display: "flex",
      borderBottomWidth: "1px",
      borderStyle: "solid",
      "--tw-border-opacity": "1",
      borderColor: "rgb(229 231 235 / var(--tw-border-opacity))",
      paddingLeft: "24px",
      paddingRight: "24px",
      paddingBottom: "14px",
      paddingTop: "16px"
    }
  }, t("div", {
    css: {
      width: "100%",
      maxWidth: "114px",
      "--tw-text-opacity": "1",
      color: "rgb(117 117 117 / var(--tw-text-opacity))"
    }
  }, e("타이틀_주문번호")), t("div", {
    css: {
      width: "100%",
      paddingLeft: "12px"
    }
  }, d)), Y && t(H.Fragment, null, _ && t("li", {
    css: {
      boxSizing: "border-box",
      display: "flex",
      borderBottomWidth: "1px",
      borderStyle: "solid",
      "--tw-border-opacity": "1",
      borderColor: "rgb(229 231 235 / var(--tw-border-opacity))",
      paddingLeft: "24px",
      paddingRight: "24px",
      paddingBottom: "14px",
      paddingTop: "16px"
    }
  }, t("div", {
    css: {
      width: "100%",
      maxWidth: "114px",
      "--tw-text-opacity": "1",
      color: "rgb(117 117 117 / var(--tw-text-opacity))"
    }
  }, e("타이틀_구독주기")), t("div", {
    css: {
      width: "100%",
      paddingLeft: "12px"
    }
  }, t("p", {
    css: {
      margin: "0px"
    }
  }, `${e(o === "W" ? "설명_n주" : "설명_개월", W)}`))), C !== null && t("li", {
    css: {
      boxSizing: "border-box",
      display: "flex",
      borderBottomWidth: "1px",
      borderStyle: "solid",
      "--tw-border-opacity": "1",
      borderColor: "rgb(229 231 235 / var(--tw-border-opacity))",
      paddingLeft: "24px",
      paddingRight: "24px",
      paddingBottom: "14px",
      paddingTop: "16px"
    }
  }, t("div", {
    css: {
      width: "100%",
      maxWidth: "114px",
      "--tw-text-opacity": "1",
      color: "rgb(117 117 117 / var(--tw-text-opacity))"
    }
  }, e("타이틀_배송시작일")), t("div", {
    css: {
      width: "100%",
      paddingLeft: "12px"
    }
  }, C.replace(/-/g, "."))), L !== null && /* 개시 대기 마지막 행 — 기존 결제금액 행의 실효 하단 여백(pb 14px + 전역 p 마진 10px)과 맞춘다 */
  t("li", {
    css: {
      boxSizing: "border-box",
      display: "flex",
      borderBottomWidth: "1px",
      borderStyle: "solid",
      "--tw-border-opacity": "1",
      borderColor: "rgb(229 231 235 / var(--tw-border-opacity))",
      paddingLeft: "24px",
      paddingRight: "24px",
      paddingBottom: "24px",
      paddingTop: "16px"
    }
  }, t("div", {
    css: {
      width: "100%",
      maxWidth: "114px",
      "--tw-text-opacity": "1",
      color: "rgb(117 117 117 / var(--tw-text-opacity))"
    }
  }, e("타이틀_결제예정일")), t("div", {
    css: {
      width: "100%",
      paddingLeft: "12px"
    }
  }, L.replace(/-/g, ".")))), ((n == null ? void 0 : n.statusCd) === "OOS03" || (n == null ? void 0 : n.statusCd) === "OOS04") && t(H.Fragment, null, t("li", {
    css: {
      boxSizing: "border-box",
      display: "flex",
      borderBottomWidth: "1px",
      borderStyle: "solid",
      "--tw-border-opacity": "1",
      borderColor: "rgb(229 231 235 / var(--tw-border-opacity))",
      paddingLeft: "24px",
      paddingRight: "24px",
      paddingBottom: "14px",
      paddingTop: "16px"
    }
  }, t("div", {
    css: {
      width: "100%",
      maxWidth: "114px",
      "--tw-text-opacity": "1",
      color: "rgb(117 117 117 / var(--tw-text-opacity))"
    }
  }, e("타이틀_결제정보")), t("div", {
    css: {
      width: "100%",
      paddingLeft: "12px"
    }
  }, t("p", {
    css: {
      margin: "0px"
    }
  }, Q), !M && t("p", {
    css: {
      margin: "0px"
    }
  }, (j = h == null ? void 0 : h.paymentCard) == null ? void 0 : j.cardNo))), _ && t("li", {
    css: {
      boxSizing: "border-box",
      display: "flex",
      borderBottomWidth: "1px",
      borderStyle: "solid",
      "--tw-border-opacity": "1",
      borderColor: "rgb(229 231 235 / var(--tw-border-opacity))",
      paddingLeft: "24px",
      paddingRight: "24px",
      paddingBottom: "14px",
      paddingTop: "16px"
    }
  }, t("div", {
    css: {
      width: "100%",
      maxWidth: "114px",
      "--tw-text-opacity": "1",
      color: "rgb(117 117 117 / var(--tw-text-opacity))"
    }
  }, e("타이틀_구독주기")), t("div", {
    css: {
      width: "100%",
      paddingLeft: "12px"
    }
  }, t("p", {
    css: {
      margin: "0px"
    }
  }, `${e(o === "W" ? "설명_n주" : "설명_개월", W)}`))), t("li", {
    css: {
      boxSizing: "border-box",
      display: "flex",
      borderBottomWidth: "1px",
      borderStyle: "solid",
      "--tw-border-opacity": "1",
      borderColor: "rgb(229 231 235 / var(--tw-border-opacity))",
      paddingLeft: "24px",
      paddingRight: "24px",
      paddingBottom: "14px",
      paddingTop: "16px"
    }
  }, t("div", {
    css: {
      width: "100%",
      maxWidth: "114px",
      "--tw-text-opacity": "1",
      color: "rgb(117 117 117 / var(--tw-text-opacity))"
    }
  }, e("타이틀_결제금액")), t("div", {
    css: {
      width: "100%",
      paddingLeft: "12px"
    }
  }, t("p", {
    css: {
      fontWeight: "700"
    },
    className: "text-brand"
  }, e("getCurrencyFormat", Number(h == null ? void 0 : h.paidPrice)))))), x ? t("li", {
    css: {
      boxSizing: "border-box",
      display: "flex",
      borderBottomWidth: "1px",
      borderStyle: "solid",
      "--tw-border-opacity": "1",
      borderColor: "rgb(229 231 235 / var(--tw-border-opacity))",
      paddingLeft: "24px",
      paddingRight: "24px",
      paddingBottom: "14px",
      paddingTop: "16px"
    }
  }, t("div", {
    css: {
      width: "100%",
      maxWidth: "114px"
    }
  }, e("타이틀_방문수령정보")), t("div", {
    css: {
      width: "100%",
      paddingLeft: "12px"
    }
  }, g == null ? void 0 : g.filter(([, i]) => i).map(([i, s]) => t("div", {
    css: {
      fontSize: "15px"
    },
    key: i
  }, s)), !!w && t("div", {
    css: {
      fontSize: "14px",
      "--tw-text-opacity": "1",
      color: "rgb(117 117 117 / var(--tw-text-opacity))"
    }
  }, w))) : null, S ? t("li", {
    css: {
      boxSizing: "border-box",
      display: "flex",
      borderBottomWidth: "1px",
      borderStyle: "solid",
      "--tw-border-opacity": "1",
      borderColor: "rgb(229 231 235 / var(--tw-border-opacity))",
      paddingLeft: "24px",
      paddingRight: "24px",
      paddingBottom: "14px",
      paddingTop: "16px"
    }
  }, t("div", {
    css: {
      width: "100%",
      maxWidth: "114px"
    }
  }, e("버튼_다운로드")), t("div", {
    css: {
      width: "100%",
      paddingLeft: "12px"
    }
  }, t("p", {
    css: {
      marginBottom: "0px"
    },
    dangerouslySetInnerHTML: {
      __html: e("설명_컨텐츠상품은주문배송조회에서다운로드해주세요")
    }
  }))) : null, t("li", {
    css: {
      display: "flex"
    }
  }, /^order$/i.test((c == null ? void 0 : c.complete_button_type) ?? "") ? t("a", {
    href: (c == null ? void 0 : c.complete_button_link) || $,
    css: {
      height: "47px",
      width: "100%",
      borderRadius: "0px",
      "--tw-bg-opacity": "1",
      backgroundColor: "rgb(122 122 122 / var(--tw-bg-opacity))",
      textAlign: "center",
      fontWeight: "700",
      lineHeight: "47px",
      "--tw-text-opacity": "1 !important",
      color: "rgb(255 255 255 / var(--tw-text-opacity)) !important"
    }
  }, (c == null ? void 0 : c.complete_button_name) || e("버튼_주문서로")) : null, /^home$/i.test((c == null ? void 0 : c.complete_button_type) ?? "") ? t("a", {
    href: (c == null ? void 0 : c.complete_button_link) || "/",
    css: {
      height: "47px",
      width: "100%",
      borderRadius: "0px",
      "--tw-bg-opacity": "1",
      backgroundColor: "rgb(122 122 122 / var(--tw-bg-opacity))",
      textAlign: "center",
      fontWeight: "700",
      lineHeight: "47px",
      "--tw-text-opacity": "1 !important",
      color: "rgb(255 255 255 / var(--tw-text-opacity)) !important"
    }
  }, (c == null ? void 0 : c.complete_button_name) || e("버튼_홈으로")) : null, O ? t("a", {
    href: _ ? "/shop_mypage/?m2=regularly" : "/shop_mypage",
    css: {
      height: "47px",
      width: "100%",
      borderRadius: "0px",
      textAlign: "center",
      fontWeight: "700",
      lineHeight: "47px"
    },
    className: "bg-brand"
  }, e("버튼_마이페이지")) : null)));
}, z = () => t("div", {
  tw: "pt-[55px] px-[20px] pb-[110px] animate-pulse"
}, t("div", {
  tw: "flex flex-col items-center justify-center"
}, t("div", {
  tw: "w-full h-[14px] max-w-[200px] bg-skeleton rounded-skeleton mb-[5px]"
}), t("div", {
  tw: "w-full h-[14px] max-w-[300px] bg-skeleton rounded-skeleton mb-[30px]"
})), t("div", {
  tw: "w-full max-w-[420px] min-h-[200px] bg-white m-auto"
}, t("div", {
  tw: "list-none p-0 m-0"
}, t("div", {
  tw: "flex box-border border-b pt-[16px] pb-[14px] px-[24px] border-solid border-[#e5e7eb]"
}, t("div", {
  tw: "w-full h-[14px] max-w-[100px] bg-skeleton rounded-skeleton"
}), t("div", {
  tw: "flex flex-col w-full pl-[12px]"
}, t("div", {
  tw: "w-full h-[14px] max-w-[80px] bg-skeleton rounded-skeleton mb-[5px]"
}), t("div", {
  tw: "w-full h-[14px] max-w-[114px] bg-skeleton rounded-skeleton mb-[5px]"
}), t("div", {
  tw: "w-full h-[14px] max-w-[214px] bg-skeleton rounded-skeleton mb-[5px]"
}), t("div", {
  tw: "w-full h-[14px] max-w-[214px] bg-skeleton rounded-skeleton mb-[5px]"
}), t("div", {
  tw: "w-full h-[14px] max-w-[50px] bg-skeleton rounded-skeleton"
}))), t("div", {
  tw: "flex box-border border-b pt-[16px] pb-[14px] px-[24px] border-solid border-[#e5e7eb]"
}, t("div", {
  tw: "w-full h-[14px] max-w-[100px] bg-skeleton rounded-skeleton"
}), t("div", {
  tw: "w-full pl-[12px]"
}, t("div", {
  tw: "w-full h-[14px] max-w-[80px] bg-skeleton rounded-skeleton"
}))), t("div", {
  tw: "flex box-border border-b pt-[16px] pb-[14px] px-[24px] border-solid border-[#e5e7eb]"
}, t("div", {
  tw: "w-full h-[14px] max-w-[100px] bg-skeleton rounded-skeleton"
}), t("div", {
  tw: "w-full pl-[12px]"
}, t("div", {
  tw: "w-full h-[14px] max-w-[150px] bg-skeleton rounded-skeleton"
}))), t("div", {
  tw: "flex box-border border-b pt-[16px] pb-[14px] px-[24px] border-solid border-[#e5e7eb]"
}, t("div", {
  tw: "w-full h-[14px] max-w-[100px] bg-skeleton rounded-skeleton"
}), t("div", {
  tw: "w-full pl-[12px]"
}, t("div", {
  tw: "w-full h-[14px] max-w-[80px] bg-skeleton rounded-skeleton"
}))), t("div", {
  tw: "flex box-border border-b pt-[16px] pb-[14px] px-[24px] border-solid border-[#e5e7eb]"
}, t("div", {
  tw: "w-full h-[14px] max-w-[100px] bg-skeleton rounded-skeleton"
}), t("div", {
  tw: "w-full pl-[12px]"
}, t("div", {
  tw: "w-full h-[14px] max-w-[60px] bg-skeleton rounded-skeleton"
}))), t("div", {
  tw: "flex"
}, t("div", {
  tw: "flex justify-center items-center w-full h-[47px] bg-white text-center leading-[47px] rounded-none box-border border-r border-solid border-[#e5e7eb]"
}, t("div", {
  tw: "w-[50%] h-[14px] bg-skeleton rounded-skeleton"
})), t("div", {
  tw: "flex justify-center items-center w-full h-[47px] bg-white text-center leading-[47px] rounded-none"
}, t("div", {
  tw: "w-[50%] h-[14px] bg-skeleton rounded-skeleton"
})))))), nt = () => {
  const {
    ct: e
  } = I(), m = k("order_no"), d = k("payment_code"), {
    data: l
  } = r(a({
    orderNo: m
  })), {
    data: n
  } = r(a({
    orderNo: m,
    queryOptions: {
      enabled: typeof m == "string",
      // 디지털·그룹 상품은 결제 즉시 거래종료(OOS04)로 전이되므로 OOS04도 결제 완료로 간주한다
      select: (w) => w.statusCd === y.OOS03.code || w.statusCd === y.OOS04.code
    }
  })), {
    data: x
  } = r(a({
    orderNo: m,
    queryOptions: {
      enabled: typeof m == "string",
      select: (w) => {
        const [f] = w.payments.filter((_) => _.paymentCode === d);
        return typeof f > "u" ? null : f.statusCd === y.OPS01.code;
      },
      suspense: !0
    }
  })), {
    data: u
  } = r(a({
    orderNo: m,
    queryOptions: {
      enabled: typeof m == "string",
      select: (w) => typeof w.subscriptionOrder < "u"
    }
  })), {
    data: g
  } = r(a({
    orderNo: m,
    queryOptions: {
      enabled: typeof m == "string",
      select: (w) => w.isMember === "Y"
    }
  }));
  return u ? t("div", {
    css: {
      paddingLeft: "20px",
      paddingRight: "20px",
      paddingBottom: "110px",
      paddingTop: "55px"
    }
  }, t("div", {
    css: {
      marginBottom: "30px",
      paddingTop: "10px",
      paddingBottom: "10px",
      textAlign: "center"
    }
  }, t("h6", {
    css: {
      fontSize: "18px !important",
      fontWeight: "700 !important",
      "--tw-text-opacity": "1",
      color: "rgb(32 37 43 / var(--tw-text-opacity))"
    },
    dangerouslySetInnerHTML: {
      // 변역 결과가 HTML로 들어오기 때문에 dangerouslySetInnerHTML을 사용
      __html: e("타이틀_정기구독신청이완료되었습니다")
    }
  }), t("p", {
    dangerouslySetInnerHTML: {
      __html: e("설명_정기구독신청내역은마이페이지에서조회가능합니다")
    }
  })), t(q.Suspense, {
    fallback: t(z, null)
  }, t(X, null))) : n === !1 ? t("div", {
    css: {
      paddingLeft: "20px",
      paddingRight: "20px",
      paddingBottom: "110px",
      paddingTop: "55px"
    }
  }, t("div", {
    css: {
      marginBottom: "30px",
      paddingTop: "10px",
      paddingBottom: "10px",
      textAlign: "center"
    }
  }, t("h6", {
    css: {
      fontSize: "18px !important",
      fontWeight: "700 !important",
      "--tw-text-opacity": "1",
      color: "rgb(32 37 43 / var(--tw-text-opacity))"
    },
    dangerouslySetInnerHTML: {
      // 변역 결과가 HTML로 들어오기 때문에 dangerouslySetInnerHTML을 사용
      __html: e("타이틀_결제처리중")
    }
  }), g ? null : t("p", {
    className: "text-danger"
  }, e("설명_비회원주문정보", l == null ? void 0 : l.orderNo, l == null ? void 0 : l.ordererCall)), t("p", {
    css: {
      marginBottom: "0px"
    },
    dangerouslySetInnerHTML: {
      __html: e("설명_결제처리중")
    }
  })), t(q.Suspense, {
    fallback: t(z, null)
  }, t(G, null))) : x ? t("div", {
    css: {
      paddingLeft: "20px",
      paddingRight: "20px",
      paddingBottom: "110px",
      paddingTop: "55px"
    }
  }, t("div", {
    css: {
      marginBottom: "30px",
      paddingTop: "10px",
      paddingBottom: "10px",
      textAlign: "center"
    }
  }, t("h6", {
    css: {
      fontSize: "18px !important",
      fontWeight: "700 !important",
      "--tw-text-opacity": "1",
      color: "rgb(32 37 43 / var(--tw-text-opacity))"
    },
    dangerouslySetInnerHTML: {
      // 변역 결과가 HTML로 들어오기 때문에 dangerouslySetInnerHTML을 사용
      __html: e("타이틀_주문완료")
    }
  }), g ? null : t("p", {
    className: "text-danger"
  }, e("설명_비회원주문정보", l == null ? void 0 : l.orderNo, l == null ? void 0 : l.ordererCall)), t("p", {
    css: {
      marginBottom: "0px"
    },
    dangerouslySetInnerHTML: {
      __html: e("설명_무통장계좌안내")
    }
  })), t(q.Suspense, {
    fallback: t(z, null)
  }, t(G, null))) : t("div", {
    css: {
      paddingLeft: "20px",
      paddingRight: "20px",
      paddingBottom: "110px",
      paddingTop: "55px"
    }
  }, t("div", {
    css: {
      marginBottom: "30px",
      paddingTop: "10px",
      paddingBottom: "10px",
      textAlign: "center"
    }
  }, t("h6", {
    css: {
      fontSize: "18px !important",
      fontWeight: "700 !important",
      "--tw-text-opacity": "1",
      color: "rgb(32 37 43 / var(--tw-text-opacity))"
    },
    dangerouslySetInnerHTML: {
      // 변역 결과가 HTML로 들어오기 때문에 dangerouslySetInnerHTML을 사용
      __html: e("설명_결제가완료되었습니다")
    }
  }), g ? null : t("p", {
    className: "text-danger"
  }, e("설명_비회원주문정보", l == null ? void 0 : l.orderNo, l == null ? void 0 : l.ordererCall))), t(q.Suspense, {
    fallback: t(z, null)
  }, t(X, null)));
};
function st() {
  const e = document.getElementById("oms-shop-payment-complete");
  if (e === null)
    return;
  const m = new dt({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1e3,
        refetchOnWindowFocus: !1,
        suspense: !0
      }
    }
  });
  tt.createRoot(e).render(t(H.StrictMode, null, t(et, {
    client: m
  }, t(it, null, t(q.Suspense, {
    fallback: t(z, null)
  }, t(nt, null))), t(ot, {
    initialIsOpen: !1
  }))));
}
st();
//# sourceMappingURL=main-DMDlXfiS.js.map
