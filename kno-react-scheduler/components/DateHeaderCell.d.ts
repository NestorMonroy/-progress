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
 * Represents the properties of [DateHeaderCell](components/scheduler/api/dateheadercell) component.
 */
export interface DateHeaderCellProps extends React.HTMLAttributes<HTMLDivElement> {
    /** @hidden */
    as?: React.ComponentType<DateHeaderCellProps>;
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
export interface DateHeaderCellHandle {
    /**
     * The current element or `null` if there is no one.
     */
    element: HTMLElement | null;
    /**
     * The props values of the DateHeaderCell.
     */
    props: DateHeaderCellProps;
}
/**
 * Represents the DateHeaderCell component.
 */
export declare const DateHeaderCell: React.ForwardRefExoticComponent<DateHeaderCellProps & React.RefAttributes<DateHeaderCellHandle | null>>;
export declare const dateHeaderCellDefaultProps: {
    as: React.ForwardRefExoticComponent<DateHeaderCellProps & React.RefAttributes<unknown>>;
    format: string;
};
