/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use strict";const e=require("@progress/kno-react-common"),a=t=>{if(!t||!t.ownerDocument.defaultView)return 0;const o=t.ownerDocument.defaultView.getComputedStyle(t),n=parseFloat(o.marginTop),r=parseFloat(o.marginBottom);return t.offsetHeight+n+r},i=t=>{if(!t||!t.ownerDocument.defaultView)return 0;const o=t.ownerDocument.defaultView.getComputedStyle(t),n=parseFloat(o.marginLeft),r=parseFloat(o.marginRight);return t.offsetWidth+n+r},c={outerHeight:a,outerWidth:i,styles:e.animationStyles};module.exports=c;
