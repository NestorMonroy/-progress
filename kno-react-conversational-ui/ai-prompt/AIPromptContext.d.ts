/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { AIPromptOutputInterface } from './AIPrompt.js';
import { CommandInterface } from './views/AIPromptCommandsView.js';
import { SuggestionsView } from '../chat/components/SuggestionsGroup.js';
import * as React from 'react';
/**
 * @hidden
 */
interface AIPromptContextInterface {
    activeView?: string;
    streaming?: boolean;
    loading?: boolean;
    suggestionsView?: SuggestionsView;
    onCancel?: () => void;
    onPromptRequest?: (prompt?: string, outputItem?: AIPromptOutputInterface) => void;
    onCommandExecute?: (command: CommandInterface) => void;
}
/**
 * @hidden
 */
export declare const AIPromptContext: React.Context<[AIPromptContextInterface, any]>;
/**
 * @hidden
 */
export declare const useAIPromptContext: () => [AIPromptContextInterface, any];
export {};
