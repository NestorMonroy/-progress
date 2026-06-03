/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { DateRange } from './DateRange';
import { GanttSlotType } from './GanttSlotType';
/**
 * @hidden
 */
export interface Slot {
    range: DateRange;
    isWork: boolean;
    span: number;
    text: string;
    type: GanttSlotType;
}
