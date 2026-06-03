/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { EditorToolsSettings } from './../config/toolsSettings.js';
import { TextSelection, EditorView } from '@progress/kno-editor-common';
import * as React from 'react';
interface FindAndReplaceDialogState {
    selectedTab: number;
    matches?: TextSelection[];
    nextMatch?: TextSelection;
    searchText: string;
    replaceText: string;
    matchCase: boolean;
    matchWord: boolean;
    matchCyclic: boolean;
    useRegExp: boolean;
    error?: string;
}
/**
 * @hidden
 */
export interface FindAndReplaceDialogProps {
    /**
     * The `EditorView` object.
     */
    view: EditorView;
    /**
     * The `settings` object of the Dialog.
     */
    settings?: EditorToolsSettings.FindReplaceSettings;
    /**
     * Represents the `dir` HTML attribute.
     */
    dir?: string;
    /**
     * The `close` event which will be triggered when the Dialog is about to be unmounted.
     */
    onClose: () => void;
}
/**
 * @hidden
 */
export declare class FindAndReplaceDialog extends React.Component<FindAndReplaceDialogProps, FindAndReplaceDialogState> {
    /**
     * @hidden
     */
    state: FindAndReplaceDialogState;
    private get settings();
    constructor(props: FindAndReplaceDialogProps);
    /**
     * @hidden
     */
    componentDidUpdate(_: FindAndReplaceDialogProps, prevState: FindAndReplaceDialogState): void;
    /**
     * @hidden
     */
    render(): React.JSX.Element;
    private onTabSelect;
    private onClose;
    private matchesMessage;
    private onFindNext;
    private onFindPrev;
    private onFind;
    private onReplace;
    private onReplaceAll;
    private onKeyDown;
    private onMatchCaseChecked;
    private onMatchWordChecked;
    private onMatchCyclicChecked;
    private onUseRegExpChecked;
    private onSearchChange;
    private onReplaceChange;
    private setNextState;
}
export {};
