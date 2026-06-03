/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { KendoReactComponentBaseProps } from '@progress/kno-react-common';
import * as React from 'react';
/**
 * The props of the GridColumnMenuItemContent component.
 */
export interface GridColumnMenuItemContentProps extends KendoReactComponentBaseProps {
    /**
     * The `show` state of the component. Each change is animated with the Reveal animation.
     */
    show: boolean;
}
/**
 * The GridColumnMenuItemContent that will be used inside the Grid ColumnMenu.
 */
export declare const GridColumnMenuItemContent: (props: GridColumnMenuItemContentProps) => React.JSX.Element;
