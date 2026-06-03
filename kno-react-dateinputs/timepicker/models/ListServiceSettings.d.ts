/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { DateFormatPart } from '@progress/kno-react-intl';
/**
 * @hidden
 */
export interface ListServiceSettings {
    boundRange: boolean;
    insertUndividedMax: boolean;
    min: Date;
    max: Date;
    part: DateFormatPart;
    step: number;
}
