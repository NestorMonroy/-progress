/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { BaseUploadEvent } from './BaseUploadEvent';
import { Upload } from '../Upload.js';
/**
 * The `onCancel` event.
 */
export interface UploadOnCancelEvent extends BaseUploadEvent<Upload> {
    /**
     * The unique identifier of the group (batch) of one or more files that is cancelled.
     */
    uid: string;
}
