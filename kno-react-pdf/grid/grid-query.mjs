/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { findElement as t, matchesNodeName as n, matchesClasses as r } from "../common/dom-queries.mjs";
const o = "k-grid-header", i = "k-grid-footer", h = "TABLE", c = n(h), a = (s) => s ? "locked" : "wrap";
class l {
  constructor(e) {
    this.element = e, this.list = t(e, r("k-grid-container"));
  }
  content(e) {
    return t(this.list, r(`k-grid-content${e ? "-locked" : ""}`));
  }
  header(e) {
    return this.headerWrap = this.headerWrap || t(this.element, r(o)), t(this.headerWrap, r(`${o}-${a(e)}`));
  }
  footer(e) {
    return this.footerWrap = this.footerWrap || t(this.element, r(i)), t(this.footerWrap, r(`${i}-${a(e)}`));
  }
  table() {
    return t(this.element, c);
  }
}
export {
  i as FOOTER_CLASS,
  l as GridQuery,
  o as HEADER_CLASS
};
