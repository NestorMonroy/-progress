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
export interface StoreAction {
    mapKey?: string;
    mapCollectionIdxKey?: string;
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
declare const createStore: (reducer: any) => Store;
export default createStore;
