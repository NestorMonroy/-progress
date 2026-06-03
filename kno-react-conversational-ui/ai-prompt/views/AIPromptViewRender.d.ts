/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as React from 'react';
/**
 * The props of the AIPromptViewRender component.
 */
interface AIPromptViewRenderProps {
    /**
     * Specifies the name of the view.
     */
    name: string;
    /**
     * Specifies the AIPromptViewRender children elements.
     */
    children: React.ReactNode;
}
/**
 * Represents the knoReact AIPromptViewRender component.
 */
export declare const AIPromptViewRender: (props: AIPromptViewRenderProps) => React.ReactNode;
export {};
