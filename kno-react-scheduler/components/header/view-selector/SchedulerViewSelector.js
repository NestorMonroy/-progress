/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const u=require("react"),s=require("@progress/kno-react-buttons"),i=require("@progress/kno-react-common");function d(e){const r=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const t in e)if(t!=="default"){const c=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,c.get?c:{enumerable:!0,get:()=>e[t]})}}return r.default=e,Object.freeze(r)}const n=d(u),a=n.forwardRef((e,r)=>{const{className:t,...c}=e,o=n.useRef(null);return n.useImperativeHandle(r,()=>({element:o.current,props:e})),n.createElement(s.ToolbarItem,{ref:l=>{l&&(o.current=l.element)},className:i.classNames("k-scheduler-views",t),...c},e.children)});a.displayName="KendoReactSchedulerViewSelector";exports.SchedulerViewSelector=a;
