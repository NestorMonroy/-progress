/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { ProgressBarProps } from './interfaces/ProgressBarProps';
import { ProgressBarHandle } from './interfaces/ProgressBarHandle';
import * as React from 'react';
/**
 * Represents the [knoReact ProgressBar component](components/progressbars/progressbar).
 *
 * @example
 * ```jsx
 * const App = () => {
 *   return (
 *       <ProgressBar value={75}/>
 *   );
 * };
 * ```
 */
export declare const ProgressBar: React.ForwardRefExoticComponent<ProgressBarProps & React.RefAttributes<ProgressBarHandle | null>>;
