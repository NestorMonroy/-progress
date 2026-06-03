/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { CheckboxHandle } from './../Checkbox.js';
import { BaseEvent } from '@progress/kno-react-common';
/**
 * The arguments for the `onChange` Checkbox event.
 */
export interface CheckboxChangeEvent extends BaseEvent<CheckboxHandle> {
    /**
     * The new value of the Checkbox.
     */
    value: boolean;
}
