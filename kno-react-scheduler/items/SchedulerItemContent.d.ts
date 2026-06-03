/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as React from 'react';
/**
 * Represents the props of the [SchedulerItemContent](components/scheduler/api/scheduleritemcontent) component.
 * Extends the [native `div` props`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDivElement).
 */
export interface SchedulerItemContentProps extends React.HTMLAttributes<HTMLDivElement> {
}
/**
 * A component which applies the necessary `className` for correct styling of child elements inside the [SchedulerItem](components/scheduler/api/scheduleritem)
 */
export declare const SchedulerItemContent: React.ForwardRefExoticComponent<SchedulerItemContentProps & React.RefAttributes<HTMLDivElement>>;
