/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as s from "react";
import { validatePackage as x, getLicenseMessage as D, useWebMcpRegister as M, dispatchEvent as V, Navigation as S, classNames as A, WatermarkOverlay as H } from "@progress/kno-react-common";
import { packageMetadata as C } from "./package-metadata.mjs";
import { ListViewItemContext as F } from "./ListViewItemContext.mjs";
const o = "k-focus", K = s.forwardRef((n, u) => {
  const l = !x(C, { component: "ListView" }), c = D(C), { data: m = [], item: d, footer: f, header: w, className: h, style: y, onScroll: p, navigatable: E } = n, k = s.useRef(null), v = s.useRef(null), L = s.useCallback(
    () => ({
      onScroll: p,
      props: n,
      context: {},
      state: {},
      refs: {}
    }),
    []
  );
  s.useImperativeHandle(v, L), s.useImperativeHandle(u, () => v.current), M("listview", v, n, n.webMcp);
  const I = s.useCallback(
    (e) => V(p, e, L(), void 0),
    []
  ), g = (e, t, a) => {
    a.preventDefault(), t.focusNext(e), t.next(e).classList.add(o), t.previous(e).classList.remove(o);
  }, b = (e, t, a) => {
    a.preventDefault(), t.focusPrevious(e), t.next(e).classList.remove(o), t.previous(e).classList.add(o);
  }, r = s.useMemo(
    () => new S({
      root: k,
      selectors: [".k-listview-item"],
      rovingTabIndex: !0,
      keyboardEvents: {
        keydown: {
          ArrowDown: g,
          ArrowRight: g,
          ArrowUp: b,
          ArrowLeft: b,
          Home: (e, t, a) => {
            a.preventDefault();
            const i = t.first;
            i && t.focusElement(i, e);
          },
          End: (e, t, a) => {
            a.preventDefault();
            const i = t.last;
            i && t.focusElement(i, e);
          },
          Tab: (e, t, a) => {
            t.removeFocusClass(e);
          }
        }
      },
      tabIndex: 0,
      focusClass: o
    }),
    []
  ), N = s.useCallback(r.triggerKeyboardEvent.bind(r), []), R = s.useCallback((e) => {
    e.nativeEvent.target.classList.add(o), r.elements.forEach((t) => {
      t !== e.nativeEvent.target && t.classList.remove(o);
    });
  }, []);
  return s.useEffect(() => {
    if (E)
      return r.initializeRovingTab(), () => r.removeFocusListener();
  }, []), /* @__PURE__ */ s.createElement(
    "div",
    {
      className: A("k-listview", h),
      style: y,
      onKeyDown: (e) => E && N(e),
      onClick: R
    },
    w ? /* @__PURE__ */ s.createElement(w, null) : null,
    /* @__PURE__ */ s.createElement("div", { role: "list", className: "k-listview-content", onScroll: I, ref: k }, d && m.map((e, t) => {
      var a;
      return /* @__PURE__ */ s.createElement(
        P,
        {
          key: (a = e.id) != null ? a : t,
          Item: d,
          dataItem: e,
          index: t,
          totalCount: m.length
        }
      );
    })),
    f ? /* @__PURE__ */ s.createElement(f, null) : null,
    l && /* @__PURE__ */ s.createElement(H, { message: c })
  );
});
K.displayName = "knoReactListView";
const P = ({ Item: n, dataItem: u, index: l, totalCount: c }) => {
  const m = s.useMemo(() => ({ index: l, totalCount: c }), [l, c]);
  return /* @__PURE__ */ s.createElement(F.Provider, { value: m }, /* @__PURE__ */ s.createElement(n, { dataItem: u, index: l }));
};
export {
  K as ListView
};
