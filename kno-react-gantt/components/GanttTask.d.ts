/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { TreeListCellProps } from '@progress/kendo-react-treelist';
import * as React from 'react';
/** @hidden */
export interface GanttTaskProps extends TreeListCellProps {
}
/** @hidden */
export interface GanttTaskHandle {
    element: HTMLDivElement | null;
    dataItem: any;
}
/** @hidden */
export declare const GanttTask: React.ForwardRefExoticComponent<GanttTaskProps & React.RefAttributes<GanttTaskHandle>>;
