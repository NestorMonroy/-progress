/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { ToolbarItemProps } from '@progress/kno-react-buttons';
import * as React from 'react';
/**
 * Represents the props of the knoReact [SchedulerNavigation](components/scheduler/navigation) component.
 */
/** @hidden */
export interface SchedulerNavigationProps extends ToolbarItemProps {
    children?: React.ReactNode;
}
/**
 * Represents the object which is returned from the `ref` callback of the [SchedulerNavigation](components/scheduler/navigation).
 *
 * For more information about Refs, refer to the [React Refs & Dom](https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom) article.
 */
/** @hidden */
export interface SchedulerNavigationHandle {
    props: SchedulerNavigationProps;
    element: HTMLSpanElement | null;
}
/**
 * Represents the default `navigation` component rendered by the [knoReact Scheduler component](components/scheduler).
 */
/** @hidden */
export declare const SchedulerNavigation: React.ForwardRefExoticComponent<SchedulerNavigationProps & React.RefAttributes<SchedulerNavigationHandle>>;
