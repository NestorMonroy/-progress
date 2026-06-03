/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { LinearGaugeProps } from './LinearGaugeProps';
import { Surface, Group } from '@progress/kno-drawing';
import * as React from 'react';
export declare class LinearGauge extends React.Component<LinearGaugeProps, {}> {
    private _baseGauge;
    /**
     * @hidden
     */
    get gaugeInstance(): any;
    /**
     * The Drawing `Surface` of the Gauge.
     */
    get surface(): Surface | null;
    /**
     * The DOM element of the Gauge.
     */
    get element(): HTMLDivElement | null;
    /**
     * @hidden
     */
    render(): any;
    /**
     * Exports a Gauge component as a Drawing `Scene`.
     *
     * @param {any} options - The parameters for the export operation.
     * @returns {Promise<Group>} - A promise that returns the root `Group` of the scene.
     */
    exportVisual(options?: any): Promise<Group>;
    private getTarget;
    private deriveOptionsFromParent;
}
