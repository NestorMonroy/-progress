/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const p=require("react"),b=require("@progress/kno-react-buttons"),r=require("@progress/kno-svg-icons"),v=require("@progress/kno-react-intl"),l=require("../../messages/index.js");function L(t){const e=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(t){for(const o in t)if(o!=="default"){const n=Object.getOwnPropertyDescriptor(t,o);Object.defineProperty(e,o,n.get?n:{enumerable:!0,get:()=>t[o]})}}return e.default=t,Object.freeze(e)}const c=L(p),S=({visible:t,dir:e,canScrollLeft:o,canScrollRight:n,onScrollLeft:d,onScrollRight:m,children:a})=>{const s=v.useLocalization();if(!t)return a;const i=s.toLanguageString(l.scrollLeft,l.messages[l.scrollLeft]),u=s.toLanguageString(l.scrollRight,l.messages[l.scrollRight]),g=e!=="rtl"?i:u,f=e!=="rtl"?u:i;return c.createElement("div",{className:"k-suggestion-scrollwrap"},c.createElement(b.Button,{fillMode:"flat",size:"small",svgIcon:e==="rtl"?r.chevronRightIcon:r.chevronLeftIcon,onClick:d,disabled:!o,"aria-label":g,title:g}),a,c.createElement(b.Button,{fillMode:"flat",size:"small",svgIcon:e==="rtl"?r.chevronLeftIcon:r.chevronRightIcon,onClick:m,disabled:!n,"aria-label":f,title:f}))};exports.ScrollButtonsWrapper=S;
