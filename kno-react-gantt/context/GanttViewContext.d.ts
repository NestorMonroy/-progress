/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { NormalizedDragEvent } from '@progress/kendo-react-common';
import { Store, StoreAction } from '../hooks/useDictionaryStore.js';
import { GanttTaskHandle } from '../components/GanttTask.js';
import * as React from 'react';
/** @hidden */
export type GanttViewTasksContextType = [Store<GanttTaskHandle>, (event: StoreAction<GanttTaskHandle>) => void];
/** @hidden */
export declare const GanttViewTasksContext: React.Context<GanttViewTasksContextType>;
/** @hidden */
export declare const useGanttViewTasksContext: () => GanttViewTasksContextType;
/** @hidden */
export type GanttViewTimelineWidthContextType = number;
/** @hidden */
export declare const GanttViewTimelineWidthContext: React.Context<number>;
/** @hidden */
export declare const useGanttViewTimelineWidthContext: () => GanttViewTimelineWidthContextType;
/** @hidden */
export type GanttViewDependencyDragContextType = {
    onDependencyHandlePress: (event: NormalizedDragEvent) => void;
    onDependencyHandleDrag: (event: NormalizedDragEvent) => void;
    onDependencyHandleRelease: (event: NormalizedDragEvent) => void;
    isEnabled: boolean;
    draggedId: string | null;
};
/** @hidden */
export declare const GanttViewDependencyDragContext: React.Context<GanttViewDependencyDragContextType>;
/** @hidden */
export declare const useGanttViewDependencyDragContext: () => GanttViewDependencyDragContextType;
/** @hidden */
export interface GanttViewContextProps {
    children?: React.ReactNode;
    tasksStore: [Store<GanttTaskHandle>, (event: StoreAction<GanttTaskHandle>) => void];
    dependencyDrag: GanttViewDependencyDragContextType;
    timelineWidth: number;
}
/** @hidden */
export declare const GanttViewContext: {
    ({ children, tasksStore: tasks, timelineWidth, dependencyDrag }: GanttViewContextProps): React.JSX.Element;
    displayName: string;
};
