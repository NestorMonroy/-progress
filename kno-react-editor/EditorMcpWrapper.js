/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const i=require("react"),d=require("./Editor.js"),n=require("@progress/kno-react-common");function u(e){const r=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const t in e)if(t!=="default"){const o=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,o.get?o:{enumerable:!0,get:()=>e[t]})}}return r.default=e,Object.freeze(r)}const c=u(i),a=c.forwardRef((e,r)=>{const[t,o]=n.useMergedRef(r);return n.useWebMcpRegister("editor",t,e,e.webMcp),c.createElement(d.Editor,{...e,ref:o})});a.displayName="KendoReactEditor";exports.EditorWrapper=a;
