/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";
import * as e from "react";
import O from "react-dom";
import { ActionSheet as V, ActionSheetContent as _, ActionSheetFooter as G } from "@progress/kno-react-layout";
import { Button as r } from "@progress/kno-react-buttons";
import { Label as v, Error as b } from "@progress/kno-react-labels";
import { useLocalization as W } from "@progress/kno-react-intl";
import { DatePicker as j } from "@progress/kno-react-dateinputs";
import { useAdaptiveModeContext as q } from "@progress/kno-react-common";
import { cancelIcon as D, saveIcon as N, xIcon as H } from "@progress/kno-svg-icons";
import { TextBox as J, Checkbox as K, NumericTextBox as P } from "@progress/kno-react-inputs";
import { TABLE_PREVENT_SELECTION_ELEMENT as p } from "@progress/kno-react-data-tools";
import { Dialog as Q, DialogActionsBar as U } from "@progress/kno-react-dialogs";
import { Form as T, FormElement as F, FieldWrapper as M, Field as w } from "@progress/kno-react-form";
import { GridContext as X } from "../utils/GridContext.mjs";
import { editDialogTitle as z, messages as S, editDialogSaveButtonTitle as B, editDialogCancelButtonTitle as L } from "../messages/index.mjs";
const ue = (l) => {
  var y;
  const C = W(), m = q(), i = e.useContext(X), c = (a, t) => {
    i.onDialogEditSubmit && i.onDialogEditSubmit({ dataItem: a, syntheticEvent: t });
  }, n = (a) => {
    i.onDialogEditCancel && i.onDialogEditCancel({ syntheticEvent: a });
  }, k = (a) => {
    const { validationMessage: t, visited: Y, id: s, valid: Z, editor: R, value: E, label: u, ...f } = a, g = i.mobileMode ? "large" : "medium";
    switch (R) {
      case "numeric":
        return /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(v, { editorId: s, className: "k-form-label" }, u, ":"), /* @__PURE__ */ e.createElement("div", { className: "k-form-field-wrap" }, /* @__PURE__ */ e.createElement(
          P,
          {
            ...f,
            size: g,
            value: E,
            [p]: !0
          }
        ), t && /* @__PURE__ */ e.createElement(b, null, t)));
      case "date":
        return /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(v, { editorId: s, className: "k-form-label" }, u, ":"), /* @__PURE__ */ e.createElement("div", { className: "k-form-field-wrap" }, /* @__PURE__ */ e.createElement(
          j,
          {
            valid: !0,
            ...f,
            value: E,
            adaptive: i.mobileMode,
            size: g,
            [p]: !0
          }
        ), t && /* @__PURE__ */ e.createElement(b, null, t)));
      case "boolean":
        return /* @__PURE__ */ e.createElement("div", { className: "k-form-field-wrap" }, /* @__PURE__ */ e.createElement(v, { editorId: s, className: "k-form-label" }, u, ":  ", /* @__PURE__ */ e.createElement(
          K,
          {
            ...f,
            size: g,
            value: E,
            [p]: !0
          }
        ), t && /* @__PURE__ */ e.createElement(b, null, t)));
      default:
        return /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(v, { editorId: s, className: "k-form-label" }, u, ":"), /* @__PURE__ */ e.createElement("div", { className: "k-form-field-wrap" }, /* @__PURE__ */ e.createElement(
          J,
          {
            ...f,
            size: g,
            value: E || "",
            [p]: !0
          }
        ), t && /* @__PURE__ */ e.createElement(b, null, t)));
    }
  }, I = C.toLanguageString(z, S[z]), h = C.toLanguageString(
    B,
    S[B]
  ), x = C.toLanguageString(
    L,
    S[L]
  ), A = {
    animation: !0,
    navigatable: !1,
    navigatableElements: [],
    expand: !0,
    title: i.adpativeTitle || I,
    suffixActions: /* @__PURE__ */ e.createElement(r, { svgIcon: H, onClick: n, fillMode: "flat" }),
    animationStyles: m && i.adaptiveColumnMenuRef <= m.small ? { top: 0, width: "100%", height: "100%" } : void 0,
    className: "k-adaptive-actionsheet",
    position: m && i.adaptiveColumnMenuRef <= m.small ? "fullscreen" : void 0
  }, { customEditDialog: d } = l, o = (y = l.columns) == null ? void 0 : y.filter((a) => a.editable);
  return /* @__PURE__ */ e.createElement(e.Fragment, null, O.createPortal(
    // eslint-disable-next-line react/jsx-no-useless-fragment
    /* @__PURE__ */ e.createElement(e.Fragment, null, i.mobileMode ? (
      // eslint-disable-next-line react/jsx-no-useless-fragment
      /* @__PURE__ */ e.createElement(e.Fragment, null, d ? /* @__PURE__ */ e.createElement(
        d,
        {
          columns: l.columns,
          dataItem: l.dataItem,
          onSubmit: c,
          onCancel: n
        }
      ) : /* @__PURE__ */ e.createElement(
        T,
        {
          initialValues: l.dataItem,
          onSubmit: c,
          id: "kno-grid-edit-dialog",
          render: (a) => /* @__PURE__ */ e.createElement(V, { ...A }, /* @__PURE__ */ e.createElement(_, null, /* @__PURE__ */ e.createElement(F, null, o == null ? void 0 : o.map((t) => /* @__PURE__ */ e.createElement(M, { key: t.field }, /* @__PURE__ */ e.createElement(
            w,
            {
              name: t.field,
              id: t.field,
              editor: t.editor,
              component: k,
              label: t.title || t.field,
              validator: t == null ? void 0 : t.validator
            }
          ))))), /* @__PURE__ */ e.createElement(G, null, /* @__PURE__ */ e.createElement(
            r,
            {
              onClick: n,
              type: "reset",
              icon: "cancel",
              size: "large",
              svgIcon: D
            },
            x
          ), /* @__PURE__ */ e.createElement(
            r,
            {
              type: "submit",
              themeColor: "primary",
              size: "large",
              disabled: !a.allowSubmit || !a.valid,
              onClick: a.onSubmit,
              icon: "save",
              svgIcon: N
            },
            h
          )))
        }
      ))
    ) : d ? /* @__PURE__ */ e.createElement(
      d,
      {
        columns: l.columns,
        dataItem: l.dataItem,
        onSubmit: c,
        onCancel: n
      }
    ) : /* @__PURE__ */ e.createElement(
      T,
      {
        initialValues: l.dataItem,
        onSubmit: c,
        id: "kno-grid-edit-dialog",
        render: (a) => /* @__PURE__ */ e.createElement(
          Q,
          {
            title: I,
            width: 450,
            onClose: (t) => n(t.syntheticEvent)
          },
          /* @__PURE__ */ e.createElement(F, null, o == null ? void 0 : o.map((t) => /* @__PURE__ */ e.createElement(M, { key: t.field }, /* @__PURE__ */ e.createElement(
            w,
            {
              name: t.field,
              id: t.field,
              editor: t.editor,
              component: k,
              label: t.title || t.field,
              validator: t == null ? void 0 : t.validator
            }
          )))),
          /* @__PURE__ */ e.createElement(U, { layout: "start" }, /* @__PURE__ */ e.createElement(
            r,
            {
              type: "submit",
              themeColor: "primary",
              disabled: !a.allowSubmit || !a.valid,
              onClick: a.onSubmit,
              icon: "save",
              svgIcon: N
            },
            h
          ), /* @__PURE__ */ e.createElement(
            r,
            {
              onClick: n,
              type: "reset",
              icon: "cancel",
              svgIcon: D
            },
            x
          ))
        )
      }
    )),
    document.body
  ));
};
export {
  ue as GridEditDialog
};
