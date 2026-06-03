/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as e from "react";
import { ToolbarItem as o } from "@progress/kno-react-buttons";
import { classNames as l } from "@progress/kno-react-common";
const f = e.forwardRef(
  (r, s) => {
    const { className: a, ...m } = r, t = e.useRef(null);
    return e.useImperativeHandle(s, () => ({ element: t.current, props: r })), /* @__PURE__ */ e.createElement(
      o,
      {
        ref: (n) => {
          n && (t.current = n.element);
        },
        className: l("k-scheduler-navigation", a),
        ...m
      },
      r.children
    );
  }
);
export {
  f as BusinessHours
};
