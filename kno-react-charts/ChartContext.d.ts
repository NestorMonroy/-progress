/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { Store } from './store/store.js';
import { InstanceObserver } from '@progress/kno-charts';
import { ChartDrilldownState } from './api-types/chart-drilldown-state.interface';
import * as React from 'react';
/**
 * @hidden
 */
export interface ChartContextType {
    optionsStore: Store;
    observersStore: Store;
    childrenObserver: InstanceObserver;
    drilldownState: ChartDrilldownState;
}
/**
 * @hidden
 */
export declare const ChartContext: React.Context<ChartContextType | null>;
