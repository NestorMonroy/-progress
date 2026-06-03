/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const p=require("react"),D=require("@progress/kno-react-intl"),i=require("@progress/kno-react-common"),I=require("@progress/kno-react-buttons"),d=require("@progress/kno-date-math"),s=require("../../messages/index.js"),n=require("../../utils.js");function R(e){const a=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const t in e)if(t!=="default"){const o=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(a,t,o.get?o:{enumerable:!0,get:()=>e[t]})}}return a.default=e,Object.freeze(a)}const T=R(p),c={min:n.MIN_DATE,max:n.MAX_DATE},q=e=>{const{min:a=c.min,max:t=c.max,onClick:o,disabled:u,tabIndex:m,unstyled:r}=e,g=l=>{if(n.isInRange(n.getToday(),d.getDate(a),d.getDate(t))&&o){const k={syntheticEvent:l,nativeEvent:l.nativeEvent,value:n.dateInRange(n.getToday(),a,t),target:null,isTodayClick:!0};o(k)}},y=D.useLocalization(),f=r&&r.uCalendar,C=y.toLanguageString(s.today,s.messages[s.today]),b=i.classNames(i.uCalendar.today({c:f,disabled:u}));return T.createElement(I.Button,{className:b,onClick:g,tabIndex:m,fillMode:"flat",themeColor:"base",role:"link"},C)};exports.TodayCommand=q;exports.todayCommandDefaultProps=c;
