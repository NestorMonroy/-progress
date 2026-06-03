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
export interface RecurrenceFrequencyEditorProps extends ButtonGroupProps {
    value: string;
    data: any[];
    onChange: (value: string) => void;
}
/** @hidden */
export declare const RecurrenceFrequencyEditor: React.FunctionComponent<RecurrenceFrequencyEditorProps>;
