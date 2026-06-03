/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const d=require("react"),c=require("@progress/kno-react-common"),u=require("@progress/kno-react-data-tools");function b(e){const a=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const t in e)if(t!=="default"){const n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(a,t,n.get?n:{enumerable:!0,get:()=>e[t]})}}return a.default=e,Object.freeze(a)}const l=b(d),i=e=>{const a=l.useCallback(s=>{e.selectionChange&&e.selectionChange({syntheticEvent:s})},[e.selectionChange]),t=c.useId(),n=c.getNestedValue(e.field,e.dataItem),r=u.useTableKeyboardNavigation(e.id),o=l.createElement("td",{style:e.style,className:c.classNames("k-table-td",e.className),"aria-colindex":e.ariaColumnIndex,role:"gridcell",...r},l.createElement("input",{checked:typeof n=="boolean"&&n,id:t,type:"checkbox",className:"k-checkbox",onChange:a}),l.createElement("label",{className:"k-checkbox-label",htmlFor:t}));return e.render?e.render.call(void 0,o,e):o};i.displayName="KendoReactTreeListSelectionCell";exports.TreeListSelectionCell=i;
