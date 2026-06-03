/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { BaseChartProps } from './BaseChartProps';
import { WebMcpProps } from '@progress/kno-react-common';
/**
 * Represents the props of the knoReact Chart component.
 */
export interface ChartProps extends BaseChartProps {
    /**
     * When set, the prop is used to render the Donut Center template.
     */
    donutCenterRender?: () => React.ReactElement<any>;
    /**
     * Enables Web MCP tool registration for this component.
     * Requires a parent `WebMcpProvider` from `@progress/kno-react-webmcp`.
     */
    webMcp?: boolean | WebMcpProps;
}
