/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { DashType } from './dash-type';
/**
 * The appearance settings for the border lines (see the [basic usage example](components/charts/api/charttitle)).
 */
export interface Border {
    /**
     * The color of the border line. Accepts a valid CSS color string, including HEX and RGB.
     */
    color?: string;
    /**
     * The dash type of the border line.
     */
    dashType?: DashType;
    /**
     * The opacity of the border. By default the border is opaque.
     *
     * @default 1
     */
    opacity?: number | string;
    /**
     * The width of the border line in pixels.
     */
    width?: number;
}
