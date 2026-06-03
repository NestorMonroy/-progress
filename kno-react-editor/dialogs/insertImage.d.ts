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
export interface InsertImageDialogProps extends EditorDialogProps {
    /**
     * The `ImageSettings` object.
     */
    settings: EditorToolsSettings.ImageSettings;
}
/**
 * @hidden
 */
export declare class InsertImageDialog extends React.Component<InsertImageDialogProps> {
    private src;
    private altText;
    private title;
    private width;
    private height;
    /**
     * @hidden
     */
    render(): string | number | bigint | boolean | Iterable<React.ReactNode> | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | React.JSX.Element | null | undefined;
    private onClose;
    private onInsert;
}
