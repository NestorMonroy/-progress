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
export type TreeListSelectableMode = TableSelectableMode;
/**
 * Represents the TreeList selectable settings.
 */
export interface TreeListSelectableSettings extends TableSelectableSettings {
    /**
     * The available values are:
     * * `single`
     * * `multiple`
     *
     * @default "multiple"
     */
    mode?: TreeListSelectableMode;
}
