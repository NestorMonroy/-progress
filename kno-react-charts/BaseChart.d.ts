/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { default as PropTypes } from 'prop-types';
import { Surface } from '@progress/kno-drawing';
import { InstanceObserver } from '@progress/kno-charts';
import { DomEvent } from './events/dom-event.js';
import { BaseChartPrivateProps } from './BaseChartProps';
import { ChartContextType } from './ChartContext.js';
import * as React from 'react';
/**
 * @hidden
 */
export declare class BaseChart extends React.Component<BaseChartPrivateProps, {}> {
    /**
     * @hidden
     */
    static propTypes: {
        dir: PropTypes.Requireable<string>;
        renderAs: PropTypes.Requireable<string>;
    };
    /**
     * @hidden
     */
    static defaultProps: {
        renderAs: string;
    };
    /**
     * @hidden
     */
    chartInstance: any | null;
    /**
     * @hidden
     */
    surface: Surface | null;
    /**
     * @hidden
     */
    get element(): HTMLDivElement;
    protected _element: HTMLDivElement | null;
    protected optionsStore: any;
    protected optionsUnsubscriber: Function;
    protected themeStore: any;
    protected themeUnsubscriber: Function;
    protected observersStore: any;
    protected chartObserver: InstanceObserver;
    protected childrenObserver: InstanceObserver;
    protected suppressTransitions: boolean;
    private readonly showLicenseWatermark;
    private readonly licenseMessage?;
    readonly state: ChartContextType;
    constructor(props: BaseChartPrivateProps);
    /**
     * @hidden
     */
    static getDerivedStateFromProps(props: any, state: any): any;
    /**
     * @hidden
     */
    componentDidMount(): void;
    /**
     * @hidden
     */
    componentWillUnmount(): void;
    /**
     * @hidden
     */
    componentDidUpdate(prevProps: BaseChartPrivateProps): void;
    /**
     * @hidden
     */
    render(): any;
    /**
     * @hidden
     */
    getDirection(dir?: string): boolean;
    /**
     * @hidden
     */
    getChartOptions(): any;
    /**
     * @hidden
     */
    refresh(): void;
    /**
     * @hidden
     */
    instantiateCoreChart(): void;
    /**
     * @hidden
     */
    trigger(name: string, e: any): boolean;
    /**
     * @hidden
     */
    requiresHandlers(names: string[]): boolean;
    /**
     * @hidden
     */
    triggerDomEvent<T>(name: string, e: DomEvent<T>): boolean;
    /**
     * @hidden
     */
    onRender: (e: any) => void;
    /**
     * @hidden
     */
    onDrilldown: (e: any) => boolean;
    /**
     * @hidden
     */
    onLegendItemClick: (e: any) => void;
    /**
     * @hidden
     */
    onStyleChanged(): void;
    /**
     * @hidden
     */
    readTheme(): void;
    /**
     * @hidden
     */
    onWindowResize: () => void;
    /**
     * @hidden
     */
    onChartMouseLeave: (e: React.MouseEvent<HTMLDivElement>) => void;
    /**
     * @hidden
     */
    onChildMouseLeave: (e: DomEvent<React.MouseEvent<HTMLElement>>) => boolean;
}
