/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { SchedulerSlotProps, SchedulerSlotHandle } from './SchedulerSlot.js';
import * as React from 'react';
/**
 * Represents the extended `expandable` configuration of a `SchedulerSlot`.
 *
 * Settings `offsetTop` or `offsetBottom` would provide an extra space in addition to the space taken by the `items` inside the `slot`.
 */
export type SchedulerSlotExpandableConfig = {
    offsetTop?: number;
    offsetBottom?: number;
};
/**
 * Represents the props of the knoReact [SchedulerViewSlot](components/scheduler/api/schedulerviewslot) component.
 */
export interface SchedulerViewSlotProps extends SchedulerSlotProps {
    /**
     * Overrides the default component responsible for view-specific functionality.
     *
     * The default Component is: [SchedulerSlot](components/scheduler/api/schedulerslot).
     */
    slot?: React.ComponentType<SchedulerSlotProps>;
    /**
     * Set to `false` renders the `slot` as is, without expanding depending on the `items` inside it.
     *
     * For more information, please refer to the [Adaptive Slot Height](components/scheduler/recurring) article.
     */
    expandable?: boolean | SchedulerSlotExpandableConfig;
}
/**
 * Represents the object which is returned from the `ref` callback of the [SchedulerViewItem](components/scheduler/api/schedulerviewitem).
 *
 * For more information about Refs, refer to the [React Refs & Dom](https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom) article.
 */
export interface SchedulerViewSlotHandle {
    /**
     * The props of the SchedulerViewSlot component.
     */
    props: SchedulerViewSlotProps;
}
/**
 * Represents the default `viewSlot` component rendered by the [knoReact Scheduler component](components/scheduler).
 *
 * This is a composite component of the [`SchedulerSlot`](components/scheduler/api/schedulerslot), extending it to provide additional functionality depending on the view.
 */
export declare const SchedulerViewSlot: React.ForwardRefExoticComponent<SchedulerViewSlotProps & React.RefAttributes<SchedulerViewSlotHandle>>;
export declare const schedulerViewSlotDefaultProps: {
    slot: React.ForwardRefExoticComponent<SchedulerSlotProps & React.RefAttributes<SchedulerSlotHandle>>;
    expandable: boolean;
};
