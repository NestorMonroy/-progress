/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { ListBoxProps } from './interfaces/ListBoxProps';
import * as React from 'react';
/**
 * The ListBox ref.
 */
export interface ListBoxHandle {
    /**
     * The current element or `null` if there is no one.
     */
    element: HTMLDivElement | null;
    /**
     * The props value of the ListBox.
     */
    props: ListBoxProps;
}
/**
 * The ListBox component.
 */
export declare const ListBox: React.ForwardRefExoticComponent<ListBoxProps & React.RefAttributes<ListBoxHandle | null>>;
/** @hidden */
export type ListBox = ListBoxHandle;
