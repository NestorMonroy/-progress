/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { ReactElement } from 'react';
import { GridColumnProps } from './GridColumnProps';
/**
 * The type of elements that the children property of the Grid accepts.
 */
export interface GridColumnChildrenProps extends GridColumnProps, ReactElement<GridColumnProps> {
    /**
     * The props object containing GridColumn properties.
     */
    props: GridColumnProps;
}
