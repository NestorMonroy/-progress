/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { DataItem } from '../models/index.js';
import { DataAction } from '../Scheduler.js';
import { SchedulerFormProps } from '../components/SchedulerForm.js';
import { SchedulerViewSlotProps } from './SchedulerViewSlot.js';
import * as React from 'react';
/**
 * Represents the props of the knoReact [SchedulerEditSlot](components/scheduler/api/schedulereditslot) component.
 */
export interface SchedulerEditSlotProps extends SchedulerViewSlotProps {
    /**
     * Overrides the default component responsible for view-specific functionality.
     *
     * The default Component is: [SchedulerViewSlot](components/scheduler/api/schedulerviewslot).
     */
    viewSlot?: React.ComponentType<SchedulerViewSlotProps>;
    /**
     * Overrides the default component responsible for visualizing the `formItem`.
     *
     * The default Component is: [SchedulerForm](components/scheduler/api/schedulerform).
     */
    form?: React.ComponentType<SchedulerFormProps>;
    /**
     * Setting this property will force the `formItem` to be in controlled state, allowing further customization.
     */
    formItem?: DataItem | null;
    /**
     * Fires every time the `formItem` changes.
     */
    onFormItemChange?: (event: any) => void;
    /**
     * Fires when a new item has been created in the slot.
     */
    onDataAction?: (action: DataAction, event: any) => void;
}
/**
 * Represents the object which is returned from the `ref` callback of the [SchedulerEditSlot](components/scheduler/api/schedulereditslot).
 *
 * For more information about Refs, refer to the [React Refs & Dom](https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom) article.
 */
export interface SchedulerEditSlotHandle {
    /**
     * The props of the SchedulerEditSlot component.
     */
    props: SchedulerEditSlotProps;
}
/**
 * Represents the default `editSlot` component rendered by the [knoReact Scheduler component](components/scheduler).
 *
 * This is a composite component of the [`SchedulerViewSlot`](components/scheduler/api/schedulerviewslot), extending it to allow creating an item inside the slot.
 */
export declare const SchedulerEditSlot: React.ForwardRefExoticComponent<SchedulerEditSlotProps & React.RefAttributes<SchedulerEditSlotHandle>>;
export declare const schedulerEditSlotDefaultProps: {
    viewSlot: React.ForwardRefExoticComponent<SchedulerViewSlotProps & React.RefAttributes<import('./SchedulerViewSlot.js').SchedulerViewSlotHandle>>;
    form: React.ForwardRefExoticComponent<SchedulerFormProps & React.RefAttributes<import('../components/SchedulerForm.js').SchedulerFormHandle | null>>;
};
