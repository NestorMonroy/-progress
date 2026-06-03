/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { BaseEvent } from '@progress/kno-react-common';
import { SignatureHandle } from './SignatureHandle';
/**
 * The arguments for the `onClose` Signature event.
 */
export interface SignatureCloseEvent extends BaseEvent<SignatureHandle> {
}
