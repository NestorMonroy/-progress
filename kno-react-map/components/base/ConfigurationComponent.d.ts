/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { MapContext } from '../../MapContext.js';
import * as React from 'react';
/**
 * @hidden
 */
export interface ConfigurationComponentProps {
    _mapKey?: string;
    _mapCollectionIdxKey?: string;
    _parentStore?: any;
    [x: string]: any;
}
/**
 * @hidden
 */
export default class ConfigurationComponent extends React.Component<ConfigurationComponentProps> {
    static contextType: React.Context<import('../../MapContext').MapContextType | null>;
    context: React.ContextType<typeof MapContext>;
    childStore: any;
    get optionsStore(): import('./../../store/store').Store | undefined;
    constructor(props: any);
    render(): any;
    componentDidMount(): void;
    componentDidUpdate(): void;
    private dispatch;
    private renderChildren;
}
