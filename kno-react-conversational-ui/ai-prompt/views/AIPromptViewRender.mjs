/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { useAIPromptContext as n } from "../AIPromptContext.mjs";
const r = (t) => {
  const [e] = n();
  return e.activeView === t.name ? t.children : null;
};
export {
  r as AIPromptViewRender
};
