/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as e from "react";
import B from "prop-types";
import { BaseView as Z } from "../../components/BaseView.mjs";
import { VerticalResourceIterator as R } from "../common/VerticalResourceIterator.mjs";
import { dateTitle as C, messages as d, timeTitle as z, eventTitle as A, allDay as L, noEvents as _, agendaViewTitle as M } from "../../messages/index.mjs";
import { DAYS_IN_WEEK_COUNT as G } from "../../constants/index.mjs";
import { ZonedDate as N, firstDayInWeek as j, MS_PER_DAY as V, getDate as W, addDays as q } from "@progress/kno-date-math";
import { useDir as H, classNames as J, IconWrap as I } from "@progress/kno-react-common";
import { useInternationalization as Q, useLocalization as X } from "@progress/kno-react-intl";
import { toRanges as ee } from "../../services/rangeService.mjs";
import { toOccurrences as te } from "../../services/occurrenceService.mjs";
import { toItems as ae } from "../../services/itemsService.mjs";
import { mapItemsToSlots as re, mapSlotsToItems as le, toUTCDateTime as b } from "../../utils/index.mjs";
import { SchedulerEditTask as oe } from "../../tasks/SchedulerEditTask.mjs";
import { SchedulerEditSlot as ce } from "../../slots/SchedulerEditSlot.mjs";
import { useSchedulerPropsContext as ne, useSchedulerDataContext as se, useSchedulerGroupsContext as me, useSchedulerFieldsContext as ie, useSchedulerDateRangeContext as de } from "../../context/SchedulerContext.mjs";
import { SchedulerResourceIteratorContext as x } from "../../context/SchedulerResourceIteratorContext.mjs";
import { chevronRightIcon as F, chevronLeftIcon as P } from "@progress/kno-svg-icons";
import { toSlots as ue } from "../../services/slotsService.mjs";
import { useCellSync as U } from "../../hooks/useCellSync.mjs";
const K = (t) => {
  const { group: r, timezone: a, resources: m } = ne(), f = t.editTask || oe, D = t.editSlot || ce, i = e.useRef(null), c = H(i), n = Q(), s = X(), [T] = se(), S = me(), p = ie(), l = de(), u = e.useMemo(
    () => ee(l, { step: V, timezone: a }),
    [l.start.getTime(), l.end.getTime(), a]
  ), g = e.useMemo(
    () => ue(l, { step: V }, { groups: S, ranges: u }),
    [l.start.getTime(), l.end.getTime(), a, S, u]
  ), y = e.useMemo(
    () => te(T, { dateRange: l, fields: p, timezone: a }),
    [T, l.start.getTime(), l.end.getTime(), p, a]
  ), h = e.useMemo(
    () => ae(y, { timezone: a }, { groups: S, ranges: u }),
    [y, a, S, u]
  ), O = e.useMemo(() => J("k-scheduler-agendaview", t.className), [t.className]);
  return U({ element: i, selector: ".k-scheduler-datecolumn", explicitDepth: !1 }), U({ element: i, selector: ".k-scheduler-timecolumn", explicitDepth: !1 }), e.useMemo(() => re(h, g, !0), [h, g]), e.useMemo(() => le(h, g, !0), [h, g]), /* @__PURE__ */ e.createElement(
    Z,
    {
      ref: i,
      id: t.id,
      style: t.style,
      className: O,
      props: t,
      slots: h,
      ranges: u
    },
    /* @__PURE__ */ e.createElement("div", { className: "k-scheduler-head" }, /* @__PURE__ */ e.createElement(R, { resources: m, group: r }, /* @__PURE__ */ e.createElement(x.Consumer, null, ({ groupIndex: k }) => /* @__PURE__ */ e.createElement("div", { className: "k-scheduler-row", key: k }, /* @__PURE__ */ e.createElement("div", { className: "k-scheduler-cell k-heading-cell k-group-cell k-scheduler-datecolumn" }, s.toLanguageString(C, d[C])), /* @__PURE__ */ e.createElement("div", { className: "k-scheduler-cell k-heading-cell k-group-cell k-scheduler-timecolumn" }, s.toLanguageString(z, d[z])), /* @__PURE__ */ e.createElement("div", { className: "k-scheduler-cell k-heading-cell k-scheduler-eventcolumn" }, s.toLanguageString(A, d[A])))))),
    /* @__PURE__ */ e.createElement("div", { className: "k-scheduler-body" }, /* @__PURE__ */ e.createElement(R, { resources: m, group: r, nested: !0 }, /* @__PURE__ */ e.createElement(x.Consumer, null, ({ groupIndex: k }) => g.filter((o) => o.group.index === (k || 0)).map((o, v, Y) => /* @__PURE__ */ e.createElement(
      "div",
      {
        className: "k-scheduler-row  k-scheduler-content",
        key: `${k}:${v}`
      },
      /* @__PURE__ */ e.createElement(
        D,
        {
          ...o,
          editable: t.editable,
          row: Y.length * (k || 0) + v,
          col: 0,
          slot: t.slot,
          viewSlot: t.viewSlot,
          className: "k-scheduler-datecolumn k-group-cell"
        },
        /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement("strong", { className: "k-scheduler-agendaday" }, n.formatDate(o.zonedStart, "dd")), /* @__PURE__ */ e.createElement("em", { className: "k-scheduler-agendaweek" }, n.formatDate(o.zonedStart, "EEEE")), /* @__PURE__ */ e.createElement("span", { className: "k-scheduler-agendadate" }, n.formatDate(o.zonedStart, "y")))
      ),
      /* @__PURE__ */ e.createElement("div", { className: "k-scheduler-cell k-group-content" }, o.items.length ? o.items.map((E, w) => /* @__PURE__ */ e.createElement("div", { className: "k-scheduler-row", key: w }, /* @__PURE__ */ e.createElement("div", { className: "k-scheduler-cell k-scheduler-timecolumn" }, /* @__PURE__ */ e.createElement("div", null, E.tail && /* @__PURE__ */ e.createElement(
        I,
        {
          name: c === "rtl" ? "chevron-right" : "chevron-left",
          icon: c === "rtl" ? F : P
        }
      ), E.isAllDay ? s.toLanguageString(
        L,
        d[L]
      ) : ge(n, E), E.head && /* @__PURE__ */ e.createElement(
        I,
        {
          name: c === "rtl" ? "chevron-left" : "chevron-right",
          icon: c === "rtl" ? P : F
        }
      ))), /* @__PURE__ */ e.createElement("div", { className: "k-scheduler-cell" }, /* @__PURE__ */ e.createElement(
        f,
        {
          key: `${v}:${w}`,
          ...E,
          onDataAction: t.onDataAction,
          task: t.task,
          viewTask: t.viewTask,
          editable: t.editable
        }
      )))) : /* @__PURE__ */ e.createElement("div", { className: "k-scheduler-cell k-heading-cell k-group-cell" }, s.toLanguageString(_, d[_])))
    )))))
  );
}, ge = (t, r) => {
  let a = "{0:t}-{1:t}";
  return r.head ? a = "{0:t}" : r.tail && (a = "{1:t}"), t.format(a, r.zonedStart, r.zonedEnd);
}, $ = (t) => W(t), he = (t, r) => W(q(t, r || 1)), ke = ({ intl: t, date: r, numberOfDays: a = 1, timezone: m }) => {
  const f = N.fromLocalDate(r, m), D = $(a === G ? j(f, t.firstDay()) : f), i = he(D, a), c = N.fromUTCDate(b(D), m), n = N.fromUTCDate(b(i), m), s = new Date(c.getTime()), T = new Date(n.getTime());
  return {
    start: s,
    end: T,
    zonedStart: c,
    zonedEnd: n
  };
}, xe = {
  name: "agenda",
  title: (t) => t.toLanguageString(M, d[M]),
  dateRange: ke,
  selectedDateFormat: "{0:D} - {1:D}",
  selectedShortDateFormat: "{0:d} - {1:d}",
  slotDuration: 1440,
  slotDivision: 1,
  numberOfDays: G
}, Ee = {
  title: B.any
};
K.propTypes = Ee;
K.displayName = "KendoReactSchedulerAgendaView";
export {
  K as AgendaView,
  xe as agendaViewDefaultProps
};
