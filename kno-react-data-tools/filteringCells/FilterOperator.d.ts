/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
/**
 * A filter operator object.
 */
export interface FilterOperator {
    /**
     * The label of the operator.
     */
    text: string;
    /**
     * The operator value.
     */
    operator: any;
}
