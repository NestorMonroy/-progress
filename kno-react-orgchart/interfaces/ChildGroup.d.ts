/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
/**
 * @hidden
 */
export interface ChildGroup {
    items: any[];
    groupedItems: any[];
    level: number;
    ids: number[];
    parentId: number;
    hasChildren: boolean;
    orientation: 'horizontal' | 'vertical';
    width: number | null;
    childLineWidths?: number[];
    left?: number;
    top?: number;
}
