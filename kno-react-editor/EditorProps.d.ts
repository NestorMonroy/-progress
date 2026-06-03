/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { EditorState, Plugin, Transaction, EditorView, Schema, Node } from '@progress/kno-editor-common';
import { EditorUtils } from './utils/index.js';
import { Editor } from './Editor.js';
import { WebMcpProps } from '@progress/kno-react-common';
interface EditorEvent {
    /**
     * An event target.
     */
    target: Editor;
}
/**
 * Represents the object of the `onChange` Editor event.
 */
export interface EditorChangeEvent extends EditorEvent {
    /**
     * Represents the [Editor document](https://prosemirror.net/docs/guide/#doc).
     */
    value: Node;
    /**
     * A getter of the Editor HTML content.
     * Once called, it will convert the Editor document into HTML string.
     * Note that, since onChange event is triggered on every key while typing,
     * this conversion may not be suitable if the Editor is dealing with large amount of content.
     */
    html: string;
    /**
     * The Editor Schema object.
     */
    schema: Schema;
    /**
     * The Transaction which causes the change.
     */
    transaction: Transaction;
}
/**
 * Represents the object of the `onMount` Editor event.
 */
export interface EditorMountEvent extends EditorEvent {
    /**
     * The content-editable DOM element of the Editor.
     */
    dom: HTMLDivElement;
    /**
     * The default plugins collection of the Editor.
     */
    plugins: Array<Plugin>;
    /**
     * The default key bindings of the Editor.
     */
    shortcuts: EditorUtils.Shortcuts;
    /**
     * The default [viewProps](https://prosemirror.net/docs/ref/#view.DirectEditorProps) object of the Editor.
     */
    viewProps: {
        state: EditorState;
        [key: string]: any;
    };
}
/**
 * Represents the object of the `onPaste` Editor event.
 */
export interface EditorPasteEvent extends EditorEvent {
    /**
     * The HTML that will be pasted in the Editor.
     */
    pastedHtml: string;
    /**
     * The native paste event.
     */
    nativeEvent: ClipboardEvent;
}
/**
 * Represents the object of the `onExecute` Editor event.
 */
export interface EditorExecuteEvent extends EditorEvent {
    /**
     * The transaction that will be executed.
     */
    transaction: Transaction;
    /**
     * The state of the Editor.
     */
    state: EditorState;
}
/**
 * Represents the object of the `onFocus` Editor event.
 */
export interface EditorFocusEvent extends EditorEvent {
    /**
     * The native focus event.
     */
    nativeEvent: FocusEvent;
}
/**
 * Represents the object of the `onBlur` Editor event.
 */
export interface EditorBlurEvent extends EditorEvent {
    /**
     * The native blur event.
     */
    nativeEvent: FocusEvent;
}
/**
 * Represents the object of the `onIFrameInit` Editor event.
 */
export interface EditorIFrameInitEvent extends EditorEvent {
    /**
     * The object that represents the iframe element inside the Editor.
     */
    iframe: HTMLIFrameElement;
}
/**
 * Represents the props of the [knoReact Editor component](components/editor).
 */
