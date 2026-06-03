/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const s=require("react"),c=require("@progress/kno-react-common"),u=require("@progress/kno-react-data-tools"),m=require("../../constants/index.js");function b(e){const a=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const t in e)if(t!=="default"){const l=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(a,t,l.get?l:{enumerable:!0,get:()=>e[t]})}}return a.default=e,Object.freeze(a)}const n=b(s),o=e=>{const a=n.useCallback(d=>{e.onChange&&e.onChange({dataItem:e.dataItem,level:e.level,field:e.field,syntheticEvent:d,value:d.target.checked})},[e.onChange,e.dataItem,e.level,e.field]),t=c.useId(),l=u.useTableKeyboardNavigation(e.id),r=c.classNames({"k-selected":e.isSelected},e.className),i=n.createElement("td",{style:e.style,className:r,"aria-colindex":e.ariaColumnIndex,"aria-selected":e.isSelected,role:"gridcell",...l,[m.TREELIST_COL_INDEX_ATTRIBUTE]:e.colIndex},n.createElement("input",{checked:c.getNestedValue(e.field,e.dataItem)||!1,id:t,type:"checkbox",className:"k-checkbox",onChange:a}),n.createElement("label",{className:"k-checkbox-label",htmlFor:t}));return e.render?e.render.call(void 0,i,e):i};o.displayName="KendoReactTreeListBooleanEditor";exports.TreeListBooleanEditor=o;
