/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { DragClue } from '@progress/kno-react-data-tools';
import * as React from 'react';
/**
 * @hidden
 */
export interface ColumnDraggableProps {
    pressHandler?: (draggableEvent: any, element: HTMLTableRowElement | HTMLDivElement) => void;
    dragHandler?: (draggableEvent: any, element: HTMLTableRowElement | HTMLDivElement) => void;
    releaseHandler?: (draggableEvent: any) => void;
    ariaRowIndex?: number;
    dragClue?: React.RefObject<DragClue | null> | null;
    headerRef?: React.RefObject<HTMLDivElement | null> | null;
    containerRef?: React.RefObject<HTMLDivElement | null> | null;
    children?: React.ReactNode;
}
/**
 * @hidden
 */
export declare const ColumnDraggable: (props: ColumnDraggableProps) => React.JSX.Element;
