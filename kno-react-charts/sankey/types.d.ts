/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { SankeyData, SankeyExportVisualOptions, SankeyHorizontalMargin, SankeyLabel, SankeyLabelDefaults, SankeyLabelStroke, SankeyLegendItem, SankeyLink, SankeyLinkDataItem, SankeyLinkDefaults, SankeyLinkHighlight, SankeyNode, SankeyNodeDataItem, SankeyNodeDefaults, SankeyFocusHighlight, SankeyNodeLabel, SankeyLinkLabel, SankeyOptions, SankeyTooltipEvent, SankeyTooltip as SankeyTooltipInterface, SankeyEvent as SankeyWidgetEvent } from '@progress/kno-charts';
import { Group } from '@progress/kno-drawing';
import { BaseEvent } from '@progress/kno-react-common';
import { Legend, Title } from '../common/property-types';
export { SankeyData, SankeyExportVisualOptions, SankeyHorizontalMargin, SankeyLabel, SankeyLabelDefaults, SankeyLabelStroke, SankeyLegendItem, SankeyLink, SankeyLinkDataItem, SankeyLinkDefaults, SankeyLinkHighlight, SankeyNode, SankeyNodeDataItem, SankeyNodeDefaults, SankeyFocusHighlight, SankeyNodeLabel, SankeyLinkLabel, SankeyOptions };
/**
 * The knoReact Sankey event object.
 */
export interface SankeyEvent extends Omit<SankeyWidgetEvent, 'originalEvent'>, Omit<BaseEvent<SankeyHandle>, 'syntheticEvent'> {
}
/**
 * @hidden
 */
export type SankeyEventHandler = (event: SankeyEvent) => void;
/**
 * Represents the Sankey title options.
 */
export interface SankeyTitle extends Title {
}
/**
 * Represents the Sankey legend options.
 */
export interface SankeyLegend extends Omit<Legend, 'inactiveItems' | 'item' | 'focusHighlight'> {
    /**
     * The configuration of the legend items.
     */
    item?: SankeyLegendItem;
}
/**
 * Represents the props of the Sankey tooltip content component.
 */
export interface TooltipContentProps {
    /**
     * Represents the dataItem object of the hovered node or link element.
     */
    dataItem: SankeyNodeDataItem | SankeyLinkDataItem;
    /**
     * The value of the hovered node element.
     * The value is available only when the hovered element is a node.
     */
    nodeValue?: number;
    /**
     * The `dir` attribute of the Sankey tooltip content component.
     */
    dir?: string;
}
/**
 * @hidden
 */
interface TooltipAppendTo {
    /**
     * Defines the container to which the Tooltip will be appended. Defaults to [`body`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/body).
     */
    appendTo?: HTMLElement | null;
}
/**
 * Represents the props of the Sankey tooltip component.
 *
 * @hidden
 */
export interface SankeyTooltipProps extends TooltipAppendTo {
    /**
     * The event object of the Sankey tooltip.
     */
    event: SankeyTooltipEvent;
    /**
     * The content component of the Sankey tooltip.
     */
    Content: React.ComponentType<TooltipContentProps>;
    /**
     * The distance between the tooltip and the mouse pointer in pixels.
     */
    offset: number;
    /**
     * The `dir` attribute of the Sankey tooltip.
     */
    dir?: string;
}
/**
 * Represents the Sankey tooltip configuration.
 */
export interface SankeyTooltip extends SankeyTooltipInterface, TooltipAppendTo {
    /**
     * Indicates whether the Sankey tooltips will be rendered.
     */
    visible?: boolean;
    /**
     * The distance between the tooltip and the mouse pointer in pixels.
     *
     * @default 12
     */
    offset?: number;
    /**
     * The component that will be rendered as the content of the Sankey tooltip when the hovered element is a link.
     */
    linkComponent?: React.ComponentType<TooltipContentProps>;
    /**
     * The component that will be rendered as the content of the Sankey tooltip when the hovered element is a node.
     */
    nodeComponent?: React.ComponentType<TooltipContentProps>;
}
/**
 * Represents the props of the knoReact [Sankey](components/charts/api/sankey) component.
 */
export interface SankeyProps {
    /**
     * The styles that are applied to the Sankey component.
     */
    style?: React.CSSProperties;
    /**
     * Sets additional CSS classes to the Sankey component.
     */
    className?: string;
    /**
     * Represents the `dir` attribute of the Sankey component.
     */
    dir?: string;
    /**
     * The data of the Sankey component containing the `links` and `nodes` props.
     */
    data: SankeyData;
    /**
     * The `links` default props of the Sankey component.
     * The value will be applied to all links unless overridden by the `links` prop of the `data` prop.
     */
    links?: SankeyLinkDefaults;
    /**
     * The `nodes` default props of the Sankey component.
     * The value will be applied to all nodes unless overridden by the `nodes` prop of the `data` prop.
     */
    nodes?: SankeyNodeDefaults;
    /**
     * The `labels` default props of the Sankey component.
     * The value will be applied to all labels unless overridden by the `nodes` label prop of the `data` prop.
     */
    labels?: SankeyLabelDefaults;
    /**
     * The title configuration of the Sankey component.
     */
    title?: SankeyTitle;
    /**
     * The legend configuration of the Sankey component.
     */
    legend?: SankeyLegend;
    /**
     * The configuration of the Sankey tooltips.
     */
    tooltip?: SankeyTooltip;
    /**
     * If set to `true`, the Sankey component will not perform automatic layout.
     */
    disableAutoLayout?: boolean;
    /**
     * If set to `true`, the Sankey keyboard navigation will be disabled.
     */
    disableKeyboardNavigation?: boolean;
    /**
     * Fires when the mouse pointer enters a node. Similar to the `mouseenter` event.
     */
    onNodeEnter?: (event: SankeyEvent) => void;
    /**
     * Fires when the mouse pointer leaves a node. Similar to the `mouseleave` event.
     */
    onNodeLeave?: (event: SankeyEvent) => void;
    /**
     * Fires when the mouse pointer enters a link. Similar to the `mouseenter` event,
     */
    onLinkEnter?: (event: SankeyEvent) => void;
    /**
     * Fires when the mouse pointer leaves a link. Similar to the `mouseleave` event.
     */
    onLinkLeave?: (event: SankeyEvent) => void;
    /**
     * Fires when a node is clicked.
     */
    onNodeClick?: (event: SankeyEvent) => void;
    /**
     * Fires when a link is clicked.
     */
    onLinkClick?: (event: SankeyEvent) => void;
}
/**
 * Represents the object which is passed to the [`ref`](https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom)
 * callback of the [Sankey](components/charts/api/sankey) component.
 */
export interface SankeyHandle {
    /**
     * The root DOM element of the Sankey component.
     */
    element: HTMLDivElement | null;
    /**
     * The props of the Sankey component.
     */
    props: SankeyProps;
    /**
     * Exports the visual of the Sankey component to a drawing group.
     */
    exportVisual(options?: SankeyExportVisualOptions): Group;
}
