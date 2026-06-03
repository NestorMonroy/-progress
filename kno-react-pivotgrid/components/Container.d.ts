/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as React from 'react';
/**
 * Represents the props of the [knoReact PivotGridContainer component](components/pivotgrid/api/pivotgridcontainer).
 */
export interface PivotGridContainerProps {
    /**
     * Sets the `id` property of the top-most element of the PivotGridContainer.
     */
    id?: string;
    /**
     * Sets the `tabIndex` property of the top-most element of the PivotGridContainer.
     */
    tabIndex?: number;
    /**
     * Sets the `className` property of the top-most element of the PivotGridContainer in addition to the default `k-d-flex k-pos-relative` class.
     */
    className?: string;
    /**
     * Sets the `children` property of the top-most element of the PivotGridContainer.
     */
    children?: React.ReactNode;
    /**
     * Sets the `style` property of the top-most element of the PivotGridContainer.
     */
    style?: React.CSSProperties;
    /**
     * Sets the configurator position in the container.
     * The available values are:
     * - top
     * - left
     * - right
     * - bottom
     *
     * @default 'right'
     */
    configuratorPosition?: 'top' | 'left' | 'right' | 'bottom';
}
/**
 * Represents the object which is passed to the [`ref`](https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom) callback of the PivotGridContainer component.
 */
export interface PivotGridContainerHandle {
    /**
     * The DOM element of the PivotGridContainer component.
     */
    element: HTMLDivElement | null;
    /**
     * The properties passed to the PivotGridContainer component.
     */
    props: PivotGridContainerProps;
}
/**
 * Represents the [knoReact PivotGridContainer component](components/pivotgrid/api/pivotgridcontainerprops).
 *
 * @remarks
 * Supported children components are: {@link PivotGrid}, {@link PivotGridConfigurator}, {@link PivotGridConfiguratorButton}, {@link Loader}.
 */
export declare const PivotGridContainer: React.ForwardRefExoticComponent<PivotGridContainerProps & React.RefAttributes<PivotGridContainerHandle | null>>;
