/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { PDFExportProps } from '../PDFExportProps';
/**
 * Provides a function that saves the content of a DOM element as a PDF file.
 * The function is also used by the `Grid` component when the `pdf` prop is set to `true`.
 */
export declare const saveGridPDF: (gridInnerWrapper: any, pdfExportOptions?: PDFExportProps, callback?: () => void) => void;
/**
 * @hidden
 */
export declare function provideSaveGridPDF(savePDF: (domElement: HTMLElement, options?: PDFExportProps, callback?: () => void) => void): (gridInnerWrapper: any, pdfExportOptions?: PDFExportProps, callback?: () => void) => void;
