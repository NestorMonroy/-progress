/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as React from 'react';
/**
 * Represents the props of the [knoReact AppBarSpacer component](components/layout/appbar/content-arrangement#toc-spacings).
 * Used to give additional white space between the AppBar sections and provides a way for customizing its width.
 */
export interface AppBarSpacerProps {
    /**
     * Sets additional CSS classes to the AppBarSpacer.
     */
    className?: string;
    /**
     * Sets additional CSS styles to the AppBarSpacer.
     */
    style?: React.CSSProperties;
    /**
     * Determines the child nodes.
     */
    children?: React.ReactNode;
}
