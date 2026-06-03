/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { Item, SchedulerTaskMouseEvent, EditableProp } from '../models/index.js';
import * as React from 'react';
/**
 * Represents the props of the knoReact [SchedulerTask](components/scheduler/api/schedulertask) component.
 */
export interface SchedulerTaskProps extends Item {
    /** @hidden */
    _ref: React.RefObject<SchedulerTaskHandle | null>;
    /**
     * Specifies the `id` of the wrapping element of the SchedulerTask.
     */
    id?: string;
    /**
     * Specifies the `tabIndex` attribute of the wrapping element of the SchedulerTask.
     *
     * @remarks
     * This property is related to accessibility.
     */
    tabIndex?: number | null;
    /**
     * Specifies the `className` attribute of the wrapping element of the SchedulerTask.
     *
     * The SchedulerSlot applies the following default className:
     * - `k-task`
     */
    className?: string;
    /**
     * Specifies the `style` object of the wrapping element of the SchedulerTask.
     */
    style?: React.CSSProperties;
    /**
     * Specifies the `children` of the SchedulerTask.
     *
     * Setting this property will override the default elements rendered by the SchedulerTask.
     */
    children?: React.ReactNode;
    /**
     * Overrides the `editable` prop of the `Scheduler` and the active view.
     */
    editable?: EditableProp | boolean;
    /**
     * Fires when you click the `delete` icon.
     *
     * The `delete` icon renders only when `props.editable` or `props.editable.remove` is `true`.
     */
    onRemoveClick?: (event: SchedulerTaskMouseEvent) => void;
}
/**
 * Represents the props of the knoReact [SchedulerTask](components/scheduler/api/schedulertask) component.
 */
export interface SchedulerTaskHandle {
    /**
     * The HTML element of the SchedulerTask component.
     */
    element: HTMLDivElement | null;
    /**
     * The props of the SchedulerTask component.
     */
    props: SchedulerTaskProps;
}
/**
 * Represents the default `task` component rendered by the [knoReact Scheduler component](components/scheduler).
 *
 * The SchedulerTask is the default representation of an event inside the [`AgendaView`](components/scheduler/views/agenda).
 */
export declare const SchedulerTask: React.ForwardRefExoticComponent<SchedulerTaskProps & React.RefAttributes<SchedulerTaskHandle>>;
