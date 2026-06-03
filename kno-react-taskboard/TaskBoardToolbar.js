/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const l=require("react"),n=require("prop-types"),s=require("@progress/kno-react-common");function d(e){const t=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const a in e)if(a!=="default"){const o=Object.getOwnPropertyDescriptor(e,a);Object.defineProperty(t,a,o.get?o:{enumerable:!0,get:()=>e[a]})}}return t.default=e,Object.freeze(t)}const c=d(l),r=e=>{const{className:t,style:a,children:o}=e;return c.createElement("div",{style:a,className:s.classNames("k-taskboard-header",t)},c.createElement("div",{className:"k-taskboard-toolbar k-toolbar",role:"toolbar","aria-label":"Toolbar"},o))};r.propTypes={children:n.node};r.displayName="KendoReactTaskBoardToolbar";exports.TaskBoardToolbar=r;
