/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { CustomComponent, IconProps as KendoIconProps, KendoMouse, SvgIconProps } from '@progress/kno-react-common';
import * as React from 'react';
/**
 * Represents the props of the [knoReact PivotGridConfiguratorButton component](components/pivotgrid/api/pivotgridconfiguratorbutton).
 */
export interface PivotGridConfiguratorButtonProps extends KendoMouse<PivotGridConfiguratorButtonHandle, HTMLDivElement> {
    /**
     * Sets the `className` property of the top-most element of the PivotGridConfiguratorButton in addition to the default `k-pivotgrid-configurator-button` class.
     */
    className?: string;
    /**
     * Sets the `id` property of the top-most element of the PivotGridConfiguratorButton.
     */
    id?: string;
    /**
     * Sets the `tabIndex` property of the top-most element of the PivotGridConfiguratorButton.
     */
    tabIndex?: number;
    /**
     * Sets the `style` property of the top-most element of the PivotGridConfiguratorButton.
     */
    style?: React.CSSProperties;
    /**
     * Overrides the default `icon` component.
     *
     * The default component is: [KendoReactIcon](components/common/api/icon).
     */
    icon?: CustomComponent<KendoIconProps & SvgIconProps>;
    /**
     * Fires when the user clicks the PivotGridConfiguratorButton.
     */
    onClick?: (args: any) => void;
    /**
     * Fires when the user double-clicks the PivotGridConfiguratorButton.
     */
    onDoubleClick?: (args: any) => void;
    /**
     * Fires when the user presses a mouse button while the cursor is over the PivotGridConfiguratorButton.
     */
    onMouseDown?: (args: any) => void;
    /**
     * Fires when the cursor enters the PivotGridConfiguratorButton area.
     */
    onMouseEnter?: (args: any) => void;
    /**
     * Fires when the cursor leaves the PivotGridConfiguratorButton area.
     */
    onMouseLeave?: (args: any) => void;
    /**
     * Fires when the cursor moves within the PivotGridConfiguratorButton area.
     */
    onMouseMove?: (args: any) => void;
    /**
     * Fires when the cursor moves outside the PivotGridConfiguratorButton area.
     */
    onMouseOut?: (args: any) => void;
    /**
     * Fires when the cursor moves over the PivotGridConfiguratorButton area.
     */
    onMouseOver?: (args: any) => void;
    /**
     * Fires when the user releases a mouse button while the cursor is over the PivotGridConfiguratorButton.
     */
    onMouseUp?: (args: any) => void;
}
/**
 * Represents the object which is passed to the [`ref`](https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom) callback of the PivotGridConfiguratorButton component.
 */
export interface PivotGridConfiguratorButtonHandle {
    /**
     * The properties passed to the PivotGridConfiguratorButton component.
     */
    props: PivotGridConfiguratorButtonProps;
    /**
     * The DOM element of the PivotGridConfiguratorButton component.
     */
    element: HTMLDivElement | null;
}
/**
 * Represents the [knoReact PivotGridConfiguratorButton component](components/pivotgrid/api/pivotgridconfiguratorbuttonprops).
 */
export declare const PivotGridConfiguratorButton: React.ForwardRefExoticComponent<PivotGridConfiguratorButtonProps & React.RefAttributes<PivotGridConfiguratorButtonHandle | null>>;
