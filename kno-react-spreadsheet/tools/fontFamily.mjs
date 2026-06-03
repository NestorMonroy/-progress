/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as t from "react";
import { DropDownList as l } from "@progress/kno-react-dropdowns";
import { DEFAULT_FONT_FAMILY as s, FONT_FAMILIES as f } from "./utils.mjs";
import { useLocalization as p } from "@progress/kno-react-intl";
import { keys as o, messages as u } from "../messages.mjs";
const c = (a) => {
  const { spreadsheetRef: e, value: n } = a, r = t.useCallback((m) => {
    if (e.current) {
      const i = {
        command: "PropertyChangeCommand",
        options: { property: "fontFamily", value: m.value || null }
      };
      e.current.executeCommand(i);
    }
  }, []);
  return /* @__PURE__ */ t.createElement(
    l,
    {
      onChange: r,
      value: n,
      data: f,
      defaultValue: s,
      fillMode: "flat",
      title: p().toLanguageString(o.fontName, u[o.fontName]),
      leftRightKeysNavigation: !1
    }
  );
};
c.displayName = "FontFamily";
export {
  c as FontFamily
};
