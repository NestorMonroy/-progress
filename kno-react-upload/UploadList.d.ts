/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { GroupedFiles } from './interfaces/FileGroup';
import { UploadAsyncProps } from './interfaces/UploadAsyncProps';
import { UploadListItemProps } from './interfaces/UploadListItemProps';
import * as React from 'react';
/**
 * @hidden
 */
export interface UploadListProps {
    groupedFiles: GroupedFiles;
    async: UploadAsyncProps;
    disabled: boolean;
    navigationIndex?: number;
    listId?: string;
    listItemUI?: React.ComponentType<UploadListItemProps>;
    onCancel: (uid: string) => void;
    onRemove: (uid: string) => void;
    onRetry: (uid: string) => void;
    onClick: (navIndex: number | undefined) => void;
}
/**
 * @hidden
 */
export declare class UploadList extends React.Component<UploadListProps, {}> {
    mapListGroups(): React.JSX.Element[];
    render(): React.JSX.Element;
}
