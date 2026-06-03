/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { SortDescriptor, FilterDescriptor, CompositeFilterDescriptor } from '@progress/kno-data-query';
import { WebMcpProps } from '@progress/kno-react-common';
import { TreeListSortChangeEvent, TreeListFilterChangeEvent, TreeListExpandChangeEvent, TreeListSelectionChangeEvent, TreeListHeaderSelectionChangeEvent, TreeListItemChangeEvent, TreeListDataStateChangeEvent, TreeListRowClickEvent, TreeListColumnResizeEvent, TreeListColumnReorderEvent, TreeListPageChangeEvent, TreeListRowDragEvent, TreeListColumnMenuFilterChangeEvent, TreeListRowDoubleClickEvent, TreeListRowContextMenuEvent, TreeListKeyDownEvent } from './events';
import { ScrollMode } from '../ScrollMode';
import { TreeListCellProps } from './TreeListCellProps';
import { SortSettings as TreeListSortSettings, FilterRowProps } from '@progress/kno-react-data-tools';
import { TreeListRowProps } from './TreeListRowProps';
import { TreeListHeaderCellProps } from './TreeListHeaderCellProps';
import { TreeListColumnProps } from './TreeListColumnProps';
import { TreeListToolbarProps } from './TreeListToolbarProps';
import { TreeListNoRecordsProps } from './TreeListNoRecordsProps';
import { TreeListSelectableSettings } from './TreeListSelectableSettings';
/**
 * Represents the props of the [knoReact TreeList component](components/treelist/get-started).
 */
