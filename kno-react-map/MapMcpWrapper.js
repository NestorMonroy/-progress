/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const u=require("react"),i=require("./Map.js"),a=require("@progress/kno-react-common");function f(e){const r=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const t in e)if(t!=="default"){const n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,n.get?n:{enumerable:!0,get:()=>e[t]})}}return r.default=e,Object.freeze(r)}const c=f(u),o=c.forwardRef((e,r)=>{const[t,n]=a.useMergedRef(r);return a.useWebMcpRegister("map",t,e,e.webMcp),c.createElement(i.Map,{...e,ref:n})});o.displayName="KendoReactMap";exports.MapWrapper=o;
