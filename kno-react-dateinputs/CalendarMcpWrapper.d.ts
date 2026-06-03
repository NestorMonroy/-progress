/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { CalendarHandle, CalendarProps } from './calendar/components/Calendar.js';
/**
 * Calendar wrapper that integrates the Web MCP hook.
 *
 * @hidden
 */
import * as React from 'react';
/** @hidden */
export declare const CalendarWrapper: React.ForwardRefExoticComponent<CalendarProps<any> & React.RefAttributes<CalendarHandle>>;
