/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const r=require("./base-event.js");class s extends r.BaseEvent{constructor(t,e){super(e),this.category=t.category,this.nativeEvent=t.originalEvent,this.value=t.value,this.x=t.x,this.y=t.y}}exports.PlotAreaHoverEvent=s;
