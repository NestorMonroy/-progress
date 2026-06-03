/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { SpreadsheetWidget } from '../SpreadsheetProps';
import { ColorPickerProps } from '@progress/kno-react-inputs';
import { SVGIcon } from '@progress/kno-react-common';
import * as React from 'react';
/**
 * @hidden
 */
export declare const FONT_FAMILIES: string[];
/**
 * @hidden
 */
export declare const DEFAULT_FONT_FAMILY = "Arial";
/**
 * @hidden
 */
export declare const FONT_SIZES: number[];
/**
 * @hidden
 */
export declare const DEFAULT_FONT_SIZE = 12;
/**
 * @hidden
 */
export declare const FORMATS: ({
    text: string;
    value: null;
} | {
    text: string;
    value: string;
})[];
/**
 * The base props interface of the Spreadsheet tool component.
 */
export interface SpreadsheetToolProps {
    /**
     * The `React.RefObject` object of the SpreadsheetWidget, holding the core functionality of the Spreadsheet.
     */
    spreadsheetRef: React.RefObject<SpreadsheetWidget | null>;
}
/**
 * @hidden
 */
export interface PropertyChangeToolProps extends SpreadsheetToolProps {
    /**
     * The selected state of the tool.
     */
    value?: boolean;
}
/**
 * @hidden
 */
export interface DropDownToolProps extends SpreadsheetToolProps {
    /**
     * The value of the tool.
     */
    value?: any;
}
/**
 * @hidden
 */
export declare const PropertyChangeTool: <Props extends PropertyChangeToolProps>(settings: {
    property: string;
    icon: string;
    svgIcon: SVGIcon;
    titleKey: string;
}) => React.FunctionComponent<Props>;
/**
 * @hidden
 */
export interface ColorToolProps extends SpreadsheetToolProps {
    /**
     * The value of the tool.
     */
    value?: string;
}
/**
 * @hidden
 */
export declare const ColorTool: <Props extends ColorToolProps>(settings: ColorPickerProps & {
    property: string;
    titleKey: string;
}) => React.FunctionComponent<Props>;
/**
 * @hidden
 */
export declare const UndoRedo: <Props extends SpreadsheetToolProps>(settings: {
    action: string;
    icon: string;
    svgIcon: SVGIcon;
    titleKey: string;
}) => React.FunctionComponent<Props>;
