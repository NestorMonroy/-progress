/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { WebMcpProps } from '@progress/kno-react-common';
import { TaskBoardCardProps } from './card/Card.js';
import { TaskBoardColumnProps } from './column/Column.js';
import * as React from 'react';
/**
 * Represent the target(props) of the TaskBoardHandle.
 */
export interface TaskBoardHandle {
    /**
     * The props values of the TackBoard.
     */
    props: TaskBoardProps;
}
/**
 * Represents the target of the TaskBoardPriority.
 */
export interface TaskBoardPriority {
    /**
     * Represents the priority of a TaskBoard.
     */
    priority: string;
    /**
     * Represents the color of a TaskBoard.
     */
    color: string;
}
/**
 * Represent the item model.
 */
interface ItemModel {
    /**
     * Sets the `id` of an ItemModel.
     */
    id: string | number | undefined;
    /**
     * Determines the title of an ItemModel.
     */
    title: string;
    /**
     * Determines the status of an ItemModel.
     */
    status: string;
    /**
     * Determines of an ItemModel is going to edited.
     */
    edit?: boolean;
    /**
     * @hidden
     */
    isPlaceholder?: boolean;
}
/**
 * Represents the task board column model.
 */
export interface TaskBoardColumnModel extends ItemModel {
    /**
     * Determined the index of the TaskBoardTaskModel.
     */
    index?: number;
}
/**
 * Represents the task board task model.
 */
export interface TaskBoardTaskModel extends ItemModel {
    /**
     * Determined the description of the TaskBoardTaskModel.
     */
    description: string;
    /**
     * Determined the priority of the TaskBoardTaskModel.
     */
    priority: TaskBoardPriority;
    /**
     * Determined the index of the TaskBoardTaskModel.
     */
    index?: number;
}
/**
 * Represents the return type of TaskBoardChangeEvent.
 */
export interface TaskBoardChangeEvent {
    /**
     * Determines the returned data.
     */
    data: object[] | TaskBoardTaskModel[];
    /**
     * Determines the returned type.
     */
    type: string;
    /**
     * Represents the previous item.
     */
    previousItem: TaskBoardColumnModel | TaskBoardTaskModel | null;
    /**
     * Represents the current item.
     */
    item: TaskBoardColumnModel | TaskBoardTaskModel | null;
}
/**
 * Represents the props of the TaskBoard component
 */
export interface TaskBoardProps {
    /**
     * Specifies the column data from type TaskBoardColumnModel.
     * Example:
     * ```jsx
     * <TaskBoard columnData={[
     *   { id: 1, title: 'To Do', status: 'todo' },
     *   { id: 2, title: 'In Progress', status: 'inProgress' }
     * ]} />
     * ```
     */
    columnData: TaskBoardColumnModel[];
    /**
     * Represents the task data from type TaskBoardTaskModel.
     * Example:
     * ```jsx
     * <TaskBoard taskData={[
     *   { id: 1, title: 'Task 1', status: 'todo', description: 'Description 1', priority: { priority: 'High', color: 'red' } },
     *   { id: 2, title: 'Task 2', status: 'inProgress', description: 'Description 2', priority: { priority: 'Low', color: 'green' } }
     * ]} />
     * ```
     */
    taskData: TaskBoardTaskModel[];
    /**
     * Specifies the priorities of the task board.
     * Example:
     * ```jsx
     * <TaskBoard priorities={[
     *   { priority: 'High', color: 'red' },
     *   { priority: 'Low', color: 'green' }
     * ]} />
     * ```
     */
    priorities: TaskBoardPriority[];
    /**
     * Specifies a list of CSS classes that will be added to the TaskBoard element.
     * Example:
     * ```jsx
     * <TaskBoard className="custom-taskboard" />
     * ```
     */
    className?: string | Array<string>;
    /**
     * Specifies the id that will be added to the TaskBoard element.
     * Example:
     * ```jsx
     * <TaskBoard id="taskboard-1" />
     * ```
     */
    id?: string;
    /**
     * Specifies the `tabIndex` that will be added to the TaskBoard Column and Card elements.
     * Example:
     * ```jsx
     * <TaskBoard tabIndex={0} />
     * ```
     */
    tabIndex?: number;
    /**
     * Represents the styles that are applied to the TaskBoard.
     * Example:
     * ```jsx
     * <TaskBoard style={{ backgroundColor: 'lightgray' }} />
     * ```
     */
    style?: React.CSSProperties;
    /**
     * The React elements that will be rendered inside the toolbar of the TaskBoard.
     * Example:
     * ```jsx
     * <TaskBoard>
     *   <Button>Add Task</Button>
     * </TaskBoard>
     * ```
     */
    children?: React.ReactNode;
    /**
     * Represents the `onChange` event. Triggered after tasks or columns are changed.
     * Example:
     * ```jsx
     * <TaskBoard onChange={(event) => console.log(event.data)} />
     * ```
     */
    onChange: (event: TaskBoardChangeEvent) => void;
    /**
     * Represents the TaskBoardCard component.
     * Example:
     * ```jsx
     * <TaskBoard card={(props) => <div>{props.title}</div>} />
     * ```
     */
    card?: React.ComponentType<TaskBoardCardProps>;
    /**
     * Represents the TaskBoardColumn component.
     * Example:
     * ```jsx
     * <TaskBoard column={(props) => <div>{props.title}</div>} />
     * ```
     */
    column?: React.ComponentType<TaskBoardColumnProps>;
    /**
     * Enables Web MCP tool registration for this component.
     * Requires a parent `WebMcpProvider` from `@progress/kno-react-webmcp`.
     */
    webMcp?: boolean | WebMcpProps;
}
/**
 * Represents the [knoReact TaskBoard component](components/taskboard).
 *
 * Accepts properties of type [TaskBoardProps](components/taskboard/api/taskboardprops).
 *
 * @remarks
 * Supported children components are: {@link TaskBoardToolbar}.
 */
export declare const TaskBoard: React.ForwardRefExoticComponent<TaskBoardProps & React.RefAttributes<TaskBoardHandle | null>>;
export {};
