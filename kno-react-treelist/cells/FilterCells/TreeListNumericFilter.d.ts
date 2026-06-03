/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { FilterComponentProps } from '@progress/kno-react-data-tools';
import { TreeListFilterOperator } from '../../interfaces/TreeListFilterOperator';
import * as React from 'react';
export interface TreeListNumericFilterProps extends FilterComponentProps {
    /**
     * The list of the operators.
     */
    operators?: TreeListFilterOperator[];
    /**
     * Sets the accessible label of the filter input.
     *
     * @remarks
     * This property is related to accessibility.
     */
    ariaLabel?: string;
}
export declare const TreeListNumericFilter: React.FunctionComponent<TreeListNumericFilterProps>;
