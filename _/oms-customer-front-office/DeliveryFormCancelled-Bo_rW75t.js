import "./main-CBJ9kUeO.js";
import "./queryClient-DpZpBkWP.js";
import { M as a, F as d, a as e, S as o, B as c, m as u, C as m } from "./formSchema-B--0Jzet.js";
import { u as v } from "./useClassicTranslation-ouIPeWST.js";
import { j as i } from "./emotion-react.browser.esm-B9sQ19ZB.js";
import "./index-BK2mL7vc.js";
import "./index-BIW7NeMy.js";
import "./app-MHqjRhKy.js";
const T = ({
  formValue: t,
  mainOrderItemNo: s,
  addressAlreadyEntered: r
}) => {
  const {
    ct: p
  } = v(), n = Object.values(a).find((l) => l === t.memo) ?? a.직접입력;
  return i("div", {
    css: {
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: "768px",
      "--tw-bg-opacity": "1",
      backgroundColor: "rgb(255 255 255 / var(--tw-bg-opacity))",
      padding: "24px",
      "@media (min-width: 768px)": {
        borderRadius: "16px"
      }
    }
  }, i("div", {
    css: {
      marginBottom: "24px",
      fontSize: "20px",
      fontWeight: "700",
      lineHeight: "28px"
    }
  }, "배송 정보"), !r && i(m, {
    css: {
      marginBottom: "20px"
    }
  }, "배송지 입력 전 거절한 선물이에요."), i("div", {
    css: {
      "> :not([hidden]) ~ :not([hidden])": {
        "--tw-space-y-reverse": "0",
        marginTop: "calc(24px * calc(1 - var(--tw-space-y-reverse)))",
        marginBottom: "calc(24px * var(--tw-space-y-reverse))"
      }
    }
  }, i("div", null, i(d, null, "받는 분 정보"), i("div", {
    css: {
      display: "flex",
      width: "100%",
      columnGap: "8px"
    }
  }, i(e, {
    value: t.receiverName,
    disabled: !0
  }), i(e, {
    value: t.receiverCall,
    disabled: !0
  }))), t.addr1 && i("div", null, i(d, null, "주소"), i(e, {
    value: t.addr1,
    variant: "secondary",
    disabled: !0
  }), t.addr2 && i("div", {
    css: {
      marginTop: "12px"
    }
  }, i(e, {
    value: t.addr2,
    disabled: !0
  }))), t.unipassNumber && i("div", null, i(d, null, "개인통관고유부호"), i(e, {
    value: t.unipassNumber,
    disabled: !0
  })), t.memo && i("div", null, i("div", null, i(d, null, p("타이틀_배송메모")), i(o, {
    optionList: Object.values(a),
    value: n,
    disabled: !0
  })), n === a.직접입력 && i("div", {
    css: {
      marginTop: "12px"
    }
  }, i(e, {
    value: t.memo,
    disabled: !0
  }))), i("div", {
    css: {
      position: "fixed",
      bottom: "0px",
      left: "0px",
      right: "0px",
      "--tw-bg-opacity": "1",
      backgroundColor: "rgb(255 255 255 / var(--tw-bg-opacity))",
      paddingLeft: "20px",
      paddingRight: "20px",
      paddingTop: "14px",
      paddingBottom: "14px",
      "@media (min-width: 768px)": {
        position: "static",
        padding: "0px"
      }
    }
  }, i(c, {
    size: "large",
    isFull: !0,
    asChild: !0
  }, i("a", {
    href: s ? `/shop?idx=${s}` : "/",
    css: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      columnGap: "8px"
    },
    target: "_blank"
  }, "선물 상품 보러가기 ", i(u, {
    strokeWidth: 2
  }))))));
};
export {
  T as default
};
//# sourceMappingURL=DeliveryFormCancelled-Bo_rW75t.js.map
