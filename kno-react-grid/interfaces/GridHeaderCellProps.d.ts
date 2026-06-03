/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { HeaderCellBaseProps } from '@progress/kno-react-data-tools';
import { GridColumnMenuWrapperProps } from '../columnMenu/GridColumnMenuWrapper.js';
/**
 * The props of the GridHeaderCell component
 * ([more information](components/grid/cells#toc-header-cells)).
 */
export interface GridHeaderCellProps extends Omit<HeaderCellBaseProps, 'render'> {
    /**
     * The props of the Grid column menu wrapper.
     */
    columnMenuWrapperProps: GridColumnMenuWrapperProps;
    /**
     * @hidden
     */
    id?: string;
}
