/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { PanelBarProps } from '../index.js';
import * as React from 'react';
/**
 * @hidden
 */
export interface PanelBarState {
    focused?: string;
    wrapperFocused?: boolean;
    selected?: string;
    expanded: string[];
}
/**
 * Represents the [knoReact PanelBar component](components/layout/panelbar).
 *
 * @remarks
 * Supported children components are: {@link PanelBarItem}.
 */
export declare const PanelBar: React.FC<PanelBarProps> & {
    propTypes?: any;
    defaultProps?: Partial<PanelBarProps>;
};
