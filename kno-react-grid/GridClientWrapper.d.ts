/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { DataItemWrapper } from '@progress/kno-react-common';
import { GridColumnState } from './interfaces/index.js';
import { ExtendedColumnProps } from './GridColumn.js';
import { GridComponentProps } from './interfaces/GridProps.js';
import * as React from 'react';
/**
 * @hidden
 */
export declare const GridClientWrapper: (props: {
    gridProps: GridComponentProps;
    innerGrid?: any;
    columnsRef: ExtendedColumnProps[];
    hiddenColumnsRef: ExtendedColumnProps[];
    columnsMapRef: number[][];
    columnsState: GridColumnState[];
    dataRef: Array<DataItemWrapper>;
    children?: React.ReactNode;
    id: string;
    virtualTotal: number;
    gridRef: any;
    detailExpandable?: boolean;
    isAllData: boolean;
    virtualPageSize: number;
    isVirtualScroll: boolean;
}) => React.JSX.Element;
