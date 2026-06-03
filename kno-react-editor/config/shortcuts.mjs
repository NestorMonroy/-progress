/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { chainCommands as u, exitCode as h, goToNextCell as l, undoInputRule as p, redo as a, undo as f, splitListItem as S, toggleInlineFormat as i } from "@progress/kno-editor-common";
import { EditorToolsSettings as M } from "./toolsSettings.mjs";
const { bold: b, underline: y, italic: I } = M, c = typeof navigator != "undefined" ? /Mac/.test(navigator.platform) : !1, B = (e) => {
  const r = u(h, (t, o) => {
    const d = e && e.types && e.types.hardBreak || "hard_break", m = t.schema.nodes[d];
    return o && o(t.tr.replaceSelectionWith(m.create()).scrollIntoView()), !0;
  }), s = e && e.types && e.types.listItem || "list_item", n = e && e.toolsSettings || {};
  return {
    "Mod-b": (t, o) => i(n.bold || b)(t, o),
    "Mod-i": (t, o) => i(n.italic || I)(t, o),
    "Mod-u": (t, o) => i(n.underline || y)(t, o),
    "Mod-z": f,
    "Shift-Mod-z": a,
    ...c ? {} : { "Mod-y": a },
    Backspace: p,
    "Mod-Enter": r,
    "Shift-Enter": r,
    ...c ? { "Ctrl-Enter": r } : {},
    Enter: (t, o) => S(t.schema.nodes[s])(t, o),
    Tab: l(1),
    "Shift-Tab": l(-1)
  };
};
export {
  B as getShortcuts
};
