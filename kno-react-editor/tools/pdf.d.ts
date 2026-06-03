/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { ToolProps } from './ToolProps';
import { EditorToolsSettings } from './../config/toolsSettings.js';
import { PDFExportProps } from '@progress/kno-react-pdf';
import * as React from 'react';
/**
 * @hidden
 */
export interface PdfProps extends ToolProps {
    /**
     * The settings of the tool. Use it to modify the tool appearance.
     */
    settings?: EditorToolsSettings.PdfSettings;
    /**
     * The options which will be passed to the [`savePDF`](components/pdf/api/savepdf) function.
     */
    savePdfOptions?: PDFExportProps;
    /**
     * The callback which will be passed to the [`savePDF`](components/pdf/api/savepdf) function.
     */
    savePdfCallback?: () => void;
}
/**
 * @hidden
 */
export declare const Pdf: React.FunctionComponent<PdfProps>;
