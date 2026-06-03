/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { ColorPaletteProps } from './interfaces/ColorPaletteProps';
import { ColorPaletteHandle } from './interfaces/ColorPaletteHandle';
import * as React from 'react';
/**
 * @hidden
 */
export declare const DEFAULT_TILE_SIZE = 24;
/**
 * @hidden
 */
export declare const DEFAULT_COLUMNS_COUNT = 10;
/**
 * @hidden
 */
export declare const DEFAULT_PRESET = "office";
/**
 * The default props of the ColorPalette component.
 *
 * @hidden
 */
export declare const defaultColorPaletteProps: {
    palette: string;
    columns: number;
    tileSize: number;
};
/**
 * @hidden
 *
 * @deprecated This interface is no longer used in the functional implementation but maintained for backward compatibility
 */
export interface ColorPaletteState {
    selectedColor?: string;
    focusedColor?: string;
    isFirstRender: boolean;
}
/**
 * Represents the PropsContext of the `ColorPalette` component.
 * Used for global configuration of all `ColorPalette` instances.
 *
 * For more information, refer to the [Inputs Props Context](components/inputs/props-context) article.
 */
export declare const ColorPalettePropsContext: React.Context<(p: ColorPaletteProps) => ColorPaletteProps>;
/**
 * Represents the [knoReact ColorPalette component](components/inputs/colorpalette) (Functional Implementation).
 *
 * Accepts properties of type [ColorPaletteProps](components/inputs/api/colorpaletteprops).
 * Obtaining the `ref` returns an object of type [ColorPaletteHandle](components/inputs/api/colorpalettehandle).
 *
 * ```jsx
 * const App = () => {
 *     return <ColorPalette palette='basic' />;
 * }
 * ```
 */
export declare const ColorPalette: React.ForwardRefExoticComponent<ColorPaletteProps & React.RefAttributes<any>>;
/**
 * ColorPalette component without context (for backward compatibility).
 *
 * @hidden
 */
export declare const ColorPaletteWithoutContext: React.ForwardRefExoticComponent<ColorPaletteProps & React.RefAttributes<ColorPaletteHandle>>;
