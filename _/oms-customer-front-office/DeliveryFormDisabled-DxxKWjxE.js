import { u as l } from "./useClassicTranslation-ouIPeWST.js";
import { j as e } from "./emotion-react.browser.esm-B9sQ19ZB.js";
import { M as s, F as t, a as i, S as o, C as p } from "./formSchema-B--0Jzet.js";
import "./main-CBJ9kUeO.js";
import "./queryClient-DpZpBkWP.js";
import "./index-BK2mL7vc.js";
import "./index-BIW7NeMy.js";
import "./app-MHqjRhKy.js";
const w = ({
  formValue: a
}) => {
  const {
    ct: r
  } = l(), d = Object.values(s).find((n) => n === a.memo) ?? s.직접입력;
  return e("div", {
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
  }, e("div", {
    css: {
      marginBottom: "24px",
      fontSize: "20px",
      fontWeight: "700",
      lineHeight: "28px"
    }
  }, "배송 정보"), e(p, {
    variant: "information",
    css: {
      marginBottom: "20px"
    }
  }, "배송지가 이미 입력됐어요. 배송지 변경을 원하시면", " ", e("a", {
    href: "/",
    target: "_blank"
  }, "쇼핑몰"), "에 문의해주세요."), e("div", {
    css: {
      "> :not([hidden]) ~ :not([hidden])": {
        "--tw-space-y-reverse": "0",
        marginTop: "calc(24px * calc(1 - var(--tw-space-y-reverse)))",
        marginBottom: "calc(24px * var(--tw-space-y-reverse))"
      }
    }
  }, e("div", null, e(t, null, "받는 분 정보"), e("div", {
    css: {
      display: "flex",
      width: "100%",
      columnGap: "8px"
    }
  }, e(i, {
    value: a.receiverName,
    disabled: !0
  }), e(i, {
    value: a.receiverCall,
    disabled: !0
  }))), e("div", null, e(t, null, "주소"), e(i, {
    value: a.addr1,
    variant: "secondary",
    disabled: !0
  }), a.addr2 && e("div", {
    css: {
      marginTop: "12px"
    }
  }, e(i, {
    value: a.addr2,
    disabled: !0
  })), a.commonEntrancePassword && e("div", {
    css: {
      marginTop: "12px"
    }
  }, e(t, null, "공동현관비밀번호"), e(i, {
    value: a.commonEntrancePassword,
    disabled: !0
  }))), a.unipassNumber && e("div", null, e(t, null, "개인통관고유부호"), e(i, {
    value: a.unipassNumber,
    disabled: !0
  })), a.memo && e("div", null, e("div", null, e(t, null, r("타이틀_배송메모")), e(o, {
    optionList: Object.values(s),
    value: d,
    disabled: !0
  })), d === s.직접입력 && e("div", {
    css: {
      marginTop: "12px"
    }
  }, e(i, {
    value: a.memo,
    disabled: !0
  })))));
};
export {
  w as default
};
//# sourceMappingURL=DeliveryFormDisabled-DxxKWjxE.js.map
