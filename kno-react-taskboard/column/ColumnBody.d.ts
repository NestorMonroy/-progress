/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as React from 'react';
/**
 * Represents the props of the TaskBoardColumnBody component
 */
export interface TaskBoardColumnBodyProps {
    /**
     * Determines the children nodes.
     */
    children: React.ReactNode;
    /**
     * Specifies the ID of the column header element for aria-labelledby.
     */
    columnHeaderId?: string;
}
/**
 * Represents the TaskBoardColumnBody component.
 */
export declare const TaskBoardColumnBody: React.FunctionComponent<TaskBoardColumnBodyProps>;
