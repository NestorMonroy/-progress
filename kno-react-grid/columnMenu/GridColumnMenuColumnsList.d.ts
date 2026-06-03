/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { GridColumnProps } from './../interfaces/GridColumnProps';
import * as React from 'react';
/**
 * Represents the props of the knoReact GridColumnMenuColumnsList component.
 */
export interface GridColumnMenuColumnsListProps {
    /**
     * The columns state of the knoReact GridColumnMenuColumnsList component.
     */
    columnsState: GridColumnProps[];
    /**
     * The initial columns of the knoReact GridColumnMenuColumnsList component.
     */
    columns: GridColumnProps[];
    /**
     * The onColumnsChange event handler of the knoReact GridColumnMenuColumnsList component.
     */
    onColumnsChange: (cols: GridColumnProps[]) => void;
    /**
     * The onCloseMenu event handler of the knoReact GridColumnMenuColumnsList component.
     */
    onCloseMenu: Function;
}
/**
 * Represents the knoReact GridColumnMenuColumnsList component.
 */
export declare const GridColumnMenuColumnsList: React.FunctionComponent<GridColumnMenuColumnsListProps>;
