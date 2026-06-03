/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { BaseEvent } from '@progress/kno-react-common';
import { RadioButtonHandle } from '../RadioButton.js';
/**
 * The arguments for the `onChange` RadioButton event.
 */
export interface RadioButtonChangeEvent extends BaseEvent<RadioButtonHandle> {
    /**
     * The value of the selected RadioButton.
     */
    value: any;
}
