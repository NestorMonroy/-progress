/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { Node, ResolvedPos } from '@progress/kno-editor-common';
import * as React from 'react';
/**
 * @hidden
 */
declare const onDownPreventDefault: {
    onMouseDown: (e: any) => any;
    onPointerDown: (e: any) => any;
};
/**
 * @hidden
 */
declare const userSelectNone: React.CSSProperties;
/**
 * @hidden
 */
declare const formatString: (input: string, ...args: Array<any>) => string;
/**
 * @hidden
 */
declare const itemRender: (li: any, itemProps: any) => any;
/**
 * @hidden
 */
declare const units: string[];
/**
 * @hidden
 */
declare const popupSettings: {
    animate: {
        openDuration: number;
        closeDuration: number;
    };
};
/**
 * @hidden
 */
declare const borderStyles: {
    textKey: string;
    text: any;
    value: string;
}[];
/**
 * @hidden
 */
declare function parentNode(pos: ResolvedPos, predicate: (node: Node) => boolean): {
    node: Node;
    depth: number;
} | null;
export { onDownPreventDefault, formatString, itemRender, units, borderStyles, popupSettings, userSelectNone, parentNode };
