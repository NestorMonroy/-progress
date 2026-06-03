/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { SchedulerViewTaskProps } from './SchedulerViewTask.js';
import { DataItem } from '../models/index.js';
import { DataAction } from '../Scheduler.js';
import { SchedulerRemoveDialogProps } from '../components/SchedulerRemoveDialog.js';
import { SchedulerOccurrenceDialogProps } from '../components/SchedulerOccurrenceDialog.js';
import * as React from 'react';
/**
 * Represents the props of the knoReact [SchedulerEditTask](components/scheduler/api/scheduleredittask) component.
 */
export interface SchedulerEditTaskProps extends SchedulerViewTaskProps {
    /**
     * Overrides the default component responsible for positioning the task inside the view.
     *
     * The default Component is: [SchedulerViewTask](components/scheduler/api/schedulerviewtask).
     */
    viewTask?: React.ComponentType<SchedulerViewTaskProps>;
    /**
     * Overrides the default component responsible for visualizing the `removeItem` and confirming the `remove` action.
     *
     * The default Component is: [SchedulerRemoveDialog](components/scheduler/api/schedulerremovedialog).
     */
    removeDialog?: React.ComponentType<SchedulerRemoveDialogProps>;
    /**
     * Setting this property will force the `showRemoveDialog` to be in controlled state, allowing further control over the display of the `removeDialog` component.
     */
    showRemoveDialog?: boolean;
    /**
     * Fires every time the `showRemoveDialog` changes.
     */
    onShowRemoveDialogChange?: (event: any) => void;
    /**
     * Setting this property will force the `removeItem` to be in controlled state, allowing further customization.
     *
     * Specifies the DataItem which should be removed from the `data` set.
     * The `removeItem` is passed as property to the `removeDialog` component;
     */
    removeItem?: DataItem | null;
    /**
     * Fires every time the `removeItem` changes.
     */
    onRemoveItemChange?: (event: any) => void;
    /**
     * Overrides the default component responsible for the selection between `occurrence` and `series` delete.
     *
     * The default Component is: [SchedulerOccurrenceDialog](components/scheduler/api/scheduleroccurrencedialog).
     */
    occurrenceDialog?: React.ComponentType<SchedulerOccurrenceDialogProps>;
    /**
     * Setting this property will force the `showOccurrenceDialog` to be in controlled state, allowing further control over the display of the `occurrenceDialog` component.
     */
    showOccurrenceDialog?: boolean;
    /**
     * Fires every time the `showOccurrenceDialog` changes.
     */
    onShowOccurrenceDialogChange?: (event: any) => void;
    /**
     * Fires when the item has been removed.
     */
    onDataAction?: (action: DataAction, event?: any) => void;
}
/**
 * Represents the object which is returned from the `ref` callback of the [SchedulerEditTask](components/scheduler/api/scheduleredittask).
 *
 * For more information about Refs, refer to the [React Refs & Dom](https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom) article.
 */
export interface SchedulerEditTaskHandle {
    /**
     * The HTML element of the SchedulerEditTask component.
     */
    element: HTMLDivElement | null;
    /**
     * The props of the SchedulerEditTask component.
     */
    props: SchedulerEditTaskProps;
}
/**
 * Represents the default `editTask` component rendered by the [knoReact Scheduler component](components/scheduler).
 *
 * This is a composite component of the [`SchedulerViewTask`](components/scheduler/api/schedulerviewtask), extending it to provide the `remove` editing functionality.
 */
export declare const SchedulerEditTask: React.ForwardRefExoticComponent<SchedulerEditTaskProps & React.RefAttributes<SchedulerEditTaskHandle>>;
export declare const schedulerEditTaskDefaultProps: {
    viewTask: React.ForwardRefExoticComponent<SchedulerViewTaskProps & React.RefAttributes<import('./SchedulerViewTask').SchedulerViewTaskHandle>>;
    occurrenceDialog: React.ForwardRefExoticComponent<SchedulerOccurrenceDialogProps & React.RefAttributes<import('../components/SchedulerOccurrenceDialog').SchedulerOccurrenceDialogHandle | null>>;
    removeDialog: React.ForwardRefExoticComponent<SchedulerRemoveDialogProps & React.RefAttributes<import('../components/SchedulerRemoveDialog').SchedulerRemoveDialogHandle | null>>;
};
