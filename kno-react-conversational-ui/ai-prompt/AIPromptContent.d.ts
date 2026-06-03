/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as React from 'react';
/**
 * The props of the AIPromptContent component.
 */
interface AIPromptContentProps {
    /**
     * Specifies the AIPromptContent children elements.
     */
    children?: React.ReactNode;
    /**
     * Specifies the callback for cancel action.
     */
    onCancel?: () => void;
    /**
     * Specifies if the streaming indicator should be shown.
     */
    streaming?: boolean;
}
/**
 * Represents the knoReact AIPromptContent component.
 */
export declare const AIPromptContent: React.ForwardRefExoticComponent<AIPromptContentProps & React.RefAttributes<HTMLDivElement>>;
export {};
