/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const n=require("./base-event.js");class i extends n.BaseEvent{constructor(e,t){super(t),this.origin=e.origin,this.center=e.center,this.originalEvent=e.originalEvent}}exports.PanEvent=i;
