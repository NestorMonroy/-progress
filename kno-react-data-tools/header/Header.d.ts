/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { ColumnResize } from './../drag/ColumnResize.js';
import * as React from 'react';
/**
 * @hidden
 */
export interface HeaderProps {
    headerRow: React.ReactElement<any>;
    filterRow?: React.ReactElement<any>;
    columnResize?: ColumnResize;
    reorderable?: boolean;
}
/**
 * @hidden
 */
export declare class Header extends React.Component<HeaderProps> {
    private element;
    componentDidMount(): void;
    render(): React.JSX.Element;
}
