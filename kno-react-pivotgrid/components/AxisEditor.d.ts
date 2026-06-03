/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { PivotGridAxis } from '@progress/kno-pivotgrid-common';
import { CustomComponent } from '@progress/kno-react-common';
import { ColumnMenuProps as KendoReactColumnMenuProps } from '@progress/kno-react-data-tools';
import { ChipProps as KendoReactChipProps } from '@progress/kno-react-buttons';
import { PivotGridAxisFilterFieldsEditorProps } from './AxisFilterFieldsEditor.js';
import * as React from 'react';
/**
 * Represents the props of the [knoReact PivotGridAxisEditor component](components/pivotgrid/api/pivotgridaxiseditor).
 */
export interface PivotGridAxisEditorProps extends KendoReactChipProps {
    /**
     * Represents the `dataItem` of the AxisEditor.
     *
     * The `dataItem` is a single [PivotGridAxis](components/pivotgrid/api/pivotgridaxis) object.
     */
    dataItem: PivotGridAxis;
    /**
     * Overrides the default `chip` component.
     *
     * The default component is: [KendoReactChip](components/buttons/api/chip).
     */
    chip?: CustomComponent<KendoReactChipProps>;
    /**
     * Overrides the default `dropClue` component.
     *
     * The default component is: `(props) => <div className="k-grouping-dropclue" style={{ position: 'relative', zIndex: 10000 }} {...props}/>`
     */
    dropClue?: CustomComponent<any>;
    /**
     * Overrides the default `columnMenuTextColumn` component.
     *
     * The default component is: [KendoReactColumnMenuTextColumn](components/datatools/api/columnmenutextcolumn).
     */
    columnMenuTextColumn?: CustomComponent<KendoReactColumnMenuProps>;
    /**
     * Overrides the default `filterFieldsEditor` component.
     *
     * The default component is: [PivotGridAxisFilterFieldsEditor](components/pivotgrid/api/pivotgridaxisfilterfieldseditor).
     */
    filterFieldsEditor?: CustomComponent<PivotGridAxisFilterFieldsEditorProps>;
}
/**
 * Represents the object which is passed to the [`ref`](https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom) callback of the PivotGridAxisEditor component.
 */
export interface PivotGridAxisEditorHandle {
    /**
     * The properties passed to the PivotGridAxisEditor component.
     */
    props: PivotGridAxisEditorProps;
    /**
     * The DOM element of the PivotGridAxisEditor component.
     */
    element: HTMLSpanElement | null;
}
/**
 * Represents the [knoReact PivotGridAxisEditor component](components/pivotgrid/api/pivotgridaxiseditorprops).
 */
export declare const PivotGridAxisEditor: React.ForwardRefExoticComponent<PivotGridAxisEditorProps & React.RefAttributes<PivotGridAxisEditorHandle | null>>;
