/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const c=require("react"),r=require("@progress/kno-react-buttons"),s=require("@progress/kno-react-intl"),d=require("@progress/kno-svg-icons"),i=require("./messages/index.js");function u(e){const o=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const t in e)if(t!=="default"){const a=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(o,t,a.get?a:{enumerable:!0,get:()=>e[t]})}}return o.default=e,Object.freeze(o)}const n=u(c),g=({children:e,onCloseButtonClick:o,id:t,closeIcon:a})=>{const l=s.useLocalization();return n.createElement("div",{className:"k-window-titlebar k-dialog-titlebar",id:t},n.createElement("span",{className:"k-window-title k-dialog-title"},e),a&&n.createElement("div",{className:"k-window-titlebar-actions k-dialog-titlebar-actions"},n.createElement(r.Button,{"aria-label":l.toLanguageString(i.dialogsWindowCloseButton,i.messages[i.dialogsWindowCloseButton]),size:"xs",onClick:o,icon:"x",svgIcon:d.xIcon,fillMode:"flat",className:"k-window-titlebar-action k-dialog-titlebar-action"})))};exports.DialogTitleBar=g;
