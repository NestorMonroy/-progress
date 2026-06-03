/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { UploadAsyncProps } from './interfaces/UploadAsyncProps';
import { UploadSelectMessageProps } from './interfaces/UploadSelectMessageProps';
import * as React from 'react';
/**
 * @hidden
 */
export interface UploadAddButtonProps {
    addButtonIndex: number;
    navigationIndex: number | undefined;
    notFocusedIndex: number | undefined;
    tabIndex?: number;
    async: UploadAsyncProps;
    multiple?: boolean;
    disabled?: boolean;
    accept?: string;
    id?: string;
    ariaLabelledBy?: string;
    ariaDescribedBy?: string;
    ariaControls?: string;
    ariaExpanded?: boolean;
    hasFiles?: boolean;
    onAdd: (files: FileList) => void;
    onClick: (navIndex: number | undefined) => void;
    selectMessageUI?: React.ComponentType<UploadSelectMessageProps>;
}
/**
 * @hidden
 */
export declare class UploadAddButton extends React.Component<UploadAddButtonProps, {}> {
    private _element;
    private _uploadInput;
    get actionElement(): HTMLInputElement | null | undefined;
    componentDidUpdate(prevProps: UploadAddButtonProps): void;
    focus: () => void;
    onClick: () => void;
    onInputMouseDown: (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
    render(): React.JSX.Element;
}
