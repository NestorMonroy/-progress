/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { Group, Range, Slot, DateRange } from '../models/index.js';
/** @hidden */
export declare const toSlots: (_dateRange: DateRange, { step }: any, { groups, ranges }: {
    groups: Group[];
    ranges: Range[];
}) => Slot[];
