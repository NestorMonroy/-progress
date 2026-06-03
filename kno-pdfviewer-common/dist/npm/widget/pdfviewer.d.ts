import { Component } from "../common/main";
import { PDFReadParameters } from "../utils";
import { SearchService } from "../search";
import { Scroller } from "../scroller";
import { SaveOptions } from "@progress/kno-file-saver";
import { PDFPageProxy } from "pdfjs-dist/legacy/build/pdf.mjs";
import { DocumentInitParameters, PDFDocumentProxy, TypedArray } from "pdfjs-dist/types/src/display/api";
import { AnnotationEditorUIManager } from "../annotations/annotation-editor-ui-manager";
import { EventBus } from '../annotations/shared/event_utils';
import { Page } from "./page";
import { AnnotationStorage } from "../annotations/helpers/annotation-storage";
import { PDFLinkService } from "../links/link-service";
import { PdfViewerInteractionMode } from "../enums/PdfViewerInteractionMode";
export declare class PdfViewer extends Component {
    #private;
    options: any;
    interactionMode: PdfViewerInteractionMode;
    printContainer: HTMLElement;
    _scrollMode: number;
    isInPresentationMode: boolean;
    _currentPageNumber: number;
    linkService: PDFLinkService;
    annotationStorage: AnnotationStorage;
    _annotationStorageModified: boolean;
    _hasAnnotationEditors: boolean;
    annotationEditorUIManager: AnnotationEditorUIManager;
    state: any;
    pdfDocument: PDFDocumentProxy;
    pages: Array<Page>;
    wrapper: HTMLElement;
    documentContainer: HTMLDivElement;
    documentScroller: Scroller;
    searchService: SearchService;
    shouldPreventScroll: boolean;
    eventBus: EventBus;
    _isCtrlKeyDown: boolean;
    _isPinching: boolean;
    _touchInfo: {
        touch0X: number;
        touch0Y: number;
        touch1X: number;
        touch1Y: number;
    } | null;
    _wheelUnusedFactor: number;
    _touchUnusedFactor: number;
    _pendingPinchFactor: number;
    _pinchAC: AbortController | null;
    constructor(element: any, options: any);
    destroy(): void;
    throwIfInvalidOptions(): void;
    set annotationEditorParams({ type, value }: any);
    get annotationEditorMode(): any;
    set annotationEditorMode({ mode, editId, isFromKeyboard }: any);
    getAnnotationMode(): number;
    getPrintUnits(): number;
    getPdfToCssUnits(): number;
    getPrintScale(): number;
    getPrintResolution(): number;
    getRenderScale(): number;
    extendOptions(options: any): void;
    setOptions(options: any): void;
    bindEvents(): void;
    bindPagesWheel(): void;
    unbindEvents(): void;
    unbindPagesWheel(): void;
    setState(newState: any): void;
    resetState(): void;
    initEventBus(): void;
    destroyEventBus(): void;
    initLinkService(): void;
    initAnnotationEditorUIManager(): void;
    setAnnotationEditorUIManagerScale(): void;
    destroyAnnotationEditorUIManager(): void;
    bindEventBusAnnotationsEvents(): void;
    unbindEventBusAnnotationsEvents(): void;
    loadFile(args: any): void;
    loadDocument(options: any): void;
    initDocumentAnnotationStorage(pdfDocument: any): void;
    _initializeAnnotationStorageCallbacks(pdfDocument: any): void;
    drawPagesFromPromisesAsync(pagesPromises: any): Promise<import("pdfjs-dist/types/src/display/api").PDFPageProxy[]>;
    drawPagesAsync(pdfPages: Array<PDFPageProxy>): Array<HTMLElement>;
    createBlankPageElements({ pdfPage, zoom }: {
        pdfPage: any;
        zoom: any;
    }): {
        canvasContext: CanvasRenderingContext2D;
        canvasWrapper: any;
        canvas: HTMLCanvasElement;
        viewport: any;
        scaleNum: number;
        pageElement: HTMLDivElement;
        styles: {
            width: string;
            height: string;
        };
    };
    getDocumentParameters(options: PDFReadParameters): ArrayBuffer | TypedArray | DocumentInitParameters;
    appendPages(pages: Array<HTMLElement>): void;
    appendPage(page: HTMLElement, pageIndex?: number): void;
    drawPageAsync({ pageIndex }: {
        pageIndex?: number;
    }): Promise<HTMLDivElement>;
    createPageElements({ pdfPage, zoom, printUnits }: {
        pdfPage?: any;
        zoom?: number;
        printUnits?: any;
    }): {
        canvasContext: CanvasRenderingContext2D;
        canvasWrapper: any;
        canvas: HTMLCanvasElement;
        viewport: any;
        scaleNum: number;
        pageElement: HTMLDivElement;
        styles: {
            width: string;
            height: string;
        };
    };
    triggerError: (e: any) => void;
    triggerPageRendered(e: any): void;
    triggerPagesLoad(e: any): void;
    triggerZoomStart(e: any): void;
    triggerZoomEnd(e: any): void;
    triggerDownload(e: any): boolean;
    triggerAnnotationEditorToolBarShow(e: any): void;
    triggerAnnotationEditorToolBarHide(e: any): void;
    triggerPrintEnd: (e: any) => void;
    onPagesLoad: (args: any) => void;
    clearDocument(): void;
    clearDocumentState(): void;
    clearPagesState(): void;
    initPageComponents(pdfPages: any): void;
    destroyPageComponents(): void;
    clearPagesElements(): void;
    initDocumentContainer(): void;
    initDocumentScroller(element: any): void;
    createDocumentScroller(element: any, options: any): Scroller;
    destroyDocumentScroller(): void;
    enableDocumentScrollEventsTracking(): void;
    disableDocumentScrollEventsTracking(): void;
    onDocumentScrollerScroll: (e: any) => void;
    getCurrentPageIndex(): number;
    tryTriggerScroll: (e: any) => void;
    downloadFile({ fileName, saveOptions }: {
        fileName: any;
        saveOptions?: {};
    }): void;
    downloadDocument({ options, fileName, saveOptions }: {
        options: any;
        fileName?: string;
        saveOptions?: {};
    }): void;
    getFileAsByteArray(): Promise<Uint8Array | null>;
    private extractPdfData;
    saveFile(blob: Blob, fileName: string, saveOptions: SaveOptions): boolean;
    hasDocument(): boolean;
    zoom(args: any): void;
    calculateZoomLevel({ zoomLevel, zoomLevelType, currentZoom }: {
        zoomLevel: any;
        zoomLevelType: any;
        currentZoom: any;
    }): number;
    reloadFile(pdfDoc: PDFDocumentProxy): void;
    setHiddenCanvasStyles(): void;
    printFile(): void;
    loadDocumentForPrintAsync({ zoomLevel, force }: {
        zoomLevel?: number;
        force?: boolean;
    }): Promise<any>;
    printDocumentAsync: () => Promise<any>;
    getPagesPrintContentAsync(printContainer: any): any[];
    initPrintContainer(): void;
    openPrintDialog(): void;
    cacheZoomLevelBeforePrint(): void;
    restoreZoomLevelBeforePrint(): void;
    searchText(options?: {
        text: string;
        matchCase: boolean;
    }): {
        startOffset: number;
        endOffset: number;
    }[];
    clearSearch(): void;
    initSearchService(): void;
    destroySearchService(): void;
    goToNextSearchMatch(): void;
    goToPreviousSearchMatch(): void;
    getPagesContainer(): HTMLElement;
    getDocumentContainer(): HTMLDivElement;
    getPagesElements(): unknown[];
    scrollToSearchMatch(matchElement: HTMLElement): void;
    resetInteractionMode(): void;
    setInteractionMode(args: any): void;
    enableScrollerEventsTracking(): void;
    disableScrollerEventsTracking(): void;
    setScaleFactor(scaleFactor: number): void;
    onDocumentWheel: (e: any) => void;
    _isTrackpadPinch(e: WheelEvent): boolean;
    _accumulateFactor(previousScale: number, factor: number, prop: '_wheelUnusedFactor' | '_touchUnusedFactor'): number;
    _onKeyDown: (e: KeyboardEvent) => void;
    _onKeyUp: (e: KeyboardEvent) => void;
    bindPinchToZoomEvents(): void;
    unbindPinchToZoomEvents(): void;
    _resetPinchState(): void;
    get _minTouchDistanceToPinch(): number;
    _onGestureEvent: (e: Event) => void;
    _onTouchStart: (e: TouchEvent) => void;
    _onTouchMove: (e: TouchEvent) => void;
    _onTouchEnd: (e: TouchEvent) => void;
    _applyPinchTransform(prevDist: number, currDist: number): void;
    _clearPinchTransform(): void;
    activatePageNumber(pageNumber: any): void;
    scrollToPage({ pageNumber }: {
        pageNumber: any;
    }): void;
    scrollDocument({ left, top }: {
        left: any;
        top: any;
    }): void;
    getPageNumberScrollOffset(pageNumber: any): {
        left: number;
        top: number;
    };
    getPageScrollOffset(page: Page): number;
    getPageByNumber(pageNumber: any): Page;
    addHighlightAnnotation(): void;
    setHighlightColor(color: any): void;
    deleteAnnotation(): void;
    resetAnnotationEditorMode(): void;
    setAnnotationEditorMode(modeDescriptor: any): void;
    setAnnotationMode(mode: any): void;
    setEditAnnotationMode(): void;
    resetAnnotationMode(): void;
    setFreeTextColor(color: any): void;
    setFreeTextFontSize(fontSize: any): void;
    executeAnnotationCommand({ commandType, commandValue }: {
        commandType: any;
        commandValue: any;
    }): void;
    isValidAnnotationEditorMode(mode: any): boolean;
    cleanupSwitchAnnotationEditorMode(): void;
    _getVisiblePages(): Page[];
    get _layerProperties(): any;
    /**
     * Scrolls page into view.
     * @param {ScrollPageIntoViewParameters} params
     */
    scrollPageIntoView({ pageNumber, destArray, allowNegativeOffset, ignoreDestinationZoom }: {
        pageNumber: any;
        destArray?: any;
        allowNegativeOffset?: boolean;
        ignoreDestinationZoom?: boolean;
    }): void;
    /**
     * @returns {boolean} Whether the pageNumber is valid (within bounds).
     * @private
     */
    _setCurrentPageNumber(val: any, resetCurrentPageView?: boolean): boolean;
}
