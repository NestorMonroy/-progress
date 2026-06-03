/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { TaskBoardTaskModel } from './TaskBoard.js';
import { TaskBoardAddCardProps } from './TaskBoardAddCard.js';
import * as React from 'react';
/**
 * Represents the props of the TaskBoardEditCard component
 */
export interface TaskBoardEditCardProps extends TaskBoardAddCardProps {
    /**
     * Determines the task of the TaskBoardEditCard component.
     */
    task: TaskBoardTaskModel;
}
/**
 * Represents the TaskBoardEditCard component.
 */
export declare const TaskBoardEditCard: React.FunctionComponent<TaskBoardEditCardProps>;
