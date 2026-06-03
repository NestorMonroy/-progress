/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
/**
 * Represents a key-value pair collection where keys are strings.
 */
export interface KeyValue<ValueType> {
    [name: string]: ValueType;
}
