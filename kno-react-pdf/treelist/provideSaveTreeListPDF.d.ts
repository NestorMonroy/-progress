/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { TreeListPDFExportProps } from './TreeListPDFExport.js';
/**
 * @hidden
 */
export declare function provideSaveTreeListPDF(savePDF: (domElement: HTMLElement, options?: TreeListPDFExportProps, callback?: () => void) => void): (treeListInnerWrapper: any, pdfExportOptions?: TreeListPDFExportProps, callback?: () => void) => void;
