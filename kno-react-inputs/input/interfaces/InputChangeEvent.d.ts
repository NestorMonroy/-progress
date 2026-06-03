/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { BaseEvent } from '@progress/kno-react-common';
import { InputHandle } from '../Input.js';
/**
 * The arguments for the `change` event of the Input.
 */
export interface InputChangeEvent extends BaseEvent<InputHandle> {
    /**
     * The current value of the Input.
     */
    value: string;
}
