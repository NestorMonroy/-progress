/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as t from "react";
import { Button as n } from "@progress/kno-react-buttons";
import { CardHeader as r, Menu as o } from "@progress/kno-react-layout";
import { Popup as c } from "@progress/kno-react-popup";
import { moreVerticalIcon as m } from "@progress/kno-svg-icons";
const l = (e) => {
  const a = t.useRef(void 0);
  return /* @__PURE__ */ t.createElement(r, { className: "k-hbox" }, /* @__PURE__ */ t.createElement("span", { className: "k-card-title k-link", onClick: e.onShowPreviewPane }, e.title), /* @__PURE__ */ t.createElement("span", { className: "k-spacer" }), /* @__PURE__ */ t.createElement("div", { className: "k-card-header-actions" }, /* @__PURE__ */ t.createElement(
    n,
    {
      fillMode: "flat",
      className: "k-taskboard-card-menu-button",
      icon: "more-vertical",
      svgIcon: m,
      ref: a,
      "aria-label": "Card menu",
      title: "Card menu",
      onClick: e.showMenu ? e.onHideMenu : e.onShowMenu,
      onBlur: e.onMenuButtonBlur
    }
  ), /* @__PURE__ */ t.createElement(
    c,
    {
      anchor: a.current && a.current.element,
      show: e.showMenu,
      ref: e.popupRef
    },
    /* @__PURE__ */ t.createElement(
      o,
      {
        vertical: !0,
        onSelect: e.onMenuItemSelect,
        items: e.menuItems,
        className: "k-context-menu"
      }
    )
  )));
};
l.displayName = "KendoReactTaskBoardCardHeader";
export {
  l as TaskBoardCardHeader
};
