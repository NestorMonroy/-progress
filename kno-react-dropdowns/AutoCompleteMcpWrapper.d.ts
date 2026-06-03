/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { AutoCompleteHandle } from './AutoComplete/AutoComplete.js';
import { AutoCompleteProps } from './AutoComplete/AutoCompleteProps';
/**
 * AutoComplete wrapper that integrates the Web MCP hook.
 *
 * @hidden
 */
import * as React from 'react';
/** @hidden */
export declare const AutoCompleteWrapper: React.ForwardRefExoticComponent<AutoCompleteProps & React.RefAttributes<AutoCompleteHandle>>;
