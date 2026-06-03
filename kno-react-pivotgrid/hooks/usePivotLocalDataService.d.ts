/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { PivotGridAxis, Measure, Dimension } from '@progress/kno-pivotgrid-common';
import { SortDescriptor, FilterDescriptor } from '@progress/kno-data-query';
import { PivotGridProps } from '../PivotGrid.js';
import { PivotGridConfiguratorProps } from '../components/Configurator.js';
/**
 * Represents the arguments of the [usePivotLocalDataService](components/pivotgrid/api/usepivotlocaldataservice) hook.
 */
export interface PivotLocalDataServiceArgs {
    /**
     * Represents the dimensions object of the [usePivotLocalDataService](components/pivotgrid/api/usepivotlocaldataservice) hook and the [PivotLocalDataService](components/pivotgrid/api/pivotlocaldataservice) component.
     */
    dimensions: {
        [key: string]: Dimension;
    };
    /**
     * Represents the measures collection of the [usePivotLocalDataService](components/pivotgrid/api/usepivotlocaldataservice) hook and the [PivotLocalDataService](components/pivotgrid/api/pivotlocaldataservice) component.
     */
    measures: Measure[];
    /**
     * Represents the local data of the [usePivotLocalDataService](components/pivotgrid/api/usepivotlocaldataservice) hook and the [PivotLocalDataService](components/pivotgrid/api/pivotlocaldataservice) component.
     */
    data: any[];
    /**
     * Represents the  default column axes configuration of the [usePivotLocalDataService](components/pivotgrid/api/usepivotlocaldataservice) hook and the [PivotLocalDataService](components/pivotgrid/api/pivotlocaldataservice) component.
     */
    defaultColumnAxes: PivotGridAxis[];
    /**
     * Represents the default row axes configuration of the [usePivotLocalDataService](components/pivotgrid/api/usepivotlocaldataservice) hook and the [PivotLocalDataService](components/pivotgrid/api/pivotlocaldataservice) component.
     */
    defaultRowAxes: PivotGridAxis[];
    /**
     * Represents the default measure axes configuration of the [usePivotLocalDataService](components/pivotgrid/api/usepivotlocaldataservice) hook and the [PivotLocalDataService](components/pivotgrid/api/pivotlocaldataservice) component.
     */
    defaultMeasureAxes: PivotGridAxis[];
    /**
     * Represents the default sort descriptors of the [usePivotLocalDataService](components/pivotgrid/api/usepivotlocaldataservice) hook and the [PivotLocalDataService](components/pivotgrid/api/pivotlocaldataservice) component.
     */
    defaultSort: SortDescriptor[];
    /**
     * Represents the default filter descriptors of the [usePivotLocalDataService](components/pivotgrid/api/usepivotlocaldataservice) hook and the [PivotLocalDataService](components/pivotgrid/api/pivotlocaldataservice) component.
     */
    defaultFilter: FilterDescriptor[];
}
/**
 * Represents the `state` of the [usePivotLocalDataService](components/pivotgrid/api/usepivotlocaldataservice) hook and the [PivotLocalDataService](components/pivotgrid/api/pivotlocaldataservice) component.
 */
export interface PivotLocalDataServiceState {
    /**
     * Represents the `PivotGrid` component props.
     */
    pivotProps: PivotGridProps;
    /**
     * Represents the `PivotGridConfigurator` component props.
     */
    configuratorProps: PivotGridConfiguratorProps;
    /**
     * Represents an object containing additional state data.
     */
    state: {
        loading: boolean;
    };
}
/**
 * A [custom React hook](https://https://react.dev/learn/reusing-logic-with-custom-hooks) which provides data-binding to local data.
 */
export declare const usePivotLocalDataService: (args: PivotLocalDataServiceArgs) => PivotLocalDataServiceState;
/**
 * Represents the properties of the [PivotLocalDataService](components/pivotgrid/api/pivotlocaldataservice) component.
 */
export interface PivotLocalDataServiceProps extends PivotLocalDataServiceArgs {
    /**
     * Represents the children prop of the [PivotLocalDataService](components/pivotgrid/api/pivotlocaldataservice) component.
     */
    children: (args: PivotLocalDataServiceState) => any;
}
/**
 * A [React higher-order component](https://reactjs.org/docs/higher-order-components.html) which provides data-binding to local data.
 */
export declare const PivotLocalDataService: (props: PivotLocalDataServiceProps) => any;
