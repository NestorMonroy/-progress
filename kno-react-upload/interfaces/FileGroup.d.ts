/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { UploadFileInfo } from './UploadFileInfo';
/**
 * @hidden
 */
export interface GroupedFiles {
    [uid: string]: Array<UploadFileInfo>;
}
