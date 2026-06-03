/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { UploadUIProps } from './UploadUI.js';
import * as React from 'react';
/**
 * @hidden
 */
export declare class UploadNavigation extends React.Component<UploadUIProps, {}> {
    private _uploadUI;
    private _navIndex;
    private _blurTimeout;
    private get navIndex();
    private set navIndex(value);
    get actionElement(): HTMLInputElement | null | undefined;
    constructor(props: UploadUIProps);
    componentDidUpdate(prevProps: UploadUIProps): void;
    focus: () => void;
    onKeyDown: (event: React.KeyboardEvent, isRtl: boolean) => void;
    onCancel: (uid: string) => void;
    onClear: () => void;
    onUpload: () => void;
    onRetry: (uid: string) => void;
    onRemove: (uid: string) => void;
    onAdd: (files: FileList) => void;
    onClick: (navIndex: number) => void;
    onFocus: () => void;
    onBlurTimeout: () => void;
    onBlur: () => void;
    render(): React.JSX.Element;
}
