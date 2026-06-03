/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const a=require("react"),s=require("@progress/kno-svg-icons"),l=require("@progress/kno-react-buttons"),i=require("@progress/kno-react-intl"),o=require("../messages.js");function u(e){const t=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const n in e)if(n!=="default"){const r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:()=>e[n]})}}return t.default=e,Object.freeze(t)}const c=u(a),g=e=>{const{spreadsheetRef:t}=e,n=c.useCallback(()=>{t.current&&t.current.executeCommand({command:"PropertyCleanCommand"})},[]);return c.createElement(l.Button,{type:"button",icon:"clean-css",svgIcon:s.clearCssIcon,fillMode:"flat",onClick:n,title:i.useLocalization().toLanguageString(o.keys.cleanFormatting,o.messages[o.keys.cleanFormatting])})};exports.CleanFormatting=g;
