/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
/** @hidden */
export interface RowSyncArgs {
    element: HTMLElement | null;
    selector: string;
    horizontalAttribute: string;
    verticalAttribute: string;
    applyTo: string;
    syncHeight?: boolean;
}
/** @hidden */
export declare const useRowSync: (args: RowSyncArgs, inputs?: any[]) => void;
