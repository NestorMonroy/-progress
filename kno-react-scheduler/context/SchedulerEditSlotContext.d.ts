/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { DataItem } from '../models/index.js';
import { SchedulerEditSlotProps } from '../slots/SchedulerEditSlot.js';
import * as React from 'react';
/** @hidden */
export interface SchedulerEditSlotContextProps {
    props: SchedulerEditSlotProps;
    form: SchedulerEditSlotFormItemContextType;
    children?: React.ReactNode;
}
/**
 * Specifies the result of the [useSchedulerEditSlotPropsContext](components/scheduler/api/useschedulereditslotpropscontext) and [SchedulerEditSlotPropsContext](components/scheduler/api/schedulereditslotpropscontext).
 */
export type SchedulerEditSlotPropsContextType = SchedulerEditSlotProps;
/**
 * A [React Context](https://react.dev/reference/react/hooks#context-hooks) providing access to the [SchedulerEditSlot](components/scheduler/api/schedulereditslot) `props`.
 *
 * For more information, refer to the [Items Context](components/scheduler/customization/items/state-update) article.
 */
export declare const SchedulerEditSlotPropsContext: React.Context<SchedulerEditSlotProps>;
/**
 * A custom [React Hook](https://react.dev/reference/react/hooks) providing access to the [SchedulerEditSlot](components/scheduler/api/schedulereditslot) `props`.
 *
 * For more information, refer to the [Items Context](components/scheduler/customization/items/state-update) article.
 *
 * @returns
 */
export declare const useSchedulerEditSlotPropsContext: () => SchedulerEditSlotPropsContextType;
/**
 * Specifies the result of the [useSchedulerEditSlotFormItemContext](components/scheduler/api/useschedulereditslotformitemcontext) and [SchedulerEditSlotFormItemContext](components/scheduler/api/schedulereditslotformitemcontext).
 */
export type SchedulerEditSlotFormItemContextType = [DataItem | null, (event?: any) => void];
/**
 * A [React Context](https://react.dev/reference/react/hooks#context-hooks) providing access to the [SchedulerEditSlot](components/scheduler/api/schedulereditslot) internal `formItem` state.
 *
 * For more information, refer to the [Slots Context](components/scheduler/customization/slots/state-update) article.
 */
export declare const SchedulerEditSlotFormItemContext: React.Context<SchedulerEditSlotFormItemContextType>;
/**
 * A custom [React Hook](https://react.dev/reference/react/hooks) providing access to the [SchedulerEditSlot](components/scheduler/api/schedulereditslot) internal `formItem` state.
 *
 * For more information, refer to the [Slots Context](components/scheduler/customization/slots/state-update) article.
 *
 * @returns
 */
export declare const useSchedulerEditSlotFormItemContext: () => SchedulerEditSlotFormItemContextType;
/** @hidden */
export declare const SchedulerEditSlotContext: ({ props, form, children }: SchedulerEditSlotContextProps) => React.JSX.Element;
