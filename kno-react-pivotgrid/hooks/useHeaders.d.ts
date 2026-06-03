/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { HeadersAction, PivotGridAxis, AxisDataItem } from '@progress/kno-pivotgrid-common';
import * as React from 'react';
export { HEADERS_ACTION } from '@progress/kno-pivotgrid-common';
/**
 * @hidden
 */
export declare const useHeaders: (prop: PivotGridAxis[], tree: AxisDataItem, onChange?: ((value: PivotGridAxis[], event: React.SyntheticEvent) => void) | undefined) => [PivotGridAxis[], (action: Omit<HeadersAction, 'tree'>, event: React.SyntheticEvent) => void];
/**
 * @hidden
 */
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
