/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { Store } from './store/store.js';
import { InstanceObserver } from '@progress/kno-charts';
import * as React from 'react';
/**
 * @hidden
 */
export interface MapContextType {
    optionsStore: Store;
    observersStore: Store;
    childrenObserver: InstanceObserver;
}
/**
 * @hidden
 */
export declare const MapContext: React.Context<MapContextType | null>;
