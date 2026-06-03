/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as e from "react";
import { useCustomComponent as l, IconWrap as f, classNames as d, useMouse as g } from "@progress/kno-react-common";
import { useLocalization as I } from "@progress/kno-react-intl";
import { gearIcon as v } from "@progress/kno-svg-icons";
import { configuratorButtonLabel as a, messages as p } from "../messages/index.mjs";
const C = e.forwardRef((t, r) => {
  const o = e.useRef(null), n = e.useRef(null), c = I();
  e.useImperativeHandle(o, () => ({ props: t, element: n.current })), e.useImperativeHandle(
    r,
    () => o.current
  );
  const [s, i] = l(
    t.icon || N.icon
  ), m = e.useMemo(
    () => d("k-pivotgrid-configurator-button", t.className),
    [t.className]
  ), u = g(
    t,
    o
  );
  return /* @__PURE__ */ e.createElement("div", { ref: n, id: t.id, className: m, tabIndex: t.tabIndex, ...u }, /* @__PURE__ */ e.createElement("span", null, c.toLanguageString(a, p[a]), /* @__PURE__ */ e.createElement(s, { name: "gear", icon: v, ...i })));
}), N = {
  icon: f
};
C.displayName = "KendoReactPivotGridConfiguratorButton";
export {
  C as PivotGridConfiguratorButton
};
