/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { SchedulerTaskProps } from './SchedulerTask.js';
import * as React from 'react';
/**
 * Represents the props of the knoReact [SchedulerViewTask](components/scheduler/api/schedulerviewtask) component.
 */
export interface SchedulerViewTaskProps extends SchedulerTaskProps {
    /**
     * Overrides the default component responsible for visualizing a single task.
     *
     * The default Component is: [SchedulerTask](components/scheduler/api/schedulertask).
     */
    task?: React.ComponentType<SchedulerTaskProps>;
}
/**
 * Represents the object which is returned from the `ref` callback of the [SchedulerViewTask](components/scheduler/api/schedulerviewtask).
 *
 * For more information about Refs, refer to the [React Refs & Dom](https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom) article.
 */
export interface SchedulerViewTaskHandle {
    /**
     * The HTML element of the SchedulerViewTask component.
     */
    element: HTMLDivElement | null;
    /**
     * The props of the SchedulerViewTask component.
     */
    props: SchedulerViewTaskProps;
}
/**
 * Represents the default `viewTask` component rendered by the [knoReact Scheduler component](components/scheduler).
 *
 * This is a composite component of the [`SchedulerTask`](components/scheduler/api/schedulertask).
 */
export declare const SchedulerViewTask: React.ForwardRefExoticComponent<SchedulerViewTaskProps & React.RefAttributes<SchedulerViewTaskHandle>>;
export declare const schedulerViewTaskDefaultProps: {
    task: React.ForwardRefExoticComponent<SchedulerTaskProps & React.RefAttributes<import('./SchedulerTask').SchedulerTaskHandle>>;
};
