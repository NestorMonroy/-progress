/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const i=require("react"),d=require("@progress/kno-react-buttons"),c=require("@progress/kno-svg-icons"),l=require("./ClientOrgChart.js");function p(e){const t=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const n in e)if(n!=="default"){const o=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,o.get?o:{enumerable:!0,get:()=>e[n]})}}return t.default=e,Object.freeze(t)}const a=p(i),g=e=>{const{expanded:t,node:n,nodes:o}=e,r=a.useContext(l.OrgChartEventsContextContext),s=u=>{r.onExpandChange&&r.onExpandChange.call(void 0,{event:u,expand:!t,item:n,items:o})};return a.createElement(d.Button,{className:"k-orgchart-button",icon:t?"minus":"plus",tabIndex:-1,svgIcon:t?c.minusIcon:c.plusIcon,role:"presentation","aria-hidden":!0,onClick:s})};exports.ExpandButton=g;
