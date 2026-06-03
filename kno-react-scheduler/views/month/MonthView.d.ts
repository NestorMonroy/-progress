/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { DateRange, SchedulerViewProps, SchedulerViewDateRangeArgs } from '../../models/index.js';
import { SchedulerEditSlotProps } from '../../slots/SchedulerEditSlot.js';
import { SchedulerItemProps } from '../../items/SchedulerItem.js';
import { SchedulerViewItemProps } from '../../items/SchedulerViewItem.js';
import { SchedulerEditItemProps } from '../../items/SchedulerEditItem.js';
import { SchedulerSlotProps } from '../../slots/SchedulerSlot.js';
import { SchedulerViewSlotProps } from '../../slots/SchedulerViewSlot.js';
import { DateHeaderCellProps } from '../../components/DateHeaderCell.js';
import { SchedulerFormProps } from '../../components/SchedulerForm.js';
import * as React from 'react';
/**
 * Represents the props of the knoReact [MonthView](components/scheduler/api/monthview) Component.
 */
export interface MonthViewProps extends Omit<SchedulerViewProps, 'numberOfDays' | 'step'> {
    /**
     * Sets the maximum number of `items` to be rendered in a single `slot`, before adding the `show-more` button.
     */
    itemsPerSlot?: number;
    /**
     * The long-date format for displaying the
     * selected date in the Scheduler toolbar.
     * Defaults to `{0:Y}`
     * ([more information](https://www.github.com/tlk/kno-intl/blob/develop/docs/date-formatting/index.md))
     */
    selectedDateFormat?: string;
    /**
     * The short-date format for displaying the
     * selected date in the Scheduler toolbar.
     * Defaults to `{0:Y}`
     * ([more information](https://www.github.com/tlk/kno-intl/blob/develop/docs/date-formatting/index.md))
     */
    selectedShortDateFormat?: string;
    /**
     * Overrides the general `editable` prop of the Scheduler for the specified view only.
     */
    editable?: boolean;
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
     * Represents component based on the DateHeaderCellProps.
     */
    dateHeaderCell?: React.ComponentType<DateHeaderCellProps>;
    /**
     * Overrides the `form` prop of the Scheduler for the specified view only.
     */
    form?: React.ComponentType<SchedulerFormProps>;
}
/**
 * Represents the knoReact [MonthView](components/scheduler/views/month) Component.
 */
export declare const MonthView: React.FunctionComponent<MonthViewProps>;
/** @hidden */
export declare const monthViewDefaultProps: {
    name: string;
    dateRange: ({ intl, date, timezone }: SchedulerViewDateRangeArgs) => DateRange;
    slotDuration: number;
    slotDivision: number;
    itemsPerSlot: number;
    numberOfDays: number;
    title: (localization: any) => any;
    selectedDateFormat: string;
    selectedShortDateFormat: string;
};
