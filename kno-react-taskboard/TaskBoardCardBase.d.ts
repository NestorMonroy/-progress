/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { CardHandle } from '@progress/kno-react-layout';
import { TaskBoardCardProps } from './card/Card.js';
import { TaskBoardTaskModel } from './TaskBoard.js';
import * as React from 'react';
/**
 * Represents the props of the TaskBoardCardBase component
 *
 * @hidden
 */
export interface TaskBoardCardBaseProps {
    /**
     * The task of the TaskBoardCardBase.
     */
    task: TaskBoardTaskModel;
    /**
     * The styles for the TaskBoardCardBase.
     */
    style?: React.CSSProperties;
    /**
     * Determines the disabled mode.
     */
    disabled?: boolean;
    /**
     * Specifies the `tabIndex` that will be added to the TaskBoard Column and Card elements.
     */
    tabIndex?: number;
    /**
     * Specifies the CardHandle reference.
     */
    elementRef?: React.RefObject<CardHandle | null>;
    /**
     * Specifies the width and height of the drag target reference.
     */
    dragTargetRef?: React.RefObject<{
        width: number;
        height: number;
    } | null>;
    /**
     * Fires when a task is deleted.
     */
    onDeleteTask: () => void;
    /**
     * Represents the `showEditPane` event.
     */
    showEditPane: (task: TaskBoardTaskModel) => void;
    /**
     * Represents the TaskBoardCard component.
     */
    cardComponent: React.ComponentType<TaskBoardCardProps>;
}
/**
 * Represents the TaskBoardCardBase component.
 *
 * @hidden
 */
export declare const TaskBoardCardBase: {
    (props: TaskBoardCardBaseProps): React.JSX.Element;
    displayName: string;
};
