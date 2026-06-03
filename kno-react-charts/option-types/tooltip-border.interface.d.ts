/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { Border, DashType } from '../common/property-types';
/**
 * The border options of the tooltip.
 */
export interface TooltipBorder extends Omit<Border, 'dashType'> {
    /**
     *
     * @hidden
     *
     * **Deprecated**. The `dashType` setting is ignored. Use the `border-style` CSS property instead.
     *
     * @deprecated
     */
    dashType?: DashType;
}
