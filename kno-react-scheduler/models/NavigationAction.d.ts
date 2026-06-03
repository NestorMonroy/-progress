/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
/**
 * An action which indicates that the current view will switch to the next period
 * ([more information and examples](components/scheduler/customization/header-footer)).
 *
 * ```ts-no-run
 * const action = {
 *  type: 'next'
 * }
 * ```
 */
/** @hidden */
export interface Next {
    /** @hidden */
    type: 'next';
}
/**
 * An action which indicates that the current view will switch to the previous period
 * ([more information](components/scheduler/navigation)).
 *
 * ```ts-no-run
 * const action = {
 *  type: 'prev'
 * }
 * ```
 */
/** @hidden */
export interface Prev {
    /** @hidden */
    type: 'prev';
}
/**
 * An action which indicates that the current view will switch to today's date
 * ([more information](components/scheduler/navigation)).
 *
 * ```ts-no-run
 * const action = {
 *  type: 'today'
 * }
 * ```
 */
/** @hidden */
export interface Today {
    /** @hidden */
    type: 'today';
}
/**
 * A discriminated union of supported navigation actions
 * ([more information and examples](components/scheduler/customization/header-footer)).
 *
 * The available types are:
 * * [`Next`](components/scheduler/navigation)
 * * [`Prev`](components/scheduler/navigation)
 * * [`SelectDate`](components/scheduler/date-selection)
 * * [`Today`](components/scheduler/navigation)
 * * [`ViewChange`](components/scheduler/api/schedulerviewchangeevent)
 */
/** @hidden */
export type NavigationAction = Next | Prev | Today;
