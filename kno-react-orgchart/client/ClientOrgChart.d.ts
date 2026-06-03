/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { default as PropTypes } from 'prop-types';
import { OrgChartActionEvent } from '../interfaces/OrgChartActionEvent';
import { OrgChartExpandChangeEvent } from '../interfaces/OrgChartExpandChangeEvent';
import { OrgChartItemRenderProps } from '../server/ServerOrgChartNode.js';
import { OrgChartGroupSubtitleProps, OrgChartGroupTitleProps } from '../server/ServerOrgChartGroup.js';
import * as React from 'react';
/**
 * Represents the props of the [knoReact OrgChart component](components/orgchart).
 */
export interface OrgChartProps {
    /**
     * @hidden
     */
    children?: React.ReactNode;
    /**
     * Sets additional classes to the OrgChart.
     */
    className?: string;
    /**
     * Sets custom id to the OrgChart.
     */
    id?: string;
    /**
     * Sets custom aria-label to the OrgChart. The default value is "Org Chart"
     *
     * @remarks
     * This property is related to accessibility.
     */
    ariaLabel?: string;
    /**
     * Sets the name of the field which provides an id for the item.
     *
     * @default "id"
     */
    idField?: string;
    /**
     * Sets the name of the field which provides an array representation of the item children.
     */
    childrenField?: string;
    /**
     * Sets the name of the field which provides a Boolean representation for the expanded state of the item.
     *
     * @default "expanded"
     */
    expandField?: string;
    /**
     * Sets the name of the field which provides a title representation for the item.
     *
     * @default "text"
     */
    titleField?: string;
    /**
     * Sets the name of the field which indicates to the OrgChart that an item has
     * children even if the children are not initially passed. Used for implementing the load-on-demand feature.
     *
     * @default undefined
     */
    hasChildrenField?: string;
    /**
     * Sets the name of the field which provides a subtitle representation for the item.
     *
     * @default "subtitle"
     */
    subtitleField?: string;
    /**
     * Sets the field which provides an avatar representation for the item.
     *
     * @default "avatar"
     */
    avatarField?: string;
    /**
     * Sets the type of the Avatar that renders for the OrgChart item.
     *
     * @default "image"
     */
    avatarType?: string;
    /**
     * Sets if the Avatar inside the OrgChart's cards is displayed.
     *
     * @default true
     */
    showAvatar?: boolean;
    /**
     * Sets a string array with the colors for the items. By default the colors come from the current kno Theme.
     */
    cardsColors?: string[];
    /**
     * Sets additional CSS styles to the OrgChart.
     */
    style?: React.CSSProperties;
    /**
     * Sets the data of the OrgChart.
     */
    data?: any[];
    /**
     * Sets the field by which the OrgChart data is grouped.
     */
    groupField?: string;
    /**
     * Sets the height of the card of the OrgChart.
     */
    cardHeight?: number;
    /**
     * Sets the width of the card of the OrgChart.
     */
    cardWidth?: number;
    /**
     * Sets the height of the title of the grouped OrgChart.
     */
    groupTitleHeight?: number;
    /**
     * Sets the height of the subtitle of the grouped OrgChart.
     */
    groupSubtitleHeight?: number;
    /**
     * Sets the component that renders each of the OrgChart items.
     */
    itemRender?: React.ComponentType<OrgChartItemRenderProps>;
    /**
     * Sets the component that renders each of the grouped OrgChart title.
     */
    groupTitleRender?: React.ComponentType<OrgChartGroupTitleProps>;
    /**
     * Sets the component that renders each of the grouped OrgChart subtitle.
     */
    groupSubtitleRender?: React.ComponentType<OrgChartGroupSubtitleProps>;
    /**
     * Sets the height of the vertical line of the OrgChart.
     */
    verticalLine?: number;
    /**
     * Sets the height of the OrgChart.
     */
    height?: string | number;
    /**
     * Sets if the OrgChart can be navigated with the keyboard.
     *
     * @default true
     *
     * @example
     * ```jsx
     * <OrgChart navigatable={false} />
     * ```
     */
    navigatable?: boolean;
    /**
     * Fires when a node or group is expanded.
     *
     * @example
     * ```jsx
     * <OrgChart onExpandChange={(ev) => console.log('Expanded:', ev)} />
     * ```
     */
    onExpandChange?: (ev: OrgChartExpandChangeEvent) => void;
    /**
     * @hidden
     */
    onKeyDown?: (ev: OrgChartActionEvent) => void;
    /**
     * Triggers the item action event.
     *
     * @example
     * ```jsx
     * <OrgChart onItemAction={(ev) => console.log('Item action:', ev)} />
     * ```
     */
    onItemAction?: (ev: OrgChartActionEvent) => void;
    /**
     * Triggers the item double-click action event.
     *
     * @example
     * ```jsx
     * <OrgChart onItemDoubleClick={(ev) => console.log('Item double-clicked:', ev)} />
     * ```
     */
    onItemDoubleClick?: (ev: OrgChartActionEvent) => void;
    /**
     * Triggers the item context menu action event.
     *
     * @example
     * ```jsx
     * <OrgChart onItemContextMenu={(ev) => console.log('Context menu:', ev)} />
     * ```
     */
    onItemContextMenu?: (ev: OrgChartActionEvent) => void;
    /**
     * Triggers the group action event.
     *
     * @example
     * ```jsx
     * <OrgChart onGroupAction={(ev) => console.log('Group action:', ev)} />
     * ```
     */
    onGroupAction?: (ev: OrgChartActionEvent) => void;
    /**
     * @hidden
     */
    onGroupBlur?: (ev: OrgChartActionEvent) => void;
    /**
     * @hidden
     */
    onGroupFocus?: (ev: OrgChartActionEvent) => void;
}
/**
 * @hidden
 */
