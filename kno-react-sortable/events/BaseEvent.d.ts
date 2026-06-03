/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
/**
 * @hidden
 */
export interface BaseEvent<T extends React.Component> {
    /**
     * An event target.
     */
    target: T;
}
