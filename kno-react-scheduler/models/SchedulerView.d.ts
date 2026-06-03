/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { LocalizationService, IntlService } from '@progress/kno-react-intl';
import { DateRange } from './DateRange.js';
import { Day } from '@progress/kno-date-math';
import { DataAction } from '../Scheduler.js';
import { SchedulerFooterProps } from '../components/footer/SchedulerFooter.js';
import { SchedulerHeaderProps } from '../components/header/SchedulerHeader.js';
/**
 * Represents the arguments which are passed to the [dateRange](components/scheduler/api/schedulerviewprops#toc-daterange) function.
 */
export interface SchedulerViewDateRangeArgs {
    /**
     * The current date for the view.
     */
    date: Date;
    /**
     * The internationalization service instance.
     */
    intl: IntlService;
    /**
     * The timezone for the scheduler.
     */
    timezone?: string;
    /**
     * The number of days to display in the view.
     */
    numberOfDays?: number;
    /**
     * The start day of the work week.
     */
    workWeekStart?: Day;
    /**
     * The end day of the work week.
     */
    workWeekEnd?: Day;
}
export type SchedulerViewDateRangeFunction = (args: SchedulerViewDateRangeArgs) => DateRange;
/**
 * Represents the required props which every [SchedulerView](components/scheduler/api/schedulerview) must accept.
 */
export interface SchedulerViewProps {
    /**
     * The name property is used by the Scheduler to match which view is selected. Every view has a default name.
     */
    name?: string;
    /**
     * The title to be displayed in the view selection list in the Toolbar.
     * If a function is passed, it will receive a [LocalizationService](components/intl/api/localizationservice) as an argument
     */
    title?: string | ((localization: LocalizationService) => string);
    /**
     * Called every time any of the SchedulerView Slots or Items trigger a data action, through editing, deleting or creating new `DataItem`.
     */
    onDataAction?: (action: DataAction) => void;
    /**
     * Specifies the number of days to be shown in the current view.
     */
    numberOfDays?: number;
    /**
     * The long-date format for displaying the
     * selected date in the Scheduler toolbar.
     * Defaults to `{0:Y}`
     * ([more information](https://www.github.com/tlk/kno-intl/blob/develop/docs/date-formatting/index.md))
     */
    selectedDateFormat?: string;
    /**
     * The short-date format for displaying the
     * selected date in the Scheduler toolbar.
     * Defaults to `{0:Y}`
     * ([more information](https://www.github.com/tlk/kno-intl/blob/develop/docs/date-formatting/index.md))
     */
    selectedShortDateFormat?: string;
    /**
     * Overrides the `dateRange` calculated by the `Scheduler` component.
     *
     * If a function is passed, an object of type [SchedulerViewDateRangeArgs](components/scheduler/api/schedulerviewdaterangeargs) will be passed.
     */
    dateRange?: DateRange | ((args: SchedulerViewDateRangeArgs) => DateRange);
    /** @hidden */
    header?: React.ComponentType<SchedulerHeaderProps>;
    /** @hidden */
    footer?: React.ComponentType<SchedulerFooterProps>;
    /** @hidden */
    slotDivisions?: number;
    /** @hidden */
    slotDuration?: number;
    /** @hidden */
    workWeekStart?: Day;
    /** @hidden */
    workWeekEnd?: Day;
    /** @hidden */
    step?: number;
}
/**
 * Represents a single Scheduler view.
 */
export type SchedulerView = React.ReactElement<SchedulerViewProps>;
