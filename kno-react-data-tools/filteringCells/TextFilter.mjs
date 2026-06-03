/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";
import * as e from "react";
import { createFilterComponent as o } from "./FilterComponent.mjs";
import { Input as r } from "@progress/kno-react-inputs";
import { DropDownList as n } from "@progress/kno-react-dropdowns";
const m = {
  inputComponent: (t) => /* @__PURE__ */ e.createElement(r, { ...t }),
  operatorComponent: (t) => /* @__PURE__ */ e.createElement(n, { ...t }),
  emptyFilter: { operator: "contains", value: "" }
};
class l extends o(m) {
}
export {
  l as TextFilterCell
};
