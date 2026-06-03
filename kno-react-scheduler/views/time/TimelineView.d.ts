/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { MultiDayTimelineViewProps } from './MultiDayTimelineView.js';
import * as React from 'react';
/**
 * Represents the properties of the knoReact [TimelineView](components/scheduler/api/timelineview) Component.
 */
export interface TimelineViewProps extends MultiDayTimelineViewProps {
}
/**
 * Represents the knoReact [TimelineView](components/scheduler/views/timeline) Component.
 */
export declare const TimelineView: React.FunctionComponent<TimelineViewProps>;
/** @hidden */
export declare const timeLineViewDefaultProps: {
    name: string;
    title: (localization: any) => any;
    slotDuration: number;
    slotDivisions: number;
    numberOfDays: number;
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
    defaultShowWorkHours: boolean;
    columnWidth: number;
};
