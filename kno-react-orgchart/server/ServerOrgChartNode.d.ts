/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { OrgChartActionEvent, OrgChartExpandChangeEvent } from '../index.js';
import * as React from 'react';
/**
 * The props that are passed to the itemRender component.
 */
export interface OrgChartItemRenderProps {
    /**
     * The item passed to the ItemRender.
     */
    item?: any;
    /**
     * The title of the item.
     */
    title?: string;
    /**
     * The subtitle of the item.
     */
    subtitle?: string;
    /**
     * The level of the item.
     */
    level?: number;
    /**
     * The expanded state of the item.
     */
    expanded?: boolean;
    /**
     * The color of the item.
     */
    color?: string;
}
/**
 * @hidden
 */
export interface ServerOrgChartNodeProps {
    /**
     * @hidden
     */
    children?: React.ReactNode;
    /**
     * Sets additional classes to the OrgChart.
     */
    className?: string;
    /**
     * Passes the OrgChart id to the node.
     */
    id?: string;
    /**
     * The styles that are applied to the OrgChart.
     */
    style?: React.CSSProperties;
    level: number;
    childLineWidth?: number;
    title?: string;
    subtitle?: string;
    details?: boolean;
    color?: string;
    line?: boolean;
    plus?: boolean;
    expanded?: boolean;
    avatar?: string;
    avatarType?: string;
    showAvatar?: boolean;
    cardHeight?: number;
    cardWidth?: number;
    verticalLine?: number;
    itemRender?: React.ComponentType<OrgChartItemRenderProps>;
    onExpandChange?: (ev: OrgChartExpandChangeEvent) => void;
    onItemAction?: (ev: OrgChartActionEvent) => void;
    onItemKeyDown?: (ev: OrgChartActionEvent) => void;
    node?: any;
}
/**
 * @hidden
 */
export declare const ServerOrgChartNode: React.FunctionComponent<ServerOrgChartNodeProps>;
