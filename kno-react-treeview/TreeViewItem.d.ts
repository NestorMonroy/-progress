/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { TreeFieldsService } from '@progress/kno-react-common';
import * as React from 'react';
/**
 * @hidden
 */
export declare const TreeViewItemPropsContext: React.Context<(props: TreeViewItemProps) => TreeViewItemProps>;
/**
 * @hidden
 */
export interface TreeViewItemProps {
    item: any;
    itemId: string;
    treeGuid: string;
    animate: boolean;
    focusedItemId?: string;
    tabbableItemId: string;
    fieldsService: TreeFieldsService;
    itemUI?: React.ComponentType<{
        item: any;
        itemHierarchicalIndex: string;
    }>;
    ariaMultiSelectable: boolean;
    onItemClick: any;
    expandIcons?: boolean;
    iconField?: string;
    onExpandChange: any;
    onCheckChange: any;
    checkboxes?: boolean;
    onFocusDomElNeeded: any;
    draggable?: boolean;
    onPress: any;
    onDrag: any;
    onRelease: any;
    size?: 'small' | 'medium' | 'large';
    /**
     * @hidden
     *
     * Internal usage!!!
     */
    position?: 'top' | 'mid' | 'bot';
    /**
     * Currently for internal usage only! Replicates the current behavior which disables all children
     * if the parent is disabled, which was previously achieved only though the kno-themes,
     * but due to rendering changes had to be replicated programmatically!
     *
     * @hidden
     */
    disabled?: boolean;
    /**
     * @hidden
     */
    isRtl?: boolean;
    /**
     * @hidden
     */
    onContextMenu: (event: React.MouseEvent<HTMLElement>, item: any, itemId: string) => void;
    /**
     * @hidden
     * This prop comes from the `TreeView`component.
     * It replaces the previously used guid() function and is used to generate unique `id` for
     * the checkbox and label in the TreeViewItem.
     */
    id?: string;
}
/**
 * @hidden
 */
declare class TreeViewItemWithoutContext extends React.Component<TreeViewItemProps> {
    private itemElement;
    private checkboxElement;
    static defaultProps: {
        position: string;
        iconField: string;
    };
    render(): React.JSX.Element;
    componentDidMount(): void;
    componentDidUpdate(prevProps: TreeViewItemProps): void;
    private renderCheckbox;
    private renderExpandIcon;
    private renderSubitemsIfApplicable;
    private renderSubitemsWithAnimation;
    private renderItemInPart;
    private onItemContentClick;
    private onCheckChange;
    private onExpandChange;
    private onPress;
    private onDrag;
    private onRelease;
    private onContextMenu;
    private get fieldsSvc();
    private get itemId();
    private get item();
    private get tabIndex();
    private get ariaExpanded();
    private get disabled();
    private get ariaChecked();
    private get ariaSelected();
    private getIconProps;
    private assignDraggableMeta;
}
/**
 * @hidden
 */
export declare const TreeViewItem: React.ForwardRefExoticComponent<Omit<TreeViewItemProps & React.RefAttributes<TreeViewItemWithoutContext>, "ref"> & React.RefAttributes<any>>;
export {};
