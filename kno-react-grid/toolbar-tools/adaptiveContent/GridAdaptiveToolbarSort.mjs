/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";
import * as e from "react";
import { checkIcon as m, xIcon as h } from "@progress/kno-svg-icons";
import { adaptiveToolbarSortTitle as c, messages as i, sortClearButton as s, sortApplyButton as d } from "../../messages/index.mjs";
import { Button as l } from "@progress/kno-react-buttons";
import { useLocalization as f } from "@progress/kno-react-intl";
import { ActionSheet as p, ActionSheetView as E, ActionSheetHeader as k, ActionSheetContent as S, ActionSheetFooter as x } from "@progress/kno-react-layout";
import { GridColumnMenuItem as b } from "../../columnMenu/GridColumnMenuItem.mjs";
import { GridColumnMenuItemGroup as A } from "../../columnMenu/GridColumnMenuItemGroup.mjs";
import { GridContext as y } from "../../utils/GridContext.mjs";
import { GridToolbarAdaptiveContext as I } from "../adaptiveContext/GridToolbarAdaptiveContext.mjs";
import { useAdaptiveModeContext as N } from "@progress/kno-react-common";
const H = (t) => {
  const r = e.useContext(y), { actionSheetRef: u } = e.useContext(I), o = N(), n = f(), C = {
    animation: !0,
    navigatable: !1,
    navigatableElements: [],
    expand: t.computedShow,
    animationStyles: o && r.adaptiveColumnMenuRef <= o.small ? { top: 0, width: "100%", height: "100%" } : void 0,
    className: "k-adaptive-actionsheet",
    position: o && r.adaptiveColumnMenuRef <= o.small ? "fullscreen" : void 0
  }, v = n.toLanguageString(c, i[c]);
  return /* @__PURE__ */ e.createElement(
    p,
    {
      ...C,
      ref: u,
      style: { "--kno-actionsheet-view-current": 1 },
      onClose: t.onClose
    },
    /* @__PURE__ */ e.createElement(E, null, /* @__PURE__ */ e.createElement(k, null, /* @__PURE__ */ e.createElement("div", { className: "k-actionsheet-titlebar-group" }, /* @__PURE__ */ e.createElement("div", { className: "k-actionsheet-title" }, /* @__PURE__ */ e.createElement("div", { className: "k-text-center" }, v)), /* @__PURE__ */ e.createElement("div", { className: "k-actionsheet-actions" }, /* @__PURE__ */ e.createElement(
      l,
      {
        type: "button",
        svgIcon: m,
        themeColor: "primary",
        onClick: t.onClose,
        fillMode: "flat"
      }
    )))), /* @__PURE__ */ e.createElement(S, null, /* @__PURE__ */ e.createElement("div", { className: "k-column-menu k-column-menu-lg" }, /* @__PURE__ */ e.createElement(A, null, t.filtered.map((a) => /* @__PURE__ */ e.createElement(
      b,
      {
        key: a.id,
        title: t.renderTitle(a),
        onClick: (g) => t.handleSorting(g, a)
      }
    ))))), /* @__PURE__ */ e.createElement(x, null, /* @__PURE__ */ e.createElement("div", { className: "k-actions k-actions-stretched" }, /* @__PURE__ */ e.createElement(
      l,
      {
        svgIcon: h,
        onClick: t.onClear,
        size: "large",
        disabled: t.isDisabledButton
      },
      n.toLanguageString(s, i[s])
    ), /* @__PURE__ */ e.createElement(l, { svgIcon: m, themeColor: "primary", size: "large", onClick: t.onClose }, n.toLanguageString(d, i[d])))))
  );
};
export {
  H as GridAdaptiveToolbarSort
};
