/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { CustomComponent } from '@progress/kno-react-common';
import { FormProps as KendoFormProps, FormElementProps as KendoFormElementProps } from '@progress/kno-react-form';
import { SortDescriptor, FilterDescriptor } from '@progress/kno-data-query';
import { PivotGridAxis, PivotGridField } from '@progress/kno-pivotgrid-common';
import { PivotGridConfiguratorEditorProps } from './ConfiguratorEditor.js';
import { PivotGridAxisFilterFieldsExpandChangeEvent, PivotGridAxisFilterFieldExpandEvent } from './AxisFilterFieldsEditor.js';
import { PivotGridConfiguratorAxesChangeEvent, PivotGridConfiguratorSortChangeEvent, PivotGridConfiguratorFilterChangeEvent } from '../models/index.js';
import { PivotGridFieldsEditorFieldExpandEvent, PivotGridFieldsEditorFieldCheckEvent } from './FieldsEditor.js';
import * as React from 'react';
/**
 * Represents the props of the [knoReact PivotGridConfigurator component](components/pivotgrid/api/pivotgridconfigurator).
 */
export interface PivotGridConfiguratorProps {
    /**
     * Sets the `className` property of the top-most element of the PivotGridConfigurator in addition to the default `k-pivotgrid-configurator` class.
     */
    className?: string;
    /**
     * Sets the `id` property of the top-most element of the PivotGridConfigurator.
     */
    id?: string;
    /**
     * Sets the `tabIndex` property of the top-most element of the PivotGridConfigurator.
     */
    tabIndex?: number;
    /**
     * Sets the `style` property of the top-most element of the PivotGridConfigurator.
     */
    style?: React.CSSProperties;
    /**
     * Renders the PivotGridConfigurator in `horizontal` orientation.
     *
     * @default false
     */
    horizontal?: boolean;
    /**
     * Sets the `data` of the PivotGridConfigurator.
     *
     * The `data` represents all fields available in the configurator.
     */
    data?: PivotGridField[];
    /**
     * The configuration of the `column` axes.
     */
    columnAxes?: PivotGridAxis[];
    /**
     * A callback, fired whenever the `columnAxes` property should change.
     */
    onColumnAxesChange?: (event: PivotGridConfiguratorAxesChangeEvent) => void;
    /**
     * The configuration of the `row` axes.
     */
    rowAxes?: PivotGridAxis[];
    /**
     * A callback, fired whenever the `rowAxes` property should change.
     */
    onRowAxesChange?: (event: PivotGridConfiguratorAxesChangeEvent) => void;
    /**
     * The configuration of the `measure` axes.
     */
    measureAxes?: PivotGridAxis[];
    /**
     * A callback, fired whenever the `measureAxes` property should change.
     */
    onMeasureAxesChange?: (event: PivotGridConfiguratorAxesChangeEvent) => void;
    /**
     * The descriptors by which the data is sorted.
     */
    sort?: SortDescriptor[];
    /**
     * A callback, fired whenever the `sort` property should change.
     */
    onSortChange?: (event: PivotGridConfiguratorSortChangeEvent) => void;
    /**
     * The descriptors by which the data is filtered.
     */
    filter?: FilterDescriptor[];
    /**
     * A callback, fired whenever the `filter` property should change.
     */
    onFilterChange?: (event: PivotGridConfiguratorFilterChangeEvent) => void;
    /**
     * A callback, fired whenever a `field` is expanded.
     */
    onFieldsEditorFieldExpand?: (event: PivotGridFieldsEditorFieldExpandEvent) => void;
    /**
     * A callback, fired whenever a `field` is checked.
     */
    onFieldsEditorFieldCheck?: (event: PivotGridFieldsEditorFieldCheckEvent) => void;
    /**
     * A callback, fired whenever an `AxisFilterField` is expanded.
     */
    onAxisFilterFieldExpand?: (event?: PivotGridAxisFilterFieldExpandEvent) => void;
    /**
     * A callback, fired whenever the `expanded` state of the `AxisFilterFields` is changed.
     */
    onAxisFilterFieldsExpandChange?: (event?: PivotGridAxisFilterFieldsExpandChangeEvent) => void;
    /**
     * Overrides the default `editor` component.
     *
     * The default component is: [PivotGridConfiguratorEditor](components/pivotgrid/api/pivotgridconfiguratoreditor).
     */
    editor?: CustomComponent<PivotGridConfiguratorEditorProps>;
    /**
     * Overrides the default `form` component.
     *
     * The default component is: [KendoReactForm](components/form/api/form).
     */
    form?: CustomComponent<KendoFormProps>;
    /**
     * Overrides the default `formElement` component.
     *
     * The default component is: [KendoReactFormElement](components/form/api/formelement).
     */
    formElement?: CustomComponent<KendoFormElementProps>;
}
/**
 * Represents the object which is passed to the [`ref`](https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom) callback of the PivotGridConfigurator component.
 */
export interface PivotGridConfiguratorHandle {
    /**
     * The properties passed to the PivotGridConfigurator component.
     */
    props: PivotGridConfiguratorProps;
    /**
     * The DOM element of the PivotGridConfigurator component.
     */
    element: HTMLDivElement | null;
}
/**
 * Represents the [knoReact PivotGridConfigurator component](components/pivotgrid/api/pivotgridconfiguratorprops).
 */
export declare const PivotGridConfigurator: React.ForwardRefExoticComponent<PivotGridConfiguratorProps & React.RefAttributes<PivotGridConfiguratorHandle | null>>;
