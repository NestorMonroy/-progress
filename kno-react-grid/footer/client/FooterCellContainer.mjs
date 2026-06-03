/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";
import * as l from "react";
import { useTableKeyboardNavigation as s } from "@progress/kno-react-data-tools";
import { GridContext as c } from "../../utils/GridContext.mjs";
import { cloneReactElement as n } from "../../utils/index.mjs";
const d = (t) => {
  const e = l.useContext(c), o = s(t.id), r = e.getCellPositionStyle(t.column), i = {
    ...o,
    style: { ...r }
  };
  return t.isCustom && (e.isClient || t.isClient) ? n(t.children, {
    tdProps: { ...t.tdProps, ...i },
    ...o
  }) : n(t.children, {
    ...i
  });
};
export {
  d as FooterCellContainer
};
