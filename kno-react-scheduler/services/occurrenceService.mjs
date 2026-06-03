/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { clone as p, getter as t } from "@progress/kno-react-common";
import { parseRule as m, expand as E } from "@progress/kno-recurrence";
import { ZonedDate as d } from "@progress/kno-date-math";
import { isMaster as S, setField as l } from "../utils/index.mjs";
const F = (e, { dateRange: r, fields: n, timezone: a }) => e.map(z(n)).reduce(I(r, a, n), []).filter((o) => !S(o.dataItem, n)), z = (e) => (r) => ({
  uid: t(e.id || "id")(r),
  start: t(e.start || "start")(r),
  startTimezone: t(e.startTimezone || "startTimezone")(r),
  originalStart: t(e.originalStart || "originalStart")(r),
  end: t(e.end || "end")(r),
  endTimezone: t(e.endTimezone || "endTimezone")(r),
  isAllDay: t(e.isAllDay || "isAllDay")(r),
  title: t(e.title || "title")(r),
  description: t(e.description || "description")(r),
  occurrenceId: t("occurrenceId")(r),
  recurrenceRule: t(e.recurrenceRule || "recurrenceRule")(r),
  recurrenceExceptions: t(e.recurrenceExceptions || "recurrenceExceptions")(r),
  recurrenceId: t(e.recurrenceId || "recurrenceId")(r),
  dataItem: p(r)
}), I = (e, r, n) => (a, c) => [
  ...a,
  ...c.recurrenceRule && (c.recurrenceId === null || c.recurrenceId === void 0) && S(c.dataItem, n) ? [...T(c, { dateRange: e, timezone: r, fields: n })] : [c]
], T = (e, { dateRange: r, timezone: n, fields: a }) => {
  const c = e.recurrenceRule, o = m({ recurrenceRule: c });
  if (!o)
    return [];
  o.start || (o.start = d.fromLocalDate(e.start, n)), o.end || (o.end = d.fromLocalDate(e.end, n));
  const D = e.recurrenceExceptions;
  D && (o.exceptionDates = D.map((u) => d.fromLocalDate(u, n)));
  const x = r.zonedStart, L = r.zonedEnd, g = E(o, {
    rangeStart: x,
    rangeEnd: L
  });
  return g.events.length ? g.events.map((u, R) => {
    const s = p(e), i = p(e.dataItem);
    return s.recurrenceId = s.uid, l(i, a.recurrenceId, e.uid), s.originalStart = u.start.toLocalDate(), l(i, a.originalStart, u.start.toLocalDate()), s.start = u.start.toLocalDate(), l(i, a.start, u.start.toLocalDate()), s.end = u.end.toLocalDate(), l(i, a.end, u.end.toLocalDate()), s.occurrenceId = String(R), l(i, "occurrenceId", String(R)), s.dataItem = i, s;
  }) : [];
};
export {
  F as toOccurrences
};
