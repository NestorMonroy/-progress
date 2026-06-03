/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { BaseGaugeProps } from './BaseGaugeProps';
import { LinearPointer, LinearScale } from './types';
/**
 * Represents the props of the [knoReact LinearGauge component](components/gauges/lineargauge).
 */
export interface LinearGaugeProps extends BaseGaugeProps {
    /**
     * The configuration of the pointers ([see example](components/gauges/lineargauge/multiple-pointers)).
     *
     * Example:
     * ```jsx
     * <LinearGauge pointer={{ value: 75 }} />
     * ```
     */
    pointer: LinearPointer | LinearPointer[];
    /**
     * The configuration of the scale.
     *
     * Example:
     * ```jsx
     * <LinearGauge scale={{ min: 0, max: 100 }} />
     * ```
     */
    scale?: LinearScale;
}
