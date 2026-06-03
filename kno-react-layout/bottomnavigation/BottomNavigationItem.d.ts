/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { BottomNavigationItemProps } from '../index.js';
import * as React from 'react';
/**
 * @hidden
 */
export interface BottomNavigationItemHandle {
    element: HTMLElement | null;
}
/**
 * Represents the [knoReact BottomNavigationItem component](components/layout/bottomnavigation).
 */
export declare const BottomNavigationItem: React.ForwardRefExoticComponent<Omit<BottomNavigationItemProps, "ref"> & React.RefAttributes<BottomNavigationItemHandle | null>>;
