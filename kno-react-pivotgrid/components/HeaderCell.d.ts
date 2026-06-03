/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { KendoMouse, KendoMouseEvent, SvgIconProps, IconProps as KendoIconProps, CustomComponent } from '@progress/kno-react-common';
import { AxisDataItem } from '@progress/kno-pivotgrid-common';
import * as React from 'react';
/**
 * Represents the object which is passed to the [`ref`](https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom) callback of the PivotGridHeaderCell component.
 */
export interface PivotGridHeaderCellHandle {
    /**
     * The properties passed to the PivotGridHeaderCell component.
     */
    props: PivotGridHeaderCellProps;
    /**
     * The DOM element of the PivotGridHeaderCell component.
     */
    element: HTMLTableHeaderCellElement | null;
}
/**
 * Represents the props of the [knoReact PivotGridHeaderCell component](components/pivotgrid/api/pivotgridheadercell).
 */
export interface PivotGridHeaderCellProps extends KendoMouse<PivotGridHeaderCellHandle, HTMLTableHeaderCellElement> {
    /**
     * Represents the `dataItem` of the PivotGridHeaderCell.
     *
     * The `dataItem` is a single [AxisDataItem](components/pivotgrid/api/axisdataitem) object.
     */
    dataItem: AxisDataItem;
    /**
     * Sets the `id` property of the top-most element of the PivotGridHeaderCell.
     */
    id?: string;
    /**
     * Sets the `className` property of the top-most element of the PivotGridHeaderCell in addition to the default `k-pivotgrid-cell` class.
     */
    className?: string;
    /**
     * Sets the `tabIndex` property of the top-most element of the PivotGridHeaderCell.
     */
    tabIndex?: number;
    /**
     * Sets the `children` property of the top-most element of the PivotGridHeaderCell.
     */
    children?: React.ReactNode;
    /**
     * Sets the `style` property of the top-most element of the PivotGridHeaderCell.
     */
    style?: React.CSSProperties;
    /**
     * Represents the calculated `rowSpan` property of the cell.
     */
    rowSpan?: number;
    /**
     * Represents the calculated `colSpan` property of the cell.
     */
    colSpan?: number;
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
     * Indicates if the current cell represents the first level of a hierarchy.
     */
    root?: boolean;
    /**
     * Indicates if the current cell can be expanded.
     */
    expandable?: boolean;
    /**
     * Indicates if the current cell is expanded.
     */
    expanded?: boolean;
    /**
     * @hidden
     */
    first?: boolean;
    /**
     * Overrides the default `icon` component.
     *
     * The default component is: [KendoReactIcon](components/common/api/icon).
     */
    icon?: CustomComponent<KendoIconProps & SvgIconProps>;
    /**
     * A callback, fired whenever the `icon` is clicked.
     */
    onIconClick?: (args: KendoMouseEvent<PivotGridHeaderCellHandle, HTMLSpanElement>) => void;
    /**
     * Sets the `role` property of the top-most element of the PivotGridHeaderCell.
     *
     * @remarks
     * This property is related to accessibility.
     */
    role?: string;
    /**
     * Fires when the user clicks the PivotGridHeaderCell.
     */
    onClick?: (args: any) => void;
    /**
     * Fires when the user double-clicks the PivotGridHeaderCell.
     */
    onDoubleClick?: (args: any) => void;
    /**
     * Fires when the user presses a mouse button while the cursor is over the PivotGridHeaderCell.
     */
    onMouseDown?: (args: any) => void;
    /**
     * Fires when the cursor enters the PivotGridHeaderCell area.
     */
    onMouseEnter?: (args: any) => void;
    /**
     * Fires when the cursor leaves the PivotGridHeaderCell area.
     */
    onMouseLeave?: (args: any) => void;
    /**
     * Fires when the cursor moves within the PivotGridHeaderCell area.
     */
    onMouseMove?: (args: any) => void;
    /**
     * Fires when the cursor moves outside the PivotGridHeaderCell area.
     */
    onMouseOut?: (args: any) => void;
    /**
     * Fires when the cursor moves over the PivotGridHeaderCell area.
     */
    onMouseOver?: (args: any) => void;
    /**
     * Fires when the user releases a mouse button while the cursor is over the PivotGridHeaderCell.
     */
    onMouseUp?: (args: any) => void;
}
/**
 * Represents the [knoReact PivotGridHeaderCell component](components/pivotgrid/api/pivotgridheadercellprops).
 */
export declare const PivotGridHeaderCell: React.ForwardRefExoticComponent<PivotGridHeaderCellProps & React.RefAttributes<PivotGridHeaderCellHandle | null>>;
