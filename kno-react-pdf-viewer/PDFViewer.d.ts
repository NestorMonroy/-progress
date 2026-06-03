/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { ToolbarProps } from '@progress/kno-react-buttons';
import { SaveOptions } from '@progress/kno-file-saver';
import { TypedArray } from '@progress/kno-pdfviewer-common';
import * as React from 'react';
export type PDFViewerTool = 'pager' | 'spacer' | 'zoomInOut' | 'zoom' | 'selection' | 'search' | 'open' | 'download' | 'print';
interface PDFViewerEvent {
    /**
     * The event target object.
     */
    target: PDFViewerHandle;
}
/**
 * The knoReact [PDF Viewer](components/pdf-viewer/api/pdfviewer) ErrorEvent object.
 */
export interface ErrorEvent extends PDFViewerEvent {
    /**
     * The raised error.
     */
    error: Error | {
        message: string;
    };
}
/**
 * The knoReact [PDF Viewer](components/pdf-viewer/api/pdfviewer) DownloadEvent object.
 */
export interface DownloadEvent extends PDFViewerEvent {
    /**
     * The Blob object.
     */
    blob: Blob;
    /**
     * Sets the name for saving the file.
     */
    fileName: string;
    /**
     * Sets the options for saving the file.
     */
    saveOptions: SaveOptions;
}
/**
 * The knoReact [PDF Viewer](components/pdf-viewer/api/pdfviewer) LoadEvent object.
 */
export interface LoadEvent extends PDFViewerEvent {
}
/**
 * The knoReact [PDF Viewer](components/pdf-viewer/api/pdfviewer) ZoomEvent object.
 */
export interface ZoomEvent extends PDFViewerEvent {
    /**
     * The zoom value.
     */
    zoom: number;
    /**
     * A React `SyntheticEvent`.
     */
    syntheticEvent: React.SyntheticEvent<any>;
}
/**
 * The knoReact [PDF Viewer](components/pdf-viewer/api/pdfviewer) PageEvent object.
 */
export interface PageEvent extends PDFViewerEvent {
    /**
     * The page number.
     */
    page: number;
    /**
     * A React `SyntheticEvent`.
     */
    syntheticEvent: React.SyntheticEvent<any>;
}
/**
 * The props of the knoReact [PDF Viewer](components/pdf-viewer/api/pdfviewer) component.
 */
