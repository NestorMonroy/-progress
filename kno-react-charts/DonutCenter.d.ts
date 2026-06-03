/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { InstanceObserver } from '@progress/kno-charts';
import { ChartContext } from './ChartContext.js';
import * as React from 'react';
/**
 * @hidden
 */
export interface DonutCenterStyle {
    height: number;
    left: number;
    top: number;
    width: number;
}
/**
 * @hidden
 */
export interface DonutCenterProps {
    render?: () => React.ReactElement<any, any>;
}
/**
 * @hidden
 */
export interface DonutCenterState {
    donutCenterStyles: DonutCenterStyle | null;
}
/**
 * @hidden
 */
declare class DonutCenter extends React.Component<DonutCenterProps, DonutCenterState> {
    static contextType: React.Context<import('./ChartContext').ChartContextType | null>;
    context: React.ContextType<typeof ChartContext>;
    readonly state: DonutCenterState;
    chartObserver: InstanceObserver;
    constructor(props: DonutCenterProps);
    componentDidMount(): void;
    render(): any;
    onRender(event: any): void;
}
export { DonutCenter };
