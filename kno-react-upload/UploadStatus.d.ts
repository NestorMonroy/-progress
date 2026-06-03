/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as React from 'react';
/**
 * @hidden
 */
export interface UploadStatusProps {
    isUploading: boolean;
    isUploaded: boolean;
    isUploadFailed: boolean;
}
/**
 * @hidden
 */
export declare class UploadStatus extends React.Component<UploadStatusProps, {}> {
    render(): React.JSX.Element;
}
