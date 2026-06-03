/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const u=require("react"),a=require("@progress/kno-react-buttons");function p(e){const t=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const o in e)if(o!=="default"){const r=Object.getOwnPropertyDescriptor(e,o);Object.defineProperty(t,o,r.get?r:{enumerable:!0,get:()=>e[o]})}}return t.default=e,Object.freeze(t)}const n=p(u),c=n.forwardRef((e,t)=>n.createElement(a.SpeechToTextButton,{ref:t,...e}));c.displayName="PromptBoxSpeechToTextButton";exports.PromptBoxSpeechToTextButton=c;
