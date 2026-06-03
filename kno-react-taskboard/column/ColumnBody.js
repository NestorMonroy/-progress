/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const c=require("react");function l(e){const a=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const t in e)if(t!=="default"){const r=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(a,t,r.get?r:{enumerable:!0,get:()=>e[t]})}}return a.default=e,Object.freeze(a)}const o=l(c),n=e=>o.createElement("div",{className:"k-taskboard-column-cards-container",role:"list","aria-labelledby":e.columnHeaderId},o.createElement("div",{className:"k-taskboard-column-cards",role:"presentation"},e.children));n.displayName="KendoReactTaskBoardColumnBody";exports.TaskBoardColumnBody=n;
