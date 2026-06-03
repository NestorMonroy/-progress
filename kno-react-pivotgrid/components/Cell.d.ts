/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { KendoMouse } from '@progress/kno-react-common';
import { PivotDataItem } from '@progress/kno-pivotgrid-common';
import * as React from 'react';
/**
 * Represents the object which is passed to the [`ref`](https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom) callback of the PivotGridCell component.
 */
export interface PivotGridCellHandle {
    /**
     * The properties passed to the PivotGridCell component.
     */
    props: PivotGridCellProps;
    /**
     * The DOM element of the PivotGridCell component.
     */
    element: HTMLTableCellElement | null;
}
/**
 * Represents the props of the [knoReact PivotGridCell component](components/pivotgrid/api/pivotgridcell).
 */
export interface PivotGridCellProps extends KendoMouse<PivotGridCellHandle, HTMLTableCellElement> {
    /**
     * Represents the `dataItem` of the PivotGridCell.
     *
     * The `dataItem` is a single [PivotDataItem](components/pivotgrid/api/pivotdataitem) object.
     */
    dataItem: PivotDataItem;
    /**
     * Sets the `id` property of the top-most element of the PivotGridCell.
     */
    id?: string;
    /**
     * Sets the `className` property of the top-most element of the PivotGridCell in addition to the default `k-pivotgrid-cell` class.
     */
    className?: string;
    /**
     * Sets the `tabIndex` property of the top-most element of the PivotGridCell.
     */
    tabIndex?: number;
    /**
     * Sets the `children` property of the top-most element of the PivotGridCell.
     */
    children?: React.ReactNode;
    /**
     * Sets the `style` property of the top-most element of the PivotGridCell.
     */
    style?: React.CSSProperties;
    /**
     * Represents the columns `path` leading to the current cell.
     */
    columnPath?: string[];
    /**
     * Represents the row `path` leading to the current cell.
     */
    rowPath?: string[];
    /**
     * Indicates if the current cell represents a `total` value.
     */
    total?: boolean;
    /**
     * Sets the `role` property of the top-most element of the PivotGridCell.
     *
     * @remarks
     * This property is related to accessibility.
     */
    role?: string;
    /**
     * Sets the `aria-describedby` property of the top-most element of the PivotGridCell.
     *
     * @remarks
     * This property is related to accessibility.
     */
    ariaDescribedby?: string;
    /**
     * Fires when the user clicks the PivotGridCell.
     */
    onClick?: (args: any) => void;
    /**
     * Fires when the user double-clicks the PivotGridCell.
     */
    onDoubleClick?: (args: any) => void;
    /**
     * Fires when the user presses a mouse button while the cursor is over the PivotGridCell.
     */
    onMouseDown?: (args: any) => void;
    /**
     * Fires when the cursor enters the PivotGridCell area.
     */
    onMouseEnter?: (args: any) => void;
    /**
     * Fires when the cursor leaves the PivotGridCell area.
     */
    onMouseLeave?: (args: any) => void;
    /**
     * Fires when the cursor moves within the PivotGridCell area.
     */
    onMouseMove?: (args: any) => void;
    /**
     * Fires when the cursor moves outside the PivotGridCell area.
     */
    onMouseOut?: (args: any) => void;
    /**
     * Fires when the cursor moves over the PivotGridCell area.
     */
    onMouseOver?: (args: any) => void;
    /**
     * Fires when the user releases a mouse button while the cursor is over the PivotGridCell.
     */
    onMouseUp?: (args: any) => void;
}
/**
 * Represents the [knoReact PivotGridCell component](components/pivotgrid/api/pivotgridcellprops).
 */
export declare const PivotGridCell: React.ForwardRefExoticComponent<PivotGridCellProps & React.RefAttributes<PivotGridCellHandle | null>>;
