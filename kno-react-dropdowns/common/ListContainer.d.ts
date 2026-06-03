/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { PopupProps } from '@progress/kno-react-popup';
import * as React from 'react';
/**
 * @hidden
 */
export interface ListContainerProps {
    width?: string | number;
    dir?: string;
    popupSettings?: PopupProps;
    itemsCount?: number[];
    children?: React.ReactNode;
}
/**
 * @hidden
 */
declare const ListContainer: (props: ListContainerProps) => React.JSX.Element;
export default ListContainer;
