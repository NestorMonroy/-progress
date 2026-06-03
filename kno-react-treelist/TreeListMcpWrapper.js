/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const i=require("react"),s=require("./TreeList.js"),c=require("@progress/kno-react-common");function u(e){const r=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const t in e)if(t!=="default"){const n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,n.get?n:{enumerable:!0,get:()=>e[t]})}}return r.default=e,Object.freeze(r)}const o=u(i),a=o.forwardRef((e,r)=>{const[t,n]=c.useMergedRef(r);return c.useWebMcpRegister("treelist",t,e,e.webMcp),o.createElement(s.TreeList,{...e,ref:n})});a.displayName="KendoReactTreeList";exports.TreeListWrapper=a;
