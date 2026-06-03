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
 * Represents the props of the knoReact [SchedulerViewSelector](components/scheduler/api/schedulerviewselector) component.
 */
/** @hidden */
export interface SchedulerViewSelectorProps extends ToolbarItemProps {
    children?: React.ReactNode;
}
/**
 * Represents the object which is returned from the `ref` callback of the [SchedulerViewSelector](components/scheduler/api/schedulerviewselector).
 *
 * For more information about Refs, refer to the [React Refs & Dom](https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom) article.
 */
/** @hidden */
export interface SchedulerViewSelectorHandle {
    element: HTMLSpanElement | null;
    props: SchedulerViewSelectorProps;
}
/**
 * Represents the default `viewSelector` component rendered by the [knoReact Scheduler component](components/scheduler).
 */
/** @hidden */
export declare const SchedulerViewSelector: React.ForwardRefExoticComponent<SchedulerViewSelectorProps & React.RefAttributes<SchedulerViewSelectorHandle>>;
