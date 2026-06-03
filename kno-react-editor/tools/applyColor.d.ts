/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { EditorToolsSettings } from '../config/toolsSettings.js';
import { BasicToolProps } from './ToolProps';
import * as React from 'react';
/**
 * @hidden
 */
export interface ApplyColorToolProps extends BasicToolProps, EditorToolsSettings.ApplyColorSettings {
}
/**
 * @hidden
 */
export declare const ApplyColorTool: React.FunctionComponent<ApplyColorToolProps>;
