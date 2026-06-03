/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { drawDOM as t, exportPDF as a } from "@progress/kno-drawing";
import { saveAs as m } from "@progress/kno-file-saver";
import p from "./knoDrawingAdapter.mjs";
function f(r, o = {}, e) {
  new p(t, a, m, r, o).savePDF(e);
}
export {
  f as savePDF
};
