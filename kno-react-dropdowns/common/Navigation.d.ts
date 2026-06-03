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
export declare class Navigation {
    navigate(args: {
        keyCode: number;
        current: number;
        max: number;
        min: number;
        skipItems?: number;
    }): number | undefined;
    private next;
}
