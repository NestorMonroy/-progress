/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";
"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const p=require("react"),g=require("../navigation/hooks.js"),h=require("@progress/kno-react-common");function S(e){const a=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const t in e)if(t!=="default"){const r=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(a,t,r.get?r:{enumerable:!0,get:()=>e[t]})}}return a.default=e,Object.freeze(a)}const i=S(p),c=e=>{const{ariaSort:a,colSpan:t,rowSpan:r,columnId:l,navigatable:n,ariaColumnIndex:s,ariaLabel:u,ariaSelected:d,ariaDescription:v,ariaHasPopup:b,...f}=e,m=g.useTableKeyboardNavigation(l,n),o=i.useRef(null);return i.useEffect(()=>{o.current&&n&&h.disableNavigatableContainer(o.current)},[n]),i.createElement("th",{ref:o,"aria-sort":a,"aria-label":u,"aria-colindex":s,"aria-selected":d,"aria-haspopup":b||void 0,colSpan:t,rowSpan:r,...m,...f},e.children)};c.displayName="KendoReactHeaderThElement";exports.HeaderThElement=c;
