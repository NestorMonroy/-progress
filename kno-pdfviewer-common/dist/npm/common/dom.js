"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scrollToPage = exports.createElement = exports.hasClass = exports.removeClass = exports.addClass = void 0;
const addClass = (className, element) => {
    element.classList.add(className);
};
exports.addClass = addClass;
const removeClass = (className, element) => {
    element.classList.remove(className);
};
exports.removeClass = removeClass;
const hasClass = (className, element) => {
    if (element instanceof HTMLElement) {
        return element.classList.contains(className);
    }
};
exports.hasClass = hasClass;
const createElement = function (name, className, styles) {
    const element = document.createElement(name);
    if (className) {
        element.className = className;
    }
    Object.keys(styles).forEach((key) => (element.style[key] = styles[key]));
    return element;
};
exports.createElement = createElement;
/**
 * Scrolls the PDFViewer document to the passed page number.
 *
 * @param rootElement The root HTML element of the PDFViewer component.
 * @param pageNumber The page number.
 */
const scrollToPage = (rootElement, pageNumber) => {
    const pages = rootElement.querySelectorAll('.k-page');
    const page = pages[0];
    if (page instanceof HTMLDivElement) {
        const top = (page.offsetHeight + page.offsetTop) *
            Math.max(0, Math.min(pageNumber, pages.length - 1));
        const scrollElement = page.closest('.k-pdf-viewer-canvas');
        if (scrollElement) {
            scrollElement.scrollTo({ top, behavior: 'auto' });
        }
    }
};
exports.scrollToPage = scrollToPage;
