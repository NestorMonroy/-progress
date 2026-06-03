/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { TaskBoardTaskModel } from '../TaskBoard.js';
import * as React from 'react';
/**
 * Represents the props of the TaskBoardCardBody component.
 */
export interface TaskBoardCardBodyProps {
    /**
     * Determines the children nodes.
     */
    children: React.ReactNode;
    /**
     * Determines the TaskBoardTask.
     */
    task: TaskBoardTaskModel;
}
/**
 * Represents the TaskBoardCardBody component.
 */
export declare const TaskBoardCardBody: React.FunctionComponent<TaskBoardCardBodyProps>;
