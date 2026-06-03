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
export interface GanttWeekViewProps extends GanttViewProps {
}
/**
 * Represents the knoReact WeekView Component.
 */
export declare const GanttWeekView: React.ForwardRefExoticComponent<GanttWeekViewProps & React.RefAttributes<GanttViewHandle | null>>;
/** @hidden */
export declare const ganttWeekViewDefaultProps: GanttWeekViewProps;