export interface PDFViewerProps {
    /**
     * Sets the URL of the PDF file.
     *
     * @example
     * ```jsx
     * <PDFViewer url="https://example.com/sample.pdf" />
     * ```
     */
    url?: string;
    /**
     * Sets the data of the PDF file in Base64 format.
     *
     * @example
     * ```jsx
     * <PDFViewer data="JVBERi0xLjQKJ..." />
     * ```
     */
    data?: string;
    /**
     * Sets the raw binary data buffer of the PDF file.
     *
     * @example
     * ```jsx
     * <PDFViewer arrayBuffer={new ArrayBuffer(1024)} />
     * ```
     */
    arrayBuffer?: ArrayBuffer;
    /**
     * Sets the data of the PDF file in typed array format.
     *
     * @example
     * ```jsx
     * <PDFViewer typedArray={new Uint8Array([0x25, 0x50, 0x44, 0x46])} />
     * ```
     */
    typedArray?: TypedArray;
    /**
     * Sets the additional styles for the PDF Viewer component.
     *
     * @example
     * ```jsx
     * <PDFViewer style={{ height: '500px' }} />
     * ```
     */
    style?: React.CSSProperties;
    /**
     * Sets the file name used to save the file when you click the download tool.
     *
     * @example
     * ```jsx
     * <PDFViewer saveFileName="document.pdf" />
     * ```
     */
    saveFileName?: string;
    /**
     * Sets the options for saving the file when you click the download tool.
     *
     * @example
     * ```jsx
     * <PDFViewer saveOptions={{ forceProxy: true }} />
     * ```
     */
    saveOptions?: SaveOptions;
    /**
     * Sets the tools collection that renders in the toolbar.
     *
     * @default - ['pager', 'spacer', 'zoomInOut', 'zoom', 'selection', 'spacer', 'search', 'open', 'download', 'print']
     *
     * @example
     * ```jsx
     * <PDFViewer tools={['pager', 'zoom']} />
     * ```
     */
    tools?: PDFViewerTool[];
    /**
     * Sets the zoom levels populated in the ComboBox component.
     *
     * @example
     * ```jsx
     * <PDFViewer zoomLevels={[{ id: 1, value: 1, text: '100%' }]} />
     * ```
     */
    zoomLevels?: {
        id: number;
        priority: number;
        value: number;
        text: string;
        type: string;
        locationString?: string;
    }[];
    /**
     * Sets the zoom value of the document.
     *
     * @example
     * ```jsx
     * <PDFViewer zoom={1.5} />
     * ```
     */
    zoom?: number;
    /**
     * Sets the default zoom value.
     *
     * @default 1
     *
     * @example
     * ```jsx
     * <PDFViewer defaultZoom={1} />
     * ```
     */
    defaultZoom?: number;
    /**
     * Sets the minimum zoom value.
     *
     * @default 0.5
     *
     * @example
     * ```jsx
     * <PDFViewer minZoom={0.5} />
     * ```
     */
    minZoom?: number;
    /**
     * Sets the maximum zoom value.
     *
     * @default 4
     *
     * @example
     * ```jsx
     * <PDFViewer maxZoom={4} />
     * ```
     */
    maxZoom?: number;
    /**
     * Sets the zoom rate value.
     *
     * @default 0.25
     *
     * @example
     * ```jsx
     * <PDFViewer zoomRate={0.25} />
     * ```
     */
    zoomRate?: number;
    /**
     * Fires when an error occurs.
     *
     * @example
     * ```jsx
     * <PDFViewer onError={(event) => console.log(event.error)} />
     * ```
     */
    onError?: (event: ErrorEvent) => void;
    /**
     * Fires when a PDF document has been loaded.
     *
     * @example
     * ```jsx
     * <PDFViewer onLoad={() => console.log('Document loaded')} />
     * ```
     */
    onLoad?: (event: LoadEvent) => void;
    /**
     * Fires when the download tool has been clicked. To prevent the download, return `false`.
     *
     * @example
     * ```jsx
     * <PDFViewer onDownload={(event) => console.log(event.fileName)} />
     * ```
     */
    onDownload?: (event: DownloadEvent) => boolean | void;
    /**
     * Fires when the zoom has changed.
     *
     * @example
     * ```jsx
     * <PDFViewer onZoom={(event) => console.log(event.zoom)} />
     * ```
     */
    onZoom?: (event: ZoomEvent) => void;
    /**
     * Fires when the page has changed.
     *
     * @example
     * ```jsx
     * <PDFViewer onPageChange={(event) => console.log(event.page)} />
     * ```
     */
    onPageChange?: (event: PageEvent) => void;
    /**
     * Fires when the toolbar component is about to be rendered. Use it to override the default appearance of the toolbar.
     *
     * @example
     * ```jsx
     * <PDFViewer onRenderToolbar={(defaultRendering) => <CustomToolbar />} />
     * ```
     */
    onRenderToolbar?: (defaultRendering: React.ReactElement<ToolbarProps>) => React.ReactNode;
    /**
     * Fires when the content component is about to be rendered. Use it to override the default appearance of the content.
     *
     * @example
     * ```jsx
     * <PDFViewer onRenderContent={(defaultRendering) => <CustomContent />} />
     * ```
     */
    onRenderContent?: (defaultRendering: React.ReactElement<HTMLDivElement>) => React.ReactNode;
    /**
     * Fires when the loading indication component is about to be rendered. Use it to override the default appearance of the loading.
     *
     * @example
     * ```jsx
     * <PDFViewer onRenderLoader={(defaultRendering) => <CustomLoader />} />
     * ```
     */
    onRenderLoader?: (defaultRendering: React.ReactElement<HTMLDivElement> | null) => React.ReactNode;
}
/**
 * Represents the object which is passed to the [`ref`](https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom)
 * callback of the [PDF Viewer](components/pdf-viewer/api/pdfviewer) component.
 */
export interface PDFViewerHandle {
    /**
     * The root DOM element of the PDF Viewer component.
     */
    element: HTMLDivElement | null;
    /**
     * The props of the PDF Viewer component.
     */
    props: PDFViewerProps;
    /**
     * The `PDF.js` document loaded in the PDF Viewer component.
     */
    document: any;
    /**
     * The `PDF.js` pages loaded in the PDF Viewer component.
     */
    pages: any[];
}
/**
 * Represents the [knoReact PDF Viewer component](components/pdf-viewer/api/pdfviewerprops).
 *
 * @example
 * ```jsx
 * function App() {
 *  return <PDFViewer url="sample.pdf" />;
 * }
 * ```
 */
export declare const PDFViewer: React.ForwardRefExoticComponent<PDFViewerProps & React.RefAttributes<PDFViewerHandle | null>>;
export {};
