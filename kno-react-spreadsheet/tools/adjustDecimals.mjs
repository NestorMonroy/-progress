/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as t from "react";
import { Button as D } from "@progress/kno-react-buttons";
import { useLocalization as f } from "@progress/kno-react-intl";
import { messages as I, keys as n } from "../messages.mjs";
import { decimalDecreaseIcon as a, decimalIncreaseIcon as c } from "@progress/kno-svg-icons";
const s = (i) => (m) => {
  const { icon: l, svgIcon: r, titleKey: e, value: u } = i, { spreadsheetRef: o } = m, d = t.useCallback(() => {
    if (o.current) {
      const p = {
        command: "AdjustDecimalsCommand",
        options: { value: u }
      };
      o.current.executeCommand(p);
    }
  }, []);
  return /* @__PURE__ */ t.createElement(
    D,
    {
      type: "button",
      icon: l,
      svgIcon: r,
      fillMode: "flat",
      onClick: d,
      title: f().toLanguageString(e, I[e])
    }
  );
}, g = s({
  icon: c.name,
  svgIcon: c,
  value: 1,
  titleKey: n.increaseDecimal
});
g.displayName = "IncreaseDecimal";
const y = s({
  icon: a.name,
  svgIcon: a,
  value: -1,
  titleKey: n.decreaseDecimal
});
y.displayName = "DecreaseDecimal";
export {
  y as DecreaseDecimal,
  g as IncreaseDecimal
};
