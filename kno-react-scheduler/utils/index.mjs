/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import "@progress/kno-date-math";
import { toGroupResources as h, toFlatGroupResources as D } from "../views/common/utils.mjs";
import { setter as y, getter as M } from "@progress/kno-react-common";
import { orderBy as E } from "@progress/kno-data-query";
const R = (r) => r[0], $ = (r) => r[r.length - 1], N = (r) => {
  const e = /* @__PURE__ */ new Set();
  return r.forEach((n) => {
    e.add(n.field);
  }), e.size === r.length;
};
function _(r, e, n, o, t = "all day") {
  const s = { skeleton: "yMMMMEEEEdhm" }, c = { skeleton: "yMMMMEEEEd" }, d = "t", i = e.getFullYear() === n.getFullYear() && e.getMonth() === n.getMonth() && e.getDate() === n.getDate();
  if (o) {
    const u = n.getHours() === 0 && n.getMinutes() === 0 && n.getSeconds() === 0 && n.getTime() - e.getTime() === 864e5;
    return i || u ? `${r.formatDate(e, c)} (${t})` : `${r.formatDate(e, c)} to ${r.formatDate(n, c)} (${t})`;
  }
  return i ? `${r.formatDate(e, s)}–${r.formatDate(n, d)}` : `${r.formatDate(e, s)}-${r.formatDate(n, s)}`;
}
const T = (r, e, n, o = 0) => {
  if (o === n)
    return null;
  let t = null;
  const s = document.elementFromPoint(r, e);
  if (!s)
    return t;
  if (s.getAttribute("data-slot") === "true")
    return s;
  const d = s.style.pointerEvents;
  return s.style.pointerEvents = "none", t = T(r, e, n, o + 1), s.style.pointerEvents = d, t;
}, l = (r, e) => M(e)(r), z = (r, e, n) => {
  if (e)
    return y(e)(r, n);
}, G = (r) => r != null;
function P(r) {
  return new Date(
    Date.UTC(
      r.getFullYear(),
      r.getMonth(),
      r.getDate(),
      r.getHours(),
      r.getMinutes(),
      r.getSeconds(),
      r.getMilliseconds()
    )
  );
}
const b = (r, e, n) => {
  const o = x(r, e) ? l(r, e.id) : l(r, e.recurrenceId);
  return n.find((t) => l(t, e.id) === o);
}, x = (r, e) => {
  const n = l(r, e.id), o = l(r, e.recurrenceId), t = l(r, e.recurrenceRule);
  return !!(n && t && o == null);
}, f = (r, e) => Math.max(r.getTime(), e.getTime()), m = (r, e) => Math.min(r.getTime(), e.getTime()), p = (r, e, n, o, t = !1) => t ? f(e, o) - m(r, n) <= e.getTime() - r.getTime() + (o.getTime() - n.getTime()) : f(e, o) - m(r, n) < e.getTime() - r.getTime() + (o.getTime() - n.getTime()), A = {
  id: "id",
  start: "start",
  startTimezone: "startTimezone",
  originalStart: "originalStart",
  end: "end",
  endTimezone: "endTimezone",
  isAllDay: "isAllDay",
  title: "title",
  description: "description",
  recurrenceRule: "recurrenceRule",
  recurrenceId: "recurrenceId",
  recurrenceExceptions: "recurrenceExceptions"
}, k = (r) => ({ fields: { ...A, ...r } }), w = (r, e, n) => (e.getHours() < r.getHours() || e.getHours() === r.getHours() && e.getMinutes() <= r.getMinutes()) && (r.getHours() < n.getHours() || n.getHours() === r.getHours() && r.getMinutes() < n.getMinutes()), B = (r, e, n) => e < n ? e <= r && r <= n : r <= n || e <= r, O = (r, e) => {
  const n = h(r, e), o = D(n);
  return o.length === 1 ? [
    {
      index: 0,
      // resources: []
      resources: (e || []).reduce(
        (t, s) => [
          ...t,
          ...s.data.map((c) => ({
            ...c,
            field: s.field,
            valueField: s.valueField,
            colorField: s.colorField,
            multiple: s.multiple
          }))
        ],
        []
      )
    }
  ] : o.map((t, s) => ({
    index: s,
    resources: t
  }));
}, F = (r) => r == null, Y = (r) => F(r) || r.trim && r.trim().length === 0, g = (r) => {
  let e = 0;
  const n = r.slice();
  return n.sort((o, t) => o - t).forEach((o, t) => {
    n[t] === t && (e = t + 1);
  }), e;
}, C = (r, e, n, o = !1) => {
  let t;
  return n.forEach((s) => {
    const c = [];
    e.sort((i, u) => i.props.start.getTime() - u.props.start.getTime()).forEach((i) => {
      if ((o || i.props.isAllDay === s.current.props.isAllDay) && i.props.range.index === s.current.props.range.index && i.props.group.index === s.current.props.group.index && p(i.props.start, i.props.end, s.current.props.start, s.current.props.end)) {
        const a = g(c);
        i === r && t === void 0 && (t = a), c.splice(a, 0, a);
      }
    });
  }), t;
}, U = (r, e) => {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((t) => {
    t._order !== void 0 && t._order !== null && n.add(t._order);
  }), g(Array.from(n));
}, j = (r, e, n = !1) => {
  r.forEach((t) => {
    t.order = null;
  }), e.forEach((t) => t.items.splice(0, t.items.length));
  const o = [...r].sort((t, s) => t.start.getTime() - s.start.getTime());
  e.forEach((t) => {
    const s = [];
    o.forEach((c) => {
      if ((n || c.isAllDay === t.isAllDay) && c.range.index === t.range.index && // When slotDuration equals a full day, both daySlots and timeSlots have isAllDay=true,
      // so we need to also check range.isAllDay to distinguish between them.
      (c.range.isAllDay === void 0 || t.range.isAllDay === void 0 || c.range.isAllDay === t.range.isAllDay) && c.group.index === t.group.index && p(c.start, c.end, t.start, t.end)) {
        if (c.order !== null && c.order !== void 0)
          s.includes(c.order) || (s.push(c.order), s.sort((i, u) => i - u));
        else {
          const i = g(s);
          c.order = i, s.push(i), s.sort((u, a) => u - a);
        }
        t.items.push(c);
      }
    });
  });
}, q = (r, e, n = !1) => {
  r.forEach((o) => o.slots.splice(0, o.slots.length)), r.forEach((o) => {
    e.forEach((t) => {
      (n || o.isAllDay === t.isAllDay) && o.range.index === t.range.index && // When slotDuration equals a full day, both daySlots and timeSlots have isAllDay=true,
      // so we need to also check range.isAllDay to distinguish between them.
      (o.range.isAllDay === void 0 || t.range.isAllDay === void 0 || o.range.isAllDay === t.range.isAllDay) && o.group.index === t.group.index && p(o.start, o.end, t.start, t.end) && o.slots.push(t);
    });
  });
}, J = (...r) => {
}, K = (r) => {
  const e = r.props.items.find((n) => n.order === 0) || r.props.items[0];
  return e && e._ref.current;
}, L = (r, e, n = !1, o = !1) => {
  const t = r.current;
  if (!t || !e)
    return null;
  const s = e.filter((u) => u.current !== null && u.current.element !== null), c = E(s, [
    { field: "current.props.group.index", dir: "asc" },
    { field: "current.props.range.index", dir: "asc" },
    n ? { field: "" } : { field: "current.props.isAllDay", dir: "desc" },
    { field: "current.props.start", dir: "asc" }
  ]), d = c.findIndex(
    (u) => u.current !== null && !!(u.current.props.uid === t.props.uid && (u.current.props.occurrenceId === void 0 || u.current.props.occurrenceId === t.props.occurrenceId) && u.current.props.group.index === t.props.group.index && u.current.props.range.index === t.props.range.index && (n || u.current.props.isAllDay === t.props.isAllDay))
  );
  return c[d + (o ? -1 : 1)];
}, Q = (r, e) => (r.order || 0) - (e.order || 0);
export {
  C as calculateOrder,
  U as calculateProportionalOrder,
  A as defaultModelFields,
  K as findFirstItem,
  b as findMaster,
  g as findMissing,
  L as findNextItem,
  R as first,
  _ as formatEventTime,
  l as getField,
  k as getModelFields,
  p as intersects,
  F as isBlank,
  N as isGroupped,
  B as isInDaysRange,
  w as isInTimeRange,
  x as isMaster,
  Y as isNullOrEmptyString,
  G as isPresent,
  $ as last,
  q as mapItemsToSlots,
  j as mapSlotsToItems,
  J as noop,
  Q as orderSort,
  z as setField,
  T as slotDive,
  O as toSchedulerGroups,
  P as toUTCDateTime
};
