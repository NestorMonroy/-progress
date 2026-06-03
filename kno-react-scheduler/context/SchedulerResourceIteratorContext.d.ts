/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as React from 'react';
/**
 * @hidden
 */
export type SchedulerResourceIteratorContextType = {
    resource: any;
    groupIndex: number;
};
/**
 * @hidden
 */
export declare const SchedulerResourceIteratorContext: React.Context<SchedulerResourceIteratorContextType>;
/**
 * @hidden
 */
export declare const useSchedulerResourceIteratorContext: () => SchedulerResourceIteratorContextType;
