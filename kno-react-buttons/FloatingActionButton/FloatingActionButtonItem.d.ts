/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { SVGIcon } from '@progress/kno-react-common';
import * as React from 'react';
/**
 * The FloatingActionButtonItemHandle ref.
 */
export interface FloatingActionButtonItemHandle {
    /**
     * The FloatingActionButtonItemHandle element.
     */
    element: HTMLLIElement | null;
    /**
     * Focus the FloatingActionButtonItem.
     */
    focus: () => void;
}
/**
 * Represents the props of the [knoReact FloatingActionButtonItem component](components/buttons/floatingactionbutton).
 */
export interface FloatingActionButtonItemProps {
    /**
     * Sets additional CSS styles to the FloatingActionButtonItem.
     *
     * @example
     * ```jsx
     * <FloatingActionButtonItem style={{ margin: '10px' }} />
     * ```
     */
    style?: React.CSSProperties;
    /**
     * Specifies a list of CSS classes that will be added to the FloatingActionButtonItem.
     *
     * @example
     * ```jsx
     * <FloatingActionButtonItem className="custom-item" />
     * ```
     */
    className?: string;
    /**
     * Represents the children that are passed to the FloatingActionButtonItem.
     *
     * @example
     * ```jsx
     * <FloatingActionButtonItem>Custom Content</FloatingActionButtonItem>
     * ```
     */
    children?: any;
    /**
     * Specifies if the Floating Action Button Item is disabled [see example](components/buttons/floatingactionbutton/items/disabled-item).
     *
     * @default false
     * @example
     * ```jsx
     * <FloatingActionButtonItem disabled />
     * ```
     */
    disabled?: boolean;
    /**
     * Sets the index of the Floating Action Button Item that you use to identify it.
     */
    index?: number;
    /**
     * Defines the icon that renders in the FloatingActionButtonItem
     * [see example](components/buttons/floatingactionbutton/items/data-binding).
     */
    icon?: string;
    /**
     * Defines the SVG icon that renders in the FloatingActionButtonItem.
     */
    svgIcon?: SVGIcon;
    /**
     * Specifies the text of the FloatingActionButtonItem
     * [see example](components/buttons/floatingactionbutton/items/data-binding).
     */
    text?: string;
    /**
     * Sets the `tabIndex` property of the FloatingActionButtonItem.
     *
     * @default 0
     */
    tabIndex?: number;
    /**
     * Sets a custom property. Contained in the FloatingActionButtonItem props that are
     * returned from the `onItemClick` FloatingActionButton event
     * [see example](components/buttons/floatingactionbutton/items/customization#toc-items-rendering).
     */
    [customProp: string]: any;
    /**
     * @hidden
     */
    id?: string;
    /**
     * @hidden
     */
    dataItem?: any;
    /**
     * @hidden
     */
    item?: any;
    /**
     * @hidden
     */
    focused?: boolean;
    /**
     * @hidden
     */
    onDown?: (event: any) => void;
    /**
     * @hidden
     */
    onClick?: (event: any, index: number) => void;
}
/**
 * Represents the [knoReact FloatingActionButtonItem component](components/buttons/floatingactionbutton).
 *
 * @example
 * ```jsx
 *
 * const App = () => {
 *   return (
 *       <FloatingActionButton items={[{icon: 'pencil', text: 'Edit'}, {icon: 'close', text: 'Remove'}] icon: 'plus'} />
 *   );
 * };
 * ```
 */
export declare const FloatingActionButtonItem: React.ForwardRefExoticComponent<Omit<FloatingActionButtonItemProps, "ref"> & React.RefAttributes<FloatingActionButtonItemHandle | null>>;
