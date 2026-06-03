/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { SpreadsheetToolProps } from './utils.js';
import { SelectedHeaders } from '@progress/kno-spreadsheet-common';
import * as React from 'react';
interface TableToolProps extends SpreadsheetToolProps {
    /**
     * @hidden
     */
    value: SelectedHeaders;
}
/**
 * The props of the AddColumnLeft tool component.
 */
export interface AddColumnLeftProps extends TableToolProps {
}
/**
 * The props of the AddColumnRight tool component.
 */
export interface AddColumnRightProps extends TableToolProps {
}
/**
 * The props of the AddRowBelow tool component.
 */
export interface AddRowBelowProps extends TableToolProps {
}
/**
 * The props of the AddRowAbove tool component.
 */
export interface AddRowAboveProps extends TableToolProps {
}
/**
 * The props of the DeleteColumn tool component.
 */
export interface DeleteColumnProps extends TableToolProps {
}
/**
 * The props of the DeleteRow tool component.
 */
export interface DeleteRowProps extends TableToolProps {
}
/**
 * The AddColumnLeft tool component.
 */
export declare const AddColumnLeft: React.FunctionComponent<AddColumnLeftProps>;
/**
 * The AddColumnRight tool component.
 */
export declare const AddColumnRight: React.FunctionComponent<AddColumnRightProps>;
/**
 * The AddRowBelow tool component.
 */
export declare const AddRowBelow: React.FunctionComponent<AddRowBelowProps>;
/**
 * The AddRowAbove tool component.
 */
export declare const AddRowAbove: React.FunctionComponent<AddRowAboveProps>;
/**
 * The DeleteColumn tool component.
 */
export declare const DeleteColumn: React.FunctionComponent<DeleteColumnProps>;
/**
 * The DeleteRow tool component.
 */
export declare const DeleteRow: React.FunctionComponent<DeleteRowProps>;
export {};
