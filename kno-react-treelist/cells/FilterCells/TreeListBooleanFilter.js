/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const l=require("react"),a=require("@progress/kno-react-data-tools"),n=require("./utils.js"),c=require("@progress/kno-react-intl");function i(e){const o=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const t in e)if(t!=="default"){const r=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(o,t,r.get?r:{enumerable:!0,get:()=>e[t]})}}return o.default=e,Object.freeze(o)}const s=i(l),u=function(e){const{operators:o,...t}=e;return s.createElement(a.BooleanFilterCell,{ariaLabel:"boolean filter",...n.localizeFilter(c.useLocalization(),o||n.booleanFilterValues),...t})};exports.TreeListBooleanFilter=u;
