/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { ExcelExportColumnProps } from '../ExcelExportColumn.js';
import { AggregateResult, GroupResult } from '@progress/kno-data-query';
import * as React from 'react';
/**
 * Represents the props that will be passed to the ExcelExportGroupFooter component when the template is rendered.
 */
export interface ExcelExportGroupFooterProps {
    /**
     * The field name by which the data is grouped.
     */
    field: string;
    /**
     * The column configuration object for the current column.
     */
    column: ExcelExportColumnProps;
    /**
     * The aggregate calculation results for the current group.
     */
    aggregates: AggregateResult;
    /**
     * The group data and metadata for the current group.
     */
    group: GroupResult;
}
/**
 * Represents the footer of the column group.
 */
export declare class ExcelExportGroupFooter extends React.PureComponent<ExcelExportGroupFooterProps> {
}
