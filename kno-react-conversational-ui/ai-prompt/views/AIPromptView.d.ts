/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { ButtonProps, SpeechToTextButtonProps } from '@progress/kno-react-buttons';
import { TextAreaProps } from '@progress/kno-react-inputs';
import { CustomComponent } from '@progress/kno-react-common';
import * as React from 'react';
/**
 * The properties of the AIPromptView component.
 */
export interface AIPromptViewProps {
    /**
     * Accepts a custom component that can be used to render the prompt input. See example [here](components/conversational-ui/ai-prompt/customization).
     */
    promptInput?: CustomComponent<TextAreaProps>;
    /**
     * Accepts a custom component that can be used to render the generate button. See example [here](components/conversational-ui/ai-prompt/customization).
     */
    generateButton?: CustomComponent<ButtonProps>;
    /**
     * The value of the prompt input.
     */
    promptValue?: string;
    /**
     * The suggestions that will be displayed in the prompt view. See example [here](components/conversational-ui/ai-prompt/suggestions).
     */
    promptSuggestions?: string[];
    /**
     * Show speech to text button in input. When true, shows the button with default settings.
     * When an object is provided, passes those props directly to the SpeechToTextButton component.
     *
     * @default false
     */
    enableSpeechToText?: boolean | SpeechToTextButtonProps;
}
/**
 * The props of the AIPromptCommandsView component.
 */
export declare const AIPromptView: (props: AIPromptViewProps) => React.JSX.Element;
