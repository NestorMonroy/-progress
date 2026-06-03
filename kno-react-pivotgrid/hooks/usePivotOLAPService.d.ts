/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { PivotGridAxis } from '@progress/kno-pivotgrid-common';
import { SortDescriptor, FilterDescriptor } from '@progress/kno-data-query';
import { PivotGridProps } from '../PivotGrid.js';
import { PivotGridConfiguratorProps } from '../components/Configurator.js';
/**
 * Represents the arguments of the [usePivotOLAPService](components/pivotgrid/api/usepivotolapservice) hook.
 */
export interface PivotOLAPServiceArgs {
    /**
     * The URL of the OLAP service endpoint.
     */
    url: string;
    /**
     * The name of the cube to connect to.
     */
    cube: string;
    /**
     * The name of the catalog containing the cube.
     */
    catalog: string;
    /**
     * The default configuration of the column axes.
     */
    defaultColumnAxes?: PivotGridAxis[];
    /**
     * The default configuration of the row axes.
     */
    defaultRowAxes?: PivotGridAxis[];
    /**
     * The default configuration of the measure axes.
     */
    defaultMeasureAxes?: PivotGridAxis[];
    /**
     * The default sort descriptors.
     */
    defaultSort?: SortDescriptor[];
    /**
     * The default filter descriptors.
     */
    defaultFilter?: FilterDescriptor[];
}
/**
 * Represents the `state` of the [usePivotOLAPService](components/pivotgrid/api/usepivotolapservice) hook and the [PivotOLAPService](components/pivotgrid/api/pivotolapservice) component.
 */
export interface PivotOLAPServiceState {
    /**
     * Properties to pass to the `PivotGrid` component.
     */
    pivotProps: PivotGridProps;
    /**
     * Properties to pass to the `PivotGridConfigurator` component.
     */
    configuratorProps: PivotGridConfiguratorProps;
    /**
     * The loading state and other status information.
     */
    state: {
        loading: boolean;
    };
}
/**
 * A [custom React hook](https://https://react.dev/learn/reusing-logic-with-custom-hooks) which provides data-binding to an OLAP service.
 */
export declare const usePivotOLAPService: (args: PivotOLAPServiceArgs) => PivotOLAPServiceState;
/**
 * Represents the properties of the [PivotOLAPService](components/pivotgrid/api/pivotolapservice) component.
 */
export interface PivotOLAPServiceProps extends PivotOLAPServiceArgs {
    /**
     * A render prop function that receives the service state and returns JSX elements.
     */
    children: (args: PivotOLAPServiceState) => any;
}
/**
 * A [React higher-order component](https://reactjs.org/docs/higher-order-components.html) which provides data-binding to an OLAP service.
 */
export declare const PivotOLAPService: (props: PivotOLAPServiceProps) => any;
