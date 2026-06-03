/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { TextBoxChangeEvent, TextBoxHandle } from '@progress/kno-react-inputs';
import * as React from 'react';
/**
 * @hidden
 */
export interface ListFilterProps {
    value?: string | number | readonly string[] | undefined;
    tabIndex?: number;
    onChange?: (event: TextBoxChangeEvent) => void;
    onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
    size?: 'small' | 'medium' | 'large';
    rounded?: 'small' | 'medium' | 'large' | 'full' | 'none';
    fillMode?: 'solid' | 'flat' | 'outline';
    renderListFilterWrapper?: boolean;
    renderPrefixSeparator?: boolean;
    placeholder?: string;
}
/**
 * @hidden
 */
declare const ListFilter: React.ForwardRefExoticComponent<ListFilterProps & React.RefAttributes<TextBoxHandle | null>>;
export default ListFilter;
