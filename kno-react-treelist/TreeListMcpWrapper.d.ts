/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { TreeList as TreeListClassComponent } from './TreeList.js';
import { TreeListProps } from './interfaces/TreeListProps';
import * as React from 'react';
/**
 * Functional wrapper that adds Web MCP tool registration
 * around the class-based TreeList component.
 *
 * @hidden
 */
export declare const TreeListWrapper: React.ForwardRefExoticComponent<TreeListProps & React.RefAttributes<TreeListClassComponent>>;
