/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { StepHandle } from './StepHandle';
import { BaseEvent } from '@progress/kno-react-common';
/**
 * The arguments for the `onChange` Step event.
 */
export interface StepChangeEvent extends BaseEvent<StepHandle> {
    /**
     * The index of the selected Step.
     */
    value: number;
}
