/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { Editor as EditorClassComponent } from './Editor.js';
import { EditorProps } from './EditorProps';
/**
 * Editor wrapper that integrates the Web MCP hook.
 *
 * @hidden
 */
import * as React from 'react';
/** @hidden */
export declare const EditorWrapper: React.ForwardRefExoticComponent<EditorProps & React.RefAttributes<EditorClassComponent>>;
