/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { ComboBoxHandle } from './ComboBox/ComboBox.js';
import { ComboBoxProps } from './ComboBox/ComboBoxProps';
/**
 * ComboBox wrapper that integrates the Web MCP hook.
 *
 * @hidden
 */
import * as React from 'react';
/** @hidden */
export declare const ComboBoxWrapper: React.ForwardRefExoticComponent<ComboBoxProps & React.RefAttributes<ComboBoxHandle>>;
