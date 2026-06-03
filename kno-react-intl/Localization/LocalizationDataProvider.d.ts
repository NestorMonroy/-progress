/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
/**
 * @hidden Currently used only externally through the ServerGlobalization of the Grid.
 */
export type LocalizationDataProviderProps = {
    data: any[];
    language: string;
    children: React.ReactNode;
};
/**
 * @hidden Currently used only externally through the ServerGlobalization of the Grid.
 */
export declare const LocalizationDataProvider: (props: LocalizationDataProviderProps) => import('react').ReactNode;