export interface EditorProps {
    /**
     * Sets the default HTML content of the Editor. This content is rendered
     * when the Editor is initialized and no value is provided.
     *
     * @example
     * ```jsx
     *     <Editor
     *         tools={[[EditorTools.Bold, EditorTools.Italic]]}
     *         defaultContent="<p>Hello, World!</p>"
     *     />
     * ```
     */
    defaultContent?: string;
    /**
     * Sets the initial edit mode of the Editor. Defaults to `iframe`.
     * - `iframe`: The Editor content is rendered inside an `<iframe>`.
     * - `div`: The Editor content is rendered inside a `<div>` element.
     *
     * @example
     * ```jsx
     *     <Editor
     *         tools={[[EditorTools.Bold, EditorTools.Italic]]}
     *         defaultEditMode="div"
     *     />
     * ```
     */
    defaultEditMode?: 'iframe' | 'div';
    /**
     * Applies custom styles to the content element wrapper of the Editor.
     *
     * @example
     * ```jsx
     *     <Editor
     *         tools={[[EditorTools.Bold, EditorTools.Italic]]}
     *         contentStyle={{ backgroundColor: 'lightgray' }}
     *     />
     * ```
     */
    contentStyle?: React.CSSProperties;
    /**
     * Specifies the text directionality of the Editor content.
     * Accepts `ltr` (left-to-right) or `rtl` (right-to-left).
     *
     * @example
     * ```jsx
     * <Editor tools={[[EditorTools.Bold, EditorTools.Italic]]} dir="rtl" />
     * ```
     */
    dir?: string;
    /**
     * Adds custom CSS classes to the Editor's root element.
     *
     * @example
     * ```jsx
     *     <Editor
     *         tools={[[EditorTools.Bold, EditorTools.Italic]]}
     *         className="custom-editor-class"
     *         contentStyle={{ backgroundColor: 'lightgray' }}
     *     />
     * ```
     */
    className?: string;
    /**
     * Applies custom styles to the Editor's root element.
     *
     * @example
     * ```jsx
     *     <Editor
     *         tools={[[EditorTools.Bold, EditorTools.Italic]]}
     *         style={{ border: '1px solid black' }}
     *     />
     * ```
     */
    style?: React.CSSProperties;
    /**
     * Identifies the element(s) that describe the Editor component.
     * Similar to the [HTML aria-describedby attribute](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-describedby_attribute).
     *
     * @example
     * ```jsx
     *     <Editor
     *         tools={[[EditorTools.Bold, EditorTools.Italic]]}
     *         defaultEditMode="div"
     *         ariaDescribedBy="description-element-id"
     *     />
     * ```
     *
     * @remarks
     * This property is related to accessibility.
     */
    ariaDescribedBy?: string;
    /**
     * Identifies the element(s) that label the Editor component.
     *
     * @example
     * ```jsx
     *     <Editor
     *         tools={[[EditorTools.Bold, EditorTools.Italic]]}
     *         defaultEditMode="div"
     *         ariaLabelledBy="label-element-id"
     *     />
     * ```
     *
     * @remarks
     * This property is related to accessibility.
     */
    ariaLabelledBy?: string;
    /**
     * Provides an accessible label for the Editor component.
     * Similar to the [aria-label](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label) attribute.
     *
     * @example
     * ```jsx
     * <Editor ariaLabel="Rich Text Editor" />
     * ```
     *
     * @remarks
     * This property is related to accessibility.
     */
    ariaLabel?: string;
    /**
     * Enables or disables resizing of the Editor. Defaults to `false`.
     *
     * @example
     * ```jsx
     *
     * <Editor tools={[[EditorTools.Bold, EditorTools.Italic]]}
     * resizable={true} />
     * ```
     */
    resizable?: boolean;
    /**
     * Configures the tools available in the Editor's toolbar.
     * By default, no tools are rendered.
     *
     * @example
     * ```jsx
     * <Editor tools={[[EditorTools.Bold, EditorTools.Italic]]} />
     * ```
     */
    tools?: Array<any>;
    /**
     * Triggered when the Editor is about to mount. Useful for configuring the `EditorView` object.
     * To initialize `EditorView`, use the properties of the `event` object.
     *
     * @param event - The event object containing initialization details.
     * @returns An `EditorView` instance or `void`.
     *
     * @example
     * ```jsx
     *     <Editor
     *       tools={[[EditorTools.Bold, EditorTools.Italic]]}
     *       onMount={(event) => console.log(event.dom)}
     *     />
     * ```
     */
    onMount?: (event: EditorMountEvent) => EditorView | void;
    /**
     * Triggered when content is pasted into the Editor. Allows modification of the pasted content.
     *
     * @param event - The event object containing the pasted content details.
     *
     * @returns The modified HTML string or `void`.
     *
     * @example
     * ```jsx
     *     <Editor
     *       tools={[[EditorTools.Bold, EditorTools.Italic]]}
     *       onPasteHtml={(event) => event.pastedHtml.toUpperCase()}
     *     />
     * ```
     */
    onPasteHtml?: (event: EditorPasteEvent) => string | void;
    /**
     * Triggered when the Editor is about to apply a transaction.
     * To prevent the transaction, return `false`.
     *
     * @param event - The event object containing transaction details.
     * @returns `false` to cancel the transaction or `void`.
     *
     * @example
     * ```jsx
     *     <Editor
     *       tools={[[EditorTools.Bold, EditorTools.Italic]]}
     *       onExecute={(event) => {
     *         console.log('onExecute called');
     *         event.transaction.steps.length > 0;
     *       }}
     *     />
     * ```
     */
    onExecute?: (event: EditorExecuteEvent) => boolean | void;
    /**
     * Triggered when the Editor's content element receives focus.
     *
     * @param event - The event object containing focus details.
     *
     * @example
     * ```jsx
     *     <Editor
     *       tools={[[EditorTools.Bold, EditorTools.Italic]]}
     *       onFocus={(event) => console.log('Editor focused')}
     *     />
     * ```
     */
    onFocus?: (event: EditorFocusEvent) => void;
    /**
     * Triggered when the Editor's content element loses focus.
     *
     * @param event - The event object containing blur details.
     *
     * @example
     * ```jsx
     *     <Editor
     *       tools={[[EditorTools.Bold, EditorTools.Italic]]}
     *       onBlur={(event) => console.log('Editor blurred')}
     *     />
     * ```
     */
    onBlur?: (event: EditorBlurEvent) => void;
    /**
     * Triggered when the value of the Editor is about to change.
     *
     * @param event - The event object containing change details.
     *
     * @example
     * ```jsx
     *     <Editor
     *       tools={[[EditorTools.Bold, EditorTools.Italic]]}
     *       onChange={(event) => console.log(event.value)}
     *     />
     * ```
     */
    onChange?: (event: EditorChangeEvent) => void;
    /**
     * Triggered during the initialization of an Editor with the `iframe` property set to `true`.
     * Allows access to the iframe document for customization.
     *
     * @param event - The event object containing iframe details.
     *
     * @example
     * ```jsx
     *     <Editor
     *       tools={[[EditorTools.Bold, EditorTools.Italic]]}
     *       onIFrameInit={(event) => {
     *         console.log('Iframe initialized');
     *         event.iframe.style.border = 'none';
     *       }}
    />
     * ```
     */
    onIFrameInit?: (event: EditorIFrameInitEvent) => void;
    /**
     * Specifies the value of the Editor. Can be a ProseMirror `Node` or an HTML string.
     *
     * @example
     * ```jsx
     *     <Editor
     *       tools={[[EditorTools.Bold, EditorTools.Italic]]}
     *       value="<p>Initial content</p>"
     *     />
     * ```
     */
    value?: Node | string;
    /**
     * Disables the built-in keyboard navigation of the Editor's toolbar when set to `false`.
     *
     * @example
     * ```jsx
     *     <Editor
     *       tools={[[EditorTools.Bold, EditorTools.Italic]]}
     *       keyboardNavigation={false}
     *     />
     * ```
     */
    keyboardNavigation?: boolean;
    /**
     * Defines options for parsing HTML content:
     * - `false`: Collapses whitespace as per HTML rules.
     * - `true`: Preserves whitespace but normalizes newlines to spaces.
     * - `full`: Fully preserves whitespace.
     * Defaults to `full`.
     *
     * @example
     * ```jsx
     *     <Editor
     *       tools={[[EditorTools.Bold, EditorTools.Italic]]}
     *       preserveWhitespace="full"
     *     />
     * ```
     */
    preserveWhitespace?: boolean | 'full';
    /**
     * Enables browser-native AI agent tools via Web MCP (Chrome 146+).
     *
     * Pass `true` for defaults or an object for fine-grained control.
     * AI agents are multilingual — `dataName` accepts any language.
     *
     * @example
     * ```tsx
     * // Boolean: generic "editor" label
     * <Editor webMcp tools={[[EditorTools.Bold, EditorTools.Italic]]} />
     *
     * // Config object: explicit name
     * <Editor webMcp={{ dataName: 'article' }} tools={[[EditorTools.Bold, EditorTools.Italic]]} />
     * ```
     */
    webMcp?: boolean | WebMcpProps;
}
export {};
