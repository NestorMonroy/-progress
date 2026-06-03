/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { ToolProps } from './ToolProps';
import { EditorToolsSettings } from './../config/toolsSettings.js';
import * as React from 'react';
/**
 * @hidden
 */
export interface PrintProps extends ToolProps {
    /**
     * The settings of the tool. Use it to modify the tool appearance.
     */
    settings?: EditorToolsSettings.PrintSettings;
}
/**
 * @hidden
 */
export declare const Print: React.FunctionComponent<PrintProps>;
