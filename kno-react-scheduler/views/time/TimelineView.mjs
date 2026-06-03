/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as t from "react";
import { multiDayTimelineViewDefaultProps as m, MultiDayTimelineView as a } from "./MultiDayTimelineView.mjs";
import { timelineViewTitle as i, messages as o } from "../../messages/index.mjs";
const l = (e) => /* @__PURE__ */ t.createElement(a, { ...e }), s = {
  ...m,
  name: "timeline",
  title: (e) => e.toLanguageString(i, o[i]),
  slotDuration: 60,
  slotDivisions: 2,
  numberOfDays: 1,
  selectedDateFormat: "{0:D}",
  selectedShortDateFormat: "{0:d}"
};
l.displayName = "KendoReactSchedulerTimelineView";
export {
  l as TimelineView,
  s as timeLineViewDefaultProps
};
