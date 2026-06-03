export const addClass = (className, element) => {
    element.classList.add(className);
};
export const removeClass = (className, element) => {
    element.classList.remove(className);
};
export const hasClass = (className, element) => {
    if (element instanceof HTMLElement) {
        return element.classList.contains(className);
    }
};
export const createElement = function (name, className, styles) {
    const element = document.createElement(name);
    if (className) {
        element.className = className;
    }
    Object.keys(styles).forEach((key) => (element.style[key] = styles[key]));
    return element;
};
/**
 * Scrolls the PDFViewer document to the passed page number.
 *
 * @param rootElement The root HTML element of the PDFViewer component.
 * @param pageNumber The page number.
 */
export const scrollToPage = (rootElement, pageNumber) => {
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
