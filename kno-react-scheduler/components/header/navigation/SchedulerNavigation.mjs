/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as e from "react";
import { ToolbarItem as m } from "@progress/kno-react-buttons";
import { classNames as o } from "@progress/kno-react-common";
const s = e.forwardRef(
  (r, l) => {
    const { className: n, ...c } = r, t = e.useRef(null);
    return e.useImperativeHandle(l, () => ({ element: t.current, props: r })), /* @__PURE__ */ e.createElement(
      m,
      {
        ref: (a) => {
          a && (t.current = a.element);
        },
        className: o(n),
        ...c
      },
      r.children
    );
  }
);
s.displayName = "KendoReactSchedulerSchedulerNavigation";
export {
  s as SchedulerNavigation
};
