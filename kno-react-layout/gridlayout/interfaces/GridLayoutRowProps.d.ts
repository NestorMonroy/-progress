/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
/**
 * Represents the props of the [knoReact GridLayout row](components/layout/gridlayout).
 */
export interface GridLayoutRowProps {
    /**
     * Specifies the height of the GridLayout row ([see example](components/layout/gridlayout#knoreact-gridlayout-overview)).
     *
     * Example:
     * ```jsx
     * <GridLayout rows={[{ height: '100px' }]} />
     * ```
     */
    height?: number | string;
}
