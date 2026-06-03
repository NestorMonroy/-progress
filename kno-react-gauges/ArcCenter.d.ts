/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { InstanceObserver } from '@progress/kno-charts';
import { GaugeContext } from './GaugeContext.js';
import * as React from 'react';
export interface ArcCenterStyle {
    /**
     * The horizontal position of the arc center in pixels.
     */
    left: number;
    /**
     * The vertical position of the arc center in pixels.
     */
    top: number;
}
export interface ArcCenterValue {
    /**
     * The numeric value displayed in the arc center.
     */
    value: number;
    /**
     * The color of the text value. Accepts valid CSS color strings, including hex and rgb.
     */
    color: string;
}
/**
 * @hidden
 */
export interface ArcCenterState {
    arcCenterStyles: ArcCenterStyle | null;
    arcCenterValue: ArcCenterValue;
}
/**
 * @hidden
 */
export interface ArcCenterProps {
    render?: (value: number, color: string) => React.ReactNode;
}
/**
 * @hidden
 */
declare class ArcCenter extends React.Component<ArcCenterProps, ArcCenterState> {
    static contextType: React.Context<import('./GaugeContext').GaugeContextType | null>;
    context: React.ContextType<typeof GaugeContext>;
    readonly state: ArcCenterState;
    gaugeObserver: InstanceObserver;
    protected _element: HTMLDivElement | null;
    constructor(props: ArcCenterProps);
    componentDidMount(): void;
    render(): any;
    onRender(e: any): void;
}
export { ArcCenter };
