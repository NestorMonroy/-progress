/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { ButtonProps } from '@progress/kno-react-buttons';
import { EditorToolsSettings } from '../config/toolsSettings.js';
import { BasicToolProps, ToolWithDialogRenderProp } from './ToolProps';
import * as React from 'react';
/**
 * @hidden
 */
export declare namespace ViewHtmlToolNS {
    /**
     * @hidden
     */
    interface ViewHtmlProps extends BasicToolProps, ToolWithDialogRenderProp, ButtonProps {
    }
    /**
     * @hidden
     */
    interface ViewHtmlState {
        openedDialog: boolean;
    }
    /**
     * @hidden
     */
    const createViewHtmlTool: (settings: EditorToolsSettings.ViewHtmlSettings) => React.ComponentClass<ViewHtmlProps, ViewHtmlState>;
}
