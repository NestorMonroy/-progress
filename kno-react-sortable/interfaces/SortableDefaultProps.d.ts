/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { SortableEmptyItemUIProps } from './SortableEmptyItemUIProps';
/**
 * @hidden
 */
export interface SortableDefaultProps {
    /**
     * Specifies the tab index of the Sortable items.
     */
    tabIndex?: number;
    /**
     * Enables or disables the [keyboard navigation](components/sortable/keyboard-navigation).
     * Defaults to `true`.
     *
     * @default true
     */
    navigation?: boolean;
    /**
     * Enables or disables the reorder animation of the Sortable items.
     * defaults to `true`.
     *
     * @default true
     */
    animation?: boolean;
    /**
     * The component that is rendered when no data is available.
     */
    emptyItemUI?: React.ComponentType<SortableEmptyItemUIProps>;
}
