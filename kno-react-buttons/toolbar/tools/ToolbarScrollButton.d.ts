/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as React from 'react';
/**
 * @hidden
 */
export interface ToolbarScrollButtonProps {
    buttonScrollSpeed?: number;
    disabled?: boolean;
    scrollContentRef?: React.MutableRefObject<HTMLSpanElement | null>;
    type: 'prev' | 'next';
    prevButton?: React.ComponentType;
    nextButton?: React.ComponentType;
}
/**
 * @hidden
 */
export declare const ToolbarScrollButton: (props: ToolbarScrollButtonProps) => React.JSX.Element;
