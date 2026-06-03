/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { BaseEvent } from '@progress/kno-react-common';
import { ColorGradient } from '../ColorGradient.js';
/**
 * The arguments for the `onChange` ColorGradient event.
 */
export interface ColorGradientChangeEvent extends BaseEvent<ColorGradient> {
    /**
     * The current value of the ColorGradient.
     */
    value: string;
}
