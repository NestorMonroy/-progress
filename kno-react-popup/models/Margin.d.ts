/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { MarginSettings } from '@progress/kno-popup-common';
/**
 * Defines the horizontal and the vertical margin offset of the component.
 */
export interface Margin extends MarginSettings {
    /**
     * Defines the possible horizontal margin value.
     */
    horizontal: number;
    /**
     * Defines the possible vertical margin value.
     */
    vertical: number;
}
