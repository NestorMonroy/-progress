/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { DataItem } from '../interfaces/DataItem';
import { GanttDependency } from '../interfaces/GanttDependency';
import * as React from 'react';
export interface GanttEditorDependenciesHandler {
    /**
     * Lists the new dependencies that were created.
     */
    createdDependencies: GanttDependency[];
    /**
     * Lists the existing dependencies that were changed.
     */
    updatedDependencies: GanttDependency[];
    /**
     * Lists the dependencies that were removed.
     */
    deletedDependencies: GanttDependency[];
}
export interface GanttEditorProps {
    /**
     * Provides all task data for the editor to use.
     */
    taskData?: DataItem[];
    /**
     * Provides all dependency data for the editor to use.
     */
    dependencyData?: GanttDependency[];
    /**
     * Contains the task that is being edited.
     */
    dataItem: DataItem;
    /**
     * Fires when dependencies are created, updated, or deleted.
     */
    onDependencyCreate?: (event: GanttEditorDependenciesHandler) => void;
}
/**
 * @hidden
 */
export declare const GanttEditor: (props: GanttEditorProps) => React.JSX.Element;
