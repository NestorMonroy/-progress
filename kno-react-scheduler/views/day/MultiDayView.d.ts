/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { Day } from '@progress/kno-date-math';
import { DateRange, SchedulerViewProps, SchedulerViewDateRangeArgs } from '../../models/index.js';
import { SchedulerItemProps } from '../../items/SchedulerItem.js';
import { SchedulerSlotProps } from '../../slots/SchedulerSlot.js';
import { SchedulerViewItemProps } from '../../items/SchedulerViewItem.js';
import { SchedulerViewSlotProps } from '../../slots/SchedulerViewSlot.js';
import { SchedulerEditSlotProps } from '../../slots/SchedulerEditSlot.js';
import { SchedulerEditItemProps } from '../../items/SchedulerEditItem.js';
import { DateHeaderCellProps } from '../../components/DateHeaderCell.js';
import { TimeHeaderCellProps } from '../../components/TimeHeaderCell.js';
import { SchedulerFormProps } from '../../components/SchedulerForm.js';
import * as React from 'react';
/**
 * @hidden
 */
export interface MultiDayViewProps extends SchedulerViewProps {
    /**
     * The long-date format for displaying the
     * selected date in the Scheduler toolbar.
     * Defaults to `{0:D} - {1:D}`
     * ([more information](https://www.github.com/tlk/kno-intl/blob/develop/docs/date-formatting/index.md))
     */
    selectedDateFormat?: string;
    /**
     * The short-date format for displaying the
     * selected date in the Scheduler toolbar.
     * Defaults to `{0:d} - {1-d}`
     * ([more information](https://www.github.com/tlk/kno-intl/blob/develop/docs/date-formatting/index.md))
     */
    selectedShortDateFormat?: string;
    /**
     * Overrides the general `editable` prop of the Scheduler for the specified view only.
     */
    editable?: boolean;
    /**
     * Specifies the number of days that the view will render.
     * Defaults to `1`.
     */
    numberOfDays?: number;
    /**
     * The start time of the view. The MultiDayView displays events which are visible after the start time.
     * Accepts string values in the `HH:mm` format.
     */
    startTime?: string;
    /**
     * The end time of the view. The MultiDayView displays events which are visible before the end time.
     * Accepts string values in the `HH:mm` format.
     */
    endTime?: string;
    /**
     * Specifies the step by which the currently rendered days will be changed, when using the back and forwards buttons in the toolbar navigation.
     */
    step?: number;
    /**
     * The start time of the view when `showWorkHours` is set to `true`.
     * Accepts string values in the `HH:mm` format.
     */
    workDayStart?: string;
    /** @hidden */
    isWorkDayStart?: string;
    /**
     * The end time of the view when `showWorkHours` is set to `true`.
     * Accepts string values in the `HH:mm` format.
     */
    workDayEnd?: string;
    /** @hidden */
    isWorkDayEnd?: string;
    /**
     * The start of the work week.
     */
    workWeekStart?: Day;
    /**
     * The end of the work week.
     */
    workWeekEnd?: Day;
    /**
     * The number of divisions of the time slots.
     */
    slotDivisions?: number;
    /**
     * The duration (in minutes) of the time slots.
     */
    slotDuration?: number;
    /**
     * If set to `true`, the view will be shown in the business-hours mode only.
     *
     * This will always override the internal `showWorkHours` state.
     */
    showWorkHours?: boolean;
    /**
     * Sets the initial business-hour mode. Default `true`.
     *
     * This option applies only the initial `showWorkHours` state.
     */
    defaultShowWorkHours?: boolean;
    /**
     * Sets a custom `className` to the wrapping element of the `DayView`.
     */
    className?: string;
    /**
     * Sets a custom `id` to the wrapping element of the `DayView`.
     */
    id?: string;
    /**
     * Sets a custom `style` property to the wrapping element of the `DayView`.
     */
    style?: React.CSSProperties;
    /**
     * Overrides the `item` prop of the Scheduler for the specified view only.
     */
    item?: React.ComponentType<SchedulerItemProps>;
    /**
     * Overrides the `viewItem` prop of the Scheduler for the specified view only.
     */
    viewItem?: React.ComponentType<SchedulerViewItemProps>;
    /**
     * Overrides the `editableItem` prop of the Scheduler for the specified view only.
     */
    editItem?: React.ComponentType<SchedulerEditItemProps>;
    /**
     * Overrides the `slot` prop of the Scheduler for the specified view only.
     */
    slot?: React.ComponentType<SchedulerSlotProps>;
    /**
     * Overrides the `viewSlot` prop of the Scheduler for the specified view only.
     */
    viewSlot?: React.ComponentType<SchedulerViewSlotProps>;
    /**
     * Overrides the `editSlot` prop of the Scheduler for the specified view only.
     */
    editSlot?: React.ComponentType<SchedulerEditSlotProps>;
    /**
     * Overrides the `form` prop of the Scheduler for the specified view only.
     */
    form?: React.ComponentType<SchedulerFormProps>;
    /**
     * If set to `false` the "current time" marker of the scheduler would not be displayed.
     */
    currentTimeMarker?: boolean;
    /**
     * Represents component based on the DateHeaderCellProps.
     */
    dateHeaderCell?: React.ComponentType<DateHeaderCellProps>;
    /**
     * Represents component based on the TimeHeaderCellProps.
     */
    timeHeaderCell?: React.ComponentType<TimeHeaderCellProps>;
}
/**
 * @hidden
 */
export declare const MultiDayView: React.FunctionComponent<MultiDayViewProps>;
/** @hidden */
export declare const multiDayViewDefaultProps: {
    name: string;
    title: string;
    currentTimeMarker: boolean;
    dateRange: ({ date, numberOfDays, timezone }: SchedulerViewDateRangeArgs) => DateRange;
    selectedDateFormat: string;
    selectedShortDateFormat: string;
    numberOfDays: number;
    startTime: string;
    endTime: string;
    isWorkDayStart: string;
    isWorkDayEnd: string;
    workWeekStart: Day;
    workWeekEnd: Day;
    slotDivisions: number;
    slotDuration: number;
    showCurrentTime: boolean;
    defaultShowWorkHours: boolean;
};
