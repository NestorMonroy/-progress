/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as s from "react";
import { withIdHOC as x, classNames as A } from "@progress/kno-react-common";
import { UploadList as k } from "./UploadList.mjs";
import { UploadAddButton as U } from "./UploadAddButton.mjs";
import { UploadActionButtons as R } from "./UploadActionButtons.mjs";
import { UploadDropZone as F } from "./UploadDropZone.mjs";
const _ = -1, v = class v extends s.Component {
  constructor() {
    super(...arguments), this._container = null, this._uploadAddButton = null, this.focus = () => {
      if (this._uploadAddButton)
        return this._uploadAddButton.focus();
    }, this.onAdd = (o) => {
      this.props.onAdd && this.props.onAdd.call(void 0, o);
    }, this.onRetry = (o) => {
      this.props.onRetry && this.props.onRetry.call(void 0, o);
    }, this.onCancel = (o) => {
      this.props.onCancel && this.props.onCancel.call(void 0, o);
    }, this.onClear = () => {
      this.props.onClear && this.props.onClear.call(void 0);
    }, this.onUpload = () => {
      this.props.onUpload && this.props.onUpload.call(void 0);
    }, this.onRemove = (o) => {
      this.props.onRemove && this.props.onRemove.call(void 0, o);
    }, this.onKeyDown = (o) => {
      this.props.onKeyDown && this.props.onKeyDown.call(void 0, o, this.isRtl);
    }, this.onFocus = (o) => {
      this.props.onFocus && this.props.onFocus.call(void 0, o);
    }, this.onBlur = (o) => {
      this.props.onBlur && this.props.onBlur.call(void 0, o);
    }, this.onClick = (o) => {
      this.props.onClick && this.props.onClick.call(void 0, o);
    };
  }
  get async() {
    const {
      autoUpload: o,
      batch: t,
      withCredentials: r,
      saveField: d,
      saveHeaders: n,
      saveMethod: e,
      saveUrl: i,
      responseType: a,
      removeField: p,
      removeHeaders: c,
      removeMethod: h,
      removeUrl: l
    } = this.props;
    return {
      autoUpload: o,
      batch: t,
      withCredentials: r,
      saveField: d,
      saveHeaders: n,
      saveMethod: e,
      saveUrl: i,
      responseType: a,
      removeField: p,
      removeHeaders: c,
      removeMethod: h,
      removeUrl: l
    };
  }
  get groupsCount() {
    return Object.keys(this.props.groupedFiles).length;
  }
  get lastGroupIndex() {
    return this.groupsCount - 1;
  }
  get addButtonIndex() {
    return _;
  }
  get clearButtonIndex() {
    return this.lastGroupIndex + 1;
  }
  get uploadButtonIndex() {
    return this.lastGroupIndex + 2;
  }
  get isRtl() {
    return this._container && getComputedStyle(this._container).direction === "rtl" || !1;
  }
  /**
   * @hidden
   */
  get actionElement() {
    if (this._uploadAddButton)
      return this._uploadAddButton.actionElement;
  }
  /**
   * @hidden
   */
  render() {
    const {
      multiple: o,
      disabled: t,
      tabIndex: r,
      accept: d,
      showFileList: n,
      groupedFiles: e,
      navigationIndex: i,
      showActionButtons: a,
      actionsLayout: p,
      notFocusedIndex: c,
      listItemUI: h,
      id: l,
      ariaLabelledBy: y,
      ariaDescribedBy: B,
      selectMessageUI: C
    } = this.props, I = A(
      "k-upload",
      "k-upload-async",
      { "k-upload-empty": Object.keys(e).length === 0 },
      this.props.className,
      t ? "k-disabled" : ""
    ), f = `${l}-list`, g = /* @__PURE__ */ s.createElement(
      U,
      {
        id: l,
        ariaLabelledBy: y,
        ariaDescribedBy: B,
        ref: (u) => {
          this._uploadAddButton = u;
        },
        accept: d,
        async: this.async,
        addButtonIndex: this.addButtonIndex,
        navigationIndex: i,
        notFocusedIndex: c,
        tabIndex: r,
        multiple: o,
        disabled: t,
        hasFiles: e ? Object.keys(e).length > 0 : !1,
        selectMessageUI: C,
        onAdd: this.onAdd,
        onClick: this.onClick,
        ariaControls: n ? f : void 0,
        ariaExpanded: n
      }
    );
    return /* @__PURE__ */ s.createElement(
      "div",
      {
        ref: (u) => {
          this._container = u;
        },
        className: I,
        onKeyDown: this.onKeyDown,
        onFocus: this.onFocus,
        onBlur: this.onBlur
      },
      /* @__PURE__ */ s.createElement(
        F,
        {
          addButtonComponent: g,
          fileGroup: e,
          disabled: t,
          multiple: o,
          onAdd: this.onAdd
        }
      ),
      n ? /* @__PURE__ */ s.createElement(
        k,
        {
          groupedFiles: e,
          disabled: t,
          async: this.async,
          navigationIndex: i,
          listItemUI: h,
          onCancel: this.onCancel,
          onRemove: this.onRemove,
          onRetry: this.onRetry,
          onClick: this.onClick,
          listId: f
        }
      ) : void 0,
      a ? /* @__PURE__ */ s.createElement(
        R,
        {
          disabled: t,
          navigationIndex: i,
          clearButtonIndex: this.clearButtonIndex,
          uploadButtonIndex: this.uploadButtonIndex,
          actionsLayout: p,
          onUpload: this.onUpload,
          onClear: this.onClear,
          onClick: this.onClick
        }
      ) : void 0
    );
  }
};
v.defaultProps = {
  disabled: !1,
  groupedFiles: {},
  multiple: !0,
  actionsLayout: "end"
};
let m = v;
const b = x(
  m
);
b.displayName = "knoReactUploadUI";
export {
  b as UploadUI,
  m as UploadUIClassComponent
};
