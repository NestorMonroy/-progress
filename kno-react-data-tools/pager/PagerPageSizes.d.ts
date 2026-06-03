/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { DropDownListChangeEvent } from '@progress/kno-react-dropdowns';
import * as React from 'react';
/**
 * @hidden
 */
export interface PagerPageSizesProps {
    value?: number | string;
    pageSize: number;
    pageSizes: number[] | Array<number | string>;
    size?: 'small' | 'medium' | 'large';
    navigatable?: boolean;
    pageChange?: (event: {
        skip: number;
        take: number;
    }, e: DropDownListChangeEvent) => void;
    messagesMap?: (messageKey: string) => {
        messageKey: string;
        defaultMessage: string;
    };
    visibleElementsRef?: any;
    pagerSizesRef?: any;
    pagerSizesTitleRef?: any;
    adaptive?: boolean;
    adaptiveTitle?: string;
}
/**
 * @hidden
 */
export declare const PagerPageSizes: (props: PagerPageSizesProps) => false | React.JSX.Element;
