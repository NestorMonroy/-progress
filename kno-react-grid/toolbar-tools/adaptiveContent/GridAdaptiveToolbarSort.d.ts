/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { GridColumnState } from '../../interfaces/GridColumnState';
import * as React from 'react';
/**
 * @hidden
 */
type GridAdaptiveToolbarSortProps = {
    filtered: GridColumnState[];
    computedShow?: boolean;
    children?: React.ReactNode;
    isDisabledButton?: boolean;
    renderTitle: (column: GridColumnState) => React.ReactNode;
    onClose?: () => void;
    onClear?: (event: any) => void;
    handleSorting: (event: any, column: GridColumnState) => void;
};
/**
 * @hidden
 */
export declare const GridAdaptiveToolbarSort: (props: GridAdaptiveToolbarSortProps) => React.JSX.Element;
export {};
