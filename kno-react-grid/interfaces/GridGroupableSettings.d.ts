/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { GridGroupExpandableSettings } from './GridGroupExpandableSettings';
/**
 * The settings for grouping the data of the Grid ([see example](components/grid/grouping/grouping)).
 */
export interface GridGroupableSettings {
    /**
     * Determines if grouping by dragging and dropping the column headers is allowed and if the group header is visible.
     */
    enabled?: boolean;
    /**
     * Determines if the group footer row is visible when the group is collapsed. Defaults to `none`.
     */
    footer?: 'always' | 'visible' | 'none';
    /**
     * The group expandable settings.
     */
    expandable?: boolean | GridGroupExpandableSettings;
    /**
     * When enabled, the group header row sticks to the top of the scrollable area
     * so that it remains visible while scrolling through group data rows.
     *
     * @example
     * ```jsx
     * <Grid groupable={{ stickyHeaders: true }} />
     * ```
     * @default false
     */
    stickyHeaders?: boolean;
    /**
     * When enabled, the group footer row sticks to the bottom of the scrollable area
     * so that it remains visible while scrolling through group data rows.
     * Requires the `footer` property to be set to `'always'` or `'visible'`.
     *
     * @example
     * ```jsx
     * <Grid groupable={{ stickyFooters: true, footer: 'always' }} />
     * ```
     * @default false
     */
    stickyFooters?: boolean;
}
