/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { EditorView } from '@progress/kno-editor-common';
/**
 * @hidden
 */
export interface EditorDialogProps {
    /**
     * The `EditorView` object.
     */
    view: EditorView;
    /**
     * The `settings` object of the Dialog.
     */
    settings: any;
    /**
     * Represents the `dir` HTML attribute.
     */
    dir?: string;
    /**
     * The `close` event which will be triggered when the Dialog is about to be unmounted.
     */
    onClose: () => void;
    /**
     * Fires when a Dialog is about to be rendered. Used to override the default appearance of the Dialog.
     */
    render?: (tool: React.ReactElement<any>, args?: any) => React.ReactNode;
}
