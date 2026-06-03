/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as e from "react";
import { GridContext as a } from "./utils/GridContext.mjs";
import { fileCsvIcon as l } from "@progress/kno-svg-icons";
import { classNames as C } from "@progress/kno-react-common";
import { useLocalization as f } from "@progress/kno-react-intl";
import { exportCSV as i, messages as u } from "./messages/index.mjs";
import { Button as v } from "@progress/kno-react-buttons";
const N = (t) => {
  const n = f(), c = e.useContext(a), r = (m) => {
    c.exportAsCsv(), t.onClick && t.onClick.call(void 0, m);
  }, s = C("k-grid-csv", t.className), o = n.toLanguageString(i, u[i]);
  return /* @__PURE__ */ e.createElement(
    v,
    {
      title: o,
      type: "button",
      ...t,
      icon: "file-csv",
      svgIcon: l,
      className: s,
      onClick: r
    },
    t.children || o
  );
};
export {
  N as GridCsvExportButton
};
