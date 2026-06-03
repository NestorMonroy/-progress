/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const a=require("react"),u=require("./TreeView.js"),c=require("@progress/kno-react-common");function s(e){const r=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const t in e)if(t!=="default"){const n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,n.get?n:{enumerable:!0,get:()=>e[t]})}}return r.default=e,Object.freeze(r)}const i=s(a),f=c.withIdHOC(u.TreeView),o=i.forwardRef((e,r)=>{const[t,n]=c.useMergedRef(r);return c.useWebMcpRegister("treeview",t,e,e.webMcp),i.createElement(f,{...e,ref:n})});o.displayName="KendoReactTreeView";exports.TreeViewWrapper=o;
