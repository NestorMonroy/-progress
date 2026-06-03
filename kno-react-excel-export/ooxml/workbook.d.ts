/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { WorkbookOptions } from '@progress/kno-ooxml';
import { ExcelExportProps } from '../ExcelExport.js';
/**
 * @hidden
 */
export declare const workbookOptions: (options: ExcelExportProps) => WorkbookOptions;
/**
 * @hidden
 */
export declare const toDataURL: (options: WorkbookOptions) => Promise<string>;
/**
 * @hidden
 */
export declare const isWorkbookOptions: (value: any) => boolean;
