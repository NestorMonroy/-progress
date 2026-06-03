/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const e=require("@progress/kno-drawing"),t=require("@progress/kno-file-saver"),a=require("./knoDrawingAdapter.js");function i(r,n={},o){new a(e.drawDOM,e.exportPDF,t.saveAs,r,n).savePDF(o)}exports.savePDF=i;
