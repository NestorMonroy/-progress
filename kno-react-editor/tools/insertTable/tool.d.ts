/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { ButtonProps } from '@progress/kno-react-buttons';
import { EditorToolsSettings } from './../../config/toolsSettings.js';
import { BasicToolProps, ToolWithDialogRenderProp } from './../ToolProps';
import * as React from 'react';
/**
 * @hidden
 */
export declare namespace InsertTableToolNS {
    /**
     * @hidden
     */
    interface InsertTableProps extends BasicToolProps, ToolWithDialogRenderProp, ButtonProps {
    }
    /**
     * @hidden
     */
    interface InsertTableToolState {
        openedPopup: boolean;
    }
    /**
     * @hidden
     */
    const createInsertTableTool: (settings: EditorToolsSettings.InsertTableSettings) => React.ComponentClass<InsertTableProps, InsertTableToolState>;
}
