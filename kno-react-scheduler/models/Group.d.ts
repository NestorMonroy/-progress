/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { SchedulerResource } from './SchedulerResource';
/**
 * Represents the Scheduler `Group` object, calculated based on the [group](components/scheduler/api/schedulerprops#toc-group) and [resources](components/scheduler/api/schedulerprops#toc-resources)
 */
export interface Group {
    /**
     * The index of the group.
     */
    index: number;
    /**
     * The array of resources that belong to this group.
     */
    resources: SchedulerResource[];
}
