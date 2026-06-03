/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as n from "react";
import { classNames as l } from "@progress/kno-react-common";
import { provideLocalizationService as u, registerForLocalization as p } from "@progress/kno-react-intl";
import { dropFilesHere as c, messages as D } from "./messages/index.mjs";
import g from "./utils/utils.mjs";
import { UploadStatus as A } from "./UploadStatus.mjs";
const r = 100;
class E extends n.Component {
  constructor() {
    super(...arguments), this._lastDocumentDragOver = null, this._lastElementDragOver = null, this._documentActive = !1, this._elementActive = !1, this.onDocumentDragEnter = () => {
      if (!this.documentActive) {
        this.documentActive = !0;
        const e = () => {
          this.isDragOver(this._lastDocumentDragOver) && (this.documentActive = !1, clearInterval(this._documentInterval), this._documentInterval = null, this._lastDocumentDragOver = null);
        };
        this._documentInterval = setInterval(e, r);
      }
    }, this.onDocumentDragOver = () => {
      this._lastDocumentDragOver = /* @__PURE__ */ new Date();
    }, this.onElementDragEnter = () => {
      if (!this.elementActive) {
        this.elementActive = !0;
        const e = () => {
          this.isDragOver(this._lastElementDragOver) && (this.elementActive = !1, clearInterval(this._elementInterval), this._elementInterval = null, this._lastElementDragOver = null);
        };
        this._elementInterval = setInterval(e, r);
      }
    }, this.onElementDragOver = (e) => {
      e.preventDefault(), this._lastElementDragOver = /* @__PURE__ */ new Date();
    }, this.onDrop = (e) => {
      e.preventDefault();
      const t = e.dataTransfer.files;
      t.length > 0 && !this.props.disabled && this.props.onAdd && (this.props.multiple || t.length <= 1) && this.props.onAdd.call(void 0, t);
    }, this.isDragOver = (e) => (/* @__PURE__ */ new Date()).getTime() - (e || /* @__PURE__ */ new Date()).getTime() > r;
  }
  get documentActive() {
    return this._documentActive;
  }
  set documentActive(e) {
    const t = this.documentActive;
    this._documentActive = e, e !== t && this.forceUpdate();
  }
  get elementActive() {
    return this._elementActive;
  }
  set elementActive(e) {
    const t = this._elementActive;
    this._elementActive = e, e !== t && this.setState({});
  }
  componentDidMount() {
    document.addEventListener("dragenter", this.onDocumentDragEnter), document.addEventListener("dragover", this.onDocumentDragOver);
  }
  componentWillUnmount() {
    document.removeEventListener("dragenter", this.onDocumentDragEnter), document.removeEventListener("dragover", this.onDocumentDragOver);
  }
  render() {
    const { addButtonComponent: e, fileGroup: t } = this.props, m = u(this).toLanguageString(c, D[c]), v = l(
      "k-dropzone k-upload-dropzone",
      this.documentActive ? "k-dropzone-active" : "",
      this.elementActive ? "k-dropzone-hovered" : ""
    ), [s, i, o, d] = g.getFileStatus(t), a = s || i || o || d, h = l("k-dropzone-hint", {
      "k-hidden": !this.elementActive
    });
    return /* @__PURE__ */ n.createElement(
      "div",
      {
        className: v,
        onDrop: this.onDrop,
        onDragEnter: this.onElementDragEnter,
        onDragOver: this.onElementDragOver
      },
      e,
      /* @__PURE__ */ n.createElement("div", { className: h }, m),
      a && /* @__PURE__ */ n.createElement(A, { isUploading: s, isUploaded: i, isUploadFailed: o }),
      !a && /* @__PURE__ */ n.createElement("span", { className: "k-upload-status" })
    );
  }
}
p(E);
export {
  E as UploadDropZone
};
