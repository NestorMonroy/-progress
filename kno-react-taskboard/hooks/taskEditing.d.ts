/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { DropDownListChangeEvent } from '@progress/kno-react-dropdowns';
import { InputChangeEvent } from '@progress/kno-react-inputs';
import { TaskBoardPriority, TaskBoardTaskModel } from '../TaskBoard.js';
import * as React from 'react';
export interface TaskEditingResult {
    /**
     * Handles changes to the task title input field.
     */
    onTitleChange: (event: InputChangeEvent) => void;
    /**
     * The current title value of the task being edited.
     */
    title: string;
    /**
     * Handles changes to the task description input field.
     */
    onDescriptionChange: (event: InputChangeEvent) => void;
    /**
     * The current description value of the task being edited.
     */
    description: string;
    /**
     * Handles changes to the task priority dropdown selection.
     */
    onPriorityChange: (event: DropDownListChangeEvent) => void;
    /**
     * The current priority value of the task being edited.
     */
    priority: TaskBoardPriority;
    /**
     * Saves the current task changes and calls the parent save handler.
     */
    onSave: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
export interface TaskEditingProps {
    /**
     * The task to be edited. If not provided, creates a new task.
     */
    task?: TaskBoardTaskModel;
    /**
     * Array of available priority options for the task.
     */
    priorities: TaskBoardPriority[];
    /**
     * Callback function called when the task is saved.
     */
    onSave: (task: TaskBoardTaskModel, prevTask: TaskBoardTaskModel) => void;
}
export declare const useTaskEditing: ({ onSave, task, priorities }: TaskEditingProps) => TaskEditingResult;
