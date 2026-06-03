/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as r from "react";
import { toGroupResources as p } from "./utils.mjs";
import { SchedulerResourceIteratorContext as m } from "../../context/SchedulerResourceIteratorContext.mjs";
const g = (l) => {
  const { nested: t, wrapGroup: e, children: n } = l, a = l.cellContent || R, c = p(l.group, l.resources), s = 0, o = 0;
  return /* @__PURE__ */ r.createElement("div", { className: "k-scheduler-group" }, t ? e ? /* @__PURE__ */ r.createElement("div", { className: "k-scheduler-row" }, /* @__PURE__ */ r.createElement("div", { className: "k-sticky-cell" }, h({ resources: c, children: n, cellContent: a, depth: s, groupIndex: o })), /* @__PURE__ */ r.createElement("div", { className: "k-scheduler-cell k-group-content" }, i({ resources: c, children: n, cellContent: a, depth: s, groupIndex: o }, !1))) : i({ resources: c, children: n, cellContent: a, depth: s, groupIndex: o }, !0) : e ? /* @__PURE__ */ r.createElement("div", { className: "k-scheduler-row" }, /* @__PURE__ */ r.createElement("div", { className: "k-sticky-cell" }, v({ resources: c })), /* @__PURE__ */ r.createElement("div", { className: "k-scheduler-cell k-group-content" }, n)) : E({ resources: c, children: n, cellContent: a, groupIndex: o }));
}, v = (l) => /* @__PURE__ */ r.createElement("div", { className: "k-scheduler-row" }, /* @__PURE__ */ r.createElement("div", { className: "k-scheduler-row" }, l.resources.map((t, e) => /* @__PURE__ */ r.createElement(
  "div",
  {
    key: e,
    className: "k-scheduler-cell k-resource-cell k-heading-cell",
    "data-depth-index": e
  }
)))), i = (l, t = !0) => {
  const { resources: e, children: n, cellContent: a, groupIndex: c, depth: s } = l, o = e.length > 0;
  if (s === e.length || !o)
    return /* @__PURE__ */ r.createElement(
      m.Provider,
      {
        value: { resource: e[s], groupIndex: o ? c : 0 }
      },
      n
    );
  const d = e[s].data.length;
  return e[s].data.map((k, u) => /* @__PURE__ */ r.createElement("div", { key: u, className: "k-scheduler-row" }, t && /* @__PURE__ */ r.createElement("div", { className: "k-scheduler-cell k-group-cell k-heading-cell", "data-depth-index": s }, k[e[s].textField]), /* @__PURE__ */ r.createElement(
    "div",
    {
      className: "k-scheduler-cell k-group-content k-resource-row",
      "data-depth-index": s,
      "data-resource-index": d * c + u
    },
    i(
      {
        resources: e,
        children: n,
        cellContent: a,
        groupIndex: d * c + u,
        depth: s + 1
      },
      t
    )
  )));
}, h = (l) => {
  const { resources: t, children: e, cellContent: n, groupIndex: a, depth: c } = l, s = t.length ? t[c].data.length : 0;
  return t[c] ? t[c].data.map((o, d) => /* @__PURE__ */ r.createElement("div", { key: d, className: "k-scheduler-row" }, /* @__PURE__ */ r.createElement(
    "div",
    {
      className: "k-scheduler-cell k-resource-cell k-resource-row k-heading-cell",
      "data-depth-index": c,
      "data-resource-index": s * a + d
    },
    o[t[c].textField]
  ), c + 1 !== t.length && /* @__PURE__ */ r.createElement("div", { className: "k-scheduler-cell k-resource-content" }, h({
    resources: t,
    children: e,
    cellContent: n,
    groupIndex: s * a + d,
    depth: c + 1
  })))) : null;
}, E = (l) => {
  const { resources: t, children: e, groupIndex: n, cellContent: a } = l;
  return /* @__PURE__ */ r.createElement("div", { className: "k-scheduler-row" }, x(t), a, N(e, t, n));
}, N = (l, t, e) => {
  const n = t.length > 0;
  return /* @__PURE__ */ r.createElement("div", { className: "k-scheduler-cell k-group-content" }, /* @__PURE__ */ r.createElement(
    m.Provider,
    {
      value: { resource: t[e], groupIndex: n ? e : void 0 }
    },
    l
  ));
}, x = (l) => l.map((t, e) => /* @__PURE__ */ r.createElement("div", { key: e, className: "k-scheduler-cell k-group-cell k-heading-cell", "data-depth-index": e }));
g.displayName = "KendoReactSchedulerVerticalResourceIterator";
const R = null;
export {
  g as VerticalResourceIterator
};
