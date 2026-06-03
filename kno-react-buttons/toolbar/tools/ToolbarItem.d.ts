/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { KendoReactComponentBaseProps } from '@progress/kno-react-common';
import * as React from 'react';
/**
 * Represents the ToolbarItem handle.
 */
export interface ToolbarItemHandle {
    /**
     * Returns the HTML element of the ToolbarItem component.
     */
    element: HTMLDivElement | null;
}
/**
 * Represents the props of knoReact ToolbarItem component.
 */
export interface ToolbarItemProps extends KendoReactComponentBaseProps {
    /**
     * Sets additional classes to the ToolbarItem component.
     *
     * @example
     * ```jsx
     * <ToolbarItem className="custom-class" />
     * ```
     */
    className?: string;
    /**
     * Sets additional styles to the ToolbarItem component.
     *
     * @example
     * ```jsx
     * <ToolbarItem style={{ margin: '10px' }} />
     * ```
     */
    style?: React.CSSProperties;
}
/**
 * Represents the knoReact ToolbarItem component.
 * To add a tool to the Toolbar, wrap it inside a ToolbarItem component
 * ([see example](components/buttons/toolbar/tools)).
 */
export declare const ToolbarItem: React.ForwardRefExoticComponent<ToolbarItemProps & React.RefAttributes<ToolbarItemHandle>>;
