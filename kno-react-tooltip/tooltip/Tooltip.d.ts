/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { TooltipProps } from './TooltipProps';
import * as React from 'react';
/**
 * Imperative handle interface for Tooltip component.
 * Exposed via ref for programmatic control.
 */
export interface TooltipHandle {
    /**
     * Used on the `MouseOver` event to show the Tooltip.
     *
     * @param event The mouse event object.
     */
    handleMouseOver: (event: any) => void;
    /**
     * The method is used on the MouseLeave event to hide the Tooltip.
     *
     * @param event The mouse event object.
     */
    handleMouseLeave: (event: any) => void;
    /**
     * Handles click events on the target element.
     */
    handleTargetItemClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    /**
     * Handles keyboard events.
     */
    handleKeyDown: (event: React.KeyboardEvent<HTMLDivElement>, keys: string[]) => void;
    /**
     * The props of the Tooltip component.
     */
    readonly props: Readonly<TooltipProps>;
}
/**
 * Represents the [knoReact Tooltip component](components/tooltip/tooltip).
 *
 * Accepts properties of type [TooltipProps](components/tooltip/api/tooltipprops).
 */
export declare const Tooltip: React.ForwardRefExoticComponent<TooltipProps & React.RefAttributes<TooltipHandle>>;
