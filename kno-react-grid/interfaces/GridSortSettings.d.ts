/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { ColumnSortSettings, SortSettings } from '@progress/kno-react-data-tools';
/**
 * The settings for sorting the Grid columns.
 */
export interface GridColumnSortSettings extends ColumnSortSettings {
}
/**
 * The sorting settings of the Grid ([see example](components/grid/sorting)).
 *
 * @example
 * ```jsx-no-run
 *
 * <Grid
 *    sortable={true}
 * >
 * </Grid>
 * ```
 */
export type GridSortSettings = SortSettings;
