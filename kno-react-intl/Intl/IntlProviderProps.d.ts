/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
/**
 * Represents the props of the knoReact IntlProvider component.
 */
export interface IntlProviderProps {
    /**
     * The locale that will be used by the child components.
     */
    locale: string;
    /**
     * @hidden
     */
    children?: React.ReactNode;
}
