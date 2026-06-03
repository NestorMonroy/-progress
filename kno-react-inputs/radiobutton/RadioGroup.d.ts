/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { RadioGroupProps } from './interfaces/RadioGroupProps';
import * as React from 'react';
/**
 * The RadioGroup ref.
 */
export interface RadioGroupHandle {
    /**
     * The HTML list element of the RadioGroup component.
     */
    element: HTMLUListElement | null;
    /**
     * Focuses the RadioGroup component.
     */
    focus: any;
}
/**
 * Represents the PropsContext of the `RadioGroup` component.
 * Used for global configuration of all `RadioGroup` instances.
 *
 * For more information, refer to the [Inputs Props Context](components/inputs/props-context) article.
 */
export declare const RadioGroupPropsContext: React.Context<(p: RadioGroupProps) => RadioGroupProps>;
/**
 * Represents the [knoReact RadioGroup component](components/inputs/radiogroup).
 *
 * Accepts properties of type [RadioGroupProps](components/inputs/api/radiogroupprops).
 * Obtaining the `ref` returns an object of type [RadioGroupHandle](components/inputs/api/radiogrouphandle).
 */
export declare const RadioGroup: React.ForwardRefExoticComponent<RadioGroupProps & React.RefAttributes<RadioGroupHandle | null>>;
