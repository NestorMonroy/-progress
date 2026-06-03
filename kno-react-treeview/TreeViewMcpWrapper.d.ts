/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { TreeViewHandle } from './TreeView.js';
import { TreeViewProps } from './TreeViewProps';
/**
 * TreeView wrapper that integrates the Web MCP hook.
 *
 * @hidden
 */
import * as React from 'react';
/** @hidden */
export declare const TreeViewWrapper: React.ForwardRefExoticComponent<TreeViewProps & React.RefAttributes<TreeViewHandle>>;
