/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as o from "react";
import { useLocalization as m } from "@progress/kno-react-intl";
import { clear as t, messages as i } from "../messages/index.mjs";
import { useUnstyled as u, classNames as p, uDropDownsBase as f, IconWrap as d } from "@progress/kno-react-common";
import { xIcon as D } from "@progress/kno-svg-icons";
const k = (n) => {
  const a = m(), e = u(), s = e && e.uDropDownsBase, r = a.toLanguageString(t, i[t]), c = (l) => l.preventDefault();
  return /* @__PURE__ */ o.createElement(
    "span",
    {
      className: p(f.clearButton({ c: s })),
      onClick: n.onClick,
      onMouseDown: c,
      tabIndex: -1,
      title: r,
      key: "clearbutton"
    },
    /* @__PURE__ */ o.createElement(d, { name: "x", icon: D })
  );
};
export {
  k as default
};
