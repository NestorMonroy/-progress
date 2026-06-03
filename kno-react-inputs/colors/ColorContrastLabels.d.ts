/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { RGBA } from './models/rgba';
import * as React from 'react';
/**
 * @hidden
 */
export interface ColorContrastLabelProps {
    bgColor: RGBA;
    rgba: RGBA;
}
/**
 * @hidden
 */
export declare class ColorContrastLabels extends React.Component<ColorContrastLabelProps, {}> {
    render(): React.JSX.Element;
}
