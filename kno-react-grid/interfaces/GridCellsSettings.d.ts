/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { ComponentType } from 'react';
import { TABLE_COL_INDEX_ATTRIBUTE, HeaderThElementProps } from '@progress/kno-react-data-tools';
import { GridCellProps } from './GridCellProps.js';
import { GridFooterCellProps } from './GridFooterCellProps.js';
import { GridFilterCellProps } from './GridFilterCellProps.js';
import { GridHeaderCellProps } from './GridHeaderCellProps.js';
import { GridStackedCustomCellProps } from '../stacked/GridStackedRow.js';
/**
 * Represents the attributes for Grid table cell elements, extending standard HTML td element properties.
 */
export interface GridTdAttributes extends React.TdHTMLAttributes<HTMLTableCellElement> {
    /**
     * The column index attribute used for grid operations.
     */
    [TABLE_COL_INDEX_ATTRIBUTE]?: number;
    /**
     * The unique identifier of the column.
     */
    columnId?: string;
    /**
     * The React key for the element.
     */
    key?: string;
}
/**
 * Represents the attributes for Grid header cell elements, extending standard HTML th element properties.
 */
export interface GridThAttributes extends HeaderThElementProps {
    /**
     * The unique identifier of the column.
     */
    columnId: string;
    /**
     * The React key for the element.
     */
    key?: string;
}
/**
 * The properties of the default Grid Cell.
 */
export interface GridCustomCellProps extends GridCellProps {
    /**
     * The props and attributes that are applied to the td element by default.
     */
    tdProps?: React.TdHTMLAttributes<HTMLTableCellElement> | null;
    /**
     * The props and attributes that are applied to the second td. Such element is
     * rendered in very rare cases when we have grouping and sticky columns.
     */
    td2Props?: React.TdHTMLAttributes<HTMLTableCellElement> | null;
    /**
     * The default children of the table cell.
     */
    children?: React.ReactNode | React.ReactNode[];
}
/**
 * The properties of the footer Grid Cell.
 */
export interface GridCustomFooterCellProps extends GridFooterCellProps {
    /**
     * The props and attributes that are applied to the td element by default.
     */
    tdProps?: React.TdHTMLAttributes<HTMLTableCellElement> | null;
    /**
     * The index of the column that is rendered.
     */
    index?: number;
    /**
     * The locked state of the column.
     */
    locked?: boolean;
}
/**
 * The properties of the filter Grid Cell.
 */
export interface GridCustomFilterCellProps extends GridFilterCellProps {
    /**
     * The props and attributes that are applied to the th element by default.
     */
    thProps?: GridThAttributes | null;
    /**
     * The props and attributes that are applied to the td element by default.
     */
    tdProps?: GridTdAttributes | null;
    /**
     * The default children of the table cell.
     */
    children?: React.ReactNode | React.ReactNode[];
    /**
     * The index of the column.
     */
    index?: number;
}
/**
 * The properties of the header Grid Cell.
 */
export interface GridCustomHeaderCellProps extends GridHeaderCellProps {
    /**
     * The props and attributes that are applied to the `th` element by default. The property should be used with the [HeaderThElement](components/datatools/api/headerthelement) component as demonstrated in [this example](components/grid/cells#toc-group-header-group-footer-header-cell-footer-cell-filter-cell-and-data-cell).
     */
    thProps?: GridThAttributes | null;
    /**
     * The default children of the table cell.
     */
    children: React.ReactNode | React.ReactNode[];
    /**
     * The index of the column.
     */
    index?: number;
}
/**
 * The settings of the cells prop options.
 */
