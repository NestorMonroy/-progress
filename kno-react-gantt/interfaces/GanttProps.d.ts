/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { GanttBaseProps } from './GanttBaseProps';
import { GanttTaskModelFields } from './GanttTaskModelFields';
import { GanttDependencyModelFields } from './GanttDependencyModelFields';
import { GanttView } from './GanttView';
import { GanttViewChangeEvent, GanttDataStateChangeEvent, GanttSortChangeEvent, GanttFilterChangeEvent, GanttExpandChangeEvent, GanttRowClickEvent, GanttColumnResizeEvent, GanttColumnReorderEvent, GanttColumnMenuFilterChangeEvent, GanttAddClickEvent, GanttTaskContextMenuEvent, GanttTaskClickEvent, GanttTaskDoubleClickEvent, GanttRowDoubleClickEvent, GanttRowContextMenuEvent, GanttTaskRemoveClickEvent, GanttDependencyCreateEvent, GanttKeyDownEvent, GanttSelectionChangeEvent, GanttHeaderSelectionChangeEvent } from './events';
import { DataItem } from './DataItem';
import { GanttDependency } from './GanttDependency';
import { WebMcpProps } from '@progress/kno-react-common';
/**
 * Represents the props of the [knoReact Gantt component](components/gantt).
 */
