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
 * Represents the object which is passed to the [`ref`](https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom) callback of the PivotGridRow component.
 */
export interface PivotGridRowHandle {
    /**
     * The properties passed to the PivotGridRow component.
     */
    props: PivotGridRowProps;
    /**
     * The DOM element of the PivotGridRow component.
     */
    element: HTMLTableRowElement | null;
}
/**
 * Represents the props of the [knoReact PivotGridRow component](components/pivotgrid/api/pivotgridrow).
 */
export interface PivotGridRowProps extends KendoMouse<PivotGridRowHandle, HTMLTableRowElement> {
    /**
     * Sets the `className` property of the top-most element of the PivotGridRow in addition to the default `k-pivotgrid-row` class.
     */
    className?: string;
    /**
     * Sets the `id` property of the top-most element of the PivotGridRow.
     */
    id?: string;
    /**
     * Sets the `children` property of the top-most element of the PivotGridRow.
     */
    children?: React.ReactNode;
    /**
     * Sets the `style` property of the top-most element of the PivotGridRow.
     */
    style?: React.CSSProperties;
    /**
     * Sets the `tabIndex` property of the top-most element of the PivotGridRow.
     */
    tabIndex?: number;
    /**
     * Represents the `path` leading to the current `row`.
     */
    path?: string[];
    /**
     * Sets the `role` property of the top-most element of the PivotGridRow.
     *
     * @remarks
     * This property is related to accessibility.
     */
    role?: string;
    /**
     * Sets the `aria-owns` property of the top-most element of the PivotGridRow.
     *
     * @remarks
     * This property is related to accessibility.
     */
    ariaOwns?: string;
    /**
     * Fires when the user clicks the PivotGridRow.
     */
    onClick?: (args: any) => void;
    /**
     * Fires when the user double-clicks the PivotGridRow.
     */
    onDoubleClick?: (args: any) => void;
    /**
     * Fires when the user presses a mouse button while the cursor is over the PivotGridRow.
     */
    onMouseDown?: (args: any) => void;
    /**
     * Fires when the cursor enters the PivotGridRow area.
     */
    onMouseEnter?: (args: any) => void;
    /**
     * Fires when the cursor leaves the PivotGridRow area.
     */
    onMouseLeave?: (args: any) => void;
    /**
     * Fires when the cursor moves within the PivotGridRow area.
     */
    onMouseMove?: (args: any) => void;
    /**
     * Fires when the cursor moves outside the PivotGridRow area.
     */
    onMouseOut?: (args: any) => void;
    /**
     * Fires when the cursor moves over the PivotGridRow area.
     */
    onMouseOver?: (args: any) => void;
    /**
     * Fires when the user releases a mouse button while the cursor is over the PivotGridRow.
     */
    onMouseUp?: (args: any) => void;
}
/**
 * Represents the [knoReact PivotGridRow component](components/pivotgrid/api/pivotgridrowprops).
 */
export declare const PivotGridRow: React.ForwardRefExoticComponent<PivotGridRowProps & React.RefAttributes<PivotGridRowHandle | null>>;
