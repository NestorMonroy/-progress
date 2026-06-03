/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as t from "react";
import { useLocalization as h } from "@progress/kno-react-intl";
import { DropDownButton as k, SegmentedControl as b } from "@progress/kno-react-buttons";
import { useWindow as g, IconWrap as v } from "@progress/kno-react-common";
import { chevronDownIcon as C } from "@progress/kno-svg-icons";
import { useSchedulerViewsContext as S, useSchedulerActiveViewContext as x } from "../../../context/SchedulerContext.mjs";
const E = t.forwardRef(() => {
  const n = t.useRef(null), [p, u] = t.useState("desktop"), s = S(), l = g(n), [a, o] = x(), r = s.find((e) => e.props.name === a), i = h(), d = t.useCallback(
    (e) => {
      o && (e.syntheticEvent.preventDefault(), o(e.item.name));
    },
    [o]
  ), f = t.useCallback(
    (e) => {
      o && o(e);
    },
    [o]
  ), w = t.useMemo(
    () => s.map((e) => ({
      value: e.props.name,
      text: typeof e.props.title == "function" ? e.props.title(i) : e.props.title,
      tabIndex: -1
    })),
    [s, i]
  ), m = () => {
    l().matchMedia && u(l().matchMedia("(min-width: 1024px)").matches ? "desktop" : "mobile");
  };
  return t.useEffect(() => {
    m();
    const e = l().ResizeObserver, c = e && new e(m);
    return c && c.observe(n.current), () => {
      c && c.disconnect();
    };
  }, []), /* @__PURE__ */ t.createElement(t.Fragment, null, r && p === "mobile" && /* @__PURE__ */ t.createElement(
    "div",
    {
      className: "k-scheduler-tools",
      ref: n
    },
    /* @__PURE__ */ t.createElement(
      k,
      {
        className: "k-views-dropdown",
        onItemClick: d,
        popupSettings: { popupClass: "k-scheduler-toolbar" },
        textField: "title",
        items: s.map((e) => ({
          ...e.props,
          selected: e.props.name === a,
          title: typeof e.props.title == "function" ? e.props.title(i) : e.props.title
        })),
        text: /* @__PURE__ */ t.createElement(t.Fragment, null, typeof r.props.title == "function" ? r.props.title(i) : r.props.title, /* @__PURE__ */ t.createElement(v, { name: "chevron-down", icon: C }))
      }
    )
  ), p === "desktop" && /* @__PURE__ */ t.createElement(
    b,
    {
      ref: (e) => {
        e && (n.current = e.element);
      },
      className: "k-scheduler-views",
      role: "group",
      value: a,
      onChange: f,
      items: w
    }
  ));
});
E.displayName = "KendoReactSchedulerViewSelectorList";
export {
  E as ViewSelectorList
};
