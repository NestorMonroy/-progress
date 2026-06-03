/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { TaskBoardTaskEditPaneProps } from './TaskBoardTaskEditPane.js';
import { TaskBoardPriority, TaskBoardTaskModel } from './TaskBoard.js';
import * as React from 'react';
/**
 * Represents the props of the TaskBoardAddCard component
 */
export interface TaskBoardAddCardProps {
    /**
     * Represent the priorities of the task board card.
     */
    priorities: TaskBoardPriority[];
    /**
     * Triggered on `onClose` event of the TaskBoardAddCard.
     */
    onClose: (event: React.MouseEvent<HTMLButtonElement>) => void;
    /**
     * Triggered on `onSave` event of the TaskBoardAddCard.
     */
    onSave: (task: TaskBoardTaskModel, prevTask: TaskBoardTaskModel) => void;
    /**
     * Specifies the TaskBoardTaskEditPane component.
     */
    editPane: React.ComponentType<TaskBoardTaskEditPaneProps>;
}
/**
 * Represents the TaskBoardAddCard component.
 */
export declare const TaskBoardAddCard: React.FunctionComponent<TaskBoardAddCardProps>;
