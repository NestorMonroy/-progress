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
 * The props of the Alignment tool component.
 */
export interface AlignmentProps extends SpreadsheetToolProps {
    /**
     * The value of the tool.
     */
    value: {
        textAlign?: string;
        verticalAlign?: string;
    };
}
/**
 * The Alignment tool component.
 */
export declare const Alignment: React.FunctionComponent<AlignmentProps>;
/**
 * The props of the AlignHorizontally tool component.
 */
export interface AlignHorizontallyProps extends SpreadsheetToolProps {
    /**
     * The value of the tool.
     */
    value: string;
}
/**
 * The props of the AlignVertically tool component.
 */
export interface AlignVerticallyProps extends SpreadsheetToolProps {
    /**
     * The value of the tool.
     */
    value: string;
}
/**
 * The AlignHorizontally tool component.
 */
export declare const AlignHorizontally: React.FunctionComponent<AlignHorizontallyProps>;
/**
 * The AlignVertically tool component.
 */
export declare const AlignVertically: React.FunctionComponent<AlignVerticallyProps>;
