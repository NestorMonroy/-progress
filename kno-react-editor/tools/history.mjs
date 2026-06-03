/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { undo as a, redo as d } from "@progress/kno-editor-common";
import { createProseMirrorTool as e } from "./proseMirrorTool.mjs";
var t;
((r) => {
  r.createUndoTool = (o) => e(o, a), r.createRedoTool = (o) => e(o, d);
})(t || (t = {}));
export {
  t as HistoryToolNS
};
