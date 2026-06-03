/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { BaseEvent } from '@progress/kno-react-common';
import { RadioGroupHandle } from '../RadioGroup.js';
/**
 * The arguments for the `onChange` RadioGroup event.
 */
export interface RadioGroupChangeEvent extends BaseEvent<RadioGroupHandle> {
    /**
     * The value of the selected RadioButton.
     */
    value: any;
}
