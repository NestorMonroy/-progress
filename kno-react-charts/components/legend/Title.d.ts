/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { LegendTitle } from '../../common/property-types';
import * as React from 'react';
/**
 * Represents the props of the knoReact ChartLegendTitle component.
 */
export interface ChartLegendTitleProps extends LegendTitle {
}
/**
 * Represents the knoReact ChartLegendTitle component.
 * ([see example](components/charts/chart/elements/legend#toc-setting-a-title)).
 */
declare const ChartLegendTitle: React.FunctionComponent<ChartLegendTitleProps>;
export { ChartLegendTitle };
