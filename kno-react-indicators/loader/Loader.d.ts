/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { LoaderProps } from './LoaderProps';
import * as React from 'react';
/**
 * The Loader ref.
 */
export interface LoaderHandle {
    /**
     * The Loader element.
     */
    element: HTMLSpanElement | null;
    /**
     * Focus the Loader.
     */
    focus: () => void;
}
/**
 * Represents the [knoReact Loader component](components/indicators/loader).
 *
 * @example
 * ```jsx
 * const App = () => {
 *   return (
 *       <Loader />
 *   );
 * };
 * ```
 */
export declare const Loader: React.ForwardRefExoticComponent<LoaderProps & React.RefAttributes<LoaderHandle | null>>;
