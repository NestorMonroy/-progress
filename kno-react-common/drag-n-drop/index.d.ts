/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { DragAndDropContext } from './context/index.js';
import * as React from 'react';
export type { NormalizedDragEvent } from '@progress/kno-draggable-common';
/**
 * Represents the properties of the `DragAndDrop` component.
 */
export interface DragAndDropProps {
    /**
     * Represents the `children` of the `DragAndDrop` component. The `children` prop can be any valid React Element.
     */
    children?: React.ReactNode;
    /**
     * Allows passing a custom context to the `DragAndDrop` component. Useful when there are multiple drag-and-drop functionalities in a single component.
     */
    context?: typeof DragAndDropContext;
}
/**
 * The `DragAndDrop` component is required for the `droppable` functionality to work properly.
 *
 * It is used internally to synchronize the `drag` and `drop` functionalities.
 * Accepts properties of type [DragAndDropProps](components/common/api/draganddropprops).
 */
export declare const DragAndDrop: {
    (props: DragAndDropProps): React.JSX.Element;
    displayName: string;
};
