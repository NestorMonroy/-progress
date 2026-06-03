/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const v=require("react"),T=require("@progress/kno-react-buttons"),m=require("@progress/kno-editor-common"),y=require("./utils.js"),d=require("@progress/kno-react-intl"),g=require("../messages/index.js");function I(t){const e=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(t){for(const o in t)if(o!=="default"){const l=Object.getOwnPropertyDescriptor(t,o);Object.defineProperty(e,o,l.get?l:{enumerable:!0,get:()=>t[o]})}}return e.default=t,Object.freeze(e)}const p=I(v);exports.InlineFormatToolNS=void 0;(t=>{t.createInlineFormatTool=e=>{const o=class extends p.Component{render(){const{view:n,render:c,...b}=this.props,r=n&&n.state,{mark:f,altMarks:S,altStyle:k}=e,i={mark:f,altMarks:S,altStyle:k},s=d.provideLocalizationService(this),a=e.messages.title,u=p.createElement(T.Button,{onClick:()=>n&&m.toggleInlineFormat(i,r&&r.tr.setMeta("commandName",e.commandName))(n.state,n.dispatch),selected:!!r&&m.hasMark(r,i),togglable:!0,...y.onDownPreventDefault,title:s.toLanguageString(a,g.messages[a]),"aria-label":s.toLanguageString(a,g.messages[a]),...e.props,...b});return c?c.call(void 0,u,{view:n}):u}};return d.registerForLocalization(o),o}})(exports.InlineFormatToolNS||(exports.InlineFormatToolNS={}));
