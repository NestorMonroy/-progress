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
export declare namespace FontStyleToolNS {
    /**
     * @hidden
     */
    interface DropDownListToolProps extends BasicToolProps, ToolRenderProp, DropDownListProps {
    }
    /**
     * @hidden
     */
    interface FontSizeProps extends DropDownListToolProps {
    }
    /**
     * @hidden
     */
    interface FontNameProps extends DropDownListToolProps {
    }
    /**
     * @hidden
     */
    const createStyleDropDownList: (settings: EditorToolsSettings.StyleDropDownListSettings) => React.ComponentClass<DropDownListToolProps, any>;
}
