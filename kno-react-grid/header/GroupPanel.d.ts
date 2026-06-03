/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { GroupDescriptor } from '@progress/kno-data-query';
import { ColumnDraggableProps } from '../drag/ColumnDraggable.js';
import { ExtendedColumnProps } from '../GridColumn.js';
import * as React from 'react';
/**
 * @hidden
 */
export interface GroupPanelProps extends ColumnDraggableProps {
    columns: ExtendedColumnProps[];
    group: GroupDescriptor[];
    ariaControls: string;
}
/**
 * @hidden
 */
export declare const GroupPanel: (props: GroupPanelProps) => React.JSX.Element;
