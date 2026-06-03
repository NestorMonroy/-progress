/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { ZonedDate } from '@progress/kno-date-math';
/** @hidden */
export interface Range {
    index: number;
    start: Date;
    end: Date;
    zonedStart: ZonedDate;
    zonedEnd: ZonedDate;
    isAllDay?: boolean;
}
