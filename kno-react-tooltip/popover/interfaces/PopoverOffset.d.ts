/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { Offset as OffsetBase } from '@progress/kno-react-popup';
/**
 * The offset position of the Popover.
 */
export interface PopoverOffset extends OffsetBase {
    /**
     * Defines the top position of the Popover.
     */
    top: number;
    /**
     * Defines the left position of the Popover.
     */
    left: number;
}
