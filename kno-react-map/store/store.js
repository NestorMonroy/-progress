/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use strict";const i=require("@progress/kno-react-common"),u=o=>{let s,t=[];const n=()=>s,c=e=>{s=o(s,e),i.canUseDOM&&t.forEach(r=>r())},a=e=>(t.push(e),()=>t=t.filter(r=>r!==e));return c({}),{getState:n,dispatch:c,subscribe:a}};module.exports=u;
