/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { ColorPickerProps } from './interfaces/ColorPickerProps';
import * as React from 'react';
/**
 * @hidden
 */
export interface ColorPickerHandle {
    element: HTMLSpanElement | null;
    value?: string;
}
/**
 * Represents the PropsContext of the `ColorPicker` component.
 * Used for global configuration of all `ColorPicker` instances.
 *
 * For more information, refer to the [Inputs Props Context](components/inputs/props-context) article.
 */
export declare const ColorPickerPropsContext: React.Context<(p: ColorPickerProps) => ColorPickerProps>;
/**
 * Represents the [knoReact ColorPicker component](components/inputs/colorpicker).
 *
 * @example
 * ```jsx
 * const App = () => {
 *     return <ColorPicker />;
 * }
 * ```
 */
export declare const ColorPicker: React.ForwardRefExoticComponent<ColorPickerProps & React.RefAttributes<ColorPickerHandle | null>>;
