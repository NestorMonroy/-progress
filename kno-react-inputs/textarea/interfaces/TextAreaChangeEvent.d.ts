/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { TextAreaHandle } from './../TextArea.js';
import { BaseEvent } from '@progress/kno-react-common';
/**
 * The arguments for the `onChange` TextArea event.
 */
export interface TextAreaChangeEvent extends BaseEvent<TextAreaHandle> {
    /**
     * The new value of the TextArea.
     */
    value: string;
}
