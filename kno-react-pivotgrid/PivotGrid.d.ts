/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { WebMcpProps, CustomComponent } from '@progress/kno-react-common';
import { PivotGridRowProps } from './components/Row.js';
import { PivotGridCellProps } from './components/Cell.js';
import { PivotGridHeaderCellProps } from './components/HeaderCell.js';
import { PivotGridColumnProps } from './components/Column.js';
import { PivotGridAxis, PivotDataItem, Tuple, AxisRow } from '@progress/kno-pivotgrid-common';
import { PivotGridAxesChangeEvent } from './models/index.js';
import * as React from 'react';
/**
 * Represents the props of the [knoReact PivotGrid component](components/pivotgrid/api/pivotgrid).
 */
export interface PivotGridProps {
    /**
     * Sets the `style` property of the top-most element of the PivotGrid.
     *
     * @example
     * ```jsx
     * <PivotGrid style={{ height: '500px' }} />
     * ```
     */
    style?: React.CSSProperties;
    /**
     * Sets the `className` property of the top-most element of the PivotGrid in addition to the default `k-pivotgrid` class.
     *
     * @example
     * ```jsx
     * <PivotGrid className="custom-class" />
     * ```
     */
    className?: string;
    /**
     * Sets the `id` property of the top-most element of the PivotGrid.
     *
     * @example
     * ```jsx
     * <PivotGrid id="pivotgrid-id" />
     * ```
     */
    id?: string;
    /**
     * Sets the `tabIndex` property of the top-most element of the PivotGrid.
     *
     * @example
     * ```jsx
     * <PivotGrid tabIndex={0} />
     * ```
     */
    tabIndex?: number;
    /**
     * If set to `true`, the user can use dedicated shortcuts to interact with the PivotGrid.
     * By default, navigation is disabled.
     *
     * @default false
     *
     * @example
     * ```jsx
     * <PivotGrid navigatable={true} />
     * ```
     */
    navigatable?: boolean;
    /**
     * Sets the `data` of the PivotGrid.
     *
     * @example
     * ```jsx
     * <PivotGrid data={[{ field: 'value', data: 100 }]} />
     * ```
     */
    data?: PivotDataItem[];
    /**
     * Sets the `columns` data of the PivotGrid.
     *
     * @example
     * ```jsx
     * <PivotGrid columns={[['Category', 'Subcategory']]} />
     * ```
     */
    columns?: Tuple[];
    /**
     * Sets the `rows` data of the PivotGrid.
     *
     * @example
     * ```jsx
     * <PivotGrid rows={[['Region', 'Country']]} />
     * ```
     */
    rows?: Tuple[];
    /**
     * The configuration of the `column` axes.
     *
     * @example
     * ```jsx
     * <PivotGrid columnAxes={[{ name: 'Category', expand: true }]} />
     * ```
     */
    columnAxes?: PivotGridAxis[];
    /**
     * A callback, fired whenever the `columnAxes` property should change.
     *
     * @example
     * ```jsx
     * <PivotGrid onColumnAxesChange={(event) => console.log(event.value)} />
     * ```
     */
    onColumnAxesChange?: (event: PivotGridAxesChangeEvent) => void;
    /**
     * The configuration of the `row` axes.
     *
     * @example
     * ```jsx
     * <PivotGrid rowAxes={[{ name: 'Region', expand: true }]} />
     * ```
     */
    rowAxes?: PivotGridAxis[];
    /**
     * A callback, fired whenever the `rowAxes` property should change.
     *
     * @example
     * ```jsx
     * <PivotGrid onRowAxesChange={(event) => console.log(event.value)} />
     * ```
     */
    onRowAxesChange?: (event: PivotGridAxesChangeEvent) => void;
    /**
     * Overrides the default `row` component.
     *
     * The default component is: [PivotGridRow](components/pivotgrid/api/pivotgridrow).
     *
     * @example
     * ```jsx
     * <PivotGrid row={(props) => <CustomRow {...props} />} />
     * ```
     */
    row?: CustomComponent<PivotGridRowProps>;
    /**
     * Overrides the default `column` component.
     *
     * The default component is: [PivotGridColumn](components/pivotgrid/api/pivotgridcolumn).
     *
     * @example
     * ```jsx
     * <PivotGrid column={(props) => <CustomColumn {...props} />} />
     * ```
     */
    column?: CustomComponent<PivotGridColumnProps>;
    /**
     * Overrides the default `cell` component.
     *
     * The default component is: [PivotGridCell](components/pivotgrid/api/pivotgridcell).
     *
     * @example
     * ```jsx
     * <PivotGrid cell={(props) => <CustomCell {...props} />} />
     * ```
     */
    cell?: CustomComponent<PivotGridCellProps>;
    /**
     * Overrides the default `headerCell` component.
     *
     * The default component is: [PivotGridHeaderCell](components/pivotgrid/api/pivotgridheadercell).
     *
     * @example
     * ```jsx
     * <PivotGrid headerCell={(props) => <CustomHeaderCell {...props} />} />
     * ```
     */
    headerCell?: CustomComponent<PivotGridHeaderCellProps>;
    /**
     * Overrides the default column-headers `row` component.
     *
     * The default component is: [PivotGridRow](components/pivotgrid/api/pivotgridrow).
     *
     * @example
     * ```jsx
     * <PivotGrid columnHeadersRow={(props) => <CustomRow {...props} />} />
     * ```
     */
    columnHeadersRow?: React.ComponentType<PivotGridRowProps>;
    /**
     * Overrides the default column-headers `column` component.
     *
     * The default component is: [PivotGridColumn](components/pivotgrid/api/pivotgridcolumn).
     *
     * @example
     * ```jsx
     * <PivotGrid columnHeadersColumn={(props) => <CustomColumn {...props} />} />
     * ```
     */
    columnHeadersColumn?: React.ComponentType<PivotGridColumnProps>;
    /**
     * Overrides the default column-headers `headerCell` component.
     *
     * The default component is: [PivotGridHeaderCell](components/pivotgrid/api/pivotgridheadercell).
     *
     * @example
     * ```jsx
     * <PivotGrid columnHeadersCell={(props) => <CustomHeaderCell {...props} />} />
     * ```
     */
    columnHeadersCell?: React.ComponentType<PivotGridHeaderCellProps>;
    /**
     * Overrides the default row-headers `row` component.
     *
     * The default component is: [PivotGridRow](components/pivotgrid/api/pivotgridrow).
     *
     * @example
     * ```jsx
     * <PivotGrid rowHeadersRow={(props) => <CustomRow {...props} />} />
     * ```
     */
    rowHeadersRow?: React.ComponentType<PivotGridRowProps>;
    /**
     * Overrides the default row-headers `column` component.
     *
     * The default component is: [PivotGridColumn](components/pivotgrid/api/pivotgridcolumn).
     *
     * @example
     * ```jsx
     * <PivotGrid rowHeadersColumn={(props) => <CustomColumn {...props} />} />
     * ```
     */
    rowHeadersColumn?: React.ComponentType<PivotGridColumnProps>;
    /**
     * Overrides the default row-headers `headerCell` component.
     *
     * The default component is: [PivotGridHeaderCell](components/pivotgrid/api/pivotgridheadercell).
     *
     * @example
     * ```jsx
     * <PivotGrid rowHeadersCell={(props) => <CustomHeaderCell {...props} />} />
     * ```
     */
    rowHeadersCell?: React.ComponentType<PivotGridHeaderCellProps>;
    /**
     * Overrides the default data `row` component.
     *
     * The default component is: [PivotGridRow](components/pivotgrid/api/pivotgridrow).
     *
     * @example
     * ```jsx
     * <PivotGrid dataRow={(props) => <CustomRow {...props} />} />
     * ```
     */
    dataRow?: React.ComponentType<PivotGridRowProps>;
    /**
     * Overrides the default data `column` component.
     *
     * The default component is: [PivotGridColumn](components/pivotgrid/api/pivotgridcolumn).
     *
     * @example
     * ```jsx
     * <PivotGrid dataColumn={(props) => <CustomColumn {...props} />} />
     * ```
     */
    dataColumn?: React.ComponentType<PivotGridColumnProps>;
    /**
     * Enables Web MCP tool registration for this component.
     * Requires a parent `WebMcpProvider` from `@progress/kno-react-webmcp`.
     */
    webMcp?: boolean | WebMcpProps;
}
/**
 * Represents the object which is passed to the [`ref`](https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom) callback of the PivotGrid component.
 */
export interface PivotGridHandle {
    /**
     * The DOM element of the PivotGrid component.
     */
    element: HTMLDivElement | null;
    /**
     * The current properties of the PivotGrid component.
     */
    props: PivotGridProps;
    /**
     * The rows that make up the column headers.
     */
    columnHeaderRows: AxisRow[];
    /**
     * The rows that make up the row headers.
     */
    rowHeaderRows: AxisRow[];
    /**
     * The data cells organized by row and column.
     */
    dataCells: {
        row: string[];
        cells: PivotDataItem[];
    }[];
    /**
     * The width of the row header area in pixels.
     */
    rowHeaderBreadth: number;
    /**
     * The height of the column header area in pixels.
     */
    columnHeaderBreadth: number;
}
/**
 * Represents the [knoReact PivotGrid component](components/pivotgrid/api/pivotgridprops).
 */
export declare const PivotGrid: React.ForwardRefExoticComponent<PivotGridProps & React.RefAttributes<PivotGridHandle | null>>;
