/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { ZonedDate } from '@progress/kno-date-math';
import { Slot } from './Slot.js';
import { Group } from './Group.js';
import { Range } from './Range.js';
import { Occurrence } from './Occurrence.js';
import { SchedulerItemHandle } from '../items/SchedulerItem.js';
import { SchedulerTaskHandle } from '../tasks/SchedulerTask.js';
/** @hidden */
export interface Item extends Occurrence {
    /** @hidden */
    _ref: React.RefObject<SchedulerItemHandle | SchedulerTaskHandle | null>;
    /**
     * Represents the `ref` of the actual `item`.
     */
    itemRef: React.RefObject<SchedulerItemHandle | SchedulerTaskHandle | null>;
    /**
     * Represents if the `end` of the item is outside the current visual range.
     */
    head: boolean;
    /**
     * Represents if the `start` of the item is outside the current visual range.
     */
    tail: boolean;
    /**
     * Represents the order of the item among its siblings.
     */
    order: number | null;
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
     * A collection of all `slots` in which the current item fits.
     */
    slots: Slot[];
    /**
     * Represents the current group in which the item is rendered.
     */
    group: Group;
    /**
     * Represents the current range in which the item is rendered.
     */
    range: Range;
    /**
     * Represents if the item is an exception to a recurrence rule.
     */
    isException: boolean;
    /**
     * Represents if the item is a single occurrence of a recurring `DataItem`.
     */
    isRecurring: boolean;
    /**
     * Represents if the item durations is through the whole day.
     */
    isAllDay: boolean;
}
