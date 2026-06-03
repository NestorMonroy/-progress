/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { GanttEditorDependenciesHandler } from './GanttEditor.js';
import { DataItem } from '../interfaces/DataItem';
import { GanttDependency } from '../interfaces/GanttDependency';
import * as React from 'react';
/**
 * Represents the event arguments of Gantt form.
 */
export interface GanttFormStateChangeEvent {
    /**
     * The initial data item.
     */
    initialDataItem?: DataItem;
    /**
     * The updated data item.
     */
    dataItem: DataItem | null;
    /**
     * A React Synthetic Event.
     */
    syntheticEvent: React.SyntheticEvent<any>;
    /**
     * A native DOM event.
     */
    nativeEvent: any;
    /**
     * Passes the updated dependencies.
     */
    dependencies?: GanttEditorDependenciesHandler;
}
/**
 * Represents the props of the knoReact [GanttForm](components/gantt/api/ganttform) component.
 */
export interface GanttFormProps {
    /**
     * Specifies the `DataItem` to be visualized inside the form.
     */
    dataItem: DataItem;
    /**
     * The task data passed to the form.
     */
    taskData?: DataItem[];
    /**
     * The dependancy data passed to the form.
     */
    dependencyData?: GanttDependency[];
    /**
     * Called when the `cancel` button is clicked.
     */
    onCancel?: (event: GanttFormStateChangeEvent) => void;
    /**
     * Called when the `delete` button is clicked.
     */
    onDelete?: (event: GanttFormStateChangeEvent) => void;
    /**
     * Called when the `close` button is clicked.
     */
    onClose?: (event: GanttFormStateChangeEvent) => void;
    /**
     * Called when the `submit` button is clicked.
     */
    onSubmit: (event: GanttFormStateChangeEvent) => void;
}
/**
 * Represents the default `form` component rendered when editing a task in the Gantt component.
 */
export declare const GanttForm: (props: GanttFormProps) => React.ReactPortal | null;
