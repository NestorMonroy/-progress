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
export declare class UploadListMultiItem extends React.Component<UploadListItemProps, {}> {
    /**
     * @hidden
     */
    getFileValidationMessage(file: UploadFileInfo): string;
    /**
     * @hidden
     */
    mapFiles: () => React.JSX.Element[];
    /**
     * @hidden
     */
    progress: () => number;
    render(): React.JSX.Element;
}
