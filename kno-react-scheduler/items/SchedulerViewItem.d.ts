/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { SchedulerItemProps, SchedulerItemHandle } from './SchedulerItem.js';
import * as React from 'react';
/**
 * Represents the props of the knoReact [SchedulerViewItem](components/scheduler/api/schedulerviewitem) component.
 */
export interface SchedulerViewItemProps extends SchedulerItemProps {
    /** @hidden */
    ignoreIsAllDay?: boolean;
    /**
     * Overrides the default component responsible for visualizing a single item.
     *
     * The default Component is: [SchedulerItem](components/scheduler/api/scheduleritem).
     */
    item?: React.ComponentType<SchedulerItemProps>;
}
/**
 * Represents the object which is returned from the `ref` callback of the [SchedulerViewItem](components/scheduler/api/schedulerviewitem).
 *
 * For more information about Refs, refer to the [React Refs & Dom](https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom) article.
 */
export interface SchedulerViewItemHandle {
    /**
     * The HTML element of the SchedulerViewItem component.
     */
    element: HTMLDivElement | null;
    /**
     * The props of the SchedulerViewItem component.
     */
    props: SchedulerViewItemProps;
}
/**
 * Represents the default `viewItem` component rendered by the [knoReact Scheduler component](components/scheduler).
 *
 * This is a composite component of the [`SchedulerItem`](components/scheduler/api/scheduleritem), extending it to provide proper positioning inside a view.
 */
export declare const SchedulerViewItem: React.ForwardRefExoticComponent<SchedulerViewItemProps & React.RefAttributes<SchedulerViewItemHandle>>;
export declare const schedulerViewItemDefaultProps: {
    item: React.ForwardRefExoticComponent<SchedulerItemProps & React.RefAttributes<SchedulerItemHandle>>;
};
