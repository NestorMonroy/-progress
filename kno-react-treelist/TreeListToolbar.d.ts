/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { TreeListToolbarProps } from './interfaces/TreeListToolbarProps';
import * as React from 'react';
/**
 * Represents the object which is returned from the `ref` callback of the [TreeListToolbar](components/treelist/api/treelisttoolbar).
 *
 * For more information about Refs, refer to the [React Refs & Dom](https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom) article.
 */
export interface TreeListToolbarHandle {
    /**
     * The DOM element of the TreeListToolbar.
     */
    element: HTMLDivElement | null;
    /**
     * The props of the TreeListToolbar.
     */
    props: TreeListToolbarProps;
}
/**
 * Represents the TreeListToolbar component rendered by the [knoReact TreeList component](components/treelist).
 */
export declare const TreeListToolbar: React.ForwardRefExoticComponent<TreeListToolbarProps & React.RefAttributes<TreeListToolbarHandle>>;
export type TreeListToolbar = TreeListToolbarHandle;
