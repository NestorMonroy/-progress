/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { ChipListProps as KendoReactChipListProps } from '@progress/kno-react-buttons';
import { FieldProps } from '@progress/kno-react-form';
import { PivotGridAxis } from '@progress/kno-pivotgrid-common';
import { CustomComponent } from '@progress/kno-react-common';
import * as React from 'react';
/**
 * Represents the props of the [knoReact PivotGridAxesEditor component](components/pivotgrid/api/pivotgridaxeseditor).
 */
export interface PivotGridAxesEditorProps extends FieldProps {
    /**
     * Represents the `value` of the AxesEditor.
     *
     * The `value` is an array of [PivotGridAxis](components/pivotgrid/api/pivotgridaxis)
     */
    value: PivotGridAxis[];
    /**
     * Indicates which of the three available axes are represented by the editor:
     * - columnAxes
     * - rowAxes
     * - measureAxes
     */
    field: string;
    /**
     * Overrides the default `chipList` component.
     *
     * The default component is: [KendoReactChipList](components/buttons/api/chiplist).
     */
    chipList?: CustomComponent<KendoReactChipListProps>;
    /**
     * Sets the `className` props of the ClipList component.
     */
    className?: string;
}
/**
 * Represents the object which is passed to the [`ref`](https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom) callback of the PivotGridAxesEditor component.
 */
export interface PivotGridAxesEditorHandle {
    /**
     * The properties passed to the PivotGridAxesEditor component.
     */
    props: PivotGridAxesEditorProps;
    /**
     * The DOM element of the PivotGridAxesEditor component.
     */
    element: HTMLDivElement | null;
}
/**
 * Represents the [knoReact PivotGridAxesEditor component](components/pivotgrid/api/pivotgridaxeseditorprops).
 */
export declare const PivotGridAxesEditor: React.ForwardRefExoticComponent<PivotGridAxesEditorProps & React.RefAttributes<PivotGridAxesEditorHandle>>;
