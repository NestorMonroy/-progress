/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { UploadAsyncProps } from './interfaces/UploadAsyncProps';
import * as React from 'react';
/**
 * @hidden
 */
export interface UploadInputProps {
    async: UploadAsyncProps;
    multiple?: boolean;
    disabled?: boolean;
    accept?: string;
    hasFiles?: boolean;
    ariaLabelledBy?: string;
    ariaDescribedBy?: string;
    id?: string;
    onAdd?: (files: FileList) => void;
    onMouseDown?: (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
}
/**
 * @hidden
 */
export declare class UploadInput extends React.Component<UploadInputProps, {}> {
    private _input;
    get actionElement(): HTMLInputElement | null;
    onMouseDown: (e: any) => void;
    onAdd: () => void;
    render(): React.JSX.Element;
}
