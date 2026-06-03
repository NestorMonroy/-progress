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
export interface InsertLinkDialogProps extends EditorDialogProps {
    /**
     * The `LinkSettings` object.
     */
    settings: EditorToolsSettings.LinkSettings;
}
/**
 * @hidden
 */
export declare class InsertLinkDialog extends React.Component<InsertLinkDialogProps> {
    private href;
    private title;
    private target;
    /**
     * @hidden
     */
    render(): string | number | bigint | boolean | Iterable<React.ReactNode> | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | React.JSX.Element | null | undefined;
    private onClose;
    private onInsert;
}
