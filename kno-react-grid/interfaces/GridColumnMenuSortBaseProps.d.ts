/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { SortDescriptor } from '@progress/kno-data-query';
import { GridSortSettings } from './GridSortSettings';
import { GridColumnMenuBaseProps } from './GridColumnMenuBaseProps';
/**
 *  The props passed to the ColumnMenu sort component.
 */
export interface GridColumnMenuSortBaseProps extends GridColumnMenuBaseProps {
    /**
     * The sortable option of the column.
     */
    sortable?: GridSortSettings;
    /**
     * The current sort state of the Grid. It takes a value of type [SortDescriptor](components/datatools/api/sortdescriptor)[]
     */
    sort?: SortDescriptor[];
    /**
     * The method that will be called to notify the parent Grid about a sort change.
     */
    onSortChange?: (descriptors: SortDescriptor[], e: React.SyntheticEvent<any>) => void;
}
