/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as t from "react";
import e from "prop-types";
import { useDir as v, kendoThemeMaps as C, classNames as y } from "@progress/kno-react-common";
const f = t.forwardRef((o, g) => {
  const {
    cutoutBorder: u = l.cutoutBorder,
    position: s = l.position,
    align: r = l.align,
    children: b,
    className: c,
    style: h
  } = o, a = t.useRef(null), k = t.useCallback(() => {
    a.current && a.current.focus();
  }, []);
  t.useImperativeHandle(
    g,
    () => ({
      element: a.current,
      focus: k
    })
  );
  const M = v(a, o.dir), n = t.useMemo(() => o.size || l.size, [o.size]), d = t.useMemo(() => o.fillMode || l.fillMode, [o.fillMode]), i = t.useMemo(() => o.themeColor || l.themeColor, [o.themeColor]), m = t.useMemo(
    () => o.rounded ? C.roundedMap[o.rounded] : void 0,
    [o.rounded]
  ), z = t.useMemo(
    () => y(
      "k-badge",
      {
        "k-badge-sm": n === "small",
        "k-badge-md": n === "medium",
        "k-badge-lg": n === "large",
        [`k-badge-${d}`]: d,
        [`k-badge-${i}`]: i,
        "k-badge-border-cutout": u,
        [`k-badge-${s}`]: s,
        "k-top-start": r.vertical === "top" && r.horizontal === "start",
        "k-top-end": r.vertical === "top" && r.horizontal === "end",
        "k-bottom-start": r.vertical === "bottom" && r.horizontal === "start",
        "k-bottom-end": r.vertical === "bottom" && r.horizontal === "end",
        [`k-rounded-${m}`]: m
      },
      c
    ),
    [n, d, i, m, u, r, s, c]
  );
  return /* @__PURE__ */ t.createElement("span", { className: z, style: h, dir: M }, b);
});
f.propTypes = {
  className: e.string,
  dir: e.string,
  style: e.object,
  align: e.shape({
    vertical: e.oneOf(["top", "bottom"]),
    horizontal: e.oneOf(["start", "end"])
  }),
  size: e.oneOf(["small", "medium", "large"]),
  fillMode: e.oneOf(["solid", "outline"]),
  themeColor: e.oneOf(["base", "primary", "secondary", "tertiary", "info", "success", "warning", "error"]),
  rounded: e.oneOf(["small", "medium", "large", "full", "none"]),
  position: e.oneOf(["edge", "outside", "inside"]),
  cutoutBorder: e.bool
};
const l = {
  size: void 0,
  fillMode: void 0,
  themeColor: void 0,
  position: "edge",
  align: { vertical: "top", horizontal: "end" },
  cutoutBorder: !1
};
f.displayName = "KendoBadge";
export {
  f as Badge
};
