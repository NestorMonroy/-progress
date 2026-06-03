/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { TreeViewProps as KendoReactTreeViewProps } from '@progress/kno-react-treeview';
import { PivotGridField, PivotGridAxis } from '@progress/kno-pivotgrid-common';
import { CustomComponent } from '@progress/kno-react-common';
import * as React from 'react';
/**
 * @hidden
 */
export interface PivotGridFieldsEditorFieldExpandEvent {
    target: PivotGridFieldsEditorHandle;
    value: PivotGridField;
    syntheticEvent: React.SyntheticEvent;
}
/**
 * @hidden
 */
export interface PivotGridFieldsEditorFieldCheckEvent {
    target: PivotGridFieldsEditorHandle;
    value: PivotGridField;
    syntheticEvent: React.SyntheticEvent;
}
/**
 * Represents the props of the [knoReact PivotGridFieldsEditor component](components/pivotgrid/api/pivotgridfieldseditor).
 */
export interface PivotGridFieldsEditorProps {
    /**
     * Sets the `data` of the PivotGridConfiguratorEditor.
     *
     * The `data` represents all fields available in the configurator.
     */
    data?: PivotGridField[];
    /**
     * The configuration of the `row` axes.
     */
    rowAxes?: PivotGridAxis[];
    /**
     * The configuration of the `column` axes.
     */
    columnAxes?: PivotGridAxis[];
    /**
     * The configuration of the `measure` axes.
     */
    measureAxes?: PivotGridAxis[];
    /**
     * A callback, fired whenever an `expand` is triggered.
     */
    onExpand?: (args: PivotGridFieldsEditorFieldExpandEvent) => void;
    /**
     * A callback, fired whenever a `check` is triggered.
     */
    onCheck?: (args: PivotGridFieldsEditorFieldCheckEvent) => void;
    /**
     * Overrides the default `treeView` component.
     *
     * The default component is: [KendoReactTreeView](components/treeview/api/treeview).
     */
    treeView?: CustomComponent<KendoReactTreeViewProps>;
    /**
     * Overrides the default `noData` component.
     *
     * The default component is: `() => <div>NO DATA</div>`
     */
    noData?: CustomComponent<any>;
}
/**
 * Represents the object which is passed to the [`ref`](https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom) callback of the PivotGridFieldsEditor component.
 */
export interface PivotGridFieldsEditorHandle {
    /**
     * The properties passed to the PivotGridFieldsEditor component.
     */
    props: PivotGridFieldsEditorProps;
    /**
     * The DOM element of the PivotGridFieldsEditor component.
     */
    element: HTMLDivElement | null;
}
/**
 * Represents the [knoReact PivotGridFieldsEditor component](components/pivotgrid/api/pivotgridfieldseditorprops).
 */
export declare const PivotGridFieldsEditor: React.ForwardRefExoticComponent<PivotGridFieldsEditorProps & React.RefAttributes<PivotGridFieldsEditorHandle | null>>;
