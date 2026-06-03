/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { SkeletonProps } from './SkeletonProps';
import * as React from 'react';
/**
 * The Skeleton ref.
 */
export interface SkeletonHandle {
    /**
     * The Skeleton element.
     */
    element: HTMLSpanElement | null;
    /**
     * Focus the Skeleton.
     */
    focus: () => void;
}
/**
 * Represents the [knoReact Skeleton component](components/indicators/skeleton).
 *
 * @example
 * ```jsx
 * const App = () => {
 *   return (
 *       <Skeleton shape={'text'} style={{width: 200}}/>
 *   );
 * };
 * ```
 */
export declare const Skeleton: React.ForwardRefExoticComponent<SkeletonProps & React.RefAttributes<SkeletonHandle | null>>;
