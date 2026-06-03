/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { RadioButtonProps } from './interfaces/RadioButtonProps';
import * as React from 'react';
/**
 * The RadioButton ref.
 */
export interface RadioButtonHandle {
    /**
     * The HTML input element of the RadioButton component.
     */
    element: HTMLInputElement | null;
    /**
     * Focuses the RadioButton component.
     */
    focus: any;
}
/**
 * Represents the PropsContext of the `RadioButton` component.
 * Used for global configuration of all `RadioButton` instances.
 *
 * For more information, refer to the [Inputs Props Context](components/inputs/props-context) article.
 */
export declare const RadioButtonPropsContext: React.Context<(p: RadioButtonProps) => RadioButtonProps>;
/**
 * Represents the [knoReact RadioButton component](components/inputs/radiobutton).
 *
 * Accepts properties of type [RadioButtonProps](components/inputs/api/radiobuttonprops).
 * Obtaining the `ref` returns an object of type [RadioButtonHandle](components/inputs/api/radiobuttonhandle).
 */
export declare const RadioButton: React.ForwardRefExoticComponent<RadioButtonProps & React.RefAttributes<RadioButtonHandle | null>>;
