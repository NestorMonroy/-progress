/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { EditorToolsSettings } from '../config/toolsSettings.js';
import { EditorTools } from './index.js';
import * as React from 'react';
/**
 * @hidden
 */
export interface InsertImageState {
    openedDialog: boolean;
}
/**
 * @hidden
 */
export declare const createInsertImageTool: (settings: EditorToolsSettings.ImageSettings) => React.ComponentClass<EditorTools.InsertImageProps, InsertImageState>;
