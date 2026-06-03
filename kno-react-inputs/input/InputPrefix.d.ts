/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as React from 'react';
/**
 * Represent the `ref` of the `InputPrefix` component.
 */
export interface InputPrefixHandle {
    /**
     * The HTML element of the InputPrefix component.
     */
    element: HTMLSpanElement | null;
}
/**
 * Represents the `props` of the `InputPrefix` component.
 */
export interface InputPrefixProps extends React.HTMLAttributes<HTMLSpanElement> {
    /**
     * Sets the `orientation` property of the `InputPrefix` component.
     */
    orientation?: 'horizontal' | 'vertical';
}
/**
 * Represents the knoReact InputPrefix component.
 */
export declare const InputPrefix: React.ForwardRefExoticComponent<InputPrefixProps & React.RefAttributes<InputPrefixHandle>>;
