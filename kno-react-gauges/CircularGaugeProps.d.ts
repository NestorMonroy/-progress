/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { ArcGaugeProps } from './ArcGaugeProps';
import { CircularScale } from './types/circular-scale.interface';
import { ColorRange } from './types/color-range.interface';
/**
 * Represents the props of the [knoReact CircularGauge component](components/gauges/circulargauge).
 */
export interface CircularGaugeProps extends ArcGaugeProps {
    /**
     * The color ranges of the value pointer
     * ([see example](components/gauges/circulargauge/color-ranges)).
     */
    colors?: ColorRange[];
    /**
     * The scale options of the CircularGauge.
     */
    scale?: CircularScale;
}
