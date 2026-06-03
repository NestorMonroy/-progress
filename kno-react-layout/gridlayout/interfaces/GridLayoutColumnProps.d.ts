/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
/**
 * Represents the props of the [knoReact GridLayout column](components/layout/gridlayout).
 */
export interface GridLayoutColumnProps {
    /**
     * Specifies the width of the GridLayout column ([see example](components/layout/gridlayout#knoreact-gridlayout-overview)).
     *
     * Example:
     * ```jsx
     * <GridLayout cols={[{ width: '200px' }]} />
     * ```
     */
    width?: number | string;
}
