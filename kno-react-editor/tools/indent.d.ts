/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { EditorToolsSettings } from '../config/toolsSettings.js';
import { ToolProps } from './ToolProps';
import * as React from 'react';
/**
 * @hidden
 */
export declare namespace IndentToolNS {
    /**
     * @hidden
     */
    interface IndentProps extends ToolProps {
    }
    /**
     * @hidden
     */
    const createIndentTool: (settings: EditorToolsSettings.IndentationSettings) => React.ComponentClass<IndentProps, any>;
}
