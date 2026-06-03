/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { GanttViewHandle, GanttViewProps } from '../interfaces/GanttView';
import * as React from 'react';
/**
 * @hidden
 */
export interface GanttMonthViewProps extends GanttViewProps {
}
/**
 * Represents the knoReact MonthView Component.
 */
export declare const GanttMonthView: React.ForwardRefExoticComponent<GanttMonthViewProps & React.RefAttributes<GanttViewHandle | null>>;
/** @hidden */
export declare const ganttMonthViewDefaultProps: GanttMonthViewProps;
