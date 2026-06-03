/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { ListBoxToolbarClickEvent } from './ListBoxEvents';
export interface ListBoxToolbarProps {
    /**
     * Sets the tools of the ListBoxToolbar. By default, the ListBoxToolbar renders no tools.
     * The built-in tools are:
     * * `moveUp`
     * * `moveDown`
     * * `transferTo`
     * * `transferFrom`
     * * `transferAllTo`
     * * `transferAllFrom`
     * * `remove`
     */
    tools?: Array<string>;
    /**
     * Configures the `size` of the buttons inside the ListBoxToolbar.
     *
     * The available options are:
     * - small
     * - medium
     * - large
     * - null&mdash;Does not set a size `className`.
     *
     * @default `medium`
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * The data of the main ListBox.
     */
    data: Array<any>;
    /**
     * The data of the connected ListBox.
     */
    dataConnected: Array<any>;
    /**
     * Set the selected field of the ListBoxToolbar.
     * Based on that value of that field the ListBoxToolbar will determine which actions are allowed and which disabled.
     */
    selectedField?: string;
    /**
     * Fires when one of the ListBoxToolbar tools is clicked.
     */
    onToolClick?: (event: ListBoxToolbarClickEvent) => void;
    /**
     * @hidden
     */
    dir?: string;
}
