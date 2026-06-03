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
export interface VerticalResourceIteratorProps {
    group?: SchedulerGroup;
    resources?: SchedulerResource[];
    nested?: boolean;
    wrapGroup?: boolean;
    children?: React.ReactNode;
    cellContent?: React.ReactNode;
}
/** @hidden */
export interface RenderResourcesArgs {
    resources: any[];
    children: React.ReactNode;
    cellContent: React.ReactNode;
    depth: number;
    groupIndex: number;
}
/** @hidden */
export declare const VerticalResourceIterator: React.FunctionComponent<VerticalResourceIteratorProps>;
