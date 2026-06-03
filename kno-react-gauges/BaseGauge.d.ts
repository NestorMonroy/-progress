/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { default as PropTypes } from 'prop-types';
import { Surface } from '@progress/kno-drawing';
import { BaseGaugePrivateProps } from './BaseGaugeProps';
import { GaugeContextType } from './GaugeContext.js';
import * as React from 'react';
/**
 * @hidden
 */
export declare class BaseGauge extends React.Component<BaseGaugePrivateProps, {}> {
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
    gaugeInstance: any | null;
    /**
     * @hidden
     */
    surface: Surface | null;
    /**
     * @hidden
     */
    get element(): HTMLDivElement;
    protected _element: HTMLDivElement | null;
    protected themeStore: any;
    protected themeUnsubscriber: Function;
    protected contextValue: GaugeContextType;
    protected observersStore: any;
    private readonly showLicenseWatermark;
    private readonly licenseMessage?;
    constructor(props: BaseGaugePrivateProps);
    /**
     * @hidden
     */
    componentDidMount(): void;
    /**
     * @hidden
     */
    componentDidUpdate(prevProps: any): void;
    /**
     * @hidden
     */
    componentWillUnmount(): void;
    /**
     * @hidden
     */
    render(): any;
    /**
     * @hidden
     */
    instantiateCoreGauge(): void;
    /**
     * @hidden
     */
    refresh(): void;
    /**
     * @hidden
     */
    refreshValue(value: number): void;
    /**
     * @hidden
     */
    refreshAllValues(values: Array<number>): void;
    /**
     * @hidden
     */
    getDirection(dir?: string): boolean;
    /**
     * @hidden
     */
    getGaugeOptions(): any;
    /**
     * @hidden
     */
    trigger(name: string, e: any): void;
    /**
     * @hidden
     */
    onWindowResize: () => void;
}
