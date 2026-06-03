/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { Series } from '../../common/property-types';
import * as React from 'react';
/**
 * Represents the props of the knoReact ChartNavigatorSeriesItem component.
 */
export interface ChartNavigatorSeriesItemProps extends Series {
}
/**
 * Represents the knoReact ChartNavigatorSeriesItem component.
 *
 * @remarks
 * Supported children components are: {@link ChartNavigatorSeriesErrorBars}, {@link ChartNavigatorSeriesExtremes}, {@link ChartNavigatorSeriesHighlight}, {@link ChartNavigatorSeriesLabels},
 * {@link ChartNavigatorSeriesMarkers}, {@link ChartNavigatorSeriesNotes}, {@link ChartNavigatorSeriesItemOutliers}, {@link ChartNavigatorSeriesItemTooltip}.
 */
declare const ChartNavigatorSeriesItem: React.FunctionComponent<ChartNavigatorSeriesItemProps>;
export { ChartNavigatorSeriesItem };
