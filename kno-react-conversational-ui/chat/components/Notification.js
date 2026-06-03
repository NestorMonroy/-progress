/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use strict";const a=require("react"),c=require("@progress/kno-react-animation"),i=require("@progress/kno-react-notification");function s(e){const t=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const n in e)if(n!=="default"){const o=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,o.get?o:{enumerable:!0,get:()=>e[n]})}}return t.default=e,Object.freeze(t)}const r=s(a),l=e=>{const{show:t,text:n}=e,o=()=>({position:"absolute",top:"90%",left:"50%",transform:"translate(-50%, -50%)",zIndex:1e3,pointerEvents:t?"auto":"none"});return r.createElement("div",{style:o()},r.createElement(c.Fade,null,t&&r.createElement(i.Notification,{type:{style:"inverse"},closable:!1},r.createElement("span",null,n))))};module.exports=l;
