/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const f=require("react"),b=require("@progress/kno-react-common"),g=require("../constants/index.js");function k(e){const a=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const t in e)if(t!=="default"){const n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(a,t,n.get?n:{enumerable:!0,get:()=>e[t]})}}return a.default=e,Object.freeze(a)}const o=k(f),i=o.forwardRef((e,a)=>{const{isSelected:t,rowHeight:n,isAltRow:l,expanded:c,ariaRowIndex:d,level:s,ariaSetSize:u,ariaPosInSet:m}=e,w=b.classNames("k-table-row","k-master-row",{"k-selected":t,"k-table-alt-row":l}),R=o.useMemo(()=>n!==void 0?{height:n+"px"}:void 0,[n]),r=o.createElement("tr",{onClick:e.onClick,onDoubleClick:e.onDoubleClick,onContextMenu:e.onContextMenu,className:w,style:R,ref:a,"aria-expanded":c,role:"row","aria-rowindex":d,"aria-level":s.length,"aria-posinset":m,"aria-setsize":u,[g.TREELIST_ROW_INDEX_ATTRIBUTE]:e.rowIndex},e.children);return o.createElement(o.Fragment,null,e.render?e.render.call(void 0,r,e):r)});i.displayName="KendoReactTreeListRow";exports.TreeListRow=i;
