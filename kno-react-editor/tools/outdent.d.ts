/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { EditorToolsSettings } from '../config/toolsSettings.js';
import { IndentToolNS } from './indent.js';
import * as React from 'react';
/**
 * @hidden
 */
export declare namespace OutdentToolNS {
    /**
     * @hidden
     */
    interface OutdentProps extends IndentToolNS.IndentProps {
    }
    /**
     * @hidden
     */
    const createOutdentTool: (settings: EditorToolsSettings.IndentationSettings) => React.ComponentClass<OutdentProps, any>;
}
