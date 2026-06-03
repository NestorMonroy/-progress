/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { DataItem } from '../models/index.js';
import * as React from 'react';
export interface SchedulerRemoveDialogStateChangeEvent<T> {
    /**
     * The SchedulerRemoveDialog instance that triggered the event.
     */
    target: SchedulerRemoveDialogHandle;
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
 * Represents the props of the knoReact [SchedulerRemoveDialog](components/scheduler/api/schedulerremovedialog) component.
 */
export interface SchedulerRemoveDialogProps {
    /**
     * Specifies the `DataItem` currently being deleted.
     */
    dataItem: DataItem;
    /**
     * Fires when you click the `close` button.
     */
    onClose?: (event: SchedulerRemoveDialogStateChangeEvent<null>) => void;
    /**
     * Fires when you click the `cancel` button.
     */
    onCancel?: (event: SchedulerRemoveDialogStateChangeEvent<null>) => void;
    /**
     * Fires when you click the `confirm` button.
     */
    onConfirm?: (event: SchedulerRemoveDialogStateChangeEvent<DataItem | null>) => void;
}
/**
 * Represent the `ref` of the SchedulerOccurrenceDialog component.
 */
export type SchedulerRemoveDialogHandle = {
    props: SchedulerRemoveDialogProps;
};
/**
 * Represents the default `removeDialog` component rendered by the [knoReact SchedulerEditItem component](components/scheduler/api/scheduleredititem).
 */
export declare const SchedulerRemoveDialog: React.ForwardRefExoticComponent<SchedulerRemoveDialogProps & React.RefAttributes<SchedulerRemoveDialogHandle | null>>;
