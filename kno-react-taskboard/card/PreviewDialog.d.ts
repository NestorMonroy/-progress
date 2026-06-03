/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { TaskBoardPriority } from '../TaskBoard.js';
import * as React from 'react';
/**
 * Represents the props of the TaskBoardPreviewDialog component.
 */
export interface TaskBoardPreviewDialogProps {
    /**
     * The rendered title.
     */
    title: React.ReactNode;
    /**
     * The rendered description.
     */
    description: React.ReactNode;
    /**
     * Represents the priority label of the TaskBoardPreviewDialog.
     */
    priorityLabel: React.ReactNode;
    /**
     * Determines the content of the delete button.
     */
    delete: React.ReactNode;
    /**
     * Determines the content of the edit button.
     */
    edit: React.ReactNode;
    /**
     * Represents the priority of the current task.
     */
    priority: TaskBoardPriority;
    /**
     * Fires when the preview pane needs to be shown.
     */
    onClosePreviewPane: (event: React.MouseEvent<HTMLButtonElement>) => void;
    /**
     * Fires when task is deleted.
     */
    onTaskDelete: (event: React.MouseEvent<HTMLButtonElement>) => void;
    /**
     * Fires when task is edited.
     */
    onTaskEdit: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
/**
 * Represents the TaskBoardPreviewDialog component.
 */
export declare const TaskBoardPreviewDialog: React.FunctionComponent<TaskBoardPreviewDialogProps>;
