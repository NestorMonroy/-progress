/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const d=require("react"),g=require("@progress/kno-react-dateinputs"),a=require("@progress/kno-date-math"),D=require("../context/SchedulerContext.js");function f(e){const n=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const t in e)if(t!=="default"){const o=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(n,t,o.get?o:{enumerable:!0,get:()=>e[t]})}}return n.default=e,Object.freeze(n)}const c=f(d),m=e=>{const{as:n=T.as,value:t,onChange:o,...s}=e,{timezone:r}=D.useSchedulerPropsContext(),i=c.useMemo(()=>p(t,r),[t,r]),l=u=>{o&&o({value:C(u.target.value,r)})};return c.createElement(n,{...s,value:i,onChange:l})},p=(e,n)=>{if(e){if(!n)return e;const t=a.toLocalDate(a.ZonedDate.fromLocalDate(e,n).toUTCDate());return t.setUTCFullYear(e.getFullYear()),t}return e},C=(e,n)=>{if(e){if(!n)return e;const t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),a.ZonedDate.fromUTCDate(t,n).toLocalDate()}return e},T={as:g.DateTimePicker};exports.ZonedDateTime=m;
