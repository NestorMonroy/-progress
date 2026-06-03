/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const t=require("./base-event.js");class i extends t.BaseEvent{constructor(e,n){super(n),this.origin=e.origin,this.center=e.center,this.originalEvent=e.originalEvent}}exports.PanEndEvent=i;
