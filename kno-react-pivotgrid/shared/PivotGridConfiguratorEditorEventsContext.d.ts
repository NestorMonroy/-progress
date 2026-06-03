/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { PivotGridAxisFilterFieldsExpandChangeEvent, PivotGridAxisFilterFieldExpandEvent } from '../components/AxisFilterFieldsEditor.js';
import * as React from 'react';
/**
 * @hidden
 */
export interface PivotGridConfiguratorEditorEventsContextType {
    onAxisFilterFieldsExpandChange?: (event: PivotGridAxisFilterFieldsExpandChangeEvent) => void;
    onAxisFilterFieldExpand?: (event: PivotGridAxisFilterFieldExpandEvent) => void;
}
/**
 * @hidden
 */
export declare const PivotGridConfiguratorEditorEventsContext: React.Context<PivotGridConfiguratorEditorEventsContextType>;
