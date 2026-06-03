/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { keys as o } from "../messages.mjs";
import { ColorTool as r } from "./utils.mjs";
import { dropletIcon as e } from "@progress/kno-svg-icons";
const t = r({
  icon: "droplet",
  svgIcon: e,
  view: "palette",
  property: "background",
  titleKey: o.background,
  ariaLabel: "Background"
});
t.displayName = "BackgroundColor";
export {
  t as BackgroundColor
};
