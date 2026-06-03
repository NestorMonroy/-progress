/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
/** @hidden */
export interface DragEvent {
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
