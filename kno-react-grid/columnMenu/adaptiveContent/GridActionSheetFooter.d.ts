/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { SVGIcon } from '@progress/kno-svg-icons';
import * as React from 'react';
/**
 * @hidden
 */
type GridActionSheetFooterProps = {
    onApply?: (event: React.FormEvent<HTMLFormElement>) => void;
    onReset?: (event: React.FormEvent<HTMLFormElement>) => void;
    submitMessage?: string;
    resetMessage?: string;
    submitIcon?: SVGIcon;
    resetIcon?: SVGIcon;
    submitDisabled?: boolean;
};
/**
 * @hidden
 */
export declare const GridActionSheetFooterContent: (props: GridActionSheetFooterProps) => React.JSX.Element;
export {};
