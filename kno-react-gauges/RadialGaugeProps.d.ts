/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { BaseGaugeProps } from './BaseGaugeProps';
import { RadialPointer, RadialScale } from './types';
/**
 * Represents the props of the [knoReact RadialGauge component](components/gauges/radialgauge).
 */
export interface RadialGaugeProps extends BaseGaugeProps {
    /**
     * The configuration of the pointers ([see example](components/gauges/radialgauge/multiple-pointers)).
     *
     * Example:
     * ```jsx
     * <RadialGauge pointer={{ value: 50 }} />
     * ```
     */
    pointer: RadialPointer | RadialPointer[];
    /**
     * The configuration of the scale.
     *
     * Example:
     * ```jsx
     * <RadialGauge scale={{ startAngle: -90, endAngle: 180 }} />
     * ```
     */
    scale?: RadialScale;
}
