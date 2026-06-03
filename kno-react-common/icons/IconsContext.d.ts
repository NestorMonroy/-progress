/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { SVGIcon } from './SvgIcon.js';
import * as React from 'react';
/**
 * IconsContext type.
 */
export interface IconsContextType {
    /**
     * Sets the type of the icons used in the knoReact components inside IconsContext.
     */
    type?: 'font' | 'svg';
    /**
     * Overrides the built-in icons.
     */
    icons?: {
        [name: string]: SVGIcon | string;
    };
}
/**
 * Represents a React Context which provides you with the option to configure the knoReact components icons.
 */
export declare const IconsContext: React.Context<IconsContextType>;
