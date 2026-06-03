/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { DropDownListProps } from '@progress/kno-react-dropdowns';
import { EditorToolsSettings } from '../config/toolsSettings.js';
import { BasicToolProps, ToolRenderProp } from './ToolProps';
import * as React from 'react';
/**
 * @hidden
 */
export declare namespace FormatBlockToolNS {
    /**
     * @hidden
     */
    interface FormatBlockProps extends BasicToolProps, ToolRenderProp, DropDownListProps {
    }
    /**
     * @hidden
     */
    const createFormatBlockDropDownList: (settings: EditorToolsSettings.FormatBlockDropDownListSettings) => React.ComponentClass<FormatBlockProps, any>;
}
