/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { Page } from './paging/Page';
import { VirtualScrollInterface } from './interfaces/VirtualScrollInterface';
import { RowHeightService } from '@progress/kno-react-common';
import * as React from 'react';
/**
 * @hidden
 */
export declare class VirtualScroll implements VirtualScrollInterface {
    table: HTMLTableElement | null;
    tableBody: HTMLTableSectionElement | null;
    container: HTMLDivElement | null;
    scrollHeightContainer: HTMLDivElement | null;
    total: number;
    scrollableVirtual: boolean;
    pageSize: number;
    PageChange: ((event: Page, syntheticEvent: React.SyntheticEvent<any>) => void) | null;
    fixedScroll: boolean;
    tableTransform: string;
    rowHeightService?: RowHeightService;
    private reactVersion;
    private scrollSyncing;
    private firstToLoad;
    private lastScrollTop;
    private firstLoaded;
    private lastLoaded;
    constructor();
    reset(): void;
    scrollHandler(e: React.SyntheticEvent<HTMLDivElement>): void;
    update(): void;
    private loadPage;
    private loadPageWithBuffer;
    private translate;
    private changePage;
    private adjustScroll;
    private setScrollHeightContainerHeight;
    private getItemHeights;
    private getTotalHeight;
    private getExpectedTotalHeight;
}
