/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { BreadcrumbProps, DataModel } from '@progress/kno-react-layout';
import { ChartDrilldownState } from './api-types/chart-drilldown-state.interface';
import { DrilldownStateChangeEvent } from './events/drilldown-state-change-event.js';
import * as React from 'react';
/**
 * Represents the properties of [Chart Breadcrumb](components/charts/api/chartbreadcrumb) component.
 */
export interface ChartBreadcrumbProps extends Omit<BreadcrumbProps, 'data'> {
    /**
     * The definition of the breadcrumb root item.
     *
     * The default value is `{ text: 'Home', icon: <SvgIcon icon={homeIcon} /> }`.
     * Where `homeIcon` is imported from `@progress/kno-svg-icons`.
     */
    rootItem?: DataModel;
    /**
     * Fires when the user when the user has selected a different drilldown level.
     */
    onDrilldownStateChange?: (event: DrilldownStateChangeEvent) => void;
    /**
     * The current drilldown state of the Chart.
     */
    drilldownState?: ChartDrilldownState;
}
/**
 * Represents the Object which is passed to the
 * [`ref`](https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom) callback of the ChartBreadcrumb component.
 */
export interface ChartBreadcrumbHandle {
    /**
     * The current element or `null` if there is none.
     */
    element: HTMLDivElement | null;
    /**
     * The props values of the ChartBreadcrumb.
     */
    props: ChartBreadcrumbProps;
}
/**
 * Represents the Chart Breadcrumb component.
 */
export declare const ChartBreadcrumb: React.ForwardRefExoticComponent<ChartBreadcrumbProps & React.RefAttributes<ChartBreadcrumbHandle | null>>;
