/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { Align, Offset } from '@progress/kno-react-popup';
import { InstanceObserver } from '@progress/kno-charts';
import { SharedTooltipContext, TooltipContext } from './Context';
import { ChartContext } from '../ChartContext.js';
import * as React from 'react';
/**
 * @hidden
 */
export interface SeriesTooltipState {
    className?: string | undefined;
    popupShown: boolean;
    popupAlign?: Align;
    popupOffset?: Offset;
    popupStyles?: any;
    popupContext?: TooltipContext | SharedTooltipContext;
    shared?: boolean;
}
/**
 * @hidden
 */
export declare class SeriesTooltip extends React.Component<{}, SeriesTooltipState> {
    static contextType: React.Context<import('../ChartContext').ChartContextType | null>;
    context: React.ContextType<typeof ChartContext>;
    readonly state: SeriesTooltipState;
    chartObserver: InstanceObserver | null;
    componentDidMount(): void;
    render(): React.JSX.Element;
    componentWillUnmount(): void;
    onShowTooltip(e: any): void;
    onHideTooltip(): void;
    createSharedTooltipContext(e: any): SharedTooltipContext;
    createTooltipContext(e: any): TooltipContext;
    findRenderFunctionByIndex(seriesIdx: number): any;
    findRenderFunction(): any;
}
