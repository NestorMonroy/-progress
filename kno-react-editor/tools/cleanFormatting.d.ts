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
export interface CleanFormattingToolProps extends ToolProps {
    /**
     * The settings of the tool. Use it to modify the tool appearance.
     */
    settings?: EditorToolsSettings.CleanFormattingSettings;
}
/**
 * @hidden
 */
export declare const CleanFormatting: React.FunctionComponent<CleanFormattingToolProps>;
