/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { default as PropTypes } from 'prop-types';
import { CommonDragLogic, TableKeyboardNavigationContextType } from '@progress/kno-react-data-tools';
import { TreeListCellProps } from './interfaces/TreeListCellProps';
import { TreeListProps } from './interfaces/TreeListProps';
import { TreeListHeaderCellProps } from './interfaces/TreeListHeaderCellProps';
import { TreeListFilterCellProps } from './interfaces/TreeListFilterCellProps';
import * as React from 'react';
/**
 * Represents the [knoReact TreeList component](components/treelist/get-started).
 */
export declare class TreeList extends React.Component<TreeListProps, {}> {
    /**
     * @hidden
     */
    static propTypes: {
        data: PropTypes.Requireable<any[]>;
        resizable: PropTypes.Requireable<boolean>;
        reorderable: PropTypes.Requireable<boolean>;
        sortable: PropTypes.Requireable<NonNullable<boolean | PropTypes.InferProps<{
            mode: PropTypes.Requireable<string>;
            allowUnsort: PropTypes.Requireable<boolean>;
        }> | null | undefined>>;
        onSortChange: PropTypes.Requireable<(...args: any[]) => any>;
        sort: PropTypes.Requireable<any[]>;
        columns: PropTypes.Requireable<(object | null | undefined)[]>;
        columnVirtualization: PropTypes.Requireable<boolean>;
        filter: PropTypes.Requireable<any[]>;
        onFilterChange: PropTypes.Requireable<(...args: any[]) => any>;
        filterRow: PropTypes.Requireable<any>;
        toolbar: PropTypes.Requireable<any>;
        noRecords: PropTypes.Requireable<any>;
        onExpandChange: PropTypes.Requireable<(...args: any[]) => any>;
        expandField: PropTypes.Requireable<string>;
        subItemsField: PropTypes.Requireable<string>;
        selectedField: PropTypes.Requireable<string>;
        onSelectionChange: PropTypes.Requireable<(...args: any[]) => any>;
        onHeaderSelectionChange: PropTypes.Requireable<(...args: any[]) => any>;
        onRowClick: PropTypes.Requireable<(...args: any[]) => any>;
        onItemChange: PropTypes.Requireable<(...args: any[]) => any>;
        editField: PropTypes.Requireable<string>;
        scrollable: PropTypes.Requireable<string>;
        rowHeight: PropTypes.Requireable<number>;
        style: PropTypes.Requireable<object>;
        tableProps: PropTypes.Requireable<object>;
        pager: PropTypes.Requireable<any>;
        skip: PropTypes.Requireable<number>;
        take: PropTypes.Requireable<number>;
        onPageChange: PropTypes.Requireable<(...args: any[]) => any>;
        onDataStateChange: PropTypes.Requireable<(...args: any[]) => any>;
        onColumnResize: PropTypes.Requireable<(...args: any[]) => any>;
        onColumnReorder: PropTypes.Requireable<(...args: any[]) => any>;
        dataItemKey: PropTypes.Requireable<string>;
        navigatable: PropTypes.Requireable<boolean>;
    };
    /** @hidden */
    static contextType: React.Context<TableKeyboardNavigationContextType | undefined>;
    /**
     * The HTML element of the TreeList component.
     */
    element: HTMLDivElement | null;
    private wrapperScrollLeft;
    private wrapperScrollTop;
    private updateOnScroll;
    private tbodyOffsetTop;
    private prevData;
    private flattedData;
    private extendedColumn;
    private columnsMap;
    private columnResize;
    protected dragLogic: CommonDragLogic<TreeListCellProps, TreeListHeaderCellProps, TreeListFilterCellProps>;
    private get _treeListId();
    private get document();
    private contextStateRef;
    private navigationStateRef;
    private readonly showLicenseWatermark;
    private readonly licenseMessage;
    constructor(props: TreeListProps);
    /**
     * Method to allow the scroll to be set to a specific row index.
     *
     * @param options - Object, containing the rowIndex to which is going to be scrolled.
     */
    scrollIntoView: (options: {
        rowIndex?: number;
    }) => void;
    /**
     * @hidden
     */
    componentDidMount(): void;
    /**
     * @hidden
     */
    getSnapshotBeforeUpdate(): null;
    /**
     * @hidden
     */
    componentDidUpdate(prevProps: TreeListProps): void;
    /**
     * @hidden
     */
    componentWillUnmount(): void;
    /**
     * @hidden
     */
    render(): React.JSX.Element;
    private getExtendedColumn;
    private getColumnsMap;
    private get columns();
    private get flatData();
    private onKeyDown;
    private onFocus;
    private onRowDrag;
    private onRowDrop;
    private columnReorder;
    private onResize;
    private handleOnScroll;
    private calculateSizes;
    private itemChange;
    private selectionChange;
    private onHeaderSelectionChange;
    private selectionRelease;
    private sortChange;
    private headerFilterChange;
    private filterChange;
    private columnMenuFilterChange;
    private expandChange;
    private rowClick;
    private rowDoubleClick;
    private rowContextMenu;
    private onPageChange;
    private raiseDataEvent;
    private getDataState;
    private getArguments;
    private expandedSubItems;
    private getLeafDataItems;
    private expanded;
    private hasChildren;
}
