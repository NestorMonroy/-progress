/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { StepHandle } from './interfaces/StepHandle';
import { StepProps } from './interfaces/StepProps';
import * as React from 'react';
/**
 * Represents the [knoReact Step component](components/layout/stepper).
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
 *       <Stepper items={steps} value={1}/>
 *   );
 * };
 * ```
 */
export declare const Step: React.ForwardRefExoticComponent<Omit<StepProps, "ref"> & React.RefAttributes<StepHandle | null>>;
