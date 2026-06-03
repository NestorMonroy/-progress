/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const f=require("react"),v=require("@progress/kno-react-buttons"),P=require("./utils.js"),m=require("@progress/kno-react-intl"),p=require("../messages/index.js"),N=require("@progress/kno-react-common");function S(e){const o=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const t in e)if(t!=="default"){const n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(o,t,n.get?n:{enumerable:!0,get:()=>e[t]})}}return o.default=e,Object.freeze(o)}const b=S(f),k=(e,o)=>{const t=class extends b.Component{render(){const{view:r,render:c,...i}=this.props,l=m.provideLocalizationService(this),a=e.messages.title,u=r&&r.state,s=u?!o(u):!1,d=b.createElement(v.Button,{onClick:s?void 0:()=>r&&o(r.state,g=>r.dispatch(g.setMeta("commandName",e.commandName))),"aria-disabled":s?!0:void 0,...P.onDownPreventDefault,title:l.toLanguageString(a,p.messages[a]),"aria-label":l.toLanguageString(a,p.messages[a]),...e.props,...i,className:N.classNames(i.className,e.props.className,{"k-disabled":s})});return c?c.call(void 0,d,{view:r}):d}};return m.registerForLocalization(t),t};exports.createProseMirrorTool=k;
