/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
/**
 * @hidden
 */
export declare const THROTTLE_MS: number;
/**
 * @hidden
 */
export interface StoreAction {
    chartKey?: string;
    chartCollectionIdxKey?: string;
    type?: string;
    payload: any;
}
/**
 * @hidden
 */
export interface Store {
    getState(): any;
    dispatch(action: StoreAction | object): void;
    subscribe(f: Function): Function;
}
/**
 * @hidden
 */
export declare const createStore: (reducer: any) => Store;
