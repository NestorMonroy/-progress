/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const n=require("./base-event.js");class s extends n.BaseEvent{constructor(e,t){super(t),this.axisRanges=e.axisRanges,this.nativeEvent=e.originalEvent}}exports.DragEndEvent=s;
