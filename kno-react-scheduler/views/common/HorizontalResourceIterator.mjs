/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as t from "react";
import { toGroupResources as C, expandResources as h } from "./utils.mjs";
import { EMPTY_RESOURCE as g } from "../../constants/index.mjs";
import { SchedulerResourceIteratorContext as w } from "../../context/SchedulerResourceIteratorContext.mjs";
const E = (r) => {
  const { nested: e, children: c, rowContentProps: s } = r, l = r.rowContent || k, o = r.childRowContent || l, n = C(r.group, r.resources);
  return /* @__PURE__ */ t.createElement("div", { className: "k-scheduler-group k-group-horizontal" }, e ? R({
    resources: n,
    children: c,
    nested: e,
    groupIndex: 0,
    rowContent: l,
    rowContentProps: s,
    childRowContent: o
  }) : p({
    resources: n,
    children: c,
    rowContentProps: s,
    childRowContent: o
  }));
}, R = (r) => {
  const { resources: e, rowContent: c, nested: s, children: l, groupIndex: o, rowContentProps: n, childRowContent: a } = r;
  if (o === e.length)
    return p({
      resources: e,
      children: l,
      rowContentProps: n,
      childRowContent: a
    });
  const u = h(e, o), d = c;
  return /* @__PURE__ */ t.createElement(t.Fragment, null, s ? /* @__PURE__ */ t.createElement("div", { className: "k-scheduler-row" }, /* @__PURE__ */ t.createElement(d, { resources: e, groupIndex: o, ...n }, u.map((m, i) => /* @__PURE__ */ t.createElement("div", { key: i, className: "k-scheduler-cell k-heading-cell" }, m.text)))) : /* @__PURE__ */ t.createElement(d, { resources: e, groupIndex: o, ...n }, u.map((m, i) => /* @__PURE__ */ t.createElement("div", { key: i, className: "k-scheduler-cell k-heading-cell" }, m.text))), R({
    resources: e,
    children: l,
    nested: s,
    rowContent: c,
    childRowContent: a,
    groupIndex: o + 1
  }));
}, p = (r) => {
  const { resources: e, childRowContent: c, children: s, rowContentProps: l } = r, o = h(e, e.length - 1), n = c, a = e.length > 0;
  return /* @__PURE__ */ t.createElement("div", { className: "k-scheduler-row" }, /* @__PURE__ */ t.createElement(n, { resources: e, ...l }, (o.length ? o : g).map((u, d) => /* @__PURE__ */ t.createElement("div", { key: d, className: "k-scheduler-cell k-group-cell" }, /* @__PURE__ */ t.createElement(
    w.Provider,
    {
      value: { resource: u, groupIndex: a ? d : 0 }
    },
    s
  )))));
};
E.displayName = "KendoReactSchedulerHorizontalResourceIterator";
const k = (r) => r.children;
export {
  k as DefaultRowContent,
  E as HorizontalResourceIterator
};
