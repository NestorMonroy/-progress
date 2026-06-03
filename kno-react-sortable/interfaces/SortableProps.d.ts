/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { SortableOnDragStartEvent } from '../events/SortableOnDragStartEvent.js';
import { WebMcpProps } from '@progress/kno-react-common';
import { SortableOnDragOverEvent } from '../events/SortableOnDragOverEvent.js';
import { SortableOnDragEndEvent } from '../events/SortableOnDragEndEvent.js';
import { SortableOnNavigateEvent } from '../events/SortableOnNavigateEvent.js';
import { SortableItemUIProps } from './SortableItemUIProps.js';
import { SortableDefaultProps } from './SortableDefaultProps.js';
/**
 * Represents the props of the [knoReact Sortable component](components/sortable).
 */
export interface SortableProps extends SortableDefaultProps {
    /**
     * (Required) The Sortable items UI.
     *
     * @example
     * ```jsx
     * const ItemUI = (props) => <div>{props.dataItem.text}</div>;
     * <Sortable itemUI={ItemUI} />
     * ```
     */
    itemUI: React.ComponentType<SortableItemUIProps>;
    /**
     * @hidden
     *
     * Use it to override the sortable items container component.
     *
     * @default 'div'
     */
    itemsWrapUI?: React.ForwardRefExoticComponent<any>;
    /**
     * (Required) The field which uniquely identifies the Sortable items.
     *
     * @example
     * ```jsx
     * <Sortable idField="id" />
     * ```
     */
    idField: string;
    /**
     * The field which enables or disables an item.
     *
     * @example
     * ```jsx
     * <Sortable disabledField="isDisabled" />
     * ```
     */
    disabledField?: string;
    /**
     * (Required) The data items of the Sortable.
     *
     * @example
     * ```jsx
     * <Sortable data={[{ id: 1, text: 'Item 1' }, { id: 2, text: 'Item 2' }]} />
     * ```
     */
    data: Array<object>;
    /**
     * Defines the CSS styles which are applied to the Sortable element.
     *
     * @example
     * ```jsx
     * <Sortable style={{ border: '1px solid black' }} />
     * ```
     */
    style?: React.CSSProperties;
    /**
     * Defines the CSS class which is applied to the Sortable element.
     *
     * @example
     * ```jsx
     * <Sortable className="custom-sortable" />
     * ```
     */
    className?: string;
    /**
     * Fires when the user starts dragging an item. This event is preventable.
     *
     * @example
     * ```jsx
     * <Sortable onDragStart={(event) => console.log(event)} />
     * ```
     */
    onDragStart?: (event: SortableOnDragStartEvent) => void;
    /**
     * Fires when the user is dragging an item over another Sortable item.
     *
     * @example
     * ```jsx
     * <Sortable onDragOver={(event) => console.log(event)} />
     * ```
     */
    onDragOver?: (event: SortableOnDragOverEvent) => void;
    /**
     * Fires when the user stops dragging an item.
     *
     * @example
     * ```jsx
     * <Sortable onDragEnd={(event) => console.log(event)} />
     * ```
     */
    onDragEnd?: (event: SortableOnDragEndEvent) => void;
    /**
     * Fires when the user navigates within the Sortable by using the keyboard.
     *
     * @example
     * ```jsx
     * <Sortable onNavigate={(event) => console.log(event)} />
     * ```
     */
    onNavigate?: (event: SortableOnNavigateEvent) => void;
    /**
     * If set to `true`, the user can use dedicated shortcuts to interact with the Sortable.
     * By default, navigation is disabled.
     *
     * @example
     * ```jsx
     * <Sortable navigatable={true} />
     * ```
     */
    navigatable?: boolean;
    /**
     * Enables Web MCP tool registration for this component.
     * Requires a parent `WebMcpProvider` from `@progress/kno-react-webmcp`.
     */
    webMcp?: boolean | WebMcpProps;
}
