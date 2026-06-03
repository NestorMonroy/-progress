/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { TreeListCellProps } from '../../interfaces/TreeListCellProps';
import * as React from 'react';
export interface TreeListNumericEditorProps extends TreeListCellProps {
}
export declare const TreeListNumericEditor: {
    (props: TreeListNumericEditorProps): React.ReactElement<HTMLTableCellElement, string | React.JSXElementConstructor<any>> | null;
    displayName: string;
};
