/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { SpreadsheetProps, SpreadsheetHandle } from './SpreadsheetProps';
import * as React from 'react';
/**
 * @hidden
 */
export declare const toolsValueMap: any;
/**
 * Represents the [knoReact Spreadsheet component](components/spreadsheet).
 *
 * Accepts properties of type [SpreadsheetProps](components/spreadsheet/api/spreadsheetprops).
 * Obtaining the ref will give you an object of type [SpreadsheetHandle](components/spreadsheet/api/spreadsheethandle).
 *
 * @example
 * ```jsx
 * const sheets = [
 *   {
 *     name: 'Food Order',
 *     rows: [
 *       {
 *         cells: [
 *           {
 *             value: 216321,
 *             textAlign: 'center',
 *           },
 *         ],
 *       },
 *     ],
 *     columns: [
 *       {
 *         width: 100,
 *       },
 *     ],
 *   },
 * ];
 * const App = () => {
 *   return (
 *     <Spreadsheet
 *       style={{
 *         width: "100%",
 *         height: 680,
 *       }}
 *       defaultProps={{
 *         sheets,
 *       }}
 *     />
 *   );
 * };
 * ```
 */
export declare const Spreadsheet: React.ForwardRefExoticComponent<SpreadsheetProps & React.RefAttributes<SpreadsheetHandle | null>>;
