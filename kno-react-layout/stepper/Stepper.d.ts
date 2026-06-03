/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { StepperProps } from './interfaces/StepperProps';
import { StepperHandle } from './interfaces/StepperHandle';
import * as React from 'react';
/**
 * Represents the [knoReact Stepper component](components/layout/stepper).
 *
 * @example
 * ```jsx
 * const steps = [
 *    { label: 'Step 1' },
 *    { label: 'Step 2' },
 *    { label: 'Step 3', optional: true }
 * ];
 *
 * const App = () => {
 *   return (
 *       <Stepper items={steps} value={1} />
 *   );
 * };
 * ```
 */
export declare const Stepper: React.ForwardRefExoticComponent<StepperProps & React.RefAttributes<StepperHandle | null>>;
