/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { BaseEvent } from './BaseEvent.js';
import { Sortable } from '../Sortable.js';
import { PreventableEvent } from './PreventableEvent.js';
/**
 * The `SortableOnDragStartEvent` event.
 */
export declare class SortableOnDragStartEvent extends PreventableEvent implements BaseEvent<Sortable> {
    /**
     * The Sortable component.
     */
    target: Sortable;
    /**
     * The target element.
     */
    element: HTMLElement;
    /**
     * The previous index of the dragged item.
     */
    prevIndex: number;
    /**
     * @hidden
     */
    constructor(target: Sortable, prevIndex: number, element: HTMLElement);
}
