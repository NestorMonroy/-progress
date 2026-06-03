/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as R from "react";
import { classNames as q, knoThemeMaps as J } from "@progress/kno-react-common";
import { ServerOrgChartNode as Q } from "./ServerOrgChartNode.mjs";
import { ServerOrgChartGroup as X } from "./ServerOrgChartGroup.mjs";
import { groupBy as Y } from "@progress/kno-data-query";
import { HORIZONTAL_GAP as v, VERTICAL_LINE as G, NODE_WIDTH as tt, GROUP_PADDINGS as D, GROUP_SUBTITLE_HEIGHT as M, GROUP_TITLE_HEIGHT as z, NODE_HEIGHT as A } from "../utils/consts.mjs";
const P = ({
  dataByGroups: m,
  data: u = [],
  cardWidth: r,
  childrenField: e,
  idField: t,
  expandField: s,
  hasChildrenField: i,
  groupField: d,
  level: o = 1,
  parentId: a = 0
}) => {
  u.forEach((n) => {
    const h = n[e];
    if (n[s] && h && h.length) {
      const I = h.some(
        (g) => g[e] && g[e].length || i && g[i]
      ), x = I ? "horizontal" : "vertical", b = I ? null : r + 2 * v, L = m.find((g) => g.parentId === a), C = m.find((g) => g.ids.includes(a));
      let E = !1;
      if (L) {
        const g = L.ids[0], S = C.items.find((T) => T[t] === g), k = C.items.find((T) => T[t] === n[t]);
        E = S[d] === k[d];
      }
      L && E ? (L.ids.push(n[t]), L.items = L.items.concat(h)) : m.push({
        ids: [n[t]],
        items: h,
        level: o,
        parentId: a,
        hasChildren: I,
        orientation: x,
        width: b
      }), P({
        dataByGroups: m,
        data: n[e],
        childrenField: e,
        cardWidth: r,
        idField: t,
        expandField: s,
        hasChildrenField: i,
        groupField: d,
        level: o + 1,
        parentId: n[t]
      });
    }
  });
}, et = (m, u) => {
  const r = u || tt, e = m.sort((t, s) => s.level - t.level);
  e.forEach((t) => {
    if (!t.width) {
      const s = e.filter(
        (i) => t.ids.includes(i.parentId)
      );
      if (s.length) {
        const i = Math.max(...s.map((n) => n.width || 0)), d = Math.max(
          ...s.map((n) => n.groupedItems.length || 0)
        ), o = Math.max(
          ...t.groupedItems.map((n) => {
            const h = t.orientation === "horizontal" ? n.items.length : 1;
            return h * (r + 2 * v) + v * (h - 1);
          })
        ), a = i * d + v * (d - 1);
        t.width = Math.max(a, o);
      } else {
        const i = Math.max(
          ...t.groupedItems.map((d) => {
            const o = t.orientation === "horizontal" ? d.items.length : 1;
            return o * (r + 2 * v) + v * (o - 1);
          })
        );
        t.width = i;
      }
    }
  });
}, it = (m, u) => {
  const r = m.sort((e, t) => e.level - t.level);
  r.forEach((e) => {
    var h;
    if (e.level === 0)
      return;
    const t = r.find(
      (l) => l.ids.includes(e.parentId)
    ), s = (t == null ? void 0 : t.groupedItems.findIndex(
      (l) => l.items.some((I) => e.ids.includes(I[u]))
    )) || 0, i = (t == null ? void 0 : t.groupedItems) || [], d = t.width ? (t.width - (i.length - 1) * v) / i.length : 0;
    if (!e.left) {
      let l = (t == null ? void 0 : t.left) || 0;
      i.forEach((I, x) => {
        x < s && (l += d + v);
      }), e.left = l;
    }
    const o = (t == null ? void 0 : t.width) || 0, a = (t == null ? void 0 : t.groupedItems.length) || 1, n = (o - (a - 1) * v) / a;
    if (e.width = n, t) {
      const l = e.width - (e.width - (e.groupedItems.length - 1) * v) / e.groupedItems.length;
      t.childLineWidths ? (h = t.childLineWidths) == null || h.push(l) : t.childLineWidths = [l];
    }
  });
}, nt = (m, u, r, e, t) => {
  const s = u, i = t || G, d = r + e + D;
  m.forEach((o) => {
    const a = o.level, n = (s + i + d) * a + G * (a ? a - 1 : 0) - (i - G) * (a ? 1 : 0);
    o.top = n;
  });
}, st = (m, u, r, e, t) => {
  const s = u, i = r, o = e + M + D;
  return Math.max(
    ...m.map((n) => {
      const h = n.top || 0, l = Math.max(...n.groupedItems.map((b) => b.items.length)), I = n.hasChildren ? G : 0, x = n.orientation === "horizontal" ? s + i + o + i + I : l * (s + i) + o + i;
      return h + x;
    })
  );
}, ot = (m) => {
  const u = {
    width: "100%",
    data: [],
    ariaLabel: "Org Chart",
    idField: "id",
    childrenField: "items",
    avatarField: "avatar",
    titleField: "title",
    subtitleField: "subtitle",
    expandField: "expanded",
    orientation: "horizontal",
    showAvatar: !0
  }, {
    id: r,
    width: e,
    data: t,
    groupField: s,
    cardWidth: i,
    cardHeight: d,
    groupTitleHeight: o,
    groupSubtitleHeight: a,
    verticalLine: n,
    idField: h,
    childrenField: l,
    expandField: I,
    hasChildrenField: x,
    avatarField: b,
    titleField: L,
    subtitleField: C,
    cardsColors: E,
    ariaLabel: g,
    itemRender: S,
    groupTitleRender: k,
    groupSubtitleRender: T,
    height: N,
    avatarType: U,
    showAvatar: B
  } = { ...u, ...m }, H = [
    {
      items: t,
      level: 0,
      hasChildren: !0,
      orientation: "horizontal",
      ids: [0],
      parentId: null,
      width: null
    }
  ];
  P({
    dataByGroups: H,
    data: t,
    cardWidth: i,
    expandField: I,
    hasChildrenField: x,
    childrenField: l,
    idField: h,
    groupField: s
  }), H.map((c) => {
    c.groupedItems = Y(c.items, [{ field: s }]);
  }), et(H, i), it(H, h), nt(
    H,
    d || A,
    o || z,
    a || M,
    n
  );
  const $ = st(
    H,
    d || A,
    o || z,
    a || M
  );
  return /* @__PURE__ */ R.createElement("div", { className: "k-orgchart-container", style: { width: e, height: N || $ } }, H.map((c) => {
    const w = c.level, O = c.groupedItems.map((f) => {
      const y = f.items.some((W) => W[I]);
      return {
        ...f,
        expanded: y
      };
    }), F = O.filter((f) => f.expanded), _ = "horizontal", K = E && E[w] || "green";
    return /* @__PURE__ */ R.createElement(
      "div",
      {
        role: w === 0 ? "tree" : "group",
        id: r + "-" + w + "-" + c.ids[0],
        "aria-label": w === 0 ? g : void 0,
        "aria-orientation": w === 0 ? _ : void 0,
        key: c.ids[0] + "_" + w,
        className: q("k-orgchart-group", `k-orgchart-level-${w + 1}`, "k-pos-absolute", {
          [`k-${J.orientationMap[_]}`]: _
        }),
        style: {
          width: c.width || "100%",
          left: c.left,
          top: c.top
        }
      },
      t.length > 0 && O.map((f, y) => {
        const W = f.items.some(
          (p) => p[l] && p[l].length || x && p[x]
        ), V = c.width ? (c.width - (O.length - 1) * v) / O.length : void 0, Z = F.findIndex((p) => p === f);
        return /* @__PURE__ */ R.createElement(
          X,
          {
            id: r + "-" + (w + 1) + "-" + f.items[0][h],
            style: { width: V },
            groupTitleHeight: o,
            groupSubtitleHeight: a,
            groupTitleRender: k,
            groupSubtitleRender: T,
            key: y,
            level: w,
            verticalLine: n || G,
            title: f.items[0][s || L],
            subtitle: s,
            orientation: c.orientation,
            childLineWidth: W && f.expanded && c.orientation === "horizontal" ? c.childLineWidths[Z] : 0,
            line: W,
            nodes: f.items,
            expanded: f.expanded,
            plus: W
          },
          f.items.map((p, j) => /* @__PURE__ */ R.createElement(
            Q,
            {
              cardHeight: d,
              cardWidth: i,
              itemRender: S,
              color: K,
              key: j,
              level: w,
              avatar: p[b],
              avatarType: U,
              showAvatar: B,
              title: p[L],
              subtitle: p[C],
              verticalLine: 0,
              line: !1,
              node: p,
              childLineWidth: 0,
              plus: !1
            },
            p.text
          ))
        );
      })
    );
  }));
};
ot.displayName = "knoServerGroupedOrgChart";
export {
  ot as ServerGroupedOrgChart
};
