/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { DataItem } from '../models/index.js';
import * as React from 'react';
/** @hidden */
export interface SchedulerEditTaskContextProps {
    remove: SchedulerEditTaskRemoveItemContextType;
    showRemoveDialog: SchedulerEditTaskShowRemoveDialogContextType;
    showOccurrenceDialog: SchedulerEditTaskShowOccurrenceDialogContextType;
    children?: React.ReactNode;
}
/** @hidden */
export type SchedulerEditTaskRemoveItemContextType = [DataItem | null, (event?: any) => void];
/** @hidden */
export declare const SchedulerEditTaskRemoveItemContext: React.Context<SchedulerEditTaskRemoveItemContextType>;
/** @hidden */
export declare const useSchedulerEditTaskRemoveItemContext: () => SchedulerEditTaskRemoveItemContextType;
/** @hidden */
export type SchedulerEditTaskShowRemoveDialogContextType = [boolean, (event?: any) => void];
/** @hidden */
export declare const SchedulerEditTaskShowRemoveDialogContext: React.Context<SchedulerEditTaskShowRemoveDialogContextType>;
/** @hidden */
export declare const useSchedulerEditTaskShowRemoveDialogContext: () => SchedulerEditTaskShowRemoveDialogContextType;
/** @hidden */
export type SchedulerEditTaskShowOccurrenceDialogContextType = [boolean, (event?: any) => void];
/** @hidden */
export declare const SchedulerEditTaskShowOccurrenceDialogContext: React.Context<SchedulerEditTaskShowOccurrenceDialogContextType>;
/** @hidden */
export declare const useSchedulerEditTaskShowOccurrenceDialogContext: () => SchedulerEditTaskShowOccurrenceDialogContextType;
/** @hidden */
export declare const SchedulerEditTaskContext: (props: SchedulerEditTaskContextProps) => React.JSX.Element;
