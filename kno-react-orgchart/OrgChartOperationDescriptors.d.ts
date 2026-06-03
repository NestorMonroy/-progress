/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
/**
 * The descriptors of the data operations which are applied to the OrgChart component.
 */
export interface OrgChartOperationDescriptors {
    /**
     * The hierarchical indices of the items to which the expand operation will be applied, or the descriptor of the operation.
     */
    expand?: string[] | OrgChartOperationDescriptor;
    /**
     * The hierarchical indices of the items to which the select operation will be applied, or the descriptor of the operation.
     */
    select?: string[] | OrgChartOperationDescriptor;
    /**
     * Sets the hierarchical indices of the items to which the check operation applies, or the descriptor of the operation.
     */
    check?: string[] | OrgChartCheckDescriptor;
    /**
     * When the operations are applied, the corresponding items and their parents are cloned.
     * For performance reasons, OrgChart items are cloned only once.
     * The name of the field which provides a Boolean representation of whether an item is already cloned.
     * Defaults to `cloned`.
     */
    cloneField?: string;
    /**
     * The expand field of the item.
     */
    expandField?: string;
    /**
     * The select field of the item.
     */
    selectField?: string;
    /**
     * The check field of the item.
     */
    checkField?: string;
    /**
     * The children field of the item.
     */
    childrenField?: string;
}
/**
 * The descriptor which is used for expanding, selecting, and checking.
 */
export interface OrgChartOperationDescriptor {
    /**
     * The IDs of the items to which the operation will be applied. By default, the OrgChart applies the hierarchical indices of the items. These indices are zero-based. The first root item has a `0` (zero) index. If the first root item has children, the first child acquires a `0_0` index and the second acquires a `0_1` index.
     */
    ids?: any[];
    /**
     * The name of the field which will provide a Boolean representation for the operation state of the item.
     *
     * The default fields are:
     * * `expanded`&mdash;Indicates that an item is expanded.
     * * `selected`&mdash;Indicates that an item is selected.
     * * `checked`&mdash;Indicates that an item is checked.
     */
    operationField?: string;
    /**
     * The name of the field which will uniquely describe an item as an alternative to its hierarchical index.
     */
    idField?: string;
}
/**
 * The descriptor which is used for checking.
 */
export interface OrgChartCheckDescriptor extends OrgChartOperationDescriptor {
    /**
     * Determines if a parent item will have an indeterminate state when not all its children are checked.
     */
    applyCheckIndeterminate?: boolean;
    /**
     * The name of the field which will provide a Boolean representation for the indeterminate state of a parent item.
     * Defaults to `checkIndeterminate`.
     */
    checkIndeterminateField?: string;
}
