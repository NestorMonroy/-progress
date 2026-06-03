/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { SchedulerViewProps, Range } from '../models/index.js';
import { SchedulerItemsFocusAction, SchedulerSlotsFocusAction } from '../hooks/index.js';
import { SchedulerSlotHandle } from '../slots/SchedulerSlot.js';
import { SchedulerItemHandle } from '../items/SchedulerItem.js';
import { SchedulerItemsSelectAction } from '../hooks/use-items-selection.js';
import { SchedulerSlotsSelectAction } from '../hooks/use-slots-selection.js';
import { CollectionAction } from '@progress/kno-react-common';
import * as React from 'react';
/**
 * @hidden
 */
export interface SchedulerViewContextProps {
    children?: React.ReactNode;
    props: SchedulerViewPropsContextType;
    ranges: SchedulerViewRangesContextType;
    slots: SchedulerViewSlotsContextType;
    items: SchedulerViewItemsContextType;
    selectedSlots: SchedulerViewSelectedSlotsContextType;
    selectedItems: SchedulerViewSelectedItemsContextType;
    focusedItems: SchedulerViewFocusedItemsContextType;
    focusedSlots: SchedulerViewFocusedSlotsContextType;
}
/** @hidden */
export type SchedulerViewPropsContextType = SchedulerViewProps;
/** @hidden */
export declare const SchedulerViewPropsContext: React.Context<SchedulerViewProps>;
/** @hidden */
export declare const useSchedulerViewPropsContext: () => SchedulerViewProps;
/** @hidden */
export type SchedulerViewRangesContextType = Range[];
/** @hidden */
export declare const SchedulerViewRangesContext: React.Context<SchedulerViewRangesContextType>;
/** @hidden */
export declare const useSchedulerViewRangesContext: () => SchedulerViewRangesContextType;
/** @hidden */
export type SchedulerViewSlotsContextType = [
    React.RefObject<SchedulerSlotHandle | null>[],
    (action: CollectionAction<React.RefObject<SchedulerSlotHandle | null>>) => void
];
/** @hidden */
export declare const SchedulerViewSlotsContext: React.Context<SchedulerViewSlotsContextType>;
/** @hidden */
export declare const useSchedulerViewSlotsContext: () => SchedulerViewSlotsContextType;
/** @hidden */
export type SchedulerViewItemsContextType = [
    React.RefObject<SchedulerItemHandle | null>[],
    (action: CollectionAction<React.RefObject<SchedulerItemHandle | null>>) => void
];
/** @hidden */
export declare const SchedulerViewItemsContext: React.Context<SchedulerViewItemsContextType>;
/** @hidden */
export declare const useSchedulerViewItemsContext: () => SchedulerViewItemsContextType;
/** @hidden */
export type SchedulerViewSelectedSlotsContextType = [
    React.RefObject<SchedulerSlotHandle | null>[],
    (action: SchedulerSlotsSelectAction, event: React.SyntheticEvent) => void
];
/** @hidden */
export declare const SchedulerViewSelectedSlotsContext: React.Context<SchedulerViewSelectedSlotsContextType>;
/** @hidden */
export declare const useSchedulerViewSelectedSlotsContext: () => SchedulerViewSelectedSlotsContextType;
/** @hidden */
export type SchedulerViewSelectedItemsContextType = [
    React.RefObject<SchedulerItemHandle | null>[],
    (action: SchedulerItemsSelectAction, event: React.SyntheticEvent) => void
];
/** @hidden */
export declare const SchedulerViewSelectedItemsContext: React.Context<SchedulerViewSelectedItemsContextType>;
/** @hidden */
export declare const useSchedulerViewSelectedItemsContext: () => SchedulerViewSelectedItemsContextType;
/** @hidden */
export type SchedulerViewFocusedItemsContextType = [
    React.RefObject<SchedulerItemHandle | null>[],
    (action: SchedulerItemsFocusAction, event: React.SyntheticEvent) => void
];
/** @hidden */
export declare const SchedulerViewFocusedItemsContext: React.Context<SchedulerViewFocusedItemsContextType>;
/** @hidden */
export declare const useSchedulerViewFocusedItemsContext: () => SchedulerViewFocusedItemsContextType;
/** @hidden */
export type SchedulerViewFocusedSlotsContextType = [
    React.RefObject<SchedulerSlotHandle | null>[],
    (action: SchedulerSlotsFocusAction, event: React.SyntheticEvent) => void
];
/** @hidden */
export declare const SchedulerViewFocusedSlotsContext: React.Context<SchedulerViewFocusedSlotsContextType>;
/** @hidden */
export declare const useSchedulerViewFocusedSlotsContext: () => SchedulerViewFocusedSlotsContextType;
/** @hidden */
export declare const SchedulerViewContext: ({ children, props, ranges, slots, items, selectedSlots, selectedItems, focusedItems, focusedSlots }: SchedulerViewContextProps) => React.JSX.Element;
