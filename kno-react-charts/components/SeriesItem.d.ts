/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { Series } from '../common/property-types';
import * as React from 'react';
/**
 * Represents the props of the knoReact ChartSeriesItem component.
 */
export interface ChartSeriesItemProps extends Series {
    /**
     * @hidden
     */
    children?: React.ReactNode;
    /**
     * @hidden
     */
    _chartCollectionIdxKey?: string;
    /**
     * When set, the prop is used to render the Drilldown Series.
     */
    drilldownSeriesFactory?: (props: any) => React.ReactElement<any, any>;
}
/**
 * Represents the knoReact ChartSeriesItem component.
 *
 * @remarks
 * Supported children components are: {}.
 */
declare const ChartSeriesItem: React.FunctionComponent<ChartSeriesItemProps>;
export { ChartSeriesItem };
