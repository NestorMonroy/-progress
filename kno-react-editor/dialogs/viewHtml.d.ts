/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { EditorToolsSettings } from '../config/toolsSettings.js';
import { EditorDialogProps } from './EditorDialogProps';
import * as React from 'react';
/**
 * @hidden
 */
export interface ViewHtmlDialogProps extends EditorDialogProps {
    /**
     * The `ViewHtmlSettings` object.
     */
    settings: EditorToolsSettings.ViewHtmlSettings;
}
/**
 * @hidden
 */
export declare class ViewHtmlDialog extends React.Component<ViewHtmlDialogProps> {
    private htmlArea;
    /**
     * @hidden
     */
    render(): string | number | bigint | boolean | Iterable<React.ReactNode> | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | React.JSX.Element | null | undefined;
    private textAreaRef;
    private onUpdate;
    private onClose;
}
