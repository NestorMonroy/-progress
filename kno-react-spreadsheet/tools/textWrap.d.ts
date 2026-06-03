/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { SpreadsheetToolProps } from './utils.js';
import * as React from 'react';
/**
 * The props of the TextWrap tool component.
 */
export interface TextWrapProps extends SpreadsheetToolProps {
    /**
     * The selected state of the tool.
     */
    value?: boolean;
}
/**
 * The TextWrap tool component.
 */
export declare const TextWrap: React.FunctionComponent<TextWrapProps>;
