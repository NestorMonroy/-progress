/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { DialogProps } from '@progress/kno-react-dialogs';
import { GridColumnProps } from './GridColumnProps';
/**
 * Represents the props of the knoReact Grid Edit Dialog component.
 */
export type GridEditDialogProps = DialogProps & {
    /**
     * The columns of the Grid.
     */
    columns?: GridColumnProps[];
    /**
     * The data item that is currently being edited.
     */
    dataItem?: any;
    /**
     * The method that is called when the user submits the edit form.
     */
    onSubmit?: (newDataItem: any, event?: React.SyntheticEvent<any>) => void;
    /**
     * The method that is called when the user cancels the edit form.
     */
    onCancel?: (event?: React.SyntheticEvent<any>) => void;
};
