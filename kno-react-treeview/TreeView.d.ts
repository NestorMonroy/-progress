/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { default as PropTypes } from 'prop-types';
import { TreeViewProps } from './TreeViewProps';
import * as React from 'react';
/**
 * @hidden
 */
export interface TreeViewState {
    focusedItemId?: string;
    focusedItemPublicId?: any;
    tabbableItemId?: string;
}
/**
 * Represents the [knoReact TreeView component](components/treeview).
 *
 * @example
 * ```jsx
 * const data = [{
 *     text: 'Furniture', expanded: true, items: [
 *         { text: 'Tables & Chairs' }, { text: 'Sofas' }, { text: 'Occasional Furniture' }]
 * }, {
 *     text: 'Decor', expanded: true, items: [
 *         { text: 'Bed Linen' }, { text: 'Curtains & Blinds' }, { text: 'Carpets' }]
 * }];
 * const App = () => {
 *     return <TreeView data={data} />;
 * }
 * ```
 */
export declare class TreeView extends React.Component<TreeViewProps, TreeViewState> {
    /**
     * @hidden
     */
    static propTypes: {
        data: PropTypes.Requireable<any[]>;
        animate: PropTypes.Requireable<boolean>;
        tabIndex: PropTypes.Requireable<number>;
        focusIdField: PropTypes.Requireable<string>;
        getHierarchicalIndexById: PropTypes.Requireable<(...args: any[]) => any>;
        onExpandChange: PropTypes.Requireable<(...args: any[]) => any>;
        onItemClick: PropTypes.Requireable<(...args: any[]) => any>;
        expandField: PropTypes.Requireable<string>;
        selectField: PropTypes.Requireable<string>;
        iconField: PropTypes.Requireable<string>;
        childrenField: PropTypes.Requireable<string>;
        hasChildrenField: PropTypes.Requireable<string>;
        textField: PropTypes.Requireable<string>;
        disableField: PropTypes.Requireable<string>;
        item: PropTypes.Requireable<any>;
        'aria-multiselectable': (props: any, propName: string, componentName: string) => Error | null;
        'aria-label': PropTypes.Requireable<string>;
        'aria-labelledby': PropTypes.Requireable<string>;
        size: PropTypes.Requireable<"small" | "medium" | "large" | undefined>;
        dir: PropTypes.Requireable<string>;
    };
    /**
     * @hidden
     */
    static defaultProps: {
        animate: boolean;
        expandField: string;
        selectField: string;
        iconField: string;
        hasChildrenField: string;
        childrenField: string;
        textField: string;
        disableField: string;
        checkField: string;
        checkIndeterminateField: string;
        size: "small" | "medium" | "large" | undefined;
    };
    /**
     * @hidden
     */
    state: {
        focusedItemId: undefined;
        focusedItemPublicId: undefined;
        tabbableItemId: string;
    };
    private blurRequest;
    private fieldsSvc;
    private allowExplicitFocus;
    private readonly showLicenseWatermark;
    private readonly licenseMessage?;
    private get treeGuid();
    private _element;
    /**
     * @hidden
     */
    get element(): HTMLDivElement | null;
    constructor(props: TreeViewProps);
    /**
     * @hidden
     */
    render(): React.JSX.Element;
    /**
     * @hidden
     */
    componentDidUpdate(): void;
    private onFocusDomElNeeded;
    private onCheckChange;
    private onExpandChange;
    private onPress;
    private onDrag;
    private onRelease;
    private onItemClick;
    private onFocus;
    private onBlur;
    private onKeyDown;
    private dispatchEventsOnKeyDown;
    private setFocus;
    private onContextMenu;
    private getFocusedItem;
    private getItemById;
    private dispatchCheckChange;
    private dispatchExpandChange;
    private dispatchItemClick;
    private refocusDueToFocusIdField;
    private get ariaMultiSelectable();
    private get data();
    private focusDomItem;
    /**
     * Returns the `guid` which is associated with the TreeView.
     */
    get guid(): string;
}
/**
 * Represent the `ref` of the TreeView component.
 */
export interface TreeViewHandle extends Pick<TreeView, keyof TreeView> {
}
