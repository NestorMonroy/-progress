/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { WeekViewProps } from './WeekView.js';
import { Day } from '@progress/kno-date-math';
import { DateRange, SchedulerViewDateRangeArgs } from '../../models/index.js';
import * as React from 'react';
export interface WorkWeekViewProps extends WeekViewProps {
}
export declare const WorkWeekView: React.FunctionComponent<WorkWeekViewProps>;
/** @hidden */
export declare const workWeekDefaultProps: {
    name: string;
    slotDuration: number;
    slotDivisions: number;
    numberOfDays: number;
    dateRange: ({ intl, date, timezone, ...other }: SchedulerViewDateRangeArgs) => DateRange;
    title: (localization: any) => any;
    workWeekStart: Day;
    workWeekEnd: Day;
    selectedDateFormat: string;
    selectedShortDateFormat: string;
};
