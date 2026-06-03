/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as r from "react";
import { EditorToolsSettings as n } from "../config/toolsSettings.mjs";
import { InsertTableToolNS as xe } from "./insertTable/tool.mjs";
import { InsertTablePopupNS as Se } from "./insertTable/popup.mjs";
import { createAlignTool as Ce } from "./align.mjs";
import { FontStyleToolNS as ye } from "./fontStyle.mjs";
import { ApplyColorTool as U } from "./applyColor.mjs";
import { FormatBlockToolNS as Le } from "./formatBlock.mjs";
import { HistoryToolNS as N } from "./history.mjs";
import { IndentToolNS as we } from "./indent.mjs";
import { InlineFormatToolNS as Te } from "./inlineFormat.mjs";
import { createInsertImageTool as Re } from "./insertImage.mjs";
import { LinkToolNS as be } from "./insertLink.mjs";
import { ListToolNS as De } from "./lists.mjs";
import { OutdentToolNS as ke } from "./outdent.mjs";
import { TableEditNS as l } from "./tableEdit.mjs";
import { UnlinkToolNS as Fe } from "./unlink.mjs";
import { ViewHtmlToolNS as Be } from "./viewHtml.mjs";
import { Print as Ue } from "./print.mjs";
import { Pdf as Ne } from "./pdf.mjs";
import { SelectAll as ve } from "./selectAll.mjs";
import { CleanFormatting as Pe } from "./cleanFormatting.mjs";
import { FindAndReplace as Ke } from "./findReplace.mjs";
import { ListTool as v } from "./lists-styled.mjs";
import { listUnorderedIcon as d, listUnorderedSquareIcon as he, listOrderedIcon as P, listRomanUpperIcon as Oe, listRomanLowerIcon as He, listLatinBigIcon as Ve, listLatinSmallIcon as Me } from "@progress/kno-svg-icons";
import { keys as o } from "../messages/index.mjs";
import { TableCellProperties as qe } from "./table-wizard/tableCellProperties.mjs";
import { TableProperties as ze } from "./table-wizard/tableProperties.mjs";
var K;
((t) => {
  function c(e) {
    return Ce(e);
  }
  t.createAlignTool = c;
  class h extends c(n.alignLeft) {
  }
  t.AlignLeft = h;
  class O extends c(n.alignRight) {
  }
  t.AlignRight = O;
  class H extends c(n.alignCenter) {
  }
  t.AlignCenter = H;
  class V extends c(n.alignJustify) {
  }
  t.AlignJustify = V;
  function f(e) {
    return xe.createInsertTableTool(e);
  }
  t.createInsertTableTool = f;
  class M extends f(n.insertTable) {
  }
  t.InsertTable = M;
  class q extends Se.InsertTablePopup {
  }
  t.InsertTablePopup = q;
  function s(e) {
    return ye.createStyleDropDownList(e);
  }
  t.createStyleDropDownList = s;
  class z extends s(n.fontSize) {
  }
  t.FontSize = z;
  class J extends s(n.fontName) {
  }
  t.FontName = J, t.ForeColor = (e) => /* @__PURE__ */ r.createElement(U, { ...n.foreColor, ...e }), t.BackColor = (e) => /* @__PURE__ */ r.createElement(U, { ...n.backColor, ...e });
  function p(e) {
    return Le.createFormatBlockDropDownList(e);
  }
  t.createFormatBlockDropDownList = p;
  class $ extends p(n.formatBlock) {
  }
  t.FormatBlock = $;
  function I(e) {
    return N.createUndoTool(e);
  }
  t.createUndoTool = I;
  function g(e) {
    return N.createRedoTool(e);
  }
  t.createRedoTool = g;
  class j extends I(n.undo) {
  }
  t.Undo = j;
  class G extends g(n.redo) {
  }
  t.Redo = G;
  function A(e) {
    return we.createIndentTool(e);
  }
  t.createIndentTool = A;
  class Q extends A(n.indent) {
  }
  t.Indent = Q;
  function a(e) {
    return Te.createInlineFormatTool(e);
  }
  t.createInlineFormatTool = a;
  class W extends a(n.bold) {
  }
  t.Bold = W;
  class X extends a(n.italic) {
  }
  t.Italic = X;
  class Y extends a(n.underline) {
  }
  t.Underline = Y;
  class Z extends a(n.strikethrough) {
  }
  t.Strikethrough = Z;
  class _ extends a(n.subscript) {
  }
  t.Subscript = _;
  class E extends a(n.superscript) {
  }
  t.Superscript = E;
  function x(e) {
    return Re(e);
  }
  t.createInsertImageTool = x;
  class ee extends x(n.image) {
  }
  t.InsertImage = ee;
  function i(e) {
    return be.createLinkTool(e);
  }
  t.createLinkTool = i;
  class te extends i(n.link) {
  }
  t.Link = te;
  class ne extends i(n.insertFile) {
  }
  t.InsertFile = ne;
  function m(e) {
    return De.createListTool(e);
  }
  t.createListTool = m;
  class le extends m(n.orderedList) {
  }
  t.OrderedList = le;
  class re extends m(n.bulletList) {
  }
  t.UnorderedList = re, t.BulletedList = (e) => {
    const u = [
      { icon: "list-unordered", svgIcon: d, textKey: o.listStyleDisc, style: "disc" },
      {
        icon: "list-unordered",
        svgIcon: d,
        textKey: o.listStyleCircle,
        style: "circle"
      },
      {
        icon: "list-unordered-square",
        svgIcon: he,
        textKey: o.listStyleSquare,
        style: "square"
      }
    ];
    return /* @__PURE__ */ r.createElement(
      v,
      {
        listType: n.bulletList.listType,
        items: u,
        icon: "list-unordered",
        svgIcon: d,
        titleKey: n.bulletList.messages.title,
        ...e
      }
    );
  }, t.NumberedList = (e) => {
    const u = [
      { icon: "list-ordered", svgIcon: P, textKey: o.listStyleDecimal },
      // { icon: 'list-leading-zero', text: 'Decimal with leading zero', styleType: 'decimal-leading-zero' },
      {
        icon: "list-roman-upper",
        svgIcon: Oe,
        textKey: o.listStyleUpperRoman,
        style: "upper-roman"
      },
      {
        icon: "list-roman-lower",
        svgIcon: He,
        textKey: o.listStyleLowerRoman,
        style: "lower-roman"
      },
      {
        icon: "list-latin-big",
        svgIcon: Ve,
        textKey: o.listStyleUpperLatin,
        style: "upper-latin"
      },
      {
        icon: "list-latin-small",
        svgIcon: Me,
        textKey: o.listStyleLowerLatin,
        style: "lower-latin"
      }
    ];
    return /* @__PURE__ */ r.createElement(
      v,
      {
        listType: n.orderedList.listType,
        items: u,
        icon: "list-ordered",
        svgIcon: P,
        titleKey: n.orderedList.messages.title,
        ...e
      }
    );
  }, t.TableCellProperties = qe, t.TableProperties = ze;
  function S(e) {
    return ke.createOutdentTool(e);
  }
  t.createOutdentTool = S;
  class oe extends S(n.outdent) {
  }
  t.Outdent = oe, t.Print = (e) => /* @__PURE__ */ r.createElement(Ue, { ...e }), t.Pdf = (e) => /* @__PURE__ */ r.createElement(Ne, { ...e }), t.SelectAll = (e) => /* @__PURE__ */ r.createElement(ve, { ...e }), t.CleanFormatting = (e) => /* @__PURE__ */ r.createElement(Pe, { ...e });
  function C(e) {
    return l.createAddRowBeforeTool(e);
  }
  t.createAddRowBeforeTool = C;
  function y(e) {
    return l.createAddRowAfterTool(e);
  }
  t.createAddRowAfterTool = y;
  function L(e) {
    return l.createAddColumnBeforeTool(e);
  }
  t.createAddColumnBeforeTool = L;
  function w(e) {
    return l.createAddColumnAfterTool(e);
  }
  t.createAddColumnAfterTool = w;
  function T(e) {
    return l.createDeleteRowTool(e);
  }
  t.createDeleteRowTool = T;
  function R(e) {
    return l.createDeleteColumnTool(e);
  }
  t.createDeleteColumnTool = R;
  function b(e) {
    return l.createDeleteTableTool(e);
  }
  t.createDeleteTableTool = b;
  function D(e) {
    return l.createMergeCellsTool(e);
  }
  t.createMergeCellsTool = D;
  function k(e) {
    return l.createSplitCellTool(e);
  }
  t.createSplitCellTool = k;
  class ae extends C(n.addRowBefore) {
  }
  t.AddRowBefore = ae;
  class ce extends y(n.addRowAfter) {
  }
  t.AddRowAfter = ce;
  class se extends L(n.addColumnBefore) {
  }
  t.AddColumnBefore = se;
  class ie extends w(n.addColumnAfter) {
  }
  t.AddColumnAfter = ie;
  class me extends T(n.deleteRow) {
  }
  t.DeleteRow = me;
  class ue extends R(n.deleteColumn) {
  }
  t.DeleteColumn = ue;
  class de extends b(n.deleteTable) {
  }
  t.DeleteTable = de;
  class fe extends D(n.mergeCells) {
  }
  t.MergeCells = fe;
  class pe extends k(n.splitCell) {
  }
  t.SplitCell = pe;
  function F(e) {
    return Fe.createUnlinkTool(e);
  }
  t.createUnlinkTool = F;
  class Ie extends F(n.unlink) {
  }
  t.Unlink = Ie;
  function B(e) {
    return Be.createViewHtmlTool(e);
  }
  t.createViewHtmlTool = B;
  class ge extends B(n.viewHtml) {
  }
  t.ViewHtml = ge;
  class Ae extends Ke {
  }
  t.FindAndReplace = Ae;
})(K || (K = {}));
export {
  K as EditorTools
};
