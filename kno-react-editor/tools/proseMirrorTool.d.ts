/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { EditorToolsSettings } from '../config/toolsSettings.js';
import { EditorState, Transaction } from '@progress/kno-editor-common';
import { ToolProps } from './ToolProps';
import * as React from 'react';
/**
 * @hidden
 */
export declare type ProseMirrorCommand = (state: EditorState, dispatch?: (tr: Transaction) => void) => boolean;
/**
 * @hidden
 */
export declare const createProseMirrorTool: (settings: EditorToolsSettings.ToolSettings, command: ProseMirrorCommand) => React.ComponentClass<ToolProps, any>;
