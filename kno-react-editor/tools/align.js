/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const v=require("react"),q=require("@progress/kno-react-buttons"),T=require("../config/toolsSettings.js"),u=require("@progress/kno-editor-common"),k=require("./utils.js"),d=require("@progress/kno-react-intl"),g=require("../messages/index.js");function y(e){const o=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const n in e)if(n!=="default"){const t=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(o,n,t.get?t:{enumerable:!0,get:()=>e[n]})}}return o.default=e,Object.freeze(o)}const m=y(v),{alignRemove:p}=T.EditorToolsSettings,O=e=>{const o=class extends m.Component{render(){const{view:t,render:c,...b}=this.props,s=t&&t.state,a=!!s&&u.isAligned(s,e.actions),f=a?p.actions:e.actions,S=a?p.commandName:e.commandName,i=d.provideLocalizationService(this),r=e.messages.title,l=m.createElement(q.Button,{onClick:()=>t&&u.alignBlocks(f,S)(t.state,t.dispatch),selected:a,togglable:!0,...k.onDownPreventDefault,title:i.toLanguageString(r,g.messages[r]),"aria-label":i.toLanguageString(r,g.messages[r]),...e.props,...b});return c?c.call(void 0,l,{view:t}):l}};return d.registerForLocalization(o),o};exports.createAlignTool=O;
