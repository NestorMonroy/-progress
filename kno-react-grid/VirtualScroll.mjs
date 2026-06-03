/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as l from "react";
import { firefox as n, firefoxMaxHeight as c } from "./utils/index.mjs";
const f = 0.3;
class u {
  constructor() {
    this.table = null, this.tableBody = null, this.container = null, this.scrollHeightContainer = null, this.total = 0, this.scrollableVirtual = !1, this.pageSize = 0, this.PageChange = null, this.fixedScroll = !1, this.tableTransform = "", this.reactVersion = Number.parseFloat(l.version), this.scrollSyncing = !1, this.firstToLoad = 0, this.lastScrollTop = 0, this.firstLoaded = 0, this.lastLoaded = 0, this.scrollHandler = this.scrollHandler.bind(this);
  }
  reset() {
    if (this.firstToLoad = 0, this.firstLoaded = 0, this.lastLoaded = 0, this.rowHeightService = void 0, this.fixedScroll) {
      this.lastScrollTop = this.container ? this.container.scrollTop : 0;
      return;
    }
    this.container && this.container.scrollTop !== 0 && (this.scrollSyncing = !0, this.container.scrollTop = 0, this.lastScrollTop = 0, this.translate(0, !0));
  }
  scrollHandler(t) {
    if (this.scrollSyncing) {
      this.scrollSyncing = !1;
      return;
    }
    if (!this.scrollableVirtual || !this.container || !this.table || !this.rowHeightService || !this.container)
      return;
    const i = this.container.scrollTop, s = this.lastScrollTop >= i, o = !s;
    this.lastScrollTop = i;
    const a = this.container.offsetHeight;
    let e = this.rowHeightService.index(i);
    const h = this.rowHeightService.index(i + a), r = Math.max(e + this.pageSize - this.total, 0);
    e = Math.max(e - r, 0), o && h >= this.lastLoaded && this.lastLoaded < this.total - 1 ? (this.firstToLoad = e, this.loadPage(t)) : (s && e < this.firstToLoad || e > this.lastLoaded || h < this.firstLoaded) && this.loadPageWithBuffer(e, r, s, t);
  }
  update() {
    var i;
    const t = this.getItemHeights();
    if (this.firstLoaded > this.firstToLoad) {
      const s = Math.min(this.firstLoaded - this.firstToLoad, this.pageSize), o = this.getTotalHeight(s, t), a = this.getExpectedTotalHeight(s), e = o - a;
      e !== 0 && this.adjustScroll(e);
    }
    (i = this.rowHeightService) == null || i.update(this.firstToLoad, t), this.setScrollHeightContainerHeight(), this.firstLoaded = this.firstToLoad, this.lastLoaded = this.firstLoaded + t.length - 1;
  }
  loadPage(t) {
    this.rowHeightService && (this.translate(this.rowHeightService.offset(this.firstToLoad)), this.changePage(this.firstToLoad, t));
  }
  loadPageWithBuffer(t, i, s, o) {
    const a = s ? Math.max(Math.floor(this.pageSize * f) - i, 0) : 0;
    this.firstToLoad = Math.max(t - a, 0), this.loadPage(o);
  }
  translate(t, i) {
    this.scrollableVirtual && this.table && (this.reactVersion <= 17 || i ? this.table.style.transform = "translateY(" + t + "px)" : this.tableTransform = "translateY(" + t + "px)");
  }
  changePage(t, i) {
    this.PageChange && this.PageChange(
      {
        skip: Math.max(0, t),
        take: this.pageSize
      },
      i
    );
  }
  adjustScroll(t) {
    this.scrollSyncing = !0, this.container && (this.container.scrollTop += t);
  }
  setScrollHeightContainerHeight() {
    var t;
    if (this.scrollableVirtual && this.scrollHeightContainer) {
      let i = ((t = this.rowHeightService) == null ? void 0 : t.totalHeight()) || 0;
      i = n ? Math.min(c, i) : i, this.scrollHeightContainer.style.height = i + "px";
    }
  }
  getItemHeights() {
    const t = [];
    return this.tableBody && Array.from(this.tableBody.children).forEach((i) => {
      const s = i.getBoundingClientRect().height;
      i.classList.contains("k-detail-row") ? t[t.length - 1] += s : t.push(s);
    }), t;
  }
  getTotalHeight(t, i) {
    return i.slice(0, t).reduce((s, o) => s + o, 0);
  }
  getExpectedTotalHeight(t) {
    const i = this.rowHeightService;
    if (!i)
      return 0;
    const s = this.firstToLoad + (t - 1);
    return i.offset(s) + i.height(s) - i.offset(this.firstToLoad);
  }
}
export {
  u as VirtualScroll
};
