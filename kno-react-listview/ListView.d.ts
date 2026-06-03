/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { ListViewProps } from './interfaces/ListViewProps';
import { ListViewEvent } from './events';
import * as React from 'react';
/** @hidden */
interface ListViewHandle {
    onScroll?: (event: ListViewEvent) => void;
    props: ListViewProps;
    context: {};
    state: {};
    refs: {};
}
export declare const ListView: React.ForwardRefExoticComponent<ListViewProps & React.RefAttributes<ListViewHandle | null>>;
/** @hidden */
export type ListView = ListViewHandle;
export {};
