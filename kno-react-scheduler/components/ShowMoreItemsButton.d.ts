/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { Slot } from '../models/index.js';
import * as React from 'react';
/**
 * @hidden
 */
export interface ShowMoreItemsButtonMouseEvent {
    syntheticEvent: React.MouseEvent;
    target: ShowMoreItemsButtonHandle;
}
/**
 * @hidden
 */
export interface ShowMoreItemsButtonProps {
    slot?: Slot;
    onClick?: (event: ShowMoreItemsButtonMouseEvent) => void;
}
/**
 * @hidden
 */
export interface ShowMoreItemsButtonHandle extends ShowMoreItemsButtonProps {
    element: HTMLButtonElement | null;
}
/**
 * @hidden
 */
export declare const ShowMoreItemsButton: React.ForwardRefExoticComponent<ShowMoreItemsButtonProps & React.RefAttributes<ShowMoreItemsButtonHandle>>;
