/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { arrowRotateCwIcon as o } from "@progress/kno-svg-icons";
import { UndoRedo as e } from "./utils.mjs";
import { keys as r } from "../messages.mjs";
const t = { action: "redo", icon: "reload", svgIcon: o, titleKey: r.redo }, d = e(t);
d.displayName = "Redo";
export {
  d as Redo
};
