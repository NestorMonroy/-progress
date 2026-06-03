/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { ComponentType } from 'react';
import { WebMcpProps } from '@progress/kno-react-common';
import { ListBoxItemClickEvent, ListBoxKeyDownEvent, ListBoxDragEvent, ListBoxDragLeaveEvent, ListBoxItemSelectEvent, ListBoxItemNavigateEvent } from './ListBoxEvents';
import { toolbarPosition } from './Enums.js';
/**
 * Represents the props of the [knoReact ListBox component](components/listbox).
 */
export interface ListBoxProps {
    /**
     * Sets a `class` of the ListBox container.
     *
     * @example
     * ```jsx
     * <ListBox className="custom-class" />
     * ```
     */
    className?: string;
    /**
     * Sets an `id` of the ListBox container.
     *
     * @example
     * ```jsx
     * <ListBox id="listbox-id" />
     * ```
     */
    id?: string;
    /**
     * Configures the `size` of the ListBox.
     *
     * The available options are:
     * - small
     * - medium
     * - large
     *
     * @default undefined (theme-controlled)
     *
     * @example
     * ```jsx
     * <ListBox size="large" />
     * ```
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * Specifies the styles which are set to the ListBox container.
     *
     * @example
     * ```jsx
     * <ListBox style={{ width: '300px' }} />
     * ```
     */
    style?: React.CSSProperties;
    /**
     * Sets the data of the ListBox.
     *
     * @example
     * ```jsx
     * <ListBox data={[{ text: 'Item 1' }, { text: 'Item 2' }]} />
     * ```
     */
    data: Array<any>;
    /**
     * Makes the items of the ListBox draggable.
     *
     * @default true
     *
     * @example
     * ```jsx
     * <ListBox draggable={false} />
     * ```
     */
    draggable?: boolean;
    /**
     * Sets the selected field of the ListBox. Based on the value of this field, an item is selected or not.
     *
     * @example
     * ```jsx
     * <ListBox selectedField="isSelected" />
     * ```
     */
    selectedField?: string;
    /**
     * Sets the data item field that represents the item text. If the data contains only primitive values, do not define it.
     *
     * @example
     * ```jsx
     * <ListBox textField="name" />
     * ```
     */
    textField: string;
    /**
     * The field that is used during form submission. Defaults to the `textField` if not set.
     *
     * @example
     * ```jsx
     * <ListBox valueField="id" />
     * ```
     */
    valueField?: string;
    /**
     * Sets the position of the toolbar of the ListBox if one is set. The ListBox may have no toolbar.
     *
     * The possible values are:
     * - `top`
     * - `bottom`
     * - `left`
     * - `right` (Default)
     * - `none`
     *
     * @default 'right'
     *
     * @example
     * ```jsx
     * <ListBox toolbarPosition="top" />
     * ```
     */
    toolbarPosition?: toolbarPosition | string;
    /**
     * Renders a toolbar component next to the ListBox.
     *
     * @example
     * ```jsx
     * <ListBox toolbar={CustomToolbar} />
     * ```
     */
    toolbar?: null | ComponentType<any>;
    /**
     * Defines the component that will be rendered for each item of the data collection.
     *
     * @example
     * ```jsx
     * const CustomItem = (props) => <div>{props.text}</div>;
     *
     * <ListBox item={CustomItem} />
     * ```
     */
    item?: React.ComponentType<any>;
    /**
     * Fires when an item from the ListBox is clicked. Contains the clicked item.
     *
     * @example
     * ```jsx
     * <ListBox onItemClick={(event) => console.log(event.item)} />
     * ```
     */
    onItemClick?: (event: ListBoxItemClickEvent) => void;
    /**
     * Fires when an item from the ListBox is selected. Contains the selected item.
     *
     * @example
     * ```jsx
     * <ListBox onItemSelect={(event) => console.log(event.item)} />
     * ```
     */
    onItemSelect?: (event: ListBoxItemSelectEvent) => void;
    /**
     * Fires on keydown over the ListBox list items. You can use it to add extra keyboard navigation options.
     *
     * @example
     * ```jsx
     * <ListBox onKeyDown={(event) => console.log(event.keyCode)} />
     * ```
     */
    onKeyDown?: (event: ListBoxKeyDownEvent) => void;
    /**
     * Fires when the user starts to drag an item from the ListBox. The event contains information about the item that is being dragged.
     *
     * @example
     * ```jsx
     * <ListBox onDragStart={(event) => console.log(event.item)} />
     * ```
     */
    onDragStart?: (event: ListBoxDragEvent) => void;
    /**
     * Fires when the user drags over an item from the ListBox. The event contains information about the item that is dragged over.
     *
     * @example
     * ```jsx
     * <ListBox onDragOver={(event) => console.log(event.item)} />
     * ```
     */
    onDragOver?: (event: ListBoxDragEvent) => void;
    /**
     * Fires when the user drops an item. The event contains information about the drop target item.
     *
     * @example
     * ```jsx
     * <ListBox onDrop={(event) => console.log(event.item)} />
     * ```
     */
    onDrop?: (event: ListBoxDragEvent) => void;
    /**
     * Fires when a dragged element or text selection leaves the ListBox element.
     *
     * @example
     * ```jsx
     * <ListBox onDragLeave={(event) => console.log(event.item)} />
     * ```
     */
    onDragLeave?: (event: ListBoxDragLeaveEvent) => void;
    /**
     * Fires when a keyboard navigation action is triggered.
     *
     * @example
     * ```jsx
     * <ListBox onKeyboardNavigate={(event) => console.log(event.item)} />
     * ```
     */
    onKeyboardNavigate?: (event: ListBoxItemNavigateEvent) => void;
    /**
     * Enables Web MCP tool registration for this component.
     * Requires a parent `WebMcpProvider` from `@progress/kno-react-webmcp`.
     */
    webMcp?: boolean | WebMcpProps;
}
