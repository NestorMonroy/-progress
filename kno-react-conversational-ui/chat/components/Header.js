/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use strict";const n=require("react"),a=require("@progress/kno-react-buttons");function o(e){const r=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const t in e)if(t!=="default"){const c=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,c.get?c:{enumerable:!0,get:()=>e[t]})}}return r.default=e,Object.freeze(r)}const s=o(n),l=e=>s.createElement(a.Toolbar,{className:"k-chat-header",size:"small"},e.children);module.exports=l;
