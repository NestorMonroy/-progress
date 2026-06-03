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
export declare enum EXPANSION_ACTION {
    toggle = "EXPAND_TOGGLE",
    expand = "EXPAND_EXPAND",
    collapse = "EXPAND_COLLAPSE"
}
/**
 * @hidden
 */
export type ExpansionAction = {
    type: EXPANSION_ACTION;
    payload: any;
};
/**
 * @hidden
 */
export declare const useExpansion: (defaultValue: never[] | undefined, callback: any, target: any, compare?: (a: any, b: any) => boolean) => any[];
