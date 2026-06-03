/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { PanelBarItemProps } from '../interfaces/PanelBarItemProps';
/**
 * The arguments that are passed to the `onSelect` callback function.
 */
export interface PanelBarSelectEventArguments {
    /**
     * The selected PanelBar item.
     */
    target: React.ReactElement<PanelBarItemProps>;
    /**
     * The new expanded PanelBar items state.
     */
    expandedItems: string[];
}
