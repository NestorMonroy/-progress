/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { TreeViewProps as KendoReactTreeViewProps } from '@progress/kno-react-treeview';
import { ButtonProps as KendoReactButtonProps } from '@progress/kno-react-buttons';
import { FilterDescriptor } from '@progress/kno-data-query';
import { ColumnMenuItemProps as KendoReactColumnMenuItemProps, ColumnMenuFormProps as KendoReactColumnMenuFormProps } from '@progress/kno-react-data-tools';
import { PivotGridField, PivotGridAxis } from '@progress/kno-pivotgrid-common';
import { CustomComponent } from '@progress/kno-react-common';
import * as React from 'react';
/**
 * Represents the event arguments of the `PivotGridAxisFilterFields` expand-change event.
 */
export interface PivotGridAxisFilterFieldsExpandChangeEvent {
    /**
     * The handle of the component that triggered the event.
     */
    target: PivotGridAxisFilterFieldsEditorHandle;
    /**
     * The expand state value.
     */
    value: boolean;
    /**
     * The DOM event that triggered the change.
     */
    syntheticEvent: React.SyntheticEvent;
}
/**
 * Represents the event arguments of the `PivotGridAxisFilterField` expand event.
 */
export interface PivotGridAxisFilterFieldExpandEvent {
    /**
     * The handle of the component that triggered the event.
     */
    target: PivotGridAxisFilterFieldsEditorHandle;
    /**
     * The field that was expanded.
     */
    value: PivotGridField;
    /**
     * The DOM event that triggered the expand.
     */
    syntheticEvent: React.SyntheticEvent;
}
/**
 * Represents the props of the [knoReact PivotGridAxisFilterFieldsEditor component](components/pivotgrid/api/pivotgridaxisfilterfieldseditor).
 */
export interface PivotGridAxisFilterFieldsEditorProps {
    /**
     * Sets the `className` property of the top-most element of the PivotGridAxisFilterFieldsEditor in addition to the default `k-columnmenu-item-wrapper` class.
     */
    className?: string;
    /**
     * Sets the `id` property of the top-most element of the PivotGridAxisFilterFieldsEditor.
     */
    id?: string;
    /**
     * Sets the `tabIndex` property of the top-most element of the PivotGridAxisFilterFieldsEditor.
     */
    tabIndex?: number;
    /**
     * Sets the `style` property of the top-most element of the PivotGridAxisFilterFieldsEditor.
     */
    style?: React.CSSProperties;
    /**
     * Sets the `data` of the PivotGridAxisFilterFieldsEditor.
     *
     * The `data` represents all fields available for filtering.
     */
    data?: PivotGridField[];
    /**
     * Represents the `dataItem` of the AxisEditor.
     *
     * The `dataItem` is a single [PivotGridAxis](components/pivotgrid/api/pivotgridaxis) object.
     */
    dataItem: PivotGridAxis;
    /**
     * Represents the initial filter value before additional operations are executed.
     */
    defaultFilter?: FilterDescriptor;
    /**
     * Indicates which of the three available axes are represented by the editor:
     * - columnAxes
     * - rowAxes
     * - measureAxes
     */
    axes: string;
    /**
     * Overrides the default `columnMenuItem` component.
     *
     * The default component is: [KendoReactColumnMenuItem](components/datatools/api/columnmenuitem).
     */
    columnMenuItem?: CustomComponent<KendoReactColumnMenuItemProps>;
    /**
     * Overrides the default `columnMenuForm` component.
     *
     * The default component is: [KendoReactColumnMenuForm](components/datatools/api/columnmenuform).
     */
    columnMenuForm?: CustomComponent<KendoReactColumnMenuFormProps>;
    /**
     * Overrides the default `resetButton` component.
     *
     * The default component is: [KendoReactButton](components/buttons/api/button).
     */
    resetButton?: CustomComponent<KendoReactButtonProps>;
    /**
     * Overrides the default `applyButton` component.
     *
     * The default component is: [KendoReactButton](components/buttons/api/button).
     */
    applyButton?: CustomComponent<KendoReactButtonProps>;
    /**
     * Overrides the default `treeView` component.
     *
     * The default component is: [KendoReactTreeView](components/treeview/api/treeview).
     */
    treeView?: CustomComponent<KendoReactTreeViewProps>;
    /**
     * Overrides the default `treeView` component.
     *
     * The default component is: `() => <Skeleton shape={'rectangle'} style={{height: '20px', width:'calc(100% - 16px)', margin: 8}}/>`.
     */
    noData?: CustomComponent<any>;
}
/**
 * Represents the object which is passed to the [`ref`](https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom) callback of the PivotGridAxisFilterFieldsEditor component.
 */
export interface PivotGridAxisFilterFieldsEditorHandle {
    /**
     * The properties passed to the PivotGridAxisFilterFieldsEditor component.
     */
    props: PivotGridAxisFilterFieldsEditorProps;
    /**
     * The DOM element of the PivotGridAxisFilterFieldsEditor component.
     */
    element: HTMLDivElement | null;
}
/**
 * Represents the [knoReact PivotGridAxisFilterFieldsEditor component](components/pivotgrid/api/pivotgridaxisfilterfieldseditorprops).
 */
export declare const PivotGridAxisFilterFieldsEditor: React.ForwardRefExoticComponent<PivotGridAxisFilterFieldsEditorProps & React.RefAttributes<PivotGridAxisFilterFieldsEditorHandle | null>>;
