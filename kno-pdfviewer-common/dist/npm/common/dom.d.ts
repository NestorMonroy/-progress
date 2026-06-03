export declare const addClass: (className: any, element: any) => void;
export declare const removeClass: (className: any, element: any) => void;
export declare const hasClass: (className: any, element: any) => boolean;
export declare const createElement: <T>(name: string, className: string, styles: {
    [key: string]: string;
}) => T;
/**
 * Scrolls the PDFViewer document to the passed page number.
 *
 * @param rootElement The root HTML element of the PDFViewer component.
 * @param pageNumber The page number.
 */
export declare const scrollToPage: (rootElement: HTMLElement, pageNumber: number) => void;
