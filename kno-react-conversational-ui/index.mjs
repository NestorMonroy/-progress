/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";
import { ChatMessage as t } from "./chat/components/ChatMessage.mjs";
import { Chat as p } from "./chat/components/Chat.mjs";
import { SuggestionGroup as a } from "./chat/components/SuggestionsGroup.mjs";
import { HeroCard as f } from "./chat/components/templates/HeroCard.mjs";
import { DEFAULT_FIELD_MAPPING as P, extractFieldMappingFromProps as n, isStandardMessageFormat as i, mapDataArrayToMessages as u, mapDataToMessage as A, mapMessageToCustomFormat as I } from "./chat/utils/fieldMapping.mjs";
import { AIPrompt as g } from "./ai-prompt/AIPrompt.mjs";
import { PromptHeader as B } from "./ai-prompt/AIPromptHeader.mjs";
import { AIPromptFooter as F } from "./ai-prompt/AIPromptFooter.mjs";
import { AIPromptContent as V } from "./ai-prompt/AIPromptContent.mjs";
import { AIPromptView as C } from "./ai-prompt/views/AIPromptView.mjs";
import { AIPromptOutputView as c } from "./ai-prompt/views/AIPromptOutputView.mjs";
import { AIPromptCommandsView as S } from "./ai-prompt/views/AIPromptCommandsView.mjs";
import { AIPromptViewRender as G } from "./ai-prompt/views/AIPromptViewRender.mjs";
import { InlineAIPrompt as L } from "./inline-ai-prompt/InlineAIPrompt.mjs";
import { commandsViewDefaults as _, outputViewDefaults as y, promptViewDefaults as N } from "./ai-prompt/views/constants.mjs";
import { PromptBox as R } from "./prompt-box/PromptBox.mjs";
import { PromptBoxActionButton as j } from "./prompt-box/PromptBoxActionButton.mjs";
import { PromptBoxSpeechToTextButton as q } from "./prompt-box/PromptBoxSpeechToTextButton.mjs";
import { PromptBoxUploadButton as z } from "./prompt-box/PromptBoxUploadButton.mjs";
export {
  g as AIPrompt,
  S as AIPromptCommandsView,
  V as AIPromptContent,
  F as AIPromptFooter,
  c as AIPromptOutputView,
  C as AIPromptView,
  G as AIPromptViewRender,
  p as Chat,
  t as ChatMessage,
  P as DEFAULT_FIELD_MAPPING,
  f as HeroCard,
  L as InlineAIPrompt,
  R as PromptBox,
  j as PromptBoxActionButton,
  q as PromptBoxSpeechToTextButton,
  z as PromptBoxUploadButton,
  B as PromptHeader,
  a as SuggestionGroup,
  _ as commandsViewDefaults,
  n as extractFieldMappingFromProps,
  i as isStandardMessageFormat,
  u as mapDataArrayToMessages,
  A as mapDataToMessage,
  I as mapMessageToCustomFormat,
  y as outputViewDefaults,
  N as promptViewDefaults
};
