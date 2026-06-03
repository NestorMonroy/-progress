/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { ChunkProgressBarHandle } from './interfaces/ChunkProgressBarHandle';
import { ChunkProgressBarProps } from './interfaces/ChunkProgressBarProps';
import * as React from 'react';
/**
 * Represents the [knoReact ChunkProgressBar component](components/progressbars/chunkprogressbar).
 *
 * @example
 * ```jsx
 * const App = () => {
 *   return (
 *       <ChunkProgressBar value={40}/>
 *   );
 * };
 * ```
 */
export declare const ChunkProgressBar: React.ForwardRefExoticComponent<ChunkProgressBarProps & React.RefAttributes<ChunkProgressBarHandle | null>>;
