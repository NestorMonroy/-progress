/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { WindowProps } from './WindowProps';
import { Draggable } from '@progress/kno-react-common';
import * as React from 'react';
/**
 * Represent the `ref` of the Window component.
 */
export interface WindowHandle {
    /**
     * The Window element.
     */
    element?: HTMLDivElement | null;
    /**
     * **Deprecated.** Use `element` instead.
     */
    windowElement?: HTMLDivElement | null;
    /**
     * The draggable handle for the Window component.
     */
    draggable: Draggable | null;
    /**
     * The props of the WindowHandle component.
     */
    props: Readonly<WindowProps>;
}
/**
 * Internal Window component implementation (functional component).
 *
 * @hidden
 */
export declare const WindowWithoutContext: React.ForwardRefExoticComponent<WindowProps & React.RefAttributes<WindowHandle>>;
/**
 * Context for Window props to enable child components to access parent Window props.
 */
export declare const WindowPropsContext: React.Context<(p: WindowProps) => WindowProps>;
/**
 * Represents the [knoReact Window component](components/dialogs/window).
 *
 * Accepts properties of type [WindowProps](components/dialogs/api/windowprops).
 * Obtaining the `ref` returns an object of type [WindowHandle](components/dialogs/api/windowhandle).
 *
 * @remarks
 * Supported children components are: {@link WindowActionsBar}.
 */
export declare const Window: React.ForwardRefExoticComponent<WindowProps & React.RefAttributes<any>>;
