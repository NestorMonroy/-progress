/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as I from "react";
import { useLocalization as k } from "@progress/kno-react-intl";
import { classNames as v, uCalendar as x } from "@progress/kno-react-common";
import { Button as R } from "@progress/kno-react-buttons";
import { getDate as s } from "@progress/kno-date-math";
import { today as m, messages as T } from "../../messages/index.mjs";
import { MIN_DATE as D, MAX_DATE as E, isInRange as M, getToday as r, dateInRange as N } from "../../utils.mjs";
const i = {
  min: D,
  max: E
}, P = (l) => {
  const {
    min: a = i.min,
    max: o = i.max,
    onClick: t,
    disabled: c,
    tabIndex: d,
    unstyled: e
  } = l, f = (n) => {
    if (M(r(), s(a), s(o)) && t) {
      const p = {
        syntheticEvent: n,
        nativeEvent: n.nativeEvent,
        value: N(r(), a, o),
        target: null,
        isTodayClick: !0
      };
      t(p);
    }
  }, g = k(), u = e && e.uCalendar, C = g.toLanguageString(m, T[m]), y = v(x.today({ c: u, disabled: c }));
  return /* @__PURE__ */ I.createElement(
    R,
    {
      className: y,
      onClick: f,
      tabIndex: d,
      fillMode: "flat",
      themeColor: "base",
      role: "link"
    },
    C
  );
};
export {
  P as TodayCommand,
  i as todayCommandDefaultProps
};
