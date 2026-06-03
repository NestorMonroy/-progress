/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as t from "react";
import { IconWrap as f } from "@progress/kno-react-common";
import { Button as d } from "@progress/kno-react-buttons";
import { pinIcon as u, xCircleIcon as g } from "@progress/kno-svg-icons";
import { useLocalization as k } from "@progress/kno-react-intl";
import { isAuthor as a, getDeletedMessageText as v } from "../../utils.mjs";
const P = (c) => {
  const { message: e, onUnpin: o, user: r, onReferencedMessageClick: n } = c, i = k(), l = t.useRef(null), m = r && a(r, e), p = t.useCallback(
    (s) => {
      s.preventDefault(), s.stopPropagation(), n == null || n(e.id);
    },
    [e.id, n]
  );
  return /* @__PURE__ */ t.createElement(
    "div",
    {
      ref: l,
      className: `k-message-reference ${m ? "k-message-reference-sender" : "k-message-reference-receiver"} k-message-pinned`,
      onClick: p
    },
    /* @__PURE__ */ t.createElement(f, { icon: u }),
    /* @__PURE__ */ t.createElement("div", { className: "k-message-reference-content" }, e != null && e.isDeleted ? r && v(a(r, e), i) : e == null ? void 0 : e.text),
    /* @__PURE__ */ t.createElement("span", { className: "k-spacer" }),
    /* @__PURE__ */ t.createElement(
      d,
      {
        fillMode: "flat",
        size: "xs",
        svgIcon: g,
        onClick: (s) => {
          s.stopPropagation(), o == null || o(e);
        }
      }
    )
  );
};
export {
  P as default
};
