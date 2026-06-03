/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use strict";const p=require("react"),m=require("@progress/kno-react-common"),g=require("@progress/kno-react-buttons"),i=require("@progress/kno-svg-icons"),k=require("@progress/kno-react-intl"),a=require("../../utils.js");function v(n){const e=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(n){for(const t in n)if(t!=="default"){const c=Object.getOwnPropertyDescriptor(n,t);Object.defineProperty(e,t,c.get?c:{enumerable:!0,get:()=>n[t]})}}return e.default=n,Object.freeze(e)}const r=v(p),b=n=>{const{message:e,onUnpin:t,user:c,onReferencedMessageClick:s}=n,l=k.useLocalization(),u=r.useRef(null),d=c&&a.isAuthor(c,e),f=r.useCallback(o=>{o.preventDefault(),o.stopPropagation(),s==null||s(e.id)},[e.id,s]);return r.createElement("div",{ref:u,className:`k-message-reference ${d?"k-message-reference-sender":"k-message-reference-receiver"} k-message-pinned`,onClick:f},r.createElement(m.IconWrap,{icon:i.pinIcon}),r.createElement("div",{className:"k-message-reference-content"},e!=null&&e.isDeleted?c&&a.getDeletedMessageText(a.isAuthor(c,e),l):e==null?void 0:e.text),r.createElement("span",{className:"k-spacer"}),r.createElement(g.Button,{fillMode:"flat",size:"xs",svgIcon:i.xCircleIcon,onClick:o=>{o.stopPropagation(),t==null||t(e)}}))};module.exports=b;
