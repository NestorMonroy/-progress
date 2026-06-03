/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { ActionsLayout } from './models/actions-layout';
import * as React from 'react';
/**
 * Represents the props of the [knoReact WindowActionsBar component](components/dialogs/dialog).
 */
export interface WindowActionsBarProps {
    /**
     * Specifies the possible layouts of the action buttons ([see example](components/dialogs/window/action-buttons)). Defaults to `end`.
     */
    layout?: ActionsLayout;
    /**
     * @hidden
     */
    children?: any;
}
/**
 * Returns the action bar of the Window.
 *
 * @returns React.ReactElement
 */
export declare const WindowActionsBar: React.FunctionComponent<WindowActionsBarProps>;
