/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as t from "react";
import F from "prop-types";
import { packageMetadata as U } from "./package-metadata.mjs";
import { validatePackage as le, getLicenseMessage as de, useWebMcpRegister as ue, clone as j, useDraggable as me, classNames as fe, noop as G, WatermarkOverlay as pe } from "@progress/kno-react-common";
import { TaskBoardColumnBase as J } from "./TaskBoardColumnBase.mjs";
import { TaskBoardCardBase as ge } from "./TaskBoardCardBase.mjs";
import { TASKBOARD_COLUMN as D, TASKBOARD_PLACEHOLDER as ke, TASKBOARD_TASK as B } from "./constants.mjs";
import { closestTaskBoardElement as Q, findIndexes as ye } from "./utils.mjs";
import { TaskBoardCard as N } from "./card/Card.mjs";
import { TaskBoardColumn as V } from "./column/Column.mjs";
const Z = t.forwardRef((i, $) => {
  const ee = !le(U, { component: "TaskBoard" }), te = de(U), { columnData: f = [], className: ne, style: ae, id: se, taskData: l = [], onChange: d } = i, w = t.useRef(null), K = t.useRef(null);
  t.useImperativeHandle(w, () => ({ props: i })), t.useImperativeHandle($, () => w.current), ue("taskboard", w, i, i.webMcp);
  const oe = t.Children.toArray(i.children).filter(
    (e) => e && e.type && e.type.displayName === "KendoReactTaskBoardToolbar"
  ), L = t.useRef(null), p = t.useRef(null), x = t.useRef(null), [C, A] = t.useState(null), [b, P] = t.useState(null), [T, O] = t.useState({ top: 0, left: 0 }), [X, Y] = t.useState(), M = t.useRef(null), H = t.useRef(null), I = t.useMemo(() => {
    const e = {};
    return (C || l).forEach((a) => {
      const n = a.status;
      e[n] || (e[n] = []), e[n].push(a);
    }), e;
  }, [l, C]), re = t.useCallback(
    (e) => {
      const a = e.originalEvent.target;
      if (a.closest("button,input,.k-link,.k-taskboard-preview-pane"))
        return;
      const n = Q(a), s = K.current;
      if (n && s) {
        const r = n.type === D;
        if (r && !a.closest(".k-taskboard-column-header"))
          return;
        const R = n.element.getBoundingClientRect(), y = s.getBoundingClientRect();
        x.current = {
          x: e.clientX - R.left + y.left,
          y: e.clientY - R.top + y.top
        };
        const u = r ? f : l, S = r ? P : A, m = u.findIndex((v) => String(v.id) === n.id), k = u[m];
        if (m === -1 || k.edit)
          return;
        const c = j(k);
        c.isPlaceholder = !0;
        const h = [...u];
        h[m] = c, p.current = {
          ...n,
          index: m,
          item: k,
          width: R.width,
          height: R.height
        }, Y(m), O({
          top: e.clientY - x.current.y,
          left: e.clientX - x.current.x
        }), S(h);
      }
    },
    [f, l]
  ), ie = t.useCallback(
    (e) => {
      const a = p.current, n = M.current && M.current.element || H.current;
      if (a && n) {
        O({
          top: e.clientY - x.current.y,
          left: e.clientX - x.current.x
        }), n.style.visibility = "hidden";
        const s = document.elementFromPoint(e.clientX, e.clientY);
        if (n.style.visibility = "", s && s.getAttribute(ke))
          return;
        const r = s && Q(s);
        if (r) {
          let g;
          const R = r.type === a.type, y = a.type === D, u = (y ? b : C) || [], S = y ? P : A;
          if (y || R) {
            if (g = ye(a.id, r.id, u), g) {
              const m = u[g.dragIndex], k = u[g.dropIndex], c = j(m);
              y || (c.status = k.status);
              const h = [...u];
              h.splice(g.dragIndex, 1), h.splice(g.dropIndex, 0, c), a.index = g.dropIndex, S(h);
            }
          } else {
            const m = u.findIndex((c) => String(c.id) === a.id), k = f.findIndex((c) => String(c.id) === r.id);
            if (m !== -1 && k !== -1) {
              const c = u[m], v = f[k].status;
              if (I[v])
                return;
              c.status = v;
              const E = [...u];
              E.splice(m, 1), E.push(c), a.index = E.length - 1, S(E);
            }
          }
        }
      }
    },
    [b, C, f, I]
  ), ce = t.useCallback(() => {
    const e = p.current;
    if (d && e) {
      const n = (e.type === D ? b : C) || [], s = n[e.index];
      delete s.isPlaceholder;
      const r = {
        data: n,
        type: e.type,
        previousItem: { ...e.item, index: X },
        item: { ...s, index: e.index }
      };
      d.call(void 0, r);
    }
    p.current = null, x.current = null, A(null), P(null), O({ top: 0, left: 0 }), Y(void 0);
  }, [b, C, d, X]);
  me(L, {
    onDragStart: re,
    onDrag: ie,
    onDragEnd: ce
  });
  const o = p.current, W = t.useCallback(
    (e) => {
      const n = {
        data: [...l, e],
        type: B,
        previousItem: null,
        item: e
      };
      d.call(void 0, n);
    },
    [d, l]
  ), _ = t.useCallback(
    (e, a) => {
      const n = l.slice(), s = l.indexOf(a);
      s !== -1 && n.splice(s, 1, e);
      const r = {
        data: n,
        type: B,
        previousItem: a,
        item: e
      };
      d.call(void 0, r);
    },
    [d, l]
  ), q = t.useCallback(
    (e) => {
      const n = {
        data: l.filter((s) => s !== e),
        type: B,
        previousItem: e,
        item: null
      };
      d.call(void 0, n);
    },
    [d, l]
  ), z = t.useCallback(
    (e, a) => {
      const n = f.slice(), s = n.indexOf(a);
      s !== -1 && (e ? n.splice(s, 1, e) : n.splice(s, 1));
      const r = {
        data: n,
        type: D,
        previousItem: a,
        item: e
      };
      d.call(void 0, r);
    },
    [d, f]
  );
  return /* @__PURE__ */ t.createElement(
    "div",
    {
      id: se,
      style: ae,
      ref: K,
      className: fe("k-taskboard", ne),
      role: "application"
    },
    oe,
    /* @__PURE__ */ t.createElement("div", { className: "k-taskboard-content", style: o ? { userSelect: "none" } : void 0 }, /* @__PURE__ */ t.createElement("div", { className: "k-taskboard-columns-container", ref: L }, (b || f).map((e) => /* @__PURE__ */ t.createElement(
      J,
      {
        key: e.id,
        tabIndex: i.tabIndex,
        column: e,
        tasks: I[e.status] || [],
        dragTargetRef: p,
        onTaskCreate: W,
        onTaskEdit: _,
        onTaskDelete: q,
        onColumnChange: z,
        columnComponent: i.column || V,
        cardComponent: i.card || N,
        priorities: i.priorities
      }
    )))),
    o && o.type === B && /* @__PURE__ */ t.createElement(
      ge,
      {
        elementRef: M,
        style: {
          position: "absolute",
          width: o.width,
          height: o.height,
          top: T.top,
          left: T.left,
          zIndex: 10,
          borderLeftColor: o.item.priority ? o.item.priority.color : o.item.color
        },
        task: o.item,
        dragTargetRef: p,
        cardComponent: i.card || N,
        onDeleteTask: G,
        showEditPane: G
      }
    ),
    o && o.type === D && /* @__PURE__ */ t.createElement(
      J,
      {
        elementRef: H,
        style: {
          position: "absolute",
          width: o.width,
          height: o.height,
          top: T.top,
          left: T.left,
          zIndex: 10
        },
        cardComponent: i.card || N,
        columnComponent: i.column || V,
        column: o.item,
        tasks: I[o.item.status],
        priorities: i.priorities,
        dragTargetRef: p,
        onTaskDelete: q,
        onColumnChange: z,
        onTaskEdit: _,
        onTaskCreate: W
      }
    ),
    ee && /* @__PURE__ */ t.createElement(pe, { message: te })
  );
});
Z.propTypes = {
  columnData: F.array.isRequired,
  taskData: F.array.isRequired
};
Z.displayName = "KendoReactTaskBoard";
export {
  Z as TaskBoard
};
