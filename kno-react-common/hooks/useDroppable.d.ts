/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { NormalizedDragEvent } from '@progress/kno-draggable-common';
import { DragAndDropContext } from '../drag-n-drop/context/index.js';
import * as React from 'react';
/**
 * Represents the `ref` object of the `Droppable` component.
 */
export interface DroppableHandle {
    /**
     * The element which is registered as droppable.
     */
    element?: HTMLElement;
}
/**
 * Represents the configuration object type of the `Droppable` component and `useDroppable` hook.
 */
export interface DroppableOptions {
    /**
     * The context to use for the droppable.
     */
    context?: typeof DragAndDropContext;
}
/**
 * Represents the knoReact `useDroppable` hook.
 * Use it to attach `drop` events to a native HTML DOM elements, or custom React Components.
 *
 * For more information, refer to the [knoReact Droppable](components/common/drag-and-drop/droppable) article.
 *
 * @param ref - The `ref` of the HTML Element or React Component which will enable the `droppable` functionality.
 * @param callbacks - A collection of callbacks, called by the `useDroppable` hook when a specific action occurs.
 * @param options - The options for the `useDroppable` hook.
 */
export declare function useDroppable(ref: React.RefObject<HTMLElement | null | {
    element: HTMLElement | null;
}>, callbacks?: {
    onDragEnter?: (event: NormalizedDragEvent) => void;
    onDragOver?: (event: NormalizedDragEvent) => void;
    onDragLeave?: (event: NormalizedDragEvent) => void;
    onDrop?: (event: NormalizedDragEvent) => void;
}, options?: DroppableOptions): void;
