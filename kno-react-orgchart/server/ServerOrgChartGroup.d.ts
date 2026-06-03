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
export interface OrgChartGroupTitleProps {
    /**
     * The styles that are applied to the OrgChart group title.
     */
    style?: React.CSSProperties;
    /**
     * The default class that is applied to the OrgChart group title.
     */
    className?: string;
    /**
     * The default title that are passed to the OrgChart group.
     */
    title?: string;
    /**
     * The collection of inner items of the group.
     */
    items?: any[];
    /**
     * The level of the group.
     */
    level?: number;
    /**
     * The expanded state of the group.
     */
    expanded?: boolean;
}
/**
 * @hidden
 */
export interface OrgChartGroupSubtitleProps {
    /**
     * The styles that are applied to the OrgChart.
     */
    style?: React.CSSProperties;
    /**
     * The default class that is applied to the OrgChart group title.
     */
    className?: string;
    /**
     * The default subtitle that are passed to the OrgChart group.
     */
    subtitle?: string;
    /**
     * The collection of inner items of the group.
     */
    items?: any[];
    /**
     * The level of the group.
     */
    level?: number;
    /**
     * The expanded state of the group.
     */
    expanded?: boolean;
}
/**
 * @hidden
 */
export interface ServerOrgChartGroupProps {
    /**
     * @hidden
     */
    children?: React.ReactNode;
    /**
     * Sets additional classes to the OrgChart.
     */
    className?: string;
    id?: string;
    /**
     * The styles that are applied to the OrgChart.
     */
    style?: React.CSSProperties;
    title?: string;
    subtitle?: string;
    line?: boolean;
    plus?: boolean;
    focus?: boolean;
    expanded?: boolean;
    nodes?: any[];
    level: number;
    groupTitleHeight?: number;
    groupSubtitleHeight?: number;
    childLineWidth?: number;
    verticalLine?: number;
    orientation?: 'horizontal' | 'vertical';
    groupTitleRender?: React.ComponentType<OrgChartGroupTitleProps>;
    groupSubtitleRender?: React.ComponentType<OrgChartGroupSubtitleProps>;
}
/**
 * @hidden
 */
export declare const ServerOrgChartGroup: React.FunctionComponent<ServerOrgChartGroupProps>;
