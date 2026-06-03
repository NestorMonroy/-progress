/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { Padding } from '../common/property-types';
import { TooltipBorder } from './tooltip-border.interface';
/**
 * @hidden
 */
export interface AxisCrosshairTooltip {
    /**
     * The background color of the tooltip. Accepts a valid CSS color string, including hex and rgb.
     */
    background?: string;
    /**
     * The border options of the tooltip.
     */
    border?: TooltipBorder;
    /**
     * The text color of the tooltip. Accepts a valid CSS color string, including hex and rgb.
     */
    color?: string;
    /**
     * The font of the tooltip.
     */
    font?: string;
    /**
     * The format for displaying the tooltip. Uses the [`format`](components/intl/api/intlservice#toc-format) method of IntlService. Contains one placeholder (`"{0}"`) which represents the value.
     */
    format?: string;
    /**
     * The padding of the crosshair tooltip. A numeric value sets all paddings.
     */
    padding?: Padding | number;
    /**
     * If set to `true`, the Chart displays the axis crosshair tooltip. By default, the axis crosshair tooltip is not visible.
     */
    visible?: boolean;
}
