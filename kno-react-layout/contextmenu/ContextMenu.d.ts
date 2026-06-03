/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { Offset } from '@progress/kno-react-popup';
import { MenuProps } from '../menu/MenuProps';
import { MenuCloseEvent } from '../menu/events';
import * as React from 'react';
/**
 * The props of the [knoReact ContextMenu component](components/layout/contextmenu).
 */
export interface ContextMenuProps extends Omit<MenuProps, 'onClose' | 'openOnClick' | 'hoverOpenDelay' | 'hoverCloseDelay'> {
    /**
     * Controls the Popup visibility of the ContextMenu.
     *
     * Example:
     * ```jsx
     * <ContextMenu show={true} />
     * ```
     */
    show: boolean;
    /**
     * Specifies the absolute position of the ContextMenu. The Popover opens next to that point.
     *
     * Example:
     * ```jsx
     * <ContextMenu offset={{ left: 100, top: 200 }} />
     * ```
     */
    offset: Offset;
    /**
     * Triggers when the ContextMenu needs to hide.
     *
     * Example:
     * ```jsx
     * <ContextMenu onClose={(e) => setShow(false)} />
     * ```
     */
    onClose: (event: MenuCloseEvent) => void;
}
/**
 * Represents the [knoReact ContextMenu component](components/layout/contextmenu).
 */
export declare const ContextMenu: {
    (props: ContextMenuProps): React.JSX.Element;
    displayName: string;
};
