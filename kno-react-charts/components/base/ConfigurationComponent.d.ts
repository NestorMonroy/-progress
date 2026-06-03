/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { ChartContext } from '../../ChartContext.js';
import * as React from 'react';
/**
 * @hidden
 */
export interface ConfigurationComponentProps {
    _chartKey?: string;
    _chartCollectionIdxKey?: string;
    _parentStore?: any;
    [x: string]: any;
}
/**
 * @hidden
 */
export declare class ConfigurationComponent extends React.Component<ConfigurationComponentProps> {
    static contextType: React.Context<import('../../ChartContext').ChartContextType | null>;
    context: React.ContextType<typeof ChartContext>;
    childStore: any;
    get optionsStore(): import('./../../store/store').Store | undefined;
    constructor(props: any);
    render(): any;
    componentDidMount(): void;
    componentDidUpdate(): void;
    private dispatch;
    private renderChildren;
}
