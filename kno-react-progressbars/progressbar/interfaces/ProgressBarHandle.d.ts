/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
/**
 * The ProgressBar ref.
 */
export interface ProgressBarHandle {
    /**
     * The ProgressBar element.
     */
    element: HTMLDivElement | null;
    /**
     * The progress status element.
     */
    progressStatusElement: HTMLDivElement | null;
    /**
     * The progress status wrap element.
     */
    progressStatusWrapElement: HTMLSpanElement | null;
    /**
     * Focus the ProgressBar.
     */
    focus: () => void;
}
