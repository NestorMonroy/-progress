/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
/**
 * The Stepper ref.
 */
export interface StepperHandle {
    /**
     * The Stepper element.
     */
    element: HTMLMenuElement | null;
    /**
     * Focus the Stepper's first focusable child.
     */
    focus: () => void;
}
