/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { default as PropTypes } from 'prop-types';
import { WorkbookOptions } from '@progress/kno-ooxml';
import { CellOptions } from './ooxml/CellOptionsInterface';
import { ExcelExportData } from './ExcelExportData';
import { ExcelExportColumnProps } from './ExcelExportColumn.js';
import * as React from 'react';
/**
 * Represents the props of the knoReact ExcelExport component.
 */
export interface ExcelExportProps {
    /**
     * @hidden
     */
    children?: any;
    /**
     * Pass the columns through the component props. If you provide both the `columns` prop and the child column components, the component uses the columns from props.
     */
    columns?: ExcelExportColumnProps[];
    /**
     * The creator of the workbook.
     */
    creator?: string;
    /**
     * The exported data. If grouped, structure the data as described by the [`GroupResult`](components/datatools/api/groupresult) option of the knoReact Data Query component.
     */
    data?: any[];
    /**
     * The date on which the workbook is created.
     *
     * @default new Date()
     */
    date?: Date;
    /**
     * Enables or disables the column filtering in the Excel file.
     */
    filterable?: boolean;
    /**
     * Specifies the name of the file that is exported to Excel.
     *
     * @default "Export.xlsx"
     */
    fileName?: string;
    /**
     * If set to `true`, the content is forwarded to `proxyURL` even if the browser supports saving files locally.
     *
     * @default false
     */
    forceProxy?: boolean;
    /**
     * The exported data groups. The groups must be compatible with the [`GroupDescriptor`](components/datatools/api/groupdescriptor) option of the knoReact Data Query component.
     */
    group?: any[];
    /**
     * The options of the cells that are inserted before the header cells to align the headers and the column values (when the data is grouped).
     */
    headerPaddingCellOptions?: CellOptions;
    /**
     * The options of the cells that are inserted before the data, group, and footer cells to indicate the group hierarchy (when the data is grouped).
     */
    paddingCellOptions?: CellOptions;
    /**
     * The URL of the server-side proxy which streams the file to the end user. When the browser cannot save files locally—for example, Internet Explorer 9 and earlier, and Safari—a proxy is used. You must implement the server-side proxy.
     *
     * The proxy receives a `POST` request with the following parameters in the request body:
     * - `contentType`&mdash;The MIME type of the file.
     * - `base64`&mdash;The base-64 encoded file content.
     * - `fileName`&mdash;The file name, as requested by the caller. The proxy is expected to return the decoded file with the **Content-Disposition** header set to `attachment; filename="<fileName.xslx>"`.
     */
    proxyURL?: string;
    /**
     * If set to `rtl`, the Excel file is rendered in the right-to-left mode.
     */
    dir?: string;
    /**
     * If set to `true`, the data is exported as a tree based on the `level` property of each data record.
     */
    hierarchy?: boolean;
    /**
     * Enables or disables collapsible (grouped) rows in the exported file.
     *
     * @default false
     */
    collapsible?: boolean;
    /**
     * Triggered after the export is complete.
     */
    onExportComplete?: (event: ExcelExportExportEvent) => void;
}
/**
 * Represents the return type of ExcelExportExportEvent.
 */
export type ExcelExportExportEvent = {
    /**
     * The target of the ExcelExportExportEvent from ExcelExport.
     */
    target: ExcelExport;
};
/**
 * Represents the  knoReact ExcelExport component.
 *
 * @remarks
 * Supported children components are: {@link ExcelExportColumn}.
 */
export declare class ExcelExport extends React.Component<ExcelExportProps> {
    /**
     * @hidden
     */
    static propTypes: {
        children: PropTypes.Requireable<any>;
        columns: PropTypes.Requireable<any[]>;
        creator: PropTypes.Requireable<string>;
        data: PropTypes.Requireable<any>;
        date: PropTypes.Requireable<any>;
        filterable: PropTypes.Requireable<boolean>;
        fileName: PropTypes.Requireable<string>;
        forceProxy: PropTypes.Requireable<boolean>;
        group: PropTypes.Requireable<any>;
        headerPaddingCellOptions: PropTypes.Requireable<any>;
        paddingCellOptions: PropTypes.Requireable<any>;
        proxyURL: PropTypes.Requireable<string>;
        dir: PropTypes.Requireable<string>;
        hierarchy: PropTypes.Requireable<boolean>;
        collapsible: PropTypes.Requireable<boolean>;
    };
    /**
     * @hidden
     */
    static defaultProps: {
        fileName: string;
        forceProxy: boolean;
        collapsible: boolean;
    };
    private readonly showLicenseWatermark;
    private readonly licenseMessage?;
    constructor(props: ExcelExportProps);
    /**
     * Saves the data to Excel.
     *
     * @param exportData - An optional parameter. Can be the data that will be exported or the [`WorkbookOptions`](components/excel/api/kendoooxml#toc-workbookoptions).
     * @param columns - An optional parameter. If present, it will be used instead of the columns prop or the child column components.
     */
    save(exportData?: any[] | ExcelExportData | WorkbookOptions, columns?: ExcelExportColumnProps[] | React.ReactElement<ExcelExportColumnProps>[]): void;
    /**
     * Returns a promise which will be resolved with the file data URI.
     *
     * @param exportData - The optional data or the [`WorkbookOptions`](components/excel/api/kendoooxml#toc-workbookoptions) that will be used to generate the data URI.
     * @param externalColumns - The optional columns that will be used.
     * @returns {Promise<string>} - The promise that will be resolved by the file data URI.
     */
    toDataURL(exportData?: any[] | ExcelExportData | WorkbookOptions, columns?: any[]): Promise<string>;
    /**
     * Based on the specified columns and data, returns [`WorkbookOptions`](components/excel/api/kendoooxml#toc-workbookoptions).
     *
     * @param exportData - The optional data that will be exported.
     * @param externalColumns - The optional columns that will be used.
     * @returns {WorkbookOptions} - The workbook options.
     */
    workbookOptions(exportData?: any[] | ExcelExportData, externalColumns?: ExcelExportColumnProps[] | React.ReactElement<ExcelExportColumnProps>[]): WorkbookOptions;
    /**
     * @hidden
     */
    render(): React.JSX.Element;
    protected saveFile: (dataURL: string) => void;
    private extractColumns;
    private extractChild;
    private getExportData;
}
