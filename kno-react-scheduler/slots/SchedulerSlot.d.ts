/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { Slot, SchedulerSlotMouseEvent, SchedulerSlotKeyboardEvent, SchedulerSlotFocusEvent, EditableProp } from '../models/index.js';
import * as React from 'react';
/**
 * Represents the props of the knoReact [SchedulerSlot](components/scheduler/api/schedulerslot) component.
 */
export interface SchedulerSlotProps extends Slot {
    /** @hidden */
    _ref: React.RefObject<SchedulerSlotHandle | null>;
    /**
     * Specifies the `id` of the wrapping element of the SchedulerSlot.
     */
    id?: string;
    /**
     * Specifies the `tabIndex` attribute of the wrapping element of the SchedulerSlot.
     *
     * Providing `null` does not apply any `tabIndex` to the element.
     */
    tabIndex?: number;
    /**
     * Specifies the `className` attribute of the wrapping element of the SchedulerSlot.
     *
     * The SchedulerSlot applies the following default className:
     * - `k-scheduler-cell`
     * - `k-slot-cell`
     * - `k-nonwork-hour` - if either `props.isWorkHour` or `props.isWorkDay` is `false`
     * - `k-selected` - if `props.selected` is set to `true`
     */
    className?: string;
    /**
     * Specifies the `style` object of the wrapping element of the SchedulerSlot.
     *
     * The SchedulerSlot applies the following default styles:
     *  - `userSelect`: `none`
     */
    style?: React.CSSProperties;
    /**
     * Specifies the `children` of the SchedulerSlot. By default, no child elements are rendered.
     */
    children?: React.ReactNode;
    /**
     * Overrides the `editable` prop of the `Scheduler` and the active view.
     */
    editable?: EditableProp | boolean;
    /**
     * Specifies if the `day` of the SchedulerSlot (in the current timezone) is between the `workDayStart` and `workDayEnd` of the active view.
     */
    isWorkDay?: boolean;
    /**
     * Specifies if the `time` of the SchedulerSlot (in the current timezone) is between the `workDayStart` and `workDayEnd` of the active view.
     */
    isWorkHour?: boolean;
    /**
     * Sets the selected state of the SchedulerSlot. By default, the `k-selected` className is added if `props.selected` is `true`.
     */
    selected?: boolean;
    /**
     * Sets the `row` in the context of the current active view.
     * This property provides keyboard navigation between the SchedulerSlot components.
     */
    row: number;
    /**
     * Sets the `col` in the context of the current active view.
     * This property provides keyboard navigation between the SchedulerSlot components.
     */
    col: number;
    /**
     * Fires each time the element, or any of its child elements, receive focus.
     */
    onFocus?: (event: SchedulerSlotFocusEvent) => void;
    /**
     * Fires each time the element, or any of its child elements, lose focus.
     */
    onBlur?: (event: SchedulerSlotFocusEvent) => void;
    /**
     * Fires each time the element, or any of its child elements, is clicked.
     */
    onClick?: (event: SchedulerSlotMouseEvent) => void;
    /**
     * Fires each time the element, or any of its child elements, receives a `mouseenter` event.
     */
    onMouseEnter?: (event: SchedulerSlotMouseEvent) => void;
    /**
     * Fires each time the element, or any of its child elements, receives a `mouseleave` event.
     */
    onMouseLeave?: (event: SchedulerSlotMouseEvent) => void;
    /**
     * Fires each time the element, or any of its child elements, receives a `mouseover` event.
     */
    onMouseOver?: (event: SchedulerSlotMouseEvent) => void;
    /**
     * Fires each time the element, or any of its child elements, receives a `mouseout` event.
     */
    onMouseOut?: (event: SchedulerSlotMouseEvent) => void;
    /**
     * Fires each time the element, or any of its child elements, is double-clicked.
     */
    onDoubleClick?: (event: SchedulerSlotMouseEvent) => void;
    /**
     * Fires each time a `keydown` event propagates to the wrapping element.
     */
    onKeyDown?: (event: SchedulerSlotKeyboardEvent) => void;
    /**
     * Fires each time a `keypress` event propagates to the wrapping element.
     */
    onKeyPress?: (event: SchedulerSlotKeyboardEvent) => void;
    /**
     * Fires each time a `keyup` event propagates to the wrapping element.
     */
    onKeyUp?: (event: SchedulerSlotKeyboardEvent) => void;
}
/**
 * Represents the object which is returned from the `ref` callback of the [SchedulerSlot](components/scheduler/api/schedulerslot).
 *
 * For more information about Refs, refer to the [React Refs & Dom](https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom) article.
 */
export interface SchedulerSlotHandle {
    /**
     * The HTML element of the SchedulerSlot component.
     */
    element: HTMLDivElement | null;
    /**
     * The props of the SchedulerSlot component.
     */
    props: SchedulerSlotProps;
}
/**
 * Represents the default `slot` component rendered by the [knoReact Scheduler component](components/scheduler).
 */
export declare const SchedulerSlot: React.ForwardRefExoticComponent<SchedulerSlotProps & React.RefAttributes<SchedulerSlotHandle>>;
export declare const schedulerSlotDefaultProps: {
    isWorkHour: boolean;
    isWorkDay: boolean;
};
