/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { SVGIcon } from '@progress/kno-react-common';
import { ChatFile, Message } from '../../../index.js';
import { UploadFileInfo } from '@progress/kno-react-upload';
import * as React from 'react';
/**
 * @hidden
 */
export interface FileAction {
    id: string;
    label: string;
    icon?: string;
    svgIcon?: SVGIcon;
}
/**
 * @hidden
 */
export interface FileBoxProps {
    files: (ChatFile | UploadFileInfo)[];
    message?: Message;
    onFileRemove?: (fileName: string) => void;
    onFileAction?: (action: FileAction, event: React.SyntheticEvent<any>, target: ChatFile) => void;
    onDownload?: (files: ChatFile[]) => void;
    fileActions?: FileAction[];
    renderInTextarea?: boolean;
}
/**
 * @hidden
 */
declare const FileBox: React.FC<FileBoxProps>;
export default FileBox;
