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
export interface GanttDayViewProps extends GanttViewProps {
    /**
     * The span of an hour slot. Defaults to 1.
     */
    slotDuration?: number;
}
/**
 * Represents the knoReact DayView Component.
 */
export declare const GanttDayView: React.ForwardRefExoticComponent<GanttDayViewProps & React.RefAttributes<GanttViewHandle | null>>;
/** @hidden */
export declare const ganttDayViewDefaultProps: GanttDayViewProps;
