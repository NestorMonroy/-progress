/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { TableGroupExpandableSettings } from '@progress/kno-react-data-tools';
/**
 * Represents the Grid group expandable settings.
 */
export interface GridGroupExpandableSettings extends TableGroupExpandableSettings {
    /**
     * Determines the default expand state for groups.
     * When set to `true`, all groups are expanded by default.
     */
    defaultExpand?: boolean;
    /**
     * Determines if group expanding functionality is enabled.
     */
    enabled?: boolean;
}
