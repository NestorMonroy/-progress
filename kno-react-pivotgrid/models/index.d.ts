/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { SortDescriptor, FilterDescriptor } from '@progress/kno-data-query';
import { PivotGridField, PivotGridAxis } from '@progress/kno-pivotgrid-common';
import { PivotGridHandle } from '../PivotGrid.js';
import { PivotGridConfiguratorHandle } from '../components/Configurator.js';
/**
 * represents the `data` structure of the [TreeView](components/treeview/api/treeview) component inside the `PivotGrid`.
 */
export interface PivotGridTreeViewData {
    /**
     * Indicates whether the item is checked.
     */
    checked?: boolean;
    /**
     * The string value of the item.
     */
    value?: string;
    /**
     * The data item associated with the tree view node.
     */
    dataItem?: PivotGridField[];
}
/**
 * Represents the event arguments of the [`onColumnAxesChange`](components/pivotgrid/api/pivotgridprops#toc-oncolumnaxeschange) and [`onRowAxesChange`](components/pivotgrid/api/pivotgridprops#toc-onrowaxeschange) callbacks of the [`PivotGrid`](components/pivotgrid/api/pivotgrid) component.
 */
export interface PivotGridAxesChangeEvent {
    /**
     * The new axes configuration value.
     */
    value: PivotGridAxis[];
    /**
     * The handle of the PivotGrid component.
     */
    target: PivotGridHandle | null;
    /**
     * The DOM event that triggered the change.
     */
    syntheticEvent: React.SyntheticEvent;
}
/**
 * Represents the event arguments of the [`onColumnAxesChange`](components/pivotgrid/api/pivotgridconfiguratorprops#toc-oncolumnaxeschange), [`onRowAxesChange`](components/pivotgrid/api/pivotgridconfiguratorprops#toc-onrowaxeschange) and [`onMeasureAxesChange`](components/pivotgrid/api/pivotgridconfiguratorprops#toc-onmeasureaxeschange) callbacks of the [`PivotGridConfigurator`](components/pivotgrid/api/pivotgridconfigurator) component.
 */
export interface PivotGridConfiguratorAxesChangeEvent {
    /**
     * The new axes configuration value.
     */
    value: PivotGridAxis[];
    /**
     * The handle of the PivotGridConfigurator component.
     */
    target: PivotGridConfiguratorHandle | null;
    /**
     * The DOM event that triggered the change.
     */
    syntheticEvent: React.SyntheticEvent;
}
/**
 * Represents the event arguments of the [`onSortChange`](components/pivotgrid/api/pivotgridconfiguratorprops#toc-onsortchange) callbacks of the [`PivotGridConfigurator`](components/pivotgrid/api/pivotgridconfigurator) component.
 */
export interface PivotGridConfiguratorSortChangeEvent {
    /**
     * The new sort descriptors value.
     */
    value: SortDescriptor[];
    /**
     * The handle of the PivotGridConfigurator component.
     */
    target: PivotGridConfiguratorHandle | null;
    /**
     * The DOM event that triggered the change.
     */
    syntheticEvent: React.SyntheticEvent;
}
/**
 * Represents the event arguments of the [`onFilterChange`](components/pivotgrid/api/pivotgridconfiguratorprops#toc-onfilterchange) callbacks of the [`PivotGridConfigurator`](components/pivotgrid/api/pivotgridconfigurator) component.
 */
export interface PivotGridConfiguratorFilterChangeEvent {
    /**
     * The new filter descriptors value.
     */
    value: FilterDescriptor[];
    /**
     * The handle of the PivotGridConfigurator component.
     */
    target: PivotGridConfiguratorHandle | null;
    /**
     * The DOM event that triggered the change.
     */
    syntheticEvent: React.SyntheticEvent;
}
