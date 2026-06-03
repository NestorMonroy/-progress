/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { DataItem } from '../interfaces/DataItem';
import * as React from 'react';
/**
 * Represents the event arguments of Gantt remove dialog.
 */
export interface GanttRemoveDialogStateChangeEvent {
    /**
     * The updated data item.
     */
    dataItem: DataItem | null;
    /**
     * A React Synthetic Event.
     */
    syntheticEvent: React.SyntheticEvent<any>;
    /**
     * A native DOM event.
     */
    nativeEvent: any;
}
/**
 * Represents the props of the knoReact [GanttRemoveDialog](components/gantt/api/ganttremovedialog) component.
 */
export interface GanttRemoveDialogProps {
    /**
     * Specifies the `DataItem` currently being deleted.
     */
    dataItem: DataItem;
    /**
     * Called when the `close` button is clicked.
     */
    onClose?: (event: GanttRemoveDialogStateChangeEvent) => void;
    /**
     * Called when the `cancel` button is clicked.
     */
    onCancel?: (event: GanttRemoveDialogStateChangeEvent) => void;
    /**
     * Called when the `confirm` button is clicked.
     */
    onConfirm?: (event: GanttRemoveDialogStateChangeEvent) => void;
}
/**
 * Represents the `removeDialog` component rendered when removing a task from the Gantt component.
 */
export declare const GanttRemoveDialog: (props: GanttRemoveDialogProps) => React.ReactPortal | null;
