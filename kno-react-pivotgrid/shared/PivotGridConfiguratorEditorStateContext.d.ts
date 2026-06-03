/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { PivotGridConfiguratorAction, PivotGridConfiguratorEditorState } from '../hooks/usePivotConfiguratorEditor.js';
import * as React from 'react';
/**
 * @hidden
 */
export declare const PivotGridConfiguratorEditorStateContext: React.Context<[PivotGridConfiguratorEditorState, (action: PivotGridConfiguratorAction, event?: React.SyntheticEvent) => void]>;
