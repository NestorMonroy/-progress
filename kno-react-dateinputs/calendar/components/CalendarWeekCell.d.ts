/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { DateInputsClassStructure } from '@progress/kno-react-common';
import * as React from 'react';
/**
 * The props which will be received by the custom week cell of the [Calendar](components/dateinputs/api/calendarprops#toc-weekcell) and the [MultiViewCalendar](components/dateinputs/api/multiviewcalendarprops#toc-weekcell).
 */
interface CalendarWeekCellProps {
    /** Unique identifier for the week cell element */
    id?: string;
    /** Week number value, null if not available */
    value?: number | null;
    /** Inline styles applied to the week cell */
    style?: React.CSSProperties;
    /** Child elements to render inside the week cell */
    children?: React.ReactNode;
    /** CSS class name for styling the week cell */
    className?: string;
    /** First date of the week represented by this cell */
    firstDate: Date;
    /** Array of dates representing all days in the week */
    weekDays?: Date[];
    /** Click event handler for the week cell */
    onClick?: (firstDate: Date, value: Date[], event: React.MouseEvent<HTMLTableCellElement>) => void;
    /**
     * @hidden
     */
    unstyled?: DateInputsClassStructure;
}
/**
 * The `CalendarWeekCell` component is internally used for rendering the week cells inside the `month` view of the Calendar. Also used as a [custom week cell for the Calendar](components/dateinputs/api/calendarprops#toc-weekcell) and the [MultiViewCalendar](components/dateinputs/api/multiviewcalendarprops#toc-weekcell) components.
 *
 * * [Customizing week-column cells in the Calendar](components/dateinputs/calendar/custom-rendering#toc-cells-inside-the-week-column)
 * * [Customizing week-column cells in the MultiViewCalendar](components/dateinputs/multiviewcalendar/custom-rendering#toc-cells-inside-the-week-column)
 */
declare const CalendarWeekCell: (props: CalendarWeekCellProps) => React.JSX.Element;
export { CalendarWeekCell, type CalendarWeekCellProps };
