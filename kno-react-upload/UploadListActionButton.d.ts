/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { UploadFileStatus } from './interfaces/UploadFileStatus.js';
import { UploadAsyncProps } from './interfaces/UploadAsyncProps';
import { LocalizationService } from '@progress/kno-react-intl';
import * as React from 'react';
/**
 * @hidden
 */
export interface UploadListActionButtonProps {
    progress: number;
    uid: string;
    status: UploadFileStatus;
    async: UploadAsyncProps;
    disabled: boolean;
    onCancel: (uid: string) => void;
    onRemove: (uid: string) => void;
    onRetry: (uid: string) => void;
}
/**
 * @hidden
 */
export interface UploadListActionButtonState {
    retryFocused: boolean;
    actionFocused: boolean;
}
/**
 * @hidden
 */
export declare class UploadListActionButton extends React.Component<UploadListActionButtonProps, UploadListActionButtonState> {
    constructor(props: UploadListActionButtonProps);
    actionButtonTitle(status: UploadFileStatus, localizationService: LocalizationService): string;
    retryButtonTitle(localizationService: LocalizationService): string;
    buttonClassNames: (type: string) => string;
    onRetryFocus: () => void;
    onRetryBlur: () => void;
    onActionFocus: () => void;
    onActionBlur: () => void;
    onActionClick: () => void;
    onRetryClick: () => void;
    render(): React.JSX.Element;
}
