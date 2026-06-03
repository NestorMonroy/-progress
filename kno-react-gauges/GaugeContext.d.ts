/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { Store } from './store/store.js';
import * as React from 'react';
/**
 * @hidden
 */
export interface GaugeContextType {
    observersStore: Store;
}
/**
 * @hidden
 */
export declare const GaugeContext: React.Context<GaugeContextType | null>;
