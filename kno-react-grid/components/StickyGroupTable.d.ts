/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { DataRowContext } from '../getRowContents.js';
import { GridStackedLayoutSettings } from '../interfaces/GridStackedLayoutSettings';
import * as React from 'react';
/**
 * Represents the StickyGroupTable handle.
 *
 * @hidden
 */
export interface StickyTableHandle {
    /**
     * Sets the width of the sticky table element.
     */
    setWidth: (width: number) => void;
    /**
     * Sets the horizontal scroll position of the sticky container.
     */
    setScrollLeft: (scrollLeft: number) => void;
}
/**
 * @hidden
 */
export interface StickyGroupTableProps {
    size?: string;
    colGroups?: React.ReactElement;
    dataRowContext: DataRowContext;
    position: 'top' | 'bottom';
    isStackedMode?: boolean;
    groupLevelCount?: number;
    stackedLayoutSettings?: GridStackedLayoutSettings;
    rowHeight?: number;
}
/**
 * @hidden
 */
export declare const StickyGroupTable: React.FC<StickyGroupTableProps>;
