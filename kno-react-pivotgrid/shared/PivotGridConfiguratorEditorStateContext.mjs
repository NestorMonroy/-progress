/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as o from "react";
import { noop as e } from "@progress/kno-react-common";
const t = o.createContext([
  {
    expanded: [],
    rowAxes: [],
    columnAxes: [],
    measureAxes: [],
    dragItem: null,
    dropZone: null,
    dropDirection: null,
    dropTarget: null
  },
  e
]);
export {
  t as PivotGridConfiguratorEditorStateContext
};
