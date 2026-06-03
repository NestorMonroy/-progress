/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as React from 'react';
/**
 * @hidden
 */
export interface Setter<T> extends Array<any> {
    0?: T;
    [index: number]: any;
}
/**
 * @hidden
 */
export declare const useInheritedContextState: <T>(context: React.Context<[T | undefined, (...event: Setter<T>) => void]>, defaultValue?: any) => [T, (...event: Setter<T>) => void];
/**
 * @hidden
 */
export declare const useInheritedState: <T>(state: [T | undefined, (...event: Setter<T>) => void], defaultValue?: any) => [T, (...event: Setter<T>) => void];
