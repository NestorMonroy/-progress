/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { InstanceObserver } from '@progress/kno-charts';
import { Align, Offset } from '@progress/kno-react-popup';
import { ChartContext } from '../ChartContext.js';
import * as React from 'react';
/**
 * @hidden
 */
export interface CrosshairTooltipProps {
    index: number;
    name: string;
}
/**
 * @hidden
 */
export interface CrosshairTooltipState {
    className?: string | undefined;
    popupShown: boolean;
    popupAlign?: Align;
    popupOffset?: Offset;
    popupStyles?: any;
    popupContend?: any;
}
/**
 * @hidden
 */
export declare class CrosshairTooltip extends React.Component<CrosshairTooltipProps, CrosshairTooltipState> {
    static contextType: React.Context<import('../ChartContext').ChartContextType | null>;
    context: React.ContextType<typeof ChartContext>;
    readonly state: CrosshairTooltipState;
    chartObserver: InstanceObserver;
    constructor(props: any);
    componentDidMount(): void;
    render(): React.JSX.Element;
    componentWillUnmount(): void;
    onShowTooltip(e: any): void;
    onHideTooltip(): void;
}
