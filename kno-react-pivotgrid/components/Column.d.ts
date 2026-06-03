/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { KendoMouse } from '@progress/kno-react-common';
import * as React from 'react';
/**
 * Represents the object which is passed to the [`ref`](https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom) callback of the PivotGridColumn component.
 */
export interface PivotGridColumnHandle {
    /**
     * The properties passed to the PivotGridColumn component.
     */
    props: PivotGridColumnProps;
    /**
     * The DOM element of the PivotGridColumn component.
     */
    element: HTMLTableColElement | null;
}
/**
 * Represents the props of the [knoReact PivotGridColumn component](components/pivotgrid/api/pivotgridcolumn).
 */
export interface PivotGridColumnProps extends KendoMouse<PivotGridColumnHandle, HTMLTableColElement> {
    /**
     * Sets the `className` property of the top-most element of the PivotGridColumn in addition to the default `k-pivotgrid-row` class.
     */
    className?: string;
    /**
     * Sets the `id` property of the top-most element of the PivotGridColumn.
     */
    id?: string;
    /**
     * Sets the `children` property of the top-most element of the PivotGridColumn.
     */
    children?: React.ReactNode;
    /**
     * Sets the `style` property of the top-most element of the PivotGridColumn.
     */
    style?: React.CSSProperties;
    /**
     * Sets the `tabIndex` property of the top-most element of the PivotGridColumn.
     */
    tabIndex?: number;
    /**
     * Represents the `path` leading to the current `column`.
     */
    path?: string[];
    /**
     * Fires when the user clicks the PivotGridColumn.
     */
    onClick?: (args: any) => void;
    /**
     * Fires when the user double-clicks the PivotGridColumn.
     */
    onDoubleClick?: (args: any) => void;
    /**
     * Fires when the user presses a mouse button while the cursor is over the PivotGridColumn.
     */
    onMouseDown?: (args: any) => void;
    /**
     * Fires when the cursor enters the PivotGridColumn area.
     */
    onMouseEnter?: (args: any) => void;
    /**
     * Fires when the cursor leaves the PivotGridColumn area.
     */
    onMouseLeave?: (args: any) => void;
    /**
     * Fires when the cursor moves within the PivotGridColumn area.
     */
    onMouseMove?: (args: any) => void;
    /**
     * Fires when the cursor moves outside the PivotGridColumn area.
     */
    onMouseOut?: (args: any) => void;
    /**
     * Fires when the cursor moves over the PivotGridColumn area.
     */
    onMouseOver?: (args: any) => void;
    /**
     * Fires when the user releases a mouse button while the cursor is over the PivotGridColumn.
     */
    onMouseUp?: (args: any) => void;
}
/**
 * Represents the [knoReact PivotGridColumn component](components/pivotgrid/api/pivotgridcolumnprops).
 */
export declare const PivotGridColumn: React.ForwardRefExoticComponent<PivotGridColumnProps & React.RefAttributes<PivotGridColumnHandle | null>>;
