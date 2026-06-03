/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { GridReorderDropPosition } from '../interfaces/GridReorderDropDir';
/**
 * @hidden
 */
export declare const dropDirection: {
    [key: string]: GridReorderDropPosition;
};
/**
 * @hidden
 */
export declare function getOffset(element: any): {
    top: number;
    left: number;
};
