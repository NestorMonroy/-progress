/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { DroppableHandle, DroppableOptions } from './hooks/index.js';
import { NormalizedDragEvent } from '@progress/kno-draggable-common';
import * as React from 'react';
/** @hidden */
interface BaseDroppableEvent {
    /**
     * The DOM element.
     */
    element: HTMLElement;
    /**
     * The target Draggable reference.
     */
    target: DroppableHandle;
    /**
     * The normalized drag event.
     */
    event: NormalizedDragEvent;
}
/**
 * Represents the object of the `onDragEnter` callback.
 */
export interface DroppableDragEnterEvent extends BaseDroppableEvent {
}
/**
 * Represents the object of the `onDragOver` callback.
 */
export interface DroppableDragOverEvent extends BaseDroppableEvent {
}
/**
 * Represents the object of the `onDragLeave` callback.
 */
export interface DroppableDragLeaveEvent extends BaseDroppableEvent {
}
/**
 * Represents the object of the `onDrop` callback.
 */
export interface DroppableDropEvent extends BaseDroppableEvent {
}
/**
 * Represents the props of the knoReact Droppable component.
 */
export interface DroppableProps extends DroppableOptions {
    /**
     * Fires when the user enters the element during drag.
     */
    onDragEnter?: (event: DroppableDragEnterEvent) => void;
    /**
     * Fires when the user is dragging an element over the Droppable component.
     */
    onDragOver?: (event: DroppableDragOverEvent) => void;
    /**
     * Fires when the user leaves the element during drag.
     */
    onDragLeave?: (event: DroppableDragLeaveEvent) => void;
    /**
     * Fires when the user drops a draggable element inside the Droppable component.
     */
    onDrop?: (event: DroppableDropEvent) => void;
    /**
     * Callback to get the child element ref. Useful as the Droppable overrides ref of the child element.
     */
    childRef?: React.Ref<HTMLElement | null | {
        element: HTMLElement | null;
        [key: string]: any;
    }>;
    /** @hidden */
    children?: React.ReactNode;
}
/**
 * Represents the knoReact Droppable component.
 *
 * Accepts properties of type [DroppableProps](components/common/api/droppableprops),
 * and returns an object of type [DroppableHandle](components/common/api/droppablehandle) when the `ref` is obtained.
 */
export declare const Droppable: React.ForwardRefExoticComponent<DroppableProps & React.RefAttributes<DroppableHandle | null>>;
export type Droppable = DroppableHandle;
export {};
