/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { DateFormatOptions } from '@progress/kno-react-intl';
import * as React from 'react';
/**
 * Represents the properties of [TimeHeaderCell](components/scheduler/api/timeheadercell) component.
 */
export interface TimeHeaderCellProps extends React.HTMLAttributes<HTMLDivElement> {
    /** @hidden */
    as?: React.ComponentType<TimeHeaderCellProps>;
    /**
     * Represents the date format.
     */
    format?: string | DateFormatOptions;
    /**
     * Represents the current date.
     */
    date: Date;
    /**
     * Represents the start date.
     */
    start: Date;
    /**
     * Represents the end date.
     */
    end: Date;
}
/**
 * Represents the target(element and props).
 */
export interface TimeHeaderCellHandle {
    /**
     * The current element or `null` if there is no one.
     */
    element: HTMLElement | null;
    /**
     * The props values of the TimeHeaderCell.
     */
    props: TimeHeaderCellProps;
}
/**
 * Represents the TimeHeaderCell component.
 */
export declare const TimeHeaderCell: React.ForwardRefExoticComponent<TimeHeaderCellProps & React.RefAttributes<TimeHeaderCellHandle | null>>;
export declare const timeHeaderCellDefaultProps: {
    as: React.ForwardRefExoticComponent<TimeHeaderCellProps & React.RefAttributes<unknown>>;
    format: string;
};
