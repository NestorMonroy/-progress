/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
/**
 * Represents the props of the knoReact LocalizationProvider component.
 */
export interface LocalizationProviderProps {
    /**
     * The language that will be used by the child components.
     */
    language: string;
    /**
     * @hidden
     */
    children?: React.ReactNode;
}
