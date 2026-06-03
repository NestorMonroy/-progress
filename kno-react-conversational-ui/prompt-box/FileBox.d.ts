/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { UploadFileInfo } from '@progress/kno-react-upload';
import * as React from 'react';
/**
 * @hidden
 */
export interface FileBoxProps {
    files: UploadFileInfo[];
    onRemoveFile: (fileName: string) => void;
    header?: React.ReactNode | (() => React.ReactNode);
}
/**
 * @hidden
 * Displays the list of selected files with remove functionality.
 */
export declare const FileBox: React.FC<FileBoxProps>;
