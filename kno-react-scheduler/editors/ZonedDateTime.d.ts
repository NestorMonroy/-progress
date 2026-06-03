/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { DatePickerOpenEvent, DatePickerCloseEvent, DatePickerProps, DateTimePickerCloseEvent, DateTimePickerOpenEvent, DateTimePickerProps } from '@progress/kno-react-dateinputs';
import { Omit } from '../models/Omit';
import * as React from 'react';
/**
 * @hidden
 */
export type ZonedDateTimeProps = Omit<DatePickerProps | DateTimePickerProps, 'onChange' | 'calendar'> & {
    as?: React.ComponentType<DatePickerProps | DateTimePickerProps>;
    onChange?: (args: {
        value: Date | null;
    }) => void;
    onOpen?: (args: DatePickerOpenEvent | DateTimePickerOpenEvent) => void;
    onClose?: (args: DatePickerCloseEvent | DateTimePickerCloseEvent) => void;
};
/**
 * @hidden
 */
export declare const ZonedDateTime: (props: ZonedDateTimeProps) => React.JSX.Element;
