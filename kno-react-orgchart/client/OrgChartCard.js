/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const f=require("react"),b=require("@progress/kno-react-layout"),g=require("@progress/kno-react-common"),h=require("./ClientOrgChart.js");function k(n){const e=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(n){for(const c in n)if(c!=="default"){const r=Object.getOwnPropertyDescriptor(n,c);Object.defineProperty(e,c,r.get?r:{enumerable:!0,get:()=>n[c]})}}return e.default=n,Object.freeze(e)}const l=k(f),y=n=>{const{node:e,children:c,style:r,...i}=n,[s,a]=l.useState(!1),t=l.useContext(h.OrgChartEventsContextContext),u=o=>{t.onKeyDown&&t.onKeyDown.call(void 0,{event:o,item:e})},d=o=>{t.onItemAction&&t.onItemAction.call(void 0,{event:o,item:e})},C=o=>{t.onItemContextMenu&&t.onItemContextMenu.call(void 0,{event:o,item:e})},m=o=>{t.onItemDoubleClick&&t.onItemDoubleClick.call(void 0,{event:o,item:e})};return l.createElement(b.Card,{orientation:null,className:g.classNames("k-orgchart-card",{"k-focus":s}),onClick:d,onKeyDown:u,onContextMenu:C,onDoubleClick:m,style:r,onFocus:()=>a(!0),onBlur:()=>a(!1),...i},c)};exports.OrgChartCard=y;
