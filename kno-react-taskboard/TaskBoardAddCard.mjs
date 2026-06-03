/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as S from "react";
import { useLocalization as b } from "@progress/kno-react-intl";
import { taskBoardEditPaneCancelBtn as i, messages as a, taskBoardAddCardCreateButton as o, taskBoardEditPanePriorityLabel as r, taskBoardEditPaneDescriptionLabel as n, taskBoardEditPaneTitleLabel as d, taskBoardAddCardPriorityLabel as g, taskBoardAddCardDescriptionLabel as s, taskBoardAddCardTitleLabel as l, taskBoardAddCardPaneTitle as L } from "./messages/index.mjs";
import { useTaskEditing as P } from "./hooks/taskEditing.mjs";
const c = (e) => {
  const { onTitleChange: p, title: u, onDescriptionChange: B, description: C, onPriorityChange: k, priority: m, onSave: T } = P(e), t = b();
  return /* @__PURE__ */ S.createElement(
    e.editPane,
    {
      header: t.toLanguageString(L, a[L]),
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
      titleLabel: t.toLanguageString(
        d,
        a[d]
      ),
      descriptionLabel: t.toLanguageString(
        n,
        a[n]
      ),
      priorityLabel: t.toLanguageString(
        r,
        a[r]
      ),
      saveButton: t.toLanguageString(
        o,
        a[o]
      ),
      cancelButton: t.toLanguageString(
        i,
        a[i]
      ),
      priorities: e.priorities,
      onSave: T,
      onClose: e.onClose,
      onTitleChange: p,
      title: u,
      onDescriptionChange: B,
      description: C,
      onPriorityChange: k,
      priority: m
    }
  );
};
c.propTypes = {};
c.displayName = "KendoReactTaskBoardAddCard";
export {
  c as TaskBoardAddCard
};
