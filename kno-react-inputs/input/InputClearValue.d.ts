/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { InputsClassStructure } from '@progress/kno-react-common';
import * as React from 'react';
/**
 * Represent the `ref` of the `InputClearValue` component.
 */
export type InputClearValueHandle = {
    element: HTMLSpanElement | null;
};
/**
 * Represents the `props` of the `InputClearValue` component.
 */
export interface InputClearValueProps extends React.HTMLAttributes<HTMLSpanElement> {
    /**
     * @hidden
     */
    unstyled?: InputsClassStructure;
}
/**
 * Represents the knoReact InputClearValue component.
 */
export declare const InputClearValue: React.ForwardRefExoticComponent<InputClearValueProps & React.RefAttributes<InputClearValueHandle>>;
