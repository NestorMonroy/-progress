/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { TextBox as h, InputPrefix as g } from "@progress/kno-react-inputs";
import * as o from "react";
import { GridContext as f } from "./utils/GridContext.mjs";
import { searchIcon as x } from "@progress/kno-svg-icons";
import { classNames as d, SvgIcon as C } from "@progress/kno-react-common";
import { useGridState as p } from "./GridState.mjs";
import { getStringFromSearch as u } from "@progress/kno-react-data-tools";
import { useLocalization as S } from "@progress/kno-react-intl";
import { searchboxPlaceholder as r, messages as z } from "./messages/index.mjs";
const L = (e) => {
  const a = S(), n = o.useContext(f), [c] = p(), i = (t) => {
    n.searchChange(t), e.onChange && e.onChange.call(void 0, t);
  }, m = u(c.search), s = d("k-grid-search", "k-searchbox", e.className), l = a.toLanguageString(r, z[r]);
  return /* @__PURE__ */ o.createElement(
    h,
    {
      placeholder: l,
      value: m,
      prefix: () => /* @__PURE__ */ o.createElement(g, { orientation: "horizontal" }, /* @__PURE__ */ o.createElement(C, { icon: x })),
      ...e,
      className: s,
      onChange: i
    }
  );
};
export {
  L as GridSearchBox
};
