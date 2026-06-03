/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { ArcScale } from './arc-scale.interface';
/**
 * The scale options of the Gauge.
 */
export interface CircularScale extends ArcScale {
    /**
     * @hidden
     */
    endAngle?: number;
}
