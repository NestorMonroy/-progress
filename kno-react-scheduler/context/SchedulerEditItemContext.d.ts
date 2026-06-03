/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { DataItem } from '../models/index.js';
import { SchedulerItemFormItemAction } from '../items/hooks/use-form-item.js';
import { BaseEvent } from '@progress/kno-react-common';
import { SchedulerEditItemProps } from '../items/SchedulerEditItem.js';
import * as React from 'react';
/** @hidden */
export interface SchedulerEditItemContextProps {
    props: SchedulerEditItemPropsContextType;
    form: SchedulerEditItemFormItemContextType;
    drag: SchedulerEditItemDragItemContextType;
    resize: SchedulerEditItemResizeItemContextType;
    remove: SchedulerEditItemRemoveItemContextType;
    showRemoveDialog: SchedulerEditItemShowRemoveDialogContextType;
    showOccurrenceDialog: SchedulerEditItemShowOccurrenceDialogContextType;
    children?: React.ReactNode;
}
/**
 * Specifies the result of the [useSchedulerEditItemPropsContext](components/scheduler/api/usescheduleredititempropscontext) and [SchedulerEditItemPropsContext](components/scheduler/api/scheduleredititempropscontext).
 */
export type SchedulerEditItemPropsContextType = SchedulerEditItemProps;
/**
 * A [React Context](https://react.dev/reference/react/hooks#context-hooks) providing access to the [SchedulerEditItem](components/scheduler/customization/items/edit-item) `props`.
 *
 * For more information, refer to the [Items Context](components/scheduler/customization/items/state-update) article.
 */
export declare const SchedulerEditItemPropsContext: React.Context<SchedulerEditItemProps>;
/**
 * A custom [React Hook](https://react.dev/reference/react/hooks) providing access to the [SchedulerEditItem](components/scheduler/customization/items/edit-item) `props`.
 *
 * For more information, refer to the [Items Context](components/scheduler/customization/items/state-update) article.
 *
 * @returns
 */
export declare const useSchedulerEditItemPropsContext: () => SchedulerEditItemPropsContextType;
/**
 * Specifies the result of the [useSchedulerEditItemFormItemContext](components/scheduler/api/usescheduleredititemformitemcontext) and [SchedulerEditItemFormItemContext](components/scheduler/api/scheduleredititemformitemcontext).
 */
export type SchedulerEditItemFormItemContextType = [
    DataItem | null,
    (newValue: DataItem | null, event?: React.SyntheticEvent | BaseEvent<any> | {
        preventDefault: any;
    }) => void,
    (action: SchedulerItemFormItemAction, event?: React.SyntheticEvent | BaseEvent<any> | {
        preventDefault: any;
    }) => void
];
/**
 * A [React Context](https://react.dev/reference/react/hooks#context-hooks) providing access to the [SchedulerEditItem](components/scheduler/customization/items/edit-item) internal `formItem` state.
 *
 * For more information, refer to the [Items Context](components/scheduler/customization/items/state-update) article.
 */
export declare const SchedulerEditItemFormItemContext: React.Context<SchedulerEditItemFormItemContextType>;
/**
 * A custom [React Hook](https://react.dev/reference/react/hooks) providing access to the [SchedulerEditItem](components/scheduler/customization/items/edit-item) internal `formItem` state.
 *
 * For more information, refer to the [Items Context](components/scheduler/customization/items/state-update) article.
 *
 * @returns
 */
export declare const useSchedulerEditItemFormItemContext: () => SchedulerEditItemFormItemContextType;
/**
 * Specifies the result of the [useSchedulerEditItemDragItemContext](components/scheduler/api/usescheduleredititemdragitemcontext) and [SchedulerEditItemDragItemContext](components/scheduler/api/scheduleredititemdragitemcontext).
 */
export type SchedulerEditItemDragItemContextType = [
    DataItem | null,
    (newValue?: DataItem | null, event?: React.SyntheticEvent | BaseEvent<any> | {
        preventDefault: any;
    }) => void,
    (action: SchedulerItemFormItemAction, event?: React.SyntheticEvent | BaseEvent<any> | {
        preventDefault: any;
    }) => void
];
/**
 * A [React Context](https://react.dev/reference/react/hooks#context-hooks) providing access to the [SchedulerEditItem](components/scheduler/customization/items/edit-item) internal `dragItem` state.
 *
 * For more information, refer to the [Items Context](components/scheduler/customization/items/state-update) article.
 */
export declare const SchedulerEditItemDragItemContext: React.Context<SchedulerEditItemDragItemContextType>;
/**
 * A custom [React Hook](https://react.dev/reference/react/hooks) providing access to the [SchedulerEditItem](components/scheduler/customization/items/edit-item) internal `dragItem` state.
 *
 * For more information, refer to the [Items Context](components/scheduler/customization/items/state-update) article.
 *
 * @returns
 */
export declare const useSchedulerEditItemDragItemContext: () => SchedulerEditItemDragItemContextType;
/**
 * Specifies the result of the [useSchedulerEditItemResizeItemContext](components/scheduler/api/usescheduleredititemresizeitemcontext) and [SchedulerEditItemResizeItemContext](components/scheduler/api/scheduleredititemresizeitemcontext).
 */
export type SchedulerEditItemResizeItemContextType = [
    DataItem | null,
    (newValue?: DataItem | null, event?: React.SyntheticEvent | BaseEvent<any> | {
        preventDefault: any;
    }) => void,
    (action: SchedulerItemFormItemAction, event?: React.SyntheticEvent | BaseEvent<any> | {
        preventDefault: any;
    }) => void
];
/**
 * A [React Context](https://react.dev/reference/react/hooks#context-hooks) providing access to the [SchedulerEditItem](components/scheduler/customization/items/edit-item) internal `resizeItem` state.
 *
 * For more information, refer to the [Items Context](components/scheduler/customization/items/state-update) article.
 */
