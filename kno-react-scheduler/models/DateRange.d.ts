/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { IntlService } from '@progress/kno-react-intl';
import { ZonedDate } from '@progress/kno-date-math';
/** @hidden */
export interface DateRange {
    start: Date;
    end: Date;
    zonedStart: ZonedDate;
    zonedEnd: ZonedDate;
}
/** @hidden */
export interface SchedulerRangeArgs {
    intl: IntlService;
    date: Date;
    numberOfDays?: any;
    timezone?: string;
}
/** @hidden */
export type SchedulerRange = (args: SchedulerRangeArgs) => DateRange;
