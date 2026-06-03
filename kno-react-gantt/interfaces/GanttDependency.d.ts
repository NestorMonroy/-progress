/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { DependencyType } from './DependencyType.js';
/**
 * Represents an instance of a Gantt dependency.
 */
export interface GanttDependency {
    /**
     * The `id` of the origin task of this dependency.
     */
    fromId: string | number;
    /**
     * The unique identifier of the dependency.
     */
    id: string | number;
    /**
     * @hidden
     */
    uid?: string | number;
    /**
     * The `id` of the destination task of this dependency.
     */
    toId: string | number;
    /**
     * The type of the dependency.
     */
    type: DependencyType;
}
