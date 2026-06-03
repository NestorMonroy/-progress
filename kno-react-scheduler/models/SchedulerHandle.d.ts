/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { SchedulerProps } from '../Scheduler.js';
/**
 * Represents the Object which is passed to the [`ref`](https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom) callback of the Scheduler component.
 */
export interface SchedulerHandle {
    /**
     * The props of the Scheduler component.
     */
    props: SchedulerProps;
    /**
     * The HTML element of the Scheduler component.
     */
    element: HTMLDivElement | null;
}
