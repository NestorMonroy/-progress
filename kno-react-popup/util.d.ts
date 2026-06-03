/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { OffsetPosition } from '@progress/kno-popup-common';
/**
 * @hidden
 */
export declare const isDifferentOffset: (oldOffset: OffsetPosition, newOffset: OffsetPosition) => boolean;
/**
 * @hidden
 */
export declare const hasBoundingRect: (elem: HTMLElement) => boolean;
/**
 * @hidden
 */
export declare const FRAME_DURATION: number;
/**
 * @hidden
 */
export declare const throttle: (func: Function, wait: number, options?: any) => () => any;
