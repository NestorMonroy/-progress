/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { UploadFileInfo } from './interfaces/UploadFileInfo';
import { UploadAsyncProps } from './interfaces/UploadAsyncProps';
import { UploadListItemProps } from './interfaces/UploadListItemProps';
import * as React from 'react';
/**
 * @hidden
 */
export interface UploadListGroupProps {
    files: Array<UploadFileInfo>;
    async: UploadAsyncProps;
    disabled: boolean;
    navigationIndex: number | undefined;
    listItemUI?: React.ComponentType<UploadListItemProps>;
    index: number;
    onCancel: (uid: string) => void;
    onRemove: (uid: string) => void;
    onRetry: (uid: string) => void;
    onClick: (navIndex: number | undefined) => void;
}
/**
 * @hidden
 */
export declare class UploadListGroup extends React.Component<UploadListGroupProps, {}> {
    private _element;
    componentDidUpdate(): void;
    onClick: () => void;
    render(): React.JSX.Element;
}
