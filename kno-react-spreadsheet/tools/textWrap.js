/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const l=require("react"),i=require("@progress/kno-react-buttons"),p=require("@progress/kno-svg-icons"),g=require("@progress/kno-react-intl"),a=require("../messages.js");function d(t){const r=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(t){for(const e in t)if(e!=="default"){const n=Object.getOwnPropertyDescriptor(t,e);Object.defineProperty(r,e,n.get?n:{enumerable:!0,get:()=>t[e]})}}return r.default=t,Object.freeze(r)}const c=d(l),s=t=>{const{value:r,spreadsheetRef:e}=t,n=c.useCallback(()=>{if(e.current){const o=e.current.activeSheet();if(o){const u={command:"TextWrapCommand",options:{property:"wrap",value:!o.range(o.activeCell()).wrap()}};e.current.executeCommand(u)}}},[]);return c.createElement(i.Button,{type:"button",togglable:!0,icon:"text-wrap-arrow",svgIcon:p.textWrapArrowIcon,fillMode:"flat",title:g.useLocalization().toLanguageString(a.keys.textWrap,a.messages[a.keys.textWrap]),onClick:n,selected:r})};s.displayName="TextWrap";exports.TextWrap=s;
