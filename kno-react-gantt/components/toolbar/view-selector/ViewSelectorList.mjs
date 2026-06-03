/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as t from "react";
import { useLocalization as u } from "@progress/kendo-react-intl";
import { SegmentedControl as d } from "@progress/kendo-react-buttons";
import { useGanttViewsContext as f, useGanttActiveViewContext as g } from "../../../context/GanttContext.mjs";
import { messages as k, viewSelector as l } from "../../../messages/index.mjs";
const w = t.forwardRef(() => {
  const r = f(), [n, a] = g(), o = u(), s = (e) => o.toLanguageString(e, k[e]), i = t.useMemo(
    () => r.map((e) => {
      const m = typeof e.props.title == "function" ? e.props.title(o) : e.props.title;
      return {
        value: e.props.name,
        text: m
      };
    }),
    [r, o]
  ), p = t.useCallback(
    (e) => {
      a && a(e);
    },
    [a]
  ), c = t.useCallback(
    (e) => {
      a && (e.preventDefault(), a(e.target.value));
    },
    [a]
  );
  return /* @__PURE__ */ t.createElement("div", { className: "k-gantt-views-wrapper" }, /* @__PURE__ */ t.createElement(
    d,
    {
      className: "k-gantt-views",
      items: i,
      value: n,
      onChange: p,
      "aria-label": s(l)
    }
  ), /* @__PURE__ */ t.createElement(
    "select",
    {
      value: n,
      onChange: c,
      "aria-label": s(l),
      className: "k-picker k-picker-solid k-dropdown-list k-dropdown k-views-dropdown k-rounded-md"
    },
    r.map((e) => /* @__PURE__ */ t.createElement("option", { key: e.props.name, value: e.props.name }, typeof e.props.title == "function" ? e.props.title(o) : e.props.title))
  ));
});
w.displayName = "KendoReactGanttViewSelectorList";
export {
  w as ViewSelectorList
};
