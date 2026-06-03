/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const s=require("react"),a=require("@progress/kno-react-common"),c=require("./ListViewItemContext.js");function l(e){const i=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const t in e)if(t!=="default"){const n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(i,t,n.get?n:{enumerable:!0,get:()=>e[t]})}}return i.default=e,Object.freeze(i)}const r=l(s),u=e=>{const{children:i,style:t,className:n}=e,o=r.useContext(c.ListViewItemContext);return r.createElement("div",{role:"listitem",style:t,className:a.classNames("k-listview-item",n),"aria-posinset":o?o.index+1:void 0,"aria-setsize":o?o.totalCount:void 0},i)};exports.ListViewItemWrapper=u;
