/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { StoreAction } from './store.js';
/**
 * @hidden
 */
declare const optionsReducer: (currentState: any, action: StoreAction) => object;
/**
 * @hidden
 */
declare const themeReducer: (currentState: any, action: StoreAction) => any;
/**
 * @hidden
 */
declare const observersReducer: (currentState: any, action: StoreAction) => any;
export { optionsReducer, themeReducer, observersReducer };
