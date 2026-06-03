/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
/** @hidden */
export type ControlledStateHook<T> = [T, (value: T, event?: any) => void];
/** @hidden */
export declare const useControlledState: <T extends unknown>(defaultProp: T, prop?: T | undefined, callback?: any) => ControlledStateHook<T>;
