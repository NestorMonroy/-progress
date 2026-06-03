/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { GanttColumnProps } from './GanttColumnProps';
import { GanttNoRecordsProps } from './GanttNoRecordsProps';
import { SortDescriptor, FilterDescriptor, CompositeFilterDescriptor } from '@progress/kendo-data-query';
import { GanttRowProps } from './GanttRowProps';
import { GanttSelectableSettings } from './GanttSelectableSettings';
import { GanttSortSettings } from './GanttSortSettings';
/**
 * @hidden
 */
export interface GanttBaseProps {
    /**
     * Represents the component that will be rendered when the `data` property of the Gantt is empty or undefined.
     */
    noRecords?: React.ReactElement<GanttNoRecordsProps>;
    /**
     * A collection of `GanttColumnProps` for creating columns.
     */
    columns?: GanttColumnProps[];
    /**
     * Specifies the id of the timezone that will be displayed in the Gantt.
     * For example, `Europe/Sofia`.
     *
     * Defaults to `Etc/UTC`.
     */
    timezone?: string;
    /**
     * If set to `true`, the user can resize columns by dragging the edges (resize handles) of their header cells.
     *
     * @default false
     */
    resizable?: boolean;
    /**
     * Enables sorting ([see example](components/gantt/sorting)).
     */
    sortable?: GanttSortSettings;
    /**
     * The descriptors by which the data is sorted. Applies the sorting styles and buttons to the affected columns.
     */
    sort?: SortDescriptor[];
    /**
     * The descriptors by which the data is filtered ([more information and examples](components/gantt/filtering)).
     * This affects the values and buttons in the `FilterRow` of the Gantt.
     */
    filter?: FilterDescriptor[];
    /**
     * If set to `true`, the user can reorder columns by dragging their header cells.
     *
     * @default false
     */
    reorderable?: boolean;
    /**
     * If set to `true`, the user can use dedicated shortcuts to interact with the Gantt.
     * By default, navigation is disabled and the Gantt content is accessible in the normal tab sequence.
     *
     * @default false
     */
    navigatable?: boolean;
    /**
     * The descriptors by which the data is filtered in the column menu.
     */
    columnMenuFilter?: CompositeFilterDescriptor[];
    /**
     * The component to render as the column menu.
     */
    columnMenu?: React.ComponentType<any>;
    /**
     * The Gantt row component.
     */
    row?: React.ComponentType<GanttRowProps>;
    /**
     * The Gantt selectable settings.
     */
    selectable?: GanttSelectableSettings;
}
