/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { SchedulerItemHandle } from '../items/SchedulerItem.js';
import { SchedulerSlotHandle } from '../slots/SchedulerSlot.js';
import { SchedulerTaskHandle } from '../tasks/SchedulerTask.js';
/**
 * @hidden
 **/
export interface BaseEvent<T> {
    target: T;
}
/**
 * @hidden
 */
export interface ItemDragEvent {
    pageX: number;
    pageY: number;
    clientX: number;
    clientY: number;
    offsetX: number;
    offsetY: number;
    type: string;
    ctrlKey: boolean;
    shiftKey: boolean;
    altKey: boolean;
    originalEvent: PointerEvent;
}
/**
 * @hidden
 */
export interface ViewChangeEvent {
    target: any;
    syntheticEvent: React.SyntheticEvent;
}
/**
 * @hidden
 */
export interface SchedulerItemFocusEvent {
    target: SchedulerItemHandle;
    syntheticEvent: React.FocusEvent;
}
/**
 * @hidden
 */
export interface SchedulerItemMouseEvent {
    target: SchedulerItemHandle;
    syntheticEvent: React.MouseEvent;
}
/**
 * @hidden
 */
export interface SchedulerItemKeyboardEvent {
    target: SchedulerItemHandle;
    syntheticEvent: React.KeyboardEvent;
}
/**
 * @hidden
 */
export interface SchedulerItemDragEvent {
    target: SchedulerItemHandle;
    dragEvent: ItemDragEvent;
}
export interface SchedulerTaskMouseEvent {
    /**
     * The SchedulerTask instance that triggered the event.
     */
    target: SchedulerTaskHandle;
    /**
     * The React mouse event object.
     */
    syntheticEvent: React.MouseEvent;
}
/**
 * @hidden
 */
export interface SchedulerSlotFocusEvent {
    target: SchedulerSlotHandle;
    syntheticEvent: React.FocusEvent;
}
/**
 * @hidden
 */
export interface SchedulerSlotMouseEvent {
    target: SchedulerSlotHandle;
    syntheticEvent: React.MouseEvent;
}
/** @hidden */
export interface SchedulerSlotKeyboardEvent {
    target: SchedulerSlotHandle;
    syntheticEvent: React.KeyboardEvent;
}
