/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { BaseIconProps } from './BaseIconProps';
import { KendoMouse } from '../models/mouse';
import * as React from 'react';
/**
 * @hidden
 */
export interface IconHandle {
    /**
     * The IconHandle element.
     */
    element: HTMLSpanElement | null;
}
/**
 * Represents the props of the [knoReact Icon component](components/common/icon).
 */
export interface IconProps extends BaseIconProps, KendoMouse<IconHandle, HTMLSpanElement> {
    /**
     * Represents the name of the icon.
     */
    name?: string;
}
/**
 * Represents the [knoReact Icon component](components/common/icon).
 *
 * @example
 * ```jsx
 * const App = () => {
 *   return (
 *       <Icon name="home"/>
 *   );
 * };
 * ```
 */
export declare const Icon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<IconHandle | null>>;
