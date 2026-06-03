/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { IntlService } from '@progress/kno-react-intl';
import { WeekDaysFormat } from '../models/WeekDaysFormat';
/**
 * @hidden
 */
export declare class WeekNamesService {
    private intl;
    constructor(intl: IntlService);
    getWeekNames(includeWeekNumber?: boolean, weekDaysFormat?: WeekDaysFormat): string[];
}
