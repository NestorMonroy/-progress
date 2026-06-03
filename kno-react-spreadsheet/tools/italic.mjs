/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { italicIcon as i } from "@progress/kno-svg-icons";
import { PropertyChangeTool as t } from "./utils.mjs";
import { keys as o } from "../messages.mjs";
const c = { property: "italic", icon: "italic", svgIcon: i, titleKey: o.italic }, r = t(c);
r.displayName = "Italic";
export {
  r as Italic
};
