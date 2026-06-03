/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { DataItem } from '../../models/index.js';
/**
 * Represents the available `action` types for the `SchedulerItemSeriesAction` objects.
 *
 * The available actions are:
 * - `SERIES_RESET`
 * - `SERIES_SET`
 * - `SERIES_TOGGLE`
 */
export declare enum SERIES_ACTION {
    reset = "SERIES_RESET",
    set = "SERIES_SET",
    toggle = "SERIES_TOGGLE"
}
/**
 * Represents the object passed to the `series` reducer.
 */
export type SchedulerItemSeriesAction = {
    type: SERIES_ACTION;
    payload?: boolean;
};
/** @hidden */
export declare const useSeries: (defaultProp: DataItem, prop?: DataItem, callback?: any) => any[];
