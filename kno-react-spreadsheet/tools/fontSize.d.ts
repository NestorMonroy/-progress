/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { DropDownToolProps, SpreadsheetToolProps } from './utils.js';
import * as React from 'react';
/**
 * The props of the FontSize tool component.
 */
export interface FontSizeProps extends DropDownToolProps {
}
/**
 * The FontSize tool component.
 */
export declare const FontSize: React.FunctionComponent<FontSizeProps>;
/**
 * @hidden
 */
interface FontSizeChangeToolProps extends SpreadsheetToolProps {
    /**
     * The selected state of the tool.
     */
    value: number;
}
/**
 * The props of the IncreaseFontSize tool component.
 */
export interface IncreaseFontSizeProps extends FontSizeChangeToolProps {
}
/**
 * The IncreaseFontSize tool component.
 */
export declare const IncreaseFontSize: React.FunctionComponent<IncreaseFontSizeProps>;
/**
 * The props of the DecreaseFontSize tool component.
 */
export interface DecreaseFontSizeProps extends FontSizeChangeToolProps {
}
/**
 * The DecreaseFontSize tool component.
 */
export declare const DecreaseFontSize: React.FunctionComponent<DecreaseFontSizeProps>;
export {};
