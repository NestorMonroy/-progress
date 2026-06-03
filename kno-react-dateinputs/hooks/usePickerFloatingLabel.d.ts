/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { FloatingLabelProps } from '@progress/kno-react-labels';
import { DateInputHandle } from '../dateinput/DateInput.js';
import * as React from 'react';
/**
 * @hidden
 */
export type PickerFloatingLabelProps = FloatingLabelProps & {
    dateInput: React.RefObject<DateInputHandle | null>;
    children?: React.ReactNode;
};
/**
 * @hidden
 */
export declare const usePickerFloatingLabel: (dateInput: React.RefObject<DateInputHandle | null>) => {
    editorValue: boolean;
};
/**
 * @hidden
 */
export declare const PickerFloatingLabel: (props: PickerFloatingLabelProps) => React.JSX.Element;
