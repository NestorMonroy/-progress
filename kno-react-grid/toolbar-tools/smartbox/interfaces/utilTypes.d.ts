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
export type BooleanOrConfig<T = {}> = boolean | T;
/**
 * Configuration options for the SmartBox history feature.
 */
export interface GridSmartBoxHistoryProps {
    /**
     * Sets the maximum number of history items to store.
     */
    size: number;
    /**
     * Sets the format string for displaying timestamps in history items.
     * Uses Intl date format patterns (e.g., 'HH:mm', 'dd/MM/yyyy HH:mm').
     */
    timestampFormat: string;
}
