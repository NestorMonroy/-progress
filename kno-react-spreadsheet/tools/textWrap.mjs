/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as r from "react";
import { Button as s } from "@progress/kno-react-buttons";
import { textWrapArrowIcon as i } from "@progress/kno-svg-icons";
import { useLocalization as m } from "@progress/kno-react-intl";
import { keys as o, messages as l } from "../messages.mjs";
const u = (a) => {
  const { value: n, spreadsheetRef: t } = a, c = r.useCallback(() => {
    if (t.current) {
      const e = t.current.activeSheet();
      if (e) {
        const p = {
          command: "TextWrapCommand",
          options: { property: "wrap", value: !e.range(e.activeCell()).wrap() }
        };
        t.current.executeCommand(p);
      }
    }
  }, []);
  return /* @__PURE__ */ r.createElement(
    s,
    {
      type: "button",
      togglable: !0,
      icon: "text-wrap-arrow",
      svgIcon: i,
      fillMode: "flat",
      title: m().toLanguageString(o.textWrap, l[o.textWrap]),
      onClick: c,
      selected: n
    }
  );
};
u.displayName = "TextWrap";
export {
  u as TextWrap
};
