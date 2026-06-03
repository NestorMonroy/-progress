/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
/**
 * The DrawerItem ref.
 */
export interface DrawerItemHandle {
    /**
     * The DrawerItem element.
     */
    element: HTMLLIElement | null;
    /**
     * Focus the DrawerItem.
     */
    focus: () => void;
    /**
     * The props of the DrawerItem.
     */
    props: any;
}
