/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as React from 'react';
/**
 * Represents the props of knoReact ToolbarSpacer component.
 */
export interface ToolbarSpacerProps {
    /**
     * Sets additional classes to the ToolbarSpacer component.
     */
    className?: string;
}
/** @hidden */
export interface ToolbarSpacerHandle {
    /**
     * Returns the HTML element of the ToolbarSpacer component.
     */
    element: HTMLDivElement | null;
}
/**
 * Represents the knoReact ToolbarSpacer component.
 * To specify an empty space, provide a ToolbarSpacer component
 * ([see example](components/buttons/toolbar/tools)).
 */
export declare const ToolbarSpacer: React.ForwardRefExoticComponent<ToolbarSpacerProps & React.RefAttributes<ToolbarSpacerHandle>>;
