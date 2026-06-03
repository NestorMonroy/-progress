/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { TaskModelFields } from '../interfaces/TaskModelFields';
import { DependencyModelFields } from '../interfaces/DependencyModelFields';
import { GanttView } from '../interfaces/GanttView';
import { TreeListDataStateChangeEvent, TreeListSortChangeEvent, TreeListFilterChangeEvent, TreeListColumnMenuFilterChangeEvent, TreeListExpandChangeEvent, TreeListRowClickEvent, TreeListColumnResizeEvent, TreeListColumnReorderEvent, TreeListKeyDownEvent, TreeListSelectionChangeEvent, TreeListHeaderSelectionChangeEvent } from '@progress/kendo-react-treelist';
import { DateRange } from '../interfaces/DateRange';
import { GanttBaseProps } from '../interfaces/GanttBaseProps';
import { GanttDependencyCreateEvent, GanttTaskClickEvent, GanttTaskContextMenuEvent, GanttTaskDoubleClickEvent, GanttTaskRemoveClickEvent } from '../interfaces/events';
import * as React from 'react';
/** @hidden */
export type GanttTaskDataContextType = any[];
/** @hidden */
export declare const GanttTaskDataContext: React.Context<GanttTaskDataContextType>;
/** @hidden */
export declare const useGanttTaskDataContext: () => GanttTaskDataContextType;
/** @hidden */
export type GanttDependencyDataContextType = any[];
/** @hidden */
export declare const GanttDependencyDataContext: React.Context<GanttDependencyDataContextType>;
/** @hidden */
export declare const useGanttDependencyDataContext: () => GanttDependencyDataContextType;
/** @hidden */
export type GanttTaskModelFieldsContextType = TaskModelFields;
/** @hidden */
export declare const GanttTaskModelFieldsContext: React.Context<TaskModelFields>;
/** @hidden */
export declare const useGanttTaskModelFieldsContext: () => GanttTaskModelFieldsContextType;
/** @hidden */
export type GanttDependencyModelFieldsContextType = DependencyModelFields;
/** @hidden */
export declare const GanttDependencyModelFieldsContext: React.Context<DependencyModelFields>;
/** @hidden */
export declare const useGanttDependencyModelFieldsContext: () => GanttDependencyModelFieldsContextType;
/** @hidden */
export type GanttPropsContextType = GanttBaseProps;
/** @hidden */
export declare const GanttPropsContext: React.Context<GanttBaseProps>;
/** @hidden */
export declare const useGanttPropsContext: () => GanttPropsContextType;
/** @hidden */
export type GanttDateRangeContextType = DateRange;
/** @hidden */
export declare const GanttDateRangeContext: React.Context<DateRange>;
/** @hidden */
export declare const useGanttDateRangeContext: () => GanttDateRangeContextType;
/** @hidden */
export type GanttViewsContextType = GanttView[];
/** @hidden */
export declare const GanttViewsContext: React.Context<GanttViewsContextType>;
/** @hidden */
export declare const useGanttViewsContext: () => GanttViewsContextType;
/** @hidden */
export type GanttActiveViewContextType = [string, (activeView: string, event?: any) => void];
/** @hidden */
export declare const GanttActiveViewContext: React.Context<GanttActiveViewContextType>;
/** @hidden */
export declare const useGanttActiveViewContext: () => GanttActiveViewContextType;
/** @hidden */
export type GanttRowHeightContextType = number;
/** @hidden */
export declare const GanttRowHeightContext: React.Context<number>;
/** @hidden */
export declare const useGanttRowHeightContext: () => GanttRowHeightContextType;
/** @hidden */
export type GanttToolbarHeightContextType = number;
/** @hidden */
export declare const GanttToolbarHeightContext: React.Context<number>;
/** @hidden */
export declare const useGanttToolbarHeightContext: () => GanttToolbarHeightContextType;
/** @hidden */
export type GanttEventsContextType = {
    onDataStateChange: (args: TreeListDataStateChangeEvent) => void;
    onSortChange: (args: TreeListSortChangeEvent) => void;
    onFilterChange: (args: TreeListFilterChangeEvent) => void;
    onColumnMenuFilterChange: (args: TreeListColumnMenuFilterChangeEvent) => void;
    onExpandChange: (args: TreeListExpandChangeEvent) => void;
    onRowClick: (args: TreeListRowClickEvent) => void;
    onRowDoubleClick: (args: TreeListRowClickEvent) => void;
    onRowContextMenu: (args: TreeListRowClickEvent) => void;
    onColumnResize: (args: TreeListColumnResizeEvent) => void;
    onColumnReorder: (args: TreeListColumnReorderEvent) => void;
    onDependencyCreate?: (args: GanttDependencyCreateEvent) => void;
    onKeyDown?: (args: TreeListKeyDownEvent) => void;
    onSelectionChange?: (args: TreeListSelectionChangeEvent) => void;
    onHeaderSelectionChange?: (args: TreeListHeaderSelectionChangeEvent) => void;
};
/** @hidden */
export declare const GanttEventsContext: React.Context<GanttEventsContextType>;
/** @hidden */
export declare const useGanttEventsContext: () => GanttEventsContextType;
/** @hidden */
export type GanttTaskEventsContextType = {
    onTaskClick: (args: GanttTaskClickEvent) => void;
    onTaskDoubleClick: (args: GanttTaskDoubleClickEvent) => void;
    onTaskContextMenu: (args: GanttTaskContextMenuEvent) => void;
    onTaskRemoveClick?: (args: GanttTaskRemoveClickEvent) => void;
};
/** @hidden */
export declare const GanttTaskEventsContext: React.Context<GanttTaskEventsContextType>;
/** @hidden */
export declare const useGanttTaskEventsContext: () => GanttTaskEventsContextType;
/** @hidden */
export interface GanttContextProps {
    children?: React.ReactNode;
    views: GanttViewsContextType;
    taskData: GanttTaskDataContextType;
    dependencyData: GanttDependencyDataContextType;
    taskModelFields: TaskModelFields;
    dependencyModelFields: DependencyModelFields;
    props: GanttBaseProps;
    events: GanttEventsContextType;
    taskEvents: GanttTaskEventsContextType;
    dateRange: DateRange;
    rowHeight: number;
    toolbarHeight: number;
    activeView: GanttActiveViewContextType;
}
/** @hidden */
export declare const GanttContext: {
    ({ children, taskData, dependencyData, taskModelFields, dependencyModelFields, props, dateRange, views, activeView, rowHeight, toolbarHeight, events, taskEvents }: GanttContextProps): React.JSX.Element;
    displayName: string;
};
