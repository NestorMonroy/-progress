/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { BaseEvent } from '@progress/kno-react-common';
import { NumericTextBoxHandle } from './NumericTextBoxHandle';
/**
 * The arguments for the `change` event of the NumericTextBox.
 */
export interface NumericTextBoxChangeEvent extends BaseEvent<NumericTextBoxHandle> {
    /**
     * The current value of the NumericTextBox.
     */
    value: number | null;
}
