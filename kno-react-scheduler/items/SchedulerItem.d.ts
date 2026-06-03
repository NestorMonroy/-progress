/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { Item, SchedulerItemDragEvent, SchedulerItemFocusEvent, SchedulerItemMouseEvent, SchedulerItemKeyboardEvent, EditableProp } from '../models/index.js';
import * as React from 'react';
/**
 * Represents the props of the knoReact [SchedulerItem](components/scheduler/api/scheduleritem) component.
 */
export interface SchedulerItemProps extends Item {
    /**
     * Specifies the `id` of the wrapping element of the SchedulerItem.
     */
    id?: string;
    /**
     * Specifies the `tabIndex` attribute of the wrapping element of the SchedulerItem.
     *
     * Providing `null` does not apply any `tabIndex` to the element.
     *
     * @remarks
     * This property is related to accessibility.
     */
    tabIndex?: number | null;
    /**
     * Specifies the `className` attribute of the wrapping element of the SchedulerItem.
     *
     * The SchedulerItem applies the following default className:
     * - `k-event`
     * - `k-selected` - if `props.selected` is set to `true`
     * - `k-event-drag-hint` - if `props.dragHint` is set to `true`
     * - `k-scheduler-marquee` - if `props.resizeHint` is set to `true`
     * - `k-marquee`: if `props.resizeHint` is set to `true`
     * - `k-first`: if `props.resizeHint` is set to `true` and `props.tail` is set to `false`
     * - `k-last`: if `props.resizeHint` is set to `true` and `props.head` is set to `false`
     */
    className?: string;
    /**
     * Specifies the `style` object of the wrapping element of the SchedulerItem.
     *
     * The SchedulerItem applies the following default styles:
     *  - `cursor`: `pointer`
     *  - `userSelect`: `none`
     *  - `borderColor`: `props.color`
     *  - `borderColor`: `props.color`
     *  - `pointerEvents`: `none` - if `props.dragHint` or `props.resizeHint` is set to `true`
     */
    style?: React.CSSProperties;
    /**
     * Specifies the `children` of the SchedulerItem.
     *
     * Setting this property overrides the default elements rendered by the SchedulerItem.
     */
    children?: React.ReactNode;
    /**
     * Overrides the `editable` prop of the `Scheduler` and the active view.
     */
    editable?: EditableProp | boolean;
    /**
     * Sets the selected state of the SchedulerItem. By default, the `k-selected` className is added if `props.selected` is `true`.
     */
    selected?: boolean;
    /**
     * Specifies the orientation of the SchedulerItem.
     */
    vertical?: boolean;
    /**
     * Returns true if it is the last item rendered in the current view.
     */
    isLast?: boolean;
    /**
     * Specifies if the current SchedulerItem is used as a DragHint.
     */
    dragHint?: boolean;
    /**
     * Specifies if the current SchedulerItem is used as a ResizeHint.
     */
    resizeHint?: boolean;
    /**
     * Specifies the `format` in which the `zonedStart` and `zonedEnd` properties are displayed.
     *
     * For more information, refer to the [formatDate](components/intl/api/intlservice#toc-formatdate) method of the [IntlService](components/intl).
     */
    format?: string;
    /**
     * Fires each time the element, or any of its child elements, receive focus.
     */
    onFocus?: (event: SchedulerItemFocusEvent) => void;
    /**
     * Fires each time the element, or any of its child elements, lose focus.
     */
    onBlur?: (event: SchedulerItemFocusEvent) => void;
    /**
     * Fires each time the element, or any of its child elements, receives a `mousedown` event.
     */
    onMouseDown?: (event: SchedulerItemMouseEvent) => void;
    /**
     * Fires each time the element, or any of its child elements, receives a `mouseup` event.
     */
    onMouseUp?: (event: SchedulerItemMouseEvent) => void;
    /**
     * Fires each time the element, or any of its child elements, is clicked.
     */
    onClick?: (event: SchedulerItemMouseEvent) => void;
    /**
     * Fires each time the element, or any of its child elements, receives a `mouseenter` event.
     */
    onMouseEnter?: (event: SchedulerItemMouseEvent) => void;
    /**
     * Fires each time the element, or any of its child elements, receives a `mouseleave` event.
     */
    onMouseLeave?: (event: SchedulerItemMouseEvent) => void;
    /**
     * Fires each time the element, or any of its child elements, receives a `mouseover` event.
     */
    onMouseOver?: (event: SchedulerItemMouseEvent) => void;
    /**
     * Fires each time the element, or any of its child elements, receives a `mouseout` event.
     */
    onMouseOut?: (event: SchedulerItemMouseEvent) => void;
    /**
     * Fires each time the element, or any of its child elements, is double-clicked.
     */
    onDoubleClick?: (event: SchedulerItemMouseEvent) => void;
    /**
     * Fires when you click the `delete` icon.
     *
     * The `delete` icon renders only when `props.editable` or `props.editable.remove` is `true`.
     */
    onRemoveClick?: (event: SchedulerItemMouseEvent) => void;
    /**
     * Fires each time a `keydown` event propagates to the wrapping element.
     */
    onKeyDown?: (event: SchedulerItemKeyboardEvent) => void;
    /**
     * Fires each time a `keypress` event propagates to the wrapping element.
     */
    onKeyPress?: (event: SchedulerItemKeyboardEvent) => void;
    /**
     * Fires each time a `keyup` event propagates to the wrapping element.
     */
    onKeyUp?: (event: SchedulerItemKeyboardEvent) => void;
    /**
     * Fires each time the element receives a `press` event.
     *
     * This event is used by the [`Drag & Drop`](components/scheduler/editing) functionality of the SchedulerItem.
     * The SchedulerItem uses the [KendoReactDraggable](components/common/drag-and-drop/draggable) instead of the `onDragStart` callback.
     */
    onPress?: (event: SchedulerItemDragEvent) => void;
    /**
     * Fires each time the element is dragged.
     *
     * This event is used by the [`Drag & Drop`](components/scheduler/editing) functionality of the SchedulerItem.
     * The SchedulerItem uses the [KendoReactDraggable](components/common/drag-and-drop/draggable) instead of the `onDrag` callback.
     */
    onDrag?: (event: SchedulerItemDragEvent) => void;
    /**
     * Fires when you release the dragged element.
     *
     * This event is used by the [`Drag & Drop`](components/scheduler/editing) functionality of the SchedulerItem.
     * The SchedulerItem uses the [KendoReactDraggable](components/common/drag-and-drop/draggable) instead of the `onDragEnd` callback.
     */
    onRelease?: (event: SchedulerItemDragEvent) => void;
    /**
     * Fires each time any of the resize handlers receives a `press` event.
     *
     * This event is used by the [`Resize`](components/scheduler/editing) functionality of the SchedulerItem.
     * The SchedulerItem uses the [KendoReactDraggable](components/common/drag-and-drop/draggable) instead of the `onDragStart` callback.
     */
    onResizePress?: (event: SchedulerItemDragEvent) => void;
    /**
     * Fires each time the resize handler responsible for the item `start` is being dragged.
     *
     * This event is used by the [`Resize`](components/scheduler/editing) functionality of the SchedulerItem.
     * The SchedulerItem uses the [KendoReactDraggable](components/common/drag-and-drop/draggable) instead of the `onDrag` callback.
     */
    onResizeStartDrag?: (event: SchedulerItemDragEvent) => void;
    /**
     * Fires each time the resize handler responsible for the item `end` is being dragged.
     *
     * This event is used by the [`Resize`](components/scheduler/editing) functionality of the SchedulerItem.
     * The SchedulerItem uses the [KendoReactDraggable](components/common/drag-and-drop/draggable) instead of the `onDrag` callback.
     */
    onResizeEndDrag?: (event: SchedulerItemDragEvent) => void;
    /**
     * Fires when you release the dragged resize handler.
     *
     * This event is used by the [`Resize`](components/scheduler/editing) functionality of the SchedulerItem.
     * The SchedulerItem uses the [KendoReactDraggable](components/common/drag-and-drop/draggable) instead of the `onDragEnd` callback.
     */
    onResizeRelease?: (event: SchedulerItemDragEvent) => void;
    /** @hidden */
    _maxSiblingsPerSlot?: React.MutableRefObject<number | null>;
    /** @hidden */
    _siblings?: React.MutableRefObject<SchedulerItemHandle[] | null>;
    /** @hidden */
    _order?: React.MutableRefObject<number | null>;
}
/**
 * Represents the object which is returned from the `ref` callback of the [SchedulerItem](components/scheduler/api/scheduleritem).
 *
 * For more information about Refs, refer to the [React Refs & Dom](https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom) article.
 */
export interface SchedulerItemHandle {
    /**
     * The HTML element of the SchedulerItem component.
     */
    element: HTMLDivElement | null;
    /**
     * The props of the SchedulerItem component.
     */
    props: SchedulerItemProps;
    /** @hidden */
    _maxSiblingsPerSlot?: number | null;
    /** @hidden */
    _siblings?: SchedulerItemHandle[] | null;
    /** @hidden */
    _order?: number | null;
}
/**
 * Represents the default `item` component rendered by the [knoReact Scheduler component](components/scheduler).
 */
export declare const SchedulerItem: React.ForwardRefExoticComponent<SchedulerItemProps & React.RefAttributes<SchedulerItemHandle>>;
