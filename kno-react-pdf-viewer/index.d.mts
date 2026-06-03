/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
export { PDFViewer, type PDFViewerProps, type PDFViewerHandle, type PDFViewerTool, type LoadEvent, type ErrorEvent, type DownloadEvent, type ZoomEvent, type PageEvent } from './PDFViewer.js';
export { currentPage } from '@progress/kno-pdfviewer-common';
/**
 * Scrolls the PDF Viewer document to the passed page number.
 *
 * @param rootElement The root HTML element of the PDF Viewer component.
 * @param pageNumber The page number.
 *
 * @example
 * ```jsx
 * function App() {
 * const pdfRef = React.useRef(null);
 * const handleClick = () => {
 *   scrollToPage(pdfRef.current.element, 3);
 * };
 * return (
 *   <div>
 *     <Button onClick={handleClick} >
 *       Scroll to Page 3
 *     </Button>
 *     <PDFViewer
 *       ref={pdfRef}
 *     />
 *   </div>
 *   )
 * }
 * ```
 */
export declare const scrollToPage: (rootElement: HTMLElement, pageNumber: number) => void;
