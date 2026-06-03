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
export interface GanttYearViewProps extends GanttViewProps {
}
/**
 * Represents the knoReact YearView Component.
 */
export declare const GanttYearView: React.ForwardRefExoticComponent<GanttYearViewProps & React.RefAttributes<GanttViewHandle | null>>;
/** @hidden */
export declare const ganttYearViewDefaultProps: GanttYearViewProps;
