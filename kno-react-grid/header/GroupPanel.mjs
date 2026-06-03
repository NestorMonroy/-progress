/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";
import * as i from "react";
import { GroupingIndicator as G } from "../drag/GroupingIndicator.mjs";
import { useLocalization as L } from "@progress/kno-react-intl";
import { groupPanelAriaLabel as g, messages as u, groupPanelEmpty as m } from "../messages/index.mjs";
import { GridContext as R } from "../utils/GridContext.mjs";
const k = (t) => {
  const n = i.useContext(R), p = (r, e) => {
    const o = t.group.slice();
    o.splice(e, 1), n.groupChange(o, r);
  }, d = (r, e, o, a) => {
    const v = Object.assign({}, o, { dir: a }), s = t.group.slice();
    s.splice(e, 1, v), n.groupChange(s, r);
  }, l = L(), f = t.group || [], C = (r) => {
    const e = t.columns.find((a) => a.field === r), o = e && (e.title || e.field);
    return o === void 0 ? r : o;
  }, c = f.map((r, e) => /* @__PURE__ */ i.createElement(
    G,
    {
      key: e,
      index: e,
      dir: r.dir || "asc",
      title: C(r.field),
      onRemove: (o) => {
        p(o, e);
      },
      onSortChange: (o, a) => {
        d(o, e, r, a);
      },
      onPress: n.dragLogicRef.current.pressHandler,
      onDrag: n.dragLogicRef.current.dragHandler,
      onRelease: n.dragLogicRef.current.releaseHandler,
      onContextMenu: n.onContextMenu
    }
  ));
  return /* @__PURE__ */ i.createElement(
    "div",
    {
      ref: n.dragLogicRef.current.refGroupPanelDiv,
      className: "k-grouping-header",
      role: "toolbar",
      "aria-label": l.toLanguageString(g, u[g]),
      "aria-controls": t.ariaControls || ""
    },
    /* @__PURE__ */ i.createElement("div", { className: "k-chip-list", role: "none" }, c),
    /* @__PURE__ */ i.createElement("div", { className: "k-grouping-drop-container" }, !c.length && l.toLanguageString(m, u[m]), " ")
  );
};
export {
  k as GroupPanel
};