type OrgChartEventsContextType = {
    cardColors?: string[];
    onExpandChange?: (ev: OrgChartExpandChangeEvent) => void;
    onKeyDown?: (ev: OrgChartActionEvent) => void;
    onItemAction?: (ev: OrgChartActionEvent) => void;
    onItemContextMenu?: (ev: OrgChartActionEvent) => void;
    onItemDoubleClick?: (ev: OrgChartActionEvent) => void;
    onGroupAction?: (ev: OrgChartActionEvent) => void;
    onGroupBlur?: (ev: OrgChartActionEvent) => void;
    onGroupFocus?: (ev: OrgChartActionEvent) => void;
};
export declare const OrgChartEventsContextContext: React.Context<OrgChartEventsContextType>;
/**
 * @hidden
 */
export declare const ClientOrgChart: {
    (props: OrgChartProps): React.JSX.Element;
    propTypes: {
        className: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<object>;
        id: PropTypes.Requireable<string>;
        ariaLabel: PropTypes.Requireable<string>;
        idField: PropTypes.Requireable<string>;
        childrenField: PropTypes.Requireable<string>;
        expandField: PropTypes.Requireable<string>;
        titleField: PropTypes.Requireable<string>;
        hasChildrenField: PropTypes.Requireable<string>;
        subtitleField: PropTypes.Requireable<string>;
        avatarField: PropTypes.Requireable<string>;
        cardsColors: PropTypes.Requireable<any[]>;
        data: PropTypes.Requireable<any[]>;
        groupField: PropTypes.Requireable<string>;
        cardHeight: PropTypes.Requireable<number>;
        cardWidth: PropTypes.Requireable<number>;
        groupTitleHeight: PropTypes.Requireable<number>;
        groupSubtitleHeight: PropTypes.Requireable<number>;
        verticalLine: PropTypes.Requireable<number>;
        height: PropTypes.Requireable<NonNullable<string | number | null | undefined>>;
        onExpandChange: PropTypes.Requireable<(...args: any[]) => any>;
        onItemAction: PropTypes.Requireable<(...args: any[]) => any>;
        onItemDoubleClick: PropTypes.Requireable<(...args: any[]) => any>;
        onItemContextMenu: PropTypes.Requireable<(...args: any[]) => any>;
        onGroupAction: PropTypes.Requireable<(...args: any[]) => any>;
    };
    displayName: string;
};
export {};
