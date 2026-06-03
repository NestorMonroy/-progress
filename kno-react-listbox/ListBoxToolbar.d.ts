/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { ListBoxToolbarProps } from './interfaces/ListBoxToolBarProps';
import { ListBoxToolbarEvent } from './interfaces/ListBoxEvents';
import * as React from 'react';
/**
 * @hidden
 */
interface ListBoxToolbarHandle {
    onToolClick?: (event: ListBoxToolbarEvent) => void;
    props: ListBoxToolbarProps;
    context: {};
    state: {};
    refs: {};
}
export declare const ListBoxToolbar: React.ForwardRefExoticComponent<ListBoxToolbarProps & React.RefAttributes<ListBoxToolbarHandle | null>>;
/** @hidden */
export type ListBoxToolbar = ListBoxToolbarHandle;
export {};
