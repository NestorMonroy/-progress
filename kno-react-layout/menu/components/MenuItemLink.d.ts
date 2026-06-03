/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { knoReactComponentBaseProps } from '@progress/kno-react-common';
import * as React from 'react';
/**
 * The properties of the knoReact MenuItemLink component.
 */
export interface MenuItemLinkProps extends knoReactComponentBaseProps {
    /**
     * Specifies whether the MenuItemLink component is opened.
     */
    opened: boolean;
    /**
     * Sets the URL of the MenuItemLink component.
     */
    url?: string;
}
export declare const MenuItemLink: (props: MenuItemLinkProps) => React.JSX.Element;
