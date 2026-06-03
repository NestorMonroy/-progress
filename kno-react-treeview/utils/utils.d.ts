/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
/**
 * @hidden
 * Calculate the position of the node in the TreeView. The result is used in the node rendering classes.
 */
declare const getNodePosition: (index: number, data: object[]) => "top" | "mid" | "bot";
export { getNodePosition };
