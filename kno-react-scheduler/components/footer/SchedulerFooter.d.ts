/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { ToolbarProps } from '@progress/kno-react-buttons';
import * as React from 'react';
/**
 * Represents the props of the knoReact [SchedulerFooter](components/scheduler/api/schedulerfooter) component.
 */
export interface SchedulerFooterProps extends ToolbarProps {
    /**
     * The content of the footer component.
     */
    children?: React.ReactNode;
}
/**
 * Represents the object which is returned from the `ref` callback of the [SchedulerFooter](components/scheduler/api/schedulerfooter).
 *
 * For more information about Refs, refer to the [React Refs & Dom](https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom) article.
 */
export interface SchedulerFooterHandle {
    /**
     * The HTML element of the SchedulerFooter component.
     */
    element: HTMLDivElement | null;
    /**
     * The props of the SchedulerFooter component.
     */
    props: SchedulerFooterProps;
}
/**
 * Represents the default `footer` component rendered by the [knoReact Scheduler component](components/scheduler).
 */
export declare const SchedulerFooter: React.ForwardRefExoticComponent<SchedulerFooterProps & React.RefAttributes<SchedulerFooterHandle>>;
