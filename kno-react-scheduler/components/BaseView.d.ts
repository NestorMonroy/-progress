/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { Range, SchedulerViewProps } from '../models/index.js';
import * as React from 'react';
/**
 * @hidden
 */
export interface BaseViewProps {
    props: SchedulerViewProps;
    slots: any[];
    ranges: Range[];
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}
/**
 * @hidden
 */
export declare const BaseView: React.ForwardRefExoticComponent<BaseViewProps & React.RefAttributes<HTMLDivElement | null>>;
