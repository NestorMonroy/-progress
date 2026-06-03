/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
/**
 * Maps field names from your task data to the fields that the Gantt component expects.
 */
export interface TaskModelFields {
    /**
     * Maps to the field that contains the unique ID for each task.
     */
    id: string;
    /**
     * Maps to the field that contains the task start date.
     */
    start: string;
    /**
     * Maps to the field that contains the task end date.
     */
    end: string;
    /**
     * Maps to the field that contains the task title or name.
     */
    title: string;
    /**
     * Maps to the field that contains the task completion percentage.
     */
    percentComplete: string;
    /**
     * Maps to the field that contains the parent task ID for child tasks.
     */
    parentId?: string;
    /**
     * Maps to the field that indicates if a task is a summary of child tasks.
     */
    isRollup: string;
    /**
     * Maps to the field that indicates if a task is expanded to show child tasks.
     */
    isExpanded: string;
    /**
     * Maps to the field that contains child tasks.
     */
    children: string;
    /**
     * Maps to the field that indicates if a task is currently being edited.
     */
    isInEdit: string;
    /**
     * Maps to the field that indicates if a task is selected.
     */
    isSelected: string;
}
