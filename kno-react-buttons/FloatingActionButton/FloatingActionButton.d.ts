/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { FloatingActionButtonHandle } from './interfaces/FloatingActionButtonHandle';
import { FloatingActionButtonProps } from './interfaces/FloatingActionButtonProps';
import * as React from 'react';
/**
 * Represents the [knoReact FloatingActionButton component](components/buttons/floatingactionbutton).
 *
 * @example
 * ```jsx
 * const App = () => {
 *   return (
 *     <FloatingActionButton icon="plus" text="Create"/>
 *   );
 * };
 * ```
 */
export declare const FloatingActionButton: React.ForwardRefExoticComponent<FloatingActionButtonProps & React.RefAttributes<FloatingActionButtonHandle | null>>;
