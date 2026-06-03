/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { DropDownListProps } from './DropDownListProps';
import { DropDownListHandle } from './models/index.js';
import * as React from 'react';
/**
 * Represents the [knoReact DropDownList component](components/dropdowns/dropdownlist).
 *
 * Accepts properties of type [DropDownListProps](components/dropdowns/api/dropdownlistprops).
 * Obtaining the `ref` returns an object of type [DropDownListHandle](components/dropdowns/api/dropdownlisthandle).
 *
 */
export declare const DropDownList: React.ForwardRefExoticComponent<DropDownListProps & React.RefAttributes<DropDownListHandle>>;
/**
 * The default props of the DropDownList component.
 */
export declare const dropDownListDefaultProps: {
    required: boolean;
    size: "small" | "medium" | "large" | undefined;
    rounded: "small" | "none" | "medium" | "large" | "full" | undefined;
    fillMode: "flat" | "solid" | "outline" | undefined;
    popupSettings: {
        height: string;
    };
    validityStyles: boolean;
    delay: number;
    tabIndex: number;
    ignoreCase: boolean;
};
/**
 * Represents the PropsContext of the `DropDownList` component.
 * Used for global configuration of all `DropDownList` instances.
 *
 * For more information, refer to the [Dropdowns Props Context](components/dropdowns/props-context) article.
 */
export declare const DropDownListPropsContext: React.Context<(p: DropDownListProps) => DropDownListProps>;
