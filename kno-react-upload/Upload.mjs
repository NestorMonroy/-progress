/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as S from "react";
import s from "prop-types";
import { validatePackage as E, getLicenseMessage as b, getTabIndex as w, WatermarkOverlay as T } from "@progress/kno-react-common";
import { UploadFileStatus as p } from "./interfaces/UploadFileStatus.mjs";
import { UploadNavigation as x } from "./UploadNavigation.mjs";
import C from "./utils/utils.mjs";
import d from "./utils/stateUtils.mjs";
import v from "./utils/connectionUtils.mjs";
import D from "./utils/validationUtils.mjs";
import { packageMetadata as y } from "./package-metadata.mjs";
const F = class F extends S.Component {
  constructor(m) {
    super(m), this._https = {}, this._lastEmittedState = null, this.invoke = (i, ...e) => {
      i && i(...e);
    }, this._uploadNavigation = null, this.showLicenseWatermark = !1, this.focus = () => {
      this._uploadNavigation && this._uploadNavigation.focus();
    }, this.triggerUpload = () => {
      this.onUpload();
    }, this.uploadFiles = (i) => {
      const e = this.async;
      d.setFilesStatus(i, p.Uploading), d.groupForEach(i, (o, a) => {
        var u;
        const n = v.cloneRequestHeaders(e.saveHeaders || {}), h = {
          target: this,
          files: o,
          headers: n,
          additionalData: {}
        };
        this.invoke(this.props.onBeforeUpload, h);
        const c = v.populateRequestOptions(h.headers, this.async), f = v.populateUploadFormData(
          o,
          e.saveField,
          h.additionalData
        );
        if (this.isCustomSave)
          this.props.saveUrl(
            o,
            { formData: f, requestOptions: c },
            this.onUploadProgress
          ).then((r) => this.onUploadSuccess(r.uid)).catch((r) => this.onUploadError(r.uid));
        else {
          const r = new XMLHttpRequest();
          this._https[a] = () => r.abort(), r.open(e.saveMethod, e.saveUrl, !0), r.withCredentials = (u = c.withCredentials) != null ? u : !0, r.responseType = c.responseType || "json", Object.entries(c.headers || {}).forEach(([l, g]) => {
            r.setRequestHeader(l, g);
          }), r.upload.onprogress = (l) => this.onUploadProgress(a, l), r.onload = () => {
            r.status >= 200 && r.status < 300 ? this.onUploadSuccess(a, {
              response: r.response,
              status: r.status,
              statusText: r.statusText,
              request: r
            }) : this.onUploadError(a, {
              response: r.response,
              status: r.status,
              statusText: r.statusText,
              request: r
            });
          }, r.onerror = () => this.onUploadError(a, {
            response: r.response,
            status: r.status,
            statusText: r.statusText,
            request: r
          }), r.onabort = () => {
          }, r.send(f);
        }
      });
    }, this.removeFiles = (i) => {
      const e = this.async;
      d.groupForEach(i, (o, a) => {
        var r;
        const n = v.cloneRequestHeaders(e.removeHeaders || {}), h = {
          target: this,
          files: o,
          headers: n,
          additionalData: {}
        };
        this.invoke(this.props.onBeforeRemove, h);
        const c = o.map((l) => l.name), f = v.populateRequestOptions(h.headers, this.async), u = v.populateRemoveFormData(
          c,
          e.removeField,
          h.additionalData
        );
        if (this.isCustomRemove)
          this.props.removeUrl(o, { formData: u, requestOptions: f }).then((l) => this.onRemoveSuccess(l.uid)).catch((l) => this.onRemoveError(l.uid));
        else {
          const l = new XMLHttpRequest();
          l.open(e.removeMethod, e.removeUrl, !0), l.withCredentials = (r = f.withCredentials) != null ? r : !0, l.responseType = f.responseType || "json", Object.entries(f.headers || {}).forEach(([g, R]) => {
            l.setRequestHeader(g, R);
          }), l.onload = () => {
            l.status >= 200 && l.status < 300 ? this.onRemoveSuccess(a, {
              response: l.response,
              status: l.status,
              statusText: l.statusText,
              request: l
            }) : this.onRemoveError(a, {
              response: l.response,
              status: l.status,
              statusText: l.statusText,
              request: l
            });
          }, l.onerror = () => this.onRemoveError(a, {
            response: l.response,
            status: l.status,
            statusText: l.statusText,
            request: l
          }), l.send(u);
        }
      });
    }, this.onUpload = () => {
      const i = this.fileStateCopy, e = d.groupFilesByUid(i), o = d.filesForUpload(e);
      this.uploadFiles(o);
      const a = () => {
        if (this.props.onStatusChange) {
          const n = d.flatFileGroup(o), t = {
            target: this,
            newState: i,
            affectedFiles: n
          };
          this.invoke(this.props.onStatusChange, t);
        }
      };
      this.isControlled ? a() : this.setState({ files: i }, a);
    }, this.onAdd = (i) => {
      let e = C.getAllFileInfo(i), o;
      if (e = C.assignGuidToFiles(e, this.async.batch), D.validateFiles(e, this.props.restrictions), this.props.multiple ? o = this.fileStateCopy : o = [], d.addMany(e, o), this.async.autoUpload) {
        const n = d.groupFilesByUid(o);
        this.uploadFiles(d.filesForUpload(n));
      }
      const a = () => {
        if (this.props.onAdd) {
          const n = {
            target: this,
            newState: o,
            affectedFiles: e
          };
          this.invoke(this.props.onAdd, n);
        }
      };
      this.isControlled ? a() : this.setState({ files: o }, a);
    }, this.onUploadProgress = (i, e) => {
      const o = Math.round(100 * e.loaded / (e.total || 0)) || 0, a = () => {
        if (this.props.onProgress) {
          const n = this.fileStateCopy, t = n.filter((c) => c.uid === i);
          this.setFilesProgress(t, o), this._lastEmittedState = n;
          const h = {
            target: this,
            newState: n,
            affectedFiles: t
          };
          this.invoke(this.props.onProgress, h);
        }
      };
      this.isControlled ? a() : this.setState((n) => {
        const t = n.files, h = t.filter((c) => c.uid === i);
        if (this.setFilesProgress(h, o), !!h.length)
          return { files: t };
      }, a);
    }, this.onUploadSuccess = (i, e) => {
      const o = this.fileStateCopy, a = o.filter((t) => t.uid === i);
      a.forEach((t) => {
        t.status = p.Uploaded, t.progress = 100;
      }), this._lastEmittedState = o, delete this._https[i];
      const n = () => {
        if (this.props.onStatusChange) {
          const t = {
            target: this,
            newState: o,
            affectedFiles: a,
            response: e ? v.convertResponse(e) : void 0
          };
          this.invoke(this.props.onStatusChange, t);
        }
      };
      this.isControlled ? n() : this.setState({ files: o }, n);
    }, this.onUploadError = (i, e) => {
      const o = this.fileStateCopy, a = o.filter((t) => t.uid === i);
      if (a.forEach((t) => {
        t.status = p.UploadFailed;
      }), this._lastEmittedState = o, delete this._https[i], !a.length)
        return;
      const n = () => {
        if (this.props.onStatusChange) {
          const t = {
            target: this,
            newState: o,
            affectedFiles: a,
            response: e ? v.convertResponse(e) : void 0
          };
          this.invoke(this.props.onStatusChange, t);
        }
      };
      this.isControlled ? n() : this.setState({ files: o }, n);
    }, this.onRemove = (i) => {
      const e = this.fileStateCopy, o = e.filter((t) => t.uid === i), a = e.filter((t) => t.uid !== i);
      if ([
        p.Uploaded,
        p.Initial,
        p.RemoveFailed
      ].indexOf(o[0].status) > -1) {
        const t = {
          [i]: o
        };
        d.setFilesStatus(t, p.Removing), this.removeFiles(t);
        const h = () => {
          if (this.props.onStatusChange) {
            const c = {
              target: this,
              newState: e,
              affectedFiles: o
            };
            this.invoke(this.props.onStatusChange, c);
          }
        };
        this.isControlled ? h() : this.setState({ files: e }, h);
      } else {
        const t = () => {
          if (this.props.onRemove) {
            const h = {
              target: this,
              newState: a,
              affectedFiles: o
            };
            this.invoke(this.props.onRemove, h);
          }
        };
        this.isControlled ? t() : this.setState({ files: a }, t);
      }
    }, this.onRemoveSuccess = (i, e) => {
      const o = this.fileStateCopy, a = o.filter((h) => h.uid === i), n = o.filter((h) => h.uid !== i);
      this._lastEmittedState = n;
      const t = () => {
        if (this.props.onRemove) {
          const h = {
            target: this,
            newState: n,
            affectedFiles: a,
            response: e ? v.convertResponse(e) : void 0
          };
          this.invoke(this.props.onRemove, h);
        }
      };
      this.isControlled ? t() : this.setState({ files: n }, t);
    }, this.onRemoveError = (i, e) => {
      const o = this.fileStateCopy, a = o.filter((t) => t.uid === i);
      a.forEach((t) => {
        t.status = p.RemoveFailed;
      }), this._lastEmittedState = o;
      const n = () => {
        if (this.props.onStatusChange) {
          const t = {
            target: this,
            newState: o,
            affectedFiles: a,
            response: e ? v.convertResponse(e) : void 0
          };
          this.invoke(this.props.onStatusChange, t);
        }
      };
      this.isControlled ? n() : this.setState({ files: o }, n);
    }, this.onRetry = (i) => {
      const e = this.fileStateCopy, o = d.groupFilesByUid(e.filter((n) => n.uid === i));
      d.setFilesStatus(o, p.Uploading), this.uploadFiles(o);
      const a = () => {
        if (this.props.onStatusChange) {
          const n = d.flatFileGroup(o), t = {
            target: this,
            newState: e,
            affectedFiles: n
          };
          this.invoke(this.props.onStatusChange, t);
        }
      };
      this.isControlled ? a() : this.setState({ files: e }, a);
    }, this.onCancel = (i) => {
      const e = this.fileStateCopy, o = e.filter((t) => t.uid !== i), a = e.filter((t) => t.uid === i);
      if (this._https[i] && (this._https[i](), delete this._https[i]), this.props.onCancel) {
        const t = {
          target: this,
          uid: i
        };
        this.invoke(this.props.onCancel, t);
      }
      const n = () => {
        if (this.props.onRemove) {
          const t = {
            target: this,
            newState: o,
            affectedFiles: a
          };
          this.invoke(this.props.onRemove, t);
        }
      };
      this.isControlled ? n() : this.setState({ files: o }, n);
    }, this.onClear = () => {
      if (!this.files.length)
        return;
      Object.keys(this._https).forEach((e) => {
        this._https[e]();
      }), this._https = {};
      const i = () => {
        if (this.props.onRemove) {
          const e = {
            target: this,
            newState: [],
            affectedFiles: this.fileStateCopy
          };
          this.invoke(this.props.onRemove, e);
        }
      };
      this.isControlled ? i() : this.setState({ files: [] }, i);
    }, this.showLicenseWatermark = !E(y, { component: "Upload" }), this.licenseMessage = b(y), this.state = {
      files: m.defaultFiles || []
    };
  }
  get async() {
    const {
      autoUpload: m,
      batch: i,
      removeField: e,
      removeHeaders: o,
      removeMethod: a,
      removeUrl: n,
      responseType: t,
      saveField: h,
      saveHeaders: c,
      saveMethod: f,
      saveUrl: u,
      withCredentials: r
    } = this.props;
    return {
      autoUpload: m,
      batch: i,
      removeField: e,
      removeHeaders: o,
      removeMethod: a,
      removeUrl: n,
      responseType: t,
      saveField: h,
      saveHeaders: c,
      saveMethod: f,
      saveUrl: u,
      withCredentials: r
    };
  }
  get files() {
    return (this.isControlled ? this.props.files : this.state.files) || [];
  }
  get isControlled() {
    return !this.props.defaultFiles;
  }
  get isCustomSave() {
    return this.props.saveUrl && typeof this.props.saveUrl == "function";
  }
  get isCustomRemove() {
    return this.props.removeUrl && typeof this.props.removeUrl == "function";
  }
  get fileStateCopy() {
    return this._lastEmittedState ? d.copyState(this._lastEmittedState) : this.isControlled ? d.copyState(this.props.files) : d.copyState(this.state.files);
  }
  /**
   * @hidden
   */
  componentDidUpdate() {
    this._lastEmittedState = null;
  }
  /**
   * @hidden
   */
  get actionElement() {
    if (this._uploadNavigation)
      return this._uploadNavigation.actionElement;
  }
  /**
   * @hidden
   */
  setFilesProgress(m, i) {
    m.forEach((e) => {
      e.progress = i;
    });
  }
  /**
   * @hidden
   */
  render() {
    var l;
    const {
      showFileList: m,
      onAdd: i,
      onRemove: e,
      onCancel: o,
      autoUpload: a,
      showActionButtons: n,
      actionsLayout: t,
      tabIndex: h,
      disabled: c,
      ...f
    } = this.props, u = d.groupFilesByUid(this.files), r = d.filesForUpload(u);
    return /* @__PURE__ */ S.createElement(S.Fragment, null, /* @__PURE__ */ S.createElement(
      x,
      {
        groupedFiles: u,
        className: this.props.className,
        showFileList: m && !!Object.keys(u).length,
        showActionButtons: n && !a && (!!Object.keys(r).length || !!((l = this.props.defaultFiles) != null && l.length)),
        actionsLayout: t,
        autoUpload: a,
        disabled: c,
        onAdd: this.onAdd,
        onRemove: this.onRemove,
        onClear: this.onClear,
        onUpload: this.onUpload,
        onRetry: this.onRetry,
        onCancel: this.onCancel,
        tabIndex: w(h, c),
        ref: (g) => {
          this._uploadNavigation = g;
        },
        ...f
      }
    ), this.showLicenseWatermark && /* @__PURE__ */ S.createElement(T, { message: this.licenseMessage }));
  }
};
F.defaultProps = {
  autoUpload: !0,
  batch: !1,
  removeField: "fileNames",
  removeHeaders: {},
  removeMethod: "POST",
  removeUrl: "",
  responseType: "json",
  saveField: "files",
  saveHeaders: {},
  saveMethod: "POST",
  saveUrl: "",
  withCredentials: !0,
  restrictions: {
    allowedExtensions: [],
    maxFileSize: 0,
    minFileSize: 0
  },
  multiple: !0,
  showFileList: !0,
  showActionButtons: !0,
  actionsLayout: "end",
  disabled: !1
}, F.propTypes = {
  autoUpload: s.bool,
  batch: s.bool,
  withCredentials: s.bool,
  saveField: s.string,
  saveHeaders: s.object,
  saveMethod: s.string,
  saveUrl: s.oneOfType([s.string, s.func]),
  responseType: s.oneOf(["arraybuffer", "blob", "json", "text"]),
  removeField: s.string,
  removeHeaders: s.object,
  removeMethod: s.string,
  removeUrl: s.oneOfType([s.string, s.func]),
  multiple: s.bool,
  disabled: s.bool,
  showFileList: s.bool,
  showActionButtons: s.bool,
  actionsLayout: s.oneOf(["start", "center", "end", "stretched"]),
  tabIndex: s.number,
  accept: s.string,
  listItemUI: s.oneOfType([
    s.func,
    s.string,
    s.shape({ render: s.func.isRequired })
  ]),
  restrictions: s.shape({
    allowedExtensions: s.arrayOf(s.string),
    maxFileSize: s.number,
    minFileSize: s.number
  }),
  files: s.arrayOf(
    s.shape({
      uid: s.string,
      name: s.string,
      extension: s.string,
      size: s.number,
      validationErrors: s.arrayOf(s.string),
      status: s.oneOf([
        p.Initial,
        p.RemoveFailed,
        p.Removing,
        p.Selected,
        p.UploadFailed,
        p.Uploaded,
        p.Uploading
      ]),
      progress: s.number,
      getRawFile: s.func
    })
  ),
  defaultFiles: s.arrayOf(
    s.shape({
      uid: s.string,
      name: s.string,
      extension: s.string,
      size: s.number,
      validationErrors: s.arrayOf(s.string),
      status: s.oneOf([
        p.Initial,
        p.RemoveFailed,
        p.Removing,
        p.Selected,
        p.UploadFailed,
        p.Uploaded,
        p.Uploading
      ]),
      progress: s.number,
      getRawFile: s.func
    })
  )
};
let U = F;
export {
  U as Upload
};
