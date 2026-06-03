/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { ZonedDate } from '@progress/kno-date-math';
import { Item } from './Item.js';
import { Group } from './Group.js';
import { Range } from './Range.js';
import { SchedulerSlotHandle } from '../slots/SchedulerSlot.js';
/** @hidden */
export interface Slot {
    /** @hidden */
    _ref: React.RefObject<SchedulerSlotHandle | null>;
    /**
     * Represents the consecutive number of the slot in the current range.
     */
    index: number;
    /**
     * The `end` date of the slot.
     */
    start: Date;
    /**
     * The `end` date of the slot.
     */
    end: Date;
    /**
     * Represents the `start` Date in the provided timezone.
     *
     * For more information about timezones, refer to the [Scheduler TImezones](components/scheduler/timezones) article.
     */
    zonedStart: ZonedDate;
    /**
     * Represents the `end` Date in the provided timezone.
     *
     * For more information about timezones, refer to the [Scheduler TImezones](components/scheduler/timezones) article.
     */
    zonedEnd: ZonedDate;
    /**
     * A collection of all `items` which fits in the current slot.
     */
    items: Item[];
    /**
     * Represents the current group in which the slot is rendered.
     */
    group: Group;
    /**
     * Represents the current range in which the slot is rendered.
     */
    range: Range;
    /**
     * Represents if the slot is an `All-day` slot.
     */
    isAllDay?: boolean;
}