export declare const SchedulerEditItemResizeItemContext: React.Context<SchedulerEditItemResizeItemContextType>;
/**
 * A custom [React Hook](https://react.dev/reference/react/hooks) providing access to the [SchedulerEditItem](components/scheduler/customization/items/edit-item) internal `resizeItem` state.
 *
 * For more information, refer to the [Items Context](components/scheduler/customization/items/state-update) article.
 *
 * @returns
 */
export declare const useSchedulerEditItemResizeItemContext: () => SchedulerEditItemResizeItemContextType;
/**
 * Specifies the result of the [useSchedulerEditItemRemoveItemContext](components/scheduler/api/usescheduleredititemremoveitemcontext) and [SchedulerEditItemRemoveItemContext](components/scheduler/api/scheduleredititemremoveitemcontext).
 */
export type SchedulerEditItemRemoveItemContextType = [
    DataItem | null,
    (newValue?: any, event?: React.SyntheticEvent | BaseEvent<any> | {
        preventDefault: any;
    }) => void,
    (action: SchedulerItemFormItemAction, event?: React.SyntheticEvent | BaseEvent<any> | {
        preventDefault: any;
    }) => void
];
/**
 * A [React Context](https://react.dev/reference/react/hooks#context-hooks) providing access to the [SchedulerEditItem](components/scheduler/customization/items/edit-item) internal `removeItem` state.
 *
 * For more information, refer to the [Items Context](components/scheduler/customization/items/state-update) article.
 */
export declare const SchedulerEditItemRemoveItemContext: React.Context<SchedulerEditItemRemoveItemContextType>;
/**
 * A custom [React Hook](https://react.dev/reference/react/hooks) providing access to the [SchedulerEditItem](components/scheduler/customization/items/edit-item) internal `removeItem` state.
 *
 * For more information, refer to the [Items Context](components/scheduler/customization/items/state-update) article.
 *
 * @returns
 */
export declare const useSchedulerEditItemRemoveItemContext: () => SchedulerEditItemRemoveItemContextType;
/**
 * Specifies the result of the [useSchedulerEditItemShowRemoveDialogContext](components/scheduler/api/usescheduleredititemshowremovedialogcontext) and [SchedulerEditItemShowRemoveDialogContext](components/scheduler/api/scheduleredititemshowremovedialogcontext).
 */
export type SchedulerEditItemShowRemoveDialogContextType = [
    boolean,
    (newValue?: boolean, event?: React.SyntheticEvent | BaseEvent<any> | {
        preventDefault: any;
    }) => void,
    (action: SchedulerItemFormItemAction, event?: React.SyntheticEvent | BaseEvent<any> | {
        preventDefault: any;
    }) => void
];
/**
 * A [React Context](https://react.dev/reference/react/hooks#context-hooks) providing access to the [SchedulerEditItem](components/scheduler/customization/items/edit-item) internal `showRemoveDialog` state.
 *
 * For more information, refer to the [Items Context](components/scheduler/customization/items/state-update) article.
 */
export declare const SchedulerEditItemShowRemoveDialogContext: React.Context<SchedulerEditItemShowRemoveDialogContextType>;
/**
 * A custom [React Hook](https://react.dev/reference/react/hooks) providing access to the [SchedulerEditItem](components/scheduler/customization/items/edit-item) internal `showRemoveDialog` state.
 *
 * For more information, refer to the [Items Context](components/scheduler/customization/items/state-update) article.
 *
 * @returns
 */
export declare const useSchedulerEditItemShowRemoveDialogContext: () => SchedulerEditItemShowRemoveDialogContextType;
/**
 * Specifies the result of the [useSchedulerEditItemShowOccurrenceDialogContext](components/scheduler/api/usescheduleredititemshowoccurrencedialogcontext) and [SchedulerEditItemShowOccurrenceDialogContext](components/scheduler/api/scheduleredititemshowoccurrencedialogcontext).
 */
export type SchedulerEditItemShowOccurrenceDialogContextType = [
    boolean,
    (newValue?: boolean, event?: React.SyntheticEvent | BaseEvent<any> | {
        preventDefault: any;
    }) => void,
    (action: SchedulerItemFormItemAction, event?: React.SyntheticEvent | BaseEvent<any> | {
        preventDefault: any;
    }) => void
];
/**
 * A [React Context](https://react.dev/reference/react/hooks#context-hooks) providing access to the [SchedulerEditItem](components/scheduler/customization/items/edit-item) internal `showOccurrenceDialog` state.
 *
 * For more information, refer to the [Items Context](components/scheduler/customization/items/state-update) article.
 */
export declare const SchedulerEditItemShowOccurrenceDialogContext: React.Context<SchedulerEditItemShowOccurrenceDialogContextType>;
/**
 * A custom [React Hook](https://react.dev/reference/react/hooks) providing access to the [SchedulerEditItem](components/scheduler/customization/items/edit-item) internal `showOccurrenceDialog` state.
 *
 * For more information, refer to the [Items Context](components/scheduler/customization/items/state-update) article.
 *
 * @returns
 */
export declare const useSchedulerEditItemShowOccurrenceDialogContext: () => SchedulerEditItemShowOccurrenceDialogContextType;
/** @hidden */
export declare const SchedulerEditItemContext: ({ props, form, drag, resize, remove, showRemoveDialog, showOccurrenceDialog, children }: SchedulerEditItemContextProps) => React.JSX.Element;
