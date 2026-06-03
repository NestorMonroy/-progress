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
export interface SelectAllToolProps extends ToolProps {
    /**
     * The settings of the tool. Use it to modify the tool appearance.
     */
    settings?: EditorToolsSettings.SelectAllSettings;
}
/**
 * @hidden
 */
export declare const SelectAll: React.FunctionComponent<SelectAllToolProps>;
