/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { ToolbarProps } from '@progress/kno-react-buttons';
/**
 * The props of the TreeListToolbar component.
 */
export interface TreeListToolbarProps extends ToolbarProps {
    /**
     * The React elements that will be rendered inside the toolbar of the TreeList.
     */
    children?: React.ReactNode;
}
