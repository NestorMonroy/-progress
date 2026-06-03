/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { UploadFileInfo } from './interfaces/UploadFileInfo';
import { UploadListItemProps } from './interfaces/UploadListItemProps';
import * as React from 'react';
/**
 * @hidden
 */
export declare class UploadListSingleItem extends React.Component<UploadListItemProps, {}> {
    /**
     * @hidden
     */
    getFileExtension(file: UploadFileInfo): string;
    /**
     * @hidden
     */
    getFileValidationMessage(file: UploadFileInfo, isUploadFailed: boolean): string;
    /**
     * @hidden
     */
    renderValidationError(file: UploadFileInfo, isUploadFailed: boolean): React.JSX.Element;
    /**
     * @hidden
     */
    renderFileDetails(file: UploadFileInfo): React.JSX.Element;
    /**
     * @hidden
     */
    render(): React.JSX.Element;
}
