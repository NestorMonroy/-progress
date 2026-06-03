/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { default as PropTypes } from 'prop-types';
import { EditorView, Node } from '@progress/kno-editor-common';
import { EditorProps } from './EditorProps';
import * as React from 'react';
/**
 * @hidden
 */
interface EditorStateInterface {
    view?: EditorView;
    linkDialog?: boolean;
}
/**
 * Represents the [knoReact Editor component](components/editor).
 *
 * @example
 * ```jsx
 * const App = () => {
 *    return (
 *        <Editor
 *            defaultContent="<p>Hello World</p>"
 *            tools={[
 *               [ EditorTools.Bold, EditorTools.Italic ]
 *            ]}
 *        />
 *    );
 * }
 * ```
 */
export declare class Editor extends React.Component<EditorProps, EditorStateInterface> {
    /**
     * @hidden
     */
    static propTypes: {
        defaultContent: PropTypes.Requireable<string>;
        value: PropTypes.Requireable<NonNullable<string | object | null | undefined>>;
        defaultEditMode: PropTypes.Requireable<string>;
        contentStyle: PropTypes.Requireable<object>;
        dir: PropTypes.Requireable<string>;
        className: PropTypes.Requireable<string>;
        ariaDescribedBy: PropTypes.Requireable<string>;
        ariaLabelledBy: PropTypes.Requireable<string>;
        ariaLabel: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<object>;
        tools: PropTypes.Requireable<any[]>;
        keyboardNavigation: PropTypes.Requireable<boolean>;
        resizable: PropTypes.Requireable<boolean>;
        preserveWhitespace: PropTypes.Requireable<string | boolean>;
        onMount: PropTypes.Requireable<(...args: any[]) => any>;
        onFocus: PropTypes.Requireable<(...args: any[]) => any>;
        onBlur: PropTypes.Requireable<(...args: any[]) => any>;
        onChange: PropTypes.Requireable<(...args: any[]) => any>;
        onPasteHtml: PropTypes.Requireable<(...args: any[]) => any>;
        onExecute: PropTypes.Requireable<(...args: any[]) => any>;
        onIFrameInit: PropTypes.Requireable<(...args: any[]) => any>;
    };
    /**
     * @hidden
     */
    readonly state: EditorStateInterface;
    /**
     * The value of the Editor.
     */
    get value(): Node | string;
    /**
     * Returns the DOM element of the Editor.
     */
    get element(): HTMLElement | null;
    /**
     * Returns the content-editable DOM element of the Editor.
     */
    get contentElement(): HTMLDivElement | null;
    /**
     * Returns the `view` object of the Editor.
     */
    get view(): EditorView | undefined;
    private _element;
    private _view?;
    private _contentElement;
    private iframe;
    private trOnChange;
    private htmlOnChange;
    private pasteEvent?;
    private readonly showLicenseWatermark;
    private readonly licenseMessage?;
    constructor(props: EditorProps);
    /**
     * @hidden
     */
    componentDidMount(): void;
    /**
     * @hidden
     */
    componentDidUpdate(prevProps: EditorProps): void;
    /**
     * @hidden
     */
    componentWillUnmount(): void;
    /**
     * @hidden
     */
    focus: () => void;
    /**
     * @hidden
     */
    render(): React.JSX.Element;
    private renderDialog;
    private renderTool;
    private updateTools;
    private initialize;
    private filterTransaction;
    private onPasteHtml;
    private dispatchTransaction;
    private onFocus;
    private onBlur;
    private onPaste;
    private onIFrameInit;
}
export {};
