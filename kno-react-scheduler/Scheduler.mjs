/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as a from "react";
import n from "prop-types";
import { getModelFields as Oe, toSchedulerGroups as We, findMaster as y, setField as d, getField as s } from "./utils/index.mjs";
import { validatePackage as Ne, getLicenseMessage as Pe, useWebMcpRegister as He, useRtl as ze, clone as b, classNames as _e, WatermarkOverlay as Be } from "@progress/kno-react-common";
import { SchedulerContext as Ue } from "./context/SchedulerContext.mjs";
import { useControlledState as W } from "./hooks/useControlledState.mjs";
import { useInternationalization as Ge, useLocalization as Ke } from "@progress/kno-react-intl";
import { SchedulerHeader as Ze } from "./components/header/SchedulerHeader.mjs";
import { SchedulerNavigation as se } from "./components/header/navigation/SchedulerNavigation.mjs";
import { SchedulerViewSelector as je } from "./components/header/view-selector/SchedulerViewSelector.mjs";
import { addMonths as Y, addDays as $, ZonedDate as qe } from "@progress/kno-date-math";
import { SchedulerFooter as Je } from "./components/footer/SchedulerFooter.mjs";
import { ButtonGroup as Qe, Button as R, ToolbarSpacer as Xe } from "@progress/kno-react-buttons";
import { today as ee, messages as T, previousTitle as te, nextTitle as re, showFullDay as ae, showWorkDay as ne } from "./messages/index.mjs";
import { NavigationDatePicker as Ye } from "./components/header/navigation/NavigationDatePicker.mjs";
import { ViewSelectorList as $e } from "./components/header/view-selector/ViewSelectorList.mjs";
import { BusinessHours as et } from "./components/footer/bussiness-hours/BussinessHours.mjs";
import { DayView as P, dayViewDefaultProps as tt } from "./views/day/DayView.mjs";
import { packageMetadata as oe } from "./package-metadata.mjs";
import { chevronRightIcon as le, chevronLeftIcon as ce, clockIcon as rt } from "@progress/kno-svg-icons";
import { DATA_ACTION as N } from "./constants/index.mjs";
import { AgendaView as at, agendaViewDefaultProps as nt } from "./views/agenda/AgendaView.mjs";
import { MonthView as ot, monthViewDefaultProps as lt } from "./views/month/MonthView.mjs";
import { WeekView as ct, weekViewDefaultProps as st } from "./views/week/WeekView.mjs";
import { WorkWeekView as it, workWeekDefaultProps as ut } from "./views/week/WorkWeekView.mjs";
import { TimelineView as dt, timeLineViewDefaultProps as mt } from "./views/time/TimelineView.mjs";
const gt = "{0:D}", ht = "{0:d}", ft = "application", k = /* @__PURE__ */ new Map();
k.set(at, nt);
k.set(P, tt);
k.set(ot, lt);
k.set(ct, st);
k.set(it, ut);
k.set(dt, mt);
const ie = a.forwardRef((r, ue) => {
  var J, Q, X;
  const de = !Ne(oe, { component: "Scheduler" }), me = Pe(oe), { timezone: V, onDataChange: M } = r, g = a.useRef(null), p = a.useRef(null);
  a.useImperativeHandle(p, () => ({ props: r, element: g.current })), a.useImperativeHandle(ue, () => p.current), He("scheduler", p, r, r.webMcp);
  const v = ze(g), A = Ge(), C = Ke(), { fields: t } = a.useMemo(() => Oe(r.modelFields), [r.modelFields]), [D, h] = W(
    r.defaultDate || f.defaultDate,
    r.date,
    r.onDateChange
  ), x = a.Children.toArray(r.children || []).map(
    (e) => {
      var l;
      return a.isValidElement(e) ? a.cloneElement(e, { ...k.get(e.type), ...(l = e.props) != null ? l : {} }) : e;
    }
  ), ge = a.cloneElement(/* @__PURE__ */ a.createElement(P, null), k.get(P)), [H, z] = W(
    r.defaultView || x[0] && x[0].props.name || "day",
    r.view,
    r.onViewChange
  ), [S, _] = W(!0), i = x.find((e) => e.props.name === H) || x[0] || ge, w = ((J = r.data) != null ? J : f.data) || f.data, he = We(r.group, r.resources), fe = r.group && r.group.orientation ? r.group.orientation : "horizontal", pe = i.props.selectedDateFormat || gt, De = i.props.selectedShortDateFormat || ht, B = i.props.slotDuration, we = i.props.dateRange !== void 0 ? typeof i.props.dateRange == "function" ? i.props.dateRange.call(void 0, {
    intl: A,
    date: D,
    timezone: V,
    numberOfDays: i.props.numberOfDays,
    workWeekStart: i.props.workWeekStart || A.firstDay(),
    workWeekEnd: i.props.workWeekEnd || (A.firstDay() + i.props.numberOfDays) % 6
  }) : i.props.dateRange : { start: f.defaultDate, end: f.defaultDate }, E = a.useCallback(
    ({
      created: e = [],
      updated: l = [],
      deleted: m = []
    }) => {
      if (M) {
        const o = {
          created: e,
          updated: l,
          deleted: m
        };
        M.call(void 0, o);
      }
    },
    [M]
  ), U = a.useCallback(
    (e) => {
      const l = [e.dataItem];
      E({ created: l });
    },
    [E]
  ), G = a.useCallback(
    (e) => {
      const l = [], m = [];
      if (e.series)
        if (Array.isArray(e.dataItem))
          e.dataItem.forEach((o) => {
            const c = b(y(e.dataItem, t, w)), u = b(o);
            d(u, t.originalStart, s(c, t.originalStart)), d(u, t.recurrenceId, s(c, t.recurrenceId)), d(
              u,
              t.recurrenceExceptions,
              s(c, t.recurrenceExceptions)
            ), m.push(u);
          });
        else {
          const o = b(y(e.dataItem, t, w)), c = b(e.dataItem);
          d(c, t.originalStart, s(o, t.originalStart)), d(c, t.recurrenceId, s(o, t.recurrenceId)), d(
            c,
            t.recurrenceExceptions,
            s(o, t.recurrenceExceptions)
          ), m.push(c);
        }
      else if (Array.isArray(e.dataItem))
        e.dataItem.forEach((o) => {
          const c = s(o, t.recurrenceRule) !== null && s(o, t.recurrenceRule) !== void 0;
          if (s(o, t.recurrenceId) !== null && s(o, t.recurrenceId) !== void 0 && c) {
            const I = b(y(o, t, w)), O = s(o, t.originalStart), Le = s(I, t.recurrenceExceptions) || [];
            d(I, t.recurrenceExceptions, [...Le, O]), d(o, t.recurrenceRule, null), m.push(I), l.push(o);
          } else
            m.push(o);
        });
      else {
        const o = s(e.dataItem, t.recurrenceRule) !== null && s(e.dataItem, t.recurrenceRule) !== void 0;
        if (s(e.dataItem, t.recurrenceId) !== null && s(e.dataItem, t.recurrenceId) !== void 0 && o) {
          const u = b(y(e.dataItem, t, w)), I = s(e.dataItem, t.originalStart), O = s(u, t.recurrenceExceptions) || [];
          d(u, t.recurrenceExceptions, [...O, I]), d(e.dataItem, t.recurrenceRule, null), m.push(u), l.push(e.dataItem);
        } else
          m.push(e.dataItem);
      }
      E({ updated: m, created: l });
    },
    [E, t, w]
  ), K = a.useCallback(
    (e) => {
      const l = [], m = [];
      if (e.series) {
        const o = b(y(e.dataItem, t, w)), c = b(e.dataItem);
        d(c, t.originalStart, s(o, t.originalStart)), d(c, t.recurrenceId, s(o, t.recurrenceId)), d(c, t.recurrenceRule, s(o, t.recurrenceRule)), d(c, t.recurrenceExceptions, s(o, t.recurrenceExceptions)), m.push(c);
      } else if (!(s(e.dataItem, t.recurrenceRule) !== null && s(e.dataItem, t.recurrenceRule) !== void 0))
        m.push(e.dataItem);
      else {
        const c = b(y(e.dataItem, t, w)), u = s(e.dataItem, t.originalStart), I = s(c, t.recurrenceExceptions) || [];
        d(c, t.recurrenceExceptions, [...I, u]), d(e.dataItem, t.recurrenceRule, null), l.push(c);
      }
      E({ updated: l, deleted: m });
    },
    [E, t, w]
  ), Z = a.useCallback(
    (e) => {
      switch (e.type) {
        case N.create:
          U(e);
          break;
        case N.update:
          G(e);
          break;
        case N.remove:
          K(e);
          break;
      }
    },
    [U, K, G]
  ), be = a.useCallback(
    (e, l) => {
      z(e, {
        ...l,
        target: p.current
      });
    },
    [z, p]
  ), ke = a.useCallback(
    (e, l) => {
      h(e, {
        ...l,
        target: p.current
      });
    },
    [h, p]
  ), ve = a.useCallback(
    (e) => {
      e.value && h(e.value, {
        ...e,
        target: p.current,
        nativeEvent: e.nativeEvent
      });
    },
    [h, p]
  ), Ie = a.useCallback(
    (e) => {
      var c, u;
      e.preventDefault();
      const l = (u = (c = i.props.step) != null ? c : i.props.numberOfDays) != null ? u : 1, o = l > 27 ? Y(D, Math.round(l / 27)) : $(D, l);
      h(o, e);
    },
    [D, h, i.props.numberOfDays, i.props.step]
  ), Ee = a.useCallback(
    (e) => {
      var c, u;
      e.preventDefault();
      const l = (u = (c = i.props.step) != null ? c : i.props.numberOfDays) != null ? u : 1, o = l > 27 ? Y(D, -Math.round(l / 27)) : $(D, -l);
      h(o, e);
    },
    [D, h, i.props.numberOfDays, i.props.step]
  ), ye = a.useCallback(
    (e) => {
      e.preventDefault();
      const l = qe.fromLocalDate(/* @__PURE__ */ new Date(), V);
      h(new Date(l.getTime()), e);
    },
    [h, V]
  ), xe = a.useCallback(() => {
    _(!S);
  }, [_, S]), Se = a.useCallback(() => {
    g.current && (g.current.style.boxShadow = "0 0.5px 0.5px 0.5px rgba(0, 0, 0, .12)");
  }, [g]), Ce = a.useCallback(() => {
    g.current && (g.current.style.boxShadow = "");
  }, [g]), Re = a.useMemo(
    () => {
      var e;
      return { ...r.style, height: (e = r.height) != null ? e : f.height };
    },
    [r.height, r.style]
  ), Te = a.useMemo(
    () => _e(
      { "k-rtl": r.rtl !== void 0 ? r.rtl : v === "rtl" },
      "k-scheduler",
      r.className
    ),
    [r.className, r.rtl, v]
  ), F = C.toLanguageString(ee, T[ee]), j = C.toLanguageString(te, T[te]), q = C.toLanguageString(re, T[re]), Ve = i.props.header || r.header || f.header, Me = i.props.footer || r.footer || f.footer, Ae = se, [L, Fe] = a.useState(null);
  return /* @__PURE__ */ a.createElement(
    Ue,
    {
      element: g,
      props: r,
      views: x,
      fields: t,
      groups: he,
      dateRange: we,
      orientation: fe,
      dateFormat: { dateFormat: pe, shortDateFormat: De },
      date: [D, ke],
      activeView: [H, be],
      selection: [L, Fe],
      data: [w, Z]
    },
    /* @__PURE__ */ a.createElement(
      "div",
      {
        ref: g,
        id: r.id,
        style: Re,
        className: Te,
        tabIndex: (Q = r.tabIndex) != null ? Q : f.tabIndex,
        dir: v,
        role: r.role || ft,
        "aria-label": r.ariaLabel,
        "aria-labelledby": r.ariaLabelledby,
        "aria-activedescendant": L && L.props.id || void 0,
        onFocus: Se,
        onBlur: Ce
      },
      /* @__PURE__ */ a.createElement(Ve, null, /* @__PURE__ */ a.createElement(Ae, null, /* @__PURE__ */ a.createElement(Qe, { className: "k-scheduler-navigation" }, /* @__PURE__ */ a.createElement(
        R,
        {
          role: "button",
          tabIndex: -1,
          title: F,
          "aria-label": F,
          onClick: ye
        },
        F
      ), /* @__PURE__ */ a.createElement(
        R,
        {
          role: "button",
          tabIndex: -1,
          icon: v === "rtl" ? "chevron-right" : "chevron-left",
          svgIcon: v === "rtl" ? le : ce,
          title: j,
          "aria-label": j,
          onClick: Ee
        }
      ), /* @__PURE__ */ a.createElement(
        R,
        {
          role: "button",
          tabIndex: -1,
          icon: v === "rtl" ? "chevron-left" : "chevron-right",
          svgIcon: v === "rtl" ? ce : le,
          title: q,
          "aria-label": q,
          onClick: Ie
        }
      ))), /* @__PURE__ */ a.createElement(Ye, { value: D, onChange: ve }), /* @__PURE__ */ a.createElement(Xe, null), /* @__PURE__ */ a.createElement($e, null)),
      i && /* @__PURE__ */ a.createElement(
        i.type,
        {
          editable: (X = r.editable) != null ? X : f.editable,
          key: i.props.name,
          item: r.item,
          viewItem: r.viewItem,
          editItem: r.editItem,
          task: r.task,
          viewTask: r.viewTask,
          editTask: r.viewTask,
          slot: r.slot,
          viewSlot: r.viewSlot,
          editSlot: r.editSlot,
          form: r.form,
          onDataAction: Z,
          showWorkHours: S,
          ...i.props
        }
      ),
      /* @__PURE__ */ a.createElement(Me, null, B && B < 1440 && /* @__PURE__ */ a.createElement(et, null, /* @__PURE__ */ a.createElement(R, { tabIndex: -1, onClick: xe, icon: "clock", svgIcon: rt }, C.toLanguageString(
        S ? ae : ne,
        T[S ? ae : ne]
      )))),
      de && /* @__PURE__ */ a.createElement(Be, { message: me })
    )
  );
}), f = {
  data: [],
  height: 600,
  tabIndex: -1,
  editable: !1,
  defaultDate: /* @__PURE__ */ new Date(),
  header: Ze,
  footer: Je,
  navigation: se,
  viewSelector: je
};
ie.propTypes = {
  data: n.array,
  editable: n.oneOfType([
    n.bool,
    n.shape({
      add: n.bool,
      drag: n.bool,
      edit: n.bool,
      remove: n.bool,
      resize: n.bool
    })
  ]),
  view: n.string,
  defaultView: n.string,
  date: n.any,
  defaultDate: n.any,
  rtl: n.bool,
  height: n.oneOfType([n.number, n.string]),
  children: n.any,
  timezone: n.string,
  group: n.any,
  resources: n.any,
  modelFields: n.shape({
    id: n.string,
    start: n.string,
    startTimezone: n.string,
    end: n.string,
    endTimezone: n.string,
    isAllDay: n.string,
    title: n.string,
    description: n.string,
    recurrenceRule: n.string,
    recurrenceId: n.string,
    recurrenceException: n.string
  })
};
ie.displayName = "KendoReactScheduler";
export {
  ie as Scheduler,
  f as schedulerDefaultProps
};