export interface TreeListProps {
    /**
     * Sets the unique key for each row in the TreeList. If not set, the row index is used.
     *
     * Example:
     * ```jsx
     * <TreeList dataItemKey="id" />
     * ```
     */
    dataItemKey?: string;
    /**
     * Adds custom CSS classes to the TreeList container element.
     *
     * Example:
     * ```jsx
     * <TreeList className="custom-treelist-class" />
     * ```
     */
    className?: string;
    /**
     * Specifies the `id` attribute of the TreeList container element.
     *
     * Example:
     * ```jsx
     * <TreeList id="treelist-component" />
     * ```
     */
    id?: string;
    /**
     * Defines the columns of the TreeList using an array of `TreeListColumnProps`.
     *
     * Example:
     * ```jsx
     * <TreeList columns={[{ field: 'name', title: 'Name' }]} />
     * ```
     */
    columns?: TreeListColumnProps[];
    /**
     * Enables column virtualization to improve performance by rendering only visible columns.
     *
     * Example:
     * ```jsx
     * <TreeList columnVirtualization={true} />
     * ```
     */
    columnVirtualization?: boolean;
    /**
     * Provides the data to be displayed in the TreeList.
     *
     * Example:
     * ```jsx
     * <TreeList data={[{ id: 1, name: 'Item 1' }]} />
     * ```
     */
    data?: any[];
    /**
     * Enables sorting functionality for the TreeList.
     *
     * Example:
     * ```jsx
     * <TreeList sortable={{ mode: 'single', allowUnsort: true }} />
     * ```
     */
    sortable?: TreeListSortSettings;
    /**
     * Triggered when the sorting state changes. The event must be handled to apply sorting.
     *
     * Example:
     * ```jsx
     * <TreeList onSortChange={(event) => console.log(event.sort)} />
     * ```
     */
    onSortChange?: (event: TreeListSortChangeEvent) => void;
    /**
     * Specifies the current sorting descriptors for the TreeList.
     *
     * Example:
     * ```jsx
     * <TreeList sort={[{ field: 'name', dir: 'asc' }]} />
     * ```
     */
    sort?: SortDescriptor[];
    /**
     * If set, it will be rendered instead of the default `FilterRow` TreeList component.
     */
    filterRow?: React.ComponentType<FilterRowProps>;
    /**
     * If set and when the data item is in edit mode, the `editRow` value will be rendered.
     */
    editRow?: React.ComponentType<TreeListRowProps>;
    /**
     * Represents the TreeList toolbar component.
     */
    toolbar?: React.ReactElement<TreeListToolbarProps>;
    /**
     * Represents the component that will be rendered when the `data` property of the TreeList is empty or undefined.
     */
    noRecords?: React.ReactElement<TreeListNoRecordsProps>;
    /**
     * Specifies the current filter descriptors for the TreeList.
     */
    filter?: FilterDescriptor[];
    /**
     * Triggered when the filter state changes. The event must be handled to apply filtering.
     */
    onFilterChange?: (event: TreeListFilterChangeEvent) => void;
    /**
     * Triggered when the user clicks on the expand or collapse icon of a row.
     */
    onExpandChange?: (event: TreeListExpandChangeEvent) => void;
    /**
     * Specifies the name of the field which will provide a Boolean representation of the expanded state of the item.
     */
    expandField?: string;
    /**
     * Specifies the name of the field which will provide an array representation of the item subitems.
     */
    subItemsField?: string;
    /**
     * Configures the selection settings for the TreeList.
     */
    selectable?: TreeListSelectableSettings;
    /**
     * Specifies the name of the field which will provide a Boolean representation of the selected state of the item.
     */
    selectedField?: string;
    /**
     * Triggered when the user selects or deselects a row or cell.
     */
    onSelectionChange?: (event: TreeListSelectionChangeEvent) => void;
    /**
     * Triggered when the user presses a keyboard key.
     */
    onKeyDown?: (event: TreeListKeyDownEvent) => void;
    /**
     * Triggered when the user clicks the checkbox of a column header whose `field` matches `selectedField`.
     */
    onHeaderSelectionChange?: (event: TreeListHeaderSelectionChangeEvent) => void;
    /**
     * Triggered when the user changes the values of the item.
     * The event is not debounced and fires on every `onChange` event of the input in the current `EditCell`.
     */
    onItemChange?: (event: TreeListItemChangeEvent) => void;
    /**
     * Triggered when the user clicks a row.
     */
    onRowClick?: (event: TreeListRowClickEvent) => void;
    /**
     * Triggered when the user double clicks a row.
     */
    onRowDoubleClick?: (event: TreeListRowDoubleClickEvent) => void;
    /**
     * Triggered when the user opens the context menu of a row.
     */
    onRowContextMenu?: (event: TreeListRowContextMenuEvent) => void;
    /**
     * Specifies the name of the field which will provide a Boolean representation of the edit state of the current item.
     */
    editField?: string;
    /**
     * Defines the scroll mode of the TreeList.
     *
     * The available options are:
     * - `none`&mdash;Renders no scrollbar.
     * - `scrollable`&mdash;Represents the default scroll mode of the TreeList.
     * Requires you to set the `overflow` and `height` (for vertical scrolling),
     * or `width` (for horizontal scrolling) styles.
     * - `virtual`&mdash;Enables the vertical virtual scrolling of the TreeList.
     * Requires you to set the `overflow` and `height` styles and `rowHeight` prop of the TreeList.
     */
    scrollable?: ScrollMode;
    /**
     * Enables column resizing by dragging the edges of their header cells.
     */
    resizable?: boolean;
    /**
     * Enables column reordering by dragging their header cells.
     */
    reorderable?: boolean;
    /**
     * Enables row dragging and dropping.
     */
    rowDraggable?: boolean;
    /**
     * Specifies the height of each row in the TreeList.
     */
    rowHeight?: number;
    /**
     * Represents the `style` HTML attribute.
     */
    style?: React.CSSProperties;
    /**
     * A props object that will be passed to the underlying HTML table.
     */
    tableProps?: React.DetailedHTMLProps<React.TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>;
    /**
     * Specifies the column menu component to be used by the TreeList.
     */
    columnMenu?: React.ComponentType<any>;
    /**
     * Specifies the composite filter descriptor for the column menu filter.
     */
    columnMenuFilter?: CompositeFilterDescriptor[];
    /**
     * Triggered when the column menu filter state changes.
     */
    onColumnMenuFilterChange?: (event: TreeListColumnMenuFilterChangeEvent) => void;
    /**
     * Specifies the pager component to be used by the TreeList.
     */
    pager?: React.ComponentType<any>;
    /**
     * Specifies the number of records to be skipped.
     */
    skip?: number;
    /**
     * Specifies the number of records to be taken.
     */
    take?: number;
    /**
     * Specifies the row component to be used by the TreeList.
     */
    row?: React.ComponentType<TreeListRowProps>;
    /**
     * Enables keyboard navigation for the TreeList.
     */
    navigatable?: boolean;
    /**
     * Triggered when the page state changes. The event must be handled to apply paging.
     */
    onPageChange?: (event: TreeListPageChangeEvent) => void;
    /**
     * Triggered when the data state changes. The event must be handled to apply the new state.
     */
    onDataStateChange?: (event: TreeListDataStateChangeEvent) => void;
    /**
     * Triggered when a column is resized.
     */
    onColumnResize?: (event: TreeListColumnResizeEvent) => void;
    /**
     * Triggered when columns are reordered.
     */
    onColumnReorder?: (event: TreeListColumnReorderEvent) => void;
    /**
     * Triggered when a row is dragged.
     */
    onRowDrag?: (event: TreeListRowDragEvent) => void;
    /**
     * Triggered when a row is dragged and dropped.
     */
    onRowDrop?: (event: TreeListRowDragEvent) => void;
    /**
     * Triggered before a row is rendered. Useful for customizing the row rendering.
     */
    rowRender?: (row: React.ReactElement<HTMLTableRowElement>, props: TreeListRowProps) => React.ReactNode;
    /**
     * Triggered before a cell is rendered. Useful for customizing the cell rendering.
     */
    cellRender?: (defaultRendering: React.ReactElement<HTMLTableCellElement> | null, props: TreeListCellProps) => React.ReactElement<HTMLTableCellElement> | null;
    /**
     * Triggered before a header cell is rendered. Useful for customizing the header cell rendering.
     */
    headerCellRender?: (defaultRendering: React.ReactNode | null, props: TreeListHeaderCellProps) => React.ReactNode;
    /**
     * Enables Web MCP tool registration so AI agents can interact with this TreeList.
     * Set to `true` to use the provider-level `dataName`, or pass a config object to override.
     *
     * Requires a `WebMcpProvider` ancestor from `@progress/kno-react-webmcp`.
     */
    webMcp?: boolean | WebMcpProps;
}
