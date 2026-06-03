/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { ListItemProps } from '@progress/kno-react-dropdowns';
import * as React from 'react';
/**
 * @hidden
 */
export declare const findIndexes: (dragId: string, dropId: string, taskData: any[]) => {
    dragIndex: number;
    dropIndex: number;
} | null;
/**
 * @hidden
 */
export declare const closestTaskBoardElement: (node: Element) => null | {
    id: string;
    type: string;
    element: Element;
};
/**
 * @hidden
 */
export declare const itemRender: (li: React.ReactElement<HTMLLIElement>, itemProps: ListItemProps) => React.ReactElement<HTMLLIElement, string | React.JSXElementConstructor<any>>;
/**
 * @hidden
 */
export declare const valueRender: (element: any, value: any) => any;
