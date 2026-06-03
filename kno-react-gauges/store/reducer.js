/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const a=(t,e)=>{if(e.type)switch(e.type){case"set":return p.themeItem(t,e);case"push":return{...t,...e.payload};default:return t}else return{}},d=(t,e)=>{if(e.type)switch(e.type){case"add":return[...t,e.payload];case"remove":return t.filter(r=>r!==e.payload);default:return t}else return[]},p={configurationItem(t,e){return{...t,[e.gaugeKey]:e.payload}},collectionConfigurationItem(t,e){let r=!1;const[o,u]=e.gaugeCollectionIdxKey.split("_"),n=t[o].map((s,l)=>parseInt(u,10)===l?(r=!0,e.payload):s);return r===!1&&n.splice(parseInt(u,10),0,e.payload),{...t,[o]:n}},themeItem(t,e){let r={};const o={...r,...t},{field:u,value:n}=e.payload,s=u.split(".");let l=s.shift();for(;s.length>0;)r=r[l]=r[l]||{},l=s.shift();return r[l]=n,o}};exports.observersReducer=d;exports.themeReducer=a;
