/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as React from 'react';
/**
 * @hidden
 */
export interface OrgChartGroupContainerProps {
    /**
     * @hidden
     */
    children?: React.ReactNode;
    /**
     * The styles that are applied to the OrgChart.
     */
    style?: React.CSSProperties;
    nodes?: any[];
}
/**
 * @hidden
 */
export declare const OrgChartGroupContainer: React.FunctionComponent<OrgChartGroupContainerProps>;
