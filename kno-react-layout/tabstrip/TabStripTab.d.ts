/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as React from 'react';
/**
 * Represents the props of the TabStrip tabs.
 */
export interface TabStripTabProps {
    /**
     * Defines whether a TabStripTab is disabled ([see example](components/layout/tabstrip/tabs#toc-disabled-items)).
     *
     * @default false
     */
    disabled?: boolean;
    /**
     * @hidden
     */
    children?: React.ReactNode;
    /**
     * Sets the TabStripTab title ([see example](components/layout/tabstrip/tabs#toc-titles)).
     */
    title?: React.ReactNode;
    /**
     * Specifies the CSS class names of the TabStripTab content.
     */
    contentClassName?: string;
}
/**
 * Represents the TabStripTab component.
 */
export declare const TabStripTab: React.FC<TabStripTabProps>;
