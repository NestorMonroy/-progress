/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { getFlatColumnsState as u } from "../utils/index.mjs";
const x = 1, m = 20;
class S {
  constructor(a) {
    this.columns = [], this.columnsState = [], this.resizable = !1, this.isRtl = !1, this.setIsRtl = (s) => {
      this.isRtl = s;
    }, this.initWidths = () => {
      var c;
      const s = ((c = this.colGroupMain) == null ? void 0 : c.children) || [], h = u(this.columnsState), o = this.columns.filter((e) => {
        var r;
        return !((r = e.children) != null && r.length);
      });
      for (let e = 0; e < s.length; e++) {
        const r = o[e];
        let t = "";
        const i = h.find((d) => d.id === o[e].id);
        i && (t = this.applyWidthConstraints(i, r)), this.colGroups.forEach((d) => {
          d.children[e].width = t;
        });
      }
    }, this.dragHandler = (s, h, o, c) => {
      const e = s.originalEvent;
      c || (e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation());
      const r = o.closest("th");
      if (!r || !r)
        return;
      const t = r.clientWidth;
      let i = t;
      if (this.isRtl ? i += o.getBoundingClientRect().right - o.offsetWidth / 2 - s.clientX : i += s.clientX - o.getBoundingClientRect().left - o.offsetWidth / 2, !c && Math.abs(i - t) < 1)
        return;
      this.fixateInitialWidths(r.parentElement.clientWidth), this.setWidths(h, Math.floor(i) / t);
      const d = this.columns.filter((n) => !n.children.length).findIndex((n) => n.id === h.id);
      this.onResize(d, t, i, e, c, this.columnsState, h.id);
    }, this.dblClickHandler = (s, h) => {
      const o = this.columns.filter((l) => h.indexOf(l.id) > -1), c = u(this.columnsState);
      if (!this.colGroupMain || !o.length)
        return;
      const e = {}, r = o;
      for (; r.length > 0; ) {
        const l = r.pop();
        if (!l)
          break;
        l.children.length ? r.push(...l.children) : e[l.id] = l;
      }
      const t = this.columns.filter((l) => !l.children.length), i = [];
      t.forEach((l, p) => {
        e[l.id] && i.push(p);
      });
      const d = this.colGroups, n = d.map((l) => l.parentElement);
      n.forEach((l) => l.classList.add("k-autofitting"));
      const f = [];
      d.forEach((l) => {
        i.forEach((p) => {
          l.children[p] && (l.children[p].width = "", f[p] = Math.max(
            f[p] || 0,
            l.children[p].offsetWidth + x
          ));
        });
      }), d.forEach((l) => {
        i.forEach((p) => {
          if (l.children[p]) {
            l.children[p].width = f[p] + "px";
            const g = c.find((W) => W.id === t[p].id);
            g && (g.width = f[p]);
          }
        });
      }), n.forEach((l) => l.classList.remove("k-autofitting")), this.onResize(i[0], 0, 0, s, !0, this.columnsState, h[0]);
    }, this.updateColElements = (s) => {
      const h = this.columns.filter((c) => !c.hidden && !c.children.length);
      let o = 1e-10;
      for (let c = 0; c < s.length; c++) {
        const e = s[c], r = h.findIndex((f) => f.id === e.id), t = parseFloat((e.width || 0).toString()), i = Math.floor(t);
        o += t - i;
        const d = i + Math.floor(o);
        o -= Math.floor(o);
        const n = h.find((f) => f.id === e.id);
        if (!n)
          return;
        this.colGroups.forEach((f) => {
          if (f.children[r]) {
            const l = parseInt(f.children[r].width, 10);
            f.children[r].width = d + "px", this.updateNextLockedCol(f.parentElement, n, l - d);
          }
        });
      }
    }, this.onResize = a;
  }
  get colGroups() {
    return [
      this.colGroupMain,
      this.colGroupHeader,
      this.colGroupFooter,
      this.colGroupStickyHeader,
      this.colGroupStickyFooter,
      this.colGroupPinnedTop,
      this.colGroupPinnedBottom
    ].filter(Boolean);
  }
  applyWidthConstraints(a, s, h = 1) {
    if (!a.width)
      return a.width || "";
    const o = a.width.toString();
    if (o.includes("%")) {
      const f = parseFloat(o) * h, l = Math.max(0, Math.min(100, f));
      return a.width = l + "%", a.width;
    }
    let e = parseFloat(o) * h;
    const r = s.minResizableWidth === void 0 ? 10 : s.minResizableWidth, t = s == null ? void 0 : s.minWidth, i = t !== void 0 ? Math.max(r, t) : r, d = s == null ? void 0 : s.maxWidth;
    return e < i && (e = i), d !== void 0 && e > d && (e = d), a.width = e, e;
  }
  fixateInitialWidths(a) {
    var r;
    let s = 0;
    const h = ((r = this.colGroupMain) == null ? void 0 : r.children) || [];
    for (let t = 0; t < h.length; t++)
      h[t].width ? a -= h[t].clientWidth : s++;
    if (s === 0)
      return;
    const o = Math.floor(a / s), c = u(this.columnsState), e = this.columns.filter((t) => !t.children.length);
    for (let t = 0; t < h.length; t++) {
      const i = h[t], d = i.width ? i.clientWidth : o, n = c.find((f) => f.id === e[t].id);
      n && (n.width = d.toString()), this.colGroups.forEach((f) => {
        f.children[t].width = d;
      });
    }
  }
  setWidths(a, s) {
    const h = u(this.columnsState), o = this.columns.findIndex((t) => t.id === a.id), c = [];
    let e = a.children.filter((t) => !t.hidden).length;
    for (let t = o + 1; t < this.columns.length && !(e <= 0); t++) {
      const i = this.columns[t];
      i.children.length ? e += i.children.filter((d) => !d.hidden).length : c.push(i), e--;
    }
    c.length === 0 && c.push(a);
    const r = [];
    c.forEach((t) => {
      const i = h.find((d) => d.id === t.id);
      i && (this.applyWidthConstraints(i, t, s), r.push(i));
    }), this.updateColElements(r);
  }
  updateNextLockedCol(a, s, h) {
    const o = s.index, c = this.colGroupMain.parentElement.closest(".k-grid"), e = c == null ? void 0 : c.clientWidth, r = this.columns.filter((t) => t.locked).map((t) => parseInt(t.width + "", 10)).reduce((t, i) => t + i, 0);
    !s.locked || e <= r + m || this.columns.forEach((t) => {
      if (t != null && t.locked && h) {
        const i = a == null ? void 0 : a.querySelectorAll('[aria-colindex="' + t.ariaColumnIndex + '"]');
        i == null || i.forEach((d) => {
          const n = d.style;
          this.isRtl ? (t.index > o && n && n.right && (n.right = parseInt(n.right, 10) - h + "px"), t.index < o && n && n.left && (n.left = parseInt(n.left, 10) - h + "px")) : (t.index > o && n && n.left && (n.left = parseInt(n.left, 10) - h + "px"), t.index < o && n && n.right && (n.right = parseInt(n.right, 10) - h + "px"));
        });
      }
    });
  }
}
export {
  S as ColumnResize
};
