/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { MultiDayViewProps } from '../day/MultiDayView.js';
import * as React from 'react';
/**
 * Represents the properties of the [DayView](components/scheduler/api/dayviewprops) Component.
 */
export interface DayViewProps extends MultiDayViewProps {
}
/**
 * Represents the knoReact [DayView](components/scheduler/views/day) Component.
 */
export declare const DayView: React.FunctionComponent<DayViewProps>;
/** @hidden */
export declare const dayViewDefaultProps: {
    name: string;
    title: (localization: any) => any;
    numberOfDays: number;
    slotDuration: number;
    slotDivisions: number;
    selectedDateFormat: string;
    selectedShortDateFormat: string;
    currentTimeMarker: boolean;
    dateRange: ({ date, numberOfDays, timezone }: import('../..').SchedulerViewDateRangeArgs) => import('../..').DateRange;
    startTime: string;
    endTime: string;
    isWorkDayStart: string;
    isWorkDayEnd: string;
    workWeekStart: import('@progress/kno-date-math').Day;
    workWeekEnd: import('@progress/kno-date-math').Day;
    showCurrentTime: boolean;
    defaultShowWorkHours: boolean;
};
