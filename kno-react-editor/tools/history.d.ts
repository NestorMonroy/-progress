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
export declare namespace HistoryToolNS {
    /**
     * @hidden
     */
    interface UndoProps extends ToolProps {
    }
    /**
     * @hidden
     */
    interface RedoProps extends ToolProps {
    }
    /**
     * @hidden
     */
    const createUndoTool: (settings: EditorToolsSettings.ToolSettings) => React.ComponentClass<ToolProps, React.ComponentState>;
    /**
     * @hidden
     */
    const createRedoTool: (settings: EditorToolsSettings.ToolSettings) => React.ComponentClass<ToolProps, any>;
}
