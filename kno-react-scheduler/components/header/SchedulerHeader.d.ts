/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { ToolbarProps } from '@progress/kno-react-buttons';
import * as React from 'react';
export interface SchedulerHeaderProps extends ToolbarProps {
    /**
     * The content of the header component.
     */
    children?: React.ReactNode;
}
/**
 * Represents the object which is returned from the `ref` callback of the [SchedulerHeader](components/scheduler/api/schedulerheader).
 *
 * For more information about Refs, refer to the [React Refs & Dom](https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom) article.
 */
export interface SchedulerHeaderHandle {
    /**
     * The HTML element of the SchedulerHeader component.
     */
    element: HTMLDivElement | null;
    /**
     * The props of the SchedulerHeader component.
     */
    props: SchedulerHeaderProps;
}
/**
 * Represents the default `header` component rendered by the [knoReact Scheduler component](components/scheduler).
 */
export declare const SchedulerHeader: React.ForwardRefExoticComponent<SchedulerHeaderProps & React.RefAttributes<SchedulerHeaderHandle>>;
