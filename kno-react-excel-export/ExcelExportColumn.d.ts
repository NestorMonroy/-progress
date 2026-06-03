/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { ColumnBase } from './ColumnBase';
import { CellOptions } from './ooxml/CellOptionsInterface';
import { ExcelExportGroupHeader } from './templates/ExcelExportGroupHeader.js';
import { ExcelExportGroupFooter } from './templates/ExcelExportGroupFooter.js';
import { ExcelExportFooter } from './templates/ExcelExportFooter.js';
import * as React from 'react';
/**
 * Represents the props of the knoReact ExcelExportColumnProps component.
 */
export interface ExcelExportColumnProps extends ColumnBase {
    /**
     * The options of the column data cells.
     */
    cellOptions?: CellOptions;
    /**
     * The field to which the column is bound.
     */
    field?: string;
    /**
     * The options of the column footer cell.
     */
    footerCellOptions?: CellOptions;
    /**
     * The column footer. Can be a function or a React component.
     */
    footer?: Function | ExcelExportFooter;
    /**
     * The options of the column group footer cells.
     */
    groupFooterCellOptions?: CellOptions;
    /**
     * The footer of the group. Can be a function or a React component.
     */
    groupFooter?: Function | ExcelExportGroupFooter;
    /**
     * The options of the column group header cells.
     */
    groupHeaderCellOptions?: CellOptions;
    /**
     * The header of the group. Can be a function or a React component.
     */
    groupHeader?: Function | ExcelExportGroupHeader;
}
/**
 * Represents the columns of the knoReact ExcelExport component.
 *
 * @returns null
 */
declare const ExcelExportColumn: React.FunctionComponent<ExcelExportColumnProps>;
export { ExcelExportColumn };
