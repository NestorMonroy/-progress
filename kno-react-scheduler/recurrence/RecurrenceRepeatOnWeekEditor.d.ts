/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { ButtonGroupProps } from '@progress/kno-react-buttons';
import * as React from 'react';
/** @hidden */
export interface RecurrenceRepeatOnWeekEditorProps extends ButtonGroupProps {
    data?: {
        text: string;
        value: number | string;
    }[];
    value?: (number | string)[];
    onChange: (value: number[]) => void;
}
/** @hidden */
export declare const RecurrenceRepeatOnWeekEditor: React.FunctionComponent<RecurrenceRepeatOnWeekEditorProps>;
