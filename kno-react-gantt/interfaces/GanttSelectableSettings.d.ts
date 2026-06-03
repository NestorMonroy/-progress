/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { TableSelectableMode, TableSelectableSettings } from '@progress/kno-react-data-tools';
/**
 * Represents the available selection modes.
 */
export type GanttSelectableMode = TableSelectableMode;
/**
 * Represents the Gantt selectable settings.
 */
export interface GanttSelectableSettings extends TableSelectableSettings {
    /**
     * The available values are:
     * * `single`
     * * `multiple`
     *
     * @default "multiple"
     */
    mode?: GanttSelectableMode;
}