export interface GanttProps extends GanttBaseProps {
    /**
     * Adds custom CSS classes to the Gantt component.
     *
     * @example
     * ```jsx
     * <Gantt className="custom-class" />
     * ```
     */
    className?: string;
    /**
     * Sets custom styles for the Gantt component.
     *
     * @example
     * ```jsx
     * <Gantt style={{ height: '500px' }} />
     * ```
     */
    style?: React.CSSProperties;
    /**
     * Provides task data for the Gantt chart. Tasks appear as visual bars in the timeline.
     *
     * @example
     * ```jsx
     * const tasks = [{ id: 1, title: 'Task 1', start: new Date(), end: new Date() }];
     * <Gantt taskData={tasks} />
     * ```
     *
     * @slug task_data_gantt
     */
    taskData?: DataItem[];
    /**
     * Provides dependency data for the Gantt chart. Dependencies appear as visual connections between tasks.
     *
     * @example
     * ```jsx
     * const dependencies = [{ id: 1, from: 1, to: 2 }];
     * <Gantt dependencyData={dependencies} />
     * ```
     *
     * @slug dependency_data_gantt
     */
    dependencyData?: GanttDependency[];
    /**
     * Maps field names for reading task data from your data source.
     *
     * @example
     * ```jsx
     * const taskModelFields = { id: 'id', title: 'title', start: 'start', end: 'end' };
     * <Gantt taskModelFields={taskModelFields} />
     * ```
     */
    taskModelFields?: GanttTaskModelFields;
    /**
     * Maps field names for reading dependency data from your data source.
     *
     * @example
     * ```jsx
     * const dependencyModelFields = { id: 'id', from: 'from', to: 'to' };
     * <Gantt dependencyModelFields={dependencyModelFields} />
     * ```
     */
    dependencyModelFields?: GanttDependencyModelFields;
    /**
     * Provides view components as children. The Gantt renders the currently selected view.
     *
     * @example
     * ```jsx
     * <Gantt>
     *   <GanttWeekView title="Day" />
     *   <GanttDayView title="Week" />
     * </Gantt>
     * ```
     */
    children?: GanttView[] | GanttView;
    /**
     * Sets the view that shows first when the Gantt loads. You can choose from:
     * * `day`
     * * `week` (Default)
     * * `month`
     * * `year`
     *
     * @default "week"
     *
     * @example
     * ```jsx
     * <Gantt defaultView="month" />
     * ```
     */
    defaultView?: string;
    /**
     * Controls which view is currently shown. The value must match the `title` property of a view.
     *
     * @example
     * ```jsx
     * <Gantt view="day" />
     * ```
     */
    view?: string;
    /**
     * Sets the timezone for displaying dates and times in the Gantt chart.
     * For example, `Europe/Sofia`.
     *
     * @example
     * ```jsx
     * <Gantt timezone="Europe/Sofia" />
     * ```
     */
    timezone?: string;
    /**
     * Sets the height of all rows in pixels. All rows have the same height.
     *
     * @default 50
     *
     * @example
     * ```jsx
     * <Gantt rowHeight={40} />
     * ```
     */
    rowHeight?: number;
    /**
     * Configures the toolbar options. You can enable the add task button.
     *
     * @example
     * ```jsx
     * <Gantt toolbar={{ addTaskButton: true }} />
     * ```
     */
    toolbar?: {
        addTaskButton: boolean;
    };
    /**
     * Fires when the user selects a different view. Use this to control which view is shown.
     *
     * @example
     * ```jsx
     * const handleViewChange = (args) => console.log(args.view);
     * <Gantt onViewChange={handleViewChange} />
     * ```
     */
    onViewChange?: (args: GanttViewChangeEvent) => void;
    /**
     * Fires when the user changes the column menu filter.
     */
    onColumnMenuFilterChange?: (event: GanttColumnMenuFilterChangeEvent) => void;
    /**
     * Fires when the data state changes.
     */
    onDataStateChange?: (event: GanttDataStateChangeEvent) => void;
    /**
     * Fires when the sorting of the Gantt is changed ([see example](components/gantt/sorting)).
     * You need to handle the event yourself and sort the data.
     */
    onSortChange?: (event: GanttSortChangeEvent) => void;
    /**
     * Fires when the Gantt filter is modified through the UI
     * ([more information and examples](components/gantt/filtering)).
     * You need to handle the event yourself and filter the data.
     */
    onFilterChange?: (event: GanttFilterChangeEvent) => void;
    /**
     * Fires when the user clicks the expand or collapse icon on a row.
     */
    onExpandChange?: (event: GanttExpandChangeEvent) => void;
    /**
     * Fires when the user clicks the add task button.
     */
    onAddClick?: (event: GanttAddClickEvent) => void;
    /**
     * Fires when the user resizes a column.
     */
    onColumnResize?: (event: GanttColumnResizeEvent) => void;
    /**
     * Fires when the user reorders columns.
     */
    onColumnReorder?: (event: GanttColumnReorderEvent) => void;
    /**
     * Fires when the user clicks a row.
     */
    onRowClick?: (event: GanttRowClickEvent) => void;
    /**
     * Fires when the user double-clicks a row.
     */
    onRowDoubleClick?: (event: GanttRowDoubleClickEvent) => void;
    /**
     * Fires when the user right-clicks on a row.
     */
    onRowContextMenu?: (event: GanttRowContextMenuEvent) => void;
    /**
     * Fires when the user clicks a task.
     */
    onTaskClick?: (event: GanttTaskClickEvent) => void;
    /**
     * Fires when the user double-clicks a task.
     */
    onTaskDoubleClick?: (event: GanttTaskDoubleClickEvent) => void;
    /**
     * Fires when the user right-clicks on a task.
     */
    onTaskContextMenu?: (event: GanttTaskContextMenuEvent) => void;
    /**
     * Fires when the user clicks the remove button on a task.
     */
    onTaskRemoveClick?: (event: GanttTaskRemoveClickEvent) => void;
    /**
     * Fires when the user creates a dependency by connecting two tasks.
     */
    onDependencyCreate?: (event: GanttDependencyCreateEvent) => void;
    /**
     * Fires when the user presses any keyboard key.
     */
    onKeyDown?: (event: GanttKeyDownEvent) => void;
    /**
     * Fires when the user selects or deselects rows or cells.
     */
    onSelectionChange?: (event: GanttSelectionChangeEvent) => void;
    /**
     * Fires when the user clicks the checkbox in a column header.
     */
    onHeaderSelectionChange?: (event: GanttHeaderSelectionChangeEvent) => void;
    /**
     * Enables Web MCP tool registration for the Gantt component.
     * When set, browser-native AI agent tools are registered via
     * `navigator.modelContext.registerTool()` (Chrome 146+).
     *
     * @example
     * ```tsx
     * // Boolean: generic "gantt" label
     * <Gantt webMcp taskData={tasks} />
     *
     * // Config object: explicit name
     * <Gantt webMcp={{ dataName: 'project' }} taskData={tasks} />
     * ```
     */
    webMcp?: boolean | WebMcpProps;
}
