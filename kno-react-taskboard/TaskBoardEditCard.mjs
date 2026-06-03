/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as T from "react";
import { useLocalization as E } from "@progress/kno-react-intl";
import { taskBoardEditPanePriorityLabel as i, messages as a, taskBoardEditPaneDescriptionLabel as o, taskBoardEditPaneTitleLabel as r, taskBoardEditPaneCancelBtn as n, taskBoardEditCardPaneSaveBtn as d, taskBoardAddCardPriorityLabel as g, taskBoardAddCardDescriptionLabel as s, taskBoardAddCardTitleLabel as l, taskBoardEditCardPaneTitle as L } from "./messages/index.mjs";
import { useTaskEditing as P } from "./hooks/taskEditing.mjs";
const c = (e) => {
  const { onTitleChange: u, title: k, onDescriptionChange: B, description: p, onPriorityChange: C, priority: m, onSave: S } = P(e), t = E();
  return /* @__PURE__ */ T.createElement(
    e.editPane,
    {
      header: t.toLanguageString(L, a[L]) + e.task.title,
      titleInputTitle: t.toLanguageString(
        l,
        a[l]
      ),
      descriptionInputTitle: t.toLanguageString(
        s,
        a[s]
      ),
      priorityDropDownTitle: t.toLanguageString(
        g,
        a[g]
      ),
      task: e.task,
      saveButton: t.toLanguageString(
        d,
        a[d]
      ),
      cancelButton: t.toLanguageString(
        n,
        a[n]
      ),
      priorities: e.priorities,
      titleLabel: t.toLanguageString(
        r,
        a[r]
      ),
      descriptionLabel: t.toLanguageString(
        o,
        a[o]
      ),
      priorityLabel: t.toLanguageString(
        i,
        a[i]
      ),
      onSave: S,
      onClose: e.onClose,
      onTitleChange: u,
      title: k,
      onDescriptionChange: B,
      description: p,
      onPriorityChange: C,
      priority: m
    }
  );
};
c.propTypes = {};
c.displayName = "KendoReactTaskBoardEditCard";
export {
  c as TaskBoardEditCard
};
