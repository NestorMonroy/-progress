/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { default as PropTypes } from 'prop-types';
import { GroupedFiles } from './interfaces/FileGroup';
import { UploadFileInfo } from './interfaces/UploadFileInfo';
import { UploadFileStatus } from './interfaces/UploadFileStatus.js';
import { XHRResponseData } from './utils/connectionUtils.js';
import { UploadProps } from './interfaces/UploadProps';
import * as React from 'react';
/**
 * @hidden
 */
interface UploadState {
    files: Array<UploadFileInfo>;
}
export declare class Upload extends React.Component<UploadProps, UploadState> {
    /**
     * @hidden
     */
    static defaultProps: UploadProps;
    /**
     * @hidden
     */
    static propTypes: {
        autoUpload: PropTypes.Requireable<boolean>;
        batch: PropTypes.Requireable<boolean>;
        withCredentials: PropTypes.Requireable<boolean>;
        saveField: PropTypes.Requireable<string>;
        saveHeaders: PropTypes.Requireable<object>;
        saveMethod: PropTypes.Requireable<string>;
        saveUrl: PropTypes.Requireable<NonNullable<string | ((...args: any[]) => any) | null | undefined>>;
        responseType: PropTypes.Requireable<string>;
        removeField: PropTypes.Requireable<string>;
        removeHeaders: PropTypes.Requireable<object>;
        removeMethod: PropTypes.Requireable<string>;
        removeUrl: PropTypes.Requireable<NonNullable<string | ((...args: any[]) => any) | null | undefined>>;
        multiple: PropTypes.Requireable<boolean>;
        disabled: PropTypes.Requireable<boolean>;
        showFileList: PropTypes.Requireable<boolean>;
        showActionButtons: PropTypes.Requireable<boolean>;
        actionsLayout: PropTypes.Requireable<string>;
        tabIndex: PropTypes.Requireable<number>;
        accept: PropTypes.Requireable<string>;
        listItemUI: PropTypes.Requireable<NonNullable<string | ((...args: any[]) => any) | PropTypes.InferProps<{
            render: PropTypes.Validator<(...args: any[]) => any>;
        }> | null | undefined>>;
        restrictions: PropTypes.Requireable<PropTypes.InferProps<{
            allowedExtensions: PropTypes.Requireable<(string | null | undefined)[]>;
            maxFileSize: PropTypes.Requireable<number>;
            minFileSize: PropTypes.Requireable<number>;
        }>>;
        files: PropTypes.Requireable<(PropTypes.InferProps<{
            uid: PropTypes.Requireable<string>;
            name: PropTypes.Requireable<string>;
            extension: PropTypes.Requireable<string>;
            size: PropTypes.Requireable<number>;
            validationErrors: PropTypes.Requireable<(string | null | undefined)[]>;
            status: PropTypes.Requireable<UploadFileStatus>;
            progress: PropTypes.Requireable<number>;
            getRawFile: PropTypes.Requireable<(...args: any[]) => any>;
        }> | null | undefined)[]>;
        defaultFiles: PropTypes.Requireable<(PropTypes.InferProps<{
            uid: PropTypes.Requireable<string>;
            name: PropTypes.Requireable<string>;
            extension: PropTypes.Requireable<string>;
            size: PropTypes.Requireable<number>;
            validationErrors: PropTypes.Requireable<(string | null | undefined)[]>;
            status: PropTypes.Requireable<UploadFileStatus>;
            progress: PropTypes.Requireable<number>;
            getRawFile: PropTypes.Requireable<(...args: any[]) => any>;
        }> | null | undefined)[]>;
    };
    private _https;
    private _lastEmittedState;
    private readonly invoke;
    private get async();
    private _uploadNavigation;
    private get files();
    private get isControlled();
    private get isCustomSave();
    private get isCustomRemove();
    private get fileStateCopy();
    private readonly showLicenseWatermark;
    private readonly licenseMessage?;
    /**
     * @hidden
     */
    componentDidUpdate(): void;
    constructor(props: UploadProps);
    /**
     * @hidden
     */
    get actionElement(): HTMLInputElement | null | undefined;
    /**
     * @hidden
     */
    focus: () => void;
    /**
     * Upload the selected files. Usable when the upload action is triggered by external code.
     */
    triggerUpload: () => void;
    /**
     * @hidden
     */
    uploadFiles: (filesForUpload: GroupedFiles) => void;
    /**
     * @hidden
     */
    removeFiles: (filesForRemove: GroupedFiles) => void;
    /**
     * @hidden
     */
    onUpload: () => void;
    /**
     * @hidden
     */
    onAdd: (files: FileList) => void;
    /**
     * @hidden
     */
    setFilesProgress(filesWithProgress: UploadFileInfo[], percentComplete: number): void;
    /**
     * @hidden
     */
    onUploadProgress: (uid: string, event: ProgressEvent) => void;
    /**
     * @hidden
     */
    onUploadSuccess: (uid: string, event?: XHRResponseData) => void;
    /**
     * @hidden
     */
    onUploadError: (uid: string, event?: XHRResponseData) => void;
    /**
     * @hidden
     */
    onRemove: (uid: string) => void;
    /**
     * @hidden
     */
    onRemoveSuccess: (uid: string, event?: XHRResponseData) => void;
    /**
     * @hidden
     */
    onRemoveError: (uid: string, event?: XHRResponseData) => void;
    /**
     * @hidden
     */
    onRetry: (uid: string) => void;
    /**
     * @hidden
     */
    onCancel: (uid: string) => void;
    /**
     * @hidden
     */
    onClear: () => void;
    /**
     * @hidden
     */
    render(): React.JSX.Element;
}
export {};
