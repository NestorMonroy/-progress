/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { CalendarViewEnum } from '../models/index.js';
import * as React from 'react';
/**
 * The props which will be received by the custom header title of the [Calendar](components/dateinputs/api/calendarprops#toc-headertitle) and the [MultiViewCalendar](components/dateinputs/api/multiviewcalendarprops#toc-headertitle).
 */
interface CalendarHeaderTitleProps {
    /** CSS class name for styling the header title */
    className?: string;
    /** Child elements to render inside the header title */
    children?: React.ReactNode;
    /** Text value displayed in the header title */
    value?: string;
    /** Unique identifier for the header title element */
    id?: string;
    /** Current calendar view type */
    view?: CalendarViewEnum;
    /** Inline styles applied to the header title */
    style?: React.CSSProperties;
    /** Click event handler for the header title */
    onClick?: (event?: React.SyntheticEvent<any>) => void;
    /** Whether the header title is disabled */
    disabled?: boolean;
}
/**
 * The `CalendarHeaderTitle` component is internally used for rendering the title of the current calendar view. Also used as a custom `headerTitle` for the [Calendar](components/dateinputs/api/calendarprops#toc-headertitle) and the [MultiViewCalendar](components/dateinputs/api/multiviewcalendarprops#toc-headertitle) components.
 *
 * * [Customizing the title for the current Calendar view](components/dateinputs/calendar/custom-rendering#toc-cells-inside-the-view)
 * * [Customizing the title for the current MultiViewCalendar view](components/dateinputs/multiviewcalendar/custom-rendering#toc-cells-inside-the-view)
 */
declare const CalendarHeaderTitle: (props: CalendarHeaderTitleProps) => React.JSX.Element;
export { CalendarHeaderTitle, type CalendarHeaderTitleProps };
