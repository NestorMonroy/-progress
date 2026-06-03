/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const l=require("react"),u=require("./Sortable.js"),n=require("@progress/kno-react-common");function i(e){const r=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const t in e)if(t!=="default"){const o=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,o.get?o:{enumerable:!0,get:()=>e[t]})}}return r.default=e,Object.freeze(r)}const a=i(l),c=a.forwardRef((e,r)=>{const[t,o]=n.useMergedRef(r);return n.useWebMcpRegister("sortable",t,e,e.webMcp),a.createElement(u.Sortable,{...e,ref:o})});c.displayName="KendoReactSortable";exports.SortableWrapper=c;
