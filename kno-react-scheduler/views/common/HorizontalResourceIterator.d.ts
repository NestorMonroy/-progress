/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { SchedulerResource, SchedulerGroup } from '../../models/index.js';
import * as React from 'react';
/** @hidden */
export interface HorizontalResourceIteratorProps {
    group?: SchedulerGroup;
    resources?: SchedulerResource[];
    nested?: boolean;
    children: React.ReactNode;
    rowContent?: React.ComponentType<any>;
    childRowContent?: React.ComponentType<any>;
    rowContentProps?: any;
}
/** @hidden */
export interface RenderResourcesArgs {
    resources: any[];
    nested: boolean;
    children: React.ReactNode;
    groupIndex: number;
    rowContent: React.ComponentType<any>;
    childRowContent: React.ComponentType<any>;
    rowContentProps?: React.ComponentType<any>;
}
/** @hidden */
export declare const HorizontalResourceIterator: React.FunctionComponent<HorizontalResourceIteratorProps>;
/** @hidden */
export declare const DefaultRowContent: (props: any) => any;
