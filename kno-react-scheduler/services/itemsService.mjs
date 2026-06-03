/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as f from "react";
import { intersects as h } from "../utils/index.mjs";
import { orderBy as v } from "@progress/kno-data-query";
import { ZonedDate as m } from "@progress/kno-date-math";
const S = (i, { timezone: t }, { groups: l, ranges: a }) => {
  const s = [];
  return v(i, [
    { field: "start", dir: "asc" },
    { field: "end", dir: "desc" },
    { field: "isAllDay", dir: "desc" },
    { field: "title", dir: "asc" },
    { field: "uid", dir: "asc" }
  ]).forEach((d) => {
    l.forEach((o) => {
      const n = l.length === 1 ? A(d, o) : o;
      E(d, n) && a.forEach((e) => {
        if (F(d, e)) {
          const r = f.createRef(), p = f.createRef(), D = e.end < d.end, R = d.start < e.start, u = m.fromLocalDate(d.start, t), y = m.fromLocalDate(d.end, t), I = {
            ...d,
            _ref: p,
            itemRef: r,
            head: D,
            tail: R,
            order: null,
            zonedStart: u,
            zonedEnd: y,
            group: n,
            range: e,
            slots: [],
            isRecurring: !!d.recurrenceRule,
            isException: !d.recurrenceRule && d.recurrenceId !== null && d.recurrenceId !== void 0,
            isAllDay: !!d.isAllDay
          };
          s.push(I);
        }
      });
    });
  }), s;
}, A = (i, t) => ({
  index: 0,
  resources: t.resources.filter((l) => B(i, l))
}), B = (i, t) => t.multiple ? (i.dataItem[t.field] || []).some((l) => t[t.valueField] === l) : i.dataItem[t.field] === t[t.valueField], E = (i, t) => !t.resources.some(
  (l) => l.multiple ? !i.dataItem[l.field].some((a) => l[l.valueField] === a) : i.dataItem[l.field] !== l[l.valueField]
), F = (i, t) => h(t.start, t.end, i.start, i.end) && (t.isAllDay === void 0 || !!i.isAllDay == !!t.isAllDay);
export {
  E as inGroup,
  F as inRange,
  S as toItems
};
