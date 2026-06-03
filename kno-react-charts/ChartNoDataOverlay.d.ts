/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as React from 'react';
/**
 * The props of the `ChartNoDataOverlay` component.
 */
export interface ChartNoDataOverlayProps {
    /**
     * The styles that are applied to the component.
     */
    style?: React.CSSProperties;
    /**
     * Sets additional CSS classes to the component.
     */
    className?: string;
    /**
     * The content of the overlay. If not set, the default message will be displayed.
     */
    children?: React.ReactNode;
}
/**
 * The knoReact `ChartNoDataOverlay` component. The component is used to display an overlay with a message when the Chart has no data, no series, or all series are empty.
 * The overlay will be automatically cleared if the series receive data.
 */
export declare const ChartNoDataOverlay: React.FunctionComponent<any>;
