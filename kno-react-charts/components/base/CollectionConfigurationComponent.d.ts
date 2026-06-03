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
export interface CollectionConfigurationProps {
    _chartKey: string;
    _parentStore?: any;
    [x: string]: any;
}
/**
 * @hidden
 */
export declare class CollectionConfigurationComponent extends React.Component<CollectionConfigurationProps> {
    static contextType: React.Context<import('../../ChartContext').ChartContextType | null>;
    context: React.ContextType<typeof ChartContext>;
    get optionsStore(): import('../../store/store').Store | undefined;
    renderChildren(child: any, index: number): React.DetailedReactHTMLElement<any, HTMLElement>;
    render(): any;
}
