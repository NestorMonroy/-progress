/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { ListViewEvent } from '../events';
import { ListViewItemProps } from './ListViewItemProps';
import { WebMcpProps } from '@progress/kno-react-common';
/**
 * Represents the props of the [knoReact ListView component](components/listview).
 */
export interface ListViewProps {
    /**
     * Sets a class of the ListView DOM element.
     *
     * @example
     * ```jsx
     * <ListView className="custom-class" />
     * ```
     */
    className?: string;
    /**
     * Sets the data of the ListView.
     *
     * @example
     * ```jsx
     * <ListView data={[{ text: 'Item 1' }, { text: 'Item 2' }]} />
     * ```
     */
    data?: any[];
    /**
     * Defines the component that renders for each item of the data collection.
     *
     * @example
     * ```jsx
     * const CustomItem = (props) => <div>{props.text}</div>;
     *
     * <ListView item={CustomItem} />
     * ```
     */
    item?: React.ComponentType<ListViewItemProps>;
    /**
     * Defines the component that renders for the ListView header.
     *
     * @example
     * ```jsx
     * const CustomHeader = (props) => <div>Custom Header</div>;
     *
     * <ListView header={CustomHeader} />
     * ```
     */
    header?: React.ComponentType<any>;
    /**
     * Defines the component that renders for the ListView footer.
     *
     * @example
     * ```jsx
     * const CustomFooter = (props) => <div>Custom Footer</div>;
     *
     * <ListView footer={CustomFooter} />
     * ```
     */
    footer?: React.ComponentType<any>;
    /**
     * Sets styles to the ListView container.
     *
     * @example
     * ```jsx
     * <ListView style={{ height: '400px' }} />
     * ```
     */
    style?: React.CSSProperties;
    /**
     * Fires when the ListView has been scrolled.
     *
     * @example
     * ```jsx
     * <ListView onScroll={(event) => console.log(event)} />
     * ```
     */
    onScroll?: (event: ListViewEvent) => void;
    /**
     * If set to `true`, the user can use dedicated shortcuts to interact with the ListView.
     * By default, navigation is disabled.
     *
     * @default false
     *
     * @example
     * ```jsx
     * <ListView navigatable={true} />
     * ```
     */
    navigatable?: boolean;
    /**
     * Enables Web MCP tool registration for this component.
     * Requires a parent `WebMcpProvider` from `@progress/kno-react-webmcp`.
     */
    webMcp?: boolean | WebMcpProps;
}
