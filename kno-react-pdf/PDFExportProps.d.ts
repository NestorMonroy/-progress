/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { PaperSize, PageMargin } from '@progress/kno-drawing/pdf';
/**
 * Represents the props of the knoReact PDFExport component.
 */
export interface PDFExportProps {
    /**
     * @hidden
     */
    children?: React.ReactNode;
    /**
     * The author (metadata) of the PDF document.
     *
     * @example
     * ```jsx
     * <PDFExport author="John Doe" />
     * ```
     */
    author?: string;
    /**
     * Sets whether to produce actual hyperlinks in the exported PDF file.
     * It is also possible to set a CSS selector. All matching links will be ignored.
     *
     * @example
     * ```jsx
     * <PDFExport avoidLinks={true} />
     * <PDFExport avoidLinks=".no-link" />
     * ```
     */
    avoidLinks?: boolean | string;
    /**
     * Sets a CSS selector that determines the elements which cause the page breaks.
     *
     * @example
     * ```jsx
     * <PDFExport forcePageBreak=".page-break" />
     * ```
     */
    forcePageBreak?: string;
    /**
     * Sets a CSS selector that determines the elements which should not be split across the pages.
     *
     * @example
     * ```jsx
     * <PDFExport keepTogether=".keep-together" />
     * ```
     */
    keepTogether?: string;
    /**
     * Sets the creator of the PDF document.
     *
     * @default "knoReact PDF Generator"
     */
    creator?: string;
    /**
     * Sets the date when the PDF document is created.
     *
     * @default new Date()
     */
    date?: Date;
    /**
     * The forced resolution of the images in the exported PDF document. By default, the images are exported at their full resolution.
     */
    imageResolution?: number;
    /**
     * Sets the name of the exported PDF file.
     *
     * @default "export.pdf"
     *
     * @example
     * ```jsx
     * <PDFExport fileName="custom-file.pdf" />
     * ```
     */
    fileName?: string;
    /**
     * If set to `true`, the content is forwarded to `proxyURL` even if the browser supports local saving of files.
     */
    forceProxy?: boolean;
    /**
     * The keywords (metadata) of the PDF document.
     */
    keywords?: string;
    /**
     * Indicates if the page is in a landscape orientation. By default, the page is in a portrait orientation.
     *
     * @default false
     */
    landscape?: boolean;
    /**
     * Sets the margins of the page.
     *
     * The supported units are:
     * * `"mm"`
     * * `"cm"`
     * * `"in"`
     * * `"pt"` (default).
     *
     * > Numbers are considered to be points (`"pt"`).
     */
    margin?: string | number | PageMargin;
    /**
     * A React functional or class component which is used as a template that is inserted into each page of the PDF document. The number of the current page (`pageNum`) and the total number of pages (`totalPages`) are passed to the component as properties.
     */
    pageTemplate?: any;
    /**
     * Sets the paper size of the PDF document.
     *
     * If set, the content will be split across multiple pages. This enables the `repeatHeaders` and `scale` options, and allows you to specify a template.
     *
     * The supported values are:
     * * A predefined size. The supported paper sizes are: `A0-A10`, `B0-B10`, `C0-C10`, `Executive`, `Folio`, `Legal`, `Letter`, `Tabloid`.
     * * An array of two numbers which specify the width and height in points (1pt = 1/72in).
     * * An array of two strings which specify the width and height in units. The supported units are `"mm"`, `"cm"`, `"in"`, and `"pt"`.
     *
     * @default "auto"
     *
     * @example
     * ```jsx
     * <PDFExport paperSize="A4" />
     * ```
     */
    paperSize?: PaperSize;
    /**
     * Sets if the `<thead>` elements of the tables are repeated on each page.
     *
     * @example
     * ```jsx
     * <PDFExport repeatHeaders={true} />
     * ```
     */
    repeatHeaders?: boolean;
    /**
     * Sets a scale factor for the PDF content.
     *
     * @default 1
     *
     * @example
     * ```jsx
     * <PDFExport scale={0.8} />
     * ```
     */
    scale?: number;
    /**
     * Sets a key/value dictionary of form values for the proxy. You can use it to submit Anti-Forgery tokens and other metadata.
     */
    proxyData?: {
        [key: string]: string;
    };
    /**
     * The URL of the server-side proxy which streams the file to the end user. You need to use a proxy if the browser is not capable of saving files locally&mdash;for example, Internet Explorer 9 and Safari. It is your responsibility to implement the server-side proxy.
     *
     * In the request body, the proxy receives a `POST` request with the following parameters:
     * - `"contentType"`&mdash;The MIME type of the file.
     * - `"base64"`&mdash;The base-64 encoded file content.
     * - `"fileName"`&mdash;The file name, as requested by the caller.
     *
     * The proxy returns the decoded file with the `"Content-Disposition"` header set to `attachment;
     * filename="<fileName.pdf>"`.
     */
    proxyURL?: string;
    /**
     * Sets a name or keyword which indicates where to display the document that is returned from the proxy. To display the document in a new window or iframe, the proxy has to have the `"Content-Disposition"` header set to `inline; filename="<fileName.pdf>"`.
     *
     * @default "_self"
     */
    proxyTarget?: string;
    /**
     * The producer (metadata) of the PDF document.
     */
    producer?: string;
    /**
     * The subject (metadata) of the PDF document.
     */
    subject?: string;
    /**
     * The title (metadata) of the PDF document.
     */
    title?: string;
}
