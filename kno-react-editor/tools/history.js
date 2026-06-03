/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const e=require("@progress/kno-editor-common"),t=require("./proseMirrorTool.js");exports.HistoryToolNS=void 0;(r=>{r.createUndoTool=o=>t.createProseMirrorTool(o,e.undo),r.createRedoTool=o=>t.createProseMirrorTool(o,e.redo)})(exports.HistoryToolNS||(exports.HistoryToolNS={}));
