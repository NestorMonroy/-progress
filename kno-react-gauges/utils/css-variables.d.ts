/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
/**
 * Utility functions for resolving CSS custom properties (variables) in gauge colors
 */
/**
 * Checks if a color string is a CSS custom property (variable)
 *
 * @param color - The color string to check
 * @returns True if the color is a CSS variable, false otherwise
 * @hidden
 */
export declare const isCssVariable: (color: string) => boolean;
/**
 * Resolves a CSS custom property to its computed value
 *
 * @param color - The CSS custom property to resolve
 * @param element - The DOM element to use for context (defaults to document.documentElement)
 * @returns The resolved color value or the original color if it can't be resolved
 * @hidden
 */
export declare const resolveCssVariable: (color: string, element?: HTMLElement) => string;
/**
 * Resolves CSS custom properties in a ColorRange object
 *
 * @param colorRange - The ColorRange object that may contain CSS variables
 * @param element - The DOM element to use for context
 * @returns A new ColorRange object with resolved colors
 * @hidden
 */
export declare const resolveColorRangeVariables: (colorRange: any, element?: HTMLElement) => any;
/**
 * Resolves CSS custom properties in an array of ColorRange objects
 *
 * @param colors - Array of ColorRange objects that may contain CSS variables
 * @param element - The DOM element to use for context
 * @returns A new array with resolved colors
 * @hidden
 */
export declare const resolveColorsArray: (colors: any[], element?: HTMLElement) => any[];
/**
 * Resolves CSS custom properties in a pointer object (LinearPointer or RadialPointer)
 *
 * @param pointer - The pointer object that may contain CSS variables
 * @param element - The DOM element to use for context
 * @returns A new pointer object with resolved colors
 * @hidden
 */
export declare const resolvePointerVariables: (pointer: any, element?: HTMLElement) => any;
/**
 * Resolves CSS custom properties in pointer configuration (single pointer or array of pointers)
 *
 * @param pointer - The pointer configuration that may contain CSS variables
 * @param element - The DOM element to use for context
 * @returns A new pointer configuration with resolved colors
 * @hidden
 */
export declare const resolvePointerColorsVariables: (pointer: any, element?: HTMLElement) => any;
/**
 * Resolves CSS custom properties in gauge options
 *
 * @param options - The gauge options object that may contain CSS variables in colors
 * @param element - The DOM element to use for context
 * @returns A new options object with resolved colors
 * @hidden
 */
export declare const resolveGaugeColorsVariables: (options: any, element?: HTMLElement) => any;
