/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
/**
 * The props of the GridFooterCell component
 * ([see example](components/grid/cells#toc-footer-cells)).
 */
export interface GridFooterCellProps {
    /**
     * The field to which the footer cell is bound.
     */
    field?: string;
    /**
     * The styles of the footer cell.
     */
    style?: React.CSSProperties;
    /**
     * The `colSpan` of the footer cell.
     */
    colSpan?: number;
    /**
     * The index to be applied to the `aria-colindex` attribute.
     */
    ariaColumnIndex: number;
}
