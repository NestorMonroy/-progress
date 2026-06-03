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
 * Represents the props of the [knoReact DialogActionsBar component](components/dialogs/dialog).
 */
export interface DialogActionsBarProps {
    /**
     * Specifies the possible layouts of the action buttons ([see example](components/dialogs/dialog/action-buttons)). Defaults to `stretched`.
     */
    layout?: ActionsLayout;
    /**
     * @hidden
     */
    children?: any;
}
/**
 * Returns the action bar of the Dialog.
 *
 * @returns React.ReactElement
 */
export declare const DialogActionsBar: React.FunctionComponent<DialogActionsBarProps>;
