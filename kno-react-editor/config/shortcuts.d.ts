/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { EditorState, Transaction, EditorView } from '@progress/kno-editor-common';
import { EditorToolsSettings } from './toolsSettings.js';
declare const bold: EditorToolsSettings.InlineFormatSettings, underline: EditorToolsSettings.InlineFormatSettings, italic: EditorToolsSettings.InlineFormatSettings;
/**
 * @hidden
 */
export interface Shortcuts {
    [key: string]: (state: EditorState, dispatch: (tr: Transaction) => void, view?: EditorView) => boolean;
}
/**
 * @hidden
 */
export declare const getShortcuts: (settings?: {
    types?: {
        listItem: string;
        hardBreak: string;
    };
    toolsSettings?: {
        bold?: EditorToolsSettings.InlineFormatOptions;
        italic?: EditorToolsSettings.InlineFormatOptions;
        underline?: EditorToolsSettings.InlineFormatOptions;
    };
}) => Shortcuts;
export {};
