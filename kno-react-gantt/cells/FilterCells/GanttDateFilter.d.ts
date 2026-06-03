/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { FilterComponentProps } from '@progress/kendo-react-data-tools';
import { GanttFilterOperator } from '../../interfaces/GanttFilterOperator';
import * as React from 'react';
export interface GanttDateFilterProps extends FilterComponentProps {
    /**
     * The list of the operators.
     */
    operators?: GanttFilterOperator[];
    /**
     * The accessible label of the component.
     *
     * @remarks
     * This property is related to accessibility.
     */
    ariaLabel?: string;
}
export declare const GanttDateFilter: React.FunctionComponent<GanttDateFilterProps>;
