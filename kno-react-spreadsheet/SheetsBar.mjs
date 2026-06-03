/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as t from "react";
import { Button as w } from "@progress/kno-react-buttons";
import { useId as U, classNames as N } from "@progress/kno-react-common";
import { Sortable as B } from "@progress/kno-react-sortable";
import { plusIcon as M, xIcon as z } from "@progress/kno-svg-icons";
import { useLocalization as A } from "@progress/kno-react-intl";
import { keys as I, messages as F } from "./messages.mjs";
const H = {
  onSelect: (() => {
  }),
  onDelete: (() => {
  }),
  onEnterEdit: (() => {
  }),
  onCancelEdit: (() => {
  }),
  onExitEdit: (() => {
  }),
  onEdit: (() => {
  })
}, R = t.createContext(H), K = (u) => {
  const e = u.dataItem, { onSelect: l, onDelete: d, onEnterEdit: a, onExitEdit: h, onCancelEdit: o, onEdit: k } = t.useContext(R), b = t.useCallback(
    (n) => {
      n.target instanceof HTMLElement && n.target.nodeName === "INPUT" || l.call(void 0, e, n);
    },
    [e, l]
  ), v = t.useCallback(
    (n) => {
      d.call(void 0, e, n);
    },
    [e, d]
  ), x = t.useCallback(
    (n) => {
      n.target instanceof HTMLElement && n.target.nodeName === "INPUT" || a.call(void 0, e, n);
    },
    [e, a]
  ), S = t.useCallback(
    (n) => {
      h.call(void 0, e, n);
    },
    [e, h]
  ), C = t.useCallback(
    (n) => {
      n.key === "Enter" ? h.call(void 0, e, n) : n.key === "Escape" && o.call(void 0, e, n);
    },
    [e, h, o]
  ), r = t.useCallback(
    (n) => {
      k.call(void 0, { ...e, text: n.target.value }, n);
    },
    [e, k]
  );
  return /* @__PURE__ */ t.createElement(
    "li",
    {
      style: u.style,
      ...u.attributes,
      ref: u.forwardRef,
      role: "tab",
      className: N("k-item k-tabstrip-item", {
        "k-disabled": u.isDisabled,
        "k-active k-state-tab-on-top k-spreadsheet-sheets-bar-active": e.active,
        "k-spreadsheet-sheets-bar-inactive": !e.active,
        "k-first": e.first,
        "k-last": e.last
      }),
      onClick: b,
      onDoubleClick: x
    },
    e.inEdit ? /* @__PURE__ */ t.createElement(
      "input",
      {
        type: "text",
        className: "k-textbox k-spreadsheet-sheets-editor",
        value: e.text,
        onChange: r,
        maxLength: 50,
        autoFocus: !0,
        onBlur: S,
        onKeyDown: C
      }
    ) : /* @__PURE__ */ t.createElement(t.Fragment, null, /* @__PURE__ */ t.createElement("span", { className: "k-link" }, e.text), e.first && e.last ? null : /* @__PURE__ */ t.createElement(
      w,
      {
        fillMode: "flat",
        size: "xs",
        icon: "x",
        svgIcon: z,
        className: "k-link k-spreadsheet-sheets-remove",
        onClick: v
      }
    ))
  );
}, y = t.forwardRef((u, e) => {
  const { children: l, className: d, ...a } = u;
  return /* @__PURE__ */ t.createElement("ul", { className: N("k-tabstrip-items k-reset", d), role: "tablist", ...a, ref: e }, l);
});
y.displayName = "TabsList";
const O = (u) => {
  const { sheets: e, setSheets: l, onSheetSelect: d, onSheetDelete: a, onSheetEdit: h, onSheetReorderEnd: o } = u, [k, b] = t.useState(null), v = t.useRef(!1), x = t.useRef(-1), S = t.useCallback((s) => {
    l(
      s.map((c, f, i) => ({
        ...c,
        first: f === 0,
        last: f === i.length - 1
      }))
    );
  }, []), C = t.useCallback(
    (s) => {
      S(s.newState);
    },
    [S, o]
  ), r = t.useCallback(
    (s) => {
      o.call(void 0, s);
    },
    [o]
  ), n = t.useCallback((s) => {
    v.current = !0, x.current = s.prevIndex;
  }, []), m = t.useCallback((s) => {
    setTimeout(() => {
      v.current = !1;
    }, 50), o.call(void 0, { ...s, prevIndex: x.current });
  }, []), E = t.useCallback(
    (s, c) => {
      v.current || d.call(void 0, s, c);
    },
    [d]
  ), p = t.useCallback(
    (s, c) => {
      c.stopPropagation(), a.call(void 0, s);
    },
    [e, a]
  ), g = t.useCallback(
    (s, c) => {
      c.stopPropagation(), c.preventDefault();
      const f = e.map((i) => ({
        ...i,
        active: i.id === s.id,
        inEdit: i.id === s.id
      }));
      l(f), b({ ...s });
    },
    [e]
  ), P = t.useCallback(
    (s, c) => {
      c.stopPropagation(), c.preventDefault();
      const f = e.map((i) => ({
        ...i,
        inEdit: !1,
        text: i.inEdit && k ? k.text : i.text
      }));
      l(f), b(null);
    },
    [e, k]
  ), T = t.useCallback(
    (s, c) => {
      c.stopPropagation(), c.preventDefault();
      const f = e.map((D) => ({ ...D, inEdit: !1 })), i = e.findIndex((D) => D.id === s.id);
      l(f), b(null), h.call(void 0, s, i);
    },
    [e, h]
  ), L = t.useCallback(
    (s, c) => {
      c.stopPropagation(), c.preventDefault();
      const f = e.map((i) => ({
        ...i,
        text: s.id === i.id ? s.text : i.text
      }));
      l(f);
    },
    [e]
  );
  return /* @__PURE__ */ t.createElement("div", { className: "k-spreadsheet-sheets-items k-tabstrip k-floatwrap k-tabstrip-bottom" }, /* @__PURE__ */ t.createElement("div", { className: "k-tabstrip-items-wrapper k-hstack" }, /* @__PURE__ */ t.createElement(R.Provider, { value: { onSelect: E, onDelete: p, onEnterEdit: g, onCancelEdit: P, onExitEdit: T, onEdit: L } }, /* @__PURE__ */ t.createElement(
    B,
    {
      idField: "id",
      data: e,
      itemUI: K,
      itemsWrapUI: y,
      onDragOver: C,
      onNavigate: r,
      onDragStart: n,
      onDragEnd: m,
      navigatable: !0
    }
  ))));
}, V = (u, e, l) => u.map((d, a, h) => ({
  text: d.name(),
  id: l + "-sheet-" + a,
  first: a === 0,
  last: a === h.length - 1,
  active: d.name() === e
})), Q = (u) => {
  const { spreadsheetRef: e } = u, [l, d] = t.useState([]), a = t.useRef((l.find((r) => r.active) || {}).text), h = U(), o = t.useCallback(() => {
    e.current && (e.current.view.sheetsbar.onSheetSelect(a.current), d(V(e.current.sheets(), a.current, h)));
  }, []), k = t.useCallback(() => {
    if (e.current) {
      const r = e.current.sheets();
      r.find((n) => n.name() === a.current) || (a.current = r[r.length - 1].name()), o();
    }
  }, []);
  t.useEffect(() => (e.current && (e.current.sheets().length && (a.current = e.current.sheets()[0].name(), o()), e.current.view.bind("update", k)), () => {
    e.current && e.current.view.unbind("update", k);
  }), [e.current]);
  const b = t.useCallback((r) => {
    a.current !== r.text && (a.current = r.text, o());
  }, []), v = t.useCallback(() => {
    if (e.current) {
      e.current.view.sheetsbar.onAddSelect();
      const r = e.current.sheets();
      a.current = r[r.length - 1].name(), o();
    }
  }, []), x = t.useCallback((r) => {
    if (e.current) {
      if (a.current === r.text) {
        const n = e.current.sheets(), m = n.findIndex((p) => p.name() === r.text), E = n[m + 1] || n[m - 1];
        a.current = E ? E.name() : "";
      }
      e.current.view.sheetsbar.onSheetRemove(r.text), o();
    }
  }, []), S = t.useCallback((r, n) => {
    if (e.current) {
      let m = r.text;
      const E = e.current.sheets(), p = E[n];
      if (!m) {
        a.current = p.name(), o();
        return;
      }
      if (p && p.name() === m)
        return;
      E.find((g) => g.name() === m) && (m = p.name()), e.current.view.sheetsbar.onSheetRename(m, n), a.current = m, o();
    }
  }, []), C = t.useCallback((r) => {
    if (e.current) {
      const { prevIndex: n, nextIndex: m } = r;
      a.current = e.current.sheets()[n].name(), e.current.view.sheetsbar.onSheetReorderEnd({ oldIndex: n, newIndex: m }), o();
    }
  }, []);
  return /* @__PURE__ */ t.createElement("div", { className: "k-spreadsheet-sheets-bar k-header" }, /* @__PURE__ */ t.createElement(
    w,
    {
      fillMode: "flat",
      size: "xs",
      icon: "plus",
      className: "k-spreadsheet-sheets-bar-add",
      title: A().toLanguageString(I.addNewSheet, F[I.addNewSheet]),
      svgIcon: M,
      onClick: v
    }
  ), /* @__PURE__ */ t.createElement(
    O,
    {
      sheets: l,
      setSheets: d,
      onSheetSelect: b,
      onSheetDelete: x,
      onSheetEdit: S,
      onSheetReorderEnd: C
    }
  ));
};
export {
  Q as SheetsBar
};
