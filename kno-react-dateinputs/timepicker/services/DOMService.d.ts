/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { DateInputsClassStructure } from '@progress/kno-react-common';
/**
 * @hidden
 */
export declare class DOMService {
    itemHeight: number;
    timeListHeight: number;
    didCalculate: boolean;
    ensureHeights(): void;
    calculateHeights(container?: HTMLElement, unstyled?: DateInputsClassStructure): void;
}
