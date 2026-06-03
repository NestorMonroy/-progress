/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { Margin as MarginBase } from '@progress/kno-react-popup';
/**
 * Defines the horizontal and the vertical margin offset of the component.
 */
export interface PopoverMargin extends MarginBase {
    /**
     * Defines the possible horizontal margin value.
     */
    horizontal: number;
    /**
     * Defines the possible vertical margin value.
     */
    vertical: number;
}
