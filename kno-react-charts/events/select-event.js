/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const r=require("./preventable-event.js");class s extends r.PreventableEvent{constructor(e,t){super(t),this.axis=e.axis,this.from=e.from,this.to=e.to}}exports.SelectEvent=s;
