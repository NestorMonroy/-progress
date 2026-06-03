/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const s=require("./base-event.js");class n extends s.BaseEvent{constructor(t,e){super(e),this.value=t.value,this.point=t.point,this.series=t.series,this.currentState=t.currentState,this.nextState=t.nextState}}exports.DrilldownEvent=n;
