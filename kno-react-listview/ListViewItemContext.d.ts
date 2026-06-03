/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as React from 'react';
/** @hidden */
export interface ListViewItemContextValue {
    index: number;
    totalCount: number;
}
/** @hidden */
export declare const ListViewItemContext: React.Context<ListViewItemContextValue | null>;
