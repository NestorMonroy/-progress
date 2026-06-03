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
export type GridSelectableMode = TableSelectableMode;
/**
 * Represents the Grid selectable settings.
 */
export interface GridSelectableSettings extends TableSelectableSettings {
    /**
     * The available values are:
     * * `single`
     * * `multiple`
     *
     * @default "multiple"
     */
    mode?: GridSelectableMode;
}
