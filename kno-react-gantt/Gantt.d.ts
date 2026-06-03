/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { GanttProps } from './interfaces/GanttProps';
import * as React from 'react';
/**
 * Represents the Object which is passed to the [`ref`](https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom) callback of the Gantt component.
 */
export interface GanttHandle {
    /**
     * The current element or `null` if there is no one.
     */
    element: HTMLDivElement | null;
    /**
     * Method to allow the scroll to be set to a specific row index.
     */
    scrollIntoView: (options: {
        rowIndex?: number;
    }) => void;
    /**
     * The props of the Gantt.
     */
    props: GanttProps;
}
/**
 * Represents the Gantt component.
 *
 * @remarks
 * Supported children components are: {@link GanttWeekView}, {@link GanttDayView}, {@link GanttMonthView}, {@link GanttYearView}.
 */
export declare const Gantt: React.ForwardRefExoticComponent<GanttProps & React.RefAttributes<GanttHandle | null>>;
/** @hidden */
export declare const ganttDefaultProps: {
    taskData: never[];
    dependencyData: never[];
    columns: never[];
    rowHeight: number;
};
