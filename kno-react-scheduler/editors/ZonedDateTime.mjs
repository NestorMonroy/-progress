/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as a from "react";
import { DateTimePicker as g } from "@progress/kno-react-dateinputs";
import { toLocalDate as D, ZonedDate as s } from "@progress/kno-date-math";
import { useSchedulerPropsContext as f } from "../context/SchedulerContext.mjs";
const F = (t) => {
  const { as: o = u.as, value: e, onChange: n, ...c } = t, { timezone: r } = f(), i = a.useMemo(() => d(e, r), [e, r]), l = (m) => {
    n && n({ value: C(m.target.value, r) });
  };
  return /* @__PURE__ */ a.createElement(o, { ...c, value: i, onChange: l });
}, d = (t, o) => {
  if (t) {
    if (!o)
      return t;
    const e = D(s.fromLocalDate(t, o).toUTCDate());
    return e.setUTCFullYear(t.getFullYear()), e;
  }
  return t;
}, C = (t, o) => {
  if (t) {
    if (!o)
      return t;
    const e = new Date(
      Date.UTC(
        t.getFullYear(),
        t.getMonth(),
        t.getDate(),
        t.getHours(),
        t.getMinutes(),
        t.getSeconds(),
        t.getMilliseconds()
      )
    );
    return e.setUTCFullYear(t.getFullYear()), s.fromUTCDate(e, o).toLocalDate();
  }
  return t;
}, u = {
  as: g
};
export {
  F as ZonedDateTime
};
