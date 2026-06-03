/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { DataItem } from '../models/index.js';
import * as React from 'react';
export interface SchedulerOccurrenceDialogStateChangeEvent<T> {
    /**
     * The SchedulerOccurrenceDialog instance that triggered the event.
     */
    target: SchedulerOccurrenceDialogHandle;
    /**
     * The value associated with the event.
     */
    value: T;
    /**
     * The React synthetic event object.
     */
    syntheticEvent: React.SyntheticEvent;
}
/**
 * Represents the props of the knoReact [SchedulerOccurrenceDialog](components/scheduler/api/scheduleroccurrencedialog) component.
 */
export interface SchedulerOccurrenceDialogProps {
    /**
     * Specifies the `DataItem` currently being edited.
     */
    dataItem: DataItem;
    /**
     * Specifies if the dialog is for `remove` or `edit` action.
     */
    isRemove?: boolean;
    /**
     * Fires when you click the `close` button.
     */
    onClose: (event: SchedulerOccurrenceDialogStateChangeEvent<DataItem | null>) => void;
    /**
     * Fires when you click the `series` button.
     */
    onSeriesClick: (event: SchedulerOccurrenceDialogStateChangeEvent<DataItem | null>) => void;
    /**
     * Fires when you click the `occurrence` button.
     */
    onOccurrenceClick: (event: SchedulerOccurrenceDialogStateChangeEvent<DataItem | null>) => void;
}
/**
 * Represent the `ref` of the SchedulerOccurrenceDialog component.
 */
export type SchedulerOccurrenceDialogHandle = {
    props: SchedulerOccurrenceDialogProps;
};
/**
 * Represents the default `occurrenceDialog` component rendered by the [knoReact SchedulerEditItem component](components/scheduler/api/scheduleredititem).
 */
export declare const SchedulerOccurrenceDialog: React.ForwardRefExoticComponent<SchedulerOccurrenceDialogProps & React.RefAttributes<SchedulerOccurrenceDialogHandle | null>>;
