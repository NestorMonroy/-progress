/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { TreeListCellProps } from '../interfaces/TreeListCellProps';
import * as React from 'react';
export interface TreeListSelectionCellProps extends TreeListCellProps {
}
export declare const TreeListSelectionCell: {
    (props: TreeListSelectionCellProps): React.JSX.Element | null;
    displayName: string;
};
