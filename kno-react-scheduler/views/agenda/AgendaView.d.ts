/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { SchedulerViewProps, DateRange, SchedulerViewDateRangeArgs, EditableProp } from '../../models/index.js';
import { LocalizationService } from '@progress/kno-react-intl';
import { SchedulerSlotProps } from '../../slots/SchedulerSlot.js';
import { SchedulerTaskProps } from '../../tasks/SchedulerTask.js';
import { SchedulerViewSlotProps } from '../../slots/SchedulerViewSlot.js';
import { SchedulerEditSlotProps } from '../../slots/SchedulerEditSlot.js';
import * as React from 'react';
/**
 * Represents the properties of the knoReact [AgendaView](components/scheduler/api/agendaview) Component.
 */
export interface AgendaViewProps extends SchedulerViewProps {
    /**
     * Specifies the step by which the currently rendered days will be changed, when using the back and forwards buttons in the toolbar navigation.
     */
    step?: number;
    /**
     * Specifies the number of days that the view will render.
     * Defaults to `7`.
     */
    numberOfDays?: number;
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
     * Sets a custom `className` to the wrapping element of the `AgendaView`.
     */
    className?: string;
    /**
     * Sets a custom `id` to the wrapping element of the `AgendaView`.
     */
    id?: string;
    /**
     * Sets a custom `style` property to the wrapping element of the `AgendaView`.
     */
    style?: React.CSSProperties;
    /**
     * Overrides the general `editable` prop of the Scheduler for the specified view only.
     */
    editable?: EditableProp;
    /**
     * Overrides the `task` prop of the Scheduler for the specified view only.
     */
    task?: React.ComponentType<SchedulerTaskProps>;
    /**
     * Overrides the `viewTask` prop of the Scheduler for the specified view only.
     */
    viewTask?: React.ComponentType<SchedulerTaskProps>;
    /**
     * Overrides the `editTask` prop of the Scheduler for the specified view only.
     */
    editTask?: React.ComponentType<SchedulerTaskProps>;
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
}
/**
 * Represents the knoReact [AgendaView](components/scheduler/views/agenda) Component.
 */
export declare const AgendaView: React.FunctionComponent<AgendaViewProps>;
/** @hidden */
export declare const agendaViewDefaultProps: {
    name: string;
    title: (localization: LocalizationService) => string;
    dateRange: ({ intl, date, numberOfDays, timezone }: SchedulerViewDateRangeArgs) => DateRange;
    selectedDateFormat: string;
    selectedShortDateFormat: string;
    slotDuration: number;
    slotDivision: number;
    numberOfDays: number;
};
