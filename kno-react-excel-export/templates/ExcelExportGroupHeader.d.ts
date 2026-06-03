/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { AggregateResult, GroupResult } from '@progress/kno-data-query';
import * as React from 'react';
/**
 * Represents the props that will be passed to the ExcelExportGroupHeader component when the template is rendered.
 */
export interface ExcelExportGroupHeaderProps {
    /**
     * The field name by which the data is grouped.
     */
    field: string;
    /**
     * The aggregate calculation results for the current group.
     */
    aggregates: AggregateResult;
    /**
     * The group data and metadata for the current group.
     */
    group: GroupResult;
    /**
     * The value that identifies the current group.
     */
    value: any;
}
/**
 * Represents the header of the column group.
 */
export declare class ExcelExportGroupHeader extends React.PureComponent<ExcelExportGroupHeaderProps> {
}
