/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { ExcelExportColumnProps } from '../ExcelExportColumn.js';
import * as React from 'react';
/**
 * Represents the props that will be passed to the ExcelExportFooter component when the template is rendered.
 */
export interface ExcelExportFooterProps {
    /**
     * The column configuration object for the current column.
     */
    column: ExcelExportColumnProps;
    /**
     * The index of the current column within the grid.
     */
    columnIndex: number;
}
/**
 * Represents the footer of column.
 */
export declare class ExcelExportFooter extends React.PureComponent<ExcelExportFooterProps> {
}
