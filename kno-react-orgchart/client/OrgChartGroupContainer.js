/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const g=require("react"),C=require("@progress/kno-react-common"),h=require("./ClientOrgChart.js");function y(o){const e=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(o){for(const r in o)if(r!=="default"){const c=Object.getOwnPropertyDescriptor(o,r);Object.defineProperty(e,r,c.get?c:{enumerable:!0,get:()=>o[r]})}}return e.default=o,Object.freeze(e)}const s=y(g),O=o=>{const{nodes:e,children:r,style:c,...l}=o,[i,u]=s.useState(!1),t=s.useContext(h.OrgChartEventsContextContext),a=s.useRef(null),f=n=>{t.onKeyDown&&t.onKeyDown({event:n,items:e})},d=n=>{t.onGroupAction&&t.onGroupAction({event:n,items:e})},p=n=>{u(!0),t.onGroupFocus&&t.onGroupFocus({event:n,items:e,containerRef:a})},m=n=>{u(!1),t.onGroupBlur&&t.onGroupBlur({event:n,items:e})};return s.createElement("div",{ref:a,className:C.classNames("k-orgchart-node-group-container","k-vstack",{"k-focus":i}),style:c,onKeyDown:f,onClick:d,onFocus:p,onBlur:m,...l},r)};exports.OrgChartGroupContainer=O;
