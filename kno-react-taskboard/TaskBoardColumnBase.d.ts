/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { TaskBoardCardProps } from './card/Card.js';
import { TaskBoardColumnProps } from './column/Column.js';
import { TaskBoardColumnModel, TaskBoardPriority, TaskBoardTaskModel } from './TaskBoard.js';
import * as React from 'react';
/**
 * Represents the props of the TaskBoardColumnBase component
 *
 * @hidden
 */
export interface TaskBoardColumnBaseProps {
    /**
     * The rendered column.
     */
    column: TaskBoardColumnModel;
    /**
     * The rendered tasks.
     */
    tasks: TaskBoardTaskModel[];
    /**
     * The rendered priorities.
     */
    priorities: TaskBoardPriority[];
    /**
     * The applied styles.
     */
    style?: React.CSSProperties;
    /**
     * Specifies the `tabIndex` that will be added to the TaskBoard Column and Card elements.
     */
    tabIndex?: number;
    /**
     * Specifies the element reference.
     */
    elementRef?: React.RefObject<HTMLDivElement | null>;
    /**
     * Specifies the width and height of the drag target reference.
     */
    dragTargetRef?: React.RefObject<{
        width: number;
        height: number;
    } | null>;
    /**
     * Fires when a task is created.
     */
    onTaskCreate: (task: TaskBoardTaskModel) => void;
    /**
     * Fires when a task is edited.
     */
    onTaskEdit: (task: TaskBoardTaskModel, prevTask: TaskBoardTaskModel) => void;
    /**
     * Fires when a task is deleted.
     */
    onTaskDelete: (task: TaskBoardTaskModel) => void;
    /**
     * Fires when a column is changed.
     */
    onColumnChange: (column: TaskBoardColumnModel, prevColumn: TaskBoardColumnModel) => void;
    /**
     * Determines the TaskBoardCard component.
     */
    cardComponent: React.ComponentType<TaskBoardCardProps>;
    /**
     * Determines the TaskBoardColumn component.
     */
    columnComponent: React.ComponentType<TaskBoardColumnProps>;
}
/**
 * Represents the TaskBoardColumnBase component.
 *
 * @hidden
 */
export declare const TaskBoardColumnBase: {
    (props: TaskBoardColumnBaseProps): React.JSX.Element;
    displayName: string;
};
