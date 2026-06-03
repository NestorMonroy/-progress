/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const i=require("@progress/kno-licensing"),g=require("./canUseDOM.js"),d=["tlk.com","progress.com","stackblitz.io","csb.app"],h="components/getting-started/free-vs-premium?utm_medium=product&utm_source=console&utm_campaign=dt_knoreact_freemium",n=new Map,k=()=>{const t=Array.from(n,([e,c])=>`- ${e}: ${Array.from(c).join(", ")||"all"}`).join(`
`);console.group("[WARN][Telerik and Kno UI Licensing] knoReact"),console.warn(`License check was triggered by these premium knoReact components/features
${t}
See the full list of components here: ${h}`),console.groupEnd(),n.clear()},L=(t,e)=>{const c=i.validatePackage(t),o=d.some(s=>{var r;return(r=globalThis.document)==null?void 0:r.location.hostname.endsWith(s)});if(!c&&g.canUseDOM&&e)if(n.size===0&&setTimeout(k,1e3),n.has(e.component)){const s=n.get(e.component)||[];n.set(e.component,new Set([...e.features||[],...s]))}else n.set(e.component,e.features||[]);return c||o},f=t=>i.getLicenseStatus(t).isLicenseValid,a=new WeakMap,w=t=>{var m;if(a.has(t))return a.get(t);const{version:e,productName:c}=t,o=i.getLicenseStatus(t),s=o.message,r=o.licenseType,p=(m=o.expiration)==null?void 0:m.toDateString(),l=s&&"code"in s?s.code:void 0,u={...s,code:l,licenseType:r,version:e,productName:(s==null?void 0:s.productName)||c,expiration:p};return a.set(t,u),u};exports.getLicenseMessage=w;exports.hasValidLicense=f;exports.validatePackage=L;
