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
 * An interface for the AIPromptToolbarItem.
 */
export interface AIPromptToolbarItemInterface {
    /**
     * Defines the name of the view witch is related to.
     */
    name: string;
    /**
     * Defines the svgIcon used in the Toolbar button.
     */
    buttonIcon?: SVGIcon;
    /**
     * Defines the text used in the Toolbar button.
     */
    buttonText?: string;
}
/**
 * @hidden
 */
interface AIPromptHeaderProps {
    activeView: string;
    toolbarItems: (AIPromptToolbarItemInterface | React.ReactNode)[];
    activeViewChange?: (viewName: string) => void;
}
/**
 * @hidden
 */
export declare const PromptHeader: (props: AIPromptHeaderProps) => React.JSX.Element;
export {};
