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
export declare namespace ListToolNS {
    /**
     * @hidden
     */
    interface ListToolProps extends ToolProps {
    }
    /**
     * @hidden
     */
    interface OrderedListProps extends ListToolProps {
    }
    /**
     * @hidden
     */
    interface UnorderedListProps extends ListToolProps {
    }
    /**
     * @hidden
     */
    const createListTool: (settings: EditorToolsSettings.ListSettings) => React.ComponentClass<ListToolProps, any>;
}