export interface GridCellsSettings {
    /**
     * Custom component for rendering the header cell.
     *
     * @example
     * ```tsx
     * import { MyHeaderCell } from './MyHeaderCell.js';
     * <Grid cells={{ headerCell: MyHeaderCell }} />
     * ```
     */
    headerCell?: ComponentType<GridCustomHeaderCellProps>;
    /**
     * Custom component for rendering the filter cell.
     *
     * @example
     * ```tsx
     * import { MyFilterCell } from './MyFilterCell.js';
     * <Grid cells={{ filterCell: MyFilterCell }} />
     * ```
     */
    filterCell?: ComponentType<GridCustomFilterCellProps>;
    /**
     * Custom component for rendering the footer cell.
     *
     * @example
     * ```tsx
     * import { MyFooterCell } from './MyFooterCell.js';
     * <Grid cells={{ footerCell: MyFooterCell }} />
     * ```
     */
    footerCell?: ComponentType<GridCustomFooterCellProps>;
    /**
     * Custom component for rendering the group header cell.
     *
     * @example
     * ```tsx
     * import { MyGroupHeaderCell } from './MyGroupHeaderCell.js';
     * <Grid cells={{ groupHeader: MyGroupHeaderCell }} />
     * ```
     */
    groupHeader?: ComponentType<GridCustomCellProps>;
    /**
     * Custom component for rendering the data cell in table layout mode.
     *
     * @example
     * ```tsx
     * import { MyDataCell } from './MyDataCell.js';
     * <Grid cells={{ data: MyDataCell }} />
     * ```
     */
    data?: ComponentType<GridCustomCellProps>;
    /**
     * Custom component for rendering the data cell in stacked layout mode.
     * When both `stackedData` and `data` are provided, `stackedData` takes precedence in stacked layout.
     *
     * @example
     * ```tsx
     * import { MyStackedDataCell } from './MyStackedDataCell.js';
     * <Grid
     *   stackedLayout={{ enabled: true }}
     *   cells={{ stackedData: MyStackedDataCell }}
     * />
     * ```
     */
    stackedData?: ComponentType<GridStackedCustomCellProps>;
    /**
     * Custom component for rendering the group footer cell.
     *
     * @example
     * ```tsx
     * import { MyGroupFooterCell } from './MyGroupFooterCell.js';
     * <Grid cells={{ groupFooter: MyGroupFooterCell }} />
     * ```
     */
    groupFooter?: ComponentType<GridCustomCellProps>;
    /**
     * Custom cell components for selection columns.
     *
     * @example
     * ```tsx
     * import { MySelectDataCell } from './MySelectDataCell.js';
     * <Grid cells={{ select: { data: MySelectDataCell } }} />
     * ```
     */
    select?: {
        /**
         * Custom component for rendering the group header cell in selection columns.
         *
         * @example
         * ```tsx
         * import { MySelectGroupHeaderCell } from './MySelectGroupHeaderCell.js';
         * <Grid cells={{ select: { groupHeader: MySelectGroupHeaderCell } }} />
         * ```
         */
        groupHeader?: ComponentType<GridCustomCellProps>;
        /**
         * Custom component for rendering the data cell in selection columns.
         *
         * @example
         * ```tsx
         * import { MySelectDataCell } from './MySelectDataCell.js';
         * <Grid cells={{ select: { data: MySelectDataCell } }} />
         * ```
         */
        data?: ComponentType<GridCustomCellProps>;
        /**
         * Custom component for rendering the group footer cell in selection columns.
         *
         * @example
         * ```tsx
         * import { MySelectGroupFooterCell } from './MySelectGroupFooterCell.js';
         * <Grid cells={{ select: { groupFooter: MySelectGroupFooterCell } }} />
         * ```
         */
        groupFooter?: ComponentType<GridCustomCellProps>;
    };
    /**
     * Custom cell components for hierarchy columns.
     *
     * @example
     * ```tsx
     * import { MyHierarchyDataCell } from './MyHierarchyDataCell.js';
     * <Grid cells={{ hierarchy: { data: MyHierarchyDataCell } }} />
     * ```
     */
    hierarchy?: {
        /**
         * Custom component for rendering the group header cell in hierarchy columns.
         *
         * @example
         * ```tsx
         * import { MyHierarchyGroupHeaderCell } from './MyHierarchyGroupHeaderCell.js';
         * <Grid cells={{ hierarchy: { groupHeader: MyHierarchyGroupHeaderCell } }} />
         * ```
         */
        groupHeader?: ComponentType<GridCustomCellProps>;
        /**
         * Custom component for rendering the data cell in hierarchy columns.
         *
         * @example
         * ```tsx
         * import { MyHierarchyDataCell } from './MyHierarchyDataCell.js';
         * <Grid cells={{ hierarchy: { data: MyHierarchyDataCell } }} />
         * ```
         */
        data?: ComponentType<GridCustomCellProps>;
        /**
         * Custom component for rendering the group footer cell in hierarchy columns.
         *
         * @example
         * ```tsx
         * import { MyHierarchyGroupFooterCell } from './MyHierarchyGroupFooterCell.js';
         * <Grid cells={{ hierarchy: { groupFooter: MyHierarchyGroupFooterCell } }} />
         * ```
         */
        groupFooter?: ComponentType<GridCustomCellProps>;
    };
    /**
     * Custom cell components for group columns.
     *
     * @example
     * ```tsx
     * import { MyGroupDataCell } from './MyGroupDataCell.js';
     * <Grid cells={{ group: { data: MyGroupDataCell } }} />
     * ```
     */
    group?: {
        /**
         * Custom component for rendering the group header cell in group columns.
         *
         * @example
         * ```tsx
         * import { MyGroupGroupHeaderCell } from './MyGroupGroupHeaderCell.js';
         * <Grid cells={{ group: { groupHeader: MyGroupGroupHeaderCell } }} />
         * ```
         */
        groupHeader?: ComponentType<GridCustomCellProps>;
        /**
         * Custom component for rendering the data cell in group columns.
         *
         * @example
         * ```tsx
         * import { MyGroupDataCell } from './MyGroupDataCell.js';
         * <Grid cells={{ group: { data: MyGroupDataCell } }} />
         * ```
         */
        data?: ComponentType<GridCustomCellProps>;
        /**
         * Custom component for rendering the group footer cell in group columns.
         *
         * @example
         * ```tsx
         * import { MyGroupGroupFooterCell } from './MyGroupGroupFooterCell.js';
         * <Grid cells={{ group: { groupFooter: MyGroupGroupFooterCell } }} />
         * ```
         */
        groupFooter?: ComponentType<GridCustomCellProps>;
    };
    /**
     * Custom cell components for pin columns.
     *
     * @example
     * ```tsx
     * import { MyPinDataCell } from './MyPinDataCell.js';
     * <Grid cells={{ pin: { data: MyPinDataCell } }} />
     * ```
     */
    pin?: {
        /**
         * Custom component for rendering the group header cell in pin columns.
         */
        groupHeader?: ComponentType<GridCustomCellProps>;
        /**
         * Custom component for rendering the data cell in pin columns.
         */
        data?: ComponentType<GridCustomCellProps>;
        /**
         * Custom component for rendering the group footer cell in pin columns.
         */
        groupFooter?: ComponentType<GridCustomCellProps>;
    };
    /**
     * Custom cell components for edit columns.
     *
     * @example
     * ```tsx
     * import { MyTextEditCell } from './MyTextEditCell.js';
     * <Grid cells={{ edit: { text: MyTextEditCell } }} />
     * ```
     */
    edit?: {
        /**
         * Custom component for rendering the text edit cell.
         *
         * @example
         * ```tsx
         * import { MyTextEditCell } from './MyTextEditCell.js';
         * <Grid cells={{ edit: { text: MyTextEditCell } }} />
         * ```
         */
        text?: ComponentType<GridCustomCellProps>;
        /**
         * Custom component for rendering the numeric edit cell.
         *
         * @example
         * ```tsx
         * import { MyNumericEditCell } from './MyNumericEditCell.js';
         * <Grid cells={{ edit: { numeric: MyNumericEditCell } }} />
         * ```
         */
        numeric?: ComponentType<GridCustomCellProps>;
        /**
         * Custom component for rendering the boolean edit cell.
         *
         * @example
         * ```tsx
         * import { MyBooleanEditCell } from './MyBooleanEditCell.js';
         * <Grid cells={{ edit: { boolean: MyBooleanEditCell } }} />
         * ```
         */
        boolean?: ComponentType<GridCustomCellProps>;
        /**
         * Custom component for rendering the date edit cell.
         *
         * @example
         * ```tsx
         * import { MyDateEditCell } from './MyDateEditCell.js';
         * <Grid cells={{ edit: { date: MyDateEditCell } }} />
         * ```
         */
        date?: ComponentType<GridCustomCellProps>;
    };
}
/**
 * The settings of the cells prop options for Grid columns.
 * Omits `group`, `hierarchy`, and `select` which are only applicable at the Grid level.
 */
export type GridColumnCellsSettings = Omit<GridCellsSettings, 'group' | 'hierarchy' | 'select'>;
