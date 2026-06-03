/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
/**
 * Represents the combined object of the default and custom [modelFields](components/scheduler/api/schedulerprops#toc)
 */
export interface Fields {
    /**
     * The field name for the unique identifier.
     */
    id: string;
    /**
     * The field name for the start date and time.
     */
    start: string;
    /**
     * The field name for the start timezone.
     */
    startTimezone: string;
    /**
     * The field name for the original start date and time.
     */
    originalStart: string;
    /**
     * The field name for the end date and time.
     */
    end: string;
    /**
     * The field name for the end timezone.
     */
    endTimezone: string;
    /**
     * The field name indicating if the event is an all-day event.
     */
    isAllDay: string;
    /**
     * The field name for the event title.
     */
    title: string;
    /**
     * The field name for the event description.
     */
    description: string;
    /**
     * The field name for the recurrence rule.
     */
    recurrenceRule: string;
    /**
     * The field name for the recurrence identifier.
     */
    recurrenceId: string;
    /**
     * The field name for the recurrence exceptions.
     */
    recurrenceExceptions: string;
}
