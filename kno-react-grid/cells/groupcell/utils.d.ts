/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { GridCellProps } from '../../interfaces/GridCellProps';
import { GridTdAttributes } from '../../index.js';
/**
 * @hidden
 */
export declare const getGroupCellTdProps: (props: GridCellProps) => {
    tdProps: GridTdAttributes | null;
    td2Props: any;
    content: any;
    renderToggleCell: boolean;
};
/**
 * @hidden
 */
export declare const getCustomCell: (props: GridCellProps) => any;
