/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { PivotGridConfiguratorEditorProps } from '../components/ConfiguratorEditor.js';
import { PivotGridConfiguratorState as CommonConfiguratorState, PivotGridField, PIVOT_CONFIGURATOR_ACTION as COMMON_CONFIGURATOR_ACTION } from '@progress/kno-pivotgrid-common';
import * as React from 'react';
/**
 * @hidden
 */
export interface PivotGridConfiguratorEditorState extends CommonConfiguratorState {
    expanded: PivotGridField[];
}
declare enum EXTENDED_CONFIGURATOR_ACTION {
    toggleExpansion = "PIVOT_CONFIGURATOR_ACTION_TOGGLE_EXPANSION"
}
type PIVOT_CONFIGURATOR_ACTION_TYPE = COMMON_CONFIGURATOR_ACTION | EXTENDED_CONFIGURATOR_ACTION;
/**
 * @hidden
 */
export declare const PIVOT_CONFIGURATOR_ACTION: {
    toggleExpansion: EXTENDED_CONFIGURATOR_ACTION.toggleExpansion;
    toggleSelection: COMMON_CONFIGURATOR_ACTION.toggleSelection;
    addColumnAxis: COMMON_CONFIGURATOR_ACTION.addColumnAxis;
    addColumnAxes: COMMON_CONFIGURATOR_ACTION.addColumnAxes;
    removeColumnAxis: COMMON_CONFIGURATOR_ACTION.removeColumnAxis;
    removeColumnAxes: COMMON_CONFIGURATOR_ACTION.removeColumnAxes;
    addRowAxis: COMMON_CONFIGURATOR_ACTION.addRowAxis;
    addRowAxes: COMMON_CONFIGURATOR_ACTION.addRowAxes;
    removeRowAxis: COMMON_CONFIGURATOR_ACTION.removeRowAxis;
    removeRowAxes: COMMON_CONFIGURATOR_ACTION.removeRowAxes;
    addMeasureAxis: COMMON_CONFIGURATOR_ACTION.addMeasureAxis;
    addMeasureAxes: COMMON_CONFIGURATOR_ACTION.addMeasureAxes;
    removeMeasureAxis: COMMON_CONFIGURATOR_ACTION.removeMeasureAxis;
    removeMeasureAxes: COMMON_CONFIGURATOR_ACTION.removeMeasureAxes;
    remove: COMMON_CONFIGURATOR_ACTION.remove;
    setSort: COMMON_CONFIGURATOR_ACTION.setSort;
    setFilter: COMMON_CONFIGURATOR_ACTION.setFilter;
    addFilter: COMMON_CONFIGURATOR_ACTION.addFilter;
    changeFilter: COMMON_CONFIGURATOR_ACTION.changeFilter;
    removeFilter: COMMON_CONFIGURATOR_ACTION.removeFilter;
    setDragItem: COMMON_CONFIGURATOR_ACTION.setDragItem;
    drop: COMMON_CONFIGURATOR_ACTION.drop;
    setDropZone: COMMON_CONFIGURATOR_ACTION.setDropZone;
    setDropTarget: COMMON_CONFIGURATOR_ACTION.setDropTarget;
    setDropDirection: COMMON_CONFIGURATOR_ACTION.setDropDirection;
};
/**
 * @hidden
 */
export interface PivotGridConfiguratorExpandAction {
    type: PIVOT_CONFIGURATOR_ACTION_TYPE;
    payload: any;
}
/**
 * Represents the available PivotGridConfigurator actions.
 *
 * Can be one of:
 * - [PivotGridConfiguratorSelectionAction](components/pivotgrid/api/pivotgridconfigurator)
 * - [PivotGridConfiguratorMultipleSelectionAction](components/pivotgrid/api/pivotgridconfigurator)
 * - [PivotGridConfiguratorRemoveAction](components/pivotgrid/api/pivotgridconfigurator)
 * - [PivotGridConfiguratorSortAction](components/pivotgrid/api/pivotgridconfigurator)
 * - [PivotGridConfiguratorFilterAction](components/pivotgrid/api/pivotgridconfigurator)
 * - [PivotConfiguratorDragAction](components/pivotgrid/api/pivotgridconfigurator)
 * - [PivotConfiguratorDropAction](components/pivotgrid/api/pivotgridconfigurator)
 * - [PivotGridConfiguratorDropZoneAction](components/pivotgrid/api/pivotgridconfigurator)
 * - [PivotGridConfiguratorDropTargetAction](components/pivotgrid/api/pivotgridconfigurator)
 * - [PivotGridConfiguratorDropDirectionAction](components/pivotgrid/api/pivotgridconfigurator)
 * - [PivotGridConfiguratorExpandAction](components/pivotgrid/api/pivotgridconfigurator)
 *
 * The following `falsy` values will be ignored:
 * - `null`
 * - `false`
 * - `undefined`
 *
 * @hidden
 */
export interface PivotGridConfiguratorAction {
    type: PIVOT_CONFIGURATOR_ACTION_TYPE;
    payload: any;
    override?: PivotGridConfiguratorEditorState;
}
/**
 * @hidden
 */
export declare const usePivotConfiguratorEditor: (props: PivotGridConfiguratorEditorProps, target: any) => [PivotGridConfiguratorEditorState, (action: PivotGridConfiguratorAction, syntheticEvent?: React.SyntheticEvent) => void];
export {};
