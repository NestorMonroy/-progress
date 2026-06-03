/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { GridColumnProps } from './interfaces/GridColumnProps';
import { GridRowSpannableSettings } from './interfaces/GridRowSpannableSettings';
import * as React from 'react';
/**
 * Represents the GridColumn component.
 *
 * @returns null
 */
export declare const GridColumn: React.FunctionComponent<GridColumnProps>;
/**
 * @hidden
 */
export declare const gridDefaultProps: {
    filterable: boolean;
    editable: boolean;
    sortable: boolean;
    resizable: boolean;
    reorderable: boolean;
    groupable: boolean;
};
/**
 * @hidden
 */
export interface ExtendedColumnProps extends GridColumnProps {
    declarationIndex: number;
    parentIndex: number;
    rowSpan: number;
    depth: number;
    colSpan: number;
    kFirst?: boolean;
    index: number;
    headerColSpan: number;
    children: ExtendedColumnProps[];
    left: number;
    right: number;
    rightBorder: boolean;
    ariaColumnIndex: number;
    isAccessible: boolean;
    /** @hidden _internal usage only */
    _type?: 'edit' | 'expand';
    rowSpannable?: Required<GridRowSpannableSettings>;
    defaultCell?: any;
    defaultHeaderCell?: any;
}
