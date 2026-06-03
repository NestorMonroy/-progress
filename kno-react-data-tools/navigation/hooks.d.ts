/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
/**
 * @hidden
 */
export declare const useTableKeyboardNavigation: (elementId: string, navigatable?: boolean) => {
    tabIndex?: undefined;
    "data-keyboardnavlevel"?: undefined;
    "data-keyboardnavid"?: undefined;
} | {
    tabIndex: number;
    "data-keyboardnavlevel": number;
    "data-keyboardnavid": string;
};
