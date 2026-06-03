/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { GridSortSettings } from '../interfaces/GridSortSettings';
import { SortDescriptor, CompositeFilterDescriptor, GroupDescriptor } from '@progress/kno-data-query';
import { ColumnDraggableProps } from '../drag/ColumnDraggable.js';
import { ExtendedColumnProps } from '../GridColumn.js';
import { GridColumnMenuProps } from '../interfaces/GridColumnMenuProps';
import { GridFilterOperators } from '../interfaces/GridFilterOperators';
import { GridClassStructure, SVGIcon } from '@progress/kno-react-common';
import { LocalizationService } from '@progress/kno-react-intl';
import { GridCellsSettings } from '../interfaces/GridCellsSettings';
import { GridColumnState } from '../interfaces/index.js';
import * as React from 'react';
/**
 * @hidden
 */
export interface HeaderRowProps extends ColumnDraggableProps {
    cells?: GridCellsSettings;
    sortable?: GridSortSettings;
    sort?: SortDescriptor[];
    group: GroupDescriptor[];
    groupable: boolean;
    filter?: CompositeFilterDescriptor;
    filterable?: boolean | undefined;
    filterOperators: GridFilterOperators;
    columns: ExtendedColumnProps[];
    columnsMap: number[][];
    columnMenu?: null | React.ComponentType<GridColumnMenuProps>;
    columnMenuIcon?: SVGIcon;
    show?: boolean;
    navigatable?: boolean;
    localization: LocalizationService;
    unstyled?: GridClassStructure;
    headerSelectionValue?: boolean;
    columnsState?: GridColumnState[];
}
/**
 * @hidden
 */
export declare const HeaderRow: (props: HeaderRowProps) => React.JSX.Element;
