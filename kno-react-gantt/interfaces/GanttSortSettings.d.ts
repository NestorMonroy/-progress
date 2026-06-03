/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { ColumnSortSettings, SortSettings } from '@progress/kno-react-data-tools';
/**
 * The settings for sorting the Gantt columns.
 */
export type GanttColumnSortSettings = ColumnSortSettings;
/**
 * The settings for sorting the Gantt data.
 */
export type GanttSortSettings = SortSettings;
/**
 * @hidden
 */
export declare const normalize: (...settings: (GanttSortSettings | GanttColumnSortSettings)[]) => any;
