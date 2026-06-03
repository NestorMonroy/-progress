/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { arrowRotateCcwIcon as o } from "@progress/kno-svg-icons";
import { UndoRedo as t } from "./utils.mjs";
import { keys as n } from "../messages.mjs";
const e = { action: "undo", icon: "reset", svgIcon: o, titleKey: n.undo }, r = t(e);
r.displayName = "Undo";
export {
  r as Undo
};
