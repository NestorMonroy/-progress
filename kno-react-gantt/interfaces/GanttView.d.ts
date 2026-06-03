/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { LocalizationService, IntlService } from '@progress/kno-react-intl';
import { Day } from '@progress/kno-date-math';
import { DateRange } from './DateRange';
import { GanttViewTimelineHeaderCellProps } from './GanttViewTimelineHeaderCellProps';
/**
 * Represents the arguments which are passed to the [dateRange](components/gantt/api/ganttviewprops#toc-daterange) function.
 */
export interface GanttViewDateRangeArgs {
    /**
     * The earliest start date among all tasks.
     */
    tasksStart: Date;
    /**
     * The latest end date among all tasks.
     */
    tasksEnd: Date;
    /**
     * The internationalization service for date formatting and localization.
     */
    intl: IntlService;
    /**
     * The timezone identifier for date calculations.
     */
    timezone?: string;
    /**
     * The number of days to include in the date range calculation.
     */
    numberOfDays?: number;
}
export type GanttViewDateRangeFunction = (args: GanttViewDateRangeArgs) => DateRange;
/**
 * Represents the Object which is passed to the [`ref`](https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom) callback of the GanttView component.
 */
export interface GanttViewHandle {
    /**
     * Method to allow the scroll to be set to a specific row index.
     */
    scrollIntoView: (options: {
        rowIndex?: number;
    }) => void;
}
/**
 * Represents the required props which every [GanttView](components/gantt/api/ganttview) must accept.
 */
export interface GanttViewProps {
    /**
     * The name property is used by the Gantt to match which view is selected. Every view has a default name.
     *
     * @example
     * ```jsx
     * <GanttView name="dayView" />
     * ```
     */
    name?: string;
    /**
     * The title to be displayed in the view selection list in the Toolbar.
     * If a function is passed, it will receive a [LocalizationService](components/intl/api/localizationservice) as an argument.
     *
     * @example
     * ```jsx
     * <GanttView title="Day View" />
     * <GanttView title={(localization) => localization.toLanguageString('custom.title', 'Custom Title')} />
     * ```
     */
    title?: string | ((localization: LocalizationService) => string);
    /**
     * The width of a single time slot in pixels. Default is 100px.
     *
     * @default 100
     *
     * @example
     * ```jsx
     * <GanttView slotWidth={120} />
     * ```
     */
    slotWidth?: number;
    /**
     * Overrides the `dateRange` calculated by the `Gantt` component.
     *
     * If a function is passed, an object of type [GanttViewDateRangeArgs](components/gantt/api/ganttviewdaterangeargs) will be passed.
     *
     * @example
     * ```jsx
     * <GanttView dateRange={{ start: new Date(2023, 0, 1), end: new Date(2023, 0, 31) }} />
     * <GanttView dateRange={(args) => ({ start: args.tasksStart, end: args.tasksEnd })} />
     * ```
     */
    dateRange?: DateRange | ((args: GanttViewDateRangeArgs) => DateRange);
    /**
     * Sets the start of the work day.
     *
     * @example
     * ```jsx
     * <GanttView workDayStart="08:00" />
     * ```
     */
    workDayStart?: string;
    /**
     * Sets the end of the work day.
     *
     * @example
     * ```jsx
     * <GanttView workDayEnd="17:00" />
     * ```
     */
    workDayEnd?: string;
    /**
     * The start of the work week.
     *
     * @example
     * ```jsx
     * <GanttView workWeekStart={Day.Monday} />
     * ```
     */
    workWeekStart?: Day;
    /**
     * The end of the work week.
     *
     * @example
     * ```jsx
     * <GanttView workWeekEnd={Day.Friday} />
     * ```
     */
    workWeekEnd?: Day;
    /**
     * The component to be rendered in header cells of the timeline part of the Gantt.
     *
     * @example
     * ```jsx
     * <GanttView timelineHeaderCell={CustomHeaderCell} />
     * ```
     */
    timelineHeaderCell?: React.ComponentType<GanttViewTimelineHeaderCellProps>;
    /** @hidden */
    firstSlotRangeRef?: React.MutableRefObject<DateRange | null>;
}
/**
 * Represents a single Gantt view.
 */
export type GanttView = React.ReactElement<GanttViewProps>;
