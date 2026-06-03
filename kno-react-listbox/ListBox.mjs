/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as a from "react";
import f from "prop-types";
import { useWebMcpRegister as Y, knoThemeMaps as Z, Navigation as ee, dispatchEvent as i, classNames as K } from "@progress/kno-react-common";
import { useLocalization as te } from "@progress/kno-react-intl";
import { toolbarPosition as F } from "./interfaces/Enums.mjs";
import { ListBoxContext as ae } from "./ListBoxContext.mjs";
import { ariaLabelListBox as v, messages as oe } from "./messages/index.mjs";
const O = a.forwardRef((l, R) => {
  const {
    id: d,
    style: S,
    data: c,
    textField: k,
    className: T,
    valueField: z,
    selectedField: N,
    onDrop: C,
    onKeyDown: p,
    onDragStart: A,
    onDragLeave: E,
    onDragOver: B,
    onItemClick: M,
    onItemSelect: u,
    onKeyboardNavigate: m,
    size: g = b.size,
    draggable: $ = b.draggable,
    toolbarPosition: h = b.toolbarPosition
  } = l, I = a.useRef(null), x = a.useRef(null), w = a.useRef(null), [H, _] = a.useState(0), q = te(), s = a.useCallback(
    () => ({
      element: w.current,
      props: l
    }),
    []
  );
  a.useImperativeHandle(x, s), a.useImperativeHandle(R, () => x.current), Y("listbox", x, l, l.webMcp);
  const L = d + "-accessibility-id", D = d ? `${d}-list` : void 0, P = Z.sizeMap[g] || g, G = (t) => {
    if (N)
      return !!t[N];
  }, U = (t) => k ? t[k] : t.toString(), V = (t) => {
    p && i(p, t, s(), void 0);
  }, W = (t) => {
    t.target.classList.contains("k-list-content") && (l.data.length > 0 ? i(l.onDrop, t, s(), {
      dataItem: l.data[l.data.length - 1]
    }) : i(l.onDrop, t, s(), {
      dataItem: null
    }));
  }, j = () => h === F.NONE || l.toolbar === void 0 ? `k-listbox-actions-${b.toolbarPosition}` : `k-listbox-actions-${h}`, J = (t) => {
    E && t.target.classList.contains("k-list-content") && i(E, t, s(), void 0);
  }, y = a.useMemo(
    () => new ee({
      root: I,
      selectors: [".k-list-item"],
      tabIndex: 0,
      keyboardEvents: {
        keydown: {
          Space: (t, o, e) => {
            const r = o.elements.indexOf(t);
            e.metaKey && i(u, e, s(), {
              dataItem: c[r]
            }), i(u, e, s(), { dataItem: c[r] });
          },
          ArrowDown: (t, o, e) => {
            if (e.metaKey && e.shiftKey)
              i(m, e, s(), {
                actionName: "moveDown"
              });
            else if (e.metaKey && !e.shiftKey)
              e.preventDefault(), o.focusNext(t);
            else if (!(e.shiftKey && !e.metaKey)) {
              e.preventDefault();
              const r = o.elements.indexOf(t), n = c[r + 1];
              n && (i(u, e, s(), { dataItem: n }), o.focusNext(t));
            }
          },
          ArrowUp: (t, o, e) => {
            if (e.metaKey && e.shiftKey)
              i(m, e, s(), {
                actionName: "moveUp"
              });
            else if (e.metaKey && !e.shiftKey)
              e.preventDefault(), o.focusPrevious(t);
            else if (!(e.shiftKey && !e.metaKey)) {
              e.preventDefault();
              const r = o.elements.indexOf(t), n = c[r - 1];
              n && (i(u, e, s(), { dataItem: n }), o.focusPrevious(t));
            }
          },
          ArrowLeft: (t, o, e) => {
            e.metaKey && e.shiftKey ? i(m, e, s(), {
              actionName: "transferAllFrom"
            }) : e.metaKey && i(m, e, s(), {
              actionName: "transferFrom"
            });
          },
          ArrowRight: (t, o, e) => {
            e.metaKey && e.shiftKey ? i(m, e, s(), {
              actionName: "transferAllTo"
            }) : e.metaKey && i(m, e, s(), {
              actionName: "transferTo"
            });
          },
          Backspace: (t, o, e) => {
            i(m, e, s(), { actionName: "remove" });
          }
        }
      }
    }),
    [c]
  ), Q = a.useCallback(y.triggerKeyboardEvent.bind(y), [c]), X = a.useMemo(() => ({ listId: D }), [D]);
  return a.useEffect(() => (y.initializeRovingTab(), () => y.removeFocusListener()), [c]), /* @__PURE__ */ a.createElement(
    "div",
    {
      id: d,
      ref: w,
      style: S,
      unselectable: "on",
      className: K(
        T,
        "k-listbox",
        { [`k-listbox-${P}`]: g },
        j()
      )
    },
    /* @__PURE__ */ a.createElement(ae.Provider, { value: X }, l.toolbar && /* @__PURE__ */ a.createElement(l.toolbar, null)),
    /* @__PURE__ */ a.createElement(
      "div",
      {
        className: "k-list-scroller k-selectable",
        "data-role": "selectable",
        ref: I,
        onDragOver: (t) => t.preventDefault(),
        onDrop: W,
        onDragLeave: J,
        onKeyDown: Q
      },
      /* @__PURE__ */ a.createElement("div", { className: K("k-list", { [`k-list-${P}`]: g }) }, /* @__PURE__ */ a.createElement("div", { className: "k-list-content" }, /* @__PURE__ */ a.createElement(
        "ul",
        {
          id: D,
          className: "k-list-ul",
          role: "listbox",
          "aria-label": "listbox-container",
          onKeyDown: V
        },
        c.map((t, o) => {
          const e = G(t), r = {
            className: K("k-list-item", {
              "k-selected": e,
              "k-focus": o === H
            }),
            role: "option",
            key: o,
            id: L + o,
            "aria-selected": e,
            "data-uid": L + o,
            draggable: $,
            onDragStart: (n) => {
              i(
                A,
                n,
                s(),
                { dataItem: t }
              );
            },
            onDragOver: (n) => {
              n.preventDefault(), i(B, n, s(), { dataItem: t });
            },
            onDrop: (n) => {
              i(C, n, s(), { dataItem: t });
            },
            onClick: (n) => {
              i(M, n, s(), { dataItem: t });
            },
            onFocus: () => _(o)
          };
          return l.item ? /* @__PURE__ */ a.createElement(
            l.item,
            {
              selected: e,
              dataItem: t,
              ...r,
              key: r.key
            },
            /* @__PURE__ */ a.createElement("span", { className: "k-list-item-text" }, t.name)
          ) : /* @__PURE__ */ a.createElement("li", { ...r, key: r.key }, /* @__PURE__ */ a.createElement("span", { className: "k-list-item-text" }, U(t)));
        })
      )))
    ),
    /* @__PURE__ */ a.createElement(
      "select",
      {
        style: { display: "none" },
        multiple: !0,
        "data-role": "listbox",
        "aria-label": q.toLanguageString(
          v,
          oe[v]
        )
      },
      c.map((t, o) => {
        const e = t[z || k];
        return /* @__PURE__ */ a.createElement("option", { key: o, value: e }, e);
      })
    )
  );
}), b = {
  toolbarPosition: F.RIGHT,
  draggable: !0,
  size: void 0
};
O.propTypes = {
  size: f.oneOf(["small", "medium", "large"]),
  toolbarPosition: f.oneOf(["none", "top", "bottom", "left", "right"]),
  textField: f.string.isRequired,
  valueField: f.string,
  selectedField: f.string,
  data: f.array.isRequired
};
O.displayName = "ListBoxInner";
export {
  O as ListBox
};
