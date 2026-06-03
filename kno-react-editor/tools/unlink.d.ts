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
export declare namespace UnlinkToolNS {
    /**
     * @hidden
     */
    interface UnlinkProps extends ToolProps {
    }
    /**
     * @hidden
     */
    const createUnlinkTool: (settings: EditorToolsSettings.UnlinkSettings) => React.ComponentClass<UnlinkProps, any>;
}
