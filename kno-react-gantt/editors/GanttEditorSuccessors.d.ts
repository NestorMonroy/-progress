/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { GridRowClickEvent } from '@progress/kendo-react-grid';
import { GanttDependency } from '../interfaces/GanttDependency';
import { DependencyType } from '../interfaces/DependencyType.js';
import { DataItem } from '../interfaces/DataItem';
import * as React from 'react';
export interface GanttEditorSuccessorsProps {
    /**
     * The array of successor dependencies for the current task.
     */
    successors: GanttDependency[];
    /**
     * The flattened array of all tasks in the Gantt.
     */
    flatTasks: DataItem[];
    /**
     * The available dependency types with their display names.
     */
    dependencyTypes: {
        type: DependencyType;
        name: string;
    }[];
    /**
     * The currently selected dependency item in the editor.
     */
    selectedItem: GanttDependency | undefined;
    /**
     * Callback function that handles row selection in the dependencies grid.
     */
    onSelectRow: (event: GridRowClickEvent) => void;
    /**
     * Callback function that adds a new successor dependency.
     */
    addSuccessorsDependency: () => void;
    /**
     * Callback function that removes the selected dependency.
     */
    deleteDependency: () => void;
    /**
     * Callback function that updates a dependency with new values.
     */
    updateDependency: (dependency: GanttDependency, field: string, newValue: number) => void;
}
/**
 * @hidden
 */
export declare const GanttEditorSuccessors: (props: GanttEditorSuccessorsProps) => React.JSX.Element;
