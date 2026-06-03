/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as e from "react";
import { clearCssIcon as a } from "@progress/kno-svg-icons";
import { Button as m } from "@progress/kno-react-buttons";
import { useLocalization as c } from "@progress/kno-react-intl";
import { keys as o, messages as s } from "../messages.mjs";
const u = (n) => {
  const { spreadsheetRef: t } = n, r = e.useCallback(() => {
    t.current && t.current.executeCommand({ command: "PropertyCleanCommand" });
  }, []);
  return /* @__PURE__ */ e.createElement(
    m,
    {
      type: "button",
      icon: "clean-css",
      svgIcon: a,
      fillMode: "flat",
      onClick: r,
      title: c().toLanguageString(o.cleanFormatting, s[o.cleanFormatting])
    }
  );
};
export {
  u as CleanFormatting
};
