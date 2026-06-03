/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
/**
 * The dependency type when two tasks are connected.
 *
 * The supported values are:
 * * `FF`&mdash;from 'finish' to 'finish'
 * * `FS`&mdash;from 'finish' to 'start'
 * * `SS`&mdash;from 'start' to 'start'
 * * `SF`&mdash;from 'start' to 'finish'
 */
export declare enum DependencyType {
    FF = 0,
    FS = 1,
    SF = 2,
    SS = 3
}
