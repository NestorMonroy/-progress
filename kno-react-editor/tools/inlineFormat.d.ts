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
export declare namespace InlineFormatToolNS {
    /**
     * @hidden
     */
    interface InlineFormatToolProps extends ToolProps {
    }
    /**
     * @hidden
     */
    interface BoldProps extends InlineFormatToolProps {
    }
    /**
     * @hidden
     */
    interface ItalicProps extends InlineFormatToolProps {
    }
    /**
     * @hidden
     */
    interface UnderlineProps extends InlineFormatToolProps {
    }
    /**
     * @hidden
     */
    interface StrikethroughProps extends InlineFormatToolProps {
    }
    /**
     * @hidden
     */
    interface SubscriptProps extends InlineFormatToolProps {
    }
    /**
     * @hidden
     */
    interface SuperscriptProps extends InlineFormatToolProps {
    }
    /**
     * @hidden
     */
    const createInlineFormatTool: (settings: EditorToolsSettings.InlineFormatSettings) => React.ComponentClass<InlineFormatToolProps, any>;
}
