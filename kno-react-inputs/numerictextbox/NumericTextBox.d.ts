/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { NumericTextBoxProps } from './interfaces/NumericTextBoxProps';
import { NumericTextBoxHandle } from './interfaces/NumericTextBoxHandle';
import * as React from 'react';
/**
 * Represents the PropsContext of the `NumericTextBox` component.
 * Used for global configuration of all `NumericTextBox` instances.
 *
 * For more information, refer to the [Inputs Props Context](components/inputs/props-context) article.
 */
export declare const NumericTextBoxPropsContext: React.Context<(p: NumericTextBoxProps) => NumericTextBoxProps>;
/**
 * Represents the [knoReact NumericTextBox component](components/inputs/numerictextbox).
 */
export declare const NumericTextBox: React.ForwardRefExoticComponent<NumericTextBoxProps & React.RefAttributes<NumericTextBoxHandle | null>>;
