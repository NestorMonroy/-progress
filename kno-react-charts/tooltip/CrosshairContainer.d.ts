/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { CrosshairTooltipProps } from './Crosshair.js';
import { ChartContext } from '../ChartContext.js';
import * as React from 'react';
/**
 * @hidden
 */
export interface Tooltips {
    [key: string]: CrosshairTooltipProps;
}
/**
 * @hidden
 */
export interface CrosshairTooltipContainerState {
    tooltips: Tooltips;
}
/**
 * @hidden
 */
export declare class CrosshairTooltipContainer extends React.Component<{}, CrosshairTooltipContainerState> {
    static contextType: React.Context<import('../ChartContext').ChartContextType | null>;
    context: React.ContextType<typeof ChartContext>;
    readonly state: CrosshairTooltipContainerState;
    private storeUnsubscriber;
    componentDidMount(): void;
    render(): React.JSX.Element;
    componentWillUnmount(): void;
    subscriber: () => void;
}
