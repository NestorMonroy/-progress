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
export interface OrgChartCardProps {
    /**
     * @hidden
     */
    children?: React.ReactNode;
    /**
     * The styles that are applied to the OrgChart.
     */
    style?: React.CSSProperties;
    node?: any;
}
/**
 * @hidden
 */
export declare const OrgChartCard: React.FunctionComponent<OrgChartCardProps>;
