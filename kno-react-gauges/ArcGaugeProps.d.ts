/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { BaseGaugeProps } from './BaseGaugeProps';
import { ArcScale, ColorRange } from './types';
/**
 * Represents the props of the [knoReact ArcGauge component](components/gauges/arcgauge).
 */
export interface ArcGaugeProps extends BaseGaugeProps {
    /**
     * The value of the Gauge.
     */
    value: number;
    /**
     * The color of the value pointer. Accepts a valid CSS color string, including hex and rgb.
     */
    color?: string;
    /**
     * The color ranges of the value pointer
     * ([see example](components/gauges/arcgauge/color-ranges)).
     */
    colors?: ColorRange[];
    /**
     * The opacity of the value pointer.
     */
    opacity?: number;
    /**
     * The scale options of the ArcGauge.
     */
    scale?: ArcScale;
    /**
     * @hidden
     *
     * Alias for backwards compatbility.
     */
    arcCenterRender?: (value: number, color: string) => React.ReactElement<any>;
    /**
     *
     * A function that renders the center template of the Gauge.
     */
    centerRender?: (value: number, color: string) => React.ReactElement<any>;
}
