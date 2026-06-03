/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { DialogProps } from './DialogProps';
import * as React from 'react';
/**
 * Represent the `ref` of the Dialog component.
 */
export interface DialogHandle {
    /**
     * The current element or `null` if there is no one.
     */
    element: HTMLDivElement | null;
    /**
     * The props of the Dialog component.
     */
    props: DialogProps;
}
/**
 * Represents the PropsContext of the `Dialog` component.
 * Used for global configuration of all `Dialog` instances.
 */
export declare const DialogPropsContext: React.Context<(p: DialogProps) => DialogProps>;
/**
 * Represents the [knoReact Dialog component](components/dialogs/dialog).
 *
 * Accepts properties of type [DialogProps](components/dialogs/api/dialogprops).
 * Obtaining the `ref` returns an object of type [DialogHandle](components/dialogs/api/dialoghandle).
 *
 * @remarks
 * Supported children components are: {@link DialogActionsBar}.
 */
export declare const Dialog: React.ForwardRefExoticComponent<DialogProps & React.RefAttributes<DialogHandle | null>>;
/**
 * The default props of the Dialog component.
 */
export declare const DialogDefaultProps: {
    autoFocus: boolean;
    modal: boolean;
    closeIcon: boolean;
};
