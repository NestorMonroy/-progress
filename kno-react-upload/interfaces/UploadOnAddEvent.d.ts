/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { BaseUploadEvent } from './BaseUploadEvent';
import { Upload } from '../Upload.js';
import { UploadFileInfo } from './UploadFileInfo';
/**
 * The `onAdd` event.
 */
export interface UploadOnAddEvent extends BaseUploadEvent<Upload> {
    /**
     * The new updated state candidate.
     */
    newState: Array<UploadFileInfo>;
    /**
     * The list of affected files.
     */
    affectedFiles: Array<UploadFileInfo>;
}
