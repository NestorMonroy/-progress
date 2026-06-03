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
export interface CollectionConfigurationProps {
    _mapKey: string;
    _parentStore?: any;
    [x: string]: any;
}
/**
 * @hidden
 */
export default class CollectionConfigurationComponent extends React.Component<CollectionConfigurationProps> {
    static contextType: React.Context<import('../../MapContext').MapContextType | null>;
    context: React.ContextType<typeof MapContext>;
    get optionsStore(): import('../../store/store').Store | undefined;
    renderChildren(child: any, index: number): React.DetailedReactHTMLElement<any, HTMLElement>;
    render(): any;
}
