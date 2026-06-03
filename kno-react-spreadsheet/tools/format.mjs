/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as o from "react";
import { DropDownButton as s } from "@progress/kno-react-buttons";
import { customFormatIcon as i } from "@progress/kno-svg-icons";
import { FORMATS as p } from "./utils.mjs";
import { IconWrap as f } from "@progress/kno-react-common";
import { useLocalization as l } from "@progress/kno-react-intl";
import { keys as e, messages as u } from "../messages.mjs";
const d = (r) => {
  const { spreadsheetRef: t } = r, m = o.useCallback((n) => {
    const a = n.item.value || null;
    setTimeout(() => {
      if (t.current) {
        const c = {
          command: "PropertyChangeCommand",
          options: { property: "format", value: a }
        };
        t.current.executeCommand(c);
      }
    }, 0);
  }, []);
  return /* @__PURE__ */ o.createElement(
    s,
    {
      icon: "custom-format",
      svgIcon: i,
      fillMode: "flat",
      onItemClick: m,
      items: p,
      title: l().toLanguageString(e.format, u[e.format]),
      text: /* @__PURE__ */ o.createElement(f, { name: "chevron-down" })
    }
  );
};
d.displayName = "Format";
export {
  d as Format
};
