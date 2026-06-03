/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as e from "react";
import { classNames as a } from "@progress/kno-react-common";
import { ListViewItemContext as m } from "./ListViewItemContext.mjs";
const c = (i) => {
  const { children: s, style: o, className: r } = i, t = e.useContext(m);
  return /* @__PURE__ */ e.createElement(
    "div",
    {
      role: "listitem",
      style: o,
      className: a("k-listview-item", r),
      "aria-posinset": t ? t.index + 1 : void 0,
      "aria-setsize": t ? t.totalCount : void 0
    },
    s
  );
};
export {
  c as ListViewItemWrapper
};
