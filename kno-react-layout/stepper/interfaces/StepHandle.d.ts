/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
/**
 * The Step ref.
 */
export interface StepHandle {
    /**
     * The Step element.
     */
    element: HTMLLIElement | null;
    /**
     * Focus the Step.
     */
    focus: () => void;
}
