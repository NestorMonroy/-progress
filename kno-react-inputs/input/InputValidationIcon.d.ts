/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { IconHandle, SvgIconHandle, IconProps, SvgIconProps } from '@progress/kno-react-common';
import * as React from 'react';
/**
 * Represent the `ref` of the `InputValidationIcon` component.
 */
export type InputValidationIconHandle = IconHandle & SvgIconHandle;
/**
 * Represents the `props` of the `InputValidationIcon` component.
 */
export type InputValidationIconProps = IconProps & SvgIconProps;
/**
 * Represents the knoReact InputValidationIcon component.
 */
export declare const InputValidationIcon: React.ForwardRefExoticComponent<IconProps & SvgIconProps & React.RefAttributes<InputValidationIconHandle>>;
