/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { Align, Offset } from '@progress/kno-react-popup';
import { InstanceObserver } from '@progress/kno-charts';
import { MarkerTooltipContext } from './MarkerTooltipContext';
import { ShapeTooltipContext } from './ShapeTooltipContext';
import { BubbleTooltipContext } from './BubbleTooltipContext';
import { MapContext } from '../MapContext.js';
import * as React from 'react';
type TooltipContext = MarkerTooltipContext | ShapeTooltipContext | BubbleTooltipContext;
/**
 * @hidden
 */
export interface MapTooltipState {
    className?: string | undefined;
    popupShown: boolean;
    popupAlign?: Align;
    popupOffset?: Offset;
    popupStyles?: any;
    popupContext?: TooltipContext;
    shared?: boolean;
}
/**
 * @hidden
 */
export declare class MapTooltip extends React.Component<{}, MapTooltipState> {
    static contextType: React.Context<import('../MapContext').MapContextType | null>;
    context: React.ContextType<typeof MapContext>;
    readonly state: MapTooltipState;
    mapObserver?: InstanceObserver;
    componentDidMount(): void;
    render(): React.JSX.Element | null;
    componentWillUnmount(): void;
    onShowTooltip(e: any): void;
    onHideTooltip(): void;
    createTooltipContext(e: any): TooltipContext;
    findRenderFunctionByLayer(layerIndex: number): any;
}
export {};
