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
export declare namespace LinkToolNS {
    /**
     * @hidden
     */
    interface LinkProps extends BasicToolProps, ToolWithDialogRenderProp, ButtonProps {
    }
    /**
     * @hidden
     */
    interface LinkToolState {
        openedDialog: boolean;
    }
    /**
     * @hidden
     */
    const createLinkTool: (settings: EditorToolsSettings.LinkSettings) => React.ComponentClass<LinkProps, LinkToolState>;
}
