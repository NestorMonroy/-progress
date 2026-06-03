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
 * The props of the GridLines tool component.
 */
export interface GridLinesProps extends SpreadsheetToolProps {
    /**
     * The selected state of the tool.
     */
    value?: boolean;
}
/**
 * The GridLines tool component.
 */
export declare const GridLines: React.FunctionComponent<GridLinesProps>;
