/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { Page } from '../paging/Page';
import { SyntheticEvent } from 'react';
import { RowHeightService } from '@progress/kno-react-common';
/**
 * @hidden
 */
export interface VirtualScrollInterface {
    table: HTMLTableElement | null;
    tableBody: HTMLTableSectionElement | null;
    container: HTMLDivElement | null;
    scrollHeightContainer: HTMLDivElement | null;
    total: number;
    scrollableVirtual: boolean;
    pageSize: number;
    PageChange: ((event: Page, syntheticEvent: SyntheticEvent<any>) => void) | null;
    fixedScroll: boolean;
    tableTransform: string;
    rowHeightService?: RowHeightService;
    reset: () => void;
    scrollHandler(e: SyntheticEvent<HTMLDivElement>): void;
    update(): void;
}
