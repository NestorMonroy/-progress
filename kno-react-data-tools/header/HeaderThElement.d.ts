/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as React from 'react';
export interface HeaderThElementProps extends React.ThHTMLAttributes<HTMLTableCellElement> {
    /**
     * ARIA sort state indicating column sorting direction
     *
     * @remarks
     * This property is related to accessibility.
     */
    ariaSort?: 'none' | 'ascending' | 'descending';
    /**
     * ARIA label for accessibility
     *
     * @remarks
     * This property is related to accessibility.
     */
    ariaLabel?: string;
    /**
     * ARIA column index for screen readers
     *
     * @remarks
     * This property is related to accessibility.
     */
    ariaColumnIndex?: number;
    /**
     * ARIA selected state for the header cell
     *
     * @remarks
     * This property is related to accessibility.
     */
    ariaSelected?: boolean;
    /**
     * ARIA description for additional context
     *
     * @remarks
     * This property is related to accessibility.
     */
    ariaDescription?: string;
    /**
     * Indicates the type of popup triggered by the element.
     *
     * @remarks
     * This property is related to accessibility.
     */
    ariaHasPopup?: 'dialog' | 'menu' | 'listbox' | 'tree' | 'grid' | boolean;
    /** Number of columns the cell spans */
    colSpan?: number;
    /** Number of rows the cell spans */
    rowSpan?: number;
    /**
     * ARIA role for the element
     *
     * @remarks
     * This property is related to accessibility.
     */
    role?: string;
    /** Unique identifier for the column */
    columnId: string;
    /** CSS class names for styling */
    className?: string;
    /** Inline styles for the element */
    style?: any;
    /** Child elements to render inside the header cell */
    children?: any;
    /** Keyboard event handler */
    onKeyDown?: any;
    /** Whether the cell supports keyboard navigation */
    navigatable?: boolean;
}
export declare const HeaderThElement: {
    (props: HeaderThElementProps): React.JSX.Element;
    displayName: string;
};
