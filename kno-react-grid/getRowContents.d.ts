/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { EditDescriptor } from '@progress/kno-react-data-tools';
import { ExtendedColumnProps } from './GridColumn.js';
import { DataItemWrapper } from './utils/index.js';
import { GridCellProps } from './interfaces/GridCellProps';
import { GridCellRenderModel } from './interfaces/GridCellRenderModel';
import { GridColumnState } from './interfaces/GridColumnState';
import { GridCellsSettings } from './interfaces/GridCellsSettings';
import { IntlService, LocalizationService } from '@progress/kno-react-intl';
import { SortDescriptor } from '@progress/kno-data-query';
import * as React from 'react';
/**
 * @hidden
 */
export interface DataRowContext {
    leafColumns: ExtendedColumnProps[];
    columnsState: GridColumnState[];
    cellsToRender: GridCellRenderModel[];
    hasDynamicColSpan?: boolean;
    getCellsToRender?: (dataItem: any) => GridCellRenderModel[];
    idPrefix: string;
    gridClasses: any;
    unstyled?: any;
    localization?: LocalizationService;
    intl?: IntlService;
    cells?: GridCellsSettings;
    isRowReorderable?: boolean;
    sort?: SortDescriptor[];
    editable?: any;
    isClient?: boolean;
    isEditDialog?: boolean;
    dataItemKey?: string;
    select?: Record<string, any>;
    highlight?: Record<string, any>;
}
/**
 * @hidden
 */
export interface DataRowResult {
    /** Array of rendered cell elements for the row. */
    row: React.ReactElement[];
    /** Whether any cell in the row is in edit mode. */
    isInEdit: boolean;
    /** Whether the entire row is selected. */
    isSelected: boolean;
    /** Whether the entire row is highlighted. */
    isHighlighted: boolean;
}
/**
 * @hidden
 */
export declare function getRowContents(ctx: DataRowContext, edit: EditDescriptor | undefined, item: DataItemWrapper, rowId: string, rowDataIndex: number, isAlt: boolean, spannedRows?: Record<string, Required<GridCellProps['_rowSpan']>>): DataRowResult;
