/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { BaseEvent } from '@progress/kno-react-common';
import { ColorPaletteHandle } from './ColorPaletteHandle';
/**
 * The arguments for the `onChange` ColorPalette event.
 */
export interface ColorPaletteChangeEvent extends BaseEvent<ColorPaletteHandle> {
    /**
     * The current value of the ColorPalette.
     */
    value: string;
    /**
     * The current value of the ColorPalette in RGBA format.
     */
    rgbaValue: string;
}
