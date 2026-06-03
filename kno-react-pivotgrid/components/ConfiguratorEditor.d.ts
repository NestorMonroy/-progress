/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { FormRenderProps, FieldProps } from '@progress/kno-react-form';
import { LabelProps } from '@progress/kno-react-labels';
import { CustomComponent } from '@progress/kno-react-common';
import { PivotGridAxisFilterFieldExpandEvent, PivotGridAxisFilterFieldsExpandChangeEvent } from './AxisFilterFieldsEditor.js';
import { PivotGridConfiguratorState, PivotGridField } from '@progress/kno-pivotgrid-common';
import { PivotGridAxesEditorProps } from './AxesEditor.js';
import { PivotGridFieldsEditorProps, PivotGridFieldsEditorFieldExpandEvent, PivotGridFieldsEditorFieldCheckEvent } from './FieldsEditor.js';
import { PivotGridConfiguratorEditorState, PivotGridConfiguratorAction } from '../hooks/index.js';
import * as React from 'react';
/**
 * Represents the props of the [knoReact PivotGridConfiguratorEditor component](components/pivotgrid/api/pivotgridconfiguratoreditor).
 */
export interface PivotGridConfiguratorEditorProps extends FormRenderProps {
    /**
     * Sets the `data` of the PivotGridConfiguratorEditor.
     *
     * The `data` represents all fields available in the configurator.
     */
    data: PivotGridField[];
    /**
     * Renders the PivotGridConfiguratorEditor in `horizontal` orientation.
     *
     * @default false
     */
    horizontal?: boolean;
    /**
     * Overrides the default `fieldsLabel` component.
     *
     * The default component is: [KendoReactLabel](components/labels/api/label).
     */
    fieldsLabel?: CustomComponent<FieldProps & LabelProps>;
    /**
     * Overrides the default `fieldsEditor` component.
     *
     * The default component is: [PivotGridFieldsEditor](components/pivotgrid/api/pivotgridfieldseditor).
     */
    fieldsEditor?: CustomComponent<PivotGridFieldsEditorProps>;
    /**
     * Overrides the default `columnAxesLabel` component.
     *
     * The default component is: [KendoReactLabel](components/labels/api/label).
     */
    columnAxesLabel?: CustomComponent<FieldProps & LabelProps>;
    /**
     * Overrides the default `columnAxesEditor` component.
     *
     * The default component is: [PivotGridAxesEditor](components/pivotgrid/api/pivotgridaxeseditor).
     */
    columnAxesEditor?: CustomComponent<PivotGridAxesEditorProps>;
    /**
     * Overrides the default `rowAxesLabel` component.
     *
     * The default component is: [KendoReactLabel](components/labels/api/label).
     */
    rowAxesLabel?: CustomComponent<FieldProps & LabelProps>;
    /**
     * Overrides the default `rowAxesEditor` component.
     *
     * The default component is: [PivotGridAxesEditor](components/pivotgrid/api/pivotgridaxeseditor).
     */
    rowAxesEditor?: CustomComponent<PivotGridAxesEditorProps>;
    /**
     * Overrides the default `measureAxesLabel` component.
     *
     * The default component is: [KendoReactLabel](components/labels/api/label).
     */
    measureAxesLabel?: CustomComponent<FieldProps & LabelProps>;
    /**
     * Overrides the default `measureAxesEditor` component.
     *
     * The default component is: [PivotGridAxesEditor](components/pivotgrid/api/pivotgridaxeseditor).
     */
    measureAxesEditor?: CustomComponent<PivotGridAxesEditorProps>;
    /**
     * A callback, fired whenever a `FieldEditorField` is expanded.
     */
    onFieldsEditorFieldExpand?: (event: PivotGridFieldsEditorFieldExpandEvent & {
        currentTarget: PivotGridConfiguratorEditorHandle;
    }) => void;
    /**
     * An action callback. Used to define the component behavior when a `FieldsEditorFieldExpand` is triggered.
     *
     * Internal state change will be triggered depending on the specific action types.
     *
     * @hidden
     */
    onFieldsEditorFieldExpandAction?: (event: PivotGridFieldsEditorFieldCheckEvent & {
        currentTarget: PivotGridConfiguratorEditorHandle;
    }, props: PivotGridConfiguratorEditorProps, state: PivotGridConfiguratorEditorState) => PivotGridConfiguratorAction | PivotGridConfiguratorAction[];
    /**
     * A callback, fired whenever a `FieldEditorField` is checked.
     */
    onFieldsEditorFieldCheck?: (event: PivotGridFieldsEditorFieldCheckEvent & {
        currentTarget: PivotGridConfiguratorEditorHandle;
    }) => void;
    /**
     * An action callback. Used to define the component behavior when a `FieldsEditorFieldCheck` is triggered.
     *
     * Internal state change will be triggered depending on the specific action types.
     *
     * @hidden
     */
    onFieldsEditorFieldCheckAction?: (event: PivotGridFieldsEditorFieldCheckEvent & {
        currentTarget: PivotGridConfiguratorEditorHandle;
    }, props: PivotGridConfiguratorEditorProps, state: PivotGridConfiguratorEditorState) => PivotGridConfiguratorAction | PivotGridConfiguratorAction[];
    /**
     * A callback, fired whenever an `AxisFilterField` is expanded.
     */
    onAxisFilterFieldExpand?: (event: PivotGridAxisFilterFieldExpandEvent & {
        currentTarget: PivotGridConfiguratorEditorHandle;
    }) => void;
    /**
     * A callback, fired whenever `expanded` state of the AxisFilterFields is changed.
     */
    onAxisFilterFieldsExpandChange?: (event: PivotGridAxisFilterFieldsExpandChangeEvent) => void;
}
/**
 * Represents the object which is passed to the [`ref`](https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom) callback of the PivotGridConfiguratorEditor component.
 */
export interface PivotGridConfiguratorEditorHandle {
    /**
     * The properties passed to the PivotGridConfiguratorEditor component.
     */
    props: PivotGridConfiguratorEditorProps;
    /**
     * The current state of the PivotGridConfiguratorEditor component.
     */
    state: PivotGridConfiguratorState;
    /**
     * The DOM element of the PivotGridConfiguratorEditor component.
     */
    element: HTMLDivElement;
}
/**
 * Represents the [knoReact PivotGridConfiguratorEditor component](components/pivotgrid/api/pivotgridconfiguratoreditorprops).
 */
export declare const PivotGridConfiguratorEditor: React.ForwardRefExoticComponent<PivotGridConfiguratorEditorProps & React.RefAttributes<PivotGridConfiguratorEditorHandle>>;
