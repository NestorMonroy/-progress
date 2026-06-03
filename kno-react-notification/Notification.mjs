/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as t from "react";
import e from "prop-types";
import { useWebMcpRegister as N, IconWrap as f } from "@progress/kno-react-common";
import { exclamationCircleIcon as v, infoCircleIcon as E, xIcon as y, checkIcon as g } from "@progress/kno-svg-icons";
const C = "Close", I = {
  success: "check",
  error: "x",
  info: "info-circle",
  warning: "exclamation-circle"
}, h = {
  success: g,
  error: y,
  info: E,
  warning: v
}, m = {
  closable: !1,
  type: { style: "none", icon: !0 }
};
let x = 0;
const p = (o) => {
  const b = t.useRef(null);
  N("notification", b, o, o.webMcp);
  const {
    children: c,
    className: a,
    dir: u,
    style: d,
    closable: i = m.closable,
    type: n = m.type,
    onClose: s
  } = o, [l] = t.useState(() => `k-notification-content-${++x}`), k = !!c;
  return /* @__PURE__ */ t.createElement(
    "div",
    {
      dir: u,
      className: "k-notification" + (a ? ` ${a}` : "") + (n.style === "none" ? "" : ` k-notification-${n.style}`) + (i ? " k-notification-closable" : ""),
      style: d,
      role: "status",
      "aria-live": "polite",
      "aria-describedby": k ? l : void 0
    },
    n.icon && /* @__PURE__ */ t.createElement(
      f,
      {
        className: "k-notification-status",
        name: I[n.style],
        icon: h[n.style]
      }
    ),
    /* @__PURE__ */ t.createElement("div", { id: l, className: "k-notification-content" }, c),
    i && /* @__PURE__ */ t.createElement("span", { className: "k-notification-actions" }, /* @__PURE__ */ t.createElement(
      "span",
      {
        className: "k-notification-action k-notification-close-action",
        title: C,
        onClick: (r) => {
          s && s({
            target: { props: o },
            syntheticEvent: r,
            nativeEvent: r.nativeEvent
          });
        },
        ...typeof i != "boolean" ? i : {}
      },
      /* @__PURE__ */ t.createElement(f, { name: "x", icon: y })
    ))
  );
};
p.displayName = "Notification";
p.propTypes = {
  className: e.string,
  closable: e.oneOfType([e.bool, e.object]),
  dir: e.string,
  style: e.object,
  type: e.shape({
    style: e.oneOf([
      "base",
      "secondary",
      "success",
      "error",
      "inverse",
      "primary",
      "tertiary",
      "warning",
      "info",
      "none"
    ]),
    icon: e.bool
  }),
  onClose: e.func
};
export {
  p as Notification,
  m as notificationDefaultProps
};
