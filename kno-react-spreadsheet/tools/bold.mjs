/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { boldIcon as o } from "@progress/kno-svg-icons";
import { PropertyChangeTool as t } from "./utils.mjs";
import { keys as r } from "../messages.mjs";
const l = { property: "bold", icon: "bold", svgIcon: o, titleKey: r.bold }, e = t(l);
e.displayName = "Bold";
export {
  e as Bold
};
