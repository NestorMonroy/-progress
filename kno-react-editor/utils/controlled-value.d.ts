/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { Transaction, EditorView, Node } from '@progress/kno-editor-common';
/**
 * @hidden
 */
export declare const updateEditorValue: (view: EditorView, value: Node | string, prevValue: Node | string | undefined, trOnChange: Transaction | null, htmlOnChange: string | null) => void;
